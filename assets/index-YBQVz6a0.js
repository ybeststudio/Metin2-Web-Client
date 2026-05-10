import {
  c as Wn,
  r as z,
  u as We,
  a as _e,
  j as o,
  H as mn,
  b as Zn,
  d as Wi,
  e as Zi,
  C as Si,
  f as Xi,
} from "./r3f-c0TiWmyX.js";
import {
  f as $,
  aq as Se,
  t as He,
  y as wi,
  at as Ce,
  au as Mi,
  g as Ue,
  av as ft,
  aw as Ji,
  D as Ve,
  k as _i,
  ax as Qi,
  ao as oa,
  ay as er,
  ab as ki,
  aa as Pi,
  a8 as Ti,
  a9 as Ai,
  a7 as gn,
  ar as tr,
  R as nr,
  C as nt,
  as as hn,
  az as xt,
  a5 as Bi,
  ad as sa,
  aA as zi,
  w as ar,
  aB as ir,
  e as rr,
  U as or,
  E as Dn,
  K as $n,
  Y as Rt,
  aC as sr,
  aD as lr,
  aE as cr,
  A as ur,
} from "./three-DaIqvaVB.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
const ji = "tr",
  Ge = [
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "hu", label: "Magyar", flag: "🇭🇺" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "ro", label: "Română", flag: "🇷🇴" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱" },
    { code: "cs", label: "Čeština", flag: "🇨🇿" },
    { code: "da", label: "Dansk", flag: "🇩🇰" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ],
  dr = new Set(Ge.map((e) => e.code));
function pr(e) {
  return !!e && dr.has(e);
}
function Ei(e) {
  return pr(e) ? e : ji;
}
function mr(e) {
  return e === "tr" ? "tr" : "en";
}
function gr(e) {
  return Ge.find((t) => t.code === e) ?? Ge[0];
}
function hr(e) {
  const t = Ge.findIndex((n) => n.code === e);
  return Ge[(t + 1) % Ge.length].code;
}
const R = Wn()((e) => ({
    phase: "landing",
    setPhase: (t) => e({ phase: t }),
    selectedCharacter: null,
    selectCharacter: (t) => e({ selectedCharacter: t }),
    characterName: "Player",
    setCharacterName: (t) => e({ characterName: t }),
    loadingProgress: 0,
    setLoadingProgress: (t) => e({ loadingProgress: t }),
    introPlaying: !1,
    setIntroPlaying: (t) => e({ introPlaying: t }),
    hp: 1200,
    maxHp: 1500,
    setHp: (t) => e({ hp: t }),
    mp: 800,
    maxMp: 1e3,
    setMp: (t) => e({ mp: t }),
    sp: 95,
    maxSp: 100,
    setSp: (t) => e({ sp: t }),
    exp: 75420,
    maxExp: 1e5,
    setExp: (t) => e({ exp: t }),
    level: 42,
    gold: 125430,
    cheque: 0,
    won: 0,
    attack: 245,
    defense: 180,
    str: 90,
    dex: 15,
    con: 30,
    int: 15,
    attackSpeed: 130,
    moveSpeed: 200,
    magicAttack: 45,
    magicDefense: 60,
    hitPercent: 95,
    statPoints: 3,
    minimapVisible: !0,
    toggleMinimap: () => e((t) => ({ minimapVisible: !t.minimapVisible })),
    inventoryVisible: !1,
    toggleInventory: () => e((t) => ({ inventoryVisible: !t.inventoryVisible })),
    inventoryPage: 0,
    setInventoryPage: (t) => e({ inventoryPage: t }),
    characterVisible: !1,
    toggleCharacter: () => e((t) => ({ characterVisible: !t.characterVisible })),
    chatVisible: !0,
    toggleChat: () => e((t) => ({ chatVisible: !t.chatVisible })),
    atlasVisible: !1,
    toggleAtlas: () => e((t) => ({ atlasVisible: !t.atlasVisible })),
    npcWindowId: null,
    openNpcWindow: (t) => e({ npcWindowId: t }),
    closeNpcWindow: () => e({ npcWindowId: null }),
    target: null,
    setTarget: (t) => e({ target: t }),
    interactionPos: null,
    chatMessages: (() => {
      const t = mr(Ei(localStorage.getItem("lang"))) === "en";
      return [
        {
          text: t ? "Welcome to Anka2!" : "Anka2 dünyasına hoş geldiniz!",
          translationKey: "chat.welcome",
          channel: "system",
          timestamp: Date.now() - 3e4,
        },
        {
          text: t ? "A new adventure begins..." : "Yeni bir macera başlıyor...",
          translationKey: "chat.adventure",
          channel: "system",
          timestamp: Date.now() - 2e4,
        },
        {
          text: t
            ? "A server advanced enough to play from your browser!"
            : "Anka2ye tarayıcıdan girecek kadar gelişmiş bir server!",
          translationKey: "chat.browser",
          channel: "call",
          sender: "Best Studio",
          timestamp: Date.now() - 1e4,
        },
        {
          text: t ? "Turkmmo Best Studio Opening on March 27th!" : "Anka2 Sezon 2 Açılışı 27 Martta sizlerle!",
          translationKey: "chat.season",
          channel: "guild",
          sender: "System",
          timestamp: Date.now() - 5e3,
        },
      ];
    })(),
    addChatMessage: (t) =>
      e((n) => ({ chatMessages: [...n.chatMessages, { ...t, timestamp: Date.now() }].slice(-50) })),
  })),
  fr = 0.38;
function yr(e) {
  return fr * (e / 100);
}
const re = Wn()((e) => ({
  position: new $(0.23, 15.34, -0.34),
  rotation: 0,
  movementState: "idle",
  moveTarget: null,
  cameraAzimuth: 0,
  movSpeed: 100,
  setMoveTarget: (t) => e({ moveTarget: t }),
  setMovementState: (t) => e({ movementState: t }),
  setCameraAzimuth: (t) => e({ cameraAzimuth: t }),
  setMovSpeed: (t) => e({ movSpeed: Math.min(Math.max(t, 0), 200) }),
}));
function Ct(e) {
  const t = new Map(),
    n = new Map(),
    a = e.clone();
  return (
    Ci(e, a, function (i, l) {
      (t.set(l, i), n.set(i, l));
    }),
    a.traverse(function (i) {
      if (!i.isSkinnedMesh) return;
      const l = i,
        s = t.get(i),
        r = s.skeleton.bones;
      ((l.skeleton = s.skeleton.clone()),
        l.bindMatrix.copy(s.bindMatrix),
        (l.skeleton.bones = r.map(function (c) {
          return n.get(c);
        })),
        l.bind(l.skeleton, l.bindMatrix));
    }),
    a
  );
}
function Ci(e, t, n) {
  n(e, t);
  for (let a = 0; a < e.children.length; a++) Ci(e.children[a], t.children[a], n);
}
const Ri = 0,
  br = 1,
  xr = 2,
  la = 2,
  vn = 1.25,
  ca = 1,
  pe = 32,
  te = pe / 4,
  Ii = 65535,
  sn = Math.pow(2, -24),
  Xn = Symbol("SKIP_GENERATION"),
  Di = {
    strategy: Ri,
    maxDepth: 40,
    maxLeafSize: 10,
    useSharedArrayBuffer: !1,
    setBoundingBox: !0,
    onProgress: null,
    indirect: !1,
    verbose: !0,
    range: null,
    [Xn]: !1,
  };
function X(e, t, n) {
  return (
    (n.min.x = t[e]),
    (n.min.y = t[e + 1]),
    (n.min.z = t[e + 2]),
    (n.max.x = t[e + 3]),
    (n.max.y = t[e + 4]),
    (n.max.z = t[e + 5]),
    n
  );
}
function ua(e) {
  let t = -1,
    n = -1 / 0;
  for (let a = 0; a < 3; a++) {
    const i = e[a + 3] - e[a];
    i > n && ((n = i), (t = a));
  }
  return t;
}
function da(e, t) {
  t.set(e);
}
function pa(e, t, n) {
  let a, i;
  for (let l = 0; l < 3; l++) {
    const s = l + 3;
    ((a = e[l]), (i = t[l]), (n[l] = a < i ? a : i), (a = e[s]), (i = t[s]), (n[s] = a > i ? a : i));
  }
}
function It(e, t, n) {
  for (let a = 0; a < 3; a++) {
    const i = t[e + 2 * a],
      l = t[e + 2 * a + 1],
      s = i - l,
      r = i + l;
    (s < n[a] && (n[a] = s), r > n[a + 3] && (n[a + 3] = r));
  }
}
function vt(e) {
  const t = e[3] - e[0],
    n = e[4] - e[1],
    a = e[5] - e[2];
  return 2 * (t * n + n * a + a * t);
}
function ne(e, t) {
  return t[e + 15] === Ii;
}
function me(e, t) {
  return t[e + 6];
}
function he(e, t) {
  return t[e + 14];
}
function oe(e) {
  return e + te;
}
function se(e, t) {
  const n = t[e + 6];
  return e + n * te;
}
function Jn(e, t) {
  return t[e + 7];
}
function Sn(e, t, n, a, i) {
  let l = 1 / 0,
    s = 1 / 0,
    r = 1 / 0,
    c = -1 / 0,
    g = -1 / 0,
    u = -1 / 0,
    p = 1 / 0,
    m = 1 / 0,
    h = 1 / 0,
    S = -1 / 0,
    M = -1 / 0,
    w = -1 / 0;
  const f = e.offset || 0;
  for (let y = (t - f) * 6, x = (t + n - f) * 6; y < x; y += 6) {
    const b = e[y + 0],
      v = e[y + 1],
      B = b - v,
      _ = b + v;
    (B < l && (l = B), _ > c && (c = _), b < p && (p = b), b > S && (S = b));
    const T = e[y + 2],
      j = e[y + 3],
      A = T - j,
      E = T + j;
    (A < s && (s = A), E > g && (g = E), T < m && (m = T), T > M && (M = T));
    const k = e[y + 4],
      P = e[y + 5],
      I = k - P,
      N = k + P;
    (I < r && (r = I), N > u && (u = N), k < h && (h = k), k > w && (w = k));
  }
  ((a[0] = l),
    (a[1] = s),
    (a[2] = r),
    (a[3] = c),
    (a[4] = g),
    (a[5] = u),
    (i[0] = p),
    (i[1] = m),
    (i[2] = h),
    (i[3] = S),
    (i[4] = M),
    (i[5] = w));
}
const je = 32,
  vr = (e, t) => e.candidate - t.candidate,
  Le = new Array(je)
    .fill()
    .map(() => ({
      count: 0,
      bounds: new Float32Array(6),
      rightCacheBounds: new Float32Array(6),
      leftCacheBounds: new Float32Array(6),
      candidate: 0,
    })),
  Dt = new Float32Array(6);
function Sr(e, t, n, a, i, l) {
  let s = -1,
    r = 0;
  if (l === Ri) ((s = ua(t)), s !== -1 && (r = (t[s] + t[s + 3]) / 2));
  else if (l === br) ((s = ua(e)), s !== -1 && (r = wr(n, a, i, s)));
  else if (l === xr) {
    const c = vt(e);
    let g = vn * i;
    const u = n.offset || 0,
      p = (a - u) * 6,
      m = (a + i - u) * 6;
    for (let h = 0; h < 3; h++) {
      const S = t[h],
        f = (t[h + 3] - S) / je;
      if (i < je / 4) {
        const y = [...Le];
        y.length = i;
        let x = 0;
        for (let v = p; v < m; v += 6, x++) {
          const B = y[x];
          ((B.candidate = n[v + 2 * h]), (B.count = 0));
          const { bounds: _, leftCacheBounds: T, rightCacheBounds: j } = B;
          for (let A = 0; A < 3; A++)
            ((j[A] = 1 / 0),
              (j[A + 3] = -1 / 0),
              (T[A] = 1 / 0),
              (T[A + 3] = -1 / 0),
              (_[A] = 1 / 0),
              (_[A + 3] = -1 / 0));
          It(v, n, _);
        }
        y.sort(vr);
        let b = i;
        for (let v = 0; v < b; v++) {
          const B = y[v];
          for (; v + 1 < b && y[v + 1].candidate === B.candidate; ) (y.splice(v + 1, 1), b--);
        }
        for (let v = p; v < m; v += 6) {
          const B = n[v + 2 * h];
          for (let _ = 0; _ < b; _++) {
            const T = y[_];
            B >= T.candidate ? It(v, n, T.rightCacheBounds) : (It(v, n, T.leftCacheBounds), T.count++);
          }
        }
        for (let v = 0; v < b; v++) {
          const B = y[v],
            _ = B.count,
            T = i - B.count,
            j = B.leftCacheBounds,
            A = B.rightCacheBounds;
          let E = 0;
          _ !== 0 && (E = vt(j) / c);
          let k = 0;
          T !== 0 && (k = vt(A) / c);
          const P = ca + vn * (E * _ + k * T);
          P < g && ((s = h), (g = P), (r = B.candidate));
        }
      } else {
        for (let b = 0; b < je; b++) {
          const v = Le[b];
          ((v.count = 0), (v.candidate = S + f + b * f));
          const B = v.bounds;
          for (let _ = 0; _ < 3; _++) ((B[_] = 1 / 0), (B[_ + 3] = -1 / 0));
        }
        for (let b = p; b < m; b += 6) {
          let _ = ~~((n[b + 2 * h] - S) / f);
          _ >= je && (_ = je - 1);
          const T = Le[_];
          (T.count++, It(b, n, T.bounds));
        }
        const y = Le[je - 1];
        da(y.bounds, y.rightCacheBounds);
        for (let b = je - 2; b >= 0; b--) {
          const v = Le[b],
            B = Le[b + 1];
          pa(v.bounds, B.rightCacheBounds, v.rightCacheBounds);
        }
        let x = 0;
        for (let b = 0; b < je - 1; b++) {
          const v = Le[b],
            B = v.count,
            _ = v.bounds,
            j = Le[b + 1].rightCacheBounds;
          (B !== 0 && (x === 0 ? da(_, Dt) : pa(_, Dt, Dt)), (x += B));
          let A = 0,
            E = 0;
          x !== 0 && (A = vt(Dt) / c);
          const k = i - x;
          k !== 0 && (E = vt(j) / c);
          const P = ca + vn * (A * x + E * k);
          P < g && ((s = h), (g = P), (r = v.candidate));
        }
      }
    }
  } else console.warn(`BVH: Invalid build strategy value ${l} used.`);
  return { axis: s, pos: r };
}
function wr(e, t, n, a) {
  let i = 0;
  const l = e.offset;
  for (let s = t, r = t + n; s < r; s++) i += e[(s - l) * 6 + a * 2];
  return i / n;
}
class wn {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function Mr(e, t, n, a, i, l) {
  let s = a,
    r = a + i - 1;
  const c = l.pos,
    g = l.axis * 2,
    u = n.offset || 0;
  for (;;) {
    for (; s <= r && n[(s - u) * 6 + g] < c; ) s++;
    for (; s <= r && n[(r - u) * 6 + g] >= c; ) r--;
    if (s < r) {
      for (let p = 0; p < t; p++) {
        let m = e[s * t + p];
        ((e[s * t + p] = e[r * t + p]), (e[r * t + p] = m));
      }
      for (let p = 0; p < 6; p++) {
        const m = s - u,
          h = r - u,
          S = n[m * 6 + p];
        ((n[m * 6 + p] = n[h * 6 + p]), (n[h * 6 + p] = S));
      }
      (s++, r--);
    } else return s;
  }
}
let $i, ln, Ln, Li;
const _r = Math.pow(2, 32);
function qn(e) {
  return "count" in e ? 1 : 1 + qn(e.left) + qn(e.right);
}
function kr(e, t, n) {
  return (
    ($i = new Float32Array(n)),
    (ln = new Uint32Array(n)),
    (Ln = new Uint16Array(n)),
    (Li = new Uint8Array(n)),
    Nn(e, t)
  );
}
function Nn(e, t) {
  const n = e / 4,
    a = e / 2,
    i = "count" in t,
    l = t.boundingData;
  for (let s = 0; s < 6; s++) $i[n + s] = l[s];
  if (i)
    return t.buffer
      ? (Li.set(new Uint8Array(t.buffer), e), e + t.buffer.byteLength)
      : ((ln[n + 6] = t.offset), (Ln[a + 14] = t.count), (Ln[a + 15] = Ii), e + pe);
  {
    const { left: s, right: r, splitAxis: c } = t,
      g = e + pe;
    let u = Nn(g, s);
    const p = e / pe,
      h = u / pe - p;
    if (h > _r) throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
    return ((ln[n + 6] = h), (ln[n + 7] = c), Nn(u, r));
  }
}
function Pr(e, t, n, a, i, l) {
  const { maxDepth: s, verbose: r, maxLeafSize: c, strategy: g, onProgress: u } = i,
    p = e.primitiveBuffer,
    m = e.primitiveBufferStride,
    h = new Float32Array(6);
  let S = !1;
  const M = new wn();
  return (Sn(t, n, a, M.boundingData, h), f(M, n, a, h), M);
  function w(y) {
    u && u((y - l.offset) / l.count);
  }
  function f(y, x, b, v = null, B = 0) {
    if (
      (!S &&
        B >= s &&
        ((S = !0),
        r && console.warn(`BVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`)),
      b <= c || B >= s)
    )
      return (w(x + b), (y.offset = x), (y.count = b), y);
    const _ = Sr(y.boundingData, v, t, x, b, g);
    if (_.axis === -1) return (w(x + b), (y.offset = x), (y.count = b), y);
    const T = Mr(p, m, t, x, b, _);
    if (T === x || T === x + b) (w(x + b), (y.offset = x), (y.count = b));
    else {
      y.splitAxis = _.axis;
      const j = new wn(),
        A = x,
        E = T - x;
      ((y.left = j), Sn(t, A, E, j.boundingData, h), f(j, A, E, h, B + 1));
      const k = new wn(),
        P = T,
        I = b - E;
      ((y.right = k), Sn(t, P, I, k.boundingData, h), f(k, P, I, h, B + 1));
    }
    return y;
  }
}
function Tr(e, t) {
  const n = t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer,
    a = e.getRootRanges(t.range),
    i = a[0],
    l = a[a.length - 1],
    s = { offset: i.offset, count: l.offset + l.count - i.offset },
    r = new Float32Array(6 * s.count);
  ((r.offset = s.offset),
    e.computePrimitiveBounds(s.offset, s.count, r),
    (e._roots = a.map((c) => {
      const g = Pr(e, r, c.offset, c.count, t, s),
        u = qn(g),
        p = new n(pe * u);
      return (kr(0, g, p), p);
    })));
}
class Qn {
  constructor(t) {
    ((this._getNewPrimitive = t), (this._primitives = []));
  }
  getPrimitive() {
    const t = this._primitives;
    return t.length === 0 ? this._getNewPrimitive() : t.pop();
  }
  releasePrimitive(t) {
    this._primitives.push(t);
  }
}
class Ar {
  constructor() {
    ((this.float32Array = null), (this.uint16Array = null), (this.uint32Array = null));
    const t = [];
    let n = null;
    ((this.setBuffer = (a) => {
      (n && t.push(n),
        (n = a),
        (this.float32Array = new Float32Array(a)),
        (this.uint16Array = new Uint16Array(a)),
        (this.uint32Array = new Uint32Array(a)));
    }),
      (this.clearBuffer = () => {
        ((n = null),
          (this.float32Array = null),
          (this.uint16Array = null),
          (this.uint32Array = null),
          t.length !== 0 && this.setBuffer(t.pop()));
      }));
  }
}
const W = new Ar();
let Oe, bt;
const it = [],
  $t = new Qn(() => new Se());
function Br(e, t, n, a, i, l) {
  ((Oe = $t.getPrimitive()), (bt = $t.getPrimitive()), it.push(Oe, bt), W.setBuffer(e._roots[t]));
  const s = Kn(0, e.geometry, n, a, i, l);
  (W.clearBuffer(), $t.releasePrimitive(Oe), $t.releasePrimitive(bt), it.pop(), it.pop());
  const r = it.length;
  return (r > 0 && ((bt = it[r - 1]), (Oe = it[r - 2])), s);
}
function Kn(e, t, n, a, i = null, l = 0, s = 0) {
  const { float32Array: r, uint16Array: c, uint32Array: g } = W;
  let u = e * 2;
  if (ne(u, c)) {
    const m = me(e, g),
      h = he(u, c);
    return (X(e, r, Oe), a(m, h, !1, s, l + e / te, Oe));
  } else {
    let A = function (k) {
        const { uint16Array: P, uint32Array: I } = W;
        let N = k * 2;
        for (; !ne(N, P); ) ((k = oe(k)), (N = k * 2));
        return me(k, I);
      },
      E = function (k) {
        const { uint16Array: P, uint32Array: I } = W;
        let N = k * 2;
        for (; !ne(N, P); ) ((k = se(k, I)), (N = k * 2));
        return me(k, I) + he(N, P);
      };
    const m = oe(e),
      h = se(e, g);
    let S = m,
      M = h,
      w,
      f,
      y,
      x;
    if (i && ((y = Oe), (x = bt), X(S, r, y), X(M, r, x), (w = i(y)), (f = i(x)), f < w)) {
      ((S = h), (M = m));
      const k = w;
      ((w = f), (f = k), (y = x));
    }
    y || ((y = Oe), X(S, r, y));
    const b = ne(S * 2, c),
      v = n(y, b, w, s + 1, l + S / te);
    let B;
    if (v === la) {
      const k = A(S),
        I = E(S) - k;
      B = a(k, I, !0, s + 1, l + S / te, y);
    } else B = v && Kn(S, t, n, a, i, l, s + 1);
    if (B) return !0;
    ((x = bt), X(M, r, x));
    const _ = ne(M * 2, c),
      T = n(x, _, f, s + 1, l + M / te);
    let j;
    if (T === la) {
      const k = A(M),
        I = E(M) - k;
      j = a(k, I, !0, s + 1, l + M / te, x);
    } else j = T && Kn(M, t, n, a, i, l, s + 1);
    return !!j;
  }
}
const Et = new W.constructor(),
  cn = new W.constructor(),
  Ke = new Qn(() => new Se()),
  rt = new Se(),
  ot = new Se(),
  Mn = new Se(),
  _n = new Se();
let kn = !1;
function zr(e, t, n, a) {
  if (kn) throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  kn = !0;
  const i = e._roots,
    l = t._roots;
  let s,
    r = 0,
    c = 0;
  const g = new He().copy(n).invert();
  for (let u = 0, p = i.length; u < p; u++) {
    (Et.setBuffer(i[u]), (c = 0));
    const m = Ke.getPrimitive();
    (X(0, Et.float32Array, m), m.applyMatrix4(g));
    for (
      let h = 0, S = l.length;
      h < S &&
      (cn.setBuffer(l[h]), (s = Te(0, 0, n, g, a, r, c, 0, 0, m)), cn.clearBuffer(), (c += l[h].byteLength / pe), !s);
      h++
    );
    if ((Ke.releasePrimitive(m), Et.clearBuffer(), (r += i[u].byteLength / pe), s)) break;
  }
  return ((kn = !1), s);
}
function Te(e, t, n, a, i, l = 0, s = 0, r = 0, c = 0, g = null, u = !1) {
  let p, m;
  u ? ((p = cn), (m = Et)) : ((p = Et), (m = cn));
  const h = p.float32Array,
    S = p.uint32Array,
    M = p.uint16Array,
    w = m.float32Array,
    f = m.uint32Array,
    y = m.uint16Array,
    x = e * 2,
    b = t * 2,
    v = ne(x, M),
    B = ne(b, y);
  let _ = !1;
  if (B && v)
    u
      ? (_ = i(me(t, f), he(t * 2, y), me(e, S), he(e * 2, M), c, s + t / te, r, l + e / te))
      : (_ = i(me(e, S), he(e * 2, M), me(t, f), he(t * 2, y), r, l + e / te, c, s + t / te));
  else if (B) {
    const T = Ke.getPrimitive();
    (X(t, w, T), T.applyMatrix4(n));
    const j = oe(e),
      A = se(e, S);
    (X(j, h, rt), X(A, h, ot));
    const E = T.intersectsBox(rt),
      k = T.intersectsBox(ot);
    ((_ = (E && Te(t, j, a, n, i, s, l, c, r + 1, T, !u)) || (k && Te(t, A, a, n, i, s, l, c, r + 1, T, !u))),
      Ke.releasePrimitive(T));
  } else {
    const T = oe(t),
      j = se(t, f);
    (X(T, w, Mn), X(j, w, _n));
    const A = g.intersectsBox(Mn),
      E = g.intersectsBox(_n);
    if (A && E) _ = Te(e, T, n, a, i, l, s, r, c + 1, g, u) || Te(e, j, n, a, i, l, s, r, c + 1, g, u);
    else if (A)
      if (v) _ = Te(e, T, n, a, i, l, s, r, c + 1, g, u);
      else {
        const k = Ke.getPrimitive();
        k.copy(Mn).applyMatrix4(n);
        const P = oe(e),
          I = se(e, S);
        (X(P, h, rt), X(I, h, ot));
        const N = k.intersectsBox(rt),
          U = k.intersectsBox(ot);
        ((_ = (N && Te(T, P, a, n, i, s, l, c, r + 1, k, !u)) || (U && Te(T, I, a, n, i, s, l, c, r + 1, k, !u))),
          Ke.releasePrimitive(k));
      }
    else if (E)
      if (v) _ = Te(e, j, n, a, i, l, s, r, c + 1, g, u);
      else {
        const k = Ke.getPrimitive();
        k.copy(_n).applyMatrix4(n);
        const P = oe(e),
          I = se(e, S);
        (X(P, h, rt), X(I, h, ot));
        const N = k.intersectsBox(rt),
          U = k.intersectsBox(ot);
        ((_ = (N && Te(j, P, a, n, i, s, l, c, r + 1, k, !u)) || (U && Te(j, I, a, n, i, s, l, c, r + 1, k, !u))),
          Ke.releasePrimitive(k));
      }
  }
  return _;
}
const ma = new Se(),
  st = new Float32Array(6);
class jr {
  constructor() {
    ((this._roots = null), (this.primitiveBuffer = null), (this.primitiveBufferStride = null));
  }
  init(t) {
    ((t = { ...Di, ...t }), Tr(this, t));
  }
  getRootRanges() {
    throw new Error("BVH: getRootRanges() not implemented");
  }
  writePrimitiveBounds() {
    throw new Error("BVH: writePrimitiveBounds() not implemented");
  }
  writePrimitiveRangeBounds(t, n, a, i) {
    let l = 1 / 0,
      s = 1 / 0,
      r = 1 / 0,
      c = -1 / 0,
      g = -1 / 0,
      u = -1 / 0;
    for (let p = t, m = t + n; p < m; p++) {
      this.writePrimitiveBounds(p, st, 0);
      const [h, S, M, w, f, y] = st;
      (h < l && (l = h), w > c && (c = w), S < s && (s = S), f > g && (g = f), M < r && (r = M), y > u && (u = y));
    }
    return ((a[i + 0] = l), (a[i + 1] = s), (a[i + 2] = r), (a[i + 3] = c), (a[i + 4] = g), (a[i + 5] = u), a);
  }
  computePrimitiveBounds(t, n, a) {
    const i = a.offset || 0;
    for (let l = t, s = t + n; l < s; l++) {
      this.writePrimitiveBounds(l, st, 0);
      const [r, c, g, u, p, m] = st,
        h = (r + u) / 2,
        S = (c + p) / 2,
        M = (g + m) / 2,
        w = (u - r) / 2,
        f = (p - c) / 2,
        y = (m - g) / 2,
        x = (l - i) * 6;
      ((a[x + 0] = h),
        (a[x + 1] = w + (Math.abs(h) + w) * sn),
        (a[x + 2] = S),
        (a[x + 3] = f + (Math.abs(S) + f) * sn),
        (a[x + 4] = M),
        (a[x + 5] = y + (Math.abs(M) + y) * sn));
    }
    return a;
  }
  shiftPrimitiveOffsets(t) {
    const n = this._indirectBuffer;
    if (n) for (let a = 0, i = n.length; a < i; a++) n[a] += t;
    else {
      const a = this._roots;
      for (let i = 0; i < a.length; i++) {
        const l = a[i],
          s = new Uint32Array(l),
          r = new Uint16Array(l),
          c = l.byteLength / pe;
        for (let g = 0; g < c; g++) {
          const u = te * g,
            p = 2 * u;
          ne(p, r) && (s[u + 6] += t);
        }
      }
    }
  }
  traverse(t, n = 0) {
    const a = this._roots[n],
      i = new Uint32Array(a),
      l = new Uint16Array(a);
    s(0);
    function s(r, c = 0) {
      const g = r * 2,
        u = ne(g, l);
      if (u) {
        const p = i[r + 6],
          m = l[g + 14];
        t(c, u, new Float32Array(a, r * 4, 6), p, m);
      } else {
        const p = oe(r),
          m = se(r, i),
          h = Jn(r, i);
        t(c, u, new Float32Array(a, r * 4, 6), h) || (s(p, c + 1), s(m, c + 1));
      }
    }
  }
  refit() {
    const t = this._roots;
    for (let n = 0, a = t.length; n < a; n++) {
      const i = t[n],
        l = new Uint32Array(i),
        s = new Uint16Array(i),
        r = new Float32Array(i),
        c = i.byteLength / pe;
      for (let g = c - 1; g >= 0; g--) {
        const u = g * te,
          p = u * 2;
        if (ne(p, s)) {
          const h = me(u, l),
            S = he(p, s);
          (this.writePrimitiveRangeBounds(h, S, st, 0), r.set(st, u));
        } else {
          const h = oe(u),
            S = se(u, l);
          for (let M = 0; M < 3; M++) {
            const w = r[h + M],
              f = r[h + M + 3],
              y = r[S + M],
              x = r[S + M + 3];
            ((r[u + M] = w < y ? w : y), (r[u + M + 3] = f > x ? f : x));
          }
        }
      }
    }
  }
  getBoundingBox(t) {
    return (
      t.makeEmpty(),
      this._roots.forEach((a) => {
        (X(0, new Float32Array(a), ma), t.union(ma));
      }),
      t
    );
  }
  shapecast(t) {
    let {
      boundsTraverseOrder: n,
      intersectsBounds: a,
      intersectsRange: i,
      intersectsPrimitive: l,
      scratchPrimitive: s,
      iterate: r,
    } = t;
    if (i && l) {
      const p = i;
      i = (m, h, S, M, w) => (p(m, h, S, M, w) ? !0 : r(m, h, this, l, S, M, s));
    } else i || (l ? (i = (p, m, h, S) => r(p, m, this, l, h, S, s)) : (i = (p, m, h) => h));
    let c = !1,
      g = 0;
    const u = this._roots;
    for (let p = 0, m = u.length; p < m; p++) {
      const h = u[p];
      if (((c = Br(this, p, a, i, n, g)), c)) break;
      g += h.byteLength / pe;
    }
    return c;
  }
  bvhcast(t, n, a) {
    let { intersectsRanges: i } = a;
    return zr(this, t, n, i);
  }
}
function Er() {
  return typeof SharedArrayBuffer < "u";
}
function ea(e) {
  return e.index ? e.index.count : e.attributes.position.count;
}
function fn(e) {
  return ea(e) / 3;
}
function Cr(e, t = ArrayBuffer) {
  return e > 65535 ? new Uint32Array(new t(4 * e)) : new Uint16Array(new t(2 * e));
}
function Rr(e, t) {
  if (!e.index) {
    const n = e.attributes.position.count,
      a = t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer,
      i = Cr(n, a);
    e.setIndex(new wi(i, 1));
    for (let l = 0; l < n; l++) i[l] = l;
  }
}
function Ir(e, t, n) {
  const a = ea(e) / n,
    i = t || e.drawRange,
    l = i.start / n,
    s = (i.start + i.count) / n,
    r = Math.max(0, l),
    c = Math.min(a, s) - r;
  return { offset: Math.floor(r), count: Math.floor(c) };
}
function Dr(e, t) {
  return e.groups.map((n) => ({ offset: n.start / t, count: n.count / t }));
}
function ga(e, t, n) {
  const a = Ir(e, t, n),
    i = Dr(e, n);
  if (!i.length) return [a];
  const l = [],
    s = a.offset,
    r = a.offset + a.count,
    c = ea(e) / n,
    g = [];
  for (const m of i) {
    const { offset: h, count: S } = m,
      M = h,
      w = isFinite(S) ? S : c - h,
      f = h + w;
    M < r && f > s && (g.push({ pos: Math.max(s, M), isStart: !0 }), g.push({ pos: Math.min(r, f), isStart: !1 }));
  }
  g.sort((m, h) => (m.pos !== h.pos ? m.pos - h.pos : m.type === "end" ? -1 : 1));
  let u = 0,
    p = null;
  for (const m of g) {
    const h = m.pos;
    (u !== 0 && h !== p && l.push({ offset: p, count: h - p }), (u += m.isStart ? 1 : -1), (p = h));
  }
  return l;
}
function $r(e, t) {
  const n = e[e.length - 1],
    a = n.offset + n.count > 2 ** 16,
    i = e.reduce((g, u) => g + u.count, 0),
    l = a ? 4 : 2,
    s = t ? new SharedArrayBuffer(i * l) : new ArrayBuffer(i * l),
    r = a ? new Uint32Array(s) : new Uint16Array(s);
  let c = 0;
  for (let g = 0; g < e.length; g++) {
    const { offset: u, count: p } = e[g];
    for (let m = 0; m < p; m++) r[c + m] = u + m;
    c += p;
  }
  return r;
}
class Lr extends jr {
  get indirect() {
    return !!this._indirectBuffer;
  }
  get primitiveStride() {
    return null;
  }
  get primitiveBufferStride() {
    return this.indirect ? 1 : this.primitiveStride;
  }
  set primitiveBufferStride(t) {}
  get primitiveBuffer() {
    return this.indirect ? this._indirectBuffer : this.geometry.index.array;
  }
  set primitiveBuffer(t) {}
  constructor(t, n = {}) {
    if (t.isBufferGeometry) {
      if (t.index && t.index.isInterleavedBufferAttribute)
        throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.");
    } else throw new Error("BVH: Only BufferGeometries are supported.");
    if (n.useSharedArrayBuffer && !Er()) throw new Error("BVH: SharedArrayBuffer is not available.");
    (super(),
      (this.geometry = t),
      (this.resolvePrimitiveIndex = n.indirect ? (a) => this._indirectBuffer[a] : (a) => a),
      (this.primitiveBuffer = null),
      (this.primitiveBufferStride = null),
      (this._indirectBuffer = null),
      (n = { ...Di, ...n }),
      n[Xn] || this.init(n));
  }
  init(t) {
    const { geometry: n, primitiveStride: a } = this;
    if (t.indirect) {
      const i = ga(n, t.range, a),
        l = $r(i, t.useSharedArrayBuffer);
      this._indirectBuffer = l;
    } else Rr(n, t);
    (super.init(t), !n.boundingBox && t.setBoundingBox && (n.boundingBox = this.getBoundingBox(new Se())));
  }
  getRootRanges(t) {
    return this.indirect
      ? [{ offset: 0, count: this._indirectBuffer.length }]
      : ga(this.geometry, t, this.primitiveStride);
  }
  raycastObject3D() {
    throw new Error("BVH: raycastObject3D() not implemented");
  }
}
class Re {
  constructor() {
    ((this.min = 1 / 0), (this.max = -1 / 0));
  }
  setFromPointsField(t, n) {
    let a = 1 / 0,
      i = -1 / 0;
    for (let l = 0, s = t.length; l < s; l++) {
      const c = t[l][n];
      ((a = c < a ? c : a), (i = c > i ? c : i));
    }
    ((this.min = a), (this.max = i));
  }
  setFromPoints(t, n) {
    let a = 1 / 0,
      i = -1 / 0;
    for (let l = 0, s = n.length; l < s; l++) {
      const r = n[l],
        c = t.dot(r);
      ((a = c < a ? c : a), (i = c > i ? c : i));
    }
    ((this.min = a), (this.max = i));
  }
  isSeparated(t) {
    return this.min > t.max || t.min > this.max;
  }
}
Re.prototype.setFromBox = (function () {
  const e = new $();
  return function (n, a) {
    const i = a.min,
      l = a.max;
    let s = 1 / 0,
      r = -1 / 0;
    for (let c = 0; c <= 1; c++)
      for (let g = 0; g <= 1; g++)
        for (let u = 0; u <= 1; u++) {
          ((e.x = i.x * c + l.x * (1 - c)), (e.y = i.y * g + l.y * (1 - g)), (e.z = i.z * u + l.z * (1 - u)));
          const p = n.dot(e);
          ((s = Math.min(p, s)), (r = Math.max(p, r)));
        }
    ((this.min = s), (this.max = r));
  };
})();
const qr = (function () {
    const e = new $(),
      t = new $(),
      n = new $();
    return function (i, l, s) {
      const r = i.start,
        c = e,
        g = l.start,
        u = t;
      (n.subVectors(r, g), e.subVectors(i.end, i.start), t.subVectors(l.end, l.start));
      const p = n.dot(u),
        m = u.dot(c),
        h = u.dot(u),
        S = n.dot(c),
        w = c.dot(c) * h - m * m;
      let f, y;
      (w !== 0 ? (f = (p * m - S * h) / w) : (f = 0), (y = (p + f * m) / h), (s.x = f), (s.y = y));
    };
  })(),
  ta = (function () {
    const e = new Ue(),
      t = new $(),
      n = new $();
    return function (i, l, s, r) {
      qr(i, l, e);
      let c = e.x,
        g = e.y;
      if (c >= 0 && c <= 1 && g >= 0 && g <= 1) {
        (i.at(c, s), l.at(g, r));
        return;
      } else if (c >= 0 && c <= 1) {
        (g < 0 ? l.at(0, r) : l.at(1, r), i.closestPointToPoint(r, !0, s));
        return;
      } else if (g >= 0 && g <= 1) {
        (c < 0 ? i.at(0, s) : i.at(1, s), l.closestPointToPoint(s, !0, r));
        return;
      } else {
        let u;
        c < 0 ? (u = i.start) : (u = i.end);
        let p;
        g < 0 ? (p = l.start) : (p = l.end);
        const m = t,
          h = n;
        if (
          (i.closestPointToPoint(p, !0, t),
          l.closestPointToPoint(u, !0, n),
          m.distanceToSquared(p) <= h.distanceToSquared(u))
        ) {
          (s.copy(m), r.copy(p));
          return;
        } else {
          (s.copy(u), r.copy(h));
          return;
        }
      }
    };
  })(),
  Nr = (function () {
    const e = new $(),
      t = new $(),
      n = new Mi(),
      a = new Ce();
    return function (l, s) {
      const { radius: r, center: c } = l,
        { a: g, b: u, c: p } = s;
      if (
        ((a.start = g),
        (a.end = u),
        a.closestPointToPoint(c, !0, e).distanceTo(c) <= r ||
          ((a.start = g), (a.end = p), a.closestPointToPoint(c, !0, e).distanceTo(c) <= r) ||
          ((a.start = u), (a.end = p), a.closestPointToPoint(c, !0, e).distanceTo(c) <= r))
      )
        return !0;
      const M = s.getPlane(n);
      if (Math.abs(M.distanceToPoint(c)) <= r) {
        const f = M.projectPoint(c, t);
        if (s.containsPoint(f)) return !0;
      }
      return !1;
    };
  })(),
  Kr = ["x", "y", "z"],
  Ee = 1e-15,
  ha = Ee * Ee;
function we(e) {
  return Math.abs(e) < Ee;
}
class Ae extends ft {
  constructor(...t) {
    (super(...t),
      (this.isExtendedTriangle = !0),
      (this.satAxes = new Array(4).fill().map(() => new $())),
      (this.satBounds = new Array(4).fill().map(() => new Re())),
      (this.points = [this.a, this.b, this.c]),
      (this.plane = new Mi()),
      (this.isDegenerateIntoSegment = !1),
      (this.isDegenerateIntoPoint = !1),
      (this.degenerateSegment = new Ce()),
      (this.needsUpdate = !0));
  }
  intersectsSphere(t) {
    return Nr(t, this);
  }
  update() {
    const t = this.a,
      n = this.b,
      a = this.c,
      i = this.points,
      l = this.satAxes,
      s = this.satBounds,
      r = l[0],
      c = s[0];
    (this.getNormal(r), c.setFromPoints(r, i));
    const g = l[1],
      u = s[1];
    (g.subVectors(t, n), u.setFromPoints(g, i));
    const p = l[2],
      m = s[2];
    (p.subVectors(n, a), m.setFromPoints(p, i));
    const h = l[3],
      S = s[3];
    (h.subVectors(a, t), S.setFromPoints(h, i));
    const M = g.length(),
      w = p.length(),
      f = h.length();
    ((this.isDegenerateIntoPoint = !1),
      (this.isDegenerateIntoSegment = !1),
      M < Ee
        ? w < Ee || f < Ee
          ? (this.isDegenerateIntoPoint = !0)
          : ((this.isDegenerateIntoSegment = !0),
            this.degenerateSegment.start.copy(t),
            this.degenerateSegment.end.copy(a))
        : w < Ee
          ? f < Ee
            ? (this.isDegenerateIntoPoint = !0)
            : ((this.isDegenerateIntoSegment = !0),
              this.degenerateSegment.start.copy(n),
              this.degenerateSegment.end.copy(t))
          : f < Ee &&
            ((this.isDegenerateIntoSegment = !0),
            this.degenerateSegment.start.copy(a),
            this.degenerateSegment.end.copy(n)),
      this.plane.setFromNormalAndCoplanarPoint(r, t),
      (this.needsUpdate = !1));
  }
}
Ae.prototype.closestPointToSegment = (function () {
  const e = new $(),
    t = new $(),
    n = new Ce();
  return function (i, l = null, s = null) {
    const { start: r, end: c } = i,
      g = this.points;
    let u,
      p = 1 / 0;
    for (let m = 0; m < 3; m++) {
      const h = (m + 1) % 3;
      (n.start.copy(g[m]),
        n.end.copy(g[h]),
        ta(n, i, e, t),
        (u = e.distanceToSquared(t)),
        u < p && ((p = u), l && l.copy(e), s && s.copy(t)));
    }
    return (
      this.closestPointToPoint(r, e),
      (u = r.distanceToSquared(e)),
      u < p && ((p = u), l && l.copy(e), s && s.copy(r)),
      this.closestPointToPoint(c, e),
      (u = c.distanceToSquared(e)),
      u < p && ((p = u), l && l.copy(e), s && s.copy(c)),
      Math.sqrt(p)
    );
  };
})();
Ae.prototype.intersectsTriangle = (function () {
  const e = new Ae(),
    t = new Re(),
    n = new Re(),
    a = new $(),
    i = new $(),
    l = new $(),
    s = new $(),
    r = new Ce(),
    c = new Ce(),
    g = new $(),
    u = new Ue(),
    p = new Ue();
  function m(x, b, v, B) {
    const _ = a;
    !x.isDegenerateIntoPoint && !x.isDegenerateIntoSegment ? _.copy(x.plane.normal) : _.copy(b.plane.normal);
    const T = x.satBounds,
      j = x.satAxes;
    for (let k = 1; k < 4; k++) {
      const P = T[k],
        I = j[k];
      if (
        (t.setFromPoints(I, b.points),
        P.isSeparated(t) ||
          (s.copy(_).cross(I), t.setFromPoints(s, x.points), n.setFromPoints(s, b.points), t.isSeparated(n)))
      )
        return !1;
    }
    const A = b.satBounds,
      E = b.satAxes;
    for (let k = 1; k < 4; k++) {
      const P = A[k],
        I = E[k];
      if (
        (t.setFromPoints(I, x.points),
        P.isSeparated(t) ||
          (s.crossVectors(_, I), t.setFromPoints(s, x.points), n.setFromPoints(s, b.points), t.isSeparated(n)))
      )
        return !1;
    }
    return (
      v &&
        (B ||
          console.warn(
            "ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.",
          ),
        v.start.set(0, 0, 0),
        v.end.set(0, 0, 0)),
      !0
    );
  }
  function h(x, b, v, B, _, T, j, A, E, k, P) {
    let I = j / (j - A);
    ((k.x = B + (_ - B) * I),
      P.start.subVectors(b, x).multiplyScalar(I).add(x),
      (I = j / (j - E)),
      (k.y = B + (T - B) * I),
      P.end.subVectors(v, x).multiplyScalar(I).add(x));
  }
  function S(x, b, v, B, _, T, j, A, E, k, P) {
    if (_ > 0) h(x.c, x.a, x.b, B, b, v, E, j, A, k, P);
    else if (T > 0) h(x.b, x.a, x.c, v, b, B, A, j, E, k, P);
    else if (A * E > 0 || j != 0) h(x.a, x.b, x.c, b, v, B, j, A, E, k, P);
    else if (A != 0) h(x.b, x.a, x.c, v, b, B, A, j, E, k, P);
    else if (E != 0) h(x.c, x.a, x.b, B, b, v, E, j, A, k, P);
    else return !0;
    return !1;
  }
  function M(x, b, v, B) {
    const _ = b.degenerateSegment,
      T = x.plane.distanceToPoint(_.start),
      j = x.plane.distanceToPoint(_.end);
    return we(T)
      ? we(j)
        ? m(x, b, v, B)
        : (v && (v.start.copy(_.start), v.end.copy(_.start)), x.containsPoint(_.start))
      : we(j)
        ? (v && (v.start.copy(_.end), v.end.copy(_.end)), x.containsPoint(_.end))
        : x.plane.intersectLine(_, a) != null
          ? (v && (v.start.copy(a), v.end.copy(a)), x.containsPoint(a))
          : !1;
  }
  function w(x, b, v) {
    const B = b.a;
    return we(x.plane.distanceToPoint(B)) && x.containsPoint(B) ? (v && (v.start.copy(B), v.end.copy(B)), !0) : !1;
  }
  function f(x, b, v) {
    const B = x.degenerateSegment,
      _ = b.a;
    return (
      B.closestPointToPoint(_, !0, a),
      _.distanceToSquared(a) < ha ? (v && (v.start.copy(_), v.end.copy(_)), !0) : !1
    );
  }
  function y(x, b, v, B) {
    if (x.isDegenerateIntoSegment)
      if (b.isDegenerateIntoSegment) {
        const _ = x.degenerateSegment,
          T = b.degenerateSegment,
          j = i,
          A = l;
        (_.delta(j), T.delta(A));
        const E = a.subVectors(T.start, _.start),
          k = j.x * A.y - j.y * A.x;
        if (we(k)) return !1;
        const P = (E.x * A.y - E.y * A.x) / k,
          I = -(j.x * E.y - j.y * E.x) / k;
        if (P < 0 || P > 1 || I < 0 || I > 1) return !1;
        const N = _.start.z + j.z * P,
          U = T.start.z + A.z * I;
        return we(N - U)
          ? (v && (v.start.copy(_.start).addScaledVector(j, P), v.end.copy(_.start).addScaledVector(j, P)), !0)
          : !1;
      } else return b.isDegenerateIntoPoint ? f(x, b, v) : M(b, x, v, B);
    else {
      if (x.isDegenerateIntoPoint)
        return b.isDegenerateIntoPoint
          ? b.a.distanceToSquared(x.a) < ha
            ? (v && (v.start.copy(x.a), v.end.copy(x.a)), !0)
            : !1
          : b.isDegenerateIntoSegment
            ? f(b, x, v)
            : w(b, x, v);
      if (b.isDegenerateIntoPoint) return w(x, b, v);
      if (b.isDegenerateIntoSegment) return M(x, b, v, B);
    }
  }
  return function (b, v = null, B = !1) {
    (this.needsUpdate && this.update(),
      b.isExtendedTriangle ? b.needsUpdate && b.update() : (e.copy(b), e.update(), (b = e)));
    const _ = y(this, b, v, B);
    if (_ !== void 0) return _;
    const T = this.plane,
      j = b.plane;
    let A = j.distanceToPoint(this.a),
      E = j.distanceToPoint(this.b),
      k = j.distanceToPoint(this.c);
    (we(A) && (A = 0), we(E) && (E = 0), we(k) && (k = 0));
    const P = A * E,
      I = A * k;
    if (P > 0 && I > 0) return !1;
    let N = T.distanceToPoint(b.a),
      U = T.distanceToPoint(b.b),
      q = T.distanceToPoint(b.c);
    (we(N) && (N = 0), we(U) && (U = 0), we(q) && (q = 0));
    const Z = N * U,
      ae = N * q;
    if (Z > 0 && ae > 0) return !1;
    (i.copy(T.normal), l.copy(j.normal));
    const ve = i.cross(l);
    let Ie = 0,
      De = Math.abs(ve.x);
    const L = Math.abs(ve.y);
    (L > De && ((De = L), (Ie = 1)), Math.abs(ve.z) > De && (Ie = 2));
    const Q = Kr[Ie],
      $e = this.a[Q],
      Y = this.b[Q],
      bn = this.c[Q],
      D = b.a[Q],
      ze = b.b[Q],
      xn = b.c[Q];
    if (S(this, $e, Y, bn, P, I, A, E, k, u, r)) return m(this, b, v, B);
    if (S(b, D, ze, xn, Z, ae, N, U, q, p, c)) return m(this, b, v, B);
    if (u.y < u.x) {
      const at = u.y;
      ((u.y = u.x), (u.x = at), g.copy(r.start), r.start.copy(r.end), r.end.copy(g));
    }
    if (p.y < p.x) {
      const at = p.y;
      ((p.y = p.x), (p.x = at), g.copy(c.start), c.start.copy(c.end), c.end.copy(g));
    }
    return u.y < p.x || p.y < u.x
      ? !1
      : (v &&
          (p.x > u.x ? v.start.copy(c.start) : v.start.copy(r.start),
          p.y < u.y ? v.end.copy(c.end) : v.end.copy(r.end)),
        !0);
  };
})();
Ae.prototype.distanceToPoint = (function () {
  const e = new $();
  return function (n) {
    return (this.closestPointToPoint(n, e), n.distanceTo(e));
  };
})();
Ae.prototype.distanceToTriangle = (function () {
  const e = new $(),
    t = new $(),
    n = ["a", "b", "c"],
    a = new Ce(),
    i = new Ce();
  return function (s, r = null, c = null) {
    const g = r || c ? a : null;
    if (this.intersectsTriangle(s, g)) return ((r || c) && (r && g.getCenter(r), c && g.getCenter(c)), 0);
    let u = 1 / 0;
    for (let p = 0; p < 3; p++) {
      let m;
      const h = n[p],
        S = s[h];
      (this.closestPointToPoint(S, e),
        (m = S.distanceToSquared(e)),
        m < u && ((u = m), r && r.copy(e), c && c.copy(S)));
      const M = this[h];
      (s.closestPointToPoint(M, e), (m = M.distanceToSquared(e)), m < u && ((u = m), r && r.copy(M), c && c.copy(e)));
    }
    for (let p = 0; p < 3; p++) {
      const m = n[p],
        h = n[(p + 1) % 3];
      a.set(this[m], this[h]);
      for (let S = 0; S < 3; S++) {
        const M = n[S],
          w = n[(S + 1) % 3];
        (i.set(s[M], s[w]), ta(a, i, e, t));
        const f = e.distanceToSquared(t);
        f < u && ((u = f), r && r.copy(e), c && c.copy(t));
      }
    }
    return Math.sqrt(u);
  };
})();
class ye {
  constructor(t, n, a) {
    ((this.isOrientedBox = !0),
      (this.min = new $()),
      (this.max = new $()),
      (this.matrix = new He()),
      (this.invMatrix = new He()),
      (this.points = new Array(8).fill().map(() => new $())),
      (this.satAxes = new Array(3).fill().map(() => new $())),
      (this.satBounds = new Array(3).fill().map(() => new Re())),
      (this.alignedSatBounds = new Array(3).fill().map(() => new Re())),
      (this.needsUpdate = !1),
      t && this.min.copy(t),
      n && this.max.copy(n),
      a && this.matrix.copy(a));
  }
  set(t, n, a) {
    (this.min.copy(t), this.max.copy(n), this.matrix.copy(a), (this.needsUpdate = !0));
  }
  copy(t) {
    (this.min.copy(t.min), this.max.copy(t.max), this.matrix.copy(t.matrix), (this.needsUpdate = !0));
  }
}
ye.prototype.update = (function () {
  return function () {
    const t = this.matrix,
      n = this.min,
      a = this.max,
      i = this.points;
    for (let g = 0; g <= 1; g++)
      for (let u = 0; u <= 1; u++)
        for (let p = 0; p <= 1; p++) {
          const m = (1 * g) | (2 * u) | (4 * p),
            h = i[m];
          ((h.x = g ? a.x : n.x), (h.y = u ? a.y : n.y), (h.z = p ? a.z : n.z), h.applyMatrix4(t));
        }
    const l = this.satBounds,
      s = this.satAxes,
      r = i[0];
    for (let g = 0; g < 3; g++) {
      const u = s[g],
        p = l[g],
        m = 1 << g,
        h = i[m];
      (u.subVectors(r, h), p.setFromPoints(u, i));
    }
    const c = this.alignedSatBounds;
    (c[0].setFromPointsField(i, "x"),
      c[1].setFromPointsField(i, "y"),
      c[2].setFromPointsField(i, "z"),
      this.invMatrix.copy(this.matrix).invert(),
      (this.needsUpdate = !1));
  };
})();
ye.prototype.intersectsBox = (function () {
  const e = new Re();
  return function (n) {
    this.needsUpdate && this.update();
    const a = n.min,
      i = n.max,
      l = this.satBounds,
      s = this.satAxes,
      r = this.alignedSatBounds;
    if (
      ((e.min = a.x),
      (e.max = i.x),
      r[0].isSeparated(e) ||
        ((e.min = a.y), (e.max = i.y), r[1].isSeparated(e)) ||
        ((e.min = a.z), (e.max = i.z), r[2].isSeparated(e)))
    )
      return !1;
    for (let c = 0; c < 3; c++) {
      const g = s[c],
        u = l[c];
      if ((e.setFromBox(g, n), u.isSeparated(e))) return !1;
    }
    return !0;
  };
})();
ye.prototype.intersectsTriangle = (function () {
  const e = new Ae(),
    t = new Array(3),
    n = new Re(),
    a = new Re(),
    i = new $();
  return function (s) {
    (this.needsUpdate && this.update(),
      s.isExtendedTriangle ? s.needsUpdate && s.update() : (e.copy(s), e.update(), (s = e)));
    const r = this.satBounds,
      c = this.satAxes;
    ((t[0] = s.a), (t[1] = s.b), (t[2] = s.c));
    for (let m = 0; m < 3; m++) {
      const h = r[m],
        S = c[m];
      if ((n.setFromPoints(S, t), h.isSeparated(n))) return !1;
    }
    const g = s.satBounds,
      u = s.satAxes,
      p = this.points;
    for (let m = 0; m < 3; m++) {
      const h = g[m],
        S = u[m];
      if ((n.setFromPoints(S, p), h.isSeparated(n))) return !1;
    }
    for (let m = 0; m < 3; m++) {
      const h = c[m];
      for (let S = 0; S < 4; S++) {
        const M = u[S];
        if ((i.crossVectors(h, M), n.setFromPoints(i, t), a.setFromPoints(i, p), n.isSeparated(a))) return !1;
      }
    }
    return !0;
  };
})();
ye.prototype.closestPointToPoint = (function () {
  return function (t, n) {
    return (
      this.needsUpdate && this.update(),
      n.copy(t).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix),
      n
    );
  };
})();
ye.prototype.distanceToPoint = (function () {
  const e = new $();
  return function (n) {
    return (this.closestPointToPoint(n, e), n.distanceTo(e));
  };
})();
ye.prototype.distanceToBox = (function () {
  const e = ["x", "y", "z"],
    t = new Array(12).fill().map(() => new Ce()),
    n = new Array(12).fill().map(() => new Ce()),
    a = new $(),
    i = new $();
  return function (s, r = 0, c = null, g = null) {
    if ((this.needsUpdate && this.update(), this.intersectsBox(s)))
      return (
        (c || g) &&
          (s.getCenter(i), this.closestPointToPoint(i, a), s.closestPointToPoint(a, i), c && c.copy(a), g && g.copy(i)),
        0
      );
    const u = r * r,
      p = s.min,
      m = s.max,
      h = this.points;
    let S = 1 / 0;
    for (let w = 0; w < 8; w++) {
      const f = h[w];
      i.copy(f).clamp(p, m);
      const y = f.distanceToSquared(i);
      if (y < S && ((S = y), c && c.copy(f), g && g.copy(i), y < u)) return Math.sqrt(y);
    }
    let M = 0;
    for (let w = 0; w < 3; w++)
      for (let f = 0; f <= 1; f++)
        for (let y = 0; y <= 1; y++) {
          const x = (w + 1) % 3,
            b = (w + 2) % 3,
            v = (f << x) | (y << b),
            B = (1 << w) | (f << x) | (y << b),
            _ = h[v],
            T = h[B];
          t[M].set(_, T);
          const A = e[w],
            E = e[x],
            k = e[b],
            P = n[M],
            I = P.start,
            N = P.end;
          ((I[A] = p[A]),
            (I[E] = f ? p[E] : m[E]),
            (I[k] = y ? p[k] : m[E]),
            (N[A] = m[A]),
            (N[E] = f ? p[E] : m[E]),
            (N[k] = y ? p[k] : m[E]),
            M++);
        }
    for (let w = 0; w <= 1; w++)
      for (let f = 0; f <= 1; f++)
        for (let y = 0; y <= 1; y++) {
          ((i.x = w ? m.x : p.x), (i.y = f ? m.y : p.y), (i.z = y ? m.z : p.z), this.closestPointToPoint(i, a));
          const x = i.distanceToSquared(a);
          if (x < S && ((S = x), c && c.copy(a), g && g.copy(i), x < u)) return Math.sqrt(x);
        }
    for (let w = 0; w < 12; w++) {
      const f = t[w];
      for (let y = 0; y < 12; y++) {
        const x = n[y];
        ta(f, x, a, i);
        const b = a.distanceToSquared(i);
        if (b < S && ((S = b), c && c.copy(a), g && g.copy(i), b < u)) return Math.sqrt(b);
      }
    }
    return Math.sqrt(S);
  };
})();
class Or extends Qn {
  constructor() {
    super(() => new Ae());
  }
}
const Me = new Or(),
  St = new $(),
  Pn = new $();
function Fr(e, t, n = {}, a = 0, i = 1 / 0) {
  const l = a * a,
    s = i * i;
  let r = 1 / 0,
    c = null;
  if (
    (e.shapecast({
      boundsTraverseOrder: (u) => (St.copy(t).clamp(u.min, u.max), St.distanceToSquared(t)),
      intersectsBounds: (u, p, m) => m < r && m < s,
      intersectsTriangle: (u, p) => {
        u.closestPointToPoint(t, St);
        const m = t.distanceToSquared(St);
        return (m < r && (Pn.copy(St), (r = m), (c = p)), m < l);
      },
    }),
    r === 1 / 0)
  )
    return null;
  const g = Math.sqrt(r);
  return (n.point ? n.point.copy(Pn) : (n.point = Pn.clone()), (n.distance = g), (n.faceIndex = c), n);
}
const Lt = parseInt(_i) >= 169,
  Gr = parseInt(_i) <= 161,
  Ze = new $(),
  Xe = new $(),
  Je = new $(),
  qt = new Ue(),
  Nt = new Ue(),
  Kt = new Ue(),
  fa = new $(),
  ya = new $(),
  ba = new $(),
  wt = new $();
function Hr(e, t, n, a, i, l, s, r) {
  let c;
  if (
    (l === Ji ? (c = e.intersectTriangle(a, n, t, !0, i)) : (c = e.intersectTriangle(t, n, a, l !== Ve, i)), c === null)
  )
    return null;
  const g = e.origin.distanceTo(i);
  return g < s || g > r ? null : { distance: g, point: i.clone() };
}
function xa(e, t, n, a, i, l, s, r, c, g, u) {
  (Ze.fromBufferAttribute(t, l), Xe.fromBufferAttribute(t, s), Je.fromBufferAttribute(t, r));
  const p = Hr(e, Ze, Xe, Je, wt, c, g, u);
  if (p) {
    if (a) {
      (qt.fromBufferAttribute(a, l), Nt.fromBufferAttribute(a, s), Kt.fromBufferAttribute(a, r), (p.uv = new Ue()));
      const h = ft.getInterpolation(wt, Ze, Xe, Je, qt, Nt, Kt, p.uv);
      Lt || (p.uv = h);
    }
    if (i) {
      (qt.fromBufferAttribute(i, l), Nt.fromBufferAttribute(i, s), Kt.fromBufferAttribute(i, r), (p.uv1 = new Ue()));
      const h = ft.getInterpolation(wt, Ze, Xe, Je, qt, Nt, Kt, p.uv1);
      (Lt || (p.uv1 = h), Gr && (p.uv2 = p.uv1));
    }
    if (n) {
      (fa.fromBufferAttribute(n, l), ya.fromBufferAttribute(n, s), ba.fromBufferAttribute(n, r), (p.normal = new $()));
      const h = ft.getInterpolation(wt, Ze, Xe, Je, fa, ya, ba, p.normal);
      (p.normal.dot(e.direction) > 0 && p.normal.multiplyScalar(-1), Lt || (p.normal = h));
    }
    const m = { a: l, b: s, c: r, normal: new $(), materialIndex: 0 };
    if ((ft.getNormal(Ze, Xe, Je, m.normal), (p.face = m), (p.faceIndex = l), Lt)) {
      const h = new $();
      (ft.getBarycoord(wt, Ze, Xe, Je, h), (p.barycoord = h));
    }
  }
  return p;
}
function va(e) {
  return e && e.isMaterial ? e.side : e;
}
function yn(e, t, n, a, i, l, s) {
  const r = a * 3;
  let c = r + 0,
    g = r + 1,
    u = r + 2;
  const { index: p, groups: m } = e;
  e.index && ((c = p.getX(c)), (g = p.getX(g)), (u = p.getX(u)));
  const { position: h, normal: S, uv: M, uv1: w } = e.attributes;
  if (Array.isArray(t)) {
    const f = a * 3;
    for (let y = 0, x = m.length; y < x; y++) {
      const { start: b, count: v, materialIndex: B } = m[y];
      if (f >= b && f < b + v) {
        const _ = va(t[B]),
          T = xa(n, h, S, M, w, c, g, u, _, l, s);
        if (T)
          if (((T.faceIndex = a), (T.face.materialIndex = B), i)) i.push(T);
          else return T;
      }
    }
  } else {
    const f = va(t),
      y = xa(n, h, S, M, w, c, g, u, f, l, s);
    if (y)
      if (((y.faceIndex = a), (y.face.materialIndex = 0), i)) i.push(y);
      else return y;
  }
  return null;
}
function ee(e, t, n, a) {
  const i = e.a,
    l = e.b,
    s = e.c;
  let r = t,
    c = t + 1,
    g = t + 2;
  (n && ((r = n.getX(r)), (c = n.getX(c)), (g = n.getX(g))),
    (i.x = a.getX(r)),
    (i.y = a.getY(r)),
    (i.z = a.getZ(r)),
    (l.x = a.getX(c)),
    (l.y = a.getY(c)),
    (l.z = a.getZ(c)),
    (s.x = a.getX(g)),
    (s.y = a.getY(g)),
    (s.z = a.getZ(g)));
}
function Ur(e, t, n, a, i, l, s, r) {
  const { geometry: c, _indirectBuffer: g } = e;
  for (let u = a, p = a + i; u < p; u++) yn(c, t, n, u, l, s, r);
}
function Vr(e, t, n, a, i, l, s) {
  const { geometry: r, _indirectBuffer: c } = e;
  let g = 1 / 0,
    u = null;
  for (let p = a, m = a + i; p < m; p++) {
    let h;
    ((h = yn(r, t, n, p, null, l, s)), h && h.distance < g && ((u = h), (g = h.distance)));
  }
  return u;
}
function Yr(e, t, n, a, i, l, s) {
  const { geometry: r } = n,
    { index: c } = r,
    g = r.attributes.position;
  for (let u = e, p = t + e; u < p; u++) {
    let m;
    if (((m = u), ee(s, m * 3, c, g), (s.needsUpdate = !0), a(s, m, i, l))) return !0;
  }
  return !1;
}
function Wr(e, t = null) {
  t && Array.isArray(t) && (t = new Set(t));
  const n = e.geometry,
    a = n.index ? n.index.array : null,
    i = n.attributes.position;
  let l,
    s,
    r,
    c,
    g = 0;
  const u = e._roots;
  for (let m = 0, h = u.length; m < h; m++)
    ((l = u[m]),
      (s = new Uint32Array(l)),
      (r = new Uint16Array(l)),
      (c = new Float32Array(l)),
      p(0, g),
      (g += l.byteLength));
  function p(m, h, S = !1) {
    const M = m * 2;
    if (ne(M, r)) {
      const w = me(m, s),
        f = he(M, r);
      let y = 1 / 0,
        x = 1 / 0,
        b = 1 / 0,
        v = -1 / 0,
        B = -1 / 0,
        _ = -1 / 0;
      for (let T = 3 * w, j = 3 * (w + f); T < j; T++) {
        let A = a[T];
        const E = i.getX(A),
          k = i.getY(A),
          P = i.getZ(A);
        (E < y && (y = E), E > v && (v = E), k < x && (x = k), k > B && (B = k), P < b && (b = P), P > _ && (_ = P));
      }
      return c[m + 0] !== y || c[m + 1] !== x || c[m + 2] !== b || c[m + 3] !== v || c[m + 4] !== B || c[m + 5] !== _
        ? ((c[m + 0] = y), (c[m + 1] = x), (c[m + 2] = b), (c[m + 3] = v), (c[m + 4] = B), (c[m + 5] = _), !0)
        : !1;
    } else {
      const w = oe(m),
        f = se(m, s);
      let y = S,
        x = !1,
        b = !1;
      if (t) {
        if (!y) {
          const A = w / te + h / pe,
            E = f / te + h / pe;
          ((x = t.has(A)), (b = t.has(E)), (y = !x && !b));
        }
      } else ((x = !0), (b = !0));
      const v = y || x,
        B = y || b;
      let _ = !1;
      v && (_ = p(w, h, y));
      let T = !1;
      B && (T = p(f, h, y));
      const j = _ || T;
      if (j)
        for (let A = 0; A < 3; A++) {
          const E = w + A,
            k = f + A,
            P = c[E],
            I = c[E + 3],
            N = c[k],
            U = c[k + 3];
          ((c[m + A] = P < N ? P : N), (c[m + A + 3] = I > U ? I : U));
        }
      return j;
    }
  }
}
function Ye(e, t, n, a, i) {
  let l, s, r, c, g, u;
  const p = 1 / n.direction.x,
    m = 1 / n.direction.y,
    h = 1 / n.direction.z,
    S = n.origin.x,
    M = n.origin.y,
    w = n.origin.z;
  let f = t[e],
    y = t[e + 3],
    x = t[e + 1],
    b = t[e + 3 + 1],
    v = t[e + 2],
    B = t[e + 3 + 2];
  return (
    p >= 0 ? ((l = (f - S) * p), (s = (y - S) * p)) : ((l = (y - S) * p), (s = (f - S) * p)),
    m >= 0 ? ((r = (x - M) * m), (c = (b - M) * m)) : ((r = (b - M) * m), (c = (x - M) * m)),
    l > c ||
    r > s ||
    ((r > l || isNaN(l)) && (l = r),
    (c < s || isNaN(s)) && (s = c),
    h >= 0 ? ((g = (v - w) * h), (u = (B - w) * h)) : ((g = (B - w) * h), (u = (v - w) * h)),
    l > u || g > s)
      ? !1
      : ((g > l || l !== l) && (l = g), (u < s || s !== s) && (s = u), l <= i && s >= a)
  );
}
function Zr(e, t, n, a, i, l, s, r) {
  const { geometry: c, _indirectBuffer: g } = e;
  for (let u = a, p = a + i; u < p; u++) {
    let m = g ? g[u] : u;
    yn(c, t, n, m, l, s, r);
  }
}
function Xr(e, t, n, a, i, l, s) {
  const { geometry: r, _indirectBuffer: c } = e;
  let g = 1 / 0,
    u = null;
  for (let p = a, m = a + i; p < m; p++) {
    let h;
    ((h = yn(r, t, n, c ? c[p] : p, null, l, s)), h && h.distance < g && ((u = h), (g = h.distance)));
  }
  return u;
}
function Jr(e, t, n, a, i, l, s) {
  const { geometry: r } = n,
    { index: c } = r,
    g = r.attributes.position;
  for (let u = e, p = t + e; u < p; u++) {
    let m;
    if (((m = n.resolveTriangleIndex(u)), ee(s, m * 3, c, g), (s.needsUpdate = !0), a(s, m, i, l))) return !0;
  }
  return !1;
}
function Qr(e, t, n, a, i, l, s) {
  (W.setBuffer(e._roots[t]), On(0, e, n, a, i, l, s), W.clearBuffer());
}
function On(e, t, n, a, i, l, s) {
  const { float32Array: r, uint16Array: c, uint32Array: g } = W,
    u = e * 2;
  if (ne(u, c)) {
    const m = me(e, g),
      h = he(u, c);
    Ur(t, n, a, m, h, i, l, s);
  } else {
    const m = oe(e);
    Ye(m, r, a, l, s) && On(m, t, n, a, i, l, s);
    const h = se(e, g);
    Ye(h, r, a, l, s) && On(h, t, n, a, i, l, s);
  }
}
const eo = ["x", "y", "z"];
function to(e, t, n, a, i, l) {
  W.setBuffer(e._roots[t]);
  const s = Fn(0, e, n, a, i, l);
  return (W.clearBuffer(), s);
}
function Fn(e, t, n, a, i, l) {
  const { float32Array: s, uint16Array: r, uint32Array: c } = W;
  let g = e * 2;
  if (ne(g, r)) {
    const p = me(e, c),
      m = he(g, r);
    return Vr(t, n, a, p, m, i, l);
  } else {
    const p = Jn(e, c),
      m = eo[p],
      S = a.direction[m] >= 0;
    let M, w;
    S ? ((M = oe(e)), (w = se(e, c))) : ((M = se(e, c)), (w = oe(e)));
    const y = Ye(M, s, a, i, l) ? Fn(M, t, n, a, i, l) : null;
    if (y) {
      const v = y.point[m];
      if (S ? v <= s[w + p] : v >= s[w + p + 3]) return y;
    }
    const b = Ye(w, s, a, i, l) ? Fn(w, t, n, a, i, l) : null;
    return y && b ? (y.distance <= b.distance ? y : b) : y || b || null;
  }
}
const Ot = new Se(),
  lt = new Ae(),
  ct = new Ae(),
  Mt = new He(),
  Sa = new ye(),
  Ft = new ye();
function no(e, t, n, a) {
  W.setBuffer(e._roots[t]);
  const i = Gn(0, e, n, a);
  return (W.clearBuffer(), i);
}
function Gn(e, t, n, a, i = null) {
  const { float32Array: l, uint16Array: s, uint32Array: r } = W;
  let c = e * 2;
  if (
    (i === null && (n.boundingBox || n.computeBoundingBox(), Sa.set(n.boundingBox.min, n.boundingBox.max, a), (i = Sa)),
    ne(c, s))
  ) {
    const u = t.geometry,
      p = u.index,
      m = u.attributes.position,
      h = n.index,
      S = n.attributes.position,
      M = me(e, r),
      w = he(c, s);
    if ((Mt.copy(a).invert(), n.boundsTree))
      return (
        X(e, l, Ft),
        Ft.matrix.copy(Mt),
        (Ft.needsUpdate = !0),
        n.boundsTree.shapecast({
          intersectsBounds: (y) => Ft.intersectsBox(y),
          intersectsTriangle: (y) => {
            (y.a.applyMatrix4(a), y.b.applyMatrix4(a), y.c.applyMatrix4(a), (y.needsUpdate = !0));
            for (let x = M * 3, b = (w + M) * 3; x < b; x += 3)
              if ((ee(ct, x, p, m), (ct.needsUpdate = !0), y.intersectsTriangle(ct))) return !0;
            return !1;
          },
        })
      );
    {
      const f = fn(n);
      for (let y = M * 3, x = (w + M) * 3; y < x; y += 3) {
        (ee(lt, y, p, m), lt.a.applyMatrix4(Mt), lt.b.applyMatrix4(Mt), lt.c.applyMatrix4(Mt), (lt.needsUpdate = !0));
        for (let b = 0, v = f * 3; b < v; b += 3)
          if ((ee(ct, b, h, S), (ct.needsUpdate = !0), lt.intersectsTriangle(ct))) return !0;
      }
    }
  } else {
    const u = oe(e),
      p = se(e, r);
    return (
      X(u, l, Ot),
      !!((i.intersectsBox(Ot) && Gn(u, t, n, a, i)) || (X(p, l, Ot), i.intersectsBox(Ot) && Gn(p, t, n, a, i)))
    );
  }
}
const Gt = new He(),
  Tn = new ye(),
  _t = new ye(),
  ao = new $(),
  io = new $(),
  ro = new $(),
  oo = new $();
function so(e, t, n, a = {}, i = {}, l = 0, s = 1 / 0) {
  (t.boundingBox || t.computeBoundingBox(), Tn.set(t.boundingBox.min, t.boundingBox.max, n), (Tn.needsUpdate = !0));
  const r = e.geometry,
    c = r.attributes.position,
    g = r.index,
    u = t.attributes.position,
    p = t.index,
    m = Me.getPrimitive(),
    h = Me.getPrimitive();
  let S = ao,
    M = io,
    w = null,
    f = null;
  i && ((w = ro), (f = oo));
  let y = 1 / 0,
    x = null,
    b = null;
  return (
    Gt.copy(n).invert(),
    _t.matrix.copy(Gt),
    e.shapecast({
      boundsTraverseOrder: (v) => Tn.distanceToBox(v),
      intersectsBounds: (v, B, _) =>
        _ < y && _ < s ? (B && (_t.min.copy(v.min), _t.max.copy(v.max), (_t.needsUpdate = !0)), !0) : !1,
      intersectsRange: (v, B) => {
        if (t.boundsTree)
          return t.boundsTree.shapecast({
            boundsTraverseOrder: (T) => _t.distanceToBox(T),
            intersectsBounds: (T, j, A) => A < y && A < s,
            intersectsRange: (T, j) => {
              for (let A = T, E = T + j; A < E; A++) {
                (ee(h, 3 * A, p, u),
                  h.a.applyMatrix4(n),
                  h.b.applyMatrix4(n),
                  h.c.applyMatrix4(n),
                  (h.needsUpdate = !0));
                for (let k = v, P = v + B; k < P; k++) {
                  (ee(m, 3 * k, g, c), (m.needsUpdate = !0));
                  const I = m.distanceToTriangle(h, S, w);
                  if ((I < y && (M.copy(S), f && f.copy(w), (y = I), (x = k), (b = A)), I < l)) return !0;
                }
              }
            },
          });
        {
          const _ = fn(t);
          for (let T = 0, j = _; T < j; T++) {
            (ee(h, 3 * T, p, u), h.a.applyMatrix4(n), h.b.applyMatrix4(n), h.c.applyMatrix4(n), (h.needsUpdate = !0));
            for (let A = v, E = v + B; A < E; A++) {
              (ee(m, 3 * A, g, c), (m.needsUpdate = !0));
              const k = m.distanceToTriangle(h, S, w);
              if ((k < y && (M.copy(S), f && f.copy(w), (y = k), (x = A), (b = T)), k < l)) return !0;
            }
          }
        }
      },
    }),
    Me.releasePrimitive(m),
    Me.releasePrimitive(h),
    y === 1 / 0
      ? null
      : (a.point ? a.point.copy(M) : (a.point = M.clone()),
        (a.distance = y),
        (a.faceIndex = x),
        i &&
          (i.point ? i.point.copy(f) : (i.point = f.clone()),
          i.point.applyMatrix4(Gt),
          M.applyMatrix4(Gt),
          (i.distance = M.sub(i.point).length()),
          (i.faceIndex = b)),
        a)
  );
}
function lo(e, t = null) {
  t && Array.isArray(t) && (t = new Set(t));
  const n = e.geometry,
    a = n.index ? n.index.array : null,
    i = n.attributes.position;
  let l,
    s,
    r,
    c,
    g = 0;
  const u = e._roots;
  for (let m = 0, h = u.length; m < h; m++)
    ((l = u[m]),
      (s = new Uint32Array(l)),
      (r = new Uint16Array(l)),
      (c = new Float32Array(l)),
      p(0, g),
      (g += l.byteLength));
  function p(m, h, S = !1) {
    const M = m * 2;
    if (ne(M, r)) {
      const w = me(m, s),
        f = he(M, r);
      let y = 1 / 0,
        x = 1 / 0,
        b = 1 / 0,
        v = -1 / 0,
        B = -1 / 0,
        _ = -1 / 0;
      for (let T = w, j = w + f; T < j; T++) {
        const A = 3 * e.resolveTriangleIndex(T);
        for (let E = 0; E < 3; E++) {
          let k = A + E;
          k = a ? a[k] : k;
          const P = i.getX(k),
            I = i.getY(k),
            N = i.getZ(k);
          (P < y && (y = P), P > v && (v = P), I < x && (x = I), I > B && (B = I), N < b && (b = N), N > _ && (_ = N));
        }
      }
      return c[m + 0] !== y || c[m + 1] !== x || c[m + 2] !== b || c[m + 3] !== v || c[m + 4] !== B || c[m + 5] !== _
        ? ((c[m + 0] = y), (c[m + 1] = x), (c[m + 2] = b), (c[m + 3] = v), (c[m + 4] = B), (c[m + 5] = _), !0)
        : !1;
    } else {
      const w = oe(m),
        f = se(m, s);
      let y = S,
        x = !1,
        b = !1;
      if (t) {
        if (!y) {
          const A = w / te + h / pe,
            E = f / te + h / pe;
          ((x = t.has(A)), (b = t.has(E)), (y = !x && !b));
        }
      } else ((x = !0), (b = !0));
      const v = y || x,
        B = y || b;
      let _ = !1;
      v && (_ = p(w, h, y));
      let T = !1;
      B && (T = p(f, h, y));
      const j = _ || T;
      if (j)
        for (let A = 0; A < 3; A++) {
          const E = w + A,
            k = f + A,
            P = c[E],
            I = c[E + 3],
            N = c[k],
            U = c[k + 3];
          ((c[m + A] = P < N ? P : N), (c[m + A + 3] = I > U ? I : U));
        }
      return j;
    }
  }
}
function co(e, t, n, a, i, l, s) {
  (W.setBuffer(e._roots[t]), Hn(0, e, n, a, i, l, s), W.clearBuffer());
}
function Hn(e, t, n, a, i, l, s) {
  const { float32Array: r, uint16Array: c, uint32Array: g } = W,
    u = e * 2;
  if (ne(u, c)) {
    const m = me(e, g),
      h = he(u, c);
    Zr(t, n, a, m, h, i, l, s);
  } else {
    const m = oe(e);
    Ye(m, r, a, l, s) && Hn(m, t, n, a, i, l, s);
    const h = se(e, g);
    Ye(h, r, a, l, s) && Hn(h, t, n, a, i, l, s);
  }
}
const uo = ["x", "y", "z"];
function po(e, t, n, a, i, l) {
  W.setBuffer(e._roots[t]);
  const s = Un(0, e, n, a, i, l);
  return (W.clearBuffer(), s);
}
function Un(e, t, n, a, i, l) {
  const { float32Array: s, uint16Array: r, uint32Array: c } = W;
  let g = e * 2;
  if (ne(g, r)) {
    const p = me(e, c),
      m = he(g, r);
    return Xr(t, n, a, p, m, i, l);
  } else {
    const p = Jn(e, c),
      m = uo[p],
      S = a.direction[m] >= 0;
    let M, w;
    S ? ((M = oe(e)), (w = se(e, c))) : ((M = se(e, c)), (w = oe(e)));
    const y = Ye(M, s, a, i, l) ? Un(M, t, n, a, i, l) : null;
    if (y) {
      const v = y.point[m];
      if (S ? v <= s[w + p] : v >= s[w + p + 3]) return y;
    }
    const b = Ye(w, s, a, i, l) ? Un(w, t, n, a, i, l) : null;
    return y && b ? (y.distance <= b.distance ? y : b) : y || b || null;
  }
}
const Ht = new Se(),
  ut = new Ae(),
  dt = new Ae(),
  kt = new He(),
  wa = new ye(),
  Ut = new ye();
function mo(e, t, n, a) {
  W.setBuffer(e._roots[t]);
  const i = Vn(0, e, n, a);
  return (W.clearBuffer(), i);
}
function Vn(e, t, n, a, i = null) {
  const { float32Array: l, uint16Array: s, uint32Array: r } = W;
  let c = e * 2;
  if (
    (i === null && (n.boundingBox || n.computeBoundingBox(), wa.set(n.boundingBox.min, n.boundingBox.max, a), (i = wa)),
    ne(c, s))
  ) {
    const u = t.geometry,
      p = u.index,
      m = u.attributes.position,
      h = n.index,
      S = n.attributes.position,
      M = me(e, r),
      w = he(c, s);
    if ((kt.copy(a).invert(), n.boundsTree))
      return (
        X(e, l, Ut),
        Ut.matrix.copy(kt),
        (Ut.needsUpdate = !0),
        n.boundsTree.shapecast({
          intersectsBounds: (y) => Ut.intersectsBox(y),
          intersectsTriangle: (y) => {
            (y.a.applyMatrix4(a), y.b.applyMatrix4(a), y.c.applyMatrix4(a), (y.needsUpdate = !0));
            for (let x = M, b = w + M; x < b; x++)
              if ((ee(dt, 3 * t.resolveTriangleIndex(x), p, m), (dt.needsUpdate = !0), y.intersectsTriangle(dt)))
                return !0;
            return !1;
          },
        })
      );
    {
      const f = fn(n);
      for (let y = M, x = w + M; y < x; y++) {
        const b = t.resolveTriangleIndex(y);
        (ee(ut, 3 * b, p, m),
          ut.a.applyMatrix4(kt),
          ut.b.applyMatrix4(kt),
          ut.c.applyMatrix4(kt),
          (ut.needsUpdate = !0));
        for (let v = 0, B = f * 3; v < B; v += 3)
          if ((ee(dt, v, h, S), (dt.needsUpdate = !0), ut.intersectsTriangle(dt))) return !0;
      }
    }
  } else {
    const u = oe(e),
      p = se(e, r);
    return (
      X(u, l, Ht),
      !!((i.intersectsBox(Ht) && Vn(u, t, n, a, i)) || (X(p, l, Ht), i.intersectsBox(Ht) && Vn(p, t, n, a, i)))
    );
  }
}
const Vt = new He(),
  An = new ye(),
  Pt = new ye(),
  go = new $(),
  ho = new $(),
  fo = new $(),
  yo = new $();
function bo(e, t, n, a = {}, i = {}, l = 0, s = 1 / 0) {
  (t.boundingBox || t.computeBoundingBox(), An.set(t.boundingBox.min, t.boundingBox.max, n), (An.needsUpdate = !0));
  const r = e.geometry,
    c = r.attributes.position,
    g = r.index,
    u = t.attributes.position,
    p = t.index,
    m = Me.getPrimitive(),
    h = Me.getPrimitive();
  let S = go,
    M = ho,
    w = null,
    f = null;
  i && ((w = fo), (f = yo));
  let y = 1 / 0,
    x = null,
    b = null;
  return (
    Vt.copy(n).invert(),
    Pt.matrix.copy(Vt),
    e.shapecast({
      boundsTraverseOrder: (v) => An.distanceToBox(v),
      intersectsBounds: (v, B, _) =>
        _ < y && _ < s ? (B && (Pt.min.copy(v.min), Pt.max.copy(v.max), (Pt.needsUpdate = !0)), !0) : !1,
      intersectsRange: (v, B) => {
        if (t.boundsTree) {
          const _ = t.boundsTree;
          return _.shapecast({
            boundsTraverseOrder: (T) => Pt.distanceToBox(T),
            intersectsBounds: (T, j, A) => A < y && A < s,
            intersectsRange: (T, j) => {
              for (let A = T, E = T + j; A < E; A++) {
                const k = _.resolveTriangleIndex(A);
                (ee(h, 3 * k, p, u),
                  h.a.applyMatrix4(n),
                  h.b.applyMatrix4(n),
                  h.c.applyMatrix4(n),
                  (h.needsUpdate = !0));
                for (let P = v, I = v + B; P < I; P++) {
                  const N = e.resolveTriangleIndex(P);
                  (ee(m, 3 * N, g, c), (m.needsUpdate = !0));
                  const U = m.distanceToTriangle(h, S, w);
                  if ((U < y && (M.copy(S), f && f.copy(w), (y = U), (x = P), (b = A)), U < l)) return !0;
                }
              }
            },
          });
        } else {
          const _ = fn(t);
          for (let T = 0, j = _; T < j; T++) {
            (ee(h, 3 * T, p, u), h.a.applyMatrix4(n), h.b.applyMatrix4(n), h.c.applyMatrix4(n), (h.needsUpdate = !0));
            for (let A = v, E = v + B; A < E; A++) {
              const k = e.resolveTriangleIndex(A);
              (ee(m, 3 * k, g, c), (m.needsUpdate = !0));
              const P = m.distanceToTriangle(h, S, w);
              if ((P < y && (M.copy(S), f && f.copy(w), (y = P), (x = A), (b = T)), P < l)) return !0;
            }
          }
        }
      },
    }),
    Me.releasePrimitive(m),
    Me.releasePrimitive(h),
    y === 1 / 0
      ? null
      : (a.point ? a.point.copy(M) : (a.point = M.clone()),
        (a.distance = y),
        (a.faceIndex = x),
        i &&
          (i.point ? i.point.copy(f) : (i.point = f.clone()),
          i.point.applyMatrix4(Vt),
          M.applyMatrix4(Vt),
          (i.distance = M.sub(i.point).length()),
          (i.faceIndex = b)),
        a)
  );
}
function Ma(e, t, n) {
  return e === null
    ? null
    : (e.point.applyMatrix4(t.matrixWorld), (e.distance = e.point.distanceTo(n.ray.origin)), (e.object = t), e);
}
const Yt = new ye(),
  Wt = new Qi(),
  _a = new $(),
  ka = new He(),
  Pa = new $(),
  Bn = ["getX", "getY", "getZ"];
class un extends Lr {
  static serialize(t, n = {}) {
    n = { cloneBuffers: !0, ...n };
    const a = t.geometry,
      i = t._roots,
      l = t._indirectBuffer,
      s = a.getIndex(),
      r = { version: 1, roots: null, index: null, indirectBuffer: null };
    return (
      n.cloneBuffers
        ? ((r.roots = i.map((c) => c.slice())),
          (r.index = s ? s.array.slice() : null),
          (r.indirectBuffer = l ? l.slice() : null))
        : ((r.roots = i), (r.index = s ? s.array : null), (r.indirectBuffer = l)),
      r
    );
  }
  static deserialize(t, n, a = {}) {
    a = { setIndex: !0, indirect: !!t.indirectBuffer, ...a };
    const { index: i, roots: l, indirectBuffer: s } = t;
    t.version ||
      (console.warn(
        "MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.",
      ),
      c(l));
    const r = new un(n, { ...a, [Xn]: !0 });
    if (((r._roots = l), (r._indirectBuffer = s || null), a.setIndex)) {
      const g = n.getIndex();
      if (g === null) {
        const u = new wi(t.index, 1, !1);
        n.setIndex(u);
      } else g.array !== i && (g.array.set(i), (g.needsUpdate = !0));
    }
    return r;
    function c(g) {
      for (let u = 0; u < g.length; u++) {
        const p = g[u],
          m = new Uint32Array(p),
          h = new Uint16Array(p);
        for (let S = 0, M = p.byteLength / pe; S < M; S++) {
          const w = te * S,
            f = 2 * w;
          ne(f, h) || (m[w + 6] = m[w + 6] / te - S);
        }
      }
    }
  }
  get primitiveStride() {
    return 3;
  }
  get resolveTriangleIndex() {
    return this.resolvePrimitiveIndex;
  }
  constructor(t, n = {}) {
    (n.maxLeafTris &&
      (console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),
      (n = { ...n, maxLeafSize: n.maxLeafTris })),
      super(t, n));
  }
  shiftTriangleOffsets(t) {
    return super.shiftPrimitiveOffsets(t);
  }
  writePrimitiveBounds(t, n, a) {
    const i = this.geometry,
      l = this._indirectBuffer,
      s = i.attributes.position,
      r = i.index ? i.index.array : null,
      g = (l ? l[t] : t) * 3;
    let u = g + 0,
      p = g + 1,
      m = g + 2;
    r && ((u = r[u]), (p = r[p]), (m = r[m]));
    for (let h = 0; h < 3; h++) {
      const S = s[Bn[h]](u),
        M = s[Bn[h]](p),
        w = s[Bn[h]](m);
      let f = S;
      (M < f && (f = M), w < f && (f = w));
      let y = S;
      (M > y && (y = M), w > y && (y = w), (n[a + h] = f), (n[a + h + 3] = y));
    }
    return n;
  }
  computePrimitiveBounds(t, n, a) {
    const i = this.geometry,
      l = this._indirectBuffer,
      s = i.attributes.position,
      r = i.index ? i.index.array : null,
      c = s.normalized;
    if (t < 0 || n + t - a.offset > a.length / 6) throw new Error("MeshBVH: compute triangle bounds range is invalid.");
    const g = s.array,
      u = s.offset || 0;
    let p = 3;
    s.isInterleavedBufferAttribute && (p = s.data.stride);
    const m = ["getX", "getY", "getZ"],
      h = a.offset;
    for (let S = t, M = t + n; S < M; S++) {
      const f = (l ? l[S] : S) * 3,
        y = (S - h) * 6;
      let x = f + 0,
        b = f + 1,
        v = f + 2;
      (r && ((x = r[x]), (b = r[b]), (v = r[v])), c || ((x = x * p + u), (b = b * p + u), (v = v * p + u)));
      for (let B = 0; B < 3; B++) {
        let _, T, j;
        c ? ((_ = s[m[B]](x)), (T = s[m[B]](b)), (j = s[m[B]](v))) : ((_ = g[x + B]), (T = g[b + B]), (j = g[v + B]));
        let A = _;
        (T < A && (A = T), j < A && (A = j));
        let E = _;
        (T > E && (E = T), j > E && (E = j));
        const k = (E - A) / 2,
          P = B * 2;
        ((a[y + P + 0] = A + k), (a[y + P + 1] = k + (Math.abs(A) + k) * sn));
      }
    }
    return a;
  }
  raycastObject3D(t, n, a = []) {
    const { material: i } = t;
    if (i === void 0) return;
    (ka.copy(t.matrixWorld).invert(),
      Wt.copy(n.ray).applyMatrix4(ka),
      Pa.setFromMatrixScale(t.matrixWorld),
      _a.copy(Wt.direction).multiply(Pa));
    const l = _a.length(),
      s = n.near / l,
      r = n.far / l;
    if (n.firstHitOnly === !0) {
      let c = this.raycastFirst(Wt, i, s, r);
      ((c = Ma(c, t, n)), c && a.push(c));
    } else {
      const c = this.raycast(Wt, i, s, r);
      for (let g = 0, u = c.length; g < u; g++) {
        const p = Ma(c[g], t, n);
        p && a.push(p);
      }
    }
    return a;
  }
  refit(t = null) {
    return (this.indirect ? lo : Wr)(this, t);
  }
  raycast(t, n = oa, a = 0, i = 1 / 0) {
    const l = this._roots,
      s = [],
      r = this.indirect ? co : Qr;
    for (let c = 0, g = l.length; c < g; c++) r(this, c, n, t, s, a, i);
    return s;
  }
  raycastFirst(t, n = oa, a = 0, i = 1 / 0) {
    const l = this._roots;
    let s = null;
    const r = this.indirect ? po : to;
    for (let c = 0, g = l.length; c < g; c++) {
      const u = r(this, c, n, t, a, i);
      u != null && (s == null || u.distance < s.distance) && (s = u);
    }
    return s;
  }
  intersectsGeometry(t, n) {
    let a = !1;
    const i = this._roots,
      l = this.indirect ? mo : no;
    for (let s = 0, r = i.length; s < r && ((a = l(this, s, t, n)), !a); s++);
    return a;
  }
  shapecast(t) {
    const n = Me.getPrimitive(),
      a = super.shapecast({
        ...t,
        intersectsPrimitive: t.intersectsTriangle,
        scratchPrimitive: n,
        iterate: this.indirect ? Jr : Yr,
      });
    return (Me.releasePrimitive(n), a);
  }
  bvhcast(t, n, a) {
    let { intersectsRanges: i, intersectsTriangles: l } = a;
    const s = Me.getPrimitive(),
      r = this.geometry.index,
      c = this.geometry.attributes.position,
      g = this.indirect
        ? (S) => {
            const M = this.resolveTriangleIndex(S);
            ee(s, M * 3, r, c);
          }
        : (S) => {
            ee(s, S * 3, r, c);
          },
      u = Me.getPrimitive(),
      p = t.geometry.index,
      m = t.geometry.attributes.position,
      h = t.indirect
        ? (S) => {
            const M = t.resolveTriangleIndex(S);
            ee(u, M * 3, p, m);
          }
        : (S) => {
            ee(u, S * 3, p, m);
          };
    if (l) {
      if (!(t instanceof un))
        throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');
      const S = (M, w, f, y, x, b, v, B) => {
        for (let _ = f, T = f + y; _ < T; _++) {
          (h(_), u.a.applyMatrix4(n), u.b.applyMatrix4(n), u.c.applyMatrix4(n), (u.needsUpdate = !0));
          for (let j = M, A = M + w; j < A; j++) if ((g(j), (s.needsUpdate = !0), l(s, u, j, _, x, b, v, B))) return !0;
        }
        return !1;
      };
      if (i) {
        const M = i;
        i = function (w, f, y, x, b, v, B, _) {
          return M(w, f, y, x, b, v, B, _) ? !0 : S(w, f, y, x, b, v, B, _);
        };
      } else i = S;
    }
    return super.bvhcast(t, n, { intersectsRanges: i });
  }
  intersectsBox(t, n) {
    return (
      Yt.set(t.min, t.max, n),
      (Yt.needsUpdate = !0),
      this.shapecast({
        intersectsBounds: (a) => Yt.intersectsBox(a),
        intersectsTriangle: (a) => Yt.intersectsTriangle(a),
      })
    );
  }
  intersectsSphere(t) {
    return this.shapecast({
      intersectsBounds: (n) => t.intersectsBox(n),
      intersectsTriangle: (n) => n.intersectsSphere(t),
    });
  }
  closestPointToGeometry(t, n, a = {}, i = {}, l = 0, s = 1 / 0) {
    return (this.indirect ? bo : so)(this, t, n, a, i, l, s);
  }
  closestPointToPoint(t, n = {}, a = 0, i = 1 / 0) {
    return Fr(this, t, n, a, i);
  }
}
const yt = {
    Mesh: gn.prototype.raycast,
    Line: Ai.prototype.raycast,
    LineSegments: Ti.prototype.raycast,
    LineLoop: Pi.prototype.raycast,
    Points: ki.prototype.raycast,
    BatchedMesh: er.prototype.raycast,
  },
  le = new gn(),
  Zt = [];
function xo(e, t) {
  if (this.isBatchedMesh) vo.call(this, e, t);
  else {
    const { geometry: n } = this;
    if (n.boundsTree) n.boundsTree.raycastObject3D(this, e, t);
    else {
      let a;
      if (this instanceof gn) a = yt.Mesh;
      else if (this instanceof Ti) a = yt.LineSegments;
      else if (this instanceof Pi) a = yt.LineLoop;
      else if (this instanceof Ai) a = yt.Line;
      else if (this instanceof ki) a = yt.Points;
      else throw new Error("BVH: Fallback raycast function not found.");
      a.call(this, e, t);
    }
  }
}
function vo(e, t) {
  if (this.boundsTrees) {
    const n = this.boundsTrees,
      a = this._drawInfo || this._instanceInfo,
      i = this._drawRanges || this._geometryInfo,
      l = this.matrixWorld;
    ((le.material = this.material), (le.geometry = this.geometry));
    const s = le.geometry.boundsTree,
      r = le.geometry.drawRange;
    le.geometry.boundingSphere === null && (le.geometry.boundingSphere = new tr());
    for (let c = 0, g = a.length; c < g; c++) {
      if (!this.getVisibleAt(c)) continue;
      const u = a[c].geometryIndex;
      if (
        ((le.geometry.boundsTree = n[u]), this.getMatrixAt(c, le.matrixWorld).premultiply(l), !le.geometry.boundsTree)
      ) {
        (this.getBoundingBoxAt(u, le.geometry.boundingBox), this.getBoundingSphereAt(u, le.geometry.boundingSphere));
        const p = i[u];
        le.geometry.setDrawRange(p.start, p.count);
      }
      le.raycast(e, Zt);
      for (let p = 0, m = Zt.length; p < m; p++) {
        const h = Zt[p];
        ((h.object = this), (h.batchId = c), t.push(h));
      }
      Zt.length = 0;
    }
    ((le.geometry.boundsTree = s), (le.geometry.drawRange = r), (le.material = null), (le.geometry = null));
  } else yt.BatchedMesh.call(this, e, t);
}
function So(e = {}) {
  const { type: t = un } = e;
  return ((this.boundsTree = new t(this, e)), this.boundsTree);
}
function wo() {
  this.boundsTree = null;
}
function Mo() {
  const e = z.useRef({ w: !1, a: !1, s: !1, d: !1, shift: !1, space: !1 });
  return (
    z.useEffect(() => {
      const t = () => {
          const i = document.activeElement?.tagName;
          return i === "INPUT" || i === "TEXTAREA";
        },
        n = (i) => {
          if (t()) return;
          const l = i.key.toLowerCase();
          l === "w"
            ? (e.current.w = !0)
            : l === "a"
              ? (e.current.a = !0)
              : l === "s"
                ? (e.current.s = !0)
                : l === "d"
                  ? (e.current.d = !0)
                  : l === "shift"
                    ? (e.current.shift = !0)
                    : l === " " && (e.current.space = !0);
        },
        a = (i) => {
          const l = i.key.toLowerCase();
          l === "w"
            ? (e.current.w = !1)
            : l === "a"
              ? (e.current.a = !1)
              : l === "s"
                ? (e.current.s = !1)
                : l === "d"
                  ? (e.current.d = !1)
                  : l === "shift"
                    ? (e.current.shift = !1)
                    : l === " " && (e.current.space = !1);
        };
      return (
        window.addEventListener("keydown", n),
        window.addEventListener("keyup", a),
        () => {
          (window.removeEventListener("keydown", n), window.removeEventListener("keyup", a));
        }
      );
    }, []),
    e
  );
}
const Xt = { minX: -9.5, maxX: 6, minZ: -11, maxZ: 11.5 };
function _o(e, t) {
  return { x: Math.max(Xt.minX, Math.min(Xt.maxX, e)), z: Math.max(Xt.minZ, Math.min(Xt.maxZ, t)) };
}
const ko = 0.064,
  zn = 15.19;
Bi.prototype.computeBoundsTree = So;
Bi.prototype.disposeBoundsTree = wo;
gn.prototype.raycast = xo;
const Po = {
    warrior: "/models/characters/warrior_m.glb",
    ninja: "/models/characters/assassin_m.glb",
    sura: "/models/characters/sura_m.glb",
    shaman: "/models/characters/shaman_m.glb",
  },
  To = 0.03,
  Ta = 0,
  Ao = 0.05,
  Bo = 10,
  zo = 0.04,
  jo = 0.15,
  Jt = new nr(),
  Aa = new $(),
  Eo = new $(0, -1, 0),
  ie = new $();
function Ba(e, ...t) {
  for (const n of t) {
    const a = e.find((i) => i.name === n);
    if (a) return a;
  }
  for (const n of t) {
    const a = n.toLowerCase(),
      i = e.find((l) => l.name.toLowerCase() === a);
    if (i) return i;
  }
  return null;
}
function Co({ mapMeshes: e }) {
  const t = R((M) => M.selectedCharacter),
    n = R((M) => M.characterName),
    a = Po[t ?? "warrior"],
    i = z.useRef(null),
    { scene: l, animations: s } = We(a),
    r = z.useMemo(() => {
      const M = Ct(l);
      return (
        M.traverse((w) => {
          if (w.isMesh) {
            const f = w,
              y = Array.isArray(f.material) ? f.material : [f.material];
            for (const x of y)
              if (x.isMeshStandardMaterial) {
                const b = x;
                ((b.metalness = Math.min(b.metalness, 0.1)),
                  (b.roughness = Math.max(b.roughness, 0.6)),
                  (b.emissive = new nt(2236962)),
                  (b.emissiveIntensity = 0.3),
                  (b.needsUpdate = !0));
              }
          }
        }),
        M
      );
    }, [l]),
    c = z.useRef(null),
    g = z.useRef(null),
    u = z.useRef("idle"),
    p = z.useRef(null),
    m = z.useRef(null);
  (z.useEffect(() => {
    if (!i.current) return;
    const M = new hn(i.current);
    c.current = M;
    const w = Ba(s, "general wait", "wait", "idle"),
      f = Ba(s, "general run", "run", "general walk", "walk");
    if (((p.current = w), (m.current = f), w)) {
      const y = M.clipAction(w);
      (y.setLoop(xt, 1 / 0), y.play(), (g.current = y));
    }
    return () => {
      (M.stopAllAction(), i.current && M.uncacheRoot(i.current));
    };
  }, [s]),
    z.useEffect(
      () =>
        re.subscribe((w) => {
          const f = w.movementState;
          if (f === u.current) return;
          u.current = f;
          const y = c.current;
          if (!y) return;
          const x = f === "running" ? m.current : p.current;
          if (!x) return;
          const b = y.clipAction(x),
            v = g.current,
            B = w.movSpeed / 100;
          ((b.timeScale = f === "running" ? B : 1),
            b.reset(),
            b.setLoop(xt, 1 / 0),
            v && v !== b && v.crossFadeTo(b, jo, !0),
            b.play(),
            (g.current = b));
        }),
      [s],
    ),
    z.useEffect(() => {
      for (const M of e) M.geometry.boundsTree || M.geometry.computeBoundsTree();
    }, [e]));
  const h = Mo(),
    S = (M, w) => {
      (Aa.set(M, 50, w), Jt.set(Aa, Eo), (Jt.far = 100), (Jt.firstHitOnly = !1));
      const f = Jt.intersectObjects(e, !1);
      if (f.length === 0) return Ta;
      const y = re.getState().position.y;
      let x = Ta,
        b = 1 / 0;
      for (const v of f) {
        const B = v.point.y;
        if (B <= y + 0.15) {
          const _ = Math.abs(B - y);
          _ < b && ((b = _), (x = B));
        }
      }
      return (b === 1 / 0 && (x = f[f.length - 1].point.y), x);
    };
  return (
    _e((M, w) => {
      const f = re.getState(),
        { position: y, moveTarget: x, movSpeed: b } = f,
        v = yr(b);
      let B = !1;
      ie.set(0, 0, 0);
      const { w: _, a: T, s: j, d: A } = h.current;
      if (_ || T || j || A) {
        x && re.setState({ moveTarget: null });
        const k = f.cameraAzimuth;
        (_ && ((ie.x -= Math.sin(k)), (ie.z -= Math.cos(k))),
          j && ((ie.x += Math.sin(k)), (ie.z += Math.cos(k))),
          T && ((ie.x += Math.sin(k - Math.PI / 2)), (ie.z += Math.cos(k - Math.PI / 2))),
          A && ((ie.x += Math.sin(k + Math.PI / 2)), (ie.z += Math.cos(k + Math.PI / 2))),
          ie.lengthSq() > 0 && (ie.normalize(), (B = !0)));
      } else
        x &&
          (ie.set(x.x - y.x, 0, x.z - y.z),
          ie.length() < Ao ? re.setState({ moveTarget: null }) : (ie.normalize(), (B = !0)));
      if (B) {
        let k = y.x + ie.x * v * w,
          P = y.z + ie.z * v * w;
        const I = _o(k, P);
        if (((k = I.x), (P = I.z), S(k, P) <= zn)) {
          const ve = S(k, y.z),
            Ie = S(y.x, P);
          ve > zn ? (P = y.z) : Ie > zn ? (k = y.x) : ((k = y.x), (P = y.z));
        }
        ((y.x = k), (y.z = P));
        const q = S(y.x, y.z) - y.y;
        q > 0 || Math.abs(q) < zo ? (y.y += q * (1 - Math.exp(-12 * w))) : (y.y += q * (1 - Math.exp(-6 * w)));
        let ae = Math.atan2(ie.x, ie.z) - f.rotation;
        for (; ae > Math.PI; ) ae -= Math.PI * 2;
        for (; ae < -Math.PI; ) ae += Math.PI * 2;
        ((f.rotation += ae * Math.min(1, Bo * w)),
          f.movementState !== "running" && re.setState({ movementState: "running" }));
      } else f.movementState !== "idle" && re.setState({ movementState: "idle" });
      (g.current && u.current === "running" && (g.current.timeScale = b / 100),
        c.current?.update(w),
        i.current && (i.current.position.set(y.x, y.y, y.z), (i.current.rotation.y = f.rotation)));
      const E = R.getState();
      if (E.interactionPos) {
        const k = y.x - E.interactionPos[0],
          P = y.z - E.interactionPos[2],
          I = k * k + P * P,
          N = 0.3 * 0.3;
        I > N &&
          (E.npcWindowId &&
            E.npcWindowId !== "system" &&
            E.npcWindowId !== "wheel" &&
            E.npcWindowId !== "calendar" &&
            E.closeNpcWindow(),
          E.target && E.setTarget(null),
          R.setState({ interactionPos: null }));
      }
    }),
    z.useEffect(() => {
      if (e.length === 0) return;
      const M = re.getState().position;
      M.y = S(M.x, M.z);
    }, [e]),
    o.jsxs("group", {
      ref: i,
      children: [
        o.jsx("group", { scale: To, children: o.jsx("primitive", { object: r }) }),
        o.jsx(mn, {
          position: [0, ko, 0],
          center: !0,
          distanceFactor: 0.5,
          style: { pointerEvents: "none", zIndex: 1 },
          zIndexRange: [1, 1],
          children: o.jsx("div", {
            style: {
              color: "#FFE066",
              fontSize: "11px",
              fontWeight: "bold",
              fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
              textShadow: "1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000",
              whiteSpace: "nowrap",
              textAlign: "center",
              userSelect: "none",
            },
            children: n,
          }),
        }),
      ],
    })
  );
}
const Ro = 0.2,
  Io = Math.PI / 2.5,
  Do = 0.15,
  $o = 4,
  za = 0.003,
  ja = 0.15,
  Lo = 0.015,
  Ea = new $();
function qo() {
  const { camera: e, gl: t } = Zn(),
    n = z.useRef(0),
    a = z.useRef(Math.PI / 4),
    i = z.useRef(1),
    l = z.useRef(!1);
  return (
    z.useEffect(() => {
      const s = t.domElement,
        r = (c) => c.preventDefault();
      return (s.addEventListener("contextmenu", r), () => s.removeEventListener("contextmenu", r));
    }, [t]),
    z.useEffect(() => {
      const s = t.domElement,
        r = (p) => {
          p.button === 2 && ((l.current = !0), (s.style.cursor = "url('/ui/cursor/camera_rotate.png') 16 16, grab"));
        },
        c = (p) => {
          p.button === 2 && ((l.current = !1), (s.style.cursor = "url('/ui/cursor/default.png'), auto"));
        },
        g = (p) => {
          l.current && ((n.current -= p.movementX * za), (a.current = sa.clamp(a.current - p.movementY * za, Ro, Io)));
        },
        u = (p) => {
          p.preventDefault();
          const m = p.deltaY > 0 ? ja : -ja;
          i.current = sa.clamp(i.current + m, Do, $o);
        };
      return (
        s.addEventListener("mousedown", r),
        window.addEventListener("mouseup", c),
        window.addEventListener("mousemove", g),
        s.addEventListener("wheel", u, { passive: !1 }),
        () => {
          (s.removeEventListener("mousedown", r),
            window.removeEventListener("mouseup", c),
            window.removeEventListener("mousemove", g),
            s.removeEventListener("wheel", u));
        }
      );
    }, [t]),
    _e((s, r) => {
      const { position: c } = re.getState(),
        g = i.current,
        u = a.current,
        p = n.current,
        m = Math.sin(u),
        h = Math.cos(u),
        S = Math.sin(p),
        M = Math.cos(p);
      Ea.set(c.x + g * m * S, c.y + g * h, c.z + g * m * M);
      const w = 1 - Math.exp(-8 * r);
      (e.position.lerp(Ea, w), e.lookAt(c.x, c.y + Lo, c.z), (re.getState().cameraAzimuth = p));
    }),
    null
  );
}
const No = 0.25,
  Tt = 0.015,
  Ko = 0.07,
  Oo = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  Fo = `
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center) * 2.0;

    // Soft circular glow
    float glow = exp(-dist * dist * 4.0);

    // Star/cross burst (4 rays)
    float angle = atan(center.y, center.x);
    float rays = pow(abs(cos(angle * 2.0)), 12.0) * exp(-dist * 1.5);

    // Additional 4 rays rotated 45°
    float rays2 = pow(abs(cos(angle * 2.0 + 0.785)), 16.0) * exp(-dist * 2.0) * 0.5;

    // Outer ring
    float ring = smoothstep(0.75, 0.85, dist) * smoothstep(1.0, 0.92, dist) * 0.6;

    float alpha = (glow + rays + rays2 + ring) * uOpacity;
    vec3 color = vec3(1.0, 1.0, 0.95); // slightly warm white

    gl_FragColor = vec4(color, alpha);
  }
`;
function Go() {
  const e = z.useRef(null),
    t = z.useRef(null),
    n = z.useRef(null),
    a = z.useRef(!1),
    i = z.useRef(0),
    l = z.useRef(null);
  return (
    _e((s, r) => {
      const c = re.getState().moveTarget;
      if (
        !e.current ||
        !t.current ||
        !n.current ||
        (c &&
          (!l.current || c.x !== l.current.x || c.z !== l.current.z) &&
          ((l.current = c.clone()), e.current.position.set(c.x, c.y + 0.03, c.z), (i.current = 0), (a.current = !0)),
        !a.current)
      )
        return;
      i.current += r;
      const g = i.current / No;
      if (g >= 1) {
        ((a.current = !1), (t.current.uniforms.uOpacity.value = 0));
        return;
      }
      const u = Math.pow(1 - g, 2) * 1.5;
      t.current.uniforms.uOpacity.value = u;
      const p = Tt + (Ko - Tt) * Math.pow(g, 0.5);
      n.current.scale.setScalar(p / Tt);
    }),
    o.jsx("group", {
      ref: e,
      children: o.jsxs("mesh", {
        ref: n,
        rotation: [-Math.PI / 2, 0, 0],
        children: [
          o.jsx("planeGeometry", { args: [Tt * 2, Tt * 2] }),
          o.jsx("shaderMaterial", {
            ref: t,
            vertexShader: Oo,
            fragmentShader: Fo,
            uniforms: { uOpacity: { value: 0 } },
            transparent: !0,
            side: Ve,
            depthWrite: !1,
            depthTest: !1,
            blending: zi,
          }),
        ],
      }),
    })
  );
}
const Qt = 14,
  Ho = 350,
  be = 512,
  Uo = `
  out vec2 vUv;
  out vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  Vo = `
  precision highp float;
  precision highp sampler2DArray;

  uniform sampler2DArray uDetailArray;
  uniform sampler2D uBlendPack0;
  uniform sampler2D uBlendPack1;
  uniform sampler2D uBlendPack2;
  uniform sampler2D uBlendPack3;
  uniform float uTileScale;

  in vec2 vUv;
  in vec3 vNormal;
  out vec4 fragColor;

  void main() {
    vec2 tiledUv = vUv * uTileScale;

    // Sample blend weights from packed RGBA textures
    vec4 b0 = texture(uBlendPack0, vUv);
    vec4 b1 = texture(uBlendPack1, vUv);
    vec4 b2 = texture(uBlendPack2, vUv);
    vec4 b3 = texture(uBlendPack3, vUv);

    // Base layer (layer 0)
    vec3 color = texture(uDetailArray, vec3(tiledUv, 0.0)).rgb;

    // Mix chain: result = mix(detail, previous, blendWeight)
    // blend=0 → current detail, blend=1 → previous result
    color = mix(texture(uDetailArray, vec3(tiledUv, 1.0)).rgb, color, b0.r);
    color = mix(texture(uDetailArray, vec3(tiledUv, 2.0)).rgb, color, b0.g);
    color = mix(texture(uDetailArray, vec3(tiledUv, 3.0)).rgb, color, b0.b);
    color = mix(texture(uDetailArray, vec3(tiledUv, 4.0)).rgb, color, b0.a);
    color = mix(texture(uDetailArray, vec3(tiledUv, 5.0)).rgb, color, b1.r);
    color = mix(texture(uDetailArray, vec3(tiledUv, 6.0)).rgb, color, b1.g);
    color = mix(texture(uDetailArray, vec3(tiledUv, 7.0)).rgb, color, b1.b);
    color = mix(texture(uDetailArray, vec3(tiledUv, 8.0)).rgb, color, b1.a);
    color = mix(texture(uDetailArray, vec3(tiledUv, 9.0)).rgb, color, b2.r);
    color = mix(texture(uDetailArray, vec3(tiledUv, 10.0)).rgb, color, b2.g);
    color = mix(texture(uDetailArray, vec3(tiledUv, 11.0)).rgb, color, b2.b);
    color = mix(texture(uDetailArray, vec3(tiledUv, 12.0)).rgb, color, b2.a);
    color = mix(texture(uDetailArray, vec3(tiledUv, 13.0)).rgb, color, b3.r);

    // Simple directional lighting
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
    float diff = max(dot(vNormal, lightDir), 0.0);
    color *= 0.4 + diff * 0.6;

    fragColor = vec4(color, 1.0);
  }
`;
function Yo(e) {
  const { gl: t } = Zn(),
    n = z.useRef(null);
  z.useEffect(() => {
    let a = null,
      i = 0;
    if (
      (e.traverse((g) => {
        if (g.isMesh) {
          const u = g,
            p = u.geometry.getAttribute("position")?.count ?? 0;
          p > i && ((i = p), (a = u));
        }
      }),
      !a)
    )
      return;
    const l = a,
      s = new ar(),
      r = (g, u = !1) =>
        new Promise((p) => {
          s.load(g, (m) => {
            (u && ((m.wrapS = Rt), (m.wrapT = Rt)), (m.minFilter = Dn), (m.magFilter = $n));
            const h = t.capabilities.getMaxAnisotropy();
            ((m.anisotropy = h), p(m));
          });
        });
    return (
      (async () => {
        const g = [];
        for (let y = 0; y < Qt; y++) g.push(r(`/textures/terrain/detail_${y}.jpg`, !0));
        const u = [
            r("/textures/terrain/blend_pack_0.png"),
            r("/textures/terrain/blend_pack_1.png"),
            r("/textures/terrain/blend_pack_2.png"),
            r("/textures/terrain/blend_pack_3.png"),
          ],
          [p, m] = await Promise.all([Promise.all(g), Promise.all(u)]),
          h = document.createElement("canvas");
        ((h.width = be), (h.height = be));
        const S = h.getContext("2d"),
          M = new Uint8Array(be * be * 4 * Qt);
        for (let y = 0; y < Qt; y++) {
          const x = p[y],
            b = x.image;
          (S.clearRect(0, 0, be, be), S.drawImage(b, 0, 0, be, be));
          const v = S.getImageData(0, 0, be, be),
            B = y * be * be * 4;
          (M.set(v.data, B), x.dispose());
        }
        const w = new ir(M, be, be, Qt);
        ((w.format = rr),
          (w.type = or),
          (w.minFilter = Dn),
          (w.magFilter = $n),
          (w.wrapS = Rt),
          (w.wrapT = Rt),
          (w.generateMipmaps = !0),
          (w.anisotropy = t.capabilities.getMaxAnisotropy()),
          (w.needsUpdate = !0));
        const f = new sr({
          vertexShader: Uo,
          fragmentShader: Vo,
          uniforms: {
            uDetailArray: { value: w },
            uBlendPack0: { value: m[0] },
            uBlendPack1: { value: m[1] },
            uBlendPack2: { value: m[2] },
            uBlendPack3: { value: m[3] },
            uTileScale: { value: Ho },
          },
          glslVersion: lr,
        });
        ((n.current = f), a && (l.material = f));
      })().catch(() => {}),
      () => {
        n.current && n.current.dispose();
      }
    );
  }, [e, t]);
}
const Wo = [
    {
      id: "arms",
      name: "Silahçı",
      type: "shop",
      position: [-2.03, 15.34, -0.99],
      rotation: -Math.PI * 0.3,
      modelPath: "/models/npc/arms.glb",
      scale: 0.0285,
    },
    {
      id: "blacksmith",
      name: "Demirci",
      type: "shop",
      position: [-2.79, 15.34, 0.86],
      rotation: Math.PI * 1.3,
      modelPath: "/models/npc/blacksmith.glb",
      scale: 0.0285,
    },
    {
      id: "goods",
      name: "Satıcı",
      type: "shop",
      position: [-3, 15.34, 0.82],
      rotation: Math.PI * 1,
      modelPath: "/models/npc/goods.glb",
      scale: 0.0285,
    },
    {
      id: "hotel_grandma",
      name: "Yaşlı Kadın",
      type: "quest",
      position: [-2.27, 15.34, 0.29],
      rotation: Math.PI * 1.2,
      modelPath: "/models/npc/hotel_grandma.glb",
      scale: 0.0285,
    },
    {
      id: "baby_and_mom",
      name: "Ah-Yu",
      type: "quest",
      position: [-3.11, 15.34, -1.54],
      rotation: -Math.PI * 0.3,
      modelPath: "/models/npc/baby_and_mom.glb",
      scale: 0.0285,
    },
    {
      id: "auntie",
      name: "Aranyo",
      type: "quest",
      position: [-3.66, 15.31, -2.04],
      rotation: -Math.PI * 0,
      modelPath: "/models/npc/auntie.glb",
      scale: 0.0285,
    },
    {
      id: "defence",
      name: "Zırh Satıcısı",
      type: "shop",
      position: [-2.64, 15.34, -1.44],
      rotation: -Math.PI * 0,
      modelPath: "/models/npc/defence.glb",
      scale: 0.0285,
    },
    {
      id: "storekeeper",
      name: "Depocu",
      type: "storage",
      position: [-4.47, 15.34, -1.98],
      rotation: -Math.PI * 1.5,
      modelPath: "/models/npc/hotel_grandfa.glb",
      scale: 0.0285,
    },
    {
      id: "woodcutter",
      name: "Deokbae",
      type: "shop",
      position: [-4.81, 15.34, -1.53],
      rotation: -Math.PI * 1.5,
      modelPath: "/models/npc/woodcutter.glb",
      scale: 0.0285,
    },
    {
      id: "timid_boy",
      name: "Seyis",
      type: "misc",
      position: [-2.71, 15.34, 1.73],
      rotation: Math.PI * 0.5,
      modelPath: "/models/npc/sinsu_guard_spear.glb",
      scale: 0.0285,
    },
    {
      id: "captain",
      name: "Captain",
      type: "quest",
      position: [-4.85, 15.38, -0.31],
      rotation: Math.PI * 0.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
    },
    {
      id: "guardian",
      name: "Guardian",
      type: "quest",
      position: [-3.05, 15.37, -0.32],
      rotation: Math.PI * 0.5,
      modelPath: "/models/npc/gangyo_patrol_spear.glb",
      scale: 0.0285,
    },
    {
      id: "uriel",
      name: "Uriel",
      type: "quest",
      position: [-2.4, 15.34, 1.03],
      rotation: Math.PI * 1.2,
      modelPath: "/models/npc/plant_researcher.glb",
      scale: 0.0285,
    },
    {
      id: "horse_1",
      name: "At",
      type: "misc",
      position: [-3, 15.34, 1.75],
      rotation: Math.PI * 0.3,
      modelPath: "/models/npc/horse_event1.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "horse_2",
      name: "At",
      type: "misc",
      position: [-3.08, 15.34, 1.67],
      rotation: -Math.PI * 0.2,
      modelPath: "/models/npc/horse_event1.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "horse_3",
      name: "At",
      type: "misc",
      position: [-2.92, 15.34, 1.83],
      rotation: Math.PI * 0.7,
      modelPath: "/models/npc/horse_event1.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_1",
      name: "Muhafız",
      type: "misc",
      position: [-1.7, 15.34, -0.67],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_3",
      name: "Muhafız",
      type: "misc",
      position: [-1.7, 15.34, -0.55],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_2",
      name: "Muhafız",
      type: "misc",
      position: [-1.7, 15.34, -0.61],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_4",
      name: "Muhafız",
      type: "misc",
      position: [-1.7, 15.34, -0.49],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_5",
      name: "Muhafız",
      type: "misc",
      position: [-1.71, 15.34, -0.23],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_6",
      name: "Muhafız",
      type: "misc",
      position: [-1.71, 15.34, -0.17],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_7",
      name: "Muhafız",
      type: "misc",
      position: [-1.71, 15.34, -0.11],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "guard_8",
      name: "Muhafız",
      type: "misc",
      position: [-1.71, 15.34, -0.05],
      rotation: Math.PI * 1.5,
      modelPath: "/models/npc/guard_leader.glb",
      scale: 0.0285,
      hideLabel: !0,
    },
    {
      id: "konfucyus",
      name: "Konfüçyüs",
      type: "quest",
      position: [-3.18, 15.34, 0.84],
      rotation: Math.PI * 1,
      modelPath: "/models/npc/old_master_m.glb",
      scale: 0.0285,
    },
  ],
  qi = { shop: "#e8a030", quest: "#30a0e8", teleport: "#a030e8", storage: "#30e860", misc: "#a0a0a0" },
  Ni = {
    "ui.help": { tr: "Yardım", en: "Help" },
    "ui.character_change": { tr: "Karakter Seçimi", en: "Character Select" },
    "ui.game_end": { tr: "Oyun Sonu", en: "Quit Game" },
    "ui.cancel": { tr: "İptal", en: "Cancel" },
    "ui.confirm": { tr: "Onayla", en: "Confirm" },
    "ui.characterName": { tr: "Karakter İsmi", en: "Character Name" },
    "ui.characterNamePrompt": { tr: "Hesabınızın nicki ne olsun?", en: "What should your nickname be?" },
    "ui.close": { tr: "Kapat", en: "Close" },
    "ui.say": { tr: "Söyle:", en: "Say:" },
    "ui.you": { tr: "Sen", en: "You" },
    "ui.website": { tr: "Web Sitesi", en: "Website" },
    "ui.atlas_title": { tr: "Genel Görünüm Haritası", en: "Atlas Map" },
    "landing.kicker": { tr: "Tarayıcıdan Oyuna Giriş", en: "Enter The Game From Your Browser" },
    "landing.subtitle": {
      tr: "Giriş ekranı hazır. Buradan oyuna girip sahne, boss ve item sistemini birlikte geliştireceğiz.",
      en: "The entry screen is ready. From here you can enter the game and continue iterating on scenes, bosses, and item systems.",
    },
    "landing.enter": { tr: "Oyuna Gir", en: "Enter Game" },
    "status.haste": { tr: "Hız Artışı", en: "Speed Boost" },
    "status.attack": { tr: "Saldırı Gücü", en: "Attack Power" },
    "status.defense": { tr: "Savunma", en: "Defense" },
    "chat.normal": { tr: "", en: "" },
    "chat.call": { tr: "[Çağrı]", en: "[Shout]" },
    "chat.group": { tr: "[Grup]", en: "[Party]" },
    "chat.guild": { tr: "[Lonca]", en: "[Guild]" },
    "chat.system": { tr: "[Sistem]", en: "[System]" },
    "chat.welcome": { tr: "Anka2 dünyasına hoş geldiniz!", en: "Welcome to Anka2!" },
    "chat.adventure": { tr: "Yeni bir macera başlıyor...", en: "A new adventure begins..." },
    "chat.season": {
      tr: "Anka2 Sezon 2 Açılışı 27 Martta sizlerle!",
      en: "Turkmmo Best Studio Opening on March 27th!",
    },
    "chat.browser": {
      tr: "Anka2ye tarayıcıdan girecek kadar gelişmiş bir server!",
      en: "A server advanced enough to play from your browser!",
    },
    "npc.shop": { tr: "Dükkan", en: "Shop" },
    "npc.quest": { tr: "Görev", en: "Quest" },
    "npc.teleport": { tr: "Işınlanma", en: "Teleport" },
    "npc.storage": { tr: "Depo", en: "Storage" },
    "npc.misc": { tr: "", en: "" },
    "taskbar.move_attack": { tr: "Hareket+Saldırı", en: "Move+Attack" },
    "taskbar.camera": { tr: "Kamera", en: "Camera" },
    "taskbar.prev_page": { tr: "Önceki sayfa", en: "Previous page" },
    "taskbar.next_page": { tr: "Sonraki sayfa", en: "Next page" },
    "minimap.map": { tr: "Harita (M)", en: "Map (M)" },
    "minimap.combat": { tr: "Mücadele Sistemi", en: "Combat System" },
    "minimap.battle_ticket": { tr: "Savaş Bileti", en: "Battle Ticket" },
    "minimap.ranking": { tr: "Sıralama", en: "Ranking" },
    "minimap.biologist": { tr: "Biyolog", en: "Biologist" },
    "char.info": { tr: "Karakter Bilgisi", en: "Character Info" },
    "char.tab_status": { tr: "Durum", en: "Status" },
    "char.tab_skills": { tr: "Yetenekler", en: "Skills" },
    "char.tab_emotions": { tr: "Duygular", en: "Emotions" },
    "char.tab_quests": { tr: "Görevler", en: "Quests" },
    "char.attack": { tr: "Saldırı", en: "Attack" },
    "char.defense": { tr: "Savunma", en: "Defense" },
    "char.level": { tr: "Seviye", en: "Level" },
    "char.str": { tr: "Güç (STR)", en: "Strength (STR)" },
    "char.dex": { tr: "Çeviklik (DEX)", en: "Dexterity (DEX)" },
    "char.con": { tr: "Dayanıklılık (CON)", en: "Endurance (CON)" },
    "char.int": { tr: "Zeka (INT)", en: "Intelligence (INT)" },
    "char.attack_speed": { tr: "Saldırı Hızı", en: "Attack Speed" },
    "char.move_speed": { tr: "Hareket Hızı", en: "Move Speed" },
    "char.magic_attack": { tr: "Büyü Saldırı", en: "Magic Attack" },
    "char.magic_defense": { tr: "Büyü Savunma", en: "Magic Defense" },
    "char.unallocated": { tr: "Dağıtılmamış puan: ", en: "Unallocated points: " },
    "char.skills_na": { tr: "Yetenekler henüz mevcut değil", en: "Skills not yet available" },
    "char.emotions_na": { tr: "Duygular henüz mevcut değil", en: "Emotions not yet available" },
    "char.no_quests": { tr: "Görev bulunmuyor", en: "No quests found" },
    "inv.title": { tr: "Envanter", en: "Inventory" },
    "inv.weapon": { tr: "Silah", en: "Weapon" },
    "inv.helmet": { tr: "Kask", en: "Helmet" },
    "inv.arrow": { tr: "Ok", en: "Arrow" },
    "inv.talisman": { tr: "Tılsım", en: "Talisman" },
    "inv.armor": { tr: "Zırh", en: "Armor" },
    "inv.earring": { tr: "Küpe", en: "Earring" },
    "inv.bracelet": { tr: "Bilezik", en: "Bracelet" },
    "inv.necklace": { tr: "Kolye", en: "Necklace" },
    "inv.special": { tr: "Özel", en: "Special" },
    "inv.shield": { tr: "Kalkan", en: "Shield" },
    "inv.shoes": { tr: "Ayakkabı", en: "Shoes" },
    "minimap.open": { tr: "Minimap Aç", en: "Open Minimap" },
    "minimap.close": { tr: "Minimap Kapat", en: "Close Minimap" },
    "minimap.zoom_in": { tr: "Yakınlaştır (+)", en: "Zoom In (+)" },
    "minimap.zoom_out": { tr: "Uzaklaştır (-)", en: "Zoom Out (-)" },
    "minimap.channel": { tr: "Kanal 1", en: "Channel 1" },
    "loading.starting": { tr: "Başlatılıyor...", en: "Starting..." },
    "loading.models": { tr: "Modeller yükleniyor...", en: "Loading models..." },
    "loading.images": { tr: "Görseller yükleniyor...", en: "Loading images..." },
    "loading.ui_preparing": { tr: "Arayüz hazırlanıyor...", en: "Preparing interface..." },
    "loading.ready": { tr: "Hazır!", en: "Ready!" },
    "tip.1": {
      tr: "Metin Taşlarını kırarak değerli eşyalar elde edebilirsiniz.",
      en: "You can obtain valuable items by destroying Metin Stones.",
    },
    "tip.2": {
      tr: "Karakter seviyenizi yükselterek yeni beceriler açabilirsiniz.",
      en: "Level up your character to unlock new skills.",
    },
    "tip.3": {
      tr: "Loncaya katılarak diğer oyuncularla birlikte savaşabilirsiniz.",
      en: "Join a guild to fight alongside other players.",
    },
    "tip.4": {
      tr: "Ekipmanlarınızı geliştirerek daha güçlü olabilirsiniz.",
      en: "Upgrade your equipment to become stronger.",
    },
    "tip.5": {
      tr: "Boss canavarları yenerek nadir eşyalar elde edebilirsiniz.",
      en: "Defeat boss monsters to obtain rare items.",
    },
    "tip.6": {
      tr: "Shinsoo, Chunjo ve Jinno arasında savaş hiç bitmez.",
      en: "The war between Shinsoo, Chunjo, and Jinno never truly ends.",
    },
    "select.warrior": { tr: "Savaşçı", en: "Warrior" },
    "select.ninja": { tr: "Ninja", en: "Ninja" },
    "select.sura": { tr: "Sura", en: "Sura" },
    "select.shaman": { tr: "Şaman", en: "Shaman" },
    "select.warrior_desc": {
      tr: "Savaşçılar güçlü fiziksel yapılarıyla tanınır. Ağır zırhlar giyerek düşmanlarına karşı sert darbeler indirirler. İki elci kılıç veya kalkan ile savaşabilirler. Yakın dövüşte en güçlü sınıftır.",
      en: "Warriors are known for their powerful physique. They wear heavy armor and deliver devastating blows. They can fight with two-handed swords or shields. The strongest class in melee combat.",
    },
    "select.ninja_desc": {
      tr: "Ninjalar her zaman sessizce suikast düzenleyen, profesyonel katillerdir. Çeviklik ve tekrarlanan vuruşları için hafif zırhlar giyerler. Hançer veya uzak dövüşlerde ok ve yayı ustalıkla kullanabilirler.",
      en: "Ninjas are professional assassins who always strike silently. They wear light armor for agility and repeated strikes. They can skillfully use daggers or bows for ranged combat.",
    },
    "select.sura_desc": {
      tr: "Suralar kollarında büyüyen şeytan tohumuyla karanlık güçler elde etmiştir. Kılıçlarını karanlık büyülerle birleştirerek ölümcül saldırılar gerçekleştirebilirler.",
      en: "Suras have gained dark powers from the devil seed growing in their arms. They can combine their swords with dark magic to deliver deadly attacks.",
    },
    "select.shaman_desc": {
      tr: "Şamanlar uzun ve yoğun çalışmalardan sonra bilgelik ile ödüllendirilmişlerdir. Şifa güçleri ve güçlendirme büyüleriyle müttefiklerini desteklerler.",
      en: "Shamans have been rewarded with wisdom after long and intensive training. They support their allies with healing powers and buff spells.",
    },
    "settings.language": { tr: "Dil", en: "Language" },
    "settings.turkish": { tr: "Türkçe", en: "Turkish" },
    "settings.english": { tr: "İngilizce", en: "English" },
    "select.empire_shinsoo": { tr: "Shinsoo Krallığı", en: "Shinsoo Kingdom" },
    "select.level_short": { tr: "Sv.1", en: "Lv.1" },
    "npc.name.blacksmith": { tr: "Demirci", en: "Blacksmith" },
    "npc.name.goods": { tr: "Satıcı", en: "Merchant" },
    "npc.name.defence": { tr: "Zırh Satıcısı", en: "Armor Dealer" },
    "npc.name.arms": { tr: "Silahçı", en: "Weapon Dealer" },
    "npc.name.konfucyus": { tr: "Konfüçyüs", en: "Confucius" },
    "npc.name.hotel_grandma": { tr: "Yaşlı Kadın", en: "Old Lady" },
    "npc.name.storage": { tr: "Depocu", en: "Storekeeper" },
    "npc.name.seyis": { tr: "Seyis", en: "Stable Keeper" },
    "npc.name.guard": { tr: "Muhafız", en: "Guard" },
    "npc.name.horse": { tr: "At", en: "Horse" },
    "npc.name.guardian": { tr: "Guardian", en: "Guardian" },
    "npc.name.uriel": { tr: "Uriel", en: "Uriel" },
    "stone.8001": { tr: "Üzüntü Metini", en: "Metin of Sorrow" },
    "stone.8002": { tr: "Dövüş Metini", en: "Metin of Combat" },
    "stone.8003": { tr: "Savaş Metini", en: "Metin of Battle" },
    "stone.8004": { tr: "Hırs Metini", en: "Metin of Greed" },
    "stone.8005": { tr: "Siyah Metini", en: "Metin of Black" },
    "stone.8006": { tr: "Karanlık Metini", en: "Metin of Darkness" },
    "stone.8007": { tr: "Kıskançlık Metini", en: "Metin of Jealousy" },
    "stone.8008": { tr: "Ruh Metini", en: "Metin of Soul" },
    "stone.8009": { tr: "Gölge Metini", en: "Metin of Shadow" },
    "stone.8010": { tr: "Dayanıklılık Metini", en: "Metin of Toughness" },
    "stone.8011": { tr: "Şeytan Metini", en: "Metin of Devil" },
    "stone.8013": { tr: "Ölüm Metini", en: "Metin of Death" },
    "stone.8014": { tr: "Katil Metini", en: "Metin of Murder" },
    "boss.orc_lord": { tr: "Ork Reisi", en: "Orc Chief" },
    "boss.smhtower_king": { tr: "Lucifer", en: "Lucifer" },
    "boss.spider_queen": { tr: "Kraliçe Örümcek", en: "Spider Queen" },
    "boss.skeleton_king": { tr: "İskelet Kral", en: "Skeleton King" },
    "boss.blue_dragon": { tr: "Blue Dragon", en: "Blue Dragon" },
    "boss.jotun_thrym": { tr: "Jotun Thrym", en: "Jotun Thrym" },
  },
  Ki = {
    "ui.help": {
      it: "Aiuto",
      de: "Hilfe",
      el: "Βοήθεια",
      fr: "Aide",
      hu: "Súgó",
      ru: "Помощь",
      ro: "Ajutor",
      pl: "Pomoc",
      pt: "Ajuda",
      nl: "Help",
      cs: "Nápověda",
      da: "Hjælp",
      es: "Ayuda",
    },
    "ui.character_change": {
      it: "Selezione personaggio",
      de: "Charakterauswahl",
      el: "Επιλογή χαρακτήρα",
      fr: "Sélection personnage",
      hu: "Karakterválasztás",
      ru: "Выбор персонажа",
      ro: "Selectare caracter",
      pl: "Wybór postaci",
      pt: "Seleção de personagem",
      nl: "Karakterselectie",
      cs: "Výběr postavy",
      da: "Karaktervalg",
      es: "Selección de personaje",
    },
    "ui.game_end": {
      it: "Esci dal gioco",
      de: "Spiel beenden",
      el: "Έξοδος από το παιχνίδι",
      fr: "Quitter le jeu",
      hu: "Játék bezárása",
      ru: "Выйти из игры",
      ro: "Ieșire din joc",
      pl: "Zakończ grę",
      pt: "Sair do jogo",
      nl: "Spel afsluiten",
      cs: "Ukončit hru",
      da: "Afslut spil",
      es: "Salir del juego",
    },
    "ui.cancel": {
      it: "Annulla",
      de: "Abbrechen",
      el: "Ακύρωση",
      fr: "Annuler",
      hu: "Mégse",
      ru: "Отмена",
      ro: "Anulează",
      pl: "Anuluj",
      pt: "Cancelar",
      nl: "Annuleren",
      cs: "Zrušit",
      da: "Annuller",
      es: "Cancelar",
    },
    "ui.confirm": {
      it: "Conferma",
      de: "Bestätigen",
      el: "Επιβεβαίωση",
      fr: "Confirmer",
      hu: "Megerősítés",
      ru: "Подтвердить",
      ro: "Confirmă",
      pl: "Potwierdź",
      pt: "Confirmar",
      nl: "Bevestigen",
      cs: "Potvrdit",
      da: "Bekræft",
      es: "Confirmar",
    },
    "ui.characterName": {
      it: "Nome personaggio",
      de: "Charaktername",
      el: "Όνομα χαρακτήρα",
      fr: "Nom du personnage",
      hu: "Karakternév",
      ru: "Имя персонажа",
      ro: "Nume personaj",
      pl: "Nazwa postaci",
      pt: "Nome do personagem",
      nl: "Karakternaam",
      cs: "Jméno postavy",
      da: "Karakternavn",
      es: "Nombre del personaje",
    },
    "ui.characterNamePrompt": {
      it: "Come vuoi chiamare il tuo personaggio?",
      de: "Wie soll dein Charakter heißen?",
      el: "Πώς θα ονομάζεται ο χαρακτήρας σου;",
      fr: "Quel sera le nom de votre personnage ?",
      hu: "Mi legyen a karaktered neve?",
      ru: "Как назвать вашего персонажа?",
      ro: "Cum se va numi personajul tău?",
      pl: "Jak ma się nazywać twoja postać?",
      pt: "Como seu personagem deve se chamar?",
      nl: "Hoe moet je personage heten?",
      cs: "Jak se má vaše postava jmenovat?",
      da: "Hvad skal din figur hedde?",
      es: "¿Cómo se llamará tu personaje?",
    },
    "ui.close": {
      it: "Chiudi",
      de: "Schließen",
      el: "Κλείσιμο",
      fr: "Fermer",
      hu: "Bezárás",
      ru: "Закрыть",
      ro: "Închide",
      pl: "Zamknij",
      pt: "Fechar",
      nl: "Sluiten",
      cs: "Zavřít",
      da: "Luk",
      es: "Cerrar",
    },
    "ui.say": {
      it: "Scrivi:",
      de: "Sagen:",
      el: "Πες:",
      fr: "Dire :",
      hu: "Mondd:",
      ru: "Сказать:",
      ro: "Spune:",
      pl: "Powiedz:",
      pt: "Dizer:",
      nl: "Zeg:",
      cs: "Řekni:",
      da: "Sig:",
      es: "Decir:",
    },
    "ui.you": {
      it: "Tu",
      de: "Du",
      el: "Εσύ",
      fr: "Vous",
      hu: "Te",
      ru: "Вы",
      ro: "Tu",
      pl: "Ty",
      pt: "Você",
      nl: "Jij",
      cs: "Ty",
      da: "Dig",
      es: "Tú",
    },
    "ui.website": {
      it: "Sito web",
      de: "Webseite",
      el: "Ιστότοπος",
      fr: "Site web",
      hu: "Weboldal",
      ru: "Сайт",
      ro: "Site web",
      pl: "Strona WWW",
      pt: "Site",
      nl: "Website",
      cs: "Web",
      da: "Hjemmeside",
      es: "Sitio web",
    },
    "ui.atlas_title": {
      it: "Mappa del mondo",
      de: "Atlaskarte",
      el: "Χάρτης Άτλαντα",
      fr: "Carte Atlas",
      hu: "Atlasz térkép",
      ru: "Карта атласа",
      ro: "Hartă Atlas",
      pl: "Mapa atlasu",
      pt: "Mapa Atlas",
      nl: "Atlaskaart",
      cs: "Atlasová mapa",
      da: "Atlas-kort",
      es: "Mapa Atlas",
    },
    "landing.kicker": {
      it: "Entra nel gioco dal browser",
      de: "Betritt das Spiel aus dem Browser",
      el: "Μπες στο παιχνίδι από τον browser",
      fr: "Entrez dans le jeu depuis votre navigateur",
      hu: "Lépj be a játékba böngészőből",
      ru: "Вход в игру из браузера",
      ro: "Intră în joc din browser",
      pl: "Wejdź do gry z przeglądarki",
      pt: "Entre no jogo pelo navegador",
      nl: "Ga via je browser het spel in",
      cs: "Vstup do hry z prohlížeče",
      da: "Gå ind i spillet fra browseren",
      es: "Entra al juego desde el navegador",
    },
    "landing.subtitle": {
      it: "La schermata iniziale è pronta. Da qui entrerai nel gioco e continueremo a sviluppare scene, boss e sistemi item.",
      de: "Der Startbildschirm ist bereit. Von hier aus betrittst du das Spiel und wir entwickeln Szenen, Bosse und Item-Systeme weiter.",
      el: "Η αρχική οθόνη είναι έτοιμη. Από εδώ μπαίνεις στο παιχνίδι και συνεχίζουμε την ανάπτυξη σκηνών, boss και item συστημάτων.",
      fr: "L’écran d’entrée est prêt. Depuis ici vous entrez dans le jeu et nous continuons à développer scènes, boss et systèmes d’objets.",
      hu: "A kezdőképernyő kész. Innen lépsz be a játékba, és tovább fejlesztjük a pályákat, bossokat és item rendszereket.",
      ru: "Стартовый экран готов. Отсюда вы входите в игру, а мы продолжаем развивать сцены, боссов и систему предметов.",
      ro: "Ecranul de intrare este gata. De aici intri în joc și continuăm să dezvoltăm scenele, boșii și sistemele de iteme.",
      pl: "Ekran wejściowy jest gotowy. Stąd wejdziesz do gry, a my będziemy dalej rozwijać sceny, bossy i systemy itemów.",
      pt: "A tela de entrada está pronta. Daqui você entra no jogo e continuamos evoluindo cenas, chefes e sistemas de itens.",
      nl: "Het startscherm is klaar. Vanaf hier ga je het spel in en ontwikkelen we scènes, bosses en itemsystemen verder.",
      cs: "Vstupní obrazovka je připravena. Odtud vstoupíte do hry a budeme dál rozvíjet scény, bossy a item systémy.",
      da: "Startskærmen er klar. Herfra går du ind i spillet, og vi fortsætter med at udvikle scener, bosser og itemsystemer.",
      es: "La pantalla de entrada está lista. Desde aquí entrarás al juego y seguiremos desarrollando escenas, jefes y sistemas de ítems.",
    },
    "landing.enter": {
      it: "Entra nel gioco",
      de: "Spiel betreten",
      el: "Είσοδος στο παιχνίδι",
      fr: "Entrer dans le jeu",
      hu: "Belépés a játékba",
      ru: "Войти в игру",
      ro: "Intră în joc",
      pl: "Wejdź do gry",
      pt: "Entrar no jogo",
      nl: "Spel betreden",
      cs: "Vstoupit do hry",
      da: "Gå ind i spillet",
      es: "Entrar al juego",
    },
    "status.haste": {
      it: "Aumento velocità",
      de: "Tempo-Boost",
      el: "Αύξηση ταχύτητας",
      fr: "Boost de vitesse",
      hu: "Sebességnövelés",
      ru: "Ускорение",
      ro: "Creștere viteză",
      pl: "Wzrost prędkości",
      pt: "Aumento de velocidade",
      nl: "Snelheidsboost",
      cs: "Zvýšení rychlosti",
      da: "Hastighedsboost",
      es: "Aumento de velocidad",
    },
    "status.attack": {
      it: "Potenza attacco",
      de: "Angriffskraft",
      el: "Ισχύς επίθεσης",
      fr: "Puissance d’attaque",
      hu: "Támadóerő",
      ru: "Сила атаки",
      ro: "Putere atac",
      pl: "Siła ataku",
      pt: "Poder de ataque",
      nl: "Aanvalskracht",
      cs: "Síla útoku",
      da: "Angrebskraft",
      es: "Poder de ataque",
    },
    "status.defense": {
      it: "Difesa",
      de: "Verteidigung",
      el: "Άμυνα",
      fr: "Défense",
      hu: "Védelem",
      ru: "Защита",
      ro: "Apărare",
      pl: "Obrona",
      pt: "Defesa",
      nl: "Verdediging",
      cs: "Obrana",
      da: "Forsvar",
      es: "Defensa",
    },
    "chat.call": {
      it: "[Grido]",
      de: "[Ruf]",
      el: "[Φωνή]",
      fr: "[Cri]",
      hu: "[Kiáltás]",
      ru: "[Крик]",
      ro: "[Strigăt]",
      pl: "[Krzyk]",
      pt: "[Grito]",
      nl: "[Roep]",
      cs: "[Křik]",
      da: "[Råb]",
      es: "[Grito]",
    },
    "chat.group": {
      it: "[Gruppo]",
      de: "[Gruppe]",
      el: "[Ομάδα]",
      fr: "[Groupe]",
      hu: "[Csapat]",
      ru: "[Группа]",
      ro: "[Grup]",
      pl: "[Grupa]",
      pt: "[Grupo]",
      nl: "[Groep]",
      cs: "[Skupina]",
      da: "[Gruppe]",
      es: "[Grupo]",
    },
    "chat.guild": {
      it: "[Gilda]",
      de: "[Gilde]",
      el: "[Συντεχνία]",
      fr: "[Guilde]",
      hu: "[Céh]",
      ru: "[Гильдия]",
      ro: "[Breaslă]",
      pl: "[Gildia]",
      pt: "[Guilda]",
      nl: "[Gilde]",
      cs: "[Cech]",
      da: "[Laug]",
      es: "[Gremio]",
    },
    "chat.system": {
      it: "[Sistema]",
      de: "[System]",
      el: "[Σύστημα]",
      fr: "[Système]",
      hu: "[Rendszer]",
      ru: "[Система]",
      ro: "[Sistem]",
      pl: "[System]",
      pt: "[Sistema]",
      nl: "[Systeem]",
      cs: "[Systém]",
      da: "[System]",
      es: "[Sistema]",
    },
    "chat.welcome": {
      it: "Benvenuto nel mondo di Anka2!",
      de: "Willkommen in der Welt von Anka2!",
      el: "Καλώς ήρθες στον κόσμο του Anka2!",
      fr: "Bienvenue dans le monde d’Anka2 !",
      hu: "Üdvözlünk az Anka2 világában!",
      ru: "Добро пожаловать в мир Anka2!",
      ro: "Bine ai venit în lumea Anka2!",
      pl: "Witamy w świecie Anka2!",
      pt: "Bem-vindo ao mundo de Anka2!",
      nl: "Welkom in de wereld van Anka2!",
      cs: "Vítejte ve světě Anka2!",
      da: "Velkommen til Anka2s verden!",
      es: "¡Bienvenido al mundo de Anka2!",
    },
    "chat.adventure": {
      it: "Una nuova avventura ha inizio...",
      de: "Ein neues Abenteuer beginnt...",
      el: "Μια νέα περιπέτεια αρχίζει...",
      fr: "Une nouvelle aventure commence...",
      hu: "Új kaland kezdődik...",
      ru: "Начинается новое приключение...",
      ro: "O nouă aventură începe...",
      pl: "Nowa przygoda się zaczyna...",
      pt: "Uma nova aventura começa...",
      nl: "Een nieuw avontuur begint...",
      cs: "Začíná nové dobrodružství...",
      da: "Et nyt eventyr begynder...",
      es: "Comienza una nueva aventura...",
    },
    "chat.season": {
      it: "La Stagione 2 di Anka2 apre il 27 marzo!",
      de: "Anka2 Saison 2 startet am 27. März!",
      el: "Η 2η σεζόν του Anka2 ανοίγει στις 27 Μαρτίου!",
      fr: "La saison 2 d’Anka2 ouvre le 27 mars !",
      hu: "Az Anka2 2. szezonja március 27-én nyílik!",
      ru: "Сезон 2 Anka2 стартует 27 марта!",
      ro: "Sezonul 2 Anka2 se deschide pe 27 martie!",
      pl: "Sezon 2 Anka2 startuje 27 marca!",
      pt: "A Temporada 2 de Anka2 abre em 27 de março!",
      nl: "Anka2 Seizoen 2 opent op 27 maart!",
      cs: "2. sezóna Anka2 startuje 27. března!",
      da: "Anka2 sæson 2 åbner den 27. marts!",
      es: "¡La Temporada 2 de Anka2 abre el 27 de marzo!",
    },
    "chat.browser": {
      it: "Un server avanzato al punto da giocare dal browser!",
      de: "Ein Server, der sogar direkt im Browser spielbar ist!",
      el: "Ένας server τόσο εξελιγμένος που παίζεται από browser!",
      fr: "Un serveur assez avancé pour jouer depuis votre navigateur !",
      hu: "Egy szerver, ami már böngészőből is játszható!",
      ru: "Сервер настолько продвинутый, что в него можно играть из браузера!",
      ro: "Un server atât de avansat încât poți juca direct din browser!",
      pl: "Serwer tak zaawansowany, że zagrasz nawet z przeglądarki!",
      pt: "Um servidor avançado a ponto de jogar pelo navegador!",
      nl: "Een server die zelfs vanuit je browser speelbaar is!",
      cs: "Server tak pokročilý, že si zahrajete i z prohlížeče!",
      da: "En server så avanceret, at du kan spille fra browseren!",
      es: "¡Un servidor tan avanzado que puedes entrar desde el navegador!",
    },
    "npc.shop": {
      it: "Negozio",
      de: "Shop",
      el: "Κατάστημα",
      fr: "Boutique",
      hu: "Bolt",
      ru: "Магазин",
      ro: "Magazin",
      pl: "Sklep",
      pt: "Loja",
      nl: "Winkel",
      cs: "Obchod",
      da: "Butik",
      es: "Tienda",
    },
    "npc.quest": {
      it: "Missione",
      de: "Quest",
      el: "Αποστολή",
      fr: "Quête",
      hu: "Küldetés",
      ru: "Задание",
      ro: "Misiune",
      pl: "Zadanie",
      pt: "Missão",
      nl: "Queeste",
      cs: "Úkol",
      da: "Mission",
      es: "Misión",
    },
    "npc.teleport": {
      it: "Teletrasporto",
      de: "Teleport",
      el: "Τηλεμεταφορά",
      fr: "Téléportation",
      hu: "Teleport",
      ru: "Телепорт",
      ro: "Teleport",
      pl: "Teleport",
      pt: "Teleporte",
      nl: "Teleport",
      cs: "Teleport",
      da: "Teleport",
      es: "Teletransporte",
    },
    "npc.storage": {
      it: "Magazzino",
      de: "Lager",
      el: "Αποθήκη",
      fr: "Entrepôt",
      hu: "Raktár",
      ru: "Склад",
      ro: "Depozit",
      pl: "Magazyn",
      pt: "Armazém",
      nl: "Opslag",
      cs: "Sklad",
      da: "Lager",
      es: "Almacén",
    },
    "taskbar.move_attack": {
      it: "Movimento+Attacco",
      de: "Bewegung+Angriff",
      el: "Κίνηση+Επίθεση",
      fr: "Déplacement+Attaque",
      hu: "Mozgás+Támadás",
      ru: "Движение+Атака",
      ro: "Mișcare+Atac",
      pl: "Ruch+Atak",
      pt: "Mover+Atacar",
      nl: "Bewegen+Aanval",
      cs: "Pohyb+Útok",
      da: "Bevægelse+Angreb",
      es: "Mover+Atacar",
    },
    "taskbar.camera": {
      it: "Telecamera",
      de: "Kamera",
      el: "Κάμερα",
      fr: "Caméra",
      hu: "Kamera",
      ru: "Камера",
      ro: "Cameră",
      pl: "Kamera",
      pt: "Câmera",
      nl: "Camera",
      cs: "Kamera",
      da: "Kamera",
      es: "Cámara",
    },
    "taskbar.prev_page": {
      it: "Pagina precedente",
      de: "Vorherige Seite",
      el: "Προηγούμενη σελίδα",
      fr: "Page précédente",
      hu: "Előző oldal",
      ru: "Предыдущая страница",
      ro: "Pagina anterioară",
      pl: "Poprzednia strona",
      pt: "Página anterior",
      nl: "Vorige pagina",
      cs: "Předchozí stránka",
      da: "Forrige side",
      es: "Página anterior",
    },
    "taskbar.next_page": {
      it: "Pagina successiva",
      de: "Nächste Seite",
      el: "Επόμενη σελίδα",
      fr: "Page suivante",
      hu: "Következő oldal",
      ru: "Следующая страница",
      ro: "Pagina următoare",
      pl: "Następna strona",
      pt: "Próxima página",
      nl: "Volgende pagina",
      cs: "Další stránka",
      da: "Næste side",
      es: "Página siguiente",
    },
    "minimap.map": {
      it: "Mappa (M)",
      de: "Karte (M)",
      el: "Χάρτης (M)",
      fr: "Carte (M)",
      hu: "Térkép (M)",
      ru: "Карта (M)",
      ro: "Hartă (M)",
      pl: "Mapa (M)",
      pt: "Mapa (M)",
      nl: "Kaart (M)",
      cs: "Mapa (M)",
      da: "Kort (M)",
      es: "Mapa (M)",
    },
    "minimap.combat": {
      it: "Sistema battaglia",
      de: "Kampfsystem",
      el: "Σύστημα μάχης",
      fr: "Système de combat",
      hu: "Harcrendszer",
      ru: "Боевая система",
      ro: "Sistem de luptă",
      pl: "System walki",
      pt: "Sistema de combate",
      nl: "Gevechtssysteem",
      cs: "Bojový systém",
      da: "Kampsystem",
      es: "Sistema de combate",
    },
    "minimap.battle_ticket": {
      it: "Biglietto battaglia",
      de: "Kampfticket",
      el: "Εισιτήριο μάχης",
      fr: "Ticket de combat",
      hu: "Harcjegy",
      ru: "Боевой билет",
      ro: "Bilet de luptă",
      pl: "Bilet walki",
      pt: "Bilhete de batalha",
      nl: "Gevechtsticket",
      cs: "Bojová vstupenka",
      da: "Kampbillet",
      es: "Boleto de batalla",
    },
    "minimap.ranking": {
      it: "Classifica",
      de: "Rangliste",
      el: "Κατάταξη",
      fr: "Classement",
      hu: "Rangsor",
      ru: "Рейтинг",
      ro: "Clasament",
      pl: "Ranking",
      pt: "Ranking",
      nl: "Ranglijst",
      cs: "Žebříček",
      da: "Rangliste",
      es: "Clasificación",
    },
    "minimap.biologist": {
      it: "Biologo",
      de: "Biologe",
      el: "Βιολόγος",
      fr: "Biologiste",
      hu: "Biológus",
      ru: "Биолог",
      ro: "Biolog",
      pl: "Biolog",
      pt: "Biólogo",
      nl: "Bioloog",
      cs: "Biolog",
      da: "Biolog",
      es: "Biólogo",
    },
    "minimap.open": {
      it: "Apri minimappa",
      de: "Minikarte öffnen",
      el: "Άνοιγμα minimap",
      fr: "Ouvrir la mini-carte",
      hu: "Minitérkép megnyitása",
      ru: "Открыть миникарту",
      ro: "Deschide minimapa",
      pl: "Otwórz minimapę",
      pt: "Abrir minimapa",
      nl: "Minimap openen",
      cs: "Otevřít minimapu",
      da: "Åbn minimap",
      es: "Abrir minimapa",
    },
    "minimap.close": {
      it: "Chiudi minimappa",
      de: "Minikarte schließen",
      el: "Κλείσιμο minimap",
      fr: "Fermer la mini-carte",
      hu: "Minitérkép bezárása",
      ru: "Закрыть миникарту",
      ro: "Închide minimapa",
      pl: "Zamknij minimapę",
      pt: "Fechar minimapa",
      nl: "Minimap sluiten",
      cs: "Zavřít minimapu",
      da: "Luk minimap",
      es: "Cerrar minimapa",
    },
    "minimap.zoom_in": {
      it: "Zoom avanti (+)",
      de: "Hineinzoomen (+)",
      el: "Μεγέθυνση (+)",
      fr: "Zoom avant (+)",
      hu: "Nagyítás (+)",
      ru: "Приблизить (+)",
      ro: "Mărește (+)",
      pl: "Przybliż (+)",
      pt: "Aproximar (+)",
      nl: "Inzoomen (+)",
      cs: "Přiblížit (+)",
      da: "Zoom ind (+)",
      es: "Acercar (+)",
    },
    "minimap.zoom_out": {
      it: "Zoom indietro (-)",
      de: "Herauszoomen (-)",
      el: "Σμίκρυνση (-)",
      fr: "Zoom arrière (-)",
      hu: "Kicsinyítés (-)",
      ru: "Отдалить (-)",
      ro: "Micșorează (-)",
      pl: "Oddal (-)",
      pt: "Afastar (-)",
      nl: "Uitzoomen (-)",
      cs: "Oddálit (-)",
      da: "Zoom ud (-)",
      es: "Alejar (-)",
    },
    "minimap.channel": {
      it: "Canale 1",
      de: "Kanal 1",
      el: "Κανάλι 1",
      fr: "Canal 1",
      hu: "1. csatorna",
      ru: "Канал 1",
      ro: "Canal 1",
      pl: "Kanał 1",
      pt: "Canal 1",
      nl: "Kanaal 1",
      cs: "Kanál 1",
      da: "Kanal 1",
      es: "Canal 1",
    },
    "char.info": {
      it: "Info personaggio",
      de: "Charakterinfo",
      el: "Πληροφορίες χαρακτήρα",
      fr: "Infos personnage",
      hu: "Karakterinformáció",
      ru: "Информация о персонаже",
      ro: "Info personaj",
      pl: "Informacje o postaci",
      pt: "Info do personagem",
      nl: "Karakterinfo",
      cs: "Informace o postavě",
      da: "Figurinfo",
      es: "Info de personaje",
    },
    "char.tab_status": {
      it: "Stato",
      de: "Status",
      el: "Κατάσταση",
      fr: "Statut",
      hu: "Állapot",
      ru: "Статус",
      ro: "Stare",
      pl: "Status",
      pt: "Status",
      nl: "Status",
      cs: "Stav",
      da: "Status",
      es: "Estado",
    },
    "char.tab_skills": {
      it: "Abilità",
      de: "Fertigkeiten",
      el: "Ικανότητες",
      fr: "Compétences",
      hu: "Készségek",
      ru: "Навыки",
      ro: "Abilități",
      pl: "Umiejętności",
      pt: "Habilidades",
      nl: "Vaardigheden",
      cs: "Dovednosti",
      da: "Færdigheder",
      es: "Habilidades",
    },
    "char.tab_emotions": {
      it: "Emozioni",
      de: "Emotionen",
      el: "Συναισθήματα",
      fr: "Émotions",
      hu: "Érzelmek",
      ru: "Эмоции",
      ro: "Emoții",
      pl: "Emocje",
      pt: "Emoções",
      nl: "Emoties",
      cs: "Emoce",
      da: "Følelser",
      es: "Emociones",
    },
    "char.tab_quests": {
      it: "Missioni",
      de: "Quests",
      el: "Αποστολές",
      fr: "Quêtes",
      hu: "Küldetések",
      ru: "Задания",
      ro: "Misiuni",
      pl: "Misje",
      pt: "Missões",
      nl: "Quests",
      cs: "Úkoly",
      da: "Opgaver",
      es: "Misiones",
    },
    "char.attack": {
      it: "Attacco",
      de: "Angriff",
      el: "Επίθεση",
      fr: "Attaque",
      hu: "Támadás",
      ru: "Атака",
      ro: "Atac",
      pl: "Atak",
      pt: "Ataque",
      nl: "Aanval",
      cs: "Útok",
      da: "Angreb",
      es: "Ataque",
    },
    "char.defense": {
      it: "Difesa",
      de: "Verteidigung",
      el: "Άμυνα",
      fr: "Défense",
      hu: "Védelem",
      ru: "Защита",
      ro: "Apărare",
      pl: "Obrona",
      pt: "Defesa",
      nl: "Verdediging",
      cs: "Obrana",
      da: "Forsvar",
      es: "Defensa",
    },
    "char.level": {
      it: "Livello",
      de: "Level",
      el: "Επίπεδο",
      fr: "Niveau",
      hu: "Szint",
      ru: "Уровень",
      ro: "Nivel",
      pl: "Poziom",
      pt: "Nível",
      nl: "Level",
      cs: "Úroveň",
      da: "Niveau",
      es: "Nivel",
    },
    "char.attack_speed": {
      it: "Velocità attacco",
      de: "Angriffsgeschwindigkeit",
      el: "Ταχύτητα επίθεσης",
      fr: "Vitesse d’attaque",
      hu: "Támadási sebesség",
      ru: "Скорость атаки",
      ro: "Viteză atac",
      pl: "Szybkość ataku",
      pt: "Velocidade de ataque",
      nl: "Aanvalssnelheid",
      cs: "Rychlost útoku",
      da: "Angrebshastighed",
      es: "Velocidad de ataque",
    },
    "char.move_speed": {
      it: "Velocità movimento",
      de: "Bewegungsgeschwindigkeit",
      el: "Ταχύτητα κίνησης",
      fr: "Vitesse de déplacement",
      hu: "Mozgási sebesség",
      ru: "Скорость движения",
      ro: "Viteză mișcare",
      pl: "Szybkość ruchu",
      pt: "Velocidade de movimento",
      nl: "Bewegingssnelheid",
      cs: "Rychlost pohybu",
      da: "Bevægelseshastighed",
      es: "Velocidad de movimiento",
    },
    "char.magic_attack": {
      it: "Attacco magico",
      de: "Magischer Angriff",
      el: "Μαγική επίθεση",
      fr: "Attaque magique",
      hu: "Mágikus támadás",
      ru: "Магическая атака",
      ro: "Atac magic",
      pl: "Atak magiczny",
      pt: "Ataque mágico",
      nl: "Magische aanval",
      cs: "Magický útok",
      da: "Magisk angreb",
      es: "Ataque mágico",
    },
    "char.magic_defense": {
      it: "Difesa magica",
      de: "Magische Verteidigung",
      el: "Μαγική άμυνα",
      fr: "Défense magique",
      hu: "Mágikus védelem",
      ru: "Магическая защита",
      ro: "Apărare magică",
      pl: "Obrona magiczna",
      pt: "Defesa mágica",
      nl: "Magische verdediging",
      cs: "Magická obrana",
      da: "Magisk forsvar",
      es: "Defensa mágica",
    },
    "char.unallocated": {
      it: "Punti non assegnati: ",
      de: "Nicht verteilte Punkte: ",
      el: "Μη διανεμημένοι πόντοι: ",
      fr: "Points non attribués : ",
      hu: "El nem osztott pontok: ",
      ru: "Нераспределённые очки: ",
      ro: "Puncte nealocate: ",
      pl: "Nierozdane punkty: ",
      pt: "Pontos não distribuídos: ",
      nl: "Niet verdeelde punten: ",
      cs: "Nepřidělené body: ",
      da: "Ubrugte point: ",
      es: "Puntos sin asignar: ",
    },
    "char.skills_na": {
      it: "Abilità non ancora disponibili",
      de: "Fertigkeiten noch nicht verfügbar",
      el: "Οι ικανότητες δεν είναι ακόμη διαθέσιμες",
      fr: "Compétences pas encore disponibles",
      hu: "A készségek még nem érhetők el",
      ru: "Навыки пока недоступны",
      ro: "Abilitățile nu sunt încă disponibile",
      pl: "Umiejętności nie są jeszcze dostępne",
      pt: "Habilidades ainda indisponíveis",
      nl: "Vaardigheden nog niet beschikbaar",
      cs: "Dovednosti zatím nejsou dostupné",
      da: "Færdigheder er ikke tilgængelige endnu",
      es: "Las habilidades aún no están disponibles",
    },
    "char.emotions_na": {
      it: "Emozioni non ancora disponibili",
      de: "Emotionen noch nicht verfügbar",
      el: "Τα συναισθήματα δεν είναι ακόμη διαθέσιμα",
      fr: "Émotions pas encore disponibles",
      hu: "Az érzelmek még nem érhetők el",
      ru: "Эмоции пока недоступны",
      ro: "Emoțiile nu sunt încă disponibile",
      pl: "Emocje nie są jeszcze dostępne",
      pt: "Emoções ainda indisponíveis",
      nl: "Emoties nog niet beschikbaar",
      cs: "Emoce zatím nejsou dostupné",
      da: "Følelser er ikke tilgængelige endnu",
      es: "Las emociones aún no están disponibles",
    },
    "char.no_quests": {
      it: "Nessuna missione trovata",
      de: "Keine Quests gefunden",
      el: "Δεν βρέθηκαν αποστολές",
      fr: "Aucune quête trouvée",
      hu: "Nincs küldetés",
      ru: "Задания не найдены",
      ro: "Nu există misiuni",
      pl: "Brak zadań",
      pt: "Nenhuma missão encontrada",
      nl: "Geen quests gevonden",
      cs: "Žádné úkoly nenalezeny",
      da: "Ingen opgaver fundet",
      es: "No se encontraron misiones",
    },
    "inv.title": {
      it: "Inventario",
      de: "Inventar",
      el: "Απογραφή",
      fr: "Inventaire",
      hu: "Leltár",
      ru: "Инвентарь",
      ro: "Inventar",
      pl: "Ekwipunek",
      pt: "Inventário",
      nl: "Inventaris",
      cs: "Inventář",
      da: "Inventar",
      es: "Inventario",
    },
    "loading.starting": {
      it: "Avvio...",
      de: "Wird gestartet...",
      el: "Εκκίνηση...",
      fr: "Démarrage...",
      hu: "Indítás...",
      ru: "Запуск...",
      ro: "Pornire...",
      pl: "Uruchamianie...",
      pt: "Iniciando...",
      nl: "Starten...",
      cs: "Spouští se...",
      da: "Starter...",
      es: "Iniciando...",
    },
    "loading.models": {
      it: "Caricamento modelli...",
      de: "Modelle werden geladen...",
      el: "Φόρτωση μοντέλων...",
      fr: "Chargement des modèles...",
      hu: "Modellek betöltése...",
      ru: "Загрузка моделей...",
      ro: "Se încarcă modelele...",
      pl: "Ładowanie modeli...",
      pt: "Carregando modelos...",
      nl: "Modellen laden...",
      cs: "Načítání modelů...",
      da: "Indlæser modeller...",
      es: "Cargando modelos...",
    },
    "loading.ui_preparing": {
      it: "Preparazione interfaccia...",
      de: "Oberfläche wird vorbereitet...",
      el: "Προετοιμασία διεπαφής...",
      fr: "Préparation de l’interface...",
      hu: "Felület előkészítése...",
      ru: "Подготовка интерфейса...",
      ro: "Se pregătește interfața...",
      pl: "Przygotowywanie interfejsu...",
      pt: "Preparando interface...",
      nl: "Interface voorbereiden...",
      cs: "Příprava rozhraní...",
      da: "Forbereder interface...",
      es: "Preparando interfaz...",
    },
    "loading.ready": {
      it: "Pronto!",
      de: "Bereit!",
      el: "Έτοιμο!",
      fr: "Prêt !",
      hu: "Kész!",
      ru: "Готово!",
      ro: "Gata!",
      pl: "Gotowe!",
      pt: "Pronto!",
      nl: "Klaar!",
      cs: "Připraveno!",
      da: "Klar!",
      es: "¡Listo!",
    },
    "tip.1": {
      it: "Distruggendo le Pietre Metin puoi ottenere oggetti preziosi.",
      de: "Durch das Zerstören von Metin-Steinen erhältst du wertvolle Gegenstände.",
      el: "Σπάζοντας τις Πέτρες Metin μπορείς να αποκτήσεις πολύτιμα αντικείμενα.",
      fr: "En détruisant les Pierres Metin, vous pouvez obtenir des objets précieux.",
      hu: "A Metin kövek szétverésével értékes tárgyakat szerezhetsz.",
      ru: "Разрушая Камни Метин, можно получить ценные предметы.",
      ro: "Distrugând Pietrele Metin poți obține obiecte valoroase.",
      pl: "Niszcząc Kamienie Metin, możesz zdobyć cenne przedmioty.",
      pt: "Ao destruir Pedras Metin, você pode obter itens valiosos.",
      nl: "Door Metin-stenen te vernietigen kun je waardevolle items krijgen.",
      cs: "Ničením kamenů Metin můžeš získat cenné předměty.",
      da: "Ved at ødelægge Metin-sten kan du få værdifulde genstande.",
      es: "Al destruir Piedras Metin puedes obtener objetos valiosos.",
    },
    "tip.2": {
      it: "Aumenta il livello del personaggio per sbloccare nuove abilità.",
      de: "Erhöhe dein Level, um neue Fertigkeiten freizuschalten.",
      el: "Ανέβασε επίπεδο για να ξεκλειδώσεις νέες ικανότητες.",
      fr: "Montez de niveau pour débloquer de nouvelles compétences.",
      hu: "Szintlépéssel új képességeket oldhatsz fel.",
      ru: "Повышайте уровень персонажа, чтобы открывать новые навыки.",
      ro: "Crește nivelul personajului pentru a debloca noi abilități.",
      pl: "Zwiększ poziom postaci, aby odblokować nowe umiejętności.",
      pt: "Aumente o nível do personagem para desbloquear novas habilidades.",
      nl: "Verhoog je level om nieuwe vaardigheden vrij te spelen.",
      cs: "Zvyšuj úroveň postavy a odemykej nové dovednosti.",
      da: "Stig i niveau for at låse nye færdigheder op.",
      es: "Sube de nivel para desbloquear nuevas habilidades.",
    },
    "tip.3": {
      it: "Unisciti a una gilda per combattere insieme ad altri giocatori.",
      de: "Tritt einer Gilde bei und kämpfe mit anderen Spielern.",
      el: "Μπες σε συντεχνία για να πολεμήσεις μαζί με άλλους παίκτες.",
      fr: "Rejoignez une guilde pour combattre avec d’autres joueurs.",
      hu: "Csatlakozz céhhez, és harcolj más játékosokkal együtt.",
      ru: "Вступайте в гильдию и сражайтесь вместе с другими игроками.",
      ro: "Intră într-o breaslă și luptă alături de alți jucători.",
      pl: "Dołącz do gildii i walcz razem z innymi graczami.",
      pt: "Entre em uma guilda para lutar ao lado de outros jogadores.",
      nl: "Sluit je aan bij een gilde en vecht samen met andere spelers.",
      cs: "Přidej se do cechu a bojuj s ostatními hráči.",
      da: "Slut dig til et laug og kæmp sammen med andre spillere.",
      es: "Únete a un gremio y lucha junto a otros jugadores.",
    },
    "tip.4": {
      it: "Migliora il tuo equipaggiamento per diventare più forte.",
      de: "Verbessere deine Ausrüstung, um stärker zu werden.",
      el: "Βελτίωσε τον εξοπλισμό σου για να γίνεις πιο δυνατός.",
      fr: "Améliorez votre équipement pour devenir plus puissant.",
      hu: "Fejleszd a felszerelésedet, hogy erősebb legyél.",
      ru: "Улучшайте снаряжение, чтобы стать сильнее.",
      ro: "Îmbunătățește-ți echipamentul ca să devii mai puternic.",
      pl: "Ulepszaj ekwipunek, aby stać się silniejszym.",
      pt: "Melhore seu equipamento para ficar mais forte.",
      nl: "Verbeter je uitrusting om sterker te worden.",
      cs: "Vylepšuj vybavení a staň se silnějším.",
      da: "Forbedr dit udstyr for at blive stærkere.",
      es: "Mejora tu equipo para volverte más fuerte.",
    },
    "tip.5": {
      it: "Sconfiggi i boss per ottenere bottini rari.",
      de: "Besiege Bosse, um seltene Beute zu erhalten.",
      el: "Νίκησε τα boss για να αποκτήσεις σπάνιο loot.",
      fr: "Vainquez les boss pour obtenir des objets rares.",
      hu: "Győzd le a bossokat ritka tárgyakért.",
      ru: "Побеждайте боссов, чтобы получить редкую добычу.",
      ro: "Învinge boșii pentru a obține pradă rară.",
      pl: "Pokonuj bossy, aby zdobyć rzadkie łupy.",
      pt: "Derrote chefes para obter itens raros.",
      nl: "Versla bosses om zeldzame buit te krijgen.",
      cs: "Porážej bossy a získej vzácný loot.",
      da: "Besejr bosser for at få sjældent loot.",
      es: "Derrota jefes para obtener botín raro.",
    },
    "tip.6": {
      it: "La guerra tra Shinsoo, Chunjo e Jinno non finisce mai.",
      de: "Der Krieg zwischen Shinsoo, Chunjo und Jinno endet nie wirklich.",
      el: "Ο πόλεμος ανάμεσα σε Shinsoo, Chunjo και Jinno δεν τελειώνει ποτέ.",
      fr: "La guerre entre Shinsoo, Chunjo et Jinno ne s’arrête jamais vraiment.",
      hu: "A Shinsoo, Chunjo és Jinno közötti háború sosem ér véget igazán.",
      ru: "Война между Шинсу, Чунджо и Джинно никогда не заканчивается.",
      ro: "Războiul dintre Shinsoo, Chunjo și Jinno nu se termină niciodată cu adevărat.",
      pl: "Wojna między Shinsoo, Chunjo i Jinno nigdy tak naprawdę się nie kończy.",
      pt: "A guerra entre Shinsoo, Chunjo e Jinno nunca realmente termina.",
      nl: "De oorlog tussen Shinsoo, Chunjo en Jinno eindigt nooit echt.",
      cs: "Válka mezi Shinsoo, Chunjo a Jinno nikdy doopravdy nekončí.",
      da: "Krigen mellem Shinsoo, Chunjo og Jinno slutter aldrig rigtigt.",
      es: "La guerra entre Shinsoo, Chunjo y Jinno nunca termina de verdad.",
    },
    "select.warrior": {
      it: "Guerriero",
      de: "Krieger",
      el: "Πολεμιστής",
      fr: "Guerrier",
      hu: "Harcos",
      ru: "Воин",
      ro: "Războinic",
      pl: "Wojownik",
      pt: "Guerreiro",
      nl: "Krijger",
      cs: "Válečník",
      da: "Kriger",
      es: "Guerrero",
    },
    "select.ninja": {
      it: "Ninja",
      de: "Ninja",
      el: "Νίντζα",
      fr: "Ninja",
      hu: "Nindzsa",
      ru: "Ниндзя",
      ro: "Ninja",
      pl: "Ninja",
      pt: "Ninja",
      nl: "Ninja",
      cs: "Ninja",
      da: "Ninja",
      es: "Ninja",
    },
    "select.sura": {
      it: "Sura",
      de: "Sura",
      el: "Sura",
      fr: "Sura",
      hu: "Sura",
      ru: "Сура",
      ro: "Sura",
      pl: "Sura",
      pt: "Sura",
      nl: "Sura",
      cs: "Sura",
      da: "Sura",
      es: "Sura",
    },
    "select.shaman": {
      it: "Sciamano",
      de: "Schamane",
      el: "Σαμάνος",
      fr: "Chamane",
      hu: "Sámán",
      ru: "Шаман",
      ro: "Șaman",
      pl: "Szaman",
      pt: "Xamã",
      nl: "Sjamaan",
      cs: "Šaman",
      da: "Shaman",
      es: "Chamán",
    },
    "select.warrior_desc": {
      it: "I Guerrieri combattono in prima linea con forza fisica e armature pesanti.",
      de: "Krieger kämpfen im Nahkampf mit großer Kraft und schwerer Rüstung.",
      el: "Οι Πολεμιστές πολεμούν στην πρώτη γραμμή με δύναμη και βαριά πανοπλία.",
      fr: "Les Guerriers combattent au corps à corps avec une grande force et une armure lourde.",
      hu: "A harcosok közelharcban erősek és nehéz páncélt viselnek.",
      ru: "Воины сражаются в ближнем бою, полагаясь на силу и тяжёлую броню.",
      ro: "Războinicii luptă în prim-plan cu forță fizică și armură grea.",
      pl: "Wojownicy walczą w zwarciu, korzystając z siły i ciężkiego pancerza.",
      pt: "Guerreiros lutam na linha de frente com força física e armadura pesada.",
      nl: "Krijgers vechten in de voorste linie met grote kracht en zware bepantsering.",
      cs: "Válečníci bojují v první linii se silou a těžkou zbrojí.",
      da: "Krigere kæmper forrest med stor styrke og tung rustning.",
      es: "Los Guerreros luchan en primera línea con gran fuerza y armadura pesada.",
    },
    "select.ninja_desc": {
      it: "I Ninja colpiscono rapidamente con pugnali o arco e puntano su agilità e combo.",
      de: "Ninjas greifen schnell mit Dolchen oder Bogen an und setzen auf Beweglichkeit.",
      el: "Οι Νίντζα χτυπούν γρήγορα με στιλέτα ή τόξο και βασίζονται στην ευκινησία.",
      fr: "Les Ninjas frappent vite avec des dagues ou un arc et misent sur l’agilité.",
      hu: "A nindzsák gyorsan támadnak tőrrel vagy íjjal, és a mozgékonyságra építenek.",
      ru: "Ниндзя быстро атакуют кинжалами или луком и делают ставку на ловкость.",
      ro: "Ninja atacă rapid cu pumnale sau arc și se bazează pe agilitate.",
      pl: "Ninja atakują szybko sztyletami lub łukiem i opierają się na zwinności.",
      pt: "Ninjas atacam rápido com adagas ou arco e dependem da agilidade.",
      nl: "Ninja’s vallen snel aan met dolken of boog en vertrouwen op behendigheid.",
      cs: "Ninjové útočí rychle dýkami nebo lukem a spoléhají na obratnost.",
      da: "Ninjaer angriber hurtigt med dolke eller bue og lever af smidighed.",
      es: "Los Ninjas atacan rápido con dagas o arco y dependen de la agilidad.",
    },
    "select.sura_desc": {
      it: "I Sura uniscono spada e magia oscura per attacchi devastanti.",
      de: "Suras verbinden Schwertkunst mit dunkler Magie für verheerende Angriffe.",
      el: "Οι Sura συνδυάζουν ξίφος και σκοτεινή μαγεία για καταστροφικές επιθέσεις.",
      fr: "Les Sura combinent l’épée et la magie noire pour des attaques dévastatrices.",
      hu: "A Surák a kardot és a sötét mágiát egyesítik pusztító támadásokhoz.",
      ru: "Суры сочетают меч и тёмную магию для сокрушительных атак.",
      ro: "Sura combină sabia și magia întunecată pentru atacuri devastatoare.",
      pl: "Sura łączą miecz z czarną magią, zadając niszczące ciosy.",
      pt: "Suras combinam espada e magia negra para ataques devastadores.",
      nl: "Sura combineren zwaard en duistere magie voor verwoestende aanvallen.",
      cs: "Surové spojují meč a temnou magii pro ničivé útoky.",
      da: "Sura kombinerer sværd og mørk magi til ødelæggende angreb.",
      es: "Los Sura combinan espada y magia oscura para ataques devastadores.",
    },
    "select.shaman_desc": {
      it: "Gli Sciamani supportano il gruppo con cure e potenziamenti.",
      de: "Schamanen unterstützen ihre Gruppe mit Heilung und Verstärkungen.",
      el: "Οι Σαμάνοι υποστηρίζουν την ομάδα με θεραπείες και ενισχύσεις.",
      fr: "Les Chamans soutiennent le groupe avec des soins et des améliorations.",
      hu: "A sámánok gyógyítással és erősítésekkel támogatják a csapatot.",
      ru: "Шаманы поддерживают группу лечением и усилениями.",
      ro: "Șamanii susțin grupul cu vindecare și buff-uri.",
      pl: "Szamani wspierają grupę leczeniem i wzmocnieniami.",
      pt: "Xamãs apoiam o grupo com cura e buffs.",
      nl: "Sjamanen ondersteunen de groep met genezing en versterkingen.",
      cs: "Šamani podporují skupinu léčením a posíleními.",
      da: "Shamaner støtter gruppen med healing og buffs.",
      es: "Los Chamanes apoyan al grupo con curación y mejoras.",
    },
    "settings.language": {
      it: "Lingua",
      de: "Sprache",
      el: "Γλώσσα",
      fr: "Langue",
      hu: "Nyelv",
      ru: "Язык",
      ro: "Limbă",
      pl: "Język",
      pt: "Idioma",
      nl: "Taal",
      cs: "Jazyk",
      da: "Sprog",
      es: "Idioma",
    },
    "select.empire_shinsoo": {
      it: "Regno di Shinsoo",
      de: "Reich von Shinsoo",
      el: "Βασίλειο Shinsoo",
      fr: "Royaume de Shinsoo",
      hu: "Shinsoo Királyság",
      ru: "Королевство Шинсу",
      ro: "Regatul Shinsoo",
      pl: "Królestwo Shinsoo",
      pt: "Reino de Shinsoo",
      nl: "Koninkrijk Shinsoo",
      cs: "Království Shinsoo",
      da: "Shinsoo-riget",
      es: "Reino de Shinsoo",
    },
    "select.level_short": {
      it: "Lv.1",
      de: "Lv.1",
      el: "Lv.1",
      fr: "Nv.1",
      hu: "Sz.1",
      ru: "Ур.1",
      ro: "Lv.1",
      pl: "Lv.1",
      pt: "Nv.1",
      nl: "Lv.1",
      cs: "Lv.1",
      da: "Lv.1",
      es: "Nv.1",
    },
  },
  xe = Wn()((e) => ({
    language: Ei(localStorage.getItem("lang")),
    setLanguage: (t) => {
      (localStorage.setItem("lang", t), e({ language: t }));
    },
  }));
function ke() {
  const e = xe((t) => t.language);
  return (t) => {
    const a = Ki[t]?.[e];
    if (a) return a;
    const i = Ni[t];
    return i?.[e] ?? i?.en ?? i?.tr ?? t;
  };
}
function Oi(e) {
  const t = xe.getState().language ?? ji,
    a = Ki[e]?.[t];
  if (a) return a;
  const i = Ni[e];
  return i?.[t] ?? i?.en ?? i?.tr ?? e;
}
const C = (e, t, n, a, i, l, s, r, c, g, u, p, m) => ({
    it: e,
    de: t,
    el: n,
    fr: a,
    hu: i,
    ru: l,
    ro: s,
    pl: r,
    pt: c,
    nl: g,
    cs: u,
    da: p,
    es: m,
  }),
  Zo = {
    arms: C(
      "Mercante d'armi",
      "Waffenhändler",
      "Έμπορος όπλων",
      "Marchand d’armes",
      "Fegyverkereskedő",
      "Торговец оружием",
      "Negustor de arme",
      "Handlarz bronią",
      "Mercador de armas",
      "Wapenhandelaar",
      "Obchodník se zbraněmi",
      "Våbenhandler",
      "Mercader de armas",
    ),
    blacksmith: C(
      "Fabbro",
      "Schmied",
      "Σιδεράς",
      "Forgeron",
      "Kovács",
      "Кузнец",
      "Fierar",
      "Kowal",
      "Ferreiro",
      "Smid",
      "Kovář",
      "Smed",
      "Herrero",
    ),
    goods: C(
      "Mercante",
      "Gemischtwarenhändler",
      "Έμπορος",
      "Marchand",
      "Kereskedő",
      "Торговец",
      "Negustor",
      "Kupiec",
      "Mercador",
      "Koopman",
      "Obchodník",
      "Købmand",
      "Mercader",
    ),
    hotel_grandma: C(
      "Vecchia signora",
      "Alte Frau",
      "Ηλικιωμένη γυναίκα",
      "Vieille dame",
      "Öregasszony",
      "Старая женщина",
      "Bătrână",
      "Stara kobieta",
      "Senhora idosa",
      "Oude vrouw",
      "Stará žena",
      "Gammel dame",
      "Anciana",
    ),
    baby_and_mom: C(
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
      "Ah-Yu",
    ),
    auntie: C(
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
      "Aranyo",
    ),
    defence: C(
      "Mercante di armature",
      "Rüstungshändler",
      "Έμπορος πανοπλιών",
      "Marchand d’armures",
      "Páncélkereskedő",
      "Торговец бронёй",
      "Negustor de armuri",
      "Handlarz pancerzy",
      "Mercador de armaduras",
      "Pantserhandelaar",
      "Obchodník se zbrojí",
      "Rustningshandler",
      "Mercader de armaduras",
    ),
    storekeeper: C(
      "Magazziniere",
      "Lagerverwalter",
      "Αποθηκάριος",
      "Magasinier",
      "Raktáros",
      "Складовщик",
      "Depozitar",
      "Magazynier",
      "Armazenista",
      "Opslagmeester",
      "Skladník",
      "Lagerforvalter",
      "Almacenero",
    ),
    woodcutter: C(
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
      "Deokbae",
    ),
    timid_boy: C(
      "Stalliere",
      "Stallbursche",
      "Σταβλίτης",
      "Palefrenier",
      "Istállómester",
      "Конюх",
      "Îngrijitor grajd",
      "Stajenny",
      "Cavalariço",
      "Staljongen",
      "Stájník",
      "Staldpasser",
      "Mozo de cuadra",
    ),
    captain: C(
      "Capitano",
      "Hauptmann",
      "Καπετάνιος",
      "Capitaine",
      "Kapitány",
      "Капитан",
      "Căpitan",
      "Kapitan",
      "Capitão",
      "Kapitein",
      "Kapitán",
      "Kaptajn",
      "Capitán",
    ),
    guardian: C(
      "Guardiano",
      "Wächter",
      "Φύλακας",
      "Gardien",
      "Őrző",
      "Хранитель",
      "Gardian",
      "Strażnik",
      "Guardião",
      "Bewaker",
      "Strážce",
      "Vogter",
      "Guardián",
    ),
    uriel: C(
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
      "Uriel",
    ),
    horse_1: C(
      "Cavallo",
      "Pferd",
      "Άλογο",
      "Cheval",
      "Ló",
      "Лошадь",
      "Cal",
      "Koń",
      "Cavalo",
      "Paard",
      "Kůň",
      "Hest",
      "Caballo",
    ),
    horse_2: C(
      "Cavallo",
      "Pferd",
      "Άλογο",
      "Cheval",
      "Ló",
      "Лошадь",
      "Cal",
      "Koń",
      "Cavalo",
      "Paard",
      "Kůň",
      "Hest",
      "Caballo",
    ),
    horse_3: C(
      "Cavallo",
      "Pferd",
      "Άλογο",
      "Cheval",
      "Ló",
      "Лошадь",
      "Cal",
      "Koń",
      "Cavalo",
      "Paard",
      "Kůň",
      "Hest",
      "Caballo",
    ),
    guard_1: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_2: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_3: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_4: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_5: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_6: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_7: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    guard_8: C(
      "Guardia",
      "Wache",
      "Φρουρός",
      "Garde",
      "Őr",
      "Стражник",
      "Gardă",
      "Strażnik",
      "Guarda",
      "Wacht",
      "Stráž",
      "Vagt",
      "Guardia",
    ),
    konfucyus: C(
      "Confucio",
      "Konfuzius",
      "Κομφούκιος",
      "Confucius",
      "Konfuciusz",
      "Конфуций",
      "Confucius",
      "Konfucjusz",
      "Confúcio",
      "Confucius",
      "Konfucius",
      "Konfucius",
      "Confucio",
    ),
  },
  Xo = {
    orc_lord: C(
      "Capo Orco",
      "Ork-Anführer",
      "Αρχηγός των Ορκ",
      "Chef Orc",
      "Ork főnök",
      "Вождь орков",
      "Căpetenia Ork",
      "Wódz orków",
      "Chefe Orc",
      "Orkleider",
      "Orčí náčelník",
      "Ork-høvding",
      "Jefe orco",
    ),
    smhtower_king: C(
      "Lucifer",
      "Lucifer",
      "Lucifer",
      "Lucifer",
      "Lucifer",
      "Люцифер",
      "Lucifer",
      "Lucifer",
      "Lúcifer",
      "Lucifer",
      "Lucifer",
      "Lucifer",
      "Lucifer",
    ),
    spider_queen: C(
      "Regina Ragno",
      "Spinnenkönigin",
      "Βασίλισσα Αράχνη",
      "Reine Araignée",
      "Pókkirálynő",
      "Королева пауков",
      "Regina Păianjen",
      "Królowa Pająków",
      "Rainha Aranha",
      "Spinnenkoningin",
      "Pavoučí královna",
      "Edderkopdronning",
      "Reina Araña",
    ),
    skeleton_king: C(
      "Re Scheletro",
      "Skelettkönig",
      "Βασιλιάς Σκελετών",
      "Roi Squelette",
      "Csontváz király",
      "Король скелетов",
      "Regele Schelet",
      "Król Szkieletów",
      "Rei Esqueleto",
      "Skelettenkoning",
      "Král kostlivců",
      "Skeletkonge",
      "Rey Esqueleto",
    ),
    blue_dragon: C(
      "Drago Blu",
      "Blauer Drache",
      "Μπλε Δράκος",
      "Dragon Bleu",
      "Kék sárkány",
      "Синий дракон",
      "Dragon Albastru",
      "Błękitny Smok",
      "Dragão Azul",
      "Blauwe Draak",
      "Modrý drak",
      "Blå Drage",
      "Dragón Azul",
    ),
    reddragon_room_boss2: C(
      "Drago Rosso",
      "Roter Drache",
      "Κόκκινος Δράκος",
      "Dragon Rouge",
      "Vörös sárkány",
      "Красный дракон",
      "Dragon Roșu",
      "Czerwony Smok",
      "Dragão Vermelho",
      "Rode Draak",
      "Rudý drak",
      "Rød Drage",
      "Dragón Rojo",
    ),
    keyto_monster_baphomet: C(
      "Baphomet",
      "Baphomet",
      "Baphomet",
      "Baphomet",
      "Baphomet",
      "Бафомет",
      "Baphomet",
      "Bafomet",
      "Baphomet",
      "Baphomet",
      "Baphomet",
      "Baphomet",
      "Baphomet",
    ),
    fire_dragon: C(
      "Drago di Fuoco",
      "Feuerdrache",
      "Δράκος της Φωτιάς",
      "Dragon de Feu",
      "Tűzsárkány",
      "Огненный дракон",
      "Dragon de Foc",
      "Smok Ognia",
      "Dragão de Fogo",
      "Vuurdraak",
      "Ohnivý drak",
      "Ilddrage",
      "Dragón de Fuego",
    ),
    jotun_thrym: C(
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Йотун Трим",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
      "Jotun Thrym",
    ),
    yamachun_boss: C(
      "Razador",
      "Razador",
      "Razador",
      "Razador",
      "Razador",
      "Разадор",
      "Razador",
      "Razador",
      "Razador",
      "Razador",
      "Razador",
      "Razador",
      "Razador",
    ),
    nemere: C(
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
      "Немере",
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
      "Nemere",
    ),
    defensewave_hydra_boss: C(
      "Hydra",
      "Hydra",
      "Ύδρα",
      "Hydre",
      "Hidra",
      "Гидра",
      "Hydra",
      "Hydra",
      "Hydra",
      "Hydra",
      "Hydra",
      "Hydra",
      "Hidra",
    ),
  },
  Jo = {
    8001: C(
      "Metin del Dolore",
      "Metin der Trauer",
      "Metin της Θλίψης",
      "Metin de la Tristesse",
      "Szomorúság Metin",
      "Метин Скорби",
      "Metinul Tristeții",
      "Metin Smutku",
      "Metin da Tristeza",
      "Metin van Verdriet",
      "Metin Smutku",
      "Metin af Sorg",
      "Metin del Dolor",
    ),
    8002: C(
      "Metin del Combattimento",
      "Metin des Kampfes",
      "Metin της Μάχης",
      "Metin du Combat",
      "Harc Metin",
      "Метин Битвы",
      "Metinul Luptei",
      "Metin Walki",
      "Metin do Combate",
      "Metin van Gevecht",
      "Metin Boje",
      "Metin af Kamp",
      "Metin del Combate",
    ),
    8003: C(
      "Metin della Guerra",
      "Metin des Krieges",
      "Metin του Πολέμου",
      "Metin de la Guerre",
      "Háború Metin",
      "Метин Войны",
      "Metinul Războiului",
      "Metin Wojny",
      "Metin da Guerra",
      "Metin van Oorlog",
      "Metin Války",
      "Metin af Krig",
      "Metin de la Guerra",
    ),
    8004: C(
      "Metin dell’Avidità",
      "Metin der Gier",
      "Metin της Απληστίας",
      "Metin de la Cupidité",
      "Kapzsiság Metin",
      "Метин Алчности",
      "Metinul Lăcomiei",
      "Metin Chciwości",
      "Metin da Ganância",
      "Metin van Hebzucht",
      "Metin Chamtivosti",
      "Metin af Grådighed",
      "Metin de la Codicia",
    ),
    8005: C(
      "Metin Nero",
      "Schwarzer Metin",
      "Μαύρο Metin",
      "Metin Noir",
      "Fekete Metin",
      "Черный Метин",
      "Metin Negru",
      "Czarny Metin",
      "Metin Negro",
      "Zwarte Metin",
      "Černý Metin",
      "Sort Metin",
      "Metin Negro",
    ),
    8006: C(
      "Metin dell’Oscurità",
      "Metin der Dunkelheit",
      "Metin του Σκότους",
      "Metin des Ténèbres",
      "Sötétség Metin",
      "Метин Тьмы",
      "Metinul Întunericului",
      "Metin Ciemności",
      "Metin da Escuridão",
      "Metin van Duisternis",
      "Metin Temnoty",
      "Metin af Mørke",
      "Metin de la Oscuridad",
    ),
    8007: C(
      "Metin della Gelosia",
      "Metin der Eifersucht",
      "Metin της Ζήλιας",
      "Metin de la Jalousie",
      "Féltékenység Metin",
      "Метин Зависти",
      "Metinul Geloziei",
      "Metin Zazdrości",
      "Metin do Ciúme",
      "Metin van Jaloezie",
      "Metin Žárlivosti",
      "Metin af Misundelse",
      "Metin de los Celos",
    ),
    8008: C(
      "Metin dell’Anima",
      "Metin der Seele",
      "Metin της Ψυχής",
      "Metin de l’Âme",
      "Lélek Metin",
      "Метин Души",
      "Metinul Sufletului",
      "Metin Duszy",
      "Metin da Alma",
      "Metin van Ziel",
      "Metin Duše",
      "Metin af Sjæl",
      "Metin del Alma",
    ),
    8009: C(
      "Metin dell’Ombra",
      "Metin des Schattens",
      "Metin της Σκιάς",
      "Metin de l’Ombre",
      "Árnyék Metin",
      "Метин Тени",
      "Metinul Umbrei",
      "Metin Cienia",
      "Metin da Sombra",
      "Metin van Schaduw",
      "Metin Stínu",
      "Metin af Skygge",
      "Metin de la Sombra",
    ),
    8010: C(
      "Metin della Resistenza",
      "Metin der Zähigkeit",
      "Metin της Αντοχής",
      "Metin de l’Endurance",
      "Állóképesség Metin",
      "Метин Выносливости",
      "Metinul Rezistenței",
      "Metin Wytrzymałości",
      "Metin da Resistência",
      "Metin van Uithouding",
      "Metin Odolnosti",
      "Metin af Udholdenhed",
      "Metin de la Resistencia",
    ),
    8011: C(
      "Metin del Diavolo",
      "Metin des Teufels",
      "Metin του Διαβόλου",
      "Metin du Diable",
      "Ördög Metin",
      "Метин Дьявола",
      "Metinul Diavolului",
      "Metin Diabła",
      "Metin do Diabo",
      "Metin van de Duivel",
      "Metin Ďábla",
      "Metin af Djævelen",
      "Metin del Diablo",
    ),
    8013: C(
      "Metin della Morte",
      "Metin des Todes",
      "Metin του Θανάτου",
      "Metin de la Mort",
      "Halál Metin",
      "Метин Смерти",
      "Metinul Morții",
      "Metin Śmierci",
      "Metin da Morte",
      "Metin van de Dood",
      "Metin Smrti",
      "Metin af Død",
      "Metin de la Muerte",
    ),
    8014: C(
      "Metin dell’Assassinio",
      "Metin des Mordes",
      "Metin του Φόνου",
      "Metin du Meurtre",
      "Gyilkosság Metin",
      "Метин Убийства",
      "Metinul Crimei",
      "Metin Mordu",
      "Metin do Assassinato",
      "Metin van Moord",
      "Metin Vraždy",
      "Metin af Mord",
      "Metin del Asesinato",
    ),
    8024: C(
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Метин Пунг-Ма",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
      "Metin Pung-Ma",
    ),
    8025: C(
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Метин Ма-Ан",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
      "Metin Ma-An",
    ),
    8026: C(
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Метин Ту-Ёнг",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
      "Metin Tu-Young",
    ),
    8027: C(
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Метин Чон-Ун",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
      "Metin Jeon-Un",
    ),
    8303: C(
      "Pietra Metin Setaou",
      "Setaou-Metin-Stein",
      "Πέτρα Metin Setaou",
      "Pierre Metin Setaou",
      "Setaou Metin Kő",
      "Камень Метин Сетаоу",
      "Piatra Metin Setaou",
      "Kamień Metin Setaou",
      "Pedra Metin Setaou",
      "Setaou Metinsteen",
      "Metin kámen Setaou",
      "Setaou Metin-sten",
      "Piedra Metin Setaou",
    ),
    8304: C(
      "Pietra Metin Setaou",
      "Setaou-Metin-Stein",
      "Πέτρα Metin Setaou",
      "Pierre Metin Setaou",
      "Setaou Metin Kő",
      "Камень Метин Сетаоу",
      "Piatra Metin Setaou",
      "Kamień Metin Setaou",
      "Pedra Metin Setaou",
      "Setaou Metinsteen",
      "Metin kámen Setaou",
      "Setaou Metin-sten",
      "Piedra Metin Setaou",
    ),
    8305: C(
      "Pietra Ochao",
      "Ochao-Stein",
      "Πέτρα Ochao",
      "Pierre Ochao",
      "Ochao Kő",
      "Камень Очао",
      "Piatra Ochao",
      "Kamień Ochao",
      "Pedra Ochao",
      "Ochao-steen",
      "Kámen Ochao",
      "Ochao-sten",
      "Piedra Ochao",
    ),
    8051: C(
      "Metin del Torpore",
      "Metin der Trübsal",
      "Metin της Ζοφερότητας",
      "Metin de la Morosité",
      "Ború Metin",
      "Метин Уныния",
      "Metinul Posomorârii",
      "Metin Ponurości",
      "Metin da Melancolia",
      "Metin van Somberte",
      "Metin Ponurosti",
      "Metin af Dysterhed",
      "Metin de la Penumbra",
    ),
    8052: C(
      "Metin della Brace",
      "Metin der Glut",
      "Metin της Χόβολης",
      "Metin de la Braise",
      "Parázs Metin",
      "Метин Углей",
      "Metinul Tăciunelui",
      "Metin Żaru",
      "Metin da Brasa",
      "Metin van Gloed",
      "Metin Žáru",
      "Metin af Glød",
      "Metin de la Brasa",
    ),
    8053: C(
      "Metin della Vanità",
      "Metin der Eitelkeit",
      "Metin της Ματαιοδοξίας",
      "Metin de la Vanité",
      "Hiúság Metin",
      "Метин Тщеславия",
      "Metinul Vanității",
      "Metin Próżności",
      "Metin da Vaidade",
      "Metin van IJdelheid",
      "Metin Marnivosti",
      "Metin af Forfængelighed",
      "Metin de la Vanidad",
    ),
    8054: C(
      "Metin dell’Ira",
      "Metin des Zorns",
      "Metin της Οργής",
      "Metin de la Colère",
      "Harag Metin",
      "Метин Гнева",
      "Metinul Furiei",
      "Metin Gniewu",
      "Metin da Ira",
      "Metin van Woede",
      "Metin Hněvu",
      "Metin af Vrede",
      "Metin de la Ira",
    ),
    8055: C(
      "Metin della Calamità",
      "Metin des Unheils",
      "Metin της Συμφοράς",
      "Metin du Fléau",
      "Csapás Metin",
      "Метин Бедствия",
      "Metinul Calamității",
      "Metin Katastrofy",
      "Metin da Calamidade",
      "Metin van Onheil",
      "Metin Pohromy",
      "Metin af Ulykke",
      "Metin de la Calamidad",
    ),
    8056: C(
      "Metin della Malizia",
      "Metin der Bosheit",
      "Metin της Κακίας",
      "Metin de la Malice",
      "Rosszindulat Metin",
      "Метин Злобы",
      "Metinul Răutății",
      "Metin Złośliwości",
      "Metin da Malícia",
      "Metin van Boosaardigheid",
      "Metin Zloby",
      "Metin af Ondskab",
      "Metin de la Maldad",
    ),
    8059: C(
      "Metin delle creature arboree",
      "Metin der Baumwesen",
      "Metin των Δενδρόβιων",
      "Metin des êtres sylvestres",
      "Fa-lények Metin",
      "Метин Древесных существ",
      "Metinul Ființelor Pădurii",
      "Metin Leśnych Istot",
      "Metin dos Seres da Árvore",
      "Metin van Boswezens",
      "Metin Lesních bytostí",
      "Metin af Skovvæsner",
      "Metin de los Seres del Árbol",
    ),
    8061: C(
      "Metin delle Foreste",
      "Metin der Wälder",
      "Metin των Δασών",
      "Metin des Forêts",
      "Erdők Metin",
      "Метин Лесов",
      "Metinul Pădurilor",
      "Metin Lasów",
      "Metin das Florestas",
      "Metin van de Bossen",
      "Metin Lesů",
      "Metin af Skovene",
      "Metin de los Bosques",
    ),
  },
  At = {
    "Patron Bilgisi": C(
      "Info Boss",
      "Boss-Info",
      "Πληροφορίες Boss",
      "Infos Boss",
      "Boss információ",
      "Информация о боссе",
      "Info Boss",
      "Informacje o bossie",
      "Info do Boss",
      "Boss-info",
      "Informace o bossovi",
      "Boss-info",
      "Info del Boss",
    ),
    "Metin Taşı": C(
      "Pietra Metin",
      "Metin-Stein",
      "Πέτρα Metin",
      "Pierre Metin",
      "Metin Kő",
      "Камень Метин",
      "Piatră Metin",
      "Kamień Metin",
      "Pedra Metin",
      "Metinsteen",
      "Metin kámen",
      "Metin-sten",
      "Piedra Metin",
    ),
    "Hedefleme Kuyrugu": C(
      "Coda bersaglio",
      "Zielwarteschlange",
      "Ουρά στόχου",
      "File de ciblage",
      "Célzási sor",
      "Очередь целей",
      "Coada țintei",
      "Kolejka celu",
      "Fila de alvo",
      "Doelwachtrij",
      "Fronta cíle",
      "Målkø",
      "Cola de objetivo",
    ),
    "Saldiri Bonuslari": C(
      "Bonus attacco",
      "Angriffsboni",
      "Μπόνους επίθεσης",
      "Bonus d’attaque",
      "Támadás bónuszok",
      "Бонусы атаки",
      "Bonusuri atac",
      "Bonusy ataku",
      "Bônus de ataque",
      "Aanvalsbonussen",
      "Bonusy útoku",
      "Angrebsbonusser",
      "Bonos de ataque",
    ),
    "Drop Listesi": C(
      "Lista drop",
      "Drop-Liste",
      "Λίστα drop",
      "Liste de drop",
      "Drop lista",
      "Список дропа",
      "Listă drop",
      "Lista dropu",
      "Lista de drop",
      "Drop-lijst",
      "Seznam dropu",
      "Drop-liste",
      "Lista de drop",
    ),
    Irk: C("Razza", "Rasse", "Φυλή", "Race", "Faj", "Раса", "Rasă", "Rasa", "Raça", "Ras", "Rasa", "Race", "Raza"),
    Bölge: C(
      "Regione",
      "Region",
      "Περιοχή",
      "Région",
      "Terület",
      "Регион",
      "Regiune",
      "Region",
      "Região",
      "Regio",
      "Oblast",
      "Region",
      "Región",
    ),
    Ork: C("Orco", "Ork", "Ορκ", "Orc", "Ork", "Орк", "Orc", "Ork", "Orc", "Ork", "Ork", "Ork", "Orco"),
    İskelet: C(
      "Scheletro",
      "Skelett",
      "Σκελετός",
      "Squelette",
      "Csontváz",
      "Скелет",
      "Schelet",
      "Szkielet",
      "Esqueleto",
      "Skelet",
      "Kostlivec",
      "Skelet",
      "Esqueleto",
    ),
    Şeytan: C(
      "Diavolo",
      "Teufel",
      "Διάβολος",
      "Diable",
      "Ördög",
      "Демон",
      "Diavol",
      "Diabeł",
      "Diabo",
      "Duivel",
      "Ďábel",
      "Djævel",
      "Diablo",
    ),
    Örümcek: C(
      "Ragno",
      "Spinne",
      "Αράχνη",
      "Araignée",
      "Pók",
      "Паук",
      "Păianjen",
      "Pająk",
      "Aranha",
      "Spin",
      "Pavouk",
      "Edderkop",
      "Araña",
    ),
    Ejderha: C(
      "Drago",
      "Drache",
      "Δράκος",
      "Dragon",
      "Sárkány",
      "Дракон",
      "Dragon",
      "Smok",
      "Dragão",
      "Draak",
      "Drak",
      "Drage",
      "Dragón",
    ),
    İnsan: C(
      "Umano",
      "Mensch",
      "Άνθρωπος",
      "Humain",
      "Ember",
      "Человек",
      "Om",
      "Człowiek",
      "Humano",
      "Mens",
      "Člověk",
      "Menneske",
      "Humano",
    ),
    Dev: C(
      "Gigante",
      "Riese",
      "Γίγαντας",
      "Géant",
      "Óriás",
      "Гигант",
      "Uriaș",
      "Olbrzym",
      "Gigante",
      "Reus",
      "Obr",
      "Kæmpe",
      "Gigante",
    ),
    Canavar: C(
      "Mostro",
      "Monster",
      "Τέρας",
      "Monstre",
      "Szörny",
      "Монстр",
      "Monstru",
      "Potwór",
      "Monstro",
      "Monster",
      "Nestvůra",
      "Monster",
      "Monstruo",
    ),
    "Köyler 1": C(
      "Villaggi 1",
      "Dörfer 1",
      "Χωριά 1",
      "Villages 1",
      "Falvak 1",
      "Деревни 1",
      "Sate 1",
      "Wioski 1",
      "Vilas 1",
      "Dorpen 1",
      "Vesnice 1",
      "Landsbyer 1",
      "Aldeas 1",
    ),
    "Köyler 2": C(
      "Villaggi 2",
      "Dörfer 2",
      "Χωριά 2",
      "Villages 2",
      "Falvak 2",
      "Деревни 2",
      "Sate 2",
      "Wioski 2",
      "Vilas 2",
      "Dorpen 2",
      "Vesnice 2",
      "Landsbyer 2",
      "Aldeas 2",
    ),
    "Seungryong Vadisi": C(
      "Valle Seungryong",
      "Seungryong-Tal",
      "Κοιλάδα Seungryong",
      "Vallée de Seungryong",
      "Seungryong-völgy",
      "Долина Сынгрионг",
      "Valea Seungryong",
      "Dolina Seungryong",
      "Vale Seungryong",
      "Seungryong-vallei",
      "Údolí Seungryong",
      "Seungryong-dalen",
      "Valle de Seungryong",
    ),
    "Yongbi Çölü": C(
      "Deserto Yongbi",
      "Yongbi-Wüste",
      "Έρημος Yongbi",
      "Désert de Yongbi",
      "Yongbi-sivatag",
      "Пустыня Ёнби",
      "Deșertul Yongbi",
      "Pustynia Yongbi",
      "Deserto de Yongbi",
      "Yongbi-woestijn",
      "Poušť Yongbi",
      "Yongbi-ørkenen",
      "Desierto Yongbi",
    ),
    "Sohan Dağı": C(
      "Monte Sohan",
      "Sohan-Berg",
      "Όρος Sohan",
      "Mont Sohan",
      "Sohan-hegy",
      "Гора Сохан",
      "Muntele Sohan",
      "Góra Sohan",
      "Monte Sohan",
      "Sohan-berg",
      "Hora Sohan",
      "Sohan-bjerget",
      "Monte Sohan",
    ),
    Doyyumhwan: C(
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Доюмхван",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
      "Doyyumhwan",
    ),
    "Hayalet Ormanı": C(
      "Foresta Fantasma",
      "Geisterwald",
      "Δάσος Φαντάσματος",
      "Forêt Fantôme",
      "Szellem-erdő",
      "Призрачный лес",
      "Pădurea Fantomă",
      "Las Duchów",
      "Floresta Fantasma",
      "Spookbos",
      "Les duchů",
      "Spøgelsesskoven",
      "Bosque Fantasma",
    ),
    "Kızıl Orman": C(
      "Foresta Cremisi",
      "Roter Wald",
      "Κόκκινο Δάσος",
      "Forêt Pourpre",
      "Vörös erdő",
      "Красный лес",
      "Pădurea Purpurie",
      "Czerwony Las",
      "Floresta Rubra",
      "Rood Woud",
      "Rudý les",
      "Den røde skov",
      "Bosque Carmesí",
    ),
    "Sürgün Mağaraları 1": C(
      "Grotte dell’Esilio 1",
      "Exilhöhlen 1",
      "Σπηλιές της Εξορίας 1",
      "Grottes de l’Exil 1",
      "Száműzetés Barlangjai 1",
      "Пещеры изгнания 1",
      "Peșterile Exilului 1",
      "Jaskinie Wygnania 1",
      "Cavernas do Exílio 1",
      "Verbanningsgrotten 1",
      "Jeskyně vyhnanství 1",
      "Eksilhulerne 1",
      "Cuevas del Exilio 1",
    ),
    "Sürgün Mağaraları 2": C(
      "Grotte dell’Esilio 2",
      "Exilhöhlen 2",
      "Σπηλιές της Εξορίας 2",
      "Grottes de l’Exil 2",
      "Száműzetés Barlangjai 2",
      "Пещеры изгнания 2",
      "Peșterile Exilului 2",
      "Jaskinie Wygnania 2",
      "Cavernas do Exílio 2",
      "Verbanningsgrotten 2",
      "Jeskyně vyhnanství 2",
      "Eksilhulerne 2",
      "Cuevas del Exilio 2",
    ),
    "Ochao Tapınağı": C(
      "Tempio di Ochao",
      "Ochao-Tempel",
      "Ναός Ochao",
      "Temple Ochao",
      "Ochao templom",
      "Храм Очхао",
      "Templul Ochao",
      "Świątynia Ochao",
      "Templo Ochao",
      "Ochao-tempel",
      "Chrám Ochao",
      "Ochao-templet",
      "Templo Ochao",
    ),
    "Ejderha Ateşi Burnu": C(
      "Capo Fiamma di Drago",
      "Drachenfeuer-Kap",
      "Ακρωτήρι της Φλόγας του Δράκου",
      "Cap du Feu du Dragon",
      "Sárkánytűz-fok",
      "Мыс Огня Дракона",
      "Capul Focului Dragonului",
      "Przylądek Smoczego Ognia",
      "Cabo do Fogo do Dragão",
      "Drakenvuurkaap",
      "Mys Dračího ohně",
      "Drageilds-kappen",
      "Cabo de Fuego del Dragón",
    ),
    "Jade Körfezi": C(
      "Baia di Giada",
      "Jadebucht",
      "Κόλπος του Νεφρίτη",
      "Baie de Jade",
      "Jáde-öböl",
      "Нефритовый залив",
      "Golful de Jad",
      "Zatoka Jadeitu",
      "Baía de Jade",
      "Jadebaai",
      "Jadeitová zátoka",
      "Jadebugten",
      "Bahía de Jade",
    ),
    "Gök Gürültüsü Dağları": C(
      "Monti del Tuono",
      "Donnerberge",
      "Βουνά της Βροντής",
      "Montagnes du Tonnerre",
      "Mennydörgés hegyei",
      "Грозовые горы",
      "Munții Tunetului",
      "Góry Gromu",
      "Montanhas do Trovão",
      "Donderbergen",
      "Hory hromu",
      "Tordenbjergene",
      "Montañas del Trueno",
    ),
    "Büyülü Orman": C(
      "Foresta Incantata",
      "Verzauberter Wald",
      "Μαγεμένο Δάσος",
      "Forêt Enchantée",
      "Elvarázsolt erdő",
      "Зачарованный лес",
      "Pădurea Fermecată",
      "Zaczarowany Las",
      "Floresta Encantada",
      "Betoverd Bos",
      "Začarovaný les",
      "Fortryllet skov",
      "Bosque Encantado",
    ),
    "Canavarlara Karsi Guc +45%": C(
      "Forte contro mostri +45%",
      "Stark gegen Monster +45%",
      "Δύναμη κατά τεράτων +45%",
      "Force contre monstres +45%",
      "Szörnyek elleni erő +45%",
      "Сила против монстров +45%",
      "Putere împotriva monștrilor +45%",
      "Siła przeciw potworom +45%",
      "Força contra monstros +45%",
      "Kracht tegen monsters +45%",
      "Síla proti monstrům +45%",
      "Styrke mod monstre +45%",
      "Fuerza contra monstruos +45%",
    ),
    "Patronlara Karsi Guc +15%": C(
      "Forte contro boss +15%",
      "Stark gegen Bosse +15%",
      "Δύναμη κατά boss +15%",
      "Force contre boss +15%",
      "Bossok elleni erő +15%",
      "Сила против боссов +15%",
      "Putere împotriva boșilor +15%",
      "Siła przeciw bossom +15%",
      "Força contra chefes +15%",
      "Kracht tegen bosses +15%",
      "Síla proti bossům +15%",
      "Styrke mod bosser +15%",
      "Fuerza contra jefes +15%",
    ),
    "Boş Şişe": C(
      "Bottiglia vuota",
      "Leere Flasche",
      "Άδειο μπουκάλι",
      "Bouteille vide",
      "Üres üveg",
      "Пустая бутылка",
      "Sticlă goală",
      "Pusta butelka",
      "Garrafa vazia",
      "Lege fles",
      "Prázdná láhev",
      "Tom flaske",
      "Botella vacía",
    ),
    "Başlangıç Elkitabı": C(
      "Manuale iniziale",
      "Anfängerhandbuch",
      "Εγχειρίδιο αρχαρίου",
      "Manuel de départ",
      "Kezdő kézikönyv",
      "Руководство новичка",
      "Manual de început",
      "Podręcznik początkującego",
      "Manual inicial",
      "Beginnershandboek",
      "Příručka začátečníka",
      "Begynderhåndbog",
      "Manual inicial",
    ),
    "Beceri Parşomeni": C(
      "Pergamena abilità",
      "Fertigkeiten-Schriftrolle",
      "Περγαμηνή δεξιότητας",
      "Parchemin de compétence",
      "Képesség tekercs",
      "Свиток навыка",
      "Pergament abilitate",
      "Zwój umiejętności",
      "Pergaminho de habilidade",
      "Vaardigheidsrol",
      "Svitek dovednosti",
      "Færdighedsrulle",
      "Pergamino de habilidad",
    ),
    "Beyaz İnci": C(
      "Perla Bianca",
      "Weiße Perle",
      "Λευκό Μαργαριτάρι",
      "Perle Blanche",
      "Fehér gyöngy",
      "Белая жемчужина",
      "Perlă Albă",
      "Biała Perła",
      "Pérola Branca",
      "Witte Parel",
      "Bílá perla",
      "Hvid perle",
      "Perla Blanca",
    ),
    "Mavi İnci": C(
      "Perla Blu",
      "Blaue Perle",
      "Μπλε Μαργαριτάρι",
      "Perle Bleue",
      "Kék gyöngy",
      "Синяя жемчужина",
      "Perlă Albastră",
      "Niebieska Perła",
      "Pérola Azul",
      "Blauwe Parel",
      "Modrá perla",
      "Blå perle",
      "Perla Azul",
    ),
    "Yang Kesesi": C(
      "Borsa Yang",
      "Yang-Beutel",
      "Πουγκί Yang",
      "Sac de Yang",
      "Yang zacskó",
      "Мешочек Янгов",
      "Pungă Yang",
      "Sakiewka Yang",
      "Bolsa de Yang",
      "Yang-zak",
      "Váček Yang",
      "Yang-pose",
      "Bolsa de Yang",
    ),
  },
  Qo = {
    it: [
      ["Metin Stone", "Pietra Metin"],
      ["Metin of ", "Metin del "],
      ["Metin of the ", "Metin delle "],
      ["Boss Info", "Info Boss"],
      ["Target Queue", "Coda bersaglio"],
      ["Damage Bonuses", "Bonus attacco"],
      ["Drop List", "Lista drop"],
      ["Race", "Razza"],
      ["Region", "Regione"],
      ["Orc", "Orco"],
      ["Skeleton", "Scheletro"],
      ["Devil", "Diavolo"],
      ["Spider", "Ragno"],
      ["Dragon", "Drago"],
      ["Human", "Umano"],
      ["Giant", "Gigante"],
      ["Monster", "Mostro"],
      ["Villages", "Villaggi"],
      ["Valley", "Valle"],
      ["Desert", "Deserto"],
      ["Mountain", "Monte"],
      ["Forest", "Foresta"],
      ["Temple", "Tempio"],
      ["Cape", "Capo"],
      ["Bay", "Baia"],
      ["Caves", "Grotte"],
      ["Bottle", "Bottiglia"],
      ["Manual", "Manuale"],
      ["Scroll", "Pergamena"],
      ["Pearl", "Perla"],
      ["Chest", "Scrigno"],
      ["Claw", "Artiglio"],
      ["Wheel", "Ruota"],
      ["Elixir", "Elisir"],
      ["Blessing", "Benedizione"],
      ["Exorcism", "Esorcismo"],
      ["Advice", "Consiglio"],
      ["Fragment", "Frammento"],
      ["Stone", "Pietra"],
      ["Mane", "Criniera"],
      ["Brochure", "Manuale"],
      ["Egg", "Uovo"],
      ["Metal", "Metallo"],
      ["Coins", "Monete"],
      ["Ticket", "Biglietto"],
      ["Bean", "Fagiolo"],
      ["Crystal", "Cristallo"],
      ["Shield", "Scudo"],
      ["Hat", "Cappello"],
      ["Mask", "Maschera"],
      ["Shoes", "Scarpe"],
    ],
    de: [
      ["Metin Stone", "Metin-Stein"],
      ["Metin of ", "Metin der "],
      ["Metin of the ", "Metin der "],
      ["Boss Info", "Boss-Info"],
      ["Target Queue", "Zielwarteschlange"],
      ["Damage Bonuses", "Angriffsboni"],
      ["Drop List", "Drop-Liste"],
      ["Race", "Rasse"],
      ["Region", "Region"],
      ["Orc", "Ork"],
      ["Skeleton", "Skelett"],
      ["Devil", "Teufel"],
      ["Spider", "Spinne"],
      ["Dragon", "Drache"],
      ["Human", "Mensch"],
      ["Giant", "Riese"],
      ["Monster", "Monster"],
      ["Villages", "Dörfer"],
      ["Valley", "Tal"],
      ["Desert", "Wüste"],
      ["Mountain", "Berg"],
      ["Forest", "Wald"],
      ["Temple", "Tempel"],
      ["Cape", "Kap"],
      ["Bay", "Bucht"],
      ["Caves", "Höhlen"],
      ["Bottle", "Flasche"],
      ["Manual", "Handbuch"],
      ["Scroll", "Schriftrolle"],
      ["Pearl", "Perle"],
      ["Chest", "Truhe"],
      ["Claw", "Klaue"],
      ["Wheel", "Rad"],
      ["Elixir", "Elixier"],
      ["Blessing", "Segens"],
      ["Exorcism", "Exorzismus"],
      ["Advice", "Rat"],
      ["Fragment", "Fragment"],
      ["Stone", "Stein"],
      ["Mane", "Mähne"],
      ["Brochure", "Broschüre"],
      ["Egg", "Ei"],
      ["Metal", "Metall"],
      ["Coins", "Münzen"],
      ["Ticket", "Ticket"],
      ["Bean", "Bohne"],
      ["Crystal", "Kristall"],
      ["Shield", "Schild"],
      ["Hat", "Hut"],
      ["Mask", "Maske"],
      ["Shoes", "Schuhe"],
    ],
    fr: [
      ["Metin Stone", "Pierre Metin"],
      ["Metin of ", "Metin de "],
      ["Metin of the ", "Metin des "],
      ["Boss Info", "Infos Boss"],
      ["Target Queue", "File de ciblage"],
      ["Damage Bonuses", "Bonus d’attaque"],
      ["Drop List", "Liste de drop"],
      ["Race", "Race"],
      ["Region", "Région"],
      ["Orc", "Orc"],
      ["Skeleton", "Squelette"],
      ["Devil", "Diable"],
      ["Spider", "Araignée"],
      ["Dragon", "Dragon"],
      ["Human", "Humain"],
      ["Giant", "Géant"],
      ["Monster", "Monstre"],
      ["Villages", "Villages"],
      ["Valley", "Vallée"],
      ["Desert", "Désert"],
      ["Mountain", "Mont"],
      ["Forest", "Forêt"],
      ["Temple", "Temple"],
      ["Cape", "Cap"],
      ["Bay", "Baie"],
      ["Caves", "Grottes"],
      ["Bottle", "Bouteille"],
      ["Manual", "Manuel"],
      ["Scroll", "Parchemin"],
      ["Pearl", "Perle"],
      ["Chest", "Coffre"],
      ["Claw", "Griffe"],
      ["Wheel", "Roue"],
      ["Elixir", "Élixir"],
      ["Blessing", "Bénédiction"],
      ["Exorcism", "Exorcisme"],
      ["Advice", "Conseil"],
      ["Fragment", "Fragment"],
      ["Stone", "Pierre"],
      ["Mane", "Crinière"],
      ["Brochure", "Brochure"],
      ["Egg", "Œuf"],
      ["Metal", "Métal"],
      ["Coins", "Pièces"],
      ["Ticket", "Ticket"],
      ["Bean", "Fève"],
      ["Crystal", "Cristal"],
      ["Shield", "Bouclier"],
      ["Hat", "Chapeau"],
      ["Mask", "Masque"],
      ["Shoes", "Chaussures"],
    ],
    ru: [
      ["Metin Stone", "Камень Метин"],
      ["Metin of ", "Метин "],
      ["Metin of the ", "Метин "],
      ["Boss Info", "Информация о боссе"],
      ["Target Queue", "Очередь целей"],
      ["Damage Bonuses", "Бонусы атаки"],
      ["Drop List", "Список дропа"],
      ["Race", "Раса"],
      ["Region", "Регион"],
      ["Orc", "Орк"],
      ["Skeleton", "Скелет"],
      ["Devil", "Дьявол"],
      ["Spider", "Паук"],
      ["Dragon", "Дракон"],
      ["Human", "Человек"],
      ["Giant", "Гигант"],
      ["Monster", "Монстр"],
      ["Villages", "Деревни"],
      ["Valley", "Долина"],
      ["Desert", "Пустыня"],
      ["Mountain", "Гора"],
      ["Forest", "Лес"],
      ["Temple", "Храм"],
      ["Cape", "Мыс"],
      ["Bay", "Залив"],
      ["Caves", "Пещеры"],
      ["Bottle", "Бутылка"],
      ["Manual", "Руководство"],
      ["Scroll", "Свиток"],
      ["Pearl", "Жемчужина"],
      ["Chest", "Сундук"],
      ["Claw", "Коготь"],
      ["Wheel", "Колесо"],
      ["Elixir", "Эликсир"],
      ["Blessing", "Благословение"],
      ["Exorcism", "Экзорцизм"],
      ["Advice", "Совет"],
      ["Fragment", "Фрагмент"],
      ["Stone", "Камень"],
      ["Mane", "Грива"],
      ["Brochure", "Брошюра"],
      ["Egg", "Яйцо"],
      ["Metal", "Металл"],
      ["Coins", "Монеты"],
      ["Ticket", "Билет"],
      ["Bean", "Боб"],
      ["Crystal", "Кристалл"],
      ["Shield", "Щит"],
      ["Hat", "Шляпа"],
      ["Mask", "Маска"],
      ["Shoes", "Ботинки"],
    ],
    es: [
      ["Metin Stone", "Piedra Metin"],
      ["Metin of ", "Metin de "],
      ["Metin of the ", "Metin de los "],
      ["Boss Info", "Info del Boss"],
      ["Target Queue", "Cola de objetivo"],
      ["Damage Bonuses", "Bonos de ataque"],
      ["Drop List", "Lista de drop"],
      ["Race", "Raza"],
      ["Region", "Región"],
      ["Orc", "Orco"],
      ["Skeleton", "Esqueleto"],
      ["Devil", "Diablo"],
      ["Spider", "Araña"],
      ["Dragon", "Dragón"],
      ["Human", "Humano"],
      ["Giant", "Gigante"],
      ["Monster", "Monstruo"],
      ["Villages", "Aldeas"],
      ["Valley", "Valle"],
      ["Desert", "Desierto"],
      ["Mountain", "Monte"],
      ["Forest", "Bosque"],
      ["Temple", "Templo"],
      ["Cape", "Cabo"],
      ["Bay", "Bahía"],
      ["Caves", "Cuevas"],
      ["Bottle", "Botella"],
      ["Manual", "Manual"],
      ["Scroll", "Pergamino"],
      ["Pearl", "Perla"],
      ["Chest", "Cofre"],
      ["Claw", "Garra"],
      ["Wheel", "Rueda"],
      ["Elixir", "Elixir"],
      ["Blessing", "Bendición"],
      ["Exorcism", "Exorcismo"],
      ["Advice", "Consejo"],
      ["Fragment", "Fragmento"],
      ["Stone", "Piedra"],
      ["Mane", "Melena"],
      ["Brochure", "Folleto"],
      ["Egg", "Huevo"],
      ["Metal", "Metal"],
      ["Coins", "Monedas"],
      ["Ticket", "Boleto"],
      ["Bean", "Frijol"],
      ["Crystal", "Cristal"],
      ["Shield", "Escudo"],
      ["Hat", "Sombrero"],
      ["Mask", "Máscara"],
      ["Shoes", "Zapatos"],
    ],
  };
function Ca(e, t) {
  if (t === "tr" || t === "en") return e;
  const n = Qo[t];
  if (!n) return e;
  let a = e;
  for (const [i, l] of n.sort((s, r) => r[0].length - s[0].length)) a = a.split(i).join(l);
  return a;
}
function es() {
  return xe.getState().language;
}
function de(e, t, n) {
  const a = es(),
    i = e[t];
  return i ? (i[a] ?? (i.en ? Ca(i.en, a) : void 0) ?? i.tr ?? n) : a === "en" ? n : Ca(n, a);
}
const ts = {
    arms: { tr: "Silahçı", en: "Weapon Dealer" },
    blacksmith: { tr: "Demirci", en: "Blacksmith" },
    goods: { tr: "Satıcı", en: "Merchant" },
    hotel_grandma: { tr: "Yaşlı Kadın", en: "Old Lady" },
    baby_and_mom: { tr: "Ah-Yu", en: "Ah-Yu" },
    auntie: { tr: "Aranyo", en: "Aranyo" },
    defence: { tr: "Zırh Satıcısı", en: "Armor Dealer" },
    storekeeper: { tr: "Depocu", en: "Storekeeper" },
    woodcutter: { tr: "Deokbae", en: "Deokbae" },
    timid_boy: { tr: "Seyis", en: "Stable Keeper" },
    captain: { tr: "Kaptan", en: "Captain" },
    guardian: { tr: "Muhafız Ruhu", en: "Guardian" },
    uriel: { tr: "Uriel", en: "Uriel" },
    horse_1: { tr: "At", en: "Horse" },
    horse_2: { tr: "At", en: "Horse" },
    horse_3: { tr: "At", en: "Horse" },
    guard_1: { tr: "Muhafız", en: "Guard" },
    guard_2: { tr: "Muhafız", en: "Guard" },
    guard_3: { tr: "Muhafız", en: "Guard" },
    guard_4: { tr: "Muhafız", en: "Guard" },
    guard_5: { tr: "Muhafız", en: "Guard" },
    guard_6: { tr: "Muhafız", en: "Guard" },
    guard_7: { tr: "Muhafız", en: "Guard" },
    guard_8: { tr: "Muhafız", en: "Guard" },
    konfucyus: { tr: "Konfüçyüs", en: "Confucius" },
  },
  ns = {
    orc_lord: { tr: "Ork Reisi", en: "Orc Chief" },
    smhtower_king: { tr: "Lucifer", en: "Lucifer" },
    spider_queen: { tr: "Kraliçe Örümcek", en: "Spider Queen" },
    skeleton_king: { tr: "İskelet Kral", en: "Skeleton King" },
    blue_dragon: { tr: "Mavi Ejderha", en: "Blue Dragon" },
    reddragon_room_boss2: { tr: "Kızıl Ejderha", en: "Red Dragon" },
    keyto_monster_baphomet: { tr: "Baphomet", en: "Baphomet" },
    fire_dragon: { tr: "Alev Ejderi", en: "Fire Dragon" },
    jotun_thrym: { tr: "Jotun Thrym", en: "Jotun Thrym" },
    yamachun_boss: { tr: "Razadör", en: "Razador" },
    nemere: { tr: "Nemere", en: "Nemere" },
    defensewave_hydra_boss: { tr: "Hydra", en: "Hydra" },
  },
  as = {
    8001: { tr: "Üzüntü Metini", en: "Metin of Sorrow" },
    8002: { tr: "Dövüş Metini", en: "Metin of Combat" },
    8003: { tr: "Savaş Metini", en: "Metin of Battle" },
    8004: { tr: "Hırs Metini", en: "Metin of Greed" },
    8005: { tr: "Siyah Metini", en: "Metin of Black" },
    8006: { tr: "Karanlık Metini", en: "Metin of Darkness" },
    8007: { tr: "Kıskançlık Metini", en: "Metin of Jealousy" },
    8008: { tr: "Ruh Metini", en: "Metin of Soul" },
    8009: { tr: "Gölge Metini", en: "Metin of Shadow" },
    8010: { tr: "Dayanıklılık Metini", en: "Metin of Toughness" },
    8011: { tr: "Şeytan Metini", en: "Metin of Devil" },
    8013: { tr: "Ölüm Metini", en: "Metin of Death" },
    8014: { tr: "Katil Metini", en: "Metin of Murder" },
    8024: { tr: "Metin Pung-Ma", en: "Metin Pung-Ma" },
    8025: { tr: "Metin Ma-An", en: "Metin Ma-An" },
    8026: { tr: "Metin Tu-Young", en: "Metin Tu-Young" },
    8027: { tr: "Metin Jeon-Un", en: "Metin Jeon-Un" },
    8303: { tr: "Setaou Metin Taşı", en: "Setaou Metin Stone" },
    8304: { tr: "Setaou Metin Taşı", en: "Setaou Metin Stone" },
    8305: { tr: "Ochao Taşı", en: "Ochao Stone" },
    8051: { tr: "Işıksızlık Metini", en: "Metin of Gloom" },
    8052: { tr: "Kor Metini", en: "Metin of Ember" },
    8053: { tr: "Kibir Metini", en: "Metin of Vanity" },
    8054: { tr: "Öfke Metini", en: "Metin of Wrath" },
    8055: { tr: "Felaket Metini", en: "Metin of Calamity" },
    8056: { tr: "Kötülük Metini", en: "Metin of Malice" },
    8059: { tr: "Ağaç Varlıkları Metini", en: "Metin of the Tree Beings" },
    8061: { tr: "Orman Metini", en: "Metin of the Forests" },
  },
  Bt = {
    "Patron Bilgisi": { tr: "Patron Bilgisi", en: "Boss Info" },
    "Metin Taşı": { tr: "Metin Taşı", en: "Metin Stone" },
    "Hedefleme Kuyrugu": { tr: "Hedefleme Kuyruğu", en: "Target Queue" },
    "Saldiri Bonuslari": { tr: "Saldırı Bonusları", en: "Damage Bonuses" },
    "Drop Listesi": { tr: "Drop Listesi", en: "Drop List" },
    Irk: { tr: "Irk", en: "Race" },
    Bölge: { tr: "Bölge", en: "Region" },
    Ork: { tr: "Ork", en: "Orc" },
    İskelet: { tr: "İskelet", en: "Skeleton" },
    Şeytan: { tr: "Şeytan", en: "Devil" },
    Örümcek: { tr: "Örümcek", en: "Spider" },
    Ejderha: { tr: "Ejderha", en: "Dragon" },
    İnsan: { tr: "İnsan", en: "Human" },
    Dev: { tr: "Dev", en: "Giant" },
    Canavar: { tr: "Canavar", en: "Monster" },
    "Köyler 1": { tr: "Köyler 1", en: "Villages 1" },
    "Köyler 2": { tr: "Köyler 2", en: "Villages 2" },
    "Seungryong Vadisi": { tr: "Seungryong Vadisi", en: "Seungryong Valley" },
    "Yongbi Çölü": { tr: "Yongbi Çölü", en: "Yongbi Desert" },
    "Sohan Dağı": { tr: "Sohan Dağı", en: "Sohan Mountain" },
    Doyyumhwan: { tr: "Doyyumhwan", en: "Doyyumhwan" },
    "Hayalet Ormanı": { tr: "Hayalet Ormanı", en: "Ghost Forest" },
    "Kızıl Orman": { tr: "Kızıl Orman", en: "Red Forest" },
    "Sürgün Mağaraları 1": { tr: "Sürgün Mağaraları 1", en: "Exile Caves 1" },
    "Sürgün Mağaraları 2": { tr: "Sürgün Mağaraları 2", en: "Exile Caves 2" },
    "Ochao Tapınağı": { tr: "Ochao Tapınağı", en: "Ochao Temple" },
    "Ejderha Ateşi Burnu": { tr: "Ejderha Ateşi Burnu", en: "Dragon Fire Cape" },
    "Jade Körfezi": { tr: "Jade Körfezi", en: "Jade Bay" },
    "Gök Gürültüsü Dağları": { tr: "Gök Gürültüsü Dağları", en: "Thunder Mountains" },
    "Büyülü Orman": { tr: "Büyülü Orman", en: "Enchanted Forest" },
    "Canavarlara Karsi Guc +45%": { tr: "Canavarlara Karşı Güç +45%", en: "Strength Against Monsters +45%" },
    "Patronlara Karsi Guc +15%": { tr: "Patronlara Karşı Güç +15%", en: "Strength Against Bosses +15%" },
    "Boş Şişe": { tr: "Boş Şişe", en: "Empty Bottle" },
    "Cor Draconis": { tr: "Cor Draconis", en: "Cor Draconis" },
    "Başlangıç Elkitabı": { tr: "Başlangıç Elkitabı", en: "Beginner Manual" },
    "Ekipman Sandığı (I)": { tr: "Ekipman Sandığı (I)", en: "Equipment Chest (I)" },
    Elmas: { tr: "Elmas", en: "Diamond" },
    "Biyolog Taşı": { tr: "Biyolog Taşı", en: "Biologist Stone" },
    "Lusifer Sandığı": { tr: "Lusifer Sandığı", en: "Lucifer Chest" },
    "Celladın Tırnağı": { tr: "Celladın Tırnağı", en: "Executioner Claw" },
    "Beyaz İnci": { tr: "Beyaz İnci", en: "White Pearl" },
    "Mavi İnci": { tr: "Mavi İnci", en: "Blue Pearl" },
    "Kankırmızı İnci": { tr: "Kankırmızı İnci", en: "Blood-Red Pearl" },
    "Süs Taşı": { tr: "Süs Taşı", en: "Ornamental Stone" },
    "Demircinin El Kitabı": { tr: "Demircinin El Kitabı", en: "Blacksmith Manual" },
    "Araştırmacının Özütü": { tr: "Araştırmacının Özütü", en: "Researcher Elixir" },
    "Hızlandırıcı (%75)": { tr: "Hızlandırıcı (%75)", en: "Accelerator (75%)" },
    "Zindan Çarkı": { tr: "Zindan Çarkı", en: "Dungeon Wheel" },
    "Cor Ender": { tr: "Cor Ender", en: "Cor Ender" },
    "Beceri Parşomeni": { tr: "Beceri Parşomeni", en: "Skill Scroll" },
    "Efsun Nesnesi": { tr: "Efsun Nesnesi", en: "Enchant Item" },
    "Kutsama Kağıdı": { tr: "Kutsama Kağıdı", en: "Blessing Scroll" },
    "Kötü Ruh Kovma Kağıdı": { tr: "Kötü Ruh Kovma Kağıdı", en: "Exorcism Scroll" },
    "Münzevi Tavsiyesi": { tr: "Münzevi Tavsiyesi", en: "Hermit Advice" },
    "Ejderha Taşı Parçası": { tr: "Ejderha Taşı Parçası", en: "Dragon Stone Fragment" },
    "Yang Kesesi": { tr: "Yang Kesesi", en: "Yang Pouch" },
    "Zümrüt Taşı": { tr: "Zümrüt Taşı", en: "Emerald Stone" },
    "Alev Yelesi": { tr: "Alev Yelesi", en: "Flame Mane" },
    "Ekipman Sandığı (III)": { tr: "Ekipman Sandığı (III)", en: "Equipment Chest (III)" },
    "Mavi Ejderha Sandığı": { tr: "Mavi Ejderha Sandığı", en: "Blue Dragon Chest" },
    "Kızıl Gözyaşı Küpeleri+0": { tr: "Kızıl Gözyaşı Küpeleri+0", en: "Crimson Tear Earrings +0" },
    "Ekipman Broşürü": { tr: "Ekipman Broşürü", en: "Equipment Brochure" },
    "Ejderha Alevi (B)": { tr: "Ejderha Alevi (B)", en: "Dragon Flame (B)" },
    "Genç Pet Kitabı": { tr: "Genç Pet Kitabı", en: "Young Pet Book" },
    "Pet Kitabı Sandığı": { tr: "Pet Kitabı Sandığı", en: "Pet Book Chest" },
    "Mavi Ejderha Yumurtası": { tr: "Mavi Ejderha Yumurtası", en: "Blue Dragon Egg" },
    "Büyülü Metal": { tr: "Büyülü Metal", en: "Magic Metal" },
    "Patron Parşomeni (1 Gün)": { tr: "Patron Parşomeni (1 Gün)", en: "Boss Scroll (1 Day)" },
    "Antika Ejderha Ametisti": { tr: "Antika Ejderha Ametisti", en: "Antique Dragon Amethyst" },
    "Ejderha Ametisti Parçası": { tr: "Ejderha Ametisti Parçası", en: "Dragon Amethyst Fragment" },
    "Razadör'ün Sandığı": { tr: "Razadör'ün Sandığı", en: "Razador Chest" },
    "Ork Kapşonu +0": { tr: "Ork Kapşonu +0", en: "Orc Hood +0" },
    "Boynuzlu Kask +0": { tr: "Boynuzlu Kask +0", en: "Horned Helmet +0" },
    "Kardinal Şapkası +0": { tr: "Kardinal Şapkası +0", en: "Cardinal Hat +0" },
    "Korku Maskesi +0": { tr: "Korku Maskesi +0", en: "Mask of Fear +0" },
    "Anka Ayakkabı +0": { tr: "Anka Ayakkabı +0", en: "Phoenix Shoes +0" },
    "Yabani Pet Kitabı": { tr: "Yabani Pet Kitabı", en: "Wild Pet Book" },
    "Razadör Yumurtası": { tr: "Razadör Yumurtası", en: "Razador Egg" },
    "Savaş Bileti": { tr: "Savaş Bileti", en: "Battle Ticket" },
    "İsim İzi (Buffi)": { tr: "İsim İzi (Buffi)", en: "Name Trace (Buffi)" },
    "Okçular Dibinde (1 Gün)": { tr: "Okçular Dibinde (1 Gün)", en: "At the Archers' Feet (1 Day)" },
    "Patron Parşomeni (7 Gün)": { tr: "Patron Parşomeni (7 Gün)", en: "Boss Scroll (7 Days)" },
    "Ejderha Parası (20)": { tr: "Ejderha Parası (20)", en: "Dragon Coins (20)" },
    "Nemere Sandığı": { tr: "Nemere Sandığı", en: "Nemere Chest" },
    "Titan Kalkanı +0": { tr: "Titan Kalkanı +0", en: "Titan Shield +0" },
    "Nemere Yumurtası": { tr: "Nemere Yumurtası", en: "Nemere Egg" },
    "Jotun Sandığı": { tr: "Jotun Sandığı", en: "Jotun Chest" },
    Obsidyen: { tr: "Obsidyen", en: "Obsidian" },
    "Hydra Sandığı": { tr: "Hydra Sandığı", en: "Hydra Chest" },
    "Nessie Yumurtası": { tr: "Nessie Yumurtası", en: "Nessie Egg" },
    "Özel Pet Kitabı (I)": { tr: "Özel Pet Kitabı (I)", en: "Special Pet Book (I)" },
    "Özel Pet Kitabı (II)": { tr: "Özel Pet Kitabı (II)", en: "Special Pet Book (II)" },
    "Cesur Pet Kitabı": { tr: "Cesur Pet Kitabı", en: "Brave Pet Book" },
    "Ateş Kristali": { tr: "Ateş Kristali", en: "Fire Crystal" },
    "Grena Parçası": { tr: "Grena Parçası", en: "Grena Fragment" },
    "Kıymetli Taş": { tr: "Kıymetli Taş", en: "Precious Stone" },
    "Zen Fasulye": { tr: "Zen Fasulye", en: "Zen Bean" },
    "Ruh Taşı": { tr: "Ruh Taşı", en: "Soul Stone" },
    "Safir Parçası": { tr: "Safir Parçası", en: "Sapphire Fragment" },
    "Yeşil Ejderha Fasulyesi": { tr: "Yeşil Ejderha Fasulyesi", en: "Green Dragon Bean" },
    "Lezzetli Lokma": { tr: "Lezzetli Lokma", en: "Tasty Bite" },
    "Buz Kristali": { tr: "Buz Kristali", en: "Ice Crystal" },
    "Rüzgar Kristali": { tr: "Rüzgar Kristali", en: "Wind Crystal" },
    "Toprak Kristali": { tr: "Toprak Kristali", en: "Earth Crystal" },
    "Karanlık Kristali": { tr: "Karanlık Kristali", en: "Dark Crystal" },
    "Şimşek Kristali": { tr: "Şimşek Kristali", en: "Lightning Crystal" },
    "Turmalin Parçası": { tr: "Turmalin Parçası", en: "Tourmaline Fragment" },
    "Kırılmış Taş Parçası": { tr: "Kırılmış Taş Parçası", en: "Broken Stone Fragment" },
    "Ruh Parçası": { tr: "Ruh Parçası", en: "Soul Fragment" },
    "Enerji Parçası": { tr: "Enerji Parçası", en: "Energy Fragment" },
    "Enerji Parçası+": { tr: "Enerji Parçası+", en: "Energy Fragment+" },
    "Ochao Parçası (I)": { tr: "Ochao Parçası (I)", en: "Ochao Fragment (I)" },
    "Ochao Parçası (II)": { tr: "Ochao Parçası (II)", en: "Ochao Fragment (II)" },
    "Ochao Parçası (III)": { tr: "Ochao Parçası (III)", en: "Ochao Fragment (III)" },
    "Sürgün Parçası (I)": { tr: "Sürgün Parçası (I)", en: "Exile Fragment (I)" },
    "Sürgün Parçası (II)": { tr: "Sürgün Parçası (II)", en: "Exile Fragment (II)" },
    "Sürgün Parçası (III)": { tr: "Sürgün Parçası (III)", en: "Exile Fragment (III)" },
  };
function is(e, t) {
  return de(Zo, e, "") || de(ts, e, t);
}
function na(e, t) {
  return de(Xo, e, "") || de(ns, e, t);
}
function aa(e, t) {
  const n = String(e);
  return de(Jo, n, "") || de(as, n, t);
}
function qe(e) {
  if (!e) return e;
  if (e.startsWith("Irk: ")) {
    const n = e.slice(5),
      a = de(At, "Irk", de(Bt, "Irk", "Irk")),
      i = de(At, n, de(Bt, n, n));
    return `${a}: ${i}`;
  }
  if (e.startsWith("Bölge: ")) {
    const n = e.slice(7),
      a = de(At, "Bölge", de(Bt, "Bölge", "Bölge")),
      i = de(At, n, de(Bt, n, n));
    return `${a}: ${i}`;
  }
  return de(At, e, "") || de(Bt, e, e);
}
function rs(e) {
  return {
    ...e,
    title: qe(e.title),
    subtitle: e.subtitle ? qe(e.subtitle) : void 0,
    category: e.category ? qe(e.category) : void 0,
    queueLabel: e.queueLabel ? qe(e.queueLabel) : void 0,
    bonusesTitle: e.bonusesTitle ? qe(e.bonusesTitle) : void 0,
    bonuses: e.bonuses?.map(qe),
    dropsTitle: e.dropsTitle ? qe(e.dropsTitle) : void 0,
    drops: e.drops.map((t) => ({ ...t, name: qe(t.name) })),
  };
}
const jn = 0.075,
  os = 0.02,
  ss = 1.5,
  ls = 0.0025,
  cs = 0.07,
  Ra = 1.2,
  Ia = 0.8,
  us = Ra * Ra,
  ds = Ia * Ia;
function ps(e) {
  const t = Oi(`npc.${e}`);
  return t ? `[${t}]` : "";
}
function ms({ path: e, scale: t, visibleRef: n }) {
  const a = z.useRef(null),
    i = z.useRef(null),
    { scene: l, animations: s } = We(e),
    r = z.useMemo(() => {
      const c = Ct(l);
      return (
        c.traverse((g) => {
          if (g.isMesh) {
            const u = g,
              p = Array.isArray(u.material) ? u.material : [u.material];
            for (const m of p)
              if (m.isMeshStandardMaterial) {
                const h = m;
                ((h.side = Ve),
                  (h.metalness = Math.min(h.metalness, 0.1)),
                  (h.roughness = Math.max(h.roughness, 0.6)),
                  (h.emissive = new nt(2236962)),
                  (h.emissiveIntensity = 0.3),
                  (h.needsUpdate = !0));
              }
          }
        }),
        c
      );
    }, [l]);
  return (
    z.useEffect(() => {
      if (!a.current || s.length === 0) return;
      const c = new hn(a.current);
      i.current = c;
      const g = s.find((p) => /wait|stand|idle/i.test(p.name)) || s[0],
        u = c.clipAction(g);
      return (
        u.setLoop(xt, 1 / 0),
        u.play(),
        () => {
          (c.stopAllAction(), a.current && c.uncacheRoot(a.current));
        }
      );
    }, [s]),
    _e((c, g) => {
      n.current && i.current?.update(g);
    }),
    o.jsx("group", { ref: a, children: o.jsx("primitive", { object: r, scale: t }) })
  );
}
function gs({ type: e, visibleRef: t }) {
  const n = z.useRef(null),
    a = qi[e];
  return (
    _e((i) => {
      !t.current || !n.current || (n.current.position.y = jn / 2 + Math.sin(i.clock.elapsedTime * ss) * ls);
    }),
    o.jsxs("mesh", {
      ref: n,
      position: [0, jn / 2, 0],
      castShadow: !0,
      children: [
        o.jsx("capsuleGeometry", { args: [os, jn, 8, 16] }),
        o.jsx("meshStandardMaterial", { color: a, roughness: 0.4, metalness: 0.1 }),
      ],
    })
  );
}
function hs({ data: e, onClick: t }) {
  xe((y) => y.language);
  const { id: n, name: a, type: i, position: l, rotation: s = 0, modelPath: r, scale: c = 1, hideLabel: g } = e,
    u = z.useRef(null),
    p = z.useRef(null),
    m = z.useRef(!0),
    h = `npc.name.${n}`,
    S = Oi(h),
    M = S !== h ? S : is(n, a),
    w = qi[i],
    f = ps(i);
  return (
    _e(() => {
      if (!u.current) return;
      const y = re.getState().position,
        x = l[0] - y.x,
        b = l[2] - y.z,
        v = x * x + b * b,
        B = v < us;
      (m.current !== B && ((m.current = B), (u.current.visible = B)),
        p.current && (p.current.style.display = v < ds ? "" : "none"));
    }),
    o.jsxs("group", {
      ref: u,
      position: l,
      rotation: [0, s, 0],
      onClick: (y) => {
        (y.stopPropagation(), t?.(e));
      },
      onPointerOver: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/talk.png'), pointer";
      },
      onPointerOut: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/default.png'), auto";
      },
      userData: { npcId: n },
      children: [
        r ? o.jsx(ms, { path: r, scale: c, visibleRef: m }) : o.jsx(gs, { type: i, visibleRef: m }),
        !g &&
          o.jsx(mn, {
            position: [0, cs, 0],
            center: !0,
            distanceFactor: 0.5,
            style: { pointerEvents: "none", zIndex: 1 },
            zIndexRange: [1, 1],
            children: o.jsxs("div", {
              ref: p,
              style: { textAlign: "center", whiteSpace: "nowrap", userSelect: "none" },
              children: [
                o.jsx("div", {
                  style: {
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 2px #000, -1px -1px 2px #000",
                  },
                  children: M,
                }),
                f &&
                  o.jsx("div", { style: { color: w, fontSize: "9px", textShadow: "1px 1px 1px #000" }, children: f }),
              ],
            }),
          }),
      ],
    })
  );
}
function F(e) {
  return Math.round(e * e * 50 + e * 500);
}
const fs = -2.95,
  ys = 15.36,
  bs = -0.26,
  Da = 0.35,
  Fi = 28;
function G(e) {
  const t = (e / Fi) * Math.PI * 2;
  return [fs + Math.cos(t) * Da, ys, bs + Math.sin(t) * Da];
}
function H(e) {
  return (e / Fi) * Math.PI * 2 + Math.PI;
}
const xs = [
    {
      id: 8001,
      name: "Metin of Sorrow",
      level: 5,
      area: "Villages 1",
      modelPath: "/models/mob/stone_tex01.glb",
      position: G(0),
      rotation: H(0),
      scale: 0.03,
      maxHp: F(5),
    },
    {
      id: 8002,
      name: "Metin of Combat",
      level: 10,
      area: "Villages 1",
      modelPath: "/models/mob/stone_tex02.glb",
      position: G(1),
      rotation: H(1),
      scale: 0.03,
      maxHp: F(10),
      auraColor: "#00cccc",
    },
    {
      id: 8003,
      name: "Metin of Battle",
      level: 15,
      area: "Villages 1",
      modelPath: "/models/mob/stone_tex03.glb",
      position: G(2),
      rotation: H(2),
      scale: 0.03,
      maxHp: F(15),
      auraColor: "#cccc00",
    },
    {
      id: 8004,
      name: "Metin of Greed",
      level: 20,
      area: "Villages 1",
      modelPath: "/models/mob/stone_tex04.glb",
      position: G(3),
      rotation: H(3),
      scale: 0.03,
      maxHp: F(20),
      auraColor: "#cc66aa",
    },
    {
      id: 8005,
      name: "Metin of Black",
      level: 25,
      area: "Villages 2",
      modelPath: "/models/mob/stone_tex05.glb",
      position: G(4),
      rotation: H(4),
      scale: 0.03,
      maxHp: F(25),
      auraColor: "#cc6600",
    },
    {
      id: 8006,
      name: "Metin of Darkness",
      level: 30,
      area: "Villages 2",
      modelPath: "/models/mob/stone_tex06.glb",
      position: G(5),
      rotation: H(5),
      scale: 0.03,
      maxHp: F(30),
      auraColor: "#cc6600",
    },
    {
      id: 8007,
      name: "Metin of Jealousy",
      level: 35,
      area: "Villages 2",
      modelPath: "/models/mob/stone_tex07.glb",
      position: G(6),
      rotation: H(6),
      scale: 0.03,
      maxHp: F(35),
      auraColor: "#aa44aa",
    },
    {
      id: 8008,
      name: "Metin of Soul",
      level: 40,
      area: "Seungryong Valley",
      modelPath: "/models/mob/stone_tex08.glb",
      position: G(7),
      rotation: H(7),
      scale: 0.03,
      maxHp: F(40),
      auraColor: "#8844cc",
    },
    {
      id: 8009,
      name: "Metin of Shadow",
      level: 45,
      area: "Seungryong Valley",
      modelPath: "/models/mob/stone_tex09.glb",
      position: G(8),
      rotation: H(8),
      scale: 0.03,
      maxHp: F(45),
      auraColor: "#6644cc",
    },
    {
      id: 8010,
      name: "Metin of Toughness",
      level: 50,
      area: "Yongbi Desert",
      modelPath: "/models/mob/stone_tex04.glb",
      position: G(9),
      rotation: H(9),
      scale: 0.03,
      maxHp: F(50),
      auraColor: "#cc66aa",
    },
    {
      id: 8011,
      name: "Metin of Devil",
      level: 55,
      area: "Sohan Mountain",
      modelPath: "/models/mob/stone_tex05.glb",
      position: G(10),
      rotation: H(10),
      scale: 0.03,
      maxHp: F(55),
      auraColor: "#cc6600",
    },
    {
      id: 8013,
      name: "Metin of Death",
      level: 65,
      area: "Sohan Mountain",
      modelPath: "/models/mob/stone_tex07.glb",
      position: G(11),
      rotation: H(11),
      scale: 0.03,
      maxHp: F(65),
      auraColor: "#aa44aa",
    },
    {
      id: 8014,
      name: "Metin of Murder",
      level: 70,
      area: "Doyyumhwan",
      modelPath: "/models/mob/stone_tex08.glb",
      position: G(12),
      rotation: H(12),
      scale: 0.03,
      maxHp: F(70),
      auraColor: "#aa44aa",
    },
    {
      id: 8024,
      name: "Metin Pung-Ma",
      level: 75,
      area: "Ghost Forest",
      modelPath: "/models/mob/stone_tex03.glb",
      position: G(13),
      rotation: H(13),
      scale: 0.03,
      maxHp: F(75),
      auraColor: "#cccc00",
    },
    {
      id: 8025,
      name: "Metin Ma-An",
      level: 80,
      area: "Ghost Forest",
      modelPath: "/models/mob/stone_tex04.glb",
      position: G(14),
      rotation: H(14),
      scale: 0.03,
      maxHp: F(80),
      auraColor: "#cc66aa",
    },
    {
      id: 8026,
      name: "Metin Tu-Young",
      level: 85,
      area: "Crimson Forest",
      modelPath: "/models/mob/stone_tex05.glb",
      position: G(15),
      rotation: H(15),
      scale: 0.03,
      maxHp: F(85),
      auraColor: "#cc6600",
    },
    {
      id: 8027,
      name: "Metin Jeon-Un",
      level: 90,
      area: "Red Forest",
      modelPath: "/models/mob/stone_tex06.glb",
      position: G(16),
      rotation: H(16),
      scale: 0.03,
      maxHp: F(90),
      auraColor: "#cc6600",
    },
    {
      id: 8303,
      name: "Setaou Metin Stone",
      level: 99,
      area: "Exile Caves 1",
      modelPath: "/models/mob/oryum_crystal_stone_b.glb",
      position: G(17),
      rotation: H(17),
      scale: 0.03,
      maxHp: F(99),
      auraColor: "#00cccc",
    },
    {
      id: 8304,
      name: "Setaou Metin Stone",
      level: 99,
      area: "Exile Caves 2",
      modelPath: "/models/mob/oryum_crystal_stone_b.glb",
      position: G(18),
      rotation: H(18),
      scale: 0.03,
      maxHp: F(99),
      auraColor: "#00cccc",
    },
    {
      id: 8305,
      name: "OchaoStone",
      level: 120,
      area: "Ochao Temple",
      modelPath: "/models/mob/ridack_stone4.glb",
      position: G(19),
      rotation: H(19),
      scale: 0.03,
      maxHp: F(120),
      auraColor: "#882233",
    },
    {
      id: 8051,
      name: "Metin of Gloom",
      level: 130,
      area: "Dragon Fire Cape",
      modelPath: "/models/mob/stone_tex10.glb",
      position: G(20),
      rotation: H(20),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#44cc44",
    },
    {
      id: 8052,
      name: "Metin of Ember",
      level: 130,
      area: "Dragon Fire Cape",
      modelPath: "/models/mob/stone_tex11.glb",
      position: G(21),
      rotation: H(21),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#882233",
    },
    {
      id: 8054,
      name: "Metin of Wrath",
      level: 130,
      area: "Jade Bay",
      modelPath: "/models/mob/stone_tex13.glb",
      position: G(22),
      rotation: H(22),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#6633aa",
    },
    {
      id: 8053,
      name: "Metin of Vanity",
      level: 130,
      area: "Jade Bay",
      modelPath: "/models/mob/stone_tex12.glb",
      position: G(23),
      rotation: H(23),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#88cc22",
    },
    {
      id: 8055,
      name: "Metin of Calamity",
      level: 130,
      area: "Thunder Mountains",
      modelPath: "/models/mob/stone_tex14.glb",
      position: G(24),
      rotation: H(24),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#882222",
    },
    {
      id: 8056,
      name: "Metin of Malice",
      level: 130,
      area: "Thunder Mountains",
      modelPath: "/models/mob/stone_tex14.glb",
      position: G(25),
      rotation: H(25),
      scale: 0.03,
      maxHp: F(130),
      auraColor: "#22ccaa",
    },
    {
      id: 8059,
      name: "Metin of the Tree Beings",
      level: 140,
      area: "Enchanted Forest",
      modelPath: "/models/mob/stone_tex16.glb",
      position: G(26),
      rotation: H(26),
      scale: 0.03,
      maxHp: F(140),
      auraColor: "#00cccc",
    },
    {
      id: 8061,
      name: "Metin of the Forests",
      level: 140,
      area: "Enchanted Forest",
      modelPath: "/models/mob/stone_tex16.glb",
      position: G(27),
      rotation: H(27),
      scale: 0.03,
      maxHp: F(140),
      auraColor: "#338877",
    },
  ],
  vs = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  Ss = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    v += 0.5 * noise(p); p *= 2.0;
    v += 0.25 * noise(p); p *= 2.0;
    v += 0.125 * noise(p);
    return v;
  }

  void main() {
    // Distorted UVs — smoke rises and swirls
    float xWarp = sin(vUv.y * 8.0 + uTime * 2.0) * 0.15 + cos(vUv.y * 5.0 - uTime * 1.3) * 0.1;
    vec2 warped = vec2(vUv.x + xWarp, vUv.y);

    // Two layers scrolling up at different speeds
    vec2 uv1 = vec2(warped.x * 2.0, warped.y * 4.0 - uTime * 0.7);
    vec2 uv2 = vec2(warped.x * 1.5 + 0.7, warped.y * 3.0 - uTime * 0.9);
    vec2 uv3 = vec2(warped.x * 2.5 - 0.3, warped.y * 5.0 - uTime * 0.5);

    float smoke1 = fbm(uv1);
    float smoke2 = fbm(uv2);
    float smoke3 = fbm(uv3);
    float smoke = (smoke1 + smoke2 + smoke3) / 3.0;

    // Wisps — thin smoke tendrils
    float wisp = pow(smoke, 2.0) * 1.5;

    // Horizontal fade (narrow, smoke-like silhouette)
    float cx = abs(vUv.x - 0.5) * 2.0;
    float hFade = smoothstep(1.0, 0.2, cx + smoke * 0.4);

    // Vertical fade — fades in from bottom, wisps out at top
    float vFade = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.4, vUv.y);

    float alpha = wisp * hFade * vFade * 0.75;

    // Color shifts slightly with height
    vec3 col = uColor * (0.8 + smoke * 0.6);

    gl_FragColor = vec4(col, alpha);
  }
`,
  $a = 1.2,
  La = 0.8,
  ws = $a * $a,
  Ms = La * La;
function _s(e) {
  return e <= 20
    ? "#44cc44"
    : e <= 40
      ? "#4488ff"
      : e <= 60
        ? "#cc44cc"
        : e <= 80
          ? "#ff4444"
          : e <= 100
            ? "#ffaa22"
            : "#ff2222";
}
function ks({ data: e, onClick: t }) {
  xe((_) => _.language);
  const { id: n, name: a, level: i, position: l, rotation: s = 0, modelPath: r, scale: c = 0.03 } = e,
    g = aa(n, a),
    u = e.auraColor || _s(i),
    p = z.useRef(null),
    m = z.useRef(null),
    h = z.useRef(null),
    S = z.useRef(null),
    [M, w] = z.useState(0.06),
    f = z.useRef(!0),
    y = z.useMemo(() => ({ uTime: { value: 0 }, uColor: { value: new nt(u) } }), [u]),
    x = z.useRef(null),
    { scene: b, animations: v } = We(r),
    B = z.useMemo(() => {
      const _ = Ct(b);
      return (
        _.traverse((T) => {
          if (T.isMesh) {
            const j = T,
              A = Array.isArray(j.material) ? j.material : [j.material];
            for (const E of A)
              if (E.isMeshStandardMaterial) {
                const k = E;
                ((k.side = Ve),
                  (k.metalness = Math.min(k.metalness, 0.15)),
                  (k.roughness = Math.max(k.roughness, 0.5)),
                  (k.needsUpdate = !0));
              }
          }
        }),
        _
      );
    }, [b]);
  return (
    z.useEffect(() => {
      if (!m.current) return;
      const _ = new hn(m.current);
      if (((x.current = _), v.length > 0)) {
        const T = v.find((A) => /loop|idle|wait/i.test(A.name)) || v[0],
          j = _.clipAction(T);
        (j.setLoop(xt, 1 / 0), j.play());
      }
      return () => {
        (_.stopAllAction(), m.current && _.uncacheRoot(m.current));
      };
    }, [v]),
    z.useEffect(() => {
      if (!m.current) return;
      const _ = setTimeout(() => {
        if (!m.current) return;
        const T = new Se().setFromObject(m.current),
          j = T.max.y - T.min.y;
        j > 0.001 && w(j + 0.008);
      }, 100);
      return () => clearTimeout(_);
    }, [r, c]),
    _e((_, T) => {
      if (!p.current) return;
      const j = re.getState().position,
        A = l[0] - j.x,
        E = l[2] - j.z,
        k = A * A + E * E,
        P = k < ws;
      (f.current !== P && ((f.current = P), (p.current.visible = P)),
        S.current && (S.current.style.display = k < Ms ? "" : "none"),
        P && (x.current?.update(T), h.current && (h.current.uniforms.uTime.value += T)));
    }),
    o.jsxs("group", {
      ref: p,
      position: l,
      rotation: [0, s, 0],
      onClick: (_) => {
        (_.stopPropagation(), t?.(e));
      },
      onPointerOver: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/attack.png'), pointer";
      },
      onPointerOut: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/default.png'), auto";
      },
      userData: { stoneId: n },
      children: [
        o.jsx("group", { ref: m, children: o.jsx("primitive", { object: B, scale: c }) }),
        [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((_, T) =>
          o.jsxs(
            "mesh",
            {
              position: [0, 0.06, 0],
              rotation: [0, _, 0],
              children: [
                o.jsx("planeGeometry", { args: [0.08, 0.1] }),
                o.jsx("shaderMaterial", {
                  ref: T === 0 ? h : void 0,
                  vertexShader: vs,
                  fragmentShader: Ss,
                  uniforms: T === 0 ? y : { uTime: y.uTime, uColor: y.uColor },
                  transparent: !0,
                  side: Ve,
                  depthWrite: !1,
                  blending: zi,
                }),
              ],
            },
            T,
          ),
        ),
        o.jsx(mn, {
          position: [0, M, 0],
          center: !0,
          distanceFactor: 0.5,
          style: { pointerEvents: "none", zIndex: 1 },
          zIndexRange: [1, 1],
          children: o.jsx("div", {
            ref: S,
            style: {
              color: "#ff4444",
              fontSize: "11px",
              fontWeight: "bold",
              textShadow: "1px 1px 2px #000, -1px -1px 2px #000",
              whiteSpace: "nowrap",
              userSelect: "none",
            },
            children: `Lv.${i} ${g}`,
          }),
        }),
      ],
    })
  );
}
const Ps = [
    {
      id: "orc_lord",
      name: "Ork Reisi",
      level: 90,
      modelPath: "/models/mob/orc_lord.glb",
      position: [-1.97, 15.34, -0.58],
      scale: 0.045,
      maxHp: 5e5,
      rotation: Math.PI * 0,
      glowColor: "#cc6633",
    },
    {
      id: "smhtower_king",
      name: "Demon Tower King",
      level: 100,
      modelPath: "/models/mob/smhtower_king.glb",
      position: [-1.86, 15.34, 0.03],
      scale: 0.045,
      maxHp: 6e5,
      rotation: Math.PI * -1,
      glowColor: "#9933cc",
    },
    {
      id: "spider_queen",
      name: "Spider Queen",
      level: 80,
      modelPath: "/models/mob/spider_queen.glb",
      position: [-2.62, 15.34, 0.65],
      scale: 0.045,
      maxHp: 45e4,
      rotation: Math.PI * 1,
      glowColor: "#44aa44",
    },
    {
      id: "skeleton_king",
      name: "Skeleton King",
      level: 85,
      modelPath: "/models/mob/skeleton_king.glb",
      position: [-3.35, 15.34, 0.59],
      scale: 0.045,
      maxHp: 48e4,
      rotation: Math.PI * 1,
      glowColor: "#6688bb",
    },
    {
      id: "blue_dragon",
      name: "Blue Dragon",
      level: 110,
      modelPath: "/models/mob/blue_dragon.glb",
      position: [-3.72, 15.35, 0.2],
      scale: 0.045,
      maxHp: 8e5,
      rotation: Math.PI * -1.5,
      glowColor: "#3366ff",
    },
    {
      id: "reddragon_room_boss2",
      name: "Red Dragon",
      level: 120,
      modelPath: "/models/mob/reddragon_room_boss2.glb",
      position: [-1.33, 15.34, 1.1],
      scale: 0.015,
      maxHp: 9e5,
      rotation: Math.PI * -0.5,
      yOffset: -0.25,
      glowColor: "#ff3322",
    },
    {
      id: "keyto_monster_baphomet",
      name: "Baphomet",
      level: 95,
      modelPath: "/models/mob/keyto_monster_baphomet.glb",
      position: [-3.99, 15.38, -0.36],
      scale: 0.045,
      maxHp: 55e4,
      rotation: Math.PI * -1.5,
      glowColor: "#bb2244",
    },
    {
      id: "fire_dragon",
      name: "Fire Dragon",
      level: 105,
      modelPath: "/models/mob/fire_dragon.glb",
      position: [-2.24, 15.34, 1.3],
      scale: 0.035,
      maxHp: 75e4,
      rotation: Math.PI * 1,
      glowColor: "#ff6600",
    },
    {
      id: "jotun_thrym",
      name: "Jotun Thrym",
      level: 123,
      modelPath: "/models/mob/thunder_boss.glb",
      position: [-3.59, 15.34, 0.98],
      scale: 0.045,
      maxHp: 1e6,
      rotation: Math.PI * 1,
      glowColor: "#2244aa",
    },
    {
      id: "yamachun_boss",
      name: "Razador",
      level: 88,
      modelPath: "/models/mob/yamachun_boss.glb",
      position: [-3.71, 15.35, -0.81],
      scale: 0.045,
      maxHp: 5e5,
      rotation: Math.PI * -1.7,
      glowColor: "#88aa33",
    },
    {
      id: "nemere",
      name: "Nemere",
      level: 108,
      modelPath: "/models/mob/hanma_boss.glb",
      position: [-3.5, 15.35, -1.2],
      scale: 0.045,
      maxHp: 8e5,
      rotation: Math.PI * -1.5,
      glowColor: "#44bbff",
    },
    {
      id: "defensewave_hydra_boss",
      name: "Hydra",
      level: 115,
      modelPath: "/models/mob/defensewave_hydra_boss.glb",
      position: [-3.77, 15.34, -1.7],
      scale: 0.045,
      maxHp: 85e4,
      rotation: Math.PI * -1.7,
      glowColor: "#55bb77",
    },
  ],
  qa = 1.5,
  Na = 1,
  Ts = qa * qa,
  As = Na * Na;
function Bs({ data: e, onClick: t }) {
  xe((_) => _.language);
  const {
      id: n,
      name: a,
      level: i,
      position: l,
      rotation: s = 0,
      modelPath: r,
      scale: c = 0.03,
      yOffset: g = 0,
      glowColor: u,
    } = e,
    p = na(n, a),
    m = z.useRef(null),
    h = z.useRef(null),
    S = z.useRef(null),
    [M, w] = z.useState(0.08),
    f = z.useRef(!0),
    y = z.useRef(null),
    { scene: x, animations: b } = We(r),
    v = z.useMemo(() => (u ? new nt(u).multiplyScalar(0.008) : null), [u]),
    B = z.useMemo(() => {
      const _ = Ct(x);
      return (
        _.traverse((T) => {
          if (T.isMesh) {
            const j = T,
              A = Array.isArray(j.material) ? j.material : [j.material];
            for (const E of A)
              if (E.isMeshStandardMaterial) {
                const k = E;
                ((k.side = Ve),
                  (k.metalness = Math.min(k.metalness, 0.1)),
                  (k.roughness = Math.max(k.roughness, 0.6)),
                  v && ((k.emissive = v), (k.emissiveIntensity = 1)),
                  (k.needsUpdate = !0));
              }
          }
        }),
        _
      );
    }, [x, v]);
  return (
    z.useEffect(() => {
      if (!h.current) return;
      const _ = new hn(h.current);
      if (((y.current = _), b.length > 0)) {
        const T = b.find((A) => /wait|stand|idle/i.test(A.name)) || b[0],
          j = _.clipAction(T);
        (j.setLoop(xt, 1 / 0), j.play());
      }
      return () => {
        (_.stopAllAction(), h.current && _.uncacheRoot(h.current));
      };
    }, [b]),
    z.useEffect(() => {
      if (!h.current) return;
      const _ = setTimeout(() => {
        if (!h.current) return;
        const T = new Se().setFromObject(h.current),
          j = T.max.y - T.min.y;
        j > 0.001 && w(j + 0.01);
      }, 100);
      return () => clearTimeout(_);
    }, [r, c]),
    _e((_, T) => {
      if (!m.current) return;
      const j = re.getState().position,
        A = l[0] - j.x,
        E = l[2] - j.z,
        k = A * A + E * E,
        P = k < Ts;
      (f.current !== P && ((f.current = P), (m.current.visible = P)),
        S.current && (S.current.style.display = k < As ? "" : "none"),
        P && y.current?.update(T));
    }),
    o.jsxs("group", {
      ref: m,
      position: l,
      rotation: [0, s, 0],
      onClick: (_) => {
        (_.stopPropagation(), t?.(e));
      },
      onPointerOver: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/attack.png'), pointer";
      },
      onPointerOut: () => {
        document.querySelector("canvas").style.cursor = "url('/ui/cursor/default.png'), auto";
      },
      userData: { bossId: n },
      children: [
        o.jsx("group", { ref: h, position: [0, g, 0], children: o.jsx("primitive", { object: B, scale: c }) }),
        o.jsx(mn, {
          position: [0, M, 0],
          center: !0,
          distanceFactor: 0.5,
          style: { pointerEvents: "none", zIndex: 1 },
          zIndexRange: [1, 1],
          children: o.jsx("div", {
            ref: S,
            style: {
              color: "#ff2222",
              fontSize: "12px",
              fontWeight: "bold",
              textShadow: "1px 1px 2px #000, -1px -1px 2px #000",
              whiteSpace: "nowrap",
              userSelect: "none",
            },
            children: `Lv.${i} ${p}`,
          }),
        }),
      ],
    })
  );
}
const zs = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Multi-layer wave displacement
    float w1 = sin(pos.x * 4.0 + uTime * 1.8) * 0.012;
    float w2 = cos(pos.y * 3.5 + uTime * 1.3) * 0.008;
    float w3 = sin((pos.x + pos.y) * 2.0 + uTime * 0.9) * 0.006;
    pos.z += w1 + w2 + w3;

    float dx = cos(pos.x * 4.0 + uTime * 1.8) * 4.0 * 0.012
             + cos((pos.x + pos.y) * 2.0 + uTime * 0.9) * 2.0 * 0.006;
    float dy = -sin(pos.y * 3.5 + uTime * 1.3) * 3.5 * 0.008
             + cos((pos.x + pos.y) * 2.0 + uTime * 0.9) * 2.0 * 0.006;
    vNormal = normalize(vec3(-dx, -dy, 1.0));

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,
  js = `
  uniform float uTime;
  uniform vec3 uDeepColor;
  uniform vec3 uShallowColor;
  uniform float uOpacity;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 wp = vWorldPos.xz * 3.0;
    vec2 flow1 = wp * 1.0 + vec2(uTime * 0.035, uTime * 0.025);
    vec2 flow2 = wp * 0.75 - vec2(uTime * 0.028, uTime * 0.04);
    vec2 flow3 = wp * 1.3 + vec2(uTime * 0.015, -uTime * 0.02);

    float n1 = fbm(flow1);
    float n2 = fbm(flow2);
    float n3 = fbm(flow3 * 1.5);
    float waterPattern = (n1 + n2) * 0.5;

    float depthMix = smoothstep(0.3, 0.7, waterPattern);
    vec3 color = mix(uShallowColor, uDeepColor, depthMix);

    // Caustics
    float caustic = pow(n3, 3.0) * 1.2;
    color += caustic * vec3(0.3, 0.8, 0.7);

    // Specular
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
    vec3 halfDir = normalize(lightDir + vec3(0.0, 0.0, 1.0));
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
    color += spec * vec3(1.0, 0.95, 0.8) * 0.6;

    // Foam
    float foam = smoothstep(0.62, 0.72, waterPattern + n3 * 0.3);
    color = mix(color, vec3(0.85, 0.95, 0.95), foam * 0.25);

    // Soft edge fade
    float fadeX = smoothstep(0.0, 0.15, vUv.x) * smoothstep(0.0, 0.15, 1.0 - vUv.x);
    float fadeY = smoothstep(0.0, 0.15, vUv.y) * smoothstep(0.0, 0.15, 1.0 - vUv.y);
    float edgeFade = fadeX * fadeY;

    float alpha = uOpacity * (0.85 + depthMix * 0.15) * edgeFade;
    gl_FragColor = vec4(color, alpha);
  }
`,
  Es = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Horizontal ripple on the surface
    pos.x += sin(pos.y * 8.0 + uTime * 3.0) * 0.015;
    pos.x += cos(pos.y * 5.0 + uTime * 2.2) * 0.01;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,
  Cs = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uSpeed;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // UV scrolling downward (falling water)
    vec2 uv1 = vec2(vUv.x * 3.0, vUv.y * 4.0 - uTime * uSpeed);
    vec2 uv2 = vec2(vUv.x * 2.5 + 0.3, vUv.y * 3.0 - uTime * uSpeed * 1.2);

    float n1 = fbm(uv1);
    float n2 = fbm(uv2);
    float pattern = (n1 + n2) * 0.5;

    // White foam streaks
    float streak = smoothstep(0.45, 0.65, pattern);
    vec3 color = mix(uColor, vec3(0.9, 0.97, 1.0), streak * 0.7);

    // Bright highlights
    float highlight = pow(pattern, 4.0) * 0.8;
    color += highlight * vec3(0.8, 0.95, 1.0);

    // Fade at top and bottom edges
    float edgeFade = smoothstep(0.0, 0.1, vUv.y) * smoothstep(0.0, 0.1, 1.0 - vUv.y);

    gl_FragColor = vec4(color, uOpacity * edgeFade);
  }
`;
function En({
  position: e,
  width: t = 0.5,
  height: n = 1,
  rotation: a = 0,
  color: i = "#1a8a8a",
  opacity: l = 0.75,
  speed: s = 1.5,
}) {
  const r = z.useRef(null),
    c = z.useMemo(
      () => ({ uTime: { value: 0 }, uColor: { value: new nt(i) }, uOpacity: { value: l }, uSpeed: { value: s } }),
      [i, l, s],
    );
  return (
    _e((g, u) => {
      c.uTime.value += u;
    }),
    o.jsxs("mesh", {
      ref: r,
      position: e,
      rotation: [0, a, 0],
      children: [
        o.jsx("planeGeometry", { args: [t, n, 16, 32] }),
        o.jsx("shaderMaterial", {
          vertexShader: Es,
          fragmentShader: Cs,
          uniforms: c,
          transparent: !0,
          side: Ve,
          depthWrite: !1,
        }),
      ],
    })
  );
}
function Rs({
  position: e,
  size: t = [2, 2],
  deepColor: n = "#0e6e7e",
  shallowColor: a = "#2ec4b6",
  opacity: i = 0.8,
  rotation: l = 0,
}) {
  const s = z.useRef(null),
    r = z.useMemo(
      () => ({
        uTime: { value: 0 },
        uDeepColor: { value: new nt(n) },
        uShallowColor: { value: new nt(a) },
        uOpacity: { value: i },
      }),
      [n, a, i],
    );
  return (
    _e((c, g) => {
      r.uTime.value += g;
    }),
    o.jsxs("mesh", {
      ref: s,
      position: e,
      rotation: [-Math.PI / 2, 0, l],
      children: [
        o.jsx("planeGeometry", {
          args: [t[0], t[1], Math.min(48, Math.ceil(t[0] * 8)), Math.min(48, Math.ceil(t[1] * 8))],
        }),
        o.jsx("shaderMaterial", {
          vertexShader: zs,
          fragmentShader: js,
          uniforms: r,
          transparent: !0,
          side: Ve,
          depthWrite: !1,
        }),
      ],
    })
  );
}
const Is = [
    { id: "water_1", position: [1.33, 15.19, -1.7], size: [1, 3] },
    { id: "water_2", position: [13, 14.59, -9], size: [16, 46] },
    { id: "water_3", position: [-0.93, 15.19, 1.05], size: [4, 10] },
    { id: "water_4", position: [-0.93, 15.19, 1.05], size: [4, 10] },
    { id: "water_5", position: [-4.02, 15.19, 4.79], size: [4, 10] },
    { id: "water_6", position: [-5.25, 15.19, -3.41], size: [6, 10] },
    { id: "water_7", position: [3.69, 14.59, -1.5], size: [6, 10] },
  ],
  Gi = "/models/map_city.glb",
  Ka = 80;
function Ds() {
  const e = z.useRef(null);
  return (
    _e(() => {
      if (!e.current) return;
      const t = re.getState().position;
      e.current.position.set(t.x, t.y, t.z);
    }),
    o.jsxs("mesh", {
      ref: e,
      rotation: [-Math.PI / 2, 0, 0],
      onPointerDown: (t) => {
        t.button === 0 && (t.stopPropagation(), re.getState().setMoveTarget(t.point.clone()));
      },
      children: [
        o.jsx("planeGeometry", { args: [Ka, Ka] }),
        o.jsx("meshBasicMaterial", { transparent: !0, opacity: 0, depthWrite: !1 }),
      ],
    })
  );
}
function $s() {
  const { scene: e } = We(Gi),
    { gl: t } = Zn(),
    n = R((r) => r.phase),
    a = z.useCallback((r) => {
      (R.getState().openNpcWindow(r.id), R.setState({ interactionPos: r.position }));
    }, []),
    i = z.useCallback((r) => {
      (R.getState().setTarget({
        id: r.id,
        name: aa(r.id, r.name),
        level: r.level,
        hp: r.maxHp ?? 5e4,
        maxHp: r.maxHp ?? 5e4,
      }),
        R.setState({ interactionPos: r.position }));
    }, []),
    l = z.useCallback((r) => {
      (R.getState().setTarget({
        id: r.id,
        name: na(r.id, r.name),
        level: r.level,
        hp: r.maxHp ?? 1e5,
        maxHp: r.maxHp ?? 1e5,
      }),
        R.setState({ interactionPos: r.position }));
    }, []),
    s = z.useMemo(() => {
      const r = [],
        c = t.capabilities.getMaxAnisotropy();
      e.traverse((p) => {
        if (p.isMesh) {
          r.push(p);
          const m = p,
            h = Array.isArray(m.material) ? m.material : [m.material];
          for (const S of h) {
            const M = S,
              w = [M.map, M.normalMap, M.roughnessMap, M.metalnessMap, M.aoMap];
            for (const f of w)
              f && f.isTexture && ((f.anisotropy = c), (f.minFilter = Dn), (f.magFilter = $n), (f.needsUpdate = !0));
          }
        }
      });
      const g = new Se();
      e.traverse((p) => {
        if (p.isMesh) {
          const m = p;
          if ((m.geometry.computeBoundingBox(), m.geometry.boundingBox)) {
            const h = m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld);
            g.union(h);
          }
        }
      });
      const u = new $();
      return (g.getCenter(u), r);
    }, [e, t]);
  return (
    Yo(e),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx("ambientLight", { intensity: 0.8 }),
        o.jsx("directionalLight", {
          position: [10, 30, 15],
          intensity: 1.8,
          castShadow: !0,
          "shadow-mapSize-width": 1024,
          "shadow-mapSize-height": 1024,
          "shadow-camera-far": 100,
          "shadow-camera-left": -20,
          "shadow-camera-right": 20,
          "shadow-camera-top": 20,
          "shadow-camera-bottom": -20,
        }),
        o.jsx("directionalLight", { position: [-10, 20, -10], intensity: 0.5, color: "#aaccff" }),
        o.jsx("hemisphereLight", { args: ["#87CEEB", "#556B2F", 0.5] }),
        o.jsx("fog", { attach: "fog", args: ["#87CEEB", 30, 80] }),
        o.jsx("primitive", { object: e }),
        n === "playing" &&
          o.jsxs(o.Fragment, {
            children: [
              o.jsx(Ds, {}),
              o.jsx(Co, { mapMeshes: s }),
              o.jsx(qo, {}),
              o.jsx(Go, {}),
              Wo.map((r) => o.jsx(hs, { data: r, onClick: a }, r.id)),
              xs.map((r) => o.jsx(ks, { data: r, onClick: i }, r.id)),
              Is.map((r) => o.jsx(Rs, { position: r.position, size: r.size, rotation: r.rotation }, r.id)),
              o.jsx(En, { position: [1.74, 14.85, -1.77], rotation: Math.PI * 1.5, height: 1, width: 0.5 }),
              o.jsx(En, { position: [-4.95, 15.2, 6.39], rotation: Math.PI * 1, height: 1, width: 0.5 }),
              o.jsx(En, { position: [-6.89, 15.2, -3.9], rotation: Math.PI * 1.5, height: 1, width: 0.5 }),
              Ps.map((r) => o.jsx(Bs, { data: r, onClick: l }, r.id)),
            ],
          }),
      ],
    })
  );
}
We.preload(Gi);
const Oa = ["tip.1", "tip.2", "tip.3", "tip.4", "tip.5", "tip.6"],
  Ls = "/ui/loading/deneme22.jpg";
function qs() {
  const e = ke(),
    { progress: t } = Wi(),
    n = R((i) => i.setPhase),
    [a] = z.useState(() => Oa[Math.floor(Math.random() * Oa.length)]);
  return (
    z.useEffect(() => {
      if (t >= 100) {
        const i = setTimeout(() => {
          n("playing");
        }, 800);
        return () => clearTimeout(i);
      }
    }, [t, n]),
    o.jsxs("div", {
      style: ge.container,
      children: [
        o.jsx("div", { style: { ...ge.bgImage, backgroundImage: `url(${Ls})` } }),
        o.jsx("div", { style: ge.vignette }),
        o.jsx("div", { style: ge.borderTop, children: o.jsx("div", { style: ge.borderPattern }) }),
        o.jsx("div", { style: ge.borderBottom, children: o.jsx("div", { style: ge.borderPattern }) }),
        o.jsxs("div", {
          style: ge.bottomArea,
          children: [
            o.jsx("p", { style: ge.tip, children: e(a) }),
            o.jsxs("div", {
              style: ge.barOuter,
              children: [
                o.jsx("div", {
                  style: ge.barInner,
                  children: o.jsx("div", { style: { ...ge.barFill, width: `${Math.max(1, t)}%` } }),
                }),
                o.jsx("div", { style: { ...ge.barOrnament, left: -14 }, children: "◆" }),
                o.jsx("div", { style: { ...ge.barOrnament, right: -14 }, children: "◆" }),
              ],
            }),
            o.jsxs("p", { style: ge.percent, children: [Math.round(t), "%"] }),
          ],
        }),
      ],
    })
  );
}
const ge = {
    container: { position: "fixed", inset: 0, background: "#000", zIndex: 150, overflow: "hidden" },
    bgImage: {
      position: "absolute",
      inset: 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    vignette: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.9) 100%)",
      pointerEvents: "none",
    },
    borderTop: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 32,
      background: "linear-gradient(180deg, #0a0a0a 0%, transparent 100%)",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    borderBottom: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 32,
      background: "linear-gradient(0deg, #0a0a0a 0%, transparent 100%)",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    borderPattern: {
      width: "80%",
      height: 2,
      background: "linear-gradient(90deg, transparent, #6a5530 20%, #d4a855 50%, #6a5530 80%, transparent)",
      opacity: 0.6,
    },
    bottomArea: {
      position: "absolute",
      bottom: 48,
      left: 0,
      right: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 3,
    },
    tip: {
      color: "#8a7a5a",
      fontSize: "clamp(0.65rem, 1.1vw, 0.8rem)",
      textAlign: "center",
      marginBottom: 12,
      fontFamily: "Tahoma, 'Segoe UI', sans-serif",
      fontStyle: "italic",
      textShadow: "0 1px 3px rgba(0,0,0,0.9)",
      letterSpacing: "0.05em",
    },
    barOuter: {
      position: "relative",
      width: "clamp(280px, 40vw, 480px)",
      height: 18,
      background: "linear-gradient(180deg, #2a1a0a, #1a0f05, #2a1a0a)",
      border: "1px solid #5a4020",
      borderRadius: 2,
      padding: 3,
      boxShadow: "0 0 10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,168,85,0.1)",
    },
    barInner: {
      width: "100%",
      height: "100%",
      background: "#0a0805",
      borderRadius: 1,
      overflow: "hidden",
      border: "1px solid #1a1005",
    },
    barFill: {
      height: "100%",
      background: "linear-gradient(180deg, #e8c44a 0%, #c89b30 30%, #8B6914 70%, #6a4f10 100%)",
      transition: "width 0.3s ease",
      boxShadow: "0 0 6px rgba(212,168,85,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
      borderRadius: 1,
    },
    barOrnament: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#8a6a2a",
      fontSize: 10,
      textShadow: "0 0 4px rgba(212,168,85,0.4)",
      lineHeight: 1,
    },
    percent: {
      color: "#d4a855",
      fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
      fontWeight: 700,
      marginTop: 6,
      letterSpacing: "0.1em",
      textShadow: "0 1px 4px rgba(0,0,0,0.9)",
      fontFamily: "Tahoma, 'Segoe UI', sans-serif",
    },
  },
  Hi = {
    warrior: "/models/characters/warrior_m.glb",
    assassin: "/models/characters/assassin_m.glb",
    sura: "/models/characters/sura_m.glb",
    shaman: "/models/characters/shaman_m.glb",
  },
  Ns = 1.8,
  Ks = 1,
  Os = -0.3,
  Fs = 4,
  Fa = -0.5;
function Gs(e, t) {
  if (e === t) return [0, Fa, Ks];
  const n = [];
  for (let r = 0; r < 4; r++) r !== t && n.push(r);
  const a = n.indexOf(e),
    i = [-0.6, 0, 0.6],
    l = Math.sin(i[a]) * Ns,
    s = Os - Math.cos(i[a]) * 0.3;
  return [l, Fa, s];
}
const Hs = 0;
function Us({ path: e, targetPosition: t, isSelected: n, introPlaying: a, onIntroFinished: i, onClick: l }) {
  const s = z.useRef(null),
    { scene: r, animations: c } = We(e),
    g = z.useMemo(() => Ct(r), [r]),
    { actions: u, mixer: p } = Zi(c, s),
    m = z.useRef(n);
  m.current = n;
  const h = z.useRef(i);
  ((h.current = i),
    z.useEffect(() => {
      if (a) return;
      p.stopAllAction();
      const w = u["intro wait"];
      w && (w.reset(), w.setLoop(xt, 1 / 0), w.play());
    }, [u, p, a]),
    z.useEffect(() => {
      if (!a) return;
      p.stopAllAction();
      const w = m.current,
        y = u[w ? "intro selected" : "intro not_selected"];
      if (y && (y.reset(), y.setLoop(cr, 1), (y.clampWhenFinished = !0), y.play(), w && h.current)) {
        const x = h.current,
          b = () => {
            (x(), p.removeEventListener("finished", b));
          };
        return (
          p.addEventListener("finished", b),
          () => {
            p.removeEventListener("finished", b);
          }
        );
      }
    }, [u, p, a]));
  const S = z.useRef(new $(...t));
  (z.useEffect(() => {
    S.current.set(...t);
  }, [t]),
    _e((w, f) => {
      s.current && s.current.position.lerp(S.current, Fs * f);
    }));
  const M = n ? 1 : 0.93;
  return o.jsx("group", {
    ref: s,
    position: t,
    rotation: [0, Hs, 0],
    scale: M,
    onClick: (w) => {
      (w.stopPropagation(), a || l());
    },
    children: o.jsx("primitive", { object: g }),
  });
}
function Vs({ selectedIndex: e, onSelectSlot: t }) {
  const n = ["warrior", "assassin", "sura", "shaman"],
    a = R((s) => s.introPlaying),
    i = R((s) => s.setPhase),
    l = () => {
      i("loading");
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("ambientLight", { intensity: 2 }),
      o.jsx("directionalLight", {
        position: [2, 5, 8],
        intensity: 3,
        castShadow: !0,
        "shadow-mapSize-width": 1024,
        "shadow-mapSize-height": 1024,
      }),
      o.jsx("directionalLight", { position: [-4, 3, 6], intensity: 1.5, color: "#ddeeff" }),
      o.jsx("directionalLight", { position: [0, 4, -3], intensity: 1, color: "#ffaa66" }),
      o.jsx("hemisphereLight", { args: ["#ffeedd", "#665544", 1.2] }),
      o.jsxs("mesh", {
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.01, 0],
        receiveShadow: !0,
        children: [o.jsx("planeGeometry", { args: [10, 10] }), o.jsx("shadowMaterial", { opacity: 0.3 })],
      }),
      n.map((s, r) => {
        const c = r === e,
          g = Gs(r, e);
        return o.jsx(
          Us,
          {
            path: Hi[s],
            targetPosition: g,
            isSelected: c,
            introPlaying: a,
            onIntroFinished: c ? l : void 0,
            onClick: () => t(r),
          },
          s,
        );
      }),
    ],
  });
}
Object.values(Hi).forEach((e) => We.preload(e));
const Ys = 800,
  Cn = 600,
  Fe = 11,
  jt = 12,
  en = Fe + 4,
  Ga = 10,
  Ha = 44,
  Ws = 7,
  Zs = 4,
  Ua = 175 + Fe * 2 + 1,
  Va = 305,
  Xs = jt * 2 + 27,
  Ya = 180 + Fe * 2 + 1,
  Js = 364,
  Qs = 180,
  el = 270,
  tl = Fe + 3,
  nl = 286,
  al = 40,
  il = 105,
  rl = 18,
  ol = 21,
  sl = 13,
  ll = 10,
  cl = -17,
  ul = 4,
  dl = -23,
  K = "/ui/sprites/",
  tn = "/ui/face/";
function pl() {
  return [
    {
      id: "warrior",
      key: "warrior",
      nameKey: "select.warrior",
      face_slot_1: K + "face_warrior_m_01.png",
      face_slot_2: K + "face_warrior_m_02.png",
      face_icon: tn + "warrior_m.png",
      nameLarge: K + "name_warrior.png",
      stats: { hth: 6, int: 2, str: 5, dex: 3 },
      descriptionKey: "select.warrior_desc",
    },
    {
      id: "ninja",
      key: "assassin",
      nameKey: "select.ninja",
      face_slot_1: K + "face_assassin_m_01.png",
      face_slot_2: K + "face_assassin_m_02.png",
      face_icon: tn + "assassin_m.png",
      nameLarge: K + "name_assassin.png",
      stats: { hth: 3, int: 3, str: 4, dex: 6 },
      descriptionKey: "select.ninja_desc",
    },
    {
      id: "sura",
      key: "sura",
      nameKey: "select.sura",
      face_slot_1: K + "face_sura_m_01.png",
      face_slot_2: K + "face_sura_m_02.png",
      face_icon: tn + "sura_m.png",
      nameLarge: K + "name_sura.png",
      stats: { hth: 4, int: 5, str: 4, dex: 3 },
      descriptionKey: "select.sura_desc",
    },
    {
      id: "shaman",
      key: "shaman",
      nameKey: "select.shaman",
      face_slot_1: K + "face_shaman_m_01.png",
      face_slot_2: K + "face_shaman_m_02.png",
      face_icon: tn + "shaman_m.png",
      nameLarge: K + "name_shaman.png",
      stats: { hth: 4, int: 6, str: 3, dex: 3 },
      descriptionKey: "select.shaman_desc",
    },
  ];
}
const pt = pl(),
  tt = "/ui/hud/gauges/",
  Wa = [
    { key: "hth", label: "HP", gauge: tt + "gauge_red.png" },
    { key: "int", label: "SP", gauge: tt + "gauge_pink.png" },
    { key: "str", label: "ATT", gauge: tt + "gauge_purple.png" },
    { key: "dex", label: "DEX", gauge: tt + "gauge_blue.png" },
  ],
  ml = "/ui/empire/empire_jinno169.jpg";
function Za({ x: e, y: t, imgs: n, onClick: a, style: i }) {
  return o.jsxs("button", {
    className: "m2-action-btn",
    style: { left: e, top: t, ...i },
    onClick: a,
    children: [
      o.jsx("img", { className: "btn-default", src: n[0], alt: "" }),
      o.jsx("img", { className: "btn-hover", src: n[1], alt: "" }),
      o.jsx("img", { className: "btn-down", src: n[2], alt: "" }),
    ],
  });
}
function gl() {
  const e = ke();
  xe((L) => L.language);
  const [t, n] = z.useState(3),
    [a, i] = z.useState(!1),
    [l, s] = z.useState(""),
    r = z.useRef(null),
    c = R((L) => L.selectCharacter),
    g = R((L) => L.characterName),
    u = R((L) => L.setCharacterName),
    p = R((L) => L.introPlaying),
    m = R((L) => L.setIntroPlaying),
    h = z.useRef(null),
    [S, M] = z.useState({ w: window.innerWidth, h: window.innerHeight }),
    w = pt[t];
  z.useEffect(() => {
    const L = () => M({ w: window.innerWidth, h: window.innerHeight });
    return (window.addEventListener("resize", L), () => window.removeEventListener("resize", L));
  }, []);
  const f = S.h / Cn,
    y = (S.w * 25) / Ys,
    x = (S.h * 156) / Cn,
    b = 18 * f,
    v = 84 * f,
    B = Ya * f,
    _ = S.w - y - B,
    T = Va * f,
    j = x + T + 3 * f,
    A = S.w / 2 - 107 * f,
    E = S.h - (S.h * 70) / Cn,
    k = S.w / 2 + 32 * f,
    P = x - v - 45 * f,
    I = 384 * f,
    N = 128 * f,
    U = S.w / 2 - I / 2,
    q = E - N / 2,
    Z = z.useCallback(() => {
      const L = l.trim();
      !L || p || (u(L), localStorage.setItem("characterName", L), i(!1), c(w.id), m(!0));
    }, [l, p, u, c, w.id, m]),
    ae = z.useCallback(() => {
      if (p) return;
      const L = localStorage.getItem("characterName");
      L ? (u(L), c(w.id), m(!0)) : (s(g === "Player" ? "" : g), i(!0));
    }, [p, g, u, c, w.id, m]);
  (z.useEffect(() => {
    if (!a) return;
    const L = window.setTimeout(() => r.current?.focus(), 0);
    return () => window.clearTimeout(L);
  }, [a]),
    z.useEffect(() => {
      const L = (O) => {
        if (a) {
          O.key === "Enter" ? (O.preventDefault(), Z()) : O.key === "Escape" && (O.preventDefault(), i(!1));
          return;
        }
        O.key === "ArrowUp" || O.key === "ArrowLeft"
          ? n((Q) => (Q - 1 + pt.length) % pt.length)
          : O.key === "ArrowDown" || O.key === "ArrowRight"
            ? n((Q) => (Q + 1) % pt.length)
            : O.key === "1"
              ? n(0)
              : O.key === "2"
                ? n(1)
                : O.key === "3"
                  ? n(2)
                  : O.key === "4"
                    ? n(3)
                    : O.key === "Enter" && ae();
      };
      return (window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L));
    }, [ae, a, Z]));
  const [ve, Ie] = z.useState([0, 0, 0, 0]),
    De = Wa.map((L) => w.stats[L.key] / 9);
  return (
    z.useEffect(() => {
      const L = setInterval(() => {
        Ie((O) =>
          O.map((Q, $e) => {
            const Y = De[$e] - Q;
            return Math.abs(Y) < 0.005 ? De[$e] : Q + Y / 8;
          }),
        );
      }, 16);
      return () => clearInterval(L);
    }, [t]),
    o.jsxs("div", {
      className: "m2-viewport",
      ref: h,
      children: [
        o.jsx("div", {
          className: "m2-3d-canvas",
          children: o.jsx(Si, {
            shadows: !0,
            camera: { fov: 38, near: 0.1, far: 100, position: [0, 1.1, 4.8] },
            gl: { antialias: !0, powerPreference: "high-performance", alpha: !0 },
            children: o.jsx(z.Suspense, { fallback: null, children: o.jsx(Vs, { selectedIndex: t, onSelectSlot: n }) }),
          }),
        }),
        o.jsx("div", { className: "m2-bg", style: { backgroundImage: `url(${ml})` } }),
        pt.map((L, O) =>
          o.jsx(
            "img",
            {
              className: "m2-classname-img",
              src: L.nameLarge,
              alt: "",
              style: {
                left: y + b,
                top: x - v,
                width: 256 * 0.65 * f,
                height: 146 * 0.65 * f,
                opacity: O === t ? 1 : 0,
              },
            },
            L.key,
          ),
        ),
        o.jsxs("div", {
          className: "m2-descphase",
          style: { left: 0, top: P, transform: `scale(${f})`, transformOrigin: "top left" },
          children: [
            o.jsx("img", { src: K + "btn_descphase.png", alt: "" }),
            o.jsx("span", { className: "m2-descphase-text", children: g }),
          ],
        }),
        o.jsx("img", {
          className: "m2-shadow",
          src: "/ui/select/shadow.png",
          alt: "",
          style: { left: U, top: q, width: I, height: N, opacity: 0.5 },
        }),
        o.jsxs("div", {
          className: "m2-thinboard-gold",
          style: { left: y, top: x, width: Ua * f, height: Va * f },
          children: [
            o.jsx("div", {
              className: "m2-thinboard-circle",
              style: { left: Fe * f, top: jt * f, width: 175 * f, height: 42 * f },
              children: o.jsx("div", {
                className: "m2-empire-slot",
                children: o.jsx("span", {
                  className: "m2-empire-text",
                  style: { color: "#ff0000", fontSize: 13 * f },
                  children: e("select.empire_shinsoo"),
                }),
              }),
            }),
            o.jsx("div", {
              className: "m2-thinboard-circle",
              style: { left: Fe * f, top: 61 * f, width: 175 * f, height: 231 * f },
              children: pt.map((L, O) => {
                const Q = (Ga + Ha * O) * f,
                  $e = (Ga + Ha * O - Zs) * f,
                  Y = O === t;
                return o.jsxs(
                  "div",
                  {
                    children: [
                      o.jsx("img", {
                        className: "m2-empty-slot",
                        src: K + "btn_emptyslot.png",
                        alt: "",
                        style: { left: en * f, top: Q, width: 150 * f, height: 35 * f },
                      }),
                      o.jsxs("button", {
                        className: `m2-slot-btn ${Y ? "selected" : ""}`,
                        style: { left: en * f, top: Q, width: 150 * f, height: 35 * f },
                        onClick: () => n(O),
                        children: [
                          o.jsx("img", {
                            className: "m2-slot-default",
                            src: K + "btn_150x35_selectbtn_01.png",
                            alt: "",
                            style: { display: Y ? "none" : "block", width: 150 * f, height: 35 * f },
                          }),
                          o.jsx("img", {
                            className: "m2-slot-hover",
                            src: K + "btn_150x35_selectbtn_02.png",
                            alt: "",
                            style: { display: "none", width: 150 * f, height: 35 * f },
                          }),
                          o.jsx("img", {
                            className: "m2-slot-down",
                            src: K + "btn_150x35_selectbtn_03.png",
                            alt: "",
                            style: { display: Y ? "block" : "none", width: 150 * f, height: 35 * f },
                          }),
                          o.jsx("span", {
                            className: "m2-slot-name",
                            style: { fontSize: 11 * f, right: 10 * f, top: 3 * f },
                            children: e(L.nameKey),
                          }),
                          o.jsx("span", {
                            className: "m2-slot-level",
                            style: { fontSize: 11 * f, left: 108 * f, top: 19 * f },
                            children: e("select.level_short"),
                          }),
                        ],
                      }),
                      o.jsx("img", {
                        className: "m2-slot-face",
                        src: Y ? L.face_slot_1 : L.face_slot_2,
                        alt: "",
                        style: { left: (en - Ws) * f, top: $e, width: 43 * f, height: 43 * f },
                      }),
                    ],
                  },
                  L.key,
                );
              }),
            }),
          ],
        }),
        o.jsxs("div", {
          className: "m2-thinboard-gold",
          style: { left: y, top: j, width: Ua * f, height: Xs * f },
          children: [
            o.jsx(Za, {
              x: en * f,
              y: jt * f,
              style: { transform: `scale(${f})`, transformOrigin: "top left" },
              imgs: [K + "btn_plus_btn_01.png", K + "btn_plus_btn_02.png", K + "btn_plus_btn_03.png"],
            }),
            o.jsx(Za, {
              x: (175 + Fe - 58) * f,
              y: jt * f,
              style: { transform: `scale(${f})`, transformOrigin: "top left" },
              imgs: [K + "btn_minus_btn_01.png", K + "btn_minus_btn_02.png", K + "btn_minus_btn_03.png"],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "m2-thinboard-gold",
          style: { left: _, top: x, width: Ya * f, height: Js * f },
          children: [
            o.jsxs("div", {
              className: "m2-racename-bar",
              style: { left: ll * f, top: cl * f, transform: `scale(${f})`, transformOrigin: "top left" },
              children: [
                o.jsx("img", { src: K + "btn_racename.png", alt: "" }),
                o.jsx("img", {
                  className: "m2-racename-face",
                  src: w.face_icon,
                  alt: "",
                  style: { left: ul, top: dl, width: 43, height: 43 },
                }),
                o.jsx("span", { className: "m2-racename-text", children: e(w.nameKey) }),
              ],
            }),
            o.jsxs("div", {
              className: "m2-thinboard-circle",
              style: { left: Fe * f, top: jt * f, width: Qs * f, height: el * f },
              children: [
                o.jsx("div", {
                  className: "m2-desc-area",
                  children: o.jsx("div", {
                    className: "m2-desc-text",
                    style: { fontSize: 11 * f },
                    children: e(w.descriptionKey),
                  }),
                }),
                o.jsx("button", {
                  className: "m2-desc-nav",
                  style: { left: 122 * f, top: 250 * f, transform: `scale(${f})`, transformOrigin: "top left" },
                  children: o.jsx("img", { src: K + "btn_prev_btn_01.png", alt: "Prev" }),
                }),
                o.jsx("button", {
                  className: "m2-desc-nav",
                  style: { left: 152 * f, top: 250 * f, transform: `scale(${f})`, transformOrigin: "top left" },
                  children: o.jsx("img", { src: K + "btn_next_btn_01.png", alt: "Next" }),
                }),
              ],
            }),
            Wa.map((L, O) => {
              const Q = w.stats[L.key];
              return o.jsxs(
                "div",
                {
                  className: "m2-stat-row",
                  style: { left: tl * f, top: (nl + rl * O) * f, fontSize: 11 * f },
                  children: [
                    o.jsx("span", { className: "m2-stat-label", style: { width: 26 * f }, children: L.label }),
                    o.jsxs("div", {
                      style: { display: "flex", width: il * f, marginLeft: (al - 26) * f, height: 8 * f },
                      children: [
                        o.jsx("img", {
                          src: tt + "gauge_slot_left.png",
                          alt: "",
                          style: { height: 8 * f, width: 4 * f, imageRendering: "pixelated" },
                        }),
                        o.jsx("div", {
                          style: {
                            flex: 1,
                            backgroundImage: `url(${tt}gauge_slot_center.png)`,
                            backgroundRepeat: "repeat-x",
                            backgroundSize: `auto ${8 * f}px`,
                            position: "relative",
                            overflow: "hidden",
                          },
                          children: o.jsx("div", {
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              height: "100%",
                              width: `${ve[O] * 100}%`,
                              backgroundImage: `url(${L.gauge})`,
                              backgroundRepeat: "repeat-x",
                              backgroundSize: `auto ${8 * f}px`,
                              imageRendering: "pixelated",
                              transition: "width 0.5s ease",
                            },
                          }),
                        }),
                        o.jsx("img", {
                          src: tt + "gauge_slot_right.png",
                          alt: "",
                          style: { height: 8 * f, width: 4 * f, imageRendering: "pixelated" },
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "m2-stat-slot",
                      style: { width: ol * f, height: sl * f, marginLeft: 7 * f },
                      children: Q,
                    }),
                  ],
                },
                L.key,
              );
            }),
          ],
        }),
        o.jsxs("button", {
          className: "m2-bottom-btn",
          style: { left: A, top: E, transform: `scale(${f})`, transformOrigin: "top left" },
          onClick: ae,
          children: [
            o.jsx("img", { className: "btn-default", src: K + "btn_start_btn_01.png", alt: "Start" }),
            o.jsx("img", { className: "btn-hover", src: K + "btn_start_btn_02.png", alt: "" }),
            o.jsx("img", { className: "btn-down", src: K + "btn_start_btn_03.png", alt: "" }),
          ],
        }),
        o.jsxs("button", {
          className: "m2-bottom-btn",
          style: { left: k, top: E, transform: `scale(${f})`, transformOrigin: "top left" },
          children: [
            o.jsx("img", { className: "btn-default", src: K + "btn_cancel_btn_01.png", alt: "Exit" }),
            o.jsx("img", { className: "btn-hover", src: K + "btn_cancel_btn_02.png", alt: "" }),
            o.jsx("img", { className: "btn-down", src: K + "btn_cancel_btn_03.png", alt: "" }),
          ],
        }),
        a &&
          o.jsx("div", {
            className: "m2-name-dialog-backdrop",
            children: o.jsxs("div", {
              className: "m2-name-dialog",
              style: { transform: `scale(${Math.max(0.9, f)})` },
              children: [
                o.jsx("div", { className: "m2-name-dialog-title", children: e("ui.characterName") }),
                o.jsx("div", { className: "m2-name-dialog-text", children: e("ui.characterNamePrompt") }),
                o.jsx("input", {
                  ref: r,
                  className: "m2-name-dialog-input",
                  value: l,
                  onChange: (L) => s(L.target.value.slice(0, 16)),
                  maxLength: 16,
                }),
                o.jsxs("div", {
                  className: "m2-name-dialog-actions",
                  children: [
                    o.jsx("button", { className: "m2-name-dialog-btn", onClick: Z, children: e("ui.confirm") }),
                    o.jsx("button", {
                      className: "m2-name-dialog-btn",
                      onClick: () => i(!1),
                      children: e("ui.cancel"),
                    }),
                  ],
                }),
              ],
            }),
          }),
        o.jsx("a", {
          href: "mailto:beststudio@anka2.net",
          style: {
            position: "absolute",
            bottom: 8 * f,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            pointerEvents: "auto",
            color: "rgba(180, 170, 140, 0.5)",
            fontSize: 10 * f,
            fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
            textDecoration: "none",
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
            letterSpacing: "1px",
            transition: "color 0.2s",
          },
          onMouseEnter: (L) => (L.currentTarget.style.color = "rgba(220, 200, 150, 0.8)"),
          onMouseLeave: (L) => (L.currentTarget.style.color = "rgba(180, 170, 140, 0.5)"),
          children: "Developed by Best Studio",
        }),
      ],
    })
  );
}
const hl = "/ui/loading/deneme22.jpg",
  fl = "/logo/logo.png";
function yl() {
  const e = R((n) => n.setPhase),
    t = ke();
  return o.jsxs("div", {
    style: Be.container,
    children: [
      o.jsx("div", {
        style: { ...Be.bg, backgroundImage: `linear-gradient(rgba(8, 8, 10, 0.36), rgba(8, 8, 10, 0.74)), url(${hl})` },
      }),
      o.jsx("div", { style: Be.overlay }),
      o.jsxs("main", {
        style: Be.content,
        children: [
          o.jsx("img", { src: fl, alt: "Anka2", style: Be.logo }),
          o.jsx("div", { style: Be.kicker, children: t("landing.kicker") }),
          o.jsx("h1", { style: Be.title, children: "Turkmmo Best Studio" }),
          o.jsx("p", { style: Be.subtitle, children: t("landing.subtitle") }),
          o.jsx("div", {
            style: Be.actions,
            children: o.jsx("button", {
              style: Be.primaryButton,
              onClick: () => e("preload"),
              children: t("landing.enter"),
            }),
          }),
        ],
      }),
    ],
  });
}
const Be = {
    container: { position: "fixed", inset: 0, overflow: "hidden", background: "#050608" },
    bg: {
      position: "absolute",
      inset: 0,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transform: "scale(1.03)",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 50% 28%, rgba(255, 214, 130, 0.12), transparent 24%), linear-gradient(180deg, rgba(11,12,15,0.15), rgba(11,12,15,0.82))",
    },
    content: {
      position: "relative",
      zIndex: 1,
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      textAlign: "center",
    },
    logo: { width: "min(160px, 28vw)", marginBottom: 18, filter: "drop-shadow(0 10px 24px rgba(0, 0, 0, 0.55))" },
    kicker: {
      color: "#d9b66e",
      fontFamily: "'Metin2', Tahoma, sans-serif",
      fontSize: "clamp(12px, 1.4vw, 16px)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      marginBottom: 14,
      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
    },
    title: {
      color: "#f5e6bf",
      fontFamily: "'Metin2', 'Cinzel', Georgia, serif",
      fontWeight: 900,
      fontSize: "clamp(40px, 7vw, 88px)",
      lineHeight: 0.95,
      textShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212,168,85,0.15)",
      marginBottom: 18,
    },
    subtitle: {
      width: "min(760px, 92vw)",
      color: "#e1d7bf",
      fontFamily: "'Metin2', Tahoma, sans-serif",
      fontSize: "clamp(15px, 2vw, 20px)",
      lineHeight: 1.6,
      marginBottom: 28,
      textShadow: "0 2px 12px rgba(0, 0, 0, 0.6)",
    },
    actions: { display: "flex", justifyContent: "center", marginBottom: 24 },
    primaryButton: {
      minWidth: 240,
      border: "2px solid #5a4a2a",
      background: "url('/ui/hud/inventory/board_base.png') repeat center",
      color: "#f0e6c8",
      padding: "16px 28px",
      fontSize: 16,
      fontFamily: "'Metin2', Tahoma, sans-serif",
      fontWeight: 400,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      textShadow: "1px 1px 0 rgba(0,0,0,0.8)",
      boxShadow: "inset 0 0 12px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.5)",
      position: "relative",
    },
  },
  Xa = [
    "/models/characters/warrior_m.glb",
    "/models/characters/assassin_m.glb",
    "/models/characters/sura_m.glb",
    "/models/characters/shaman_m.glb",
  ],
  Ja = [
    "/ui/empire/empire_sinsu169.jpeg",
    "/ui/empire/empire_jinno169.jpeg",
    "/ui/empire/empire_jinno169.jpg",
    "/ui/sprites/btn_start_btn_01.png",
    "/ui/sprites/btn_start_btn_02.png",
    "/ui/sprites/btn_start_btn_03.png",
    "/ui/sprites/btn_cancel_btn_01.png",
    "/ui/sprites/btn_cancel_btn_02.png",
    "/ui/sprites/btn_cancel_btn_03.png",
    "/ui/sprites/btn_150x35_selectbtn_01.png",
    "/ui/sprites/btn_150x35_selectbtn_02.png",
    "/ui/sprites/btn_150x35_selectbtn_03.png",
    "/ui/sprites/btn_emptyslot.png",
    "/ui/sprites/btn_descphase.png",
    "/ui/sprites/btn_racename.png",
    "/ui/sprites/btn_plus_btn_01.png",
    "/ui/sprites/btn_minus_btn_01.png",
    "/ui/sprites/btn_prev_btn_01.png",
    "/ui/sprites/btn_next_btn_01.png",
    "/ui/sprites/name_warrior.png",
    "/ui/sprites/name_assassin.png",
    "/ui/sprites/name_sura.png",
    "/ui/sprites/name_shaman.png",
    "/ui/sprites/face_warrior_m_01.png",
    "/ui/sprites/face_warrior_m_02.png",
    "/ui/sprites/face_assassin_m_01.png",
    "/ui/sprites/face_assassin_m_02.png",
    "/ui/sprites/face_sura_m_01.png",
    "/ui/sprites/face_sura_m_02.png",
    "/ui/sprites/face_shaman_m_01.png",
    "/ui/sprites/face_shaman_m_02.png",
    "/ui/face/warrior_m.png",
    "/ui/face/assassin_m.png",
    "/ui/face/sura_m.png",
    "/ui/face/shaman_m.png",
    "/ui/hud/taskbar/gauge_bg.png",
    "/ui/hud/taskbar/exp_gauge.png",
    "/ui/hud/taskbar/exp_gauge_point.png",
    "/ui/hud/gauges/hpgauge_03.png",
    "/ui/hud/gauges/spgauge_03.png",
    "/ui/hud/taskbar/character_btn_01.png",
    "/ui/hud/taskbar/character_btn_02.png",
    "/ui/hud/taskbar/character_btn_03.png",
    "/ui/hud/taskbar/inventory_btn_01.png",
    "/ui/hud/taskbar/inventory_btn_02.png",
    "/ui/hud/taskbar/inventory_btn_03.png",
    "/ui/hud/taskbar/chat_btn_01.png",
    "/ui/hud/taskbar/chat_btn_02.png",
    "/ui/hud/taskbar/chat_btn_03.png",
    "/ui/hud/taskbar/community_btn_01.png",
    "/ui/hud/taskbar/community_btn_02.png",
    "/ui/hud/taskbar/community_btn_03.png",
    "/ui/hud/taskbar/system_btn_01.png",
    "/ui/hud/taskbar/system_btn_02.png",
    "/ui/hud/taskbar/system_btn_03.png",
    "/ui/hud/taskbar/quickslot_up_01.png",
    "/ui/hud/taskbar/quickslot_down_01.png",
    "/ui/hud/taskbar/key_1.png",
    "/ui/hud/taskbar/key_2.png",
    "/ui/hud/taskbar/key_3.png",
    "/ui/hud/taskbar/key_4.png",
    "/ui/hud/taskbar/key_f1.png",
    "/ui/hud/taskbar/key_f2.png",
    "/ui/hud/taskbar/key_f3.png",
    "/ui/hud/taskbar/key_f4.png",
    "/ui/extracted/minimap/minimap.png",
    "/ui/extracted/minimap/minimap_open_default.png",
    "/ui/extracted/minimap/minimap_close_default.png",
    "/ui/extracted/minimap/minimap_close_over.png",
    "/ui/extracted/minimap/minimap_close_down.png",
    "/ui/extracted/minimap/minimap_scaleup_default.png",
    "/ui/extracted/minimap/minimap_scaleup_over.png",
    "/ui/extracted/minimap/minimap_scaleup_down.png",
    "/ui/extracted/minimap/minimap_scaledown_default.png",
    "/ui/extracted/minimap/minimap_scaledown_over.png",
    "/ui/extracted/minimap/minimap_scaledown_down.png",
    "/ui/extracted/minimap/atlas_open_default.png",
    "/ui/extracted/minimap/atlas_open_over.png",
    "/ui/extracted/minimap/atlas_open_down.png",
    "/ui/extracted/minimap/e_open_default.png",
    "/ui/extracted/minimap/e_open_over.png",
    "/ui/extracted/minimap/e_open_down.png",
    "/ui/extracted/minimap/battle_open_default.png",
    "/ui/extracted/minimap/battle_open_over.png",
    "/ui/extracted/minimap/battle_open_down.png",
    "/ui/extracted/minimap/playermark.png",
    "/ui/hud/taskbar/chatlog_btn_01.png",
    "/ui/hud/taskbar/chatlog_btn_02.png",
    "/ui/hud/taskbar/chatlog_btn_03.png",
    "/ui/hud/taskbar/send_chat_btn_01.png",
    "/ui/hud/taskbar/send_chat_btn_02.png",
    "/ui/hud/taskbar/send_chat_btn_03.png",
    "/ui/hud/taskbar/send_whisper_btn_01.png",
    "/ui/hud/taskbar/send_whisper_btn_02.png",
    "/ui/hud/taskbar/send_whisper_btn_03.png",
    "/ui/hud/taskbar/ignore_btn_01.png",
    "/ui/hud/taskbar/ignore_btn_02.png",
    "/ui/hud/taskbar/ignore_btn_03.png",
    "/ui/hud/taskbar/symbol_g.png",
    "/ui/hud/inventory/board_base.png",
    "/ui/hud/inventory/board_corner_lt.png",
    "/ui/hud/inventory/board_corner_rt.png",
    "/ui/hud/inventory/board_corner_lb.png",
    "/ui/hud/inventory/board_corner_rb.png",
    "/ui/hud/inventory/board_line_t.png",
    "/ui/hud/inventory/board_line_r.png",
    "/ui/hud/inventory/board_line_b.png",
    "/ui/hud/inventory/board_line_l.png",
    "/ui/hud/inventory/titlebar_left.png",
    "/ui/hud/inventory/titlebar_center.png",
    "/ui/hud/inventory/titlebar_right.png",
    "/ui/hud/inventory/close_btn_01.png",
    "/ui/hud/inventory/close_btn_02.png",
    "/ui/hud/inventory/close_btn_03.png",
    "/ui/hud/inventory/equipment_bg.png",
    "/ui/hud/inventory/grid_bg.png",
    "/ui/hud/inventory/slot_base.png",
    "/ui/hud/inventory/tab_norm.png",
    "/ui/hud/inventory/tab_down.png",
    "/ui/hud/inventory/equipment_base.png",
    "/ui/hud/inventory/tab_small_01.png",
    "/ui/hud/inventory/tab_small_02.png",
    "/ui/hud/inventory/tab_small_03.png",
    "/ui/hud/inventory/page_button_0.png",
    "/ui/hud/inventory/page_button_1.png",
    "/ui/hud/inventory/page_button_2.png",
    "/ui/hud/inventory/button_bg.png",
    "/ui/hud/inventory/button_bg2.png",
    "/ui/hud/currency/gold_slot.png",
    "/ui/hud/currency/money_icon.png",
    "/ui/hud/charinfo/char_info_att.png",
    "/ui/hud/charinfo/char_info_def.png",
    "/ui/hud/charinfo/char_info_hp.png",
    "/ui/hud/charinfo/char_info_sp.png",
    "/ui/hud/charinfo/char_info_str.png",
    "/ui/hud/charinfo/char_info_dex.png",
    "/ui/hud/charinfo/char_info_con.png",
    "/ui/hud/charinfo/char_info_int.png",
    "/ui/hud/charinfo/char_info_attspeed.png",
    "/ui/hud/charinfo/char_info_movespeed.png",
    "/ui/hud/charinfo/char_info_magatt.png",
    "/ui/hud/charinfo/char_info_magdef.png",
    "/ui/hud/charinfo/char_info_hitpct.png",
    "/ui/hud/charinfo/face_warrior.png",
    "/ui/hud/charinfo/face_assassin.png",
    "/ui/hud/charinfo/face_sura.png",
    "/ui/hud/charinfo/face_shaman.png",
  ],
  bl = "/ui/loading/deneme22.jpg",
  Qa = ["tip.1", "tip.2", "tip.3", "tip.4", "tip.5", "tip.6"];
function xl(e) {
  return new Promise((t) => {
    const n = new Image();
    ((n.onload = () => t()), (n.onerror = () => t()), (n.src = e));
  });
}
function vl(e) {
  return fetch(e)
    .then(() => {})
    .catch(() => {});
}
function Sl() {
  const e = ke(),
    t = R((g) => g.setPhase),
    [n, a] = z.useState(0),
    [i, l] = z.useState("loading.starting"),
    s = z.useRef(!1),
    [r] = z.useState(() => Qa[Math.floor(Math.random() * Qa.length)]);
  z.useEffect(() => {
    if (s.current) return;
    s.current = !0;
    const g = Xa.length + Ja.length;
    let u = 0;
    async function p() {
      l("loading.models");
      for (const h of Xa) (await vl(h), u++, a(Math.round((u / g) * 100)));
      l("loading.ui_preparing");
      const m = Ja.map(async (h) => {
        (await xl(h), u++, a(Math.round((u / g) * 100)));
      });
      (await Promise.all(m),
        l("loading.ready"),
        setTimeout(() => {
          t("character-select");
        }, 400));
    }
    p();
  }, [t]);
  const c = () => {
    document.fullscreenElement || document.documentElement.requestFullscreen().catch(() => {});
  };
  return o.jsxs("div", {
    style: ue.container,
    onClick: c,
    children: [
      o.jsx("div", { style: { ...ue.bgImage, backgroundImage: `url(${bl})` } }),
      o.jsx("div", { style: ue.vignette }),
      o.jsx("div", { style: ue.borderTop, children: o.jsx("div", { style: ue.borderPattern }) }),
      o.jsx("div", { style: ue.borderBottom, children: o.jsx("div", { style: ue.borderPattern }) }),
      o.jsxs("div", {
        style: ue.bottomArea,
        children: [
          o.jsx("p", { style: ue.tip, children: e(r) }),
          o.jsxs("div", {
            style: ue.barOuter,
            children: [
              o.jsx("div", {
                style: ue.barInner,
                children: o.jsx("div", { style: { ...ue.barFill, width: `${Math.max(1, n)}%` } }),
              }),
              o.jsx("div", { style: { ...ue.barOrnament, left: -14 }, children: "◆" }),
              o.jsx("div", { style: { ...ue.barOrnament, right: -14 }, children: "◆" }),
            ],
          }),
          o.jsxs("p", { style: ue.percent, children: [n, "%"] }),
          o.jsx("p", { style: ue.status, children: e(i) }),
        ],
      }),
    ],
  });
}
const ue = {
  container: { position: "fixed", inset: 0, background: "#000", zIndex: 300, overflow: "hidden" },
  bgImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.9) 100%)",
    pointerEvents: "none",
  },
  borderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 32,
    background: "linear-gradient(180deg, #0a0a0a 0%, transparent 100%)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  borderBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 32,
    background: "linear-gradient(0deg, #0a0a0a 0%, transparent 100%)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  borderPattern: {
    width: "80%",
    height: 2,
    background: "linear-gradient(90deg, transparent, #6a5530 20%, #d4a855 50%, #6a5530 80%, transparent)",
    opacity: 0.6,
  },
  bottomArea: {
    position: "absolute",
    bottom: 48,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3,
  },
  tip: {
    color: "#8a7a5a",
    fontSize: "clamp(0.65rem, 1.1vw, 0.8rem)",
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "Tahoma, 'Segoe UI', sans-serif",
    fontStyle: "italic",
    textShadow: "0 1px 3px rgba(0,0,0,0.9)",
    letterSpacing: "0.05em",
  },
  barOuter: {
    position: "relative",
    width: "clamp(280px, 40vw, 480px)",
    height: 18,
    background: "linear-gradient(180deg, #2a1a0a, #1a0f05, #2a1a0a)",
    border: "1px solid #5a4020",
    borderRadius: 2,
    padding: 3,
    boxShadow: "0 0 10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,168,85,0.1)",
  },
  barInner: {
    width: "100%",
    height: "100%",
    background: "#0a0805",
    borderRadius: 1,
    overflow: "hidden",
    border: "1px solid #1a1005",
  },
  barFill: {
    height: "100%",
    background: "linear-gradient(180deg, #e8c44a 0%, #c89b30 30%, #8B6914 70%, #6a4f10 100%)",
    transition: "width 0.3s ease",
    boxShadow: "0 0 6px rgba(212,168,85,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
    borderRadius: 1,
  },
  barOrnament: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#8a6a2a",
    fontSize: 10,
    textShadow: "0 0 4px rgba(212,168,85,0.4)",
    lineHeight: 1,
  },
  percent: {
    color: "#d4a855",
    fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
    fontWeight: 700,
    marginTop: 6,
    letterSpacing: "0.1em",
    textShadow: "0 1px 4px rgba(0,0,0,0.9)",
    fontFamily: "Tahoma, 'Segoe UI', sans-serif",
  },
  status: {
    color: "#5a4a2a",
    fontSize: "0.7rem",
    textAlign: "center",
    marginTop: 4,
    letterSpacing: "0.1em",
    fontFamily: "Tahoma, 'Segoe UI', sans-serif",
    textShadow: "0 1px 3px rgba(0,0,0,0.9)",
  },
};
function ei({ keyLabel: e, keyImg: t, size: n }) {
  return o.jsx("div", {
    className: "m2-quickslot",
    style: { width: n, height: n },
    title: e,
    children:
      t &&
      o.jsx("div", {
        className: "m2-quickslot-key",
        children: o.jsx("img", {
          src: t,
          alt: e,
          style: { transform: `scale(${n / 32})`, transformOrigin: "bottom right" },
        }),
      }),
  });
}
const wl = "/ui/hud/taskbar/coin/coins_17_3x.png",
  ti = 17,
  Ml = "/ui/hud/taskbar/gauge_bg.png",
  _l = "/ui/hud/taskbar/exp_gauge.png",
  kl = "/ui/hud/taskbar/exp_gauge_point.png",
  Pl = "/ui/hud/gauges/hpgauge_03.png",
  Tl = "/ui/hud/gauges/spgauge_03.png",
  Al = "/ui/hud/taskbar/taskbar_base.png",
  Bl = [
    "/ui/hud/taskbar/mouse_attack_01.png",
    "/ui/hud/taskbar/mouse_attack_03.png",
    "/ui/hud/taskbar/mouse_attack_02.png",
  ],
  zl = [
    "/ui/hud/taskbar/mouse_camera_01.png",
    "/ui/hud/taskbar/mouse_camera_02.png",
    "/ui/hud/taskbar/mouse_camera_03.png",
  ],
  jl = [
    "/ui/hud/taskbar/quickslot_up_01.png",
    "/ui/hud/taskbar/quickslot_up_02.png",
    "/ui/hud/taskbar/quickslot_up_03.png",
  ],
  El = [
    "/ui/hud/taskbar/quickslot_down_01.png",
    "/ui/hud/taskbar/quickslot_down_02.png",
    "/ui/hud/taskbar/quickslot_down_03.png",
  ],
  ni = {
    calendar: [
      "/ui/hud/taskbar/calendar_btn_01.png",
      "/ui/hud/taskbar/calendar_btn_02.png",
      "/ui/hud/taskbar/calendar_btn_03.png",
    ],
    wheel: ["/ui/hud/taskbar/wheel_btn_01.png", "/ui/hud/taskbar/wheel_btn_02.png", "/ui/hud/taskbar/wheel_btn_03.png"],
    character: [
      "/ui/hud/taskbar/character_btn_01.png",
      "/ui/hud/taskbar/character_btn_02.png",
      "/ui/hud/taskbar/character_btn_03.png",
    ],
    inventory: [
      "/ui/hud/taskbar/inventory_btn_01.png",
      "/ui/hud/taskbar/inventory_btn_02.png",
      "/ui/hud/taskbar/inventory_btn_03.png",
    ],
    chat: ["/ui/hud/taskbar/chat_btn_01.png", "/ui/hud/taskbar/chat_btn_02.png", "/ui/hud/taskbar/chat_btn_03.png"],
    community: [
      "/ui/hud/taskbar/community_btn_01.png",
      "/ui/hud/taskbar/community_btn_02.png",
      "/ui/hud/taskbar/community_btn_03.png",
    ],
    system: [
      "/ui/hud/taskbar/system_btn_01.png",
      "/ui/hud/taskbar/system_btn_02.png",
      "/ui/hud/taskbar/system_btn_03.png",
    ],
  },
  ai = {
    1: "/ui/hud/taskbar/key_1.png",
    2: "/ui/hud/taskbar/key_2.png",
    3: "/ui/hud/taskbar/key_3.png",
    4: "/ui/hud/taskbar/key_4.png",
    F1: "/ui/hud/taskbar/key_f1.png",
    F2: "/ui/hud/taskbar/key_f2.png",
    F3: "/ui/hud/taskbar/key_f3.png",
    F4: "/ui/hud/taskbar/key_f4.png",
  };
function zt({ imgs: e, size: t, w: n, h: a, title: i }) {
  const l = n ?? t ?? 32,
    s = a ?? t ?? 32;
  return o.jsxs("button", {
    className: "m2-menu-btn",
    title: i,
    children: [
      o.jsx("img", { className: "btn-default", src: e[0], alt: i, style: { width: l, height: s } }),
      o.jsx("img", { className: "btn-hover", src: e[1], alt: "", style: { width: l, height: s } }),
      o.jsx("img", { className: "btn-down", src: e[2], alt: "", style: { width: l, height: s } }),
    ],
  });
}
function Cl({ sc: e }) {
  const t = R((q) => q.hp),
    n = R((q) => q.maxHp),
    a = R((q) => q.mp),
    i = R((q) => q.maxMp),
    l = R((q) => q.exp),
    s = R((q) => q.maxExp),
    r = R((q) => q.toggleInventory),
    c = R((q) => q.toggleCharacter),
    g = R((q) => q.openNpcWindow),
    u = ke(),
    p = Math.min(100, (t / n) * 100),
    m = Math.min(100, (a / i) * 100),
    h = Math.min(4, Math.floor((l / s) * 4)),
    S = Math.round(37 * e),
    M = Math.round(158 * e),
    w = Math.round(47 * e),
    f = Math.round(105 * e),
    y = Math.round(37 * e),
    x = Math.round(19 * e),
    b = Math.round(95 * e),
    v = Math.round(11 * e),
    B = Math.round(32 * e),
    _ = Math.round(32 * e),
    T = Math.round(14 * e),
    j = Math.round(35 * e),
    A = Math.round(9 * e),
    E = Math.round(5 * e),
    k = Math.round(50 * e),
    P = Math.round(12 * e),
    I = Math.round(50 * e),
    N = Math.round(24 * e),
    U = [
      { x: Math.round(4 * e), y: Math.round(9 * e) },
      { x: Math.round(29 * e), y: Math.round(9 * e) },
      { x: Math.round(54 * e), y: Math.round(9 * e) },
      { x: Math.round(79 * e), y: Math.round(9 * e) },
    ];
  return o.jsxs("div", {
    className: "m2-taskbar",
    children: [
      o.jsx("div", {
        className: "m2-taskbar-base",
        style: {
          height: S,
          backgroundImage: `url(${Al})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${S}px`,
        },
      }),
      o.jsxs("div", {
        className: "m2-taskbar-content",
        children: [
          o.jsxs("div", {
            className: "m2-taskbar-left",
            children: [
              o.jsxs("div", {
                className: "m2-gauge-container",
                style: { width: M, height: w },
                children: [
                  o.jsx("img", { className: "m2-gauge-bg-img", src: Ml, alt: "Gauge", style: { width: M, height: w } }),
                  o.jsx("div", {
                    className: "m2-coin-sprite",
                    style: {
                      position: "absolute",
                      left: Math.round(5 * e),
                      top: Math.round(3 * e),
                      width: Math.round(41 * e),
                      height: Math.round(41 * e),
                      overflow: "hidden",
                      borderRadius: "50%",
                    },
                    children: o.jsx("div", {
                      className: "m2-coin-anim",
                      style: {
                        width: Math.round(41 * ti * e),
                        height: Math.round(41 * e),
                        backgroundImage: `url(${wl})`,
                        backgroundSize: `${Math.round(41 * ti * e)}px ${Math.round(41 * e)}px`,
                        imageRendering: "pixelated",
                      },
                    }),
                  }),
                  o.jsx("div", {
                    className: "m2-gauge-bar-clip",
                    style: { left: k, top: P, width: Math.round((b * p) / 100), height: v },
                    children: o.jsx("img", { src: Pl, alt: "HP", style: { width: b, height: v } }),
                  }),
                  o.jsx("div", {
                    className: "m2-gauge-bar-clip",
                    style: { left: I, top: N, width: Math.round((b * m) / 100), height: v },
                    children: o.jsx("img", { src: Tl, alt: "MP", style: { width: b, height: v } }),
                  }),
                  o.jsxs("span", {
                    className: "m2-gauge-text",
                    style: { left: k + b / 2, top: P + v / 2, fontSize: Math.round(7 * e) },
                    children: [t, " / ", n],
                  }),
                  o.jsxs("span", {
                    className: "m2-gauge-text",
                    style: { left: I + b / 2, top: N + v / 2, fontSize: Math.round(7 * e) },
                    children: [a, " / ", i],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "m2-exp-gauge-container",
                style: { width: f, height: y },
                children: [
                  o.jsx("img", { className: "m2-exp-gauge-img", src: _l, alt: "EXP", style: { width: f, height: y } }),
                  U.map(
                    (q, Z) =>
                      Z < h &&
                      o.jsx(
                        "img",
                        {
                          className: "m2-exp-point",
                          src: kl,
                          alt: "EXP",
                          style: { left: q.x, top: q.y, width: x, height: x },
                        },
                        Z,
                      ),
                  ),
                ],
              }),
            ],
          }),
          o.jsx("div", {
            className: "m2-quickslots-center",
            children: o.jsxs("div", {
              className: "m2-quickslot-row",
              children: [
                o.jsx("div", {
                  style: { paddingRight: Math.round(10 * e), alignSelf: "flex-end" },
                  children: o.jsx(zt, { imgs: Bl, size: _, title: u("taskbar.move_attack") }),
                }),
                ["1", "2", "3", "4"].map((q) => o.jsx(ei, { keyLabel: q, keyImg: ai[q], size: B }, q)),
                o.jsx(zt, { imgs: ni.chat, w: T, h: j, title: "Chat" }),
                ["F1", "F2", "F3", "F4"].map((q) => o.jsx(ei, { keyLabel: q, keyImg: ai[q], size: B }, q)),
                o.jsxs("div", {
                  className: "m2-quickslot-arrows",
                  children: [
                    o.jsx(zt, { imgs: jl, w: A, h: E, title: u("taskbar.prev_page") }),
                    o.jsx("span", {
                      className: "m2-quickslot-page",
                      style: { fontSize: Math.round(7 * e) },
                      children: "1",
                    }),
                    o.jsx(zt, { imgs: El, w: A, h: E, title: u("taskbar.next_page") }),
                  ],
                }),
                o.jsx("div", {
                  style: { paddingLeft: Math.round(10 * e), alignSelf: "flex-end" },
                  children: o.jsx(zt, { imgs: zl, size: _, title: u("taskbar.camera") }),
                }),
              ],
            }),
          }),
          o.jsx("div", {
            className: "m2-menu-buttons-right",
            children: Object.entries(ni)
              .filter(([q]) => q !== "chat")
              .map(([q, Z]) => {
                const ae = _,
                  ve = _;
                return o.jsxs(
                  "button",
                  {
                    className: "m2-menu-btn",
                    title: q,
                    onClick:
                      q === "inventory"
                        ? r
                        : q === "character"
                          ? c
                          : q === "wheel"
                            ? () => g("wheel")
                            : q === "calendar"
                              ? () => g("calendar")
                              : q === "system"
                                ? () => g("system")
                                : void 0,
                    children: [
                      o.jsx("img", { className: "btn-default", src: Z[0], alt: q, style: { width: ae, height: ve } }),
                      o.jsx("img", { className: "btn-hover", src: Z[1], alt: "", style: { width: ae, height: ve } }),
                      o.jsx("img", { className: "btn-down", src: Z[2], alt: "", style: { width: ae, height: ve } }),
                    ],
                  },
                  q,
                );
              }),
          }),
        ],
      }),
    ],
  });
}
const Ui = "/ui/extracted/minimap/atlas_a1.png",
  dn = 204,
  pn = 255,
  Rl = -3 - 3.33,
  Il = -0.3 - 4.09,
  Dl = 95,
  $l = 75,
  Ll = 0.1,
  ql = 0.1;
function Vi(e, t) {
  const n = Dl + (e - Rl) / Ll,
    a = $l + (t - Il) / ql;
  return { ax: n, az: a };
}
const V = "/ui/extracted/minimap/",
  Nl = V + "minimap.png",
  Kl = V + "minimap_open_default.png",
  Ol = V + "playermark.png",
  Fl = [V + "minimap_close_default.png", V + "minimap_close_over.png", V + "minimap_close_down.png"],
  Gl = [V + "minimap_scaleup_default.png", V + "minimap_scaleup_over.png", V + "minimap_scaleup_down.png"],
  Hl = [V + "minimap_scaledown_default.png", V + "minimap_scaledown_over.png", V + "minimap_scaledown_down.png"],
  Ul = [V + "atlas_open_default.png", V + "atlas_open_over.png", V + "atlas_open_down.png"],
  Vl = 136,
  Yl = 137,
  Wl = 10,
  Zl = 10,
  Xl = 118,
  Jl = { x: 120, y: 15, w: 19, h: 20 },
  Ql = { x: 109, y: 124, w: 15, h: 15 },
  ec = { x: 122, y: 110, w: 15, h: 15 },
  tc = { x: 70, y: 133, w: 25, h: 25 },
  nc = [V + "mucadele_sistemi_default.png", V + "mucadele_sistemi_over.png", V + "mucadele_sistemi_down.png"],
  ac = [V + "savas_bileti_default.png", V + "savas_bileti_over.png", V + "savas_bileti_down.png"],
  ic = [V + "siralama_default.png", V + "siralama_over.png", V + "siralama_down.png"],
  rc = [V + "biyolog_default.png", V + "biyolog_over.png", V + "biyolog_down.png"],
  oc = { x: 5, y: 62, w: 25, h: 25 },
  sc = { x: 37, y: 122, w: 23, h: 23 },
  lc = { x: 20, y: 25, w: 25, h: 25 },
  cc = { x: 13, y: 95, w: 25, h: 25 },
  ii = 2.5;
function uc({ imgs: e, w: t, h: n, title: a, onClick: i }) {
  return o.jsxs("button", {
    className: "m2-menu-btn",
    title: a,
    onClick: i,
    children: [
      o.jsx("img", { className: "btn-default", src: e[0], alt: a, style: { width: t, height: n } }),
      o.jsx("img", { className: "btn-hover", src: e[1], alt: "", style: { width: t, height: n } }),
      o.jsx("img", { className: "btn-down", src: e[2], alt: "", style: { width: t, height: n } }),
    ],
  });
}
function Ne({ imgs: e, pos: t, sc: n, title: a, onClick: i }) {
  const l = (c) => Math.round(c * n),
    s = l(t.w),
    r = l(t.h);
  return o.jsx("div", {
    style: { position: "absolute", left: l(t.x) - s / 2, top: l(t.y) - r / 2, zIndex: 5 },
    children: o.jsx(uc, { imgs: e, w: s, h: r, title: a, onClick: i }),
  });
}
function dc({ sc: e }) {
  const t = z.useRef(null),
    n = z.useRef(null),
    a = z.useRef(0),
    i = (c) => Math.round(c * e),
    l = i(Xl),
    s = i(dn * ii),
    r = i(pn * ii);
  return (
    z.useEffect(() => {
      let c = !0;
      const g = () => {
        if (!c) return;
        const { position: u, cameraAzimuth: p } = re.getState();
        if ((n.current && (n.current.style.transform = `translate(-50%, -50%) rotate(${-p}rad)`), t.current)) {
          const { ax: m, az: h } = Vi(u.x, u.z),
            S = (m / dn) * s,
            M = (h / pn) * r,
            w = l / 2 - S,
            f = l / 2 - M;
          t.current.style.transform = `translate(${w}px, ${f}px)`;
        }
        a.current = requestAnimationFrame(g);
      };
      return (
        (a.current = requestAnimationFrame(g)),
        () => {
          ((c = !1), cancelAnimationFrame(a.current));
        }
      );
    }, [e, l, s, r]),
    o.jsxs("div", {
      className: "m2-minimap-content",
      style: { width: l, height: l, top: i(Zl), left: i(Wl) },
      children: [
        o.jsx("div", {
          ref: t,
          className: "m2-minimap-terrain",
          style: {
            width: s,
            height: r,
            backgroundImage: `url(${Ui})`,
            backgroundSize: `${s}px ${r}px`,
            backgroundRepeat: "no-repeat",
          },
        }),
        o.jsx("img", {
          ref: n,
          src: Ol,
          alt: "",
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: i(7),
            height: i(8),
            imageRendering: "pixelated",
            zIndex: 2,
          },
        }),
      ],
    })
  );
}
function pc({ sc: e }) {
  const t = ke(),
    n = R((p) => p.characterName),
    a = R((p) => p.level),
    i = R((p) => p.minimapVisible),
    l = R((p) => p.toggleMinimap),
    s = R((p) => p.toggleAtlas),
    r = R((p) => p.openNpcWindow),
    c = (p) => Math.round(p * e),
    g = c(Vl),
    u = c(Yl);
  return i
    ? o.jsxs("div", {
        className: "m2-minimap",
        style: { padding: `${c(4)}px` },
        children: [
          o.jsxs("div", {
            className: "m2-minimap-frame",
            style: { width: g, height: u },
            children: [
              o.jsx("img", {
                className: "m2-minimap-frame-img",
                src: Nl,
                alt: "Minimap",
                style: { width: g, height: u },
              }),
              o.jsx(dc, { sc: e }),
              o.jsx(Ne, { imgs: Fl, pos: Jl, sc: e, title: t("minimap.close"), onClick: l }),
              o.jsx(Ne, { imgs: Gl, pos: Ql, sc: e, title: t("minimap.zoom_in") }),
              o.jsx(Ne, { imgs: Hl, pos: ec, sc: e, title: t("minimap.zoom_out") }),
              o.jsx(Ne, { imgs: Ul, pos: tc, sc: e, title: t("minimap.map"), onClick: s }),
              o.jsx(Ne, { imgs: nc, pos: oc, sc: e, title: t("minimap.combat"), onClick: () => r("mucadele") }),
              o.jsx(Ne, {
                imgs: ac,
                pos: sc,
                sc: e,
                title: t("minimap.battle_ticket"),
                onClick: () => r("savas_bileti"),
              }),
              o.jsx(Ne, { imgs: ic, pos: lc, sc: e, title: t("minimap.ranking"), onClick: () => r("siralama") }),
              o.jsx(Ne, { imgs: rc, pos: cc, sc: e, title: t("minimap.biologist"), onClick: () => r("biyolog") }),
            ],
          }),
          o.jsxs("div", {
            className: "m2-minimap-info",
            children: [
              o.jsx("div", { className: "m2-minimap-name", style: { fontSize: c(10) }, children: n }),
              o.jsxs("div", { className: "m2-minimap-level", style: { fontSize: c(9) }, children: ["Lv.", a] }),
              o.jsx("div", { className: "m2-minimap-location", style: { fontSize: c(8) }, children: "Yongan" }),
              o.jsx("div", {
                style: {
                  fontSize: c(7),
                  color: "#6a5a3a",
                  textShadow: "0 0 3px #000, 1px 1px 2px #000",
                  fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                },
                children: t("minimap.channel"),
              }),
            ],
          }),
        ],
      })
    : o.jsx("div", {
        className: "m2-minimap",
        style: { padding: `${c(8)}px` },
        children: o.jsx("button", {
          className: "m2-minimap-ctrl-btn",
          onClick: l,
          title: t("minimap.open"),
          children: o.jsx("img", { src: Kl, alt: "Open", style: { width: c(32), height: c(32) } }),
        }),
      });
}
const ri = {
    it: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%23009246'/><rect x='20' width='20' height='60' fill='%23ffffff'/><rect x='40' width='20' height='60' fill='%23ce2b37'/></g></svg>")`,
    de: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23000000'/><rect y='20' width='60' height='20' fill='%23dd0000'/><rect y='40' width='60' height='20' fill='%23ffce00'/></g></svg>")`,
    el: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%230d5eaf'/><rect y='7' width='60' height='6' fill='white'/><rect y='20' width='60' height='6' fill='white'/><rect y='33' width='60' height='6' fill='white'/><rect y='46' width='60' height='6' fill='white'/><rect width='28' height='28' fill='%230d5eaf'/><rect x='11' width='6' height='28' fill='white'/><rect y='11' width='28' height='6' fill='white'/></g></svg>")`,
    fr: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%230055a4'/><rect x='20' width='20' height='60' fill='%23ffffff'/><rect x='40' width='20' height='60' fill='%23ef4135'/></g></svg>")`,
    tr: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23e30a17'/><circle cx='24' cy='30' r='10' fill='white'/><circle cx='27' cy='30' r='8' fill='%23e30a17'/><polygon points='34,30 43,26 40,35 47,29 38,29 43,21' fill='white'/></g></svg>")`,
    hu: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ce2939'/><rect y='20' width='60' height='20' fill='%23ffffff'/><rect y='40' width='60' height='20' fill='%23477950'/></g></svg>")`,
    ru: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ffffff'/><rect y='20' width='60' height='20' fill='%230039a6'/><rect y='40' width='60' height='20' fill='%23d52b1e'/></g></svg>")`,
    ro: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%23002b7f'/><rect x='20' width='20' height='60' fill='%23fcd116'/><rect x='40' width='20' height='60' fill='%23ce1126'/></g></svg>")`,
    pl: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='30' fill='%23ffffff'/><rect y='30' width='60' height='30' fill='%23dc143c'/></g></svg>")`,
    pt: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='24' height='60' fill='%2300602f'/><rect x='24' width='36' height='60' fill='%23ff0000'/><circle cx='24' cy='30' r='7' fill='none' stroke='%23ffcc00' stroke-width='3'/></g></svg>")`,
    nl: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ae1c28'/><rect y='20' width='60' height='20' fill='%23ffffff'/><rect y='40' width='60' height='20' fill='%2321468b'/></g></svg>")`,
    cs: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='30' fill='%23ffffff'/><rect y='30' width='60' height='30' fill='%23d7141a'/><polygon points='0,0 30,30 0,60' fill='%2311457e'/></g></svg>")`,
    da: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23c60c30'/><rect x='18' width='6' height='60' fill='white'/><rect y='27' width='60' height='6' fill='white'/></g></svg>")`,
    en: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23012169'/><path d='M0 0 L60 60 M60 0 L0 60' stroke='white' stroke-width='12'/><path d='M0 0 L60 60 M60 0 L0 60' stroke='%23c8102e' stroke-width='6'/><rect x='24' width='12' height='60' fill='white'/><rect y='24' width='60' height='12' fill='white'/><rect x='26' width='8' height='60' fill='%23c8102e'/><rect y='26' width='60' height='8' fill='%23c8102e'/></g></svg>")`,
    es: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='15' fill='%23aa151b'/><rect y='15' width='60' height='30' fill='%23f1bf00'/><rect y='45' width='60' height='15' fill='%23aa151b'/></g></svg>")`,
  },
  mc = [
    {
      title: "Discord",
      url: "https://discord.gg/NXmc6JrwYr",
      icon: o.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "100%",
        height: "100%",
        children: o.jsx("path", {
          d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z",
        }),
      }),
    },
    {
      title: "WhatsApp",
      url: "https://whatsapp.com/channel/0023bCs5Mg8aKvB97yv4C3t",
      icon: o.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "100%",
        height: "100%",
        children: o.jsx("path", {
          d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
        }),
      }),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/ybeststudio",
      icon: o.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "100%",
        height: "100%",
        children: o.jsx("path", {
          d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
        }),
      }),
    },
    {
      title: "Website",
      url: "https://bestwebstudio.com.tr/",
      icon: o.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "100%",
        height: "100%",
        children: o.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
        }),
      }),
    },
  ];
function gc({ sc: e }) {
  const t = Math.round(22 * e),
    n = xe((r) => r.language),
    a = xe((r) => r.setLanguage),
    [i, l] = z.useState(!1),
    s = Math.round(16 * e);
  return o.jsxs("div", {
    className: "m2-social-buttons",
    style: { padding: `${Math.round(4 * e)}px` },
    children: [
      mc.map((r) =>
        o.jsx(
          "a",
          {
            href: r.url,
            target: "_blank",
            rel: "noopener noreferrer",
            title: r.title,
            className: "m2-social-btn",
            style: { width: t, height: t },
            children: r.icon,
          },
          r.title,
        ),
      ),
      o.jsxs("div", {
        style: { position: "relative" },
        children: [
          o.jsx("button", {
            className: "m2-social-btn",
            style: { width: t, height: t, padding: 0 },
            onClick: () => l(!i),
            title: "Language",
            children: o.jsx("span", {
              style: {
                width: s,
                height: s,
                borderRadius: "50%",
                backgroundImage: ri[n],
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "block",
                margin: "auto",
              },
            }),
          }),
          i &&
            o.jsx("div", {
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: Math.round(4 * e),
                display: "flex",
                flexWrap: "wrap",
                gap: Math.round(4 * e),
                padding: Math.round(6 * e),
                background: "url(/ui/hud/inventory/board_base.png) repeat center",
                border: "2px solid #5a4a2a",
                borderRadius: 4,
                boxShadow: "inset 0 0 12px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.6)",
                width: Math.round(140 * e),
                zIndex: 10,
              },
              children: Ge.map((r) =>
                o.jsx(
                  "button",
                  {
                    style: {
                      width: Math.round(22 * e),
                      height: Math.round(22 * e),
                      borderRadius: "50%",
                      border: n === r.code ? "2px solid #d6ac55" : "1px solid rgba(92,70,38,0.8)",
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), transparent 45%), linear-gradient(180deg, rgba(42,34,24,0.92), rgba(14,12,10,0.96))",
                      boxShadow: n === r.code ? "0 0 6px rgba(212,168,85,0.3)" : "none",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    },
                    onClick: () => {
                      (a(r.code), l(!1));
                    },
                    title: r.label,
                    children: o.jsx("span", {
                      style: {
                        width: Math.round(16 * e),
                        height: Math.round(16 * e),
                        borderRadius: "50%",
                        backgroundImage: ri[r.code],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block",
                      },
                    }),
                  },
                  r.code,
                ),
              ),
            }),
        ],
      }),
    ],
  });
}
const J = "/ui/hud/inventory/",
  hc = J + "board_base.png",
  nn = {
    lt: J + "board_corner_lt.png",
    rt: J + "board_corner_rt.png",
    lb: J + "board_corner_lb.png",
    rb: J + "board_corner_rb.png",
  },
  an = { t: J + "board_line_t.png", r: J + "board_line_r.png", b: J + "board_line_b.png", l: J + "board_line_l.png" },
  fc = J + "titlebar_left.png",
  yc = J + "titlebar_center.png",
  bc = J + "titlebar_right.png",
  Rn = [J + "close_btn_01.png", J + "close_btn_02.png", J + "close_btn_03.png"],
  xc = J + "equipment_bg.png",
  vc = J + "equipment_base.png",
  Sc = J + "grid_bg.png",
  wc = J + "slot_base.png",
  oi = [J + "page_button_0.png", J + "page_button_1.png", J + "page_button_2.png"],
  Mc = "/ui/hud/currency/gold_slot.png",
  _c = "/ui/hud/currency/money_icon.png",
  si = 176,
  kc = 565,
  Pc = 32,
  Tc = 10,
  Ac = 7,
  Qe = 16,
  mt = 15,
  Bc = 26,
  Yn = 166,
  li = 206,
  Yi = 156,
  zc = 188,
  ci = (Yn - Yi) / 2,
  ui = 9,
  jc = [
    { id: "weapon", x: 3, y: 3, w: 32, h: 96, labelKey: "inv.weapon" },
    { id: "head", x: 39, y: 2, w: 32, h: 32, labelKey: "inv.helmet" },
    { id: "arrow", x: 114, y: 1, w: 32, h: 32, labelKey: "inv.arrow" },
    { id: "unique2", x: 75, y: 35, w: 32, h: 32, labelKey: "inv.talisman" },
    { id: "body", x: 39, y: 37, w: 32, h: 64, labelKey: "inv.armor" },
    { id: "ear", x: 114, y: 52, w: 32, h: 32, labelKey: "inv.earring" },
    { id: "wrist", x: 75, y: 67, w: 32, h: 32, labelKey: "inv.bracelet" },
    { id: "neck", x: 114, y: 84, w: 32, h: 32, labelKey: "inv.necklace" },
    { id: "unique1", x: 2, y: 113, w: 32, h: 32, labelKey: "inv.special" },
    { id: "shield", x: 75, y: 113, w: 32, h: 32, labelKey: "inv.shield" },
    { id: "boots", x: 39, y: 145, w: 32, h: 32, labelKey: "inv.shoes" },
  ],
  Ec = 235,
  di = 39,
  pi = 19,
  Cc = 257,
  mi = 166,
  gi = 296,
  gt = 32,
  hi = 5,
  fi = 9,
  Rc = 537,
  Ic = ["I", "II"];
function Dc(e) {
  return e.toLocaleString("tr-TR");
}
function $c({ sc: e }) {
  const t = ke(),
    n = R((b) => b.inventoryVisible),
    a = R((b) => b.toggleInventory),
    i = R((b) => b.inventoryPage),
    l = R((b) => b.setInventoryPage),
    s = R((b) => b.gold),
    r = z.useRef({ x: -1, y: -1 }),
    c = z.useRef(null),
    g = z.useRef(null),
    u = z.useCallback((b) => Math.round(b * e), [e]),
    p = z.useCallback(() => ({ x: window.innerWidth - u(si), y: u(80) }), [u]),
    m = z.useCallback(
      (b) => {
        b.preventDefault();
        const v = r.current.x === -1 ? p() : r.current;
        c.current = { startX: b.clientX, startY: b.clientY, origX: v.x, origY: v.y };
        const B = (T) => {
            if (!c.current || !g.current) return;
            const j = c.current.origX + T.clientX - c.current.startX,
              A = c.current.origY + T.clientY - c.current.startY;
            ((r.current = { x: j, y: A }), (g.current.style.left = j + "px"), (g.current.style.top = A + "px"));
          },
          _ = () => {
            ((c.current = null), window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", _));
          };
        (window.addEventListener("mousemove", B), window.addEventListener("mouseup", _));
      },
      [p],
    );
  if (!n) return null;
  const h = u(si),
    S = u(kc),
    M = u(Pc),
    w = u(Tc),
    f = p(),
    y = r.current.x === -1 ? f.x : r.current.x,
    x = r.current.y === -1 ? f.y : r.current.y;
  return o.jsxs("div", {
    ref: g,
    className: "m2-inventory",
    style: { position: "fixed", left: y, top: x, width: h, height: S, zIndex: 110, pointerEvents: "auto" },
    children: [
      o.jsx(Lc, { edge: M, s: u }),
      o.jsxs("div", {
        onMouseDown: m,
        style: {
          position: "absolute",
          left: w,
          right: w,
          top: u(Ac),
          height: u(Qe),
          display: "flex",
          alignItems: "center",
          zIndex: 2,
          cursor: "move",
        },
        children: [
          o.jsx("img", {
            src: fc,
            alt: "",
            style: { width: u(Qe), height: u(Qe), imageRendering: "pixelated", flexShrink: 0 },
          }),
          o.jsx("div", {
            style: {
              flex: 1,
              height: u(Qe),
              backgroundImage: `url(${yc})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: `auto ${u(Qe)}px`,
              imageRendering: "pixelated",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: o.jsx("span", {
              style: {
                fontSize: u(9),
                color: "#d4c4a4",
                textShadow: "0 0 3px #000, 1px 1px 2px #000",
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                fontWeight: "bold",
              },
              children: t("inv.title"),
            }),
          }),
          o.jsx("img", {
            src: bc,
            alt: "",
            style: { width: u(Qe), height: u(Qe), imageRendering: "pixelated", flexShrink: 0 },
          }),
          o.jsxs("button", {
            className: "m2-menu-btn",
            title: t("ui.close"),
            onClick: a,
            style: { position: "absolute", right: u(2), top: u(1) },
            children: [
              o.jsx("img", { className: "btn-default", src: Rn[0], alt: "X", style: { width: u(mt), height: u(mt) } }),
              o.jsx("img", { className: "btn-hover", src: Rn[1], alt: "", style: { width: u(mt), height: u(mt) } }),
              o.jsx("img", { className: "btn-down", src: Rn[2], alt: "", style: { width: u(mt), height: u(mt) } }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        style: { position: "absolute", left: w - u(2), top: u(Bc), width: u(Yn), height: u(li), zIndex: 1 },
        children: [
          o.jsx("img", {
            src: xc,
            alt: "",
            style: { width: u(Yn), height: u(li), imageRendering: "pixelated", display: "block" },
          }),
          o.jsx("img", {
            src: vc,
            alt: "",
            style: {
              position: "absolute",
              left: u(ci),
              top: u(ui),
              width: u(Yi),
              height: u(zc),
              imageRendering: "pixelated",
            },
          }),
          jc.map((b) =>
            o.jsx(
              "div",
              {
                className: "m2-equip-slot",
                title: t(b.labelKey),
                style: {
                  position: "absolute",
                  left: u(ci) + u(b.x),
                  top: u(ui) + u(b.y),
                  width: u(b.w),
                  height: u(b.h),
                  border: "1px solid rgba(80, 65, 40, 0.6)",
                  cursor: "pointer",
                  imageRendering: "pixelated",
                },
              },
              b.id,
            ),
          ),
        ],
      }),
      o.jsx("div", {
        style: { position: "absolute", left: w, top: u(Ec), display: "flex", gap: u(2), zIndex: 2 },
        children: Ic.map((b, v) =>
          o.jsxs(
            "button",
            {
              onClick: () => l(v),
              style: {
                position: "relative",
                width: u(di),
                height: u(pi),
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
              },
              children: [
                o.jsx("img", {
                  src: i === v ? oi[1] : oi[0],
                  alt: b,
                  style: { width: u(di), height: u(pi), imageRendering: "pixelated", display: "block" },
                }),
                o.jsx("span", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: u(8),
                    color: i === v ? "#ffffff" : "#8a7a5a",
                    textShadow: "0 0 2px #000",
                    fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                    fontWeight: "bold",
                  },
                  children: b,
                }),
              ],
            },
            v,
          ),
        ),
      }),
      o.jsxs("div", {
        style: { position: "absolute", left: w - u(2), top: u(Cc), width: u(mi), height: u(gi), zIndex: 1 },
        children: [
          o.jsx("img", {
            src: Sc,
            alt: "",
            style: {
              width: u(mi),
              height: u(gi),
              imageRendering: "pixelated",
              display: "block",
              position: "absolute",
              left: 0,
              top: 0,
            },
          }),
          o.jsx("div", {
            style: {
              position: "absolute",
              left: u(3),
              top: u(4),
              display: "grid",
              gridTemplateColumns: `repeat(${hi}, ${u(gt)}px)`,
              gridTemplateRows: `repeat(${fi}, ${u(gt)}px)`,
            },
            children: Array.from({ length: hi * fi }).map((b, v) =>
              o.jsx(
                "div",
                {
                  className: "m2-inventory-slot",
                  style: {
                    width: u(gt),
                    height: u(gt),
                    backgroundImage: `url(${wc})`,
                    backgroundSize: `${u(gt)}px ${u(gt)}px`,
                    imageRendering: "pixelated",
                    cursor: "pointer",
                  },
                },
                v,
              ),
            ),
          }),
        ],
      }),
      o.jsxs("div", {
        style: {
          position: "absolute",
          left: w,
          top: u(Rc),
          display: "flex",
          alignItems: "center",
          gap: u(2),
          zIndex: 2,
        },
        children: [
          o.jsx("img", { src: _c, alt: "Yang", style: { width: u(16), height: u(16), imageRendering: "pixelated" } }),
          o.jsxs("div", {
            style: { position: "relative", width: u(90), height: u(18) },
            children: [
              o.jsx("img", {
                src: Mc,
                alt: "",
                style: { width: u(90), height: u(18), imageRendering: "pixelated", display: "block" },
              }),
              o.jsx("span", {
                style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: u(4),
                  color: "#d4a855",
                  fontSize: u(8),
                  fontWeight: "bold",
                  textShadow: "0 0 2px #000",
                  fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                },
                children: Dc(s),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Lc({ edge: e, s: t }) {
  const n = "pixelated";
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${hc})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${t(128)}px ${t(128)}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: e,
          right: e,
          top: 0,
          height: e,
          backgroundImage: `url(${an.t})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${e}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: e,
          right: e,
          bottom: 0,
          height: e,
          backgroundImage: `url(${an.b})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${e}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: 0,
          top: e,
          bottom: e,
          width: e,
          backgroundImage: `url(${an.l})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${e}px auto`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          right: 0,
          top: e,
          bottom: e,
          width: e,
          backgroundImage: `url(${an.r})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${e}px auto`,
          imageRendering: n,
        },
      }),
      o.jsx("img", {
        src: nn.lt,
        alt: "",
        style: { position: "absolute", left: 0, top: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: nn.rt,
        alt: "",
        style: { position: "absolute", right: 0, top: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: nn.lb,
        alt: "",
        style: { position: "absolute", left: 0, bottom: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: nn.rb,
        alt: "",
        style: { position: "absolute", right: 0, bottom: 0, width: e, height: e, imageRendering: n },
      }),
    ],
  });
}
const fe = "/ui/hud/inventory/",
  qc = fe + "board_base.png",
  rn = {
    lt: fe + "board_corner_lt.png",
    rt: fe + "board_corner_rt.png",
    lb: fe + "board_corner_lb.png",
    rb: fe + "board_corner_rb.png",
  },
  on = {
    t: fe + "board_line_t.png",
    r: fe + "board_line_r.png",
    b: fe + "board_line_b.png",
    l: fe + "board_line_l.png",
  },
  Nc = fe + "titlebar_left.png",
  Kc = fe + "titlebar_center.png",
  Oc = fe + "titlebar_right.png",
  In = [fe + "close_btn_01.png", fe + "close_btn_02.png", fe + "close_btn_03.png"],
  ce = "/ui/hud/charinfo/",
  Fc = {
    att: ce + "char_info_att.png",
    def: ce + "char_info_def.png",
    hp: ce + "char_info_hp.png",
    sp: ce + "char_info_sp.png",
    str: ce + "char_info_str.png",
    dex: ce + "char_info_dex.png",
    con: ce + "char_info_con.png",
    int: ce + "char_info_int.png",
    attspeed: ce + "char_info_attspeed.png",
    movespeed: ce + "char_info_movespeed.png",
    magatt: ce + "char_info_magatt.png",
    magdef: ce + "char_info_magdef.png",
    hitpct: ce + "char_info_hitpct.png",
  },
  yi = {
    warrior: ce + "face_warrior.png",
    ninja: ce + "face_assassin.png",
    sura: ce + "face_sura.png",
    shaman: ce + "face_shaman.png",
  },
  Gc = 220,
  Hc = 380,
  Uc = 32,
  Vc = 10,
  Yc = 7,
  et = 16,
  ht = 15,
  Wc = ["char.tab_status", "char.tab_skills", "char.tab_emotions", "char.tab_quests"];
function Zc({ sc: e }) {
  const t = ke(),
    n = R((D) => D.characterVisible),
    a = R((D) => D.toggleCharacter),
    i = R((D) => D.characterName),
    l = R((D) => D.selectedCharacter),
    s = R((D) => D.level),
    r = R((D) => D.hp),
    c = R((D) => D.maxHp),
    g = R((D) => D.mp),
    u = R((D) => D.maxMp),
    p = R((D) => D.exp),
    m = R((D) => D.maxExp),
    h = R((D) => D.attack),
    S = R((D) => D.defense),
    M = R((D) => D.str),
    w = R((D) => D.dex),
    f = R((D) => D.con),
    y = R((D) => D.int),
    x = R((D) => D.attackSpeed),
    b = R((D) => D.moveSpeed),
    v = R((D) => D.magicAttack),
    B = R((D) => D.magicDefense),
    _ = R((D) => D.statPoints),
    [T, j] = z.useState(0),
    [A, E] = z.useState({ x: -1, y: -1 }),
    k = z.useRef(null),
    P = z.useCallback((D) => Math.round(D * e), [e]),
    I = z.useCallback(
      (D) => {
        D.preventDefault();
        const ze = A.x === -1 ? P(10) : A.x,
          xn = A.y === -1 ? P(80) : A.y;
        k.current = { startX: D.clientX, startY: D.clientY, origX: ze, origY: xn };
        const at = (ra) => {
            k.current &&
              E({
                x: k.current.origX + ra.clientX - k.current.startX,
                y: k.current.origY + ra.clientY - k.current.startY,
              });
          },
          ia = () => {
            ((k.current = null),
              window.removeEventListener("mousemove", at),
              window.removeEventListener("mouseup", ia));
          };
        (window.addEventListener("mousemove", at), window.addEventListener("mouseup", ia));
      },
      [A, P],
    );
  if (!n) return null;
  const N = P(Gc),
    U = P(Hc),
    q = P(Uc),
    Z = P(Vc),
    ae = A.x === -1 ? P(10) : A.x,
    ve = A.y === -1 ? P(80) : A.y,
    De = yi[l || "warrior"] || yi.warrior,
    L = P(18),
    O = P(20),
    Q = P(8),
    $e = P(50),
    Y = "/ui/hud/gauges/",
    bn = [
      {
        icon: "att",
        label: t("char.attack"),
        value: h,
        gauge: Y + "gauge_red.png",
        pct: Math.min(100, (h / 500) * 100),
      },
      {
        icon: "def",
        label: t("char.defense"),
        value: S,
        gauge: Y + "gauge_blue.png",
        pct: Math.min(100, (S / 500) * 100),
      },
      { icon: "hp", label: "HP", value: `${r}/${c}`, gauge: Y + "gauge_red.png", pct: (r / c) * 100 },
      { icon: "sp", label: "SP", value: `${g}/${u}`, gauge: Y + "gauge_blue.png", pct: (g / u) * 100 },
      {
        icon: "str",
        label: t("char.str"),
        value: M,
        gauge: Y + "gauge_yellow.png",
        pct: Math.min(100, (M / 90) * 100),
      },
      { icon: "dex", label: t("char.dex"), value: w, gauge: Y + "gauge_lime.png", pct: Math.min(100, (w / 90) * 100) },
      { icon: "con", label: t("char.con"), value: f, gauge: Y + "gauge_pink.png", pct: Math.min(100, (f / 90) * 100) },
      {
        icon: "int",
        label: t("char.int"),
        value: y,
        gauge: Y + "gauge_purple.png",
        pct: Math.min(100, (y / 90) * 100),
      },
      {
        icon: "attspeed",
        label: t("char.attack_speed"),
        value: x,
        gauge: Y + "gauge_yellow.png",
        pct: Math.min(100, (x / 200) * 100),
      },
      {
        icon: "movespeed",
        label: t("char.move_speed"),
        value: b,
        gauge: Y + "gauge_lime.png",
        pct: Math.min(100, (b / 200) * 100),
      },
      {
        icon: "magatt",
        label: t("char.magic_attack"),
        value: v,
        gauge: Y + "gauge_purple.png",
        pct: Math.min(100, (v / 500) * 100),
      },
      {
        icon: "magdef",
        label: t("char.magic_defense"),
        value: B,
        gauge: Y + "gauge_blue.png",
        pct: Math.min(100, (B / 500) * 100),
      },
    ];
  return o.jsxs("div", {
    className: "m2-inventory",
    style: { position: "fixed", left: ae, top: ve, width: N, height: U, zIndex: 111, pointerEvents: "auto" },
    children: [
      o.jsx(Xc, { edge: q, s: P }),
      o.jsxs("div", {
        onMouseDown: I,
        style: {
          position: "absolute",
          left: Z,
          right: Z,
          top: P(Yc),
          height: P(et),
          display: "flex",
          alignItems: "center",
          zIndex: 2,
          cursor: "move",
        },
        children: [
          o.jsx("img", {
            src: Nc,
            alt: "",
            style: { width: P(et), height: P(et), imageRendering: "pixelated", flexShrink: 0 },
          }),
          o.jsx("div", {
            style: {
              flex: 1,
              height: P(et),
              backgroundImage: `url(${Kc})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: `auto ${P(et)}px`,
              imageRendering: "pixelated",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: o.jsx("span", {
              style: {
                fontSize: P(9),
                color: "#d4c4a4",
                textShadow: "0 0 3px #000, 1px 1px 2px #000",
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                fontWeight: "bold",
              },
              children: t("char.info"),
            }),
          }),
          o.jsx("img", {
            src: Oc,
            alt: "",
            style: { width: P(et), height: P(et), imageRendering: "pixelated", flexShrink: 0 },
          }),
          o.jsxs("button", {
            className: "m2-menu-btn",
            title: t("ui.close"),
            onClick: a,
            style: { position: "absolute", right: P(2), top: P(1) },
            children: [
              o.jsx("img", { className: "btn-default", src: In[0], alt: "X", style: { width: P(ht), height: P(ht) } }),
              o.jsx("img", { className: "btn-hover", src: In[1], alt: "", style: { width: P(ht), height: P(ht) } }),
              o.jsx("img", { className: "btn-down", src: In[2], alt: "", style: { width: P(ht), height: P(ht) } }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        style: { position: "absolute", left: Z, right: Z, top: P(26), display: "flex", zIndex: 2 },
        children: Wc.map((D, ze) =>
          o.jsx(
            "button",
            {
              onClick: () => j(ze),
              style: {
                flex: 1,
                height: P(16),
                border: "none",
                background:
                  T === ze ? "linear-gradient(180deg, #4a3a1a, #2a1a0a)" : "linear-gradient(180deg, #2a1a0a, #1a0f05)",
                borderBottom: T === ze ? "1px solid #d4a855" : "1px solid #3a2a18",
                cursor: "pointer",
                color: T === ze ? "#d4c4a4" : "#6a5a3a",
                fontSize: P(7),
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                textShadow: "0 0 2px #000",
                padding: 0,
              },
              children: t(D),
            },
            ze,
          ),
        ),
      }),
      o.jsxs("div", {
        style: { position: "absolute", left: Z, right: Z, top: P(44), bottom: Z, overflow: "hidden", zIndex: 1 },
        children: [
          T === 0 &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: P(6), marginBottom: P(6) },
                  children: [
                    o.jsx("img", {
                      src: De,
                      alt: "",
                      style: { width: P(40), height: P(40), imageRendering: "pixelated", border: "1px solid #3a2a18" },
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("div", {
                          style: {
                            fontSize: P(10),
                            color: "#d4c4a4",
                            textShadow: "0 0 3px #000",
                            fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                            fontWeight: "bold",
                          },
                          children: i,
                        }),
                        o.jsxs("div", {
                          style: {
                            fontSize: P(8),
                            color: "#d4a855",
                            textShadow: "0 0 2px #000",
                            fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                          },
                          children: ["Lv. ", s],
                        }),
                        o.jsxs("div", {
                          style: {
                            fontSize: P(7),
                            color: "#8a7a5a",
                            textShadow: "0 0 2px #000",
                            fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                          },
                          children: ["EXP: ", Math.round((p / m) * 100), "%"],
                        }),
                      ],
                    }),
                  ],
                }),
                _ > 0 &&
                  o.jsxs("div", {
                    style: {
                      fontSize: P(7),
                      color: "#55cc55",
                      textShadow: "0 0 2px #000",
                      fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                      marginBottom: P(4),
                      textAlign: "center",
                    },
                    children: [t("char.unallocated"), _],
                  }),
                o.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: P(1) },
                  children: bn.map((D) =>
                    o.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", height: O, gap: P(3) },
                        children: [
                          o.jsx("img", {
                            src: Fc[D.icon],
                            alt: D.label,
                            style: { width: L, height: L, imageRendering: "pixelated", flexShrink: 0 },
                          }),
                          o.jsx("span", {
                            style: {
                              width: P(52),
                              flexShrink: 0,
                              fontSize: Q,
                              color: "#8a7a5a",
                              textShadow: "0 0 2px #000",
                              fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                            },
                            children: D.label,
                          }),
                          o.jsxs("div", {
                            style: { flex: 1, height: P(8), position: "relative", display: "flex" },
                            children: [
                              o.jsx("img", {
                                src: Y + "gauge_slot_left.png",
                                alt: "",
                                style: { height: P(8), width: P(4), imageRendering: "pixelated" },
                              }),
                              o.jsx("div", {
                                style: {
                                  flex: 1,
                                  backgroundImage: `url(${Y}gauge_slot_center.png)`,
                                  backgroundRepeat: "repeat-x",
                                  backgroundSize: `auto ${P(8)}px`,
                                  position: "relative",
                                  overflow: "hidden",
                                },
                                children: o.jsx("div", {
                                  style: {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    height: "100%",
                                    width: `${D.pct}%`,
                                    backgroundImage: `url(${D.gauge})`,
                                    backgroundRepeat: "repeat-x",
                                    backgroundSize: `auto ${P(8)}px`,
                                    imageRendering: "pixelated",
                                  },
                                }),
                              }),
                              o.jsx("img", {
                                src: Y + "gauge_slot_right.png",
                                alt: "",
                                style: { height: P(8), width: P(4), imageRendering: "pixelated" },
                              }),
                            ],
                          }),
                          o.jsx("span", {
                            style: {
                              width: $e,
                              textAlign: "right",
                              fontSize: Q,
                              color: "#d4c4a4",
                              textShadow: "0 0 2px #000",
                              fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                              fontWeight: "bold",
                              flexShrink: 0,
                            },
                            children: D.value,
                          }),
                        ],
                      },
                      D.icon,
                    ),
                  ),
                }),
              ],
            }),
          T === 1 &&
            o.jsx("div", {
              style: {
                fontSize: P(8),
                color: "#6a5a3a",
                textAlign: "center",
                paddingTop: P(20),
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
              },
              children: t("char.skills_na"),
            }),
          T === 2 &&
            o.jsx("div", {
              style: {
                fontSize: P(8),
                color: "#6a5a3a",
                textAlign: "center",
                paddingTop: P(20),
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
              },
              children: t("char.emotions_na"),
            }),
          T === 3 &&
            o.jsx("div", {
              style: {
                fontSize: P(8),
                color: "#6a5a3a",
                textAlign: "center",
                paddingTop: P(20),
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
              },
              children: t("char.no_quests"),
            }),
        ],
      }),
    ],
  });
}
function Xc({ edge: e, s: t }) {
  const n = "pixelated";
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${qc})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${t(128)}px ${t(128)}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: e,
          right: e,
          top: 0,
          height: e,
          backgroundImage: `url(${on.t})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${e}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: e,
          right: e,
          bottom: 0,
          height: e,
          backgroundImage: `url(${on.b})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${e}px`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          left: 0,
          top: e,
          bottom: e,
          width: e,
          backgroundImage: `url(${on.l})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${e}px auto`,
          imageRendering: n,
        },
      }),
      o.jsx("div", {
        style: {
          position: "absolute",
          right: 0,
          top: e,
          bottom: e,
          width: e,
          backgroundImage: `url(${on.r})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${e}px auto`,
          imageRendering: n,
        },
      }),
      o.jsx("img", {
        src: rn.lt,
        alt: "",
        style: { position: "absolute", left: 0, top: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: rn.rt,
        alt: "",
        style: { position: "absolute", right: 0, top: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: rn.lb,
        alt: "",
        style: { position: "absolute", left: 0, bottom: 0, width: e, height: e, imageRendering: n },
      }),
      o.jsx("img", {
        src: rn.rb,
        alt: "",
        style: { position: "absolute", right: 0, bottom: 0, width: e, height: e, imageRendering: n },
      }),
    ],
  });
}
const Jc = { normal: "#ffffff", call: "#55cc55", group: "#5599ff", guild: "#ddcc44", system: "#ff8833" };
function Qc({ sc: e }) {
  const t = ke(),
    n = R((x) => x.chatVisible),
    a = R((x) => x.chatMessages),
    i = R((x) => x.addChatMessage),
    [l, s] = z.useState(""),
    [r, c] = z.useState(!1),
    g = z.useRef(null),
    u = z.useRef(null),
    p = (x) => Math.round(x * e);
  (z.useEffect(() => {
    g.current && (g.current.scrollTop = g.current.scrollHeight);
  }, [a]),
    z.useEffect(() => {
      r && u.current && u.current.focus();
    }, [r]),
    z.useEffect(() => {
      const x = (b) => {
        const v = b.target;
        v.tagName === "INPUT" || v.tagName === "TEXTAREA" || (b.key === "Enter" && !r && (b.preventDefault(), c(!0)));
      };
      return (window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x));
    }, [r]));
  const m = () => {
      (l.trim() && (i({ text: l.trim(), channel: "normal", sender: t("ui.you") }), s("")), c(!1));
    },
    h = (x) => {
      (x.key === "Enter" ? m() : x.key === "Escape" && (s(""), c(!1)), x.stopPropagation());
    };
  if (!n) return null;
  const S = p(8),
    M = p(340),
    w = p(120),
    f = p(18),
    y = p(42);
  return o.jsxs("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: y,
      transform: "translateX(-50%)",
      width: M,
      pointerEvents: "auto",
      zIndex: 105,
    },
    children: [
      o.jsx("div", {
        ref: g,
        style: {
          height: w,
          overflow: "hidden",
          padding: `${p(4)}px ${p(6)}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.5) 100%)",
          borderRadius: p(2),
        },
        children: a
          .slice(-12)
          .map((x, b) =>
            o.jsxs(
              "div",
              {
                style: {
                  fontSize: S,
                  color: Jc[x.channel],
                  textShadow: "0 0 3px #000, 1px 1px 2px #000",
                  fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                  lineHeight: 1.5,
                  wordBreak: "break-word",
                },
                children: [
                  x.channel !== "normal" &&
                    o.jsxs("span", { style: { opacity: 0.8 }, children: [t(`chat.${x.channel}`), " "] }),
                  x.sender && o.jsxs("span", { style: { fontWeight: "bold" }, children: [x.sender, ": "] }),
                  x.translationKey ? t(x.translationKey) : x.text,
                ],
              },
              b,
            ),
          ),
      }),
      r &&
        o.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            height: f,
            background: "rgba(0,0,0,0.75)",
            border: "1px solid #3a2a18",
            borderRadius: p(2),
            padding: `0 ${p(4)}px`,
            marginTop: p(2),
          },
          children: [
            o.jsx("span", {
              style: {
                fontSize: S,
                color: "#d4a855",
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                marginRight: p(4),
                flexShrink: 0,
              },
              children: t("ui.say"),
            }),
            o.jsx("input", {
              ref: u,
              type: "text",
              value: l,
              onChange: (x) => s(x.target.value),
              onKeyDown: h,
              onBlur: () => {
                l || c(!1);
              },
              style: {
                flex: 1,
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#d4c4a4",
                fontSize: S,
                fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                padding: 0,
              },
            }),
          ],
        }),
    ],
  });
}
const Pe = "/ui/extracted/pattern/",
  eu = "/ui/extracted/minimap/",
  tu = eu + "playermark.png",
  nu = Pe + "board_base.png",
  au = Pe + "board_corner_lefttop.png",
  iu = Pe + "board_corner_righttop.png",
  ru = Pe + "board_corner_leftbottom.png",
  ou = Pe + "board_corner_rightbottom.png",
  su = Pe + "board_line_top.png",
  lu = Pe + "board_line_bottom.png",
  cu = Pe + "board_line_left.png",
  uu = Pe + "board_line_right.png",
  du = Pe + "titlebar_left.png",
  pu = Pe + "titlebar_center.png",
  mu = Pe + "titlebar_right.png",
  gu = 32,
  hu = 32,
  bi = 0.95;
function fu({ sc: e }) {
  const t = ke(),
    n = R((v) => v.atlasVisible),
    a = R((v) => v.toggleAtlas),
    i = z.useRef(null),
    l = z.useRef(0),
    s = z.useRef(null),
    [r, c] = z.useState({ x: 100, y: 60 }),
    g = z.useRef(!1),
    u = z.useRef({ x: 0, y: 0 }),
    p = (v) => Math.round(v * e),
    m = p(dn * bi),
    h = p(pn * bi),
    S = p(gu),
    M = p(hu),
    w = m,
    f = h,
    y = w + S * 2,
    x = M + f + S,
    b = z.useCallback(
      (v) => {
        ((g.current = !0), (u.current = { x: v.clientX - r.x, y: v.clientY - r.y }));
      },
      [r],
    );
  return (
    z.useEffect(() => {
      const v = (_) => {
          g.current && c({ x: _.clientX - u.current.x, y: _.clientY - u.current.y });
        },
        B = () => {
          g.current = !1;
        };
      return (
        window.addEventListener("mousemove", v),
        window.addEventListener("mouseup", B),
        () => {
          (window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", B));
        }
      );
    }, []),
    z.useEffect(() => {
      if (!n) {
        cancelAnimationFrame(l.current);
        return;
      }
      let v = !0;
      const B = () => {
        if (!v) return;
        const { position: _ } = re.getState(),
          { ax: T, az: j } = Vi(_.x, _.z);
        if (i.current) {
          const A = (T / dn) * m,
            E = (j / pn) * h;
          ((i.current.style.left = `${A}px`), (i.current.style.top = `${E}px`));
        }
        l.current = requestAnimationFrame(B);
      };
      return (
        (l.current = requestAnimationFrame(B)),
        () => {
          ((v = !1), cancelAnimationFrame(l.current));
        }
      );
    }, [n, m, h]),
    n
      ? o.jsxs("div", {
          ref: s,
          className: "m2-atlas-window",
          style: { left: r.x, top: r.y, width: y, height: x },
          children: [
            o.jsx("div", {
              className: "m2-board-bg",
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${nu})`,
                backgroundSize: `${p(128)}px ${p(128)}px`,
                borderRadius: 2,
              },
            }),
            o.jsxs("div", {
              className: "m2-atlas-titlebar",
              style: { height: M },
              onMouseDown: b,
              children: [
                o.jsx("img", { src: du, alt: "", style: { width: M, height: M }, className: "m2-pixelated" }),
                o.jsx("div", {
                  style: {
                    flex: 1,
                    height: M,
                    backgroundImage: `url(${pu})`,
                    backgroundSize: `${M}px ${M}px`,
                    backgroundRepeat: "repeat-x",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: p(4),
                  },
                  children: o.jsx("span", {
                    style: {
                      color: "#d4c4a0",
                      fontSize: p(9),
                      fontFamily: "Tahoma, 'Microsoft Sans Serif', sans-serif",
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px #000",
                      userSelect: "none",
                    },
                    children: t("ui.atlas_title"),
                  }),
                }),
                o.jsx("img", {
                  src: mu,
                  alt: "Close",
                  style: { width: M, height: M, cursor: "pointer" },
                  className: "m2-pixelated",
                  onClick: a,
                }),
              ],
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                top: M,
                left: S,
                right: S,
                height: S,
                backgroundImage: `url(${su})`,
                backgroundSize: `${p(128)}px ${S}px`,
                backgroundRepeat: "repeat-x",
                zIndex: 2,
              },
            }),
            o.jsx("img", {
              src: au,
              alt: "",
              className: "m2-pixelated",
              style: { position: "absolute", top: M, left: 0, width: S, height: S, zIndex: 3 },
            }),
            o.jsx("img", {
              src: iu,
              alt: "",
              className: "m2-pixelated",
              style: { position: "absolute", top: M, right: 0, width: S, height: S, zIndex: 3 },
            }),
            o.jsx("img", {
              src: ru,
              alt: "",
              className: "m2-pixelated",
              style: { position: "absolute", bottom: 0, left: 0, width: S, height: S, zIndex: 3 },
            }),
            o.jsx("img", {
              src: ou,
              alt: "",
              className: "m2-pixelated",
              style: { position: "absolute", bottom: 0, right: 0, width: S, height: S, zIndex: 3 },
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                top: M + S,
                left: 0,
                width: S,
                bottom: S,
                backgroundImage: `url(${cu})`,
                backgroundSize: `${S}px ${p(128)}px`,
                backgroundRepeat: "repeat-y",
                zIndex: 2,
              },
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                top: M + S,
                right: 0,
                width: S,
                bottom: S,
                backgroundImage: `url(${uu})`,
                backgroundSize: `${S}px ${p(128)}px`,
                backgroundRepeat: "repeat-y",
                zIndex: 2,
              },
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                bottom: 0,
                left: S,
                right: S,
                height: S,
                backgroundImage: `url(${lu})`,
                backgroundSize: `${p(128)}px ${S}px`,
                backgroundRepeat: "repeat-x",
                zIndex: 2,
              },
            }),
            o.jsxs("div", {
              className: "m2-atlas-content",
              style: { position: "absolute", top: M + S, left: S, width: w, height: f },
              children: [
                o.jsx("img", {
                  src: Ui,
                  alt: "Atlas",
                  style: { width: m, height: h, display: "block" },
                  className: "m2-pixelated",
                  draggable: !1,
                }),
                o.jsx("img", {
                  ref: i,
                  src: tu,
                  alt: "",
                  className: "m2-atlas-player",
                  style: { width: p(10), height: p(12) },
                }),
                o.jsx("div", {
                  className: "m2-atlas-location",
                  style: { fontSize: p(8), bottom: p(4), right: p(4) },
                  children: "Yongan",
                }),
              ],
            }),
          ],
        })
      : null
  );
}
const yu = {
  blacksmith: "/models/npc/window/demirci.png",
  goods: "/models/npc/window/satici.png",
  defence: "/models/npc/window/zirh_saticisi.png",
  arms: "/models/npc/window/silah_saticisi.png",
  wheel: "/models/npc/window/cark.png",
  calendar: "/models/npc/window/etkinlik_takvimi.png",
  mucadele: "/models/npc/window/mucadele_tablosu.png",
  biyolog: "/models/npc/window/biyolog.png",
  savas_bileti: "/models/npc/window/savas_bileti.png",
  siralama: "/models/npc/window/siralama.png",
  konfucyus: "/models/npc/window/konfucyus.png",
};
function bu() {
  const e = ke(),
    t = R((h) => h.npcWindowId),
    n = R((h) => h.closeNpcWindow),
    [a, i] = z.useState({ x: 0, y: 0 }),
    [l, s] = z.useState(!1),
    r = z.useRef(!1),
    c = z.useRef({ x: 0, y: 0 }),
    g = z.useRef(null);
  z.useEffect(() => {
    t && (i({ x: 0, y: 0 }), s(!1));
  }, [t]);
  const u = z.useCallback(() => {
      if (g.current && !l) {
        const h = g.current.getBoundingClientRect(),
          S = { x: (window.innerWidth - h.width) / 2, y: (window.innerHeight - h.height) / 2 };
        (i(S), s(!0));
      }
    }, [l]),
    p = z.useCallback(
      (h) => {
        ((r.current = !0), (c.current = { x: h.clientX - a.x, y: h.clientY - a.y }));
      },
      [a],
    );
  if (
    (z.useEffect(() => {
      const h = (M) => {
          r.current && i({ x: M.clientX - c.current.x, y: M.clientY - c.current.y });
        },
        S = () => {
          r.current = !1;
        };
      return (
        window.addEventListener("mousemove", h),
        window.addEventListener("mouseup", S),
        () => {
          (window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", S));
        }
      );
    }, []),
    !t)
  )
    return null;
  const m = yu[t];
  return m
    ? o.jsxs("div", {
        ref: g,
        className: "m2-npc-window",
        style: { left: a.x, top: a.y, visibility: l ? "visible" : "hidden" },
        onMouseDown: p,
        children: [
          o.jsx("button", {
            className: "m2-npc-window-close",
            onMouseDown: (h) => h.stopPropagation(),
            onClick: n,
            title: e("ui.close"),
          }),
          o.jsx("img", { src: m, alt: "NPC Window", className: "m2-npc-window-img", draggable: !1, onLoad: u }),
        ],
      })
    : null;
}
function xu() {
  const e = R((s) => s.npcWindowId),
    t = R((s) => s.closeNpcWindow),
    n = ke(),
    a = xe((s) => s.language),
    i = xe((s) => s.setLanguage),
    l = gr(a);
  return e !== "system"
    ? null
    : o.jsx("div", {
        className: "m2-system-overlay",
        onClick: t,
        children: o.jsxs("div", {
          className: "m2-system-window",
          onClick: (s) => s.stopPropagation(),
          children: [
            o.jsx("button", { className: "m2-system-btn", onClick: () => {}, children: n("ui.help") }),
            o.jsx("button", {
              className: "m2-system-btn",
              onClick: () => {
                window.location.reload();
              },
              children: n("ui.character_change"),
            }),
            o.jsx("div", { className: "m2-system-divider" }),
            o.jsxs("button", {
              className: "m2-system-btn",
              onClick: () => i(hr(a)),
              children: [n("settings.language"), ": ", l.flag, " ", l.label],
            }),
            o.jsx("div", { className: "m2-system-divider" }),
            o.jsx("button", {
              className: "m2-system-btn m2-system-btn-danger",
              onClick: () => {
                window.location.href = "http://localhost:8080/";
              },
              children: n("ui.game_end"),
            }),
            o.jsx("div", { className: "m2-system-divider" }),
            o.jsx("button", { className: "m2-system-btn m2-system-btn-cancel", onClick: t, children: n("ui.cancel") }),
          ],
        }),
      });
}
const d = "/icons/item",
  vu = {
    orc_lord: {
      title: "Ork Reisi",
      subtitle: "Patron Bilgisi",
      category: "Irk: Ork",
      queueLabel: "Hedefleme Kuyrugu",
      bonusesTitle: "Saldiri Bonuslari",
      bonuses: ["Canavarlara Karsi Guc +45%", "Patronlara Karsi Guc +15%"],
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Boş Şişe", quantity: 1, iconSrc: `${d}/30130.png` },
        { name: "Cor Draconis", quantity: 5, iconSrc: `${d}/50255.png` },
        { name: "Başlangıç Elkitabı", quantity: 1, iconSrc: `${d}/30008.png` },
        { name: "Ekipman Sandığı (I)", quantity: 1, iconSrc: `${d}/98155.png` },
        { name: "Elmas", quantity: 1, iconSrc: `${d}/50621.png` },
      ],
    },
    skeleton_king: {
      title: "Skeleton King",
      subtitle: "Patron Bilgisi",
      category: "Irk: İskelet",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Boş Şişe", quantity: 1, iconSrc: `${d}/30130.png` },
        { name: "Cor Draconis", quantity: 5, iconSrc: `${d}/50255.png` },
        { name: "Biyolog Taşı", quantity: 1, iconSrc: `${d}/96005.png` },
        { name: "Biyolog Taşı", quantity: 1, iconSrc: `${d}/50664.png` },
      ],
    },
    smhtower_king: {
      title: "Lucifer",
      subtitle: "Patron Bilgisi",
      category: "Irk: Şeytan",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Lusifer Sandığı", quantity: 1, iconSrc: `${d}/98201.png` },
        { name: "Celladın Tırnağı", quantity: 1, iconSrc: `${d}/98002.png` },
        { name: "Cor Draconis", quantity: 10, iconSrc: `${d}/50255.png` },
        { name: "Beyaz İnci", quantity: 1, iconSrc: `${d}/27992.png` },
        { name: "Mavi İnci", quantity: 1, iconSrc: `${d}/27993.png` },
        { name: "Kankırmızı İnci", quantity: 1, iconSrc: `${d}/27994.png` },
        { name: "Süs Taşı", quantity: 50, iconSrc: `${d}/50926.png` },
        { name: "Demircinin El Kitabı", quantity: 1, iconSrc: `${d}/70039.png` },
      ],
    },
    spider_queen: {
      title: "Kraliçe Örümcek",
      subtitle: "Patron Bilgisi",
      category: "Irk: Örümcek",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Boş Şişe", quantity: 1, iconSrc: `${d}/30130.png` },
        { name: "Cor Draconis", quantity: 15, iconSrc: `${d}/50255.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Zindan Çarkı", quantity: 1, iconSrc: `${d}/51501.png` },
        { name: "Cor Ender", quantity: 1, iconSrc: `${d}/50257.png` },
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 4, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Ejderha Taşı Parçası", quantity: 1, iconSrc: `${d}/30270.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
        { name: "Elmas", quantity: 1, iconSrc: `${d}/50621.png` },
      ],
    },
    fire_dragon: {
      title: "Alev Kral",
      subtitle: "Patron Bilgisi",
      category: "Irk: Ejderha",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Boş Şişe", quantity: 1, iconSrc: `${d}/30130.png` },
        { name: "Cor Draconis", quantity: 5, iconSrc: `${d}/50255.png` },
        { name: "Alev Yelesi", quantity: 1, iconSrc: `${d}/30019.png` },
        { name: "Ekipman Sandığı (III)", quantity: 1, iconSrc: `${d}/98157.png` },
        { name: "Elmas", quantity: 1, iconSrc: `${d}/50621.png` },
      ],
    },
    blue_dragon: {
      title: "Beran Setaou",
      subtitle: "Patron Bilgisi",
      category: "Irk: Ejderha",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Mavi Ejderha Sandığı", quantity: 1, iconSrc: `${d}/98204.png` },
        { name: "Kızıl Gözyaşı Küpeleri+0", quantity: 1, iconSrc: `${d}/17220.png` },
        { name: "Ekipman Broşürü", quantity: 1, iconSrc: `${d}/98011.png` },
        { name: "Ejderha Alevi (B)", quantity: 1, iconSrc: `${d}/98152.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Genç Pet Kitabı", quantity: 1, iconSrc: `${d}/55003.png` },
        { name: "Pet Kitabı Sandığı", quantity: 1, iconSrc: `${d}/76044.png` },
        { name: "Mavi Ejderha Yumurtası", quantity: 1, iconSrc: `${d}/55405.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Cor Draconis", quantity: 20, iconSrc: `${d}/50255.png` },
        { name: "Beyaz İnci", quantity: 1, iconSrc: `${d}/27992.png` },
        { name: "Mavi İnci", quantity: 1, iconSrc: `${d}/27993.png` },
        { name: "Kankırmızı İnci", quantity: 1, iconSrc: `${d}/27994.png` },
        { name: "Süs Taşı", quantity: 100, iconSrc: `${d}/50926.png` },
        { name: "Patron Parşomeni (1 Gün)", quantity: 1, iconSrc: `${d}/96019.png` },
      ],
    },
    reddragon_room_boss2: {
      title: "İgnatör",
      subtitle: "Patron Bilgisi",
      category: "Irk: Ejderha",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Boş Şişe", quantity: 4, iconSrc: `${d}/30130.png` },
        { name: "Cor Draconis", quantity: 10, iconSrc: `${d}/50255.png` },
        { name: "Antika Ejderha Ametisti", quantity: 1, iconSrc: `${d}/173000.png` },
        { name: "Ejderha Ametisti Parçası", quantity: 1, iconSrc: `${d}/50666.png` },
      ],
    },
    yamachun_boss: {
      title: "Razadör",
      subtitle: "Patron Bilgisi",
      category: "Irk: İnsan",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Razadör'ün Sandığı", quantity: 1, iconSrc: `${d}/98205.png` },
        { name: "Ork Kapşonu +0", quantity: 1, iconSrc: `${d}/12390.png` },
        { name: "Boynuzlu Kask +0", quantity: 1, iconSrc: `${d}/12530.png` },
        { name: "Kardinal Şapkası +0", quantity: 1, iconSrc: `${d}/12670.png` },
        { name: "Korku Maskesi +0", quantity: 1, iconSrc: `${d}/12260.png` },
        { name: "Anka Ayakkabı +0", quantity: 1, iconSrc: `${d}/15200.png` },
        { name: "Ekipman Broşürü", quantity: 1, iconSrc: `${d}/98011.png` },
        { name: "Ejderha Alevi (B)", quantity: 1, iconSrc: `${d}/98152.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Yabani Pet Kitabı", quantity: 1, iconSrc: `${d}/55004.png` },
        { name: "Pet Kitabı Sandığı", quantity: 1, iconSrc: `${d}/76044.png` },
        { name: "Razadör Yumurtası", quantity: 1, iconSrc: `${d}/55403.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Cor Draconis", quantity: 30, iconSrc: `${d}/50255.png` },
        { name: "Süs Taşı", quantity: 200, iconSrc: `${d}/50926.png` },
        { name: "Savaş Bileti", quantity: 1, iconSrc: `${d}/98161.png` },
        { name: "İsim İzi (Buffi)", quantity: 1, iconSrc: `${d}/952008.png` },
        { name: "Okçular Dibinde (1 Gün)", quantity: 1 },
        { name: "Patron Parşomeni (7 Gün)", quantity: 1, iconSrc: `${d}/98120.png` },
        { name: "Ejderha Parası (20)", quantity: 1, iconSrc: `${d}/80013.png` },
      ],
    },
    nemere: {
      title: "Nemere",
      subtitle: "Patron Bilgisi",
      category: "Irk: Dev",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Nemere Sandığı", quantity: 1, iconSrc: `${d}/98206.png` },
        { name: "Titan Kalkanı +0", quantity: 1, iconSrc: `${d}/13140.png` },
        { name: "Ekipman Broşürü", quantity: 1, iconSrc: `${d}/98011.png` },
        { name: "Ejderha Alevi (B)", quantity: 1, iconSrc: `${d}/98152.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Yabani Pet Kitabı", quantity: 1, iconSrc: `${d}/55004.png` },
        { name: "Pet Kitabı Sandığı", quantity: 1, iconSrc: `${d}/76044.png` },
        { name: "Nemere Yumurtası", quantity: 1, iconSrc: `${d}/55404.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Cor Draconis", quantity: 30, iconSrc: `${d}/50255.png` },
        { name: "Süs Taşı", quantity: 200, iconSrc: `${d}/50926.png` },
        { name: "Savaş Bileti", quantity: 1, iconSrc: `${d}/98161.png` },
        { name: "İsim İzi (Buffi)", quantity: 1, iconSrc: `${d}/952008.png` },
        { name: "Okçular Dibinde (1 Gün)", quantity: 1 },
        { name: "Patron Parşomeni (7 Gün)", quantity: 1, iconSrc: `${d}/98120.png` },
        { name: "Ejderha Parası (20)", quantity: 1, iconSrc: `${d}/80013.png` },
      ],
    },
    jotun_thrym: {
      title: "Jotun Thrym",
      subtitle: "Patron Bilgisi",
      category: "Irk: Dev",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Jotun Sandığı", quantity: 1, iconSrc: `${d}/54704.png` },
        { name: "Obsidyen", quantity: 1, iconSrc: `${d}/30188.png` },
        { name: "Ekipman Broşürü", quantity: 1, iconSrc: `${d}/98011.png` },
        { name: "Ejderha Alevi (B)", quantity: 1, iconSrc: `${d}/98152.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Yabani Pet Kitabı", quantity: 1, iconSrc: `${d}/55004.png` },
        { name: "Pet Kitabı Sandığı", quantity: 1, iconSrc: `${d}/76044.png` },
        { name: "Nemere Yumurtası", quantity: 1, iconSrc: `${d}/55404.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Cor Draconis", quantity: 30, iconSrc: `${d}/50255.png` },
        { name: "Süs Taşı", quantity: 200, iconSrc: `${d}/50926.png` },
        { name: "Savaş Bileti", quantity: 1, iconSrc: `${d}/98161.png` },
        { name: "İsim İzi (Buffi)", quantity: 1, iconSrc: `${d}/952008.png` },
        { name: "Okçular Dibinde (1 Gün)", quantity: 1 },
        { name: "Patron Parşomeni (7 Gün)", quantity: 1, iconSrc: `${d}/98120.png` },
        { name: "Ejderha Parası (20)", quantity: 1, iconSrc: `${d}/80013.png` },
        { name: "Cesur Pet Kitabı", quantity: 1, iconSrc: `${d}/55005.png` },
        { name: "Özel Pet Kitabı (I)", quantity: 1, iconSrc: `${d}/99010.png` },
        { name: "Özel Pet Kitabı (II)", quantity: 1, iconSrc: `${d}/99011.png` },
      ],
    },
    defensewave_hydra_boss: {
      title: "Hydra",
      subtitle: "Patron Bilgisi",
      category: "Irk: Canavar",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Hydra Sandığı", quantity: 1, iconSrc: `${d}/54705.png` },
        { name: "Obsidyen", quantity: 1, iconSrc: `${d}/30629.png` },
        { name: "Ekipman Broşürü", quantity: 1, iconSrc: `${d}/98011.png` },
        { name: "Ejderha Alevi (B)", quantity: 1, iconSrc: `${d}/98152.png` },
        { name: "Araştırmacının Özütü", quantity: 1, iconSrc: `${d}/71035.png` },
        { name: "Hızlandırıcı (%75)", quantity: 1, iconSrc: `${d}/31030.png` },
        { name: "Yabani Pet Kitabı", quantity: 1, iconSrc: `${d}/55004.png` },
        { name: "Pet Kitabı Sandığı", quantity: 1, iconSrc: `${d}/76044.png` },
        { name: "Nessie Yumurtası", quantity: 1, iconSrc: `${d}/55410.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Cor Draconis", quantity: 30, iconSrc: `${d}/50255.png` },
        { name: "Süs Taşı", quantity: 200, iconSrc: `${d}/50926.png` },
        { name: "Savaş Bileti", quantity: 1, iconSrc: `${d}/98161.png` },
        { name: "İsim İzi (Buffi)", quantity: 1, iconSrc: `${d}/952008.png` },
        { name: "Okçular Dibinde (1 Gün)", quantity: 1 },
        { name: "Patron Parşomeni (7 Gün)", quantity: 1, iconSrc: `${d}/98120.png` },
        { name: "Ejderha Parası (20)", quantity: 1, iconSrc: `${d}/80013.png` },
        { name: "Cesur Pet Kitabı", quantity: 1, iconSrc: `${d}/55005.png` },
        { name: "Özel Pet Kitabı (I)", quantity: 1, iconSrc: `${d}/99010.png` },
        { name: "Özel Pet Kitabı (II)", quantity: 1, iconSrc: `${d}/99011.png` },
      ],
    },
    8001: {
      title: "Üzüntü Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 1",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
      ],
    },
    8002: {
      title: "Dövüş Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 1",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
      ],
    },
    8003: {
      title: "Savaş Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 1",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
      ],
    },
    8004: {
      title: "Hırs Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 1",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
      ],
    },
    8005: {
      title: "Siyah Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 2",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
      ],
    },
    8006: {
      title: "Karanlık Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 2",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
      ],
    },
    8007: {
      title: "Kıskançlık Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Köyler 2",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Efsun Nesnesi", quantity: 1, iconSrc: `${d}/71084.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
      ],
    },
    8008: {
      title: "Ruh Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Seungryong Vadisi",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
      ],
    },
    8009: {
      title: "Gölge Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Seungryong Vadisi",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
      ],
    },
    8010: {
      title: "Dayanıklılık Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Yongbi Çölü",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
      ],
    },
    8011: {
      title: "Şeytan Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Sohan Dağı",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
      ],
    },
    8013: {
      title: "Ölüm Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Sohan Dağı",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Zümrüt Taşı", quantity: 1, iconSrc: `${d}/98075.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
      ],
    },
    8014: {
      title: "Katil Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Doyyumhwan",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 2, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 1, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 1, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 1, iconSrc: `${d}/96008.png` },
        { name: "Safir Parçası", quantity: 2, iconSrc: `${d}/98077.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Kıymetli Taş", quantity: 1, iconSrc: `${d}/96009.png` },
      ],
    },
    8024: {
      title: "Metin Pung-Ma",
      subtitle: "Metin Taşı",
      category: "Bölge: Hayalet Ormanı",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 3, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 3, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 3, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 2, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Kıymetli Taş", quantity: 1, iconSrc: `${d}/96009.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Safir Parçası", quantity: 1, iconSrc: `${d}/98077.png` },
        { name: "Süs Taşı", quantity: 1, iconSrc: `${d}/50926.png` },
        { name: "Yeşil Ejderha Fasulyesi", quantity: 1, iconSrc: `${d}/100300.png` },
      ],
    },
    8025: {
      title: "Metin Ma-An",
      subtitle: "Metin Taşı",
      category: "Bölge: Hayalet Ormanı",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 3, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 3, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 3, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 2, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Kıymetli Taş", quantity: 1, iconSrc: `${d}/96009.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Safir Parçası", quantity: 1, iconSrc: `${d}/98077.png` },
        { name: "Süs Taşı", quantity: 1, iconSrc: `${d}/50926.png` },
        { name: "Yeşil Ejderha Fasulyesi", quantity: 1, iconSrc: `${d}/100300.png` },
      ],
    },
    8026: {
      title: "Metin Tu-Young",
      subtitle: "Metin Taşı",
      category: "Bölge: Kızıl Orman",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 4, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 3, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 3, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 3, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Safir Parçası", quantity: 1, iconSrc: `${d}/98077.png` },
        { name: "Süs Taşı", quantity: 1, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 1, iconSrc: `${d}/96009.png` },
        { name: "Yeşil Ejderha Fasulyesi", quantity: 1, iconSrc: `${d}/100300.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
      ],
    },
    8027: {
      title: "Metin Jeon-Un",
      subtitle: "Metin Taşı",
      category: "Bölge: Kızıl Orman",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Beceri Parşomeni", quantity: 1, iconSrc: `${d}/96000.png` },
        { name: "Efsun Nesnesi", quantity: 4, iconSrc: `${d}/71084.png` },
        { name: "Kutsama Kağıdı", quantity: 1, iconSrc: `${d}/25040.png` },
        { name: "Kötü Ruh Kovma Kağıdı", quantity: 3, iconSrc: `${d}/71001.png` },
        { name: "Münzevi Tavsiyesi", quantity: 3, iconSrc: `${d}/71094.png` },
        { name: "Cor Draconis", quantity: 1, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 3, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Safir Parçası", quantity: 1, iconSrc: `${d}/98077.png` },
        { name: "Süs Taşı", quantity: 1, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 1, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Yeşil Ejderha Fasulyesi", quantity: 1, iconSrc: `${d}/100300.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
      ],
    },
    8051: {
      title: "Işıksızlık Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Ejderha Ateşi Burnu",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 5, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Ateş Kristali", quantity: 1, iconSrc: `${d}/98409.png` },
      ],
    },
    8052: {
      title: "Kor Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Ejderha Ateşi Burnu",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 5, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 1, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 2, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Buz Kristali", quantity: 1, iconSrc: `${d}/98410.png` },
      ],
    },
    8053: {
      title: "Kibir Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Jade Körfezi",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 5, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Rüzgar Kristali", quantity: 1, iconSrc: `${d}/98413.png` },
      ],
    },
    8054: {
      title: "Öfke Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Jade Körfezi",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 5, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Toprak Kristali", quantity: 1, iconSrc: `${d}/98411.png` },
      ],
    },
    8055: {
      title: "Felaket Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Gök Gürültüsü Dağları",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 8, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Karanlık Kristali", quantity: 1, iconSrc: `${d}/98412.png` },
        { name: "Enerji Parçası", quantity: 1, iconSrc: `${d}/51001.png` },
      ],
    },
    8056: {
      title: "Kötülük Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Gök Gürültüsü Dağları",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 2, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 12, iconSrc: `${d}/96008.png` },
        { name: "Grena Parçası", quantity: 1, iconSrc: `${d}/98079.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
        { name: "Şimşek Kristali", quantity: 1, iconSrc: `${d}/98414.png` },
        { name: "Enerji Parçası", quantity: 1, iconSrc: `${d}/51001.png` },
      ],
    },
    8059: {
      title: "Ağaç Varlıkları Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Büyülü Orman",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 3, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 20, iconSrc: `${d}/96008.png` },
        { name: "Enerji Parçası+", quantity: 1, iconSrc: `${d}/80019.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Enerji Parçası", quantity: 1, iconSrc: `${d}/51001.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
      ],
    },
    8061: {
      title: "Orman Metini",
      subtitle: "Metin Taşı",
      category: "Bölge: Büyülü Orman",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Efsun Nesnesi", quantity: 10, iconSrc: `${d}/71084.png` },
        { name: "Cor Draconis", quantity: 3, iconSrc: `${d}/50255.png` },
        { name: "Yang Kesesi", quantity: 20, iconSrc: `${d}/96008.png` },
        { name: "Enerji Parçası+", quantity: 1, iconSrc: `${d}/80019.png` },
        { name: "Turmalin Parçası", quantity: 1, iconSrc: `${d}/98081.png` },
        { name: "Enerji Parçası", quantity: 1, iconSrc: `${d}/51001.png` },
        { name: "Zen Fasulye", quantity: 2, iconSrc: `${d}/70102.png` },
        { name: "Ruh Taşı", quantity: 1, iconSrc: `${d}/50513.png` },
        { name: "Süs Taşı", quantity: 2, iconSrc: `${d}/50926.png` },
        { name: "Kıymetli Taş", quantity: 2, iconSrc: `${d}/96009.png` },
        { name: "Büyülü Metal", quantity: 1, iconSrc: `${d}/25041.png` },
        { name: "Lezzetli Lokma", quantity: 2, iconSrc: `${d}/100771.png` },
        { name: "Kırılmış Taş Parçası", quantity: 1, iconSrc: `${d}/31028.png` },
        { name: "Ruh Parçası", quantity: 1, iconSrc: `${d}/98181.png` },
      ],
    },
    8303: {
      title: "Setaou Metin Taşı",
      subtitle: "Metin Taşı",
      category: "Bölge: Sürgün Mağaraları 1",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Sürgün Parçası (I)", quantity: 1, iconSrc: `${d}/98136.png` },
        { name: "Sürgün Parçası (II)", quantity: 1, iconSrc: `${d}/98137.png` },
        { name: "Sürgün Parçası (III)", quantity: 1, iconSrc: `${d}/98138.png` },
      ],
    },
    8304: {
      title: "Setaou Metin Taşı",
      subtitle: "Metin Taşı",
      category: "Bölge: Sürgün Mağaraları 2",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Sürgün Parçası (I)", quantity: 1, iconSrc: `${d}/98136.png` },
        { name: "Sürgün Parçası (II)", quantity: 1, iconSrc: `${d}/98137.png` },
        { name: "Sürgün Parçası (III)", quantity: 1, iconSrc: `${d}/98138.png` },
      ],
    },
    8305: {
      title: "Ochao Taşı",
      subtitle: "Metin Taşı",
      category: "Bölge: Ochao Tapınağı",
      dropsTitle: "Drop Listesi",
      drops: [
        { name: "Ochao Parçası (I)", quantity: 1, iconSrc: `${d}/98130.png` },
        { name: "Ochao Parçası (II)", quantity: 1, iconSrc: `${d}/98131.png` },
        { name: "Ochao Parçası (III)", quantity: 1, iconSrc: `${d}/98132.png` },
      ],
    },
  },
  Su = "/ui/hud/target/target.png";
function wu({ sc: e }) {
  xe((p) => p.language);
  const t = R((p) => p.target),
    n = R((p) => p.setTarget),
    [a, i] = z.useState(!1),
    l = t?.id != null ? String(t.id) : null,
    s = l ? (vu[l] ?? null) : null,
    r = s ? rs(s) : null;
  if (!t) return null;
  const c = typeof t.id == "number" ? aa(t.id, t.name) : na(String(t.id), t.name),
    g = Math.round(280 * e),
    u = Math.round(42 * e);
  return o.jsxs("div", {
    className: "m2-target-bar",
    style: { width: g, height: u },
    children: [
      o.jsx("img", { src: Su, alt: "", className: "m2-target-bg", style: { width: g, height: u }, draggable: !1 }),
      r &&
        o.jsxs("div", {
          className: "m2-target-info-btn",
          style: {
            width: Math.round(16 * e),
            height: Math.round(16 * e),
            fontSize: Math.round(10 * e),
            right: Math.round(122 * e),
            top: Math.round(13 * e),
          },
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          children: [
            "?",
            a &&
              o.jsx("div", {
                className: "m2-target-info-card",
                children: o.jsxs("div", {
                  className: "m2-target-info-panel",
                  children: [
                    o.jsxs("div", {
                      className: "m2-target-info-head",
                      children: [
                        o.jsx("div", { className: "m2-target-info-title", children: r.title }),
                        r.subtitle && o.jsx("div", { className: "m2-target-info-subtitle", children: r.subtitle }),
                        r.category && o.jsx("div", { className: "m2-target-info-meta", children: r.category }),
                        r.queueLabel &&
                          o.jsxs("div", {
                            className: "m2-target-info-queue",
                            children: [
                              o.jsx("span", { className: "m2-target-info-queue-icon", children: "+" }),
                              o.jsx("span", { children: r.queueLabel }),
                            ],
                          }),
                      ],
                    }),
                    !!r.bonuses?.length &&
                      o.jsxs("div", {
                        className: "m2-target-info-bonuses",
                        children: [
                          r.bonusesTitle &&
                            o.jsx("div", { className: "m2-target-info-section", children: r.bonusesTitle }),
                          r.bonuses.map((p) =>
                            o.jsx("div", { className: "m2-target-info-bonus-line", children: p }, p),
                          ),
                        ],
                      }),
                    r.dropsTitle &&
                      o.jsx("div", {
                        className: "m2-target-info-section m2-target-info-section-drops",
                        children: r.dropsTitle,
                      }),
                    o.jsx("div", {
                      className: "m2-target-info-list",
                      children: r.drops.map((p) =>
                        o.jsxs(
                          "div",
                          {
                            className: "m2-target-info-row",
                            children: [
                              o.jsxs("div", {
                                className: "m2-target-info-item-main",
                                children: [
                                  o.jsx("div", {
                                    className: "m2-target-info-item-icon",
                                    children: p.iconSrc
                                      ? o.jsx("img", { src: p.iconSrc, alt: "", draggable: !1 })
                                      : o.jsx("span", {}),
                                  }),
                                  o.jsx("span", { className: "m2-target-info-item-name", children: p.name }),
                                ],
                              }),
                              o.jsxs("span", { className: "m2-target-info-item-qty", children: ["x", p.quantity] }),
                            ],
                          },
                          `${p.name}-${p.quantity}`,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
          ],
        }),
      o.jsxs("span", {
        className: "m2-target-name",
        style: { fontSize: Math.round(9 * e) },
        children: ["Lv.", t.level, " ", c],
      }),
      o.jsx("button", {
        className: "m2-target-close",
        style: {
          width: Math.round(22 * e),
          height: Math.round(22 * e),
          right: Math.round(5 * e),
          top: Math.round(12 * e),
        },
        onClick: () => n(null),
      }),
    ],
  });
}
const xi = 600;
function Mu() {
  const [e, t] = z.useState(window.innerHeight / xi);
  return (
    z.useEffect(() => {
      const n = () => t(window.innerHeight / xi);
      return (window.addEventListener("resize", n), () => window.removeEventListener("resize", n));
    }, []),
    e
  );
}
function _u() {
  const e = Mu(),
    t = R((r) => r.toggleInventory),
    n = R((r) => r.toggleCharacter),
    a = R((r) => r.toggleAtlas),
    i = R((r) => r.npcWindowId),
    l = R((r) => r.openNpcWindow),
    s = R((r) => r.closeNpcWindow);
  return (
    z.useEffect(() => {
      const r = (c) => {
        const g = c.target;
        if (!(g.tagName === "INPUT" || g.tagName === "TEXTAREA")) {
          if (c.key === "Escape") {
            (i && i !== "system") || i === "system" ? s() : l("system");
            return;
          }
          switch (c.key.toLowerCase()) {
            case "i":
              t();
              break;
            case "c":
              n();
              break;
            case "m":
              a();
              break;
          }
        }
      };
      return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
    }, [t, n, a, i, l, s]),
    o.jsxs("div", {
      className: "m2-hud",
      children: [
        o.jsx(wu, { sc: e }),
        o.jsx(Qc, { sc: e }),
        o.jsx(gc, { sc: e }),
        o.jsx(pc, { sc: e }),
        o.jsx(Zc, { sc: e }),
        o.jsx($c, { sc: e }),
        o.jsx(fu, { sc: e }),
        o.jsx(bu, {}),
        o.jsx(xu, {}),
        o.jsx(Cl, { sc: e }),
      ],
    })
  );
}
const ku = {
  it: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%23009246'/><rect x='20' width='20' height='60' fill='%23ffffff'/><rect x='40' width='20' height='60' fill='%23ce2b37'/></g></svg>")`,
  de: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23000000'/><rect y='20' width='60' height='20' fill='%23dd0000'/><rect y='40' width='60' height='20' fill='%23ffce00'/></g></svg>")`,
  el: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%230d5eaf'/><rect y='7' width='60' height='6' fill='white'/><rect y='20' width='60' height='6' fill='white'/><rect y='33' width='60' height='6' fill='white'/><rect y='46' width='60' height='6' fill='white'/><rect width='28' height='28' fill='%230d5eaf'/><rect x='11' width='6' height='28' fill='white'/><rect y='11' width='28' height='6' fill='white'/></g></svg>")`,
  fr: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%230055a4'/><rect x='20' width='20' height='60' fill='%23ffffff'/><rect x='40' width='20' height='60' fill='%23ef4135'/></g></svg>")`,
  tr: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23e30a17'/><circle cx='24' cy='30' r='10' fill='white'/><circle cx='27' cy='30' r='8' fill='%23e30a17'/><polygon points='34,30 43,26 40,35 47,29 38,29 43,21' fill='white'/></g></svg>")`,
  hu: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ce2939'/><rect y='20' width='60' height='20' fill='%23ffffff'/><rect y='40' width='60' height='20' fill='%23477950'/></g></svg>")`,
  ru: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ffffff'/><rect y='20' width='60' height='20' fill='%230039a6'/><rect y='40' width='60' height='20' fill='%23d52b1e'/></g></svg>")`,
  ro: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='20' height='60' fill='%23002b7f'/><rect x='20' width='20' height='60' fill='%23fcd116'/><rect x='40' width='20' height='60' fill='%23ce1126'/></g></svg>")`,
  pl: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='30' fill='%23ffffff'/><rect y='30' width='60' height='30' fill='%23dc143c'/></g></svg>")`,
  pt: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='24' height='60' fill='%2300602f'/><rect x='24' width='36' height='60' fill='%23ff0000'/><circle cx='24' cy='30' r='7' fill='none' stroke='%23ffcc00' stroke-width='3'/></g></svg>")`,
  nl: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='20' fill='%23ae1c28'/><rect y='20' width='60' height='20' fill='%23ffffff'/><rect y='40' width='60' height='20' fill='%2321468b'/></g></svg>")`,
  cs: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='30' fill='%23ffffff'/><rect y='30' width='60' height='30' fill='%23d7141a'/><polygon points='0,0 30,30 0,60' fill='%2311457e'/></g></svg>")`,
  da: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23c60c30'/><rect x='18' width='6' height='60' fill='white'/><rect y='27' width='60' height='6' fill='white'/></g></svg>")`,
  en: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='60' fill='%23012169'/><path d='M0 0 L60 60 M60 0 L0 60' stroke='white' stroke-width='12'/><path d='M0 0 L60 60 M60 0 L0 60' stroke='%23c8102e' stroke-width='6'/><rect x='24' width='12' height='60' fill='white'/><rect y='24' width='60' height='12' fill='white'/><rect x='26' width='8' height='60' fill='%23c8102e'/><rect y='26' width='60' height='8' fill='%23c8102e'/></g></svg>")`,
  es: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><defs><clipPath id='c'><circle cx='30' cy='30' r='30'/></clipPath></defs><g clip-path='url(%23c)'><rect width='60' height='15' fill='%23aa151b'/><rect y='15' width='60' height='30' fill='%23f1bf00'/><rect y='45' width='60' height='15' fill='%23aa151b'/></g></svg>")`,
};
function vi({ code: e, active: t, size: n, onClick: a, label: i }) {
  return o.jsx("button", {
    type: "button",
    onClick: a,
    title: i,
    style: {
      width: n,
      height: n,
      minWidth: n,
      borderRadius: "50%",
      border: t ? "2px solid #d6ac55" : "1px solid rgba(92, 70, 38, 0.95)",
      background:
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), transparent 45%), linear-gradient(180deg, rgba(42,34,24,0.92), rgba(14,12,10,0.96))",
      boxShadow: t
        ? "0 0 0 2px rgba(225,191,110,0.22), inset 0 1px 0 rgba(255,255,255,0.12)"
        : "inset 0 1px 0 rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      flexShrink: 0,
    },
    children: o.jsx("span", {
      style: {
        width: n - 8,
        height: n - 8,
        borderRadius: "50%",
        backgroundImage: ku[e],
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        display: "block",
      },
    }),
  });
}
function Pu() {
  const e = xe((g) => g.language),
    t = xe((g) => g.setLanguage),
    n = R((g) => g.phase),
    [a, i] = z.useState(!1),
    l = n === "playing",
    s = l ? 28 : 30,
    r = l ? a : !0,
    c = l
      ? {
          position: "fixed",
          top: 30,
          left: 4,
          zIndex: 500,
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: r ? "wrap" : "nowrap",
          alignItems: "center",
          gap: 5,
          padding: "6px 8px",
          border: "1px solid rgba(118, 88, 44, 0.75)",
          borderRadius: 6,
          background: "linear-gradient(180deg, rgba(18,18,20,0.94), rgba(7,7,9,0.94))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 6px 16px rgba(0,0,0,0.45)",
          maxWidth: r ? 200 : "auto",
        }
      : {
          position: "fixed",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 500,
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "9px 12px",
          border: "1px solid rgba(118, 88, 44, 0.75)",
          borderRadius: 999,
          background: "linear-gradient(180deg, rgba(18,18,20,0.94), rgba(7,7,9,0.94))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 24px rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          maxWidth: "calc(100vw - 20px)",
          overflowX: "auto",
        };
  return r
    ? o.jsxs("div", {
        style: c,
        children: [
          Ge.map((g) =>
            o.jsx(
              vi,
              {
                code: g.code,
                active: e === g.code,
                size: s,
                onClick: () => {
                  (t(g.code), l && i(!1));
                },
                label: g.label,
              },
              g.code,
            ),
          ),
          l &&
            o.jsx("button", {
              type: "button",
              onClick: () => i(!1),
              style: {
                width: s - 4,
                height: s - 4,
                borderRadius: "50%",
                border: "1px solid rgba(92, 70, 38, 0.95)",
                background: "linear-gradient(180deg, rgba(42,34,24,0.92), rgba(14,12,10,0.96))",
                color: "#8a7a5a",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                flexShrink: 0,
              },
              title: "Close",
              children: "✕",
            }),
        ],
      })
    : o.jsx("div", {
        style: c,
        children: o.jsx(vi, { code: e, active: !0, size: s, onClick: () => i(!0), label: "Language" }),
      });
}
function Tu() {
  const e = R((t) => t.phase);
  return o.jsxs("div", {
    style: { width: "100vw", height: "100vh" },
    children: [
      e !== "playing" && o.jsx(Pu, {}),
      (e === "loading" || e === "playing") &&
        o.jsx(Si, {
          shadows: !0,
          camera: { fov: 45, near: 0.01, far: 100, position: [0, 10, 5] },
          dpr: [1, 1.5],
          gl: { antialias: !0, powerPreference: "high-performance", toneMapping: ur, toneMappingExposure: 1.1 },
          onCreated: ({ gl: t }) => {
            t.setClearColor("#87CEEB");
          },
          children: o.jsx(z.Suspense, { fallback: null, children: o.jsx($s, {}) }),
        }),
      e === "landing" && o.jsx(yl, {}),
      e === "preload" && o.jsx(Sl, {}),
      e === "character-select" && o.jsx(gl, {}),
      e === "loading" && o.jsx(qs, {}),
      e === "playing" && o.jsx(_u, {}),
    ],
  });
}
document.addEventListener("contextmenu", (e) => e.preventDefault());
Xi.createRoot(document.getElementById("root")).render(o.jsx(Tu, {}));
