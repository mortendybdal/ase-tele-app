(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Box/Box.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Header",
    ()=>Header,
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Wrapper",
    componentId: "sc-6438da67-0"
})`
  display: flex;
  flex-direction: column;
  border-top: 5px solid ${({ theme })=>theme.colors.primary.light};
  color: var(--color-text);
  width: 50%;
  min-width: 50%;

  &:nth-child(n + 1) {
    border-left: 1px solid ${({ theme })=>theme.colors.border};
  }
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Header",
    componentId: "sc-6438da67-1"
})`
  padding: ${({ theme })=>theme.spacing.sm};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: 700;
  background-color: rgb(221, 220, 220);
  border-bottom: 1px solid ${({ theme })=>theme.colors.border};
  color: var(--color-text);
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Content",
    componentId: "sc-6438da67-2"
})`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme })=>theme.spacing.sm};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  color: var(--color-text);
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Box/Box.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Box/Box.styles.ts [app-client] (ecmascript)");
;
;
function Box({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Box/Box.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Box/Box.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Box/Box.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Box;
var _c;
__turbopack_context__.k.register(_c, "Box");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.styled.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inner",
    ()=>Inner,
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__Wrapper",
    componentId: "sc-5a1fa87c-0"
})`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;
const Inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__Inner",
    componentId: "sc-5a1fa87c-1"
})`
  display: flex;
  flex-wrap: wrap;
  width: ${({ $showTestPanel })=>$showTestPanel ? "calc(100% - var(--panel-width))" : "100%"};
  transition: width 0.3s ease-in-out;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Logo/Logo.styled.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoImage",
    ()=>LogoImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const LogoImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "Logo.styled__LogoImage",
    componentId: "sc-c4935d70-0"
})`
  position: absolute;
  width: 65px;
  bottom: 24px;
  right: 24px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.styled.ts [app-client] (ecmascript)");
