import { routes } from "@/config/routes";
import { Department } from "@/generated/prisma/enums";

export type NavigationItem = {
  title: string;
  href: string;
  children?: readonly NavigationItem[];
};

export const navigationItems = [
  {
    title: "Про факультет",
    href: routes.about.index,
    children: [
      {
        title: "Деканат",
        href: routes.about.deanery,
      },
      {
        title: "Кафедри",
        href: routes.about.departments.index,
        children: [
          {
            title: "Кафедра дошкільної педагогіки і психології",
            href: routes.about.departments.department(Department.KDPP),
          },
          {
            title: "Кафедра теорії і методики дошкільної освіти",
            href: routes.about.departments.department(Department.KTMDO),
          },
          {
            title: "Кафедра теорії і методики фізичного виховання",
            href: routes.about.departments.department(Department.KTMFV),
          },
        ],
      },
      {
        title: "Вчена рада",
        href: routes.about.academicCouncilPersonnel,
      },
      {
        title: "Нормативні документи",
        href: routes.about.regulations,
      },
      {
        title: "Рада стейкхолдерів",
        href: routes.about.stakeholders.index,
        children: [
          {
            title: "Склад ради стейкхолдерів",
            href: routes.about.stakeholders.personnel,
          },
          {
            title: "План роботи ради стейкхолдерів",
            href: routes.about.stakeholders.plan,
          },
          {
            title: "Положення про раду стейкхолдерів",
            href: routes.about.stakeholders.provisions,
          },
        ],
      },
      {
        title: "Профорієнтаційна робота",
        href: routes.about.proforientation,
      },
      {
        title: "Матеріально-технічна база",
        href: routes.about.mtb,
      },
    ],
  },
  {
    title: "Навчання",
    href: routes.discipline.index,
    children: [
      {
        title: "Графік освітнього процесу",
        href: routes.discipline.educationalSchedule,
      },
      {
        title: "Розклад атестації здобувачів освіти",
        href: routes.discipline.examination.index,
        children: [
          {
            title: "Розклад підсумкової атестації",
            href: routes.discipline.examination.attestationSchedule,
          },
          {
            title: "Розклад проміжної атестації",
            href: routes.discipline.examination.intermediateAttestationSchedule,
          },
          {
            title: "Розклад заліково-екзаменаційної сесії",
            href: routes.discipline.examination.sessionSchedule,
          },
        ],
      },
      {
        title: "Освітні програми",
        href: routes.discipline.programs.index,
      },
      {
        title: "Нормативні ОК",
        href: routes.discipline.regulatoryOk,
      },
      {
        title: "Вибіркові ОК",
        href: routes.discipline.selectiveOk,
      },
      {
        title: "Дуальна освіта",
        href: routes.discipline.dual,
      },
      {
        title: "Неформальна освіта",
        href: routes.discipline.nonFormalEducation,
      },
      {
        title: "Академічна мобільність",
        href: routes.discipline.academicMobility,
      },
      {
        title: "Практична підготовка",
        href: routes.discipline.practices.index,
        children: [
          {
            title: "Новини педагогічної практики",
            href: routes.discipline.practices.news,
          },
          {
            title: "Програми педагогічних практик",
            href: routes.discipline.practices.programs,
          },
          {
            title: "Угоди з базами практик",
            href: routes.discipline.practices.agreements,
          },
        ],
      },
      {
        title: "Результати атестації",
        href: routes.discipline.resultsAttestation.index,
        children: [
          {
            title: "Результати проміжної атестації",
            href: routes.discipline.resultsAttestation.intermediate,
          },
          {
            title: "Результати семестрової атестації",
            href: routes.discipline.resultsAttestation.semester,
          },
          {
            title: "Результати підсумкової атестації",
            href: routes.discipline.resultsAttestation.final,
          },
        ],
      },
    ],
  },
  {
    title: "Наука",
    href: routes.science.index,
    children: [
      {
        title: "Науково-дослідні лабораторії",
        href: routes.science.research.index,
        children: [
          {
            title: "Інноваційні спортивно-педагогічні технології",
            href: routes.science.research.sportLab.index,
            children: [
              {
                title: "Професорсько-викладацький склад лабораторії",
                href: routes.science.research.sportLab.personnel,
              },
              {
                title: "План роботи лабораторії",
                href: routes.science.research.sportLab.plan,
              },
              {
                title:
                  "Звіт про діяльність науково-дослідної лабораторії за минулий рік",
                href: routes.science.research.sportLab.report,
              },
            ],
          },
          {
            title: "Здоров'я дитини",
            href: routes.science.research.childHealth.index,
            children: [
              {
                title: "Професорсько-викладацький склад лабораторії",
                href: routes.science.research.childHealth.personnel,
              },
              {
                title: "План роботи лабораторії",
                href: routes.science.research.childHealth.plan,
              },
              {
                title:
                  "Звіт про діяльність науково-дослідної лабораторії за минулий рік",
                href: routes.science.research.childHealth.report,
              },
            ],
          },
        ],
      },
      {
        title: "Міжнародна діяльність",
        href: routes.science.international.index,
        children: [
          {
            title: "Еразмус+, модуль Жан Моне",
            href: routes.science.international.jeanMonnet,
          },
          {
            title: "Стажування",
            href: routes.science.international.internship,
          },
        ],
      },
      {
        title: "Співпраця з громадськими організаціями. Реалізація проєктів",
        href: routes.science.projectImplementation,
      },
    ],
  },
  {
    title: "Здобувачам освіти",
    href: routes.student.index,
    children: [
      {
        title: "Студентське самоврядування",
        href: routes.student.localGovernment,
      },
      {
        title: "Старостат",
        href: routes.student.starostat,
      },
      {
        title: "Рейтинг успішності",
        href: routes.student.rating,
      },
      {
        title: "Студентська наука",
        href: routes.student.science,
      },
      {
        title: "«Здорова дитина – здорова нація»",
        href: routes.student.scienceProjectContestZdzn.index,
        children: [
          {
            title: "Положення про конкурс, оголошення",
            href: routes.student.scienceProjectContestZdzn.newsRegulation,
          },
          {
            title: "Реєстрація учасників конкурсу",
            href: routes.student.scienceProjectContestZdzn.registration,
          },
          {
            title: "Перебіг конкурсного відбору",
            href: routes.student.scienceProjectContestZdzn.flow,
          },
        ],
      },
      {
        title: "Позанавчальна робота",
        href: routes.student.extracurricular,
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
    href: routes.entrants.index,
    children: [
      {
        title: "Вступ для здобуття освіти іноземцям та особам без громадянства",
        href: routes.entrants.introduction,
      },
    ],
  },
  {
    title: "В допомогу гаранту ОП",
    href: "https://drive.google.com/drive/folders/141GiIONK9s90VFls1ilEccW-T9RqmiC8?usp=sharing",
  },
] satisfies readonly NavigationItem[];
