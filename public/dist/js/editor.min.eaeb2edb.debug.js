/*! markdown-it 3.0.3 https://github.com//markdown-it/markdown-it @license MIT */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.markdownit=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// List of valid entities
//
// Generate with ./support/entities.js script
//
'use strict';

/*eslint quotes:0*/
module.exports = {
  "Aacute":"\u00C1",
  "aacute":"\u00E1",
  "Abreve":"\u0102",
  "abreve":"\u0103",
  "ac":"\u223E",
  "acd":"\u223F",
  "acE":"\u223E\u0333",
  "Acirc":"\u00C2",
  "acirc":"\u00E2",
  "acute":"\u00B4",
  "Acy":"\u0410",
  "acy":"\u0430",
  "AElig":"\u00C6",
  "aelig":"\u00E6",
  "af":"\u2061",
  "Afr":"\uD835\uDD04",
  "afr":"\uD835\uDD1E",
  "Agrave":"\u00C0",
  "agrave":"\u00E0",
  "alefsym":"\u2135",
  "aleph":"\u2135",
  "Alpha":"\u0391",
  "alpha":"\u03B1",
  "Amacr":"\u0100",
  "amacr":"\u0101",
  "amalg":"\u2A3F",
  "AMP":"\u0026",
  "amp":"\u0026",
  "And":"\u2A53",
  "and":"\u2227",
  "andand":"\u2A55",
  "andd":"\u2A5C",
  "andslope":"\u2A58",
  "andv":"\u2A5A",
  "ang":"\u2220",
  "ange":"\u29A4",
  "angle":"\u2220",
  "angmsd":"\u2221",
  "angmsdaa":"\u29A8",
  "angmsdab":"\u29A9",
  "angmsdac":"\u29AA",
  "angmsdad":"\u29AB",
  "angmsdae":"\u29AC",
  "angmsdaf":"\u29AD",
  "angmsdag":"\u29AE",
  "angmsdah":"\u29AF",
  "angrt":"\u221F",
  "angrtvb":"\u22BE",
  "angrtvbd":"\u299D",
  "angsph":"\u2222",
  "angst":"\u00C5",
  "angzarr":"\u237C",
  "Aogon":"\u0104",
  "aogon":"\u0105",
  "Aopf":"\uD835\uDD38",
  "aopf":"\uD835\uDD52",
  "ap":"\u2248",
  "apacir":"\u2A6F",
  "apE":"\u2A70",
  "ape":"\u224A",
  "apid":"\u224B",
  "apos":"\u0027",
  "ApplyFunction":"\u2061",
  "approx":"\u2248",
  "approxeq":"\u224A",
  "Aring":"\u00C5",
  "aring":"\u00E5",
  "Ascr":"\uD835\uDC9C",
  "ascr":"\uD835\uDCB6",
  "Assign":"\u2254",
  "ast":"\u002A",
  "asymp":"\u2248",
  "asympeq":"\u224D",
  "Atilde":"\u00C3",
  "atilde":"\u00E3",
  "Auml":"\u00C4",
  "auml":"\u00E4",
  "awconint":"\u2233",
  "awint":"\u2A11",
  "backcong":"\u224C",
  "backepsilon":"\u03F6",
  "backprime":"\u2035",
  "backsim":"\u223D",
  "backsimeq":"\u22CD",
  "Backslash":"\u2216",
  "Barv":"\u2AE7",
  "barvee":"\u22BD",
  "Barwed":"\u2306",
  "barwed":"\u2305",
  "barwedge":"\u2305",
  "bbrk":"\u23B5",
  "bbrktbrk":"\u23B6",
  "bcong":"\u224C",
  "Bcy":"\u0411",
  "bcy":"\u0431",
  "bdquo":"\u201E",
  "becaus":"\u2235",
  "Because":"\u2235",
  "because":"\u2235",
  "bemptyv":"\u29B0",
  "bepsi":"\u03F6",
  "bernou":"\u212C",
  "Bernoullis":"\u212C",
  "Beta":"\u0392",
  "beta":"\u03B2",
  "beth":"\u2136",
  "between":"\u226C",
  "Bfr":"\uD835\uDD05",
  "bfr":"\uD835\uDD1F",
  "bigcap":"\u22C2",
  "bigcirc":"\u25EF",
  "bigcup":"\u22C3",
  "bigodot":"\u2A00",
  "bigoplus":"\u2A01",
  "bigotimes":"\u2A02",
  "bigsqcup":"\u2A06",
  "bigstar":"\u2605",
  "bigtriangledown":"\u25BD",
  "bigtriangleup":"\u25B3",
  "biguplus":"\u2A04",
  "bigvee":"\u22C1",
  "bigwedge":"\u22C0",
  "bkarow":"\u290D",
  "blacklozenge":"\u29EB",
  "blacksquare":"\u25AA",
  "blacktriangle":"\u25B4",
  "blacktriangledown":"\u25BE",
  "blacktriangleleft":"\u25C2",
  "blacktriangleright":"\u25B8",
  "blank":"\u2423",
  "blk12":"\u2592",
  "blk14":"\u2591",
  "blk34":"\u2593",
  "block":"\u2588",
  "bne":"\u003D\u20E5",
  "bnequiv":"\u2261\u20E5",
  "bNot":"\u2AED",
  "bnot":"\u2310",
  "Bopf":"\uD835\uDD39",
  "bopf":"\uD835\uDD53",
  "bot":"\u22A5",
  "bottom":"\u22A5",
  "bowtie":"\u22C8",
  "boxbox":"\u29C9",
  "boxDL":"\u2557",
  "boxDl":"\u2556",
  "boxdL":"\u2555",
  "boxdl":"\u2510",
  "boxDR":"\u2554",
  "boxDr":"\u2553",
  "boxdR":"\u2552",
  "boxdr":"\u250C",
  "boxH":"\u2550",
  "boxh":"\u2500",
  "boxHD":"\u2566",
  "boxHd":"\u2564",
  "boxhD":"\u2565",
  "boxhd":"\u252C",
  "boxHU":"\u2569",
  "boxHu":"\u2567",
  "boxhU":"\u2568",
  "boxhu":"\u2534",
  "boxminus":"\u229F",
  "boxplus":"\u229E",
  "boxtimes":"\u22A0",
  "boxUL":"\u255D",
  "boxUl":"\u255C",
  "boxuL":"\u255B",
  "boxul":"\u2518",
  "boxUR":"\u255A",
  "boxUr":"\u2559",
  "boxuR":"\u2558",
  "boxur":"\u2514",
  "boxV":"\u2551",
  "boxv":"\u2502",
  "boxVH":"\u256C",
  "boxVh":"\u256B",
  "boxvH":"\u256A",
  "boxvh":"\u253C",
  "boxVL":"\u2563",
  "boxVl":"\u2562",
  "boxvL":"\u2561",
  "boxvl":"\u2524",
  "boxVR":"\u2560",
  "boxVr":"\u255F",
  "boxvR":"\u255E",
  "boxvr":"\u251C",
  "bprime":"\u2035",
  "Breve":"\u02D8",
  "breve":"\u02D8",
  "brvbar":"\u00A6",
  "Bscr":"\u212C",
  "bscr":"\uD835\uDCB7",
  "bsemi":"\u204F",
  "bsim":"\u223D",
  "bsime":"\u22CD",
  "bsol":"\u005C",
  "bsolb":"\u29C5",
  "bsolhsub":"\u27C8",
  "bull":"\u2022",
  "bullet":"\u2022",
  "bump":"\u224E",
  "bumpE":"\u2AAE",
  "bumpe":"\u224F",
  "Bumpeq":"\u224E",
  "bumpeq":"\u224F",
  "Cacute":"\u0106",
  "cacute":"\u0107",
  "Cap":"\u22D2",
  "cap":"\u2229",
  "capand":"\u2A44",
  "capbrcup":"\u2A49",
  "capcap":"\u2A4B",
  "capcup":"\u2A47",
  "capdot":"\u2A40",
  "CapitalDifferentialD":"\u2145",
  "caps":"\u2229\uFE00",
  "caret":"\u2041",
  "caron":"\u02C7",
  "Cayleys":"\u212D",
  "ccaps":"\u2A4D",
  "Ccaron":"\u010C",
  "ccaron":"\u010D",
  "Ccedil":"\u00C7",
  "ccedil":"\u00E7",
  "Ccirc":"\u0108",
  "ccirc":"\u0109",
  "Cconint":"\u2230",
  "ccups":"\u2A4C",
  "ccupssm":"\u2A50",
  "Cdot":"\u010A",
  "cdot":"\u010B",
  "cedil":"\u00B8",
  "Cedilla":"\u00B8",
  "cemptyv":"\u29B2",
  "cent":"\u00A2",
  "CenterDot":"\u00B7",
  "centerdot":"\u00B7",
  "Cfr":"\u212D",
  "cfr":"\uD835\uDD20",
  "CHcy":"\u0427",
  "chcy":"\u0447",
  "check":"\u2713",
  "checkmark":"\u2713",
  "Chi":"\u03A7",
  "chi":"\u03C7",
  "cir":"\u25CB",
  "circ":"\u02C6",
  "circeq":"\u2257",
  "circlearrowleft":"\u21BA",
  "circlearrowright":"\u21BB",
  "circledast":"\u229B",
  "circledcirc":"\u229A",
  "circleddash":"\u229D",
  "CircleDot":"\u2299",
  "circledR":"\u00AE",
  "circledS":"\u24C8",
  "CircleMinus":"\u2296",
  "CirclePlus":"\u2295",
  "CircleTimes":"\u2297",
  "cirE":"\u29C3",
  "cire":"\u2257",
  "cirfnint":"\u2A10",
  "cirmid":"\u2AEF",
  "cirscir":"\u29C2",
  "ClockwiseContourIntegral":"\u2232",
  "CloseCurlyDoubleQuote":"\u201D",
  "CloseCurlyQuote":"\u2019",
  "clubs":"\u2663",
  "clubsuit":"\u2663",
  "Colon":"\u2237",
  "colon":"\u003A",
  "Colone":"\u2A74",
  "colone":"\u2254",
  "coloneq":"\u2254",
  "comma":"\u002C",
  "commat":"\u0040",
  "comp":"\u2201",
  "compfn":"\u2218",
  "complement":"\u2201",
  "complexes":"\u2102",
  "cong":"\u2245",
  "congdot":"\u2A6D",
  "Congruent":"\u2261",
  "Conint":"\u222F",
  "conint":"\u222E",
  "ContourIntegral":"\u222E",
  "Copf":"\u2102",
  "copf":"\uD835\uDD54",
  "coprod":"\u2210",
  "Coproduct":"\u2210",
  "COPY":"\u00A9",
  "copy":"\u00A9",
  "copysr":"\u2117",
  "CounterClockwiseContourIntegral":"\u2233",
  "crarr":"\u21B5",
  "Cross":"\u2A2F",
  "cross":"\u2717",
  "Cscr":"\uD835\uDC9E",
  "cscr":"\uD835\uDCB8",
  "csub":"\u2ACF",
  "csube":"\u2AD1",
  "csup":"\u2AD0",
  "csupe":"\u2AD2",
  "ctdot":"\u22EF",
  "cudarrl":"\u2938",
  "cudarrr":"\u2935",
  "cuepr":"\u22DE",
  "cuesc":"\u22DF",
  "cularr":"\u21B6",
  "cularrp":"\u293D",
  "Cup":"\u22D3",
  "cup":"\u222A",
  "cupbrcap":"\u2A48",
  "CupCap":"\u224D",
  "cupcap":"\u2A46",
  "cupcup":"\u2A4A",
  "cupdot":"\u228D",
  "cupor":"\u2A45",
  "cups":"\u222A\uFE00",
  "curarr":"\u21B7",
  "curarrm":"\u293C",
  "curlyeqprec":"\u22DE",
  "curlyeqsucc":"\u22DF",
  "curlyvee":"\u22CE",
  "curlywedge":"\u22CF",
  "curren":"\u00A4",
  "curvearrowleft":"\u21B6",
  "curvearrowright":"\u21B7",
  "cuvee":"\u22CE",
  "cuwed":"\u22CF",
  "cwconint":"\u2232",
  "cwint":"\u2231",
  "cylcty":"\u232D",
  "Dagger":"\u2021",
  "dagger":"\u2020",
  "daleth":"\u2138",
  "Darr":"\u21A1",
  "dArr":"\u21D3",
  "darr":"\u2193",
  "dash":"\u2010",
  "Dashv":"\u2AE4",
  "dashv":"\u22A3",
  "dbkarow":"\u290F",
  "dblac":"\u02DD",
  "Dcaron":"\u010E",
  "dcaron":"\u010F",
  "Dcy":"\u0414",
  "dcy":"\u0434",
  "DD":"\u2145",
  "dd":"\u2146",
  "ddagger":"\u2021",
  "ddarr":"\u21CA",
  "DDotrahd":"\u2911",
  "ddotseq":"\u2A77",
  "deg":"\u00B0",
  "Del":"\u2207",
  "Delta":"\u0394",
  "delta":"\u03B4",
  "demptyv":"\u29B1",
  "dfisht":"\u297F",
  "Dfr":"\uD835\uDD07",
  "dfr":"\uD835\uDD21",
  "dHar":"\u2965",
  "dharl":"\u21C3",
  "dharr":"\u21C2",
  "DiacriticalAcute":"\u00B4",
  "DiacriticalDot":"\u02D9",
  "DiacriticalDoubleAcute":"\u02DD",
  "DiacriticalGrave":"\u0060",
  "DiacriticalTilde":"\u02DC",
  "diam":"\u22C4",
  "Diamond":"\u22C4",
  "diamond":"\u22C4",
  "diamondsuit":"\u2666",
  "diams":"\u2666",
  "die":"\u00A8",
  "DifferentialD":"\u2146",
  "digamma":"\u03DD",
  "disin":"\u22F2",
  "div":"\u00F7",
  "divide":"\u00F7",
  "divideontimes":"\u22C7",
  "divonx":"\u22C7",
  "DJcy":"\u0402",
  "djcy":"\u0452",
  "dlcorn":"\u231E",
  "dlcrop":"\u230D",
  "dollar":"\u0024",
  "Dopf":"\uD835\uDD3B",
  "dopf":"\uD835\uDD55",
  "Dot":"\u00A8",
  "dot":"\u02D9",
  "DotDot":"\u20DC",
  "doteq":"\u2250",
  "doteqdot":"\u2251",
  "DotEqual":"\u2250",
  "dotminus":"\u2238",
  "dotplus":"\u2214",
  "dotsquare":"\u22A1",
  "doublebarwedge":"\u2306",
  "DoubleContourIntegral":"\u222F",
  "DoubleDot":"\u00A8",
  "DoubleDownArrow":"\u21D3",
  "DoubleLeftArrow":"\u21D0",
  "DoubleLeftRightArrow":"\u21D4",
  "DoubleLeftTee":"\u2AE4",
  "DoubleLongLeftArrow":"\u27F8",
  "DoubleLongLeftRightArrow":"\u27FA",
  "DoubleLongRightArrow":"\u27F9",
  "DoubleRightArrow":"\u21D2",
  "DoubleRightTee":"\u22A8",
  "DoubleUpArrow":"\u21D1",
  "DoubleUpDownArrow":"\u21D5",
  "DoubleVerticalBar":"\u2225",
  "DownArrow":"\u2193",
  "Downarrow":"\u21D3",
  "downarrow":"\u2193",
  "DownArrowBar":"\u2913",
  "DownArrowUpArrow":"\u21F5",
  "DownBreve":"\u0311",
  "downdownarrows":"\u21CA",
  "downharpoonleft":"\u21C3",
  "downharpoonright":"\u21C2",
  "DownLeftRightVector":"\u2950",
  "DownLeftTeeVector":"\u295E",
  "DownLeftVector":"\u21BD",
  "DownLeftVectorBar":"\u2956",
  "DownRightTeeVector":"\u295F",
  "DownRightVector":"\u21C1",
  "DownRightVectorBar":"\u2957",
  "DownTee":"\u22A4",
  "DownTeeArrow":"\u21A7",
  "drbkarow":"\u2910",
  "drcorn":"\u231F",
  "drcrop":"\u230C",
  "Dscr":"\uD835\uDC9F",
  "dscr":"\uD835\uDCB9",
  "DScy":"\u0405",
  "dscy":"\u0455",
  "dsol":"\u29F6",
  "Dstrok":"\u0110",
  "dstrok":"\u0111",
  "dtdot":"\u22F1",
  "dtri":"\u25BF",
  "dtrif":"\u25BE",
  "duarr":"\u21F5",
  "duhar":"\u296F",
  "dwangle":"\u29A6",
  "DZcy":"\u040F",
  "dzcy":"\u045F",
  "dzigrarr":"\u27FF",
  "Eacute":"\u00C9",
  "eacute":"\u00E9",
  "easter":"\u2A6E",
  "Ecaron":"\u011A",
  "ecaron":"\u011B",
  "ecir":"\u2256",
  "Ecirc":"\u00CA",
  "ecirc":"\u00EA",
  "ecolon":"\u2255",
  "Ecy":"\u042D",
  "ecy":"\u044D",
  "eDDot":"\u2A77",
  "Edot":"\u0116",
  "eDot":"\u2251",
  "edot":"\u0117",
  "ee":"\u2147",
  "efDot":"\u2252",
  "Efr":"\uD835\uDD08",
  "efr":"\uD835\uDD22",
  "eg":"\u2A9A",
  "Egrave":"\u00C8",
  "egrave":"\u00E8",
  "egs":"\u2A96",
  "egsdot":"\u2A98",
  "el":"\u2A99",
  "Element":"\u2208",
  "elinters":"\u23E7",
  "ell":"\u2113",
  "els":"\u2A95",
  "elsdot":"\u2A97",
  "Emacr":"\u0112",
  "emacr":"\u0113",
  "empty":"\u2205",
  "emptyset":"\u2205",
  "EmptySmallSquare":"\u25FB",
  "emptyv":"\u2205",
  "EmptyVerySmallSquare":"\u25AB",
  "emsp":"\u2003",
  "emsp13":"\u2004",
  "emsp14":"\u2005",
  "ENG":"\u014A",
  "eng":"\u014B",
  "ensp":"\u2002",
  "Eogon":"\u0118",
  "eogon":"\u0119",
  "Eopf":"\uD835\uDD3C",
  "eopf":"\uD835\uDD56",
  "epar":"\u22D5",
  "eparsl":"\u29E3",
  "eplus":"\u2A71",
  "epsi":"\u03B5",
  "Epsilon":"\u0395",
  "epsilon":"\u03B5",
  "epsiv":"\u03F5",
  "eqcirc":"\u2256",
  "eqcolon":"\u2255",
  "eqsim":"\u2242",
  "eqslantgtr":"\u2A96",
  "eqslantless":"\u2A95",
  "Equal":"\u2A75",
  "equals":"\u003D",
  "EqualTilde":"\u2242",
  "equest":"\u225F",
  "Equilibrium":"\u21CC",
  "equiv":"\u2261",
  "equivDD":"\u2A78",
  "eqvparsl":"\u29E5",
  "erarr":"\u2971",
  "erDot":"\u2253",
  "Escr":"\u2130",
  "escr":"\u212F",
  "esdot":"\u2250",
  "Esim":"\u2A73",
  "esim":"\u2242",
  "Eta":"\u0397",
  "eta":"\u03B7",
  "ETH":"\u00D0",
  "eth":"\u00F0",
  "Euml":"\u00CB",
  "euml":"\u00EB",
  "euro":"\u20AC",
  "excl":"\u0021",
  "exist":"\u2203",
  "Exists":"\u2203",
  "expectation":"\u2130",
  "ExponentialE":"\u2147",
  "exponentiale":"\u2147",
  "fallingdotseq":"\u2252",
  "Fcy":"\u0424",
  "fcy":"\u0444",
  "female":"\u2640",
  "ffilig":"\uFB03",
  "fflig":"\uFB00",
  "ffllig":"\uFB04",
  "Ffr":"\uD835\uDD09",
  "ffr":"\uD835\uDD23",
  "filig":"\uFB01",
  "FilledSmallSquare":"\u25FC",
  "FilledVerySmallSquare":"\u25AA",
  "fjlig":"\u0066\u006A",
  "flat":"\u266D",
  "fllig":"\uFB02",
  "fltns":"\u25B1",
  "fnof":"\u0192",
  "Fopf":"\uD835\uDD3D",
  "fopf":"\uD835\uDD57",
  "ForAll":"\u2200",
  "forall":"\u2200",
  "fork":"\u22D4",
  "forkv":"\u2AD9",
  "Fouriertrf":"\u2131",
  "fpartint":"\u2A0D",
  "frac12":"\u00BD",
  "frac13":"\u2153",
  "frac14":"\u00BC",
  "frac15":"\u2155",
  "frac16":"\u2159",
  "frac18":"\u215B",
  "frac23":"\u2154",
  "frac25":"\u2156",
  "frac34":"\u00BE",
  "frac35":"\u2157",
  "frac38":"\u215C",
  "frac45":"\u2158",
  "frac56":"\u215A",
  "frac58":"\u215D",
  "frac78":"\u215E",
  "frasl":"\u2044",
  "frown":"\u2322",
  "Fscr":"\u2131",
  "fscr":"\uD835\uDCBB",
  "gacute":"\u01F5",
  "Gamma":"\u0393",
  "gamma":"\u03B3",
  "Gammad":"\u03DC",
  "gammad":"\u03DD",
  "gap":"\u2A86",
  "Gbreve":"\u011E",
  "gbreve":"\u011F",
  "Gcedil":"\u0122",
  "Gcirc":"\u011C",
  "gcirc":"\u011D",
  "Gcy":"\u0413",
  "gcy":"\u0433",
  "Gdot":"\u0120",
  "gdot":"\u0121",
  "gE":"\u2267",
  "ge":"\u2265",
  "gEl":"\u2A8C",
  "gel":"\u22DB",
  "geq":"\u2265",
  "geqq":"\u2267",
  "geqslant":"\u2A7E",
  "ges":"\u2A7E",
  "gescc":"\u2AA9",
  "gesdot":"\u2A80",
  "gesdoto":"\u2A82",
  "gesdotol":"\u2A84",
  "gesl":"\u22DB\uFE00",
  "gesles":"\u2A94",
  "Gfr":"\uD835\uDD0A",
  "gfr":"\uD835\uDD24",
  "Gg":"\u22D9",
  "gg":"\u226B",
  "ggg":"\u22D9",
  "gimel":"\u2137",
  "GJcy":"\u0403",
  "gjcy":"\u0453",
  "gl":"\u2277",
  "gla":"\u2AA5",
  "glE":"\u2A92",
  "glj":"\u2AA4",
  "gnap":"\u2A8A",
  "gnapprox":"\u2A8A",
  "gnE":"\u2269",
  "gne":"\u2A88",
  "gneq":"\u2A88",
  "gneqq":"\u2269",
  "gnsim":"\u22E7",
  "Gopf":"\uD835\uDD3E",
  "gopf":"\uD835\uDD58",
  "grave":"\u0060",
  "GreaterEqual":"\u2265",
  "GreaterEqualLess":"\u22DB",
  "GreaterFullEqual":"\u2267",
  "GreaterGreater":"\u2AA2",
  "GreaterLess":"\u2277",
  "GreaterSlantEqual":"\u2A7E",
  "GreaterTilde":"\u2273",
  "Gscr":"\uD835\uDCA2",
  "gscr":"\u210A",
  "gsim":"\u2273",
  "gsime":"\u2A8E",
  "gsiml":"\u2A90",
  "GT":"\u003E",
  "Gt":"\u226B",
  "gt":"\u003E",
  "gtcc":"\u2AA7",
  "gtcir":"\u2A7A",
  "gtdot":"\u22D7",
  "gtlPar":"\u2995",
  "gtquest":"\u2A7C",
  "gtrapprox":"\u2A86",
  "gtrarr":"\u2978",
  "gtrdot":"\u22D7",
  "gtreqless":"\u22DB",
  "gtreqqless":"\u2A8C",
  "gtrless":"\u2277",
  "gtrsim":"\u2273",
  "gvertneqq":"\u2269\uFE00",
  "gvnE":"\u2269\uFE00",
  "Hacek":"\u02C7",
  "hairsp":"\u200A",
  "half":"\u00BD",
  "hamilt":"\u210B",
  "HARDcy":"\u042A",
  "hardcy":"\u044A",
  "hArr":"\u21D4",
  "harr":"\u2194",
  "harrcir":"\u2948",
  "harrw":"\u21AD",
  "Hat":"\u005E",
  "hbar":"\u210F",
  "Hcirc":"\u0124",
  "hcirc":"\u0125",
  "hearts":"\u2665",
  "heartsuit":"\u2665",
  "hellip":"\u2026",
  "hercon":"\u22B9",
  "Hfr":"\u210C",
  "hfr":"\uD835\uDD25",
  "HilbertSpace":"\u210B",
  "hksearow":"\u2925",
  "hkswarow":"\u2926",
  "hoarr":"\u21FF",
  "homtht":"\u223B",
  "hookleftarrow":"\u21A9",
  "hookrightarrow":"\u21AA",
  "Hopf":"\u210D",
  "hopf":"\uD835\uDD59",
  "horbar":"\u2015",
  "HorizontalLine":"\u2500",
  "Hscr":"\u210B",
  "hscr":"\uD835\uDCBD",
  "hslash":"\u210F",
  "Hstrok":"\u0126",
  "hstrok":"\u0127",
  "HumpDownHump":"\u224E",
  "HumpEqual":"\u224F",
  "hybull":"\u2043",
  "hyphen":"\u2010",
  "Iacute":"\u00CD",
  "iacute":"\u00ED",
  "ic":"\u2063",
  "Icirc":"\u00CE",
  "icirc":"\u00EE",
  "Icy":"\u0418",
  "icy":"\u0438",
  "Idot":"\u0130",
  "IEcy":"\u0415",
  "iecy":"\u0435",
  "iexcl":"\u00A1",
  "iff":"\u21D4",
  "Ifr":"\u2111",
  "ifr":"\uD835\uDD26",
  "Igrave":"\u00CC",
  "igrave":"\u00EC",
  "ii":"\u2148",
  "iiiint":"\u2A0C",
  "iiint":"\u222D",
  "iinfin":"\u29DC",
  "iiota":"\u2129",
  "IJlig":"\u0132",
  "ijlig":"\u0133",
  "Im":"\u2111",
  "Imacr":"\u012A",
  "imacr":"\u012B",
  "image":"\u2111",
  "ImaginaryI":"\u2148",
  "imagline":"\u2110",
  "imagpart":"\u2111",
  "imath":"\u0131",
  "imof":"\u22B7",
  "imped":"\u01B5",
  "Implies":"\u21D2",
  "in":"\u2208",
  "incare":"\u2105",
  "infin":"\u221E",
  "infintie":"\u29DD",
  "inodot":"\u0131",
  "Int":"\u222C",
  "int":"\u222B",
  "intcal":"\u22BA",
  "integers":"\u2124",
  "Integral":"\u222B",
  "intercal":"\u22BA",
  "Intersection":"\u22C2",
  "intlarhk":"\u2A17",
  "intprod":"\u2A3C",
  "InvisibleComma":"\u2063",
  "InvisibleTimes":"\u2062",
  "IOcy":"\u0401",
  "iocy":"\u0451",
  "Iogon":"\u012E",
  "iogon":"\u012F",
  "Iopf":"\uD835\uDD40",
  "iopf":"\uD835\uDD5A",
  "Iota":"\u0399",
  "iota":"\u03B9",
  "iprod":"\u2A3C",
  "iquest":"\u00BF",
  "Iscr":"\u2110",
  "iscr":"\uD835\uDCBE",
  "isin":"\u2208",
  "isindot":"\u22F5",
  "isinE":"\u22F9",
  "isins":"\u22F4",
  "isinsv":"\u22F3",
  "isinv":"\u2208",
  "it":"\u2062",
  "Itilde":"\u0128",
  "itilde":"\u0129",
  "Iukcy":"\u0406",
  "iukcy":"\u0456",
  "Iuml":"\u00CF",
  "iuml":"\u00EF",
  "Jcirc":"\u0134",
  "jcirc":"\u0135",
  "Jcy":"\u0419",
  "jcy":"\u0439",
  "Jfr":"\uD835\uDD0D",
  "jfr":"\uD835\uDD27",
  "jmath":"\u0237",
  "Jopf":"\uD835\uDD41",
  "jopf":"\uD835\uDD5B",
  "Jscr":"\uD835\uDCA5",
  "jscr":"\uD835\uDCBF",
  "Jsercy":"\u0408",
  "jsercy":"\u0458",
  "Jukcy":"\u0404",
  "jukcy":"\u0454",
  "Kappa":"\u039A",
  "kappa":"\u03BA",
  "kappav":"\u03F0",
  "Kcedil":"\u0136",
  "kcedil":"\u0137",
  "Kcy":"\u041A",
  "kcy":"\u043A",
  "Kfr":"\uD835\uDD0E",
  "kfr":"\uD835\uDD28",
  "kgreen":"\u0138",
  "KHcy":"\u0425",
  "khcy":"\u0445",
  "KJcy":"\u040C",
  "kjcy":"\u045C",
  "Kopf":"\uD835\uDD42",
  "kopf":"\uD835\uDD5C",
  "Kscr":"\uD835\uDCA6",
  "kscr":"\uD835\uDCC0",
  "lAarr":"\u21DA",
  "Lacute":"\u0139",
  "lacute":"\u013A",
  "laemptyv":"\u29B4",
  "lagran":"\u2112",
  "Lambda":"\u039B",
  "lambda":"\u03BB",
  "Lang":"\u27EA",
  "lang":"\u27E8",
  "langd":"\u2991",
  "langle":"\u27E8",
  "lap":"\u2A85",
  "Laplacetrf":"\u2112",
  "laquo":"\u00AB",
  "Larr":"\u219E",
  "lArr":"\u21D0",
  "larr":"\u2190",
  "larrb":"\u21E4",
  "larrbfs":"\u291F",
  "larrfs":"\u291D",
  "larrhk":"\u21A9",
  "larrlp":"\u21AB",
  "larrpl":"\u2939",
  "larrsim":"\u2973",
  "larrtl":"\u21A2",
  "lat":"\u2AAB",
  "lAtail":"\u291B",
  "latail":"\u2919",
  "late":"\u2AAD",
  "lates":"\u2AAD\uFE00",
  "lBarr":"\u290E",
  "lbarr":"\u290C",
  "lbbrk":"\u2772",
  "lbrace":"\u007B",
  "lbrack":"\u005B",
  "lbrke":"\u298B",
  "lbrksld":"\u298F",
  "lbrkslu":"\u298D",
  "Lcaron":"\u013D",
  "lcaron":"\u013E",
  "Lcedil":"\u013B",
  "lcedil":"\u013C",
  "lceil":"\u2308",
  "lcub":"\u007B",
  "Lcy":"\u041B",
  "lcy":"\u043B",
  "ldca":"\u2936",
  "ldquo":"\u201C",
  "ldquor":"\u201E",
  "ldrdhar":"\u2967",
  "ldrushar":"\u294B",
  "ldsh":"\u21B2",
  "lE":"\u2266",
  "le":"\u2264",
  "LeftAngleBracket":"\u27E8",
  "LeftArrow":"\u2190",
  "Leftarrow":"\u21D0",
  "leftarrow":"\u2190",
  "LeftArrowBar":"\u21E4",
  "LeftArrowRightArrow":"\u21C6",
  "leftarrowtail":"\u21A2",
  "LeftCeiling":"\u2308",
  "LeftDoubleBracket":"\u27E6",
  "LeftDownTeeVector":"\u2961",
  "LeftDownVector":"\u21C3",
  "LeftDownVectorBar":"\u2959",
  "LeftFloor":"\u230A",
  "leftharpoondown":"\u21BD",
  "leftharpoonup":"\u21BC",
  "leftleftarrows":"\u21C7",
  "LeftRightArrow":"\u2194",
  "Leftrightarrow":"\u21D4",
  "leftrightarrow":"\u2194",
  "leftrightarrows":"\u21C6",
  "leftrightharpoons":"\u21CB",
  "leftrightsquigarrow":"\u21AD",
  "LeftRightVector":"\u294E",
  "LeftTee":"\u22A3",
  "LeftTeeArrow":"\u21A4",
  "LeftTeeVector":"\u295A",
  "leftthreetimes":"\u22CB",
  "LeftTriangle":"\u22B2",
  "LeftTriangleBar":"\u29CF",
  "LeftTriangleEqual":"\u22B4",
  "LeftUpDownVector":"\u2951",
  "LeftUpTeeVector":"\u2960",
  "LeftUpVector":"\u21BF",
  "LeftUpVectorBar":"\u2958",
  "LeftVector":"\u21BC",
  "LeftVectorBar":"\u2952",
  "lEg":"\u2A8B",
  "leg":"\u22DA",
  "leq":"\u2264",
  "leqq":"\u2266",
  "leqslant":"\u2A7D",
  "les":"\u2A7D",
  "lescc":"\u2AA8",
  "lesdot":"\u2A7F",
  "lesdoto":"\u2A81",
  "lesdotor":"\u2A83",
  "lesg":"\u22DA\uFE00",
  "lesges":"\u2A93",
  "lessapprox":"\u2A85",
  "lessdot":"\u22D6",
  "lesseqgtr":"\u22DA",
  "lesseqqgtr":"\u2A8B",
  "LessEqualGreater":"\u22DA",
  "LessFullEqual":"\u2266",
  "LessGreater":"\u2276",
  "lessgtr":"\u2276",
  "LessLess":"\u2AA1",
  "lesssim":"\u2272",
  "LessSlantEqual":"\u2A7D",
  "LessTilde":"\u2272",
  "lfisht":"\u297C",
  "lfloor":"\u230A",
  "Lfr":"\uD835\uDD0F",
  "lfr":"\uD835\uDD29",
  "lg":"\u2276",
  "lgE":"\u2A91",
  "lHar":"\u2962",
  "lhard":"\u21BD",
  "lharu":"\u21BC",
  "lharul":"\u296A",
  "lhblk":"\u2584",
  "LJcy":"\u0409",
  "ljcy":"\u0459",
  "Ll":"\u22D8",
  "ll":"\u226A",
  "llarr":"\u21C7",
  "llcorner":"\u231E",
  "Lleftarrow":"\u21DA",
  "llhard":"\u296B",
  "lltri":"\u25FA",
  "Lmidot":"\u013F",
  "lmidot":"\u0140",
  "lmoust":"\u23B0",
  "lmoustache":"\u23B0",
  "lnap":"\u2A89",
  "lnapprox":"\u2A89",
  "lnE":"\u2268",
  "lne":"\u2A87",
  "lneq":"\u2A87",
  "lneqq":"\u2268",
  "lnsim":"\u22E6",
  "loang":"\u27EC",
  "loarr":"\u21FD",
  "lobrk":"\u27E6",
  "LongLeftArrow":"\u27F5",
  "Longleftarrow":"\u27F8",
  "longleftarrow":"\u27F5",
  "LongLeftRightArrow":"\u27F7",
  "Longleftrightarrow":"\u27FA",
  "longleftrightarrow":"\u27F7",
  "longmapsto":"\u27FC",
  "LongRightArrow":"\u27F6",
  "Longrightarrow":"\u27F9",
  "longrightarrow":"\u27F6",
  "looparrowleft":"\u21AB",
  "looparrowright":"\u21AC",
  "lopar":"\u2985",
  "Lopf":"\uD835\uDD43",
  "lopf":"\uD835\uDD5D",
  "loplus":"\u2A2D",
  "lotimes":"\u2A34",
  "lowast":"\u2217",
  "lowbar":"\u005F",
  "LowerLeftArrow":"\u2199",
  "LowerRightArrow":"\u2198",
  "loz":"\u25CA",
  "lozenge":"\u25CA",
  "lozf":"\u29EB",
  "lpar":"\u0028",
  "lparlt":"\u2993",
  "lrarr":"\u21C6",
  "lrcorner":"\u231F",
  "lrhar":"\u21CB",
  "lrhard":"\u296D",
  "lrm":"\u200E",
  "lrtri":"\u22BF",
  "lsaquo":"\u2039",
  "Lscr":"\u2112",
  "lscr":"\uD835\uDCC1",
  "Lsh":"\u21B0",
  "lsh":"\u21B0",
  "lsim":"\u2272",
  "lsime":"\u2A8D",
  "lsimg":"\u2A8F",
  "lsqb":"\u005B",
  "lsquo":"\u2018",
  "lsquor":"\u201A",
  "Lstrok":"\u0141",
  "lstrok":"\u0142",
  "LT":"\u003C",
  "Lt":"\u226A",
  "lt":"\u003C",
  "ltcc":"\u2AA6",
  "ltcir":"\u2A79",
  "ltdot":"\u22D6",
  "lthree":"\u22CB",
  "ltimes":"\u22C9",
  "ltlarr":"\u2976",
  "ltquest":"\u2A7B",
  "ltri":"\u25C3",
  "ltrie":"\u22B4",
  "ltrif":"\u25C2",
  "ltrPar":"\u2996",
  "lurdshar":"\u294A",
  "luruhar":"\u2966",
  "lvertneqq":"\u2268\uFE00",
  "lvnE":"\u2268\uFE00",
  "macr":"\u00AF",
  "male":"\u2642",
  "malt":"\u2720",
  "maltese":"\u2720",
  "Map":"\u2905",
  "map":"\u21A6",
  "mapsto":"\u21A6",
  "mapstodown":"\u21A7",
  "mapstoleft":"\u21A4",
  "mapstoup":"\u21A5",
  "marker":"\u25AE",
  "mcomma":"\u2A29",
  "Mcy":"\u041C",
  "mcy":"\u043C",
  "mdash":"\u2014",
  "mDDot":"\u223A",
  "measuredangle":"\u2221",
  "MediumSpace":"\u205F",
  "Mellintrf":"\u2133",
  "Mfr":"\uD835\uDD10",
  "mfr":"\uD835\uDD2A",
  "mho":"\u2127",
  "micro":"\u00B5",
  "mid":"\u2223",
  "midast":"\u002A",
  "midcir":"\u2AF0",
  "middot":"\u00B7",
  "minus":"\u2212",
  "minusb":"\u229F",
  "minusd":"\u2238",
  "minusdu":"\u2A2A",
  "MinusPlus":"\u2213",
  "mlcp":"\u2ADB",
  "mldr":"\u2026",
  "mnplus":"\u2213",
  "models":"\u22A7",
  "Mopf":"\uD835\uDD44",
  "mopf":"\uD835\uDD5E",
  "mp":"\u2213",
  "Mscr":"\u2133",
  "mscr":"\uD835\uDCC2",
  "mstpos":"\u223E",
  "Mu":"\u039C",
  "mu":"\u03BC",
  "multimap":"\u22B8",
  "mumap":"\u22B8",
  "nabla":"\u2207",
  "Nacute":"\u0143",
  "nacute":"\u0144",
  "nang":"\u2220\u20D2",
  "nap":"\u2249",
  "napE":"\u2A70\u0338",
  "napid":"\u224B\u0338",
  "napos":"\u0149",
  "napprox":"\u2249",
  "natur":"\u266E",
  "natural":"\u266E",
  "naturals":"\u2115",
  "nbsp":"\u00A0",
  "nbump":"\u224E\u0338",
  "nbumpe":"\u224F\u0338",
  "ncap":"\u2A43",
  "Ncaron":"\u0147",
  "ncaron":"\u0148",
  "Ncedil":"\u0145",
  "ncedil":"\u0146",
  "ncong":"\u2247",
  "ncongdot":"\u2A6D\u0338",
  "ncup":"\u2A42",
  "Ncy":"\u041D",
  "ncy":"\u043D",
  "ndash":"\u2013",
  "ne":"\u2260",
  "nearhk":"\u2924",
  "neArr":"\u21D7",
  "nearr":"\u2197",
  "nearrow":"\u2197",
  "nedot":"\u2250\u0338",
  "NegativeMediumSpace":"\u200B",
  "NegativeThickSpace":"\u200B",
  "NegativeThinSpace":"\u200B",
  "NegativeVeryThinSpace":"\u200B",
  "nequiv":"\u2262",
  "nesear":"\u2928",
  "nesim":"\u2242\u0338",
  "NestedGreaterGreater":"\u226B",
  "NestedLessLess":"\u226A",
  "NewLine":"\u000A",
  "nexist":"\u2204",
  "nexists":"\u2204",
  "Nfr":"\uD835\uDD11",
  "nfr":"\uD835\uDD2B",
  "ngE":"\u2267\u0338",
  "nge":"\u2271",
  "ngeq":"\u2271",
  "ngeqq":"\u2267\u0338",
  "ngeqslant":"\u2A7E\u0338",
  "nges":"\u2A7E\u0338",
  "nGg":"\u22D9\u0338",
  "ngsim":"\u2275",
  "nGt":"\u226B\u20D2",
  "ngt":"\u226F",
  "ngtr":"\u226F",
  "nGtv":"\u226B\u0338",
  "nhArr":"\u21CE",
  "nharr":"\u21AE",
  "nhpar":"\u2AF2",
  "ni":"\u220B",
  "nis":"\u22FC",
  "nisd":"\u22FA",
  "niv":"\u220B",
  "NJcy":"\u040A",
  "njcy":"\u045A",
  "nlArr":"\u21CD",
  "nlarr":"\u219A",
  "nldr":"\u2025",
  "nlE":"\u2266\u0338",
  "nle":"\u2270",
  "nLeftarrow":"\u21CD",
  "nleftarrow":"\u219A",
  "nLeftrightarrow":"\u21CE",
  "nleftrightarrow":"\u21AE",
  "nleq":"\u2270",
  "nleqq":"\u2266\u0338",
  "nleqslant":"\u2A7D\u0338",
  "nles":"\u2A7D\u0338",
  "nless":"\u226E",
  "nLl":"\u22D8\u0338",
  "nlsim":"\u2274",
  "nLt":"\u226A\u20D2",
  "nlt":"\u226E",
  "nltri":"\u22EA",
  "nltrie":"\u22EC",
  "nLtv":"\u226A\u0338",
  "nmid":"\u2224",
  "NoBreak":"\u2060",
  "NonBreakingSpace":"\u00A0",
  "Nopf":"\u2115",
  "nopf":"\uD835\uDD5F",
  "Not":"\u2AEC",
  "not":"\u00AC",
  "NotCongruent":"\u2262",
  "NotCupCap":"\u226D",
  "NotDoubleVerticalBar":"\u2226",
  "NotElement":"\u2209",
  "NotEqual":"\u2260",
  "NotEqualTilde":"\u2242\u0338",
  "NotExists":"\u2204",
  "NotGreater":"\u226F",
  "NotGreaterEqual":"\u2271",
  "NotGreaterFullEqual":"\u2267\u0338",
  "NotGreaterGreater":"\u226B\u0338",
  "NotGreaterLess":"\u2279",
  "NotGreaterSlantEqual":"\u2A7E\u0338",
  "NotGreaterTilde":"\u2275",
  "NotHumpDownHump":"\u224E\u0338",
  "NotHumpEqual":"\u224F\u0338",
  "notin":"\u2209",
  "notindot":"\u22F5\u0338",
  "notinE":"\u22F9\u0338",
  "notinva":"\u2209",
  "notinvb":"\u22F7",
  "notinvc":"\u22F6",
  "NotLeftTriangle":"\u22EA",
  "NotLeftTriangleBar":"\u29CF\u0338",
  "NotLeftTriangleEqual":"\u22EC",
  "NotLess":"\u226E",
  "NotLessEqual":"\u2270",
  "NotLessGreater":"\u2278",
  "NotLessLess":"\u226A\u0338",
  "NotLessSlantEqual":"\u2A7D\u0338",
  "NotLessTilde":"\u2274",
  "NotNestedGreaterGreater":"\u2AA2\u0338",
  "NotNestedLessLess":"\u2AA1\u0338",
  "notni":"\u220C",
  "notniva":"\u220C",
  "notnivb":"\u22FE",
  "notnivc":"\u22FD",
  "NotPrecedes":"\u2280",
  "NotPrecedesEqual":"\u2AAF\u0338",
  "NotPrecedesSlantEqual":"\u22E0",
  "NotReverseElement":"\u220C",
  "NotRightTriangle":"\u22EB",
  "NotRightTriangleBar":"\u29D0\u0338",
  "NotRightTriangleEqual":"\u22ED",
  "NotSquareSubset":"\u228F\u0338",
  "NotSquareSubsetEqual":"\u22E2",
  "NotSquareSuperset":"\u2290\u0338",
  "NotSquareSupersetEqual":"\u22E3",
  "NotSubset":"\u2282\u20D2",
  "NotSubsetEqual":"\u2288",
  "NotSucceeds":"\u2281",
  "NotSucceedsEqual":"\u2AB0\u0338",
  "NotSucceedsSlantEqual":"\u22E1",
  "NotSucceedsTilde":"\u227F\u0338",
  "NotSuperset":"\u2283\u20D2",
  "NotSupersetEqual":"\u2289",
  "NotTilde":"\u2241",
  "NotTildeEqual":"\u2244",
  "NotTildeFullEqual":"\u2247",
  "NotTildeTilde":"\u2249",
  "NotVerticalBar":"\u2224",
  "npar":"\u2226",
  "nparallel":"\u2226",
  "nparsl":"\u2AFD\u20E5",
  "npart":"\u2202\u0338",
  "npolint":"\u2A14",
  "npr":"\u2280",
  "nprcue":"\u22E0",
  "npre":"\u2AAF\u0338",
  "nprec":"\u2280",
  "npreceq":"\u2AAF\u0338",
  "nrArr":"\u21CF",
  "nrarr":"\u219B",
  "nrarrc":"\u2933\u0338",
  "nrarrw":"\u219D\u0338",
  "nRightarrow":"\u21CF",
  "nrightarrow":"\u219B",
  "nrtri":"\u22EB",
  "nrtrie":"\u22ED",
  "nsc":"\u2281",
  "nsccue":"\u22E1",
  "nsce":"\u2AB0\u0338",
  "Nscr":"\uD835\uDCA9",
  "nscr":"\uD835\uDCC3",
  "nshortmid":"\u2224",
  "nshortparallel":"\u2226",
  "nsim":"\u2241",
  "nsime":"\u2244",
  "nsimeq":"\u2244",
  "nsmid":"\u2224",
  "nspar":"\u2226",
  "nsqsube":"\u22E2",
  "nsqsupe":"\u22E3",
  "nsub":"\u2284",
  "nsubE":"\u2AC5\u0338",
  "nsube":"\u2288",
  "nsubset":"\u2282\u20D2",
  "nsubseteq":"\u2288",
  "nsubseteqq":"\u2AC5\u0338",
  "nsucc":"\u2281",
  "nsucceq":"\u2AB0\u0338",
  "nsup":"\u2285",
  "nsupE":"\u2AC6\u0338",
  "nsupe":"\u2289",
  "nsupset":"\u2283\u20D2",
  "nsupseteq":"\u2289",
  "nsupseteqq":"\u2AC6\u0338",
  "ntgl":"\u2279",
  "Ntilde":"\u00D1",
  "ntilde":"\u00F1",
  "ntlg":"\u2278",
  "ntriangleleft":"\u22EA",
  "ntrianglelefteq":"\u22EC",
  "ntriangleright":"\u22EB",
  "ntrianglerighteq":"\u22ED",
  "Nu":"\u039D",
  "nu":"\u03BD",
  "num":"\u0023",
  "numero":"\u2116",
  "numsp":"\u2007",
  "nvap":"\u224D\u20D2",
  "nVDash":"\u22AF",
  "nVdash":"\u22AE",
  "nvDash":"\u22AD",
  "nvdash":"\u22AC",
  "nvge":"\u2265\u20D2",
  "nvgt":"\u003E\u20D2",
  "nvHarr":"\u2904",
  "nvinfin":"\u29DE",
  "nvlArr":"\u2902",
  "nvle":"\u2264\u20D2",
  "nvlt":"\u003C\u20D2",
  "nvltrie":"\u22B4\u20D2",
  "nvrArr":"\u2903",
  "nvrtrie":"\u22B5\u20D2",
  "nvsim":"\u223C\u20D2",
  "nwarhk":"\u2923",
  "nwArr":"\u21D6",
  "nwarr":"\u2196",
  "nwarrow":"\u2196",
  "nwnear":"\u2927",
  "Oacute":"\u00D3",
  "oacute":"\u00F3",
  "oast":"\u229B",
  "ocir":"\u229A",
  "Ocirc":"\u00D4",
  "ocirc":"\u00F4",
  "Ocy":"\u041E",
  "ocy":"\u043E",
  "odash":"\u229D",
  "Odblac":"\u0150",
  "odblac":"\u0151",
  "odiv":"\u2A38",
  "odot":"\u2299",
  "odsold":"\u29BC",
  "OElig":"\u0152",
  "oelig":"\u0153",
  "ofcir":"\u29BF",
  "Ofr":"\uD835\uDD12",
  "ofr":"\uD835\uDD2C",
  "ogon":"\u02DB",
  "Ograve":"\u00D2",
  "ograve":"\u00F2",
  "ogt":"\u29C1",
  "ohbar":"\u29B5",
  "ohm":"\u03A9",
  "oint":"\u222E",
  "olarr":"\u21BA",
  "olcir":"\u29BE",
  "olcross":"\u29BB",
  "oline":"\u203E",
  "olt":"\u29C0",
  "Omacr":"\u014C",
  "omacr":"\u014D",
  "Omega":"\u03A9",
  "omega":"\u03C9",
  "Omicron":"\u039F",
  "omicron":"\u03BF",
  "omid":"\u29B6",
  "ominus":"\u2296",
  "Oopf":"\uD835\uDD46",
  "oopf":"\uD835\uDD60",
  "opar":"\u29B7",
  "OpenCurlyDoubleQuote":"\u201C",
  "OpenCurlyQuote":"\u2018",
  "operp":"\u29B9",
  "oplus":"\u2295",
  "Or":"\u2A54",
  "or":"\u2228",
  "orarr":"\u21BB",
  "ord":"\u2A5D",
  "order":"\u2134",
  "orderof":"\u2134",
  "ordf":"\u00AA",
  "ordm":"\u00BA",
  "origof":"\u22B6",
  "oror":"\u2A56",
  "orslope":"\u2A57",
  "orv":"\u2A5B",
  "oS":"\u24C8",
  "Oscr":"\uD835\uDCAA",
  "oscr":"\u2134",
  "Oslash":"\u00D8",
  "oslash":"\u00F8",
  "osol":"\u2298",
  "Otilde":"\u00D5",
  "otilde":"\u00F5",
  "Otimes":"\u2A37",
  "otimes":"\u2297",
  "otimesas":"\u2A36",
  "Ouml":"\u00D6",
  "ouml":"\u00F6",
  "ovbar":"\u233D",
  "OverBar":"\u203E",
  "OverBrace":"\u23DE",
  "OverBracket":"\u23B4",
  "OverParenthesis":"\u23DC",
  "par":"\u2225",
  "para":"\u00B6",
  "parallel":"\u2225",
  "parsim":"\u2AF3",
  "parsl":"\u2AFD",
  "part":"\u2202",
  "PartialD":"\u2202",
  "Pcy":"\u041F",
  "pcy":"\u043F",
  "percnt":"\u0025",
  "period":"\u002E",
  "permil":"\u2030",
  "perp":"\u22A5",
  "pertenk":"\u2031",
  "Pfr":"\uD835\uDD13",
  "pfr":"\uD835\uDD2D",
  "Phi":"\u03A6",
  "phi":"\u03C6",
  "phiv":"\u03D5",
  "phmmat":"\u2133",
  "phone":"\u260E",
  "Pi":"\u03A0",
  "pi":"\u03C0",
  "pitchfork":"\u22D4",
  "piv":"\u03D6",
  "planck":"\u210F",
  "planckh":"\u210E",
  "plankv":"\u210F",
  "plus":"\u002B",
  "plusacir":"\u2A23",
  "plusb":"\u229E",
  "pluscir":"\u2A22",
  "plusdo":"\u2214",
  "plusdu":"\u2A25",
  "pluse":"\u2A72",
  "PlusMinus":"\u00B1",
  "plusmn":"\u00B1",
  "plussim":"\u2A26",
  "plustwo":"\u2A27",
  "pm":"\u00B1",
  "Poincareplane":"\u210C",
  "pointint":"\u2A15",
  "Popf":"\u2119",
  "popf":"\uD835\uDD61",
  "pound":"\u00A3",
  "Pr":"\u2ABB",
  "pr":"\u227A",
  "prap":"\u2AB7",
  "prcue":"\u227C",
  "prE":"\u2AB3",
  "pre":"\u2AAF",
  "prec":"\u227A",
  "precapprox":"\u2AB7",
  "preccurlyeq":"\u227C",
  "Precedes":"\u227A",
  "PrecedesEqual":"\u2AAF",
  "PrecedesSlantEqual":"\u227C",
  "PrecedesTilde":"\u227E",
  "preceq":"\u2AAF",
  "precnapprox":"\u2AB9",
  "precneqq":"\u2AB5",
  "precnsim":"\u22E8",
  "precsim":"\u227E",
  "Prime":"\u2033",
  "prime":"\u2032",
  "primes":"\u2119",
  "prnap":"\u2AB9",
  "prnE":"\u2AB5",
  "prnsim":"\u22E8",
  "prod":"\u220F",
  "Product":"\u220F",
  "profalar":"\u232E",
  "profline":"\u2312",
  "profsurf":"\u2313",
  "prop":"\u221D",
  "Proportion":"\u2237",
  "Proportional":"\u221D",
  "propto":"\u221D",
  "prsim":"\u227E",
  "prurel":"\u22B0",
  "Pscr":"\uD835\uDCAB",
  "pscr":"\uD835\uDCC5",
  "Psi":"\u03A8",
  "psi":"\u03C8",
  "puncsp":"\u2008",
  "Qfr":"\uD835\uDD14",
  "qfr":"\uD835\uDD2E",
  "qint":"\u2A0C",
  "Qopf":"\u211A",
  "qopf":"\uD835\uDD62",
  "qprime":"\u2057",
  "Qscr":"\uD835\uDCAC",
  "qscr":"\uD835\uDCC6",
  "quaternions":"\u210D",
  "quatint":"\u2A16",
  "quest":"\u003F",
  "questeq":"\u225F",
  "QUOT":"\u0022",
  "quot":"\u0022",
  "rAarr":"\u21DB",
  "race":"\u223D\u0331",
  "Racute":"\u0154",
  "racute":"\u0155",
  "radic":"\u221A",
  "raemptyv":"\u29B3",
  "Rang":"\u27EB",
  "rang":"\u27E9",
  "rangd":"\u2992",
  "range":"\u29A5",
  "rangle":"\u27E9",
  "raquo":"\u00BB",
  "Rarr":"\u21A0",
  "rArr":"\u21D2",
  "rarr":"\u2192",
  "rarrap":"\u2975",
  "rarrb":"\u21E5",
  "rarrbfs":"\u2920",
  "rarrc":"\u2933",
  "rarrfs":"\u291E",
  "rarrhk":"\u21AA",
  "rarrlp":"\u21AC",
  "rarrpl":"\u2945",
  "rarrsim":"\u2974",
  "Rarrtl":"\u2916",
  "rarrtl":"\u21A3",
  "rarrw":"\u219D",
  "rAtail":"\u291C",
  "ratail":"\u291A",
  "ratio":"\u2236",
  "rationals":"\u211A",
  "RBarr":"\u2910",
  "rBarr":"\u290F",
  "rbarr":"\u290D",
  "rbbrk":"\u2773",
  "rbrace":"\u007D",
  "rbrack":"\u005D",
  "rbrke":"\u298C",
  "rbrksld":"\u298E",
  "rbrkslu":"\u2990",
  "Rcaron":"\u0158",
  "rcaron":"\u0159",
  "Rcedil":"\u0156",
  "rcedil":"\u0157",
  "rceil":"\u2309",
  "rcub":"\u007D",
  "Rcy":"\u0420",
  "rcy":"\u0440",
  "rdca":"\u2937",
  "rdldhar":"\u2969",
  "rdquo":"\u201D",
  "rdquor":"\u201D",
  "rdsh":"\u21B3",
  "Re":"\u211C",
  "real":"\u211C",
  "realine":"\u211B",
  "realpart":"\u211C",
  "reals":"\u211D",
  "rect":"\u25AD",
  "REG":"\u00AE",
  "reg":"\u00AE",
  "ReverseElement":"\u220B",
  "ReverseEquilibrium":"\u21CB",
  "ReverseUpEquilibrium":"\u296F",
  "rfisht":"\u297D",
  "rfloor":"\u230B",
  "Rfr":"\u211C",
  "rfr":"\uD835\uDD2F",
  "rHar":"\u2964",
  "rhard":"\u21C1",
  "rharu":"\u21C0",
  "rharul":"\u296C",
  "Rho":"\u03A1",
  "rho":"\u03C1",
  "rhov":"\u03F1",
  "RightAngleBracket":"\u27E9",
  "RightArrow":"\u2192",
  "Rightarrow":"\u21D2",
  "rightarrow":"\u2192",
  "RightArrowBar":"\u21E5",
  "RightArrowLeftArrow":"\u21C4",
  "rightarrowtail":"\u21A3",
  "RightCeiling":"\u2309",
  "RightDoubleBracket":"\u27E7",
  "RightDownTeeVector":"\u295D",
  "RightDownVector":"\u21C2",
  "RightDownVectorBar":"\u2955",
  "RightFloor":"\u230B",
  "rightharpoondown":"\u21C1",
  "rightharpoonup":"\u21C0",
  "rightleftarrows":"\u21C4",
  "rightleftharpoons":"\u21CC",
  "rightrightarrows":"\u21C9",
  "rightsquigarrow":"\u219D",
  "RightTee":"\u22A2",
  "RightTeeArrow":"\u21A6",
  "RightTeeVector":"\u295B",
  "rightthreetimes":"\u22CC",
  "RightTriangle":"\u22B3",
  "RightTriangleBar":"\u29D0",
  "RightTriangleEqual":"\u22B5",
  "RightUpDownVector":"\u294F",
  "RightUpTeeVector":"\u295C",
  "RightUpVector":"\u21BE",
  "RightUpVectorBar":"\u2954",
  "RightVector":"\u21C0",
  "RightVectorBar":"\u2953",
  "ring":"\u02DA",
  "risingdotseq":"\u2253",
  "rlarr":"\u21C4",
  "rlhar":"\u21CC",
  "rlm":"\u200F",
  "rmoust":"\u23B1",
  "rmoustache":"\u23B1",
  "rnmid":"\u2AEE",
  "roang":"\u27ED",
  "roarr":"\u21FE",
  "robrk":"\u27E7",
  "ropar":"\u2986",
  "Ropf":"\u211D",
  "ropf":"\uD835\uDD63",
  "roplus":"\u2A2E",
  "rotimes":"\u2A35",
  "RoundImplies":"\u2970",
  "rpar":"\u0029",
  "rpargt":"\u2994",
  "rppolint":"\u2A12",
  "rrarr":"\u21C9",
  "Rrightarrow":"\u21DB",
  "rsaquo":"\u203A",
  "Rscr":"\u211B",
  "rscr":"\uD835\uDCC7",
  "Rsh":"\u21B1",
  "rsh":"\u21B1",
  "rsqb":"\u005D",
  "rsquo":"\u2019",
  "rsquor":"\u2019",
  "rthree":"\u22CC",
  "rtimes":"\u22CA",
  "rtri":"\u25B9",
  "rtrie":"\u22B5",
  "rtrif":"\u25B8",
  "rtriltri":"\u29CE",
  "RuleDelayed":"\u29F4",
  "ruluhar":"\u2968",
  "rx":"\u211E",
  "Sacute":"\u015A",
  "sacute":"\u015B",
  "sbquo":"\u201A",
  "Sc":"\u2ABC",
  "sc":"\u227B",
  "scap":"\u2AB8",
  "Scaron":"\u0160",
  "scaron":"\u0161",
  "sccue":"\u227D",
  "scE":"\u2AB4",
  "sce":"\u2AB0",
  "Scedil":"\u015E",
  "scedil":"\u015F",
  "Scirc":"\u015C",
  "scirc":"\u015D",
  "scnap":"\u2ABA",
  "scnE":"\u2AB6",
  "scnsim":"\u22E9",
  "scpolint":"\u2A13",
  "scsim":"\u227F",
  "Scy":"\u0421",
  "scy":"\u0441",
  "sdot":"\u22C5",
  "sdotb":"\u22A1",
  "sdote":"\u2A66",
  "searhk":"\u2925",
  "seArr":"\u21D8",
  "searr":"\u2198",
  "searrow":"\u2198",
  "sect":"\u00A7",
  "semi":"\u003B",
  "seswar":"\u2929",
  "setminus":"\u2216",
  "setmn":"\u2216",
  "sext":"\u2736",
  "Sfr":"\uD835\uDD16",
  "sfr":"\uD835\uDD30",
  "sfrown":"\u2322",
  "sharp":"\u266F",
  "SHCHcy":"\u0429",
  "shchcy":"\u0449",
  "SHcy":"\u0428",
  "shcy":"\u0448",
  "ShortDownArrow":"\u2193",
  "ShortLeftArrow":"\u2190",
  "shortmid":"\u2223",
  "shortparallel":"\u2225",
  "ShortRightArrow":"\u2192",
  "ShortUpArrow":"\u2191",
  "shy":"\u00AD",
  "Sigma":"\u03A3",
  "sigma":"\u03C3",
  "sigmaf":"\u03C2",
  "sigmav":"\u03C2",
  "sim":"\u223C",
  "simdot":"\u2A6A",
  "sime":"\u2243",
  "simeq":"\u2243",
  "simg":"\u2A9E",
  "simgE":"\u2AA0",
  "siml":"\u2A9D",
  "simlE":"\u2A9F",
  "simne":"\u2246",
  "simplus":"\u2A24",
  "simrarr":"\u2972",
  "slarr":"\u2190",
  "SmallCircle":"\u2218",
  "smallsetminus":"\u2216",
  "smashp":"\u2A33",
  "smeparsl":"\u29E4",
  "smid":"\u2223",
  "smile":"\u2323",
  "smt":"\u2AAA",
  "smte":"\u2AAC",
  "smtes":"\u2AAC\uFE00",
  "SOFTcy":"\u042C",
  "softcy":"\u044C",
  "sol":"\u002F",
  "solb":"\u29C4",
  "solbar":"\u233F",
  "Sopf":"\uD835\uDD4A",
  "sopf":"\uD835\uDD64",
  "spades":"\u2660",
  "spadesuit":"\u2660",
  "spar":"\u2225",
  "sqcap":"\u2293",
  "sqcaps":"\u2293\uFE00",
  "sqcup":"\u2294",
  "sqcups":"\u2294\uFE00",
  "Sqrt":"\u221A",
  "sqsub":"\u228F",
  "sqsube":"\u2291",
  "sqsubset":"\u228F",
  "sqsubseteq":"\u2291",
  "sqsup":"\u2290",
  "sqsupe":"\u2292",
  "sqsupset":"\u2290",
  "sqsupseteq":"\u2292",
  "squ":"\u25A1",
  "Square":"\u25A1",
  "square":"\u25A1",
  "SquareIntersection":"\u2293",
  "SquareSubset":"\u228F",
  "SquareSubsetEqual":"\u2291",
  "SquareSuperset":"\u2290",
  "SquareSupersetEqual":"\u2292",
  "SquareUnion":"\u2294",
  "squarf":"\u25AA",
  "squf":"\u25AA",
  "srarr":"\u2192",
  "Sscr":"\uD835\uDCAE",
  "sscr":"\uD835\uDCC8",
  "ssetmn":"\u2216",
  "ssmile":"\u2323",
  "sstarf":"\u22C6",
  "Star":"\u22C6",
  "star":"\u2606",
  "starf":"\u2605",
  "straightepsilon":"\u03F5",
  "straightphi":"\u03D5",
  "strns":"\u00AF",
  "Sub":"\u22D0",
  "sub":"\u2282",
  "subdot":"\u2ABD",
  "subE":"\u2AC5",
  "sube":"\u2286",
  "subedot":"\u2AC3",
  "submult":"\u2AC1",
  "subnE":"\u2ACB",
  "subne":"\u228A",
  "subplus":"\u2ABF",
  "subrarr":"\u2979",
  "Subset":"\u22D0",
  "subset":"\u2282",
  "subseteq":"\u2286",
  "subseteqq":"\u2AC5",
  "SubsetEqual":"\u2286",
  "subsetneq":"\u228A",
  "subsetneqq":"\u2ACB",
  "subsim":"\u2AC7",
  "subsub":"\u2AD5",
  "subsup":"\u2AD3",
  "succ":"\u227B",
  "succapprox":"\u2AB8",
  "succcurlyeq":"\u227D",
  "Succeeds":"\u227B",
  "SucceedsEqual":"\u2AB0",
  "SucceedsSlantEqual":"\u227D",
  "SucceedsTilde":"\u227F",
  "succeq":"\u2AB0",
  "succnapprox":"\u2ABA",
  "succneqq":"\u2AB6",
  "succnsim":"\u22E9",
  "succsim":"\u227F",
  "SuchThat":"\u220B",
  "Sum":"\u2211",
  "sum":"\u2211",
  "sung":"\u266A",
  "Sup":"\u22D1",
  "sup":"\u2283",
  "sup1":"\u00B9",
  "sup2":"\u00B2",
  "sup3":"\u00B3",
  "supdot":"\u2ABE",
  "supdsub":"\u2AD8",
  "supE":"\u2AC6",
  "supe":"\u2287",
  "supedot":"\u2AC4",
  "Superset":"\u2283",
  "SupersetEqual":"\u2287",
  "suphsol":"\u27C9",
  "suphsub":"\u2AD7",
  "suplarr":"\u297B",
  "supmult":"\u2AC2",
  "supnE":"\u2ACC",
  "supne":"\u228B",
  "supplus":"\u2AC0",
  "Supset":"\u22D1",
  "supset":"\u2283",
  "supseteq":"\u2287",
  "supseteqq":"\u2AC6",
  "supsetneq":"\u228B",
  "supsetneqq":"\u2ACC",
  "supsim":"\u2AC8",
  "supsub":"\u2AD4",
  "supsup":"\u2AD6",
  "swarhk":"\u2926",
  "swArr":"\u21D9",
  "swarr":"\u2199",
  "swarrow":"\u2199",
  "swnwar":"\u292A",
  "szlig":"\u00DF",
  "Tab":"\u0009",
  "target":"\u2316",
  "Tau":"\u03A4",
  "tau":"\u03C4",
  "tbrk":"\u23B4",
  "Tcaron":"\u0164",
  "tcaron":"\u0165",
  "Tcedil":"\u0162",
  "tcedil":"\u0163",
  "Tcy":"\u0422",
  "tcy":"\u0442",
  "tdot":"\u20DB",
  "telrec":"\u2315",
  "Tfr":"\uD835\uDD17",
  "tfr":"\uD835\uDD31",
  "there4":"\u2234",
  "Therefore":"\u2234",
  "therefore":"\u2234",
  "Theta":"\u0398",
  "theta":"\u03B8",
  "thetasym":"\u03D1",
  "thetav":"\u03D1",
  "thickapprox":"\u2248",
  "thicksim":"\u223C",
  "ThickSpace":"\u205F\u200A",
  "thinsp":"\u2009",
  "ThinSpace":"\u2009",
  "thkap":"\u2248",
  "thksim":"\u223C",
  "THORN":"\u00DE",
  "thorn":"\u00FE",
  "Tilde":"\u223C",
  "tilde":"\u02DC",
  "TildeEqual":"\u2243",
  "TildeFullEqual":"\u2245",
  "TildeTilde":"\u2248",
  "times":"\u00D7",
  "timesb":"\u22A0",
  "timesbar":"\u2A31",
  "timesd":"\u2A30",
  "tint":"\u222D",
  "toea":"\u2928",
  "top":"\u22A4",
  "topbot":"\u2336",
  "topcir":"\u2AF1",
  "Topf":"\uD835\uDD4B",
  "topf":"\uD835\uDD65",
  "topfork":"\u2ADA",
  "tosa":"\u2929",
  "tprime":"\u2034",
  "TRADE":"\u2122",
  "trade":"\u2122",
  "triangle":"\u25B5",
  "triangledown":"\u25BF",
  "triangleleft":"\u25C3",
  "trianglelefteq":"\u22B4",
  "triangleq":"\u225C",
  "triangleright":"\u25B9",
  "trianglerighteq":"\u22B5",
  "tridot":"\u25EC",
  "trie":"\u225C",
  "triminus":"\u2A3A",
  "TripleDot":"\u20DB",
  "triplus":"\u2A39",
  "trisb":"\u29CD",
  "tritime":"\u2A3B",
  "trpezium":"\u23E2",
  "Tscr":"\uD835\uDCAF",
  "tscr":"\uD835\uDCC9",
  "TScy":"\u0426",
  "tscy":"\u0446",
  "TSHcy":"\u040B",
  "tshcy":"\u045B",
  "Tstrok":"\u0166",
  "tstrok":"\u0167",
  "twixt":"\u226C",
  "twoheadleftarrow":"\u219E",
  "twoheadrightarrow":"\u21A0",
  "Uacute":"\u00DA",
  "uacute":"\u00FA",
  "Uarr":"\u219F",
  "uArr":"\u21D1",
  "uarr":"\u2191",
  "Uarrocir":"\u2949",
  "Ubrcy":"\u040E",
  "ubrcy":"\u045E",
  "Ubreve":"\u016C",
  "ubreve":"\u016D",
  "Ucirc":"\u00DB",
  "ucirc":"\u00FB",
  "Ucy":"\u0423",
  "ucy":"\u0443",
  "udarr":"\u21C5",
  "Udblac":"\u0170",
  "udblac":"\u0171",
  "udhar":"\u296E",
  "ufisht":"\u297E",
  "Ufr":"\uD835\uDD18",
  "ufr":"\uD835\uDD32",
  "Ugrave":"\u00D9",
  "ugrave":"\u00F9",
  "uHar":"\u2963",
  "uharl":"\u21BF",
  "uharr":"\u21BE",
  "uhblk":"\u2580",
  "ulcorn":"\u231C",
  "ulcorner":"\u231C",
  "ulcrop":"\u230F",
  "ultri":"\u25F8",
  "Umacr":"\u016A",
  "umacr":"\u016B",
  "uml":"\u00A8",
  "UnderBar":"\u005F",
  "UnderBrace":"\u23DF",
  "UnderBracket":"\u23B5",
  "UnderParenthesis":"\u23DD",
  "Union":"\u22C3",
  "UnionPlus":"\u228E",
  "Uogon":"\u0172",
  "uogon":"\u0173",
  "Uopf":"\uD835\uDD4C",
  "uopf":"\uD835\uDD66",
  "UpArrow":"\u2191",
  "Uparrow":"\u21D1",
  "uparrow":"\u2191",
  "UpArrowBar":"\u2912",
  "UpArrowDownArrow":"\u21C5",
  "UpDownArrow":"\u2195",
  "Updownarrow":"\u21D5",
  "updownarrow":"\u2195",
  "UpEquilibrium":"\u296E",
  "upharpoonleft":"\u21BF",
  "upharpoonright":"\u21BE",
  "uplus":"\u228E",
  "UpperLeftArrow":"\u2196",
  "UpperRightArrow":"\u2197",
  "Upsi":"\u03D2",
  "upsi":"\u03C5",
  "upsih":"\u03D2",
  "Upsilon":"\u03A5",
  "upsilon":"\u03C5",
  "UpTee":"\u22A5",
  "UpTeeArrow":"\u21A5",
  "upuparrows":"\u21C8",
  "urcorn":"\u231D",
  "urcorner":"\u231D",
  "urcrop":"\u230E",
  "Uring":"\u016E",
  "uring":"\u016F",
  "urtri":"\u25F9",
  "Uscr":"\uD835\uDCB0",
  "uscr":"\uD835\uDCCA",
  "utdot":"\u22F0",
  "Utilde":"\u0168",
  "utilde":"\u0169",
  "utri":"\u25B5",
  "utrif":"\u25B4",
  "uuarr":"\u21C8",
  "Uuml":"\u00DC",
  "uuml":"\u00FC",
  "uwangle":"\u29A7",
  "vangrt":"\u299C",
  "varepsilon":"\u03F5",
  "varkappa":"\u03F0",
  "varnothing":"\u2205",
  "varphi":"\u03D5",
  "varpi":"\u03D6",
  "varpropto":"\u221D",
  "vArr":"\u21D5",
  "varr":"\u2195",
  "varrho":"\u03F1",
  "varsigma":"\u03C2",
  "varsubsetneq":"\u228A\uFE00",
  "varsubsetneqq":"\u2ACB\uFE00",
  "varsupsetneq":"\u228B\uFE00",
  "varsupsetneqq":"\u2ACC\uFE00",
  "vartheta":"\u03D1",
  "vartriangleleft":"\u22B2",
  "vartriangleright":"\u22B3",
  "Vbar":"\u2AEB",
  "vBar":"\u2AE8",
  "vBarv":"\u2AE9",
  "Vcy":"\u0412",
  "vcy":"\u0432",
  "VDash":"\u22AB",
  "Vdash":"\u22A9",
  "vDash":"\u22A8",
  "vdash":"\u22A2",
  "Vdashl":"\u2AE6",
  "Vee":"\u22C1",
  "vee":"\u2228",
  "veebar":"\u22BB",
  "veeeq":"\u225A",
  "vellip":"\u22EE",
  "Verbar":"\u2016",
  "verbar":"\u007C",
  "Vert":"\u2016",
  "vert":"\u007C",
  "VerticalBar":"\u2223",
  "VerticalLine":"\u007C",
  "VerticalSeparator":"\u2758",
  "VerticalTilde":"\u2240",
  "VeryThinSpace":"\u200A",
  "Vfr":"\uD835\uDD19",
  "vfr":"\uD835\uDD33",
  "vltri":"\u22B2",
  "vnsub":"\u2282\u20D2",
  "vnsup":"\u2283\u20D2",
  "Vopf":"\uD835\uDD4D",
  "vopf":"\uD835\uDD67",
  "vprop":"\u221D",
  "vrtri":"\u22B3",
  "Vscr":"\uD835\uDCB1",
  "vscr":"\uD835\uDCCB",
  "vsubnE":"\u2ACB\uFE00",
  "vsubne":"\u228A\uFE00",
  "vsupnE":"\u2ACC\uFE00",
  "vsupne":"\u228B\uFE00",
  "Vvdash":"\u22AA",
  "vzigzag":"\u299A",
  "Wcirc":"\u0174",
  "wcirc":"\u0175",
  "wedbar":"\u2A5F",
  "Wedge":"\u22C0",
  "wedge":"\u2227",
  "wedgeq":"\u2259",
  "weierp":"\u2118",
  "Wfr":"\uD835\uDD1A",
  "wfr":"\uD835\uDD34",
  "Wopf":"\uD835\uDD4E",
  "wopf":"\uD835\uDD68",
  "wp":"\u2118",
  "wr":"\u2240",
  "wreath":"\u2240",
  "Wscr":"\uD835\uDCB2",
  "wscr":"\uD835\uDCCC",
  "xcap":"\u22C2",
  "xcirc":"\u25EF",
  "xcup":"\u22C3",
  "xdtri":"\u25BD",
  "Xfr":"\uD835\uDD1B",
  "xfr":"\uD835\uDD35",
  "xhArr":"\u27FA",
  "xharr":"\u27F7",
  "Xi":"\u039E",
  "xi":"\u03BE",
  "xlArr":"\u27F8",
  "xlarr":"\u27F5",
  "xmap":"\u27FC",
  "xnis":"\u22FB",
  "xodot":"\u2A00",
  "Xopf":"\uD835\uDD4F",
  "xopf":"\uD835\uDD69",
  "xoplus":"\u2A01",
  "xotime":"\u2A02",
  "xrArr":"\u27F9",
  "xrarr":"\u27F6",
  "Xscr":"\uD835\uDCB3",
  "xscr":"\uD835\uDCCD",
  "xsqcup":"\u2A06",
  "xuplus":"\u2A04",
  "xutri":"\u25B3",
  "xvee":"\u22C1",
  "xwedge":"\u22C0",
  "Yacute":"\u00DD",
  "yacute":"\u00FD",
  "YAcy":"\u042F",
  "yacy":"\u044F",
  "Ycirc":"\u0176",
  "ycirc":"\u0177",
  "Ycy":"\u042B",
  "ycy":"\u044B",
  "yen":"\u00A5",
  "Yfr":"\uD835\uDD1C",
  "yfr":"\uD835\uDD36",
  "YIcy":"\u0407",
  "yicy":"\u0457",
  "Yopf":"\uD835\uDD50",
  "yopf":"\uD835\uDD6A",
  "Yscr":"\uD835\uDCB4",
  "yscr":"\uD835\uDCCE",
  "YUcy":"\u042E",
  "yucy":"\u044E",
  "Yuml":"\u0178",
  "yuml":"\u00FF",
  "Zacute":"\u0179",
  "zacute":"\u017A",
  "Zcaron":"\u017D",
  "zcaron":"\u017E",
  "Zcy":"\u0417",
  "zcy":"\u0437",
  "Zdot":"\u017B",
  "zdot":"\u017C",
  "zeetrf":"\u2128",
  "ZeroWidthSpace":"\u200B",
  "Zeta":"\u0396",
  "zeta":"\u03B6",
  "Zfr":"\u2128",
  "zfr":"\uD835\uDD37",
  "ZHcy":"\u0416",
  "zhcy":"\u0436",
  "zigrarr":"\u21DD",
  "Zopf":"\u2124",
  "zopf":"\uD835\uDD6B",
  "Zscr":"\uD835\uDCB5",
  "zscr":"\uD835\uDCCF",
  "zwj":"\u200D",
  "zwnj":"\u200C"
};

},{}],2:[function(require,module,exports){
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks

'use strict';

var html_blocks = {};

[
  'article',
  'aside',
  'button',
  'blockquote',
  'body',
  'canvas',
  'caption',
  'col',
  'colgroup',
  'dd',
  'div',
  'dl',
  'dt',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'iframe',
  'li',
  'map',
  'object',
  'ol',
  'output',
  'p',
  'pre',
  'progress',
  'script',
  'section',
  'style',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'tr',
  'thead',
  'ul',
  'video'
].forEach(function (name) { html_blocks[name] = true; });


module.exports = html_blocks;

},{}],3:[function(require,module,exports){
// Regexps to match html elements

'use strict';


function replace(regex, options) {
  regex = regex.source;
  options = options || '';

  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source;
    regex = regex.replace(name, val);
    return self;
  };
}


var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

var unquoted      = /[^"'=<>`\x00-\x20]+/;
var single_quoted = /'[^']*'/;
var double_quoted = /"[^"]*"/;

/*eslint no-spaced-func:0*/
var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
                    ('unquoted', unquoted)
                    ('single_quoted', single_quoted)
                    ('double_quoted', double_quoted)
                    ();

var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
                    ('attr_name', attr_name)
                    ('attr_value', attr_value)
                    ();

var open_tag    = replace(/<[A-Za-z][A-Za-z0-9\-]*attribute*\s*\/?>/)
                    ('attribute', attribute)
                    ();

var close_tag   = /<\/[A-Za-z][A-Za-z0-9\-]*\s*>/;
// That's less strict than http://www.w3.org/TR/html5/syntax.html#comments
// but we do the rest of check in "inline" rule.
var comment     = /<!--[\s\S]*?-->/;
var processing  = /<[?].*?[?]>/;
var declaration = /<![A-Z]+\s+[^>]*>/;
var cdata       = /<!\[CDATA\[[\s\S]*?\]\]>/;

var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
  ('open_tag', open_tag)
  ('close_tag', close_tag)
  ('comment', comment)
  ('processing', processing)
  ('declaration', declaration)
  ('cdata', cdata)
  ();


module.exports.HTML_TAG_RE = HTML_TAG_RE;

},{}],4:[function(require,module,exports){
// List of valid url schemas, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#autolinks

'use strict';


module.exports = [
  'coap',
  'doi',
  'javascript',
  'aaa',
  'aaas',
  'about',
  'acap',
  'cap',
  'cid',
  'crid',
  'data',
  'dav',
  'dict',
  'dns',
  'file',
  'ftp',
  'geo',
  'go',
  'gopher',
  'h323',
  'http',
  'https',
  'iax',
  'icap',
  'im',
  'imap',
  'info',
  'ipp',
  'iris',
  'iris.beep',
  'iris.xpc',
  'iris.xpcs',
  'iris.lwz',
  'ldap',
  'mailto',
  'mid',
  'msrp',
  'msrps',
  'mtqp',
  'mupdate',
  'news',
  'nfs',
  'ni',
  'nih',
  'nntp',
  'opaquelocktoken',
  'pop',
  'pres',
  'rtsp',
  'service',
  'session',
  'shttp',
  'sieve',
  'sip',
  'sips',
  'sms',
  'snmp',
  'soap.beep',
  'soap.beeps',
  'tag',
  'tel',
  'telnet',
  'tftp',
  'thismessage',
  'tn3270',
  'tip',
  'tv',
  'urn',
  'vemmi',
  'ws',
  'wss',
  'xcon',
  'xcon-userid',
  'xmlrpc.beep',
  'xmlrpc.beeps',
  'xmpp',
  'z39.50r',
  'z39.50s',
  'adiumxtra',
  'afp',
  'afs',
  'aim',
  'apt',
  'attachment',
  'aw',
  'beshare',
  'bitcoin',
  'bolo',
  'callto',
  'chrome',
  'chrome-extension',
  'com-eventbrite-attendee',
  'content',
  'cvs',
  'dlna-playsingle',
  'dlna-playcontainer',
  'dtn',
  'dvb',
  'ed2k',
  'facetime',
  'feed',
  'finger',
  'fish',
  'gg',
  'git',
  'gizmoproject',
  'gtalk',
  'hcp',
  'icon',
  'ipn',
  'irc',
  'irc6',
  'ircs',
  'itms',
  'jar',
  'jms',
  'keyparc',
  'lastfm',
  'ldaps',
  'magnet',
  'maps',
  'market',
  'message',
  'mms',
  'ms-help',
  'msnim',
  'mumble',
  'mvn',
  'notes',
  'oid',
  'palm',
  'paparazzi',
  'platform',
  'proxy',
  'psyc',
  'query',
  'res',
  'resource',
  'rmi',
  'rsync',
  'rtmp',
  'secondlife',
  'sftp',
  'sgn',
  'skype',
  'smb',
  'soldat',
  'spotify',
  'ssh',
  'steam',
  'svn',
  'teamspeak',
  'things',
  'udp',
  'unreal',
  'ut2004',
  'ventrilo',
  'view-source',
  'webcal',
  'wtai',
  'wyciwyg',
  'xfire',
  'xri',
  'ymsgr'
];

},{}],5:[function(require,module,exports){
// Utilities
//
'use strict';


function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}

var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
var entities = require('./entities');

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }
  return match;
}

function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var SURRORATE_TEST_RE   = /[\uD800-\uDFFF]/;
var SURRORATE_SEARCH_RE = /[\uD800-\uDFFF]/g;

function replaceBadSurrogate(ch, pos, orig) {
  var code = ch.charCodeAt(0);

  if (code >= 0xD800 && code <= 0xDBFF) {
    // high surrogate
    if (pos >= orig.length - 1) { return '\uFFFD'; }
    code = orig.charCodeAt(pos + 1);
    if (code < 0xDC00 || code > 0xDFFF) { return '\uFFFD'; }

    return ch;
  }

  // low surrogate
  if (pos === 0) { return '\uFFFD'; }
  code = orig.charCodeAt(pos - 1);
  if (code < 0xD900 || code > 0xDBFF) { return '\uFFFD'; }
  return ch;
}

function fixBrokenSurrogates(str) {
  if (!SURRORATE_TEST_RE.test(str)) { return str; }

  return str.replace(SURRORATE_SEARCH_RE, replaceBadSurrogate);
}

////////////////////////////////////////////////////////////////////////////////


// Incoming link can be partially encoded. Convert possible combinations to
// unified form.
//
// TODO: Rewrite it. Should use:
//
// - encodeURIComponent for query
// - encodeURI for path
// - (?) punicode for domain mame (but encodeURI seems to work in real world)
//
function normalizeLink(url) {
  var normalized = replaceEntities(url);

  // We don't care much about result of mailformed URIs,
  // but shoud not throw exception.
  try {
    normalized = decodeURI(normalized);
  } catch (__) {}

  // Encoder throws exception on broken surrogate pairs.
  // Fix those first.
  return encodeURI(fixBrokenSurrogates(normalized));
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE (str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

// Zs (unicode class) || 09, 0A, 0D, 0C
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09:
    case 0x0A:
    case 0x0D:
    case 0x0C:
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var BMP_PUNCT_RE = /[\x21-\x23\x25-\x2A\x2C-\x2F\x3A\x3B\x3F\x40\x5B-\x5D\x5F\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// Currently without astral characters support.
function isPunctChar(char) {
  return BMP_PUNCT_RE.test(char);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

////////////////////////////////////////////////////////////////////////////////

exports.assign            = assign;
exports.isString          = isString;
exports.has               = has;
exports.unescapeMd        = unescapeMd;
exports.isValidEntityCode = isValidEntityCode;
exports.fromCodePoint     = fromCodePoint;
exports.replaceEntities   = replaceEntities;
exports.escapeHtml        = escapeHtml;
exports.arrayReplaceAt    = arrayReplaceAt;
exports.normalizeLink     = normalizeLink;
exports.isWhiteSpace      = isWhiteSpace;
exports.isMdAsciiPunct    = isMdAsciiPunct;
exports.isPunctChar       = isPunctChar;
exports.escapeRE          = escapeRE;

},{"./entities":1}],6:[function(require,module,exports){
// Just a shortcut for bulk export
'use strict';


exports.parseLinkLabel       = require('./parse_link_label');
exports.parseLinkDestination = require('./parse_link_destination');
exports.parseLinkTitle       = require('./parse_link_title');

},{"./parse_link_destination":8,"./parse_link_label":9,"./parse_link_title":10}],7:[function(require,module,exports){
'use strict';


// Hepler to [reference labels]. No better place for this code :)
// It's only for refs/links and should not be exported anywhere.
module.exports = function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
};

},{}],8:[function(require,module,exports){
// Parse link destination
//
'use strict';


var normalizeLink = require('../common/utils').normalizeLink;
var unescapeMd    = require('../common/utils').unescapeMd;


module.exports = function parseLinkDestination(str, pos, max) {
  var code, level,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = normalizeLink(unescapeMd(str.slice(start + 1, pos)));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 1) { break; }
    }

    if (code === 0x29 /* ) */) {
      level--;
      if (level < 0) { break; }
    }

    pos++;
  }

  if (start === pos) { return result; }

  result.str = normalizeLink(unescapeMd(str.slice(start, pos)));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};

},{"../common/utils":5}],9:[function(require,module,exports){
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';

module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  if (state.labelUnmatchedScopes) {
    state.labelUnmatchedScopes--;
    return -1;
  }

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
    state.labelUnmatchedScopes = 0;
  } else {
    state.labelUnmatchedScopes = level - 1;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};

},{}],10:[function(require,module,exports){
// Parse link title
//
'use strict';


var unescapeMd = require('../common/utils').unescapeMd;


module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeMd(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};

},{"../common/utils":5}],11:[function(require,module,exports){
// Main perser class

'use strict';


var utils        = require('./common/utils');
var helpers      = require('./helpers');
var Renderer     = require('./renderer');
var ParserCore   = require('./parser_core');
var ParserBlock  = require('./parser_block');
var ParserInline = require('./parser_inline');

var config = {
  'default': require('./presets/default'),
  zero: require('./presets/zero'),
  commonmark: require('./presets/commonmark')
};


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, string. Double + single quotes replacement pairs, when
 *   typographer enabled and smartquotes on. Set doubles to '«»' for Russian,
 *   '„“' for German.
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped externaly.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(lang, str).value;
 *       } catch (__) {}
 *     }
 *
 *     try {
 *       return hljs.highlightAuto(str).value;
 *     } catch (__) {}
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = helpers;


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you with - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and returns list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules (`{}` by default).
 * For example, references are parsed in different chains, and need sandbox
 * to store intermediate results. Can be used to inject data in specific cases.
 * You will not need it with high probability.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with th single `inline` element, containing parsed inline
 * tokens in `children` property.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;

},{"./common/utils":5,"./helpers":6,"./parser_block":12,"./parser_core":13,"./parser_inline":14,"./presets/commonmark":15,"./presets/default":16,"./presets/zero":17,"./renderer":18}],12:[function(require,module,exports){
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/
'use strict';


var Ruler           = require('./ruler');


var _rules = [
  [ 'code',       require('./rules_block/code') ],
  [ 'fence',      require('./rules_block/fence'),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', require('./rules_block/blockquote'), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         require('./rules_block/hr'),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       require('./rules_block/list'),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  require('./rules_block/reference'),  [ 'reference' ] ],
  [ 'heading',    require('./rules_block/heading'),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   require('./rules_block/lheading') ],
  [ 'html_block', require('./rules_block/html_block'), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'table',      require('./rules_block/table'),      [ 'paragraph', 'reference' ] ],
  [ 'paragraph',  require('./rules_block/paragraph') ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.tShift[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight iff we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;

      // two empty lines should stop the parser in list mode
      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return []; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = require('./rules_block/state_block');


module.exports = ParserBlock;

},{"./ruler":19,"./rules_block/blockquote":20,"./rules_block/code":21,"./rules_block/fence":22,"./rules_block/heading":23,"./rules_block/hr":24,"./rules_block/html_block":25,"./rules_block/lheading":26,"./rules_block/list":27,"./rules_block/paragraph":28,"./rules_block/reference":29,"./rules_block/state_block":30,"./rules_block/table":31}],13:[function(require,module,exports){
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/
'use strict';


var Ruler  = require('./ruler');


var _rules = [
  [ 'normalize',      require('./rules_core/normalize')      ],
  [ 'block',          require('./rules_core/block')          ],
  [ 'inline',         require('./rules_core/inline')         ],
  [ 'replacements',   require('./rules_core/replacements')   ],
  [ 'smartquotes',    require('./rules_core/smartquotes')    ],
  [ 'linkify',        require('./rules_core/linkify')        ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = require('./rules_core/state_core');


module.exports = Core;

},{"./ruler":19,"./rules_core/block":32,"./rules_core/inline":33,"./rules_core/linkify":34,"./rules_core/normalize":35,"./rules_core/replacements":36,"./rules_core/smartquotes":37,"./rules_core/state_core":38}],14:[function(require,module,exports){
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/
'use strict';


var Ruler           = require('./ruler');
var replaceEntities = require('./common/utils').replaceEntities;

////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            require('./rules_inline/text') ],
  [ 'newline',         require('./rules_inline/newline') ],
  [ 'escape',          require('./rules_inline/escape') ],
  [ 'backticks',       require('./rules_inline/backticks') ],
  [ 'strikethrough',   require('./rules_inline/strikethrough') ],
  [ 'emphasis',        require('./rules_inline/emphasis') ],
  [ 'link',            require('./rules_inline/link') ],
  [ 'image',           require('./rules_inline/image') ],
  [ 'autolink',        require('./rules_inline/autolink') ],
  [ 'html_inline',     require('./rules_inline/html_inline') ],
  [ 'entity',          require('./rules_inline/entity') ]
];


var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file' ];

function validateLink(url) {
  var str = url.trim().toLowerCase();

  // Care about digital entities "javascript&#x3A;alert(1)"
  str = replaceEntities(str);

  if (str.indexOf(':') >= 0 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) >= 0) {
    return false;
  }
  return true;
}


/**
 * new ParserInline()
 **/
function ParserInline() {
  /**
   * ParserInline#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:` and `vbscript:` schemas. You can change this
   * behaviour.
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.inline.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var i, cached_pos, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting;


  if ((cached_pos = state.cacheGet(pos)) > 0) {
    state.pos = cached_pos;
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      if (rules[i](state, true)) {
        state.cacheSet(pos, state.pos);
        return;
      }
    }
    state.pos++;

  } else {
    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    state.pos = state.max;
  }

  state.cacheSet(pos, state.pos);
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.pos = end;
      break;
    }
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, false);
      if (ok) { break; }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);
};


ParserInline.prototype.State = require('./rules_inline/state_inline');


module.exports = ParserInline;

},{"./common/utils":5,"./ruler":19,"./rules_inline/autolink":39,"./rules_inline/backticks":40,"./rules_inline/emphasis":41,"./rules_inline/entity":42,"./rules_inline/escape":43,"./rules_inline/html_inline":44,"./rules_inline/image":45,"./rules_inline/link":46,"./rules_inline/newline":47,"./rules_inline/state_inline":48,"./rules_inline/strikethrough":49,"./rules_inline/text":50}],15:[function(require,module,exports){
// Commonmark default options

'use strict';


module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ]
    }
  }
};

},{}],16:[function(require,module,exports){
// markdown-it default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};

},{}],17:[function(require,module,exports){
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '\u201c\u201d\u2018\u2019' /* “”‘’ */,

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ]
    }
  }
};

},{}],18:[function(require,module,exports){
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/
'use strict';


var assign          = require('./common/utils').assign;
var unescapeMd      = require('./common/utils').unescapeMd;
var replaceEntities = require('./common/utils').replaceEntities;
var escapeHtml      = require('./common/utils').escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var rules = {};


rules.blockquote_open  = function () { return '<blockquote>\n'; };
rules.blockquote_close = function () { return '</blockquote>\n'; };


rules.code_block = function (tokens, idx /*, options, env */) {
  return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
};
rules.code_inline = function (tokens, idx /*, options, env */) {
  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
};


rules.fence = function (tokens, idx, options /*, env, self*/) {
  var token = tokens[idx];
  var langClass = '';
  var langPrefix = options.langPrefix;
  var langName = '';
  var highlighted;

  if (token.params) {
    langName = escapeHtml(replaceEntities(unescapeMd(token.params.split(/\s+/g)[0])));
    langClass = ' class="' + langPrefix + langName + '"';
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }


  return  '<pre><code' + langClass + '>'
        + highlighted
        + '</code></pre>\n';
};


rules.heading_open = function (tokens, idx /*, options, env */) {
  return '<h' + tokens[idx].hLevel + '>';
};
rules.heading_close = function (tokens, idx /*, options, env */) {
  return '</h' + tokens[idx].hLevel + '>\n';
};


rules.hr = function (tokens, idx, options /*, env */) {
  return (options.xhtmlOut ? '<hr />\n' : '<hr>\n');
};


rules.bullet_list_open   = function () { return '<ul>\n'; };
rules.bullet_list_close  = function () { return '</ul>\n'; };
rules.list_item_open     = function (tokens, idx /*, options, env */) {
  var next = tokens[idx + 1];
  if ((next.type === 'list_item_close') ||
      (next.type === 'paragraph_open' && next.tight)) {
    return '<li>';
  }
  return '<li>\n';
};
rules.list_item_close    = function () { return '</li>\n'; };
rules.ordered_list_open  = function (tokens, idx /*, options, env */) {
  if (tokens[idx].order > 1) {
    return '<ol start="' + tokens[idx].order + '">\n';
  }
  return '<ol>\n';
};
rules.ordered_list_close = function () { return '</ol>\n'; };


rules.paragraph_open = function (tokens, idx /*, options, env */) {
  return tokens[idx].tight ? '' : '<p>';
};
rules.paragraph_close = function (tokens, idx /*, options, env */) {
  if (tokens[idx].tight === true) {
    return tokens[idx + 1].type.slice(-5) === 'close' ? '' : '\n';
  }
  return '</p>\n';
};


rules.link_open = function (tokens, idx /*, options, env */) {
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var target = tokens[idx].target ? (' target="' + escapeHtml(tokens[idx].target) + '"') : '';
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
};
rules.link_close = function (/* tokens, idx, options, env */) {
  return '</a>';
};


rules.image = function (tokens, idx, options, env, self) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var alt = ' alt="' + self.renderInlineAsText(tokens[idx].tokens, options, env) + '"';
  var suffix = options.xhtmlOut ? ' /' : '';
  return '<img' + src + alt + title + suffix + '>';
};


rules.table_open  = function () { return '<table>\n'; };
rules.table_close = function () { return '</table>\n'; };
rules.thead_open  = function () { return '<thead>\n'; };
rules.thead_close = function () { return '</thead>\n'; };
rules.tbody_open  = function () { return '<tbody>\n'; };
rules.tbody_close = function () { return '</tbody>\n'; };
rules.tr_open     = function () { return '<tr>'; };
rules.tr_close    = function () { return '</tr>\n'; };
rules.th_open     = function (tokens, idx /*, options, env */) {
  if (tokens[idx].align) {
    return '<th style="text-align:' + tokens[idx].align + '">';
  }
  return '<th>';
};
rules.th_close    = function () { return '</th>'; };
rules.td_open     = function (tokens, idx /*, options, env */) {
  if (tokens[idx].align) {
    return '<td style="text-align:' + tokens[idx].align + '">';
  }
  return '<td>';
};
rules.td_close    = function () { return '</td>'; };


rules.strong_open  = function () { return '<strong>'; };
rules.strong_close = function () { return '</strong>'; };


rules.em_open  = function () { return '<em>'; };
rules.em_close = function () { return '</em>'; };


rules.s_open  = function () { return '<s>'; };
rules.s_close = function () { return '</s>'; };


rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independed static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, rules);
}


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var result = '',
      _rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    result += _rules[tokens[i].type](tokens, i, options, env, this);
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '',
      _rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += _rules.text(tokens, i, options, env, this);
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].tokens, options, env);
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len,
      result = '',
      _rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else {
      result += _rules[tokens[i].type](tokens, i, options, env, this);
    }
  }

  return result;
};

module.exports = Renderer;

},{"./common/utils":5}],19:[function(require,module,exports){
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/
'use strict';


/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typorgapher replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('emphasis', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;

},{}],20:[function(require,module,exports){
// Block quotes

'use strict';


module.exports = function blockquote(state, startLine, endLine, silent) {
  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
      terminatorRules,
      i, l, terminate,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos > max) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  // check if we have an empty blockquote
  pos = pos < max ? state.skipSpaces(pos) : pos;
  lastLineEmpty = pos >= max;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
      // This line is inside the blockquote.

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      pos = pos < max ? state.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    oldBMarks.push(state.bMarks[nextLine]);
    oldTShift.push(state.tShift[nextLine]);

    // A negative number means that this is a paragraph continuation;
    //
    // Any negative number will do the job here, but it's better for it
    // to be large enough to make any bugs obvious.
    state.tShift[nextLine] = -1337;
  }

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  state.tokens.push({
    type: 'blockquote_open',
    lines: lines = [ startLine, 0 ],
    level: state.level++
  });
  state.md.block.tokenize(state, startLine, nextLine);
  state.tokens.push({
    type: 'blockquote_close',
    level: --state.level
  });
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
  }
  state.blkIndent = oldIndent;

  return true;
};

},{}],21:[function(require,module,exports){
// Code block (4 spaces padded)

'use strict';


module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last;

  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'code_block',
    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],22:[function(require,module,exports){
// fences (``` lang, ~~~ lang)

'use strict';


module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  params = state.src.slice(pos, max).trim();

  if (params.indexOf('`') >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.tShift[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);
  state.tokens.push({
    type: 'fence',
    params: params,
    content: state.getLines(startLine + 1, nextLine, len, true),
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],23:[function(require,module,exports){
// heading (#, ##, ...)

'use strict';


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos >= max) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipCharsBack(max, 0x20, pos); // space
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
    max = tmp;
  }

  state.line = startLine + 1;

  state.tokens.push({ type: 'heading_open',
    hLevel: level,
    lines: [ startLine, state.line ],
    level: state.level
  });

  // only if header is not empty
  if (pos < max) {
    state.tokens.push({
      type: 'inline',
      content: state.src.slice(pos, max).trim(),
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
  }
  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

  return true;
};

},{}],24:[function(require,module,exports){
// Horizontal rule

'use strict';


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine];

  pos += state.tShift[startLine];

  if (pos > max) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 one

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && ch !== 0x20/* space */) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;
  state.tokens.push({
    type: 'hr',
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],25:[function(require,module,exports){
// HTML block

'use strict';


var block_names = require('../common/html_blocks');


var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}

module.exports = function html_block(state, startLine, endLine, silent) {
  var ch, match, nextLine,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine],
      shift = state.tShift[startLine];

  pos += shift;

  if (!state.md.options.html) { return false; }

  if (shift > 3 || pos + 2 >= max) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
    // Directive start / comment start / processing instruction start
    if (silent) { return true; }

  } else if (ch === 0x2F/* / */ || isLetter(ch)) {

    // Probably start or end of tag
    if (ch === 0x2F/* \ */) {
      // closing tag
      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
      if (!match) { return false; }
    } else {
      // opening tag
      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
      if (!match) { return false; }
    }
    // Make sure tag name is valid
    if (block_names[match[1].toLowerCase()] !== true) { return false; }
    if (silent) { return true; }

  } else {
    return false;
  }

  // If we are here - we detected HTML block.
  // Let's roll down till empty line (block end).
  nextLine = startLine + 1;
  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
    nextLine++;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'html_block',
    level: state.level,
    lines: [ startLine, state.line ],
    content: state.getLines(startLine, nextLine, 0, true)
  });

  return true;
};

},{"../common/html_blocks":2}],26:[function(require,module,exports){
// lheading (---, ===)

'use strict';


module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var marker, pos, max,
      next = startLine + 1;

  if (next >= endLine) { return false; }
  if (state.tShift[next] < state.blkIndent) { return false; }

  // Scan next line

  if (state.tShift[next] - state.blkIndent > 3) { return false; }

  pos = state.bMarks[next] + state.tShift[next];
  max = state.eMarks[next];

  if (pos >= max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

  pos = state.skipChars(pos, marker);

  pos = state.skipSpaces(pos);

  if (pos < max) { return false; }

  pos = state.bMarks[startLine] + state.tShift[startLine];

  state.line = next + 1;
  state.tokens.push({
    type: 'heading_open',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    lines: [ startLine, state.line ],
    level: state.level
  });
  state.tokens.push({
    type: 'inline',
    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
    level: state.level + 1,
    lines: [ startLine, state.line - 1 ],
    children: []
  });
  state.tokens.push({
    type: 'heading_close',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    level: state.level
  });

  return true;
};

},{}],27:[function(require,module,exports){
// Lists

'use strict';


// Search `[-+*][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  if (pos >= max) { return -1; }

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
    // " 1.test " - is not a list item
    return -1;
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
    // " 1.test " - is not a list item
    return -1;
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var nextLine,
      indent,
      oldTShift,
      oldIndent,
      oldTight,
      oldParentType,
      start,
      posAfterMarker,
      max,
      indentAfterMarker,
      markerValue,
      markerCharCode,
      isOrdered,
      contentStart,
      listTokIdx,
      prevEmptyEnd,
      listLines,
      itemLines,
      tight = true,
      terminatorRules,
      i, l, terminate;

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    state.tokens.push({
      type: 'ordered_list_open',
      order: markerValue,
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });

  } else {
    state.tokens.push({
      type: 'bullet_list_open',
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });
  }

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  while (nextLine < endLine) {
    contentStart = state.skipSpaces(posAfterMarker);
    max = state.eMarks[nextLine];

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = contentStart - posAfterMarker;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // If indent is less than 1, assume that it's one, example:
    //  "-\n  test"
    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

    // Run subparser & write tokens
    state.tokens.push({
      type: 'list_item_open',
      lines: itemLines = [ startLine, 0 ],
      level: state.level++
    });

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.parentType = 'list';

    state.md.block.tokenize(state, startLine, endLine, true);

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.tight = oldTight;
    state.parentType = oldParentType;

    state.tokens.push({
      type: 'list_item_close',
      level: --state.level
    });

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    if (state.isEmpty(nextLine)) {
      break;
    }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finilize list
  state.tokens.push({
    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{}],28:[function(require,module,exports){
// Paragraph

'use strict';


module.exports = function paragraph(state, startLine/*, endLine*/) {
  var endLine, content, terminate, i, l,
      nextLine = startLine + 1,
      terminatorRules;

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  if (nextLine < endLine && !state.isEmpty(nextLine)) {
    terminatorRules = state.md.block.ruler.getRules('paragraph');

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;
  if (content.length) {
    state.tokens.push({
      type: 'paragraph_open',
      tight: false,
      lines: [ startLine, state.line ],
      level: state.level
    });
    state.tokens.push({
      type: 'inline',
      content: content,
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
    state.tokens.push({
      type: 'paragraph_close',
      tight: false,
      level: state.level
    });
  }

  return true;
};

},{}],29:[function(require,module,exports){
'use strict';


var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  if (pos >= max) { return false; }
  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  if (nextLine < endLine && !state.isEmpty(nextLine)) {
    terminatorRules = state.md.block.ruler.getRules('references');

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (ch === 0x20) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }
  if (!state.md.inline.validateLink(res.str)) { return false; }
  href = res.str;
  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (ch === 0x20) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max && str.charCodeAt(pos) === 0x20/* space */) { pos++; }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  if (silent) { return true; }

  label = normalizeReference(str.slice(1, labelEnd));
  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.line = startLine + lines + 1;
  return true;
};

},{"../helpers/normalize_reference":7,"../helpers/parse_link_destination":8,"../helpers/parse_link_title":10}],30:[function(require,module,exports){
// Parser state class

'use strict';


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // indent for each line

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.parentType = 'root'; // if `list`, block parser stops on two newlines
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent = 0;
  indent_found = false;

  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (ch === 0x20/* space */) {
        indent++;
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);

      indent_found = false;
      indent = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, first, last, queue, shift,
      line = begin;

  if (begin >= end) {
    return '';
  }

  // Opt: don't use push queue for single line;
  if (line + 1 === end) {
    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
    last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
    return this.src.slice(first, last);
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    shift = this.tShift[line];
    if (shift > indent) { shift = indent; }
    if (shift < 0) { shift = 0; }

    first = this.bMarks[line] + shift;

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    queue[i] = this.src.slice(first, last);
  }

  return queue.join('');
};


module.exports = StateBlock;

},{}],31:[function(require,module,exports){
// GFM table, non-standard

'use strict';


function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, rows,
      aligns, t, tableLines, tbodyLines;

  // should have at least three lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.tShift[nextLine] < state.blkIndent) { return false; }

  // first character of the second line should be '|' or '-'

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  lineText = getLine(state, startLine + 1);
  if (!/^[-:| ]+$/.test(lineText)) { return false; }

  rows = lineText.split('|');
  if (rows <= 2) { return false; }
  aligns = [];
  for (i = 0; i < rows.length; i++) {
    t = rows[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === rows.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  rows = lineText.replace(/^\||\|$/g, '').split('|');
  if (aligns.length !== rows.length) { return false; }
  if (silent) { return true; }

  state.tokens.push({
    type: 'table_open',
    lines: tableLines = [ startLine, 0 ],
    level: state.level++
  });
  state.tokens.push({
    type: 'thead_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });

  state.tokens.push({
    type: 'tr_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });
  for (i = 0; i < rows.length; i++) {
    state.tokens.push({
      type: 'th_open',
      align: aligns[i],
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: rows[i].trim(),
      lines: [ startLine, startLine + 1 ],
      level: state.level,
      children: []
    });
    state.tokens.push({ type: 'th_close', level: --state.level });
  }
  state.tokens.push({ type: 'tr_close', level: --state.level });
  state.tokens.push({ type: 'thead_close', level: --state.level });

  state.tokens.push({
    type: 'tbody_open',
    lines: tbodyLines = [ startLine + 2, 0 ],
    level: state.level++
  });

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    rows = lineText.replace(/^\||\|$/g, '').split('|');

    state.tokens.push({ type: 'tr_open', level: state.level++ });
    for (i = 0; i < rows.length; i++) {
      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
      state.tokens.push({
        type: 'inline',
        content: rows[i].replace(/^\|? *| *\|?$/g, ''),
        level: state.level,
        children: []
      });
      state.tokens.push({ type: 'td_close', level: --state.level });
    }
    state.tokens.push({ type: 'tr_close', level: --state.level });
  }
  state.tokens.push({ type: 'tbody_close', level: --state.level });
  state.tokens.push({ type: 'table_close', level: --state.level });

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};

},{}],32:[function(require,module,exports){
'use strict';

module.exports = function block(state) {

  if (state.inlineMode) {
    state.tokens.push({
      type: 'inline',
      content: state.src,
      level: 0,
      lines: [ 0, 1 ],
      children: []
    });

  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};

},{}],33:[function(require,module,exports){
'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};

},{}],34:[function(require,module,exports){
// Replace link-like texts with link nodes.
//
// Currently restricted by `inline.validateLink()` to http/https/ftp
//
'use strict';


var Autolinker     = require('autolinker');
var arrayReplaceAt = require('../common/utils').arrayReplaceAt;


var LINK_SCAN_RE = /www|@|\:\/\//;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

// Stupid fabric to avoid singletons, for thread safety.
// Required for engines like Nashorn.
//
function createLinkifier() {
  var links = [];
  var autolinker = new Autolinker({
    stripPrefix: false,
    url: true,
    email: true,
    twitter: false,
    replaceFn: function (autolinker, match) {
      // Only collect matched strings but don't change anything.
      switch (match.getType()) {
        /*eslint default-case:0*/
        case 'url':
          links.push({
            text: match.matchedText,
            url: match.getUrl()
          });
          break;
        case 'email':
          links.push({
            text: match.matchedText,
            // normalize email protocol
            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
          });
          break;
      }
      return false;
    }
  });

  return {
    links: links,
    autolinker: autolinker
  };
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
      blockTokens = state.tokens,
      linkifier = null, links, autolinker;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];

      // Skip content of markdown links
      if (token.type === 'link_close') {
        i--;
        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (token.type === 'html_inline') {
        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(token.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

        // Init linkifier in lazy manner, only if required.
        if (!linkifier) {
          linkifier = createLinkifier();
          links = linkifier.links;
          autolinker = linkifier.autolinker;
        }

        text = token.content;
        links.length = 0;
        autolinker.link(text);

        if (!links.length) { continue; }

        // Now split string to nodes
        nodes = [];
        level = token.level;

        for (ln = 0; ln < links.length; ln++) {

          if (!state.md.inline.validateLink(links[ln].url)) { continue; }

          pos = text.indexOf(links[ln].text);

          if (pos) {
            level = level;
            nodes.push({
              type: 'text',
              content: text.slice(0, pos),
              level: level
            });
          }
          nodes.push({
            type: 'link_open',
            href: links[ln].url,
            target: '',
            title: '',
            level: level++
          });
          nodes.push({
            type: 'text',
            content: links[ln].text,
            level: level
          });
          nodes.push({
            type: 'link_close',
            level: --level
          });
          text = text.slice(pos + links[ln].text.length);
        }
        if (text.length) {
          nodes.push({
            type: 'text',
            content: text,
            level: level
          });
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};

},{"../common/utils":5,"autolinker":51}],35:[function(require,module,exports){
// Normalize input string

'use strict';


var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var NULL_RE      = /\u0000/g;


module.exports = function inline(state) {
  var str, lineStart, lastTabPos;

  if (!state.normalizeInput) { return; }

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  // Replace tabs with proper number of spaces (1..4)
  if (str.indexOf('\t') >= 0) {
    lineStart = 0;
    lastTabPos = 0;

    str = str.replace(TABS_SCAN_RE, function (match, offset) {
      var result;
      if (str.charCodeAt(offset) === 0x0A) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result;
    });
  }

  state.src = str;
};

},{}],36:[function(require,module,exports){
// Simple typographyc replacements
//
// '' → ‘’
// "" → “”. Set '«»' for Russian, '„“' for German, empty to disable
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
'use strict';

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  'c': '©',
  'r': '®',
  'p': '§',
  'tm': '™'
};

function replaceScopedAbbr(str) {
  if (str.indexOf('(') < 0) { return str; }

  return str.replace(SCOPED_ABBR_RE, function(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  });
}


module.exports = function replace(state) {
  var i, token, text, inlineTokens, blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    inlineTokens = state.tokens[blkIdx].children;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === 'text') {
        text = token.content;

        text = replaceScopedAbbr(text);

        if (RARE_RE.test(text)) {
          text = text.replace(/\+-/g, '±')
                      // .., ..., ....... -> …
                      // but ?..... & !..... -> ?.. & !..
                      .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
                      .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
                      // em-dash
                      .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
                      // en-dash
                      .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
                      .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
        }

        token.content = text;
      }
    }
  }
};

},{}],37:[function(require,module,exports){
// Convert straight quotation marks to typographic ones
//
'use strict';


var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var PUNCT_RE = /[-\s()\[\]]/;
var APOSTROPHE = '\u2019'; /* ’ */

// This function returns true if the character at `pos`
// could be inside a word.
function isLetter(str, pos) {
  if (pos < 0 || pos >= str.length) { return false; }
  return !PUNCT_RE.test(str[pos]);
}


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
      canOpen, canClose, j, isSingle, blkIdx, tokens,
      stack;

  if (!state.md.options.typographer) { return; }

  stack = [];

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    tokens = state.tokens[blkIdx].children;
    stack.length = 0;

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) { break; }
      }
      stack.length = j + 1;

      text = token.content;
      pos = 0;
      max = text.length;

      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) { break; }

        lastSpace = !isLetter(text, t.index - 1);
        pos = t.index + 1;
        isSingle = (t[0] === "'");
        nextSpace = !isLetter(text, pos);

        if (!nextSpace && !lastSpace) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }

        canOpen = !nextSpace;
        canClose = !lastSpace;

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) { break; }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                tokens[item.token].content = replaceAt(
                  tokens[item.token].content, item.pos, state.md.options.quotes[2]);
                token.content = replaceAt(
                  token.content, t.index, state.md.options.quotes[3]);
              } else {
                tokens[item.token].content = replaceAt(
                  tokens[item.token].content, item.pos, state.md.options.quotes[0]);
                token.content = replaceAt(token.content, t.index, state.md.options.quotes[1]);
              }
              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
};

},{}],38:[function(require,module,exports){
// Core state object
//
'use strict';

module.exports = function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.normalizeInput = true;
  this.md = md; // link to parser instance
};

},{}],39:[function(require,module,exports){
// Process autolinks '<protocol:...>'

'use strict';

var url_schemas   = require('../common/url_schemas');
var normalizeLink = require('../common/utils').normalizeLink;


/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


module.exports = function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  linkMatch = tail.match(AUTOLINK_RE);

  if (linkMatch) {
    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

    url = linkMatch[0].slice(1, -1);
    fullUrl = normalizeLink(url);
    if (!state.md.inline.validateLink(url)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        target: '',
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  emailMatch = tail.match(EMAIL_RE);

  if (emailMatch) {

    url = emailMatch[0].slice(1, -1);

    fullUrl = normalizeLink('mailto:' + url);
    if (!state.md.inline.validateLink(fullUrl)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        target: '',
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
};

},{"../common/url_schemas":4,"../common/utils":5}],40:[function(require,module,exports){
// Parse backticks

'use strict';

module.exports = function backtick(state, silent) {
  var start, max, marker, matchStart, matchEnd,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        state.push({
          type: 'code_inline',
          content: state.src.slice(pos, matchStart)
                              .replace(/[ \n]+/g, ' ')
                              .trim(),
          level: state.level
        });
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};

},{}],41:[function(require,module,exports){
// Process *this* and _that_

'use strict';

var isWhiteSpace   = require('../common/utils').isWhiteSpace;
var isPunctChar    = require('../common/utils').isPunctChar;
var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;


function isAlphaNum(code) {
  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
}

// parse sequence of emphasis markers,
// "start" should point at a valid marker
function scanDelims(state, start) {
  var pos = start, lastChar, nextChar, count,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      can_open = true,
      can_close = true,
      max = state.posMax,
      marker = state.src.charCodeAt(start);

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
  if (pos >= max) { can_open = false; }
  count = pos - start;

  nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

  isLastPunctChar = lastChar >= 0 &&
    (isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar)));
  isNextPunctChar = nextChar >= 0 &&
    (isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar)));
  isLastWhiteSpace = lastChar >= 0 && isWhiteSpace(lastChar);
  isNextWhiteSpace = nextChar >= 0 && isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    can_open = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar || lastChar === -1)) {
      can_open = false;
    }
  }

  if (isLastWhiteSpace) {
    can_close = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar || nextChar === -1)) {
      can_close = false;
    }
  }

  if (marker === 0x5F /* _ */) {
    // check if we aren't inside the word
    if (isAlphaNum(lastChar)) { can_open = false; }
    if (isAlphaNum(nextChar)) { can_close = false; }
  }

  return {
    can_open: can_open,
    can_close: can_close,
    delims: count
  };
}

module.exports = function emphasis(state, silent) {
  var startCount,
      count,
      found,
      oldCount,
      newCount,
      stack,
      res,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  res = scanDelims(state, start);
  startCount = res.delims;
  if (!res.can_open) {
    state.pos += startCount;
    // Earlier we checked !silent, but this implementation does not need it
    state.pending += state.src.slice(start, state.pos);
    return true;
  }

  state.pos = start + startCount;
  stack = [ startCount ];

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === marker) {
      res = scanDelims(state, state.pos);
      count = res.delims;
      if (res.can_close) {
        oldCount = stack.pop();
        newCount = count;

        while (oldCount !== newCount) {
          if (newCount < oldCount) {
            stack.push(oldCount - newCount);
            break;
          }

          // assert(newCount > oldCount)
          newCount -= oldCount;

          if (stack.length === 0) { break; }
          state.pos += oldCount;
          oldCount = stack.pop();
        }

        if (stack.length === 0) {
          startCount = oldCount;
          found = true;
          break;
        }
        state.pos += count;
        continue;
      }

      if (res.can_open) { stack.push(count); }
      state.pos += count;
      continue;
    }

    state.md.inline.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + startCount;

  // Earlier we checked !silent, but this implementation does not need it

  // we have `startCount` starting and ending markers,
  // now trying to serialize them into tokens
  for (count = startCount; count > 1; count -= 2) {
    state.push({ type: 'strong_open', level: state.level++ });
  }
  if (count % 2) { state.push({ type: 'em_open', level: state.level++ }); }

  state.md.inline.tokenize(state);

  if (count % 2) { state.push({ type: 'em_close', level: --state.level }); }
  for (count = startCount; count > 1; count -= 2) {
    state.push({ type: 'strong_close', level: --state.level });
  }

  state.pos = state.posMax + startCount;
  state.posMax = max;
  return true;
};

},{"../common/utils":5}],42:[function(require,module,exports){
// Process html entity - &#123;, &#xAF;, &quot;, ...

'use strict';

var entities          = require('../common/entities');
var has               = require('../common/utils').has;
var isValidEntityCode = require('../common/utils').isValidEntityCode;
var fromCodePoint     = require('../common/utils').fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};

},{"../common/entities":1,"../common/utils":5}],43:[function(require,module,exports){
// Proceess escaped chars and hardbreaks

'use strict';

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};

},{}],44:[function(require,module,exports){
// Process html tags

'use strict';


var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;

var COMMENT_RE = /^<!--[\s\S]*?-->$/;

function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, content, pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  content = state.src.slice(pos, pos + match[0].length);

  // Additional check for comments
  if (COMMENT_RE.test(content)) {
    if (/(^>|^->|--|-$)/.test(content.slice(4, -3))) { return false; }
  }

  if (!silent) {
    state.push({
      type: 'html_inline',
      content: content,
      level: state.level
    });
  }
  state.pos += match[0].length;
  return true;
};

},{"../common/html_re":3}],45:[function(require,module,exports){
// Process ![image](<src> "title")

'use strict';

var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


module.exports = function image(state, silent) {
  var code,
      href,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      tokens,
      start,
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok && state.md.inline.validateLink(res.str)) {
      href = res.str;
      pos = res.pos;
    } else {
      href = '';
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    // [foo]  [bar]
    //      ^^ optional whitespace (can include newlines)
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    var newState = new state.md.inline.State(
      state.src.slice(labelStart, labelEnd),
      state.md,
      state.env,
      tokens = []
    );
    newState.md.inline.tokenize(newState);

    state.push({
      type: 'image',
      src: href,
      title: title,
      tokens: tokens,
      level: state.level
    });
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../helpers/normalize_reference":7,"../helpers/parse_link_destination":8,"../helpers/parse_link_label":9,"../helpers/parse_link_title":10}],46:[function(require,module,exports){
// Process [link](<to> "stuff")

'use strict';

var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


module.exports = function link(state, silent) {
  var code,
      href,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      title,
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok && state.md.inline.validateLink(res.str)) {
      href = res.str;
      pos = res.pos;
    } else {
      href = '';
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    // [foo]  [bar]
    //      ^^ optional whitespace (can include newlines)
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    state.push({
      type: 'link_open',
      href: href,
      target: '',
      title: title,
      level: state.level++
    });
    state.md.inline.tokenize(state);
    state.push({ type: 'link_close', level: --state.level });
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../helpers/normalize_reference":7,"../helpers/parse_link_destination":8,"../helpers/parse_link_label":9,"../helpers/parse_link_title":10}],47:[function(require,module,exports){
// Proceess '\n'

'use strict';

module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push({
          type: 'softbreak',
          level: state.level
        });
      }

    } else {
      state.push({
        type: 'softbreak',
        level: state.level
      });
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

  state.pos = pos;
  return true;
};

},{}],48:[function(require,module,exports){
// Inline parser state

'use strict';


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  // Link parser state vars

  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
                                 // (backtrack optimization)
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  this.tokens.push({
    type: 'text',
    content: this.pending,
    level: this.pendingLevel
  });
  this.pending = '';
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (token) {
  if (this.pending) {
    this.pushPending();
  }

  this.tokens.push(token);
  this.pendingLevel = this.level;
};


// Store value to cache.
// !!! Implementation has parser-specific optimizations
// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
//
StateInline.prototype.cacheSet = function (key, val) {
  for (var i = this.cache.length; i <= key; i++) {
    this.cache.push(0);
  }

  this.cache[key] = val;
};


// Get cache value
//
StateInline.prototype.cacheGet = function (key) {
  return key < this.cache.length ? this.cache[key] : 0;
};


module.exports = StateInline;

},{}],49:[function(require,module,exports){
'use strict';


// parse sequence of markers,
// "start" should point at a valid marker
function scanDelims(state, start) {
  var pos = start, lastChar, nextChar, count,
      can_open = true,
      can_close = true,
      max = state.posMax,
      marker = state.src.charCodeAt(start);

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
  if (pos >= max) { can_open = false; }
  count = pos - start;

  nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

  // check whitespace conditions
  if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
  if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

  return {
    can_open: can_open,
    can_close: can_close,
    delims: count
  };
}


module.exports = function strikethrough(state, silent) {
  var startCount,
      count,
      tagCount,
      found,
      stack,
      res,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  res = scanDelims(state, start);
  startCount = res.delims;
  if (!res.can_open) {
    state.pos += startCount;
    // Earlier we checked !silent, but this implementation does not need it
    state.pending += state.src.slice(start, state.pos);
    return true;
  }

  stack = Math.floor(startCount / 2);
  if (stack <= 0) { return false; }
  state.pos = start + startCount;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === marker) {
      res = scanDelims(state, state.pos);
      count = res.delims;
      tagCount = Math.floor(count / 2);
      if (res.can_close) {
        if (tagCount >= stack) {
          state.pos += count - 2;
          found = true;
          break;
        }
        stack -= tagCount;
        state.pos += count;
        continue;
      }

      if (res.can_open) { stack += tagCount; }
      state.pos += count;
      continue;
    }

    state.md.inline.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  // Earlier we checked !silent, but this implementation does not need it
  state.push({ type: 's_open', level: state.level++ });
  state.md.inline.tokenize(state);
  state.push({ type: 's_close', level: --state.level });

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],50:[function(require,module,exports){
// Skip text characters for text token, place those to pending buffer
// and increment current pos

'use strict';


// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

},{}],51:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Autolinker'] = factory();
  }
}(this, function () {

  /*!
   * Autolinker.js
   * 0.15.0
   *
   * Copyright(c) 2014 Gregory Jacobs <greg@greg-jacobs.com>
   * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
   *
   * https://github.com/gregjacobs/Autolinker.js
   */
  /**
   * @class Autolinker
   * @extends Object
   *
   * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in
   * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
   *
   * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
   * will configure how the {@link #link link()} method will process the links.
   *
   * For example:
   *
   *     var autolinker = new Autolinker( {
   *         newWindow : false,
   *         truncate  : 30
   *     } );
   *
   *     var html = autolinker.link( "Joe went to www.yahoo.com" );
   *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
   *
   *
   * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
   * be more convenient for one-off uses. For example:
   *
   *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
   *         newWindow : false,
   *         truncate  : 30
   *     } );
   *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
   *
   *
   * ## Custom Replacements of Links
   *
   * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
   * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
   *
   * For example:
   *
   *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
   *
   *     var linkedText = Autolinker.link( input, {
   *         replaceFn : function( autolinker, match ) {
   *             console.log( "href = ", match.getAnchorHref() );
   *             console.log( "text = ", match.getAnchorText() );
   *
   *             switch( match.getType() ) {
   *                 case 'url' :
   *                     console.log( "url: ", match.getUrl() );
   *
   *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
   *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
   *                         tag.setAttr( 'rel', 'nofollow' );
   *                         tag.addClass( 'external-link' );
   *
   *                         return tag;
   *
   *                     } else {
   *                         return true;  // let Autolinker perform its normal anchor tag replacement
   *                     }
   *
   *                 case 'email' :
   *                     var email = match.getEmail();
   *                     console.log( "email: ", email );
   *
   *                     if( email === "my@own.address" ) {
   *                         return false;  // don't auto-link this particular email address; leave as-is
   *                     } else {
   *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
   *                     }
   *
   *                 case 'twitter' :
   *                     var twitterHandle = match.getTwitterHandle();
   *                     console.log( twitterHandle );
   *
   *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
   *             }
   *         }
   *     } );
   *
   *
   * The function may return the following values:
   *
   * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
   * - `false` (Boolean): Do not replace the current match at all - leave as-is.
   * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
   *   the match.
   * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
   *
   * @constructor
   * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
   */
  var Autolinker = function( cfg ) {
    Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.

    this.matchValidator = new Autolinker.MatchValidator();
  };


  Autolinker.prototype = {
    constructor : Autolinker,  // fix constructor property

    /**
     * @cfg {Boolean} urls
     *
     * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
     */
    urls : true,

    /**
     * @cfg {Boolean} email
     *
     * `true` if email addresses should be automatically linked, `false` if they should not be.
     */
    email : true,

    /**
     * @cfg {Boolean} twitter
     *
     * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
     */
    twitter : true,

    /**
     * @cfg {Boolean} newWindow
     *
     * `true` if the links should open in a new window, `false` otherwise.
     */
    newWindow : true,

    /**
     * @cfg {Boolean} stripPrefix
     *
     * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text,
     * `false` otherwise.
     */
    stripPrefix : true,

    /**
     * @cfg {Number} truncate
     *
     * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of
     * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by
     * adding a two period ellipsis ('..') to the end of the string.
     *
     * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
     * something like this: 'yahoo.com/some/long/pat..'
     */

    /**
     * @cfg {String} className
     *
     * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
     * plus url/email/twitter suffixes for styling url/email/twitter links differently.
     *
     * For example, if this config is provided as "myLink", then:
     *
     * - URL links will have the CSS classes: "myLink myLink-url"
     * - Email links will have the CSS classes: "myLink myLink-email", and
     * - Twitter links will have the CSS classes: "myLink myLink-twitter"
     */
    className : "",

    /**
     * @cfg {Function} replaceFn
     *
     * A function to individually process each URL/Email/Twitter match found in the input string.
     *
     * See the class's description for usage.
     *
     * This function is called with the following parameters:
     *
     * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
     *   as the instance's {@link #getTagBuilder tag builder}).
     * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
     *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
     *   match that the `replaceFn` is currently processing.
     */


    /**
     * @private
     * @property {RegExp} htmlCharacterEntitiesRegex
     *
     * The regular expression that matches common HTML character entities.
     *
     * Ignoring &amp; as it could be part of a query string -- handling it separately.
     */
    htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,

    /**
     * @private
     * @property {RegExp} matcherRegex
     *
     * The regular expression that matches URLs, email addresses, and Twitter handles.
     *
     * This regular expression has the following capturing groups:
     *
     * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its
     *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information
     *    about the Twitter handle match.
     * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
     *    JS regular expressions, and can be used to reconstruct the original string in a replace().
     * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
     * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full
     *    address. Ex: 'me@my.com'
     * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
     *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
     * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
     *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
     * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a
     *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
     *    or the // was in a string we don't want to auto-link.
     * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a
     *    protocol-relative match. See #6 for more info.
     */
    matcherRegex : (function() {
      var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs

          emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)

          protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
          wwwRegex = /(?:www\.)/,                             // starting with 'www.'
          domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
          tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)

          // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
          // http://blog.codinghorror.com/the-problem-with-urls/
          urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;

      return new RegExp( [
        '(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace()
          // *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and
          // *** Capturing group $3, which matches the actual twitter handle
          twitterRegex.source,
        ')',

        '|',

        '(',  // *** Capturing group $4, which is used to determine an email match
          emailRegex.source,
          domainNameRegex.source,
          tldRegex.source,
        ')',

        '|',

        '(',  // *** Capturing group $5, which is used to match a URL
          '(?:', // parens to cover match for protocol (optional), and domain
            '(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
              protocolRegex.source,
              domainNameRegex.source,
            ')',

            '|',

            '(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
              '(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
              wwwRegex.source,
              domainNameRegex.source,
            ')',

            '|',

            '(?:',  // non-capturing paren for known a TLD url (ex: google.com)
              '(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
              domainNameRegex.source,
              tldRegex.source,
            ')',
          ')',

          '(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
        ')'
      ].join( "" ), 'gi' );
    } )(),

    /**
     * @private
     * @property {RegExp} charBeforeProtocolRelMatchRegex
     *
     * The regular expression used to retrieve the character before a protocol-relative URL match.
     *
     * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
     * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
     * from the URL.
     */
    charBeforeProtocolRelMatchRegex : /^(.)?\/\//,

    /**
     * @private
     * @property {Autolinker.MatchValidator} matchValidator
     *
     * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
     * {@link Autolinker.MatchValidator} for details.
     */

    /**
     * @private
     * @property {Autolinker.HtmlParser} htmlParser
     *
     * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
     * in the {@link #getHtmlParser} method.
     */

    /**
     * @private
     * @property {Autolinker.AnchorTagBuilder} tagBuilder
     *
     * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
     * in the {@link #getTagBuilder} method.
     */


    /**
     * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML.
     * Does not link URLs found within HTML tags.
     *
     * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
     * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
     *
     * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
     * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
     *
     * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
     *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
     * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
     */
    link : function( textOrHtml ) {
      var me = this,  // for closure
          htmlParser = this.getHtmlParser(),
          htmlCharacterEntitiesRegex = this.htmlCharacterEntitiesRegex,
          anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
          resultHtml = [];

      htmlParser.parse( textOrHtml, {
        // Process HTML nodes in the input `textOrHtml`
        processHtmlNode : function( tagText, tagName, isClosingTag ) {
          if( tagName === 'a' ) {
            if( !isClosingTag ) {  // it's the start <a> tag
              anchorTagStackCount++;
            } else {   // it's the end </a> tag
              anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
            }
          }
          resultHtml.push( tagText );  // now add the text of the tag itself verbatim
        },

        // Process text nodes in the input `textOrHtml`
        processTextNode : function( text ) {
          if( anchorTagStackCount === 0 ) {
            // If we're not within an <a> tag, process the text node
            var unescapedText = Autolinker.Util.splitAndCapture( text, htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array

            for ( var i = 0, len = unescapedText.length; i < len; i++ ) {
              var textToProcess = unescapedText[ i ],
                  processedTextNode = me.processTextNode( textToProcess );

              resultHtml.push( processedTextNode );
            }

          } else {
            // `text` is within an <a> tag, simply append the text - we do not want to autolink anything
            // already within an <a>...</a> tag
            resultHtml.push( text );
          }
        }
      } );

      return resultHtml.join( "" );
    },


    /**
     * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
     *
     * @protected
     * @return {Autolinker.HtmlParser}
     */
    getHtmlParser : function() {
      var htmlParser = this.htmlParser;

      if( !htmlParser ) {
        htmlParser = this.htmlParser = new Autolinker.HtmlParser();
      }

      return htmlParser;
    },


    /**
     * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
     * if it does not yet exist.
     *
     * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that
     * Autolinker would normally generate, and then allow for modifications before returning it. For example:
     *
     *     var html = Autolinker.link( "Test google.com", {
     *         replaceFn : function( autolinker, match ) {
     *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
     *             tag.setAttr( 'rel', 'nofollow' );
     *
     *             return tag;
     *         }
     *     } );
     *
     *     // generated html:
     *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
     *
     * @return {Autolinker.AnchorTagBuilder}
     */
    getTagBuilder : function() {
      var tagBuilder = this.tagBuilder;

      if( !tagBuilder ) {
        tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
          newWindow   : this.newWindow,
          truncate    : this.truncate,
          className   : this.className
        } );
      }

      return tagBuilder;
    },


    /**
     * Process the text that lies inbetween HTML tags. This method does the actual wrapping of URLs with
     * anchor tags.
     *
     * @private
     * @param {String} text The text to auto-link.
     * @return {String} The text with anchor tags auto-filled.
     */
    processTextNode : function( text ) {
      var me = this;  // for closure

      return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
        var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // match description object

        // Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are
        // invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
        if( !matchDescObj ) {
          return matchStr;

        } else {
          // Generate the replacement text for the match
          var matchReturnVal = me.createMatchReturnVal( matchDescObj.match, matchDescObj.matchStr );
          return matchDescObj.prefixStr + matchReturnVal + matchDescObj.suffixStr;
        }
      } );
    },


    /**
     * Processes a candidate match from the {@link #matcherRegex}.
     *
     * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
     * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
     *
     * @private
     * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
     * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
     * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This
     *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
     * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
     * @param {String} emailAddressMatch The matched email address for an email address match.
     * @param {String} urlMatch The matched URL string for a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
     *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
     * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that
     *   comes before the '//'.
     * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with
     *   the character that comes before the '//'.
     *
     * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
     *   Otherwise, this will be an Object (map) with the following properties:
     * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
     *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into
     *   the replacement stream.
     * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
     *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into
     *   the replacement stream.
     * @return {String} return.matchStr The `matchStr`, fixed up to remove characters that are no longer needed (which have been
     *   added to `prefixStr` and `suffixStr`).
     * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
     */
    processCandidateMatch : function(
      matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle,
      emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
    ) {
      var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
          match,  // Will be an Autolinker.match.Match object

          prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
          suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.


      // Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are
      // invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
      if(
        ( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
        !this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch )
      ) {
        return null;
      }

      // Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
      // in the match itself.
      if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
        matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
        suffixStr = ")";  // this will be added after the generated <a> tag
      }


      if( emailAddressMatch ) {
        match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );

      } else if( twitterMatch ) {
        // fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match
        // itself (since there are no look-behinds in JS regexes)
        if( twitterHandlePrefixWhitespaceChar ) {
          prefixStr = twitterHandlePrefixWhitespaceChar;
          matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
        }
        match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );

      } else {  // url match
        // If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
        // to match due to the lack of a negative look-behind in JavaScript regular expressions)
        if( protocolRelativeMatch ) {
          var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";

          if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
            prefixStr = charBeforeMatch;
            matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
          }
        }

        match = new Autolinker.match.Url( {
          matchedText : matchStr,
          url : matchStr,
          protocolUrlMatch : !!protocolUrlMatch,
          protocolRelativeMatch : !!protocolRelativeMatch,
          stripPrefix : this.stripPrefix
        } );
      }

      return {
        prefixStr : prefixStr,
        suffixStr : suffixStr,
        matchStr  : matchStr,
        match     : match
      };
    },


    /**
     * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
     * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
     *
     * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
     * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked.
     *
     * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
     * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL
     * itself, and this method will return `true`.
     *
     * @private
     * @param {String} matchStr The full match string from the {@link #matcherRegex}.
     * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
     */
    matchHasUnbalancedClosingParen : function( matchStr ) {
      var lastChar = matchStr.charAt( matchStr.length - 1 );

      if( lastChar === ')' ) {
        var openParensMatch = matchStr.match( /\(/g ),
            closeParensMatch = matchStr.match( /\)/g ),
            numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
            numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;

        if( numOpenParens < numCloseParens ) {
          return true;
        }
      }

      return false;
    },


    /**
     * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
     *
     * This method handles the {@link #replaceFn}, if one was provided.
     *
     * @private
     * @param {Autolinker.match.Match} match The Match object that represents the match.
     * @param {String} matchStr The original match string, after having been preprocessed to fix match edge cases (see
     *   the `prefixStr` and `suffixStr` vars in {@link #processTextNode}.
     * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
     *   may be the `matchStr` itself if the match is not to be replaced.
     */
    createMatchReturnVal : function( match, matchStr ) {
      // Handle a custom `replaceFn` being provided
      var replaceFnResult;
      if( this.replaceFn ) {
        replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
      }

      if( typeof replaceFnResult === 'string' ) {
        return replaceFnResult;  // `replaceFn` returned a string, use that

      } else if( replaceFnResult === false ) {
        return matchStr;  // no replacement for the match

      } else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
        return replaceFnResult.toString();

      } else {  // replaceFnResult === true, or no/unknown return value from function
        // Perform Autolinker's default anchor tag generation
        var tagBuilder = this.getTagBuilder(),
            anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance

        return anchorTag.toString();
      }
    }

  };


  /**
   * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML.
   * Does not link URLs found within HTML tags.
   *
   * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
   * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
   *
   * Example:
   *
   *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
   *     // Produces: "Go to <a href="http://google.com">google.com</a>"
   *
   * @static
   * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
   *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
   * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
   *   See the class description for an example call.
   * @return {String} The HTML text, with URLs automatically linked
   */
  Autolinker.link = function( textOrHtml, options ) {
    var autolinker = new Autolinker( options );
    return autolinker.link( textOrHtml );
  };


  // Namespace for `match` classes
  Autolinker.match = {};
  /*global Autolinker */
  /*jshint eqnull:true, boss:true */
  /**
   * @class Autolinker.Util
   * @singleton
   *
   * A few utility methods for Autolinker.
   */
  Autolinker.Util = {

    /**
     * @property {Function} abstractMethod
     *
     * A function object which represents an abstract method.
     */
    abstractMethod : function() { throw "abstract"; },


    /**
     * Assigns (shallow copies) the properties of `src` onto `dest`.
     *
     * @param {Object} dest The destination object.
     * @param {Object} src The source object.
     * @return {Object} The destination object (`dest`)
     */
    assign : function( dest, src ) {
      for( var prop in src ) {
        if( src.hasOwnProperty( prop ) ) {
          dest[ prop ] = src[ prop ];
        }
      }

      return dest;
    },


    /**
     * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
     *
     * @param {Function} superclass The constructor function for the superclass.
     * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
     *   special property `constructor`, which will be used as the new subclass's constructor function.
     * @return {Function} The new subclass function.
     */
    extend : function( superclass, protoProps ) {
      var superclassProto = superclass.prototype;

      var F = function() {};
      F.prototype = superclassProto;

      var subclass;
      if( protoProps.hasOwnProperty( 'constructor' ) ) {
        subclass = protoProps.constructor;
      } else {
        subclass = function() { superclassProto.constructor.apply( this, arguments ); };
      }

      var subclassProto = subclass.prototype = new F();  // set up prototype chain
      subclassProto.constructor = subclass;  // fix constructor property
      subclassProto.superclass = superclassProto;

      delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
      Autolinker.Util.assign( subclassProto, protoProps );

      return subclass;
    },


    /**
     * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
     * end of the string (by default, two periods: '..'). If the `str` length does not exceed
     * `len`, the string will be returned unchanged.
     *
     * @param {String} str The string to truncate and add an ellipsis to.
     * @param {Number} truncateLen The length to truncate the string at.
     * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
     *   when truncated. Defaults to '..'
     */
    ellipsis : function( str, truncateLen, ellipsisChars ) {
      if( str.length > truncateLen ) {
        ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
        str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
      }
      return str;
    },


    /**
     * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
     *
     * @param {Array} arr The array to find an element of.
     * @param {*} element The element to find in the array, and return the index of.
     * @return {Number} The index of the `element`, or -1 if it was not found.
     */
    indexOf : function( arr, element ) {
      if( Array.prototype.indexOf ) {
        return arr.indexOf( element );

      } else {
        for( var i = 0, len = arr.length; i < len; i++ ) {
          if( arr[ i ] === element ) return i;
        }
        return -1;
      }
    },



    /**
     * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
     * with a regular expression that contains capturing parenthesis.
     *
     * For example:
     *
     *     // Modern browsers:
     *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
     *
     *     // Old IE (including IE8):
     *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
     *
     * This method emulates the functionality of modern browsers for the old IE case.
     *
     * @param {String} str The string to split.
     * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
     *   character(s) will be spliced into the array, as in the "modern browsers" example in the
     *   description of this method.
     *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
     *   Note #2: for simplicity's sake, the regular expression does not need
     *   to contain capturing parenthesis - it will be assumed that any match has them.
     * @return {String[]} The split array of strings, with the splitting character(s) included.
     */
    splitAndCapture : function( str, splitRegex ) {
      if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );

      var result = [],
          lastIdx = 0,
          match;

      while( match = splitRegex.exec( str ) ) {
        result.push( str.substring( lastIdx, match.index ) );
        result.push( match[ 0 ] );  // push the splitting char(s)

        lastIdx = match.index + match[ 0 ].length;
      }
      result.push( str.substring( lastIdx ) );

      return result;
    }

  };
  /*global Autolinker */
  /**
   * @private
   * @class Autolinker.HtmlParser
   * @extends Object
   *
   * An HTML parser implementation which simply walks an HTML string and calls the provided visitor functions to process
   * HTML and text nodes.
   *
   * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, basically ignoring HTML tags.
   */
  Autolinker.HtmlParser = Autolinker.Util.extend( Object, {

    /**
     * @private
     * @property {RegExp} htmlRegex
     *
     * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
     * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
     *
     * Capturing groups:
     *
     * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
     * 2. If it is an end tag, this group will have the '/'.
     * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
     */
    htmlRegex : (function() {
      var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
          attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
          attrValueRegex = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
          nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'

      return new RegExp( [
        // for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
        '(?:',
          '<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag

            // Zero or more attributes following the tag name
            '(?:',
              '\\s+',  // one or more whitespace chars before an attribute

              // Either:
              // A. attr="value", or
              // B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
              '(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
            ')*',
          '>',
        ')',

        '|',

        // All other HTML tags (i.e. tags that are not <!DOCTYPE>)
        '(?:',
          '<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag.
                    // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.

            // *** Capturing Group 3 - The tag name
            '(' + tagNameRegex.source + ')',

            // Zero or more attributes following the tag name
            '(?:',
              '\\s+',                // one or more whitespace chars before an attribute
              nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
            ')*',

            '\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
          '>',
        ')'
      ].join( "" ), 'gi' );
    } )(),


    /**
     * Walks an HTML string, calling the `options.processHtmlNode` function for each HTML tag that is encountered, and calling
     * the `options.processTextNode` function when each text around HTML tags is encountered.
     *
     * @param {String} html The HTML to parse.
     * @param {Object} [options] An Object (map) which may contain the following properties:
     *
     * @param {Function} [options.processHtmlNode] A visitor function which allows processing of an encountered HTML node.
     *   This function is called with the following arguments:
     * @param {String} [options.processHtmlNode.tagText] The HTML tag text that was found.
     * @param {String} [options.processHtmlNode.tagName] The tag name for the HTML tag that was found. Ex: 'a' for an anchor tag.
     * @param {String} [options.processHtmlNode.isClosingTag] `true` if the tag is a closing tag (ex: &lt;/a&gt;), `false` otherwise.
     *
     * @param {Function} [options.processTextNode] A visitor function which allows processing of an encountered text node.
     *   This function is called with the following arguments:
     * @param {String} [options.processTextNode.text] The text node that was matched.
     */
    parse : function( html, options ) {
      options = options || {};

      var processHtmlNodeVisitor = options.processHtmlNode || function() {},
          processTextNodeVisitor = options.processTextNode || function() {},
          htmlRegex = this.htmlRegex,
          currentResult,
          lastIndex = 0;

      // Loop over the HTML string, ignoring HTML tags, and processing the text that lies between them,
      // wrapping the URLs in anchor tags
      while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
        var tagText = currentResult[ 0 ],
            tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a")
            isClosingTag = !!currentResult[ 2 ],
            inBetweenTagsText = html.substring( lastIndex, currentResult.index );

        if( inBetweenTagsText ) {
          processTextNodeVisitor( inBetweenTagsText );
        }

        processHtmlNodeVisitor( tagText, tagName.toLowerCase(), isClosingTag );

        lastIndex = currentResult.index + tagText.length;
      }

      // Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
      if( lastIndex < html.length ) {
        var text = html.substring( lastIndex );

        if( text ) {
          processTextNodeVisitor( text );
        }
      }
    }

  } );
  /*global Autolinker */
  /*jshint boss:true */
  /**
   * @class Autolinker.HtmlTag
   * @extends Object
   *
   * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
   *
   * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
   * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
   *
   * ## Examples
   *
   * Example instantiation:
   *
   *     var tag = new Autolinker.HtmlTag( {
   *         tagName : 'a',
   *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
   *         innerHtml : 'Google'
   *     } );
   *
   *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
   *
   *     // Individual accessor methods
   *     tag.getTagName();                 // 'a'
   *     tag.getAttr( 'href' );            // 'http://google.com'
   *     tag.hasClass( 'external-link' );  // true
   *
   *
   * Using mutator methods (which may be used in combination with instantiation config properties):
   *
   *     var tag = new Autolinker.HtmlTag();
   *     tag.setTagName( 'a' );
   *     tag.setAttr( 'href', 'http://google.com' );
   *     tag.addClass( 'external-link' );
   *     tag.setInnerHtml( 'Google' );
   *
   *     tag.getTagName();                 // 'a'
   *     tag.getAttr( 'href' );            // 'http://google.com'
   *     tag.hasClass( 'external-link' );  // true
   *
   *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
   *
   *
   * ## Example use within a {@link Autolinker#replaceFn replaceFn}
   *
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
   *             tag.setAttr( 'rel', 'nofollow' );
   *
   *             return tag;
   *         }
   *     } );
   *
   *     // generated html:
   *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
   *
   *
   * ## Example use with a new tag for the replacement
   *
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = new Autolinker.HtmlTag( {
   *                 tagName : 'button',
   *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
   *                 innerHtml : 'Load URL: ' + match.getAnchorText()
   *             } );
   *
   *             return tag;
   *         }
   *     } );
   *
   *     // generated html:
   *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
   */
  Autolinker.HtmlTag = Autolinker.Util.extend( Object, {

    /**
     * @cfg {String} tagName
     *
     * The tag name. Ex: 'a', 'button', etc.
     *
     * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
     * is executed.
     */

    /**
     * @cfg {Object.<String, String>} attrs
     *
     * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
     * values are the attribute values.
     */

    /**
     * @cfg {String} innerHtml
     *
     * The inner HTML for the tag.
     *
     * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym
     * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
     * if you prefer, but this one is recommended.
     */

    /**
     * @cfg {String} innerHTML
     *
     * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
     * for acronym names.
     */


    /**
     * @protected
     * @property {RegExp} whitespaceRegex
     *
     * Regular expression used to match whitespace in a string of CSS classes.
     */
    whitespaceRegex : /\s+/,


    /**
     * @constructor
     * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
     */
    constructor : function( cfg ) {
      Autolinker.Util.assign( this, cfg );

      this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
    },


    /**
     * Sets the tag name that will be used to generate the tag with.
     *
     * @param {String} tagName
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    setTagName : function( tagName ) {
      this.tagName = tagName;
      return this;
    },


    /**
     * Retrieves the tag name.
     *
     * @return {String}
     */
    getTagName : function() {
      return this.tagName || "";
    },


    /**
     * Sets an attribute on the HtmlTag.
     *
     * @param {String} attrName The attribute name to set.
     * @param {String} attrValue The attribute value to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    setAttr : function( attrName, attrValue ) {
      var tagAttrs = this.getAttrs();
      tagAttrs[ attrName ] = attrValue;

      return this;
    },


    /**
     * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
     *
     * @param {String} name The attribute name to retrieve.
     * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
     */
    getAttr : function( attrName ) {
      return this.getAttrs()[ attrName ];
    },


    /**
     * Sets one or more attributes on the HtmlTag.
     *
     * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    setAttrs : function( attrs ) {
      var tagAttrs = this.getAttrs();
      Autolinker.Util.assign( tagAttrs, attrs );

      return this;
    },


    /**
     * Retrieves the attributes Object (map) for the HtmlTag.
     *
     * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
     */
    getAttrs : function() {
      return this.attrs || ( this.attrs = {} );
    },


    /**
     * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
     *
     * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    setClass : function( cssClass ) {
      return this.setAttr( 'class', cssClass );
    },


    /**
     * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
     *
     * @param {String} cssClass One or more space-separated CSS classes to add.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    addClass : function( cssClass ) {
      var classAttr = this.getClass(),
          whitespaceRegex = this.whitespaceRegex,
          indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
          classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
          newClasses = cssClass.split( whitespaceRegex ),
          newClass;

      while( newClass = newClasses.shift() ) {
        if( indexOf( classes, newClass ) === -1 ) {
          classes.push( newClass );
        }
      }

      this.getAttrs()[ 'class' ] = classes.join( " " );
      return this;
    },


    /**
     * Convenience method to remove one or more CSS classes from the HtmlTag.
     *
     * @param {String} cssClass One or more space-separated CSS classes to remove.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    removeClass : function( cssClass ) {
      var classAttr = this.getClass(),
          whitespaceRegex = this.whitespaceRegex,
          indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
          classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
          removeClasses = cssClass.split( whitespaceRegex ),
          removeClass;

      while( classes.length && ( removeClass = removeClasses.shift() ) ) {
        var idx = indexOf( classes, removeClass );
        if( idx !== -1 ) {
          classes.splice( idx, 1 );
        }
      }

      this.getAttrs()[ 'class' ] = classes.join( " " );
      return this;
    },


    /**
     * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
     * there are multiple.
     *
     * @return {String}
     */
    getClass : function() {
      return this.getAttrs()[ 'class' ] || "";
    },


    /**
     * Convenience method to check if the tag has a CSS class or not.
     *
     * @param {String} cssClass The CSS class to check for.
     * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
     */
    hasClass : function( cssClass ) {
      return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
    },


    /**
     * Sets the inner HTML for the tag.
     *
     * @param {String} html The inner HTML to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    setInnerHtml : function( html ) {
      this.innerHtml = html;

      return this;
    },


    /**
     * Retrieves the inner HTML for the tag.
     *
     * @return {String}
     */
    getInnerHtml : function() {
      return this.innerHtml || "";
    },


    /**
     * Override of superclass method used to generate the HTML string for the tag.
     *
     * @return {String}
     */
    toString : function() {
      var tagName = this.getTagName(),
          attrsStr = this.buildAttrsStr();

      attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes

      return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
    },


    /**
     * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate
     * the stringified HtmlTag.
     *
     * @protected
     * @return {String} Example return: `attr1="value1" attr2="value2"`
     */
    buildAttrsStr : function() {
      if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string

      var attrs = this.getAttrs(),
          attrsArr = [];

      for( var prop in attrs ) {
        if( attrs.hasOwnProperty( prop ) ) {
          attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
        }
      }
      return attrsArr.join( " " );
    }

  } );
  /*global Autolinker */
  /*jshint scripturl:true */
  /**
   * @private
   * @class Autolinker.MatchValidator
   * @extends Object
   *
   * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
   *
   * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
   * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
   * false positives that have been matched by the {@link Autolinker#matcherRegex}.
   */
  Autolinker.MatchValidator = Autolinker.Util.extend( Object, {

    /**
     * @private
     * @property {RegExp} invalidProtocolRelMatchRegex
     *
     * The regular expression used to check a potential protocol-relative URL match, coming from the
     * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
     *
     * This regular expression checks to see if there is a word character before the '//' match in order to determine if
     * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in
     * JavaScript regular expressions.
     *
     * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something
     * like "abc//google.com"
     */
    invalidProtocolRelMatchRegex : /^[\w]\/\//,

    /**
     * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
     *
     * @private
     * @property {RegExp} hasFullProtocolRegex
     */
    hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,

    /**
     * Regex to find the URI scheme, such as 'mailto:'.
     *
     * This is used to filter out 'javascript:' and 'vbscript:' schemes.
     *
     * @private
     * @property {RegExp} uriSchemeRegex
     */
    uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,

    /**
     * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
     *
     * @private
     * @property {RegExp} hasWordCharAfterProtocolRegex
     */
    hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,


    /**
     * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
     *
     * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over
     *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
     * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
     *    matches like "git:1.0").
     * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character
     *    (effectively skipping over strings like "abc//google.com")
     *
     * Otherwise, returns `true`.
     *
     * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
     *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
     * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
     *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
     *   preceding the '//'.
     * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or
     *   should just not be processed.
     */
    isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
      if(
        ( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
        this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
        this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
        this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
      ) {
        return false;
      }

      return true;
    },


    /**
     * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is
     * 'javascript:' or 'vbscript:'
     *
     * @private
     * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com'
     *   or 'mailto:a@a.com'.
     * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
     */
    isValidUriScheme : function( uriSchemeMatch ) {
      var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ];

      return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
    },


    /**
     * Determines if a URL match does not have either:
     *
     * a) a full protocol (i.e. 'http://'), or
     * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
     *
     * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
     * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
     *
     * @private
     * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
     *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
     * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
     *   match.
     */
    urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
      return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
    },


    /**
     * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
     *
     * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something
     * like "git:1.0"
     *
     * @private
     * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
     *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
     *   separator (':').
     * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
     *   otherwise.
     */
    urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
      if( urlMatch && protocolUrlMatch ) {
        return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
      } else {
        return false;
      }
    },


    /**
     * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
     * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
     * order to be considered valid).
     *
     * @private
     * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
     *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
     *   preceding the '//'.
     * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
     */
    isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
      return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
    }

  } );
  /*global Autolinker */
  /*jshint sub:true */
  /**
   * @protected
   * @class Autolinker.AnchorTagBuilder
   * @extends Object
   *
   * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
   *
   * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may
   * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
   * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
   *
   *     var html = Autolinker.link( "Test google.com", {
   *         replaceFn : function( autolinker, match ) {
   *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
   *             tag.setAttr( 'rel', 'nofollow' );
   *
   *             return tag;
   *         }
   *     } );
   *
   *     // generated html:
   *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
   */
  Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {

    /**
     * @cfg {Boolean} newWindow
     * @inheritdoc Autolinker#newWindow
     */

    /**
     * @cfg {Number} truncate
     * @inheritdoc Autolinker#truncate
     */

    /**
     * @cfg {String} className
     * @inheritdoc Autolinker#className
     */


    /**
     * @constructor
     * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
     */
    constructor : function( cfg ) {
      Autolinker.Util.assign( this, cfg );
    },


    /**
     * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
     * via its `match` object.
     *
     * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
     * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
     */
    build : function( match ) {
      var tag = new Autolinker.HtmlTag( {
        tagName   : 'a',
        attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
        innerHtml : this.processAnchorText( match.getAnchorText() )
      } );

      return tag;
    },


    /**
     * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
     *
     * @protected
     * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
     * @param {String} href The href for the anchor tag.
     * @return {Object} A key/value Object (map) of the anchor tag's attributes.
     */
    createAttrs : function( matchType, anchorHref ) {
      var attrs = {
        'href' : anchorHref  // we'll always have the `href` attribute
      };

      var cssClass = this.createCssClass( matchType );
      if( cssClass ) {
        attrs[ 'class' ] = cssClass;
      }
      if( this.newWindow ) {
        attrs[ 'target' ] = "_blank";
      }

      return attrs;
    },


    /**
     * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
     * config.
     *
     * @private
     * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
     * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
     *   was configured, returns an empty string.
     */
    createCssClass : function( matchType ) {
      var className = this.className;

      if( !className )
        return "";
      else
        return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
    },


    /**
     * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
     *
     * @private
     * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
     * @return {String} The processed `anchorText`.
     */
    processAnchorText : function( anchorText ) {
      anchorText = this.doTruncate( anchorText );

      return anchorText;
    },


    /**
     * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
     * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
     *
     * @private
     * @param {String} text The anchor tag's text (i.e. what will be displayed).
     * @return {String} The truncated anchor text.
     */
    doTruncate : function( anchorText ) {
      return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
    }

  } );
  /*global Autolinker */
  /**
   * @abstract
   * @class Autolinker.match.Match
   *
   * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a
   * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
   *
   * For example:
   *
   *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
   *
   *     var linkedText = Autolinker.link( input, {
   *         replaceFn : function( autolinker, match ) {
   *             console.log( "href = ", match.getAnchorHref() );
   *             console.log( "text = ", match.getAnchorText() );
   *
   *             switch( match.getType() ) {
   *                 case 'url' :
   *                     console.log( "url: ", match.getUrl() );
   *
   *                 case 'email' :
   *                     console.log( "email: ", match.getEmail() );
   *
   *                 case 'twitter' :
   *                     console.log( "twitter: ", match.getTwitterHandle() );
   *             }
   *         }
   *     } );
   *
   * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
   */
  Autolinker.match.Match = Autolinker.Util.extend( Object, {

    /**
     * @cfg {String} matchedText (required)
     *
     * The original text that was matched.
     */


    /**
     * @constructor
     * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
     */
    constructor : function( cfg ) {
      Autolinker.Util.assign( this, cfg );
    },


    /**
     * Returns a string name for the type of match that this class represents.
     *
     * @abstract
     * @return {String}
     */
    getType : Autolinker.Util.abstractMethod,


    /**
     * Returns the original text that was matched.
     *
     * @return {String}
     */
    getMatchedText : function() {
      return this.matchedText;
    },


    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @abstract
     * @return {String}
     */
    getAnchorHref : Autolinker.Util.abstractMethod,


    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @abstract
     * @return {String}
     */
    getAnchorText : Autolinker.Util.abstractMethod

  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Email
   * @extends Autolinker.match.Match
   *
   * Represents a Email match found in an input string which should be Autolinked.
   *
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {

    /**
     * @cfg {String} email (required)
     *
     * The email address that was matched.
     */


    /**
     * Returns a string name for the type of match that this class represents.
     *
     * @return {String}
     */
    getType : function() {
      return 'email';
    },


    /**
     * Returns the email address that was matched.
     *
     * @return {String}
     */
    getEmail : function() {
      return this.email;
    },


    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorHref : function() {
      return 'mailto:' + this.email;
    },


    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorText : function() {
      return this.email;
    }

  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Twitter
   * @extends Autolinker.match.Match
   *
   * Represents a Twitter match found in an input string which should be Autolinked.
   *
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {

    /**
     * @cfg {String} twitterHandle (required)
     *
     * The Twitter handle that was matched.
     */


    /**
     * Returns the type of match that this class represents.
     *
     * @return {String}
     */
    getType : function() {
      return 'twitter';
    },


    /**
     * Returns a string name for the type of match that this class represents.
     *
     * @return {String}
     */
    getTwitterHandle : function() {
      return this.twitterHandle;
    },


    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorHref : function() {
      return 'https://twitter.com/' + this.twitterHandle;
    },


    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorText : function() {
      return '@' + this.twitterHandle;
    }

  } );
  /*global Autolinker */
  /**
   * @class Autolinker.match.Url
   * @extends Autolinker.match.Match
   *
   * Represents a Url match found in an input string which should be Autolinked.
   *
   * See this class's superclass ({@link Autolinker.match.Match}) for more details.
   */
  Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {

    /**
     * @cfg {String} url (required)
     *
     * The url that was matched.
     */

    /**
     * @cfg {Boolean} protocolUrlMatch (required)
     *
     * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
     * known TLD match.
     */

    /**
     * @cfg {Boolean} protocolRelativeMatch (required)
     *
     * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
     * and will be either http:// or https:// based on the protocol that the site is loaded under.
     */

    /**
     * @cfg {Boolean} stripPrefix (required)
     * @inheritdoc Autolinker#stripPrefix
     */


    /**
     * @private
     * @property {RegExp} urlPrefixRegex
     *
     * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
     */
    urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,

    /**
     * @private
     * @property {RegExp} protocolRelativeRegex
     *
     * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
     * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
     */
    protocolRelativeRegex : /^\/\//,

    /**
     * @private
     * @property {Boolean} protocolPrepended
     *
     * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
     * {@link #url} did not have a protocol)
     */
    protocolPrepended : false,


    /**
     * Returns a string name for the type of match that this class represents.
     *
     * @return {String}
     */
    getType : function() {
      return 'url';
    },


    /**
     * Returns the url that was matched, assuming the protocol to be 'http://' if the original
     * match was missing a protocol.
     *
     * @return {String}
     */
    getUrl : function() {
      var url = this.url;

      // if the url string doesn't begin with a protocol, assume 'http://'
      if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
        url = this.url = 'http://' + url;

        this.protocolPrepended = true;
      }

      return url;
    },


    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorHref : function() {
      var url = this.getUrl();

      return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html
    },


    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    getAnchorText : function() {
      var anchorText = this.getUrl();

      if( this.protocolRelativeMatch ) {
        // Strip off any protocol-relative '//' from the anchor text
        anchorText = this.stripProtocolRelativePrefix( anchorText );
      }
      if( this.stripPrefix ) {
        anchorText = this.stripUrlPrefix( anchorText );
      }
      anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one

      return anchorText;
    },


    // ---------------------------------------

    // Utility Functionality

    /**
     * Strips the URL prefix (such as "http://" or "https://") from the given text.
     *
     * @private
     * @param {String} text The text of the anchor that is being generated, for which to strip off the
     *   url prefix (such as stripping off "http://")
     * @return {String} The `anchorText`, with the prefix stripped.
     */
    stripUrlPrefix : function( text ) {
      return text.replace( this.urlPrefixRegex, '' );
    },


    /**
     * Strips any protocol-relative '//' from the anchor text.
     *
     * @private
     * @param {String} text The text of the anchor that is being generated, for which to strip off the
     *   protocol-relative prefix (such as stripping off "//")
     * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
     */
    stripProtocolRelativePrefix : function( text ) {
      return text.replace( this.protocolRelativeRegex, '' );
    },


    /**
     * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
     *
     * @private
     * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
     *   slash ('/') that may exist.
     * @return {String} The `anchorText`, with the trailing slash removed.
     */
    removeTrailingSlash : function( anchorText ) {
      if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
        anchorText = anchorText.slice( 0, -1 );
      }
      return anchorText;
    }

  } );

  return Autolinker;


}));

},{}],52:[function(require,module,exports){
'use strict';


module.exports = require('./lib/');

},{"./lib/":11}]},{},[52])(52)
});

(function(global) {
// CodeMirror version 3.15
//
// CodeMirror is the only global var we claim
var CodeMirror = (function() {
  "use strict";

  // BROWSER SNIFFING

  // Crude, but necessary to handle a number of hard-to-feature-detect
  // bugs and behavior differences.
  var gecko = /gecko\/\d/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var ie_lt8 = ie && (document.documentMode == null || document.documentMode < 8);
  var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);
  var webkit = /WebKit\//.test(navigator.userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var opera = /Opera\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var khtml = /KHTML\//.test(navigator.userAgent);
  var mac_geLion = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
  var phantom = /PhantomJS/.test(navigator.userAgent);

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var windows = /windows/i.test(navigator.platform);

  var opera_version = opera && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
  if (opera_version) opera_version = Number(opera_version[1]);
  if (opera_version && opera_version >= 15) { opera = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || opera && (opera_version == null || opera_version < 12.11));
  var captureMiddleClick = gecko || (ie && !ie_lt9);

  // Optimize some code when these features are not used
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  // CONSTRUCTOR

  function CodeMirror(place, options) {
    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

    this.options = options = options || {};
    // Determine effective options based on given values and defaults.
    for (var opt in defaults) if (!options.hasOwnProperty(opt) && defaults.hasOwnProperty(opt))
      options[opt] = defaults[opt];
    setGuttersForLineNumbers(options);

    var docStart = typeof options.value == "string" ? 0 : options.value.first;
    var display = this.display = makeDisplay(place, docStart);
    display.wrapper.CodeMirror = this;
    updateGutters(this);
    if (options.autofocus && !mobile) focusInput(this);

    this.state = {keyMaps: [],
                  overlays: [],
                  modeGen: 0,
                  overwrite: false, focused: false,
                  suppressEdits: false, pasteIncoming: false,
                  draggingText: false,
                  highlight: new Delayed()};

    themeChanged(this);
    if (options.lineWrapping)
      this.display.wrapper.className += " CodeMirror-wrap";

    var doc = options.value;
    if (typeof doc == "string") doc = new Doc(options.value, options.mode);
    operation(this, attachDoc)(this, doc);

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie) setTimeout(bind(resetInput, this, true), 20);

    registerEventHandlers(this);
    // IE throws unspecified error in certain cases, when
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (document.activeElement == display.input); } catch(e) { }
    if (hasFocus || (options.autofocus && !mobile)) setTimeout(bind(onFocus, this), 20);
    else onBlur(this);

    operation(this, function() {
      for (var opt in optionHandlers)
        if (optionHandlers.propertyIsEnumerable(opt))
          optionHandlers[opt](this, options[opt], Init);
      for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
    })();
  }

  // DISPLAY CONSTRUCTOR

  function makeDisplay(place, docStart) {
    var d = {};

    var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
    if (webkit) input.style.width = "1000px";
    else input.setAttribute("wrap", "off");
    // if border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) input.style.border = "1px solid black";
    input.setAttribute("autocorrect", "off"); input.setAttribute("autocapitalize", "off"); input.setAttribute("spellcheck", "false");

    // Wraps and hides input textarea
    d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The actual fake scrollbars.
    d.scrollbarH = elt("div", [elt("div", null, null, "height: 1px")], "CodeMirror-hscrollbar");
    d.scrollbarV = elt("div", [elt("div", null, null, "width: 1px")], "CodeMirror-vscrollbar");
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    // DIVs containing the selection and the actual code
    d.lineDiv = elt("div", null, "CodeMirror-code");
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    // Blinky cursor, and element used to ensure cursor fits at the end of a line
    d.cursor = elt("div", "\u00a0", "CodeMirror-cursor");
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    d.otherCursor = elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor");
    // Used to measure text size
    d.measure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = elt("div", [d.measure, d.selectionDiv, d.lineDiv, d.cursor, d.otherCursor],
                         null, "position: relative; outline: none");
    // Moved around its parent to cover visible view
    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
    // Set to the height of the text, causes scrolling
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    // D is needed because behavior of elts with overflow: auto and padding is inconsistent across browsers
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;");
    // Will contain the gutters, if any
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Provides scrolling
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.inputDiv, d.scrollbarH, d.scrollbarV,
                            d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
    // Work around IE7 z-index bug
    if (ie_lt8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (place.appendChild) place.appendChild(d.wrapper); else place(d.wrapper);

    // Needed to hide big blue blinking cursor on Mobile Safari
    if (ios) input.style.width = "0px";
    if (!webkit) d.scroller.draggable = true;
    // Needed to handle Tab key in KHTML
    if (khtml) { d.inputDiv.style.height = "1px"; d.inputDiv.style.position = "absolute"; }
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    else if (ie_lt8) d.scrollbarH.style.minWidth = d.scrollbarV.style.minWidth = "18px";

    // Current visible range (may be bigger than the view window).
    d.viewOffset = d.lastSizeC = 0;
    d.showingFrom = d.showingTo = docStart;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // See readInput and resetInput
    d.prevInput = "";
    // Set to true when a non-horizontal-scrolling widget is added. As
    // an optimization, widget aligning is skipped when d is false.
    d.alignWidgets = false;
    // Flag that indicates whether we currently expect input to appear
    // (after some event like 'keypress' or 'input') and are polling
    // intensively.
    d.pollingFast = false;
    // Self-resetting timeout for the poller
    d.poll = new Delayed();

    d.cachedCharWidth = d.cachedTextHeight = null;
    d.measureLineCache = [];
    d.measureLineCachePos = 0;

    // Tracks when resetInput has punted to just putting a short
    // string instead of the (large) selection.
    d.inaccurateSelection = false;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    return d;
  }

  // STATE UPDATES

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
    cm.doc.iter(function(line) {
      if (line.stateAfter) line.stateAfter = null;
      if (line.styles) line.styles = null;
    });
    cm.doc.frontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) regChange(cm);
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      cm.display.wrapper.className += " CodeMirror-wrap";
      cm.display.sizer.style.minWidth = "";
    } else {
      cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-wrap", "");
      computeMaxLength(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function(){updateScrollbars(cm);}, 100);
  }

  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function(line) {
      if (lineIsHidden(cm.doc, line))
        return 0;
      else if (wrapping)
        return (Math.ceil(line.text.length / perLine) || 1) * th;
      else
        return th;
    };
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function(line) {
      var estHeight = est(line);
      if (estHeight != line.height) updateLineHeight(line, estHeight);
    });
  }

  function keyMapChanged(cm) {
    var map = keyMap[cm.options.keyMap], style = map.style;
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
      (style ? " cm-keymap-" + style : "");
    cm.state.disableInput = map.disableInput;
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  function guttersChanged(cm) {
    updateGutters(cm);
    regChange(cm);
    setTimeout(function(){alignHorizontally(cm);}, 20);
  }

  function updateGutters(cm) {
    var gutters = cm.display.gutters, specs = cm.options.gutters;
    removeChildren(gutters);
    for (var i = 0; i < specs.length; ++i) {
      var gutterClass = specs[i];
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
      if (gutterClass == "CodeMirror-linenumbers") {
        cm.display.lineGutter = gElt;
        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = i ? "" : "none";
  }

  function lineLength(doc, line) {
    if (line.height == 0) return 0;
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find();
      cur = getLine(doc, found.from.line);
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found = merged.find();
      len -= cur.text.length - found.from.ch;
      cur = getLine(doc, found.to.line);
      len += cur.text.length - found.to.ch;
    }
    return len;
  }

  function computeMaxLength(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(doc, d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function(line) {
      var len = lineLength(doc, line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // Make sure the gutters options contains the element
  // "CodeMirror-linenumbers" when the lineNumbers option is true.
  function setGuttersForLineNumbers(options) {
    var found = false;
    for (var i = 0; i < options.gutters.length; ++i) {
      if (options.gutters[i] == "CodeMirror-linenumbers") {
        if (options.lineNumbers) found = true;
        else options.gutters.splice(i--, 1);
      }
    }
    if (!found && options.lineNumbers)
      options.gutters.push("CodeMirror-linenumbers");
  }

  // SCROLLBARS

  // Re-synchronize the fake scrollbars with the actual size of the
  // content. Optionally force a scrollTop.
  function updateScrollbars(cm) {
    var d = cm.display, docHeight = cm.doc.height;
    var totalHeight = docHeight + paddingVert(d);
    d.sizer.style.minHeight = d.heightForcer.style.top = totalHeight + "px";
    d.gutters.style.height = Math.max(totalHeight, d.scroller.clientHeight - scrollerCutOff) + "px";
    var scrollHeight = Math.max(totalHeight, d.scroller.scrollHeight);
    var needsH = d.scroller.scrollWidth > (d.scroller.clientWidth + 1);
    var needsV = scrollHeight > (d.scroller.clientHeight + 1);
    if (needsV) {
      d.scrollbarV.style.display = "block";
      d.scrollbarV.style.bottom = needsH ? scrollbarWidth(d.measure) + "px" : "0";
      d.scrollbarV.firstChild.style.height =
        (scrollHeight - d.scroller.clientHeight + d.scrollbarV.clientHeight) + "px";
    } else d.scrollbarV.style.display = "";
    if (needsH) {
      d.scrollbarH.style.display = "block";
      d.scrollbarH.style.right = needsV ? scrollbarWidth(d.measure) + "px" : "0";
      d.scrollbarH.firstChild.style.width =
        (d.scroller.scrollWidth - d.scroller.clientWidth + d.scrollbarH.clientWidth) + "px";
    } else d.scrollbarH.style.display = "";
    if (needsH && needsV) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = scrollbarWidth(d.measure) + "px";
    } else d.scrollbarFiller.style.display = "";
    if (needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = scrollbarWidth(d.measure) + "px";
      d.gutterFiller.style.width = d.gutters.offsetWidth + "px";
    } else d.gutterFiller.style.display = "";

    if (mac_geLion && scrollbarWidth(d.measure) === 0)
      d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = mac_geMountainLion ? "18px" : "12px";
  }

  function visibleLines(display, doc, viewPort) {
    var top = display.scroller.scrollTop, height = display.wrapper.clientHeight;
    if (typeof viewPort == "number") top = viewPort;
    else if (viewPort) {top = viewPort.top; height = viewPort.bottom - viewPort.top;}
    top = Math.floor(top - paddingTop(display));
    var bottom = Math.ceil(top + height);
    return {from: lineAtHeight(doc, top), to: lineAtHeight(doc, bottom)};
  }

  // LINE NUMBERS

  function alignHorizontally(cm) {
    var display = cm.display;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, l = comp + "px";
    for (var n = display.lineDiv.firstChild; n; n = n.nextSibling) if (n.alignable) {
      for (var i = 0, a = n.alignable; i < a.length; ++i) a[i].style.left = l;
    }
    if (cm.options.fixedGutter)
      display.gutters.style.left = (comp + gutterW) + "px";
  }

  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) return false;
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      return true;
    }
    return false;
  }

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber));
  }
  function compensateForHScroll(display) {
    return getRect(display.scroller).left - getRect(display.sizer).left;
  }

  // DISPLAY DRAWING

  function updateDisplay(cm, changes, viewPort, forced) {
    var oldFrom = cm.display.showingFrom, oldTo = cm.display.showingTo, updated;
    var visible = visibleLines(cm.display, cm.doc, viewPort);
    for (;;) {
      if (!updateDisplayInner(cm, changes, visible, forced)) break;
      forced = false;
      updated = true;
      updateSelection(cm);
      updateScrollbars(cm);

      // Clip forced viewport to actual scrollable area
      if (viewPort)
        viewPort = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight,
                            typeof viewPort == "number" ? viewPort : viewPort.top);
      visible = visibleLines(cm.display, cm.doc, viewPort);
      if (visible.from >= cm.display.showingFrom && visible.to <= cm.display.showingTo)
        break;
      changes = [];
    }

    if (updated) {
      signalLater(cm, "update", cm);
      if (cm.display.showingFrom != oldFrom || cm.display.showingTo != oldTo)
        signalLater(cm, "viewportChange", cm, cm.display.showingFrom, cm.display.showingTo);
    }
    return updated;
  }

  // Uses a set of changes plus the current scroll position to
  // determine which DOM updates have to be made, and makes the
  // updates.
  function updateDisplayInner(cm, changes, visible, forced) {
    var display = cm.display, doc = cm.doc;
    if (!display.wrapper.clientWidth) {
      display.showingFrom = display.showingTo = doc.first;
      display.viewOffset = 0;
      return;
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!forced && changes.length == 0 &&
        visible.from > display.showingFrom && visible.to < display.showingTo)
      return;

    if (maybeUpdateLineNumberWidth(cm))
      changes = [{from: doc.first, to: doc.first + doc.size}];
    var gutterW = display.sizer.style.marginLeft = display.gutters.offsetWidth + "px";
    display.scrollbarH.style.left = cm.options.fixedGutter ? gutterW : "0";

    // Used to determine which lines need their line numbers updated
    var positionsChangedFrom = Infinity;
    if (cm.options.lineNumbers)
      for (var i = 0; i < changes.length; ++i)
        if (changes[i].diff) { positionsChangedFrom = changes[i].from; break; }

    var end = doc.first + doc.size;
    var from = Math.max(visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, visible.to + cm.options.viewportMargin);
    if (display.showingFrom < from && from - display.showingFrom < 20) from = Math.max(doc.first, display.showingFrom);
    if (display.showingTo > to && display.showingTo - to < 20) to = Math.min(end, display.showingTo);
    if (sawCollapsedSpans) {
      from = lineNo(visualLine(doc, getLine(doc, from)));
      while (to < end && lineIsHidden(doc, getLine(doc, to))) ++to;
    }

    // Create a range of theoretically intact lines, and punch holes
    // in that using the change info.
    var intact = [{from: Math.max(display.showingFrom, doc.first),
                   to: Math.min(display.showingTo, end)}];
    if (intact[0].from >= intact[0].to) intact = [];
    else intact = computeIntact(intact, changes);
    // When merged lines are present, we might have to reduce the
    // intact ranges because changes in continued fragments of the
    // intact lines do require the lines to be redrawn.
    if (sawCollapsedSpans)
      for (var i = 0; i < intact.length; ++i) {
        var range = intact[i], merged;
        while (merged = collapsedSpanAtEnd(getLine(doc, range.to - 1))) {
          var newTo = merged.find().from.line;
          if (newTo > range.from) range.to = newTo;
          else { intact.splice(i--, 1); break; }
        }
      }

    // Clip off the parts that won't be visible
    var intactLines = 0;
    for (var i = 0; i < intact.length; ++i) {
      var range = intact[i];
      if (range.from < from) range.from = from;
      if (range.to > to) range.to = to;
      if (range.from >= range.to) intact.splice(i--, 1);
      else intactLines += range.to - range.from;
    }
    if (!forced && intactLines == to - from && from == display.showingFrom && to == display.showingTo) {
      updateViewOffset(cm);
      return;
    }
    intact.sort(function(a, b) {return a.from - b.from;});

    // Avoid crashing on IE's "unspecified error" when in iframes
    try {
      var focused = document.activeElement;
    } catch(e) {}
    if (intactLines < (to - from) * .7) display.lineDiv.style.display = "none";
    patchDisplay(cm, from, to, intact, positionsChangedFrom);
    display.lineDiv.style.display = "";
    if (focused && document.activeElement != focused && focused.offsetHeight) focused.focus();

    var different = from != display.showingFrom || to != display.showingTo ||
      display.lastSizeC != display.wrapper.clientHeight;
    // This is just a bogus formula that detects when the editor is
    // resized or the font size changes.
    if (different) {
      display.lastSizeC = display.wrapper.clientHeight;
      startWorker(cm, 400);
    }
    display.showingFrom = from; display.showingTo = to;

    updateHeightsInViewport(cm);
    updateViewOffset(cm);

    return true;
  }

  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var node = display.lineDiv.firstChild, height; node; node = node.nextSibling) if (node.lineObj) {
      if (ie_lt8) {
        var bot = node.offsetTop + node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = getRect(node);
        height = box.bottom - box.top;
      }
      var diff = node.lineObj.height - height;
      if (height < 2) height = textHeight(display);
      if (diff > .001 || diff < -.001) {
        updateLineHeight(node.lineObj, height);
        var widgets = node.lineObj.widgets;
        if (widgets) for (var i = 0; i < widgets.length; ++i)
          widgets[i].height = widgets[i].node.offsetHeight;
      }
    }
  }

  function updateViewOffset(cm) {
    var off = cm.display.viewOffset = heightAtLine(cm, getLine(cm.doc, cm.display.showingFrom));
    // Position the mover div to align with the current virtual scroll position
    cm.display.mover.style.top = off + "px";
  }

  function computeIntact(intact, changes) {
    for (var i = 0, l = changes.length || 0; i < l; ++i) {
      var change = changes[i], intact2 = [], diff = change.diff || 0;
      for (var j = 0, l2 = intact.length; j < l2; ++j) {
        var range = intact[j];
        if (change.to <= range.from && change.diff) {
          intact2.push({from: range.from + diff, to: range.to + diff});
        } else if (change.to <= range.from || change.from >= range.to) {
          intact2.push(range);
        } else {
          if (change.from > range.from)
            intact2.push({from: range.from, to: change.from});
          if (change.to < range.to)
            intact2.push({from: change.to + diff, to: range.to + diff});
        }
      }
      intact = intact2;
    }
    return intact;
  }

  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      left[cm.options.gutters[i]] = n.offsetLeft;
      width[cm.options.gutters[i]] = n.offsetWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth};
  }

  function patchDisplay(cm, from, to, intact, updateNumbersFrom) {
    var dims = getDimensions(cm);
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    if (!intact.length && (!webkit || !cm.display.currentWheelTarget))
      removeChildren(display.lineDiv);
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      if (webkit && mac && cm.display.currentWheelTarget == node) {
        node.style.display = "none";
        node.lineObj = null;
      } else {
        node.parentNode.removeChild(node);
      }
      return next;
    }

    var nextIntact = intact.shift(), lineN = from;
    cm.doc.iter(from, to, function(line) {
      if (nextIntact && nextIntact.to == lineN) nextIntact = intact.shift();
      if (lineIsHidden(cm.doc, line)) {
        if (line.height != 0) updateLineHeight(line, 0);
        if (line.widgets && cur.previousSibling) for (var i = 0; i < line.widgets.length; ++i) {
          var w = line.widgets[i];
          if (w.showIfHidden) {
            var prev = cur.previousSibling;
            if (/pre/i.test(prev.nodeName)) {
              var wrap = elt("div", null, null, "position: relative");
              prev.parentNode.replaceChild(wrap, prev);
              wrap.appendChild(prev);
              prev = wrap;
            }
            var wnode = prev.appendChild(elt("div", [w.node], "CodeMirror-linewidget"));
            if (!w.handleMouseEvents) wnode.ignoreEvents = true;
            positionLineWidget(w, wnode, prev, dims);
          }
        }
      } else if (nextIntact && nextIntact.from <= lineN && nextIntact.to > lineN) {
        // This line is intact. Skip to the actual node. Update its
        // line number if needed.
        while (cur.lineObj != line) cur = rm(cur);
        if (lineNumbers && updateNumbersFrom <= lineN && cur.lineNumber)
          setTextContent(cur.lineNumber, lineNumberFor(cm.options, lineN));
        cur = cur.nextSibling;
      } else {
        // For lines with widgets, make an attempt to find and reuse
        // the existing element, so that widgets aren't needlessly
        // removed and re-inserted into the dom
        if (line.widgets) for (var j = 0, search = cur, reuse; search && j < 20; ++j, search = search.nextSibling)
          if (search.lineObj == line && /div/i.test(search.nodeName)) { reuse = search; break; }
        // This line needs to be generated.
        var lineNode = buildLineElement(cm, line, lineN, dims, reuse);
        if (lineNode != reuse) {
          container.insertBefore(lineNode, cur);
        } else {
          while (cur != reuse) cur = rm(cur);
          cur = cur.nextSibling;
        }

        lineNode.lineObj = line;
      }
      ++lineN;
    });
    while (cur) cur = rm(cur);
  }

  function buildLineElement(cm, line, lineNo, dims, reuse) {
    var lineElement = lineContent(cm, line);
    var markers = line.gutterMarkers, display = cm.display, wrap;

    if (!cm.options.lineNumbers && !markers && !line.bgClass && !line.wrapClass && !line.widgets)
      return lineElement;

    // Lines with gutter elements, widgets or a background class need
    // to be wrapped again, and have the extra elements added to the
    // wrapper div

    if (reuse) {
      reuse.alignable = null;
      var isOk = true, widgetsSeen = 0, insertBefore = null;
      for (var n = reuse.firstChild, next; n; n = next) {
        next = n.nextSibling;
        if (!/\bCodeMirror-linewidget\b/.test(n.className)) {
          reuse.removeChild(n);
        } else {
          for (var i = 0; i < line.widgets.length; ++i) {
            var widget = line.widgets[i];
            if (widget.node == n.firstChild) {
              if (!widget.above && !insertBefore) insertBefore = n;
              positionLineWidget(widget, n, reuse, dims);
              ++widgetsSeen;
              break;
            }
          }
          if (i == line.widgets.length) { isOk = false; break; }
        }
      }
      reuse.insertBefore(lineElement, insertBefore);
      if (isOk && widgetsSeen == line.widgets.length) {
        wrap = reuse;
        reuse.className = line.wrapClass || "";
      }
    }
    if (!wrap) {
      wrap = elt("div", null, line.wrapClass, "position: relative");
      wrap.appendChild(lineElement);
    }
    // Kludge to make sure the styled element lies behind the selection (by z-index)
    if (line.bgClass)
      wrap.insertBefore(elt("div", null, line.bgClass + " CodeMirror-linebackground"), wrap.firstChild);
    if (cm.options.lineNumbers || markers) {
      var gutterWrap = wrap.insertBefore(elt("div", null, null, "position: absolute; left: " +
                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"),
                                         wrap.firstChild);
      if (cm.options.fixedGutter) (wrap.alignable || (wrap.alignable = [])).push(gutterWrap);
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        wrap.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineNo),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
              + display.lineNumInnerWidth + "px"));
      if (markers)
        for (var k = 0; k < cm.options.gutters.length; ++k) {
          var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
          if (found)
            gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
                                       dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
        }
    }
    if (ie_lt8) wrap.style.zIndex = 2;
    if (line.widgets && wrap != reuse) for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
      if (!widget.handleMouseEvents) node.ignoreEvents = true;
      positionLineWidget(widget, node, wrap, dims);
      if (widget.above)
        wrap.insertBefore(node, cm.options.lineNumbers && line.height != 0 ? gutterWrap : lineElement);
      else
        wrap.appendChild(node);
      signalLater(widget, "redraw");
    }
    return wrap;
  }

  function positionLineWidget(widget, node, wrap, dims) {
    if (widget.noHScroll) {
      (wrap.alignable || (wrap.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
    }
  }

  // SELECTION / CURSOR

  function updateSelection(cm) {
    var display = cm.display;
    var collapsed = posEq(cm.doc.sel.from, cm.doc.sel.to);
    if (collapsed || cm.options.showCursorWhenSelecting)
      updateSelectionCursor(cm);
    else
      display.cursor.style.display = display.otherCursor.style.display = "none";
    if (!collapsed)
      updateSelectionRange(cm);
    else
      display.selectionDiv.style.display = "none";

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, cm.doc.sel.head, "div");
      var wrapOff = getRect(display.wrapper), lineOff = getRect(display.lineDiv);
      display.inputDiv.style.top = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                                        headPos.top + lineOff.top - wrapOff.top)) + "px";
      display.inputDiv.style.left = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                                         headPos.left + lineOff.left - wrapOff.left)) + "px";
    }
  }

  // No selection, plain cursor
  function updateSelectionCursor(cm) {
    var display = cm.display, pos = cursorCoords(cm, cm.doc.sel.head, "div");
    display.cursor.style.left = pos.left + "px";
    display.cursor.style.top = pos.top + "px";
    display.cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
    display.cursor.style.display = "";

    if (pos.other) {
      display.otherCursor.style.display = "";
      display.otherCursor.style.left = pos.other.left + "px";
      display.otherCursor.style.top = pos.other.top + "px";
      display.otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    } else { display.otherCursor.style.display = "none"; }
  }

  // Highlight selection
  function updateSelectionRange(cm) {
    var display = cm.display, doc = cm.doc, sel = cm.doc.sel;
    var fragment = document.createDocumentFragment();
    var clientWidth = display.lineSpace.offsetWidth, pl = paddingLeft(cm.display);

    function add(left, top, width, bottom) {
      if (top < 0) top = 0;
      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
                               "px; top: " + top + "px; width: " + (width == null ? clientWidth - left : width) +
                               "px; height: " + (bottom - top) + "px"));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
      }

      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
        var leftPos = coords(from, "left"), rightPos, left, right;
        if (from == to) {
          rightPos = leftPos;
          left = right = leftPos.left;
        } else {
          rightPos = coords(to - 1, "right");
          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
          left = leftPos.left;
          right = rightPos.right;
        }
        if (fromArg == null && from == 0) left = pl;
        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
          add(left, leftPos.top, null, leftPos.bottom);
          left = pl;
          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
        }
        if (toArg == null && to == lineLen) right = clientWidth;
        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
          start = leftPos;
        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
          end = rightPos;
        if (left < pl + 1) left = pl;
        add(left, rightPos.top, right - left, rightPos.bottom);
      });
      return {start: start, end: end};
    }

    if (sel.from.line == sel.to.line) {
      drawForLine(sel.from.line, sel.from.ch, sel.to.ch);
    } else {
      var fromLine = getLine(doc, sel.from.line), toLine = getLine(doc, sel.to.line);
      var singleVLine = visualLine(doc, fromLine) == visualLine(doc, toLine);
      var leftEnd = drawForLine(sel.from.line, sel.from.ch, singleVLine ? fromLine.text.length : null).end;
      var rightStart = drawForLine(sel.to.line, singleVLine ? 0 : null, sel.to.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(pl, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        add(pl, leftEnd.bottom, null, rightStart.top);
    }

    removeChildrenAndAdd(display.selectionDiv, fragment);
    display.selectionDiv.style.display = "";
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) return;
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursor.style.visibility = display.otherCursor.style.visibility = "";
    display.blinker = setInterval(function() {
      display.cursor.style.visibility = display.otherCursor.style.visibility = (on = !on) ? "" : "hidden";
    }, cm.options.cursorBlinkRate);
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.showingTo)
      cm.state.highlight.set(time, bind(highlightWorker, cm));
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.frontier < doc.first) doc.frontier = doc.first;
    if (doc.frontier >= cm.display.showingTo) return;
    var end = +new Date + cm.options.workTime;
    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
    var changed = [], prevChange;
    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.showingTo + 500), function(line) {
      if (doc.frontier >= cm.display.showingFrom) { // Visible
        var oldStyles = line.styles;
        line.styles = highlightLine(cm, line, state);
        var ischange = !oldStyles || oldStyles.length != line.styles.length;
        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
        if (ischange) {
          if (prevChange && prevChange.end == doc.frontier) prevChange.end++;
          else changed.push(prevChange = {start: doc.frontier, end: doc.frontier + 1});
        }
        line.stateAfter = copyState(doc.mode, state);
      } else {
        processLine(cm, line, state);
        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
      }
      ++doc.frontier;
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true;
      }
    });
    if (changed.length)
      operation(cm, function() {
        for (var i = 0; i < changed.length; ++i)
          regChange(this, changed[i].start, changed[i].end);
      })();
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    for (var search = n, lim = n - 100; search > lim; --search) {
      if (search <= doc.first) return doc.first;
      var line = getLine(doc, search - 1);
      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline;
  }

  function getStateBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
      if (!doc.mode.startState) return true;
    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
    if (!state) state = startState(doc.mode);
    else state = copyState(doc.mode, state);
    doc.iter(pos, n, function(line) {
      processLine(cm, line, state);
      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.showingFrom && pos < display.showingTo;
      line.stateAfter = save ? copyState(doc.mode, state) : null;
      ++pos;
    });
    return state;
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop;}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
  function paddingLeft(display) {
    var e = removeChildrenAndAdd(display.measure, elt("pre", null, null, "text-align: left")).appendChild(elt("span", "x"));
    return e.offsetLeft;
  }

  function measureChar(cm, line, ch, data, bias) {
    var dir = -1;
    data = data || measureLine(cm, line);

    for (var pos = ch;; pos += dir) {
      var r = data[pos];
      if (r) break;
      if (dir < 0 && pos == 0) dir = 1;
    }
    bias = pos > ch ? "left" : pos < ch ? "right" : bias;
    if (bias == "left" && r.leftSide) r = r.leftSide;
    else if (bias == "right" && r.rightSide) r = r.rightSide;
    return {left: pos < ch ? r.right : r.left,
            right: pos > ch ? r.left : r.right,
            top: r.top,
            bottom: r.bottom};
  }

  function findCachedMeasurement(cm, line) {
    var cache = cm.display.measureLineCache;
    for (var i = 0; i < cache.length; ++i) {
      var memo = cache[i];
      if (memo.text == line.text && memo.markedSpans == line.markedSpans &&
          cm.display.scroller.clientWidth == memo.width &&
          memo.classes == line.textClass + "|" + line.bgClass + "|" + line.wrapClass)
        return memo;
    }
  }

  function clearCachedMeasurement(cm, line) {
    var exists = findCachedMeasurement(cm, line);
    if (exists) exists.text = exists.measure = exists.markedSpans = null;
  }

  function measureLine(cm, line) {
    // First look in the cache
    var cached = findCachedMeasurement(cm, line);
    if (cached) return cached.measure;

    // Failing that, recompute and store result in cache
    var measure = measureLineInner(cm, line);
    var cache = cm.display.measureLineCache;
    var memo = {text: line.text, width: cm.display.scroller.clientWidth,
                markedSpans: line.markedSpans, measure: measure,
                classes: line.textClass + "|" + line.bgClass + "|" + line.wrapClass};
    if (cache.length == 16) cache[++cm.display.measureLineCachePos % 16] = memo;
    else cache.push(memo);
    return measure;
  }

  function measureLineInner(cm, line) {
    var display = cm.display, measure = emptyArray(line.text.length);
    var pre = lineContent(cm, line, measure, true);

    // IE does not cache element positions of inline elements between
    // calls to getBoundingClientRect. This makes the loop below,
    // which gathers the positions of all the characters on the line,
    // do an amount of layout work quadratic to the number of
    // characters. When line wrapping is off, we try to improve things
    // by first subdividing the line into a bunch of inline blocks, so
    // that IE can reuse most of the layout information from caches
    // for those blocks. This does interfere with line wrapping, so it
    // doesn't work when wrapping is on, but in that case the
    // situation is slightly better, since IE does cache line-wrapping
    // information and only recomputes per-line.
    if (ie && !ie_lt8 && !cm.options.lineWrapping && pre.childNodes.length > 100) {
      var fragment = document.createDocumentFragment();
      var chunk = 10, n = pre.childNodes.length;
      for (var i = 0, chunks = Math.ceil(n / chunk); i < chunks; ++i) {
        var wrap = elt("div", null, null, "display: inline-block");
        for (var j = 0; j < chunk && n; ++j) {
          wrap.appendChild(pre.firstChild);
          --n;
        }
        fragment.appendChild(wrap);
      }
      pre.appendChild(fragment);
    }

    removeChildrenAndAdd(display.measure, pre);

    var outer = getRect(display.lineDiv);
    var vranges = [], data = emptyArray(line.text.length), maxBot = pre.offsetHeight;
    // Work around an IE7/8 bug where it will sometimes have randomly
    // replaced our pre with a clone at this point.
    if (ie_lt9 && display.measure.first != pre)
      removeChildrenAndAdd(display.measure, pre);

    function measureRect(rect) {
      var top = rect.top - outer.top, bot = rect.bottom - outer.top;
      if (bot > maxBot) bot = maxBot;
      if (top < 0) top = 0;
      for (var i = vranges.length - 2; i >= 0; i -= 2) {
        var rtop = vranges[i], rbot = vranges[i+1];
        if (rtop > bot || rbot < top) continue;
        if (rtop <= top && rbot >= bot ||
            top <= rtop && bot >= rbot ||
            Math.min(bot, rbot) - Math.max(top, rtop) >= (bot - top) >> 1) {
          vranges[i] = Math.min(top, rtop);
          vranges[i+1] = Math.max(bot, rbot);
          break;
        }
      }
      if (i < 0) { i = vranges.length; vranges.push(top, bot); }
      return {left: rect.left - outer.left,
              right: rect.right - outer.left,
              top: i, bottom: null};
    }
    function finishRect(rect) {
      rect.bottom = vranges[rect.top+1];
      rect.top = vranges[rect.top];
    }

    for (var i = 0, cur; i < measure.length; ++i) if (cur = measure[i]) {
      var node = cur, rect = null;
      // A widget might wrap, needs special care
      if (/\bCodeMirror-widget\b/.test(cur.className) && cur.getClientRects) {
        if (cur.firstChild.nodeType == 1) node = cur.firstChild;
        var rects = node.getClientRects();
        if (rects.length > 1) {
          rect = data[i] = measureRect(rects[0]);
          rect.rightSide = measureRect(rects[rects.length - 1]);
        }
      }
      if (!rect) rect = data[i] = measureRect(getRect(node));
      if (cur.measureRight) rect.right = getRect(cur.measureRight).left;
      if (cur.leftSide) rect.leftSide = measureRect(getRect(cur.leftSide));
    }
    for (var i = 0, cur; i < data.length; ++i) if (cur = data[i]) {
      finishRect(cur);
      if (cur.leftSide) finishRect(cur.leftSide);
      if (cur.rightSide) finishRect(cur.rightSide);
    }
    return data;
  }

  function measureLineWidth(cm, line) {
    var hasBadSpan = false;
    if (line.markedSpans) for (var i = 0; i < line.markedSpans; ++i) {
      var sp = line.markedSpans[i];
      if (sp.collapsed && (sp.to == null || sp.to == line.text.length)) hasBadSpan = true;
    }
    var cached = !hasBadSpan && findCachedMeasurement(cm, line);
    if (cached) return measureChar(cm, line, line.text.length, cached.measure, "right").right;

    var pre = lineContent(cm, line, null, true);
    var end = pre.appendChild(zeroWidthElement(cm.display.measure));
    removeChildrenAndAdd(cm.display.measure, pre);
    return getRect(end).right - getRect(cm.display.lineDiv).left;
  }

  function clearCaches(cm) {
    cm.display.measureLineCache.length = cm.display.measureLineCachePos = 0;
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = null;
    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
    cm.display.lineNumChars = null;
  }

  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

  // Context is one of "line", "div" (display.lineDiv), "local"/null (editor), or "page"
  function intoCoordSystem(cm, lineObj, rect, context) {
    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
      var size = widgetHeight(lineObj.widgets[i]);
      rect.top += size; rect.bottom += size;
    }
    if (context == "line") return rect;
    if (!context) context = "local";
    var yOff = heightAtLine(cm, lineObj);
    if (context == "local") yOff += paddingTop(cm.display);
    else yOff -= cm.display.viewOffset;
    if (context == "page" || context == "window") {
      var lOff = getRect(cm.display.lineSpace);
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect;
  }

  // Context may be "window", "page", "div", or "local"/null
  // Result is in "div" coords
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") return coords;
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = getRect(cm.display.sizer);
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = getRect(cm.display.lineSpace);
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, null, bias), context);
  }

  function cursorCoords(cm, pos, context, lineObj, measurement) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!measurement) measurement = measureLine(cm, lineObj);
    function get(ch, right) {
      var m = measureChar(cm, lineObj, ch, measurement, right ? "right" : "left");
      if (right) m.left = m.right; else m.right = m.left;
      return intoCoordSystem(cm, lineObj, m, context);
    }
    function getBidi(ch, partPos) {
      var part = order[partPos], right = part.level % 2;
      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
        part = order[--partPos];
        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
        right = true;
      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
        part = order[++partPos];
        ch = bidiLeft(part) - part.level % 2;
        right = false;
      }
      if (right && ch == part.to && ch > part.from) return get(ch - 1);
      return get(ch, right);
    }
    var order = getOrder(lineObj), ch = pos.ch;
    if (!order) return get(ch);
    var partPos = getBidiPartAt(order, ch);
    var val = getBidi(ch, partPos);
    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
    return val;
  }

  function PosWithInfo(line, ch, outside, xRel) {
    var pos = new Pos(line, ch);
    pos.xRel = xRel;
    if (outside) pos.outside = true;
    return pos;
  }

  // Coords must be lineSpace-local
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
    var lineNo = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineNo > last)
      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
    if (x < 0) x = 0;

    for (;;) {
      var lineObj = getLine(doc, lineNo);
      var found = coordsCharInner(cm, lineObj, lineNo, x, y);
      var merged = collapsedSpanAtEnd(lineObj);
      var mergedPos = merged && merged.find();
      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
        lineNo = mergedPos.to.line;
      else
        return found;
    }
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    var innerOff = y - heightAtLine(cm, lineObj);
    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
    var measurement = measureLine(cm, lineObj);

    function getX(ch) {
      var sp = cursorCoords(cm, Pos(lineNo, ch), "line",
                            lineObj, measurement);
      wrongLine = true;
      if (innerOff > sp.bottom) return sp.left - adjust;
      else if (innerOff < sp.top) return sp.left + adjust;
      else wrongLine = false;
      return sp.left;
    }

    var bidi = getOrder(lineObj), dist = lineObj.text.length;
    var from = lineLeft(lineObj), to = lineRight(lineObj);
    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
    // Do a binary search between these bounds.
    for (;;) {
      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
        var ch = x < fromX || x - fromX <= toX - x ? from : to;
        var xDiff = x - (ch == from ? fromX : toX);
        while (isExtendingChar.test(lineObj.text.charAt(ch))) ++ch;
        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
                              xDiff < 0 ? -1 : xDiff ? 1 : 0);
        return pos;
      }
      var step = Math.ceil(dist / 2), middle = from + step;
      if (bidi) {
        middle = from;
        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
      }
      var middleX = getX(middle);
      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
    }
  }

  var measureText;
  function textHeight(display) {
    if (display.cachedTextHeight != null) return display.cachedTextHeight;
    if (measureText == null) {
      measureText = elt("pre");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) display.cachedTextHeight = height;
    removeChildren(display.measure);
    return height || 1;
  }

  function charWidth(display) {
    if (display.cachedCharWidth != null) return display.cachedCharWidth;
    var anchor = elt("span", "x");
    var pre = elt("pre", [anchor]);
    removeChildrenAndAdd(display.measure, pre);
    var width = anchor.offsetWidth;
    if (width > 2) display.cachedCharWidth = width;
    return width || 10;
  }

  // OPERATIONS

  // Operations are used to wrap changes in such a way that each
  // change won't have to update the cursor and display (which would
  // be awkward, slow, and error-prone), but instead updates are
  // batched and then all combined and executed at once.

  var nextOpId = 0;
  function startOperation(cm) {
    cm.curOp = {
      // An array of ranges of lines that have to be updated. See
      // updateDisplay.
      changes: [],
      forceUpdate: false,
      updateInput: null,
      userSelChange: null,
      textChanged: null,
      selectionChanged: false,
      cursorActivity: false,
      updateMaxLine: false,
      updateScrollPos: false,
      id: ++nextOpId
    };
    if (!delayedCallbackDepth++) delayedCallbacks = [];
  }

  function endOperation(cm) {
    var op = cm.curOp, doc = cm.doc, display = cm.display;
    cm.curOp = null;

    if (op.updateMaxLine) computeMaxLength(cm);
    if (display.maxLineChanged && !cm.options.lineWrapping && display.maxLine) {
      var width = measureLineWidth(cm, display.maxLine);
      display.sizer.style.minWidth = Math.max(0, width + 3 + scrollerCutOff) + "px";
      display.maxLineChanged = false;
      var maxScrollLeft = Math.max(0, display.sizer.offsetLeft + display.sizer.offsetWidth - display.scroller.clientWidth);
      if (maxScrollLeft < doc.scrollLeft && !op.updateScrollPos)
        setScrollLeft(cm, Math.min(display.scroller.scrollLeft, maxScrollLeft), true);
    }
    var newScrollPos, updated;
    if (op.updateScrollPos) {
      newScrollPos = op.updateScrollPos;
    } else if (op.selectionChanged && display.scroller.clientHeight) { // don't rescroll if not visible
      var coords = cursorCoords(cm, doc.sel.head);
      newScrollPos = calculateScrollPos(cm, coords.left, coords.top, coords.left, coords.bottom);
    }
    if (op.changes.length || op.forceUpdate || newScrollPos && newScrollPos.scrollTop != null) {
      updated = updateDisplay(cm, op.changes, newScrollPos && newScrollPos.scrollTop, op.forceUpdate);
      if (cm.display.scroller.offsetHeight) cm.doc.scrollTop = cm.display.scroller.scrollTop;
    }
    if (!updated && op.selectionChanged) updateSelection(cm);
    if (op.updateScrollPos) {
      display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = newScrollPos.scrollTop;
      display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = newScrollPos.scrollLeft;
      alignHorizontally(cm);
      if (op.scrollToPos)
        scrollPosIntoView(cm, clipPos(cm.doc, op.scrollToPos), op.scrollToPosMargin);
    } else if (newScrollPos) {
      scrollCursorIntoView(cm);
    }
    if (op.selectionChanged) restartBlink(cm);

    if (cm.state.focused && op.updateInput)
      resetInput(cm, op.userSelChange);

    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) for (var i = 0; i < hidden.length; ++i)
      if (!hidden[i].lines.length) signal(hidden[i], "hide");
    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

    var delayed;
    if (!--delayedCallbackDepth) {
      delayed = delayedCallbacks;
      delayedCallbacks = null;
    }
    if (op.textChanged)
      signal(cm, "change", cm, op.textChanged);
    if (op.cursorActivity) signal(cm, "cursorActivity", cm);
    if (delayed) for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm1, f) {
    return function() {
      var cm = cm1 || this, withOp = !cm.curOp;
      if (withOp) startOperation(cm);
      try { var result = f.apply(cm, arguments); }
      finally { if (withOp) endOperation(cm); }
      return result;
    };
  }
  function docOperation(f) {
    return function() {
      var withOp = this.cm && !this.cm.curOp, result;
      if (withOp) startOperation(this.cm);
      try { result = f.apply(this, arguments); }
      finally { if (withOp) endOperation(this.cm); }
      return result;
    };
  }
  function runInOp(cm, f) {
    var withOp = !cm.curOp, result;
    if (withOp) startOperation(cm);
    try { result = f(); }
    finally { if (withOp) endOperation(cm); }
    return result;
  }

  function regChange(cm, from, to, lendiff) {
    if (from == null) from = cm.doc.first;
    if (to == null) to = cm.doc.first + cm.doc.size;
    cm.curOp.changes.push({from: from, to: to, diff: lendiff});
  }

  // INPUT HANDLING

  function slowPoll(cm) {
    if (cm.display.pollingFast) return;
    cm.display.poll.set(cm.options.pollInterval, function() {
      readInput(cm);
      if (cm.state.focused) slowPoll(cm);
    });
  }

  function fastPoll(cm) {
    var missed = false;
    cm.display.pollingFast = true;
    function p() {
      var changed = readInput(cm);
      if (!changed && !missed) {missed = true; cm.display.poll.set(60, p);}
      else {cm.display.pollingFast = false; slowPoll(cm);}
    }
    cm.display.poll.set(20, p);
  }

  // prevInput is a hack to work with IME. If we reset the textarea
  // on every change, that breaks IME. So we look for changes
  // compared to the previous content instead. (Modern browsers have
  // events that indicate IME taking place, but these are not widely
  // supported or compatible enough yet to rely on.)
  function readInput(cm) {
    var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc, sel = doc.sel;
    if (!cm.state.focused || hasSelection(input) || isReadOnly(cm) || cm.state.disableInput) return false;
    var text = input.value;
    if (text == prevInput && posEq(sel.from, sel.to)) return false;
    if (ie && !ie_lt9 && cm.display.inputHasSelection === text) {
      resetInput(cm, true);
      return false;
    }

    var withOp = !cm.curOp;
    if (withOp) startOperation(cm);
    sel.shift = false;
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
    var from = sel.from, to = sel.to;
    if (same < prevInput.length)
      from = Pos(from.line, from.ch - (prevInput.length - same));
    else if (cm.state.overwrite && posEq(from, to) && !cm.state.pasteIncoming)
      to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + (text.length - same)));

    var updateInput = cm.curOp.updateInput;
    var changeEvent = {from: from, to: to, text: splitLines(text.slice(same)),
                       origin: cm.state.pasteIncoming ? "paste" : "+input"};
    makeChange(cm.doc, changeEvent, "end");
    cm.curOp.updateInput = updateInput;
    signalLater(cm, "inputRead", cm, changeEvent);

    if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
    else cm.display.prevInput = text;
    if (withOp) endOperation(cm);
    cm.state.pasteIncoming = false;
    return true;
  }

  function resetInput(cm, user) {
    var minimal, selected, doc = cm.doc;
    if (!posEq(doc.sel.from, doc.sel.to)) {
      cm.display.prevInput = "";
      minimal = hasCopyEvent &&
        (doc.sel.to.line - doc.sel.from.line > 100 || (selected = cm.getSelection()).length > 1000);
      var content = minimal ? "-" : selected || cm.getSelection();
      cm.display.input.value = content;
      if (cm.state.focused) selectInput(cm.display.input);
      if (ie && !ie_lt9) cm.display.inputHasSelection = content;
    } else if (user) {
      cm.display.prevInput = cm.display.input.value = "";
      if (ie && !ie_lt9) cm.display.inputHasSelection = null;
    }
    cm.display.inaccurateSelection = minimal;
  }

  function focusInput(cm) {
    if (cm.options.readOnly != "nocursor" && (!mobile || document.activeElement != cm.display.input))
      cm.display.input.focus();
  }

  function isReadOnly(cm) {
    return cm.options.readOnly || cm.doc.cantEdit;
  }

  // EVENT HANDLERS

  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    if (ie)
      on(d.scroller, "dblclick", operation(cm, function(e) {
        if (signalDOMEvent(cm, e)) return;
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
        e_preventDefault(e);
        var word = findWordAt(getLine(cm.doc, pos.line).text, pos);
        extendSelection(cm.doc, word.from, word.to);
      }));
    else
      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
    on(d.lineSpace, "selectstart", function(e) {
      if (!eventInWidget(d, e)) e_preventDefault(e);
    });
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!captureMiddleClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

    on(d.scroller, "scroll", function() {
      if (d.scroller.clientHeight) {
        setScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });
    on(d.scrollbarV, "scroll", function() {
      if (d.scroller.clientHeight) setScrollTop(cm, d.scrollbarV.scrollTop);
    });
    on(d.scrollbarH, "scroll", function() {
      if (d.scroller.clientHeight) setScrollLeft(cm, d.scrollbarH.scrollLeft);
    });

    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

    function reFocus() { if (cm.state.focused) setTimeout(bind(focusInput, cm), 0); }
    on(d.scrollbarH, "mousedown", reFocus);
    on(d.scrollbarV, "mousedown", reFocus);
    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    var resizeTimer;
    function onResize() {
      if (resizeTimer == null) resizeTimer = setTimeout(function() {
        resizeTimer = null;
        // Might be a text scaling operation, clear size caches.
        d.cachedCharWidth = d.cachedTextHeight = knownScrollbarWidth = null;
        clearCaches(cm);
        runInOp(cm, bind(regChange, cm));
      }, 100);
    }
    on(window, "resize", onResize);
    // Above handler holds on to the editor and its data structures.
    // Here we poll to unregister it when the editor is no longer in
    // the document, so that it can be garbage-collected.
    function unregister() {
      for (var p = d.wrapper.parentNode; p && p != document.body; p = p.parentNode) {}
      if (p) setTimeout(unregister, 5000);
      else off(window, "resize", onResize);
    }
    setTimeout(unregister, 5000);

    on(d.input, "keyup", operation(cm, function(e) {
      if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
      if (e.keyCode == 16) cm.doc.sel.shift = false;
    }));
    on(d.input, "input", bind(fastPoll, cm));
    on(d.input, "keydown", operation(cm, onKeyDown));
    on(d.input, "keypress", operation(cm, onKeyPress));
    on(d.input, "focus", bind(onFocus, cm));
    on(d.input, "blur", bind(onBlur, cm));

    function drag_(e) {
      if (signalDOMEvent(cm, e) || cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))) return;
      e_stop(e);
    }
    if (cm.options.dragDrop) {
      on(d.scroller, "dragstart", function(e){onDragStart(cm, e);});
      on(d.scroller, "dragenter", drag_);
      on(d.scroller, "dragover", drag_);
      on(d.scroller, "drop", operation(cm, onDrop));
    }
    on(d.scroller, "paste", function(e){
      if (eventInWidget(d, e)) return;
      focusInput(cm);
      fastPoll(cm);
    });
    on(d.input, "paste", function() {
      cm.state.pasteIncoming = true;
      fastPoll(cm);
    });

    function prepareCopy() {
      if (d.inaccurateSelection) {
        d.prevInput = "";
        d.inaccurateSelection = false;
        d.input.value = cm.getSelection();
        selectInput(d.input);
      }
    }
    on(d.input, "cut", prepareCopy);
    on(d.input, "copy", prepareCopy);

    // Needed to handle Tab key in KHTML
    if (khtml) on(d.sizer, "mouseup", function() {
        if (document.activeElement == d.input) d.input.blur();
        focusInput(cm);
    });
  }

  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return true;
    }
  }

  function posFromMouse(cm, e, liberal) {
    var display = cm.display;
    if (!liberal) {
      var target = e_target(e);
      if (target == display.scrollbarH || target == display.scrollbarH.firstChild ||
          target == display.scrollbarV || target == display.scrollbarV.firstChild ||
          target == display.scrollbarFiller || target == display.gutterFiller) return null;
    }
    var x, y, space = getRect(display.lineSpace);
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX; y = e.clientY; } catch (e) { return null; }
    return coordsChar(cm, x - space.left, y - space.top);
  }

  var lastClick, lastDoubleClick;
  function onMouseDown(e) {
    if (signalDOMEvent(this, e)) return;
    var cm = this, display = cm.display, doc = cm.doc, sel = doc.sel;
    sel.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        display.scroller.draggable = false;
        setTimeout(function(){display.scroller.draggable = true;}, 100);
      }
      return;
    }
    if (clickInGutter(cm, e)) return;
    var start = posFromMouse(cm, e);

    switch (e_button(e)) {
    case 3:
      if (captureMiddleClick) onContextMenu.call(cm, cm, e);
      return;
    case 2:
      if (start) extendSelection(cm.doc, start);
      setTimeout(bind(focusInput, cm), 20);
      e_preventDefault(e);
      return;
    }
    // For button 1, if it was clicked inside the editor
    // (posFromMouse returning non-null), we have to adjust the
    // selection.
    if (!start) {if (e_target(e) == display.scroller) e_preventDefault(e); return;}

    if (!cm.state.focused) onFocus(cm);

    var now = +new Date, type = "single";
    if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
      type = "triple";
      e_preventDefault(e);
      setTimeout(bind(focusInput, cm), 20);
      selectLine(cm, start.line);
    } else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
      type = "double";
      lastDoubleClick = {time: now, pos: start};
      e_preventDefault(e);
      var word = findWordAt(getLine(doc, start.line).text, start);
      extendSelection(cm.doc, word.from, word.to);
    } else { lastClick = {time: now, pos: start}; }

    var last = start;
    if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) && !posEq(sel.from, sel.to) &&
        !posLess(start, sel.from) && !posLess(sel.to, start) && type == "single") {
      var dragEnd = operation(cm, function(e2) {
        if (webkit) display.scroller.draggable = false;
        cm.state.draggingText = false;
        off(document, "mouseup", dragEnd);
        off(display.scroller, "drop", dragEnd);
        if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
          e_preventDefault(e2);
          extendSelection(cm.doc, start);
          focusInput(cm);
        }
      });
      // Let the drag handler handle this.
      if (webkit) display.scroller.draggable = true;
      cm.state.draggingText = dragEnd;
      // IE's approach to draggable
      if (display.scroller.dragDrop) display.scroller.dragDrop();
      on(document, "mouseup", dragEnd);
      on(display.scroller, "drop", dragEnd);
      return;
    }
    e_preventDefault(e);
    if (type == "single") extendSelection(cm.doc, clipPos(doc, start));

    var startstart = sel.from, startend = sel.to, lastPos = start;

    function doSelect(cur) {
      if (posEq(lastPos, cur)) return;
      lastPos = cur;

      if (type == "single") {
        extendSelection(cm.doc, clipPos(doc, start), cur);
        return;
      }

      startstart = clipPos(doc, startstart);
      startend = clipPos(doc, startend);
      if (type == "double") {
        var word = findWordAt(getLine(doc, cur.line).text, cur);
        if (posLess(cur, startstart)) extendSelection(cm.doc, word.from, startend);
        else extendSelection(cm.doc, startstart, word.to);
      } else if (type == "triple") {
        if (posLess(cur, startstart)) extendSelection(cm.doc, startend, clipPos(doc, Pos(cur.line, 0)));
        else extendSelection(cm.doc, startstart, clipPos(doc, Pos(cur.line + 1, 0)));
      }
    }

    var editorSize = getRect(display.wrapper);
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true);
      if (!cur) return;
      if (!posEq(cur, last)) {
        if (!cm.state.focused) onFocus(cm);
        last = cur;
        doSelect(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) setTimeout(operation(cm, function() {
          if (counter != curCount) return;
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50);
      }
    }

    function done(e) {
      counter = Infinity;
      e_preventDefault(e);
      focusInput(cm);
      off(document, "mousemove", move);
      off(document, "mouseup", up);
    }

    var move = operation(cm, function(e) {
      if (!ie && !e_button(e)) done(e);
      else extend(e);
    });
    var up = operation(cm, done);
    on(document, "mousemove", move);
    on(document, "mouseup", up);
  }

  function clickInGutter(cm, e) {
    var display = cm.display;
    try { var mX = e.clientX, mY = e.clientY; }
    catch(e) { return false; }

    if (mX >= Math.floor(getRect(display.gutters).right)) return false;
    e_preventDefault(e);
    if (!hasHandler(cm, "gutterClick")) return true;

    var lineBox = getRect(display.lineDiv);
    if (mY > lineBox.bottom) return true;
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.options.gutters.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && getRect(g).right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.options.gutters[i];
        signalLater(cm, "gutterClick", cm, line, gutter, e);
        break;
      }
    }
    return true;
  }

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e) || (cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))))
      return;
    e_preventDefault(e);
    if (ie) lastDrop = +new Date;
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || isReadOnly(cm)) return;
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var loadFile = function(file, i) {
        var reader = new FileReader;
        reader.onload = function() {
          text[i] = reader.result;
          if (++read == n) {
            pos = clipPos(cm.doc, pos);
            makeChange(cm.doc, {from: pos, to: pos, text: splitLines(text.join("\n")), origin: "paste"}, "around");
          }
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < n; ++i) loadFile(files[i], i);
    } else {
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && !(posLess(pos, cm.doc.sel.from) || posLess(cm.doc.sel.to, pos))) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(bind(focusInput, cm), 20);
        return;
      }
      try {
        var text = e.dataTransfer.getData("Text");
        if (text) {
          var curFrom = cm.doc.sel.from, curTo = cm.doc.sel.to;
          setSelection(cm.doc, pos, pos);
          if (cm.state.draggingText) replaceRange(cm.doc, "", curFrom, curTo, "paste");
          cm.replaceSelection(text, null, "paste");
          focusInput(cm);
          onFocus(cm);
        }
      }
      catch(e){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

    var txt = cm.getSelection();
    e.dataTransfer.setData("Text", txt);

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      if (opera) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (opera) img.parentNode.removeChild(img);
    }
  }

  function setScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
    cm.doc.scrollTop = val;
    if (!gecko) updateDisplay(cm, [], val);
    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
    if (cm.display.scrollbarV.scrollTop != val) cm.display.scrollbarV.scrollTop = val;
    if (gecko) updateDisplay(cm, []);
    startWorker(cm, 100);
  }
  function setScrollLeft(cm, val, isScroller) {
    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
    if (cm.display.scrollbarH.scrollLeft != val) cm.display.scrollbarH.scrollLeft = val;
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) wheelPixelsPerUnit = -.53;
  else if (gecko) wheelPixelsPerUnit = 15;
  else if (chrome) wheelPixelsPerUnit = -.7;
  else if (safari) wheelPixelsPerUnit = -1/3;

  function onScrollWheel(cm, e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
    else if (dy == null) dy = e.wheelDelta;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
          dy && scroll.scrollHeight > scroll.clientHeight)) return;

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      for (var cur = e.target; cur != scroll; cur = cur.parentNode) {
        if (cur.lineObj) {
          cm.display.currentWheelTarget = cur;
          break;
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !opera && wheelPixelsPerUnit != null) {
      if (dy)
        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
      e_preventDefault(e);
      display.wheelStartX = null; // Abort measurement, if in progress
      return;
    }

    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) top = Math.max(0, top + pixels - 50);
      else bot = Math.min(cm.doc.height, bot + pixels + 50);
      updateDisplay(cm, [], {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function() {
          if (display.wheelStartX == null) return;
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) return;
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) return false;
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
    var doc = cm.doc, prevShift = doc.sel.shift, done = false;
    try {
      if (isReadOnly(cm)) cm.state.suppressEdits = true;
      if (dropShift) doc.sel.shift = false;
      done = bound(cm) != Pass;
    } finally {
      doc.sel.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done;
  }

  function allKeyMaps(cm) {
    var maps = cm.state.keyMaps.slice(0);
    if (cm.options.extraKeys) maps.push(cm.options.extraKeys);
    maps.push(cm.options.keyMap);
    return maps;
  }

  var maybeTransition;
  function handleKeyBinding(cm, e) {
    // Handle auto keymap transitions
    var startMap = getKeyMap(cm.options.keyMap), next = startMap.auto;
    clearTimeout(maybeTransition);
    if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
      if (getKeyMap(cm.options.keyMap) == startMap) {
        cm.options.keyMap = (next.call ? next.call(null, cm) : next);
        keyMapChanged(cm);
      }
    }, 50);

    var name = keyName(e, true), handled = false;
    if (!name) return false;
    var keymaps = allKeyMaps(cm);

    if (e.shiftKey) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      handled = lookupKey("Shift-" + name, keymaps, function(b) {return doHandleBinding(cm, b, true);})
             || lookupKey(name, keymaps, function(b) {
                  if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                    return doHandleBinding(cm, b);
                });
    } else {
      handled = lookupKey(name, keymaps, function(b) { return doHandleBinding(cm, b); });
    }

    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      if (ie_lt9) { e.oldKeyCode = e.keyCode; e.keyCode = 0; }
      signalLater(cm, "keyHandled", cm, name, e);
    }
    return handled;
  }

  function handleCharBinding(cm, e, ch) {
    var handled = lookupKey("'" + ch + "'", allKeyMaps(cm),
                            function(b) { return doHandleBinding(cm, b, true); });
    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      signalLater(cm, "keyHandled", cm, "'" + ch + "'", e);
    }
    return handled;
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (!cm.state.focused) onFocus(cm);
    if (ie && e.keyCode == 27) { e.returnValue = false; }
    if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
    var code = e.keyCode;
    // IE does strange things with escape.
    cm.doc.sel.shift = code == 16 || e.shiftKey;
    // First give onKeyEvent option a chance to handle this.
    var handled = handleKeyBinding(cm, e);
    if (opera) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        cm.replaceSelection("");
    }
  }

  function onKeyPress(e) {
    var cm = this;
    if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
    var keyCode = e.keyCode, charCode = e.charCode;
    if (opera && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
    if (((opera && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    if (this.options.electricChars && this.doc.mode.electricChars &&
        this.options.smartIndent && !isReadOnly(this) &&
        this.doc.mode.electricChars.indexOf(ch) > -1)
      setTimeout(operation(cm, function() {indentLine(cm, cm.doc.sel.to.line, "smart");}), 75);
    if (handleCharBinding(cm, e, ch)) return;
    if (ie && !ie_lt9) cm.display.inputHasSelection = null;
    fastPoll(cm);
  }

  function onFocus(cm) {
    if (cm.options.readOnly == "nocursor") return;
    if (!cm.state.focused) {
      signal(cm, "focus", cm);
      cm.state.focused = true;
      if (cm.display.wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
        cm.display.wrapper.className += " CodeMirror-focused";
      resetInput(cm, true);
    }
    slowPoll(cm);
    restartBlink(cm);
  }
  function onBlur(cm) {
    if (cm.state.focused) {
      signal(cm, "blur", cm);
      cm.state.focused = false;
      cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-focused", "");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function() {if (!cm.state.focused) cm.doc.sel.shift = false;}, 150);
  }

  var detectingSelectAll;
  function onContextMenu(cm, e) {
    if (signalDOMEvent(cm, e, "contextmenu")) return;
    var display = cm.display, sel = cm.doc.sel;
    if (eventInWidget(display, e)) return;

    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || opera) return; // Opera is difficult.
    if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
      operation(cm, setSelection)(cm.doc, pos, pos);

    var oldCSS = display.input.style.cssText;
    display.inputDiv.style.position = "absolute";
    display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
      "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" +
      "border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);";
    focusInput(cm);
    resetInput(cm, true);
    // Adds "Select all" to context menu in FF
    if (posEq(sel.from, sel.to)) display.input.value = display.prevInput = " ";

    function prepareSelectAllHack() {
      if (display.input.selectionStart != null) {
        var extval = display.input.value = " " + (posEq(sel.from, sel.to) ? "" : display.input.value);
        display.prevInput = " ";
        display.input.selectionStart = 1; display.input.selectionEnd = extval.length;
      }
    }
    function rehide() {
      display.inputDiv.style.position = "relative";
      display.input.style.cssText = oldCSS;
      if (ie_lt9) display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos;
      slowPoll(cm);

      // Try to detect the user choosing select-all
      if (display.input.selectionStart != null) {
        if (!ie || ie_lt9) prepareSelectAllHack();
        clearTimeout(detectingSelectAll);
        var i = 0, poll = function(){
          if (display.prevInput == " " && display.input.selectionStart == 0)
            operation(cm, commands.selectAll)(cm);
          else if (i++ < 10) detectingSelectAll = setTimeout(poll, 500);
          else resetInput(cm);
        };
        detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && !ie_lt9) prepareSelectAllHack();
    if (captureMiddleClick) {
      e_stop(e);
      var mouseup = function() {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  }

  // UPDATING

  var changeEnd = CodeMirror.changeEnd = function(change) {
    if (!change.text) return change.to;
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
  };

  // Make sure a position will be valid after the given change.
  function clipPostChange(doc, change, pos) {
    if (!posLess(change.from, pos)) return clipPos(doc, pos);
    var diff = (change.text.length - 1) - (change.to.line - change.from.line);
    if (pos.line > change.to.line + diff) {
      var preLine = pos.line - diff, lastLine = doc.first + doc.size - 1;
      if (preLine > lastLine) return Pos(lastLine, getLine(doc, lastLine).text.length);
      return clipToLen(pos, getLine(doc, preLine).text.length);
    }
    if (pos.line == change.to.line + diff)
      return clipToLen(pos, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0) +
                       getLine(doc, change.to.line).text.length - change.to.ch);
    var inside = pos.line - change.from.line;
    return clipToLen(pos, change.text[inside].length + (inside ? 0 : change.from.ch));
  }

  // Hint can be null|"end"|"start"|"around"|{anchor,head}
  function computeSelAfterChange(doc, change, hint) {
    if (hint && typeof hint == "object") // Assumed to be {anchor, head} object
      return {anchor: clipPostChange(doc, change, hint.anchor),
              head: clipPostChange(doc, change, hint.head)};

    if (hint == "start") return {anchor: change.from, head: change.from};

    var end = changeEnd(change);
    if (hint == "around") return {anchor: change.from, head: end};
    if (hint == "end") return {anchor: end, head: end};

    // hint is null, leave the selection alone as much as possible
    var adjustPos = function(pos) {
      if (posLess(pos, change.from)) return pos;
      if (!posLess(change.to, pos)) return end;

      var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
      if (pos.line == change.to.line) ch += end.ch - change.to.ch;
      return Pos(line, ch);
    };
    return {anchor: adjustPos(doc.sel.anchor), head: adjustPos(doc.sel.head)};
  }

  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function() { this.canceled = true; }
    };
    if (update) obj.update = function(from, to, text, origin) {
      if (from) this.from = clipPos(doc, from);
      if (to) this.to = clipPos(doc, to);
      if (text) this.text = text;
      if (origin !== undefined) this.origin = origin;
    };
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

    if (obj.canceled) return null;
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
  }

  // Replace the range from from to to by the strings in replacement.
  // change is a {from, to, text [, origin]} object
  function makeChange(doc, change, selUpdate, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, selUpdate, ignoreReadOnly);
      if (doc.cm.state.suppressEdits) return;
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) return;
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 1; --i)
        makeChangeNoReadonly(doc, {from: split[i].from, to: split[i].to, text: [""]});
      if (split.length)
        makeChangeNoReadonly(doc, {from: split[0].from, to: split[0].to, text: change.text}, selUpdate);
    } else {
      makeChangeNoReadonly(doc, change, selUpdate);
    }
  }

  function makeChangeNoReadonly(doc, change, selUpdate) {
    var selAfter = computeSelAfterChange(doc, change, selUpdate);
    addToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function(doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  function makeChangeFromHistory(doc, type) {
    if (doc.cm && doc.cm.state.suppressEdits) return;

    var hist = doc.history;
    var event = (type == "undo" ? hist.done : hist.undone).pop();
    if (!event) return;

    var anti = {changes: [], anchorBefore: event.anchorAfter, headBefore: event.headAfter,
                anchorAfter: event.anchorBefore, headAfter: event.headBefore,
                generation: hist.generation};
    (type == "undo" ? hist.undone : hist.done).push(anti);
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    for (var i = event.changes.length - 1; i >= 0; --i) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        (type == "undo" ? hist.done : hist.undone).length = 0;
        return;
      }

      anti.changes.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change, null)
                    : {anchor: event.anchorBefore, head: event.headBefore};
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      var rebased = [];

      linkedDocs(doc, function(doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    }
  }

  function shiftDoc(doc, distance) {
    function shiftPos(pos) {return Pos(pos.line + distance, pos.ch);}
    doc.first += distance;
    if (doc.cm) regChange(doc.cm, doc.first, doc.first, distance);
    doc.sel.head = shiftPos(doc.sel.head); doc.sel.anchor = shiftPos(doc.sel.anchor);
    doc.sel.from = shiftPos(doc.sel.from); doc.sel.to = shiftPos(doc.sel.to);
  }

  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return;
    }
    if (change.from.line > doc.lastLine()) return;

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) selAfter = computeSelAfterChange(doc, change, null);
    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans, selAfter);
    else updateDoc(doc, change, spans, selAfter);
  }

  function makeChangeSingleDocInEditor(cm, change, spans, selAfter) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(doc, getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function(line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true;
        }
      });
    }

    if (!posLess(doc.sel.head, change.from) && !posLess(change.to, doc.sel.head))
      cm.curOp.cursorActivity = true;

    updateDoc(doc, change, spans, selAfter, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
        var len = lineLength(doc, line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
    }

    // Adjust frontier, schedule worker
    doc.frontier = Math.min(doc.frontier, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    regChange(cm, from.line, to.line + 1, lendiff);

    if (hasHandler(cm, "change")) {
      var changeObj = {from: from, to: to,
                       text: change.text,
                       removed: change.removed,
                       origin: change.origin};
      if (cm.curOp.textChanged) {
        for (var cur = cm.curOp.textChanged; cur.next; cur = cur.next) {}
        cur.next = changeObj;
      } else cm.curOp.textChanged = changeObj;
    }
  }

  function replaceRange(doc, code, from, to, origin) {
    if (!to) to = from;
    if (posLess(to, from)) { var tmp = to; to = from; from = tmp; }
    if (typeof code == "string") code = splitLines(code);
    makeChange(doc, {from: from, to: to, text: code, origin: origin}, null);
  }

  // POSITION OBJECT

  function Pos(line, ch) {
    if (!(this instanceof Pos)) return new Pos(line, ch);
    this.line = line; this.ch = ch;
  }
  CodeMirror.Pos = Pos;

  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return Pos(x.line, x.ch);}

  // SELECTION

  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) return Pos(doc.first, 0);
    var last = doc.first + doc.size - 1;
    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
    return clipToLen(pos, getLine(doc, pos.line).text.length);
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
    else if (ch < 0) return Pos(pos.line, 0);
    else return pos;
  }
  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}

  // If shift is held, this will move the selection anchor. Otherwise,
  // it'll set the whole selection.
  function extendSelection(doc, pos, other, bias) {
    if (doc.sel.shift || doc.sel.extend) {
      var anchor = doc.sel.anchor;
      if (other) {
        var posBefore = posLess(pos, anchor);
        if (posBefore != posLess(other, anchor)) {
          anchor = pos;
          pos = other;
        } else if (posBefore != posLess(pos, other)) {
          pos = other;
        }
      }
      setSelection(doc, anchor, pos, bias);
    } else {
      setSelection(doc, pos, other || pos, bias);
    }
    if (doc.cm) doc.cm.curOp.userSelChange = true;
  }

  function filterSelectionChange(doc, anchor, head) {
    var obj = {anchor: anchor, head: head};
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
    obj.anchor = clipPos(doc, obj.anchor); obj.head = clipPos(doc, obj.head);
    return obj;
  }

  // Update the selection. Last two args are only used by
  // updateDoc, since they have to be expressed in the line
  // numbers before the update.
  function setSelection(doc, anchor, head, bias, checkAtomic) {
    if (!checkAtomic && hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
      var filtered = filterSelectionChange(doc, anchor, head);
      head = filtered.head;
      anchor = filtered.anchor;
    }

    var sel = doc.sel;
    sel.goalColumn = null;
    // Skip over atomic spans.
    if (checkAtomic || !posEq(anchor, sel.anchor))
      anchor = skipAtomic(doc, anchor, bias, checkAtomic != "push");
    if (checkAtomic || !posEq(head, sel.head))
      head = skipAtomic(doc, head, bias, checkAtomic != "push");

    if (posEq(sel.anchor, anchor) && posEq(sel.head, head)) return;

    sel.anchor = anchor; sel.head = head;
    var inv = posLess(head, anchor);
    sel.from = inv ? head : anchor;
    sel.to = inv ? anchor : head;

    if (doc.cm)
      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged =
        doc.cm.curOp.cursorActivity = true;

    signalLater(doc, "cursorActivity", doc);
  }

  function reCheckSelection(cm) {
    setSelection(cm.doc, cm.doc.sel.from, cm.doc.sel.to, null, "push");
  }

  function skipAtomic(doc, pos, bias, mayClear) {
    var flipped = false, curPos = pos;
    var dir = bias || 1;
    doc.cantEdit = false;
    search: for (;;) {
      var line = getLine(doc, curPos.line);
      if (line.markedSpans) {
        for (var i = 0; i < line.markedSpans.length; ++i) {
          var sp = line.markedSpans[i], m = sp.marker;
          if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
              (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
            if (mayClear) {
              signal(m, "beforeCursorEnter");
              if (m.explicitlyCleared) {
                if (!line.markedSpans) break;
                else {--i; continue;}
              }
            }
            if (!m.atomic) continue;
            var newPos = m.find()[dir < 0 ? "from" : "to"];
            if (posEq(newPos, curPos)) {
              newPos.ch += dir;
              if (newPos.ch < 0) {
                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
                else newPos = null;
              } else if (newPos.ch > line.text.length) {
                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
                else newPos = null;
              }
              if (!newPos) {
                if (flipped) {
                  // Driven in a corner -- no valid cursor position found at all
                  // -- try again *with* clearing, if we didn't already
                  if (!mayClear) return skipAtomic(doc, pos, bias, true);
                  // Otherwise, turn off editing until further notice, and return the start of the doc
                  doc.cantEdit = true;
                  return Pos(doc.first, 0);
                }
                flipped = true; newPos = pos; dir = -dir;
              }
            }
            curPos = newPos;
            continue search;
          }
        }
      }
      return curPos;
    }
  }

  // SCROLLING

  function scrollCursorIntoView(cm) {
    var coords = scrollPosIntoView(cm, cm.doc.sel.head, cm.options.cursorScrollMargin);
    if (!cm.state.focused) return;
    var display = cm.display, box = getRect(display.sizer), doScroll = null;
    if (coords.top + box.top < 0) doScroll = true;
    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
    if (doScroll != null && !phantom) {
      var hidden = display.cursor.style.display == "none";
      if (hidden) {
        display.cursor.style.display = "";
        display.cursor.style.left = coords.left + "px";
        display.cursor.style.top = (coords.top - display.viewOffset) + "px";
      }
      display.cursor.scrollIntoView(doScroll);
      if (hidden) display.cursor.style.display = "none";
    }
  }

  function scrollPosIntoView(cm, pos, margin) {
    if (margin == null) margin = 0;
    for (;;) {
      var changed = false, coords = cursorCoords(cm, pos);
      var scrollPos = calculateScrollPos(cm, coords.left, coords.top - margin, coords.left, coords.bottom + margin);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        setScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
      }
      if (!changed) return coords;
    }
  }

  function scrollIntoView(cm, x1, y1, x2, y2) {
    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
  }

  function calculateScrollPos(cm, x1, y1, x2, y2) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (y1 < 0) y1 = 0;
    var screen = display.scroller.clientHeight - scrollerCutOff, screentop = display.scroller.scrollTop, result = {};
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
    if (y1 < screentop) {
      result.scrollTop = atTop ? 0 : y1;
    } else if (y2 > screentop + screen) {
      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
      if (newTop != screentop) result.scrollTop = newTop;
    }

    var screenw = display.scroller.clientWidth - scrollerCutOff, screenleft = display.scroller.scrollLeft;
    x1 += display.gutters.offsetWidth; x2 += display.gutters.offsetWidth;
    var gutterw = display.gutters.offsetWidth;
    var atLeft = x1 < gutterw + 10;
    if (x1 < screenleft + gutterw || atLeft) {
      if (atLeft) x1 = 0;
      result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
    } else if (x2 > screenw + screenleft - 3) {
      result.scrollLeft = x2 + 10 - screenw;
    }
    return result;
  }

  function updateScrollPos(cm, left, top) {
    cm.curOp.updateScrollPos = {scrollLeft: left == null ? cm.doc.scrollLeft : left,
                                scrollTop: top == null ? cm.doc.scrollTop : top};
  }

  function addToScrollPos(cm, left, top) {
    var pos = cm.curOp.updateScrollPos || (cm.curOp.updateScrollPos = {scrollLeft: cm.doc.scrollLeft, scrollTop: cm.doc.scrollTop});
    var scroll = cm.display.scroller;
    pos.scrollTop = Math.max(0, Math.min(scroll.scrollHeight - scroll.clientHeight, pos.scrollTop + top));
    pos.scrollLeft = Math.max(0, Math.min(scroll.scrollWidth - scroll.clientWidth, pos.scrollLeft + left));
  }

  // API UTILITIES

  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc;
    if (how == null) how = "add";
    if (how == "smart") {
      if (!cm.doc.mode.indent) how = "prev";
      else var state = getStateBefore(cm, n);
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (how == "smart") {
      indentation = cm.doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass) {
        if (!aggressive) return;
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
      else indentation = 0;
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
    if (pos < indentation) indentString += spaceStr(indentation - pos);

    if (indentString != curSpaceString)
      replaceRange(cm.doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
    line.stateAfter = null;
  }

  function changeLine(cm, handle, op) {
    var no = handle, line = handle, doc = cm.doc;
    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
    else no = lineNo(handle);
    if (no == null) return null;
    if (op(line, no)) regChange(cm, no, no + 1);
    else return null;
    return line;
  }

  function findPosH(doc, pos, dir, unit, visually) {
    var line = pos.line, ch = pos.ch, origDir = dir;
    var lineObj = getLine(doc, line);
    var possible = true;
    function findNextLine() {
      var l = line + dir;
      if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
      line = l;
      return lineObj = getLine(doc, l);
    }
    function moveOnce(boundToLine) {
      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
      if (next == null) {
        if (!boundToLine && findNextLine()) {
          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
          else ch = dir < 0 ? lineObj.text.length : 0;
        } else return (possible = false);
      } else ch = next;
      return true;
    }

    if (unit == "char") moveOnce();
    else if (unit == "column") moveOnce(true);
    else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) break;
        var cur = lineObj.text.charAt(ch) || "\n";
        var type = isWordChar(cur) ? "w"
          : !group ? null
          : /\s/.test(cur) ? null
          : "p";
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce();}
          break;
        }
        if (type) sawType = type;
        if (dir > 0 && !moveOnce(!first)) break;
      }
    }
    var result = skipAtomic(doc, Pos(line, ch), origDir, true);
    if (!possible) result.hitSide = true;
    return result;
  }

  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    for (;;) {
      var target = coordsChar(cm, x, y);
      if (!target.outside) break;
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
      y += dir * 5;
    }
    return target;
  }

  function findWordAt(line, pos) {
    var start = pos.ch, end = pos.ch;
    if (line) {
      if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
      var startChar = line.charAt(start);
      var check = isWordChar(startChar) ? isWordChar
        : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
        : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
      while (start > 0 && check(line.charAt(start - 1))) --start;
      while (end < line.length && check(line.charAt(end))) ++end;
    }
    return {from: Pos(pos.line, start), to: Pos(pos.line, end)};
  }

  function selectLine(cm, line) {
    extendSelection(cm.doc, Pos(line, 0), clipPos(cm.doc, Pos(line + 1, 0)));
  }

  // PROTOTYPE

  // The publicly visible API. Note that operation(null, f) means
  // 'wrap f in an operation, performed on its `this` parameter'

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); focusInput(this); onFocus(this); fastPoll(this);},

    setOption: function(option, value) {
      var options = this.options, old = options[option];
      if (options[option] == value && option != "mode") return;
      options[option] = value;
      if (optionHandlers.hasOwnProperty(option))
        operation(this, optionHandlers[option])(this, value, old);
    },

    getOption: function(option) {return this.options[option];},
    getDoc: function() {return this.doc;},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](map);
    },
    removeKeyMap: function(map) {
      var maps = this.state.keyMaps;
      for (var i = 0; i < maps.length; ++i)
        if (maps[i] == map || (typeof maps[i] != "string" && maps[i].name == map)) {
          maps.splice(i, 1);
          return true;
        }
    },

    addOverlay: operation(null, function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
      if (mode.startState) throw new Error("Overlays may not be stateful.");
      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
      this.state.modeGen++;
      regChange(this);
    }),
    removeOverlay: operation(null, function(spec) {
      var overlays = this.state.overlays;
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec;
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1);
          this.state.modeGen++;
          regChange(this);
          return;
        }
      }
    }),

    indentLine: operation(null, function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
        else dir = dir ? "add" : "subtract";
      }
      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
    }),
    indentSelection: operation(null, function(how) {
      var sel = this.doc.sel;
      if (posEq(sel.from, sel.to)) return indentLine(this, sel.from.line, how);
      var e = sel.to.line - (sel.to.ch ? 0 : 1);
      for (var i = sel.from.line; i <= e; ++i) indentLine(this, i, how);
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      var doc = this.doc;
      pos = clipPos(doc, pos);
      var state = getStateBefore(this, pos.line, precise), mode = this.doc.mode;
      var line = getLine(doc, pos.line);
      var stream = new StringStream(line.text, this.options.tabSize);
      while (stream.pos < pos.ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null, // Deprecated, use 'type' instead
              type: style || null,
              state: state};
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos);
      var styles = getLineStyles(this, getLine(this.doc, pos.line));
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
      if (ch == 0) return styles[2];
      for (;;) {
        var mid = (before + after) >> 1;
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
        else return styles[mid * 2 + 2];
      }
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode;
      if (!mode.innerMode) return mode;
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
    },

    getHelper: function(pos, type) {
      if (!helpers.hasOwnProperty(type)) return;
      var help = helpers[type], mode = this.getModeAt(pos);
      return mode[type] && help[mode[type]] ||
        mode.helperType && help[mode.helperType] ||
        help[mode.name];
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc;
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
      return getStateBefore(this, line + 1, precise);
    },

    cursorCoords: function(start, mode) {
      var pos, sel = this.doc.sel;
      if (start == null) pos = sel.head;
      else if (typeof start == "object") pos = clipPos(this.doc, start);
      else pos = start ? sel.from : sel.to;
      return cursorCoords(this, pos, mode || "page");
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page");
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page");
      return coordsChar(this, coords.left, coords.top);
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
      return lineAtHeight(this.doc, height + this.display.viewOffset);
    },
    heightAtLine: function(line, mode) {
      var end = false, last = this.doc.first + this.doc.size - 1;
      if (line < this.doc.first) line = this.doc.first;
      else if (line > last) { line = last; end = true; }
      var lineObj = getLine(this.doc, line);
      return intoCoordSystem(this, getLine(this.doc, line), {top: 0, left: 0}, mode || "page").top +
        (end ? lineObj.height : 0);
    },

    defaultTextHeight: function() { return textHeight(this.display); },
    defaultCharWidth: function() { return charWidth(this.display); },

    setGutterMarker: operation(null, function(line, gutterID, value) {
      return changeLine(this, line, function(line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) line.gutterMarkers = null;
        return true;
      });
    }),

    clearGutter: operation(null, function(gutterID) {
      var cm = this, doc = cm.doc, i = doc.first;
      doc.iter(function(line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          line.gutterMarkers[gutterID] = null;
          regChange(cm, i, i + 1);
          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
        }
        ++i;
      });
    }),

    addLineClass: operation(null, function(handle, where, cls) {
      return changeLine(this, handle, function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        if (!line[prop]) line[prop] = cls;
        else if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return false;
        else line[prop] += " " + cls;
        return true;
      });
    }),

    removeLineClass: operation(null, function(handle, where, cls) {
      return changeLine(this, handle, function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) return false;
        else if (cls == null) line[prop] = null;
        else {
          var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
          if (!found) return false;
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true;
      });
    }),

    addLineWidget: operation(null, function(handle, node, options) {
      return addLineWidget(this, handle, node, options);
    }),

    removeLineWidget: function(widget) { widget.clear(); },

    lineInfo: function(line) {
      if (typeof line == "number") {
        if (!isLine(this.doc, line)) return null;
        var n = line;
        line = getLine(this.doc, line);
        if (!line) return null;
      } else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets};
    },

    getViewport: function() { return {from: this.display.showingFrom, to: this.display.showingTo};},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display;
      pos = cursorCoords(this, clipPos(this.doc, pos));
      var top = pos.bottom, left = pos.left;
      node.style.position = "absolute";
      display.sizer.appendChild(node);
      if (vert == "over") {
        top = pos.top;
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          top = pos.top - node.offsetHeight;
        else if (pos.bottom + node.offsetHeight <= vspace)
          top = pos.bottom;
        if (left + node.offsetWidth > hspace)
          left = hspace - node.offsetWidth;
      }
      node.style.top = top + "px";
      node.style.left = node.style.right = "";
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
      } else {
        if (horiz == "left") left = 0;
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
        node.style.left = left + "px";
      }
      if (scroll)
        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
    },

    triggerOnKeyDown: operation(null, onKeyDown),

    execCommand: function(cmd) {return commands[cmd](this);},

    findPosH: function(from, amount, unit, visually) {
      var dir = 1;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        cur = findPosH(this.doc, cur, dir, unit, visually);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveH: operation(null, function(dir, unit) {
      var sel = this.doc.sel, pos;
      if (sel.shift || sel.extend || posEq(sel.from, sel.to))
        pos = findPosH(this.doc, sel.head, dir, unit, this.options.rtlMoveVisually);
      else
        pos = dir < 0 ? sel.from : sel.to;
      extendSelection(this.doc, pos, pos, dir);
    }),

    deleteH: operation(null, function(dir, unit) {
      var sel = this.doc.sel;
      if (!posEq(sel.from, sel.to)) replaceRange(this.doc, "", sel.from, sel.to, "+delete");
      else replaceRange(this.doc, "", sel.from, findPosH(this.doc, sel.head, dir, unit, false), "+delete");
      this.curOp.userSelChange = true;
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var dir = 1, x = goalColumn;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        var coords = cursorCoords(this, cur, "div");
        if (x == null) x = coords.left;
        else coords.left = x;
        cur = findPosV(this, coords, dir, unit);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveV: operation(null, function(dir, unit) {
      var sel = this.doc.sel;
      var pos = cursorCoords(this, sel.head, "div");
      if (sel.goalColumn != null) pos.left = sel.goalColumn;
      var target = findPosV(this, pos, dir, unit);

      if (unit == "page") addToScrollPos(this, 0, charCoords(this, target, "div").top - pos.top);
      extendSelection(this.doc, target, target, dir);
      sel.goalColumn = pos.left;
    }),

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) return;
      if (this.state.overwrite = !this.state.overwrite)
        this.display.cursor.className += " CodeMirror-overwrite";
      else
        this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "");
    },
    hasFocus: function() { return this.state.focused; },

    scrollTo: operation(null, function(x, y) {
      updateScrollPos(this, x, y);
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller, co = scrollerCutOff;
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - co, width: scroller.scrollWidth - co,
              clientHeight: scroller.clientHeight - co, clientWidth: scroller.clientWidth - co};
    },

    scrollIntoView: operation(null, function(pos, margin) {
      if (typeof pos == "number") pos = Pos(pos, 0);
      if (!margin) margin = 0;
      var coords = pos;

      if (!pos || pos.line != null) {
        this.curOp.scrollToPos = pos ? clipPos(this.doc, pos) : this.doc.sel.head;
        this.curOp.scrollToPosMargin = margin;
        coords = cursorCoords(this, this.curOp.scrollToPos);
      }
      var sPos = calculateScrollPos(this, coords.left, coords.top - margin, coords.right, coords.bottom + margin);
      updateScrollPos(this, sPos.scrollLeft, sPos.scrollTop);
    }),

    setSize: operation(null, function(width, height) {
      function interpret(val) {
        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
      }
      if (width != null) this.display.wrapper.style.width = interpret(width);
      if (height != null) this.display.wrapper.style.height = interpret(height);
      if (this.options.lineWrapping)
        this.display.measureLineCache.length = this.display.measureLineCachePos = 0;
      this.curOp.forceUpdate = true;
    }),

    operation: function(f){return runInOp(this, f);},

    refresh: operation(null, function() {
      clearCaches(this);
      updateScrollPos(this, this.doc.scrollLeft, this.doc.scrollTop);
      regChange(this);
    }),

    swapDoc: operation(null, function(doc) {
      var old = this.doc;
      old.cm = null;
      attachDoc(this, doc);
      clearCaches(this);
      resetInput(this, true);
      updateScrollPos(this, doc.scrollLeft, doc.scrollTop);
      return old;
    }),

    getInputField: function(){return this.display.input;},
    getWrapperElement: function(){return this.display.wrapper;},
    getScrollerElement: function(){return this.display.scroller;},
    getGutterElement: function(){return this.display.gutters;}
  };
  eventMixin(CodeMirror);

  // OPTION DEFAULTS

  var optionHandlers = CodeMirror.optionHandlers = {};

  // The default configuration options.
  var defaults = CodeMirror.defaults = {};

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt;
    if (handle) optionHandlers[name] =
      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
  }

  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function(cm, val) {
    cm.setValue(val);
  }, true);
  option("mode", null, function(cm, val) {
    cm.doc.modeOption = val;
    loadMode(cm);
  }, true);

  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function(cm) {
    loadMode(cm);
    clearCaches(cm);
    regChange(cm);
  }, true);
  option("electricChars", true);
  option("rtlMoveVisually", !windows);

  option("theme", "default", function(cm) {
    themeChanged(cm);
    guttersChanged(cm);
  }, true);
  option("keyMap", "default", keyMapChanged);
  option("extraKeys", null);

  option("onKeyEvent", null);
  option("onDragEvent", null);

  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("fixedGutter", true, function(cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
    cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, updateScrollbars, true);
  option("lineNumbers", false, function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("firstLineNumber", 1, guttersChanged, true);
  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
  option("showCursorWhenSelecting", false, updateSelection, true);

  option("readOnly", false, function(cm, val) {
    if (val == "nocursor") {onBlur(cm); cm.display.input.blur();}
    else if (!val) resetInput(cm, true);
  });
  option("dragDrop", true);

  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true);
  option("pollInterval", 100);
  option("undoDepth", 40, function(cm, val){cm.doc.history.undoDepth = val;});
  option("historyEventDelay", 500);
  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
  option("maxHighlightLength", 10000, function(cm){loadMode(cm); cm.refresh();}, true);
  option("moveInputWithCursor", true, function(cm, val) {
    if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
  });

  option("tabindex", null, function(cm, val) {
    cm.display.input.tabIndex = val || "";
  });
  option("autofocus", null);

  // MODE DEFINITION AND QUERYING

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    if (arguments.length > 2) {
      mode.dependencies = [];
      for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
    }
    modes[name] = mode;
  };

  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };

  CodeMirror.resolveMode = function(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return CodeMirror.resolveMode("application/xml");
    }
    if (typeof spec == "string") return {name: spec};
    else return spec || {name: "null"};
  };

  CodeMirror.getMode = function(options, spec) {
    var spec = CodeMirror.resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) continue;
        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;

    return modeObj;
  };

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  var modeExtensions = CodeMirror.modeExtensions = {};
  CodeMirror.extendMode = function(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  };

  // EXTENSIONS

  CodeMirror.defineExtension = function(name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function(name, func) {
    Doc.prototype[name] = func;
  };
  CodeMirror.defineOption = option;

  var initHooks = [];
  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

  var helpers = CodeMirror.helpers = {};
  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {};
    helpers[type][name] = value;
  };

  // UTILITIES

  CodeMirror.isWordChar = isWordChar;

  // MODE STATE HANDLING

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.copyState = copyState;

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.startState = startState;

  CodeMirror.innerMode = function(mode, state) {
    while (mode.innerMode) {
      var info = mode.innerMode(state);
      if (!info || info.mode == mode) break;
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state};
  };

  // STANDARD COMMANDS

  var commands = CodeMirror.commands = {
    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()));},
    killLine: function(cm) {
      var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
      if (!sel && cm.getLine(from.line).length == from.ch)
        cm.replaceRange("", from, Pos(from.line + 1, 0), "+delete");
      else cm.replaceRange("", from, sel ? to : Pos(from.line), "+delete");
    },
    deleteLine: function(cm) {
      var l = cm.getCursor().line;
      cm.replaceRange("", Pos(l, 0), Pos(l), "+delete");
    },
    delLineLeft: function(cm) {
      var cur = cm.getCursor();
      cm.replaceRange("", Pos(cur.line, 0), cur, "+delete");
    },
    undo: function(cm) {cm.undo();},
    redo: function(cm) {cm.redo();},
    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
    goLineStart: function(cm) {
      cm.extendSelection(lineStart(cm, cm.getCursor().line));
    },
    goLineStartSmart: function(cm) {
      var cur = cm.getCursor(), start = lineStart(cm, cur.line);
      var line = cm.getLineHandle(start.line);
      var order = getOrder(line);
      if (!order || order[0].level == 0) {
        var firstNonWS = Math.max(0, line.text.search(/\S/));
        var inWS = cur.line == start.line && cur.ch <= firstNonWS && cur.ch;
        cm.extendSelection(Pos(start.line, inWS ? 0 : firstNonWS));
      } else cm.extendSelection(start);
    },
    goLineEnd: function(cm) {
      cm.extendSelection(lineEnd(cm, cm.getCursor().line));
    },
    goLineRight: function(cm) {
      var top = cm.charCoords(cm.getCursor(), "div").top + 5;
      cm.extendSelection(cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div"));
    },
    goLineLeft: function(cm) {
      var top = cm.charCoords(cm.getCursor(), "div").top + 5;
      cm.extendSelection(cm.coordsChar({left: 0, top: top}, "div"));
    },
    goLineUp: function(cm) {cm.moveV(-1, "line");},
    goLineDown: function(cm) {cm.moveV(1, "line");},
    goPageUp: function(cm) {cm.moveV(-1, "page");},
    goPageDown: function(cm) {cm.moveV(1, "page");},
    goCharLeft: function(cm) {cm.moveH(-1, "char");},
    goCharRight: function(cm) {cm.moveH(1, "char");},
    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
    goColumnRight: function(cm) {cm.moveH(1, "column");},
    goWordLeft: function(cm) {cm.moveH(-1, "word");},
    goGroupRight: function(cm) {cm.moveH(1, "group");},
    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
    goWordRight: function(cm) {cm.moveH(1, "word");},
    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
    delCharAfter: function(cm) {cm.deleteH(1, "char");},
    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
    delWordAfter: function(cm) {cm.deleteH(1, "word");},
    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
    indentAuto: function(cm) {cm.indentSelection("smart");},
    indentMore: function(cm) {cm.indentSelection("add");},
    indentLess: function(cm) {cm.indentSelection("subtract");},
    insertTab: function(cm) {cm.replaceSelection("\t", "end", "+input");},
    defaultTab: function(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.replaceSelection("\t", "end", "+input");
    },
    transposeChars: function(cm) {
      var cur = cm.getCursor(), line = cm.getLine(cur.line);
      if (cur.ch > 0 && cur.ch < line.length - 1)
        cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
                        Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
    },
    newlineAndIndent: function(cm) {
      operation(cm, function() {
        cm.replaceSelection("\n", "end", "+input");
        cm.indentLine(cm.getCursor().line, null, true);
      })();
    },
    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };

  // STANDARD KEYMAPS

  var keyMap = CodeMirror.keyMap = {};
  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite"
  };
  // Note that the save and find-related commands aren't defined by
  // default. Unknown commands are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    fallthrough: "basic"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delLineLeft",
    fallthrough: ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };

  // KEYMAP DISPATCH

  function getKeyMap(val) {
    if (typeof val == "string") return keyMap[val];
    else return val;
  }

  function lookupKey(name, maps, handle) {
    function lookup(map) {
      map = getKeyMap(map);
      var found = map[name];
      if (found === false) return "stop";
      if (found != null && handle(found)) return true;
      if (map.nofallthrough) return "stop";

      var fallthrough = map.fallthrough;
      if (fallthrough == null) return false;
      if (Object.prototype.toString.call(fallthrough) != "[object Array]")
        return lookup(fallthrough);
      for (var i = 0, e = fallthrough.length; i < e; ++i) {
        var done = lookup(fallthrough[i]);
        if (done) return done;
      }
      return false;
    }

    for (var i = 0; i < maps.length; ++i) {
      var done = lookup(maps[i]);
      if (done) return done != "stop";
    }
  }
  function isModifierKey(event) {
    var name = keyNames[event.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  }
  function keyName(event, noShift) {
    if (opera && event.keyCode == 34 && event["char"]) return false;
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) return false;
    if (event.altKey) name = "Alt-" + name;
    if (flipCtrlCmd ? event.metaKey : event.ctrlKey) name = "Ctrl-" + name;
    if (flipCtrlCmd ? event.ctrlKey : event.metaKey) name = "Cmd-" + name;
    if (!noShift && event.shiftKey) name = "Shift-" + name;
    return name;
  }
  CodeMirror.lookupKey = lookupKey;
  CodeMirror.isModifierKey = isModifierKey;
  CodeMirror.keyName = keyName;

  // FROMTEXTAREA

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;
    if (!options.placeholder && textarea.placeholder)
      options.placeholder = textarea.placeholder;
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = document.body;
      // doc.activeElement occasionally throws on IE
      try { hasFocus = document.activeElement; } catch(e) {}
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form, realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function() {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    textarea.style.display = "none";
    var cm = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    cm.save = save;
    cm.getTextArea = function() { return textarea; };
    cm.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(cm.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        off(textarea.form, "submit", save);
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return cm;
  };

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  // The character stream used by a mode's parser.
  function StringStream(string, tabSize) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
  }

  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos) || undefined;},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue;
    },
    indentation: function() {return countColumn(this.string, null, this.tabSize);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
        var substr = this.string.substr(this.pos, pattern.length);
        if (cased(substr) == cased(pattern)) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      } else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && match.index > 0) return null;
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  // TEXTMARKERS

  function TextMarker(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
  }
  CodeMirror.TextMarker = TextMarker;
  eventMixin(TextMarker);

  TextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) startOperation(cm);
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) signalLater(this, "clear", found.from, found.to);
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.to != null) max = lineNo(line);
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from != null)
        min = lineNo(line);
      else if (this.collapsed && !lineIsHidden(this.doc, line) && cm)
        updateLineHeight(line, textHeight(cm.display));
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
      var visual = visualLine(cm.doc, this.lines[i]), len = lineLength(cm.doc, visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    }

    if (min != null && cm) regChange(cm, min, max + 1);
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) reCheckSelection(cm);
    }
    if (withOp) endOperation(cm);
  };

  TextMarker.prototype.find = function() {
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null || span.to != null) {
        var found = lineNo(line);
        if (span.from != null) from = Pos(found, span.from);
        if (span.to != null) to = Pos(found, span.to);
      }
    }
    if (this.type == "bookmark") return from;
    return from && {from: from, to: to};
  };

  TextMarker.prototype.changed = function() {
    var pos = this.find(), cm = this.doc.cm;
    if (!pos || !cm) return;
    var line = getLine(this.doc, pos.from.line);
    clearCachedMeasurement(cm, line);
    if (pos.from.line >= cm.display.showingFrom && pos.from.line < cm.display.showingTo) {
      for (var node = cm.display.lineDiv.firstChild; node; node = node.nextSibling) if (node.lineObj == line) {
        if (node.offsetHeight != line.height) updateLineHeight(line, node.offsetHeight);
        break;
      }
      runInOp(cm, function() {
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = cm.curOp.updateMaxLine = true;
      });
    }
  };

  TextMarker.prototype.attachLine = function(line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
    }
    this.lines.push(line);
  };
  TextMarker.prototype.detachLine = function(line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };

  function markText(doc, from, to, options, type) {
    if (options && options.shared) return markTextShared(doc, from, to, options, type);
    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

    var marker = new TextMarker(doc, type);
    if (type == "range" && !posLess(from, to)) return marker;
    if (options) copyObj(options, marker);
    if (marker.replacedWith) {
      marker.collapsed = true;
      marker.replacedWith = elt("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) marker.replacedWith.ignoreEvents = true;
    }
    if (marker.collapsed) sawCollapsedSpans = true;

    if (marker.addToHistory)
      addToHistory(doc, {from: from, to: to, origin: "markText"},
                   {head: doc.sel.head, anchor: doc.sel.anchor}, NaN);

    var curLine = from.line, size = 0, collapsedAtStart, collapsedAtEnd, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function(line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(doc, line) == cm.display.maxLine)
        updateMaxLine = true;
      var span = {from: null, to: null, marker: marker};
      size += line.text.length;
      if (curLine == from.line) {span.from = from.ch; size -= from.ch;}
      if (curLine == to.line) {span.to = to.ch; size -= line.text.length - to.ch;}
      if (marker.collapsed) {
        if (curLine == to.line) collapsedAtEnd = collapsedSpanAt(line, to.ch);
        if (curLine == from.line) collapsedAtStart = collapsedSpanAt(line, from.ch);
        else updateLineHeight(line, 0);
      }
      addMarkedSpan(line, span);
      ++curLine;
    });
    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
    });

    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

    if (marker.readOnly) {
      sawReadOnlySpans = true;
      if (doc.history.done.length || doc.history.undone.length)
        doc.clearHistory();
    }
    if (marker.collapsed) {
      if (collapsedAtStart != collapsedAtEnd)
        throw new Error("Inserting collapsed marker overlapping an existing one");
      marker.size = size;
      marker.atomic = true;
    }
    if (cm) {
      if (updateMaxLine) cm.curOp.updateMaxLine = true;
      if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.collapsed)
        regChange(cm, from.line, to.line + 1);
      if (marker.atomic) reCheckSelection(cm);
    }
    return marker;
  }

  // SHARED TEXTMARKERS

  function SharedTextMarker(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0, me = this; i < markers.length; ++i) {
      markers[i].parent = this;
      on(markers[i], "clear", function(){me.clear();});
    }
  }
  CodeMirror.SharedTextMarker = SharedTextMarker;
  eventMixin(SharedTextMarker);

  SharedTextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      this.markers[i].clear();
    signalLater(this, "clear");
  };
  SharedTextMarker.prototype.find = function() {
    return this.primary.find();
  };

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.replacedWith;
    linkedDocs(doc, function(doc) {
      if (widget) options.replacedWith = widget.cloneNode(true);
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        if (doc.linked[i].isParent) return;
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary);
  }

  // TEXTMARKER SPANS

  function getMarkedSpanFor(spans, marker) {
    if (spans) for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) return span;
    }
  }
  function removeMarkedSpan(spans, span) {
    for (var r, i = 0; i < spans.length; ++i)
      if (spans[i] != span) (r || (r = [])).push(spans[i]);
    return r;
  }
  function addMarkedSpan(line, span) {
    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
    span.marker.attachLine(line);
  }

  function markedSpansBefore(old, startCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || marker.type == "bookmark" && span.from == startCh && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
        (nw || (nw = [])).push({from: span.from,
                                to: endsAfter ? null : span.to,
                                marker: marker});
      }
    }
    return nw;
  }

  function markedSpansAfter(old, endCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || marker.type == "bookmark" && span.from == endCh && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
        (nw || (nw = [])).push({from: startsBefore ? null : span.from - endCh,
                                to: span.to == null ? null : span.to - endCh,
                                marker: marker});
      }
    }
    return nw;
  }

  function stretchSpansOverChange(doc, change) {
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) return null;

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = posEq(change.from, change.to);
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) span.to = startCh;
          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i = 0; i < last.length; ++i) {
        var span = last[i];
        if (span.to != null) span.to += offset;
        if (span.from == null) {
          var found = getMarkedSpanFor(first, span.marker);
          if (!found) {
            span.from = offset;
            if (sameLine) (first || (first = [])).push(span);
          }
        } else {
          span.from += offset;
          if (sameLine) (first || (first = [])).push(span);
        }
      }
    }
    if (sameLine && first) {
      // Make sure we didn't create any zero-length spans
      for (var i = 0; i < first.length; ++i)
        if (first[i].from != null && first[i].from == first[i].to && first[i].marker.type != "bookmark")
          first.splice(i--, 1);
      if (!first.length) first = null;
    }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        for (var i = 0; i < first.length; ++i)
          if (first[i].to == null)
            (gapMarkers || (gapMarkers = [])).push({from: null, to: null, marker: first[i].marker});
      for (var i = 0; i < gap; ++i)
        newMarkers.push(gapMarkers);
      newMarkers.push(last);
    }
    return newMarkers;
  }

  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) return stretched;
    if (!stretched) return old;

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            if (oldCur[k].marker == span.marker) continue spans;
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old;
  }

  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function(line) {
      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          (markers || (markers = [])).push(mark);
      }
    });
    if (!markers) return null;
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find();
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (posLess(p.to, m.from) || posLess(m.to, p.from)) continue;
        var newParts = [j, 1];
        if (posLess(p.from, m.from) || !mk.inclusiveLeft && posEq(p.from, m.from))
          newParts.push({from: p.from, to: m.from});
        if (posLess(m.to, p.to) || !mk.inclusiveRight && posEq(p.to, m.to))
          newParts.push({from: m.to, to: p.to});
        parts.splice.apply(parts, newParts);
        j += newParts.length - 1;
      }
    }
    return parts;
  }

  function collapsedSpanAt(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) continue;
      if ((sp.from == null || sp.from < ch) &&
          (sp.to == null || sp.to > ch) &&
          (!found || found.width < sp.marker.width))
        found = sp.marker;
    }
    return found;
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAt(line, -1); }
  function collapsedSpanAtEnd(line) { return collapsedSpanAt(line, line.text.length + 1); }

  function visualLine(doc, line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      line = getLine(doc, merged.find().from.line);
    return line;
  }

  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) continue;
      if (sp.from == null) return true;
      if (sp.marker.replacedWith) continue;
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        return true;
    }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find().to, endLine = getLine(doc, end.line);
      return lineIsHiddenInner(doc, endLine, getMarkedSpanFor(endLine.markedSpans, span.marker));
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      return true;
    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.replacedWith && sp.from == span.to &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) return true;
    }
  }

  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.detachLine(line);
    line.markedSpans = null;
  }

  function attachMarkedSpans(line, spans) {
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.attachLine(line);
    line.markedSpans = spans;
  }

  // LINE WIDGETS

  var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt];
    this.cm = cm;
    this.node = node;
  };
  eventMixin(LineWidget);
  function widgetOperation(f) {
    return function() {
      var withOp = !this.cm.curOp;
      if (withOp) startOperation(this.cm);
      try {var result = f.apply(this, arguments);}
      finally {if (withOp) endOperation(this.cm);}
      return result;
    };
  }
  LineWidget.prototype.clear = widgetOperation(function() {
    var ws = this.line.widgets, no = lineNo(this.line);
    if (no == null || !ws) return;
    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
    if (!ws.length) this.line.widgets = null;
    var aboveVisible = heightAtLine(this.cm, this.line) < this.cm.doc.scrollTop;
    updateLineHeight(this.line, Math.max(0, this.line.height - widgetHeight(this)));
    if (aboveVisible) addToScrollPos(this.cm, 0, -this.height);
    regChange(this.cm, no, no + 1);
  });
  LineWidget.prototype.changed = widgetOperation(function() {
    var oldH = this.height;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) return;
    updateLineHeight(this.line, this.line.height + diff);
    var no = lineNo(this.line);
    regChange(this.cm, no, no + 1);
  });

  function widgetHeight(widget) {
    if (widget.height != null) return widget.height;
    if (!widget.node.parentNode || widget.node.parentNode.nodeType != 1)
      removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, "position: relative"));
    return widget.height = widget.node.offsetHeight;
  }

  function addLineWidget(cm, handle, node, options) {
    var widget = new LineWidget(cm, node, options);
    if (widget.noHScroll) cm.display.alignWidgets = true;
    changeLine(cm, handle, function(line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) widgets.push(widget);
      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
      widget.line = line;
      if (!lineIsHidden(cm.doc, line) || widget.showIfHidden) {
        var aboveVisible = heightAtLine(cm, line) < cm.doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) addToScrollPos(cm, 0, widget.height);
      }
      return true;
    });
    return widget;
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };
  eventMixin(Line);

  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) line.stateAfter = null;
    if (line.styles) line.styles = null;
    if (line.order != null) line.order = null;
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) updateLineHeight(line, estHeight);
  }

  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Run the given mode's parser over a line, update the styles
  // array, which contains alternating fragments of text and CSS
  // classes.
  function runMode(cm, text, mode, state, f) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize), style;
    if (text == "" && mode.blankLine) mode.blankLine(state);
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        // Webkit seems to refuse to render text nodes longer than 57444 characters
        stream.pos = Math.min(text.length, stream.start + 50000);
        style = null;
      } else {
        style = mode.token(stream, state);
      }
      if (!flattenSpans || curStyle != style) {
        if (curStart < stream.start) f(stream.start, curStyle);
        curStart = stream.start; curStyle = style;
      }
      stream.start = stream.pos;
    }
    if (curStart < stream.pos) f(stream.pos, curStyle);
  }

  function highlightLine(cm, line, state) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen];
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {st.push(end, style);});

    // Run overlays, adjust style array.
    for (var o = 0; o < cm.state.overlays.length; ++o) {
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      runMode(cm, line.text, overlay.mode, true, function(end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            st.splice(i, 1, end, st[i+1], i_end);
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) return;
        if (overlay.opaque) {
          st.splice(start, i - start, end, style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = cur ? cur + " " + style : style;
          }
        }
      });
    }

    return st;
  }

  function getLineStyles(cm, line) {
    if (!line.styles || line.styles[0] != cm.state.modeGen)
      line.styles = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
    return line.styles;
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array.
  function processLine(cm, line, state) {
    var mode = cm.doc.mode;
    var stream = new StringStream(line.text, cm.options.tabSize);
    if (line.text == "" && mode.blankLine) mode.blankLine(state);
    while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
      mode.token(stream, state);
      stream.start = stream.pos;
    }
  }

  var styleToClassCache = {};
  function styleToClass(style) {
    if (!style) return null;
    return styleToClassCache[style] ||
      (styleToClassCache[style] = "cm-" + style.replace(/ +/g, " cm-"));
  }

  function lineContent(cm, realLine, measure, copyWidgets) {
    var merged, line = realLine, empty = true;
    while (merged = collapsedSpanAtStart(line))
      line = getLine(cm.doc, merged.find().from.line);

    var builder = {pre: elt("pre"), col: 0, pos: 0,
                   measure: null, measuredSomething: false, cm: cm,
                   copyWidgets: copyWidgets};
    if (line.textClass) builder.pre.className = line.textClass;

    do {
      if (line.text) empty = false;
      builder.measure = line == realLine && measure;
      builder.pos = 0;
      builder.addToken = builder.measure ? buildTokenMeasure : buildToken;
      if ((ie || webkit) && cm.getOption("lineWrapping"))
        builder.addToken = buildTokenSplitSpaces(builder.addToken);
      var next = insertLineContent(line, builder, getLineStyles(cm, line));
      if (measure && line == realLine && !builder.measuredSomething) {
        measure[0] = builder.pre.appendChild(zeroWidthElement(cm.display.measure));
        builder.measuredSomething = true;
      }
      if (next) line = getLine(cm.doc, next.to.line);
    } while (next);

    if (measure && !builder.measuredSomething && !measure[0])
      measure[0] = builder.pre.appendChild(empty ? elt("span", "\u00a0") : zeroWidthElement(cm.display.measure));
    if (!builder.pre.firstChild && !lineIsHidden(cm.doc, realLine))
      builder.pre.appendChild(document.createTextNode("\u00a0"));

    var order;
    // Work around problem with the reported dimensions of single-char
    // direction spans on IE (issue #1129). See also the comment in
    // cursorCoords.
    if (measure && ie && (order = getOrder(line))) {
      var l = order.length - 1;
      if (order[l].from == order[l].to) --l;
      var last = order[l], prev = order[l - 1];
      if (last.from + 1 == last.to && prev && last.level < prev.level) {
        var span = measure[builder.pos - 1];
        if (span) span.parentNode.insertBefore(span.measureRight = zeroWidthElement(cm.display.measure),
                                               span.nextSibling);
      }
    }

    signal(cm, "renderLine", cm, realLine, builder.pre);
    return builder.pre;
  }

  var tokenSpecialChars = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
  function buildToken(builder, text, style, startStyle, endStyle, title) {
    if (!text) return;
    if (!tokenSpecialChars.test(text)) {
      builder.col += text.length;
      var content = document.createTextNode(text);
    } else {
      var content = document.createDocumentFragment(), pos = 0;
      while (true) {
        tokenSpecialChars.lastIndex = pos;
        var m = tokenSpecialChars.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          content.appendChild(document.createTextNode(text.slice(pos, pos + skipped)));
          builder.col += skipped;
        }
        if (!m) break;
        pos += skipped + 1;
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          builder.col += tabWidth;
        } else {
          var token = elt("span", "\u2022", "cm-invalidchar");
          token.title = "\\u" + m[0].charCodeAt(0).toString(16);
          content.appendChild(token);
          builder.col += 1;
        }
      }
    }
    if (style || startStyle || endStyle || builder.measure) {
      var fullStyle = style || "";
      if (startStyle) fullStyle += startStyle;
      if (endStyle) fullStyle += endStyle;
      var token = elt("span", [content], fullStyle);
      if (title) token.title = title;
      return builder.pre.appendChild(token);
    }
    builder.pre.appendChild(content);
  }

  function buildTokenMeasure(builder, text, style, startStyle, endStyle) {
    var wrapping = builder.cm.options.lineWrapping;
    for (var i = 0; i < text.length; ++i) {
      var ch = text.charAt(i), start = i == 0;
      if (ch >= "\ud800" && ch < "\udbff" && i < text.length - 1) {
        ch = text.slice(i, i + 2);
        ++i;
      } else if (i && wrapping && spanAffectsWrapping(text, i)) {
        builder.pre.appendChild(elt("wbr"));
      }
      var old = builder.measure[builder.pos];
      var span = builder.measure[builder.pos] =
        buildToken(builder, ch, style,
                   start && startStyle, i == text.length - 1 && endStyle);
      if (old) span.leftSide = old.leftSide || old;
      // In IE single-space nodes wrap differently than spaces
      // embedded in larger text nodes, except when set to
      // white-space: normal (issue #1268).
      if (ie && wrapping && ch == " " && i && !/\s/.test(text.charAt(i - 1)) &&
          i < text.length - 1 && !/\s/.test(text.charAt(i + 1)))
        span.style.whiteSpace = "normal";
      builder.pos += ch.length;
    }
    if (text.length) builder.measuredSomething = true;
  }

  function buildTokenSplitSpaces(inner) {
    function split(old) {
      var out = " ";
      for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
      out += " ";
      return out;
    }
    return function(builder, text, style, startStyle, endStyle, title) {
      return inner(builder, text.replace(/ {3,}/, split), style, startStyle, endStyle, title);
    };
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.replacedWith;
    if (widget) {
      if (builder.copyWidgets) widget = widget.cloneNode(true);
      builder.pre.appendChild(widget);
      if (builder.measure) {
        if (size) {
          builder.measure[builder.pos] = widget;
        } else {
          var elt = builder.measure[builder.pos] = zeroWidthElement(builder.cm.display.measure);
          if (marker.type != "bookmark" || marker.insertLeft)
            builder.pre.insertBefore(elt, widget);
          else
            builder.pre.appendChild(elt);
        }
        builder.measuredSomething = true;
      }
    }
    builder.pos += size;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i = 1; i < styles.length; i+=2)
        builder.addToken(builder, allText.slice(at, at = styles[i]), styleToClass(styles[i+1]));
      return;
    }

    var len = allText.length, pos = 0, i = 1, text = "", style;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = title = "";
        collapsed = null; nextChange = Infinity;
        var foundBookmark = null;
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
            if (sp.to != null && nextChange > sp.to) { nextChange = sp.to; spanEndStyle = ""; }
            if (m.className) spanStyle += " " + m.className;
            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
            if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
            if (m.title && !title) title = m.title;
            if (m.collapsed && (!collapsed || collapsed.marker.size < m.size))
              collapsed = sp;
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
          if (m.type == "bookmark" && sp.from == pos && m.replacedWith) foundBookmark = m;
        }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) return collapsed.marker.find();
        }
        if (foundBookmark && !collapsed) buildCollapsedSpan(builder, 0, foundBookmark);
      }
      if (pos >= len) break;

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = styleToClass(styles[i++]);
      }
    }
  }

  // DOCUMENT DATA STRUCTURE

  function updateDoc(doc, change, markedSpans, selAfter, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // First adjust the line structure
    if (from.ch == 0 && to.ch == 0 && lastText == "") {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      for (var i = 0, e = text.length - 1, added = []; i < e; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) doc.remove(from.line, nlines);
      if (added.length) doc.insert(from.line, added);
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        for (var added = [], i = 1, e = text.length - 1; i < e; ++i)
          added.push(new Line(text[i], spansFor(i), estimateHeight));
        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      for (var i = 1, e = text.length - 1, added = []; i < e; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
      doc.insert(from.line + 1, added);
    }

    signalLater(doc, "change", doc, change);
    setSelection(doc, selAfter.anchor, selAfter.head, null, true);
  }

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },
    collapse: function(lines) {
      lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
    },
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
    },
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0, e = children.length; i < e; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      if (this.size - n < 25) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },
    collapse: function(lines) {
      for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
    },
    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iterN: function(at, n, op) {
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  var nextDocId = 0;
  var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
    if (firstLine == null) firstLine = 0;

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.history = makeHistory();
    this.cleanGeneration = 1;
    this.frontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = {from: start, to: start, head: start, anchor: start, shift: false, extend: false, goalColumn: null};
    this.id = ++nextDocId;
    this.modeOption = mode;

    if (typeof text == "string") text = splitLines(text);
    updateDoc(this, {from: start, to: start, text: text}, null, {head: start, anchor: start});
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    iter: function(from, to, op) {
      if (op) this.iterN(from - this.first, to - from, op);
      else this.iterN(this.first, this.first + this.size, from);
    },

    insert: function(at, lines) {
      var height = 0;
      for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },
    setValue: function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: splitLines(code), origin: "setValue"},
                 {head: top, anchor: top}, true);
    },
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},
    setLine: function(line, text) {
      if (isLine(this, line))
        replaceRange(this, text, Pos(line, 0), clipPos(this, Pos(line)));
    },
    removeLine: function(line) {
      if (line) replaceRange(this, "", clipPos(this, Pos(line - 1)), clipPos(this, Pos(line)));
      else replaceRange(this, "", Pos(0, 0), clipPos(this, Pos(1, 0)));
    },

    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
    getLineNumber: function(line) {return lineNo(line);},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") line = getLine(this, line);
      return visualLine(this, line);
    },

    lineCount: function() {return this.size;},
    firstLine: function() {return this.first;},
    lastLine: function() {return this.first + this.size - 1;},

    clipPos: function(pos) {return clipPos(this, pos);},

    getCursor: function(start) {
      var sel = this.sel, pos;
      if (start == null || start == "head") pos = sel.head;
      else if (start == "anchor") pos = sel.anchor;
      else if (start == "end" || start === false) pos = sel.to;
      else pos = sel.from;
      return copyPos(pos);
    },
    somethingSelected: function() {return !posEq(this.sel.head, this.sel.anchor);},

    setCursor: docOperation(function(line, ch, extend) {
      var pos = clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line);
      if (extend) extendSelection(this, pos);
      else setSelection(this, pos, pos);
    }),
    setSelection: docOperation(function(anchor, head) {
      setSelection(this, clipPos(this, anchor), clipPos(this, head || anchor));
    }),
    extendSelection: docOperation(function(from, to) {
      extendSelection(this, clipPos(this, from), to && clipPos(this, to));
    }),

    getSelection: function(lineSep) {return this.getRange(this.sel.from, this.sel.to, lineSep);},
    replaceSelection: function(code, collapse, origin) {
      makeChange(this, {from: this.sel.from, to: this.sel.to, text: splitLines(code), origin: origin}, collapse || "around");
    },
    undo: docOperation(function() {makeChangeFromHistory(this, "undo");}),
    redo: docOperation(function() {makeChangeFromHistory(this, "redo");}),

    setExtending: function(val) {this.sel.extend = val;},

    historySize: function() {
      var hist = this.history;
      return {undo: hist.done.length, redo: hist.undone.length};
    },
    clearHistory: function() {this.history = makeHistory(this.history.maxGeneration);},

    markClean: function() {
      this.cleanGeneration = this.changeGeneration();
    },
    changeGeneration: function() {
      this.history.lastOp = this.history.lastOrigin = null;
      return this.history.generation;
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration);
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)};
    },
    setHistory: function(histData) {
      var hist = this.history = makeHistory(this.history.maxGeneration);
      hist.done = histData.done.slice(0);
      hist.undone = histData.undone.slice(0);
    },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark");
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          markers.push(span.marker.parent || span.marker);
      }
      return markers;
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function(line) {
        var sps = line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i)
          if (sps[i].from != null) markers.push(sps[i].marker);
      });
      return markers;
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first;
      this.iter(function(line) {
        var sz = line.text.length + 1;
        if (sz > off) { ch = off; return true; }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch));
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) return 0;
      this.iter(this.first, coords.line, function (line) {
        index += line.text.length + 1;
      });
      return index;
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = {from: this.sel.from, to: this.sel.to, head: this.sel.head, anchor: this.sel.anchor,
                 shift: this.sel.shift, extend: false, goalColumn: this.sel.goalColumn};
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc;
    },

    linkedDoc: function(options) {
      if (!options) options = {};
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) from = options.from;
      if (options.to != null && options.to < to) to = options.to;
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
      if (options.sharedHist) copy.history = this.history;
      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      return copy;
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) other = other.doc;
      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) continue;
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        break;
      }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
        other.history = makeHistory();
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode;},
    getEditor: function() {return this.cm;}
  });

  Doc.prototype.eachLine = Doc.prototype.iter;

  // The Doc methods that should be available on CodeMirror instances
  var dontDelegate = "iter insert remove copy getEditor".split(" ");
  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments);};
    })(Doc.prototype[prop]);

  eventMixin(Doc);

  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) continue;
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) continue;
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      }
    }
    propagate(doc, null, true);
  }

  function attachDoc(cm, doc) {
    if (doc.cm) throw new Error("This document is already in use.");
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    if (!cm.options.lineWrapping) computeMaxLength(cm);
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  // LINE UTILITIES

  function getLine(chunk, n) {
    n -= chunk.first;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
    }
    return chunk.lines[n];
  }

  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function(line) {
      var text = line.text;
      if (n == end.line) text = text.slice(0, end.ch);
      if (n == start.line) text = text.slice(start.ch);
      out.push(text);
      ++n;
    });
    return out;
  }
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function(line) { out.push(line.text); });
    return out;
  }

  function updateLineHeight(line, height) {
    var diff = height - line.height;
    for (var n = line; n; n = n.parent) n.height += diff;
  }

  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first;
  }

  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0, e = chunk.lines.length; i < e; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }

  function heightAtLine(cm, lineObj) {
    lineObj = visualLine(cm.doc, lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) break;
      else h += line.height;
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i = 0; i < p.children.length; ++i) {
        var cur = p.children[i];
        if (cur == chunk) break;
        else h += cur.height;
      }
    }
    return h;
  }

  function getOrder(line) {
    var order = line.order;
    if (order == null) order = line.order = bidiOrdering(line.text);
    return order;
  }

  // HISTORY

  function makeHistory(startGen) {
    return {
      // Arrays of history events. Doing something adds an event to
      // done and clears undo. Undoing moves events from done to
      // undone, redoing moves them in the other direction.
      done: [], undone: [], undoDepth: Infinity,
      // Used to track when changes can be merged into a single undo
      // event
      lastTime: 0, lastOp: null, lastOrigin: null,
      // Used by the isClean() method
      generation: startGen || 1, maxGeneration: startGen || 1
    };
  }

  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
      if (line.markedSpans)
        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
      ++n;
    });
  }

  function historyChangeFromChange(doc, change) {
    var from = { line: change.from.line, ch: change.from.ch };
    var histChange = {from: from, to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
    return histChange;
  }

  function addToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur = lst(hist.done);

    if (cur &&
        (hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastTime > time - doc.cm.options.historyEventDelay) ||
          change.origin.charAt(0) == "*"))) {
      // Merge this change into the last event
      var last = lst(cur.changes);
      if (posEq(change.from, change.to) && posEq(change.from, last.to)) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
      cur.anchorAfter = selAfter.anchor; cur.headAfter = selAfter.head;
    } else {
      // Can not be merged, start a new event.
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation,
             anchorBefore: doc.sel.anchor, headBefore: doc.sel.head,
             anchorAfter: selAfter.anchor, headAfter: selAfter.head};
      hist.done.push(cur);
      hist.generation = ++hist.maxGeneration;
      while (hist.done.length > hist.undoDepth)
        hist.done.shift();
    }
    hist.lastTime = time;
    hist.lastOp = opId;
    hist.lastOrigin = change.origin;
  }

  function removeClearedSpans(spans) {
    if (!spans) return null;
    for (var i = 0, out; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
      else if (out) out.push(spans[i]);
    }
    return !out ? spans : out.length ? out : null;
  }

  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) return null;
    for (var i = 0, nw = []; i < change.text.length; ++i)
      nw.push(removeClearedSpans(found[i]));
    return nw;
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup) {
    for (var i = 0, copy = []; i < events.length; ++i) {
      var event = events[i], changes = event.changes, newChanges = [];
      copy.push({changes: newChanges, anchorBefore: event.anchorBefore, headBefore: event.headBefore,
                 anchorAfter: event.anchorAfter, headAfter: event.headAfter});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m;
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        }
      }
    }
    return copy;
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSel(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      for (var j = 0; j < sub.changes.length; ++j) {
        var cur = sub.changes[j];
        if (!sub.copied) { cur.from = copyPos(cur.from); cur.to = copyPos(cur.to); }
        if (to < cur.from.line) {
          cur.from.line += diff;
          cur.to.line += diff;
        } else if (from <= cur.to.line) {
          ok = false;
          break;
        }
      }
      if (!sub.copied) {
        sub.anchorBefore = copyPos(sub.anchorBefore); sub.headBefore = copyPos(sub.headBefore);
        sub.anchorAfter = copyPos(sub.anchorAfter); sub.readAfter = copyPos(sub.headAfter);
        sub.copied = true;
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      } else {
        rebaseHistSel(sub.anchorBefore); rebaseHistSel(sub.headBefore);
        rebaseHistSel(sub.anchorAfter); rebaseHistSel(sub.headAfter);
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // EVENT OPERATORS

  function stopMethod() {e_stop(this);}
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopMethod;
    return event;
  }

  function e_preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
  CodeMirror.e_stop = e_stop;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) b = 1;
      else if (e.button & 2) b = 3;
      else if (e.button & 4) b = 2;
    }
    if (mac && e.ctrlKey && b == 1) b = 3;
    return b;
  }

  // EVENT HANDLING

  function on(emitter, type, f) {
    if (emitter.addEventListener)
      emitter.addEventListener(type, f, false);
    else if (emitter.attachEvent)
      emitter.attachEvent("on" + type, f);
    else {
      var map = emitter._handlers || (emitter._handlers = {});
      var arr = map[type] || (map[type] = []);
      arr.push(f);
    }
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener)
      emitter.removeEventListener(type, f, false);
    else if (emitter.detachEvent)
      emitter.detachEvent("on" + type, f);
    else {
      var arr = emitter._handlers && emitter._handlers[type];
      if (!arr) return;
      for (var i = 0; i < arr.length; ++i)
        if (arr[i] == f) { arr.splice(i, 1); break; }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
  }

  var delayedCallbacks, delayedCallbackDepth = 0;
  function signalLater(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    if (!delayedCallbacks) {
      ++delayedCallbackDepth;
      delayedCallbacks = [];
      setTimeout(fireDelayed, 0);
    }
    function bnd(f) {return function(){f.apply(null, args);};};
    for (var i = 0; i < arr.length; ++i)
      delayedCallbacks.push(bnd(arr[i]));
  }

  function signalDOMEvent(cm, e, override) {
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore;
  }

  function fireDelayed() {
    --delayedCallbackDepth;
    var delayed = delayedCallbacks;
    delayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  function hasHandler(emitter, type) {
    var arr = emitter._handlers && emitter._handlers[type];
    return arr && arr.length > 0;
  }

  CodeMirror.on = on; CodeMirror.off = off; CodeMirror.signal = signal;

  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // MISC UTILITIES

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerCutOff = 30;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = startIndex || 0, n = startValue || 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }
  CodeMirror.countColumn = countColumn;

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      spaceStrs.push(lst(spaceStrs) + " ");
    return spaceStrs[n];
  }

  function lst(arr) { return arr[arr.length-1]; }

  function selectInput(node) {
    if (ios) { // Mobile Safari apparently has a bug where select() is broken.
      node.selectionStart = 0;
      node.selectionEnd = node.value.length;
    } else {
      // Suppress mysterious IE10 errors
      try { node.select(); }
      catch(_e) {}
    }
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }

  function createObj(base, props) {
    function Obj() {}
    Obj.prototype = base;
    var inst = new Obj();
    if (props) copyObj(props, inst);
    return inst;
  }

  function copyObj(obj, target) {
    if (!target) target = {};
    for (var prop in obj) if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
    return target;
  }

  function emptyArray(size) {
    for (var a = [], i = 0; i < size; ++i) a.push(undefined);
    return a;
  }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args);};
  }

  var nonASCIISingleCaseWordChar = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordChar(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
  }

  function isEmpty(obj) {
    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
    return true;
  }

  var isExtendingChar = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;

  // DOM UTILITIES

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (style) e.style.cssText = style;
    if (typeof content == "string") setTextContent(e, content);
    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
    return e;
  }

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      e.removeChild(e.firstChild);
    return e;
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e);
  }

  function setTextContent(e, str) {
    if (ie_lt9) {
      e.innerHTML = "";
      e.appendChild(document.createTextNode(str));
    } else e.textContent = str;
  }

  function getRect(node) {
    return node.getBoundingClientRect();
  }
  CodeMirror.replaceGetRect = function(f) { getRect = f; };

  // FEATURE DETECTION

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie_lt9) return false;
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div;
  }();

  // For a reason I have yet to figure out, some browsers disallow
  // word wrapping between certain characters *only* if a new inline
  // element is started between them. This makes it hard to reliably
  // measure the position of things, since that requires inserting an
  // extra span. This terribly fragile set of tests matches the
  // character combinations that suffer from this phenomenon on the
  // various browsers.
  function spanAffectsWrapping() { return false; }
  if (gecko) // Only for "$'"
    spanAffectsWrapping = function(str, i) {
      return str.charCodeAt(i - 1) == 36 && str.charCodeAt(i) == 39;
    };
  else if (safari && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent))
    spanAffectsWrapping = function(str, i) {
      return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(str.slice(i - 1, i + 1));
    };
  else if (webkit && !/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent))
    spanAffectsWrapping = function(str, i) {
      if (i > 1 && str.charCodeAt(i - 1) == 45) {
        if (/\w/.test(str.charAt(i - 2)) && /[^\-?\.]/.test(str.charAt(i))) return true;
        if (i > 2 && /[\d\.,]/.test(str.charAt(i - 2)) && /[\d\.,]/.test(str.charAt(i))) return false;
      }
      return /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(str.slice(i - 1, i + 1));
    };

  var knownScrollbarWidth;
  function scrollbarWidth(measure) {
    if (knownScrollbarWidth != null) return knownScrollbarWidth;
    var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
    removeChildrenAndAdd(measure, test);
    if (test.offsetWidth)
      knownScrollbarWidth = test.offsetHeight - test.clientHeight;
    return knownScrollbarWidth || 0;
  }

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !ie_lt8;
    }
    if (zwspSupported) return elt("span", "\u200b");
    else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) nl = string.length;
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result;
  } : function(string){return string.split(/\r\n?|\n/);};
  CodeMirror.splitLines = splitLines;

  var hasSelection = window.getSelection ? function(te) {
    try { return te.selectionStart != te.selectionEnd; }
    catch(e) { return false; }
  } : function(te) {
    try {var range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) return false;
    return range.compareEndPoints("StartToEnd", range) != 0;
  };

  var hasCopyEvent = (function() {
    var e = elt("div");
    if ("oncopy" in e) return true;
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == 'function';
  })();

  // KEY NAMING

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
                  46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 109: "-", 107: "=", 127: "Delete",
                  186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
                  221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home",
                  63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete"};
  CodeMirror.keyNames = keyNames;
  (function() {
    // Number keys
    for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
    // Alphabetic keys
    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
    // Function keys
    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) return f(from, to, "ltr");
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
        found = true;
      }
    }
    if (!found) f(from, to, "ltr");
  }

  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
  function lineRight(line) {
    var order = getOrder(line);
    if (!order) return line.text.length;
    return bidiRight(lst(order));
  }

  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(cm.doc, line);
    if (visual != line) lineN = lineNo(visual);
    var order = getOrder(visual);
    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
    return Pos(lineN, ch);
  }
  function lineEnd(cm, lineN) {
    var merged, line;
    while (merged = collapsedSpanAtEnd(line = getLine(cm.doc, lineN)))
      lineN = merged.find().to.line;
    var order = getOrder(line);
    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
    return Pos(lineN, ch);
  }

  function compareBidiLevel(order, a, b) {
    var linedir = order[0].level;
    if (a == linedir) return true;
    if (b == linedir) return false;
    return a < b;
  }
  var bidiOther;
  function getBidiPartAt(order, pos) {
    for (var i = 0, found; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < pos && cur.to > pos) { bidiOther = null; return i; }
      if (cur.from == pos || cur.to == pos) {
        if (found == null) {
          found = i;
        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
          bidiOther = found;
          return i;
        } else {
          bidiOther = i;
          return found;
        }
      }
    }
    bidiOther = null;
    return found;
  }

  function moveInLine(line, pos, dir, byUnit) {
    if (!byUnit) return pos + dir;
    do pos += dir;
    while (pos > 0 && isExtendingChar.test(line.text.charAt(pos)));
    return pos;
  }

  // This is somewhat involved. It is needed in order to move
  // 'visually' through bi-directional text -- i.e., pressing left
  // should make the cursor go left, even when in RTL text. The
  // tricky part is the 'jumps', where RTL and LTR text touch each
  // other. This often requires the cursor offset to move more than
  // one unit, in order to visually move one unit.
  function moveVisually(line, start, dir, byUnit) {
    var bidi = getOrder(line);
    if (!bidi) return moveLogically(line, start, dir, byUnit);
    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

    for (;;) {
      if (target > part.from && target < part.to) return target;
      if (target == part.from || target == part.to) {
        if (getBidiPartAt(bidi, target) == pos) return target;
        part = bidi[pos += dir];
        return (dir > 0) == part.level % 2 ? part.to : part.from;
      } else {
        part = bidi[pos += dir];
        if (!part) return null;
        if ((dir > 0) == part.level % 2)
          target = moveInLine(line, part.to, -1, byUnit);
        else
          target = moveInLine(line, part.from, 1, byUnit);
      }
    }
  }

  function moveLogically(line, start, dir, byUnit) {
    var target = start + dir;
    if (byUnit) while (target > 0 && isExtendingChar.test(line.text.charAt(target))) target += dir;
    return target < 0 || target > line.text.length ? null : target;
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL";
    // Character types for codepoints 0x600 to 0x6ff
    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr";
    function charType(code) {
      if (code <= 0xff) return lowTypes.charAt(code);
      else if (0x590 <= code && code <= 0x5f4) return "R";
      else if (0x600 <= code && code <= 0x6ff) return arabicTypes.charAt(code - 0x600);
      else if (0x700 <= code && code <= 0x8ac) return "r";
      else return "L";
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
    // Browsers seem to always treat the boundaries of block elements as being L.
    var outerType = "L";

    return function(str) {
      if (!bidiRE.test(str)) return false;
      var len = str.length, types = [];
      for (var i = 0, type; i < len; ++i)
        types.push(type = charType(str.charCodeAt(i)));

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i = 0, prev = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "m") types[i] = prev;
        else prev = type;
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "1" && cur == "r") types[i] = "n";
        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
        var type = types[i];
        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
        else if (type == "," && prev == types[i+1] &&
                 (prev == "1" || prev == "n")) types[i] = prev;
        prev = type;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i = 0; i < len; ++i) {
        var type = types[i];
        if (type == ",") types[i] = "N";
        else if (type == "%") {
          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i && types[i-1] == "!") || (end < len - 1 && types[end] == "1") ? "1" : "N";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (cur == "L" && type == "1") types[i] = "L";
        else if (isStrong.test(type)) cur = type;
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i = 0; i < len; ++i) {
        if (isNeutral.test(types[i])) {
          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
          var before = (i ? types[i-1] : outerType) == "L";
          var after = (end < len - 1 ? types[end] : outerType) == "L";
          var replace = before || after ? "L" : "R";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i = 0; i < len;) {
        if (countsAsLeft.test(types[i])) {
          var start = i;
          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
          order.push({from: start, to: i, level: 0});
        } else {
          var pos = i, at = order.length;
          for (++i; i < len && types[i] != "L"; ++i) {}
          for (var j = pos; j < i;) {
            if (countsAsNum.test(types[j])) {
              if (pos < j) order.splice(at, 0, {from: pos, to: j, level: 1});
              var nstart = j;
              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
              order.splice(at, 0, {from: nstart, to: j, level: 2});
              pos = j;
            } else ++j;
          }
          if (pos < i) order.splice(at, 0, {from: pos, to: i, level: 1});
        }
      }
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length;
        order.unshift({from: 0, to: m[0].length, level: 0});
      }
      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
        lst(order).to -= m[0].length;
        order.push({from: len - m[0].length, to: len, level: 0});
      }
      if (order[0].level != lst(order).level)
        order.push({from: len, to: len, level: order[0].level});

      return order;
    };
  })();

  // THE END

  CodeMirror.version = "3.15.0";

  return CodeMirror;
})();

(function() {
  'use strict';

  var listRE = /^(\s*)([*+-]|(\d+)\.)(\s*)/,
      unorderedBullets = '*+-';

  CodeMirror.commands.newlineAndIndentContinueMarkdownList = function(cm) {
    var pos = cm.getCursor(),
        inList = cm.getStateAfter(pos.line).list,
        match;

    if (!inList || !(match = cm.getLine(pos.line).match(listRE))) {
      cm.execCommand('newlineAndIndent');
      return;
    }

    var indent = match[1], after = match[4];
    var bullet = unorderedBullets.indexOf(match[2]) >= 0
      ? match[2]
      : (parseInt(match[3], 10) + 1) + '.';

    cm.replaceSelection('\n' + indent + bullet + after, 'end');
  };

}());

CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var multilineTagIndentFactor = parserConfig.multilineTagIndentFactor || 1;
  var multilineTagIndentPastTag = parserConfig.multilineTagIndentPastTag || true;

  var Kludges = parserConfig.htmlMode ? {
    autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                      'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                      'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                      'track': true, 'wbr': true},
    implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                       'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                       'th': true, 'tr': true},
    contextGrabbers: {
      'dd': {'dd': true, 'dt': true},
      'dt': {'dd': true, 'dt': true},
      'li': {'li': true},
      'option': {'option': true, 'optgroup': true},
      'optgroup': {'optgroup': true},
      'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
            'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
            'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
            'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
            'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
      'rp': {'rp': true, 'rt': true},
      'rt': {'rp': true, 'rt': true},
      'tbody': {'tbody': true, 'tfoot': true},
      'td': {'td': true, 'th': true},
      'tfoot': {'tbody': true},
      'th': {'td': true, 'th': true},
      'thead': {'tbody': true, 'tfoot': true},
      'tr': {'tr': true}
    },
    doNotIndent: {"pre": true},
    allowUnquoted: true,
    allowMissing: true
  } : {
    autoSelfClosers: {},
    implicitlyClosed: {},
    contextGrabbers: {},
    doNotIndent: {},
    allowUnquoted: false,
    allowMissing: false
  };
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var tagName, type;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        var isClose = stream.eat("/");
        tagName = "";
        var c;
        while ((c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/))) tagName += c;
        if (!tagName) return "error";
        type = isClose ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      return "error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.eatWhile(/[^\s\u00a0=<>\"\']/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  var curState, curStream, setStyle;
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) curState.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }

  function pushContext(tagName, startOfLine) {
    var noIndent = Kludges.doNotIndent.hasOwnProperty(tagName) || (curState.context && curState.context.noIndent);
    curState.context = {
      prev: curState.context,
      tagName: tagName,
      indent: curState.indented,
      startOfLine: startOfLine,
      noIndent: noIndent
    };
  }
  function popContext() {
    if (curState.context) curState.context = curState.context.prev;
  }

  function element(type) {
    if (type == "openTag") {
      curState.tagName = tagName;
      curState.tagStart = curStream.column();
      return cont(attributes, endtag(curState.startOfLine));
    } else if (type == "closeTag") {
      var err = false;
      if (curState.context) {
        if (curState.context.tagName != tagName) {
          if (Kludges.implicitlyClosed.hasOwnProperty(curState.context.tagName.toLowerCase())) {
            popContext();
          }
          err = !curState.context || curState.context.tagName != tagName;
        }
      } else {
        err = true;
      }
      if (err) setStyle = "error";
      return cont(endclosetag(err));
    }
    return cont();
  }
  function endtag(startOfLine) {
    return function(type) {
      var tagName = curState.tagName;
      curState.tagName = curState.tagStart = null;
      if (type == "selfcloseTag" ||
          (type == "endTag" && Kludges.autoSelfClosers.hasOwnProperty(tagName.toLowerCase()))) {
        maybePopContext(tagName.toLowerCase());
        return cont();
      }
      if (type == "endTag") {
        maybePopContext(tagName.toLowerCase());
        pushContext(tagName, startOfLine);
        return cont();
      }
      return cont();
    };
  }
  function endclosetag(err) {
    return function(type) {
      if (err) setStyle = "error";
      if (type == "endTag") { popContext(); return cont(); }
      setStyle = "error";
      return cont(arguments.callee);
    };
  }
  function maybePopContext(nextTagName) {
    var parentTagName;
    while (true) {
      if (!curState.context) {
        return;
      }
      parentTagName = curState.context.tagName.toLowerCase();
      if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
          !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext();
    }
  }

  function attributes(type) {
    if (type == "word") {setStyle = "attribute"; return cont(attribute, attributes);}
    if (type == "endTag" || type == "selfcloseTag") return pass();
    setStyle = "error";
    return cont(attributes);
  }
  function attribute(type) {
    if (type == "equals") return cont(attvalue, attributes);
    if (!Kludges.allowMissing) setStyle = "error";
    else if (type == "word") setStyle = "attribute";
    return (type == "endTag" || type == "selfcloseTag") ? pass() : cont();
  }
  function attvalue(type) {
    if (type == "string") return cont(attvaluemaybe);
    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return cont();}
    setStyle = "error";
    return (type == "endTag" || type == "selfCloseTag") ? pass() : cont();
  }
  function attvaluemaybe(type) {
    if (type == "string") return cont(attvaluemaybe);
    else return pass();
  }

  return {
    startState: function() {
      return {tokenize: inText, cc: [], indented: 0, startOfLine: true, tagName: null, tagStart: null, context: null};
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol()) {
        state.startOfLine = true;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;

      setStyle = type = tagName = null;
      var style = state.tokenize(stream, state);
      state.type = type;
      if ((style || type) && style != "comment") {
        curState = state; curStream = stream;
        while (true) {
          var comb = state.cc.pop() || element;
          if (comb(type || style)) break;
        }
      }
      state.startOfLine = false;
      return setStyle || style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        return state.stringStartCol + 1;
      }
      if ((state.tokenize != inTag && state.tokenize != inText) ||
          context && context.noIndent)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (multilineTagIndentPastTag)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * multilineTagIndentFactor;
      }
      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      if (context && /^<\//.test(textAfter))
        context = context.prev;
      while (context && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return 0;
    },

    electricChars: "/",
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: parserConfig.htmlMode ? "html" : "xml",
    helperType: parserConfig.htmlMode ? "html" : "xml"
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlFound = CodeMirror.modes.hasOwnProperty("xml");
  var htmlMode = CodeMirror.getMode(cmCfg, htmlFound ? {name: "xml", htmlMode: true} : "text/plain");
  var aliases = {
    html: "htmlmixed",
    js: "javascript",
    json: "application/json",
    c: "text/x-csrc",
    "c++": "text/x-c++src",
    java: "text/x-java",
    csharp: "text/x-csharp",
    "c#": "text/x-csharp",
    scala: "text/x-scala"
  };

  var getMode = (function () {
    var i, modes = {}, mimes = {}, mime;

    var list = [];
    for (var m in CodeMirror.modes)
      if (CodeMirror.modes.propertyIsEnumerable(m)) list.push(m);
    for (i = 0; i < list.length; i++) {
      modes[list[i]] = list[i];
    }
    var mimesList = [];
    for (var m in CodeMirror.mimeModes)
      if (CodeMirror.mimeModes.propertyIsEnumerable(m))
        mimesList.push({mime: m, mode: CodeMirror.mimeModes[m]});
    for (i = 0; i < mimesList.length; i++) {
      mime = mimesList[i].mime;
      mimes[mime] = mimesList[i].mime;
    }

    for (var a in aliases) {
      if (aliases[a] in modes || aliases[a] in mimes)
        modes[a] = aliases[a];
    }

    return function (lang) {
      return modes[lang] ? CodeMirror.getMode(cmCfg, modes[lang]) : null;
    };
  }());

  // Should underscores in words open/close em/strong?
  if (modeCfg.underscoresBreakWords === undefined)
    modeCfg.underscoresBreakWords = true;

  // Turn on fenced code blocks? ("```" to start/end)
  if (modeCfg.fencedCodeBlocks === undefined) modeCfg.fencedCodeBlocks = false;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  var codeDepth = 0;

  var header   = 'header'
  ,   code     = 'comment'
  ,   quote1   = 'atom'
  ,   quote2   = 'number'
  ,   list1    = 'variable-2'
  ,   list2    = 'variable-3'
  ,   list3    = 'keyword'
  ,   hr       = 'hr'
  ,   image    = 'tag'
  ,   linkinline = 'link'
  ,   linkemail = 'link'
  ,   linktext = 'link'
  ,   linkhref = 'string'
  ,   em       = 'em'
  ,   strong   = 'strong';

  var hrRE = /^([*\-=_])(?:\s*\1){2,}\s*$/
  ,   ulRE = /^[*\-+]\s+/
  ,   olRE = /^[0-9]+\.\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow ulRE or olRE
  ,   headerRE = /^(?:\={1,}|-{1,})$/
  ,   textRE = /^[^!\[\]*_\\<>` "'(]+/;

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }


  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset state.quote
    state.quote = 0;
    if (!htmlFound && state.f == htmlBlock) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.thisLineHasContent = false;
    return null;
  }

  function blockNormal(stream, state) {

    var prevLineIsList = (state.list !== false);
    if (state.list !== false && state.indentationDiff >= 0) { // Continued list
      if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
        state.indentation -= state.indentationDiff;
      }
      state.list = null;
    } else if (state.list !== false && state.indentation > 0) {
      state.list = null;
      state.listDepth = Math.floor(state.indentation / 4);
    } else if (state.list !== false) { // No longer a list
      state.list = false;
      state.listDepth = 0;
    }

    if (state.indentationDiff >= 4) {
      state.indentation -= 4;
      stream.skipToEnd();
      return code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (stream.peek() === '#' || (state.prevLineHasContent && stream.match(headerRE)) ) {
      state.header = true;
    } else if (stream.eat('>')) {
      state.indentation++;
      state.quote = 1;
      stream.eatSpace();
      while (stream.eat('>')) {
        stream.eatSpace();
        state.quote++;
      }
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    } else if (stream.match(hrRE, true)) {
      return hr;
    } else if ((!state.prevLineHasContent || prevLineIsList) && (stream.match(ulRE, true) || stream.match(olRE, true))) {
      state.indentation += 4;
      state.list = true;
      state.listDepth++;
      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
    } else if (modeCfg.fencedCodeBlocks && stream.match(/^```([\w+#]*)/, true)) {
      // try switching mode
      state.localMode = getMode(RegExp.$1);
      if (state.localMode) state.localState = state.localMode.startState();
      switchBlock(stream, state, local);
      return code;
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (htmlFound && style === 'tag' && state.htmlState.type !== 'openTag' && !state.htmlState.context) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    if (state.md_inside && stream.current().indexOf(">")!=-1) {
      state.f = inlineNormal;
      state.block = blockNormal;
      state.htmlState.context = undefined;
    }
    return style;
  }

  function local(stream, state) {
    if (stream.sol() && stream.match(/^```/, true)) {
      state.localMode = state.localState = null;
      state.f = inlineNormal;
      state.block = blockNormal;
      return code;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.taskOpen) { return "meta"; }
    if (state.taskClosed) { return "property"; }

    if (state.strong) { styles.push(strong); }
    if (state.em) { styles.push(em); }

    if (state.linkText) { styles.push(linktext); }

    if (state.code) { styles.push(code); }

    if (state.header) { styles.push(header); }
    if (state.quote) { styles.push(state.quote % 2 ? quote1 : quote2); }
    if (state.list !== false) {
      var listMod = (state.listDepth - 1) % 3;
      if (!listMod) {
        styles.push(list1);
      } else if (listMod === 1) {
        styles.push(list2);
      } else {
        styles.push(list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] !== "x";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    var ch = stream.next();

    if (ch === '\\') {
      stream.next();
      return getType(state);
    }

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return linkhref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var t = getType(state);
      var before = stream.pos;
      stream.eatWhile('`');
      var difference = 1 + stream.pos - before;
      if (!state.code) {
        codeDepth = difference;
        state.code = true;
        return getType(state);
      } else {
        if (difference === codeDepth) { // Must be exact
          state.code = false;
          return t;
        }
        return getType(state);
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      stream.match(/\[[^\]]*\]/);
      state.inline = state.f = linkHref;
      return image;
    }

    if (ch === '[' && stream.match(/.*\](\(| ?\[)/, false)) {
      state.linkText = true;
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      return switchInline(stream, state, inlineElement(linkinline, '>'));
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      return switchInline(stream, state, inlineElement(linkemail, '>'));
    }

    if (ch === '<' && stream.match(/^\w/, false)) {
      if (stream.string.indexOf(">")!=-1) {
        var atts = stream.string.substring(1,stream.string.indexOf(">"));
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) {
          state.md_inside = true;
        }
      }
      stream.backUp(1);
      return switchBlock(stream, state, htmlBlock);
    }

    if (ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    }

    var ignoreUnderscore = false;
    if (!modeCfg.underscoresBreakWords) {
      if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
        var prevPos = stream.pos - 2;
        if (prevPos >= 0) {
          var prevCh = stream.string.charAt(prevPos);
          if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
            ignoreUnderscore = true;
          }
        }
      }
    }
    var t = getType(state);
    if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
      if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
        state.strong = false;
        return t;
      } else if (!state.strong && stream.eat(ch)) { // Add STRONG
        state.strong = ch;
        return getType(state);
      } else if (state.em === ch) { // Remove EM
        state.em = false;
        return t;
      } else if (!state.em) { // Add EM
        state.em = ch;
        return getType(state);
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (ch === ' ') {
      if (stream.match(/ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      return switchInline(stream, state, inlineElement(linkhref, ch === '(' ? ')' : ']'));
    }
    return 'error';
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^[^\]]*\]:/, true)) {
      state.f = footnoteUrl;
      return linktext;
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return linkhref;
  }

  var savedInlineRE = [];
  function inlineRE(endChar) {
    if (!savedInlineRE[endChar]) {
      // Escape endChar for RegExp (taken from http://stackoverflow.com/a/494122/526741)
      endChar = (endChar+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      // Match any non-endChar, escaped character, as well as the closing
      // endChar.
      savedInlineRE[endChar] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + endChar + ')');
    }
    return savedInlineRE[endChar];
  }

  function inlineElement(type, endChar, next) {
    next = next || inlineNormal;
    return function(stream, state) {
      stream.match(inlineRE(endChar));
      state.inline = state.f = next;
      return type;
    };
  }

  return {
    startState: function() {
      return {
        f: blockNormal,

        prevLineHasContent: false,
        thisLineHasContent: false,

        block: blockNormal,
        htmlState: CodeMirror.startState(htmlMode),
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        linkText: false,
        linkTitle: false,
        em: false,
        strong: false,
        header: false,
        taskList: false,
        list: false,
        listDepth: 0,
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLineHasContent: s.prevLineHasContent,
        thisLineHasContent: s.thisLineHasContent,

        block: s.block,
        htmlState: CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        linkTitle: s.linkTitle,
        em: s.em,
        strong: s.strong,
        header: s.header,
        taskList: s.taskList,
        list: s.list,
        listDepth: s.listDepth,
        quote: s.quote,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (stream.match(/^\s*$/, true)) {
          state.prevLineHasContent = false;
          return blankLine(state);
        } else {
          state.prevLineHasContent = state.thisLineHasContent;
          state.thisLineHasContent = true;
        }

        // Reset state.header
        state.header = false;

        // Reset state.taskList
        state.taskList = false;

        // Reset state.code
        state.code = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        state.f = state.block;
        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
        var difference = Math.floor((indentation - state.indentation) / 4) * 4;
        if (difference > 4) difference = 4;
        var adjustedIndentation = state.indentation + difference;
        state.indentationDiff = adjustedIndentation - state.indentation;
        state.indentation = adjustedIndentation;
        if (indentation > 0) return null;
      }
      return state.f(stream, state);
    },

    blankLine: blankLine,

    getType: getType
  };

}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");


var isMac = /Mac/.test(navigator.platform);

var shortcuts = {
  'Cmd-B': toggleBold,
  'Cmd-I': toggleItalic,
  'Cmd-K': drawLink,
  'Cmd-Alt-I': drawImage,
  "Cmd-'": toggleBlockquote,
  'Cmd-Alt-L': toggleOrderedList,
  'Cmd-L': toggleUnOrderedList
};


/**
 * Fix shortcut. Mac use Command, others use Ctrl.
 */
function fixShortcut(name) {
  if (isMac) {
    name = name.replace('Ctrl', 'Cmd');
  } else {
    name = name.replace('Cmd', 'Ctrl');
  }
  return name;
}


/**
 * Create icon element for toolbar.
 */
function createIcon(name, options) {
  options = options || {};
  var el = document.createElement('a');

  var shortcut = options.shortcut || shortcuts[name];
  if (shortcut) {
    shortcut = fixShortcut(shortcut);
    el.title = shortcut;
    el.title = el.title.replace('Cmd', '⌘');
    if (isMac) {
      el.title = el.title.replace('Alt', '⌥');
    }
  }

  el.className = options.className || 'eicon-' + name;
  return el;
}

function createSep() {
  el = document.createElement('i');
  el.className = 'separator';
  el.innerHTML = '|';
  return el;
}


/**
 * The state of CodeMirror at the given position.
 */
function getState(cm, pos) {
  pos = pos || cm.getCursor('start');
  var stat = cm.getTokenAt(pos);
  if (!stat.type) return {};

  var types = stat.type.split(' ');

  var ret = {}, data, text;
  for (var i = 0; i < types.length; i++) {
    data = types[i];
    if (data === 'strong') {
      ret.bold = true;
    } else if (data === 'variable-2') {
      text = cm.getLine(pos.line);
      if (/^\s*\d+\.\s/.test(text)) {
        ret['ordered-list'] = true;
      } else {
        ret['unordered-list'] = true;
      }
    } else if (data === 'atom') {
      ret.quote = true;
    } else if (data === 'em') {
      ret.italic = true;
    }
  }
  return ret;
}


/**
 * Toggle full screen of the editor.
 */
function toggleFullScreen(editor) {
  var el = editor.codemirror.getWrapperElement();

  // https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
  var doc = document;
  var isFull = doc.fullScreen || doc.mozFullScreen || doc.webkitFullScreen;
  var request = function() {
    if (el.requestFullScreen) {
      el.requestFullScreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullScreen) {
      el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  };
  var cancel = function() {
    if (doc.cancelFullScreen) {
      doc.cancelFullScreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen();
    }
  };
  if (!isFull) {
    request();
  } else if (cancel) {
    cancel();
  }
}


/**
 * Action for toggling bold.
 */
function toggleBold(editor) {
  var cm = editor.codemirror;
  var stat = getState(cm);

  var text;
  var start = '**';
  var end = '**';

  var startPoint = cm.getCursor('start');
  var endPoint = cm.getCursor('end');
  if (stat.bold) {
    text = cm.getLine(startPoint.line);
    start = text.slice(0, startPoint.ch);
    end = text.slice(startPoint.ch);

    start = start.replace(/^(.*)?(\*|\_){2}(\S+.*)?$/, '$1$3');
    end = end.replace(/^(.*\S+)?(\*|\_){2}(\s+.*)?$/, '$1$3');
    startPoint.ch -= 2;
    endPoint.ch -= 2;
    cm.setLine(startPoint.line, start + end);
  } else {
    text = cm.getSelection();
    cm.replaceSelection(start + text + end);

    startPoint.ch += 2;
    endPoint.ch += 2;
  }
  cm.setSelection(startPoint, endPoint);
  cm.focus();
}


/**
 * Action for toggling italic.
 */
function toggleItalic(editor) {
  var cm = editor.codemirror;
  var stat = getState(cm);

  var text;
  var start = '*';
  var end = '*';

  var startPoint = cm.getCursor('start');
  var endPoint = cm.getCursor('end');
  if (stat.italic) {
    text = cm.getLine(startPoint.line);
    start = text.slice(0, startPoint.ch);
    end = text.slice(startPoint.ch);

    start = start.replace(/^(.*)?(\*|\_)(\S+.*)?$/, '$1$3');
    end = end.replace(/^(.*\S+)?(\*|\_)(\s+.*)?$/, '$1$3');
    startPoint.ch -= 1;
    endPoint.ch -= 1;
    cm.setLine(startPoint.line, start + end);
  } else {
    text = cm.getSelection();
    cm.replaceSelection(start + text + end);

    startPoint.ch += 1;
    endPoint.ch += 1;
  }
  cm.setSelection(startPoint, endPoint);
  cm.focus();
}


/**
 * Action for toggling blockquote.
 */
function toggleBlockquote(editor) {
  var cm = editor.codemirror;
  _toggleLine(cm, 'quote');
}


/**
 * Action for toggling ul.
 */
function toggleUnOrderedList(editor) {
  var cm = editor.codemirror;
  _toggleLine(cm, 'unordered-list');
}


/**
 * Action for toggling ol.
 */
function toggleOrderedList(editor) {
  var cm = editor.codemirror;
  _toggleLine(cm, 'ordered-list');
}


/**
 * Action for drawing a link.
 */
function drawLink(editor) {
  var cm = editor.codemirror;
  var stat = getState(cm);
  _replaceSelection(cm, stat.link, '[', '](http://)');
}


/**
 * Action for drawing an img.
 */
function drawImage(editor) {
  var cm = editor.codemirror;
  var stat = getState(cm);
  _replaceSelection(cm, stat.image, '![', '](http://)');
}


/**
 * Undo action.
 */
function undo(editor) {
  var cm = editor.codemirror;
  cm.undo();
  cm.focus();
}


/**
 * Redo action.
 */
function redo(editor) {
  var cm = editor.codemirror;
  cm.redo();
  cm.focus();
}

/**
 * Preview action.
 */
function togglePreview(editor) {
  var toolbar = editor.toolbar.preview;
  var parse = editor.constructor.markdown;
  var cm = editor.codemirror;
  var wrapper = cm.getWrapperElement();
  var preview = wrapper.lastChild;
  if (!/editor-preview/.test(preview.className)) {
    preview = document.createElement('div');
    preview.className = 'editor-preview';
    wrapper.appendChild(preview);
  }
  if (/editor-preview-active/.test(preview.className)) {
    preview.className = preview.className.replace(
      /\s*editor-preview-active\s*/g, ''
    );
    toolbar.className = toolbar.className.replace(/\s*active\s*/g, '');
  } else {
    /* When the preview button is clicked for the first time,
     * give some time for the transition from editor.css to fire and the view to slide from right to left,
     * instead of just appearing.
     */
    setTimeout(function() {preview.className += ' editor-preview-active'}, 1);
    toolbar.className += ' active';
  }
  var text = cm.getValue();
  preview.innerHTML = parse(text);
}

function _replaceSelection(cm, active, start, end) {
  var text;
  var startPoint = cm.getCursor('start');
  var endPoint = cm.getCursor('end');
  if (active) {
    text = cm.getLine(startPoint.line);
    start = text.slice(0, startPoint.ch);
    end = text.slice(startPoint.ch);
    cm.setLine(startPoint.line, start + end);
  } else {
    text = cm.getSelection();
    cm.replaceSelection(start + text + end);

    startPoint.ch += start.length;
    endPoint.ch += start.length;
  }
  cm.setSelection(startPoint, endPoint);
  cm.focus();
}


function _toggleLine(cm, name) {
  var stat = getState(cm);
  var startPoint = cm.getCursor('start');
  var endPoint = cm.getCursor('end');
  var repl = {
    quote: /^(\s*)\>\s+/,
    'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
    'ordered-list': /^(\s*)\d+\.\s+/
  };
  var map = {
    quote: '> ',
    'unordered-list': '* ',
    'ordered-list': '1. '
  };
  for (var i = startPoint.line; i <= endPoint.line; i++) {
    (function(i) {
      var text = cm.getLine(i);
      if (stat[name]) {
        text = text.replace(repl[name], '$1');
      } else {
        text = map[name] + text;
      }
      cm.setLine(i, text);
    })(i);
  }
  cm.focus();
}


/* The right word count in respect for CJK. */
function wordCount(data) {
  var pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
  var m = data.match(pattern);
  var count = 0;
  if( m === null ) return count;
  for (var i = 0; i < m.length; i++) {
    if (m[i].charCodeAt(0) >= 0x4E00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}

var toolbar = [
  {name: 'bold', action: toggleBold},
  {name: 'italic', action: toggleItalic},
  '|',

  {name: 'quote', action: toggleBlockquote},
  {name: 'unordered-list', action: toggleUnOrderedList},
  {name: 'ordered-list', action: toggleOrderedList},
  '|',

  {name: 'link', action: drawLink},
  {name: 'image', action: drawImage},
  '|',

  {name: 'info', action: 'http://lab.lepture.com/editor/markdown'},
  {name: 'preview', action: togglePreview},
  {name: 'fullscreen', action: toggleFullScreen}
];

/**
 * Interface of Editor.
 */
function Editor(options) {
  options = options || {};

  if (options.element) {
    this.element = options.element;
  }

  options.toolbar = options.toolbar || Editor.toolbar;
  // you can customize toolbar with object
  // [{name: 'bold', shortcut: 'Ctrl-B', className: 'icon-bold'}]

  if (!options.hasOwnProperty('status')) {
    options.status = ['lines', 'words', 'cursor'];
  }

  this.options = options;

  // If user has passed an element, it should auto rendered
  if (this.element) {
    this.render();
  }
}

/**
 * Default toolbar elements.
 */
Editor.toolbar = toolbar;

/**
 * Default markdown render.
 */
Editor.markdown = function(text) {
  if (window.markdowniter) {
    // use marked as markdown parser
    return markdowniter.render(text);
  }
};

/**
 * Render editor to the given element.
 */
Editor.prototype.render = function(el) {
  if (!el) {
    el = this.element || document.getElementsByTagName('textarea')[0];
  }

  if (this._rendered && this._rendered === el) {
    // Already rendered.
    return;
  }

  this.element = el;
  var options = this.options;

  var self = this;
  var keyMaps = {};

  for (var key in shortcuts) {
    (function(key) {
      keyMaps[fixShortcut(key)] = function(cm) {
        shortcuts[key](self);
      };
    })(key);
  }

  keyMaps["Enter"] = "newlineAndIndentContinueMarkdownList";

  this.codemirror = CodeMirror.fromTextArea(el, {
    mode: 'markdown',
    theme: 'paper',
    indentWithTabs: true,
    lineNumbers: false,
    extraKeys: keyMaps
  });

  if (options.toolbar !== false) {
    this.createToolbar();
  }
  if (options.status !== false) {
    this.createStatusbar();
  }

  this._rendered = this.element;
};

Editor.prototype.createToolbar = function(items) {
  items = items || this.options.toolbar;

  if (!items || items.length === 0) {
    return;
  }

  var bar = document.createElement('div');
  bar.className = 'editor-toolbar';

  var self = this;

  var el;
  self.toolbar = {};

  for (var i = 0; i < items.length; i++) {
    (function(item) {
      var el;
      if (item.name) {
        el = createIcon(item.name, item);
      } else if (item === '|') {
        el = createSep();
      } else {
        el = createIcon(item);
      }

      // bind events, special for info
      if (item.action) {
        if (typeof item.action === 'function') {
          el.onclick = function(e) {
            item.action(self);
          };
        } else if (typeof item.action === 'string') {
          el.href = item.action;
          el.target = '_blank';
        }
      }
      self.toolbar[item.name || item] = el;
      bar.appendChild(el);
    })(items[i]);
  }

  var cm = this.codemirror;
  cm.on('cursorActivity', function() {
    var stat = getState(cm);

    for (var key in self.toolbar) {
      (function(key) {
        var el = self.toolbar[key];
        if (stat[key]) {
          el.className += ' active';
        } else {
          el.className = el.className.replace(/\s*active\s*/g, '');
        }
      })(key);
    }
  });

  var cmWrapper = cm.getWrapperElement();
  cmWrapper.parentNode.insertBefore(bar, cmWrapper);
  return bar;
};

Editor.prototype.createStatusbar = function(status) {
  status = status || this.options.status;

  if (!status || status.length === 0) return;

  var bar = document.createElement('div');
  bar.className = 'editor-statusbar';

  var pos, cm = this.codemirror;
  for (var i = 0; i < status.length; i++) {
    (function(name) {
      var el = document.createElement('span');
      el.className = name;
      if (name === 'words') {
        el.innerHTML = '0';
        cm.on('update', function() {
          el.innerHTML = wordCount(cm.getValue());
        });
      } else if (name === 'lines') {
        el.innerHTML = '0';
        cm.on('update', function() {
          el.innerHTML = cm.lineCount();
        });
      } else if (name === 'cursor') {
        el.innerHTML = '0:0';
        cm.on('cursorActivity', function() {
          pos = cm.getCursor();
          el.innerHTML = pos.line + ':' + pos.ch;
        });
      }
      bar.appendChild(el);
    })(status[i]);
  }
  var cmWrapper = this.codemirror.getWrapperElement();
  cmWrapper.parentNode.insertBefore(bar, cmWrapper.nextSibling);
  return bar;
};


/**
 * Bind static methods for exports.
 */
Editor.toggleBold = toggleBold;
Editor.toggleItalic = toggleItalic;
Editor.toggleBlockquote = toggleBlockquote;
Editor.toggleUnOrderedList = toggleUnOrderedList;
Editor.toggleOrderedList = toggleOrderedList;
Editor.drawLink = drawLink;
Editor.drawImage = drawImage;
Editor.undo = undo;
Editor.redo = redo;
Editor.toggleFullScreen = toggleFullScreen;

/**
 * Bind instance methods for exports.
 */
Editor.prototype.toggleBold = function() {
  toggleBold(this);
};
Editor.prototype.toggleItalic = function() {
  toggleItalic(this);
};
Editor.prototype.toggleBlockquote = function() {
  toggleBlockquote(this);
};
Editor.prototype.toggleUnOrderedList = function() {
  toggleUnOrderedList(this);
};
Editor.prototype.toggleOrderedList = function() {
  toggleOrderedList(this);
};
Editor.prototype.drawLink = function() {
  drawLink(this);
};
Editor.prototype.drawImage = function() {
  drawImage(this);
};
Editor.prototype.undo = function() {
  undo(this);
};
Editor.prototype.redo = function() {
  redo(this);
};
Editor.prototype.toggleFullScreen = function() {
  toggleFullScreen(this);
};

global.Editor = Editor;
global.CodeMirror = CodeMirror;
})(this);

/*! WebUploader 0.1.5 */


/**
* @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
*
* AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
*/
(function (root, factory) {
    var modules = {},

    // 内部require, 简单不完全实现。
    // https://github.com/amdjs/amdjs-api/wiki/require
        _require = function (deps, callback) {
            var args, len, i;

            // 如果deps不是数组，则直接返回指定module
            if (typeof deps === 'string') {
                return getModule(deps);
            } else {
                args = [];
                for (len = deps.length, i = 0; i < len; i++) {
                    args.push(getModule(deps[i]));
                }

                return callback.apply(null, args);
            }
        },

    // 内部define，暂时不支持不指定id.
        _define = function (id, deps, factory) {
            if (arguments.length === 2) {
                factory = deps;
                deps = null;
            }

            _require(deps || [], function () {
                setModule(id, factory, arguments);
            });
        },

    // 设置module, 兼容CommonJs写法。
        setModule = function (id, factory, args) {
            var module = {
                exports: factory
            },
                returned;

            if (typeof factory === 'function') {
                args.length || (args = [_require, module.exports, module]);
                returned = factory.apply(null, args);
                returned !== undefined && (module.exports = returned);
            }

            modules[id] = module.exports;
        },

    // 根据id获取module
        getModule = function (id) {
            var module = modules[id] || root[id];

            if (!module) {
                throw new Error('`' + id + '` is undefined');
            }

            return module;
        },

    // 将所有modules，将路径ids装换成对象。
        exportsTo = function (obj) {
            var key, host, parts, part, last, ucFirst;

            // make the first character upper case.
            ucFirst = function (str) {
                return str && (str.charAt(0).toUpperCase() + str.substr(1));
            };

            for (key in modules) {
                host = obj;

                if (!modules.hasOwnProperty(key)) {
                    continue;
                }

                parts = key.split('/');
                last = ucFirst(parts.pop());

                while ((part = ucFirst(parts.shift()))) {
                    host[part] = host[part] || {};
                    host = host[part];
                }

                host[last] = modules[key];
            }

            return obj;
        },

        makeExport = function (dollar) {
            root.__dollar = dollar;

            // exports every module.
            return exportsTo(factory(root, _define, _require));
        },

        origin;

    if (typeof module === 'object' && typeof module.exports === 'object') {

        // For CommonJS and CommonJS-like environments where a proper window is present,
        module.exports = makeExport();
    } else if (typeof define === 'function' && define.amd) {

        // Allow using this built library as an AMD module
        // in another project. That other project will only
        // see this AMD call, not the internal modules in
        // the closure below.
        define('webuploader', ['jquery'], makeExport);
    } else {

        // Browser globals case. Just assign the
        // result to a property on the global.
        origin = root.WebUploader;
        root.WebUploader = makeExport();
        root.WebUploader.noConflict = function () {
            root.WebUploader = origin;
        };
    }
})(window, function (window, define, require) {


    /**
    * @fileOverview jQuery or Zepto
    */
    define('dollar-third', [], function () {
        var $ = window.__dollar || window.jQuery || window.Zepto;

        if (!$) {
            throw new Error('jQuery or Zepto not found!');
        }

        return $;
    });
    /**
    * @fileOverview Dom 操作相关
    */
    define('dollar', [
        'dollar-third'
    ], function (_) {
        return _;
    });
    /**
    * @fileOverview 使用jQuery的Promise
    */
    define('promise-third', [
        'dollar'
    ], function ($) {
        return {
            Deferred: $.Deferred,
            when: $.when,

            isPromise: function (anything) {
                return anything && typeof anything.then === 'function';
            }
        };
    });
    /**
    * @fileOverview Promise/A+
    */
    define('promise', [
        'promise-third'
    ], function (_) {
        return _;
    });
    /**
    * @fileOverview 基础类方法。
    */

    /**
    * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
    *
    * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
    * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
    *
    * * module `base`：WebUploader.Base
    * * module `file`: WebUploader.File
    * * module `lib/dnd`: WebUploader.Lib.Dnd
    * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
    *
    *
    * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
    * @module WebUploader
    * @title WebUploader API文档
    */
    define('base', [
        'dollar',
        'promise'
    ], function ($, promise) {

        var noop = function () { },
            call = Function.call;

        // http://jsperf.com/uncurrythis
        // 反科里化
        function uncurryThis(fn) {
            return function () {
                return call.apply(fn, arguments);
            };
        }

        function bindFn(fn, context) {
            return function () {
                return fn.apply(context, arguments);
            };
        }

        function createObject(proto) {
            var f;

            if (Object.create) {
                return Object.create(proto);
            } else {
                f = function () { };
                f.prototype = proto;
                return new f();
            }
        }


        /**
        * 基础类，提供一些简单常用的方法。
        * @class Base
        */
        return {

            /**
            * @property {String} version 当前版本号。
            */
            version: '0.1.5',

            /**
            * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
            */
            $: $,

            Deferred: promise.Deferred,

            isPromise: promise.isPromise,

            when: promise.when,

            /**
            * @description  简单的浏览器检查结果。
            *
            * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
            * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
            * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
            * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
            * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
            * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
            *
            * @property {Object} [browser]
            */
            browser: (function (ua) {
                var ret = {},
                    webkit = ua.match(/WebKit\/([\d.]+)/),
                    chrome = ua.match(/Chrome\/([\d.]+)/) ||
                        ua.match(/CriOS\/([\d.]+)/),

                    ie = ua.match(/MSIE\s([\d\.]+)/) ||
                        ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                    firefox = ua.match(/Firefox\/([\d.]+)/),
                    safari = ua.match(/Safari\/([\d.]+)/),
                    opera = ua.match(/OPR\/([\d.]+)/);

                webkit && (ret.webkit = parseFloat(webkit[1]));
                chrome && (ret.chrome = parseFloat(chrome[1]));
                ie && (ret.ie = parseFloat(ie[1]));
                firefox && (ret.firefox = parseFloat(firefox[1]));
                safari && (ret.safari = parseFloat(safari[1]));
                opera && (ret.opera = parseFloat(opera[1]));

                return ret;
            })(navigator.userAgent),

            /**
            * @description  操作系统检查结果。
            *
            * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
            * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
            * @property {Object} [os]
            */
            os: (function (ua) {
                var ret = {},

                // osx = !!ua.match( /\(Macintosh\; Intel / ),
                    android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                    ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);

                // osx && (ret.osx = true);
                android && (ret.android = parseFloat(android[1]));
                ios && (ret.ios = parseFloat(ios[1].replace(/_/g, '.')));

                return ret;
            })(navigator.userAgent),

            /**
            * 实现类与类之间的继承。
            * @method inherits
            * @grammar Base.inherits( super ) => child
            * @grammar Base.inherits( super, protos ) => child
            * @grammar Base.inherits( super, protos, statics ) => child
            * @param  {Class} super 父类
            * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
            * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
            * @param  {Object} [statics] 静态属性或方法。
            * @return {Class} 返回子类。
            * @example
            * function Person() {
            *     console.log( 'Super' );
            * }
            * Person.prototype.hello = function() {
            *     console.log( 'hello' );
            * };
            *
            * var Manager = Base.inherits( Person, {
            *     world: function() {
            *         console.log( 'World' );
            *     }
            * });
            *
            * // 因为没有指定构造器，父类的构造器将会执行。
            * var instance = new Manager();    // => Super
            *
            * // 继承子父类的方法
            * instance.hello();    // => hello
            * instance.world();    // => World
            *
            * // 子类的__super__属性指向父类
            * console.log( Manager.__super__ === Person );    // => true
            */
            inherits: function (Super, protos, staticProtos) {
                var child;

                if (typeof protos === 'function') {
                    child = protos;
                    protos = null;
                } else if (protos && protos.hasOwnProperty('constructor')) {
                    child = protos.constructor;
                } else {
                    child = function () {
                        return Super.apply(this, arguments);
                    };
                }

                // 复制静态方法
                $.extend(true, child, Super, staticProtos || {});

                /* jshint camelcase: false */

                // 让子类的__super__属性指向父类。
                child.__super__ = Super.prototype;

                // 构建原型，添加原型方法或属性。
                // 暂时用Object.create实现。
                child.prototype = createObject(Super.prototype);
                protos && $.extend(true, child.prototype, protos);

                return child;
            },

            /**
            * 一个不做任何事情的方法。可以用来赋值给默认的callback.
            * @method noop
            */
            noop: noop,

            /**
            * 返回一个新的方法，此方法将已指定的`context`来执行。
            * @grammar Base.bindFn( fn, context ) => Function
            * @method bindFn
            * @example
            * var doSomething = function() {
            *         console.log( this.name );
            *     },
            *     obj = {
            *         name: 'Object Name'
            *     },
            *     aliasFn = Base.bind( doSomething, obj );
            *
            *  aliasFn();    // => Object Name
            *
            */
            bindFn: bindFn,

            /**
            * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
            * @grammar Base.log( args... ) => undefined
            * @method log
            */
            log: (function () {
                if (window.console) {
                    return bindFn(console.log, console);
                }
                return noop;
            })(),

            nextTick: (function () {

                return function (cb) {
                    setTimeout(cb, 1);
                };

                // @bug 当浏览器不在当前窗口时就停了。
                // var next = window.requestAnimationFrame ||
                //     window.webkitRequestAnimationFrame ||
                //     window.mozRequestAnimationFrame ||
                //     function( cb ) {
                //         window.setTimeout( cb, 1000 / 60 );
                //     };

                // // fix: Uncaught TypeError: Illegal invocation
                // return bindFn( next, window );
            })(),

            /**
            * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
            * 将用来将非数组对象转化成数组对象。
            * @grammar Base.slice( target, start[, end] ) => Array
            * @method slice
            * @example
            * function doSomthing() {
            *     var args = Base.slice( arguments, 1 );
            *     console.log( args );
            * }
            *
            * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
            */
            slice: uncurryThis([].slice),

            /**
            * 生成唯一的ID
            * @method guid
            * @grammar Base.guid() => String
            * @grammar Base.guid( prefx ) => String
            */
            guid: (function () {
                var counter = 0;

                return function (prefix) {
                    var guid = (+new Date()).toString(32),
                        i = 0;

                    for (; i < 5; i++) {
                        guid += Math.floor(Math.random() * 65535).toString(32);
                    }

                    return (prefix || 'wu_') + guid + (counter++).toString(32);
                };
            })(),

            /**
            * 格式化文件大小, 输出成带单位的字符串
            * @method formatSize
            * @grammar Base.formatSize( size ) => String
            * @grammar Base.formatSize( size, pointLength ) => String
            * @grammar Base.formatSize( size, pointLength, units ) => String
            * @param {Number} size 文件大小
            * @param {Number} [pointLength=2] 精确到的小数点数。
            * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
            * @example
            * console.log( Base.formatSize( 100 ) );    // => 100B
            * console.log( Base.formatSize( 1024 ) );    // => 1.00K
            * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
            * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
            * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
            * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
            */
            formatSize: function (size, pointLength, units) {
                var unit;

                units = units || ['B', 'K', 'M', 'G', 'TB'];

                while ((unit = units.shift()) && size > 1024) {
                    size = size / 1024;
                }

                return (unit === 'B' ? size : size.toFixed(pointLength || 2)) +
                        unit;
            }
        };
    });
    /**
    * 事件处理类，可以独立使用，也可以扩展给对象使用。
    * @fileOverview Mediator
    */
    define('mediator', [
        'base'
    ], function (Base) {
        var $ = Base.$,
            slice = [].slice,
            separator = /\s+/,
            protos;

        // 根据条件过滤出事件handlers.
        function findHandlers(arr, name, callback, context) {
            return $.grep(arr, function (handler) {
                return handler &&
                        (!name || handler.e === name) &&
                        (!callback || handler.cb === callback ||
                        handler.cb._cb === callback) &&
                        (!context || handler.ctx === context);
            });
        }

        function eachEvent(events, callback, iterator) {
            // 不支持对象，只支持多个event用空格隔开
            $.each((events || '').split(separator), function (_, key) {
                iterator(key, callback);
            });
        }

        function triggerHanders(events, args) {
            var stoped = false,
                i = -1,
                len = events.length,
                handler;

            while (++i < len) {
                handler = events[i];

                if (handler.cb.apply(handler.ctx2, args) === false) {
                    stoped = true;
                    break;
                }
            }

            return !stoped;
        }

        protos = {

            /**
            * 绑定事件。
            *
            * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
            * ```javascript
            * var obj = {};
            *
            * // 使得obj有事件行为
            * Mediator.installTo( obj );
            *
            * obj.on( 'testa', function( arg1, arg2 ) {
            *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
            * });
            *
            * obj.trigger( 'testa', 'arg1', 'arg2' );
            * ```
            *
            * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
            * 切会影响到`trigger`方法的返回值，为`false`。
            *
            * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
            * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
            * ```javascript
            * obj.on( 'all', function( type, arg1, arg2 ) {
            *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
            * });
            * ```
            *
            * @method on
            * @grammar on( name, callback[, context] ) => self
            * @param  {String}   name     事件名，支持多个事件用空格隔开
            * @param  {Function} callback 事件处理器
            * @param  {Object}   [context]  事件处理器的上下文。
            * @return {self} 返回自身，方便链式
            * @chainable
            * @class Mediator
            */
            on: function (name, callback, context) {
                var me = this,
                    set;

                if (!callback) {
                    return this;
                }

                set = this._events || (this._events = []);

                eachEvent(name, callback, function (name, callback) {
                    var handler = { e: name };

                    handler.cb = callback;
                    handler.ctx = context;
                    handler.ctx2 = context || me;
                    handler.id = set.length;

                    set.push(handler);
                });

                return this;
            },

            /**
            * 绑定事件，且当handler执行完后，自动解除绑定。
            * @method once
            * @grammar once( name, callback[, context] ) => self
            * @param  {String}   name     事件名
            * @param  {Function} callback 事件处理器
            * @param  {Object}   [context]  事件处理器的上下文。
            * @return {self} 返回自身，方便链式
            * @chainable
            */
            once: function (name, callback, context) {
                var me = this;

                if (!callback) {
                    return me;
                }

                eachEvent(name, callback, function (name, callback) {
                    var once = function () {
                        me.off(name, once);
                        return callback.apply(context || me, arguments);
                    };

                    once._cb = callback;
                    me.on(name, once, context);
                });

                return me;
            },

            /**
            * 解除事件绑定
            * @method off
            * @grammar off( [name[, callback[, context] ] ] ) => self
            * @param  {String}   [name]     事件名
            * @param  {Function} [callback] 事件处理器
            * @param  {Object}   [context]  事件处理器的上下文。
            * @return {self} 返回自身，方便链式
            * @chainable
            */
            off: function (name, cb, ctx) {
                var events = this._events;

                if (!events) {
                    return this;
                }

                if (!name && !cb && !ctx) {
                    this._events = [];
                    return this;
                }

                eachEvent(name, cb, function (name, cb) {
                    $.each(findHandlers(events, name, cb, ctx), function () {
                        delete events[this.id];
                    });
                });

                return this;
            },

            /**
            * 触发事件
            * @method trigger
            * @grammar trigger( name[, args...] ) => self
            * @param  {String}   type     事件名
            * @param  {*} [...] 任意参数
            * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
            */
            trigger: function (type) {
                var args, events, allEvents;

                if (!this._events || !type) {
                    return this;
                }

                args = slice.call(arguments, 1);
                events = findHandlers(this._events, type);
                allEvents = findHandlers(this._events, 'all');

                return triggerHanders(events, args) &&
                        triggerHanders(allEvents, arguments);
            }
        };

        /**
        * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
        * 主要目的是负责模块与模块之间的合作，降低耦合度。
        *
        * @class Mediator
        */
        return $.extend({

            /**
            * 可以通过这个接口，使任何对象具备事件功能。
            * @method installTo
            * @param  {Object} obj 需要具备事件行为的对象。
            * @return {Object} 返回obj.
            */
            installTo: function (obj) {
                return $.extend(obj, protos);
            }

        }, protos);
    });
    /**
    * @fileOverview Uploader上传类
    */
    define('uploader', [
        'base',
        'mediator'
    ], function (Base, Mediator) {

        var $ = Base.$;

        /**
        * 上传入口类。
        * @class Uploader
        * @constructor
        * @grammar new Uploader( opts ) => Uploader
        * @example
        * var uploader = WebUploader.Uploader({
        *     swf: 'path_of_swf/Uploader.swf',
        *
        *     // 开起分片上传。
        *     chunked: true
        * });
        */
        function Uploader(opts) {
            this.options = $.extend(true, {}, Uploader.options, opts);
            this._init(this.options);
        }

        // default Options
        // widgets中有相应扩展
        Uploader.options = {};
        Mediator.installTo(Uploader.prototype);

        // 批量添加纯命令式方法。
        $.each({
            upload: 'start-upload',
            stop: 'stop-upload',
            getFile: 'get-file',
            getFiles: 'get-files',
            addFile: 'add-file',
            addFiles: 'add-file',
            sort: 'sort-files',
            removeFile: 'remove-file',
            skipFile: 'skip-file',
            retry: 'retry',
            isInProgress: 'is-in-progress',
            makeThumb: 'make-thumb',
            md5File: 'md5-file',
            getDimension: 'get-dimension',
            addButton: 'add-btn',
            getRuntimeType: 'get-runtime-type',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable',
            reset: 'reset'
        }, function (fn, command) {
            Uploader.prototype[fn] = function () {
                return this.request(command, arguments);
            };
        });

        $.extend(Uploader.prototype, {
            state: 'pending',

            _init: function (opts) {
                var me = this;

                me.request('init', opts, function () {
                    me.state = 'ready';
                    me.trigger('ready');
                });
            },

            /**
            * 获取或者设置Uploader配置项。
            * @method option
            * @grammar option( key ) => *
            * @grammar option( key, val ) => self
            * @example
            *
            * // 初始状态图片上传前不会压缩
            * var uploader = new WebUploader.Uploader({
            *     compress: null;
            * });
            *
            * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
            * uploader.option( 'compress', {
            *     width: 1600,
            *     height: 1600
            * });
            */
            option: function (key, val) {
                var opts = this.options;

                // setter
                if (arguments.length > 1) {

                    if ($.isPlainObject(val) &&
                            $.isPlainObject(opts[key])) {
                        $.extend(opts[key], val);
                    } else {
                        opts[key] = val;
                    }

                } else {    // getter
                    return key ? opts[key] : opts;
                }
            },

            /**
            * 获取文件统计信息。返回一个包含一下信息的对象。
            * * `successNum` 上传成功的文件数
            * * `successNum` 上传中的文件数
            * * `uploadFailNum` 上传失败的文件数
            * * `cancelNum` 被删除的文件数
            * * `invalidNum` 无效的文件数
            * * `queueNum` 还在队列中的文件数
            * @method getStats
            * @grammar getStats() => Object
            */
            getStats: function () {
                // return this._mgr.getStats.apply( this._mgr, arguments );
                var stats = this.request('get-stats');

                return {
                    successNum: stats.numOfSuccess,
                    progressNum: stats.numOfProgress,

                    // who care?
                    // queueFailNum: 0,
                    cancelNum: stats.numOfCancel,
                    invalidNum: stats.numOfInvalid,
                    uploadFailNum: stats.numOfUploadFailed,
                    queueNum: stats.numOfQueue
                };
            },

            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
            trigger: function (type/*, args...*/) {
                var args = [].slice.call(arguments, 1),
                    opts = this.options,
                    name = 'on' + type.substring(0, 1).toUpperCase() +
                        type.substring(1);

                if (
                // 调用通过on方法注册的handler.
                        Mediator.trigger.apply(this, arguments) === false ||

                // 调用opts.onEvent
                        $.isFunction(opts[name]) &&
                        opts[name].apply(this, args) === false ||

                // 调用this.onEvent
                        $.isFunction(this[name]) &&
                        this[name].apply(this, args) === false ||

                // 广播所有uploader的事件。
                        Mediator.trigger.apply(Mediator,
                        [this, type].concat(args)) === false) {

                    return false;
                }

                return true;
            },

            // widgets/widget.js将补充此方法的详细文档。
            request: Base.noop
        });

        /**
        * 创建Uploader实例，等同于new Uploader( opts );
        * @method create
        * @class Base
        * @static
        * @grammar Base.create( opts ) => Uploader
        */
        Base.create = Uploader.create = function (opts) {
            return new Uploader(opts);
        };

        // 暴露Uploader，可以通过它来扩展业务逻辑。
        Base.Uploader = Uploader;

        return Uploader;
    });
    /**
    * @fileOverview Runtime管理器，负责Runtime的选择, 连接
    */
    define('runtime/runtime', [
        'base',
        'mediator'
    ], function (Base, Mediator) {

        var $ = Base.$,
            factories = {},

        // 获取对象的第一个key
            getFirstKey = function (obj) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        return key;
                    }
                }
                return null;
            };

        // 接口类。
        function Runtime(options) {
            this.options = $.extend({
                container: document.body
            }, options);
            this.uid = Base.guid('rt_');
        }

        $.extend(Runtime.prototype, {

            getContainer: function () {
                var opts = this.options,
                    parent, container;

                if (this._container) {
                    return this._container;
                }

                parent = $(opts.container || document.body);
                container = $(document.createElement('div'));

                container.attr('id', 'rt_' + this.uid);
                container.css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: parent.width() || '1px',
                    height: parent.height() || '1px',
                    overflow: 'hidden'
                });

                parent.append(container);
                parent.addClass('webuploader-container');
                this._container = container;
                return container;
            },

            init: Base.noop,
            exec: Base.noop,

            destroy: function () {
                if (this._container) {
                    this._container.parentNode.removeChild(this.__container);
                }

                this.off();
            }
        });

        Runtime.orders = 'html5,flash';


        /**
        * 添加Runtime实现。
        * @param {String} type    类型
        * @param {Runtime} factory 具体Runtime实现。
        */
        Runtime.addRuntime = function (type, factory) {
            factories[type] = factory;
        };

        Runtime.hasRuntime = function (type) {
            return !!(type ? factories[type] : getFirstKey(factories));
        };

        Runtime.create = function (opts, orders) {
            var type, runtime;

            orders = orders || Runtime.orders;
            $.each(orders.split(/\s*,\s*/g), function () {
                if (factories[this]) {
                    type = this;
                    return false;
                }
            });

            type = type || getFirstKey(factories);

            if (!type) {
                alert('程序需要 Flash 11 以上版本才能正常运行，请前往：http://get.adobe.com/cn/flashplayer/ 安装');
                throw new Error('Runtime Error');
            }

            runtime = new factories[type](opts);
            return runtime;
        };

        Mediator.installTo(Runtime.prototype);
        return Runtime;
    });

    /**
    * @fileOverview Runtime管理器，负责Runtime的选择, 连接
    */
    define('runtime/client', [
        'base',
        'mediator',
        'runtime/runtime'
    ], function (Base, Mediator, Runtime) {

        var cache;

        cache = (function () {
            var obj = {};

            return {
                add: function (runtime) {
                    obj[runtime.uid] = runtime;
                },

                get: function (ruid, standalone) {
                    var i;

                    if (ruid) {
                        return obj[ruid];
                    }

                    for (i in obj) {
                        // 有些类型不能重用，比如filepicker.
                        if (standalone && obj[i].__standalone) {
                            continue;
                        }

                        return obj[i];
                    }

                    return null;
                },

                remove: function (runtime) {
                    delete obj[runtime.uid];
                }
            };
        })();

        function RuntimeClient(component, standalone) {
            var deferred = Base.Deferred(),
                runtime;

            this.uid = Base.guid('client_');

            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
            this.runtimeReady = function (cb) {
                return deferred.done(cb);
            };

            this.connectRuntime = function (opts, cb) {

                // already connected.
                if (runtime) {
                    throw new Error('already connected!');
                }

                deferred.done(cb);

                if (typeof opts === 'string' && cache.get(opts)) {
                    runtime = cache.get(opts);
                }

                // 像filePicker只能独立存在，不能公用。
                runtime = runtime || cache.get(null, standalone);

                // 需要创建
                if (!runtime) {
                    runtime = Runtime.create(opts, opts.runtimeOrder);
                    runtime.__promise = deferred.promise();
                    runtime.once('ready', deferred.resolve);
                    runtime.init();
                    cache.add(runtime);
                    runtime.__client = 1;
                } else {
                    // 来自cache
                    Base.$.extend(runtime.options, opts);
                    runtime.__promise.then(deferred.resolve);
                    runtime.__client++;
                }

                standalone && (runtime.__standalone = standalone);
                return runtime;
            };

            this.getRuntime = function () {
                return runtime;
            };

            this.disconnectRuntime = function () {
                if (!runtime) {
                    return;
                }

                runtime.__client--;

                if (runtime.__client <= 0) {
                    cache.remove(runtime);
                    delete runtime.__promise;
                    runtime.destroy();
                }

                runtime = null;
            };

            this.exec = function () {
                if (!runtime) {
                    return;
                }

                var args = Base.slice(arguments);
                component && args.unshift(component);

                return runtime.exec.apply(this, args);
            };

            this.getRuid = function () {
                return runtime && runtime.uid;
            };

            this.destroy = (function (destroy) {
                return function () {
                    destroy && destroy.apply(this, arguments);
                    this.trigger('destroy');
                    this.off();
                    this.exec('destroy');
                    this.disconnectRuntime();
                };
            })(this.destroy);
        }

        Mediator.installTo(RuntimeClient.prototype);
        return RuntimeClient;
    });
    /**
    * @fileOverview 错误信息
    */
    define('lib/dnd', [
        'base',
        'mediator',
        'runtime/client'
    ], function (Base, Mediator, RuntimeClent) {

        var $ = Base.$;

        function DragAndDrop(opts) {
            opts = this.options = $.extend({}, DragAndDrop.options, opts);

            opts.container = $(opts.container);

            if (!opts.container.length) {
                return;
            }

            RuntimeClent.call(this, 'DragAndDrop');
        }

        DragAndDrop.options = {
            accept: null,
            disableGlobalDnd: false
        };

        Base.inherits(RuntimeClent, {
            constructor: DragAndDrop,

            init: function () {
                var me = this;

                me.connectRuntime(me.options, function () {
                    me.exec('init');
                    me.trigger('ready');
                });
            },

            destroy: function () {
                this.disconnectRuntime();
            }
        });

        Mediator.installTo(DragAndDrop.prototype);

        return DragAndDrop;
    });
    /**
    * @fileOverview 组件基类。
    */
    define('widgets/widget', [
        'base',
        'uploader'
    ], function (Base, Uploader) {

        var $ = Base.$,
            _init = Uploader.prototype._init,
            IGNORE = {},
            widgetClass = [];

        function isArrayLike(obj) {
            if (!obj) {
                return false;
            }

            var length = obj.length,
                type = $.type(obj);

            if (obj.nodeType === 1 && length) {
                return true;
            }

            return type === 'array' || type !== 'function' && type !== 'string' &&
                    (length === 0 || typeof length === 'number' && length > 0 &&
                    (length - 1) in obj);
        }

        function Widget(uploader) {
            this.owner = uploader;
            this.options = uploader.options;
        }

        $.extend(Widget.prototype, {

            init: Base.noop,

            // 类Backbone的事件监听声明，监听uploader实例上的事件
            // widget直接无法监听事件，事件只能通过uploader来传递
            invoke: function (apiName, args) {

                /*
                {
                'make-thumb': 'makeThumb'
                }
                */
                var map = this.responseMap;

                // 如果无API响应声明则忽略
                if (!map || !(apiName in map) || !(map[apiName] in this) ||
                        !$.isFunction(this[map[apiName]])) {

                    return IGNORE;
                }

                return this[map[apiName]].apply(this, args);

            },

            /**
            * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
            * @method request
            * @grammar request( command, args ) => * | Promise
            * @grammar request( command, args, callback ) => Promise
            * @for  Uploader
            */
            request: function () {
                return this.owner.request.apply(this.owner, arguments);
            }
        });

        // 扩展Uploader.
        $.extend(Uploader.prototype, {

            // 覆写_init用来初始化widgets
            _init: function () {
                var me = this,
                    widgets = me._widgets = [];

                $.each(widgetClass, function (_, klass) {
                    widgets.push(new klass(me));
                });

                return _init.apply(me, arguments);
            },

            request: function (apiName, args, callback) {
                var i = 0,
                    widgets = this._widgets,
                    len = widgets.length,
                    rlts = [],
                    dfds = [],
                    widget, rlt, promise, key;

                args = isArrayLike(args) ? args : [args];

                for (; i < len; i++) {
                    widget = widgets[i];
                    rlt = widget.invoke(apiName, args);

                    if (rlt !== IGNORE) {

                        // Deferred对象
                        if (Base.isPromise(rlt)) {
                            dfds.push(rlt);
                        } else {
                            rlts.push(rlt);
                        }
                    }
                }

                // 如果有callback，则用异步方式。
                if (callback || dfds.length) {
                    promise = Base.when.apply(Base, dfds);
                    key = promise.pipe ? 'pipe' : 'then';

                    // 很重要不能删除。删除了会死循环。
                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
                    return promise[key](function () {
                        var deferred = Base.Deferred(),
                                    args = arguments;

                        if (args.length === 1) {
                            args = args[0];
                        }

                        setTimeout(function () {
                            deferred.resolve(args);
                        }, 1);

                        return deferred.promise();
                    })[callback ? key : 'done'](callback || Base.noop);
                } else {
                    return rlts[0];
                }
            }
        });

        /**
        * 添加组件
        * @param  {object} widgetProto 组件原型，构造函数通过constructor属性定义
        * @param  {object} responseMap API名称与函数实现的映射
        * @example
        *     Uploader.register( {
        *         init: function( options ) {},
        *         makeThumb: function() {}
        *     }, {
        *         'make-thumb': 'makeThumb'
        *     } );
        */
        Uploader.register = Widget.register = function (responseMap, widgetProto) {
            var map = { init: 'init' },
                klass;

            if (arguments.length === 1) {
                widgetProto = responseMap;
                widgetProto.responseMap = map;
            } else {
                widgetProto.responseMap = $.extend(map, responseMap);
            }

            klass = Base.inherits(Widget, widgetProto);
            widgetClass.push(klass);

            return klass;
        };

        return Widget;
    });
    /**
    * @fileOverview DragAndDrop Widget。
    */
    define('widgets/filednd', [
        'base',
        'uploader',
        'lib/dnd',
        'widgets/widget'
    ], function (Base, Uploader, Dnd) {
        var $ = Base.$;

        Uploader.options.dnd = '';

        /**
        * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
        * @namespace options
        * @for Uploader
        */

        /**
        * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
        * @namespace options
        * @for Uploader
        */

        /**
        * @event dndAccept
        * @param {DataTransferItemList} items DataTransferItem
        * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
        * @for  Uploader
        */
        return Uploader.register({
            init: function (opts) {

                if (!opts.dnd ||
                        this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        disableGlobalDnd: opts.disableGlobalDnd,
                        container: opts.dnd,
                        accept: opts.accept
                    }),
                    dnd;

                dnd = new Dnd(options);

                dnd.once('ready', deferred.resolve);
                dnd.on('drop', function (files) {
                    me.request('add-file', [files]);
                });

                // 检测文件是否全部允许添加。
                dnd.on('accept', function (items) {
                    return me.owner.trigger('dndAccept', items);
                });

                dnd.init();

                return deferred.promise();
            }
        });
    });

    /**
    * @fileOverview 错误信息
    */
    define('lib/filepaste', [
        'base',
        'mediator',
        'runtime/client'
    ], function (Base, Mediator, RuntimeClent) {

        var $ = Base.$;

        function FilePaste(opts) {
            opts = this.options = $.extend({}, opts);
            opts.container = $(opts.container || document.body);
            RuntimeClent.call(this, 'FilePaste');
        }

        Base.inherits(RuntimeClent, {
            constructor: FilePaste,

            init: function () {
                var me = this;

                me.connectRuntime(me.options, function () {
                    me.exec('init');
                    me.trigger('ready');
                });
            },

            destroy: function () {
                this.exec('destroy');
                this.disconnectRuntime();
                this.off();
            }
        });

        Mediator.installTo(FilePaste.prototype);

        return FilePaste;
    });
    /**
    * @fileOverview 组件基类。
    */
    define('widgets/filepaste', [
        'base',
        'uploader',
        'lib/filepaste',
        'widgets/widget'
    ], function (Base, Uploader, FilePaste) {
        var $ = Base.$;

        /**
        * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
        * @namespace options
        * @for Uploader
        */
        return Uploader.register({
            init: function (opts) {

                if (!opts.paste ||
                        this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        container: opts.paste,
                        accept: opts.accept
                    }),
                    paste;

                paste = new FilePaste(options);

                paste.once('ready', deferred.resolve);
                paste.on('paste', function (files) {
                    me.owner.request('add-file', [files]);
                });
                paste.init();

                return deferred.promise();
            }
        });
    });
    /**
    * @fileOverview Blob
    */
    define('lib/blob', [
        'base',
        'runtime/client'
    ], function (Base, RuntimeClient) {

        function Blob(ruid, source) {
            var me = this;

            me.source = source;
            me.ruid = ruid;
            this.size = source.size || 0;

            // 如果没有指定 mimetype, 但是知道文件后缀。
            if (!source.type && ~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)) {
                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
            } else {
                this.type = source.type || 'application/octet-stream';
            }

            RuntimeClient.call(me, 'Blob');
            this.uid = source.uid || this.uid;

            if (ruid) {
                me.connectRuntime(ruid);
            }
        }

        Base.inherits(RuntimeClient, {
            constructor: Blob,

            slice: function (start, end) {
                return this.exec('slice', start, end);
            },

            getSource: function () {
                return this.source;
            }
        });

        return Blob;
    });
    /**
    * 为了统一化Flash的File和HTML5的File而存在。
    * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
    * @fileOverview File
    */
    define('lib/file', [
        'base',
        'lib/blob'
    ], function (Base, Blob) {

        var uid = 1,
            rExt = /\.([^.]+)$/;

        function File(ruid, file) {
            var ext;

            this.name = file.name || ('untitled' + uid++);
            ext = rExt.exec(file.name) ? RegExp.$1.toLowerCase() : '';

            // todo 支持其他类型文件的转换。
            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
            if (!ext && file.type) {
                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type) ?
                        RegExp.$1.toLowerCase() : '';
                this.name += '.' + ext;
            }

            this.ext = ext;
            this.lastModifiedDate = file.lastModifiedDate ||
                    (new Date()).toLocaleString();

            Blob.apply(this, arguments);
        }

        return Base.inherits(Blob, File);
    });

    /**
    * @fileOverview 错误信息
    */
    define('lib/filepicker', [
        'base',
        'runtime/client',
        'lib/file'
    ], function (Base, RuntimeClent, File) {

        var $ = Base.$;

        function FilePicker(opts) {
            opts = this.options = $.extend({}, FilePicker.options, opts);

            opts.container = $(opts.id);

            if (!opts.container.length) {
                throw new Error('按钮指定错误');
            }

            opts.innerHTML = opts.innerHTML || opts.label ||
                    opts.container.html() || '';

            opts.button = $(opts.button || document.createElement('div'));
            opts.button.html(opts.innerHTML);
            opts.container.html(opts.button);

            RuntimeClent.call(this, 'FilePicker', true);
        }

        FilePicker.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: false,
            accept: null,
            name: 'file'
        };

        Base.inherits(RuntimeClent, {
            constructor: FilePicker,

            init: function () {
                var me = this,
                    opts = me.options,
                    button = opts.button;

                button.addClass('webuploader-pick');

                me.on('all', function (type) {
                    var files;

                    switch (type) {
                        case 'mouseenter':
                            button.addClass('webuploader-pick-hover');
                            break;

                        case 'mouseleave':
                            button.removeClass('webuploader-pick-hover');
                            break;

                        case 'change':
                            files = me.exec('getFiles');
                            me.trigger('select', $.map(files, function (file) {
                                file = new File(me.getRuid(), file);

                                // 记录来源。
                                file._refer = opts.container;
                                return file;
                            }), opts.container);
                            break;
                    }
                });

                me.connectRuntime(opts, function () {
                    me.refresh();
                    me.exec('init', opts);
                    me.trigger('ready');
                });

                $(window).on('resize', function () {
                    me.refresh();
                });
            },

            refresh: function () {
                var shimContainer = this.getRuntime().getContainer(),
                    button = this.options.button,
                    width = button.outerWidth ?
                            button.outerWidth() : button.width(),

                    height = button.outerHeight ?
                            button.outerHeight() : button.height(),

                    pos = button.offset();

                if(width < shimContainer.width()){
                    width = shimContainer.width();
                }
                if(height < shimContainer.height()){
                    height = shimContainer.height();
                }

                width && height && shimContainer.css({
                    bottom: 'auto',
                    right: 'auto',
                    width: width + 'px',
                    height: height + 'px'
                }).offset(pos);
            },

            enable: function () {
                var btn = this.options.button;

                btn.removeClass('webuploader-pick-disable');
                this.refresh();
            },

            disable: function () {
                var btn = this.options.button;

                this.getRuntime().getContainer().css({
                    top: '-99999px'
                });

                btn.addClass('webuploader-pick-disable');
            },

            destroy: function () {
                if (this.runtime) {
                    this.exec('destroy');
                    this.disconnectRuntime();
                }
            }
        });

        return FilePicker;
    });

    /**
    * @fileOverview 文件选择相关
    */
    define('widgets/filepicker', [
        'base',
        'uploader',
        'lib/filepicker',
        'widgets/widget'
    ], function (Base, Uploader, FilePicker) {
        var $ = Base.$;

        $.extend(Uploader.options, {

            /**
            * @property {Selector | Object} [pick=undefined]
            * @namespace options
            * @for Uploader
            * @description 指定选择文件的按钮容器，不指定则不创建按钮。
            *
            * * `id` {Seletor} 指定选择文件的按钮容器，不指定则不创建按钮。
            * * `label` {String} 请采用 `innerHTML` 代替
            * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
            * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
            */
            pick: null,

            /**
            * @property {Arroy} [accept=null]
            * @namespace options
            * @for Uploader
            * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
            *
            * * `title` {String} 文字描述
            * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
            * * `mimeTypes` {String} 多个用逗号分割。
            *
            * 如：
            *
            * ```
            * {
            *     title: 'Images',
            *     extensions: 'gif,jpg,jpeg,bmp,png',
            *     mimeTypes: 'image/*'
            * }
            * ```
            */
            accept: null/*{
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }*/
        });

        return Uploader.register({
            'add-btn': 'addButton',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable'
        }, {

            init: function (opts) {
                this.pickers = [];
                return opts.pick && this.addButton(opts.pick);
            },

            refresh: function () {
                $.each(this.pickers, function () {
                    this.refresh();
                });
            },

            /**
            * @method addButton
            * @for Uploader
            * @grammar addButton( pick ) => Promise
            * @description
            * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
            * @example
            * uploader.addButton({
            *     id: '#btnContainer',
            *     innerHTML: '选择文件'
            * });
            */
            addButton: function (pick) {
                var me = this,
                    opts = me.options,
                    accept = opts.accept,
                    promises = [];

                if (!pick) {
                    return;
                }

                $.isPlainObject(pick) || (pick = {
                    id: pick
                });

                $(pick.id).each(function () {
                    var options, picker, deferred;

                    deferred = Base.Deferred();

                    options = $.extend({}, pick, {
                        accept: $.isPlainObject(accept) ? [accept] : accept,
                        swf: opts.swf,
                        runtimeOrder: opts.runtimeOrder,
                        id: this
                    });

                    picker = new FilePicker(options);

                    picker.once('ready', deferred.resolve);
                    picker.on('select', function (files) {
                        me.owner.request('add-file', [files]);
                    });
                    picker.init();

                    me.pickers.push(picker);

                    promises.push(deferred.promise());
                });

                return Base.when.apply(Base, promises);
            },

            disable: function () {
                $.each(this.pickers, function () {
                    this.disable();
                });
            },

            enable: function () {
                $.each(this.pickers, function () {
                    this.enable();
                });
            }
        });
    });
    /**
    * @fileOverview 文件属性封装
    */
    define('file', [
        'base',
        'mediator'
    ], function (Base, Mediator) {

        var $ = Base.$,
            idPrefix = 'WU_FILE_',
            idSuffix = 0,
            rExt = /\.([^.]+)$/,
            statusMap = {};

        function gid() {
            return idPrefix + idSuffix++;
        }

        /**
        * 文件类
        * @class File
        * @constructor 构造函数
        * @grammar new File( source ) => File
        * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
        */
        function WUFile(source) {

            /**
            * 文件名，包括扩展名（后缀）
            * @property name
            * @type {string}
            */
            this.name = source.name || 'Untitled';

            /**
            * 文件体积（字节）
            * @property size
            * @type {uint}
            * @default 0
            */
            this.size = source.size || 0;

            /**
            * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
            * @property type
            * @type {string}
            * @default 'application'
            */
            this.type = source.type || 'application';

            /**
            * 文件最后修改日期
            * @property lastModifiedDate
            * @type {int}
            * @default 当前时间戳
            */
            this.lastModifiedDate = source.lastModifiedDate || (new Date() * 1);

            /**
            * 文件ID，每个对象具有唯一ID，与文件名无关
            * @property id
            * @type {string}
            */
            this.id = gid();

            /**
            * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
            * @property ext
            * @type {string}
            */
            this.ext = rExt.exec(this.name) ? RegExp.$1 : '';


            /**
            * 状态文字说明。在不同的status语境下有不同的用途。
            * @property statusText
            * @type {string}
            */
            this.statusText = '';

            // 存储文件状态，防止通过属性直接修改
            statusMap[this.id] = WUFile.Status.INITED;

            this.source = source;
            this.loaded = 0;

            this.on('error', function (msg) {
                this.setStatus(WUFile.Status.ERROR, msg);
            });
        }

        $.extend(WUFile.prototype, {

            /**
            * 设置状态，状态变化时会触发`change`事件。
            * @method setStatus
            * @grammar setStatus( status[, statusText] );
            * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
            * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
            */
            setStatus: function (status, text) {

                var prevStatus = statusMap[this.id];

                typeof text !== 'undefined' && (this.statusText = text);

                if (status !== prevStatus) {
                    statusMap[this.id] = status;
                    /**
                    * 文件状态变化
                    * @event statuschange
                    */
                    this.trigger('statuschange', status, prevStatus);
                }

            },

            /**
            * 获取文件状态
            * @return {File.Status}
            * @example
            文件状态具体包括以下几种类型：
            {
            // 初始化
            INITED:     0,
            // 已入队列
            QUEUED:     1,
            // 正在上传
            PROGRESS:     2,
            // 上传出错
            ERROR:         3,
            // 上传成功
            COMPLETE:     4,
            // 上传取消
            CANCELLED:     5
            }
            */
            getStatus: function () {
                return statusMap[this.id];
            },

            /**
            * 获取文件原始信息。
            * @return {*}
            */
            getSource: function () {
                return this.source;
            },

            destory: function () {
                delete statusMap[this.id];
            }
        });

        Mediator.installTo(WUFile.prototype);

        /**
        * 文件状态值，具体包括以下几种类型：
        * * `inited` 初始状态
        * * `queued` 已经进入队列, 等待上传
        * * `progress` 上传中
        * * `complete` 上传完成。
        * * `error` 上传出错，可重试
        * * `interrupt` 上传中断，可续传。
        * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
        * * `cancelled` 文件被移除。
        * @property {Object} Status
        * @namespace File
        * @class File
        * @static
        */
        WUFile.Status = {
            INITED: 'inited',    // 初始状态
            QUEUED: 'queued',    // 已经进入队列, 等待上传
            PROGRESS: 'progress',    // 上传中
            ERROR: 'error',    // 上传出错，可重试
            COMPLETE: 'complete',    // 上传完成。
            CANCELLED: 'cancelled',    // 上传取消。
            INTERRUPT: 'interrupt',    // 上传中断，可续传。
            INVALID: 'invalid'    // 文件不合格，不能重试上传。
        };

        return WUFile;
    });

    /**
    * @fileOverview 文件队列
    */
    define('queue', [
        'base',
        'mediator',
        'file'
    ], function (Base, Mediator, WUFile) {

        var $ = Base.$,
            STATUS = WUFile.Status;

        /**
        * 文件队列, 用来存储各个状态中的文件。
        * @class Queue
        * @extends Mediator
        */
        function Queue() {

            /**
            * 统计文件数。
            * * `numOfQueue` 队列中的文件数。
            * * `numOfSuccess` 上传成功的文件数
            * * `numOfCancel` 被移除的文件数
            * * `numOfProgress` 正在上传中的文件数
            * * `numOfUploadFailed` 上传错误的文件数。
            * * `numOfInvalid` 无效的文件数。
            * @property {Object} stats
            */
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0
            };

            // 上传队列，仅包括等待上传的文件
            this._queue = [];

            // 存储所有文件
            this._map = {};
        }

        $.extend(Queue.prototype, {

            /**
            * 将新文件加入对队列尾部
            *
            * @method append
            * @param  {File} file   文件对象
            */
            append: function (file) {
                this._queue.push(file);
                this._fileAdded(file);
                return this;
            },

            /**
            * 将新文件加入对队列头部
            *
            * @method prepend
            * @param  {File} file   文件对象
            */
            prepend: function (file) {
                this._queue.unshift(file);
                this._fileAdded(file);
                return this;
            },

            /**
            * 获取文件对象
            *
            * @method getFile
            * @param  {String} fileId   文件ID
            * @return {File}
            */
            getFile: function (fileId) {
                if (typeof fileId !== 'string') {
                    return fileId;
                }
                return this._map[fileId];
            },

            /**
            * 从队列中取出一个指定状态的文件。
            * @grammar fetch( status ) => File
            * @method fetch
            * @param {String} status [文件状态值](#WebUploader:File:File.Status)
            * @return {File} [File](#WebUploader:File)
            */
            fetch: function (status) {
                var len = this._queue.length,
                    i, file;

                status = status || STATUS.QUEUED;

                for (i = 0; i < len; i++) {
                    file = this._queue[i];

                    if (status === file.getStatus()) {
                        return file;
                    }
                }

                return null;
            },

            /**
            * 对队列进行排序，能够控制文件上传顺序。
            * @grammar sort( fn ) => undefined
            * @method sort
            * @param {Function} fn 排序方法
            */
            sort: function (fn) {
                if (typeof fn === 'function') {
                    this._queue.sort(fn);
                }
            },

            /**
            * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
            * @grammar getFiles( [status1[, status2 ...]] ) => Array
            * @method getFiles
            * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
            */
            getFiles: function () {
                var sts = [].slice.call(arguments, 0),
                    ret = [],
                    i = 0,
                    len = this._queue.length,
                    file;

                for (; i < len; i++) {
                    file = this._queue[i];

                    if (sts.length && ! ~$.inArray(file.getStatus(), sts)) {
                        continue;
                    }

                    ret.push(file);
                }

                return ret;
            },

            _fileAdded: function (file) {
                var me = this,
                    existing = this._map[file.id];

                if (!existing) {
                    this._map[file.id] = file;

                    file.on('statuschange', function (cur, pre) {
                        me._onFileStatusChange(cur, pre);
                    });
                }

                file.setStatus(STATUS.QUEUED);
            },

            _onFileStatusChange: function (curStatus, preStatus) {
                var stats = this.stats;

                switch (preStatus) {
                    case STATUS.PROGRESS:
                        stats.numOfProgress--;
                        break;

                    case STATUS.QUEUED:
                        stats.numOfQueue--;
                        break;

                    case STATUS.ERROR:
                        stats.numOfUploadFailed--;
                        break;

                    case STATUS.INVALID:
                        stats.numOfInvalid--;
                        break;
                }

                switch (curStatus) {
                    case STATUS.QUEUED:
                        stats.numOfQueue++;
                        break;

                    case STATUS.PROGRESS:
                        stats.numOfProgress++;
                        break;

                    case STATUS.ERROR:
                        stats.numOfUploadFailed++;
                        break;

                    case STATUS.COMPLETE:
                        stats.numOfSuccess++;
                        break;

                    case STATUS.CANCELLED:
                        stats.numOfCancel++;
                        break;

                    case STATUS.INVALID:
                        stats.numOfInvalid++;
                        break;
                }
            }

        });

        Mediator.installTo(Queue.prototype);

        return Queue;
    });
    /**
    * @fileOverview 队列
    */
    define('widgets/queue', [
        'base',
        'uploader',
        'queue',
        'file',
        'lib/file',
        'runtime/client',
        'widgets/widget'
    ], function (Base, Uploader, Queue, WUFile, File, RuntimeClient) {

        var $ = Base.$,
            rExt = /\.\w+$/,
            Status = WUFile.Status;

        return Uploader.register({
            'sort-files': 'sortFiles',
            'add-file': 'addFiles',
            'get-file': 'getFile',
            'fetch-file': 'fetchFile',
            'get-stats': 'getStats',
            'get-files': 'getFiles',
            'remove-file': 'removeFile',
            'retry': 'retry',
            'reset': 'reset',
            'accept-file': 'acceptFile'
        }, {

            init: function (opts) {
                var me = this,
                    deferred, len, i, item, arr, accept, runtime;

                if ($.isPlainObject(opts.accept)) {
                    opts.accept = [opts.accept];
                }

                // accept中的中生成匹配正则。
                if (opts.accept) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        item = opts.accept[i].extensions;
                        item && arr.push(item);
                    }

                    if (arr.length) {
                        accept = '\\.' + arr.join(',')
                                .replace(/,/g, '$|\\.')
                                .replace(/\*/g, '.*') + '$';
                    }

                    me.accept = new RegExp(accept, 'i');
                }

                me.queue = new Queue();
                me.stats = me.queue.stats;

                // 如果当前不是html5运行时，那就算了。
                // 不执行后续操作
                if (this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                // 创建一个 html5 运行时的 placeholder
                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
                deferred = Base.Deferred();
                runtime = new RuntimeClient('Placeholder');
                runtime.connectRuntime({
                    runtimeOrder: 'html5'
                }, function () {
                    me._ruid = runtime.getRuid();
                    deferred.resolve();
                });
                return deferred.promise();
            },


            // 为了支持外部直接添加一个原生File对象。
            _wrapFile: function (file) {
                if (!(file instanceof WUFile)) {

                    if (!(file instanceof File)) {
                        if (!this._ruid) {
                            throw new Error('Can\'t add external files.');
                        }
                        file = new File(this._ruid, file);
                    }

                    file = new WUFile(file);
                }

                return file;
            },

            // 判断文件是否可以被加入队列
            acceptFile: function (file) {
                var invalid = !file || file.size < 6 || this.accept &&

                // 如果名字中有后缀，才做后缀白名单处理。
                        rExt.exec(file.name) && !this.accept.test(file.name);

                return !invalid;
            },


            /**
            * @event beforeFileQueued
            * @param {File} file File对象
            * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
            * @for  Uploader
            */

            /**
            * @event fileQueued
            * @param {File} file File对象
            * @description 当文件被加入队列以后触发。
            * @for  Uploader
            */

            _addFile: function (file) {
                var me = this;

                file = me._wrapFile(file);

                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
                if (!me.owner.trigger('beforeFileQueued', file)) {
                    return;
                }

                // 类型不匹配，则派送错误事件，并返回。
                if (!me.acceptFile(file)) {
                    me.owner.trigger('error', 'Q_TYPE_DENIED', file);
                    return;
                }

                me.queue.append(file);
                me.owner.trigger('fileQueued', file);
                return file;
            },

            getFile: function (fileId) {
                return this.queue.getFile(fileId);
            },

            /**
            * @event filesQueued
            * @param {File} files 数组，内容为原始File(lib/File）对象。
            * @description 当一批文件添加进队列以后触发。
            * @for  Uploader
            */

            /**
            * @method addFiles
            * @grammar addFiles( file ) => undefined
            * @grammar addFiles( [file1, file2 ...] ) => undefined
            * @param {Array of File or File} [files] Files 对象 数组
            * @description 添加文件到队列
            * @for  Uploader
            */
            addFiles: function (files) {
                var me = this;

                if (!files.length) {
                    files = [files];
                }

                files = $.map(files, function (file) {
                    return me._addFile(file);
                });

                me.owner.trigger('filesQueued', files);

                if (me.options.auto) {
                    setTimeout(function () {
                        me.request('start-upload');
                    }, 20);
                }
            },

            getStats: function () {
                return this.stats;
            },

            /**
            * @event fileDequeued
            * @param {File} file File对象
            * @description 当文件被移除队列后触发。
            * @for  Uploader
            */

            /**
            * @method removeFile
            * @grammar removeFile( file ) => undefined
            * @grammar removeFile( id ) => undefined
            * @param {File|id} file File对象或这File对象的id
            * @description 移除某一文件。
            * @for  Uploader
            * @example
            *
            * $li.on('click', '.remove-this', function() {
            *     uploader.removeFile( file );
            * })
            */
            removeFile: function (file) {
                var me = this;

                file = file.id ? file : me.queue.getFile(file);

                file.setStatus(Status.CANCELLED);
                me.owner.trigger('fileDequeued', file);
            },

            /**
            * @method getFiles
            * @grammar getFiles() => Array
            * @grammar getFiles( status1, status2, status... ) => Array
            * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
            * @for  Uploader
            * @example
            * console.log( uploader.getFiles() );    // => all files
            * console.log( uploader.getFiles('error') )    // => all error files.
            */
            getFiles: function () {
                return this.queue.getFiles.apply(this.queue, arguments);
            },

            fetchFile: function () {
                return this.queue.fetch.apply(this.queue, arguments);
            },

            /**
            * @method retry
            * @grammar retry() => undefined
            * @grammar retry( file ) => undefined
            * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
            * @for  Uploader
            * @example
            * function retry() {
            *     uploader.retry();
            * }
            */
            retry: function (file, noForceStart) {
                var me = this,
                    files, i, len;

                if (file) {
                    file = file.id ? file : me.queue.getFile(file);
                    file.setStatus(Status.QUEUED);
                    noForceStart || me.request('start-upload');
                    return;
                }

                files = me.queue.getFiles(Status.ERROR);
                i = 0;
                len = files.length;

                for (; i < len; i++) {
                    file = files[i];
                    file.setStatus(Status.QUEUED);
                }

                me.request('start-upload');
            },

            /**
            * @method sort
            * @grammar sort( fn ) => undefined
            * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
            * @for  Uploader
            */
            sortFiles: function () {
                return this.queue.sort.apply(this.queue, arguments);
            },

            /**
            * @event reset
            * @description 当 uploader 被重置的时候触发。
            * @for  Uploader
            */

            /**
            * @method reset
            * @grammar reset() => undefined
            * @description 重置uploader。目前只重置了队列。
            * @for  Uploader
            * @example
            * uploader.reset();
            */
            reset: function () {
                this.owner.trigger('reset');
                this.queue = new Queue();
                this.stats = this.queue.stats;
            }
        });

    });
    /**
    * @fileOverview 添加获取Runtime相关信息的方法。
    */
    define('widgets/runtime', [
        'uploader',
        'runtime/runtime',
        'widgets/widget'
    ], function (Uploader, Runtime) {

        Uploader.support = function () {
            return Runtime.hasRuntime.apply(Runtime, arguments);
        };

        return Uploader.register({
            'predict-runtime-type': 'predictRuntmeType'
        }, {

            init: function () {
                if (!this.predictRuntmeType()) {
                    throw Error('Runtime Error');
                }
            },

            /**
            * 预测Uploader将采用哪个`Runtime`
            * @grammar predictRuntmeType() => String
            * @method predictRuntmeType
            * @for  Uploader
            */
            predictRuntmeType: function () {
                var orders = this.options.runtimeOrder || Runtime.orders,
                    type = this.type,
                    i, len;

                if (!type) {
                    orders = orders.split(/\s*,\s*/g);

                    for (i = 0, len = orders.length; i < len; i++) {
                        if (Runtime.hasRuntime(orders[i])) {
                            this.type = type = orders[i];
                            break;
                        }
                    }
                }

                return type;
            }
        });
    });
    /**
    * @fileOverview Transport
    */
    define('lib/transport', [
        'base',
        'runtime/client',
        'mediator'
    ], function (Base, RuntimeClient, Mediator) {

        var $ = Base.$;

        function Transport(opts) {
            var me = this;

            opts = me.options = $.extend(true, {}, Transport.options, opts || {});
            RuntimeClient.call(this, 'Transport');

            this._blob = null;
            this._formData = opts.formData || {};
            this._headers = opts.headers || {};

            this.on('progress', this._timeout);
            this.on('load error', function () {
                me.trigger('progress', 1);
                clearTimeout(me._timer);
            });
        }

        Transport.options = {
            server: '',
            method: 'POST',

            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
            withCredentials: false,
            fileVal: 'file',
            timeout: 2 * 60 * 1000,    // 2分钟
            formData: {},
            headers: {},
            sendAsBinary: false
        };

        $.extend(Transport.prototype, {

            // 添加Blob, 只能添加一次，最后一次有效。
            appendBlob: function (key, blob, filename) {
                var me = this,
                    opts = me.options;

                if (me.getRuid()) {
                    me.disconnectRuntime();
                }

                // 连接到blob归属的同一个runtime.
                me.connectRuntime(blob.ruid, function () {
                    me.exec('init');
                });

                me._blob = blob;
                opts.fileVal = key || opts.fileVal;
                opts.filename = filename || opts.filename;
            },

            // 添加其他字段
            append: function (key, value) {
                if (typeof key === 'object') {
                    $.extend(this._formData, key);
                } else {
                    this._formData[key] = value;
                }
            },

            setRequestHeader: function (key, value) {
                if (typeof key === 'object') {
                    $.extend(this._headers, key);
                } else {
                    this._headers[key] = value;
                }
            },

            send: function (method) {
                this.exec('send', method);
                this._timeout();
            },

            abort: function () {
                clearTimeout(this._timer);
                return this.exec('abort');
            },

            destroy: function () {
                this.trigger('destroy');
                this.off();
                this.exec('destroy');
                this.disconnectRuntime();
            },

            getResponse: function () {
                return this.exec('getResponse');
            },

            getResponseAsJson: function () {
                return this.exec('getResponseAsJson');
            },

            getStatus: function () {
                return this.exec('getStatus');
            },

            _timeout: function () {
                var me = this,
                    duration = me.options.timeout;

                if (!duration) {
                    return;
                }

                clearTimeout(me._timer);
                me._timer = setTimeout(function () {
                    me.abort();
                    me.trigger('error', 'timeout');
                }, duration);
            }

        });

        // 让Transport具备事件功能。
        Mediator.installTo(Transport.prototype);

        return Transport;
    });
    /**
    * @fileOverview 负责文件上传相关。
    */
    define('widgets/upload', [
        'base',
        'uploader',
        'file',
        'lib/transport',
        'widgets/widget'
    ], function (Base, Uploader, WUFile, Transport) {

        var $ = Base.$,
            isPromise = Base.isPromise,
            Status = WUFile.Status;

        // 添加默认配置项
        $.extend(Uploader.options, {


            /**
            * @property {Boolean} [prepareNextFile=false]
            * @namespace options
            * @for Uploader
            * @description 是否允许在文件传输时提前把下一个文件准备好。
            * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
            * 如果能提前在当前文件传输期处理，可以节省总体耗时。
            */
            prepareNextFile: false,

            /**
            * @property {Boolean} [chunked=false]
            * @namespace options
            * @for Uploader
            * @description 是否要分片处理大文件上传。
            */
            chunked: false,

            /**
            * @property {Boolean} [chunkSize=5242880]
            * @namespace options
            * @for Uploader
            * @description 如果要分片，分多大一片？ 默认大小为5M.
            */
            chunkSize: 5 * 1024 * 1024,

            /**
            * @property {Boolean} [chunkRetry=2]
            * @namespace options
            * @for Uploader
            * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
            */
            chunkRetry: 2,

            /**
            * @property {Boolean} [threads=3]
            * @namespace options
            * @for Uploader
            * @description 上传并发数。允许同时最大上传进程数。
            */
            threads: 3,


            /**
            * @property {Object} [formData]
            * @namespace options
            * @for Uploader
            * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
            */
            formData: null

            /**
            * @property {Object} [fileVal='file']
            * @namespace options
            * @for Uploader
            * @description 设置文件上传域的name。
            */

            /**
            * @property {Object} [method='POST']
            * @namespace options
            * @for Uploader
            * @description 文件上传方式，`POST`或者`GET`。
            */

            /**
            * @property {Object} [sendAsBinary=false]
            * @namespace options
            * @for Uploader
            * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
            * 其他参数在$_GET数组中。
            */
        });

        // 负责将文件切片。
        function CuteFile(file, chunkSize) {
            var pending = [],
                blob = file.source,
                total = blob.size,
                chunks = chunkSize ? Math.ceil(total / chunkSize) : 1,
                start = 0,
                index = 0,
                len;

            while (index < chunks) {
                len = Math.min(chunkSize, total - start);

                pending.push({
                    file: file,
                    start: start,
                    end: chunkSize ? (start + len) : total,
                    total: total,
                    chunks: chunks,
                    chunk: index++
                });
                start += len;
            }

            file.blocks = pending.concat();
            file.remaning = pending.length;

            return {
                file: file,

                has: function () {
                    return !!pending.length;
                },

                fetch: function () {
                    return pending.shift();
                }
            };
        }

        Uploader.register({
            'start-upload': 'start',
            'stop-upload': 'stop',
            'skip-file': 'skipFile',
            'is-in-progress': 'isInProgress'
        }, {

            init: function () {
                var owner = this.owner;

                this.runing = false;

                // 记录当前正在传的数据，跟threads相关
                this.pool = [];

                // 缓存即将上传的文件。
                this.pending = [];

                // 跟踪还有多少分片没有完成上传。
                this.remaning = 0;
                this.__tick = Base.bindFn(this._tick, this);

                owner.on('uploadComplete', function (file) {
                    // 把其他块取消了。
                    file.blocks && $.each(file.blocks, function (_, v) {
                        v.transport && (v.transport.abort(), v.transport.destroy());
                        delete v.transport;
                    });

                    delete file.blocks;
                    delete file.remaning;
                });
            },

            /**
            * @event startUpload
            * @description 当开始上传流程时触发。
            * @for  Uploader
            */

            /**
            * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
            * @grammar upload() => undefined
            * @method upload
            * @for  Uploader
            */
            start: function () {
                var me = this;

                // 移出invalid的文件
                $.each(me.request('get-files', Status.INVALID), function () {
                    me.request('remove-file', this);
                });

                if (me.runing) {
                    return;
                }

                me.runing = true;

                // 如果有暂停的，则续传
                $.each(me.pool, function (_, v) {
                    var file = v.file;

                    if (file.getStatus() === Status.INTERRUPT) {
                        file.setStatus(Status.PROGRESS);
                        me._trigged = false;
                        v.transport && v.transport.send();
                    }
                });

                me._trigged = false;
                me.owner.trigger('startUpload');
                Base.nextTick(me.__tick);
            },

            /**
            * @event stopUpload
            * @description 当开始上传流程暂停时触发。
            * @for  Uploader
            */

            /**
            * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
            * @grammar stop() => undefined
            * @grammar stop( true ) => undefined
            * @method stop
            * @for  Uploader
            */
            stop: function (interrupt) {
                var me = this;

                if (me.runing === false) {
                    return;
                }

                me.runing = false;

                interrupt && $.each(me.pool, function (_, v) {
                    v.transport && v.transport.abort();
                    v.file.setStatus(Status.INTERRUPT);
                });

                me.owner.trigger('stopUpload');
            },

            /**
            * 判断`Uplaode`r是否正在上传中。
            * @grammar isInProgress() => Boolean
            * @method isInProgress
            * @for  Uploader
            */
            isInProgress: function () {
                return !!this.runing;
            },

            getStats: function () {
                return this.request('get-stats');
            },

            /**
            * 掉过一个文件上传，直接标记指定文件为已上传状态。
            * @grammar skipFile( file ) => undefined
            * @method skipFile
            * @for  Uploader
            */
            skipFile: function (file, status) {
                file = this.request('get-file', file);

                file.setStatus(status || Status.COMPLETE);
                file.skipped = true;

                // 如果正在上传。
                file.blocks && $.each(file.blocks, function (_, v) {
                    var _tr = v.transport;

                    if (_tr) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });

                this.owner.trigger('uploadSkip', file);
            },

            /**
            * @event uploadFinished
            * @description 当所有文件上传结束时触发。
            * @for  Uploader
            */
            _tick: function () {
                var me = this,
                    opts = me.options,
                    fn, val;

                // 上一个promise还没有结束，则等待完成后再执行。
                if (me._promise) {
                    return me._promise.always(me.__tick);
                }

                // 还有位置，且还有文件要处理的话。
                if (me.pool.length < opts.threads && (val = me._nextBlock())) {
                    me._trigged = false;

                    fn = function (val) {
                        me._promise = null;

                        // 有可能是reject过来的，所以要检测val的类型。
                        val && val.file && me._startSend(val);
                        Base.nextTick(me.__tick);
                    };

                    me._promise = isPromise(val) ? val.always(fn) : fn(val);

                    // 没有要上传的了，且没有正在传输的了。
                } else if (!me.remaning && !me.getStats().numOfQueue) {
                    me.runing = false;

                    me._trigged || Base.nextTick(function () {
                        me.owner.trigger('uploadFinished');
                    });
                    me._trigged = true;
                }
            },

            _nextBlock: function () {
                var me = this,
                    act = me._act,
                    opts = me.options,
                    next, done;

                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
                if (act && act.has() &&
                        act.file.getStatus() === Status.PROGRESS) {

                    // 是否提前准备下一个文件
                    if (opts.prepareNextFile && !me.pending.length) {
                        me._prepareNextFile();
                    }

                    return act.fetch();

                    // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
                } else if (me.runing) {

                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
                    if (!me.pending.length && me.getStats().numOfQueue) {
                        me._prepareNextFile();
                    }

                    next = me.pending.shift();
                    done = function (file) {
                        if (!file) {
                            return null;
                        }

                        act = CuteFile(file, opts.chunked ? opts.chunkSize : 0);
                        me._act = act;
                        return act.fetch();
                    };

                    // 文件可能还在prepare中，也有可能已经完全准备好了。
                    return isPromise(next) ?
                            next[next.pipe ? 'pipe' : 'then'](done) :
                            done(next);
                }
            },


            /**
            * @event uploadStart
            * @param {File} file File对象
            * @description 某个文件开始上传前触发，一个文件只会触发一次。
            * @for  Uploader
            */
            _prepareNextFile: function () {
                var me = this,
                    file = me.request('fetch-file'),
                    pending = me.pending,
                    promise;

                if (file) {
                    promise = me.request('before-send-file', file, function () {

                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
                        if (file.getStatus() === Status.QUEUED) {
                            me.owner.trigger('uploadStart', file);
                            file.setStatus(Status.PROGRESS);
                            return file;
                        }

                        return me._finishFile(file);
                    });

                    // 如果还在pending中，则替换成文件本身。
                    promise.done(function () {
                        var idx = $.inArray(promise, pending);

                        ~idx && pending.splice(idx, 1, file);
                    });

                    // befeore-send-file的钩子就有错误发生。
                    promise.fail(function (reason) {
                        file.setStatus(Status.ERROR, reason);
                        me.owner.trigger('uploadError', file, reason);
                        me.owner.trigger('uploadComplete', file);
                    });

                    pending.push(promise);
                }
            },

            // 让出位置了，可以让其他分片开始上传
            _popBlock: function (block) {
                var idx = $.inArray(block, this.pool);

                this.pool.splice(idx, 1);
                block.file.remaning--;
                this.remaning--;
            },

            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
            _startSend: function (block) {
                var me = this,
                    file = block.file,
                    promise;

                me.pool.push(block);
                me.remaning++;

                // 如果没有分片，则直接使用原始的。
                // 不会丢失content-type信息。
                block.blob = block.chunks === 1 ? file.source :
                        file.source.slice(block.start, block.end);

                // hook, 每个分片发送之前可能要做些异步的事情。
                promise = me.request('before-send', block, function () {

                    // 有可能文件已经上传出错了，所以不需要再传输了。
                    if (file.getStatus() === Status.PROGRESS) {
                        me._doSend(block);
                    } else {
                        me._popBlock(block);
                        Base.nextTick(me.__tick);
                    }
                });

                // 如果为fail了，则跳过此分片。
                promise.fail(function () {
                    if (file.remaning === 1) {
                        me._finishFile(file).always(function () {
                            block.percentage = 1;
                            me._popBlock(block);
                            me.owner.trigger('uploadComplete', file);
                            Base.nextTick(me.__tick);
                        });
                    } else {
                        block.percentage = 1;
                        me._popBlock(block);
                        Base.nextTick(me.__tick);
                    }
                });
            },


            /**
            * @event uploadBeforeSend
            * @param {Object} object
            * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
            * @param {Object} headers 可以扩展此对象来控制上传头部。
            * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
            * @for  Uploader
            */

            /**
            * @event uploadAccept
            * @param {Object} object
            * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
            * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
            * @for  Uploader
            */

            /**
            * @event uploadProgress
            * @param {File} file File对象
            * @param {Number} percentage 上传进度
            * @description 上传过程中触发，携带上传进度。
            * @for  Uploader
            */


            /**
            * @event uploadError
            * @param {File} file File对象
            * @param {String} reason 出错的code
            * @description 当文件上传出错时触发。
            * @for  Uploader
            */

            /**
            * @event uploadSuccess
            * @param {File} file File对象
            * @param {Object} response 服务端返回的数据
            * @description 当文件上传成功时触发。
            * @for  Uploader
            */

            /**
            * @event uploadComplete
            * @param {File} [file] File对象
            * @description 不管成功或者失败，文件上传完成时触发。
            * @for  Uploader
            */

            // 做上传操作。
            _doSend: function (block) {
                var me = this,
                    owner = me.owner,
                    opts = me.options,
                    file = block.file,
                    tr = new Transport(opts),
                    data = $.extend({}, opts.formData),
                    headers = $.extend({}, opts.headers),
                    requestAccept, ret;

                block.transport = tr;

                tr.on('destroy', function () {
                    delete block.transport;
                    me._popBlock(block);
                    Base.nextTick(me.__tick);
                });

                // 广播上传进度。以文件为单位。
                tr.on('progress', function (percentage) {
                    var totalPercent = 0,
                        uploaded = 0;

                    // 可能没有abort掉，progress还是执行进来了。
                    // if ( !file.blocks ) {
                    //     return;
                    // }

                    totalPercent = block.percentage = percentage;

                    if (block.chunks > 1) {    // 计算文件的整体速度。
                        $.each(file.blocks, function (_, v) {
                            uploaded += (v.percentage || 0) * (v.end - v.start);
                        });

                        totalPercent = uploaded / file.size;
                    }

                    owner.trigger('uploadProgress', file, totalPercent || 0);
                });

                // 用来询问，是否返回的结果是有错误的。
                requestAccept = function (reject) {
                    var fn;

                    ret = tr.getResponseAsJson() || {};
                    ret._raw = tr.getResponse();
                    fn = function (value) {
                        reject = value;
                    };

                    // 服务端响应了，不代表成功了，询问是否响应正确。
                    if (!owner.trigger('uploadAccept', block, ret, fn)) {
                        reject = reject || 'server';
                    }

                    return reject;
                };

                // 尝试重试，然后广播文件上传出错。
                tr.on('error', function (type, flag) {
                    block.retried = block.retried || 0;

                    // 自动重试
                    if (block.chunks > 1 && ~'http,abort'.indexOf(type) &&
                            block.retried < opts.chunkRetry) {

                        block.retried++;
                        tr.send();

                    } else {

                        // http status 500 ~ 600
                        if (!flag && type === 'server') {
                            type = requestAccept(type);
                        }

                        file.setStatus(Status.ERROR, type);
                        owner.trigger('uploadError', file, type);
                        owner.trigger('uploadComplete', file);
                    }
                });

                // 上传成功
                tr.on('load', function () {
                    var reason;

                    // 如果非预期，转向上传出错。
                    if ((reason = requestAccept())) {
                        tr.trigger('error', reason, true);
                        return;
                    }

                    // 全部上传完成。
                    if (file.remaning === 1) {
                        me._finishFile(file, ret);
                    } else {
                        tr.destroy();
                    }
                });

                // 配置默认的上传字段。
                data = $.extend(data, {
                    id: file.id,
                    name: file.name,
                    type: file.type,
                    lastModifiedDate: file.lastModifiedDate,
                    size: file.size
                });

                block.chunks > 1 && $.extend(data, {
                    chunks: block.chunks,
                    chunk: block.chunk
                });

                // 在发送之间可以添加字段什么的。。。
                // 如果默认的字段不够使用，可以通过监听此事件来扩展
                owner.trigger('uploadBeforeSend', block, data, headers);

                // 开始发送。
                tr.appendBlob(opts.fileVal, block.blob, file.name);
                tr.append(data);
                tr.setRequestHeader(headers);
                tr.send();
            },

            // 完成上传。
            _finishFile: function (file, ret, hds) {
                var owner = this.owner;

                return owner
                        .request('after-send-file', arguments, function () {
                            file.setStatus(Status.COMPLETE);
                            owner.trigger('uploadSuccess', file, ret, hds);
                        })
                        .fail(function (reason) {

                            // 如果外部已经标记为invalid什么的，不再改状态。
                            if (file.getStatus() === Status.PROGRESS) {
                                file.setStatus(Status.ERROR, reason);
                            }

                            owner.trigger('uploadError', file, reason);
                        })
                        .always(function () {
                            owner.trigger('uploadComplete', file);
                        });
            }

        });
    });
    /**
    * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
    */

    define('widgets/validator', [
        'base',
        'uploader',
        'file',
        'widgets/widget'
    ], function (Base, Uploader, WUFile) {

        var $ = Base.$,
            validators = {},
            api;

        /**
        * @event error
        * @param {String} type 错误类型。
        * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
        *
        * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
        * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
        * @for  Uploader
        */

        // 暴露给外面的api
        api = {

            // 添加验证器
            addValidator: function (type, cb) {
                validators[type] = cb;
            },

            // 移除验证器
            removeValidator: function (type) {
                delete validators[type];
            }
        };

        // 在Uploader初始化的时候启动Validators的初始化
        Uploader.register({
            init: function () {
                var me = this;
                Base.nextTick(function () {
                    $.each(validators, function () {
                        this.call(me.owner);
                    });
                });
            }
        });

        /**
        * @property {int} [fileNumLimit=undefined]
        * @namespace options
        * @for Uploader
        * @description 验证文件总数量, 超出则不允许加入队列。
        */
        api.addValidator('fileNumLimit', function () {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt(opts.fileNumLimit, 10),
                flag = true;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {

                if (count >= max && flag) {
                    flag = false;
                    this.trigger('error', 'Q_EXCEED_NUM_LIMIT', max, file);
                    setTimeout(function () {
                        flag = true;
                    }, 1);
                }

                return count >= max ? false : true;
            });

            uploader.on('fileQueued', function () {
                count++;
            });

            uploader.on('fileDequeued', function () {
                count--;
            });

            uploader.on('uploadFinished reset', function () {
                count = 0;
            });
        });


        /**
        * @property {int} [fileSizeLimit=undefined]
        * @namespace options
        * @for Uploader
        * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
        */
        api.addValidator('fileSizeLimit', function () {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = opts.fileSizeLimit >> 0,
                flag = true;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {
                var invalid = count + file.size > max;

                if (invalid && flag) {
                    flag = false;
                    this.trigger('error', 'Q_EXCEED_SIZE_LIMIT', max, file);
                    setTimeout(function () {
                        flag = true;
                    }, 1);
                }

                return invalid ? false : true;
            });

            uploader.on('fileQueued', function (file) {
                count += file.size;
            });

            uploader.on('fileDequeued', function (file) {
                count -= file.size;
            });

            uploader.on('uploadFinished reset', function () {
                count = 0;
            });
        });

        /**
        * @property {int} [fileSingleSizeLimit=undefined]
        * @namespace options
        * @for Uploader
        * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
        */
        api.addValidator('fileSingleSizeLimit', function () {
            var uploader = this,
                opts = uploader.options,
                max = opts.fileSingleSizeLimit;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {

                if (file.size > max) {
                    file.setStatus(WUFile.Status.INVALID, 'exceed_size');
                    this.trigger('error', 'F_EXCEED_SIZE', file);
                    return false;
                }

            });

        });

        /**
        * @property {int} [duplicate=undefined]
        * @namespace options
        * @for Uploader
        * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
        */
        api.addValidator('duplicate', function () {
            var uploader = this,
                opts = uploader.options,
                mapping = {};

            if (opts.duplicate) {
                return;
            }

            function hashString(str) {
                var hash = 0,
                    i = 0,
                    len = str.length,
                    _char;

                for (; i < len; i++) {
                    _char = str.charCodeAt(i);
                    hash = _char + (hash << 6) + (hash << 16) - hash;
                }

                return hash;
            }

            uploader.on('beforeFileQueued', function (file) {
                var hash = file.__hash || (file.__hash = hashString(file.name +
                        file.size + file.lastModifiedDate));

                // 已经重复了
                if (mapping[hash]) {
                    this.trigger('error', 'F_DUPLICATE', file);
                    return false;
                }
            });

            uploader.on('fileQueued', function (file) {
                var hash = file.__hash;

                hash && (mapping[hash] = true);
            });

            uploader.on('fileDequeued', function (file) {
                var hash = file.__hash;

                hash && (delete mapping[hash]);
            });

            uploader.on('reset', function () {
                mapping = {};
            });
        });

        return api;
    });

    /**
    * @fileOverview Runtime管理器，负责Runtime的选择, 连接
    */
    define('runtime/compbase', [], function () {

        function CompBase(owner, runtime) {

            this.owner = owner;
            this.options = owner.options;

            this.getRuntime = function () {
                return runtime;
            };

            this.getRuid = function () {
                return runtime.uid;
            };

            this.trigger = function () {
                return owner.trigger.apply(owner, arguments);
            };
        }

        return CompBase;
    });
    /**
    * @fileOverview Html5Runtime
    */
    define('runtime/html5/runtime', [
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function (Base, Runtime, CompBase) {

        var type = 'html5',
            components = {};

        function Html5Runtime() {
            var pool = {},
                me = this,
                destory = this.destory;

            Runtime.apply(me, arguments);
            me.type = type;


            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function (comp, fn/*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice(arguments, 2),
                    instance;

                if (components[comp]) {
                    instance = pool[uid] = pool[uid] ||
                            new components[comp](client, me);

                    if (instance[fn]) {
                        return instance[fn].apply(instance, args);
                    }
                }
            };

            me.destory = function () {
                // @todo 删除池子中的所有实例
                return destory && destory.apply(this, arguments);
            };
        }

        Base.inherits(Runtime, {
            constructor: Html5Runtime,

            // 不需要连接其他程序，直接执行callback
            init: function () {
                var me = this;
                setTimeout(function () {
                    me.trigger('ready');
                }, 1);
            }

        });

        // 注册Components
        Html5Runtime.register = function (name, component) {
            var klass = components[name] = Base.inherits(CompBase, component);
            return klass;
        };

        // 注册html5运行时。
        // 只有在支持的前提下注册。
        if (window.Blob && window.FileReader && window.DataView) {
            Runtime.addRuntime(type, Html5Runtime);
        }

        return Html5Runtime;
    });
    /**
    * @fileOverview Blob Html实现
    */
    define('runtime/html5/blob', [
        'runtime/html5/runtime',
        'lib/blob'
    ], function (Html5Runtime, Blob) {

        return Html5Runtime.register('Blob', {
            slice: function (start, end) {
                var blob = this.owner.source,
                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;

                blob = slice.call(blob, start, end);

                return new Blob(this.getRuid(), blob);
            }
        });
    });
    /**
    * @fileOverview FilePaste
    */
    define('runtime/html5/dnd', [
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function (Base, Html5Runtime, File) {

        var $ = Base.$,
            prefix = 'webuploader-dnd-';

        return Html5Runtime.register('DragAndDrop', {
            init: function () {
                var elem = this.elem = this.options.container;

                this.dragEnterHandler = Base.bindFn(this._dragEnterHandler, this);
                this.dragOverHandler = Base.bindFn(this._dragOverHandler, this);
                this.dragLeaveHandler = Base.bindFn(this._dragLeaveHandler, this);
                this.dropHandler = Base.bindFn(this._dropHandler, this);
                this.dndOver = false;

                elem.on('dragenter', this.dragEnterHandler);
                elem.on('dragover', this.dragOverHandler);
                elem.on('dragleave', this.dragLeaveHandler);
                elem.on('drop', this.dropHandler);

                if (this.options.disableGlobalDnd) {
                    $(document).on('dragover', this.dragOverHandler);
                    $(document).on('drop', this.dropHandler);
                }
            },

            _dragEnterHandler: function (e) {
                var me = this,
                    denied = me._denied || false,
                    items;

                e = e.originalEvent || e;

                if (!me.dndOver) {
                    me.dndOver = true;

                    // 注意只有 chrome 支持。
                    items = e.dataTransfer.items;

                    if (items && items.length) {
                        me._denied = denied = !me.trigger('accept', items);
                    }

                    me.elem.addClass(prefix + 'over');
                    me.elem[denied ? 'addClass' :
                            'removeClass'](prefix + 'denied');
                }

                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';

                return false;
            },

            _dragOverHandler: function (e) {
                // 只处理框内的。
                var parentElem = this.elem.parent().get(0);
                if (parentElem && !$.contains(parentElem, e.currentTarget)) {
                    return false;
                }

                clearTimeout(this._leaveTimer);
                this._dragEnterHandler.call(this, e);

                return false;
            },

            _dragLeaveHandler: function () {
                var me = this,
                    handler;

                handler = function () {
                    me.dndOver = false;
                    me.elem.removeClass(prefix + 'over ' + prefix + 'denied');
                };

                clearTimeout(me._leaveTimer);
                me._leaveTimer = setTimeout(handler, 100);
                return false;
            },

            _dropHandler: function (e) {
                var me = this,
                    ruid = me.getRuid(),
                    parentElem = me.elem.parent().get(0),
                    dataTransfer, data;

                // 只处理框内的。
                if (parentElem && !$.contains(parentElem, e.currentTarget)) {
                    return false;
                }

                e = e.originalEvent || e;
                dataTransfer = e.dataTransfer;

                // 如果是页面内拖拽，还不能处理，不阻止事件。
                // 此处 ie11 下会报参数错误，
                try {
                    data = dataTransfer.getData('text/html');
                } catch (err) {
                }

                if (data) {
                    return;
                }

                me._getTansferFiles(dataTransfer, function (results) {
                    me.trigger('drop', $.map(results, function (file) {
                        return new File(ruid, file);
                    }));
                });

                me.dndOver = false;
                me.elem.removeClass(prefix + 'over');
                return false;
            },

            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
            _getTansferFiles: function (dataTransfer, callback) {
                var results = [],
                    promises = [],
                    items, files, file, item, i, len, canAccessFolder;

                items = dataTransfer.items;
                files = dataTransfer.files;

                canAccessFolder = !!(items && items[0].webkitGetAsEntry);

                for (i = 0, len = files.length; i < len; i++) {
                    file = files[i];
                    item = items && items[i];

                    if (canAccessFolder && item.webkitGetAsEntry().isDirectory) {

                        promises.push(this._traverseDirectoryTree(
                                item.webkitGetAsEntry(), results));
                    } else {
                        results.push(file);
                    }
                }

                Base.when.apply(Base, promises).done(function () {

                    if (!results.length) {
                        return;
                    }

                    callback(results);
                });
            },

            _traverseDirectoryTree: function (entry, results) {
                var deferred = Base.Deferred(),
                    me = this;

                if (entry.isFile) {
                    entry.file(function (file) {
                        results.push(file);
                        deferred.resolve();
                    });
                } else if (entry.isDirectory) {
                    entry.createReader().readEntries(function (entries) {
                        var len = entries.length,
                            promises = [],
                            arr = [],    // 为了保证顺序。
                            i;

                        for (i = 0; i < len; i++) {
                            promises.push(me._traverseDirectoryTree(
                                    entries[i], arr));
                        }

                        Base.when.apply(Base, promises).then(function () {
                            results.push.apply(results, arr);
                            deferred.resolve();
                        }, deferred.reject);
                    });
                }

                return deferred.promise();
            },

            destroy: function () {
                var elem = this.elem;

                elem.off('dragenter', this.dragEnterHandler);
                elem.off('dragover', this.dragEnterHandler);
                elem.off('dragleave', this.dragLeaveHandler);
                elem.off('drop', this.dropHandler);

                if (this.options.disableGlobalDnd) {
                    $(document).off('dragover', this.dragOverHandler);
                    $(document).off('drop', this.dropHandler);
                }
            }
        });
    });

    /**
    * @fileOverview FilePaste
    */
    define('runtime/html5/filepaste', [
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function (Base, Html5Runtime, File) {

        return Html5Runtime.register('FilePaste', {
            init: function () {
                var opts = this.options,
                    elem = this.elem = opts.container,
                    accept = '.*',
                    arr, i, len, item;

                // accetp的mimeTypes中生成匹配正则。
                if (opts.accept) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        item = opts.accept[i].mimeTypes;
                        item && arr.push(item);
                    }

                    if (arr.length) {
                        accept = arr.join(',');
                        accept = accept.replace(/,/g, '|').replace(/\*/g, '.*');
                    }
                }
                this.accept = accept = new RegExp(accept, 'i');
                this.hander = Base.bindFn(this._pasteHander, this);
                elem.on('paste', this.hander);
            },

            _pasteHander: function (e) {
                var allowed = [],
                    ruid = this.getRuid(),
                    items, item, blob, i, len;

                e = e.originalEvent || e;
                items = e.clipboardData.items;

                for (i = 0, len = items.length; i < len; i++) {
                    item = items[i];

                    if (item.kind !== 'file' || !(blob = item.getAsFile())) {
                        continue;
                    }

                    allowed.push(new File(ruid, blob));
                }

                if (allowed.length) {
                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger('paste', allowed);
                }
            },

            destroy: function () {
                this.elem.off('paste', this.hander);
            }
        });
    });

    /**
    * @fileOverview FilePicker
    */
    define('runtime/html5/filepicker', [
        'base',
        'runtime/html5/runtime'
    ], function (Base, Html5Runtime) {

        var $ = Base.$;

        return Html5Runtime.register('FilePicker', {
            init: function () {
                var container = this.getRuntime().getContainer(),
                    me = this,
                    owner = me.owner,
                    opts = me.options,
                    lable = $(document.createElement('label')),
                    input = $(document.createElement('input')),
                    arr, i, len, mouseHandler;

                input.attr('type', 'file');
                input.attr('name', opts.name);
                input.addClass('webuploader-element-invisible');

                lable.on('click', function () {
                    input.trigger('click');
                });

                lable.css({
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    cursor: 'pointer',
                    background: '#ffffff'
                });

                if (opts.multiple) {
                    input.attr('multiple', 'multiple');
                }

                // @todo Firefox不支持单独指定后缀
                if (opts.accept && opts.accept.length > 0) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        arr.push(opts.accept[i].mimeTypes);
                    }

                    input.attr('accept', arr.join(','));
                }

                container.append(input);
                container.append(lable);

                mouseHandler = function (e) {
                    owner.trigger(e.type);
                };

                input.on('change', function (e) {
                    var fn = arguments.callee,
                        clone;

                    me.files = e.target.files;

                    // reset input
                    clone = this.cloneNode(true);
                    clone.value = null;
                    this.parentNode.replaceChild(clone, this);

                    input.off();
                    input = $(clone).on('change', fn)
                            .on('mouseenter mouseleave', mouseHandler);

                    owner.trigger('change');
                });

                lable.on('mouseenter mouseleave', mouseHandler);

            },


            getFiles: function () {
                return this.files;
            },

            destroy: function () {
                // todo
            }
        });
    });
    /**
    * @fileOverview Transport
    * @todo 支持chunked传输，优势：
    * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
    * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
    */
    define('runtime/html5/transport', [
        'base',
        'runtime/html5/runtime'
    ], function (Base, Html5Runtime) {

        var noop = Base.noop,
            $ = Base.$;

        return Html5Runtime.register('Transport', {
            init: function () {
                this._status = 0;
                this._response = null;
            },

            send: function () {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    formData, binary, fr;

                if (opts.sendAsBinary) {
                    server += (/\?/.test(server) ? '&' : '?') +
                            $.param(owner._formData);

                    binary = blob.getSource();
                } else {
                    formData = new FormData();
                    $.each(owner._formData, function (k, v) {
                        formData.append(k, v);
                    });

                    formData.append(opts.fileVal, blob.getSource(),
                            opts.filename || owner._formData.name || '');
                }

                if (opts.withCredentials && 'withCredentials' in xhr) {
                    xhr.open(opts.method, server, true);
                    xhr.withCredentials = true;
                } else {
                    xhr.open(opts.method, server);
                }

                this._setRequestHeader(xhr, opts.headers);

                if (binary) {
                    xhr.overrideMimeType('application/octet-stream');

                    // android直接发送blob会导致服务端接收到的是空文件。
                    // bug详情。
                    // https://code.google.com/p/android/issues/detail?id=39882
                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
                    if (Base.os.android) {
                        fr = new FileReader();

                        fr.onload = function () {
                            xhr.send(this.result);
                            fr = fr.onload = null;
                        };

                        fr.readAsArrayBuffer(binary);
                    } else {
                        xhr.send(binary);
                    }
                } else {
                    xhr.send(formData);
                }
            },

            getResponse: function () {
                return this._response;
            },

            getResponseAsJson: function () {
                return this._parseJson(this._response);
            },

            getStatus: function () {
                return this._status;
            },

            abort: function () {
                var xhr = this._xhr;

                if (xhr) {
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    xhr.abort();

                    this._xhr = xhr = null;
                }
            },

            destroy: function () {
                this.abort();
            },

            _initAjax: function () {
                var me = this,
                    xhr = new XMLHttpRequest(),
                    opts = this.options;

                if (opts.withCredentials && !('withCredentials' in xhr) &&
                        typeof XDomainRequest !== 'undefined') {
                    xhr = new XDomainRequest();
                }

                xhr.upload.onprogress = function (e) {
                    var percentage = 0;

                    if (e.lengthComputable) {
                        percentage = e.loaded / e.total;
                    }

                    return me.trigger('progress', percentage);
                };

                xhr.onreadystatechange = function () {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    me._xhr = null;
                    me._status = xhr.status;

                    if (xhr.status >= 200 && xhr.status < 300) {
                        me._response = xhr.responseText;
                        return me.trigger('load');
                    } else if (xhr.status >= 500 && xhr.status < 600) {
                        me._response = xhr.responseText;
                        return me.trigger('error', 'server');
                    }


                    return me.trigger('error', me._status ? 'http' : 'abort');
                };

                me._xhr = xhr;
                return xhr;
            },

            _setRequestHeader: function (xhr, headers) {
                $.each(headers, function (key, val) {
                    xhr.setRequestHeader(key, val);
                });
            },

            _parseJson: function (str) {
                var json;

                try {
                    json = JSON.parse(str);
                } catch (ex) {
                    json = {};
                }

                return json;
            }
        });
    });
    /**
    * @fileOverview FlashRuntime
    */
    define('runtime/flash/runtime', [
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function (Base, Runtime, CompBase) {

        var $ = Base.$,
            type = 'flash',
            components = {};


        function getFlashVersion() {
            var version;

            try {
                version = navigator.plugins['Shockwave Flash'];
                version = version.description;
            } catch (ex) {
                try {
                    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                            .GetVariable('$version');
                } catch (ex2) {
                    version = '0.0';
                }
            }
            version = version.match(/\d+/g);
            return parseFloat(version[0] + '.' + version[1], 10);
        }

        function FlashRuntime() {
            var pool = {},
                clients = {},
                destory = this.destory,
                me = this,
                jsreciver = Base.guid('webuploader_');

            Runtime.apply(me, arguments);
            me.type = type;


            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function (comp, fn/*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice(arguments, 2),
                    instance;

                clients[uid] = client;

                if (components[comp]) {
                    if (!pool[uid]) {
                        pool[uid] = new components[comp](client, me);
                    }

                    instance = pool[uid];

                    if (instance[fn]) {
                        return instance[fn].apply(instance, args);
                    }
                }

                return me.flashExec.apply(client, arguments);
            };

            function handler(evt, obj) {
                var type = evt.type || evt,
                    parts, uid;

                parts = type.split('::');
                uid = parts[0];
                type = parts[1];

                // console.log.apply( console, arguments );

                if (type === 'Ready' && uid === me.uid) {
                    me.trigger('ready');
                } else if (clients[uid]) {
                    clients[uid].trigger(type.toLowerCase(), evt, obj);
                }

                // Base.log( evt, obj );
            }

            // flash的接受器。
            window[jsreciver] = function () {
                var args = arguments;

                // 为了能捕获得到。
                setTimeout(function () {
                    handler.apply(null, args);
                }, 1);
            };

            this.jsreciver = jsreciver;

            this.destory = function () {
                // @todo 删除池子中的所有实例
                return destory && destory.apply(this, arguments);
            };

            this.flashExec = function (comp, fn) {
                var flash = me.getFlash(),
                    args = Base.slice(arguments, 2);

                return flash.exec(this.uid, comp, fn, args);
            };

            // @todo
        }

        Base.inherits(Runtime, {
            constructor: FlashRuntime,

            init: function () {
                var container = this.getContainer(),
                    opts = this.options,
                    html;

                // if not the minimal height, shims are not initialized
                // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                container.css({
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: '9px',
                    height: '9px',
                    overflow: 'hidden'
                });

                // insert flash object
                html = '<object id="' + this.uid + '" type="application/' +
                        'x-shockwave-flash" data="' + opts.swf + '" ';

                if (Base.browser.ie) {
                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }

                html += 'width="100%" height="100%" style="outline:0">' +
                    '<param name="movie" value="' + opts.swf + '" />' +
                    '<param name="flashvars" value="uid=' + this.uid +
                    '&jsreciver=' + this.jsreciver + '" />' +
                    '<param name="wmode" value="transparent" />' +
                    '<param name="allowscriptaccess" value="always" />' +
                '</object>';

                container.html(html);
            },

            getFlash: function () {
                if (this._flash) {
                    return this._flash;
                }

                this._flash = $('#' + this.uid).get(0);
                return this._flash;
            }

        });

        FlashRuntime.register = function (name, component) {
            component = components[name] = Base.inherits(CompBase, $.extend({

                // @todo fix this later
                flashExec: function () {
                    var owner = this.owner,
                        runtime = this.getRuntime();

                    return runtime.flashExec.apply(owner, arguments);
                }
            }, component));

            return component;
        };

        if (getFlashVersion() >= 11.4) {
            Runtime.addRuntime(type, FlashRuntime);
        }

        return FlashRuntime;
    });
    /**
    * @fileOverview FilePicker
    */
    define('runtime/flash/filepicker', [
        'base',
        'runtime/flash/runtime'
    ], function (Base, FlashRuntime) {
        var $ = Base.$;

        return FlashRuntime.register('FilePicker', {
            init: function (opts) {
                var copy = $.extend({}, opts),
                    len, i;

                // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
                len = copy.accept && copy.accept.length;
                for (i = 0; i < len; i++) {
                    if (!copy.accept[i].title) {
                        copy.accept[i].title = 'Files';
                    }
                }

                delete copy.button;
                delete copy.id;
                delete copy.container;

                this.flashExec('FilePicker', 'init', copy);
            },

            destroy: function () {
                // todo
            }
        });
    });
    /**
    * @fileOverview  Transport flash实现
    */
    define('runtime/flash/transport', [
        'base',
        'runtime/flash/runtime',
        'runtime/client'
    ], function (Base, FlashRuntime, RuntimeClient) {
        var $ = Base.$;

        return FlashRuntime.register('Transport', {
            init: function () {
                this._status = 0;
                this._response = null;
                this._responseJson = null;
            },

            send: function () {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    binary;

                xhr.connectRuntime(blob.ruid);

                if (opts.sendAsBinary) {
                    server += (/\?/.test(server) ? '&' : '?') +
                            $.param(owner._formData);

                    binary = blob.uid;
                } else {
                    $.each(owner._formData, function (k, v) {
                        xhr.exec('append', k, v);
                    });

                    xhr.exec('appendBlob', opts.fileVal, blob.uid,
                            opts.filename || owner._formData.name || '');
                }

                this._setRequestHeader(xhr, opts.headers);
                xhr.exec('send', {
                    method: opts.method,
                    url: server,
                    mimeType: 'application/octet-stream'
                }, binary);
            },

            getStatus: function () {
                return this._status;
            },

            getResponse: function () {
                return this._response || '';
            },

            getResponseAsJson: function () {
                return this._responseJson;
            },

            abort: function () {
                var xhr = this._xhr;

                if (xhr) {
                    xhr.exec('abort');
                    xhr.destroy();
                    this._xhr = xhr = null;
                }
            },

            destroy: function () {
                this.abort();
            },

            _initAjax: function () {
                var me = this,
                    xhr = new RuntimeClient('XMLHttpRequest');

                xhr.on('uploadprogress progress', function (e) {
                    var percent = e.loaded / e.total;
                    percent = Math.min(1, Math.max(0, percent));
                    return me.trigger('progress', percent);
                });

                xhr.on('load', function () {
                    var status = xhr.exec('getStatus'),
                        err = '';

                    xhr.off();
                    me._xhr = null;

                    if (status >= 200 && status < 300) {
                        me._response = xhr.exec('getResponse');
                        me._responseJson = xhr.exec('getResponseAsJson');
                    } else if (status >= 500 && status < 600) {
                        me._response = xhr.exec('getResponse');
                        me._responseJson = xhr.exec('getResponseAsJson');
                        err = 'server';
                    } else {
                        err = 'http';
                    }

                    me._response = decodeURIComponent(me._response);
                    xhr.destroy();
                    xhr = null;

                    return err ? me.trigger('error', err) : me.trigger('load');
                });

                xhr.on('error', function () {
                    xhr.off();
                    me._xhr = null;
                    me.trigger('error', 'http');
                });

                me._xhr = xhr;
                return xhr;
            },

            _setRequestHeader: function (xhr, headers) {
                $.each(headers, function (key, val) {
                    xhr.exec('setRequestHeader', key, val);
                });
            }
        });
    });
    /**
    * @fileOverview 没有图像处理的版本。
    */
    define('preset/withoutimage', [
        'base',

    // widgets
        'widgets/filednd',
        'widgets/filepaste',
        'widgets/filepicker',
        'widgets/queue',
        'widgets/runtime',
        'widgets/upload',
        'widgets/validator',

    // runtimes
    // html5
        'runtime/html5/blob',
        'runtime/html5/dnd',
        'runtime/html5/filepaste',
        'runtime/html5/filepicker',
        'runtime/html5/transport',

    // flash
        'runtime/flash/filepicker',
        'runtime/flash/transport'
    ], function (Base) {
        return Base;
    });
    define('webuploader', [
        'preset/withoutimage'
    ], function (preset) {
        return preset;
    });
    return require('webuploader');
});

(function(Editor, markdownit, WebUploader){
    // Set default options
    var md = new markdownit();

    md.set({
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       true,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // Autoconvert URL-like text to links
      typographer:  false,        // Enable smartypants and other sweet transforms
    });

    window.markdowniter = md;

    var toolbar = Editor.toolbar;

    var replaceTool = function(name, callback){
        for(var i=0, len=toolbar.length; i<len; i++){
            var v = toolbar[i];
            if(typeof(v) !== 'string' && v.name === name){
                v.action = callback;
                break;
            }
        }
    };

    var $body = $('body');

    //添加连接工具
    var ToolLink = function(){
        var self = this;

        //this.$win = $([
        //    '<div class="modal fade" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">',
        //        '<div class="modal-dialog">',
        //            '<div class="modal-content">',
        //                '<div class="modal-header">',
        //                    '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        //                    '<h4 class="modal-title">添加连接</h4>',
        //                '</div>',
        //                '<div class="modal-body">',
        //                    '<form class="form-horizontal">',
        //                        '<div class="input-group">',
        //                            '<label class="control-label col-sm-3">标题</label>',
        //                            '<div class="col-sm-9">',
        //                                '<input class="form-control" type="text" name="title" placeholder="Title">',
        //                            '</div>',
        //                        '</div>',
        //                        '<div class="input-group">',
        //                            '<label class="control-label col-sm-3">连接</label>',
        //                            '<div class="col-sm-9">',
        //                                '<input class="form-control" type="text" name="link" value="http://" placeholder="Link">',
        //                            '</div>',
        //                        '</div>',
        //                '</form>',
        //                '</div>',
        //                '<div class="modal-footer">',
        //                    '<button class="btn btn-primary" role="save">确定</button>',
        //                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
        //                '</div>',
        //            '</div>',
        //        '</div>',
        //    '</div>'
        //].join('')).appendTo($body);

        this.$win = $([
            '<div class="am-modal" tabindex="-1">',
                '<div class="am-modal-dialog">',
                    '<div class="am-modal-hd">',
                        '添加标题',
                        '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
                    '</div>',
                    '<div class="am-modal-bd">',
                        '<form class="am-form">',
                            '<div class="am-form-group">',
                                '<label>标题</label>',
                                '<input class="am-modal-prompt-input" type="text" name="title" placeholder="Title">',
                            '</div>',
                            '<div class="am-form-group">',
                                '<label>连接</label>',
                                '<input class="am-modal-prompt-input" type="text" name="link" value="http://" placeholder="Link">',
                            '</div>',
                        '</form>',
                    '</div>',
                    '<div class="am-modal-footer">',
                        '<span class="am-modal-btn" role="save">确定</span>',
                        '<span class="am-modal-btn" data-am-modal-cancel>取消</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')).appendTo($body);


        this.$win.on('click', '[role=save]', function(){
            self.$win.find('form').submit();
        }).on('submit', 'form', function(){
            var $el = $(this);
            var title = $el.find('[name=title]').val();
            var link = $el.find('[name=link]').val();

            self.$win.modal('close');
            self.editor.push(' ['+ title +']('+ link +')');

            $el.find('[name=title]').val('');
            $el.find('[name=link]').val('http://');

            return false;
        });
    };

    ToolLink.prototype.bind = function(editor){
        this.editor = editor;
        //this.$win.modal('show');
        this.$win.modal();
    };

    //图片上传工具
    var ToolImage = function(){
        var self = this;

        //this.$win = $([
        //    '<div class="modal fade">',
        //        '<div class="modal-dialog">',
        //            '<div class="modal-content">',
        //                '<div class="modal-header">',
        //                    '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        //                    '<h4 class="modal-title">图片</h4>',
        //                '</div>',
        //                '<div class="modal-body">',
        //                    '<div class="upload-img">',
        //                        '<div id="upload" class="btn btn-primary">上传图片</div>',
        //                        '<span class="tip"></span>',
        //                        '<div class="alert alert-error hide"></div>',
        //                    '</div>',
        //                '</div>',
        //                '<div class="modal-footer">',
        //                    '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
        //                '</div>',
        //            '</div>',
        //        '</div>',
        //    '</div>'
        //].join('')).appendTo($body);

        this.$win = $([
            '<div class="am-modal" tabindex="-1">',
                '<div class="am-modal-dialog">',
                    '<div class="am-modal-hd">',
                        '图片',
                        '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
                    '</div>',
                    '<div class="am-modal-bd">',
                        '<div class="upload-img">',
                            '<div id="upload" class="am-btn am-btn-primary">上传图片</div>',
                            '<span class="tip"></span>',
                            '<div class="alert alert-error hide"></div>',
                        '</div>',
                    '</div>',
                    '<div class="am-modal-footer">',
                        '<span class="am-modal-btn" role="save">确定</span>',
                        '<span class="am-modal-btn" data-am-modal-cancel>取消</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')).appendTo($body);

        this.$upload = this.$win.find('.upload-img').css({
            height: 50,
            padding: '60px 0',
            textAlign: 'center',
            border: '4px dashed#ddd'
        });

        //this.$uploadBtn = this.$upload.find('#upload').css({
        //    width: 86,
        //    height: 40,
        //    margin: '0 auto'
        //});
        this.$uploadBtn = this.$upload.find('#upload');

        this.$uploadTip = this.$upload.find('.tip').hide();

        this.file = false;
        //var _csrf = $('[name=_csrf]').val();

        this.uploader = WebUploader.create({
            swf: '/public/js/plugins/webuploader/Uploader.swf',
            //server: '/upload?_csrf=' + _csrf,
            server:'/upload/upload',
            pick: this.$uploadBtn[0],
            paste: document.body,
            dnd: this.$upload[0],
            auto: true,
            fileSingleSizeLimit: 2 * 1024 * 1024,
            //sendAsBinary: true,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });

        this.uploader.on('beforeFileQueued', function(file){
            if(self.file !== false || !self.editor){
                return false;
            }
            self.showFile(file);
        });

        this.uploader.on('uploadProgress', function(file, percentage){
            // console.log(percentage);
            self.showProgress(file, percentage * 100);
        });

        this.uploader.on('uploadSuccess', function(file, res){
            if(res.success){
                self.$win.modal('close');
                self.editor.push('!['+ file.name +']('+ res.url +')');
            }
            else{
                self.removeFile();
                self.showError(res.msg || '服务器走神了，上传失败');
            }
        });

        this.uploader.on('uploadComplete', function(file){
            self.uploader.removeFile(file);
            self.removeFile();
        });

        this.uploader.on('error', function(type){
            self.removeFile();
            switch(type){
                case 'Q_EXCEED_SIZE_LIMIT':
                case 'F_EXCEED_SIZE':
                    self.showError('文件太大了, 不能超过2M');
                    break;
                case 'Q_TYPE_DENIED':
                    self.showError('只能上传图片');
                    break;
                default:
                    self.showError('发生未知错误');
            }
        });

        this.uploader.on('uploadError', function(){
            self.removeFile();
            self.showError('服务器走神了，上传失败');
        });
    };

    ToolImage.prototype.removeFile = function(){
        //var self = this;
        this.file = false;
        this.$uploadBtn.show();
        this.$uploadTip.hide();
    };

    ToolImage.prototype.showFile = function(file){
        //var self = this;
        this.file = file;
        this.$uploadBtn.hide();
        this.$uploadTip.html('正在上传: ' + file.name).show();
        this.hideError();
    };

    ToolImage.prototype.showError = function(error){
        this.$upload.find('.alert-error').html(error).show();
    };

    ToolImage.prototype.hideError = function(error){
        this.$upload.find('.alert-error').hide();
    };

    ToolImage.prototype.showProgress = function(file, percentage){
        this.$uploadTip
            .html('正在上传: ' + file.name + ' ' + percentage + '%')
            .show();
    };

    ToolImage.prototype.bind = function(editor){
        this.editor = editor;
        //this.$win.modal('show');
        this.$win.modal();
    };

    var toolImage = new ToolImage();
    var toolLink = new ToolLink();

    replaceTool('image', function(editor){
        toolImage.bind(editor);
    });
    replaceTool('link', function(editor){
        toolLink.bind(editor);
    });

    //当编辑器取得焦点时，绑定 toolImage；
    var createToolbar = Editor.prototype.createToolbar;
    Editor.prototype.createToolbar = function(items){
        createToolbar.call(this, items);
        var self = this;
        $(self.codemirror.display.input).on('focus', function(){
            toolImage.editor = self;
        });
    };

    //追加内容
    Editor.prototype.push = function(txt){
        var cm = this.codemirror;
        var line = cm.lastLine();
        cm.setLine(line, cm.getLine(line) + txt);
    };
})(window.Editor, window.markdownit, window.WebUploader);

