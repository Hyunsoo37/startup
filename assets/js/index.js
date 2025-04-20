const translations = {
  ko: {
    hero_title: "Welcome to SAMK",
    hero_subtitle: "Start at Mason Korea - 창업과 개발의 시작",
    about_title: "소개",
    about_content:
      "SAMK는 창업과 개발을 사랑하는 학생들이 모여 아이디어를 실현하고 함께 성장하는 조지메이슨 글로벌캠퍼스 기반의 동아리입니다。",
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
    events_title: "해커톤 정보",
    events_content: "SAMK가 소개하는 외부 해커톤과 대회 정보입니다。",
    events_hackathon1_title: "🎯 이미지 분류 해커톤",
    events_hackathon1_content: "데이터 속 아이콘의 종류를 맞혀라!",
    events_hackathon2_title: "🧠 기업 성공 확률 예측 해커톤",
    events_hackathon2_content: "미래의 성공기업을 발굴하라!",
    events_hackathon3_title: "Snowflake & Streamlit 해커톤",
    events_hackathon3_content: "데이터로 아이디어를 현실로 만들고 싶다면?",
    learn_more: "더 알아보기 →",
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
    hero_subtitle:
      "Start at Mason Korea - The Beginning of Entrepreneurship and Development",
    about_title: "About",
    about_content:
      "SAMK is a student club at George Mason University Korea where passionate students come together to bring ideas to life and grow through entrepreneurship and development.",
    team_title: "Team",
    team_content:
      "SAMK values collaboration and idea development through diverse teams. Each team works on unique projects with distinct themes and goals.",
    team_dif_title: "DIF",
    team_dif_content:
      "A technology-focused team developing digital solutions to address community issues.",
    team_jun_title: "Jun",
    team_jun_content:
      "A design-focused team creating differentiated services through creative design and user experience.",
    team_sydney_title: "Sydney",
    team_sydney_content:
      "A global strategy team planning and executing startup projects targeting the international market.",
    events_title: "Hackathon Info",
    events_content:
      "Information on external hackathons and competitions introduced by SAMK.",
    events_hackathon1_title: "🎯 Image Classification Hackathon",
    events_hackathon1_content: "Identify the types of icons in the data!",
    events_hackathon2_title: "🧠 Startup Success Prediction Hackathon",
    events_hackathon2_content: "Discover the future successful companies!",
    events_hackathon3_title: "Snowflake & Streamlit Hackathon",
    events_hackathon3_content: "Want to turn ideas into reality with data?",
    learn_more: "Learn More →",
    timeline_title: "Timeline",
    timeline_content: "Explore SAMK's key activities at a glance.",
    timeline_date1: "2024.10",
    timeline_event1_title: "First Image Classification Hackathon",
    timeline_event1_content:
      "SAMK's first hackathon, changing the world with data!",
    timeline_date2: "2025.03",
    timeline_event2_title: "Startup Seminar",
    timeline_event2_content: "Idea workshop with startup experts",
    timeline_date3: "2025.05",
    timeline_event3_title: "AI Workshop (Upcoming)",
    timeline_event3_content: "Hands-on workshop designing the future with AI",
    recruit_title: "Recruitment",
    recruit_content:
      "We recruit new members twice a year (Spring/Fall semesters). Check our Instagram and announcements for detailed schedules.",
    check_instagram: "Check on Instagram",
    apply_now: "Apply Now",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll("[data-lang-key]");
let currentLang = "ko";
let typingTimeout = null;
let isNavigating = false;

const teamData = {
  dif: {
    title: translations.ko.team_dif_title,
    members: "박새봄(팀장), 하태준, 오태준, 이현수",
  },
  jun: {
    title: translations.ko.team_jun_title,
    members: "최민수 (리더), 정수진 (UX 전문가), 김다영 (개발자)",
  },
  sydney: {
    title: translations.ko.team_sydney_title,
    members: "이현우 (리더), 박지훈 (마케터), 송민지 (기획자)",
  },
};

function setLanguage(lang) {
  console.log(`setLanguage called with lang: ${lang}`);
  if (typingTimeout) {
    console.log("Clearing previous typing animation");
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
  currentLang = lang;
  teamData.dif.title = translations[lang].team_dif_title;
  teamData.jun.title = translations[lang].team_jun_title;
  teamData.sydney.title = translations[lang].team_sydney_title;
  langElements.forEach((el) => {
    let text = translations[lang][el.dataset.langKey];
    if (el.dataset.langKey === "hero_subtitle" && lang === "ko") {
      text = "Start at Mason Korea - 창업과 개발의 시작";
    }
    if (el.id === "typing-text") {
      startTypingAnimation(text);
    } else {
      el.textContent = text;
    }
  });
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function startTypingAnimation(text) {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) {
    console.error("Typing element not found");
    return;
  }
  console.log(`Starting typing animation with text: ${text}`);
  if (typingTimeout) {
    console.log("Animation cleared before starting new");
    clearTimeout(typingTimeout);
  }
  typingElement.textContent = "";
  typingElement.classList.add("typing");
  let i = 0;
  function type() {
    if (i < text.length) {
      const char = text.charAt(i);
      typingElement.textContent += char;
      console.log(`Character added: ${char}`);
      i++;
      typingTimeout = setTimeout(type, 80);
    } else {
      typingElement.classList.remove("typing");
      console.log("Typing animation completed");
      typingTimeout = null;
    }
  }
  type();
}

function showModal(team) {
  console.log(`Showing modal for team: ${team}`);
  const modal = document.getElementById("team-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalMembers = document.getElementById("modal-members");
  modalTitle.textContent = teamData[team].title;
  modalMembers.textContent = `Members: ${teamData[team].members}`;
  modal.style.display = "flex";
}

function closeModal() {
  console.log("Closing modal");
  document.getElementById("team-modal").style.display = "none";
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`Language button clicked: ${btn.dataset.lang}`);
    setLanguage(btn.dataset.lang);
  });
});

const sections = document.querySelectorAll(".section, .hero");
let observer;

function setupIntersectionObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      if (isNavigating) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Section visible: ${entry.target.id || "hero"}`);
          sections.forEach((section) => {
            section.classList.add("hidden");
            section.classList.remove("visible");
          });
          entry.target.classList.remove("hidden");
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "-5% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      console.log(`Navigating to section: ${targetId}`);
      isNavigating = true;

      sections.forEach((section) => {
        section.classList.add("hidden");
        section.classList.remove("visible");
      });
      targetSection.classList.remove("hidden");
      targetSection.classList.add("visible");

      const navHeight = document.querySelector("nav").offsetHeight;
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isNavigating = false;
        console.log("Navigation completed, re-enabling IntersectionObserver");
      }, 1000);
    } else {
      console.error(`Target section not found: ${targetId}`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  try {
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
      console.log("Initializing typing animation");
      setLanguage("ko");
    } else {
      console.error("Typing text element not found");
    }
    setupIntersectionObserver();
  } catch (error) {
    console.error("Initialization error:", error);
  }
});
