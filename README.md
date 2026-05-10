# Metin2 Web Client

Tarayıcı tabanlı Metin2 oyun istemcisi. Three.js + React Three Fiber kullanılarak geliştirilmiş, 3B oyun dünyasında boss/metin taşı takibi, NPC etkileşimi, item drop listeleri ve karakter yönetimi sunan bir web uygulaması.

## Özellikler

- 3B oyun haritası (`.glb` formatında şehir modeli)
- Boss ve Metin Taşı sistemi (29 adet canavar modeli)
- NPC etkileşim pencereleri (16 adet NPC)
- Karakter seçim ekranı (4 sınıf: Savaşçı, Ninja, Şaman, Sura)
- Karakter bilgi paneli (HP/SP/ATT/DEX statü barları)
- Envanter ve ekipman arayüzü
- Minimap ve NPC konum işaretleri
- Mob drop listeleri (86 adet item icon'u)
- Türkçe dil desteği

## Klasör Yapısı

```
/
├── index.html                 # Uygulama giriş noktası
├── assets/
│   ├── index-YBQVz6a0.js      # Ana JS bundle (~292KB, tüm oyun mantığı)
│   ├── index-mfonxqXh.css     # CSS stil dosyası (~19KB)
│   ├── r3f-c0TiWmyX.js        # React Three Fiber kütüphanesi (~422KB)
│   └── three-DaIqvaVB.js      # Three.js kütüphanesi (~702KB)
├── icons/
│   └── item/                  # Item icon'ları (86 PNG, ID bazlı isimlendirme)
├── logo/                      # Favicon ve logo dosyaları
├── models/
│   ├── map_city.glb           # Ana şehir haritası (~160MB)
│   ├── characters/            # Karakter 3B modelleri (4 GLB)
│   ├── mob/                   # Boss/Metin canavar modelleri (29 GLB)
│   └── npc/                   # NPC modelleri + pencere icon'ları
├── textures/
│   └── terrain/               # Arazi dokuları (18 dosya)
└── ui/
    ├── cursor/                # Özel imleç icon'ları
    ├── empire/                # İmparatorluk bayrak görselleri
    ├── extracted/
    │   ├── minimap/           # Minimap marker ve buton icon'ları
    │   └── pattern/           # Arayüz panel desenleri
    ├── face/                  # Karakter portreleri
    ├── font/                  # Metin2 font dosyası (TTF)
    ├── hud/
    │   ├── charinfo/          # Karakter bilgi paneli icon'ları
    │   ├── currency/          # Para birimi icon'ları
    │   ├── gauges/            # Statü bar dolgu ve çerçeve resimleri
    │   ├── inventory/         # Envanter paneli parçaları
    │   └── taskbar/           # Görev çubuğu buton ve göstergeleri
    ├── loading/               # Yükleme ekranı arka planı
    ├── select/                # Karakter seçim gölgesi
    └── sprites/               # Buton ve arayüz sprite'ları
```

## Sistem Mimarisi

Uygulama **React** tabanlı bir SPA (Single Page Application) olarak çalışır. `index.html` üzerinden yüklenen JS bundle (`assets/index-YBQVz6a0.js`) tüm oyun mantığını içerir.

**Kullanılan teknolojiler:**
| Teknoloji | Açıklama |
|-----------|----------|
| React | UI framework (JSX ile bileşen tabanlı yapı) |
| Three.js | 3B render motoru |
| React Three Fiber (`@react-three/fiber`) | React için Three.js bağlayıcısı |
| React Three Drei (`@react-three/drei`) | Three.js yardımcı bileşenleri |
| Zustand | State management |
| i18next | Çoklu dil desteği |
| Vite | Build aracı (bundle isimlerindeki hash'ten anlaşılıyor) |
| Google Fonts (Cinzel) | Arayüz yazı tipi |

**Veri akışı:**
- Tüm NPC, boss ve item verileri JS bundle içinde statik olarak tanımlanmıştır
- 3B modeller `/models/` altından `.glb` formatında yüklenir
- Arayüz görselleri `/ui/` altındaki klasörlerden referans alınır
- Item icon'ları `/icons/item/{ID}.png` formatında yüklenir
- Drop listeleri her boss/NPC için sabit `drops` dizisi olarak tanımlanmıştır

## Gereksinimler ve Bağımlılıklar

### Çalıştırmak için:
- **Node.js** (v16 veya üzeri)
- **npm** (Node.js ile birlikte gelir)
- Modern bir web tarayıcısı (WebGL desteği şart)

### Kurulum ve Çalıştırma:

```bash
# 1. Proje dizinine git
cd metin2-web-client

# 2. Statik sunucu kur (tek seferlik)
npm install -g serve

# 3. Sunucuyu başlat
npx serve . --listen 8080

# 4. Tarayıcıda aç
# http://localhost:8080
```

Alternatif olarak herhangi bir statik dosya sunucusu ile de çalıştırılabilir (Live Server, Python http.server, Apache, Nginx vb.).

## Özelleştirme Rehberi

### Yeni Item (Eşya) Icon'u Ekleme

1. Icon dosyasını PNG formatında hazırlayın (önerilen: 32x32 px)
2. Dosyayı `/icons/item/{ID}.png` yoluna kopyalayın (ID = oyun içi item ID'si)
3. JS bundle'da `const d="/icons/item"` değişkeni kullanıldığı için, icon'lara `${d}/{ID}.png` formatında erişilir

### Yeni Boss/Canavar Ekleme

1. 3B modeli `.glb` formatında `/models/mob/` altına kopyalayın
2. JS bundle içinde boss verisi şu formatta tanımlanmalıdır:
```javascript
{
  id: BOSS_ID,
  name: "Boss Adı",
  level: 99,
  modelPath: "/models/mob/dosya_adi.glb",
  position: [x, y, z],    // Haritadaki konum
  rotation: 0,             // Y rotasyonu (radyan)
  scale: 0.03,            // Model ölçeği
  maxHp: 5000,
  drops: [
    { name: "Item Adı", quantity: 1, iconSrc: "/icons/item/30130.png" }
  ]
}
```
3. Boss verisi JS bundle'daki `vu` nesnesine eklenmelidir

### Yeni NPC Ekleme

1. 3B modeli `/models/npc/` altına kopyalayın
2. NPC verisi JS bundle'da şu formatta olmalıdır:
```javascript
{
  id: NPC_ID,
  name: "NPC Adı",
  type: "npc_turu",
  position: [x, y, z],
  rotation: 0,
  modelPath: "/models/npc/dosya_adi.glb",
  scale: 1,
  hideLabel: false
}
```

### Yeni Harita Ekleme

1. 3B harita modelini `.glb` formatında `/models/` altına kopyalayın
2. Harita modeli JS bundle'da `/models/map_city.glb` olarak referans edilir
3. Arazi dokuları `/textures/terrain/` altında yönetilir

### Mevcut NPC/Boss Konumunu Değiştirme

JS bundle içinde (`assets/index-YBQVz6a0.js`) tüm NPC ve boss verileri sabit koordinatlarla tanımlanmıştır.

#### NPC Konumunu Değiştirme

NPC'ler dizi formatında tanımlanır. JS bundle'da ilgili NPC'yi arayıp `position` değerini değiştirin:

```javascript
{
  id: "blacksmith",
  name: "Demirci",
  type: "shop",
  position: [-2.79, 15.34, 0.86],   // ← [x, y, z] koordinatları
  rotation: Math.PI * 1.3,           // Y ekseninde dönüş (radyan)
  modelPath: "/models/npc/blacksmith.glb",
  scale: 0.0285,
}
```

**Koordinat sistemi:**
- `x`: Doğu-Batı (pozitif = doğu)
- `y`: Yükseklik (sabit ~15.34, zemindir)
- `z`: Kuzey-Güney (pozitif = güney)

Harita merkezi yaklaşık `[-2.95, 15.36, -0.26]` noktasındadır. NPC'ler `-3.2` ile `-2.5` (x) ve `0.3` ile `1.2` (z) aralığında konumlanmıştır.

#### Boss/Metin Taşı Konumunu Değiştirme

Boss'lar bir daire üzerinde eşit aralıklarla dizilmiştir. Konumlar `G(index)` fonksiyonu ile hesaplanır:

```javascript
const fs = -2.95,   // Daire merkezi X
    ys = 15.36,     // Daire merkezi Y (yükseklik)
    bs = -0.26,     // Daire merkezi Z
    Da = 0.35,      // Daire yarıçapı
    Fi = 28;        // Toplam boss sayısı (maksimum index)

function G(e) {
  const t = (e / Fi) * Math.PI * 2;
  return [fs + Math.cos(t) * Da, ys, bs + Math.sin(t) * Da];
}
```

**Konum değiştirme seçenekleri:**

1. **Daire parametrelerini değiştir** (tüm boss'ları etkiler): `fs`, `ys`, `bs` (merkez), `Da` (yarıçap)
2. **Tek bir boss'u taşı**: İlgili boss'un `position: G(5)` satırını `position: [-3.1, 15.36, 0.1]` gibi sabit bir diziyle değiştirin
3. **Boss ekle/çıkar**: `Fi` değerini değiştirip yeni boss ekleyin veya çıkarın

Boss verisi örneği:
```javascript
{
  id: 8001,
  name: "Metin of Sorrow",
  level: 5,
  area: "Villages 1",
  modelPath: "/models/mob/stone_tex01.glb",
  position: G(0),          // ← G(index) veya [x, y, z]
  rotation: H(0),           // ← Boss'un baktığı yön
  scale: 0.03,
  maxHp: F(5),             // ← Can: level²×50 + level×500
  auraColor: "#00cccc"      // isteğe bağlı aura rengi
}
```

### Arayüz Görsellerini Değiştirme

Tüm UI görselleri aşağıdaki klasörlerde bulunur:

| Klasör | İçerik |
|--------|--------|
| `/ui/hud/gauges/` | HP/SP/ATT/DEX bar dolguları ve çerçeveleri |
| `/ui/hud/inventory/` | Envanter paneli parçaları |
| `/ui/hud/taskbar/` | Görev çubuğu buton ve göstergeleri |
| `/ui/hud/charinfo/` | Karakter bilgi paneli icon'ları |
| `/ui/extracted/minimap/` | Minimap marker ve kontrol butonları |
| `/ui/extracted/pattern/` | Panel kenarlık ve desen parçaları |
| `/ui/sprites/` | Buton sprite'ları |
| `/ui/cursor/` | Özel imleçler |
| `/ui/face/` | Karakter portreleri |
| `/ui/select/` | Karakter seçim ekranı gölgesi |
| `/ui/empire/` | İmparatorluk bayrakları |
| `/ui/loading/` | Yükleme ekranı arka planı |
| `/models/npc/window/` | NPC pencere icon'ları |

## JS Bundle İçindeki Önemli Sabitler

JS dosyasında (`assets/index-YBQVz6a0.js`) asset yol tanımlamaları:

```javascript
const d  = "/icons/item"                       // Item icon'ları
const V  = "/ui/extracted/minimap/"            // Minimap marker'ları
const Pe = "/ui/extracted/pattern/"            // Panel desenleri
const J  = "/ui/hud/inventory/"                // Envanter UI
const fe = "/ui/hud/inventory/"                // Envanter UI (yedek)
const tt = "/ui/hud/gauges/"                   // Statü bar dolguları
const hl = "/ui/loading/deneme22.jpg"          // Yükleme ekranı
const wl = "/ui/hud/taskbar/coin/coins_17_3x.png" // Para icon'u
const Ui = "/ui/extracted/minimap/atlas_a1.png"   // Atlas haritası
const ml = "/ui/empire/empire_jinno169.jpg"       // İmparatorluk bayrağı
```

## Notlar

- Bu proje bir **web istemcisidir**, oyun sunucusu içermez. Sadece görsel arayüz ve statik veri gösterimi yapar.
- JS bundle **12.840 satır** olarak formatlanmıştır, okunabilir ve düzenlenebilir durumdadır. Değişken isimleri minify edilmiş olsa da kod akışı takip edilebilir.
- 3B modeller `.glb` (GL Transmission Format Binary) formatındadır, Blender veya benzeri araçlarla düzenlenebilir.
- Hızlı prototipleme için `npx serve` yerine `npx live-server` gibi hot-reload destekleyen sunucular kullanılabilir.
