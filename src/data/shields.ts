export const shields = {
  types: {basic: 10, regional: 2, historical: 1, specific: 1, banner: 1, simple: 2, fantasy: 1, middleEarth: 0},
  basic: {heater: 12, spanish: 6, french: 1},
  regional: {horsehead: 1, horsehead2: 1, polish: 1, hessen: 1, swiss: 1},
  historical: {boeotian: 1, roman: 2, kite: 1, oldFrench: 5, renaissance: 2, baroque: 2},
  specific: {targe: 1, targe2: 0, pavise: 5, wedged: 10, embowed: 1},
  banner: {flag: 1, pennon: 0, guidon: 0, banner: 0, dovetail: 1, gonfalon: 5, pennant: 0},
  simple: {round: 12, oval: 6, vesicaPiscis: 1, square: 1, diamond: 2, hexagon: 1, no: 0},
  middleEarth: {noldor: 1, gondor: 1, easterling: 1, erebor: 1, ironHills: 1, urukHai: 1, moriaOrc: 1},
  fantasy: {fantasy1: 2, fantasy2: 2, fantasy3: 1, fantasy4: 1, fantasy5: 3}
};

export const shieldTypes = [
  "basic",
  "regional",
  "historical",
  "specific",
  "banner",
  "simple",
  "middleEarth",
  "fantasy"
];

