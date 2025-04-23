document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  // 언어 데이터 (확장 가능)
  const languages = {
    ko: {
      hero_title: "SAMK에 오신 것을 환영합니다",
      hero_subtitle: "조지메이슨 글로벌캠퍼스에서 시작하세요",
      about_title: "소개",
      about_content:
        "SAMK는 창업과 개발을 사랑하는 학생들이 모여 아이디어를 실현하고 함께 성장하는 조지메이슨 글로벌캠퍼스 기반의 동아리입니다。",
      events_title: "해커톤 정보",
      events_content: "SAMK가 소개하는 외부 해커톤과 대회 정보입니다。",
      events_hackathon1_title: "🎯 이미지 분류 해커톤",
      events_hackathon1_content: "데이터 속 아이콘의 종류를 맞혀라!",
      events_hackathon2_title: "🧠 기업 성공 확률 예측 해커톤",
      events_hackathon2_content: "미래의 성공기업을 발굴하라!",
      events_hackathon3_title: "Snowflake & Streamlit 해커톤",
      events_hackathon3_content: "데이터로 아이디어를 현실로 만들고 싶다면?",
      learn_more: "더 알아보기 →",
      team_title: "팀",
      team_content:
        "SAMK는 다양한 팀 단위로 아이디어를 발전시키고 협업하는 과정을 중시합니다. 각 팀은 고유한 주제와 목표를 갖고 독창적인 프로젝트를 수행합니다。",
      team_dif_title: "DIF",
      team_dif_content:
        "지역사회 문제 해결을 위한 디지털 솔루션을 개발하는 기술 중심 팀입니다。",
      team_jun_title: "Jun",
      team_jun_content:
        "창의적인 디자인과 사용자 경험을 통해 차별화된 서비스를 구상하는 디자인 중심 팀입니다。",
      team_sydney_title: "Sydney",
      team_sydney_content:
        "글로벌 시장을 겨냥한 스타트업 프로젝트를 기획하고 실행하는 글로벌 전략 팀입니다。",
      timeline_title: "타임라인",
      timeline_content: "SAMK의 주요 활동을 한눈에 확인하세요。",
      timeline_date1: "2024.10",
      timeline_event1_title: "첫 이미지 분류 해커톤",
      timeline_event1_content: "SAMK의 첫 해커톤, 데이터로 세상을 바꾸다!",
      timeline_date2: "2025.03",
      timeline_event2_title: "창업 세미나",
      timeline_event2_content: "스타트업 전문가와 함께한 아이디어 워크숍",
      timeline_date3: "2025.05",
      timeline_event3_title: "AI 워크숍 (예정)",
      timeline_event3_content: "AI 기술로 미래를 설계하는 실습 워크숍",
      recruit_title: "모집 안내",
      recruit_content:
        "연 2회 신입 모집 (봄/가을 학기). 자세한 일정은 Instagram 및 공지사항을 통해 확인해주세요。",
      check_instagram: "Instagram에서 확인하기",
      apply_now: "지금 지원하기",
    },
    en: {
      hero_title: "Welcome to SAMK",
      hero_subtitle: "Start at MASON KOREA",
      about_title: "About",
      about_content:
        "SAMK is a club based at George Mason University Korea, where students passionate about entrepreneurship and development come together to bring ideas to life and grow together.",
      events_title: "Hackathon Information",
      events_content:
        "External hackathons and competitions introduced by SAMK.",
      events_hackathon1_title: "🎯 Image Classification Hackathon",
      events_hackathon1_content: "Identify the types of icons in the data!",
      events_hackathon2_title: "🧠 Business Success Prediction Hackathon",
      events_hackathon2_content: "Discover the future successful businesses!",
      events_hackathon3_title: "Snowflake & Streamlit Hackathon",
      events_hackathon3_content:
        "Want to turn your ideas into reality with data?",
      learn_more: "Learn More →",
      team_title: "Teams",
      team_content:
        "SAMK values the process of developing ideas and collaborating in various teams. Each team has its unique themes and goals, working on creative projects.",
      team_dif_title: "DIF",
      team_dif_content:
        "A tech-focused team developing digital solutions to address community issues.",
      team_jun_title: "Jun",
      team_jun_content:
        "A design-focused team creating differentiated services through creative design and user experience.",
      team_sydney_title: "Sydney",
      team_sydney_content:
        "A global strategy team planning and executing startup projects aimed at the global market.",
      timeline_title: "Timeline",
      timeline_content: "Check out SAMK's major activities at a glance.",
      timeline_date1: "2024.10",
      timeline_event1_title: "First Image Classification Hackathon",
      timeline_event1_content:
        "SAMK's first hackathon, changing the world with data!",
      timeline_date2: "2025.03",
      timeline_event2_title: "Entrepreneurship Seminar",
      timeline_event2_content: "Idea workshop with startup experts",
      timeline_date3: "2025.05",
      timeline_event3_title: "AI Workshop (Planned)",
      timeline_event3_content:
        "A hands-on workshop designing the future with AI technology",
      recruit_title: "Recruitment",
      recruit_content:
        "Recruitment twice a year (Spring/Fall semester). Check detailed schedules on Instagram and announcements.",
      check_instagram: "Check on Instagram",
      apply_now: "Apply Now",
    },
  };

  // 현재 언어 상태 (기본값: 한국어)
  let currentLang = "ko";

  // 언어 변경 함수
  function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (languages[lang][key]) {
        element.textContent = languages[lang][key];
      }
    });
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
    // 타이핑 애니메이션 재실행
    index = 0;
    typingText.classList.add("typing");
    type();
  }

  // 타이핑 애니메이션
  const typingText = document.getElementById("typing-text");
  let textToType = languages[currentLang].hero_title;
  let index = 0;

  function type() {
    textToType = languages[currentLang].hero_title;
    if (index < textToType.length) {
      typingText.textContent = textToType.substring(0, index + 1);
      index++;
      setTimeout(type, 100);
    } else {
      typingText.classList.remove("typing");
    }
  }

  // 초기 타이핑 애니메이션 실행
  typingText.classList.add("typing");
  type();

  // 언어 드롭다운 토글
  const languageIcon = document.querySelector(".language-icon");
  const languageDropdown = document.querySelector(".language-dropdown");

  languageIcon.addEventListener("click", () => {
    languageDropdown.classList.toggle("active");
  });

  // 언어 버튼 클릭 이벤트
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      updateLanguage(lang);
      languageDropdown.classList.remove("active");
    });
  });

  // 섹션 스크롤 애니메이션
  const sections = document.querySelectorAll(".section");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 한 번 보이면 관찰 중지
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));

  // 네비게이션 링크 스크롤
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    });
  });

  // 모달 표시
  window.showModal = function (team) {
    const modal = document.getElementById("team-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMembers = document.getElementById("modal-members");

    if (team === "dif") {
      modalTitle.textContent = currentLang === "en" ? "DIF Team" : "DIF 팀";
      modalMembers.textContent = "Members: Alice, Bob, Charlie";
    } else if (team === "jun") {
      modalTitle.textContent = currentLang === "en" ? "Jun Team" : "Jun 팀";
      modalMembers.textContent = "Members: David, Emma, Frank";
    } else if (team === "sydney") {
      modalTitle.textContent =
        currentLang === "en" ? "Sydney Team" : "Sydney 팀";
      modalMembers.textContent = "Members: Grace, Henry, Isabel";
    }

    modal.style.display = "flex";
  };

  // 모달 닫기
  window.closeModal = function () {
    const modal = document.getElementById("team-modal");
    modal.style.display = "none";
  };

  // 햄버거 메뉴 토글
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  // 드롭다운 외부 클릭 시 닫기
  document.addEventListener("click", (e) => {
    if (
      !languageIcon.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("active");
    }
    if (
      !hamburger.contains(e.target) &&
      !navLinksContainer.contains(e.target)
    ) {
      navLinksContainer.classList.remove("active");
    }
  });
});
