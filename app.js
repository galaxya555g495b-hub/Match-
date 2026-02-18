const scopeItems = [
  'Matematik',
  'Fizik',
  'Kimya',
  'Biyoloji',
  'Tarih',
  'Felsefe',
  'Coğrafya',
  'Türkçe/Edebiyat',
  'İngilizce',
  'Tıp',
  'Hukuk',
  'Veterinerlik',
  'Mühendislik',
  'İlk Yardım',
  'Tarım',
  'Siber Güvenlik',
  'Havacılık',
  'Türkçe Kelime Gelişimi',
];

const lessonModules = {
  matematik: {
    title: 'Matematik | Fonksiyonlar',
    tr: 'Fonksiyon, her girdiyi tek bir çıktıya eşleyen bir kuraldır.',
    en: 'A function maps each input to exactly one output.',
    quiz: 'Mini Quiz: f(x)=2x+3 için f(4) kaçtır?',
    answer: 'Cevap: f(4)=11',
  },
  fizik: {
    title: 'Fizik | Newton Yasaları',
    tr: 'Net kuvvet sıfır değilse cisim ivmelenir (F = m·a).',
    en: 'An object accelerates when net force is not zero (F = m·a).',
    quiz: 'Mini Quiz: 2 kg cisme 10 N uygulanırsa ivme kaç m/s² olur?',
    answer: 'Cevap: a = F/m = 10/2 = 5 m/s²',
  },
  kimya: {
    title: 'Kimya | Mol Kavramı',
    tr: '1 mol madde, Avogadro sayısı kadar tanecik içerir.',
    en: 'One mole contains Avogadro’s number of particles.',
    quiz: 'Mini Quiz: 2 mol H2O kaç molekül içerir?',
    answer: 'Cevap: 2 × 6.022×10^23 molekül',
  },
  biyoloji: {
    title: 'Biyoloji | Hücre',
    tr: 'Hücre, canlıların temel yapı ve işlev birimidir.',
    en: 'The cell is the fundamental structural and functional unit of life.',
    quiz: 'Mini Quiz: Protein sentezinden sorumlu organel hangisidir?',
    answer: 'Cevap: Ribozom',
  },
  tarih: {
    title: 'Tarih | Neden-Sonuç Analizi',
    tr: 'Tarih çalışırken olayları neden-sonuç ve kronoloji içinde değerlendirmek gerekir.',
    en: 'In history, events should be analyzed by cause-effect and chronology.',
    quiz: 'Mini Quiz: Kronoloji nedir, tek cümleyle yaz.',
    answer: 'Cevap: Olayları zaman sırasına göre dizme yöntemidir.',
  },
  coğrafya: {
    title: 'Coğrafya | İklim ve Hava',
    tr: 'İklim uzun yılların ortalamasıdır, hava durumu kısa sürelidir.',
    en: 'Climate is long-term average; weather is short-term atmospheric condition.',
    quiz: 'Mini Quiz: “Yarın yağmur var” ifadesi iklim mi hava durumu mu?',
    answer: 'Cevap: Hava durumu',
  },
  felsefe: {
    title: 'Felsefe | Argüman',
    tr: 'Argüman; iddia, gerekçe ve sonuç bileşenlerinden oluşur.',
    en: 'An argument consists of claim, reasoning, and conclusion.',
    quiz: 'Mini Quiz: “Tüm insanlar ölümlüdür” ifadesi öncül mü sonuç mu olabilir?',
    answer: 'Cevap: Bağlama göre öncül olarak kullanılabilir.',
  },
  türkçe: {
    title: 'Türkçe | Paragraf',
    tr: 'Paragrafta ana düşünce, metnin vermek istediği temel mesajdır.',
    en: 'The main idea is the core message the paragraph conveys.',
    quiz: 'Mini Quiz: Ana düşünceyi bulmak için önce neye bakarsın?',
    answer: 'Cevap: Konu ve yazarın vurguladığı yargılara.',
  },
  edebiyat: {
    title: 'Edebiyat | Anlatım Türleri',
    tr: 'Öyküleyici, betimleyici, açıklayıcı ve tartışmacı anlatım temel türlerdir.',
    en: 'Narrative, descriptive, expository, and argumentative are core text modes.',
    quiz: 'Mini Quiz: Olay akışı hangi anlatım türünde belirgindir?',
    answer: 'Cevap: Öyküleyici anlatım',
  },
  ingilizce: {
    title: 'English | Present Simple',
    tr: 'Present Simple, alışkanlıklar ve genel doğrular için kullanılır.',
    en: 'Present Simple is used for habits and general truths.',
    quiz: 'Mini Quiz: “She ___ to school every day.”',
    answer: 'Cevap: goes',
  },
};

