const EMAIL = "ayxwdcx@163.com";

const translations = {
    zh: {
        brand: "毛玉林",
        navAbout: "关于",
        navSkills: "技能",
        navProjects: "项目",
        navLearning: "学习",
        navContact: "联系",
        themeButton: "Dark",
        themeButtonApple: "Light",
        heroEyebrow: "Nankai University · Software Engineering",
        name: "毛玉林",
        heroSubtitle: "南开大学软件工程 2026 届本科生，研0准研究生，关注算法、工程系统与智能应用开发。",
        copyEmail: "Email",
        copied: "邮箱已复制",
        copyFailed: "复制失败，请手动复制 ayxwdcx@163.com",
        avatarAlt: "毛玉林头像",
        panelLabel: "Current Focus",
        panelTitle: "算法 / 软件开发实习",
        panelText: "具备科研项目、企业实践和独立开发经验，偏好将模型能力落到可用产品中。",
        aboutEyebrow: "About",
        aboutTitle: "扎实的软件工程背景，持续面向真实问题构建。",
        eduTitle: "教育经历",
        eduText: "南开大学软件工程专业 2026 届本科毕业生，已获得保研本院资格，目前为研0准研究生。",
        foundationTitle: "专业基础",
        foundationText: "专业排名前 30%，主修 C++、数据结构、数据库、Java 等课程，重视工程质量与可维护性。",
        practiceTitle: "实践方向",
        practiceText: "曾负责大创项目、企业实习及多个独立开发项目，希望寻找算法或软件开发方向实习机会。",
        labTitle: "实验室研究",
        labText: "本实验室致力于基于图神经网络的药物-靶标相互作用预测研究，研究方向涵盖分子与蛋白的图表示学习、表征融合、跨模态对齐、模型可解释性与高通量筛选加速方法。",
        skillsEyebrow: "Skills",
        skillsTitle: "从后端工程到 AI 应用原型，覆盖完整开发链路。",
        projectsEyebrow: "Selected Work",
        projectsTitle: "精选项目",
        projectOneMeta: "PyTorch · Web Platform",
        projectOneTitle: "推荐算法投毒攻击研究",
        projectOneText: "国家级大创项目，集成多种推荐算法，支持投毒攻击模拟与可视化评估。",
        projectTwoMeta: "Vue · LangChain · LLM API",
        projectTwoTitle: "LangChain 智能客服系统",
        projectTwoText: "中软国际项目，覆盖美食、医疗、交通、旅行场景，集成语音与地图服务。",
        projectThreeMeta: "C++ · QT",
        projectThreeTitle: "Ash Impact 横板射击游戏",
        projectThreeText: "独立开发角色操控、碰撞检测等机制，入选校级展示活动。",
        learningEyebrow: "Learning",
        learningTitle: "最近在学什么",
        learningOneTitle: "大模型工程与智能交互",
        learningOneText: "探索 LangChain、Prompt 设计与检索增强应用，打造更实用的智能服务。",
        learningTwoTitle: "云原生部署与微服务",
        learningTwoText: "学习 Kubernetes、Docker 和 CI/CD，提升应用可靠性与交付效率。",
        learningThreeTitle: "算法性能与系统优化",
        learningThreeText: "练习算法题与工程性能分析，以更高效的方式实现复杂系统。",
        labEyebrow: "实验室",
        contactEyebrow: "Contact",
        contactTitle: "保持联系",
        contactText: "欢迎与我交流算法、软件开发、智能应用相关机会。",
        footerLink: "终末星界秘所"
    },
    en: {
        brand: "Yuri Mao",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Work",
        navLearning: "Learning",
        navContact: "Contact",
        themeButton: "Dark",
        themeButtonApple: "Light",
        heroEyebrow: "Nankai University · Software Engineering",
        name: "Yuri Mao",
        heroSubtitle: "Software Engineering undergraduate at Nankai University, class of 2026, incoming graduate student focused on algorithms, engineering systems, and intelligent applications.",
        copyEmail: "Copy email",
        copied: "Email copied",
        copyFailed: "Copy failed. Please copy ayxwdcx@163.com manually.",
        avatarAlt: "Portrait of Yuri Mao",
        panelLabel: "Current Focus",
        panelTitle: "Algorithm / Software Engineering Internship",
        panelText: "Research, enterprise practice, and independent development experience, with a focus on turning model capabilities into usable products.",
        aboutEyebrow: "About",
        aboutTitle: "A software engineering foundation shaped by real problems.",
        eduTitle: "Education",
        eduText: "Software Engineering undergraduate at Nankai University, class of 2026, admitted to continue graduate study in the same school.",
        foundationTitle: "Foundation",
        foundationText: "Top 30% in the major, with coursework in C++, data structures, databases, Java, and a strong interest in maintainable engineering.",
        practiceTitle: "Practice",
        practiceText: "Experience across national innovation projects, enterprise practice, and independent development. Seeking internships in algorithms or software engineering.",
        skillsEyebrow: "Skills",
        skillsTitle: "From backend systems to AI prototypes, covering the full development path.",
        projectsEyebrow: "Selected Work",
        projectsTitle: "Selected Projects",
        projectOneMeta: "PyTorch · Web Platform",
        projectOneTitle: "Recommendation Poisoning Attack Research",
        projectOneText: "National innovation project integrating multiple recommendation algorithms with poisoning simulation and visual evaluation.",
        projectTwoMeta: "Vue · LangChain · LLM API",
        projectTwoTitle: "LangChain Intelligent Customer Service",
        projectTwoText: "Enterprise practice project covering food, healthcare, transportation, and travel scenarios with voice and map services.",
        projectThreeMeta: "C++ · QT",
        projectThreeTitle: "Ash Impact Side-scrolling Shooter",
        projectThreeText: "Independently developed character control and collision detection systems; selected for a university showcase.",
        labTitle: "Lab Research",
        labText: "Our lab focuses on graph neural network-based drug–target interaction prediction. Research spans graph representation learning for molecules and proteins, embedding fusion, cross-modal alignment, model explainability, and scalable methods for accelerated high-throughput screening.",
        learningEyebrow: "Learning",
        learningTitle: "What I'm learning recently",
        learningOneTitle: "LLM engineering and smart interaction",
        learningOneText: "Exploring LangChain, prompt design and retrieval-augmented applications for practical intelligent services.",
        learningTwoTitle: "Cloud-native deployment and microservices",
        learningTwoText: "Studying Kubernetes, Docker, and CI/CD to improve application reliability and delivery efficiency.",
        learningThreeTitle: "Algorithm performance and systems optimization",
        learningThreeText: "Practicing algorithm problems and performance analysis to make complex systems more efficient.",
        labEyebrow: "Lab",
        contactEyebrow: "Contact",
        contactTitle: "Get in touch",
        contactText: "Reach me for algorithm, software engineering, and intelligent application opportunities.",
        footerLink: "Endfield Secret Base"
    }
};

