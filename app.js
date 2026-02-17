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

const SESSION_KEY = 'match_profile';
let lastQuizAnswer = '';

const scopeChips = document.getElementById('scopeChips');
const profileForm = document.getElementById('profileForm');
const chatArea = document.getElementById('chatArea');
const profilePreview = document.getElementById('profilePreview');
const profilePreviewContent = document.getElementById('profilePreviewContent');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const promptChips = document.querySelectorAll('.prompt-chip');

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
    <div class="profile-item"><strong>Ad:</strong> ${profile.name}</div>
    <div class="profile-item"><strong>Yaş:</strong> ${profile.age}</div>
    <div class="profile-item"><strong>Sınıf:</strong> ${profile.grade}</div>
    <div class="profile-item"><strong>Ders:</strong> ${profile.struggles}</div>
    <div class="profile-item"><strong>Hedef:</strong> ${profile.goal}</div>
    <div class="profile-item"><strong>Çalışma:</strong> ${profile.studyTime || 'Belirtilmedi'}</div>
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

function getSmartResponse(message) {
  const lower = message.toLowerCase();

  if (lower.includes('dersleri listele') || lower.includes('ders listesi')) {
    return listTopicsCard('Öğretebildiğim Dersler', Object.keys(lessonModules));
  }

  if (lower.includes('meslekleri listele') || lower.includes('meslek listesi')) {
    return listTopicsCard('Anlatabildiğim Meslek/Alanlar', Object.keys(professionModules));
  }

  if (lower.includes('cevabı göster') || lower.includes('quiz cevabı')) {
    return lastQuizAnswer
      ? `<p><strong>${lastQuizAnswer}</strong></p><p class="muted">İstersen bir sonraki seviyeye geçelim.</p>`
      : '<p class="muted">Önce bir ders açalım, sonra quiz cevabını gösterebilirim.</p>';
  }

  const lessonKey = Object.keys(lessonModules).find((key) => lower.includes(key));
  if (lessonKey) {
    return formatLessonCard(lessonModules[lessonKey]);
  }

  const professionKey = Object.keys(professionModules).find((key) => lower.includes(key));
  if (professionKey) {
    return formatProfessionCard(professionModules[professionKey]);
  }

  return `
    <p><strong>Başlayalım!</strong> Bir ders veya meslek adı yaz:</p>
    <p class="muted">Örnek: "Fizik öğret", "Tıp anlat", "Hukuk temelleri"</p>
    <p class="muted">Ek komutlar: "dersleri listele", "meslekleri listele", "cevabı göster"</p>
  `;
}

function createAssistantPlan(profile) {
  return `
    <p><strong>Harika ${profile.name}, profilini kaydettim ✅</strong></p>
    <p>${profile.grade} seviyesi ve <strong>${profile.struggles}</strong> derslerine göre seni çalıştıracağım.</p>
    <p class="muted">Now we continue teaching mode: subjects + professions with bilingual support.</p>
  `;
}

function startTeachingFromProfile(profile) {
  const firstStruggle = profile.struggles.toLowerCase().split(',')[0]?.trim();
  if (!firstStruggle) return;

  const lessonKey = Object.keys(lessonModules).find((key) => firstStruggle.includes(key));
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

  saveProfile(profile);
  renderProfilePreview(profile);

  appendMessage(
    'user',
    `<p>Merhaba, ben ${profile.name}. ${profile.age} yaşındayım, ${profile.grade} seviyesindeyim.</p>
     <p>Zorlandığım dersler: ${profile.struggles}</p>
     <p>Hedefim: ${profile.goal}</p>`,
  );

  appendMessage('assistant', createAssistantPlan(profile));
  startTeachingFromProfile(profile);
  profileForm.reset();
});

function sendChatMessage(text) {
  const message = text.trim();
  if (!message) return;

  appendMessage('user', `<p>${message}</p>`);
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

const existingProfile = loadProfile();
if (existingProfile) {
  renderProfilePreview(existingProfile);
  appendMessage(
    'assistant',
    `<p><strong>Tekrar hoş geldin ${existingProfile.name} 👋</strong></p>
     <p>Hazırsan bir ders/meslek yaz ve öğretime başlayalım.</p>`,
  );
}
