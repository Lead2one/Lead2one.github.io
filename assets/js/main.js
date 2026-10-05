const EMAIL = "ayxwdcx@163.com";

document.documentElement.classList.add("js");

const translations = {
    zh: {
        pageTitle: "毛玉林 | 后端与系统开发",
        pageDescription: "南开大学软件工程硕士在读，2029 届。具备 C/C++、Linux、后端系统与 PyTorch 项目经历，寻求后端开发实习，关注 ML Systems 与大模型推理服务。",
        navExperience: "经历",
        heroRole: "后端与系统开发",
        heroFocus: "关注 ML Systems · LLM Serving",
        viewProjects: "查看项目",
        panelFutureLabel: "长期技术关注",
        panelFutureText: "ML Systems / 大模型推理服务",
        experienceEyebrow: "Engineering Experience",
        experienceTitle: "工程经历",
        experienceIntro: "从 C++ 开发环境到业务系统集成，积累真实工程场景中的开发经验。",
        experienceOneLabel: "C++ / LINUX",
        experienceOneTitle: "经纬恒润 · 中央研究院",
        experienceOneRole: "C/C++ 工程实践",
        experienceOneText: "参与 C/C++ 与 Linux 环境下的工程开发，实践涉及 CMake、Docker、ROS 与 GTest。",
        experienceTwoLabel: "BACKEND SYSTEMS",
        experienceTwoTitle: "统一认证与权限管理",
        experienceTwoRole: "后端系统项目",
        experienceTwoText: "参与统一认证项目，涉及单点登录、权限管理、第三方平台集成与用户数据同步。",
        projectsIntro: "围绕后端系统、模型实验与应用集成，展示已参与的项目与实践范围。",
        projectAuthMeta: "Spring · MyBatis · Oracle · Redis",
        projectAuthTitle: "统一认证与权限管理系统",
        projectAuthText: "参与认证、权限与第三方系统集成相关开发，项目涉及 SSO、RBAC、Session、Token 与 HMAC。",
        projectAuthDetailLabel: "实践范围",
        projectAuthDetailText: "用户数据同步与一致性",
        projectOneDetailLabel: "实验能力",
        projectOneDetailText: "算法集成 · 攻击模拟 · 指标评估",
        projectTwoDetailLabel: "应用集成",
        projectTwoDetailText: "LLM API · 语音交互 · 地图服务",
        learningIntro: "从已有工程经历出发，逐步补齐 ML Systems 基础。以下为计划学习与验证的方向。",
        plannedLabel: "计划学习",
        brand: "毛玉林",
        navAbout: "关于",
        navSkills: "技能",
        navProjects: "项目",
        navLearning: "探索",
        navContact: "联系",
        themeButton: "Dark",
        themeButtonApple: "Light",
        heroEyebrow: "Nankai University · Software Engineering",
        name: "毛玉林",
        heroSubtitle: "南开大学软件工程硕士在读，2029 届。具备 C/C++、Linux 与后端开发实践经历，并参与过 PyTorch 相关科研及大模型应用项目。目前寻求后端开发实习机会，关注服务可靠性与性能优化，计划进一步探索机器学习系统与大模型推理服务。",
        copyEmail: "复制邮箱",
        copied: "邮箱已复制",
        copyFailed: "复制失败，请手动复制 ayxwdcx@163.com",
        avatarAlt: "毛玉林头像",
        panelLabel: "当前求职方向",
        panelTitle: "后端开发实习",
        panelText: "以系统与后端工程经历为基础，期待参与服务开发、问题排查与工程协作。",
        profileTagsLabel: "技术方向",
        profileTagOne: "C/C++",
        profileTagTwo: "Linux",
        profileTagThree: "后端工程",
        metricsLabel: "个人能力摘要",
        metricOneValue: "2029",
        metricOneLabel: "软件工程硕士",
        metricTwoValue: "C++ / Linux",
        metricTwoLabel: "系统开发实践",
        metricThreeValue: "PyTorch",
        metricThreeLabel: "科研与模型实验",
        aboutEyebrow: "About",
        aboutTitle: "工程实践为基础，系统能力持续深入。",
        eduTitle: "教育经历",
        eduText: "南开大学软件工程硕士在读，预计 2029 年毕业。持续积累工程实践，重视计算机基础与技术表达。",
        foundationTitle: "系统与后端实践",
        foundationText: "经历覆盖 C/C++ 与 Linux 开发、统一认证与权限管理，以及第三方系统集成，关注接口边界与功能验证。",
        practiceTitle: "面向机器学习系统",
        practiceText: "在 PyTorch 科研与大模型应用经历上，计划逐步学习模型机制、推理服务与性能评测，形成更深入的系统工程能力。",
        labTitle: "实验室研究方向",
        labText: "实验室研究方向为基于图神经网络的药物-靶标相互作用预测，探索深度学习方法在生物医学问题中的应用。",
        labMeta: "方向：图神经网络 · 药物-靶标相互作用预测",
        skillsEyebrow: "Skills",
        skillsTitle: "来自项目实践的技术积累。",
        skillsLabel: "技能列表",
        skillSystemTitle: "C++ 与 Linux",
        skillSystemText: "结合工程实践使用 C/C++、Linux、CMake、Docker、ROS 与 GTest，积累开发、构建与测试经验。",
        skillBackendTitle: "后端系统",
        skillBackendText: "围绕统一认证项目，涉及 Java、Spring、MyBatis、Oracle 与 Redis，以及认证、权限和数据同步。",
        skillEngineeringTitle: "Python 与模型应用",
        skillEngineeringText: "参与 PyTorch 推荐算法实验及图神经网络研究，并在智能客服项目中接入 LangChain 与 LLM API。",
        projectsEyebrow: "Selected Projects",
        projectsTitle: "精选工程与科研项目",
        projectOneMeta: "PyTorch · Web Platform",
        projectOneTitle: "推荐算法投毒攻击研究",
        projectOneText: "国家级大创项目，集成多种推荐算法，构建投毒攻击模拟、指标评估与可视化分析流程。",
        projectTwoMeta: "LangChain · LLM API · Vue",
        projectTwoTitle: "智能客服系统",
        projectTwoText: "中软国际企业实践项目，面向多场景服务咨询，整合模型、语音与地图能力，积累外部服务集成经验。",
        projectThreeMeta: "C++ · QT",
        projectThreeTitle: "Ash Impact 横板射击游戏",
        projectThreeText: "独立实现角色操控、碰撞检测与关卡机制，完成从玩法原型到校级展示的完整交付。",
        moreProjectsClosed: "展开更多项目",
        moreProjectsOpen: "收起更多项目",
        projectFourMeta: "HTML/CSS · Interaction Design",
        projectFourTitle: "终末星界秘所",
        projectFourText: "面向兴趣内容的独立站点，探索轻量交互、视觉表达与内容组织。",
        projectFiveMeta: "GNN · Bioinformatics",
        projectFiveTitle: "药物-靶标预测研究",
        projectFiveText: "围绕图神经网络、表征融合与可解释性方法，参与实验室科研方向建设。",
        projectSixMeta: "Engineering · Prototypes",
        projectSixTitle: "工程原型合集",
        projectSixText: "沉淀算法练习、工程实验与智能应用原型，持续补全可复用的开发经验。",
        projectSevenMeta: "HarmonyOS NEXT · ArkTS · SQLite",
        projectSevenTitle: "谷仓 · 二次元收藏图鉴",
        projectSevenText: "离线优先的原生收藏管理 App，支持藏品录入、分类筛选、角色图鉴、数据统计与本地图片存储。",
        learningEyebrow: "Next Steps",
        learningTitle: "下一阶段的学习计划",
        learningOneTitle: "PyTorch 与模型机制",
        learningOneText: "深化 Tensor、Autograd 与混合精度理解，阅读或实现小型 Transformer，梳理 Attention、Prefill、Decode 与 KV Cache。",
        learningTwoTitle: "LLM Serving 实践",
        learningTwoText: "计划从 vLLM 入门，部署开源模型，理解批处理与缓存机制，建立包含实验配置、工作负载和结果记录的服务评测。",
        learningThreeTitle: "性能分析与可靠性",
        learningThreeText: "结合 Linux 调试、服务测试与性能分析，学习吞吐量、TTFT 和延迟分位数的测量方法，逐步形成可复现的实验记录。",
        labEyebrow: "实验室",
        contactEyebrow: "Contact",
        contactTitle: "交流工程问题，寻找实习机会。",
        contactText: "目前寻求后端开发实习机会，也欢迎交流 C++ / Linux、服务开发与机器学习系统相关实践。",
        footerLink: "终末星界秘所",
        footerNote: "Backend & Systems · Exploring ML Systems"
    },
    en: {
        pageTitle: "Yuri Mao | Backend & Systems",
        pageDescription: "Software Engineering master's student at Nankai University, class of 2029. Experience in C/C++, Linux, backend systems, and PyTorch projects. Seeking backend internships; interested in ML systems and LLM serving.",
        navExperience: "Experience",
        heroRole: "Backend & Systems",
        heroFocus: "Interested in ML Systems · LLM Serving",
        viewProjects: "View projects",
        panelFutureLabel: "Long-term interests",
        panelFutureText: "ML Systems / LLM Serving",
        experienceEyebrow: "Engineering Experience",
        experienceTitle: "Engineering experience",
        experienceIntro: "Practical development experience across C++ environments and business system integration.",
        experienceOneLabel: "C++ / LINUX",
        experienceOneTitle: "HiRain · Central Research Institute",
        experienceOneRole: "C/C++ engineering practice",
        experienceOneText: "Contributed to C/C++ engineering in Linux environments, with practice involving CMake, Docker, ROS, and GTest.",
        experienceTwoLabel: "BACKEND SYSTEMS",
        experienceTwoTitle: "Unified authentication & access control",
        experienceTwoRole: "Backend systems project",
        experienceTwoText: "Contributed to a unified authentication project involving single sign-on, access control, third-party integration, and user data synchronization.",
        projectsIntro: "Selected work in backend systems, model experiments, and application integration.",
        projectAuthMeta: "Spring · MyBatis · Oracle · Redis",
        projectAuthTitle: "Unified Authentication & Access Control",
        projectAuthText: "Contributed to authentication, access control, and third-party integration. The project involved SSO, RBAC, sessions, tokens, and HMAC.",
        projectAuthDetailLabel: "Project scope",
        projectAuthDetailText: "User data synchronization & consistency",
        projectOneDetailLabel: "Experiments",
        projectOneDetailText: "Algorithm integration · Attack simulation · Evaluation",
        projectTwoDetailLabel: "Integration",
        projectTwoDetailText: "LLM APIs · Voice interaction · Map services",
        learningIntro: "Building ML systems fundamentals on existing engineering experience. These are planned areas of study and experimentation.",
        plannedLabel: "Planned study",
        brand: "Yuri Mao",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Work",
        navLearning: "Exploration",
        navContact: "Contact",
        themeButton: "Dark",
        themeButtonApple: "Light",
        heroEyebrow: "Nankai University · Software Engineering",
        name: "Yuri Mao",
        heroSubtitle: "Software Engineering master's student at Nankai University, class of 2029. Hands-on experience in C/C++, Linux, and backend development, alongside PyTorch research and LLM application projects. Seeking a backend internship, with an interest in service reliability and performance and plans to explore ML systems and LLM serving.",
        copyEmail: "Copy email",
        copied: "Email copied",
        copyFailed: "Copy failed. Please copy ayxwdcx@163.com manually.",
        avatarAlt: "Portrait of Yuri Mao",
        panelLabel: "Currently seeking",
        panelTitle: "Backend Internship",
        panelText: "Building on systems and backend engineering experience, looking to contribute to service development, debugging, and team delivery.",
        profileTagsLabel: "Technical focus",
        profileTagOne: "C/C++",
        profileTagTwo: "Linux",
        profileTagThree: "Backend",
        metricsLabel: "Profile highlights",
        metricOneValue: "2029",
        metricOneLabel: "Software Engineering · Nankai",
        metricTwoValue: "C++ / Linux",
        metricTwoLabel: "Systems practice",
        metricThreeValue: "PyTorch",
        metricThreeLabel: "Research & experiments",
        aboutEyebrow: "About",
        aboutTitle: "Grounded in engineering. Growing in systems.",
        eduTitle: "Education",
        eduText: "Software Engineering master's student at Nankai University, graduating in 2029. Building engineering experience with attention to computer science fundamentals and technical communication.",
        foundationTitle: "Systems & backend practice",
        foundationText: "Experience spanning C/C++ and Linux development, unified authentication, access control, and third-party integration, with attention to interface boundaries and validation.",
        practiceTitle: "Towards ML systems",
        practiceText: "Building on PyTorch research and LLM application experience, with plans to study model internals, serving, and performance evaluation.",
        labTitle: "Lab Research Focus",
        labText: "The lab focuses on graph neural network-based drug-target interaction prediction, exploring deep learning methods for biomedical problems.",
        labMeta: "Focus: graph neural networks · drug-target interaction prediction",
        skillsEyebrow: "Skills",
        skillsTitle: "Technical experience built through projects.",
        skillsLabel: "Skills overview",
        skillSystemTitle: "C++ & Linux",
        skillSystemText: "Practical experience using C/C++, Linux, CMake, Docker, ROS, and GTest across development, build, and testing workflows.",
        skillBackendTitle: "Backend systems",
        skillBackendText: "Unified authentication project experience involving Java, Spring, MyBatis, Oracle, and Redis, covering authentication, access control, and data synchronization.",
        skillEngineeringTitle: "Python & model applications",
        skillEngineeringText: "Contributed to PyTorch recommendation experiments and graph neural network research, plus LangChain and LLM API integration in a customer-service project.",
        projectsEyebrow: "Selected Projects",
        projectsTitle: "Engineering & research projects",
        projectOneMeta: "PyTorch · Web Platform",
        projectOneTitle: "Recommendation Poisoning Attack Research",
        projectOneText: "National innovation project integrating recommendation algorithms with poisoning simulation, metric evaluation, and visual analysis.",
        projectTwoMeta: "LangChain · LLM API · Vue",
        projectTwoTitle: "Intelligent Customer Service",
        projectTwoText: "Enterprise practice project for multi-scenario customer service, integrating model, voice, and map capabilities to gain external service integration experience.",
        projectThreeMeta: "C++ · QT",
        projectThreeTitle: "Ash Impact Side-scrolling Shooter",
        projectThreeText: "Independently built character control, collision detection, and level mechanics, taking the game from prototype to university showcase.",
        moreProjectsClosed: "Show more projects",
        moreProjectsOpen: "Show fewer projects",
        projectFourMeta: "HTML/CSS · Interaction Design",
        projectFourTitle: "Endfield Secret Base",
        projectFourText: "An independent interest site exploring lightweight interaction, visual expression, and content structure.",
        projectFiveMeta: "GNN · Bioinformatics",
        projectFiveTitle: "Drug-target Prediction Research",
        projectFiveText: "Lab research around graph neural networks, representation fusion, and explainable prediction methods.",
        projectSixMeta: "Engineering · Prototypes",
        projectSixTitle: "Engineering Prototype Set",
        projectSixText: "A growing collection of algorithm practice, engineering experiments, and intelligent application prototypes.",
        projectSevenMeta: "HarmonyOS NEXT · ArkTS · SQLite",
        projectSevenTitle: "Gucang · Anime Collection Archive",
        projectSevenText: "An offline-first native collection manager with item cataloging, filters, character galleries, statistics, and local image storage.",
        learningEyebrow: "Next Steps",
        learningTitle: "A focused learning roadmap",
        learningOneTitle: "PyTorch & model internals",
        learningOneText: "Deepen understanding of tensors, autograd, and mixed precision. Read or implement a small Transformer to study attention, prefill, decode, and the KV cache.",
        learningTwoTitle: "LLM serving practice",
        learningTwoText: "Start with vLLM and deploy an open model. Study batching and caching, and record configurations, workloads, and results for serving experiments.",
        learningThreeTitle: "Performance & reliability",
        learningThreeText: "Build on Linux debugging, service testing, and performance analysis to learn throughput, TTFT, and latency-percentile measurement through reproducible experiments.",
        labEyebrow: "Lab",
        contactEyebrow: "Contact",
        contactTitle: "Let's discuss engineering.",
        contactText: "Seeking backend development internships. Also open to conversations about C++ / Linux, service development, and practical ML systems work.",
        footerLink: "Endfield Secret Base",
        footerNote: "Backend & Systems · Exploring ML Systems"
    }
};