const header = document.querySelector("[data-header]");
const toast = document.querySelector("[data-toast]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const copyEmailButtons = document.querySelectorAll("[data-copy-email]");
const revealTargets = document.querySelectorAll(".reveal");

let currentLang = localStorage.getItem("lang") || "zh";
let currentTheme = localStorage.getItem("theme") || "apple";
let toastTimer = null;

const getText = (key) => translations[currentLang][key] || translations.zh[key] || "";

const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 1800);
};

const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    textarea.remove();
    return success;
};

const copyEmail = async () => {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(EMAIL);
        } else if (!fallbackCopy(EMAIL)) {
            throw new Error("copy failed");
        }
        showToast(getText("copied"));
    } catch {
        if (fallbackCopy(EMAIL)) {
            showToast(getText("copied"));
        } else {
            showToast(getText("copyFailed"));
        }
    }
};

const applyLanguage = () => {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = getText(key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
        element.dataset.i18nAttr.split(",").forEach((pair) => {
            const [attr, key] = pair.split(":").map((part) => part.trim());
            if (attr && key) element.setAttribute(attr, getText(key));
        });
    });

    if (langToggle) {
        langToggle.textContent = currentLang === "zh" ? "EN" : "中";
        langToggle.setAttribute("aria-label", currentLang === "zh" ? "Switch to English" : "切换到中文");
    }

    localStorage.setItem("lang", currentLang);
};

const applyTheme = () => {
    document.body.dataset.theme = currentTheme;
    if (themeToggle) {
        themeToggle.textContent = currentTheme === "apple" ? getText("themeButton") : getText("themeButtonApple");
        themeToggle.setAttribute("aria-label", currentTheme === "apple" ? "切换到舞台紫主题" : "切换到苹果风主题");
    }
    localStorage.setItem("theme", currentTheme);
};

const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

themeToggle?.addEventListener("click", () => {
    currentTheme = currentTheme === "apple" ? "stage" : "apple";
    applyTheme();
});

langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage();
    applyTheme();
});

copyEmailButtons.forEach((button) => {
    button.addEventListener("click", copyEmail);
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealTargets.forEach((target) => observer.observe(target));
} else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
}

applyLanguage();
applyTheme();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