const professionModules = {
  tıp: {
    title: 'Meslek: Tıp',
    tr: 'Tıp, tanı–tedavi süreçlerinde biyoloji, kimya ve etik bilgisini birlikte kullanır.',
    en: 'Medicine combines biology, chemistry, and ethics for diagnosis and treatment.',
    steps: ['Temel bilimler', 'Klinik değerlendirme', 'Kanıta dayalı karar'],
  },
  hukuk: {
    title: 'Meslek: Hukuk',
    tr: 'Hukukta temel beceriler: mevzuat okuma, yorumlama, argümantasyon.',
    en: 'Core legal skills: reading legislation, interpretation, and argumentation.',
    steps: ['Kanun metni analizi', 'İçtihat araştırması', 'Savunma kurgusu'],
  },
  veterinerlik: {
    title: 'Meslek: Veterinerlik',
    tr: 'Veterinerlik; hayvan sağlığı, zoonozlar ve koruyucu hekimlik odaklıdır.',
    en: 'Veterinary medicine focuses on animal health, zoonoses, and preventive care.',
    steps: ['Muayene', 'Aşılama', 'Sürü sağlığı yönetimi'],
  },
  mühendislik: {
    title: 'Meslek: Mühendislik',
    tr: 'Mühendislik; problemi tanımlama, modelleme, test etme ve iyileştirme sürecidir.',
    en: 'Engineering is the process of defining, modeling, testing, and improving solutions.',
    steps: ['Problem tanımı', 'Tasarım', 'Test ve optimizasyon'],
  },
  'ilk yardım': {
    title: 'Alan: İlk Yardım',
    tr: 'Öncelik: olay yeri güvenliği, 112 çağrısı, temel yaşam desteği adımları.',
    en: 'Priority: scene safety, emergency call, and basic life support steps.',
    steps: ['Güvenlik kontrolü', '112 çağrısı', 'ABC değerlendirmesi'],
  },
  tarım: {
    title: 'Alan: Tarım',
    tr: 'Tarımda verim; toprak analizi, sulama yönetimi ve bitki sağlığıyla artar.',
    en: 'Agricultural productivity improves with soil analysis, irrigation, and crop health.',
    steps: ['Toprak analizi', 'Doğru sulama', 'Hastalık-zararlı takibi'],
  },
  siber: {
    title: 'Alan: Siber Güvenlik',
    tr: 'Siber güvenlikte temel üçlü: gizlilik, bütünlük, erişilebilirliktir.',
    en: 'The core triad in cybersecurity is confidentiality, integrity, availability.',
    steps: ['Risk analizi', 'Erişim kontrolü', 'Olay müdahalesi'],
  },
  havacılık: {
    title: 'Alan: Havacılık',
    tr: 'Havacılıkta güvenlik kültürü, check-list disiplini ve insan faktörleri kritiktir.',
    en: 'In aviation, safety culture, checklist discipline, and human factors are critical.',
    steps: ['Uçuş planlama', 'Checklist uygulaması', 'Emniyet raporlama'],
  },
};

const vocabularyDeck = [
  { word: 'müteakip', meaning: 'sonraki, izleyen', synonym: 'ardıl', antonym: 'önceki', example: 'Müteakip derslerde bu konuyu pekiştireceğiz.' },
  { word: 'sarih', meaning: 'açık ve net', synonym: 'açık', antonym: 'muğlak', example: 'Sorunun cevabı oldukça sarihti.' },
  { word: 'itina', meaning: 'özen, dikkat', synonym: 'özen', antonym: 'ihmal', example: 'Deney tüplerini itinayla yerleştir.' },
  { word: 'tefekkür', meaning: 'derin düşünme', synonym: 'düşünüm', antonym: 'yüzeysellik', example: 'Felsefe dersinde tefekkür etmek gerekir.' },
  { word: 'muhteva', meaning: 'içerik', synonym: 'içerik', antonym: 'boşluk', example: 'Paragrafın muhtevası bilimsel verilerdi.' },
  { word: 'münhasır', meaning: 'yalnızca birine/şeye ait', synonym: 'özel', antonym: 'genel', example: 'Bu çalışma münhasıran biyoloji konularına odaklanıyor.' },
  { word: 'külliyat', meaning: 'bir yazarın tüm eserleri', synonym: 'bütün', antonym: 'parça', example: 'Yazarın külliyatını okumaya başladı.' },
  { word: 'veciz', meaning: 'kısa ve etkili', synonym: 'özlü', antonym: 'uzun', example: 'Öğretmenin veciz anlatımı herkesin hoşuna gitti.' },
  { word: 'tahayyül', meaning: 'hayal etme', synonym: 'imgeleme', antonym: 'gerçeklik', example: 'Astronomi çalışırken evreni tahayyül etmek heyecan verici.' },
  { word: 'tevazu', meaning: 'alçakgönüllülük', synonym: 'alçakgönüllülük', antonym: 'kibir', example: 'Başarısına rağmen tevazusunu korudu.' },
  { word: 'mukayese', meaning: 'karşılaştırma', synonym: 'karşılaştırma', antonym: 'ayırma', example: 'İki çözüm yöntemini mukayese edelim.' },
  { word: 'istikrar', meaning: 'kararlılık ve süreklilik', synonym: 'süreklilik', antonym: 'dalgalanma', example: 'Düzenli çalışma istikrar getirir.' },
  { word: 'tasnif', meaning: 'sınıflandırma', synonym: 'sınıflama', antonym: 'karmaşa', example: 'Canlıları türlerine göre tasnif ettik.' },
  { word: 'sezgi', meaning: 'içgüdüsel anlama', synonym: 'içgörü', antonym: 'şüphe', example: 'Matematikte sezgi bazen doğru yola götürür.' },
  { word: 'terkip', meaning: 'birleştirme, sentez', synonym: 'sentez', antonym: 'ayrıştırma', example: 'Kimyada terkip süreçleri önemlidir.' },
  { word: 'mütercim', meaning: 'çevirmen', synonym: 'çevirmen', antonym: 'yazar', example: 'Mütercim metni iki dilde aktardı.' },
  { word: 'muvaffakiyet', meaning: 'başarı', synonym: 'başarı', antonym: 'başarısızlık', example: 'Muvaffakiyet için planlı olmalısın.' },
  { word: 'teferruat', meaning: 'ayrıntı', synonym: 'ayrıntı', antonym: 'özet', example: 'Sorunun teferruatına birlikte bakalım.' },
  { word: 'temayül', meaning: 'eğilim', synonym: 'eğilim', antonym: 'uzaklık', example: 'Bu sorularda hata yapma temayülün var.' },
  { word: 'ihtiva', meaning: 'içermek', synonym: 'kapsamak', antonym: 'hariç tutmak', example: 'Bu ünite üç farklı konuyu ihtiva ediyor.' },
  { word: 'müspet', meaning: 'olumlu', synonym: 'pozitif', antonym: 'menfi', example: 'Müspet düşünce motivasyonu artırır.' },
  { word: 'menfi', meaning: 'olumsuz', synonym: 'negatif', antonym: 'müspet', example: 'Menfi düşünceler öğrenme hızını düşürür.' },
  { word: 'tevsi', meaning: 'genişletme', synonym: 'genişletme', antonym: 'daraltma', example: 'Kelime dağarcığını tevsi etmelisin.' },
  { word: 'tevarüs', meaning: 'miras alma', synonym: 'miras', antonym: 'devretme', example: 'Kültürel değerler nesilden nesile tevarüs eder.' },
  { word: 'müktesebat', meaning: 'birikim, kazanım', synonym: 'birikim', antonym: 'yoksunluk', example: 'Her okuma yeni bir müktesebat kazandırır.' },
  { word: 'tasavvur', meaning: 'zihinde canlandırma', synonym: 'imge', antonym: 'belirsizlik', example: 'Geometride şekli tasavvur etmek önemlidir.' },
  { word: 'mütehassıs', meaning: 'uzman', synonym: 'uzman', antonym: 'acemi', example: 'Mütehassıs bir hekimden görüş aldık.' },
  { word: 'beyhude', meaning: 'boşuna, sonuçsuz', synonym: 'nafile', antonym: 'verimli', example: 'Plansız çalışmak beyhude olabilir.' },
  { word: 'münazara', meaning: 'tartışma, karşılıklı sav', synonym: 'tartışma', antonym: 'uzlaşma', example: 'Sınıfta etik üzerine münazara yaptık.' },
  { word: 'muktedir', meaning: 'gücü yeten', synonym: 'yetkin', antonym: 'aciz', example: 'Düzenli pratikle her öğrenci muktedir olur.' },
  { word: 'azim', meaning: 'kararlılık', synonym: 'sebat', antonym: 'vazgeçiş', example: 'Azim, zor konuları aşmanın anahtarıdır.' },
  { word: 'seciye', meaning: 'karakter', synonym: 'karakter', antonym: 'tutarsızlık', example: 'Bilim insanının seciyesi merakla şekillenir.' },
  { word: 'temkin', meaning: 'ihtiyat, dikkatli olma', synonym: 'ihtiyat', antonym: 'acelecilik', example: 'Deney yaparken temkinli olmalısın.' },
  { word: 'mecmua', meaning: 'dergi, toplu eser', synonym: 'dergi', antonym: 'tek metin', example: 'Edebiyat mecmuasından bir şiir okuduk.' },
  { word: 'berrak', meaning: 'çok net, duru', synonym: 'duru', antonym: 'bulanık', example: 'Konu anlatımı oldukça berraktı.' },
  { word: 'mukim', meaning: 'yerleşik', synonym: 'yerleşik', antonym: 'göçebe', example: 'Mukim nüfus coğrafya dersinde işlenir.' },
  { word: 'münferit', meaning: 'tekil, ayrı', synonym: 'tekil', antonym: 'toplu', example: 'Bu hata münferit bir durum olabilir.' },
  { word: 'mütemadi', meaning: 'sürekli', synonym: 'devamlı', antonym: 'kesintili', example: 'Mütemadi tekrar başarı getirir.' },
  { word: 'uhde', meaning: 'sorumluluk, görev', synonym: 'sorumluluk', antonym: 'serbestlik', example: 'Bu projenin uhdesi sınıf temsilcisinde.' },
  { word: 'feraset', meaning: 'sezgi gücü, anlayış', synonym: 'öngörü', antonym: 'gaflet', example: 'Ferasetli bir öğrenci sorunun püf noktasını görür.' },
];

