<#
  Mizoye - Windows Server (IIS) dagitim betigi

  Ilk kurulum (sunucuda, YONETICI PowerShell):
    git clone https://github.com/huseyingedek/mizoye-web.git C:\mizoye-web
    cd C:\mizoye-web
    powershell -ExecutionPolicy Bypass -File .\deploy\deploy-iis.ps1

  Guncelleme: ayni son komutu tekrar calistir (git pull + build + kopyalama).
  Alan adi farkliysa:  ... -File .\deploy\deploy-iis.ps1 -HostNames "ornek.com","www.ornek.com"
#>
param(
  [string]  $SiteName  = "mizoye",
  [string]  $WebRoot   = "C:\inetpub\mizoye",
  [string[]]$HostNames = @("mizoye.com", "www.mizoye.com")
)

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

foreach ($cmd in "git", "npm.cmd") {
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    throw "$cmd bulunamadı. Git ve Node.js (LTS) kurulu olmalı; kurduktan sonra PowerShell'i kapatıp yeniden aç."
  }
}
if (-not (Get-Module -ListAvailable WebAdministration)) {
  throw "IIS kurulu değil. Önce şunu çalıştır:  Install-WindowsFeature Web-Server -IncludeManagementTools"
}

Write-Host "==> GitHub'dan son sürüm çekiliyor" -ForegroundColor Cyan
git pull --ff-only
if ($LASTEXITCODE -ne 0) { throw "git pull başarısız" }

Write-Host "==> Bağımlılıklar yükleniyor (npm ci)" -ForegroundColor Cyan
npm.cmd ci --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { throw "npm ci başarısız" }

Write-Host "==> Derleniyor (out/ klasörü üretilecek)" -ForegroundColor Cyan
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "build başarısız" }

Write-Host "==> Dosyalar $WebRoot içine kopyalanıyor" -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $WebRoot | Out-Null
robocopy (Join-Path $repo "out") $WebRoot /MIR /R:2 /W:2 /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy hata kodu: $LASTEXITCODE" }

Import-Module WebAdministration
if (-not (Get-Website | Where-Object { $_.Name -eq $SiteName })) {
  Write-Host "==> IIS sitesi oluşturuluyor: $SiteName ($($HostNames -join ', '))" -ForegroundColor Cyan
  $id = [int]((Get-Website | Measure-Object -Property id -Maximum).Maximum) + 1
  New-Website -Name $SiteName -Id $id -PhysicalPath $WebRoot -Port 80 -HostHeader $HostNames[0] | Out-Null
  $HostNames | Select-Object -Skip 1 | ForEach-Object {
    New-WebBinding -Name $SiteName -Protocol http -Port 80 -HostHeader $_
  }
}
Start-Website -Name $SiteName -ErrorAction SilentlyContinue

$global:LASTEXITCODE = 0
Write-Host "==> Bitti. Site: http://$($HostNames[0])" -ForegroundColor Green
