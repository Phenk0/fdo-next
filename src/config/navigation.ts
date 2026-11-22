import { routes } from "@/config/routes";

export type NavigationItem = {
  title: string;
  href: string;
  children?: readonly NavigationItem[];
};

export const navigationItems = [
  {
    title: "Про факультет",
    href: "/about",
    children: [
      {
        title: "Деканат",
        href: "/about/deanery",
      },
      {
        title: "Кафедри",
        href: "/about/departments",
        children: [
          {
            title: "Кафедра дошкільної педагогіки і психології",
            href: "/about/departments/kdpp",
          },
          {
            title: "Кафедра теорії і методики дошкільної освіти",
            href: "/about/departments/ktmdo",
          },
          {
            title: "Кафедра теорії і методики фізичного виховання",
            href: "/about/departments/ktmfv",
          },
        ],
      },
      {
        title: "Вчена рада",
        href: "/about/academic-council-personnel",
      },
      {
        title: "Нормативні документи",
        href: "/about/regulations",
      },
      {
        title: "Рада стейкхолдерів",
        href: "/about/stakeholders",
        children: [
          {
            title: "Склад ради стейкхолдерів",
            href: "/about/stakeholders/personnel",
          },
          {
            title: "План роботи ради стейкхолдерів",
            href: "/about/stakeholders/plan",
          },
          {
            title: "Положення про раду стейкхолдерів",
            href: "/about/stakeholders/provisions",
          },
        ],
      },
      {
        title: "Профорієнтаційна робота",
        href: "/about/proforientation",
      },
      {
        title: "Матеріально-технічна база",
        href: "/about/mtb",
      },
    ],
  },
  {
    title: "Навчання",
    href: "/discipline",
    children: [
      {
        title: "Графік освітнього процесу",
        href: "/discipline/educational-schedule",
      },
      {
        title: "Розклад атестації здобувачів освіти",
        href: "/discipline/examination",
        children: [
          {
            title: "Розклад підсумкової атестації",
            href: "/discipline/examination/attestation-schedule",
          },
          {
            title: "Розклад проміжної атестації",
            href: "/discipline/examination/intermediate-attestation-schedule",
          },
          {
            title: "Розклад заліково-екзаменаційної сесії",
            href: "/discipline/examination/session-schedule",
          },
        ],
      },
      {
        title: "Освітні програми",
        href: "/discipline/programs",
      },
      {
        title: "Нормативні ОК",
        href: "/discipline/regulatory-ok",
      },
      {
        title: "Вибіркові ОК",
        href: "/discipline/selective-ok",
      },
      {
        title: "Дуальна освіта",
        href: "/discipline/dual",
      },
      {
        title: "Неформальна освіта",
        href: "/discipline/non-formal-education",
      },
      {
        title: "Академічна мобільність",
        href: "/discipline/academic-mobility",
      },
      {
        title: "Практична підготовка",
        href: "/discipline/practices",
        children: [
          {
            title: "Новини педагогічної практики",
            href: "/discipline/practices/news",
          },
          {
            title: "Програми педагогічних практик",
            href: "/discipline/practices/programs",
          },
          {
            title: "Угоди з базами практик",
            href: "/discipline/practices/agreements",
          },
        ],
      },
      {
        title: "Результати атестації",
        href: "/discipline/results-attestation",
        children: [
          {
            title: "Результати проміжної атестації",
            href: "/discipline/results-attestation/pre",
          },
          {
            title: "Результати семестрової атестації",
            href: "/discipline/results-attestation/semi",
          },
          {
            title: "Результати підсумкової атестації",
            href: "/discipline/results-attestation/final",
          },
        ],
      },
    ],
  },
  {
    title: "Наука",
    href: "/science",
    children: [
      {
        title: "Науково-дослідні лабораторії",
        href: "/science/research",
        children: [
          {
            title: "Інноваційні спортивно-педагогічні технології",
            href: "/science/research/sport-lab",
            children: [
              {
                title: "Професорсько-викладацький склад лабораторії",
                href: "/science/research/sport-lab/personnel",
              },
              {
                title: "План  роботи лабораторії",
                href: "/science/research/sport-lab/plan",
              },
              {
                title:
                  "Звіт про діяльність науково-дослідної лабораторії за минулий рік",
                href: "/science/research/sport-lab/report",
              },
            ],
          },
          {
            title: "Здоров'я дитини",
            href: "/science/research/child-health",
            children: [
              {
                title: "Професорсько-викладацький склад лабораторії",
                href: "/science/research/child-health/personnel",
              },
              {
                title: "План  роботи лабораторії",
                href: "/science/research/child-health/plan",
              },
              {
                title:
                  "Звіт про діяльність науково-дослідної лабораторії за минулий рік",
                href: "/science/research/child-health/report",
              },
            ],
          },
        ],
      },
      {
        title: "Міжнародна діяльність",
        href: "/science/international",
        children: [
          {
            title: "Еразмус+, модуль  Жан Моне",
            href: "/science/international/jean-monnet",
          },
          {
            title: "Стажування",
            href: "/science/international/internship",
          },
        ],
      },
      {
        title: "Співпраця з громадськими організаціями. Реалізація проєктів",
        href: "/science/project-implementation",
      },
    ],
  },
  {
    title: "Здобувачам освіти",
    href: "/student",
    children: [
      {
        title: "Студентське самоврядування",
        href: "/student/local-government",
      },
      {
        title: "Старостат",
        href: "/student/starostat",
      },
      {
        title: "Рейтинг успішності",
        href: "/student/rating",
      },
      {
        title: "Студентська наука",
        href: "/student/science",
      },
      {
        title: "«Здорова дитина – здорова нація»",
        href: "/student/science-project-contest-zdzn",
        children: [
          {
            title: "Положення про конкурс, оголошення",
            href: "/student/science-project-contest-zdzn/news-regulation",
          },
          {
            title: "Реєстрація учасників конкурсу",
            href: "/student/science-project-contest-zdzn/registration",
          },
          {
            title: "Перебіг конкурсного відбору",
            href: "/student/science-project-contest-zdzn/flow",
          },
        ],
      },
      {
        title: "Позанавчальна робота",
        href: "/student/extracurricular",
      },
      {
        title: "Наша гордість",
        href: routes.alumni.honored,
      },
      {
        title: "Спортивна еліта університету",
        href: routes.student.sportsElite,
      },
    ],
  },
  {
    title: "Вступникам",
    href: "/entrants",
    children: [
      {
        title: "Вступ для здобуття освіти іноземцям та особам без громадянства",
        href: "/entrants/introduction",
      },
      {
        title: "TESTing Page",
        href: "/entrants/rules",
      },
    ],
  },
  {
    title: "В допомогу гаранту ОП",
    href: "https://drive.google.com/drive/folders/141GiIONK9s90VFls1ilEccW-T9RqmiC8?usp=sharing",
  },
] satisfies readonly NavigationItem[];
