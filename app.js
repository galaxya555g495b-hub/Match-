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
    answer: '11',
  },
  fizik: {
    title: 'Fizik | Newton Yasaları',
    tr: 'Net kuvvet sıfır değilse cisim ivmelenir (F = m·a).',
    en: 'An object accelerates when net force is not zero (F = m·a).',
    quiz: 'Mini Quiz: 2 kg cisme 10 N uygulanırsa ivme kaç m/s² olur?',
    answer: '5',
  },
  kimya: {
    title: 'Kimya | Mol Kavramı',
    tr: '1 mol madde, Avogadro sayısı kadar tanecik içerir.',
    en: 'One mole contains Avogadro’s number of particles.',
    quiz: 'Mini Quiz: 2 mol H2O kaç molekül içerir?',
    answer: '2 × 6.022×10^23',
  },
  biyoloji: {
    title: 'Biyoloji | Hücre',
    tr: 'Hücre, canlıların temel yapı ve işlev birimidir.',
    en: 'The cell is the fundamental structural and functional unit of life.',
    quiz: 'Mini Quiz: Protein sentezinden sorumlu organel hangisidir?',
    answer: 'Ribozom',
  },
  tarih: {
    title: 'Tarih | Neden-Sonuç Analizi',
    tr: 'Tarih çalışırken olayları neden-sonuç ve kronoloji içinde değerlendirmek gerekir.',
    en: 'In history, events should be analyzed by cause-effect and chronology.',
    quiz: 'Mini Quiz: Kronoloji nedir, tek cümleyle yaz.',
    answer: 'Olayları zaman sırasına göre dizme yöntemidir.',
  },
  coğrafya: {
    title: 'Coğrafya | İklim ve Hava',
    tr: 'İklim uzun yılların ortalamasıdır, hava durumu kısa sürelidir.',
    en: 'Climate is long-term average; weather is short-term atmospheric condition.',
    quiz: 'Mini Quiz: “Yarın yağmur var” ifadesi iklim mi hava durumu mu?',
    answer: 'Hava durumu',
  },
  felsefe: {
    title: 'Felsefe | Argüman',
    tr: 'Argüman; iddia, gerekçe ve sonuç bileşenlerinden oluşur.',
    en: 'An argument consists of claim, reasoning, and conclusion.',
    quiz: 'Mini Quiz: “Tüm insanlar ölümlüdür” ifadesi öncül mü sonuç mu olabilir?',
    answer: 'Öncül olabilir',
  },
  türkçe: {
    title: 'Türkçe | Paragraf',
    tr: 'Paragrafta ana düşünce, metnin vermek istediği temel mesajdır.',
    en: 'The main idea is the core message the paragraph conveys.',
    quiz: 'Mini Quiz: Ana düşünceyi bulmak için önce neye bakarsın?',
    answer: 'Konu ve vurgu',
  },
  edebiyat: {
    title: 'Edebiyat | Anlatım Türleri',
    tr: 'Öyküleyici, betimleyici, açıklayıcı ve tartışmacı anlatım temel türlerdir.',
    en: 'Narrative, descriptive, expository, and argumentative are core text modes.',
    quiz: 'Mini Quiz: Olay akışı hangi anlatım türünde belirgindir?',
    answer: 'Öyküleyici',
  },
  ingilizce: {
    title: 'English | Present Simple',
    tr: 'Present Simple, alışkanlıklar ve genel doğrular için kullanılır.',
    en: 'Present Simple is used for habits and general truths.',
    quiz: 'Mini Quiz: “She ___ to school every day.”',
    answer: 'goes',
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

const intentAliases = {
  siber: ['siber', 'siber güvenlik', 'cyber'],
  türkçe: ['türkçe', 'turkce', 'dil bilgisi', 'paragraf'],
  ingilizce: ['ingilizce', 'english'],
  coğrafya: ['coğrafya', 'cografya'],
  'ilk yardım': ['ilk yardım', 'ilkyardım', 'first aid'],
};

const SESSION_KEY = 'match_profile';

const aiState = {
  memory: {
    currentTopic: '',
    currentTrack: '',
    lastPlan: '',
    activeQuiz: null,
  },
};

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

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function appendMessage(role, html) {
  const el = document.createElement('article');
  el.className = `message message--${role}`;
  el.innerHTML = html;
  chatArea.appendChild(el);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function appendUserMessage(text) {
  appendMessage('user', `<p>${escapeHtml(text)}</p>`);
}

function renderProfilePreview(profile) {
  const safeProfile = {
    name: escapeHtml(profile.name || '-'),
    age: escapeHtml(profile.age || '-'),
    grade: escapeHtml(profile.grade || '-'),
    struggles: escapeHtml(profile.struggles || '-'),
    goal: escapeHtml(profile.goal || '-'),
    studyTime: escapeHtml(profile.studyTime || 'Belirtilmedi'),
  };

  profilePreviewContent.innerHTML = `
    <div class="profile-item"><strong>Ad:</strong> ${safeProfile.name}</div>
    <div class="profile-item"><strong>Yaş:</strong> ${safeProfile.age}</div>
    <div class="profile-item"><strong>Sınıf:</strong> ${safeProfile.grade}</div>
    <div class="profile-item"><strong>Ders:</strong> ${safeProfile.struggles}</div>
    <div class="profile-item"><strong>Hedef:</strong> ${safeProfile.goal}</div>
    <div class="profile-item"><strong>Çalışma:</strong> ${safeProfile.studyTime}</div>
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

function normalizeInput(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/\p{Diacritic}/gu, '')
    .trim();
}

function scoreIntent(input, key) {
  const normalizedInput = normalizeInput(input);
  const normalizedKey = normalizeInput(key);
  const aliases = (intentAliases[key] || []).map((alias) => normalizeInput(alias));

  if (normalizedInput.includes(normalizedKey) || aliases.some((alias) => normalizedInput.includes(alias))) {
    return 1;
  }

  const inputTokens = normalizedInput.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  const keyTokens = normalizedKey.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  if (!inputTokens.length || !keyTokens.length) return 0;

  const matchedTokens = keyTokens.filter((token) =>
    inputTokens.some((inputToken) => inputToken.startsWith(token.slice(0, Math.min(4, token.length)))),
  );

  return matchedTokens.length / keyTokens.length;
}

function findBestMatch(input, modules) {
  return Object.keys(modules)
    .map((key) => ({ key, score: scoreIntent(input, key) }))
    .sort((a, b) => b.score - a.score)[0];
}

function formatLessonCard(module) {
  aiState.memory.activeQuiz = {
    question: module.quiz,
    answer: module.answer,
  };

  return `
    <p><strong>${module.title}</strong></p>
    <p><strong>TR:</strong> ${module.tr}</p>
    <p><strong>EN:</strong> ${module.en}</p>
    ${module.quiz ? `<p class="muted">${module.quiz}</p>` : ''}
    <p class="muted">Cevabı görmek için: <strong>cevabı göster</strong> veya kendi cevabın için: <strong>cevabım: ...</strong></p>
  `;
}

function formatProfessionCard(module) {
  aiState.memory.activeQuiz = null;

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

function createAdaptiveTip(profile, topic) {
  if (!profile) return 'İpucu: Konuyu 25 dakika odak + 5 dakika tekrar şeklinde çalış.';

  const studyTime = Number.parseInt(profile.studyTime, 10);
  const focusWindow = Number.isFinite(studyTime) && studyTime > 0 ? Math.max(15, Math.min(studyTime, 45)) : 25;
  const weakCourse = normalizeInput(profile.struggles || '');

  if (weakCourse.includes(normalizeInput(topic))) {
    return `İpucu: ${focusWindow} dakikalık ana oturumdan sonra 10 soru çözerek ${topic} konusunu pekiştir.`;
  }

  return `İpucu: ${focusWindow} dakika konu + 10 dakika özet çıkarma yöntemiyle ilerle.`;
}

function createWeeklyPlan(profile) {
  const baseTopic = aiState.memory.currentTopic || (profile.struggles || 'genel tekrar').split(',')[0].trim();
  const topic = escapeHtml(baseTopic || 'genel tekrar');
  const dailyMinutes = Number.parseInt(profile.studyTime, 10) || 30;

  aiState.memory.lastPlan = topic;

  return `
    <p><strong>${topic} için 7 günlük mini plan</strong></p>
    <ul>
      <li>Pazartesi: ${dailyMinutes} dk konu anlatımı + 10 dk tekrar</li>
      <li>Salı: ${dailyMinutes} dk örnek soru çözümü</li>
      <li>Çarşamba: ${dailyMinutes} dk mini quiz + yanlış analizi</li>
      <li>Perşembe: ${dailyMinutes} dk eksik konu tamamlama</li>
      <li>Cuma: ${dailyMinutes} dk karışık test</li>
      <li>Cumartesi: ${dailyMinutes + 10} dk deneme</li>
      <li>Pazar: 20 dk genel tekrar + hedef değerlendirme</li>
    </ul>
  `;
}

function createDailyPlan(profile) {
  const todayTopic = aiState.memory.currentTopic || (profile.struggles || 'genel tekrar').split(',')[0].trim();
  const safeTopic = escapeHtml(todayTopic || 'genel tekrar');
  const minutes = Number.parseInt(profile.studyTime, 10) || 30;

  return `
    <p><strong>Bugün ${safeTopic} için odak planı</strong></p>
    <ul>
      <li>1) ${minutes} dk konu anlatımı</li>
      <li>2) 15 dk örnek soru</li>
      <li>3) 10 dk yanlış analizi</li>
      <li>4) 5 dk mini tekrar özeti</li>
    </ul>
    <p class="muted">Komut: <strong>ilerleme özeti</strong> yazarak haftalık gidişatı görebilirsin.</p>
  `;
}

function createProgressSummary(profile) {
  const lastPlan = aiState.memory.lastPlan || 'Henüz plan oluşturulmadı';
  const topic = aiState.memory.currentTopic || 'Seçilmedi';

  return `
    <p><strong>İlerleme Özeti 📈</strong></p>
    <ul>
      <li>Aktif konu: ${escapeHtml(topic)}</li>
      <li>Son plan konusu: ${escapeHtml(lastPlan)}</li>
      <li>Hedef: ${escapeHtml(profile.goal || 'Belirtilmedi')}</li>
      <li>Günlük süre: ${escapeHtml(profile.studyTime || '30')} dk</li>
    </ul>
    <p class="muted">İstersen şimdi: <strong>bugün ne çalışayım</strong> yaz.</p>
  `;
}

function evaluateUserAnswer(message) {
  const input = normalizeInput(message.replace('cevabım:', '').trim());
  if (!aiState.memory.activeQuiz) {
    return '<p class="muted">Henüz aktif bir quiz yok. Önce bir ders açalım.</p>';
  }

  const answer = normalizeInput(aiState.memory.activeQuiz.answer);
  const isCorrect = input && (answer.includes(input) || input.includes(answer));

  return isCorrect
    ? '<p><strong>Harika! ✅ Doğru cevap.</strong></p><p class="muted">İstersen yeni bir ders açabiliriz.</p>'
    : `<p><strong>Yaklaştın 👌</strong></p><p class="muted">Doğru cevap: ${escapeHtml(aiState.memory.activeQuiz.answer)}</p>`;
}

function getSmartResponse(message) {
  const lower = message.toLowerCase();
  const activeProfile = loadProfile();

  if (lower.includes('dersleri listele') || lower.includes('ders listesi')) {
    return listTopicsCard('Öğretebildiğim Dersler', Object.keys(lessonModules));
  }

  if (lower.includes('meslekleri listele') || lower.includes('meslek listesi')) {
    return listTopicsCard('Anlatabildiğim Meslek/Alanlar', Object.keys(professionModules));
  }

  if (lower.startsWith('cevabım:')) {
    return evaluateUserAnswer(message);
  }

  if (lower.includes('cevabı göster') || lower.includes('quiz cevabı')) {
    return aiState.memory.activeQuiz
      ? `<p><strong>Cevap: ${escapeHtml(aiState.memory.activeQuiz.answer)}</strong></p><p class="muted">İstersen bir sonraki seviyeye geçelim.</p>`
      : '<p class="muted">Önce bir ders açalım, sonra quiz cevabını gösterebilirim.</p>';
  }

  if (lower.includes('haftalık plan') || lower.includes('çalışma planı')) {
    if (!activeProfile) {
      return '<p class="muted">Önce profil bilgilerini girersen sana uygun haftalık plan hazırlayabilirim.</p>';
    }

    return createWeeklyPlan(activeProfile);
  }

  if (lower.includes('bugün ne çalışayım') || lower.includes('gunun plani')) {
    if (!activeProfile) {
      return '<p class="muted">Bugün için plan üretebilmem adına önce profilini doldur.</p>';
    }

    return createDailyPlan(activeProfile);
  }

  if (lower.includes('ilerleme özeti') || lower.includes('ilerleme raporu')) {
    if (!activeProfile) {
      return '<p class="muted">İlerleme özeti için önce profil bilgisi gerekli.</p>';
    }

    return createProgressSummary(activeProfile);
  }

  if (lower.includes('hedefime göre öneri') || lower.includes('öneri ver')) {
    if (!activeProfile) {
      return '<p class="muted">Bu öneriyi kişiselleştirmem için önce profil formunu doldurmalısın.</p>';
    }

    return `
      <p><strong>${escapeHtml(activeProfile.goal || 'Hedefin')} için önerim:</strong></p>
      <ul>
        <li>Her gün ${escapeHtml(activeProfile.studyTime || '30')} dakika sabit çalış.</li>
        <li>Önceliği zorlandığın derslere ver: ${escapeHtml(activeProfile.struggles || 'belirtilmedi')}.</li>
        <li>Haftada 1 mini deneme + yanlış analizi yap.</li>
      </ul>
    `;
  }

  if (lower.includes('yapay zeka') || lower.includes('ai')) {
    return `
      <p><strong>Ben senin öğretmen AI asistanınım 🤖</strong></p>
      <p>Dersleri anlatırım, mini quiz hazırlarım, cevabını değerlendiririm ve plan çıkarırım.</p>
      <p class="muted">Örnek: “Matematik öğret”, “cevabım: 11”, “bugün ne çalışayım”, “haftalık plan oluştur”</p>
    `;
  }

  const lessonMatch = findBestMatch(lower, lessonModules);
  if (lessonMatch?.score >= 0.5) {
    const lesson = lessonModules[lessonMatch.key];
    aiState.memory.currentTopic = lessonMatch.key;
    aiState.memory.currentTrack = 'lesson';
    return `${formatLessonCard(lesson)}<p class="muted">${createAdaptiveTip(activeProfile, lessonMatch.key)}</p>`;
  }

  const professionMatch = findBestMatch(lower, professionModules);
  if (professionMatch?.score >= 0.5) {
    const profession = professionModules[professionMatch.key];
    aiState.memory.currentTopic = professionMatch.key;
    aiState.memory.currentTrack = 'profession';
    return `${formatProfessionCard(profession)}<p class="muted">İstersen bu alana özel 1 haftalık başlangıç planı da çıkarabilirim.</p>`;
  }

  return `
    <p><strong>Başlayalım!</strong> Bir ders veya meslek adı yaz:</p>
    <p class="muted">Örnek: "Fizik öğret", "Tıp anlat", "Hukuk temelleri"</p>
    <p class="muted">Ek komutlar: "dersleri listele", "meslekleri listele", "cevabı göster", "cevabım: ...", "bugün ne çalışayım", "ilerleme özeti", "haftalık plan oluştur"</p>
  `;
}

function createAssistantPlan(profile) {
  return `
    <p><strong>Harika ${escapeHtml(profile.name)}, profilini kaydettim ✅</strong></p>
    <p>${escapeHtml(profile.grade)} seviyesi ve <strong>${escapeHtml(profile.struggles)}</strong> derslerine göre seni çalıştıracağım.</p>
    <p class="muted">Now we continue teaching mode: subjects + professions with bilingual support.</p>
    <p class="muted">Yeni komutlar: <strong>haftalık plan oluştur</strong> / <strong>bugün ne çalışayım</strong> / <strong>ilerleme özeti</strong></p>
  `;
}

function startTeachingFromProfile(profile) {
  const firstStruggle = (profile.struggles || '').toLowerCase().split(',')[0]?.trim();
  if (!firstStruggle) return;

  const lessonKey = Object.keys(lessonModules).find((key) => firstStruggle.includes(key));
  if (!lessonKey) return;

  aiState.memory.currentTopic = lessonKey;
  aiState.memory.currentTrack = 'lesson';
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

  appendUserMessage(message);
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
    `<p><strong>Tekrar hoş geldin ${escapeHtml(existingProfile.name)} 👋</strong></p>
     <p>Hazırsan bir ders/meslek yaz ve öğretime başlayalım.</p>`,
  );
}
