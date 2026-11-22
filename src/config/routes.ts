export const routes = {
  home: "/",

  news: {
    index: "/news",
    archive: "/news-archive",
    article: (slug: string) => `/news/${slug}`,
  },

  about: {
    index: "/about",
    departments: {
      index: "/about/departments",
      department: (department: string) => `/about/departments/${department}`,
      employee: (department: string, slug: string) =>
        `/about/departments/${department}/${slug}`,
    },
  },

  discipline: {
    index: "/discipline",
    guestLectures: "/discipline/guest-lectures",
    programs: "/discipline/programs",
  },

  science: {
    index: "/science",
  },

  student: {
    index: "/student",
    localGovernment: "/student/local-government",
    starostat: "/student/starostat",
    extracurricular: "/student/extracurricular",
    sportsElite: "/student/sports-elite",

    scienceProjectContest: {
      regulation: "/student/science-project-contest-zdzn/news-regulation",
      registration: "/student/science-project-contest-zdzn/registration",
      flow: "/student/science-project-contest-zdzn/flow",
    },
  },

  entrants: {
    index: "/entrants",
    introduction: "/entrants/introduction",
  },

  alumni: {
    index: "/alumni",
    association: "/alumni/association",
    reviews: "/alumni/reviews",
    honored: "/alumni/honored",
    warLosses: "/alumni/war-losses",
  },

  vacancies: "/vacancies-list",
  emergency: "/emergency-situation",
  map: "/map",
} as const;