export const shieldPaths = {
  heater: "m25,25 h150 v50 a150,150,0,0,1,-75,125 a150,150,0,0,1,-75,-125 z",
  spanish: "m25,25 h150 v100 a75,75,0,0,1,-150,0 z",
  french: "m 25,25 h 150 v 139.15 c 0,41.745 -66,18.15 -75,36.3 -9,-18.15 -75,5.445 -75,-36.3 v 0 z",
  horsehead:
    "m 20,40 c 0,60 40,80 40,100 0,10 -4,15 -0.35,30 C 65,185.7 81,200 100,200 c 19.1,0 35.3,-14.6 40.5,-30.4 C 144.2,155 140,150 140,140 140,120 180,100 180,40 142.72,40 150,15 100,15 55,15 55,40 20,40 Z",
  horsehead2:
    "M60 20c-5 20-10 35-35 55 25 35 35 65 30 100 20 0 35 10 45 26 10-16 30-26 45-26-5-35 5-65 30-100a87 87 0 01-35-55c-25 3-55 3-80 0z",
  polish:
    "m 90.3,6.3 c -12.7,0 -20.7,10.9 -40.5,14 0,11.8 -4.9,23.5 -11.4,31.1 0,0 12.7,6 12.7,19.3 C 51.1,90.8 30,90.8 30,90.8 c 0,0 -3.6,7.4 -3.6,22.4 0,34.3 23.1,60.2 40.7,68.2 17.6,8 27.7,11.4 32.9,18.6 5.2,-7.3 15.3,-10.7 32.8,-18.6 17.6,-8 40.7,-33.9 40.7,-68.2 0,-15 -3.6,-22.4 -3.6,-22.4 0,0 -21.1,0 -21.1,-20.1 0,-13.3 12.7,-19.3 12.7,-19.3 C 155.1,43.7 150.2,32.1 150.2,20.3 130.4,17.2 122.5,6.3 109.7,6.3 102.5,6.3 100,10 100,10 c 0,0 -2.5,-3.7 -9.7,-3.7 z",
  hessen:
    "M170 20c4 5 8 13 15 20 0 0-10 0-10 15 0 100-15 140-75 145-65-5-75-45-75-145 0-15-10-15-10-15l15-20c0 15 10-5 70-5s70 20 70 5z",
  swiss:
    "m 25,20 c -0.1,0 25.2,8.5 37.6,8.5 C 75.1,28.5 99.1,20 100,20 c 0.6,0 24.9,8.5 37.3,8.5 C 149.8,28.5 174.4,20 175,20 l -0.3,22.6 C 173.2,160.3 100,200 100,200 100,200 26.5,160.9 25.2,42.6 Z",
  boeotian:
    "M150 115c-5 0-10-5-10-15s5-15 10-15c10 0 7 10 15 10 10 0 0-30 0-30-10-25-30-55-65-55S45 40 35 65c0 0-10 30 0 30 8 0 5-10 15-10 5 0 10 5 10 15s-5 15-10 15c-10 0-7-10-15-10-10 0 0 30 0 30 10 25 30 55 65 55s55-30 65-55c0 0 10-30 0-30-8 0-5 10-15 10z",
  roman: "m 160,170 c -40,20 -80,20 -120,0 V 30 C 80,10 120,10 160,30 Z",
  kite: "m 53.3,46.4 c 0,4.1 1,12.3 1,12.3 7.1,55.7 45.7,141.3 45.7,141.3 0,0 38.6,-85.6 45.7,-141.2 0,0 1,-8.1 1,-12.3 C 146.7,20.9 125.8,0.1 100,0.1 74.2,0.1 53.3,20.9 53.3,46.4 Z",
  oldFrench: "m25,25 h150 v75 a100,100,0,0,1,-75,100 a100,100,0,0,1,-75,-100 z",
  renaissance:
    "M 25,33.9 C 33.4,50.3 36.2,72.9 36.2,81.7 36.2,109.9 25,122.6 25,141 c 0,29.4 24.9,44.1 40.2,47.7 15.3,3.7 29.3,0 34.8,11.3 5.5,-11.3 19.6,-7.6 34.8,-11.3 C 150.1,185 175,170.3 175,141 c 0,-18.4 -11.2,-31.1 -11.2,-59.3 0,-8.8 2.8,-31.3 11.2,-47.7 L 155.7,14.4 C 138.2,21.8 119.3,25.7 100,25.7 c -19.3,0 -38.2,-3.9 -55.7,-11.3 z",
  baroque:
    "m 100,25 c 18,0 50,2 75,14 v 37 l -2.7,3.2 c -4.9,5.4 -6.6,9.6 -6.7,16.2 0,6.5 2,11.6 6.9,17.2 l 2.8,3.1 v 10.2 c 0,17.7 -2.2,27.7 -7.8,35.9 -5,7.3 -11.7,11.3 -32.3,19.4 -12.6,5 -20.2,8.8 -28.6,14.5 C 103.3,198 100,200 100,200 c 0,0 -2.8,-2.3 -6.4,-4.7 C 85.6,189.8 78,186 65,180.9 32.4,168.1 26.9,160.9 25.8,129.3 L 25,116 l 3.3,-3.3 c 4.8,-5.2 7,-10.7 7,-17.3 0,-6.8 -1.8,-11.1 -6.5,-16.1 L 25,76 V 39 C 50,27 82,25 100,25 Z",
  targe:
    "m 20,35 c 15,0 115,-60 155,-10 -5,10 -15,15 -10,50 5,45 10,70 -10,90 C 125,195 75,195 50,175 25,150 30,130 35,85 50,95 65,85 65,70 65,50 50,45 40,50 30,55 27,65 30,70 23,73 20,70 14,70 11,60 20,45 20,35 Z",
  targe2:
    "m 84,32.2 c 6.2,-1 19.5,-31.4 94.1,-20.2 -30.57,33.64 -21.66,67.37 -11.2,95 20.2,69.5 -41.17549,84.7 -66.88,84.7 C 74.32,191.7071 8.38,168.95 32,105.9 36.88,92.88 31,89 31,82.6 35.15,82.262199 56.79,86.17 56.5,69.8 56.20,52.74 42.2,47.9 25.9,55.2 25.9,51.4 39.8,6.7 84,32.2 Z",
  pavise:
    "M95 7L39.9 37.3a10 10 0 00-5.1 9.5L46 180c.4 5.2 3.7 10 9 10h90c5.3 0 9.6-4.8 10-10l10.6-133.2a10 10 0 00-5-9.5L105 7c-4.2-2.3-6.2-2.3-10 0z",
  wedged:
    "m 51.2,19 h 96.4 c 3.1,12.7 10.7,20.9 26.5,20.8 C 175.7,94.5 165.3,144.3 100,200 43.5,154.2 22.8,102.8 25.1,39.7 37,38.9 47.1,34.7 51.2,19 Z",
  embowed: "m 25,25 a 170,170,0,0,1,150,0 v 50 a 150,150,0,0,1,-75,125 a 150,150,0,0,1,-75,-125 z",
  round: "m 185,100 a 85,85 0 0 1 -85,85 85,85 0 0 1 -85,-85 85,85 0 0 1 85,-85 85,85 0 0 1 85,85",
  oval: "m 32.3,99.5 a 67.7,93.7 0 1 1 0,1.3 z",
  vesicaPiscis:
    "M 100,0 C 63.9,20.4 41,58.5 41,100 c 0,41.5 22.9,79.6 59,100 36.1,-20.4 59,-58.5 59,-100 C 159,58.5 136.1,20.4 100,0 Z",
  square: "M 25,25 H 175 V 175 H 25 Z",
  diamond: "M 25,100 100,200 175,100 100,0 Z",
  hexagon: "M 100,12 176.2,56 176.2,144 100,188 23.8,144 23.8,56 Z",
  no: "m0,0 h200 v200 h-200 z",
  flag: "M 10,40 h180 v120 h-180 Z",
  pennon: "M 10,40 l190,60 -190,60 Z",
  guidon: "M 10,40 h190 l-65,60 65,60 h-190 Z",
  banner: "m 25,25 v 170 l 25,-40 25,40 25,-40 25,40 25,-40 25,40 V 25 Z",
  dovetail: "m 25,25 v 175 l 75,-40 75,40 V 25 Z",
  gonfalon: "m 25,25 v 125 l 75,50 75,-50 V 25 Z",
  pennant: "M 25,15 100,200 175,15 Z",
  fantasy1:
    "M 100,5 C 85,30 40,35 15,40 c 40,35 20,90 40,115 15,25 40,30 45,45 5,-15 30,-20 45,-45 20,-25 0,-80 40,-115 C 160,35 115,30 100,5 Z",
  fantasy2:
    "m 152,21 c 0,0 -27,14 -52,-4 C 75,35 48,21 48,21 50,45 30,55 30,75 60,75 60,115 32,120 c 3,40 53,50 68,80 15,-30 65,-40 68,-80 -28,-5 -28,-45 2,-45 C 170,55 150,45 152,21 Z",
  fantasy3:
    "M 167,67 C 165,0 35,0 33,67 c 32,-7 27,53 -3,43 -5,45 60,65 70,90 10,-25 75,-47.51058 70,-90 -30,10 -35,-50 -3,-43 z",
  fantasy4:
    "M100 9C55 48 27 27 13 39c23 50 3 119 49 150 14 9 28 11 38 11s27-4 38-11c55-39 24-108 49-150-14-12-45 7-87-30z",
  fantasy5: "M 100,0 C 75,25 30,25 30,25 c 0,69 20,145 70,175 50,-30 71,-106 70,-175 0,0 -45,0 -70,-25 z",
  noldor:
    "m 55,75 h 2 c 3,-25 38,-10 3,20 15,50 30,75 40,105 10,-30 25,-55 40,-105 -35,-30 0,-45 3,-20 h 2 C 150,30 110,20 100,0 90,20 50,30 55,75 Z",
  gondor: "m 100,200 c 15,-15 38,-35 45,-60 h 5 V 30 h -5 C 133,10 67,10 55,30 h -5 v 110 h 5 c 7,25 30,45 45,60 z",
  easterling: "M 160,185 C 120,170 80,170 40,185 V 15 c 40,15 80,15 120,0 z",
  erebor: "M25 135 V60 l22-13 16-37 h75 l15 37 22 13 v75l-22 18-16 37 H63l-16-37z",
  ironHills: "m 30,25 60,-10 10,10 10,-10 60,10 -5,125 -65,50 -65,-50 z",
  urukHai: "M 30,60 C 40,60 60,50 60,20 l -5,-3 45,-17 75,40 -5,5 -35,155 -5,-35 H 70 v 35 z",
  moriaOrc:
    "M45 35c5 3 7 10 13 9h19c4-2 7-4 9-9 6 1 9 9 16 11 7-2 14 0 21 0 6-3 6-10 10-15 2-5 1-10-2-15-2-4-5-14-4-16 3 6 7 11 12 14 7 3 3 12 7 16 3 6 4 12 9 18 2 4 6 8 5 14 0 6-1 12 3 18-3 6-2 13-1 20 1 6-2 12-1 18 0 6-3 13 0 18 8 4 0 8-5 7-4 3-9 3-13 9-5 5-5 13-8 19 0 6 0 15-7 16-1 6-7 6-10 12-1-6 0-6-2-9l2-19c2-4 5-12-3-12-4-5-11-5-15 1l-13-18c-3-4-2 9-3 12 2 2-4-6-7-5-8-2-8 7-11 11-2 4-5 10-8 9 3-10 3-16 1-23-1-4 2-9-4-11 0-6 1-13-2-19-4-2-9-6-13-7V91c4-7-5-13 0-19-3-7 2-11 2-18-1-6 1-12 3-17v-1z"
};

