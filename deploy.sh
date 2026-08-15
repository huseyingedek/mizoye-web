#!/usr/bin/env bash
# Mizoye — sunucuda statik dağıtım betiği
# Kullanım: repo klasöründe  ->  bash deploy.sh
set -euo pipefail

WEB_ROOT="${WEB_ROOT:-/var/www/mizoye}"

echo "==> Bağımlılıklar yükleniyor ve proje derleniyor"
if [ -f package-lock.json ]; then npm ci; else npm install; fi
npm run build   # 'out/' klasörünü üretir (statik site)

echo "==> Statik dosyalar $WEB_ROOT içine kopyalanıyor"
sudo mkdir -p "$WEB_ROOT"
sudo rm -rf "${WEB_ROOT:?}/"*
sudo cp -r out/* "$WEB_ROOT"/
sudo chown -R www-data:www-data "$WEB_ROOT"

echo "==> Nginx testi ve yeniden yükleme"
sudo nginx -t && sudo systemctl reload nginx

echo "==> Bitti. Site yayında: $WEB_ROOT"
