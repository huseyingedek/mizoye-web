# Mizoye Yazılım — Kurumsal Tanıtım Sitesi

Mizoye Yazılım için geliştirilmiş, çift dilli (Türkçe / İngilizce) kurumsal
tanıtım web sitesi. Next.js (App Router), TypeScript ve Tailwind CSS ile
oluşturulmuştur.

## Sayfalar

- **Anasayfa** (`/`) — hero, istatistikler, çözüm özeti, süreç ve CTA
- **Hakkımızda** (`/hakkimizda`) — şirket tanıtımı ve değerler
- **Çözümlerimiz** (`/cozumler`) — hizmet detayları
- **Misyon & Vizyon** (`/misyon-vizyon`)
- **İletişim** (`/iletisim`) — telefon, e-posta, adres ve sosyal medya

## Kurulum

Bilgisayarınızda [Node.js](https://nodejs.org) (18 veya üzeri) kurulu olmalıdır.
Proje klasöründe bir terminal açıp aşağıdaki komutları çalıştırın:

```bash
# 1) Bağımlılıkları yükleyin (tek seferlik)
npm install

# 2) Geliştirme sunucusunu başlatın
npm run dev
```

Ardından tarayıcıdan **http://localhost:3000** adresini açın.

## Yayına Alma (Production)

```bash
npm run build   # üretim derlemesi
npm start       # üretim sunucusunu başlatır
```

## İçeriği Düzenleme

- **Tüm metinler (TR/EN):** `src/lib/translations.ts`
- **İletişim & sosyal medya bilgileri:** `src/lib/site.ts`
- **Renkler, gradyanlar ve animasyonlar:** `src/app/globals.css`
- **Menü bağlantıları:** `src/lib/site.ts` içindeki `navItems`

Telefon, e-posta ve sosyal medya adreslerini gerçek bilgilerinizle güncellemek
için yalnızca `src/lib/site.ts` dosyasını düzenlemeniz yeterlidir.

## Teknolojiler

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Geist font (offline)
