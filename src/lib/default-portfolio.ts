import type { PortfolioContent } from "./portfolio-types";

export const defaultPortfolio: PortfolioContent = {
  hero: {
    greeting: "Hi, Iam",
    name: "Yondika",
    subtitle: "Vio Landa",
    bio: "A graduate of Informatics Engineering from the Sumatera Institute of Technology, passionate about pursuing a career in software development. Skilled in mobile development using tools such as Kotlin and Flutter, as well as web development using React.js. A detail-oriented individual with a proven track record of managing several projects, driven by a strong interest in mobile and web development.",
    githubUrl: "https://github.com/yondikavl/",
    linkedinUrl: "https://www.linkedin.com/in/yondikavl/",
    cards: [
      { text: "Web Development", icon: "globe" },
      { text: "Mobile Development", icon: "mobile" },
      { text: "UIUX Design", icon: "shapes" },
    ],
  },
  quote: "Work for money, Develop for love",
  skills: [
    {
      text: "Web Development",
      icon: "globe",
      tools: [
        "html.svg",
        "css.svg",
        "javascript.svg",
        "typescript.svg",
        "next.svg",
        "react.svg",
        "tailwind.svg",
        "bootstrap.svg",
      ],
    },
    {
      text: "Mobile Development",
      icon: "mobile",
      tools: ["kotlin.svg", "flutter.svg"],
    },
    {
      text: "UIUX Design",
      icon: "shapes",
      tools: ["figma.svg"],
    },
  ],
  experiences: [
    {
      category: "Educational/Study",
      items: [
        {
          imageSrc: "logo_itera.png",
          position: "S1 Teknik Informatika",
          time: "Aug 2021 - Sep 2025",
          institution: "Institut Teknologi Sumatera",
          description:
            "GPA : 3.65/4.00 \nRelevant Coursework : Object-Oriented Programming, Web Programming, Basic Software Development, Human-Computer Interaction, Algorithms and Data Structures, Database, Algorithms and Programming, Mobile Development ",
        },
        {
          imageSrc: "logo_bangkit.jpg",
          position: "Mobile Development Cohort",
          time: "Feb - Jul 2024",
          institution:
            "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
          description:
            "• Developed an Android application to display GitHub user data by integrating the GitHub API, consisting of 5 pages.\n• Created an Android application for detecting cancer based on images using machine learning, comprising 3 pages.\n• Designed and Developed an Android application to help user to share stories. It implements a Single Source of Truth using Room, ensuring data consistency and reliability, along with offline functionality. The app also includes user authentication using email and password and data consumption from APIs.",
        },
      ],
    },
    {
      category: "Work/Intern",
      items: [
        {
          imageSrc: "logo_gerak.png",
          position: "Android Developer",
          time: "Oct 2025 - Present",
          institution: "PT. Gerak Bersama Kita",
          detailHref: "/experience/gerak",
          description:
            "• Developed and maintained the Android application for the Gerak Bersama Kita platform, ensuring a seamless user experience and high performance. \n• Collaborated with cross-functional teams to design and implement new features. \n• Implemented best practices for code quality and performance optimization, leading to a 15% reduction in app crashes and improved overall stability.",
        },
        {
          imageSrc: "logo_itera.png",
          position: "Full Stack Developer",
          time: "Feb - Jul 2025",
          institution: "Institut Teknologi Sumatera",
          description:
            "• Developed a custom IndoBERT NLP model to classify 1,143 Indonesian-language reviews (spam, fraud, promotion) with 97% accuracy and 97% F1-score. \n• Deployed REST API using FastAPI and integrated database using Prisma + MySQL. \n• Built responsive frontend with Vue.js (Web) and Kotlin (Android) achieving 90% success in black-box testing.",
        },
        {
          imageSrc: "logo_pharos.png",
          position: "Frontend Developer (Intern)",
          time: "Aug - Dec 2024",
          institution: "PT. Pharos Indonesia",
          description:
            "MSIB Kampus Merdeka Batch 7. \n• Developed a widget for scanning barcodes used in inventory management with Flutter in HealthyOne App, improving product search efficiency by over 70%. This widget is integrated with a barcode reader device for scanning and reading barcode lines efficiently.\n• Improved the widget's UI in the HealthyOne App by reducing text size, margins, adding an info button to the dropdown, and adjusting the layout to display 4 items per row, optimizing content positioning for better usability.\n• Implemented a scroll system in the dropdown for load more functionality, prioritizing records already fetched from the frontend. The system identifies if all records and quantities have been pulled, avoiding unnecessary backend queries. If not, it queries the backend when scrolling reaches the end, ensuring no duplicate IDs or quantities are fetched and that the record count matches expectations.",
        },
        {
          imageSrc: "logo_balam.jpg",
          position: "Software Engineer (Intern)",
          time: "Mar - Aug 2024",
          institution: "Bandar Lampung City Government",
          description:
            "• Designed the UI and developed the interface for the SDGs website for the Bandar Lampung city government, enabling data analysis and dashboard viewing for 17 goals and 400 indicators. \n• Collaborated on implementation with Laravel, Bootstrap, and MySQL, ensuring seamless integration and a 25% improvement in performance. \n• Developed 3 dashboard features for predictions, comparative analysis, and geospatial data distribution to monitor performance based on input data. \n• Presented and demonstrated the website to over 15 regional government organizations in Bandar Lampung, receiving positive feedback and securing commitment for 2 future updates and enhancements.",
        },
        {
          imageSrc: "logo_tanamify.png",
          position: "Mobile Developer",
          time: "Apr - Jul 2024",
          institution: "Tanamify ID",
          description:
            "• Designed over 10 user interfaces and experiences for the Tanamify app using Figma.\n• Developed the mobile application with Kotlin and XML using MVVM architecture, improving performance by 30% and ensuring usability.\n• Integrated 2 machine learning models, including image classification and artificial neural network (ANN), into the Android app using TFLite.\n• Integrated 4 APIs from the backend server for authentication and history tracking.",
        },
        {
          imageSrc: "logo_swd.png",
          position: "IT Support Technician (Intern)",
          time: "Aug 2019 - Mar 2020",
          institution: "SMK Swadhipa 2 Natar",
          description:
            "• Installed, configured, and updated over 20 software applications.\n• Created 30+ graphic designs using Corel Draw and Adobe Photoshop for internal and external use. \n• Installed and configured over 10 CCTV systems, ensured functionality, and provided user training. \n• Executed 5+ network installations and configurations, including cabling, routers, and switches, and resolved network issues",
        },
      ],
    },
    {
      category: "Organizational/Volunteer",
      items: [
        {
          imageSrc: "logo_hmif.png",
          position: "Staff of Technopreneur division",
          time: "Apr 2023- Des 2023",
          institution: "Himpunan Mahasiswa Informatika ITERA",
          description:
            "• Spearheaded the backend development of the Informatics study program website, creating and managing over 20 pages to streamline information dissemination. \n• Implemented frontend development for a voting website, ensuring usability and responsiveness across more than 4 pages. \n• Led a team of 9 developers for the HMIF ITERA website development, successfully completing all tasks on time and within scope.",
        },
        {
          imageSrc: "logo_km.jpeg",
          position: "Staff of Information Technology",
          time: "Mar 2023 - Des 2023",
          institution: "Cabinet of KM ITERA 2023/2024",
          description:
            "• Crafted the user interface layout for the KM ITERA website, designing over 15 pages to enhance user engagement. \n• Enhanced the Content Management System (CMS) pages for the KM ITERA website, improving functionality and usability across 4 key pages. \n• Collaborated with 11 members from the Ministry of Information Technology, resulting in the successful implementation of new website features.",
        },
        {
          position: "Frontend Developer",
          time: "Nov 2022 - Feb 2023",
          institution: "PEMIRA KM ITERA 2022",
          description:
            "• Crafted a website for the student presidential election voting at the PEMIRA KM ITERA 2022 event at Institut Teknologi Sumatera, ensuring secure and efficient voting. \n• Integrated Tailwind CSS with CodeIgniter 3 for a seamless user experience during the voting process, successfully serving over 5,200 eligible student voters. \n• Completed the project within 2 months in collaboration with the frontend team, meeting all project milestones ahead of schedule.",
        },
        {
          imageSrc: "logo_pplk.png",
          position: "Frontend Developer",
          time: "Jun - Aug 2022",
          institution: "PPLK ITERA 2022",
          description:
            "• Collaborated with a 7-member frontend team to develop a campus environment introduction website for new students, creating over 10 interactive and informative pages. \n• Developed a attendance system with HTML, JavaScript and Bootstrap CSS used by over 4800 new students, enhancing event management efficiency by 30%. \n• Implemented responsive design principles to ensure optimal user experience across various devices. ",
        },
      ],
    },
  ],
  achievements: [
    {
      title:
        "Finalist in the User Experience Design division GEMASTIK XVI 2023",
      date: "September 2023",
      institution:
        "Pusat Prestasi Nasional, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    },
  ],
  homeImage: "my-pic.png",
  works: [
    {
      image: "Tanamify.png",
      project: "Tanamify App",
      category: "Mobile Development",
      tools: ["kotlin.svg", "tensorflow.svg"],
      href: "https://github.com/yondikavl/Tanamify-Mobile-App",
    },
    {
      image: "Mantory_Preview.png",
      project: "Mantory App",
      category: "Mobile Development",
      tools: ["flutter.svg"],
      href: "https://github.com/yondikavl/Mantory-Mobile-App",
    },
    {
      image: "narasiqu.png",
      project: "Narasiqu App",
      category: "Mobile Development",
      tools: ["kotlin.svg"],
      href: "https://github.com/yondikavl/Narasiqu-Mobile-App",
    },
    {
      image: "github-user-app-mobile.png",
      project: "Github User App",
      category: "Mobile Development",
      tools: ["kotlin.svg"],
      href: "https://github.com/yondikavl/Github-User-Mobile-App",
    },
    {
      image: "aritmateka.png",
      project: "Aritmateka",
      category: "Mobile Development",
      tools: ["kotlin.svg"],
      href: "https://github.com/yondikavl/Aritmateka-Mobile-App",
    },
    {
      image: "web-pemira.png",
      project: "Website Pemira KM ITERA 2022",
      category: "Web Development",
      tools: ["html.svg", "css.svg", "tailwind.svg", "javascript.svg"],
      href: "https://github.com/masqomar21/pemira-KM-ITERA-2022",
    },
    {
      image: "website-desa-way-kalam.png",
      project: "Website Desa Way Kalam",
      category: "Web Development",
      tools: ["html.svg", "css.svg", "tailwind.svg", "javascript.svg"],
      href: "https://github.com/yondikavl/Website-Desa-WayKalam",
    },
    {
      image: "web-desa-sidorejo.png",
      project: "Website Desa Sidorejo",
      category: "Web Development",
      tools: ["next.svg", "tailwind.svg", "javascript.svg"],
      href: "https://github.com/yondikavl/ksi02-sidorejo",
    },
    {
      image: "github-user-app-mobile.png",
      project: "ToDo Web App",
      category: "Web Development",
      tools: ["html.svg", "css.svg", "javascript.svg"],
      href: "https://github.com/yondikavl/react-todo-app",
    },
    {
      image: "personal-portfolio.png",
      project: "Personal Portfolio",
      category: "Web Development",
      tools: ["next.svg", "tailwind.svg", "typescript.svg"],
      href: "https://github.com/yondikavl/yondikas-portfolio",
    },
  ],
  about: {
    name: "Yondika Vio Landa",
    image: "sayaaa.png",
    bio: "An undergraduate Informatics Engineering program at the Sumatera Institute of Technology, passionate about pursuing a career in development. Skilled in mobile development tools such as Kotlin and React Native, as well as web development using HTML, CSS and JavaScript. A detail-oriented individual with a successful track record of managing several projects fueled by a strong interest in mobile and web development.",
  },
  certificates: {
    mobile: [
      {
        title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/2VX3RV3DQZYQ",
      },
      {
        title: "Memulai Pemrograman dengan Dart",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/4EXGQ15WGZRL",
      },
      {
        title: "Belajar Pengembangan Aplikasi Android Intermediate",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/QLZ97708EP5D",
      },
      {
        title: "Belajar Penerapan Machine Learning untuk Android",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/0LZ06DGQKZ65",
      },
      {
        title: "Belajar Fundamental Aplikasi Android",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/JMZVDY1WQZN9",
      },
      {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/N9ZOOR816ZG5",
      },
      {
        title: "Memulai Pemrograman dengan Kotlin",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/6RPNV00R4Z2M",
      },
    ],
    web: [
      {
        title: "Belajar Membuat Front-End Web untuk Pemula",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/1OP8WDLW1XQK",
      },
      {
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/1OP8010WVXQK",
      },
      {
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/1RXYY8KJ9XVM",
      },
    ],
    software: [
      {
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/81P2V0D9NPOY",
      },
      {
        title: "Belajar Prinsip Pemrograman SOLID",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/81P2VYN2YPOY",
      },
      {
        title: "Belajar Dasar Git dengan GitHub",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/N9ZOONEMYZG5",
      },
      {
        title:
          "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/98XW2067WPM3",
      },
      {
        title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
        issuer: "Dicoding Indonesia",
        href: "https://www.dicoding.com/certificates/N9ZO60GJDXG5",
      },
    ],
  },
  gerakRecap: {
    meta: {
      title: "Android Developer Recap",
      period: "27 Oktober 2025 — 26 Mei 2026",
      duration: "~7 bulan",
      badge: "Gerak Pro & Whitelabel",
      company: "PT. Gerak Bersama Kita",
      role: "Android Developer",
      logo: "logo_gerak.png",
    },
    stats: [
      {
        label: "App releases",
        value: "5+",
        sub: "2.0.11 → 2.0.15 + PLN 1.0.3",
      },
      {
        label: "Major features",
        value: "5",
        sub: "Sleep, Steps, Live Session, Tracker, Workout",
      },
      {
        label: "Projects",
        value: "3",
        sub: "Gerak Pro · Gerak Orange · PLN Wellness",
      },
      {
        label: "Sentry issues",
        value: "Fixed",
        sub: "NPE, ANR, crashes patched",
      },
    ],
    timeline: [
      {
        date: "Okt – Nov 2025",
        title: "Foundation & Android 15 Compatibility",
        description:
          "Fixed 16 KB page size issue, upgraded Mapbox / Fresco / Sentry SDK, fixed DetailMission image loading, resolved StoryActivity crash, setup routing for waist pop-up, added reusable ImageLoaderUtils.",
        dotColor: "#378add",
      },
      {
        date: "Nov – Des 2025",
        title: "Sleep Feature V2",
        description:
          "Built Sleep History page (date range, status, start–end), Sleep Stages Days Chart UI, Health Connect source mapping (auto / active / manual / unknown), fixed filter logic, ascending sort, sticky month-year list, buffer UI adjustments.",
        dotColor: "#1d9e75",
      },
      {
        date: "Des 2025 – Jan 2026",
        title: "Steps Tracker — Full Revamp",
        description:
          "New MVVM architecture for Steps, dynamic tracker from API, Health Connect read/write, Google Fit integration & debug, Steps History + Chart + Insight pages, filter with slider (min/max steps), background worker for sync, fraud detection, debounce, permission handling.",
        dotColor: "#d4537e",
      },
      {
        date: "Jan – Feb 2026",
        title: "PLN Wellness Whitelabel & Gerak Orange Cleanup",
        description:
          "Cloned Gerak Pro for PLN Wellness, replaced assets & app name (Energi Bergerak), fixed edge-to-edge display Android 15+, synced branches, cleaned Gerak Orange codebase, fixed Sentry issues (NPE / ANR / ProgressDialog).",
        dotColor: "#ef9f27",
      },
      {
        date: "Feb – Mar 2026",
        title: "Live Session Feature",
        description:
          "Built Live Session UI components in Compose, homepage card, detail page, started/ongoing/result pages, joined/ended state routing, camera photo verification, rank display, API integration for challenge join/load, fixed cut-off bug, activity type bottom sheet.",
        dotColor: "#7f77dd",
      },
      {
        date: "Mar – Apr 2026",
        title: "Gerak Tracker Revamp",
        description:
          "Revamped ready/countdown/tracking UI, separated distance vs non-distance & live-session states, elapsed & moving time logic, background service, killed-app recovery, save activity form (photo verification, effort, visibility), fix elapsed < moving time bug.",
        dotColor: "#d85a30",
      },
      {
        date: "Apr – Mei 2026",
        title: "Workout Activity, Goals & Health Connect",
        description:
          "Revamped workout list & detail, pagination history, delete/share/edit activity, .fit file research, Goals Tracker UI & state, in-app steps counter (backfill + deduplicate), HC steps sync fix (raw, today, pageToken, source origin), cadence fraud detection, filter & sort history.",
        dotColor: "#639922",
      },
    ],
    achievements: [
      {
        title: "Health Connect integration",
        body: "Steps & sleep read/write, background worker, fraud (bulk/raw) detection, cadence SPM validation, pageToken pagination, source origin tracking.",
        icon: "heart",
      },
      {
        title: "Android 15+ compatibility",
        body: "16 KB page size fix, edge-to-edge display with custom status bar, updated all major SDKs (Mapbox, Fresco, Sentry, SoLoader).",
        icon: "mobile",
      },
      {
        title: "Compose migration",
        body: "Steps Screen, Sleep Screen, Live Session components, Gerak Tracker UI migrated to Jetpack Compose with MVVM architecture.",
        icon: "layout",
      },
      {
        title: "Whitelabel architecture",
        body: "PLN Wellness cloned from Gerak Pro, synced across branches, independent assets & app identity, shared feature parity maintained.",
        icon: "branch",
      },
      {
        title: "Stability & Sentry",
        body: "Fixed NPE (EditProfile, GerakActivity), ANR (GroupLeaderboard), ProgressDialog crash, race conditions, killed-app state recovery, force-close on resume.",
        icon: "bug",
      },
      {
        title: "Data & chart features",
        body: "Sleep stages bar chart, Steps daily/days chart, splits card, weekly workout summary, monthly summary — all with filter, sort, and empty state handling.",
        icon: "chart",
      },
    ],
    releases: [
      {
        version: "GP 2.0.11",
        description:
          "Sleep filter & chart fix, Health Connect steps hardcoded, single source of truth steps tracker, buffer chart sleep days.",
        tag: "released",
      },
      {
        version: "GP 2.0.12",
        description:
          "New Steps UI (Compose), Steps API & history, HC sync (fraud/bulk), filter slider, notification fix, HTML terms, background worker.",
        tag: "released",
      },
      {
        version: "GP 2.0.13",
        description:
          "Sentry fixes, Live Session feature, Gerak Tracker revamp, PLN Wellness branch merged.",
        tag: "released",
      },
      {
        version: "GP 2.0.14",
        description:
          "Save activity revamp, Live Session improvements (rank display, cut-off bug fix), Health Connect steps sync fix (raw, today, pageToken, source origin).",
        tag: "released",
      },
      {
        version: "GP 2.0.15",
        description:
          "Save activity (photo, effort, visibility), workout list revamp, edit/delete/share activity, race condition fix type activity.",
        tag: "released",
      },
      {
        version: "PLN 1.0.1",
        description:
          "Whitelabel release — synced with GP 2.0.13, PLN assets & app identity, edge-to-edge fix, applinks removed.",
        tag: "whitelabel",
      },
      {
        version: "PLN 1.0.2",
        description: "Whitelabel release — synced with GP 2.0.14",
        tag: "whitelabel",
      },
      {
        version: "PLN 1.0.3",
        description: "Whitelabel release — synced with GP 2.0.15",
        tag: "whitelabel",
      },
    ],
    technologies: [
      "Jetpack Compose",
      "MVVM",
      "Health Connect",
      "Google Fit",
      "Mapbox",
      "Fresco",
      "Sentry",
      "WorkManager",
      "ViewModel",
      "Retrofit",
      "Kotlin Coroutines",
      "SoLoader",
      ".fit format",
      "Branch Links",
      "PrefHelper",
      "Canvas / MiniPoly",
    ],
  },
};