;
;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoImage"], {
        src: "/ase-logo.png",
        alt: "Logo"
    }, void 0, false, {
        fileName: "[project]/src/components/Logo/Logo.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Logo/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useKeyPressed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyPressed",
    ()=>useKeyPressed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useKeyPressed = (targetKey)=>{
    _s();
    const [keyPressed, setKeyPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const downHandler = ({ key })=>{
        if (key === targetKey) {
            setKeyPressed(true);
        }
    };
    const upHandler = ({ key })=>{
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyPressed.useEffect": ()=>{
            window.addEventListener("keydown", downHandler);
            window.addEventListener("keyup", upHandler);
            return ({
                "useKeyPressed.useEffect": ()=>{
                    window.removeEventListener("keydown", downHandler);
                    window.removeEventListener("keyup", upHandler);
                }
            })["useKeyPressed.useEffect"];
        }
    }["useKeyPressed.useEffect"], []);
    return keyPressed;
};
_s(useKeyPressed, "vmDSD7h68k9Z7B48/eX82jyokKU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/__mock__/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const mockAseCustomer = {
    fuldmagt: {
        fuldmagt1: true,
        fuldmagttekst: "Fuldmagt til ægtefælle - Mette Jensen",
        oBSnote: "Kan kontaktes på vegne af medlem"
    },
    sagsrevnote: {
        sagsrevnote: true,
        sagsrevtekst: "Medlem har anmodet om gennemgang af dagpengesag",
        sagsrevStartdato: "2025-11-15"
    },
    gdag: {
        gDAGNote: "G-dag opfyldt",
        gDAGTekst: "Selvforskyldt ledig - G-dag registreret",
        gDAGStartdato: "2025-10-01"
    },
    aKSBreve1MDR: [
        {
            aKSBreve1mdr: "Velkomstbrev sendt"
        },
        {
            aKSBreve1mdr: "Dagpengeinformation sendt"
        }
    ],
    aKSBreve5: [
        {
            aKSBreve5: "Orientering om rådighedssamtale"
        }
    ],
    loensPolice: {
        lOeNSPolice: true
    },
    postModt: [
        {
            aKSPostModtTitel: "Ledighedserklæring modtaget"
        },
        {
            aKSPostModtTitel: "Dokumentation for anciennitet modtaget"
        }
    ],
    rykbrev: {
        rykbrevType: "1. rykker - kontingent",
        rykbrevDato: "2025-11-20"
    },
    ubehPost: [
        {
            ubehPostType: "Manglende",
            ubehPostTitel: "Timeseddel for oktober 2025"
        }
    ],
    medlemsaarsag: {
        medlemsaarsag: "Nyuddannet",
        medlemsaarsag1: true,
        medlemsaarsagTILF: "Dimittend",
        medlemskabGyldigFra: "2024-06-15"
    },
    medlemssagsstatus: {
        medlemssagsstatus: "Aktiv"
    },
    medlemskategori: {
        medlemskategori: "Fuldtidsforsikret",
        medlemskategori1: true,
        medlemskategori2: false,
        medlemskategori3: false,
        medlemskategori4: false
    },
    akasseAnc: {
        akasseAnc: "2024-06-15"
    },
    kontingent: {
        konfritSlut: null,
        kontingentSaldoAKS: -850.0,
        forfaldsdatoAKS: "2025-12-01"
    },
    gaeld: {
        gaeldssaldoAKS: 0
    },
    aKS: {
        dataMKSag: "2025-234567"
    },
    sagsstatus: {
        sagsstatusMD: true,
        sagsstatusMD1: false
    },
    beskaeftigelse: {
        beskaeftigelse: false
    },
    moedeudeblivelse: {
        moedeUDEBLE: null,
        datoTidUDEBLE: null
    },
    bookingFrist: {
        bookfristDato: "2025-12-15",
        bookfristMoedetype: "Rådighedssamtale"
    },
    fravaer: [
        {
            kontaktforloebStart: "2025-10-01",
            kontaktforloebSlut: null
        }
    ],
    stop: [
        {
            sTOPtype: "Karantæne",
            sTOPfradato: "2025-10-01",
            sTOPtildato: "2025-10-03",
            sTOPAntal: 3
        }
    ],
    jobCenter: [
        {
            jCafogtilmeld4: "2025-10-02",
            jCStatus4: "Tilmeldt",
            jCBetegnelse4: "2025-10-02",
            jCTilm: "2025-10-02",
            tilmJCJA: true
        }
    ],
    jobLog: {
        mglJoblogUge: "2025-W48",
        joblogUgerFrit: "2",
        joblogCV: 1,
        joblogAnsoegning: 12
    },
    fritagetRaadighed: [],
    aktivering: [
        {
            aktiveringnavn: "Jobsøgningskursus - effektiv ansøgning",
            aktiveringStart: "2025-11-18",
            aktiveringSlut: "2025-11-22"
        }
    ],
    yL: [
        {
            yLVirk: "Jensen & Co ApS",
            yLStartdato: "2023-08-15",
            yLTYPE: "Beskæftigelse",
            yLTimer: 1480,
            yLSagsstatus: "Afsluttet",
            yLArbophoerSagstatus: "Godkendt"
        }
    ],
    dPERK: {
        dPERKType: "Dagpenge",
        dPERKFakstartdato: "2025-10-04",
        dPERKSagsstatus: "Aktiv",
        dPERKSagsstatusDato: "2025-10-04"
    },
    cVUdd: [
        {
            cVUddannelse: "Professionsbachelor i IT",
            cVUddNiveau: "Mellemlang videregående",
            cVUddStart: "2020-09-01",
            cVUddSlut: "2024-06-30"
        }
    ],
    dPForbrug: [
        {
            dPForbrug: 148,
            dPUdbMaaned: "2025-10"
        },
        {
            dPForbrug: 160,
            dPUdbMaaned: "2025-11"
        }
    ],
    paamind: [
        {
            paaminType5: "Jobsøgning",
            paaminBetegn5: "Husk at opdatere joblog ugentligt"
        }
    ],
    uRRing: {
        uRRINGLType: "Opkald",
        uRRINGLTekst: "Kontaktet vedr. manglende timeseddel"
    },
    efterloen: {
        efterloensbevis: false,
        efterloenretdato: null
    },
    uDB: {
        uDBPeriode: 202511,
        uDBType: "Dagpenge",
        uDBBeregnDato: "2025-11-25",
        uDBBeloeb: 18863,
        uDBDispDato: "2025-11-30",
        uDBStatus: "Til udbetaling"
    },
    loensikring: {
        lOeNSAendringsdato: "2024-06-15",
        lOeNSPakkevalg: "Basis",
        lOeNSTegningsdato: "2024-06-15",
        lOeNSSUM: 75000,
        lOeNSDaekPeriode: 6
    },
    loensErkl: {
        lOeNSUdbGodk: null,
        lOeNSFakStart: null,
        lOeNSFakSlut: null,
        lOeNSRestTimer: null,
        lOeNSBemaerk: null
    },
    kursus: {
        kursusStart: "2025-11-18",
        kursusSlut: "2025-11-22",
        kursusTimer: 30,
        kursusErhvevsgr: "IT og digitale kompetencer",
        kursusForbrugtetimer: 30
    },
    efterregulering: [
        {
            efteregPeriode: "2025-10",
            efterregStatus: "Behandlet",
            efterregAntal: 2
        }
    ]
};
const __TURBOPACK__default__export__ = mockAseCustomer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/generalSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneralSlice",
    ()=>createGeneralSlice,
    "initialGeneralSlice",
    ()=>initialGeneralSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$mock_$5f2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/__mock__/data.ts [app-client] (ecmascript)");