const lessonAliases = {
  matematik: ['matematik', 'mat', 'geometri', 'istatistik'],
  fizik: ['fizik', 'mekanik', 'elektrik', 'optik'],
  kimya: ['kimya', 'mol', 'periyodik', 'organik'],
  biyoloji: ['biyoloji', 'genetik', 'hücre', 'ekoloji'],
  tarih: ['tarih', 'inkilap', 'osmanli', 'cumhuriyet'],
  coğrafya: ['coğrafya', 'cografya', 'iklim', 'harita', 'jeoloji'],
  felsefe: ['felsefe', 'mantık', 'mantik', 'sosyoloji', 'psikoloji'],
  türkçe: ['turkce', 'türkçe', 'paragraf', 'dil bilgisi', 'anlam bilgisi'],
  edebiyat: ['edebiyat', 'roman', 'şiir', 'siir'],
  ingilizce: ['ingilizce', 'english', 'grammar', 'speaking'],
};

const professionAliases = {
  tıp: ['tip', 'tıp', 'doktorluk', 'hekimlik', 'saglik'],
  hukuk: ['hukuk', 'avukat', 'mevzuat'],
  veterinerlik: ['veteriner', 'veterinerlik', 'hayvan sagligi'],
  mühendislik: ['mühendislik', 'muhendislik', 'mühendis', 'inşaat', 'yazılım'],
  'ilk yardım': ['ilk yardım', 'ilk yardim', 'acil durum', '112'],
  tarım: ['tarım', 'tarim', 'ziraat', 'çiftçilik', 'ciftcilik', 'botanik'],
  siber: ['siber', 'siber güvenlik', 'siber guvenlik', 'cyber'],
  havacılık: ['havacılık', 'havacilik', 'pilotaj', 'ucus'],
};

const SESSION_KEY = 'match_profile';
const VOCAB_PROGRESS_KEY = 'match_vocab_progress';
const DAILY_TASKS_KEY = 'match_daily_tasks';
const STREAK_KEY = 'match_streak';
const LAST_ACTIVE_DAY_KEY = 'match_last_active_day';
let lastQuizAnswer = '';
let lastVocabularyWord = '';
let vocabPointer = 0;

const scopeChips = document.getElementById('scopeChips');
const profileForm = document.getElementById('profileForm');
const chatArea = document.getElementById('chatArea');
const profilePreview = document.getElementById('profilePreview');
const profilePreviewContent = document.getElementById('profilePreviewContent');
const vocabProgressCard = document.getElementById('vocabProgressCard');
const vocabProgressContent = document.getElementById('vocabProgressContent');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const promptChips = document.querySelectorAll('.prompt-chip');