export const DEFAULT_SHIELD_BOX = "0 0 200 200";

export const shieldBox = {
  heater: "0 10 200 200",
  spanish: "0 10 200 200",
  french: "0 10 200 200",

  horsehead: "0 10 200 200",
  horsehead2: "0 10 200 200",
  polish: "0 0 200 200",
  hessen: "0 5 200 200",
  swiss: "0 10 200 200",

  boeotian: "0 0 200 200",
  roman: "0 0 200 200",
  kite: "0 0 200 200",
  oldFrench: "0 10 200 200",
  renaissance: "0 5 200 200",
  baroque: "0 10 200 200",

  targe: "0 0 200 200",
  targe2: "0 0 200 200",
  pavise: "0 0 200 200",
  wedged: "0 10 200 200",
  embowed: "0 0 200 200",

  flag: "0 0 200 200",
  pennon: "2.5 0 200 200",
  guidon: "2.5 0 200 200",
  banner: "0 10 200 200",
  dovetail: "0 10 200 200",
  gonfalon: "0 10 200 200",
  pennant: "0 0 200 200",

  round: "0 0 200 200",
  oval: "0 0 200 200",
  vesicaPiscis: "0 0 200 200",
  square: "0 0 200 200",
  diamond: "0 0 200 200",
  hexagon: "0 0 200 200",
  no: "0 0 200 200",

  fantasy1: "0 0 200 200",
  fantasy2: "0 5 200 200",
  fantasy3: "0 5 200 200",
  fantasy4: "0 5 200 200",
  fantasy5: "0 0 200 200",

  noldor: "0 0 200 200",
  gondor: "0 5 200 200",
  easterling: "0 0 200 200",
  erebor: "0 0 200 200",
  ironHills: "0 5 200 200",
  urukHai: "0 0 200 200",
  moriaOrc: "0 0 200 200"
};

// size modifier applied for charges, default is 1
export const shieldSize = {
  horsehead: 0.9,
  horsehead2: 0.9,
  polish: 0.85,
  swiss: 0.95,
  boeotian: 0.75,
  roman: 0.95,
  kite: 0.65,
  targe2: 0.9,
  pavise: 0.9,
  wedged: 0.95,
  flag: 0.7,
  pennon: 0.5,
  guidon: 0.65,
  banner: 0.8,
  dovetail: 0.8,
  pennant: 0.6,
  oval: 0.95,
  vesicaPiscis: 0.8,
  diamond: 0.8,
  no: 1.2,
  fantasy1: 0.8,
  fantasy2: 0.7,
  fantasy3: 0.7,
  fantasy5: 0.9,
  noldor: 0.5,
  gondor: 0.75,
  easterling: 0.8,
  erebor: 0.9,
  urukHai: 0.8,
  moriaOrc: 0.7
};