;
const initialGeneralSlice = {
    isTestMode: false,
    customerData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$mock_$5f2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const createGeneralSlice = (set)=>({
        ...initialGeneralSlice,
        setIsTestMode: (isTestMode)=>set(()=>({
                    isTestMode
                })),
        setCustomerData: (data)=>set(()=>({
                    customerData: data
                }))
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialState",
    ()=>initialState,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$auto$2d$zustand$2d$selectors$2d$hook$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/auto-zustand-selectors-hook/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$generalSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/generalSlice.ts [app-client] (ecmascript)");
;
;
;
;
const initialState = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$generalSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialGeneralSlice"]
};
const baseStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((...a)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$generalSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneralSlice"])(...a)
    }), {
    name: "ase-customer-cards",
    version: 1,
    partialize: (state)=>({})
}));
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$auto$2d$zustand$2d$selectors$2d$hook$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorHooks"])(baseStore);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestPanel/TestPanel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "Content",
    ()=>Content,
    "Header",
    ()=>Header,
    "SubTitle",
    ()=>SubTitle,
    "Title",
    ()=>Title,
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__Wrapper",
    componentId: "sc-d6a72082-0"
})`
  position: fixed;
  top: 0;
  right: 0;
  width: var(--panel-width);
  height: 100vh;
  border-left: 1px solid ${({ theme })=>theme.colors.border};
  transform: ${({ $show })=>$show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme })=>theme.colors.background.paper};
  box-shadow: ${({ $show })=>$show ? "-2px 0 5px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: 1000;
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__Header",
    componentId: "sc-d6a72082-1"
})`
  padding: ${({ theme })=>theme.spacing.md};
  border-bottom: 1px solid ${({ theme })=>theme.colors.border};
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__Title",
    componentId: "sc-d6a72082-2"
})`
  font-size: ${({ theme })=>theme.typography.fontSize["2xl"]};
  font-weight: 700;
  margin-bottom: ${({ theme })=>theme.spacing.sm};
`;
const SubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__SubTitle",
    componentId: "sc-d6a72082-3"
})`
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__CloseButton",
    componentId: "sc-d6a72082-4"
})`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme })=>theme.colors.background.default};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme })=>theme.colors.background.gray};
  }
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestPanel.styles__Content",
    componentId: "sc-d6a72082-5"
})`
  width: 100%;
  height: calc(100vh - 85px);
  padding: ${({ theme })=>theme.spacing.md};
  overflow-y: auto;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestPanel/TestPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestPanel/TestPanel.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$edit$2d$react$2f$build$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/json-edit-react/build/index.esm.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function TestPanel() {
    _s();
    const showTestPanel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useIsTestMode();
    const customerData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useCustomerData();
    const setShowTestPanel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetIsTestMode();
    const setCustomerData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetCustomerData();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
        $show: showTestPanel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        children: "Test Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "It is possible to edit data to see the effect in the UI."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                        onClick: ()=>setShowTestPanel(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCloseSharp"], {}, void 0, false, {
                            fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$edit$2d$react$2f$build$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["JsonEditor"], {
                    data: customerData,
                    setData: (data)=>setCustomerData(data),
                    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$edit$2d$react$2f$build$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["githubLightTheme"],
                    restrictDelete: true,
                    restrictAdd: true,
                    restrictTypeSelection: true,
                    rootFontSize: 12,
                    enableClipboard: false,
                    maxWidth: "100%"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestPanel/TestPanel.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(TestPanel, "hmAWQ/paK2EMdqujgHAc8KeTZ28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useIsTestMode,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useCustomerData,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetIsTestMode,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetCustomerData
    ];
});
_c = TestPanel;
var _c;
__turbopack_context__.k.register(_c, "TestPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestPanel/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestPanel/TestPanel.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Box/Box.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/page.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Logo/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyPressed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/TestPanel/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestPanel/TestPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const showTestPanel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useIsTestMode();
    const setShowTestPanel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetIsTestMode();
    const aKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"])("a");
    const sKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"])("s");
    const eKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"])("e");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (aKey && sKey && eKey && !showTestPanel) {
                setShowTestPanel(true);
            }
        }
    }["Home.useEffect"], [
        aKey,
        sKey,
        eKey,
        showTestPanel,
        setShowTestPanel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inner"], {
                $showTestPanel: showTestPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 1",
                        children: "This is a simple box component styled with styled-components. It includes a header and content area."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 2",
                        children: "Here is another box to demonstrate multiple instances of the Box component."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 3",
                        children: "This is a simple box component styled with styled-components. It includes a header and content area."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 4",
                        children: "Here is another box to demonstrate multiple instances of the Box component."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 5",
                        children: "This is a simple box component styled with styled-components. It includes a header and content area."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Box 6",
                        children: "Here is another box to demonstrate multiple instances of the Box component."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestPanel$2f$TestPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Home, "lsjRhr8kVq8gPTMSeN95wdmGn9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useIsTestMode,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].useSetIsTestMode,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyPressed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyPressed"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_882767a8._.js.map