function normalizeText(text) {
  return text
    .toLowerCase()
    .replaceAll('ç', 'c')
    .replaceAll('ğ', 'g')
    .replaceAll('ı', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ş', 's')
    .replaceAll('ü', 'u');
}



function containsAny(text, patterns) {
  return patterns.some((pattern) => text.includes(pattern));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isValidProfile(profile) {
  return (
    profile.name.length >= 2 &&
    profile.age.length > 0 &&
    Number(profile.age) >= 7 &&
    Number(profile.age) <= 99 &&
    profile.grade.length >= 2 &&
    profile.struggles.length >= 2 &&
    profile.goal.length >= 5
  );
}


function createDailyTasks(profile) {
  const focus = (profile?.struggles || 'Matematik, Türkçe')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return [
    { id: 'review-1', title: `${focus[0] || 'Matematik'}: 20 dk konu tekrarı`, done: false },
    { id: 'review-2', title: `${focus[1] || 'Türkçe'}: 10 soru çöz`, done: false },
    { id: 'vocab', title: 'Türkçe: 10 kelime + 1 kelime testi', done: false },
    { id: 'reflection', title: 'Gün sonu: 3 yanlışın analizini yaz', done: false },
  ];
}

function loadDailyTasks() {
  const raw = sessionStorage.getItem(DAILY_TASKS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => ({
      id: String(item.id || ''),
      title: String(item.title || ''),
      done: Boolean(item.done),
    }));
  } catch {
    sessionStorage.removeItem(DAILY_TASKS_KEY);
    return [];
  }
}

function saveDailyTasks(tasks) {
  sessionStorage.setItem(DAILY_TASKS_KEY, JSON.stringify(tasks));
}

let dailyTasks = loadDailyTasks();
let streakCount = Number(sessionStorage.getItem(STREAK_KEY) || 0);
let lastActiveDay = sessionStorage.getItem(LAST_ACTIVE_DAY_KEY) || "";

function renderDailyTasksCard() {
  if (dailyTasks.length === 0) {
    return '<p class="muted">Henüz görev planı oluşturulmadı. Komut: <strong>günlük görev</strong></p>';
  }

  const doneCount = dailyTasks.filter((task) => task.done).length;
  const percent = Math.round((doneCount / dailyTasks.length) * 100);
  const list = dailyTasks
    .map(
      (task, index) =>
        `<li>${task.done ? '✅' : '⬜'} ${index + 1}. ${escapeHtml(task.title)} <span class="muted">(tamamla: görev ${index + 1} tamam)</span></li>`,
    )
    .join('');

  return `
    <p><strong>Günlük Görev Planı</strong></p>
    <p class="muted">Tamamlanan: ${doneCount}/${dailyTasks.length} (%${percent})</p>
    <ul>${list}</ul>
    <p class="muted">Komutlar: <strong>görev 1 tamam</strong>, <strong>görev sıfırla</strong></p>
  `;
}

function markDailyTaskDone(index) {
  if (!dailyTasks[index]) {
    return '<p class="muted">Geçersiz görev numarası. Önce <strong>günlük görev</strong> yaz.</p>';
  }
  if (dailyTasks[index].done) {
    return `<p class="muted">Bu görev zaten tamamlandı: ${escapeHtml(dailyTasks[index].title)}</p>${renderDailyTasksCard()}`;
  }
  dailyTasks[index].done = true;
  saveDailyTasks(dailyTasks);
  return `<p><strong>Tamamlandı ✅</strong> ${escapeHtml(dailyTasks[index].title)}</p>${renderDailyTasksCard()}`;
}

function resetDailyTasks(profile) {
  dailyTasks = createDailyTasks(profile || loadProfile());
  saveDailyTasks(dailyTasks);
  return '<p><strong>Günlük görevler sıfırlandı.</strong></p>' + renderDailyTasksCard();
}


function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function createProgressSummaryCard() {
  const profile = loadProfile();
  const doneCount = dailyTasks.filter((task) => task.done).length;
  const totalTasks = dailyTasks.length;
  const vocabSeen = Object.values(vocabProgress).filter((stats) => stats.seen > 0).length;
  const vocabCorrect = Object.values(vocabProgress).reduce((sum, stats) => sum + stats.correct, 0);

  return `
    <p><strong>İlerleme Özeti</strong></p>
    <p class="muted">Profil: ${profile ? escapeHtml(profile.name) : 'Tanımsız'} | Seri: ${streakCount} gün</p>
    <ul>
      <li>📌 Günlük görev: ${doneCount}/${totalTasks || 0}</li>
      <li>📚 Kelime görülen: ${vocabSeen}/${vocabularyDeck.length}</li>
      <li>✅ Kelime doğru kullanım: ${vocabCorrect}</li>
    </ul>
    <p class="muted">Seriyi artırmak için: <strong>günü kapat</strong></p>
  `;
}

function closeDayProgress() {
  const doneCount = dailyTasks.filter((task) => task.done).length;
  if (doneCount === 0) {
    return '<p class="muted">Günü kapatmadan önce en az bir görev tamamla. Komut: <strong>görev 1 tamam</strong></p>';
  }

  const today = getTodayKey();
  if (lastActiveDay === today) {
    return `<p><strong>Bugün zaten kapatılmış ✅</strong></p>${createProgressSummaryCard()}`;
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  streakCount = lastActiveDay === yesterday ? streakCount + 1 : 1;
  lastActiveDay = today;

  sessionStorage.setItem(STREAK_KEY, String(streakCount));
  sessionStorage.setItem(LAST_ACTIVE_DAY_KEY, lastActiveDay);

  return `<p><strong>Gün kapatıldı 🎉</strong> Seri: ${streakCount} gün.</p>${createProgressSummaryCard()}`;
}

function createInitialVocabProgress() {
  const progress = {};
  vocabularyDeck.forEach((item) => {
    progress[item.word] = {
      seen: 0,
      correct: 0,
      wrong: 0,
    };
  });
  return progress;
}

function loadVocabProgress() {
  const raw = sessionStorage.getItem(VOCAB_PROGRESS_KEY);
  if (!raw) return createInitialVocabProgress();

  try {
    const parsed = JSON.parse(raw);
    const base = createInitialVocabProgress();
    Object.keys(base).forEach((word) => {
      if (parsed[word]) {
        base[word] = {
          seen: Number(parsed[word].seen || 0),
          correct: Number(parsed[word].correct || 0),
          wrong: Number(parsed[word].wrong || 0),
        };
      }
    });
    return base;
  } catch {
    sessionStorage.removeItem(VOCAB_PROGRESS_KEY);
    return createInitialVocabProgress();
  }
}

let vocabProgress = loadVocabProgress();

function saveVocabProgress() {
  sessionStorage.setItem(VOCAB_PROGRESS_KEY, JSON.stringify(vocabProgress));
}

function updateVocabProgressCard() {
  const entries = Object.entries(vocabProgress);
  const seenCount = entries.filter(([, stats]) => stats.seen > 0).length;
  const correctCount = entries.filter(([, stats]) => stats.correct > 0).length;
  const wrongCount = entries.reduce((sum, [, stats]) => sum + stats.wrong, 0);
  const percent = Math.round((seenCount / vocabularyDeck.length) * 100);

  vocabProgressContent.innerHTML = `
    <div class="vocab-progress">
      <div><strong>Görülen kelime:</strong> ${seenCount}/${vocabularyDeck.length}</div>
      <div><strong>Doğru kullanılan:</strong> ${correctCount}</div>
      <div><strong>Yanlış deneme:</strong> ${wrongCount}</div>
      <div class="vocab-progress__bar"><div class="vocab-progress__fill" style="width:${percent}%"></div></div>
      <div class="muted">Kapsam tamamlama: %${percent}</div>
    </div>
  `;

  vocabProgressCard.hidden = false;
}

function markWordsSeen(items) {
  items.forEach((item) => {
    if (!vocabProgress[item.word]) {
      vocabProgress[item.word] = { seen: 0, correct: 0, wrong: 0 };
    }
    vocabProgress[item.word].seen += 1;
  });
  saveVocabProgress();
  updateVocabProgressCard();
}


function getWeakVocabularyItems(limit = 5) {
  return Object.entries(vocabProgress)
    .filter(([, stats]) => stats.wrong > 0 || stats.seen > 0)
    .sort((a, b) => {
      const scoreA = a[1].wrong * 2 + (a[1].seen - a[1].correct);
      const scoreB = b[1].wrong * 2 + (b[1].seen - b[1].correct);
      return scoreB - scoreA;
    })
    .slice(0, limit)
    .map(([word]) => vocabularyDeck.find((item) => item.word === word))
    .filter(Boolean);
}

function formatWeakVocabularyCard() {
  const weakItems = getWeakVocabularyItems(6);
  if (weakItems.length === 0) {
    return '<p class="muted">Önce kelime çalışalım. Komut: <strong>10 kelime ver</strong></p>';
  }

  return formatVocabularyCard(weakItems, 'Zorlanılan Kelimeleri Tekrar');
}

function createNextActionCard() {
  const profile = loadProfile();
  const doneCount = dailyTasks.filter((task) => task.done).length;
  const totalTasks = dailyTasks.length || 1;
  const taskRatio = doneCount / totalTasks;
  const weakItems = getWeakVocabularyItems(3);

  let recommendation = 'Bugün için 10 kelime + 1 kelime testi ile başla.';
  if (taskRatio < 0.5) {
    recommendation = 'Öncelik günlük görevlerde: en az 2 görevi tamamla.';
  } else if (weakItems.length > 0) {
    recommendation = `Zor kelime tekrarı yap: ${weakItems.map((x) => x.word).join(', ')}.`;
  } else if (profile && profile.struggles) {
    recommendation = `Zorlandığın alana dön: ${escapeHtml(profile.struggles.split(',')[0].trim())} için 15 dk tekrar.`;
  }

  return `
    <p><strong>Sıradaki En İyi Adım</strong></p>
    <p class="muted">${recommendation}</p>
    <p class="muted">Önerilen komutlar: <strong>günlük görev</strong>, <strong>zor kelimeleri tekrar et</strong>, <strong>kelime testi</strong></p>
  `;
}

function createSessionRecapCard() {
  const profile = loadProfile();
  const doneCount = dailyTasks.filter((task) => task.done).length;
  const weakItems = getWeakVocabularyItems(3);
  const seenCount = Object.values(vocabProgress).filter((stats) => stats.seen > 0).length;

  const latestFocus = weakItems.length
    ? weakItems.map((item) => item.word).join(', ')
    : 'Henüz zor kelime kaydı yok';

  return `
    <p><strong>Şu Ana Kadar Ne Yaptık?</strong></p>
    <ul>
      <li>👤 Profil: ${profile ? `${escapeHtml(profile.name)} (${escapeHtml(profile.grade)})` : 'Henüz kaydedilmedi'}</li>
      <li>✅ Günlük görev: ${doneCount}/${dailyTasks.length || 0}</li>
      <li>📚 Kelime çalışması: ${seenCount}/${vocabularyDeck.length} kelime görüldü</li>
      <li>🔥 Seri: ${streakCount} gün</li>
      <li>🎯 Odak tekrar: ${latestFocus}</li>
    </ul>
    <p class="muted">Devam komutları: <strong>sıradaki öneri</strong>, <strong>günlük görev</strong>, <strong>zor kelimeleri tekrar et</strong></p>
  `;
}

function getVocabStatusCard() {
  const seenEntries = Object.entries(vocabProgress).filter(([, stats]) => stats.seen > 0);
  if (seenEntries.length === 0) {
    return '<p><strong>Kelime Durumu</strong></p><p class="muted">Henüz kelime çalışılmamış. Komut: <strong>10 kelime ver</strong></p>';
  }

  const topNeeds = seenEntries
    .sort((a, b) => {
      const scoreA = a[1].seen - a[1].correct;
      const scoreB = b[1].seen - b[1].correct;
      return scoreB - scoreA;
    })
    .slice(0, 5)
    .map(([word, stats]) => `<li><strong>${word}</strong> — görüldü: ${stats.seen}, doğru: ${stats.correct}, yanlış: ${stats.wrong}</li>`)
    .join('');

  return `
    <p><strong>Kelime Durumu</strong></p>
    <p class="muted">En çok tekrar edilmesi gereken ilk 5 kelime:</p>
    <ul>${topNeeds}</ul>
  `;
}

function renderChips() {
  scopeChips.innerHTML = scopeItems.map((item) => `<span class="chip">${item}</span>`).join('');
}

function appendMessage(role, html) {
  const el = document.createElement('article');
  el.className = `message message--${role}`;
  el.innerHTML = html;
  chatArea.appendChild(el);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function renderProfilePreview(profile) {
  profilePreviewContent.innerHTML = `
    <div class="profile-item"><strong>Ad:</strong> ${escapeHtml(profile.name)}</div>
    <div class="profile-item"><strong>Yaş:</strong> ${escapeHtml(profile.age)}</div>
    <div class="profile-item"><strong>Sınıf:</strong> ${escapeHtml(profile.grade)}</div>
    <div class="profile-item"><strong>Ders:</strong> ${escapeHtml(profile.struggles)}</div>
    <div class="profile-item"><strong>Hedef:</strong> ${escapeHtml(profile.goal)}</div>
    <div class="profile-item"><strong>Çalışma:</strong> ${escapeHtml(profile.studyTime || 'Belirtilmedi')}</div>
  `;
  profilePreview.hidden = false;
}

function saveProfile(profile) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(profile));
}

function loadProfile() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function formatLessonCard(module) {
  lastQuizAnswer = module.answer || '';
  return `
    <p><strong>${module.title}</strong></p>
    <p><strong>TR:</strong> ${module.tr}</p>
    <p><strong>EN:</strong> ${module.en}</p>
    ${module.quiz ? `<p class="muted">${module.quiz}</p>` : ''}
    ${module.answer ? '<p class="muted">Cevabı görmek için: <strong>cevabı göster</strong></p>' : ''}
  `;
}

function formatProfessionCard(module) {
  return `
    <p><strong>${module.title}</strong></p>
    <p><strong>TR:</strong> ${module.tr}</p>
    <p><strong>EN:</strong> ${module.en}</p>
    <p class="muted"><strong>Temel Adımlar:</strong> ${module.steps.join(' → ')}</p>
  `;
}

function listTopicsCard(title, items) {
  const list = items.map((item) => `<li>${item}</li>`).join('');
  return `<p><strong>${title}</strong></p><ul>${list}</ul><p class="muted">Birini yaz ve hemen öğretime başlayalım.</p>`;
}

function pickVocabularyItems(count) {
  const items = [];
  for (let i = 0; i < count; i += 1) {
    items.push(vocabularyDeck[(vocabPointer + i) % vocabularyDeck.length]);
  }
  vocabPointer = (vocabPointer + count) % vocabularyDeck.length;
  lastVocabularyWord = items[items.length - 1]?.word || '';
  markWordsSeen(items);
  return items;
}

function formatVocabularyCard(items, heading = 'Türkçe Kelime Gelişimi') {
  const lines = items
    .map(
      (item, index) =>
        `<li><strong>${index + 1}. ${item.word}</strong>: ${item.meaning} (Eş: ${item.synonym} | Zıt: ${item.antonym})<br/><span class="muted">Örnek: ${item.example}</span></li>`,
    )
    .join('');

  return `
    <p><strong>${heading}</strong></p>
    <p>Kelime dağarcığını güçlendirmek için bu kelimeleri defterine yazıp cümle kur.</p>
    <ul>${lines}</ul>
    <p class="muted">Komutlar: <strong>10 kelime ver</strong>, <strong>ileri seviye kelime</strong>, <strong>kelime testi</strong></p>
  `;
}

function detectAliasMatch(normalizedText, aliasMap) {
  const key = Object.keys(aliasMap).find((moduleKey) =>
    aliasMap[moduleKey].some((alias) => normalizedText.includes(normalizeText(alias))),
  );
  return key || null;
}

function getVocabularyQuiz() {
  const item = pickVocabularyItems(1)[0];
  lastQuizAnswer = `Doğru cevap örneği: "${item.word}" kelimesi "${item.meaning}" anlamındadır. Örnek: ${item.example}`;
  return `
    <p><strong>Kelime Testi</strong></p>
    <p><strong>${item.word}</strong> kelimesini kullanarak bir cümle yaz.</p>
    <p class="muted">İpucu: Anlamı “${item.meaning}”.</p>
    <p class="muted">Cevabı görmek için: <strong>cevabı göster</strong></p>
  `;
}

function createWeeklyPlan(profile) {
  const fallback = {
    name: 'Öğrenci',
    grade: 'mevcut seviye',
    struggles: 'Matematik, Türkçe',
    studyTime: '60 dakika',
    goal: 'genel başarı',
  };
  const data = profile || fallback;
  const struggles = (data.struggles || fallback.struggles)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const first = struggles[0] || 'Matematik';
  const second = struggles[1] || 'Türkçe';
  const daily = data.studyTime && data.studyTime.length > 0 ? data.studyTime : fallback.studyTime;

  return `
    <p><strong>Haftalık Plan (${escapeHtml(data.name)})</strong></p>
    <p class="muted">Seviye: ${escapeHtml(data.grade)} | Hedef: ${escapeHtml(data.goal)} | Günlük: ${escapeHtml(daily)}</p>
    <ul>
      <li><strong>Pazartesi:</strong> ${escapeHtml(first)} + tekrar</li>
      <li><strong>Salı:</strong> ${escapeHtml(second)} + mini quiz</li>
      <li><strong>Çarşamba:</strong> Meslek farkındalık (ör. tıp/hukuk)</li>
      <li><strong>Perşembe:</strong> Türkçe kelime (10 kelime + kelime testi)</li>
      <li><strong>Cuma:</strong> Karışık deneme + yanlış analizi</li>
      <li><strong>Hafta sonu:</strong> Eksik kapatma + konuşma/yazma pratiği</li>
    </ul>
  `;
}

function getHelpCard() {
  return `
    <p><strong>Komut Yardımı</strong></p>
    <ul>
      <li><strong>dersleri listele</strong> / <strong>meslekleri listele</strong></li>
      <li><strong>10 kelime ver</strong>, <strong>sıradaki kelime</strong>, <strong>kelime testi</strong></li>
      <li><strong>doğru</strong> / <strong>yanlış</strong>, <strong>kelime durumu</strong>, <strong>kelime sıfırla</strong>, <strong>zor kelimeleri tekrar et</strong></li>
      <li><strong>profilimi göster</strong>, <strong>haftalık plan</strong>, <strong>günlük görev</strong>, <strong>ilerleme özeti</strong>, <strong>sıradaki öneri</strong>, <strong>günü kapat</strong>, <strong>oturumu sıfırla</strong>, <strong>şu ana kadar ne yaptık</strong></li>
    </ul>
  `;
}

function getSmartResponse(message) {

  const normalized = normalizeText(message);

  if (containsAny(normalized, ['su ana kadar ne yaptik', 'ozet gec'])) {
    return createSessionRecapCard();
  }

  if (containsAny(normalized, ['yardim', 'help'])) {
    return getHelpCard();
  }

  if (containsAny(normalized, ['haftalik plan', 'calisma plani'])) {
    return createWeeklyPlan(loadProfile());
  }

  if (containsAny(normalized, ['profilimi goster'])) {
    const profile = loadProfile();
    if (!profile) return '<p class="muted">Aktif profil bulunamadı. Lütfen önce tanışma formunu doldur.</p>';
    return `
      <p><strong>Profil Özeti</strong></p>
      <p>Ad: ${escapeHtml(profile.name)} | Yaş: ${escapeHtml(profile.age)} | Seviye: ${escapeHtml(profile.grade)}</p>
      <p class="muted">Zorlandığın dersler: ${escapeHtml(profile.struggles)}</p>
      <p class="muted">Hedef: ${escapeHtml(profile.goal)}</p>
    `;
  }

  if (containsAny(normalized, ['oturumu sifirla'])) {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(VOCAB_PROGRESS_KEY);
    sessionStorage.removeItem(DAILY_TASKS_KEY);
    sessionStorage.removeItem(STREAK_KEY);
    sessionStorage.removeItem(LAST_ACTIVE_DAY_KEY);
    vocabProgress = createInitialVocabProgress();
    lastVocabularyWord = '';
    lastQuizAnswer = '';
    dailyTasks = [];
    streakCount = 0;
    lastActiveDay = '';
    updateVocabProgressCard();
    profilePreview.hidden = true;
    return '<p><strong>Oturum sıfırlandı.</strong></p><p class="muted">Yeni başlangıç için tanışma formunu doldurabilirsin.</p>';
  }

  if (normalized.includes('dersleri listele') || normalized.includes('ders listesi')) {
    return listTopicsCard('Öğretebildiğim Dersler', Object.keys(lessonModules));
  }

  if (normalized.includes('meslekleri listele') || normalized.includes('meslek listesi')) {
    return listTopicsCard('Anlatabildiğim Meslek/Alanlar', Object.keys(professionModules));
  }

  if (
    normalized.includes('kelime dağarcigi') ||
    normalized.includes('kelime darcigi') ||
    normalized.includes('kelime hazinesi') ||
    normalized.includes('10 kelime ver') ||
    normalized.includes('kelime listesi')
  ) {
    return formatVocabularyCard(pickVocabularyItems(10), 'Türkçe Kelime Dağarcığı - Geniş Paket');
  }

  if (containsAny(normalized, ['zor kelimeleri tekrar et', 'zayif kelime'])) {
    return formatWeakVocabularyCard();
  }

  if (containsAny(normalized, ['ileri seviye kelime', 'akademik kelime'])) {
    return formatVocabularyCard(pickVocabularyItems(6), 'İleri Seviye Türkçe Kelimeler');
  }

  if (containsAny(normalized, ['siradaki kelime', 'tek kelime'])) {
    return formatVocabularyCard(pickVocabularyItems(1), 'Sıradaki Kelime');
  }

  if (containsAny(normalized, ['kelime durumu', 'kelime ilerleme'])) {
    return getVocabStatusCard();
  }

  if (containsAny(normalized, ['kelime sifirla'])) {
    vocabProgress = createInitialVocabProgress();
    lastVocabularyWord = '';
    saveVocabProgress();
    updateVocabProgressCard();
    return '<p><strong>Kelime ilerlemesi sıfırlandı.</strong></p><p class="muted">Yeniden başlamak için: <strong>10 kelime ver</strong></p>';
  }

  if (containsAny(normalized, ['dogru', 'bildim'])) {
    const lastItem = vocabularyDeck.find((item) => item.word === lastVocabularyWord);
    if (lastItem && vocabProgress[lastItem.word]) {
      vocabProgress[lastItem.word].correct += 1;
      saveVocabProgress();
      updateVocabProgressCard();
      return `<p><strong>Süper! ✅</strong> <strong>${lastItem.word}</strong> doğru işaretlendi.</p><p class="muted">Devam için: <strong>sıradaki kelime</strong></p>`;
    }
    return '<p class="muted">Önce bir kelime açalım. Komut: <strong>sıradaki kelime</strong></p>';
  }

  if (containsAny(normalized, ['yanlis', 'bilemedim'])) {
    const lastItem = vocabularyDeck.find((item) => item.word === lastVocabularyWord);
    if (lastItem && vocabProgress[lastItem.word]) {
      vocabProgress[lastItem.word].wrong += 1;
      saveVocabProgress();
      updateVocabProgressCard();
      return `<p><strong>Not ettim ✍️</strong> <strong>${lastItem.word}</strong> tekrar listesine eklendi.</p><p class="muted">Destek için: <strong>cevabı göster</strong> veya <strong>sıradaki kelime</strong></p>`;
    }
    return '<p class="muted">Önce bir kelime açalım. Komut: <strong>sıradaki kelime</strong></p>';
  }

  if (containsAny(normalized, ['kelime testi', 'kelime quiz'])) {
    return getVocabularyQuiz();
  }

  if (containsAny(normalized, ['gunluk gorev'])) {
    if (dailyTasks.length === 0) {
      dailyTasks = createDailyTasks(loadProfile());
      saveDailyTasks(dailyTasks);
    }
    return renderDailyTasksCard();
  }

  const doneMatch = normalized.match(/gorev\s*(\d+)\s*tamam|görev\s*(\d+)\s*tamam/);
  if (doneMatch) {
    const index = Number(doneMatch[1] || doneMatch[2]) - 1;
    return markDailyTaskDone(index);
  }

  if (containsAny(normalized, ['gorev sifirla'])) {
    return resetDailyTasks(loadProfile());
  }

  if (containsAny(normalized, ['ilerleme ozeti'])) {
    return createProgressSummaryCard();
  }

  if (containsAny(normalized, ['siradaki oneri', 'ne yapayim'])) {
    return createNextActionCard();
  }

  if (containsAny(normalized, ['gunu kapat'])) {
    return closeDayProgress();
  }

  if (containsAny(normalized, ['cevabi goster', 'quiz cevabi'])) {
    return lastQuizAnswer
      ? `<p><strong>${lastQuizAnswer}</strong></p><p class="muted">İstersen bir sonraki seviyeye geçelim.</p>`
      : '<p class="muted">Önce bir ders veya kelime testi açalım, sonra cevabı gösterebilirim.</p>';
  }

  const lessonKey = detectAliasMatch(normalized, lessonAliases);
  if (lessonKey) {
    return formatLessonCard(lessonModules[lessonKey]);
  }

  const professionKey = detectAliasMatch(normalized, professionAliases);
  if (professionKey) {
    return formatProfessionCard(professionModules[professionKey]);
  }

  return `
    <p><strong>Başlayalım!</strong> Bir ders, meslek veya kelime komutu yaz:</p>
    <p class="muted">Örnek: "Fizik öğret", "Tıp anlat", "10 kelime ver", "sıradaki kelime"</p>
    <p class="muted">Ek komutlar: "dersleri listele", "meslekleri listele", "kelime durumu", "haftalık plan", "günlük görev", "sıradaki öneri", "ilerleme özeti", "yardım", "cevabı göster"</p>
  `;
}

function createAssistantPlan(profile) {
  return `
    <p><strong>Harika ${escapeHtml(profile.name)}, profilini kaydettim ✅</strong></p>
    <p>${escapeHtml(profile.grade)} seviyesi ve <strong>${escapeHtml(profile.struggles)}</strong> derslerine göre seni çalıştıracağım.</p>
    <p class="muted">Now we continue teaching mode: subjects + professions + Turkish vocabulary expansion.</p>
  `;
}

function startTeachingFromProfile(profile) {
  const firstStruggle = profile.struggles.toLowerCase().split(',')[0]?.trim();
  if (!firstStruggle) return;

  const lessonKey = detectAliasMatch(normalizeText(firstStruggle), lessonAliases);
  if (!lessonKey) return;

  appendMessage('assistant', formatLessonCard(lessonModules[lessonKey]));
}

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(profileForm);

  const profile = {
    name: formData.get('name')?.toString().trim(),
    age: formData.get('age')?.toString().trim(),
    grade: formData.get('grade')?.toString().trim(),
    struggles: formData.get('struggles')?.toString().trim(),
    goal: formData.get('goal')?.toString().trim(),
    studyTime: formData.get('studyTime')?.toString().trim(),
  };

  if (!isValidProfile(profile)) {
    appendMessage('assistant', '<p class="muted">Lütfen profil alanlarını geçerli şekilde doldur (yaş 7-99, amaç en az 5 karakter).</p>');
    return;
  }

  saveProfile(profile);
  dailyTasks = createDailyTasks(profile);
  saveDailyTasks(dailyTasks);
  renderProfilePreview(profile);

  appendMessage(
    'user',
    `<p>Merhaba, ben ${escapeHtml(profile.name)}. ${escapeHtml(profile.age)} yaşındayım, ${escapeHtml(profile.grade)} seviyesindeyim.</p>
     <p>Zorlandığım dersler: ${escapeHtml(profile.struggles)}</p>
     <p>Hedefim: ${escapeHtml(profile.goal)}</p>`,
  );

  appendMessage('assistant', createAssistantPlan(profile));
  startTeachingFromProfile(profile);
  profileForm.reset();
});

function sendChatMessage(text) {
  const message = text.trim();
  if (!message) return;

  appendMessage('user', `<p>${escapeHtml(message)}</p>`);
  appendMessage('assistant', getSmartResponse(message));
}

sendBtn.addEventListener('click', () => {
  sendChatMessage(chatInput.value);
  chatInput.value = '';
});

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendBtn.click();
  }
});

promptChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chatInput.value = chip.textContent;
    sendBtn.click();
  });
});

renderChips();
updateVocabProgressCard();

const existingProfile = loadProfile();
if (existingProfile) {
  renderProfilePreview(existingProfile);
  appendMessage(
    'assistant',
    `<p><strong>Tekrar hoş geldin ${existingProfile.name} 👋</strong></p>
     <p>Hazırsan bir ders/meslek yaz veya <strong>10 kelime ver</strong> komutuyla Türkçe kelime çalışalım. Komut listesi için: <strong>yardım</strong>.</p>`,
  );
}
