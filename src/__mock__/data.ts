import { AllObjects } from "@/generated-api/api";

const mockAseCustomer: AllObjects = {
  fuldmagt: {
    erAktiv: true,
    tekst: "Fuldmagt til ægtefælle - Mette Jensen",
  },
  oBSNote: {
    tekst: "Kan kontaktes på vegne af medlem",
  },
  sagsrev: {
    harNote: true,
    tekst: "Medlem har anmodet om gennemgang af dagpengesag",
    startdato: "2025-11-15",
  },
  gDag: {
    harNote: "G-dag opfyldt",
    tekst: "Selvforskyldt ledig - G-dag registreret",
    startdato: "2025-10-01",
  },
  aKSBreve1mdrListe: [
    { brevtype: "Velkomstbrev sendt" },
    { brevtype: "Dagpengeinformation sendt" },
  ],
  aKSBreve5Liste: [{ brevtype: "Orientering om rådighedssamtale" }],
  brev: {
    harLoensPoliceBrev: true,
    harRykBrev: "1. rykker - kontingent",
    rykBrevDato: "2025-11-20",
    harJobfristBrev: false,
    harJobfristOk: true,
  },
  aKSPostModtListe: [
    { titel: "Ledighedserklæring modtaget" },
    { titel: "Dokumentation for anciennitet modtaget" },
  ],
  ubehPostListe: [{ type: "Manglende", titel: "Timeseddel for oktober 2025" }],
  medlemsstatus: {
    medlemsaarsag: "Nyuddannet",
    erMedlemsaarsag1: true,
    medlemssagsstatus: "Aktiv",
    medlemsaarsagTILF: "Dimittend",
    medlemskabGyldigFra: "2024-06-15",
    medlemskategori: "Fuldtidsforsikret",
    erMedlemskategori1: true,
    erMedlemskategori2: false,
    erMedlemskategori3: false,
    erMedlemskategori4: false,
    akasseAnciennitet: "2024-06-15",
    konfritSlut: null,
    gaeldssaldoAKS: 0,
    dataMKSag: "2025-234567",
    erSagsstatusMD: true,
    erSagsstatusMD1: false,
  },
  medlem: {
    harBeskaeftigelse: false,
    alder25Plus: true,
  },
  udtraek: {
    moedeUDEBLE: null,
    datoTidUDEBLE: null,
    harLovmoede: false,
  },
  bookingfrist: {
    dato: "2025-12-15",
    moedetype: "Rådighedssamtale",
    erAktiv: true,
  },
  kontaktforloebListe: [
    {
      startdato: "2025-10-01",
      slutdato: null,
    },
  ],
  stopListe: [
    {
      type: "Karantæne",
      gyldigFra: "2025-10-01",
      gyldigTil: "2025-10-03",
    },
  ],
  jCListe: [
    {
      startdato: "2025-10-02",
      status: "Tilmeldt",
      betegnelse: "Jobcenter København",
    },
  ],
  jC: {
    tilmDato: "2025-10-02",
    erTilmeldt: true,
  },
  jobLog: {
    ugerMgl: "2025-W48",
    ugerTekst: "2",
    antalCV: "1",
    antalAnsoegninger: "12",
  },
  fritagetRaadighedListe: [],
  aktiveringListe: [
    {
      navn: "Jobsøgningskursus - effektiv ansøgning",
      startdato: "2025-11-18",
      slutdato: "2025-11-22",
    },
  ],
  loenarbejdeAttestListe: [
    {
      arbejdsgiver: "Jensen & Co ApS",
      startdato: "2023-08-15",
      typer: "Beskæftigelse",
      timerPerUge: 37,
      sagsstatus: "Afsluttet",
      arbejdsophoersagsstatus: "Godkendt",
    },
  ],
  loenarbejdeAttest: {
    harTimerPerUge: true,
  },
  dagpengeerklaering: {
    udbtype: "Dagpenge",
    startdato: "2025-10-04",
    sagsstatus: "Aktiv",
    sagsstatusdato: "2025-10-04",
    erGodk: true,
  },
  cVUddannelseListe: [
    {
      uddannelse: "Professionsbachelor i IT",
      niveau: "Mellemlang videregående",
      startdato: "2020-09-01",
      slutdato: "2024-06-30",
    },
  ],
  timeForbrug: {
    dagpenge: 308,
    senesteAarMaaned: "2025-11",
    erOver962: false,
    erOver1443: false,
  },
  paamindelser: {
    type: "Jobsøgning",
    betegnelse: "Husk at opdatere joblog ugentligt",
  },
  paamindelse: {
    uRRINGLType: "Opkald",
    uRRINGLTekst: "Kontaktet vedr. manglende timeseddel",
    harFUBASEF: false,
  },
  efterloen: {
    godk: false,
    efterloenRetDato: null,
  },
  udbetaling: {
    periode: 202511,
    type: "Dagpenge",
    beregnDato: "2025-11-25",
    beloeb: 18863,
    dispDato: "2025-11-30",
    status: "Til udbetaling",
  },
  akasseKontingent: {
    saldo: -850.0,
    forfaldsdato: "2025-12-01",
  },
  loensStam: {
    aendringsdato: "2024-06-15",
    pakkevalg: "Basis",
    tegningsdato: "2024-06-15",
    sum: 75000,
    daekPeriode: 6,
  },
  loensErkl: {
    udbGodk: null,
    fakStart: null,
    fakSlut: null,
    restTimer: null,
    bemaerk: null,
  },
  kursusListe: [
    {
      startdato: "2025-11-18",
      slutdato: "2025-11-22",
      timer: 30,
      erhvervsgruppe: "IT og digitale kompetencer",
      forbrugteTimer: 30,
    },
  ],
  efterreguleringListe: [
    {
      periode: "2025-10",
      status: "Behandlet",
    },
  ],
  nelErkl: {
    godk: false,
  },
};

export default mockAseCustomer;
