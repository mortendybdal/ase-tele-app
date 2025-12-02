import { AllObjects } from "@/generated-api/api";

const mockAseCustomer: AllObjects = {
  fuldmagt: {
    fuldmagt1: true,
    fuldmagttekst: "Fuldmagt til ægtefælle - Mette Jensen",
    oBSnote: "Kan kontaktes på vegne af medlem",
  },
  sagsrevnote: {
    sagsrevnote: true,
    sagsrevtekst: "Medlem har anmodet om gennemgang af dagpengesag",
    sagsrevStartdato: "2025-11-15",
  },
  gdag: {
    gDAGNote: "G-dag opfyldt",
    gDAGTekst: "Selvforskyldt ledig - G-dag registreret",
    gDAGStartdato: "2025-10-01",
  },
  aKSBreve1MDR: [
    { aKSBreve1mdr: "Velkomstbrev sendt" },
    { aKSBreve1mdr: "Dagpengeinformation sendt" },
  ],
  aKSBreve5: [{ aKSBreve5: "Orientering om rådighedssamtale" }],
  loensPolice: {
    lOeNSPolice: true,
  },
  postModt: [
    { aKSPostModtTitel: "Ledighedserklæring modtaget" },
    { aKSPostModtTitel: "Dokumentation for anciennitet modtaget" },
  ],
  rykbrev: {
    rykbrevType: "1. rykker - kontingent",
    rykbrevDato: "2025-11-20",
  },
  ubehPost: [
    { ubehPostType: "Manglende", ubehPostTitel: "Timeseddel for oktober 2025" },
  ],
  medlemsaarsag: {
    medlemsaarsag: "Nyuddannet",
    medlemsaarsag1: true,
    medlemsaarsagTILF: "Dimittend",
    medlemskabGyldigFra: "2024-06-15",
  },
  medlemssagsstatus: {
    medlemssagsstatus: "Aktiv",
  },
  medlemskategori: {
    medlemskategori: "Fuldtidsforsikret",
    medlemskategori1: true,
    medlemskategori2: false,
    medlemskategori3: false,
    medlemskategori4: false,
  },
  akasseAnc: {
    akasseAnc: "2024-06-15",
  },
  kontingent: {
    konfritSlut: null,
    kontingentSaldoAKS: -850.0,
    forfaldsdatoAKS: "2025-12-01",
  },
  gaeld: {
    gaeldssaldoAKS: 0,
  },
  aKS: {
    dataMKSag: "2025-234567",
  },
  sagsstatus: {
    sagsstatusMD: true,
    sagsstatusMD1: false,
  },
  beskaeftigelse: {
    beskaeftigelse: false,
  },
  moedeudeblivelse: {
    moedeUDEBLE: null,
    datoTidUDEBLE: null,
  },
  bookingFrist: {
    bookfristDato: "2025-12-15",
    bookfristMoedetype: "Rådighedssamtale",
  },
  fravaer: [
    {
      kontaktforloebStart: "2025-10-01",
      kontaktforloebSlut: null,
    },
  ],
  stop: [
    {
      sTOPtype: "Karantæne",
      sTOPfradato: "2025-10-01",
      sTOPtildato: "2025-10-03",
      sTOPAntal: 3,
    },
  ],
  jobCenter: [
    {
      jCafogtilmeld4: "2025-10-02",
      jCStatus4: "Tilmeldt",
      jCBetegnelse4: "2025-10-02",
      jCTilm: "2025-10-02",
      tilmJCJA: true,
    },
  ],
  jobLog: {
    mglJoblogUge: "2025-W48",
    joblogUgerFrit: "2",
    joblogCV: 1,
    joblogAnsoegning: 12,
  },
  fritagetRaadighed: [],
  aktivering: [
    {
      aktiveringnavn: "Jobsøgningskursus - effektiv ansøgning",
      aktiveringStart: "2025-11-18",
      aktiveringSlut: "2025-11-22",
    },
  ],
  yL: [
    {
      yLVirk: "Jensen & Co ApS",
      yLStartdato: "2023-08-15",
      yLTYPE: "Beskæftigelse",
      yLTimer: 1480,
      yLSagsstatus: "Afsluttet",
      yLArbophoerSagstatus: "Godkendt",
    },
  ],
  dPERK: {
    dPERKType: "Dagpenge",
    dPERKFakstartdato: "2025-10-04",
    dPERKSagsstatus: "Aktiv",
    dPERKSagsstatusDato: "2025-10-04",
  },
  cVUdd: [
    {
      cVUddannelse: "Professionsbachelor i IT",
      cVUddNiveau: "Mellemlang videregående",
      cVUddStart: "2020-09-01",
      cVUddSlut: "2024-06-30",
    },
  ],
  dPForbrug: [
    { dPForbrug: 148, dPUdbMaaned: "2025-10" },
    { dPForbrug: 160, dPUdbMaaned: "2025-11" },
  ],
  paamind: [
    {
      paaminType5: "Jobsøgning",
      paaminBetegn5: "Husk at opdatere joblog ugentligt",
    },
  ],
  uRRing: {
    uRRINGLType: "Opkald",
    uRRINGLTekst: "Kontaktet vedr. manglende timeseddel",
  },
  efterloen: {
    efterloensbevis: false,
    efterloenretdato: null,
  },
  uDB: {
    uDBPeriode: 202511,
    uDBType: "Dagpenge",
    uDBBeregnDato: "2025-11-25",
    uDBBeloeb: 18863,
    uDBDispDato: "2025-11-30",
    uDBStatus: "Til udbetaling",
  },
  loensikring: {
    lOeNSAendringsdato: "2024-06-15",
    lOeNSPakkevalg: "Basis",
    lOeNSTegningsdato: "2024-06-15",
    lOeNSSUM: 75000,
    lOeNSDaekPeriode: 6,
  },
  loensErkl: {
    lOeNSUdbGodk: null,
    lOeNSFakStart: null,
    lOeNSFakSlut: null,
    lOeNSRestTimer: null,
    lOeNSBemaerk: null,
  },
  kursus: {
    kursusStart: "2025-11-18",
    kursusSlut: "2025-11-22",
    kursusTimer: 30,
    kursusErhvevsgr: "IT og digitale kompetencer",
    kursusForbrugtetimer: 30,
  },
  efterregulering: [
    {
      efteregPeriode: "2025-10",
      efterregStatus: "Behandlet",
      efterregAntal: 2,
    },
  ],
};

export default mockAseCustomer;
