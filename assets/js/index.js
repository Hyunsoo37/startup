/* DOM이 완전히 로드되었을 때 실행 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM 완전히 로드됨");

  /* 언어 데이터 객체 (한국어와 영어 지원) */
  const languages = {
    ko: {
      hero_title: "SAMK에 오신 것을 환영합니다",
      hero_subtitle: "조지메이슨 글로벌캠퍼스에서 시작하세요",
      about_title: "소개",
      about_content:
        "SAMK는 창업과 개발을 사랑하는 학생들이 모여 아이디어를 실현하고 함께 공모전을 나가고 성장하는 조지메이슨 글로벌캠퍼스 기반의 동아리입니다。",
      events_title: "공모전",
      events_content: "SAMK가 추천하는 외부 해커톤과 공모전 대회 정보입니다。",
      events_hackathon1_title: "서울청년기획봉사단",
      events_hackathon1_content: "함께 성장하는 대학생 봉사 기획",
      events_hackathon2_title: "인천 대학연합 창업아카데미",
      events_hackathon2_content: "창업 아이디어 발굴 및 지원",
      events_hackathon3_title: "하나 소셜벤처 유니버시티",
      events_hackathon3_content:
        "창업 인재를 발굴/육성하는 국내 최초의 거점대학 연계형 청년 창업 육성 프로그램",
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
      timeline_date1: "2025.06",
      timeline_event1_title: "서울동행 프로젝트 실시",
      timeline_event1_content:
        "서울시에서 주최하는 프로젝트를 LG헬로비전과 함께 진행합니다",
      timeline_date2: "2025.07",
      timeline_event2_title: "인천 대학연합 창업아카데미",
      timeline_event2_content:
        "인천시에서 청년 창업 아이디어를 발전 & 지원 합니다。",
      timeline_date3: "2025.11",
      timeline_event3_title: "AI 워크숍 (예정)",
      timeline_event3_content: "AI 기술로 미래를 설계하는 실습 워크숍",
      recruit_title: "모집 안내",
      recruit_content:
        "가을 학기 모집 예정 자세한 일정은 Instagram 및 공지사항을 통해 확인해주세요",
      check_instagram: "Instagram에서 확인하기",
      apply_now: "지금 지원하기",
      footer_copyright: "Copyright © SAMK All Rights Reserved.",
      footer_made_by: "Made with by SAMK",
      footer_version: "2025 Ver. Created by <strong>SAMK</strong>",
      footer_address:
        "경기도 인천시 연수구 송도문화로 119, 조지메이슨대학교 글로벌캠퍼스",
      footer_email: "spark279@gmu.edu",
      footer_president_label: "회장",
      footer_president: "박새봄 010-9454-0836",
      footer_vice_president_label: "부회장",
      footer_vice_president: "하태준 010-4775-7419",
    },
    en: {
      hero_title: "Welcome to SAMK",
      hero_subtitle: "Start at MASON KOREA",
      about_title: "About",
      about_content:
        "SAMK is a club based at George Mason University Korea, where students passionate about entrepreneurship and development come together to bring ideas to life and grow together.",
      events_title: "Contest",
      events_content:
        "Here is information on external hackathons and competitions recommended by SAMK.",
      events_hackathon1_title: "Seoul Youth Planning Volunteer Group",
      events_hackathon1_content:
        "Planning university student volunteer activities for mutual growth",
      events_hackathon2_title: "Incheon University Union Startup Academy",
      events_hackathon2_content: "Discover and support startup ideas",
      events_hackathon3_title: "Hana Social Venture University",
      events_hackathon3_content:
        "The first university-linked youth startup program in Korea to discover and nurture startup talents",
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
      timeline_date1: "2025.06",
      timeline_event1_title: "Seoul Project",
      timeline_event1_content:
        "A project hosted by the Seoul Metropolitan Government in collaboration with LG HelloVision.",
      timeline_date2: "2025.07",
      timeline_event2_title: "Incheon University Union Startup Academy",
      timeline_event2_content:
        "Supporting the development of youth startup ideas in Incheon.",
      timeline_date3: "2025.11",
      timeline_event3_title: "AI Workshop (Planned)",
      timeline_event3_content:
        "A hands-on workshop designing the future with AI technology",
      recruit_title: "Recruitment",
      recruit_content:
        "Please check our Instagram and official announcements for detailed information about the upcoming Fall semester recruitment schedule.",
      check_instagram: "Check on Instagram",
      apply_now: "Apply Now",
      footer_copyright: "Copyright © SAMK All Rights Reserved.",
      footer_made_by: "Made with by SAMK",
      footer_version: "2025 Ver. Created by <strong>SAMK</strong>",
      footer_address:
        "119 Songdo Munhwa-ro, Yeonsu-gu, Incheon, South Korea, George Mason University Korea",
      footer_email: "spark279@gmu.edu",
      footer_president_label: "President",
      footer_president: "Saebom Park 010-9454-0836",
      footer_vice_president_label: "Vice President",
      footer_vice_president: "Taejun Ha 010-4775-7419",
    },
  };

  /* 현재 언어 상태 (기본값: 한국어) */
  let currentLang = "ko";

  /* 언어 변경 함수 */
  function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (languages[lang][key]) {
        // HTML 태그가 포함된 경우 innerHTML 사용
        if (key === "footer_version") {
          element.innerHTML = languages[lang][key];
        } else {
          element.textContent = languages[lang][key];
        }
      }
    });
    document.documentElement.lang = lang; /* HTML lang 속성 업데이트 */
    /* 타이핑 애니메이션 초기화 */
    index = 0;
    typingText.classList.add("typing");
    type();
  }

  /* 타이핑 애니메이션 설정 */
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
    const textToType = languages[currentLang].hero_title;
    if (index < textToType.length) {
      typingText.textContent = textToType.substring(0, index + 1);
      index++;
      setTimeout(type, 100);
    } else {
      typingText.classList.remove("typing");
    }
  }

  /* 초기 타이핑 애니메이션 실행 */
  typingText.classList.add("typing");
  type();

  /* 언어 드롭다운 토글 */
  const languageIcon = document.querySelector(".language-icon");
  const languageDropdown = document.querySelector(".language-dropdown");

  languageIcon.addEventListener("click", () => {
    languageDropdown.classList.toggle("active");
  });

  /* 언어 버튼 클릭 이벤트 */
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      updateLanguage(button.getAttribute("data-lang"));
      languageDropdown.classList.remove("active");
    });
  });

  /* 섹션 스크롤 애니메이션 */
  const sections = document.querySelectorAll(".section");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); /* 한 번 보이면 관찰 중지 */
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  /* 내비게이션 링크 스크롤 */
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
      /* 모바일에서 메뉴 닫기 */
      document.querySelector(".nav-links").classList.remove("active");
    });
  });

  /* 모달 표시 함수 */
  window.showModal = function (team) {
    const modal = document.getElementById("team-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMembers = document.getElementById("modal-members");

    const teamData = {
      dif: {
        title: currentLang === "en" ? "DIF Team" : "DIF 팀",
        members: "Members: 박새봄(팀장), 하태준, 오태준, 이현수",
      },
      jun: {
        title: currentLang === "en" ? "Jun Team" : "Jun 팀",
        members: "Members: David, Emma, Frank",
      },
      sydney: {
        title: currentLang === "en" ? "Sydney Team" : "Sydney 팀",
        members: "Members: Sydney(팀장), Henry, Isabel",
      },
    };

    if (teamData[team]) {
      modalTitle.textContent = teamData[team].title;
      modalMembers.textContent = teamData[team].members;
      modal.style.display = "flex";
    }
  };

  /* 모달 닫기 함수 */
  window.closeModal = function () {
    document.getElementById("team-modal").style.display = "none";
  };

  /* 햄버거 메뉴 토글 */
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  /* 드롭다운 및 메뉴 외부 클릭 시 닫기 */
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