const header = document.querySelector("[data-header]");
const toast = document.querySelector("[data-toast]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const copyEmailButtons = document.querySelectorAll("[data-copy-email]");
const projectMore = document.querySelector("[data-project-more]");
const projectToggle = document.querySelector("[data-project-toggle]");
const projectPanel = document.querySelector("[data-project-panel]");
const revealTargets = document.querySelectorAll(".reveal");
const interactiveSurfaces = document.querySelectorAll(".hero-visual, .feature-card, .project-card, .lab-inner, .contact-inner");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentLang = localStorage.getItem("lang") || "zh";
let currentTheme = localStorage.getItem("theme") || "apple";
let toastTimer = null;

const getText = (key) => translations[currentLang][key] || translations.zh[key] || "";

const syncProjectToggle = () => {
    if (!projectMore || !projectToggle) return;
    const isOpen = projectMore.classList.contains("is-open");
    const label = projectToggle.querySelector("span");
    if (label) label.textContent = getText(isOpen ? "moreProjectsOpen" : "moreProjectsClosed");
    projectToggle.setAttribute("aria-expanded", String(isOpen));

    if (projectPanel) {
        projectPanel.setAttribute("aria-hidden", String(!isOpen));
        projectPanel.inert = !isOpen;
        projectPanel.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((item) => {
            if (!isOpen) {
                if (item.dataset.restoreTabindex === undefined) {
                    item.dataset.restoreTabindex = item.getAttribute("tabindex") || "";
                }
                item.setAttribute("tabindex", "-1");
            } else if (item.dataset.restoreTabindex !== undefined) {
                if (item.dataset.restoreTabindex) {
                    item.setAttribute("tabindex", item.dataset.restoreTabindex);
                } else {
                    item.removeAttribute("tabindex");
                }
                delete item.dataset.restoreTabindex;
            }
        });
    }
};

const syncPointerPosition = (event) => {
    if (prefersReducedMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--pointer-x", ((event.clientX - rect.left) / rect.width).toFixed(3));
    target.style.setProperty("--pointer-y", ((event.clientY - rect.top) / rect.height).toFixed(3));
};

const resetPointerPosition = (event) => {
    event.currentTarget.style.setProperty("--pointer-x", "0.5");
    event.currentTarget.style.setProperty("--pointer-y", "0.5");
};

const revealVisibleTargets = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
            target.classList.add("is-visible");
        }
    });
};

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

    syncProjectToggle();
    localStorage.setItem("lang", currentLang);
};

