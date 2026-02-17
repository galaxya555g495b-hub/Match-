# Match- AI Eğitmen Uygulaması

Bu proje, Türkçe + İngilizce destekli bir yapay zeka eğitmeni uygulaması için başlangıç kapsamını tanımlar.

## Hızlı Başlangıç

Basit arayüzü yerelde görmek için:

```bash
python -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresini açın.

## Öğretim Modu (TR + EN)

Arayüzde profil kaydından sonra sohbet kutusuna bir ders veya meslek adı yazarak öğretimi başlatabilirsiniz.

Örnek komutlar:
- `Matematik öğret`
- `Fizik öğret`
- `Tıp temellerini anlat`
- `Hukuk temelleri`
- `Dersleri listele`
- `Meslekleri listele`
- `Cevabı göster`

Uygulama, kısa konu anlatımı + İngilizce karşılığı + mini quiz üretir.

## Hedef Davranış

Uygulama, kullanıcı ile çalışmaya başlamadan önce kısa bir tanıma oturumu yapar ve aynı oturum boyunca bu bilgileri kullanır.

### 1) Zorunlu açılış sorusu

Uygulama, ilk mesajda mutlaka şunu sorar:

- "Uygulamaya başlamadan önce senin hakkında kısa bilgi alabilir miyim?"

### 2) Kullanıcı tanıma (onboarding)

Uygulama aşağıdaki temel bilgileri sorar:

- Yaş
- Sınıf / eğitim seviyesi
- Zorlanılan dersler
- Uygulamayı kullanım amacı (sınav, okul başarısı, meslek hazırlığı vb.)
- İsteğe bağlı: günlük çalışma süresi

### 3) Oturum içi kayıt

Toplanan bilgiler, aktif oturum boyunca saklanır ve kişiselleştirme için kullanılır:

- Ders planı kişiselleştirme
- Örnek soru seviyesini ayarlama
- Hedefe göre haftalık program üretme

> Not: Bu sürümde "oturum içi kayıt" davranışı ürün gereksinimi olarak tanımlanmıştır.

## Ders Kapsamı

Uygulama şu derslerde destek verir:

- Matematik
- Geometri
- Fizik
- Kimya
- Biyoloji
- Fen Bilimleri (ortaokul seviyesi)
- Tarih
- İnkılap Tarihi ve Atatürkçülük
- Felsefe
- Sosyoloji
- Psikoloji
- Mantık
- Coğrafya
- Türkçe / Edebiyat
- Dil bilgisi / Anlatım bozuklukları
- İngilizce (grammar, reading, writing, speaking temelleri)
- Almanca (temel seviye)
- Din Kültürü ve Ahlak Bilgisi
- Bilgisayar / Bilişim Teknolojileri
- Yazılım ve algoritma mantığı (temel)
- İstatistik ve veri okuryazarlığı (temel)
- Finansal okuryazarlık (temel)
- Ekonomi temelleri (mikro/makro giriş)
- Medya okuryazarlığı
- Proje tabanlı öğrenme becerileri
- Araştırma yöntemleri (temel)
- Eleştirel düşünme ve problem çözme
- Sanat tarihi (temel)
- Müzik teorisi (temel)
- Görsel sanatlar (temel)
- Astronomi ve uzay bilimleri (temel)
- Jeolojiye giriş
- Çevre bilimleri
- Sağlık bilgisi
- Dijital güvenlik ve siber farkındalık

## Temel Meslek ve Yaşam Bilgisi Kapsamı

Uygulama aşağıdaki alanlarda temel düzeyde bilgi sahibi olacak şekilde tasarlanır:

- Tıp
- Hemşirelik
- Eczacılık
- Diş hekimliği
- Fizyoterapi
- Psikoloji / PDR
- Hukuk
- Avukatlık süreçlerine giriş
- Veterinerlik
- İnşaat mühendisliği
- Makine mühendisliği
- Elektrik-elektronik mühendisliği
- Yazılım mühendisliği
- Endüstri mühendisliği
- Mimarlık
- Şehir ve bölge planlama
- Öğretmenlik meslek bilgisi
- İlk yardım
- Acil durum yönetimi
- Trafik kuralları ve güvenli sürüş
- Botanik
- Çiftçilik / Tarım
- Hayvancılık temelleri
- Gıda güvenliği ve hijyen
- Çevre ve sürdürülebilirlik
- Meteorolojiye giriş
- Muhasebe ve işletme temelleri
- Girişimcilik temelleri
- Turizm ve otelcilik temelleri
- Pilotaj ve havacılık temelleri
- Kabin hizmetleri ve havacılık güvenliği (temel)
- Denizcilik ve gemicilik temelleri
- Lojistik ve tedarik zinciri yönetimi
- Dış ticaret temelleri
- Bankacılık ve sigortacılık temelleri
- İnsan kaynakları yönetimi
- Halkla ilişkiler ve kurumsal iletişim
- Gazetecilik ve yeni medya
- Grafik tasarım temelleri
- Endüstriyel tasarım temelleri
- Oyun geliştirme ve oyun tasarımı
- Veri analistliği temelleri
- Yapay zeka ve makine öğrenmesi farkındalığı
- Siber güvenlik uzmanlığına giriş
- Ağ ve sistem yönetimi temelleri
- Elektrik teknikerliği temel bilgileri
- Mekatronik temelleri
- Otomotiv teknolojileri temelleri
- Harita kadastro ve GIS (temel)
- Jeofizik ve maden mühendisliği farkındalığı
- Kimya mühendisliği farkındalığı
- Gıda mühendisliği farkındalığı
- Biyomedikal mühendisliği farkındalığı
- Çocuk gelişimi ve okul öncesi eğitim
- Özel eğitim öğretmenliği farkındalığı
- Sosyal hizmet uzmanlığına giriş
- Rehberlik ve kariyer danışmanlığı
- Spor bilimleri ve antrenörlük
- Beslenme ve diyetetik
- Acil tıp teknisyenliği (temel)
- Adli bilimlere giriş
- Kriminoloji temelleri
- İlahiyat ve dini bilimler (temel)
- Arkeoloji ve antropolojiye giriş

## Örnek Açılış Akışı

1. "Uygulamaya başlamadan önce senin hakkında kısa bilgi alabilir miyim?"
2. "Kaç yaşındasın?"
3. "Hangi sınıftasın veya eğitim seviyen nedir?"
4. "En çok zorlandığın dersler hangileri?"
5. "Bu uygulamayı hangi amaçla kullanmak istiyorsun?"
6. "Günde ortalama kaç dakika çalışabilirsin? (isteğe bağlı)"

Bu bilgiler alındıktan sonra uygulama kullanıcıya özel ilk çalışma planını üretir.
