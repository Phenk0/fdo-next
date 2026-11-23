import type { Department } from "@/generated/prisma/enums";

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
      department: (department: Department) =>
        `/about/departments/${department}`,
      employee: (department: Department, slug: string) =>
        `/about/departments/${department}/${slug}`,
    },
    deanery: "/about/deanery",
    academicCouncilPersonnel: "academic-council-personnel",
    regulations: "/about/regulations",
    stakeholders: {
      index: "/about/stakeholders",
      personnel: "/about/stakeholders/personnel",
      plan: "/about/stakeholders/plan",
      provisions: "/about/stakeholders/provisions",
    },
    proforientation: "/about/proforientation",
    mtb: "/about/mtb",
  },

  discipline: {
    index: "/discipline",
    guestLectures: "/discipline/guest-lectures",
    educationalSchedule: "/discipline/educational-schedule",
    examination: {
      index: "/discipline/examination",
      attestationSchedule: "/discipline/examination/attestation-schedule",
      intermediateAttestationSchedule:
        "/discipline/examination/intermediate-attestation-schedule",
      sessionSchedule: "/discipline/examination/session-schedule",
    },
    programs: {
      index: "/discipline/programs",
    },
    regulatoryOk: "/discipline/regulatory-ok",
    selectiveOk: "/discipline/selective-ok",
    dual: "/discipline/dual",
    nonFormalEducation: "/discipline/non-formal-education",
    academicMobility: "/discipline/academic-mobility",
    practices: {
      index: "/discipline/practices",
      news: "/discipline/practices/news",
      programs: "/discipline/practices/programs",
      agreements: "/discipline/practices/agreements",
    },
    resultsAttestation: {
      index: "/discipline/results-attestation",
      intermediate: "/discipline/results-attestation/intermediate",
      semester: "/discipline/results-attestation/semester",
      final: "/discipline/results-attestation/final",
    },
  },

  science: {
    index: "/science",
    research: {
      index: "/science/research",
      sportLab: {
        index: "/science/research/sport-lab",
        personnel: "/science/research/sport-lab/personnel",
        plan: "/science/research/sport-lab/plan",
        report: "/science/research/sport-lab/report",
      },
      childHealth: {
        index: "/science/research/child-health",
        personnel: "/science/research/child-health/personnel",
        plan: "/science/research/child-health/plan",
        report: "/science/research/child-health/report",
      },
    },
    international: {
      index: "/science/international",
      jeanMonnet: "/science/international/jean-monnet",
      internship: "/science/international/internship",
    },
    projectImplementation: "/science/project-implementation",
  },

  student: {
    index: "/student",
    localGovernment: "/student/local-government",
    starostat: "/student/starostat",
    extracurricular: "/student/extracurricular",
    rating: "/student/rating",
    science: "/student/science",
    sportsElite: "/student/sports-elite",
    scienceProjectContestZdzn: {
      index: "/student/science-project-contest-zdzn",
      newsRegulation: "/student/science-project-contest-zdzn/news-regulation",
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