const applyTheme = () => {
    document.body.dataset.theme = currentTheme;
    if (themeToggle) {
        themeToggle.textContent = currentTheme === "apple" ? getText("themeButton") : getText("themeButtonApple");
        themeToggle.setAttribute("aria-label", currentLang === "zh"
            ? (currentTheme === "apple" ? "切换到深色主题" : "切换到浅色主题")
            : (currentTheme === "apple" ? "Switch to dark theme" : "Switch to light theme"));
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

/* Background particles canvas */
let bgCanvas = null;
let bgCtx = null;
let particles = [];
let particleAnimId = null;
let time = 0;
let sparkleTimer = 0;

function createParticlesCanvas() {
    if (bgCanvas) return;
    bgCanvas = document.getElementById("bg-canvas");
    if (!bgCanvas) return;
    bgCtx = bgCanvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    if (!bgCanvas) return;
    bgCanvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    bgCanvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function rand(min, max) { return Math.random() * (max - min) + min; }

function initParticles(count = 40) {
    particles = [];
    const w = bgCanvas.width;
    const h = bgCanvas.height;
    const themeIsStage = document.body.dataset.theme === "stage";
    const baseColor = getComputedStyle(document.documentElement).getPropertyValue(themeIsStage ? "--accent" : "--accent") || "#0071e3";
    for (let i = 0; i < count; i++) {
        if (themeIsStage) {
            particles.push({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(2.6, 7.5),
                vx: rand(-0.1, 0.1),
                vy: rand(-0.04, 0.04),
                alpha: rand(0.12, 0.36),
                hueShift: rand(-30, 30)
            });
        } else {
            particles.push({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(2.4, 7),
                vx: rand(-0.12, 0.12),
                vy: rand(-0.05, 0.05),
                alpha: rand(0.16, 0.4),
                hueShift: rand(-20, 20)
            });
        }
    }
}

function drawParticles() {
    if (!bgCtx) return;
    const w = bgCanvas.width;
    const h = bgCanvas.height;
    bgCtx.clearRect(0, 0, w, h);
    const themeIsStage = document.body.dataset.theme === "stage";
    drawGradientBand(w, h, time, themeIsStage);
    for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -100) p.x = w + 100;
        if (p.x > w + 100) p.x = -100;
        if (p.y < -100) p.y = h + 100;
        if (p.y > h + 100) p.y = -100;

        const grd = bgCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        if (themeIsStage) {
            grd.addColorStop(0, `rgba(97,212,255,${p.alpha})`);
            grd.addColorStop(0.58, `rgba(76,124,255,${p.alpha * 0.28})`);
            grd.addColorStop(1, 'rgba(0,0,0,0)');
        } else {
            grd.addColorStop(0, `rgba(0,113,227,${p.alpha})`);
            grd.addColorStop(0.58, `rgba(99,179,255,${p.alpha * 0.24})`);
            grd.addColorStop(1, 'rgba(0,0,0,0)');
        }

        bgCtx.globalCompositeOperation = 'screen';
        bgCtx.fillStyle = grd;
        bgCtx.beginPath();
        bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        bgCtx.fill();
    }

    // draw connecting lines for a subtle network effect
    drawConnections(bgCtx, particles, themeIsStage);

    sparkleTimer += 1;
    if (sparkleTimer > 26) {
        drawSparkles(bgCtx, w, h, themeIsStage);
        sparkleTimer = 0;
    }
}

function drawGradientBand(w, h, t, themeIsStage) {
    // slow-moving, very soft band to add depth
    const grd = bgCtx.createLinearGradient(0, h * (0.2 + Math.sin(t * 0.0006) * 0.06), w, h * (0.8 + Math.cos(t * 0.0005) * 0.06));
    if (themeIsStage) {
        grd.addColorStop(0, 'rgba(6,17,31,0.0)');
        grd.addColorStop(0.28, 'rgba(76,124,255,0.05)');
        grd.addColorStop(0.6, 'rgba(97,212,255,0.042)');
        grd.addColorStop(1, 'rgba(6,17,31,0.0)');
    } else {
        grd.addColorStop(0, 'rgba(255,255,255,0.0)');
        grd.addColorStop(0.18, 'rgba(0,113,227,0.08)');
        grd.addColorStop(0.6, 'rgba(99,179,255,0.05)');
        grd.addColorStop(1, 'rgba(255,255,255,0.0)');
    }
    bgCtx.save();
    bgCtx.globalCompositeOperation = 'overlay';
    bgCtx.fillStyle = grd;
    bgCtx.fillRect(-50, -50, w + 100, h + 100);
    bgCtx.restore();
}

function drawConnections(ctx, nodes, themeIsStage) {
    const maxDist = 128;
    ctx.save();
    ctx.lineWidth = 0.9;
    for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < maxDist) {
                const alpha = 1 - d / maxDist;
                if (themeIsStage) ctx.strokeStyle = `rgba(97,212,255,${0.1 * alpha})`;
                else ctx.strokeStyle = `rgba(0,113,227,${0.22 * alpha})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }
    }
    ctx.restore();
}

function drawSparkles(ctx, w, h, themeIsStage) {
    let count = Math.max(1, Math.floor((w * h) / 1300000));
    ctx.save();
    for (let i = 0; i < count; i++) {
        const x = rand(0, w);
        const y = rand(0, h);
        const r = rand(1.1, 2.4);
        ctx.beginPath();
        if (themeIsStage) ctx.fillStyle = `rgba(202,243,255,${rand(0.08, 0.18)})`;
        else ctx.fillStyle = `rgba(150,200,255,${rand(0.12, 0.26)})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}

function animateParticles() {
    if (prefersReducedMotion.matches || document.hidden) {
        particleAnimId = null;
        return;
    }
    time += 16;
    drawParticles();
    particleAnimId = requestAnimationFrame(animateParticles);
}

function startBgParticles() {
    if (prefersReducedMotion.matches || document.hidden) return;
    createParticlesCanvas();
    if (!bgCanvas) return;
    cancelAnimationFrame(particleAnimId);
    const areaFactor = Math.floor((bgCanvas.width * bgCanvas.height) / (1000 * 1000));
    const target = Math.min(32, Math.max(18, areaFactor + 18));
    initParticles(target);
    animateParticles();
}

function stopBgParticles() {
    if (particleAnimId) cancelAnimationFrame(particleAnimId);
    particleAnimId = null;
}

function refreshParticlesForTheme() {
    if (!bgCanvas || prefersReducedMotion.matches) return;
    bgCanvas.style.opacity = "";
    initParticles(particles.length || 40);
}

langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage();
    applyTheme();
});

copyEmailButtons.forEach((button) => button.addEventListener("click", copyEmail));

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    interactiveSurfaces.forEach((surface) => {
        surface.addEventListener("pointermove", syncPointerPosition);
        surface.addEventListener("pointerleave", resetPointerPosition);
    });
}

projectToggle?.addEventListener("click", () => {
    projectMore?.classList.toggle("is-open");
    syncProjectToggle();
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
requestAnimationFrame(revealVisibleTargets);
setTimeout(revealVisibleTargets, 240);
themeToggle?.addEventListener("click", () => {
    refreshParticlesForTheme();
});

const syncBackgroundMotion = () => {
    if (prefersReducedMotion.matches || document.hidden) {
        stopBgParticles();
        if (bgCanvas) bgCanvas.style.opacity = "0";
        return;
    }

    createParticlesCanvas();
    if (bgCanvas) bgCanvas.style.opacity = "";
    startBgParticles();
};

syncBackgroundMotion();
prefersReducedMotion.addEventListener("change", syncBackgroundMotion);
document.addEventListener("visibilitychange", syncBackgroundMotion);
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("scroll", revealVisibleTargets, { passive: true });
window.addEventListener("resize", revealVisibleTargets);