export const shieldPositions = {
  // shield-specific position: [x, y] (relative to center)
  heater: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32.25, 37.5],
    h: [0, 50],
    i: [32.25, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-30, 30],
    n: [0, 42.5],
    o: [30, 30],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.2, -20],
    E: [66.2, -20],
    J: [-55.5, 26],
    F: [55.5, 26],
    I: [-33, 62],
    G: [33, 62],
    H: [0, 89.5]
  },
  spanish: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-66.4, 26],
    F: [66.4, 26],
    I: [-49, 70],
    G: [49, 70],
    H: [0, 92]
  },
  french: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 65],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-66.4, 26],
    F: [66.4, 26],
    I: [-65.4, 70],
    G: [65.4, 70],
    H: [0, 89]
  },
  horsehead: {
    a: [-43.75, -47.5],
    b: [0, -50],
    c: [43.75, -47.5],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    h: [0, 50],
    y: [-50, -50],
    z: [0, 55],
    j: [-35, -35],
    k: [0, -40],
    l: [35, -35],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-71, -52],
    B: [-24, -73],
    C: [24, -73],
    D: [71, -52],
    K: [-62, -16],
    E: [62, -16],
    J: [-39, 20],
    F: [39, 20],
    I: [-33.5, 60],
    G: [33.5, 60],
    H: [0, 91.5]
  },
  horsehead2: {
    a: [-37.5, -47.5],
    b: [0, -50],
    c: [37.5, -47.5],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-35, 47.5],
    h: [0, 50],
    i: [35, 47.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-30, -30],
    k: [0, -40],
    l: [30, -30],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-49, -39],
    B: [-22, -70],
    C: [22, -70],
    D: [49, -39],
    K: [-51, -2],
    E: [51, -2],
    J: [-38.5, 31],
    F: [38.5, 31],
    I: [-35, 67],
    G: [35, 67],
    H: [0, 85]
  },
  polish: {
    a: [-35, -50],
    b: [0, -50],
    c: [35, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-50, -50],
    z: [0, 65],
    j: [-27.5, -27.5],
    k: [0, -45],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 45],
    o: [27.5, 27.5],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-48, -52],
    B: [-23, -80],
    C: [23, -80],
    D: [48, -52],
    K: [-47, -10],
    E: [47, -10],
    J: [-62, 32],
    F: [62, 32],
    I: [-37, 68],
    G: [37, 68],
    H: [0, 86]
  },
  hessen: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 52.5],
    j: [-40, -40],
    k: [0, -40],
    l: [40, -40],
    m: [-40, 40],
    n: [0, 40],
    o: [40, 40],
    p: [-40, 0],
    q: [40, 0],
    A: [-69, -64],
    B: [-22, -76],
    C: [22, -76],
    D: [69, -64],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-62, 26],
    F: [62, 26],
    I: [-46, 70],
    G: [46, 70],
    H: [0, 91.5]
  },
  swiss: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32, 37.5],
    h: [0, 50],
    i: [32, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-32, 32.5],
    n: [0, 42.5],
    o: [32, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66],
    C: [22, -66],
    D: [66.2, -66.6],
    K: [-63, -20],
    E: [63, -20],
    J: [-50, 26],
    F: [50, 26],
    I: [-29, 62],
    G: [29, 62],
    H: [0, 89.5]
  },
  boeotian: {
    a: [-37.5, -47.5],
    b: [0, -47.5],
    c: [37.5, -47.5],
    d: [-25, 0],
    e: [0, 0],
    f: [25, 0],
    g: [-37.5, 47.5],
    h: [0, 47.5],
    i: [37.5, 47.5],
    y: [-48, -48],
    z: [0, 60],
    j: [-32.5, -37.5],
    k: [0, -45],
    l: [32.5, -37.5],
    m: [-32.5, 37.5],
    n: [0, 45],
    o: [32.5, 37.5],
    p: [-20, 0],
    q: [20, 0],
    A: [-45, -55],
    B: [-20, -77],
    C: [20, -77],
    D: [45, -55],
    K: [-59, -25],
    E: [59, -25],
    J: [-58, 27],
    F: [58, 27],
    I: [-39, 63],
    G: [39, 63],
    H: [0, 81]
  },
  roman: {
    a: [-40, -52.5],
    b: [0, -52.5],
    c: [40, -52.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 52.5],
    h: [0, 52.5],
    i: [40, 52.5],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-30, -37.5],
    k: [0, -37.5],
    l: [30, -37.5],
    m: [-30, 37.5],
    n: [0, 37.5],
    o: [30, 37.5],
    p: [-30, 0],
    q: [30, 0],
    A: [-51.5, -65],
    B: [-17, -75],
    C: [17, -75],
    D: [51.5, -65],
    K: [-51.5, -21],
    E: [51.5, -21],
    J: [-51.5, 21],
    F: [51.5, 21],
    I: [-51.5, 65],
    G: [51.5, 65],
    H: [-17, 75],
    L: [17, 75]
  },
  kite: {
    b: [0, -65],
    e: [0, -15],
    h: [0, 35],
    z: [0, 35],
    k: [0, -50],
    n: [0, 20],
    p: [-20, -15],
    q: [20, -15],
    A: [-38, -52],
    B: [-29, -78],
    C: [29, -78],
    D: [38, -52],
    K: [-33, -20],
    E: [33, -20],
    J: [-25, 11],
    F: [25, 11],
    I: [-15, 42],
    G: [15, 42],
    H: [0, 73],
    L: [0, -91]
  },
  oldFrench: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 45],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.2, -20],
    E: [66.2, -20],
    J: [-64, 26],
    F: [64, 26],
    I: [-45, 62],
    G: [45, 62],
    H: [0, 91]
  },
  renaissance: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-41.5, 0],
    e: [0, 0],
    f: [41.5, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-61, -55],
    B: [-23, -67],
    C: [23, -67],
    D: [61, -55],
    K: [-55, -11],
    E: [55, -11],
    J: [-65, 31],
    F: [65, 31],
    I: [-45, 76],
    G: [45, 76],
    H: [0, 87]
  },
  baroque: {
    a: [-43.75, -45],
    b: [0, -45],
    c: [43.75, -45],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 60],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-65, -54.5],
    B: [-22, -65],
    C: [22, -65],
    D: [65, -54.5],
    K: [-58.5, -15],
    E: [58.5, -15],
    J: [-65, 31],
    F: [66, 31],
    I: [-35, 73],
    G: [35, 73],
    H: [0, 89]
  },
  targe: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-40, -40],
    k: [0, -40],
    l: [40, -40],
    m: [-40, 40],
    n: [0, 40],
    o: [40, 40],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-66.2, -60],
    B: [-22, -77],
    C: [22, -86],
    D: [60, -66.6],
    K: [-28, -20],
    E: [57, -20],
    J: [-61, 26],
    F: [61, 26],
    I: [-49, 63],
    G: [49, 59],
    H: [0, 80]
  },
  targe2: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 60],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-55, -59],
    B: [-15, -59],
    C: [24, -79],
    D: [51, -58],
    K: [-40, -14],
    E: [51, -14],
    J: [-64, 26],
    F: [62, 26],
    I: [-46, 66],
    G: [48, 67],
    H: [0, 83]
  },
  pavise: {
    a: [-40, -52.5],
    b: [0, -52.5],
    c: [40, -52.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 52.5],
    h: [0, 52.5],
    i: [40, 52.5],
    y: [-42.5, -52.5],
    z: [0, 60],
    j: [-30, -35],
    k: [0, -37.5],
    l: [30, -35],
    m: [-30, 35],
    n: [0, 37.5],
    o: [30, 35],
    p: [-30, 0],
    q: [30, 0],
    A: [-57, -55],
    B: [-22, -74],
    C: [22, -74],
    D: [57, -55],
    K: [-54, -11],
    E: [54, -11],
    J: [-50, 36],
    F: [50, 36],
    I: [-46, 81],
    G: [46, 81],
    H: [0, 81]
  },
  wedged: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32.25, 37.5],
    h: [0, 50],
    i: [32.25, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-32.5, 32.5],
    n: [0, 42.5],
    o: [32.5, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66, -53],
    B: [-22, -72.5],
    C: [22, -72.5],
    D: [66, -53],
    K: [-62.6, -13],
    E: [62.6, -13],
    J: [-50, 26],
    F: [50, 26],
    I: [-27, 62],
    G: [27, 62],
    H: [0, 87]
  },
  embowed: {
    a: [-43.75, -50],
    b: [0, -60],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32.25, 37.5],
    h: [0, 50],
    i: [32.25, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -47.5],
    l: [37.5, -37.5],
    m: [-30, 30],
    n: [0, 42.5],
    o: [30, 30],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -82],
    C: [22, -82],
    D: [66.2, -66.6],
    K: [-66.2, -20],
    E: [66.2, -20],
    J: [-55.5, 26],
    F: [55.5, 26],
    I: [-33, 62],
    G: [33, 62],
    H: [0, 89.5]
  },
  flag: {
    a: [-60, -40],
    b: [0, -40],
    c: [60, -40],
    d: [-60, 0],
    e: [0, 0],
    f: [60, 0],
    g: [-60, 40],
    h: [0, 40],
    i: [60, 40],
    y: [-60, -42.5],
    z: [0, 40],
    j: [-45, -30],
    k: [0, -30],
    l: [45, -30],
    m: [-45, 30],
    n: [0, 30],
    o: [45, 30],
    p: [-45, 0],
    q: [45, 0],
    A: [-81, -51],
    B: [-27, -51],
    C: [27, -51],
    D: [81, -51],
    K: [-81, -17],
    E: [81, -17],
    J: [-81, 17],
    F: [81, 17],
    I: [-81, 51],
    G: [81, 51],
    H: [-27, 51],
    L: [27, 51]
  },
  pennon: {
    a: [-75, -40],
    d: [-75, 0],
    e: [-25, 0],
    f: [25, 0],
    g: [-75, 40],
    y: [-70, -42.5],
    j: [-60, -30],
    m: [-60, 30],
    p: [-60, 0],
    q: [5, 0],
    A: [-81, -48],
    B: [-43, -36],
    C: [-4.5, -24],
    D: [33, -12],
    E: [72, 0],
    F: [33, 12],
    G: [-4.5, 24],
    H: [-43, 36],
    I: [-81, 48],
    J: [-81, 17],
    K: [-81, -17]
  },
  guidon: {
    a: [-60, -40],
    b: [0, -40],
    c: [60, -40],
    d: [-60, 0],
    e: [0, 0],
    g: [-60, 40],
    h: [0, 40],
    i: [60, 40],
    y: [-60, -42.5],
    z: [0, 40],
    j: [-45, -30],
    k: [0, -30],
    l: [45, -30],
    m: [-45, 30],
    n: [0, 30],
    o: [45, 30],
    p: [-45, 0],
    A: [-81, -51],
    B: [-27, -51],
    C: [27, -51],
    D: [78, -51],
    K: [-81, -17],
    E: [40.5, -17],
    J: [-81, 17],
    F: [40.5, 17],
    I: [-81, 51],
    G: [78, 51],
    H: [-27, 51],
    L: [27, 51]
  },
  banner: {
    a: [-50, -50],
    b: [0, -50],
    c: [50, -50],
    d: [-50, 0],
    e: [0, 0],
    f: [50, 0],
    g: [-50, 40],
    h: [0, 40],
    i: [50, 40],
    y: [-50, -50],
    z: [0, 40],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 27.5],
    n: [0, 27.5],
    o: [37.5, 27.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-66.5, 66.5],
    G: [66.5, 66.5],
    H: [-25, 75],
    L: [25, 75]
  },
  dovetail: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 40],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 32.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -16.5],
    E: [66.5, -16.5],
    J: [-66.5, 34.5],
    F: [66.5, 34.5],
    I: [-66.5, 84.5],
    G: [66.5, 84.5],
    H: [-25, 64],
    L: [25, 64]
  },
  gonfalon: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    h: [0, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-40, 63],
    G: [40, 63],
    H: [0, 88]
  },
  pennant: {
    a: [-45, -50],
    b: [0, -50],
    c: [45, -50],
    e: [0, 0],
    h: [0, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-32.5, -37.5],
    k: [0, -37.5],
    l: [32.5, -37.5],
    n: [0, 37.5],
    A: [-60, -76],
    B: [-22, -76],
    C: [22, -76],
    D: [60, -76],
    K: [-46, -38],
    E: [46, -38],
    J: [-31, 0],
    F: [31, 0],
    I: [-16, 38],
    G: [16, 38],
    H: [0, 76]
  },
  round: {
    a: [-40, -40],
    b: [0, -40],
    c: [40, -40],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 40],
    h: [0, 40],
    i: [40, 40],
    y: [-48, -48],
    z: [0, 57.5],
    j: [-35.5, -35.5],
    k: [0, -37.5],
    l: [35.5, -35.5],
    m: [-35.5, 35.5],
    n: [0, 37.5],
    o: [35.5, 35.5],
    p: [-36.5, 0],
    q: [36.5, 0],
    A: [-59, -48],
    B: [-23, -73],
    C: [23, -73],
    D: [59, -48],
    K: [-76, -10],
    E: [76, -10],
    J: [-70, 31],
    F: [70, 31],
    I: [-42, 64],
    G: [42, 64],
    H: [0, 77]
  },
  oval: {
    a: [-37.5, -50],
    b: [0, -50],
    c: [37.5, -50],
    d: [-43, 0],
    e: [0, 0],
    f: [43, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-48, -48],
    z: [0, 60],
    j: [-35.5, -37.5],
    k: [0, -37.5],
    l: [35.5, -37.5],
    m: [-35.5, 37.5],
    n: [0, 50],
    o: [35.5, 37.5],
    p: [-36.5, 0],
    q: [36.5, 0],
    A: [-48, -48],
    B: [-23, -78],
    C: [23, -78],
    D: [48, -48],
    K: [-59, -10],
    E: [59, -10],
    J: [-55, 31],
    F: [55, 31],
    I: [-36, 68],
    G: [36, 68],
    H: [0, 85]
  },
  vesicaPiscis: {
    a: [-32, -37],
    b: [0, -50],
    c: [32, -37],
    d: [-32, 0],
    e: [0, 0],
    f: [32, 0],
    g: [-32, 37],
    h: [0, 50],
    i: [32, 37],
    y: [-50, -50],
    z: [0, 62],
    j: [-27.5, -27.5],
    k: [0, -37],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 42],
    o: [27.5, 27.5],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-45, -32],
    B: [-29, -63],
    C: [29, -63],
    D: [45, -32],
    K: [-50, 0],
    E: [50, 0],
    J: [-45, 32],
    F: [45, 32],
    I: [-29, 63],
    G: [29, 63],
    H: [0, 89],
    L: [0, -89]
  },
  square: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    h: [0, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-66.5, 66.5],
    G: [66.5, 66.5],
    H: [-22, 66.5],
    L: [22, 66.5]
  },
  diamond: {
    a: [-32, -37],
    b: [0, -50],
    c: [32, -37],
    d: [-43, 0],
    e: [0, 0],
    f: [43, 0],
    g: [-32, 37],
    h: [0, 50],
    i: [32, 37],
    y: [-50, -50],
    z: [0, 62],
    j: [-27.5, -27.5],
    k: [0, -37],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 42],
    o: [27.5, 27.5],
    p: [-37, 0],
    q: [37, 0],
    A: [-43, -28],
    B: [-22, -56],
    C: [22, -56],
    D: [43, -28],
    K: [-63, 0],
    E: [63, 0],
    J: [-42, 28],
    F: [42, 28],
    I: [-22, 56],
    G: [22, 56],
    H: [0, 83],
    L: [0, -82]
  },
  hexagon: {
    a: [-40, -40],
    b: [0, -40],
    c: [40, -40],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 40],
    h: [0, 40],
    i: [40, 40],
    y: [-48, -48],
    z: [0, 58],
    j: [-30, -30],
    k: [0, -32],
    l: [30, -30],
    m: [-30, 30],
    n: [0, 32],
    o: [30, 30],
    p: [-32, 0],
    q: [32, 0],
    A: [-56, -45],
    B: [-22, -65],
    C: [22, -65],
    D: [56, -45],
    K: [-67, -10],
    E: [67, -10],
    J: [-67, 28],
    F: [67, 28],
    I: [-38, 56],
    G: [38, 56],
    H: [0, 77]
  },
  no: {
    a: [-66.5, -66.5],
    b: [0, -66.5],
    c: [66.5, -66.5],
    d: [-66.5, 0],
    e: [0, 0],
    f: [66.5, 0],
    g: [-66.5, 66.5],
    h: [0, 66.5],
    i: [66.5, 66.5],
    y: [-50, -50],
    z: [0, 75],
    j: [-50, -50],
    k: [0, -50],
    l: [50, -50],
    m: [-50, 50],
    n: [0, 50],
    o: [50, 50],
    p: [-50, 0],
    q: [50, 0],
    A: [-91.5, -91.5],
    B: [-30.5, -91.5],
    C: [30.5, -91.5],
    D: [91.5, -91.5],
    K: [-91.5, -30.5],
    E: [91.5, -30.5],
    J: [-91.5, 30.5],
    F: [91.5, 30.5],
    I: [-91.5, 91.5],
    G: [91.5, 91.5],
    H: [-30.5, 91.5],
    L: [30.5, 91.5]
  },
  fantasy1: {
    a: [-45, -45],
    b: [0, -50],
    c: [45, -45],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-36, 42.5],
    h: [0, 50],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 60],
    j: [-37, -37],
    k: [0, -40],
    l: [37, -37],
    m: [-32, 32],
    n: [0, 40],
    o: [32, 32],
    p: [-28.5, 0],
    q: [28.5, 0],
    A: [-66, -55],
    B: [-22, -67],
    C: [22, -67],
    D: [66, -55],
    K: [-53, -20],
    E: [53, -20],
    J: [-46, 26],
    F: [46, 26],
    I: [-29, 62],
    G: [29, 62],
    H: [0, 84]
  },
  fantasy2: {
    a: [-45, -45],
    b: [0, -45],
    c: [45, -45],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-36, 42.5],
    h: [0, 45],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-58, -35],
    B: [-44, -67],
    C: [44, -67],
    D: [58, -35],
    K: [-39, -5],
    E: [39, -5],
    J: [-57, 26],
    F: [57, 26],
    I: [-32, 58],
    G: [32, 58],
    H: [0, 83],
    L: [0, -72]
  },
  fantasy3: {
    a: [-40, -45],
    b: [0, -50],
    c: [40, -45],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-36, 42.5],
    h: [0, 50],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-56, -42],
    B: [-22, -72],
    C: [22, -72],
    D: [56, -42],
    K: [-37, -11],
    E: [37, -11],
    J: [-60, 20],
    F: [60, 20],
    I: [-34, 56],
    G: [34, 56],
    H: [0, 83]
  },
  fantasy4: {
    a: [-50, -45],
    b: [0, -50],
    c: [50, -45],
    d: [-45, 0],
    e: [0, 0],
    f: [45, 0],
    g: [-40, 45],
    h: [0, 50],
    i: [40, 45],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -45],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 45],
    o: [37.5, 37.5],
    p: [-35, 0],
    q: [35, 0],
    A: [-75, -56],
    B: [-36, -61],
    C: [36, -61],
    D: [75, -56],
    K: [-67, -12],
    E: [67, -12],
    J: [-63, 32],
    F: [63, 32],
    I: [-42, 75],
    G: [42, 75],
    H: [0, 91.5],
    L: [0, -79]
  },
  fantasy5: {
    a: [-45, -50],
    b: [0, -50],
    c: [45, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-30, 45],
    h: [0, 50],
    i: [30, 45],
    y: [-50, -50],
    z: [0, 60],
    j: [-37, -37],
    k: [0, -40],
    l: [37, -37],
    m: [-32, 32],
    n: [0, 40],
    o: [32, 32],
    p: [-28.5, 0],
    q: [28.5, 0],
    A: [-61, -67],
    B: [-22, -76],
    C: [22, -76],
    D: [61, -67],
    K: [-58, -25],
    E: [58, -25],
    J: [-48, 20],
    F: [48, 20],
    I: [-28.5, 60],
    G: [28.5, 60],
    H: [0, 89]
  },
  noldor: {
    b: [0, -65],
    e: [0, -15],
    h: [0, 35],
    z: [0, 35],
    k: [0, -50],
    n: [0, 30],
    p: [-20, -15],
    q: [20, -15],
    A: [-34, -47],
    B: [-20, -68],
    C: [20, -68],
    D: [34, -47],
    K: [-18, -20],
    E: [18, -20],
    J: [-26, 11],
    F: [26, 11],
    I: [-14, 43],
    G: [14, 43],
    H: [0, 74],
    L: [0, -85]
  },
  gondor: {
    a: [-32.5, -50],
    b: [0, -50],
    c: [32.5, -50],
    d: [-32.5, 0],
    e: [0, 0],
    f: [32.5, 0],
    g: [-32.5, 50],
    h: [0, 50],
    i: [32.5, 50],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-25, -37.5],
    k: [0, -37.5],
    l: [25, -37.5],
    m: [-25, 30],
    n: [0, 37.5],
    o: [25, 30],
    p: [-25, 0],
    q: [25, 0],
    A: [-42, -52],
    B: [-17, -75],
    C: [17, -75],
    D: [42, -52],
    K: [-42, -15],
    E: [42, -15],
    J: [-42, 22],
    F: [42, 22],
    I: [-26, 60],
    G: [26, 60],
    H: [0, 87]
  },
  easterling: {
    a: [-40, -47.5],
    b: [0, -47.5],
    c: [40, -47.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 47.5],
    h: [0, 47.5],
    i: [40, 47.5],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-30, -37.5],
    k: [0, -37.5],
    l: [30, -37.5],
    m: [-30, 37.5],
    n: [0, 37.5],
    o: [30, 37.5],
    p: [-30, 0],
    q: [30, 0],
    A: [-52, -72],
    B: [0, -65],
    D: [52, -72],
    K: [-52, -24],
    E: [52, -24],
    J: [-52, 24],
    F: [52, 24],
    I: [-52, 72],
    G: [52, 72],
    H: [0, 65]
  },
  erebor: {
    a: [-40, -40],
    b: [0, -55],
    c: [40, -40],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 40],
    h: [0, 55],
    i: [40, 40],
    y: [-50, -50],
    z: [0, 50],
    j: [-35, -35],
    k: [0, -45],
    l: [35, -35],
    m: [-35, 35],
    n: [0, 45],
    o: [35, 35],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-47, -46],
    B: [-22, -81],
    C: [22, -81],
    D: [47, -46],
    K: [-66.5, 0],
    E: [66.5, 0],
    J: [-47, 46],
    F: [47, 46],
    I: [-22, 81],
    G: [22, 81]
  },
  ironHills: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.25, 0],
    e: [0, 0],
    f: [43.25, 0],
    g: [-42.5, 42.5],
    h: [0, 50],
    i: [42.5, 42.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-32.5, 32.5],
    n: [0, 40],
    o: [32.5, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-61, -67],
    B: [-22, -74],
    C: [22, -74],
    D: [61, -67],
    K: [-59, -20],
    E: [59, -20],
    J: [-57, 26],
    F: [57, 26],
    I: [-33, 64],
    G: [33, 64],
    H: [0, 88]
  },
  urukHai: {
    a: [-40, -45],
    b: [0, -45],
    c: [40, -45],
    d: [-36, 0],
    e: [0, 0],
    f: [36, 0],
    g: [-32.25, 40],
    h: [0, 40],
    i: [32.25, 40],
    y: [-50, -50],
    z: [0, 40],
    j: [-32.5, -32.5],
    k: [0, -37.5],
    l: [32.5, -32.5],
    m: [-27.5, 27.5],
    n: [0, 32.5],
    o: [27.5, 27.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-31, -79],
    B: [-1, -90],
    C: [31, -74],
    D: [61, -57],
    K: [-55, -19],
    E: [53, -19],
    J: [-45, 19],
    F: [45, 19],
    I: [-33, 57],
    G: [35, 57],
    H: [0, 57],
    L: [-39, -50]
  },
  moriaOrc: {
    a: [-37.5, -37.5],
    b: [0, -37.5],
    c: [37.5, -37.5],
    d: [-37.5, 0],
    e: [0, 0],
    f: [37.5, 0],
    g: [-37.5, 37.5],
    h: [0, 37.5],
    i: [37.5, 37.5],
    y: [-50, -50],
    z: [0, 40],
    j: [-30, -30],
    k: [0, -30],
    l: [30, -30],
    m: [-30, 30],
    n: [0, 30],
    o: [30, 30],
    p: [-30, 0],
    q: [30, 0],
    A: [-48, -48],
    B: [-16, -50],
    C: [16, -46],
    D: [39, -61],
    K: [-52, -19],
    E: [52, -26],
    J: [-42, 9],
    F: [52, 9],
    I: [-31, 40],
    G: [40, 43],
    H: [4, 47]
  }
};
