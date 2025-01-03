function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-DYc5_LZJ.js",
      "assets/index-DMc566q3.js",
      "assets/index-gbGzKGQ5.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { w as Rs, y as ha, z as Jr, _ as Y_ } from "./index-DMc566q3.js";
var zu = { exports: {} },
  zn = typeof Reflect == "object" ? Reflect : null,
  hf =
    zn && typeof zn.apply == "function"
      ? zn.apply
      : function (e, t, s) {
          return Function.prototype.apply.call(e, t, s);
        },
  Zo;
zn && typeof zn.ownKeys == "function"
  ? (Zo = zn.ownKeys)
  : Object.getOwnPropertySymbols
  ? (Zo = function (e) {
      return Object.getOwnPropertyNames(e).concat(
        Object.getOwnPropertySymbols(e)
      );
    })
  : (Zo = function (e) {
      return Object.getOwnPropertyNames(e);
    });
function J_(i) {
  console && console.warn && console.warn(i);
}
var Yd =
  Number.isNaN ||
  function (e) {
    return e !== e;
  };
function st() {
  st.init.call(this);
}
zu.exports = st;
zu.exports.once = e1;
st.EventEmitter = st;
st.prototype._events = void 0;
st.prototype._eventsCount = 0;
st.prototype._maxListeners = void 0;
var lf = 10;
function la(i) {
  if (typeof i != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof i
    );
}
Object.defineProperty(st, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return lf;
  },
  set: function (i) {
    if (typeof i != "number" || i < 0 || Yd(i))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          i +
          "."
      );
    lf = i;
  },
});
st.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
st.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || Yd(e))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        e +
        "."
    );
  return (this._maxListeners = e), this;
};
function Jd(i) {
  return i._maxListeners === void 0 ? st.defaultMaxListeners : i._maxListeners;
}
st.prototype.getMaxListeners = function () {
  return Jd(this);
};
st.prototype.emit = function (e) {
  for (var t = [], s = 1; s < arguments.length; s++) t.push(arguments[s]);
  var o = e === "error",
    c = this._events;
  if (c !== void 0) o = o && c.error === void 0;
  else if (!o) return !1;
  if (o) {
    var f;
    if ((t.length > 0 && (f = t[0]), f instanceof Error)) throw f;
    var d = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw ((d.context = f), d);
  }
  var p = c[e];
  if (p === void 0) return !1;
  if (typeof p == "function") hf(p, this, t);
  else
    for (var g = p.length, v = tp(p, g), s = 0; s < g; ++s) hf(v[s], this, t);
  return !0;
};
function Qd(i, e, t, s) {
  var o, c, f;
  if (
    (la(t),
    (c = i._events),
    c === void 0
      ? ((c = i._events = Object.create(null)), (i._eventsCount = 0))
      : (c.newListener !== void 0 &&
          (i.emit("newListener", e, t.listener ? t.listener : t),
          (c = i._events)),
        (f = c[e])),
    f === void 0)
  )
    (f = c[e] = t), ++i._eventsCount;
  else if (
    (typeof f == "function"
      ? (f = c[e] = s ? [t, f] : [f, t])
      : s
      ? f.unshift(t)
      : f.push(t),
    (o = Jd(i)),
    o > 0 && f.length > o && !f.warned)
  ) {
    f.warned = !0;
    var d = new Error(
      "Possible EventEmitter memory leak detected. " +
        f.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (d.name = "MaxListenersExceededWarning"),
      (d.emitter = i),
      (d.type = e),
      (d.count = f.length),
      J_(d);
  }
  return i;
}
st.prototype.addListener = function (e, t) {
  return Qd(this, e, t, !1);
};
st.prototype.on = st.prototype.addListener;
st.prototype.prependListener = function (e, t) {
  return Qd(this, e, t, !0);
};
function Q_() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Xd(i, e, t) {
  var s = { fired: !1, wrapFn: void 0, target: i, type: e, listener: t },
    o = Q_.bind(s);
  return (o.listener = t), (s.wrapFn = o), o;
}
st.prototype.once = function (e, t) {
  return la(t), this.on(e, Xd(this, e, t)), this;
};
st.prototype.prependOnceListener = function (e, t) {
  return la(t), this.prependListener(e, Xd(this, e, t)), this;
};
st.prototype.removeListener = function (e, t) {
  var s, o, c, f, d;
  if ((la(t), (o = this._events), o === void 0)) return this;
  if (((s = o[e]), s === void 0)) return this;
  if (s === t || s.listener === t)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete o[e],
        o.removeListener && this.emit("removeListener", e, s.listener || t));
  else if (typeof s != "function") {
    for (c = -1, f = s.length - 1; f >= 0; f--)
      if (s[f] === t || s[f].listener === t) {
        (d = s[f].listener), (c = f);
        break;
      }
    if (c < 0) return this;
    c === 0 ? s.shift() : X_(s, c),
      s.length === 1 && (o[e] = s[0]),
      o.removeListener !== void 0 && this.emit("removeListener", e, d || t);
  }
  return this;
};
st.prototype.off = st.prototype.removeListener;
st.prototype.removeAllListeners = function (e) {
  var t, s, o;
  if (((s = this._events), s === void 0)) return this;
  if (s.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : s[e] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete s[e]),
      this
    );
  if (arguments.length === 0) {
    var c = Object.keys(s),
      f;
    for (o = 0; o < c.length; ++o)
      (f = c[o]), f !== "removeListener" && this.removeAllListeners(f);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((t = s[e]), typeof t == "function")) this.removeListener(e, t);
  else if (t !== void 0)
    for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
  return this;
};
function Zd(i, e, t) {
  var s = i._events;
  if (s === void 0) return [];
  var o = s[e];
  return o === void 0
    ? []
    : typeof o == "function"
    ? t
      ? [o.listener || o]
      : [o]
    : t
    ? Z_(o)
    : tp(o, o.length);
}
st.prototype.listeners = function (e) {
  return Zd(this, e, !0);
};
st.prototype.rawListeners = function (e) {
  return Zd(this, e, !1);
};
st.listenerCount = function (i, e) {
  return typeof i.listenerCount == "function"
    ? i.listenerCount(e)
    : ep.call(i, e);
};
st.prototype.listenerCount = ep;
function ep(i) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[i];
    if (typeof t == "function") return 1;
    if (t !== void 0) return t.length;
  }
  return 0;
}
st.prototype.eventNames = function () {
  return this._eventsCount > 0 ? Zo(this._events) : [];
};
function tp(i, e) {
  for (var t = new Array(e), s = 0; s < e; ++s) t[s] = i[s];
  return t;
}
function X_(i, e) {
  for (; e + 1 < i.length; e++) i[e] = i[e + 1];
  i.pop();
}
function Z_(i) {
  for (var e = new Array(i.length), t = 0; t < e.length; ++t)
    e[t] = i[t].listener || i[t];
  return e;
}
function e1(i, e) {
  return new Promise(function (t, s) {
    function o(f) {
      i.removeListener(e, c), s(f);
    }
    function c() {
      typeof i.removeListener == "function" && i.removeListener("error", o),
        t([].slice.call(arguments));
    }
    rp(i, e, c, { once: !0 }), e !== "error" && t1(i, o, { once: !0 });
  });
}
function t1(i, e, t) {
  typeof i.on == "function" && rp(i, "error", e, t);
}
function rp(i, e, t, s) {
  if (typeof i.on == "function") s.once ? i.once(e, t) : i.on(e, t);
  else if (typeof i.addEventListener == "function")
    i.addEventListener(e, function o(c) {
      s.once && i.removeEventListener(e, o), t(c);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof i
    );
}
var Ar = zu.exports;
const Hu = Rs(Ar);
var Bu = {},
  fa = {},
  Ue = {},
  ip = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  function e(d, p) {
    var g = (d >>> 16) & 65535,
      v = d & 65535,
      _ = (p >>> 16) & 65535,
      O = p & 65535;
    return (v * O + (((g * O + v * _) << 16) >>> 0)) | 0;
  }
  i.mul = Math.imul || e;
  function t(d, p) {
    return (d + p) | 0;
  }
  i.add = t;
  function s(d, p) {
    return (d - p) | 0;
  }
  i.sub = s;
  function o(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  i.rotl = o;
  function c(d, p) {
    return (d << (32 - p)) | (d >>> p);
  }
  i.rotr = c;
  function f(d) {
    return typeof d == "number" && isFinite(d) && Math.floor(d) === d;
  }
  (i.isInteger = Number.isInteger || f),
    (i.MAX_SAFE_INTEGER = 9007199254740991),
    (i.isSafeInteger = function (d) {
      return (
        i.isInteger(d) && d >= -i.MAX_SAFE_INTEGER && d <= i.MAX_SAFE_INTEGER
      );
    });
})(ip);
Object.defineProperty(Ue, "__esModule", { value: !0 });
var np = ip;
function r1(i, e) {
  return e === void 0 && (e = 0), (((i[e + 0] << 8) | i[e + 1]) << 16) >> 16;
}
Ue.readInt16BE = r1;
function i1(i, e) {
  return e === void 0 && (e = 0), ((i[e + 0] << 8) | i[e + 1]) >>> 0;
}
Ue.readUint16BE = i1;
function n1(i, e) {
  return e === void 0 && (e = 0), (((i[e + 1] << 8) | i[e]) << 16) >> 16;
}
Ue.readInt16LE = n1;
function s1(i, e) {
  return e === void 0 && (e = 0), ((i[e + 1] << 8) | i[e]) >>> 0;
}
Ue.readUint16LE = s1;
function sp(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 8),
    (e[t + 1] = i >>> 0),
    e
  );
}
Ue.writeUint16BE = sp;
Ue.writeInt16BE = sp;
function op(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    e
  );
}
Ue.writeUint16LE = op;
Ue.writeInt16LE = op;
function mu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]
  );
}
Ue.readInt32BE = mu;
function wu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]) >>> 0
  );
}
Ue.readUint32BE = wu;
function _u(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]
  );
}
Ue.readInt32LE = _u;
function bu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]) >>> 0
  );
}
Ue.readUint32LE = bu;
function ia(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 24),
    (e[t + 1] = i >>> 16),
    (e[t + 2] = i >>> 8),
    (e[t + 3] = i >>> 0),
    e
  );
}
Ue.writeUint32BE = ia;
Ue.writeInt32BE = ia;
function na(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    (e[t + 2] = i >>> 16),
    (e[t + 3] = i >>> 24),
    e
  );
}
Ue.writeUint32LE = na;
Ue.writeInt32LE = na;
function o1(i, e) {
  e === void 0 && (e = 0);
  var t = mu(i, e),
    s = mu(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
Ue.readInt64BE = o1;
function a1(i, e) {
  e === void 0 && (e = 0);
  var t = wu(i, e),
    s = wu(i, e + 4);
  return t * 4294967296 + s;
}
Ue.readUint64BE = a1;
function c1(i, e) {
  e === void 0 && (e = 0);
  var t = _u(i, e),
    s = _u(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
Ue.readInt64LE = c1;
function u1(i, e) {
  e === void 0 && (e = 0);
  var t = bu(i, e),
    s = bu(i, e + 4);
  return s * 4294967296 + t;
}
Ue.readUint64LE = u1;
function ap(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    ia((i / 4294967296) >>> 0, e, t),
    ia(i >>> 0, e, t + 4),
    e
  );
}
Ue.writeUint64BE = ap;
Ue.writeInt64BE = ap;
function cp(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    na(i >>> 0, e, t),
    na((i / 4294967296) >>> 0, e, t + 4),
    e
  );
}
Ue.writeUint64LE = cp;
Ue.writeInt64LE = cp;
function h1(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
    (s += e[c] * o), (o *= 256);
  return s;
}
Ue.readUintBE = h1;
function l1(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = t; c < t + i / 8; c++) (s += e[c] * o), (o *= 256);
  return s;
}
Ue.readUintLE = l1;
function f1(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!np.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
    (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Ue.writeUintBE = f1;
function d1(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!np.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, c = s; c < s + i / 8; c++) (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Ue.writeUintLE = d1;
function p1(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
Ue.readFloat32BE = p1;
function g1(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, !0);
}
Ue.readFloat32LE = g1;
function y1(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
Ue.readFloat64BE = y1;
function v1(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, !0);
}
Ue.readFloat64LE = v1;
function m1(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
Ue.writeFloat32BE = m1;
function w1(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, !0), e;
}
Ue.writeFloat32LE = w1;
function _1(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
Ue.writeFloat64BE = _1;
function b1(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, !0), e;
}
Ue.writeFloat64LE = b1;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
function E1(i) {
  for (var e = 0; e < i.length; e++) i[e] = 0;
  return i;
}
Tr.wipe = E1;
Object.defineProperty(fa, "__esModule", { value: !0 });
var Zt = Ue,
  Eu = Tr,
  D1 = 20;
function S1(i, e, t) {
  for (
    var s = 1634760805,
      o = 857760878,
      c = 2036477234,
      f = 1797285236,
      d = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      g = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      v = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      _ = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      O = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      P = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      S = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      K = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      B = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      Z = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      $ = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      M = s,
      I = o,
      C = c,
      A = f,
      h = d,
      b = p,
      ee = g,
      ne = v,
      ue = _,
      ge = O,
      ye = P,
      D = S,
      R = K,
      X = B,
      J = Z,
      k = $,
      V = 0;
    V < D1;
    V += 2
  )
    (M = (M + h) | 0),
      (R ^= M),
      (R = (R >>> 16) | (R << 16)),
      (ue = (ue + R) | 0),
      (h ^= ue),
      (h = (h >>> 20) | (h << 12)),
      (I = (I + b) | 0),
      (X ^= I),
      (X = (X >>> 16) | (X << 16)),
      (ge = (ge + X) | 0),
      (b ^= ge),
      (b = (b >>> 20) | (b << 12)),
      (C = (C + ee) | 0),
      (J ^= C),
      (J = (J >>> 16) | (J << 16)),
      (ye = (ye + J) | 0),
      (ee ^= ye),
      (ee = (ee >>> 20) | (ee << 12)),
      (A = (A + ne) | 0),
      (k ^= A),
      (k = (k >>> 16) | (k << 16)),
      (D = (D + k) | 0),
      (ne ^= D),
      (ne = (ne >>> 20) | (ne << 12)),
      (C = (C + ee) | 0),
      (J ^= C),
      (J = (J >>> 24) | (J << 8)),
      (ye = (ye + J) | 0),
      (ee ^= ye),
      (ee = (ee >>> 25) | (ee << 7)),
      (A = (A + ne) | 0),
      (k ^= A),
      (k = (k >>> 24) | (k << 8)),
      (D = (D + k) | 0),
      (ne ^= D),
      (ne = (ne >>> 25) | (ne << 7)),
      (I = (I + b) | 0),
      (X ^= I),
      (X = (X >>> 24) | (X << 8)),
      (ge = (ge + X) | 0),
      (b ^= ge),
      (b = (b >>> 25) | (b << 7)),
      (M = (M + h) | 0),
      (R ^= M),
      (R = (R >>> 24) | (R << 8)),
      (ue = (ue + R) | 0),
      (h ^= ue),
      (h = (h >>> 25) | (h << 7)),
      (M = (M + b) | 0),
      (k ^= M),
      (k = (k >>> 16) | (k << 16)),
      (ye = (ye + k) | 0),
      (b ^= ye),
      (b = (b >>> 20) | (b << 12)),
      (I = (I + ee) | 0),
      (R ^= I),
      (R = (R >>> 16) | (R << 16)),
      (D = (D + R) | 0),
      (ee ^= D),
      (ee = (ee >>> 20) | (ee << 12)),
      (C = (C + ne) | 0),
      (X ^= C),
      (X = (X >>> 16) | (X << 16)),
      (ue = (ue + X) | 0),
      (ne ^= ue),
      (ne = (ne >>> 20) | (ne << 12)),
      (A = (A + h) | 0),
      (J ^= A),
      (J = (J >>> 16) | (J << 16)),
      (ge = (ge + J) | 0),
      (h ^= ge),
      (h = (h >>> 20) | (h << 12)),
      (C = (C + ne) | 0),
      (X ^= C),
      (X = (X >>> 24) | (X << 8)),
      (ue = (ue + X) | 0),
      (ne ^= ue),
      (ne = (ne >>> 25) | (ne << 7)),
      (A = (A + h) | 0),
      (J ^= A),
      (J = (J >>> 24) | (J << 8)),
      (ge = (ge + J) | 0),
      (h ^= ge),
      (h = (h >>> 25) | (h << 7)),
      (I = (I + ee) | 0),
      (R ^= I),
      (R = (R >>> 24) | (R << 8)),
      (D = (D + R) | 0),
      (ee ^= D),
      (ee = (ee >>> 25) | (ee << 7)),
      (M = (M + b) | 0),
      (k ^= M),
      (k = (k >>> 24) | (k << 8)),
      (ye = (ye + k) | 0),
      (b ^= ye),
      (b = (b >>> 25) | (b << 7));
  Zt.writeUint32LE((M + s) | 0, i, 0),
    Zt.writeUint32LE((I + o) | 0, i, 4),
    Zt.writeUint32LE((C + c) | 0, i, 8),
    Zt.writeUint32LE((A + f) | 0, i, 12),
    Zt.writeUint32LE((h + d) | 0, i, 16),
    Zt.writeUint32LE((b + p) | 0, i, 20),
    Zt.writeUint32LE((ee + g) | 0, i, 24),
    Zt.writeUint32LE((ne + v) | 0, i, 28),
    Zt.writeUint32LE((ue + _) | 0, i, 32),
    Zt.writeUint32LE((ge + O) | 0, i, 36),
    Zt.writeUint32LE((ye + P) | 0, i, 40),
    Zt.writeUint32LE((D + S) | 0, i, 44),
    Zt.writeUint32LE((R + K) | 0, i, 48),
    Zt.writeUint32LE((X + B) | 0, i, 52),
    Zt.writeUint32LE((J + Z) | 0, i, 56),
    Zt.writeUint32LE((k + $) | 0, i, 60);
}
function up(i, e, t, s, o) {
  if ((o === void 0 && (o = 0), i.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var c, f;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (c = new Uint8Array(16)), (f = c.length - e.length), c.set(e, f);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (c = e), (f = o);
  }
  for (var d = new Uint8Array(64), p = 0; p < t.length; p += 64) {
    S1(d, c, i);
    for (var g = p; g < p + 64 && g < t.length; g++) s[g] = t[g] ^ d[g - p];
    x1(c, 0, f);
  }
  return Eu.wipe(d), o === 0 && Eu.wipe(c), s;
}
fa.streamXOR = up;
function I1(i, e, t, s) {
  return s === void 0 && (s = 0), Eu.wipe(t), up(i, e, t, t, s);
}
fa.stream = I1;
function x1(i, e, t) {
  for (var s = 1; t--; )
    (s = (s + (i[e] & 255)) | 0), (i[e] = s & 255), (s >>>= 8), e++;
  if (s > 0) throw new Error("ChaCha: counter overflow");
}
var hp = {},
  Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
function O1(i, e, t) {
  return (~(i - 1) & e) | ((i - 1) & t);
}
Hi.select = O1;
function P1(i, e) {
  return (((i | 0) - (e | 0) - 1) >>> 31) & 1;
}
Hi.lessOrEqual = P1;
function lp(i, e) {
  if (i.length !== e.length) return 0;
  for (var t = 0, s = 0; s < i.length; s++) t |= i[s] ^ e[s];
  return 1 & ((t - 1) >>> 8);
}
Hi.compare = lp;
function C1(i, e) {
  return i.length === 0 || e.length === 0 ? !1 : lp(i, e) !== 0;
}
Hi.equal = C1;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Hi,
    t = Tr;
  i.DIGEST_LENGTH = 16;
  var s = (function () {
    function f(d) {
      (this.digestLength = i.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var p = d[0] | (d[1] << 8);
      this._r[0] = p & 8191;
      var g = d[2] | (d[3] << 8);
      this._r[1] = ((p >>> 13) | (g << 3)) & 8191;
      var v = d[4] | (d[5] << 8);
      this._r[2] = ((g >>> 10) | (v << 6)) & 7939;
      var _ = d[6] | (d[7] << 8);
      this._r[3] = ((v >>> 7) | (_ << 9)) & 8191;
      var O = d[8] | (d[9] << 8);
      (this._r[4] = ((_ >>> 4) | (O << 12)) & 255),
        (this._r[5] = (O >>> 1) & 8190);
      var P = d[10] | (d[11] << 8);
      this._r[6] = ((O >>> 14) | (P << 2)) & 8191;
      var S = d[12] | (d[13] << 8);
      this._r[7] = ((P >>> 11) | (S << 5)) & 8065;
      var K = d[14] | (d[15] << 8);
      (this._r[8] = ((S >>> 8) | (K << 8)) & 8191),
        (this._r[9] = (K >>> 5) & 127),
        (this._pad[0] = d[16] | (d[17] << 8)),
        (this._pad[1] = d[18] | (d[19] << 8)),
        (this._pad[2] = d[20] | (d[21] << 8)),
        (this._pad[3] = d[22] | (d[23] << 8)),
        (this._pad[4] = d[24] | (d[25] << 8)),
        (this._pad[5] = d[26] | (d[27] << 8)),
        (this._pad[6] = d[28] | (d[29] << 8)),
        (this._pad[7] = d[30] | (d[31] << 8));
    }
    return (
      (f.prototype._blocks = function (d, p, g) {
        for (
          var v = this._fin ? 0 : 2048,
            _ = this._h[0],
            O = this._h[1],
            P = this._h[2],
            S = this._h[3],
            K = this._h[4],
            B = this._h[5],
            Z = this._h[6],
            $ = this._h[7],
            M = this._h[8],
            I = this._h[9],
            C = this._r[0],
            A = this._r[1],
            h = this._r[2],
            b = this._r[3],
            ee = this._r[4],
            ne = this._r[5],
            ue = this._r[6],
            ge = this._r[7],
            ye = this._r[8],
            D = this._r[9];
          g >= 16;

        ) {
          var R = d[p + 0] | (d[p + 1] << 8);
          _ += R & 8191;
          var X = d[p + 2] | (d[p + 3] << 8);
          O += ((R >>> 13) | (X << 3)) & 8191;
          var J = d[p + 4] | (d[p + 5] << 8);
          P += ((X >>> 10) | (J << 6)) & 8191;
          var k = d[p + 6] | (d[p + 7] << 8);
          S += ((J >>> 7) | (k << 9)) & 8191;
          var V = d[p + 8] | (d[p + 9] << 8);
          (K += ((k >>> 4) | (V << 12)) & 8191), (B += (V >>> 1) & 8191);
          var te = d[p + 10] | (d[p + 11] << 8);
          Z += ((V >>> 14) | (te << 2)) & 8191;
          var ie = d[p + 12] | (d[p + 13] << 8);
          $ += ((te >>> 11) | (ie << 5)) & 8191;
          var De = d[p + 14] | (d[p + 15] << 8);
          (M += ((ie >>> 8) | (De << 8)) & 8191), (I += (De >>> 5) | v);
          var oe = 0,
            Se = oe;
          (Se += _ * C),
            (Se += O * (5 * D)),
            (Se += P * (5 * ye)),
            (Se += S * (5 * ge)),
            (Se += K * (5 * ue)),
            (oe = Se >>> 13),
            (Se &= 8191),
            (Se += B * (5 * ne)),
            (Se += Z * (5 * ee)),
            (Se += $ * (5 * b)),
            (Se += M * (5 * h)),
            (Se += I * (5 * A)),
            (oe += Se >>> 13),
            (Se &= 8191);
          var le = oe;
          (le += _ * A),
            (le += O * C),
            (le += P * (5 * D)),
            (le += S * (5 * ye)),
            (le += K * (5 * ge)),
            (oe = le >>> 13),
            (le &= 8191),
            (le += B * (5 * ue)),
            (le += Z * (5 * ne)),
            (le += $ * (5 * ee)),
            (le += M * (5 * b)),
            (le += I * (5 * h)),
            (oe += le >>> 13),
            (le &= 8191);
          var Ae = oe;
          (Ae += _ * h),
            (Ae += O * A),
            (Ae += P * C),
            (Ae += S * (5 * D)),
            (Ae += K * (5 * ye)),
            (oe = Ae >>> 13),
            (Ae &= 8191),
            (Ae += B * (5 * ge)),
            (Ae += Z * (5 * ue)),
            (Ae += $ * (5 * ne)),
            (Ae += M * (5 * ee)),
            (Ae += I * (5 * b)),
            (oe += Ae >>> 13),
            (Ae &= 8191);
          var z = oe;
          (z += _ * b),
            (z += O * h),
            (z += P * A),
            (z += S * C),
            (z += K * (5 * D)),
            (oe = z >>> 13),
            (z &= 8191),
            (z += B * (5 * ye)),
            (z += Z * (5 * ge)),
            (z += $ * (5 * ue)),
            (z += M * (5 * ne)),
            (z += I * (5 * ee)),
            (oe += z >>> 13),
            (z &= 8191);
          var F = oe;
          (F += _ * ee),
            (F += O * b),
            (F += P * h),
            (F += S * A),
            (F += K * C),
            (oe = F >>> 13),
            (F &= 8191),
            (F += B * (5 * D)),
            (F += Z * (5 * ye)),
            (F += $ * (5 * ge)),
            (F += M * (5 * ue)),
            (F += I * (5 * ne)),
            (oe += F >>> 13),
            (F &= 8191);
          var L = oe;
          (L += _ * ne),
            (L += O * ee),
            (L += P * b),
            (L += S * h),
            (L += K * A),
            (oe = L >>> 13),
            (L &= 8191),
            (L += B * C),
            (L += Z * (5 * D)),
            (L += $ * (5 * ye)),
            (L += M * (5 * ge)),
            (L += I * (5 * ue)),
            (oe += L >>> 13),
            (L &= 8191);
          var l = oe;
          (l += _ * ue),
            (l += O * ne),
            (l += P * ee),
            (l += S * b),
            (l += K * h),
            (oe = l >>> 13),
            (l &= 8191),
            (l += B * A),
            (l += Z * C),
            (l += $ * (5 * D)),
            (l += M * (5 * ye)),
            (l += I * (5 * ge)),
            (oe += l >>> 13),
            (l &= 8191);
          var T = oe;
          (T += _ * ge),
            (T += O * ue),
            (T += P * ne),
            (T += S * ee),
            (T += K * b),
            (oe = T >>> 13),
            (T &= 8191),
            (T += B * h),
            (T += Z * A),
            (T += $ * C),
            (T += M * (5 * D)),
            (T += I * (5 * ye)),
            (oe += T >>> 13),
            (T &= 8191);
          var se = oe;
          (se += _ * ye),
            (se += O * ge),
            (se += P * ue),
            (se += S * ne),
            (se += K * ee),
            (oe = se >>> 13),
            (se &= 8191),
            (se += B * b),
            (se += Z * h),
            (se += $ * A),
            (se += M * C),
            (se += I * (5 * D)),
            (oe += se >>> 13),
            (se &= 8191);
          var he = oe;
          (he += _ * D),
            (he += O * ye),
            (he += P * ge),
            (he += S * ue),
            (he += K * ne),
            (oe = he >>> 13),
            (he &= 8191),
            (he += B * ee),
            (he += Z * b),
            (he += $ * h),
            (he += M * A),
            (he += I * C),
            (oe += he >>> 13),
            (he &= 8191),
            (oe = ((oe << 2) + oe) | 0),
            (oe = (oe + Se) | 0),
            (Se = oe & 8191),
            (oe = oe >>> 13),
            (le += oe),
            (_ = Se),
            (O = le),
            (P = Ae),
            (S = z),
            (K = F),
            (B = L),
            (Z = l),
            ($ = T),
            (M = se),
            (I = he),
            (p += 16),
            (g -= 16);
        }
        (this._h[0] = _),
          (this._h[1] = O),
          (this._h[2] = P),
          (this._h[3] = S),
          (this._h[4] = K),
          (this._h[5] = B),
          (this._h[6] = Z),
          (this._h[7] = $),
          (this._h[8] = M),
          (this._h[9] = I);
      }),
      (f.prototype.finish = function (d, p) {
        p === void 0 && (p = 0);
        var g = new Uint16Array(10),
          v,
          _,
          O,
          P;
        if (this._leftover) {
          for (P = this._leftover, this._buffer[P++] = 1; P < 16; P++)
            this._buffer[P] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (v = this._h[1] >>> 13, this._h[1] &= 8191, P = 2; P < 10; P++)
          (this._h[P] += v), (v = this._h[P] >>> 13), (this._h[P] &= 8191);
        for (
          this._h[0] += v * 5,
            v = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += v,
            v = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += v,
            g[0] = this._h[0] + 5,
            v = g[0] >>> 13,
            g[0] &= 8191,
            P = 1;
          P < 10;
          P++
        )
          (g[P] = this._h[P] + v), (v = g[P] >>> 13), (g[P] &= 8191);
        for (g[9] -= 8192, _ = (v ^ 1) - 1, P = 0; P < 10; P++) g[P] &= _;
        for (_ = ~_, P = 0; P < 10; P++) this._h[P] = (this._h[P] & _) | g[P];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            O = this._h[0] + this._pad[0],
            this._h[0] = O & 65535,
            P = 1;
          P < 8;
          P++
        )
          (O = (((this._h[P] + this._pad[P]) | 0) + (O >>> 16)) | 0),
            (this._h[P] = O & 65535);
        return (
          (d[p + 0] = this._h[0] >>> 0),
          (d[p + 1] = this._h[0] >>> 8),
          (d[p + 2] = this._h[1] >>> 0),
          (d[p + 3] = this._h[1] >>> 8),
          (d[p + 4] = this._h[2] >>> 0),
          (d[p + 5] = this._h[2] >>> 8),
          (d[p + 6] = this._h[3] >>> 0),
          (d[p + 7] = this._h[3] >>> 8),
          (d[p + 8] = this._h[4] >>> 0),
          (d[p + 9] = this._h[4] >>> 8),
          (d[p + 10] = this._h[5] >>> 0),
          (d[p + 11] = this._h[5] >>> 8),
          (d[p + 12] = this._h[6] >>> 0),
          (d[p + 13] = this._h[6] >>> 8),
          (d[p + 14] = this._h[7] >>> 0),
          (d[p + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (f.prototype.update = function (d) {
        var p = 0,
          g = d.length,
          v;
        if (this._leftover) {
          (v = 16 - this._leftover), v > g && (v = g);
          for (var _ = 0; _ < v; _++)
            this._buffer[this._leftover + _] = d[p + _];
          if (((g -= v), (p += v), (this._leftover += v), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (g >= 16 &&
            ((v = g - (g % 16)), this._blocks(d, p, v), (p += v), (g -= v)),
          g)
        ) {
          for (var _ = 0; _ < g; _++)
            this._buffer[this._leftover + _] = d[p + _];
          this._leftover += g;
        }
        return this;
      }),
      (f.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var d = new Uint8Array(16);
        return this.finish(d), d;
      }),
      (f.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      f
    );
  })();
  i.Poly1305 = s;
  function o(f, d) {
    var p = new s(f);
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.oneTimeAuth = o;
  function c(f, d) {
    return f.length !== i.DIGEST_LENGTH || d.length !== i.DIGEST_LENGTH
      ? !1
      : e.equal(f, d);
  }
  i.equal = c;
})(hp);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = fa,
    t = hp,
    s = Tr,
    o = Ue,
    c = Hi;
  (i.KEY_LENGTH = 32), (i.NONCE_LENGTH = 12), (i.TAG_LENGTH = 16);
  var f = new Uint8Array(16),
    d = (function () {
      function p(g) {
        if (
          ((this.nonceLength = i.NONCE_LENGTH),
          (this.tagLength = i.TAG_LENGTH),
          g.length !== i.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(g);
      }
      return (
        (p.prototype.seal = function (g, v, _, O) {
          if (g.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var P = new Uint8Array(16);
          P.set(g, P.length - g.length);
          var S = new Uint8Array(32);
          e.stream(this._key, P, S, 4);
          var K = v.length + this.tagLength,
            B;
          if (O) {
            if (O.length !== K)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            B = O;
          } else B = new Uint8Array(K);
          return (
            e.streamXOR(this._key, P, v, B, 4),
            this._authenticate(
              B.subarray(B.length - this.tagLength, B.length),
              S,
              B.subarray(0, B.length - this.tagLength),
              _
            ),
            s.wipe(P),
            B
          );
        }),
        (p.prototype.open = function (g, v, _, O) {
          if (g.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (v.length < this.tagLength) return null;
          var P = new Uint8Array(16);
          P.set(g, P.length - g.length);
          var S = new Uint8Array(32);
          e.stream(this._key, P, S, 4);
          var K = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              K,
              S,
              v.subarray(0, v.length - this.tagLength),
              _
            ),
            !c.equal(K, v.subarray(v.length - this.tagLength, v.length)))
          )
            return null;
          var B = v.length - this.tagLength,
            Z;
          if (O) {
            if (O.length !== B)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            Z = O;
          } else Z = new Uint8Array(B);
          return (
            e.streamXOR(
              this._key,
              P,
              v.subarray(0, v.length - this.tagLength),
              Z,
              4
            ),
            s.wipe(P),
            Z
          );
        }),
        (p.prototype.clean = function () {
          return s.wipe(this._key), this;
        }),
        (p.prototype._authenticate = function (g, v, _, O) {
          var P = new t.Poly1305(v);
          O &&
            (P.update(O),
            O.length % 16 > 0 && P.update(f.subarray(O.length % 16))),
            P.update(_),
            _.length % 16 > 0 && P.update(f.subarray(_.length % 16));
          var S = new Uint8Array(8);
          O && o.writeUint64LE(O.length, S),
            P.update(S),
            o.writeUint64LE(_.length, S),
            P.update(S);
          for (var K = P.digest(), B = 0; B < K.length; B++) g[B] = K[B];
          P.clean(), s.wipe(K), s.wipe(S);
        }),
        p
      );
    })();
  i.ChaCha20Poly1305 = d;
})(Bu);
var fp = {},
  Ns = {},
  Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
function A1(i) {
  return (
    typeof i.saveState < "u" &&
    typeof i.restoreState < "u" &&
    typeof i.cleanSavedState < "u"
  );
}
Ku.isSerializableHash = A1;
Object.defineProperty(Ns, "__esModule", { value: !0 });
var ii = Ku,
  T1 = Hi,
  R1 = Tr,
  dp = (function () {
    function i(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(s).clean()
        : s.set(t);
      for (var o = 0; o < s.length; o++) s[o] ^= 54;
      this._inner.update(s);
      for (var o = 0; o < s.length; o++) s[o] ^= 106;
      this._outer.update(s),
        ii.isSerializableHash(this._inner) &&
          ii.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        R1.wipe(s);
    }
    return (
      (i.prototype.reset = function () {
        if (
          !ii.isSerializableHash(this._inner) ||
          !ii.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.clean = function () {
        ii.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          ii.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (i.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (i.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (i.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (i.prototype.saveState = function () {
        if (!ii.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (i.prototype.restoreState = function (e) {
        if (
          !ii.isSerializableHash(this._inner) ||
          !ii.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.cleanSavedState = function (e) {
        if (!ii.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      i
    );
  })();
Ns.HMAC = dp;
function N1(i, e, t) {
  var s = new dp(i, e);
  s.update(t);
  var o = s.digest();
  return s.clean(), o;
}
Ns.hmac = N1;
Ns.equal = T1.equal;
Object.defineProperty(fp, "__esModule", { value: !0 });
var ff = Ns,
  df = Tr,
  $1 = (function () {
    function i(e, t, s, o) {
      s === void 0 && (s = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = o);
      var c = ff.hmac(this._hash, s, t);
      (this._hmac = new ff.HMAC(e, c)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (i.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (i.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[s] = this._buffer[this._bufpos++]);
        return t;
      }),
      (i.prototype.clean = function () {
        this._hmac.clean(),
          df.wipe(this._buffer),
          df.wipe(this._counter),
          (this._bufpos = 0);
      }),
      i
    );
  })(),
  L1 = (fp.HKDF = $1),
  Kn = {},
  da = {},
  pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.BrowserRandomSource = void 0;
const pf = 65536;
class U1 {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += pf)
      this._crypto.getRandomValues(
        t.subarray(s, s + Math.min(t.length - s, pf))
      );
    return t;
  }
}
pa.BrowserRandomSource = U1;
function M1(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var ga = {};
const j1 = {},
  q1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  F1 = ha(q1);
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.NodeRandomSource = void 0;
const z1 = Tr;
class H1 {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof M1 < "u")
    ) {
      const e = F1;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let o = 0; o < s.length; o++) s[o] = t[o];
    return (0, z1.wipe)(t), s;
  }
}
ga.NodeRandomSource = H1;
Object.defineProperty(da, "__esModule", { value: !0 });
da.SystemRandomSource = void 0;
const B1 = pa,
  K1 = ga;
class k1 {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new B1.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new K1.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
da.SystemRandomSource = k1;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.randomStringForEntropy =
      i.randomString =
      i.randomUint32 =
      i.randomBytes =
      i.defaultRandomSource =
        void 0);
  const e = da,
    t = Ue,
    s = Tr;
  i.defaultRandomSource = new e.SystemRandomSource();
  function o(g, v = i.defaultRandomSource) {
    return v.randomBytes(g);
  }
  i.randomBytes = o;
  function c(g = i.defaultRandomSource) {
    const v = o(4, g),
      _ = (0, t.readUint32LE)(v);
    return (0, s.wipe)(v), _;
  }
  i.randomUint32 = c;
  const f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function d(g, v = f, _ = i.defaultRandomSource) {
    if (v.length < 2) throw new Error("randomString charset is too short");
    if (v.length > 256) throw new Error("randomString charset is too long");
    let O = "";
    const P = v.length,
      S = 256 - (256 % P);
    for (; g > 0; ) {
      const K = o(Math.ceil((g * 256) / S), _);
      for (let B = 0; B < K.length && g > 0; B++) {
        const Z = K[B];
        Z < S && ((O += v.charAt(Z % P)), g--);
      }
      (0, s.wipe)(K);
    }
    return O;
  }
  i.randomString = d;
  function p(g, v = f, _ = i.defaultRandomSource) {
    const O = Math.ceil(g / (Math.log(v.length) / Math.LN2));
    return d(O, v, _);
  }
  i.randomStringForEntropy = p;
})(Kn);
var ya = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Ue,
    t = Tr;
  (i.DIGEST_LENGTH = 32), (i.BLOCK_SIZE = 64);
  var s = (function () {
    function d() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (d.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (d.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (d.prototype.update = function (p, g) {
        if ((g === void 0 && (g = p.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += g), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && g > 0; )
            (this._buffer[this._bufferLength++] = p[v++]), g--;
          this._bufferLength === this.blockSize &&
            (c(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          g >= this.blockSize &&
          ((v = c(this._temp, this._state, p, v, g)), (g %= this.blockSize));
          g > 0;

        )
          (this._buffer[this._bufferLength++] = p[v++]), g--;
        return this;
      }),
      (d.prototype.finish = function (p) {
        if (!this._finished) {
          var g = this._bytesHashed,
            v = this._bufferLength,
            _ = (g / 536870912) | 0,
            O = g << 3,
            P = g % 64 < 56 ? 64 : 128;
          this._buffer[v] = 128;
          for (var S = v + 1; S < P - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(_, this._buffer, P - 8),
            e.writeUint32BE(O, this._buffer, P - 4),
            c(this._temp, this._state, this._buffer, 0, P),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 4; S++)
          e.writeUint32BE(this._state[S], p, S * 4);
        return this;
      }),
      (d.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (d.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (d.prototype.restoreState = function (p) {
        return (
          this._state.set(p.state),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.cleanSavedState = function (p) {
        t.wipe(p.state),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      d
    );
  })();
  i.SHA256 = s;
  var o = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function c(d, p, g, v, _) {
    for (; _ >= 64; ) {
      for (
        var O = p[0],
          P = p[1],
          S = p[2],
          K = p[3],
          B = p[4],
          Z = p[5],
          $ = p[6],
          M = p[7],
          I = 0;
        I < 16;
        I++
      ) {
        var C = v + I * 4;
        d[I] = e.readUint32BE(g, C);
      }
      for (var I = 16; I < 64; I++) {
        var A = d[I - 2],
          h = ((A >>> 17) | (A << 15)) ^ ((A >>> 19) | (A << 13)) ^ (A >>> 10);
        A = d[I - 15];
        var b = ((A >>> 7) | (A << 25)) ^ ((A >>> 18) | (A << 14)) ^ (A >>> 3);
        d[I] = ((h + d[I - 7]) | 0) + ((b + d[I - 16]) | 0);
      }
      for (var I = 0; I < 64; I++) {
        var h =
            ((((((B >>> 6) | (B << 26)) ^
              ((B >>> 11) | (B << 21)) ^
              ((B >>> 25) | (B << 7))) +
              ((B & Z) ^ (~B & $))) |
              0) +
              ((M + ((o[I] + d[I]) | 0)) | 0)) |
            0,
          b =
            ((((O >>> 2) | (O << 30)) ^
              ((O >>> 13) | (O << 19)) ^
              ((O >>> 22) | (O << 10))) +
              ((O & P) ^ (O & S) ^ (P & S))) |
            0;
        (M = $),
          ($ = Z),
          (Z = B),
          (B = (K + h) | 0),
          (K = S),
          (S = P),
          (P = O),
          (O = (h + b) | 0);
      }
      (p[0] += O),
        (p[1] += P),
        (p[2] += S),
        (p[3] += K),
        (p[4] += B),
        (p[5] += Z),
        (p[6] += $),
        (p[7] += M),
        (v += 64),
        (_ -= 64);
    }
    return v;
  }
  function f(d) {
    var p = new s();
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.hash = f;
})(ya);
var ku = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.sharedKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.scalarMultBase =
      i.scalarMult =
      i.SHARED_KEY_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
        void 0);
  const e = Kn,
    t = Tr;
  (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 32),
    (i.SHARED_KEY_LENGTH = 32);
  function s(I) {
    const C = new Float64Array(16);
    if (I) for (let A = 0; A < I.length; A++) C[A] = I[A];
    return C;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const c = s([56129, 1]);
  function f(I) {
    let C = 1;
    for (let A = 0; A < 16; A++) {
      let h = I[A] + C + 65535;
      (C = Math.floor(h / 65536)), (I[A] = h - C * 65536);
    }
    I[0] += C - 1 + 37 * (C - 1);
  }
  function d(I, C, A) {
    const h = ~(A - 1);
    for (let b = 0; b < 16; b++) {
      const ee = h & (I[b] ^ C[b]);
      (I[b] ^= ee), (C[b] ^= ee);
    }
  }
  function p(I, C) {
    const A = s(),
      h = s();
    for (let b = 0; b < 16; b++) h[b] = C[b];
    f(h), f(h), f(h);
    for (let b = 0; b < 2; b++) {
      A[0] = h[0] - 65517;
      for (let ne = 1; ne < 15; ne++)
        (A[ne] = h[ne] - 65535 - ((A[ne - 1] >> 16) & 1)), (A[ne - 1] &= 65535);
      A[15] = h[15] - 32767 - ((A[14] >> 16) & 1);
      const ee = (A[15] >> 16) & 1;
      (A[14] &= 65535), d(h, A, 1 - ee);
    }
    for (let b = 0; b < 16; b++)
      (I[2 * b] = h[b] & 255), (I[2 * b + 1] = h[b] >> 8);
  }
  function g(I, C) {
    for (let A = 0; A < 16; A++) I[A] = C[2 * A] + (C[2 * A + 1] << 8);
    I[15] &= 32767;
  }
  function v(I, C, A) {
    for (let h = 0; h < 16; h++) I[h] = C[h] + A[h];
  }
  function _(I, C, A) {
    for (let h = 0; h < 16; h++) I[h] = C[h] - A[h];
  }
  function O(I, C, A) {
    let h,
      b,
      ee = 0,
      ne = 0,
      ue = 0,
      ge = 0,
      ye = 0,
      D = 0,
      R = 0,
      X = 0,
      J = 0,
      k = 0,
      V = 0,
      te = 0,
      ie = 0,
      De = 0,
      oe = 0,
      Se = 0,
      le = 0,
      Ae = 0,
      z = 0,
      F = 0,
      L = 0,
      l = 0,
      T = 0,
      se = 0,
      he = 0,
      Ee = 0,
      He = 0,
      ke = 0,
      Me = 0,
      pt = 0,
      gt = 0,
      qe = A[0],
      Ie = A[1],
      Ne = A[2],
      $e = A[3],
      Fe = A[4],
      Oe = A[5],
      Le = A[6],
      be = A[7],
      Pe = A[8],
      Be = A[9],
      xe = A[10],
      Ve = A[11],
      Ge = A[12],
      Ze = A[13],
      et = A[14],
      Je = A[15];
    (h = C[0]),
      (ee += h * qe),
      (ne += h * Ie),
      (ue += h * Ne),
      (ge += h * $e),
      (ye += h * Fe),
      (D += h * Oe),
      (R += h * Le),
      (X += h * be),
      (J += h * Pe),
      (k += h * Be),
      (V += h * xe),
      (te += h * Ve),
      (ie += h * Ge),
      (De += h * Ze),
      (oe += h * et),
      (Se += h * Je),
      (h = C[1]),
      (ne += h * qe),
      (ue += h * Ie),
      (ge += h * Ne),
      (ye += h * $e),
      (D += h * Fe),
      (R += h * Oe),
      (X += h * Le),
      (J += h * be),
      (k += h * Pe),
      (V += h * Be),
      (te += h * xe),
      (ie += h * Ve),
      (De += h * Ge),
      (oe += h * Ze),
      (Se += h * et),
      (le += h * Je),
      (h = C[2]),
      (ue += h * qe),
      (ge += h * Ie),
      (ye += h * Ne),
      (D += h * $e),
      (R += h * Fe),
      (X += h * Oe),
      (J += h * Le),
      (k += h * be),
      (V += h * Pe),
      (te += h * Be),
      (ie += h * xe),
      (De += h * Ve),
      (oe += h * Ge),
      (Se += h * Ze),
      (le += h * et),
      (Ae += h * Je),
      (h = C[3]),
      (ge += h * qe),
      (ye += h * Ie),
      (D += h * Ne),
      (R += h * $e),
      (X += h * Fe),
      (J += h * Oe),
      (k += h * Le),
      (V += h * be),
      (te += h * Pe),
      (ie += h * Be),
      (De += h * xe),
      (oe += h * Ve),
      (Se += h * Ge),
      (le += h * Ze),
      (Ae += h * et),
      (z += h * Je),
      (h = C[4]),
      (ye += h * qe),
      (D += h * Ie),
      (R += h * Ne),
      (X += h * $e),
      (J += h * Fe),
      (k += h * Oe),
      (V += h * Le),
      (te += h * be),
      (ie += h * Pe),
      (De += h * Be),
      (oe += h * xe),
      (Se += h * Ve),
      (le += h * Ge),
      (Ae += h * Ze),
      (z += h * et),
      (F += h * Je),
      (h = C[5]),
      (D += h * qe),
      (R += h * Ie),
      (X += h * Ne),
      (J += h * $e),
      (k += h * Fe),
      (V += h * Oe),
      (te += h * Le),
      (ie += h * be),
      (De += h * Pe),
      (oe += h * Be),
      (Se += h * xe),
      (le += h * Ve),
      (Ae += h * Ge),
      (z += h * Ze),
      (F += h * et),
      (L += h * Je),
      (h = C[6]),
      (R += h * qe),
      (X += h * Ie),
      (J += h * Ne),
      (k += h * $e),
      (V += h * Fe),
      (te += h * Oe),
      (ie += h * Le),
      (De += h * be),
      (oe += h * Pe),
      (Se += h * Be),
      (le += h * xe),
      (Ae += h * Ve),
      (z += h * Ge),
      (F += h * Ze),
      (L += h * et),
      (l += h * Je),
      (h = C[7]),
      (X += h * qe),
      (J += h * Ie),
      (k += h * Ne),
      (V += h * $e),
      (te += h * Fe),
      (ie += h * Oe),
      (De += h * Le),
      (oe += h * be),
      (Se += h * Pe),
      (le += h * Be),
      (Ae += h * xe),
      (z += h * Ve),
      (F += h * Ge),
      (L += h * Ze),
      (l += h * et),
      (T += h * Je),
      (h = C[8]),
      (J += h * qe),
      (k += h * Ie),
      (V += h * Ne),
      (te += h * $e),
      (ie += h * Fe),
      (De += h * Oe),
      (oe += h * Le),
      (Se += h * be),
      (le += h * Pe),
      (Ae += h * Be),
      (z += h * xe),
      (F += h * Ve),
      (L += h * Ge),
      (l += h * Ze),
      (T += h * et),
      (se += h * Je),
      (h = C[9]),
      (k += h * qe),
      (V += h * Ie),
      (te += h * Ne),
      (ie += h * $e),
      (De += h * Fe),
      (oe += h * Oe),
      (Se += h * Le),
      (le += h * be),
      (Ae += h * Pe),
      (z += h * Be),
      (F += h * xe),
      (L += h * Ve),
      (l += h * Ge),
      (T += h * Ze),
      (se += h * et),
      (he += h * Je),
      (h = C[10]),
      (V += h * qe),
      (te += h * Ie),
      (ie += h * Ne),
      (De += h * $e),
      (oe += h * Fe),
      (Se += h * Oe),
      (le += h * Le),
      (Ae += h * be),
      (z += h * Pe),
      (F += h * Be),
      (L += h * xe),
      (l += h * Ve),
      (T += h * Ge),
      (se += h * Ze),
      (he += h * et),
      (Ee += h * Je),
      (h = C[11]),
      (te += h * qe),
      (ie += h * Ie),
      (De += h * Ne),
      (oe += h * $e),
      (Se += h * Fe),
      (le += h * Oe),
      (Ae += h * Le),
      (z += h * be),
      (F += h * Pe),
      (L += h * Be),
      (l += h * xe),
      (T += h * Ve),
      (se += h * Ge),
      (he += h * Ze),
      (Ee += h * et),
      (He += h * Je),
      (h = C[12]),
      (ie += h * qe),
      (De += h * Ie),
      (oe += h * Ne),
      (Se += h * $e),
      (le += h * Fe),
      (Ae += h * Oe),
      (z += h * Le),
      (F += h * be),
      (L += h * Pe),
      (l += h * Be),
      (T += h * xe),
      (se += h * Ve),
      (he += h * Ge),
      (Ee += h * Ze),
      (He += h * et),
      (ke += h * Je),
      (h = C[13]),
      (De += h * qe),
      (oe += h * Ie),
      (Se += h * Ne),
      (le += h * $e),
      (Ae += h * Fe),
      (z += h * Oe),
      (F += h * Le),
      (L += h * be),
      (l += h * Pe),
      (T += h * Be),
      (se += h * xe),
      (he += h * Ve),
      (Ee += h * Ge),
      (He += h * Ze),
      (ke += h * et),
      (Me += h * Je),
      (h = C[14]),
      (oe += h * qe),
      (Se += h * Ie),
      (le += h * Ne),
      (Ae += h * $e),
      (z += h * Fe),
      (F += h * Oe),
      (L += h * Le),
      (l += h * be),
      (T += h * Pe),
      (se += h * Be),
      (he += h * xe),
      (Ee += h * Ve),
      (He += h * Ge),
      (ke += h * Ze),
      (Me += h * et),
      (pt += h * Je),
      (h = C[15]),
      (Se += h * qe),
      (le += h * Ie),
      (Ae += h * Ne),
      (z += h * $e),
      (F += h * Fe),
      (L += h * Oe),
      (l += h * Le),
      (T += h * be),
      (se += h * Pe),
      (he += h * Be),
      (Ee += h * xe),
      (He += h * Ve),
      (ke += h * Ge),
      (Me += h * Ze),
      (pt += h * et),
      (gt += h * Je),
      (ee += 38 * le),
      (ne += 38 * Ae),
      (ue += 38 * z),
      (ge += 38 * F),
      (ye += 38 * L),
      (D += 38 * l),
      (R += 38 * T),
      (X += 38 * se),
      (J += 38 * he),
      (k += 38 * Ee),
      (V += 38 * He),
      (te += 38 * ke),
      (ie += 38 * Me),
      (De += 38 * pt),
      (oe += 38 * gt),
      (b = 1),
      (h = ee + b + 65535),
      (b = Math.floor(h / 65536)),
      (ee = h - b * 65536),
      (h = ne + b + 65535),
      (b = Math.floor(h / 65536)),
      (ne = h - b * 65536),
      (h = ue + b + 65535),
      (b = Math.floor(h / 65536)),
      (ue = h - b * 65536),
      (h = ge + b + 65535),
      (b = Math.floor(h / 65536)),
      (ge = h - b * 65536),
      (h = ye + b + 65535),
      (b = Math.floor(h / 65536)),
      (ye = h - b * 65536),
      (h = D + b + 65535),
      (b = Math.floor(h / 65536)),
      (D = h - b * 65536),
      (h = R + b + 65535),
      (b = Math.floor(h / 65536)),
      (R = h - b * 65536),
      (h = X + b + 65535),
      (b = Math.floor(h / 65536)),
      (X = h - b * 65536),
      (h = J + b + 65535),
      (b = Math.floor(h / 65536)),
      (J = h - b * 65536),
      (h = k + b + 65535),
      (b = Math.floor(h / 65536)),
      (k = h - b * 65536),
      (h = V + b + 65535),
      (b = Math.floor(h / 65536)),
      (V = h - b * 65536),
      (h = te + b + 65535),
      (b = Math.floor(h / 65536)),
      (te = h - b * 65536),
      (h = ie + b + 65535),
      (b = Math.floor(h / 65536)),
      (ie = h - b * 65536),
      (h = De + b + 65535),
      (b = Math.floor(h / 65536)),
      (De = h - b * 65536),
      (h = oe + b + 65535),
      (b = Math.floor(h / 65536)),
      (oe = h - b * 65536),
      (h = Se + b + 65535),
      (b = Math.floor(h / 65536)),
      (Se = h - b * 65536),
      (ee += b - 1 + 37 * (b - 1)),
      (b = 1),
      (h = ee + b + 65535),
      (b = Math.floor(h / 65536)),
      (ee = h - b * 65536),
      (h = ne + b + 65535),
      (b = Math.floor(h / 65536)),
      (ne = h - b * 65536),
      (h = ue + b + 65535),
      (b = Math.floor(h / 65536)),
      (ue = h - b * 65536),
      (h = ge + b + 65535),
      (b = Math.floor(h / 65536)),
      (ge = h - b * 65536),
      (h = ye + b + 65535),
      (b = Math.floor(h / 65536)),
      (ye = h - b * 65536),
      (h = D + b + 65535),
      (b = Math.floor(h / 65536)),
      (D = h - b * 65536),
      (h = R + b + 65535),
      (b = Math.floor(h / 65536)),
      (R = h - b * 65536),
      (h = X + b + 65535),
      (b = Math.floor(h / 65536)),
      (X = h - b * 65536),
      (h = J + b + 65535),
      (b = Math.floor(h / 65536)),
      (J = h - b * 65536),
      (h = k + b + 65535),
      (b = Math.floor(h / 65536)),
      (k = h - b * 65536),
      (h = V + b + 65535),
      (b = Math.floor(h / 65536)),
      (V = h - b * 65536),
      (h = te + b + 65535),
      (b = Math.floor(h / 65536)),
      (te = h - b * 65536),
      (h = ie + b + 65535),
      (b = Math.floor(h / 65536)),
      (ie = h - b * 65536),
      (h = De + b + 65535),
      (b = Math.floor(h / 65536)),
      (De = h - b * 65536),
      (h = oe + b + 65535),
      (b = Math.floor(h / 65536)),
      (oe = h - b * 65536),
      (h = Se + b + 65535),
      (b = Math.floor(h / 65536)),
      (Se = h - b * 65536),
      (ee += b - 1 + 37 * (b - 1)),
      (I[0] = ee),
      (I[1] = ne),
      (I[2] = ue),
      (I[3] = ge),
      (I[4] = ye),
      (I[5] = D),
      (I[6] = R),
      (I[7] = X),
      (I[8] = J),
      (I[9] = k),
      (I[10] = V),
      (I[11] = te),
      (I[12] = ie),
      (I[13] = De),
      (I[14] = oe),
      (I[15] = Se);
  }
  function P(I, C) {
    O(I, C, C);
  }
  function S(I, C) {
    const A = s();
    for (let h = 0; h < 16; h++) A[h] = C[h];
    for (let h = 253; h >= 0; h--) P(A, A), h !== 2 && h !== 4 && O(A, A, C);
    for (let h = 0; h < 16; h++) I[h] = A[h];
  }
  function K(I, C) {
    const A = new Uint8Array(32),
      h = new Float64Array(80),
      b = s(),
      ee = s(),
      ne = s(),
      ue = s(),
      ge = s(),
      ye = s();
    for (let J = 0; J < 31; J++) A[J] = I[J];
    (A[31] = (I[31] & 127) | 64), (A[0] &= 248), g(h, C);
    for (let J = 0; J < 16; J++) ee[J] = h[J];
    b[0] = ue[0] = 1;
    for (let J = 254; J >= 0; --J) {
      const k = (A[J >>> 3] >>> (J & 7)) & 1;
      d(b, ee, k),
        d(ne, ue, k),
        v(ge, b, ne),
        _(b, b, ne),
        v(ne, ee, ue),
        _(ee, ee, ue),
        P(ue, ge),
        P(ye, b),
        O(b, ne, b),
        O(ne, ee, ge),
        v(ge, b, ne),
        _(b, b, ne),
        P(ee, b),
        _(ne, ue, ye),
        O(b, ne, c),
        v(b, b, ue),
        O(ne, ne, b),
        O(b, ue, ye),
        O(ue, ee, h),
        P(ee, ge),
        d(b, ee, k),
        d(ne, ue, k);
    }
    for (let J = 0; J < 16; J++)
      (h[J + 16] = b[J]),
        (h[J + 32] = ne[J]),
        (h[J + 48] = ee[J]),
        (h[J + 64] = ue[J]);
    const D = h.subarray(32),
      R = h.subarray(16);
    S(D, D), O(R, R, D);
    const X = new Uint8Array(32);
    return p(X, R), X;
  }
  i.scalarMult = K;
  function B(I) {
    return K(I, o);
  }
  i.scalarMultBase = B;
  function Z(I) {
    if (I.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const C = new Uint8Array(I);
    return { publicKey: B(C), secretKey: C };
  }
  i.generateKeyPairFromSeed = Z;
  function $(I) {
    const C = (0, e.randomBytes)(32, I),
      A = Z(C);
    return (0, t.wipe)(C), A;
  }
  i.generateKeyPair = $;
  function M(I, C, A = !1) {
    if (I.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (C.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const h = K(I, C);
    if (A) {
      let b = 0;
      for (let ee = 0; ee < h.length; ee++) b |= h[ee];
      if (b === 0) throw new Error("X25519: invalid shared key");
    }
    return h;
  }
  i.sharedKey = M;
})(ku);
function Vu(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function pp(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Vu(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function Du(i, e) {
  e || (e = i.reduce((o, c) => o + c.length, 0));
  const t = pp(e);
  let s = 0;
  for (const o of i) t.set(o, s), (s += o.length);
  return Vu(t);
}
function V1(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      f = c.charCodeAt(0);
    if (t[f] !== 255) throw new TypeError(c + " is ambiguous");
    t[f] = o;
  }
  var d = i.length,
    p = i.charAt(0),
    g = Math.log(d) / Math.log(256),
    v = Math.log(256) / Math.log(d);
  function _(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var K = 0, B = 0, Z = 0, $ = S.length; Z !== $ && S[Z] === 0; )
      Z++, K++;
    for (var M = (($ - Z) * v + 1) >>> 0, I = new Uint8Array(M); Z !== $; ) {
      for (
        var C = S[Z], A = 0, h = M - 1;
        (C !== 0 || A < B) && h !== -1;
        h--, A++
      )
        (C += (256 * I[h]) >>> 0), (I[h] = C % d >>> 0), (C = (C / d) >>> 0);
      if (C !== 0) throw new Error("Non-zero carry");
      (B = A), Z++;
    }
    for (var b = M - B; b !== M && I[b] === 0; ) b++;
    for (var ee = p.repeat(K); b < M; ++b) ee += i.charAt(I[b]);
    return ee;
  }
  function O(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var K = 0;
    if (S[K] !== " ") {
      for (var B = 0, Z = 0; S[K] === p; ) B++, K++;
      for (
        var $ = ((S.length - K) * g + 1) >>> 0, M = new Uint8Array($);
        S[K];

      ) {
        var I = t[S.charCodeAt(K)];
        if (I === 255) return;
        for (var C = 0, A = $ - 1; (I !== 0 || C < Z) && A !== -1; A--, C++)
          (I += (d * M[A]) >>> 0),
            (M[A] = I % 256 >>> 0),
            (I = (I / 256) >>> 0);
        if (I !== 0) throw new Error("Non-zero carry");
        (Z = C), K++;
      }
      if (S[K] !== " ") {
        for (var h = $ - Z; h !== $ && M[h] === 0; ) h++;
        for (var b = new Uint8Array(B + ($ - h)), ee = B; h !== $; )
          b[ee++] = M[h++];
        return b;
      }
    }
  }
  function P(S) {
    var K = O(S);
    if (K) return K;
    throw new Error(`Non-${e} character`);
  }
  return { encode: _, decodeUnsafe: O, decode: P };
}
var W1 = V1,
  G1 = W1;
const Y1 = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  J1 = (i) => new TextEncoder().encode(i),
  Q1 = (i) => new TextDecoder().decode(i);
class X1 {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Z1 {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return gp(this, e);
  }
}
class eb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return gp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const gp = (i, e) =>
  new eb({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class tb {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new X1(e, t, s)),
      (this.decoder = new Z1(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const va = ({ name: i, prefix: e, encode: t, decode: s }) => new tb(i, e, t, s),
  $s = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = G1(t, e);
    return va({ prefix: i, name: e, encode: s, decode: (c) => Y1(o(c)) });
  },
  rb = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const f = new Uint8Array(((c * t) / 8) | 0);
    let d = 0,
      p = 0,
      g = 0;
    for (let v = 0; v < c; ++v) {
      const _ = o[i[v]];
      if (_ === void 0) throw new SyntaxError(`Non-${s} character`);
      (p = (p << t) | _),
        (d += t),
        d >= 8 && ((d -= 8), (f[g++] = 255 & (p >> d)));
    }
    if (d >= t || 255 & (p << (8 - d)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  ib = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      f = 0,
      d = 0;
    for (let p = 0; p < i.length; ++p)
      for (d = (d << 8) | i[p], f += 8; f > t; )
        (f -= t), (c += e[o & (d >> f)]);
    if ((f && (c += e[o & (d << (t - f))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Yt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    va({
      prefix: e,
      name: i,
      encode(o) {
        return ib(o, s, t);
      },
      decode(o) {
        return rb(o, s, t, i);
      },
    }),
  nb = va({
    prefix: "\0",
    name: "identity",
    encode: (i) => Q1(i),
    decode: (i) => J1(i),
  }),
  sb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: nb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ob = Yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  ab = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: ob }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  cb = Yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  ub = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: cb }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  hb = $s({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  lb = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: hb }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  fb = Yt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  db = Yt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  pb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: fb, base16upper: db },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gb = Yt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  yb = Yt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  vb = Yt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  mb = Yt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  wb = Yt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  _b = Yt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  bb = Yt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  Eb = Yt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  Db = Yt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  Sb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: gb,
        base32hex: wb,
        base32hexpad: bb,
        base32hexpadupper: Eb,
        base32hexupper: _b,
        base32pad: vb,
        base32padupper: mb,
        base32upper: yb,
        base32z: Db,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ib = $s({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  xb = $s({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  Ob = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: Ib, base36upper: xb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pb = $s({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  Cb = $s({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  Ab = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: Pb, base58flickr: Cb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tb = Yt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  Rb = Yt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Nb = Yt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  $b = Yt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  Lb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: Tb,
        base64pad: Rb,
        base64url: Nb,
        base64urlpad: $b,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Ub = yp.reduce((i, e, t) => ((i[t] = e), i), []),
  Mb = yp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function jb(i) {
  return i.reduce((e, t) => ((e += Ub[t]), e), "");
}
function qb(i) {
  const e = [];
  for (const t of i) {
    const s = Mb[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Fb = va({ prefix: "🚀", name: "base256emoji", encode: jb, decode: qb }),
  zb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: Fb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const gf = {
  ...sb,
  ...ab,
  ...ub,
  ...lb,
  ...pb,
  ...Sb,
  ...Ob,
  ...Ab,
  ...Lb,
  ...zb,
};
function vp(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const yf = vp(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  Jc = vp(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = pp(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  mp = {
    utf8: yf,
    "utf-8": yf,
    hex: gf.base16,
    latin1: Jc,
    ascii: Jc,
    binary: Jc,
    ...gf,
  };
function wr(i, e = "utf8") {
  const t = mp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Vu(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
function hr(i, e = "utf8") {
  const t = mp[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(i).substring(1);
}
var vf = function (i, e, t) {
    if (t || arguments.length === 2)
      for (var s = 0, o = e.length, c; s < o; s++)
        (c || !(s in e)) &&
          (c || (c = Array.prototype.slice.call(e, 0, s)), (c[s] = e[s]));
    return i.concat(c || Array.prototype.slice.call(e));
  },
  Hb = (function () {
    function i(e, t, s) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.type = "browser");
    }
    return i;
  })(),
  Bb = (function () {
    function i(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return i;
  })(),
  Kb = (function () {
    function i(e, t, s, o) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.bot = o),
        (this.type = "bot-device");
    }
    return i;
  })(),
  kb = (function () {
    function i() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Vb = (function () {
    function i() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Wb =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Gb =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  mf = 3,
  Yb = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Wb],
  ],
  wf = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Jb(i) {
  return i
    ? _f(i)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Vb()
    : typeof navigator < "u"
    ? _f(navigator.userAgent)
    : Zb();
}
function Qb(i) {
  return (
    i !== "" &&
    Yb.reduce(function (e, t) {
      var s = t[0],
        o = t[1];
      if (e) return e;
      var c = o.exec(i);
      return !!c && [s, c];
    }, !1)
  );
}
function _f(i) {
  var e = Qb(i);
  if (!e) return null;
  var t = e[0],
    s = e[1];
  if (t === "searchbot") return new kb();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < mf && (o = vf(vf([], o, !0), eE(mf - o.length), !0))
    : (o = []);
  var c = o.join("."),
    f = Xb(i),
    d = Gb.exec(i);
  return d && d[1] ? new Kb(t, c, f, d[1]) : new Hb(t, c, f);
}
function Xb(i) {
  for (var e = 0, t = wf.length; e < t; e++) {
    var s = wf[e],
      o = s[0],
      c = s[1],
      f = c.exec(i);
    if (f) return o;
  }
  return null;
}
function Zb() {
  var i = typeof process < "u" && process.version;
  return i ? new Bb(process.version.slice(1)) : null;
}
function eE(i) {
  for (var e = [], t = 0; t < i; t++) e.push("0");
  return e;
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Su =
  function (i, e) {
    return (
      (Su =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      Su(i, e)
    );
  };
function tE(i, e) {
  Su(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Iu = function () {
  return (
    (Iu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    Iu.apply(this, arguments)
  );
};
function rE(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function iE(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var d = i.length - 1; d >= 0; d--)
      (f = i[d]) && (c = (o < 3 ? f(c) : o > 3 ? f(e, t, c) : f(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function nE(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function sE(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function oE(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (f) {
          f(c);
        });
  }
  return new (t || (t = Promise))(function (c, f) {
    function d(v) {
      try {
        g(s.next(v));
      } catch (_) {
        f(_);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (_) {
        f(_);
      }
    }
    function g(v) {
      v.done ? c(v.value) : o(v.value).then(d, p);
    }
    g((s = s.apply(i, e || [])).next());
  });
}
function aE(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    f;
  return (
    (f = { next: d(0), throw: d(1), return: d(2) }),
    typeof Symbol == "function" &&
      (f[Symbol.iterator] = function () {
        return this;
      }),
    f
  );
  function d(g) {
    return function (v) {
      return p([g, v]);
    };
  }
  function p(g) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              g[0] & 2
                ? o.return
                : g[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, g[1])).done)
        )
          return c;
        switch (((o = 0), c && (g = [g[0] & 2, c.value]), g[0])) {
          case 0:
          case 1:
            c = g;
            break;
          case 4:
            return t.label++, { value: g[1], done: !1 };
          case 5:
            t.label++, (o = g[1]), (g = [0]);
            continue;
          case 7:
            (g = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (g[0] === 6 || g[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (g[0] === 3 && (!c || (g[1] > c[0] && g[1] < c[3]))) {
              t.label = g[1];
              break;
            }
            if (g[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = g);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(g);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        g = e.call(i, t);
      } catch (v) {
        (g = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function cE(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function uE(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function xu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function wp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    f;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (d) {
    f = { error: d };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (f) throw f.error;
    }
  }
  return c;
}
function hE() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(wp(arguments[e]));
  return i;
}
function lE() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], f = 0, d = c.length; f < d; f++, o++)
      s[o] = c[f];
  return s;
}
function xs(i) {
  return this instanceof xs ? ((this.v = i), this) : new xs(i);
}
function fE(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    f("next"),
    f("throw"),
    f("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function f(O) {
    s[O] &&
      (o[O] = function (P) {
        return new Promise(function (S, K) {
          c.push([O, P, S, K]) > 1 || d(O, P);
        });
      });
  }
  function d(O, P) {
    try {
      p(s[O](P));
    } catch (S) {
      _(c[0][3], S);
    }
  }
  function p(O) {
    O.value instanceof xs
      ? Promise.resolve(O.value.v).then(g, v)
      : _(c[0][2], O);
  }
  function g(O) {
    d("next", O);
  }
  function v(O) {
    d("throw", O);
  }
  function _(O, P) {
    O(P), c.shift(), c.length && d(c[0][0], c[0][1]);
  }
}
function dE(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (f) {
          return (t = !t)
            ? { value: xs(i[o](f)), done: o === "return" }
            : c
            ? c(f)
            : f;
        }
      : c;
  }
}
function pE(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof xu == "function" ? xu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (f) {
        return new Promise(function (d, p) {
          (f = i[c](f)), o(d, p, f.done, f.value);
        });
      };
  }
  function o(c, f, d, p) {
    Promise.resolve(p).then(function (g) {
      c({ value: g, done: d });
    }, f);
  }
}
function gE(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function yE(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function vE(i) {
  return i && i.__esModule ? i : { default: i };
}
function mE(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function wE(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const _E = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Iu;
        },
        __asyncDelegator: dE,
        __asyncGenerator: fE,
        __asyncValues: pE,
        __await: xs,
        __awaiter: oE,
        __classPrivateFieldGet: mE,
        __classPrivateFieldSet: wE,
        __createBinding: cE,
        __decorate: iE,
        __exportStar: uE,
        __extends: tE,
        __generator: aE,
        __importDefault: vE,
        __importStar: yE,
        __makeTemplateObject: gE,
        __metadata: sE,
        __param: nE,
        __read: wp,
        __rest: rE,
        __spread: hE,
        __spreadArrays: lE,
        __values: xu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ii = ha(_E);
var Qc = {},
  gs = {},
  bf;
function bE() {
  if (bf) return gs;
  (bf = 1),
    Object.defineProperty(gs, "__esModule", { value: !0 }),
    (gs.delay = void 0);
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (gs.delay = i), gs;
}
var sn = {},
  Xc = {},
  on = {},
  Ef;
function EE() {
  return (
    Ef ||
      ((Ef = 1),
      Object.defineProperty(on, "__esModule", { value: !0 }),
      (on.ONE_THOUSAND = on.ONE_HUNDRED = void 0),
      (on.ONE_HUNDRED = 100),
      (on.ONE_THOUSAND = 1e3)),
    on
  );
}
var Zc = {},
  Df;
function DE() {
  return (
    Df ||
      ((Df = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.ONE_YEAR =
            i.FOUR_WEEKS =
            i.THREE_WEEKS =
            i.TWO_WEEKS =
            i.ONE_WEEK =
            i.THIRTY_DAYS =
            i.SEVEN_DAYS =
            i.FIVE_DAYS =
            i.THREE_DAYS =
            i.ONE_DAY =
            i.TWENTY_FOUR_HOURS =
            i.TWELVE_HOURS =
            i.SIX_HOURS =
            i.THREE_HOURS =
            i.ONE_HOUR =
            i.SIXTY_MINUTES =
            i.THIRTY_MINUTES =
            i.TEN_MINUTES =
            i.FIVE_MINUTES =
            i.ONE_MINUTE =
            i.SIXTY_SECONDS =
            i.THIRTY_SECONDS =
            i.TEN_SECONDS =
            i.FIVE_SECONDS =
            i.ONE_SECOND =
              void 0),
          (i.ONE_SECOND = 1),
          (i.FIVE_SECONDS = 5),
          (i.TEN_SECONDS = 10),
          (i.THIRTY_SECONDS = 30),
          (i.SIXTY_SECONDS = 60),
          (i.ONE_MINUTE = i.SIXTY_SECONDS),
          (i.FIVE_MINUTES = i.ONE_MINUTE * 5),
          (i.TEN_MINUTES = i.ONE_MINUTE * 10),
          (i.THIRTY_MINUTES = i.ONE_MINUTE * 30),
          (i.SIXTY_MINUTES = i.ONE_MINUTE * 60),
          (i.ONE_HOUR = i.SIXTY_MINUTES),
          (i.THREE_HOURS = i.ONE_HOUR * 3),
          (i.SIX_HOURS = i.ONE_HOUR * 6),
          (i.TWELVE_HOURS = i.ONE_HOUR * 12),
          (i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24),
          (i.ONE_DAY = i.TWENTY_FOUR_HOURS),
          (i.THREE_DAYS = i.ONE_DAY * 3),
          (i.FIVE_DAYS = i.ONE_DAY * 5),
          (i.SEVEN_DAYS = i.ONE_DAY * 7),
          (i.THIRTY_DAYS = i.ONE_DAY * 30),
          (i.ONE_WEEK = i.SEVEN_DAYS),
          (i.TWO_WEEKS = i.ONE_WEEK * 2),
          (i.THREE_WEEKS = i.ONE_WEEK * 3),
          (i.FOUR_WEEKS = i.ONE_WEEK * 4),
          (i.ONE_YEAR = i.ONE_DAY * 365);
      })(Zc)),
    Zc
  );
}
var Sf;
function _p() {
  return (
    Sf ||
      ((Sf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = Ii;
        e.__exportStar(EE(), i), e.__exportStar(DE(), i);
      })(Xc)),
    Xc
  );
}
var If;
function SE() {
  if (If) return sn;
  (If = 1),
    Object.defineProperty(sn, "__esModule", { value: !0 }),
    (sn.fromMiliseconds = sn.toMiliseconds = void 0);
  const i = _p();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  sn.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return (sn.fromMiliseconds = t), sn;
}
var xf;
function IE() {
  return (
    xf ||
      ((xf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = Ii;
        e.__exportStar(bE(), i), e.__exportStar(SE(), i);
      })(Qc)),
    Qc
  );
}
var Ln = {},
  Of;
function xE() {
  if (Of) return Ln;
  (Of = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.Watch = void 0);
  class i {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: o });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u") throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return (Ln.Watch = i), (Ln.default = i), Ln;
}
var eu = {},
  ys = {},
  Pf;
function OE() {
  if (Pf) return ys;
  (Pf = 1),
    Object.defineProperty(ys, "__esModule", { value: !0 }),
    (ys.IWatch = void 0);
  class i {}
  return (ys.IWatch = i), ys;
}
var Cf;
function PE() {
  return (
    Cf ||
      ((Cf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(OE(), i);
      })(eu)),
    eu
  );
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(IE(), i),
    e.__exportStar(xE(), i),
    e.__exportStar(PE(), i),
    e.__exportStar(_p(), i);
})(ve);
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getLocalStorage =
  lt.getLocalStorageOrThrow =
  lt.getCrypto =
  lt.getCryptoOrThrow =
  bp =
  lt.getLocation =
  lt.getLocationOrThrow =
  Gu =
  lt.getNavigator =
  lt.getNavigatorOrThrow =
  Wu =
  lt.getDocument =
  lt.getDocumentOrThrow =
  lt.getFromWindowOrThrow =
  lt.getFromWindow =
    void 0;
function hn(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
lt.getFromWindow = hn;
function kn(i) {
  const e = hn(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
lt.getFromWindowOrThrow = kn;
function CE() {
  return kn("document");
}
lt.getDocumentOrThrow = CE;
function AE() {
  return hn("document");
}
var Wu = (lt.getDocument = AE);
function TE() {
  return kn("navigator");
}
lt.getNavigatorOrThrow = TE;
function RE() {
  return hn("navigator");
}
var Gu = (lt.getNavigator = RE);
function NE() {
  return kn("location");
}
lt.getLocationOrThrow = NE;
function $E() {
  return hn("location");
}
var bp = (lt.getLocation = $E);
function LE() {
  return kn("crypto");
}
lt.getCryptoOrThrow = LE;
function UE() {
  return hn("crypto");
}
lt.getCrypto = UE;
function ME() {
  return kn("localStorage");
}
lt.getLocalStorageOrThrow = ME;
function jE() {
  return hn("localStorage");
}
lt.getLocalStorage = jE;
var Yu = {};
Object.defineProperty(Yu, "__esModule", { value: !0 });
var Ep = (Yu.getWindowMetadata = void 0);
const Af = lt;
function qE() {
  let i, e;
  try {
    (i = Af.getDocumentOrThrow()), (e = Af.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const _ = i.getElementsByTagName("link"),
      O = [];
    for (let P = 0; P < _.length; P++) {
      const S = _[P],
        K = S.getAttribute("rel");
      if (K && K.toLowerCase().indexOf("icon") > -1) {
        const B = S.getAttribute("href");
        if (B)
          if (
            B.toLowerCase().indexOf("https:") === -1 &&
            B.toLowerCase().indexOf("http:") === -1 &&
            B.indexOf("//") !== 0
          ) {
            let Z = e.protocol + "//" + e.host;
            if (B.indexOf("/") === 0) Z += B;
            else {
              const $ = e.pathname.split("/");
              $.pop();
              const M = $.join("/");
              Z += M + "/" + B;
            }
            O.push(Z);
          } else if (B.indexOf("//") === 0) {
            const Z = e.protocol + B;
            O.push(Z);
          } else O.push(B);
      }
    }
    return O;
  }
  function s(..._) {
    const O = i.getElementsByTagName("meta");
    for (let P = 0; P < O.length; P++) {
      const S = O[P],
        K = ["itemprop", "property", "name"]
          .map((B) => S.getAttribute(B))
          .filter((B) => (B ? _.includes(B) : !1));
      if (K.length && K) {
        const B = S.getAttribute("content");
        if (B) return B;
      }
    }
    return "";
  }
  function o() {
    let _ = s("name", "og:site_name", "og:title", "twitter:title");
    return _ || (_ = i.title), _;
  }
  function c() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const f = o(),
    d = c(),
    p = e.origin,
    g = t();
  return { description: d, url: p, icons: g, name: f };
}
Ep = Yu.getWindowMetadata = qE;
var Os = {},
  FE = (i) =>
    encodeURIComponent(i).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  Dp = "%[a-f0-9]{2}",
  Tf = new RegExp("(" + Dp + ")|([^%]+?)", "gi"),
  Rf = new RegExp("(" + Dp + ")+", "gi");
function Ou(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {}
  if (i.length === 1) return i;
  e = e || 1;
  var t = i.slice(0, e),
    s = i.slice(e);
  return Array.prototype.concat.call([], Ou(t), Ou(s));
}
function zE(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(Tf) || [], t = 1; t < e.length; t++)
      (i = Ou(e, t).join("")), (e = i.match(Tf) || []);
    return i;
  }
}
function HE(i) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = Rf.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = zE(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = Rf.exec(i);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), c = 0; c < o.length; c++) {
    var f = o[c];
    i = i.replace(new RegExp(f, "g"), e[f]);
  }
  return i;
}
var BE = function (i) {
    if (typeof i != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof i + "`"
      );
    try {
      return (i = i.replace(/\+/g, " ")), decodeURIComponent(i);
    } catch {
      return HE(i);
    }
  },
  KE = (i, e) => {
    if (!(typeof i == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)];
  },
  kE = function (i, e) {
    for (
      var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0;
      c < s.length;
      c++
    ) {
      var f = s[c],
        d = i[f];
      (o ? e.indexOf(f) !== -1 : e(f, d, i)) && (t[f] = d);
    }
    return t;
  };
(function (i) {
  const e = FE,
    t = BE,
    s = KE,
    o = kE,
    c = ($) => $ == null,
    f = Symbol("encodeFragmentIdentifier");
  function d($) {
    switch ($.arrayFormat) {
      case "index":
        return (M) => (I, C) => {
          const A = I.length;
          return C === void 0 ||
            ($.skipNull && C === null) ||
            ($.skipEmptyString && C === "")
            ? I
            : C === null
            ? [...I, [v(M, $), "[", A, "]"].join("")]
            : [...I, [v(M, $), "[", v(A, $), "]=", v(C, $)].join("")];
        };
      case "bracket":
        return (M) => (I, C) =>
          C === void 0 ||
          ($.skipNull && C === null) ||
          ($.skipEmptyString && C === "")
            ? I
            : C === null
            ? [...I, [v(M, $), "[]"].join("")]
            : [...I, [v(M, $), "[]=", v(C, $)].join("")];
      case "colon-list-separator":
        return (M) => (I, C) =>
          C === void 0 ||
          ($.skipNull && C === null) ||
          ($.skipEmptyString && C === "")
            ? I
            : C === null
            ? [...I, [v(M, $), ":list="].join("")]
            : [...I, [v(M, $), ":list=", v(C, $)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const M = $.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (I) => (C, A) =>
          A === void 0 ||
          ($.skipNull && A === null) ||
          ($.skipEmptyString && A === "")
            ? C
            : ((A = A === null ? "" : A),
              C.length === 0
                ? [[v(I, $), M, v(A, $)].join("")]
                : [[C, v(A, $)].join($.arrayFormatSeparator)]);
      }
      default:
        return (M) => (I, C) =>
          C === void 0 ||
          ($.skipNull && C === null) ||
          ($.skipEmptyString && C === "")
            ? I
            : C === null
            ? [...I, v(M, $)]
            : [...I, [v(M, $), "=", v(C, $)].join("")];
    }
  }
  function p($) {
    let M;
    switch ($.arrayFormat) {
      case "index":
        return (I, C, A) => {
          if (
            ((M = /\[(\d*)\]$/.exec(I)), (I = I.replace(/\[\d*\]$/, "")), !M)
          ) {
            A[I] = C;
            return;
          }
          A[I] === void 0 && (A[I] = {}), (A[I][M[1]] = C);
        };
      case "bracket":
        return (I, C, A) => {
          if (((M = /(\[\])$/.exec(I)), (I = I.replace(/\[\]$/, "")), !M)) {
            A[I] = C;
            return;
          }
          if (A[I] === void 0) {
            A[I] = [C];
            return;
          }
          A[I] = [].concat(A[I], C);
        };
      case "colon-list-separator":
        return (I, C, A) => {
          if (((M = /(:list)$/.exec(I)), (I = I.replace(/:list$/, "")), !M)) {
            A[I] = C;
            return;
          }
          if (A[I] === void 0) {
            A[I] = [C];
            return;
          }
          A[I] = [].concat(A[I], C);
        };
      case "comma":
      case "separator":
        return (I, C, A) => {
          const h = typeof C == "string" && C.includes($.arrayFormatSeparator),
            b =
              typeof C == "string" &&
              !h &&
              _(C, $).includes($.arrayFormatSeparator);
          C = b ? _(C, $) : C;
          const ee =
            h || b
              ? C.split($.arrayFormatSeparator).map((ne) => _(ne, $))
              : C === null
              ? C
              : _(C, $);
          A[I] = ee;
        };
      case "bracket-separator":
        return (I, C, A) => {
          const h = /(\[\])$/.test(I);
          if (((I = I.replace(/\[\]$/, "")), !h)) {
            A[I] = C && _(C, $);
            return;
          }
          const b =
            C === null
              ? []
              : C.split($.arrayFormatSeparator).map((ee) => _(ee, $));
          if (A[I] === void 0) {
            A[I] = b;
            return;
          }
          A[I] = [].concat(A[I], b);
        };
      default:
        return (I, C, A) => {
          if (A[I] === void 0) {
            A[I] = C;
            return;
          }
          A[I] = [].concat(A[I], C);
        };
    }
  }
  function g($) {
    if (typeof $ != "string" || $.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function v($, M) {
    return M.encode ? (M.strict ? e($) : encodeURIComponent($)) : $;
  }
  function _($, M) {
    return M.decode ? t($) : $;
  }
  function O($) {
    return Array.isArray($)
      ? $.sort()
      : typeof $ == "object"
      ? O(Object.keys($))
          .sort((M, I) => Number(M) - Number(I))
          .map((M) => $[M])
      : $;
  }
  function P($) {
    const M = $.indexOf("#");
    return M !== -1 && ($ = $.slice(0, M)), $;
  }
  function S($) {
    let M = "";
    const I = $.indexOf("#");
    return I !== -1 && (M = $.slice(I)), M;
  }
  function K($) {
    $ = P($);
    const M = $.indexOf("?");
    return M === -1 ? "" : $.slice(M + 1);
  }
  function B($, M) {
    return (
      M.parseNumbers &&
      !Number.isNaN(Number($)) &&
      typeof $ == "string" &&
      $.trim() !== ""
        ? ($ = Number($))
        : M.parseBooleans &&
          $ !== null &&
          ($.toLowerCase() === "true" || $.toLowerCase() === "false") &&
          ($ = $.toLowerCase() === "true"),
      $
    );
  }
  function Z($, M) {
    (M = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      M
    )),
      g(M.arrayFormatSeparator);
    const I = p(M),
      C = Object.create(null);
    if (typeof $ != "string" || (($ = $.trim().replace(/^[?#&]/, "")), !$))
      return C;
    for (const A of $.split("&")) {
      if (A === "") continue;
      let [h, b] = s(M.decode ? A.replace(/\+/g, " ") : A, "=");
      (b =
        b === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(M.arrayFormat)
          ? b
          : _(b, M)),
        I(_(h, M), b, C);
    }
    for (const A of Object.keys(C)) {
      const h = C[A];
      if (typeof h == "object" && h !== null)
        for (const b of Object.keys(h)) h[b] = B(h[b], M);
      else C[A] = B(h, M);
    }
    return M.sort === !1
      ? C
      : (M.sort === !0
          ? Object.keys(C).sort()
          : Object.keys(C).sort(M.sort)
        ).reduce((A, h) => {
          const b = C[h];
          return (
            b && typeof b == "object" && !Array.isArray(b)
              ? (A[h] = O(b))
              : (A[h] = b),
            A
          );
        }, Object.create(null));
  }
  (i.extract = K),
    (i.parse = Z),
    (i.stringify = ($, M) => {
      if (!$) return "";
      (M = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        M
      )),
        g(M.arrayFormatSeparator);
      const I = (b) =>
          (M.skipNull && c($[b])) || (M.skipEmptyString && $[b] === ""),
        C = d(M),
        A = {};
      for (const b of Object.keys($)) I(b) || (A[b] = $[b]);
      const h = Object.keys(A);
      return (
        M.sort !== !1 && h.sort(M.sort),
        h
          .map((b) => {
            const ee = $[b];
            return ee === void 0
              ? ""
              : ee === null
              ? v(b, M)
              : Array.isArray(ee)
              ? ee.length === 0 && M.arrayFormat === "bracket-separator"
                ? v(b, M) + "[]"
                : ee.reduce(C(b), []).join("&")
              : v(b, M) + "=" + v(ee, M);
          })
          .filter((b) => b.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = ($, M) => {
      M = Object.assign({ decode: !0 }, M);
      const [I, C] = s($, "#");
      return Object.assign(
        { url: I.split("?")[0] || "", query: Z(K($), M) },
        M && M.parseFragmentIdentifier && C
          ? { fragmentIdentifier: _(C, M) }
          : {}
      );
    }),
    (i.stringifyUrl = ($, M) => {
      M = Object.assign({ encode: !0, strict: !0, [f]: !0 }, M);
      const I = P($.url).split("?")[0] || "",
        C = i.extract($.url),
        A = i.parse(C, { sort: !1 }),
        h = Object.assign(A, $.query);
      let b = i.stringify(h, M);
      b && (b = `?${b}`);
      let ee = S($.url);
      return (
        $.fragmentIdentifier &&
          (ee = `#${M[f] ? v($.fragmentIdentifier, M) : $.fragmentIdentifier}`),
        `${I}${b}${ee}`
      );
    }),
    (i.pick = ($, M, I) => {
      I = Object.assign({ parseFragmentIdentifier: !0, [f]: !1 }, I);
      const { url: C, query: A, fragmentIdentifier: h } = i.parseUrl($, I);
      return i.stringifyUrl(
        { url: C, query: o(A, M), fragmentIdentifier: h },
        I
      );
    }),
    (i.exclude = ($, M, I) => {
      const C = Array.isArray(M) ? (A) => !M.includes(A) : (A, h) => !M(A, h);
      return i.pick($, C, I);
    });
})(Os);
const VE = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
    },
  },
  WE = ":";
function GE(i) {
  const [e, t] = i.split(WE);
  return { namespace: e, reference: t };
}
function YE(i, e = []) {
  const t = [];
  return (
    Object.keys(i).forEach((s) => {
      if (e.length && !e.includes(s)) return;
      const o = i[s];
      t.push(...o.accounts);
    }),
    t
  );
}
function Sp(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
const Ip = "base10",
  ur = "base16",
  Pu = "base64pad",
  Ju = "utf8",
  xp = 0,
  ln = 1,
  JE = 0,
  Nf = 1,
  Cu = 12,
  Qu = 32;
function QE() {
  const i = ku.generateKeyPair();
  return { privateKey: hr(i.secretKey, ur), publicKey: hr(i.publicKey, ur) };
}
function Au() {
  const i = Kn.randomBytes(Qu);
  return hr(i, ur);
}
function XE(i, e) {
  const t = ku.sharedKey(wr(i, ur), wr(e, ur), !0),
    s = new L1(ya.SHA256, t).expand(Qu);
  return hr(s, ur);
}
function ZE(i) {
  const e = ya.hash(wr(i, ur));
  return hr(e, ur);
}
function Hn(i) {
  const e = ya.hash(wr(i, Ju));
  return hr(e, ur);
}
function eD(i) {
  return wr(`${i}`, Ip);
}
function Ls(i) {
  return Number(hr(i, Ip));
}
function tD(i) {
  const e = eD(typeof i.type < "u" ? i.type : xp);
  if (Ls(e) === ln && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? wr(i.senderPublicKey, ur) : void 0,
    s = typeof i.iv < "u" ? wr(i.iv, ur) : Kn.randomBytes(Cu),
    o = new Bu.ChaCha20Poly1305(wr(i.symKey, ur)).seal(s, wr(i.message, Ju));
  return iD({ type: e, sealed: o, iv: s, senderPublicKey: t });
}
function rD(i) {
  const e = new Bu.ChaCha20Poly1305(wr(i.symKey, ur)),
    { sealed: t, iv: s } = sa(i.encoded),
    o = e.open(s, t);
  if (o === null) throw new Error("Failed to decrypt");
  return hr(o, Ju);
}
function iD(i) {
  if (Ls(i.type) === ln) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return hr(Du([i.type, i.senderPublicKey, i.iv, i.sealed]), Pu);
  }
  return hr(Du([i.type, i.iv, i.sealed]), Pu);
}
function sa(i) {
  const e = wr(i, Pu),
    t = e.slice(JE, Nf),
    s = Nf;
  if (Ls(t) === ln) {
    const d = s + Qu,
      p = d + Cu,
      g = e.slice(s, d),
      v = e.slice(d, p),
      _ = e.slice(p);
    return { type: t, sealed: _, iv: v, senderPublicKey: g };
  }
  const o = s + Cu,
    c = e.slice(s, o),
    f = e.slice(o);
  return { type: t, sealed: f, iv: c };
}
function nD(i, e) {
  const t = sa(i);
  return Op({
    type: Ls(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? hr(t.senderPublicKey, ur) : void 0,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  });
}
function Op(i) {
  const e = (i == null ? void 0 : i.type) || xp;
  if (e === ln) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: i == null ? void 0 : i.senderPublicKey,
    receiverPublicKey: i == null ? void 0 : i.receiverPublicKey,
  };
}
function $f(i) {
  return (
    i.type === ln &&
    typeof i.senderPublicKey == "string" &&
    typeof i.receiverPublicKey == "string"
  );
}
var sD = Object.defineProperty,
  Lf = Object.getOwnPropertySymbols,
  oD = Object.prototype.hasOwnProperty,
  aD = Object.prototype.propertyIsEnumerable,
  Uf = (i, e, t) =>
    e in i
      ? sD(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Mf = (i, e) => {
    for (var t in e || (e = {})) oD.call(e, t) && Uf(i, t, e[t]);
    if (Lf) for (var t of Lf(e)) aD.call(e, t) && Uf(i, t, e[t]);
    return i;
  };
const cD = "ReactNative",
  Cr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  uD = "js";
function Xu() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Vn() {
  return !Wu() && !!Gu() && navigator.product === cD;
}
function Wn() {
  return !Xu() && !!Gu() && !!Wu();
}
function Us() {
  return Vn()
    ? Cr.reactNative
    : Xu()
    ? Cr.node
    : Wn()
    ? Cr.browser
    : Cr.unknown;
}
function hD() {
  var i;
  try {
    return Vn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (i = global.Application) == null
        ? void 0
        : i.applicationId
      : void 0;
  } catch {
    return;
  }
}
function lD(i, e) {
  let t = Os.parse(i);
  return (t = Mf(Mf({}, t), e)), (i = Os.stringify(t)), i;
}
function fD() {
  return Ep() || { name: "", description: "", url: "", icons: [""] };
}
function dD() {
  if (
    Us() === Cr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: t, Version: s } = global.Platform;
    return [t, s].join("-");
  }
  const i = Jb();
  if (i === null) return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser"
    ? [e, i.name, i.version].join("-")
    : [e, i.version].join("-");
}
function pD() {
  var i;
  const e = Us();
  return e === Cr.browser
    ? [e, ((i = bp()) == null ? void 0 : i.host) || "unknown"].join(":")
    : e;
}
function gD(i, e, t) {
  const s = dD(),
    o = pD();
  return [[i, e].join("-"), [uD, t].join("-"), s, o].join("/");
}
function yD({
  protocol: i,
  version: e,
  relayUrl: t,
  sdkVersion: s,
  auth: o,
  projectId: c,
  useOnCloseEvent: f,
  bundleId: d,
}) {
  const p = t.split("?"),
    g = gD(i, e, s),
    v = {
      auth: o,
      ua: g,
      projectId: c,
      useOnCloseEvent: f || void 0,
      origin: d || void 0,
    },
    _ = lD(p[1] || "", v);
  return p[0] + "?" + _;
}
function cn(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function Pp(i) {
  return Object.fromEntries(i.entries());
}
function Cp(i) {
  return new Map(Object.entries(i));
}
function qn(i = ve.FIVE_MINUTES, e) {
  const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
  let s, o, c;
  return {
    resolve: (f) => {
      c && s && (clearTimeout(c), s(f));
    },
    reject: (f) => {
      c && o && (clearTimeout(c), o(f));
    },
    done: () =>
      new Promise((f, d) => {
        (c = setTimeout(() => {
          d(new Error(e));
        }, t)),
          (s = f),
          (o = d);
      }),
  };
}
function Ps(i, e, t) {
  return new Promise(async (s, o) => {
    const c = setTimeout(() => o(new Error(t)), e);
    try {
      const f = await i;
      s(f);
    } catch (f) {
      o(f);
    }
    clearTimeout(c);
  });
}
function Ap(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`)) return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function vD(i) {
  return Ap("topic", i);
}
function mD(i) {
  return Ap("id", i);
}
function Tp(i) {
  const [e, t] = i.split(":"),
    s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) s.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return s;
}
function Pr(i, e) {
  return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i));
}
function qi(i) {
  return Date.now() >= ve.toMiliseconds(i);
}
function $t(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
function tu(i = [], e = []) {
  return [...new Set([...i, ...e])];
}
async function wD({ id: i, topic: e, wcDeepLink: t }) {
  try {
    if (!t) return;
    const s = typeof t == "string" ? JSON.parse(t) : t;
    let o = s == null ? void 0 : s.href;
    if (typeof o != "string") return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`,
      f = Us();
    f === Cr.browser
      ? c.startsWith("https://")
        ? window.open(c, "_blank", "noreferrer noopener")
        : window.open(c, "_self", "noreferrer noopener")
      : f === Cr.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(c));
  } catch (s) {
    console.error(s);
  }
}
async function _D(i, e) {
  try {
    return (await i.getItem(e)) || (Wn() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const bD = "irn";
function Tu(i) {
  return (i == null ? void 0 : i.relay) || { protocol: bD };
}
function ea(i) {
  const e = VE[i];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var ED = Object.defineProperty,
  DD = Object.defineProperties,
  SD = Object.getOwnPropertyDescriptors,
  jf = Object.getOwnPropertySymbols,
  ID = Object.prototype.hasOwnProperty,
  xD = Object.prototype.propertyIsEnumerable,
  qf = (i, e, t) =>
    e in i
      ? ED(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  OD = (i, e) => {
    for (var t in e || (e = {})) ID.call(e, t) && qf(i, t, e[t]);
    if (jf) for (var t of jf(e)) xD.call(e, t) && qf(i, t, e[t]);
    return i;
  },
  PD = (i, e) => DD(i, SD(e));
function CD(i, e = "-") {
  const t = {},
    s = "relay" + e;
  return (
    Object.keys(i).forEach((o) => {
      if (o.startsWith(s)) {
        const c = o.replace(s, ""),
          f = i[o];
        t[c] = f;
      }
    }),
    t
  );
}
function Ff(i) {
  (i = i.includes("wc://") ? i.replace("wc://", "") : i),
    (i = i.includes("wc:") ? i.replace("wc:", "") : i);
  const e = i.indexOf(":"),
    t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0,
    s = i.substring(0, e),
    o = i.substring(e + 1, t).split("@"),
    c = typeof t < "u" ? i.substring(t) : "",
    f = Os.parse(c);
  return {
    protocol: s,
    topic: AD(o[0]),
    version: parseInt(o[1], 10),
    symKey: f.symKey,
    relay: CD(f),
    expiryTimestamp: f.expiryTimestamp
      ? parseInt(f.expiryTimestamp, 10)
      : void 0,
  };
}
function AD(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function TD(i, e = "-") {
  const t = "relay",
    s = {};
  return (
    Object.keys(i).forEach((o) => {
      const c = t + e + o;
      i[o] && (s[c] = i[o]);
    }),
    s
  );
}
function RD(i) {
  return (
    `${i.protocol}:${i.topic}@${i.version}?` +
    Os.stringify(
      PD(OD({ symKey: i.symKey }, TD(i.relay)), {
        expiryTimestamp: i.expiryTimestamp,
      })
    )
  );
}
function Gn(i) {
  const e = [];
  return (
    i.forEach((t) => {
      const [s, o] = t.split(":");
      e.push(`${s}:${o}`);
    }),
    e
  );
}
function ND(i) {
  const e = [];
  return (
    Object.values(i).forEach((t) => {
      e.push(...Gn(t.accounts));
    }),
    e
  );
}
function $D(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.methods);
    }),
    t
  );
}
function LD(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Gn(s.accounts).includes(e) && t.push(...s.events);
    }),
    t
  );
}
function Zu(i) {
  return i.includes(":");
}
function Es(i) {
  return Zu(i) ? i.split(":")[0] : i;
}
const UD = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  MD = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function ae(i, e) {
  const { message: t, code: s } = MD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function wt(i, e) {
  const { message: t, code: s } = UD[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function oi(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
function Cs(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function cr(i) {
  return typeof i > "u";
}
function Wt(i, e) {
  return e && cr(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function eh(i, e) {
  return e && cr(i) ? !0 : typeof i == "number" && !isNaN(i);
}
function jD(i, e) {
  const { requiredNamespaces: t } = e,
    s = Object.keys(i.namespaces),
    o = Object.keys(t);
  let c = !0;
  return cn(o, s)
    ? (s.forEach((f) => {
        const { accounts: d, methods: p, events: g } = i.namespaces[f],
          v = Gn(d),
          _ = t[f];
        (!cn(Sp(f, _), v) || !cn(_.methods, p) || !cn(_.events, g)) && (c = !1);
      }),
      c)
    : !1;
}
function oa(i) {
  return Wt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function qD(i) {
  if (Wt(i, !1) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && oa(t);
    }
  }
  return !1;
}
function FD(i) {
  if (Wt(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function zD(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function HD(i) {
  return i == null ? void 0 : i.topic;
}
function BD(i, e) {
  let t = null;
  return (
    Wt(i == null ? void 0 : i.publicKey, !1) ||
      (t = ae(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function zf(i) {
  let e = !0;
  return oi(i) ? i.length && (e = i.every((t) => Wt(t, !1))) : (e = !1), e;
}
function KD(i, e, t) {
  let s = null;
  return (
    oi(e) && e.length
      ? e.forEach((o) => {
          s ||
            oa(o) ||
            (s = wt(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : oa(i) ||
        (s = wt(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    s
  );
}
function kD(i, e, t) {
  let s = null;
  return (
    Object.entries(i).forEach(([o, c]) => {
      if (s) return;
      const f = KD(o, Sp(o, c), `${e} ${t}`);
      f && (s = f);
    }),
    s
  );
}
function VD(i, e) {
  let t = null;
  return (
    oi(i)
      ? i.forEach((s) => {
          t ||
            qD(s) ||
            (t = wt(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = wt(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function WD(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = VD(s == null ? void 0 : s.accounts, `${e} namespace`);
      o && (t = o);
    }),
    t
  );
}
function GD(i, e) {
  let t = null;
  return (
    zf(i == null ? void 0 : i.methods)
      ? zf(i == null ? void 0 : i.events) ||
        (t = wt(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = wt(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function Rp(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = GD(s, `${e}, namespace`);
      o && (t = o);
    }),
    t
  );
}
function YD(i, e, t) {
  let s = null;
  if (i && Cs(i)) {
    const o = Rp(i, e);
    o && (s = o);
    const c = kD(i, e, t);
    c && (s = c);
  } else
    s = ae("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function ru(i, e) {
  let t = null;
  if (i && Cs(i)) {
    const s = Rp(i, e);
    s && (t = s);
    const o = WD(i, e);
    o && (t = o);
  } else
    t = ae(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function Np(i) {
  return Wt(i.protocol, !0);
}
function JD(i, e) {
  let t = !1;
  return (
    e && !i
      ? (t = !0)
      : i &&
        oi(i) &&
        i.length &&
        i.forEach((s) => {
          t = Np(s);
        }),
    t
  );
}
function QD(i) {
  return typeof i == "number";
}
function mr(i) {
  return typeof i < "u" && typeof i !== null;
}
function XD(i) {
  return !(
    !i ||
    typeof i != "object" ||
    !i.code ||
    !eh(i.code, !1) ||
    !i.message ||
    !Wt(i.message, !1)
  );
}
function ZD(i) {
  return !(cr(i) || !Wt(i.method, !1));
}
function e3(i) {
  return !(
    cr(i) ||
    (cr(i.result) && cr(i.error)) ||
    !eh(i.id, !1) ||
    !Wt(i.jsonrpc, !1)
  );
}
function t3(i) {
  return !(cr(i) || !Wt(i.name, !1));
}
function Hf(i, e) {
  return !(!oa(e) || !ND(i).includes(e));
}
function r3(i, e, t) {
  return Wt(t, !1) ? $D(i, e).includes(t) : !1;
}
function i3(i, e, t) {
  return Wt(t, !1) ? LD(i, e).includes(t) : !1;
}
function Bf(i, e, t) {
  let s = null;
  const o = n3(i),
    c = s3(e),
    f = Object.keys(o),
    d = Object.keys(c),
    p = Kf(Object.keys(i)),
    g = Kf(Object.keys(e)),
    v = p.filter((_) => !g.includes(_));
  return (
    v.length &&
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${v.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    cn(f, d) ||
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${d.toString()}`
      )),
    Object.keys(e).forEach((_) => {
      if (!_.includes(":") || s) return;
      const O = Gn(e[_].accounts);
      O.includes(_) ||
        (s = ae(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${_}
        Required: ${_}
        Approved: ${O.toString()}`
        ));
    }),
    f.forEach((_) => {
      s ||
        (cn(o[_].methods, c[_].methods)
          ? cn(o[_].events, c[_].events) ||
            (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${_}`
            ))
          : (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${_}`
            )));
    }),
    s
  );
}
function n3(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      var s;
      t.includes(":")
        ? (e[t] = i[t])
        : (s = i[t].chains) == null ||
          s.forEach((o) => {
            e[o] = { methods: i[t].methods, events: i[t].events };
          });
    }),
    e
  );
}
function Kf(i) {
  return [...new Set(i.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function s3(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      if (t.includes(":")) e[t] = i[t];
      else {
        const s = Gn(i[t].accounts);
        s == null ||
          s.forEach((o) => {
            e[o] = {
              accounts: i[t].accounts.filter((c) => c.includes(`${o}:`)),
              methods: i[t].methods,
              events: i[t].events,
            };
          });
      }
    }),
    e
  );
}
function o3(i, e) {
  return eh(i, !1) && i <= e.max && i >= e.min;
}
function kf() {
  const i = Us();
  return new Promise((e) => {
    switch (i) {
      case Cr.browser:
        e(a3());
        break;
      case Cr.reactNative:
        e(c3());
        break;
      case Cr.node:
        e(u3());
        break;
      default:
        e(!0);
    }
  });
}
function a3() {
  return Wn() && (navigator == null ? void 0 : navigator.onLine);
}
async function c3() {
  if (Vn() && typeof global < "u" && global != null && global.NetInfo) {
    const i = await (global == null ? void 0 : global.NetInfo.fetch());
    return i == null ? void 0 : i.isConnected;
  }
  return !0;
}
function u3() {
  return !0;
}
function h3(i) {
  switch (Us()) {
    case Cr.browser:
      l3(i);
      break;
    case Cr.reactNative:
      f3(i);
      break;
  }
}
function l3(i) {
  !Vn() &&
    Wn() &&
    (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)));
}
function f3(i) {
  Vn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((e) =>
        i(e == null ? void 0 : e.isConnected)
      ));
}
const iu = {};
let Vo = class {
  static get(e) {
    return iu[e];
  }
  static set(e, t) {
    iu[e] = t;
  }
  static delete(e) {
    delete iu[e];
  }
};
const d3 =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  p3 =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  g3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function y3(i, e) {
  if (
    i === "__proto__" ||
    (i === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    v3(i);
    return;
  }
  return e;
}
function v3(i) {
  console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
}
function Wo(i, e = {}) {
  if (typeof i != "string") return i;
  const t = i.trim();
  if (i[0] === '"' && i.endsWith('"') && !i.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!g3.test(i)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return i;
  }
  try {
    if (d3.test(i) || p3.test(i)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(i, y3);
    }
    return JSON.parse(i);
  } catch (s) {
    if (e.strict) throw s;
    return i;
  }
}
function m3(i) {
  return !i || typeof i.then != "function" ? Promise.resolve(i) : i;
}
function Vt(i, ...e) {
  try {
    return m3(i(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function w3(i) {
  const e = typeof i;
  return i === null || (e !== "object" && e !== "function");
}
function _3(i) {
  const e = Object.getPrototypeOf(i);
  return !e || e.isPrototypeOf(Object);
}
function ta(i) {
  if (w3(i)) return String(i);
  if (_3(i) || Array.isArray(i)) return JSON.stringify(i);
  if (typeof i.toJSON == "function") return ta(i.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function $p() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Ru = "base64:";
function b3(i) {
  if (typeof i == "string") return i;
  $p();
  const e = Buffer.from(i).toString("base64");
  return Ru + e;
}
function E3(i) {
  return typeof i != "string" || !i.startsWith(Ru)
    ? i
    : ($p(), Buffer.from(i.slice(Ru.length), "base64"));
}
function vr(i) {
  return i
    ? i
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function D3(...i) {
  return vr(i.join(":"));
}
function Go(i) {
  return (i = vr(i)), i ? i + ":" : "";
}
const S3 = "memory",
  I3 = () => {
    const i = new Map();
    return {
      name: S3,
      options: {},
      hasItem(e) {
        return i.has(e);
      },
      getItem(e) {
        return i.get(e) ?? null;
      },
      getItemRaw(e) {
        return i.get(e) ?? null;
      },
      setItem(e, t) {
        i.set(e, t);
      },
      setItemRaw(e, t) {
        i.set(e, t);
      },
      removeItem(e) {
        i.delete(e);
      },
      getKeys() {
        return Array.from(i.keys());
      },
      clear() {
        i.clear();
      },
      dispose() {
        i.clear();
      },
    };
  };
function x3(i = {}) {
  const e = {
      mounts: { "": i.driver || I3() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (g) => {
      for (const v of e.mountpoints)
        if (g.startsWith(v))
          return {
            base: v,
            relativeKey: g.slice(v.length),
            driver: e.mounts[v],
          };
      return { base: "", relativeKey: g, driver: e.mounts[""] };
    },
    s = (g, v) =>
      e.mountpoints
        .filter((_) => _.startsWith(g) || (v && g.startsWith(_)))
        .map((_) => ({
          relativeBase: g.length > _.length ? g.slice(_.length) : void 0,
          mountpoint: _,
          driver: e.mounts[_],
        })),
    o = (g, v) => {
      if (e.watching) {
        v = vr(v);
        for (const _ of e.watchListeners) _(g, v);
      }
    },
    c = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const g in e.mounts) e.unwatch[g] = await Vf(e.mounts[g], o, g);
      }
    },
    f = async () => {
      if (e.watching) {
        for (const g in e.unwatch) await e.unwatch[g]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    d = (g, v, _) => {
      const O = new Map(),
        P = (S) => {
          let K = O.get(S.base);
          return (
            K ||
              ((K = { driver: S.driver, base: S.base, items: [] }),
              O.set(S.base, K)),
            K
          );
        };
      for (const S of g) {
        const K = typeof S == "string",
          B = vr(K ? S : S.key),
          Z = K ? void 0 : S.value,
          $ = K || !S.options ? v : { ...v, ...S.options },
          M = t(B);
        P(M).items.push({
          key: B,
          value: Z,
          relativeKey: M.relativeKey,
          options: $,
        });
      }
      return Promise.all([...O.values()].map((S) => _(S))).then((S) =>
        S.flat()
      );
    },
    p = {
      hasItem(g, v = {}) {
        g = vr(g);
        const { relativeKey: _, driver: O } = t(g);
        return Vt(O.hasItem, _, v);
      },
      getItem(g, v = {}) {
        g = vr(g);
        const { relativeKey: _, driver: O } = t(g);
        return Vt(O.getItem, _, v).then((P) => Wo(P));
      },
      getItems(g, v) {
        return d(g, v, (_) =>
          _.driver.getItems
            ? Vt(
                _.driver.getItems,
                _.items.map((O) => ({
                  key: O.relativeKey,
                  options: O.options,
                })),
                v
              ).then((O) =>
                O.map((P) => ({ key: D3(_.base, P.key), value: Wo(P.value) }))
              )
            : Promise.all(
                _.items.map((O) =>
                  Vt(_.driver.getItem, O.relativeKey, O.options).then((P) => ({
                    key: O.key,
                    value: Wo(P),
                  }))
                )
              )
        );
      },
      getItemRaw(g, v = {}) {
        g = vr(g);
        const { relativeKey: _, driver: O } = t(g);
        return O.getItemRaw
          ? Vt(O.getItemRaw, _, v)
          : Vt(O.getItem, _, v).then((P) => E3(P));
      },
      async setItem(g, v, _ = {}) {
        if (v === void 0) return p.removeItem(g);
        g = vr(g);
        const { relativeKey: O, driver: P } = t(g);
        P.setItem &&
          (await Vt(P.setItem, O, ta(v), _), P.watch || o("update", g));
      },
      async setItems(g, v) {
        await d(g, v, async (_) => {
          if (_.driver.setItems)
            return Vt(
              _.driver.setItems,
              _.items.map((O) => ({
                key: O.relativeKey,
                value: ta(O.value),
                options: O.options,
              })),
              v
            );
          _.driver.setItem &&
            (await Promise.all(
              _.items.map((O) =>
                Vt(_.driver.setItem, O.relativeKey, ta(O.value), O.options)
              )
            ));
        });
      },
      async setItemRaw(g, v, _ = {}) {
        if (v === void 0) return p.removeItem(g, _);
        g = vr(g);
        const { relativeKey: O, driver: P } = t(g);
        if (P.setItemRaw) await Vt(P.setItemRaw, O, v, _);
        else if (P.setItem) await Vt(P.setItem, O, b3(v), _);
        else return;
        P.watch || o("update", g);
      },
      async removeItem(g, v = {}) {
        typeof v == "boolean" && (v = { removeMeta: v }), (g = vr(g));
        const { relativeKey: _, driver: O } = t(g);
        O.removeItem &&
          (await Vt(O.removeItem, _, v),
          (v.removeMeta || v.removeMata) &&
            (await Vt(O.removeItem, _ + "$", v)),
          O.watch || o("remove", g));
      },
      async getMeta(g, v = {}) {
        typeof v == "boolean" && (v = { nativeOnly: v }), (g = vr(g));
        const { relativeKey: _, driver: O } = t(g),
          P = Object.create(null);
        if (
          (O.getMeta && Object.assign(P, await Vt(O.getMeta, _, v)),
          !v.nativeOnly)
        ) {
          const S = await Vt(O.getItem, _ + "$", v).then((K) => Wo(K));
          S &&
            typeof S == "object" &&
            (typeof S.atime == "string" && (S.atime = new Date(S.atime)),
            typeof S.mtime == "string" && (S.mtime = new Date(S.mtime)),
            Object.assign(P, S));
        }
        return P;
      },
      setMeta(g, v, _ = {}) {
        return this.setItem(g + "$", v, _);
      },
      removeMeta(g, v = {}) {
        return this.removeItem(g + "$", v);
      },
      async getKeys(g, v = {}) {
        g = Go(g);
        const _ = s(g, !0);
        let O = [];
        const P = [];
        for (const S of _) {
          const B = (await Vt(S.driver.getKeys, S.relativeBase, v))
            .map((Z) => S.mountpoint + vr(Z))
            .filter((Z) => !O.some(($) => Z.startsWith($)));
          P.push(...B),
            (O = [
              S.mountpoint,
              ...O.filter((Z) => !Z.startsWith(S.mountpoint)),
            ]);
        }
        return g
          ? P.filter((S) => S.startsWith(g) && !S.endsWith("$"))
          : P.filter((S) => !S.endsWith("$"));
      },
      async clear(g, v = {}) {
        (g = Go(g)),
          await Promise.all(
            s(g, !1).map(async (_) => {
              if (_.driver.clear) return Vt(_.driver.clear, _.relativeBase, v);
              if (_.driver.removeItem) {
                const O = await _.driver.getKeys(_.relativeBase || "", v);
                return Promise.all(O.map((P) => _.driver.removeItem(P, v)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((g) => Wf(g)));
      },
      async watch(g) {
        return (
          await c(),
          e.watchListeners.push(g),
          async () => {
            (e.watchListeners = e.watchListeners.filter((v) => v !== g)),
              e.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await f();
      },
      mount(g, v) {
        if (((g = Go(g)), g && e.mounts[g]))
          throw new Error(`already mounted at ${g}`);
        return (
          g &&
            (e.mountpoints.push(g),
            e.mountpoints.sort((_, O) => O.length - _.length)),
          (e.mounts[g] = v),
          e.watching &&
            Promise.resolve(Vf(v, o, g))
              .then((_) => {
                e.unwatch[g] = _;
              })
              .catch(console.error),
          p
        );
      },
      async unmount(g, v = !0) {
        (g = Go(g)),
          !(!g || !e.mounts[g]) &&
            (e.watching &&
              g in e.unwatch &&
              (e.unwatch[g](), delete e.unwatch[g]),
            v && (await Wf(e.mounts[g])),
            (e.mountpoints = e.mountpoints.filter((_) => _ !== g)),
            delete e.mounts[g]);
      },
      getMount(g = "") {
        g = vr(g) + ":";
        const v = t(g);
        return { driver: v.driver, base: v.base };
      },
      getMounts(g = "", v = {}) {
        return (
          (g = vr(g)),
          s(g, v.parents).map((O) => ({ driver: O.driver, base: O.mountpoint }))
        );
      },
    };
  return p;
}
function Vf(i, e, t) {
  return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {};
}
async function Wf(i) {
  typeof i.dispose == "function" && (await Vt(i.dispose));
}
function fn(i) {
  return new Promise((e, t) => {
    (i.oncomplete = i.onsuccess = () => e(i.result)),
      (i.onabort = i.onerror = () => t(i.error));
  });
}
function Lp(i, e) {
  const t = indexedDB.open(i);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const s = fn(t);
  return (o, c) => s.then((f) => c(f.transaction(e, o).objectStore(e)));
}
let nu;
function Ms() {
  return nu || (nu = Lp("keyval-store", "keyval")), nu;
}
function Gf(i, e = Ms()) {
  return e("readonly", (t) => fn(t.get(i)));
}
function O3(i, e, t = Ms()) {
  return t("readwrite", (s) => (s.put(e, i), fn(s.transaction)));
}
function P3(i, e = Ms()) {
  return e("readwrite", (t) => (t.delete(i), fn(t.transaction)));
}
function C3(i = Ms()) {
  return i("readwrite", (e) => (e.clear(), fn(e.transaction)));
}
function A3(i, e) {
  return (
    (i.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    fn(i.transaction)
  );
}
function T3(i = Ms()) {
  return i("readonly", (e) => {
    if (e.getAllKeys) return fn(e.getAllKeys());
    const t = [];
    return A3(e, (s) => t.push(s.key)).then(() => t);
  });
}
const R3 = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  N3 = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function js(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return N3(i);
  } catch {
    return i;
  }
}
function un(i) {
  return typeof i == "string" ? i : R3(i) || "";
}
const $3 = "idb-keyval";
var L3 = (i = {}) => {
  const e = i.base && i.base.length > 0 ? `${i.base}:` : "",
    t = (o) => e + o;
  let s;
  return (
    i.dbName && i.storeName && (s = Lp(i.dbName, i.storeName)),
    {
      name: $3,
      options: i,
      async hasItem(o) {
        return !(typeof (await Gf(t(o), s)) > "u");
      },
      async getItem(o) {
        return (await Gf(t(o), s)) ?? null;
      },
      setItem(o, c) {
        return O3(t(o), c, s);
      },
      removeItem(o) {
        return P3(t(o), s);
      },
      getKeys() {
        return T3(s);
      },
      clear() {
        return C3(s);
      },
    }
  );
};
const U3 = "WALLET_CONNECT_V2_INDEXED_DB",
  M3 = "keyvaluestorage";
let j3 = class {
  constructor() {
    this.indexedDb = x3({ driver: L3({ dbName: U3, storeName: M3 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, un(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var su =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ra = { exports: {} };
(function () {
  let i;
  function e() {}
  (i = e),
    (i.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (i.prototype.setItem = function (t, s) {
      this[t] = String(s);
    }),
    (i.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (i.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (s) {
        (t[s] = void 0), delete t[s];
      });
    }),
    (i.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    i.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof su < "u" && su.localStorage
      ? (ra.exports = su.localStorage)
      : typeof window < "u" && window.localStorage
      ? (ra.exports = window.localStorage)
      : (ra.exports = new e());
})();
function q3(i) {
  var e;
  return [i[0], js((e = i[1]) != null ? e : "")];
}
class F3 {
  constructor() {
    this.localStorage = ra.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(q3);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return js(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, un(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const z3 = "wc_storage_version",
  Yf = 1,
  H3 = async (i, e, t) => {
    const s = z3,
      o = await e.getItem(s);
    if (o && o >= Yf) {
      t(e);
      return;
    }
    const c = await i.getKeys();
    if (!c.length) {
      t(e);
      return;
    }
    const f = [];
    for (; c.length; ) {
      const d = c.shift();
      if (!d) continue;
      const p = d.toLowerCase();
      if (
        p.includes("wc@") ||
        p.includes("walletconnect") ||
        p.includes("wc_") ||
        p.includes("wallet_connect")
      ) {
        const g = await i.getItem(d);
        await e.setItem(d, g), f.push(d);
      }
    }
    await e.setItem(s, Yf), t(e), B3(i, f);
  },
  B3 = async (i, e) => {
    e.length &&
      e.forEach(async (t) => {
        await i.removeItem(t);
      });
  };
let K3 = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (t) => {
        (this.storage = t), (this.initialized = !0);
      });
    const e = new F3();
    this.storage = e;
    try {
      const t = new j3();
      H3(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.initialized && (clearInterval(t), e());
        }, 20);
      }));
  }
};
var Yn = {},
  vs = {},
  ou = {},
  ms = {};
let dn = class {};
const k3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: dn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  V3 = ha(k3);
var Jf;
function W3() {
  if (Jf) return ms;
  (Jf = 1),
    Object.defineProperty(ms, "__esModule", { value: !0 }),
    (ms.IHeartBeat = void 0);
  const i = V3;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return (ms.IHeartBeat = e), ms;
}
var Qf;
function Up() {
  return (
    Qf ||
      ((Qf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(W3(), i);
      })(ou)),
    ou
  );
}
var au = {},
  an = {},
  Xf;
function G3() {
  if (Xf) return an;
  (Xf = 1),
    Object.defineProperty(an, "__esModule", { value: !0 }),
    (an.HEARTBEAT_EVENTS = an.HEARTBEAT_INTERVAL = void 0);
  const i = ve;
  return (
    (an.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
    (an.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    an
  );
}
var Zf;
function Mp() {
  return (
    Zf ||
      ((Zf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Ii.__exportStar(G3(), i);
      })(au)),
    au
  );
}
var ed;
function Y3() {
  if (ed) return vs;
  (ed = 1),
    Object.defineProperty(vs, "__esModule", { value: !0 }),
    (vs.HeartBeat = void 0);
  const i = Ii,
    e = Ar,
    t = ve,
    s = Up(),
    o = Mp();
  class c extends s.IHeartBeat {
    constructor(d) {
      super(d),
        (this.events = new e.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval =
          (d == null ? void 0 : d.interval) || o.HEARTBEAT_INTERVAL);
    }
    static init(d) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const p = new c(d);
        return yield p.init(), p;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(d, p) {
      this.events.on(d, p);
    }
    once(d, p) {
      this.events.once(d, p);
    }
    off(d, p) {
      this.events.off(d, p);
    }
    removeListener(d, p) {
      this.events.removeListener(d, p);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          t.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (vs.HeartBeat = c), vs;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(Y3(), i), e.__exportStar(Up(), i), e.__exportStar(Mp(), i);
})(Yn);
function J3(i) {
  try {
    return JSON.stringify(i);
  } catch {
    return '"[Circular]"';
  }
}
var Q3 = X3;
function X3(i, e, t) {
  var s = (t && t.stringify) || J3,
    o = 1;
  if (typeof i == "object" && i !== null) {
    var c = e.length + o;
    if (c === 1) return i;
    var f = new Array(c);
    f[0] = s(i);
    for (var d = 1; d < c; d++) f[d] = s(e[d]);
    return f.join(" ");
  }
  if (typeof i != "string") return i;
  var p = e.length;
  if (p === 0) return i;
  for (
    var g = "", v = 1 - o, _ = -1, O = (i && i.length) || 0, P = 0;
    P < O;

  ) {
    if (i.charCodeAt(P) === 37 && P + 1 < O) {
      switch (((_ = _ > -1 ? _ : 0), i.charCodeAt(P + 1))) {
        case 100:
        case 102:
          if (v >= p || e[v] == null) break;
          _ < P && (g += i.slice(_, P)), (g += Number(e[v])), (_ = P + 2), P++;
          break;
        case 105:
          if (v >= p || e[v] == null) break;
          _ < P && (g += i.slice(_, P)),
            (g += Math.floor(Number(e[v]))),
            (_ = P + 2),
            P++;
          break;
        case 79:
        case 111:
        case 106:
          if (v >= p || e[v] === void 0) break;
          _ < P && (g += i.slice(_, P));
          var S = typeof e[v];
          if (S === "string") {
            (g += "'" + e[v] + "'"), (_ = P + 2), P++;
            break;
          }
          if (S === "function") {
            (g += e[v].name || "<anonymous>"), (_ = P + 2), P++;
            break;
          }
          (g += s(e[v])), (_ = P + 2), P++;
          break;
        case 115:
          if (v >= p) break;
          _ < P && (g += i.slice(_, P)), (g += String(e[v])), (_ = P + 2), P++;
          break;
        case 37:
          _ < P && (g += i.slice(_, P)), (g += "%"), (_ = P + 2), P++, v--;
          break;
      }
      ++v;
    }
    ++P;
  }
  return _ === -1 ? i : (_ < O && (g += i.slice(_)), g);
}
const td = Q3;
var Z3 = si;
const As = u6().console || {},
  e6 = {
    mapHttpRequest: Yo,
    mapHttpResponse: Yo,
    wrapRequestSerializer: cu,
    wrapResponseSerializer: cu,
    wrapErrorSerializer: cu,
    req: Yo,
    res: Yo,
    err: s6,
  };
function t6(i, e) {
  return Array.isArray(i)
    ? i.filter(function (s) {
        return s !== "!stdSerializers.err";
      })
    : i === !0
    ? Object.keys(e)
    : !1;
}
function si(i) {
  (i = i || {}), (i.browser = i.browser || {});
  const e = i.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const t = i.browser.write || As;
  i.browser.write && (i.browser.asObject = !0);
  const s = i.serializers || {},
    o = t6(i.browser.serialize, s);
  let c = i.browser.serialize;
  Array.isArray(i.browser.serialize) &&
    i.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (c = !1);
  const f = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof t == "function" &&
    (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
    i.enabled === !1 && (i.level = "silent");
  const d = i.level || "info",
    p = Object.create(t);
  p.log || (p.log = Ts),
    Object.defineProperty(p, "levelVal", { get: v }),
    Object.defineProperty(p, "level", { get: _, set: O });
  const g = {
    transmit: e,
    serialize: o,
    asObject: i.browser.asObject,
    levels: f,
    timestamp: o6(i),
  };
  (p.levels = si.levels),
    (p.level = d),
    (p.setMaxListeners =
      p.getMaxListeners =
      p.emit =
      p.addListener =
      p.on =
      p.prependListener =
      p.once =
      p.prependOnceListener =
      p.removeListener =
      p.removeAllListeners =
      p.listeners =
      p.listenerCount =
      p.eventNames =
      p.write =
      p.flush =
        Ts),
    (p.serializers = s),
    (p._serialize = o),
    (p._stdErrSerialize = c),
    (p.child = P),
    e && (p._logEvent = Nu());
  function v() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function _() {
    return this._level;
  }
  function O(S) {
    if (S !== "silent" && !this.levels.values[S])
      throw Error("unknown level " + S);
    (this._level = S),
      Un(g, p, "error", "log"),
      Un(g, p, "fatal", "error"),
      Un(g, p, "warn", "error"),
      Un(g, p, "info", "log"),
      Un(g, p, "debug", "log"),
      Un(g, p, "trace", "log");
  }
  function P(S, K) {
    if (!S) throw new Error("missing bindings for child Pino");
    (K = K || {}), o && S.serializers && (K.serializers = S.serializers);
    const B = K.serializers;
    if (o && B) {
      var Z = Object.assign({}, s, B),
        $ = i.browser.serialize === !0 ? Object.keys(Z) : o;
      delete S.serializers, ma([S], $, Z, this._stdErrSerialize);
    }
    function M(I) {
      (this._childLevel = (I._childLevel | 0) + 1),
        (this.error = Mn(I, S, "error")),
        (this.fatal = Mn(I, S, "fatal")),
        (this.warn = Mn(I, S, "warn")),
        (this.info = Mn(I, S, "info")),
        (this.debug = Mn(I, S, "debug")),
        (this.trace = Mn(I, S, "trace")),
        Z && ((this.serializers = Z), (this._serialize = $)),
        e && (this._logEvent = Nu([].concat(I._logEvent.bindings, S)));
    }
    return (M.prototype = this), new M(this);
  }
  return p;
}
si.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
si.stdSerializers = e6;
si.stdTimeFunctions = Object.assign(
  {},
  { nullTime: jp, epochTime: qp, unixTime: a6, isoTime: c6 }
);
function Un(i, e, t, s) {
  const o = Object.getPrototypeOf(e);
  (e[t] =
    e.levelVal > e.levels.values[t] ? Ts : o[t] ? o[t] : As[t] || As[s] || Ts),
    r6(i, e, t);
}
function r6(i, e, t) {
  (!i.transmit && e[t] === Ts) ||
    (e[t] = (function (s) {
      return function () {
        const c = i.timestamp(),
          f = new Array(arguments.length),
          d =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === As
              ? As
              : this;
        for (var p = 0; p < f.length; p++) f[p] = arguments[p];
        if (
          (i.serialize &&
            !i.asObject &&
            ma(f, this._serialize, this.serializers, this._stdErrSerialize),
          i.asObject ? s.call(d, i6(this, t, f, c)) : s.apply(d, f),
          i.transmit)
        ) {
          const g = i.transmit.level || e.level,
            v = si.levels.values[g],
            _ = si.levels.values[t];
          if (_ < v) return;
          n6(
            this,
            {
              ts: c,
              methodLevel: t,
              methodValue: _,
              transmitLevel: g,
              transmitValue: si.levels.values[i.transmit.level || e.level],
              send: i.transmit.send,
              val: e.levelVal,
            },
            f
          );
        }
      };
    })(e[t]));
}
function i6(i, e, t, s) {
  i._serialize && ma(t, i._serialize, i.serializers, i._stdErrSerialize);
  const o = t.slice();
  let c = o[0];
  const f = {};
  s && (f.time = s), (f.level = si.levels.values[e]);
  let d = (i._childLevel | 0) + 1;
  if ((d < 1 && (d = 1), c !== null && typeof c == "object")) {
    for (; d-- && typeof o[0] == "object"; ) Object.assign(f, o.shift());
    c = o.length ? td(o.shift(), o) : void 0;
  } else typeof c == "string" && (c = td(o.shift(), o));
  return c !== void 0 && (f.msg = c), f;
}
function ma(i, e, t, s) {
  for (const o in i)
    if (s && i[o] instanceof Error) i[o] = si.stdSerializers.err(i[o]);
    else if (typeof i[o] == "object" && !Array.isArray(i[o]))
      for (const c in i[o])
        e && e.indexOf(c) > -1 && c in t && (i[o][c] = t[c](i[o][c]));
}
function Mn(i, e, t) {
  return function () {
    const s = new Array(1 + arguments.length);
    s[0] = e;
    for (var o = 1; o < s.length; o++) s[o] = arguments[o - 1];
    return i[t].apply(this, s);
  };
}
function n6(i, e, t) {
  const s = e.send,
    o = e.ts,
    c = e.methodLevel,
    f = e.methodValue,
    d = e.val,
    p = i._logEvent.bindings;
  ma(
    t,
    i._serialize || Object.keys(i.serializers),
    i.serializers,
    i._stdErrSerialize === void 0 ? !0 : i._stdErrSerialize
  ),
    (i._logEvent.ts = o),
    (i._logEvent.messages = t.filter(function (g) {
      return p.indexOf(g) === -1;
    })),
    (i._logEvent.level.label = c),
    (i._logEvent.level.value = f),
    s(c, i._logEvent, d),
    (i._logEvent = Nu(p));
}
function Nu(i) {
  return {
    ts: 0,
    messages: [],
    bindings: i || [],
    level: { label: "", value: 0 },
  };
}
function s6(i) {
  const e = { type: i.constructor.name, msg: i.message, stack: i.stack };
  for (const t in i) e[t] === void 0 && (e[t] = i[t]);
  return e;
}
function o6(i) {
  return typeof i.timestamp == "function"
    ? i.timestamp
    : i.timestamp === !1
    ? jp
    : qp;
}
function Yo() {
  return {};
}
function cu(i) {
  return i;
}
function Ts() {}
function jp() {
  return !1;
}
function qp() {
  return Date.now();
}
function a6() {
  return Math.round(Date.now() / 1e3);
}
function c6() {
  return new Date(Date.now()).toISOString();
}
function u6() {
  function i(e) {
    return typeof e < "u" && e;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return i(self) || i(window) || i(this) || {};
  }
}
const wa = Rs(Z3),
  h6 = { level: "info" },
  qs = "custom_context";
var l6 = Object.defineProperty,
  f6 = Object.defineProperties,
  d6 = Object.getOwnPropertyDescriptors,
  rd = Object.getOwnPropertySymbols,
  p6 = Object.prototype.hasOwnProperty,
  g6 = Object.prototype.propertyIsEnumerable,
  id = (i, e, t) =>
    e in i
      ? l6(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  y6 = (i, e) => {
    for (var t in e || (e = {})) p6.call(e, t) && id(i, t, e[t]);
    if (rd) for (var t of rd(e)) g6.call(e, t) && id(i, t, e[t]);
    return i;
  },
  v6 = (i, e) => f6(i, d6(e));
function _a(i) {
  return v6(y6({}, i), { level: (i == null ? void 0 : i.level) || h6.level });
}
function m6(i, e = qs) {
  return i[e] || "";
}
function w6(i, e, t = qs) {
  return (i[t] = e), i;
}
function _r(i, e = qs) {
  let t = "";
  return (
    typeof i.bindings > "u" ? (t = m6(i, e)) : (t = i.bindings().context || ""),
    t
  );
}
function _6(i, e, t = qs) {
  const s = _r(i, t);
  return s.trim() ? `${s}/${e}` : e;
}
function br(i, e, t = qs) {
  const s = _6(i, e, t),
    o = i.child({ context: s });
  return w6(o, s, t);
}
class b6 extends dn {
  constructor(e) {
    super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
}
let E6 = class extends dn {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  D6 = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  S6 = class extends dn {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  I6 = class extends dn {
    constructor(e) {
      super();
    }
  },
  x6 = class {
    constructor(e, t, s, o) {
      (this.core = e), (this.logger = t), (this.name = s);
    }
  };
class O6 extends dn {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
}
let P6 = class extends dn {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  C6 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  A6 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  T6 = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  R6 = class {
    constructor(e) {
      this.client = e;
    }
  };
var th = {},
  Fp = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Ue,
    t = Tr;
  (i.DIGEST_LENGTH = 64), (i.BLOCK_SIZE = 128);
  var s = (function () {
    function d() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (d.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (d.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (d.prototype.update = function (p, g) {
        if ((g === void 0 && (g = p.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += g), this._bufferLength > 0)) {
          for (; this._bufferLength < i.BLOCK_SIZE && g > 0; )
            (this._buffer[this._bufferLength++] = p[v++]), g--;
          this._bufferLength === this.blockSize &&
            (c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          g >= this.blockSize &&
          ((v = c(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            p,
            v,
            g
          )),
          (g %= this.blockSize));
          g > 0;

        )
          (this._buffer[this._bufferLength++] = p[v++]), g--;
        return this;
      }),
      (d.prototype.finish = function (p) {
        if (!this._finished) {
          var g = this._bytesHashed,
            v = this._bufferLength,
            _ = (g / 536870912) | 0,
            O = g << 3,
            P = g % 128 < 112 ? 128 : 256;
          this._buffer[v] = 128;
          for (var S = v + 1; S < P - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(_, this._buffer, P - 8),
            e.writeUint32BE(O, this._buffer, P - 4),
            c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              P
            ),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 8; S++)
          e.writeUint32BE(this._stateHi[S], p, S * 8),
            e.writeUint32BE(this._stateLo[S], p, S * 8 + 4);
        return this;
      }),
      (d.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (d.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (d.prototype.restoreState = function (p) {
        return (
          this._stateHi.set(p.stateHi),
          this._stateLo.set(p.stateLo),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (d.prototype.cleanSavedState = function (p) {
        t.wipe(p.stateHi),
          t.wipe(p.stateLo),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      d
    );
  })();
  i.SHA512 = s;
  var o = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function c(d, p, g, v, _, O, P) {
    for (
      var S = g[0],
        K = g[1],
        B = g[2],
        Z = g[3],
        $ = g[4],
        M = g[5],
        I = g[6],
        C = g[7],
        A = v[0],
        h = v[1],
        b = v[2],
        ee = v[3],
        ne = v[4],
        ue = v[5],
        ge = v[6],
        ye = v[7],
        D,
        R,
        X,
        J,
        k,
        V,
        te,
        ie;
      P >= 128;

    ) {
      for (var De = 0; De < 16; De++) {
        var oe = 8 * De + O;
        (d[De] = e.readUint32BE(_, oe)), (p[De] = e.readUint32BE(_, oe + 4));
      }
      for (var De = 0; De < 80; De++) {
        var Se = S,
          le = K,
          Ae = B,
          z = Z,
          F = $,
          L = M,
          l = I,
          T = C,
          se = A,
          he = h,
          Ee = b,
          He = ee,
          ke = ne,
          Me = ue,
          pt = ge,
          gt = ye;
        if (
          ((D = C),
          (R = ye),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D =
            (($ >>> 14) | (ne << 18)) ^
            (($ >>> 18) | (ne << 14)) ^
            ((ne >>> 9) | ($ << 23))),
          (R =
            ((ne >>> 14) | ($ << 18)) ^
            ((ne >>> 18) | ($ << 14)) ^
            (($ >>> 9) | (ne << 23))),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = ($ & M) ^ (~$ & I)),
          (R = (ne & ue) ^ (~ne & ge)),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = o[De * 2]),
          (R = o[De * 2 + 1]),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = d[De % 16]),
          (R = p[De % 16]),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (X = (te & 65535) | (ie << 16)),
          (J = (k & 65535) | (V << 16)),
          (D = X),
          (R = J),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D =
            ((S >>> 28) | (A << 4)) ^
            ((A >>> 2) | (S << 30)) ^
            ((A >>> 7) | (S << 25))),
          (R =
            ((A >>> 28) | (S << 4)) ^
            ((S >>> 2) | (A << 30)) ^
            ((S >>> 7) | (A << 25))),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (D = (S & K) ^ (S & B) ^ (K & B)),
          (R = (A & h) ^ (A & b) ^ (h & b)),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (T = (te & 65535) | (ie << 16)),
          (gt = (k & 65535) | (V << 16)),
          (D = z),
          (R = He),
          (k = R & 65535),
          (V = R >>> 16),
          (te = D & 65535),
          (ie = D >>> 16),
          (D = X),
          (R = J),
          (k += R & 65535),
          (V += R >>> 16),
          (te += D & 65535),
          (ie += D >>> 16),
          (V += k >>> 16),
          (te += V >>> 16),
          (ie += te >>> 16),
          (z = (te & 65535) | (ie << 16)),
          (He = (k & 65535) | (V << 16)),
          (K = Se),
          (B = le),
          (Z = Ae),
          ($ = z),
          (M = F),
          (I = L),
          (C = l),
          (S = T),
          (h = se),
          (b = he),
          (ee = Ee),
          (ne = He),
          (ue = ke),
          (ge = Me),
          (ye = pt),
          (A = gt),
          De % 16 === 15)
        )
          for (var oe = 0; oe < 16; oe++)
            (D = d[oe]),
              (R = p[oe]),
              (k = R & 65535),
              (V = R >>> 16),
              (te = D & 65535),
              (ie = D >>> 16),
              (D = d[(oe + 9) % 16]),
              (R = p[(oe + 9) % 16]),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (X = d[(oe + 1) % 16]),
              (J = p[(oe + 1) % 16]),
              (D =
                ((X >>> 1) | (J << 31)) ^ ((X >>> 8) | (J << 24)) ^ (X >>> 7)),
              (R =
                ((J >>> 1) | (X << 31)) ^
                ((J >>> 8) | (X << 24)) ^
                ((J >>> 7) | (X << 25))),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (X = d[(oe + 14) % 16]),
              (J = p[(oe + 14) % 16]),
              (D =
                ((X >>> 19) | (J << 13)) ^ ((J >>> 29) | (X << 3)) ^ (X >>> 6)),
              (R =
                ((J >>> 19) | (X << 13)) ^
                ((X >>> 29) | (J << 3)) ^
                ((J >>> 6) | (X << 26))),
              (k += R & 65535),
              (V += R >>> 16),
              (te += D & 65535),
              (ie += D >>> 16),
              (V += k >>> 16),
              (te += V >>> 16),
              (ie += te >>> 16),
              (d[oe] = (te & 65535) | (ie << 16)),
              (p[oe] = (k & 65535) | (V << 16));
      }
      (D = S),
        (R = A),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[0]),
        (R = v[0]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[0] = S = (te & 65535) | (ie << 16)),
        (v[0] = A = (k & 65535) | (V << 16)),
        (D = K),
        (R = h),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[1]),
        (R = v[1]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[1] = K = (te & 65535) | (ie << 16)),
        (v[1] = h = (k & 65535) | (V << 16)),
        (D = B),
        (R = b),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[2]),
        (R = v[2]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[2] = B = (te & 65535) | (ie << 16)),
        (v[2] = b = (k & 65535) | (V << 16)),
        (D = Z),
        (R = ee),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[3]),
        (R = v[3]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[3] = Z = (te & 65535) | (ie << 16)),
        (v[3] = ee = (k & 65535) | (V << 16)),
        (D = $),
        (R = ne),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[4]),
        (R = v[4]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[4] = $ = (te & 65535) | (ie << 16)),
        (v[4] = ne = (k & 65535) | (V << 16)),
        (D = M),
        (R = ue),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[5]),
        (R = v[5]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[5] = M = (te & 65535) | (ie << 16)),
        (v[5] = ue = (k & 65535) | (V << 16)),
        (D = I),
        (R = ge),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[6]),
        (R = v[6]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[6] = I = (te & 65535) | (ie << 16)),
        (v[6] = ge = (k & 65535) | (V << 16)),
        (D = C),
        (R = ye),
        (k = R & 65535),
        (V = R >>> 16),
        (te = D & 65535),
        (ie = D >>> 16),
        (D = g[7]),
        (R = v[7]),
        (k += R & 65535),
        (V += R >>> 16),
        (te += D & 65535),
        (ie += D >>> 16),
        (V += k >>> 16),
        (te += V >>> 16),
        (ie += te >>> 16),
        (g[7] = C = (te & 65535) | (ie << 16)),
        (v[7] = ye = (k & 65535) | (V << 16)),
        (O += 128),
        (P -= 128);
    }
    return O;
  }
  function f(d) {
    var p = new s();
    p.update(d);
    var g = p.digest();
    return p.clean(), g;
  }
  i.hash = f;
})(Fp);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.convertSecretKeyToX25519 =
      i.convertPublicKeyToX25519 =
      i.verify =
      i.sign =
      i.extractPublicKeyFromSecretKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.SEED_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
      i.SIGNATURE_LENGTH =
        void 0);
  const e = Kn,
    t = Fp,
    s = Tr;
  (i.SIGNATURE_LENGTH = 64),
    (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 64),
    (i.SEED_LENGTH = 32);
  function o(z) {
    const F = new Float64Array(16);
    if (z) for (let L = 0; L < z.length; L++) F[L] = z[L];
    return F;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const f = o(),
    d = o([1]),
    p = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    g = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    v = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    _ = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    O = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function P(z, F) {
    for (let L = 0; L < 16; L++) z[L] = F[L] | 0;
  }
  function S(z) {
    let F = 1;
    for (let L = 0; L < 16; L++) {
      let l = z[L] + F + 65535;
      (F = Math.floor(l / 65536)), (z[L] = l - F * 65536);
    }
    z[0] += F - 1 + 37 * (F - 1);
  }
  function K(z, F, L) {
    const l = ~(L - 1);
    for (let T = 0; T < 16; T++) {
      const se = l & (z[T] ^ F[T]);
      (z[T] ^= se), (F[T] ^= se);
    }
  }
  function B(z, F) {
    const L = o(),
      l = o();
    for (let T = 0; T < 16; T++) l[T] = F[T];
    S(l), S(l), S(l);
    for (let T = 0; T < 2; T++) {
      L[0] = l[0] - 65517;
      for (let he = 1; he < 15; he++)
        (L[he] = l[he] - 65535 - ((L[he - 1] >> 16) & 1)), (L[he - 1] &= 65535);
      L[15] = l[15] - 32767 - ((L[14] >> 16) & 1);
      const se = (L[15] >> 16) & 1;
      (L[14] &= 65535), K(l, L, 1 - se);
    }
    for (let T = 0; T < 16; T++)
      (z[2 * T] = l[T] & 255), (z[2 * T + 1] = l[T] >> 8);
  }
  function Z(z, F) {
    let L = 0;
    for (let l = 0; l < 32; l++) L |= z[l] ^ F[l];
    return (1 & ((L - 1) >>> 8)) - 1;
  }
  function $(z, F) {
    const L = new Uint8Array(32),
      l = new Uint8Array(32);
    return B(L, z), B(l, F), Z(L, l);
  }
  function M(z) {
    const F = new Uint8Array(32);
    return B(F, z), F[0] & 1;
  }
  function I(z, F) {
    for (let L = 0; L < 16; L++) z[L] = F[2 * L] + (F[2 * L + 1] << 8);
    z[15] &= 32767;
  }
  function C(z, F, L) {
    for (let l = 0; l < 16; l++) z[l] = F[l] + L[l];
  }
  function A(z, F, L) {
    for (let l = 0; l < 16; l++) z[l] = F[l] - L[l];
  }
  function h(z, F, L) {
    let l,
      T,
      se = 0,
      he = 0,
      Ee = 0,
      He = 0,
      ke = 0,
      Me = 0,
      pt = 0,
      gt = 0,
      qe = 0,
      Ie = 0,
      Ne = 0,
      $e = 0,
      Fe = 0,
      Oe = 0,
      Le = 0,
      be = 0,
      Pe = 0,
      Be = 0,
      xe = 0,
      Ve = 0,
      Ge = 0,
      Ze = 0,
      et = 0,
      Je = 0,
      tr = 0,
      lr = 0,
      Qr = 0,
      rr = 0,
      ai = 0,
      Pi = 0,
      Ki = 0,
      Dt = L[0],
      yt = L[1],
      St = L[2],
      It = L[3],
      bt = L[4],
      vt = L[5],
      Lt = L[6],
      Ut = L[7],
      xt = L[8],
      Mt = L[9],
      Ot = L[10],
      At = L[11],
      Pt = L[12],
      ht = L[13],
      jt = L[14],
      qt = L[15];
    (l = F[0]),
      (se += l * Dt),
      (he += l * yt),
      (Ee += l * St),
      (He += l * It),
      (ke += l * bt),
      (Me += l * vt),
      (pt += l * Lt),
      (gt += l * Ut),
      (qe += l * xt),
      (Ie += l * Mt),
      (Ne += l * Ot),
      ($e += l * At),
      (Fe += l * Pt),
      (Oe += l * ht),
      (Le += l * jt),
      (be += l * qt),
      (l = F[1]),
      (he += l * Dt),
      (Ee += l * yt),
      (He += l * St),
      (ke += l * It),
      (Me += l * bt),
      (pt += l * vt),
      (gt += l * Lt),
      (qe += l * Ut),
      (Ie += l * xt),
      (Ne += l * Mt),
      ($e += l * Ot),
      (Fe += l * At),
      (Oe += l * Pt),
      (Le += l * ht),
      (be += l * jt),
      (Pe += l * qt),
      (l = F[2]),
      (Ee += l * Dt),
      (He += l * yt),
      (ke += l * St),
      (Me += l * It),
      (pt += l * bt),
      (gt += l * vt),
      (qe += l * Lt),
      (Ie += l * Ut),
      (Ne += l * xt),
      ($e += l * Mt),
      (Fe += l * Ot),
      (Oe += l * At),
      (Le += l * Pt),
      (be += l * ht),
      (Pe += l * jt),
      (Be += l * qt),
      (l = F[3]),
      (He += l * Dt),
      (ke += l * yt),
      (Me += l * St),
      (pt += l * It),
      (gt += l * bt),
      (qe += l * vt),
      (Ie += l * Lt),
      (Ne += l * Ut),
      ($e += l * xt),
      (Fe += l * Mt),
      (Oe += l * Ot),
      (Le += l * At),
      (be += l * Pt),
      (Pe += l * ht),
      (Be += l * jt),
      (xe += l * qt),
      (l = F[4]),
      (ke += l * Dt),
      (Me += l * yt),
      (pt += l * St),
      (gt += l * It),
      (qe += l * bt),
      (Ie += l * vt),
      (Ne += l * Lt),
      ($e += l * Ut),
      (Fe += l * xt),
      (Oe += l * Mt),
      (Le += l * Ot),
      (be += l * At),
      (Pe += l * Pt),
      (Be += l * ht),
      (xe += l * jt),
      (Ve += l * qt),
      (l = F[5]),
      (Me += l * Dt),
      (pt += l * yt),
      (gt += l * St),
      (qe += l * It),
      (Ie += l * bt),
      (Ne += l * vt),
      ($e += l * Lt),
      (Fe += l * Ut),
      (Oe += l * xt),
      (Le += l * Mt),
      (be += l * Ot),
      (Pe += l * At),
      (Be += l * Pt),
      (xe += l * ht),
      (Ve += l * jt),
      (Ge += l * qt),
      (l = F[6]),
      (pt += l * Dt),
      (gt += l * yt),
      (qe += l * St),
      (Ie += l * It),
      (Ne += l * bt),
      ($e += l * vt),
      (Fe += l * Lt),
      (Oe += l * Ut),
      (Le += l * xt),
      (be += l * Mt),
      (Pe += l * Ot),
      (Be += l * At),
      (xe += l * Pt),
      (Ve += l * ht),
      (Ge += l * jt),
      (Ze += l * qt),
      (l = F[7]),
      (gt += l * Dt),
      (qe += l * yt),
      (Ie += l * St),
      (Ne += l * It),
      ($e += l * bt),
      (Fe += l * vt),
      (Oe += l * Lt),
      (Le += l * Ut),
      (be += l * xt),
      (Pe += l * Mt),
      (Be += l * Ot),
      (xe += l * At),
      (Ve += l * Pt),
      (Ge += l * ht),
      (Ze += l * jt),
      (et += l * qt),
      (l = F[8]),
      (qe += l * Dt),
      (Ie += l * yt),
      (Ne += l * St),
      ($e += l * It),
      (Fe += l * bt),
      (Oe += l * vt),
      (Le += l * Lt),
      (be += l * Ut),
      (Pe += l * xt),
      (Be += l * Mt),
      (xe += l * Ot),
      (Ve += l * At),
      (Ge += l * Pt),
      (Ze += l * ht),
      (et += l * jt),
      (Je += l * qt),
      (l = F[9]),
      (Ie += l * Dt),
      (Ne += l * yt),
      ($e += l * St),
      (Fe += l * It),
      (Oe += l * bt),
      (Le += l * vt),
      (be += l * Lt),
      (Pe += l * Ut),
      (Be += l * xt),
      (xe += l * Mt),
      (Ve += l * Ot),
      (Ge += l * At),
      (Ze += l * Pt),
      (et += l * ht),
      (Je += l * jt),
      (tr += l * qt),
      (l = F[10]),
      (Ne += l * Dt),
      ($e += l * yt),
      (Fe += l * St),
      (Oe += l * It),
      (Le += l * bt),
      (be += l * vt),
      (Pe += l * Lt),
      (Be += l * Ut),
      (xe += l * xt),
      (Ve += l * Mt),
      (Ge += l * Ot),
      (Ze += l * At),
      (et += l * Pt),
      (Je += l * ht),
      (tr += l * jt),
      (lr += l * qt),
      (l = F[11]),
      ($e += l * Dt),
      (Fe += l * yt),
      (Oe += l * St),
      (Le += l * It),
      (be += l * bt),
      (Pe += l * vt),
      (Be += l * Lt),
      (xe += l * Ut),
      (Ve += l * xt),
      (Ge += l * Mt),
      (Ze += l * Ot),
      (et += l * At),
      (Je += l * Pt),
      (tr += l * ht),
      (lr += l * jt),
      (Qr += l * qt),
      (l = F[12]),
      (Fe += l * Dt),
      (Oe += l * yt),
      (Le += l * St),
      (be += l * It),
      (Pe += l * bt),
      (Be += l * vt),
      (xe += l * Lt),
      (Ve += l * Ut),
      (Ge += l * xt),
      (Ze += l * Mt),
      (et += l * Ot),
      (Je += l * At),
      (tr += l * Pt),
      (lr += l * ht),
      (Qr += l * jt),
      (rr += l * qt),
      (l = F[13]),
      (Oe += l * Dt),
      (Le += l * yt),
      (be += l * St),
      (Pe += l * It),
      (Be += l * bt),
      (xe += l * vt),
      (Ve += l * Lt),
      (Ge += l * Ut),
      (Ze += l * xt),
      (et += l * Mt),
      (Je += l * Ot),
      (tr += l * At),
      (lr += l * Pt),
      (Qr += l * ht),
      (rr += l * jt),
      (ai += l * qt),
      (l = F[14]),
      (Le += l * Dt),
      (be += l * yt),
      (Pe += l * St),
      (Be += l * It),
      (xe += l * bt),
      (Ve += l * vt),
      (Ge += l * Lt),
      (Ze += l * Ut),
      (et += l * xt),
      (Je += l * Mt),
      (tr += l * Ot),
      (lr += l * At),
      (Qr += l * Pt),
      (rr += l * ht),
      (ai += l * jt),
      (Pi += l * qt),
      (l = F[15]),
      (be += l * Dt),
      (Pe += l * yt),
      (Be += l * St),
      (xe += l * It),
      (Ve += l * bt),
      (Ge += l * vt),
      (Ze += l * Lt),
      (et += l * Ut),
      (Je += l * xt),
      (tr += l * Mt),
      (lr += l * Ot),
      (Qr += l * At),
      (rr += l * Pt),
      (ai += l * ht),
      (Pi += l * jt),
      (Ki += l * qt),
      (se += 38 * Pe),
      (he += 38 * Be),
      (Ee += 38 * xe),
      (He += 38 * Ve),
      (ke += 38 * Ge),
      (Me += 38 * Ze),
      (pt += 38 * et),
      (gt += 38 * Je),
      (qe += 38 * tr),
      (Ie += 38 * lr),
      (Ne += 38 * Qr),
      ($e += 38 * rr),
      (Fe += 38 * ai),
      (Oe += 38 * Pi),
      (Le += 38 * Ki),
      (T = 1),
      (l = se + T + 65535),
      (T = Math.floor(l / 65536)),
      (se = l - T * 65536),
      (l = he + T + 65535),
      (T = Math.floor(l / 65536)),
      (he = l - T * 65536),
      (l = Ee + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ee = l - T * 65536),
      (l = He + T + 65535),
      (T = Math.floor(l / 65536)),
      (He = l - T * 65536),
      (l = ke + T + 65535),
      (T = Math.floor(l / 65536)),
      (ke = l - T * 65536),
      (l = Me + T + 65535),
      (T = Math.floor(l / 65536)),
      (Me = l - T * 65536),
      (l = pt + T + 65535),
      (T = Math.floor(l / 65536)),
      (pt = l - T * 65536),
      (l = gt + T + 65535),
      (T = Math.floor(l / 65536)),
      (gt = l - T * 65536),
      (l = qe + T + 65535),
      (T = Math.floor(l / 65536)),
      (qe = l - T * 65536),
      (l = Ie + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ie = l - T * 65536),
      (l = Ne + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ne = l - T * 65536),
      (l = $e + T + 65535),
      (T = Math.floor(l / 65536)),
      ($e = l - T * 65536),
      (l = Fe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Fe = l - T * 65536),
      (l = Oe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Oe = l - T * 65536),
      (l = Le + T + 65535),
      (T = Math.floor(l / 65536)),
      (Le = l - T * 65536),
      (l = be + T + 65535),
      (T = Math.floor(l / 65536)),
      (be = l - T * 65536),
      (se += T - 1 + 37 * (T - 1)),
      (T = 1),
      (l = se + T + 65535),
      (T = Math.floor(l / 65536)),
      (se = l - T * 65536),
      (l = he + T + 65535),
      (T = Math.floor(l / 65536)),
      (he = l - T * 65536),
      (l = Ee + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ee = l - T * 65536),
      (l = He + T + 65535),
      (T = Math.floor(l / 65536)),
      (He = l - T * 65536),
      (l = ke + T + 65535),
      (T = Math.floor(l / 65536)),
      (ke = l - T * 65536),
      (l = Me + T + 65535),
      (T = Math.floor(l / 65536)),
      (Me = l - T * 65536),
      (l = pt + T + 65535),
      (T = Math.floor(l / 65536)),
      (pt = l - T * 65536),
      (l = gt + T + 65535),
      (T = Math.floor(l / 65536)),
      (gt = l - T * 65536),
      (l = qe + T + 65535),
      (T = Math.floor(l / 65536)),
      (qe = l - T * 65536),
      (l = Ie + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ie = l - T * 65536),
      (l = Ne + T + 65535),
      (T = Math.floor(l / 65536)),
      (Ne = l - T * 65536),
      (l = $e + T + 65535),
      (T = Math.floor(l / 65536)),
      ($e = l - T * 65536),
      (l = Fe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Fe = l - T * 65536),
      (l = Oe + T + 65535),
      (T = Math.floor(l / 65536)),
      (Oe = l - T * 65536),
      (l = Le + T + 65535),
      (T = Math.floor(l / 65536)),
      (Le = l - T * 65536),
      (l = be + T + 65535),
      (T = Math.floor(l / 65536)),
      (be = l - T * 65536),
      (se += T - 1 + 37 * (T - 1)),
      (z[0] = se),
      (z[1] = he),
      (z[2] = Ee),
      (z[3] = He),
      (z[4] = ke),
      (z[5] = Me),
      (z[6] = pt),
      (z[7] = gt),
      (z[8] = qe),
      (z[9] = Ie),
      (z[10] = Ne),
      (z[11] = $e),
      (z[12] = Fe),
      (z[13] = Oe),
      (z[14] = Le),
      (z[15] = be);
  }
  function b(z, F) {
    h(z, F, F);
  }
  function ee(z, F) {
    const L = o();
    let l;
    for (l = 0; l < 16; l++) L[l] = F[l];
    for (l = 253; l >= 0; l--) b(L, L), l !== 2 && l !== 4 && h(L, L, F);
    for (l = 0; l < 16; l++) z[l] = L[l];
  }
  function ne(z, F) {
    const L = o();
    let l;
    for (l = 0; l < 16; l++) L[l] = F[l];
    for (l = 250; l >= 0; l--) b(L, L), l !== 1 && h(L, L, F);
    for (l = 0; l < 16; l++) z[l] = L[l];
  }
  function ue(z, F) {
    const L = o(),
      l = o(),
      T = o(),
      se = o(),
      he = o(),
      Ee = o(),
      He = o(),
      ke = o(),
      Me = o();
    A(L, z[1], z[0]),
      A(Me, F[1], F[0]),
      h(L, L, Me),
      C(l, z[0], z[1]),
      C(Me, F[0], F[1]),
      h(l, l, Me),
      h(T, z[3], F[3]),
      h(T, T, g),
      h(se, z[2], F[2]),
      C(se, se, se),
      A(he, l, L),
      A(Ee, se, T),
      C(He, se, T),
      C(ke, l, L),
      h(z[0], he, Ee),
      h(z[1], ke, He),
      h(z[2], He, Ee),
      h(z[3], he, ke);
  }
  function ge(z, F, L) {
    for (let l = 0; l < 4; l++) K(z[l], F[l], L);
  }
  function ye(z, F) {
    const L = o(),
      l = o(),
      T = o();
    ee(T, F[2]), h(L, F[0], T), h(l, F[1], T), B(z, l), (z[31] ^= M(L) << 7);
  }
  function D(z, F, L) {
    P(z[0], f), P(z[1], d), P(z[2], d), P(z[3], f);
    for (let l = 255; l >= 0; --l) {
      const T = (L[(l / 8) | 0] >> (l & 7)) & 1;
      ge(z, F, T), ue(F, z), ue(z, z), ge(z, F, T);
    }
  }
  function R(z, F) {
    const L = [o(), o(), o(), o()];
    P(L[0], v), P(L[1], _), P(L[2], d), h(L[3], v, _), D(z, L, F);
  }
  function X(z) {
    if (z.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const F = (0, t.hash)(z);
    (F[0] &= 248), (F[31] &= 127), (F[31] |= 64);
    const L = new Uint8Array(32),
      l = [o(), o(), o(), o()];
    R(l, F), ye(L, l);
    const T = new Uint8Array(64);
    return T.set(z), T.set(L, 32), { publicKey: L, secretKey: T };
  }
  i.generateKeyPairFromSeed = X;
  function J(z) {
    const F = (0, e.randomBytes)(32, z),
      L = X(F);
    return (0, s.wipe)(F), L;
  }
  i.generateKeyPair = J;
  function k(z) {
    if (z.length !== i.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(z.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = k;
  const V = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function te(z, F) {
    let L, l, T, se;
    for (l = 63; l >= 32; --l) {
      for (L = 0, T = l - 32, se = l - 12; T < se; ++T)
        (F[T] += L - 16 * F[l] * V[T - (l - 32)]),
          (L = Math.floor((F[T] + 128) / 256)),
          (F[T] -= L * 256);
      (F[T] += L), (F[l] = 0);
    }
    for (L = 0, T = 0; T < 32; T++)
      (F[T] += L - (F[31] >> 4) * V[T]), (L = F[T] >> 8), (F[T] &= 255);
    for (T = 0; T < 32; T++) F[T] -= L * V[T];
    for (l = 0; l < 32; l++) (F[l + 1] += F[l] >> 8), (z[l] = F[l] & 255);
  }
  function ie(z) {
    const F = new Float64Array(64);
    for (let L = 0; L < 64; L++) F[L] = z[L];
    for (let L = 0; L < 64; L++) z[L] = 0;
    te(z, F);
  }
  function De(z, F) {
    const L = new Float64Array(64),
      l = [o(), o(), o(), o()],
      T = (0, t.hash)(z.subarray(0, 32));
    (T[0] &= 248), (T[31] &= 127), (T[31] |= 64);
    const se = new Uint8Array(64);
    se.set(T.subarray(32), 32);
    const he = new t.SHA512();
    he.update(se.subarray(32)), he.update(F);
    const Ee = he.digest();
    he.clean(),
      ie(Ee),
      R(l, Ee),
      ye(se, l),
      he.reset(),
      he.update(se.subarray(0, 32)),
      he.update(z.subarray(32)),
      he.update(F);
    const He = he.digest();
    ie(He);
    for (let ke = 0; ke < 32; ke++) L[ke] = Ee[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let Me = 0; Me < 32; Me++) L[ke + Me] += He[ke] * T[Me];
    return te(se.subarray(32), L), se;
  }
  i.sign = De;
  function oe(z, F) {
    const L = o(),
      l = o(),
      T = o(),
      se = o(),
      he = o(),
      Ee = o(),
      He = o();
    return (
      P(z[2], d),
      I(z[1], F),
      b(T, z[1]),
      h(se, T, p),
      A(T, T, z[2]),
      C(se, z[2], se),
      b(he, se),
      b(Ee, he),
      h(He, Ee, he),
      h(L, He, T),
      h(L, L, se),
      ne(L, L),
      h(L, L, T),
      h(L, L, se),
      h(L, L, se),
      h(z[0], L, se),
      b(l, z[0]),
      h(l, l, se),
      $(l, T) && h(z[0], z[0], O),
      b(l, z[0]),
      h(l, l, se),
      $(l, T)
        ? -1
        : (M(z[0]) === F[31] >> 7 && A(z[0], f, z[0]), h(z[3], z[0], z[1]), 0)
    );
  }
  function Se(z, F, L) {
    const l = new Uint8Array(32),
      T = [o(), o(), o(), o()],
      se = [o(), o(), o(), o()];
    if (L.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (oe(se, z)) return !1;
    const he = new t.SHA512();
    he.update(L.subarray(0, 32)), he.update(z), he.update(F);
    const Ee = he.digest();
    return (
      ie(Ee), D(T, se, Ee), R(se, L.subarray(32)), ue(T, se), ye(l, T), !Z(L, l)
    );
  }
  i.verify = Se;
  function le(z) {
    let F = [o(), o(), o(), o()];
    if (oe(F, z)) throw new Error("Ed25519: invalid public key");
    let L = o(),
      l = o(),
      T = F[1];
    C(L, d, T), A(l, d, T), ee(l, l), h(L, L, l);
    let se = new Uint8Array(32);
    return B(se, L), se;
  }
  i.convertPublicKeyToX25519 = le;
  function Ae(z) {
    const F = (0, t.hash)(z.subarray(0, 32));
    (F[0] &= 248), (F[31] &= 127), (F[31] |= 64);
    const L = new Uint8Array(F.subarray(0, 32));
    return (0, s.wipe)(F), L;
  }
  i.convertSecretKeyToX25519 = Ae;
})(th);
const N6 = "EdDSA",
  $6 = "JWT",
  zp = ".",
  Hp = "base64url",
  L6 = "utf8",
  U6 = "utf8",
  M6 = ":",
  j6 = "did",
  q6 = "key",
  nd = "base58btc",
  F6 = "z",
  z6 = "K36",
  H6 = 32;
function aa(i) {
  return hr(wr(un(i), L6), Hp);
}
function Bp(i) {
  const e = wr(z6, nd),
    t = F6 + hr(Du([e, i]), nd);
  return [j6, q6, t].join(M6);
}
function B6(i) {
  return hr(i, Hp);
}
function K6(i) {
  return wr([aa(i.header), aa(i.payload)].join(zp), U6);
}
function k6(i) {
  return [aa(i.header), aa(i.payload), B6(i.signature)].join(zp);
}
function sd(i = Kn.randomBytes(H6)) {
  return th.generateKeyPairFromSeed(i);
}
async function V6(i, e, t, s, o = ve.fromMiliseconds(Date.now())) {
  const c = { alg: N6, typ: $6 },
    f = Bp(s.publicKey),
    d = o + t,
    p = { iss: f, sub: i, aud: e, iat: o, exp: d },
    g = K6({ header: c, payload: p }),
    v = th.sign(s.secretKey, g);
  return k6({ header: c, payload: p, signature: v });
}
const W6 = "PARSE_ERROR",
  G6 = "INVALID_REQUEST",
  Y6 = "METHOD_NOT_FOUND",
  J6 = "INVALID_PARAMS",
  Kp = "INTERNAL_ERROR",
  rh = "SERVER_ERROR",
  Q6 = [-32700, -32600, -32601, -32602, -32603],
  Is = {
    [W6]: { code: -32700, message: "Parse error" },
    [G6]: { code: -32600, message: "Invalid Request" },
    [Y6]: { code: -32601, message: "Method not found" },
    [J6]: { code: -32602, message: "Invalid params" },
    [Kp]: { code: -32603, message: "Internal error" },
    [rh]: { code: -32e3, message: "Server error" },
  },
  kp = rh;
function X6(i) {
  return Q6.includes(i);
}
function od(i) {
  return Object.keys(Is).includes(i) ? Is[i] : Is[kp];
}
function Z6(i) {
  const e = Object.values(Is).find((t) => t.code === i);
  return e || Is[kp];
}
function Vp(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") ||
    i.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : i;
}
var Wp = {},
  wi = {},
  ad;
function e2() {
  if (ad) return wi;
  (ad = 1),
    Object.defineProperty(wi, "__esModule", { value: !0 }),
    (wi.isBrowserCryptoAvailable =
      wi.getSubtleCrypto =
      wi.getBrowerCrypto =
        void 0);
  function i() {
    return (
      (Jr === null || Jr === void 0 ? void 0 : Jr.crypto) ||
      (Jr === null || Jr === void 0 ? void 0 : Jr.msCrypto) ||
      {}
    );
  }
  wi.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  wi.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return (wi.isBrowserCryptoAvailable = t), wi;
}
var _i = {},
  cd;
function t2() {
  if (cd) return _i;
  (cd = 1),
    Object.defineProperty(_i, "__esModule", { value: !0 }),
    (_i.isBrowser = _i.isNode = _i.isReactNative = void 0);
  function i() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  _i.isReactNative = i;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  _i.isNode = e;
  function t() {
    return !i() && !e();
  }
  return (_i.isBrowser = t), _i;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = Ii;
  e.__exportStar(e2(), i), e.__exportStar(t2(), i);
})(Wp);
function ih(i = 3) {
  const e = Date.now() * Math.pow(10, i),
    t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function Gp(i = 6) {
  return BigInt(ih(i));
}
function Bn(i, e, t) {
  return { id: t || ih(), jsonrpc: "2.0", method: i, params: e };
}
function ba(i, e) {
  return { id: i, jsonrpc: "2.0", result: e };
}
function Ea(i, e, t) {
  return { id: i, jsonrpc: "2.0", error: r2(e, t) };
}
function r2(i, e) {
  return typeof i > "u"
    ? od(Kp)
    : (typeof i == "string" &&
        (i = Object.assign(Object.assign({}, od(rh)), { message: i })),
      typeof e < "u" && (i.data = e),
      X6(i.code) && (i = Z6(i.code)),
      i);
}
class i2 {}
class n2 extends i2 {
  constructor() {
    super();
  }
}
class s2 extends n2 {
  constructor(e) {
    super();
  }
}
const o2 = "^https?:",
  a2 = "^wss?:";
function c2(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function Yp(i, e) {
  const t = c2(i);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function ud(i) {
  return Yp(i, o2);
}
function hd(i) {
  return Yp(i, a2);
}
function u2(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function Jp(i) {
  return (
    typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0"
  );
}
function nh(i) {
  return Jp(i) && "method" in i;
}
function Da(i) {
  return Jp(i) && (Si(i) || Yr(i));
}
function Si(i) {
  return "result" in i;
}
function Yr(i) {
  return "error" in i;
}
class xi extends s2 {
  constructor(e) {
    super(e),
      (this.events = new Ar.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      Bn(e.method, e.params || [], e.id || Gp().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (c) {
          o(c);
        }
      this.events.on(`${e.id}`, (c) => {
        Yr(c) ? o(c.error) : s(c.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (c) {
        o(c);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      Da(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const h2 = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  l2 = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  ld = (i) => i.split("?")[0],
  fd = 10,
  f2 = h2();
let d2 = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new Ar.EventEmitter()),
      (this.registering = !1),
      !hd(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(un(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!hd(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, s) => {
        const o = new URLSearchParams(e).get("origin"),
          c = Wp.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !u2(e) },
          f = new f2(e, [], c);
        l2()
          ? (f.onerror = (d) => {
              const p = d;
              s(this.emitError(p.error));
            })
          : f.on("error", (d) => {
              s(this.emitError(d));
            }),
          (f.onopen = () => {
            this.onOpen(f), t(f);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? js(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = Ea(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Vp(e, ld(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > fd && this.events.setMaxListeners(fd);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        (e == null ? void 0 : e.message) ||
          `WebSocket connection failed for host: ${ld(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var ca = { exports: {} };
ca.exports;
(function (i, e) {
  var t = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    c = 2,
    f = 9007199254740991,
    d = "[object Arguments]",
    p = "[object Array]",
    g = "[object AsyncFunction]",
    v = "[object Boolean]",
    _ = "[object Date]",
    O = "[object Error]",
    P = "[object Function]",
    S = "[object GeneratorFunction]",
    K = "[object Map]",
    B = "[object Number]",
    Z = "[object Null]",
    $ = "[object Object]",
    M = "[object Promise]",
    I = "[object Proxy]",
    C = "[object RegExp]",
    A = "[object Set]",
    h = "[object String]",
    b = "[object Symbol]",
    ee = "[object Undefined]",
    ne = "[object WeakMap]",
    ue = "[object ArrayBuffer]",
    ge = "[object DataView]",
    ye = "[object Float32Array]",
    D = "[object Float64Array]",
    R = "[object Int8Array]",
    X = "[object Int16Array]",
    J = "[object Int32Array]",
    k = "[object Uint8Array]",
    V = "[object Uint8ClampedArray]",
    te = "[object Uint16Array]",
    ie = "[object Uint32Array]",
    De = /[\\^$.*+?()[\]{}|]/g,
    oe = /^\[object .+?Constructor\]$/,
    Se = /^(?:0|[1-9]\d*)$/,
    le = {};
  (le[ye] =
    le[D] =
    le[R] =
    le[X] =
    le[J] =
    le[k] =
    le[V] =
    le[te] =
    le[ie] =
      !0),
    (le[d] =
      le[p] =
      le[ue] =
      le[v] =
      le[ge] =
      le[_] =
      le[O] =
      le[P] =
      le[K] =
      le[B] =
      le[$] =
      le[C] =
      le[A] =
      le[h] =
      le[ne] =
        !1);
  var Ae = typeof Jr == "object" && Jr && Jr.Object === Object && Jr,
    z = typeof self == "object" && self && self.Object === Object && self,
    F = Ae || z || Function("return this")(),
    L = e && !e.nodeType && e,
    l = L && !0 && i && !i.nodeType && i,
    T = l && l.exports === L,
    se = T && Ae.process,
    he = (function () {
      try {
        return se && se.binding && se.binding("util");
      } catch {}
    })(),
    Ee = he && he.isTypedArray;
  function He(E, U) {
    for (
      var Q = -1, fe = E == null ? 0 : E.length, at = 0, Te = [];
      ++Q < fe;

    ) {
      var ft = E[Q];
      U(ft, Q, E) && (Te[at++] = ft);
    }
    return Te;
  }
  function ke(E, U) {
    for (var Q = -1, fe = U.length, at = E.length; ++Q < fe; ) E[at + Q] = U[Q];
    return E;
  }
  function Me(E, U) {
    for (var Q = -1, fe = E == null ? 0 : E.length; ++Q < fe; )
      if (U(E[Q], Q, E)) return !0;
    return !1;
  }
  function pt(E, U) {
    for (var Q = -1, fe = Array(E); ++Q < E; ) fe[Q] = U(Q);
    return fe;
  }
  function gt(E) {
    return function (U) {
      return E(U);
    };
  }
  function qe(E, U) {
    return E.has(U);
  }
  function Ie(E, U) {
    return E == null ? void 0 : E[U];
  }
  function Ne(E) {
    var U = -1,
      Q = Array(E.size);
    return (
      E.forEach(function (fe, at) {
        Q[++U] = [at, fe];
      }),
      Q
    );
  }
  function $e(E, U) {
    return function (Q) {
      return E(U(Q));
    };
  }
  function Fe(E) {
    var U = -1,
      Q = Array(E.size);
    return (
      E.forEach(function (fe) {
        Q[++U] = fe;
      }),
      Q
    );
  }
  var Oe = Array.prototype,
    Le = Function.prototype,
    be = Object.prototype,
    Pe = F["__core-js_shared__"],
    Be = Le.toString,
    xe = be.hasOwnProperty,
    Ve = (function () {
      var E = /[^.]+$/.exec((Pe && Pe.keys && Pe.keys.IE_PROTO) || "");
      return E ? "Symbol(src)_1." + E : "";
    })(),
    Ge = be.toString,
    Ze = RegExp(
      "^" +
        Be.call(xe)
          .replace(De, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    et = T ? F.Buffer : void 0,
    Je = F.Symbol,
    tr = F.Uint8Array,
    lr = be.propertyIsEnumerable,
    Qr = Oe.splice,
    rr = Je ? Je.toStringTag : void 0,
    ai = Object.getOwnPropertySymbols,
    Pi = et ? et.isBuffer : void 0,
    Ki = $e(Object.keys, Object),
    Dt = Er(F, "DataView"),
    yt = Er(F, "Map"),
    St = Er(F, "Promise"),
    It = Er(F, "Set"),
    bt = Er(F, "WeakMap"),
    vt = Er(Object, "create"),
    Lt = ui(Dt),
    Ut = ui(yt),
    xt = ui(St),
    Mt = ui(It),
    Ot = ui(bt),
    At = Je ? Je.prototype : void 0,
    Pt = At ? At.valueOf : void 0;
  function ht(E) {
    var U = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++U < Q; ) {
      var fe = E[U];
      this.set(fe[0], fe[1]);
    }
  }
  function jt() {
    (this.__data__ = vt ? vt(null) : {}), (this.size = 0);
  }
  function qt(E) {
    var U = this.has(E) && delete this.__data__[E];
    return (this.size -= U ? 1 : 0), U;
  }
  function xa(E) {
    var U = this.__data__;
    if (vt) {
      var Q = U[E];
      return Q === s ? void 0 : Q;
    }
    return xe.call(U, E) ? U[E] : void 0;
  }
  function Oa(E) {
    var U = this.__data__;
    return vt ? U[E] !== void 0 : xe.call(U, E);
  }
  function Pa(E, U) {
    var Q = this.__data__;
    return (
      (this.size += this.has(E) ? 0 : 1),
      (Q[E] = vt && U === void 0 ? s : U),
      this
    );
  }
  (ht.prototype.clear = jt),
    (ht.prototype.delete = qt),
    (ht.prototype.get = xa),
    (ht.prototype.has = Oa),
    (ht.prototype.set = Pa);
  function Rr(E) {
    var U = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++U < Q; ) {
      var fe = E[U];
      this.set(fe[0], fe[1]);
    }
  }
  function Ca() {
    (this.__data__ = []), (this.size = 0);
  }
  function Aa(E) {
    var U = this.__data__,
      Q = ki(U, E);
    if (Q < 0) return !1;
    var fe = U.length - 1;
    return Q == fe ? U.pop() : Qr.call(U, Q, 1), --this.size, !0;
  }
  function Ta(E) {
    var U = this.__data__,
      Q = ki(U, E);
    return Q < 0 ? void 0 : U[Q][1];
  }
  function Ra(E) {
    return ki(this.__data__, E) > -1;
  }
  function Na(E, U) {
    var Q = this.__data__,
      fe = ki(Q, E);
    return fe < 0 ? (++this.size, Q.push([E, U])) : (Q[fe][1] = U), this;
  }
  (Rr.prototype.clear = Ca),
    (Rr.prototype.delete = Aa),
    (Rr.prototype.get = Ta),
    (Rr.prototype.has = Ra),
    (Rr.prototype.set = Na);
  function ci(E) {
    var U = -1,
      Q = E == null ? 0 : E.length;
    for (this.clear(); ++U < Q; ) {
      var fe = E[U];
      this.set(fe[0], fe[1]);
    }
  }
  function gn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ht(),
        map: new (yt || Rr)(),
        string: new ht(),
      });
  }
  function $a(E) {
    var U = Ci(this, E).delete(E);
    return (this.size -= U ? 1 : 0), U;
  }
  function yn(E) {
    return Ci(this, E).get(E);
  }
  function La(E) {
    return Ci(this, E).has(E);
  }
  function Ua(E, U) {
    var Q = Ci(this, E),
      fe = Q.size;
    return Q.set(E, U), (this.size += Q.size == fe ? 0 : 1), this;
  }
  (ci.prototype.clear = gn),
    (ci.prototype.delete = $a),
    (ci.prototype.get = yn),
    (ci.prototype.has = La),
    (ci.prototype.set = Ua);
  function vn(E) {
    var U = -1,
      Q = E == null ? 0 : E.length;
    for (this.__data__ = new ci(); ++U < Q; ) this.add(E[U]);
  }
  function zs(E) {
    return this.__data__.set(E, s), this;
  }
  function Hs(E) {
    return this.__data__.has(E);
  }
  (vn.prototype.add = vn.prototype.push = zs), (vn.prototype.has = Hs);
  function Hr(E) {
    var U = (this.__data__ = new Rr(E));
    this.size = U.size;
  }
  function Ma() {
    (this.__data__ = new Rr()), (this.size = 0);
  }
  function ja(E) {
    var U = this.__data__,
      Q = U.delete(E);
    return (this.size = U.size), Q;
  }
  function qa(E) {
    return this.__data__.get(E);
  }
  function Fa(E) {
    return this.__data__.has(E);
  }
  function Bs(E, U) {
    var Q = this.__data__;
    if (Q instanceof Rr) {
      var fe = Q.__data__;
      if (!yt || fe.length < t - 1)
        return fe.push([E, U]), (this.size = ++Q.size), this;
      Q = this.__data__ = new ci(fe);
    }
    return Q.set(E, U), (this.size = Q.size), this;
  }
  (Hr.prototype.clear = Ma),
    (Hr.prototype.delete = ja),
    (Hr.prototype.get = qa),
    (Hr.prototype.has = Fa),
    (Hr.prototype.set = Bs);
  function Ks(E, U) {
    var Q = _n(E),
      fe = !Q && ro(E),
      at = !Q && !fe && Xn(E),
      Te = !Q && !fe && !at && so(E),
      ft = Q || fe || at || Te,
      Ft = ft ? pt(E.length, String) : [],
      Qe = Ft.length;
    for (var ct in E)
      (U || xe.call(E, ct)) &&
        !(
          ft &&
          (ct == "length" ||
            (at && (ct == "offset" || ct == "parent")) ||
            (Te &&
              (ct == "buffer" || ct == "byteLength" || ct == "byteOffset")) ||
            Qs(ct, Qe))
        ) &&
        Ft.push(ct);
    return Ft;
  }
  function ki(E, U) {
    for (var Q = E.length; Q--; ) if (to(E[Q][0], U)) return Q;
    return -1;
  }
  function Jn(E, U, Q) {
    var fe = U(E);
    return _n(E) ? fe : ke(fe, Q(E));
  }
  function Vi(E) {
    return E == null
      ? E === void 0
        ? ee
        : Z
      : rr && rr in Object(E)
      ? Ys(E)
      : Ba(E);
  }
  function Qn(E) {
    return Gi(E) && Vi(E) == d;
  }
  function Wi(E, U, Q, fe, at) {
    return E === U
      ? !0
      : E == null || U == null || (!Gi(E) && !Gi(U))
      ? E !== E && U !== U
      : ks(E, U, Q, fe, Wi, at);
  }
  function ks(E, U, Q, fe, at, Te) {
    var ft = _n(E),
      Ft = _n(U),
      Qe = ft ? p : Xr(E),
      ct = Ft ? p : Xr(U);
    (Qe = Qe == d ? $ : Qe), (ct = ct == d ? $ : ct);
    var Tt = Qe == $,
      fr = ct == $,
      zt = Qe == ct;
    if (zt && Xn(E)) {
      if (!Xn(U)) return !1;
      (ft = !0), (Tt = !1);
    }
    if (zt && !Tt)
      return (
        Te || (Te = new Hr()),
        ft || so(E) ? mn(E, U, Q, fe, at, Te) : Ha(E, U, Qe, Q, fe, at, Te)
      );
    if (!(Q & o)) {
      var dt = Tt && xe.call(E, "__wrapped__"),
        ir = fr && xe.call(U, "__wrapped__");
      if (dt || ir) {
        var Br = dt ? E.value() : E,
          Nr = ir ? U.value() : U;
        return Te || (Te = new Hr()), at(Br, Nr, Q, fe, Te);
      }
    }
    return zt ? (Te || (Te = new Hr()), Gs(E, U, Q, fe, at, Te)) : !1;
  }
  function za(E) {
    if (!no(E) || Zs(E)) return !1;
    var U = bn(E) ? Ze : oe;
    return U.test(ui(E));
  }
  function Vs(E) {
    return Gi(E) && io(E.length) && !!le[Vi(E)];
  }
  function Ws(E) {
    if (!eo(E)) return Ki(E);
    var U = [];
    for (var Q in Object(E)) xe.call(E, Q) && Q != "constructor" && U.push(Q);
    return U;
  }
  function mn(E, U, Q, fe, at, Te) {
    var ft = Q & o,
      Ft = E.length,
      Qe = U.length;
    if (Ft != Qe && !(ft && Qe > Ft)) return !1;
    var ct = Te.get(E);
    if (ct && Te.get(U)) return ct == U;
    var Tt = -1,
      fr = !0,
      zt = Q & c ? new vn() : void 0;
    for (Te.set(E, U), Te.set(U, E); ++Tt < Ft; ) {
      var dt = E[Tt],
        ir = U[Tt];
      if (fe) var Br = ft ? fe(ir, dt, Tt, U, E, Te) : fe(dt, ir, Tt, E, U, Te);
      if (Br !== void 0) {
        if (Br) continue;
        fr = !1;
        break;
      }
      if (zt) {
        if (
          !Me(U, function (Nr, Zr) {
            if (!qe(zt, Zr) && (dt === Nr || at(dt, Nr, Q, fe, Te)))
              return zt.push(Zr);
          })
        ) {
          fr = !1;
          break;
        }
      } else if (!(dt === ir || at(dt, ir, Q, fe, Te))) {
        fr = !1;
        break;
      }
    }
    return Te.delete(E), Te.delete(U), fr;
  }
  function Ha(E, U, Q, fe, at, Te, ft) {
    switch (Q) {
      case ge:
        if (E.byteLength != U.byteLength || E.byteOffset != U.byteOffset)
          return !1;
        (E = E.buffer), (U = U.buffer);
      case ue:
        return !(E.byteLength != U.byteLength || !Te(new tr(E), new tr(U)));
      case v:
      case _:
      case B:
        return to(+E, +U);
      case O:
        return E.name == U.name && E.message == U.message;
      case C:
      case h:
        return E == U + "";
      case K:
        var Ft = Ne;
      case A:
        var Qe = fe & o;
        if ((Ft || (Ft = Fe), E.size != U.size && !Qe)) return !1;
        var ct = ft.get(E);
        if (ct) return ct == U;
        (fe |= c), ft.set(E, U);
        var Tt = mn(Ft(E), Ft(U), fe, at, Te, ft);
        return ft.delete(E), Tt;
      case b:
        if (Pt) return Pt.call(E) == Pt.call(U);
    }
    return !1;
  }
  function Gs(E, U, Q, fe, at, Te) {
    var ft = Q & o,
      Ft = wn(E),
      Qe = Ft.length,
      ct = wn(U),
      Tt = ct.length;
    if (Qe != Tt && !ft) return !1;
    for (var fr = Qe; fr--; ) {
      var zt = Ft[fr];
      if (!(ft ? zt in U : xe.call(U, zt))) return !1;
    }
    var dt = Te.get(E);
    if (dt && Te.get(U)) return dt == U;
    var ir = !0;
    Te.set(E, U), Te.set(U, E);
    for (var Br = ft; ++fr < Qe; ) {
      zt = Ft[fr];
      var Nr = E[zt],
        Zr = U[zt];
      if (fe) var Zn = ft ? fe(Zr, Nr, zt, U, E, Te) : fe(Nr, Zr, zt, E, U, Te);
      if (!(Zn === void 0 ? Nr === Zr || at(Nr, Zr, Q, fe, Te) : Zn)) {
        ir = !1;
        break;
      }
      Br || (Br = zt == "constructor");
    }
    if (ir && !Br) {
      var Yi = E.constructor,
        Kt = U.constructor;
      Yi != Kt &&
        "constructor" in E &&
        "constructor" in U &&
        !(
          typeof Yi == "function" &&
          Yi instanceof Yi &&
          typeof Kt == "function" &&
          Kt instanceof Kt
        ) &&
        (ir = !1);
    }
    return Te.delete(E), Te.delete(U), ir;
  }
  function wn(E) {
    return Jn(E, Va, Js);
  }
  function Ci(E, U) {
    var Q = E.__data__;
    return Xs(U) ? Q[typeof U == "string" ? "string" : "hash"] : Q.map;
  }
  function Er(E, U) {
    var Q = Ie(E, U);
    return za(Q) ? Q : void 0;
  }
  function Ys(E) {
    var U = xe.call(E, rr),
      Q = E[rr];
    try {
      E[rr] = void 0;
      var fe = !0;
    } catch {}
    var at = Ge.call(E);
    return fe && (U ? (E[rr] = Q) : delete E[rr]), at;
  }
  var Js = ai
      ? function (E) {
          return E == null
            ? []
            : ((E = Object(E)),
              He(ai(E), function (U) {
                return lr.call(E, U);
              }));
        }
      : ot,
    Xr = Vi;
  ((Dt && Xr(new Dt(new ArrayBuffer(1))) != ge) ||
    (yt && Xr(new yt()) != K) ||
    (St && Xr(St.resolve()) != M) ||
    (It && Xr(new It()) != A) ||
    (bt && Xr(new bt()) != ne)) &&
    (Xr = function (E) {
      var U = Vi(E),
        Q = U == $ ? E.constructor : void 0,
        fe = Q ? ui(Q) : "";
      if (fe)
        switch (fe) {
          case Lt:
            return ge;
          case Ut:
            return K;
          case xt:
            return M;
          case Mt:
            return A;
          case Ot:
            return ne;
        }
      return U;
    });
  function Qs(E, U) {
    return (
      (U = U ?? f),
      !!U &&
        (typeof E == "number" || Se.test(E)) &&
        E > -1 &&
        E % 1 == 0 &&
        E < U
    );
  }
  function Xs(E) {
    var U = typeof E;
    return U == "string" || U == "number" || U == "symbol" || U == "boolean"
      ? E !== "__proto__"
      : E === null;
  }
  function Zs(E) {
    return !!Ve && Ve in E;
  }
  function eo(E) {
    var U = E && E.constructor,
      Q = (typeof U == "function" && U.prototype) || be;
    return E === Q;
  }
  function Ba(E) {
    return Ge.call(E);
  }
  function ui(E) {
    if (E != null) {
      try {
        return Be.call(E);
      } catch {}
      try {
        return E + "";
      } catch {}
    }
    return "";
  }
  function to(E, U) {
    return E === U || (E !== E && U !== U);
  }
  var ro = Qn(
      (function () {
        return arguments;
      })()
    )
      ? Qn
      : function (E) {
          return Gi(E) && xe.call(E, "callee") && !lr.call(E, "callee");
        },
    _n = Array.isArray;
  function Ka(E) {
    return E != null && io(E.length) && !bn(E);
  }
  var Xn = Pi || nt;
  function ka(E, U) {
    return Wi(E, U);
  }
  function bn(E) {
    if (!no(E)) return !1;
    var U = Vi(E);
    return U == P || U == S || U == g || U == I;
  }
  function io(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= f;
  }
  function no(E) {
    var U = typeof E;
    return E != null && (U == "object" || U == "function");
  }
  function Gi(E) {
    return E != null && typeof E == "object";
  }
  var so = Ee ? gt(Ee) : Vs;
  function Va(E) {
    return Ka(E) ? Ks(E) : Ws(E);
  }
  function ot() {
    return [];
  }
  function nt() {
    return !1;
  }
  i.exports = ka;
})(ca, ca.exports);
var p2 = ca.exports;
const g2 = Rs(p2);
function y2(i, e) {
  return (
    (e = e || {}),
    new Promise(function (t, s) {
      var o = new XMLHttpRequest(),
        c = [],
        f = [],
        d = {},
        p = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: p,
            headers: {
              keys: function () {
                return c;
              },
              entries: function () {
                return f;
              },
              get: function (v) {
                return d[v.toLowerCase()];
              },
              has: function (v) {
                return v.toLowerCase() in d;
              },
            },
          };
        };
      for (var g in (o.open(e.method || "get", i, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (v, _, O) {
            c.push((_ = _.toLowerCase())),
              f.push([_, O]),
              (d[_] = d[_] ? d[_] + "," + O : O);
          }),
          t(p());
      }),
      (o.onerror = s),
      (o.withCredentials = e.credentials == "include"),
      e.headers))
        o.setRequestHeader(g, e.headers[g]);
      o.send(e.body || null);
    })
  );
}
const v2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dd = ha(v2);
var m2 = self.fetch || (self.fetch = dd.default || dd);
const w2 = Rs(m2);
var _2 = {};
function b2(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      f = c.charCodeAt(0);
    if (t[f] !== 255) throw new TypeError(c + " is ambiguous");
    t[f] = o;
  }
  var d = i.length,
    p = i.charAt(0),
    g = Math.log(d) / Math.log(256),
    v = Math.log(256) / Math.log(d);
  function _(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var K = 0, B = 0, Z = 0, $ = S.length; Z !== $ && S[Z] === 0; )
      Z++, K++;
    for (var M = (($ - Z) * v + 1) >>> 0, I = new Uint8Array(M); Z !== $; ) {
      for (
        var C = S[Z], A = 0, h = M - 1;
        (C !== 0 || A < B) && h !== -1;
        h--, A++
      )
        (C += (256 * I[h]) >>> 0), (I[h] = C % d >>> 0), (C = (C / d) >>> 0);
      if (C !== 0) throw new Error("Non-zero carry");
      (B = A), Z++;
    }
    for (var b = M - B; b !== M && I[b] === 0; ) b++;
    for (var ee = p.repeat(K); b < M; ++b) ee += i.charAt(I[b]);
    return ee;
  }
  function O(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var K = 0;
    if (S[K] !== " ") {
      for (var B = 0, Z = 0; S[K] === p; ) B++, K++;
      for (
        var $ = ((S.length - K) * g + 1) >>> 0, M = new Uint8Array($);
        S[K];

      ) {
        var I = t[S.charCodeAt(K)];
        if (I === 255) return;
        for (var C = 0, A = $ - 1; (I !== 0 || C < Z) && A !== -1; A--, C++)
          (I += (d * M[A]) >>> 0),
            (M[A] = I % 256 >>> 0),
            (I = (I / 256) >>> 0);
        if (I !== 0) throw new Error("Non-zero carry");
        (Z = C), K++;
      }
      if (S[K] !== " ") {
        for (var h = $ - Z; h !== $ && M[h] === 0; ) h++;
        for (var b = new Uint8Array(B + ($ - h)), ee = B; h !== $; )
          b[ee++] = M[h++];
        return b;
      }
    }
  }
  function P(S) {
    var K = O(S);
    if (K) return K;
    throw new Error(`Non-${e} character`);
  }
  return { encode: _, decodeUnsafe: O, decode: P };
}
var E2 = b2,
  D2 = E2;
const Qp = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  S2 = (i) => new TextEncoder().encode(i),
  I2 = (i) => new TextDecoder().decode(i);
class x2 {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class O2 {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Xp(this, e);
  }
}
class P2 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Xp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Xp = (i, e) =>
  new P2({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class C2 {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new x2(e, t, s)),
      (this.decoder = new O2(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Sa = ({ name: i, prefix: e, encode: t, decode: s }) => new C2(i, e, t, s),
  Fs = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = D2(t, e);
    return Sa({ prefix: i, name: e, encode: s, decode: (c) => Qp(o(c)) });
  },
  A2 = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const f = new Uint8Array(((c * t) / 8) | 0);
    let d = 0,
      p = 0,
      g = 0;
    for (let v = 0; v < c; ++v) {
      const _ = o[i[v]];
      if (_ === void 0) throw new SyntaxError(`Non-${s} character`);
      (p = (p << t) | _),
        (d += t),
        d >= 8 && ((d -= 8), (f[g++] = 255 & (p >> d)));
    }
    if (d >= t || 255 & (p << (8 - d)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  T2 = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      f = 0,
      d = 0;
    for (let p = 0; p < i.length; ++p)
      for (d = (d << 8) | i[p], f += 8; f > t; )
        (f -= t), (c += e[o & (d >> f)]);
    if ((f && (c += e[o & (d << (t - f))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Jt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    Sa({
      prefix: e,
      name: i,
      encode(o) {
        return T2(o, s, t);
      },
      decode(o) {
        return A2(o, s, t, i);
      },
    }),
  R2 = Sa({
    prefix: "\0",
    name: "identity",
    encode: (i) => I2(i),
    decode: (i) => S2(i),
  });
var N2 = Object.freeze({ __proto__: null, identity: R2 });
const $2 = Jt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var L2 = Object.freeze({ __proto__: null, base2: $2 });
const U2 = Jt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var M2 = Object.freeze({ __proto__: null, base8: U2 });
const j2 = Fs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var q2 = Object.freeze({ __proto__: null, base10: j2 });
const F2 = Jt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  z2 = Jt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var H2 = Object.freeze({ __proto__: null, base16: F2, base16upper: z2 });
const B2 = Jt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  K2 = Jt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  k2 = Jt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  V2 = Jt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  W2 = Jt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  G2 = Jt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  Y2 = Jt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  J2 = Jt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  Q2 = Jt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var X2 = Object.freeze({
  __proto__: null,
  base32: B2,
  base32upper: K2,
  base32pad: k2,
  base32padupper: V2,
  base32hex: W2,
  base32hexupper: G2,
  base32hexpad: Y2,
  base32hexpadupper: J2,
  base32z: Q2,
});
const Z2 = Fs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  eS = Fs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var tS = Object.freeze({ __proto__: null, base36: Z2, base36upper: eS });
const rS = Fs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  iS = Fs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var nS = Object.freeze({ __proto__: null, base58btc: rS, base58flickr: iS });
const sS = Jt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  oS = Jt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  aS = Jt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  cS = Jt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var uS = Object.freeze({
  __proto__: null,
  base64: sS,
  base64pad: oS,
  base64url: aS,
  base64urlpad: cS,
});
const Zp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  hS = Zp.reduce((i, e, t) => ((i[t] = e), i), []),
  lS = Zp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function fS(i) {
  return i.reduce((e, t) => ((e += hS[t]), e), "");
}
function dS(i) {
  const e = [];
  for (const t of i) {
    const s = lS[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const pS = Sa({ prefix: "🚀", name: "base256emoji", encode: fS, decode: dS });
var gS = Object.freeze({ __proto__: null, base256emoji: pS }),
  yS = eg,
  pd = 128,
  vS = 127,
  mS = ~vS,
  wS = Math.pow(2, 31);
function eg(i, e, t) {
  (e = e || []), (t = t || 0);
  for (var s = t; i >= wS; ) (e[t++] = (i & 255) | pd), (i /= 128);
  for (; i & mS; ) (e[t++] = (i & 255) | pd), (i >>>= 7);
  return (e[t] = i | 0), (eg.bytes = t - s + 1), e;
}
var _S = $u,
  bS = 128,
  gd = 127;
function $u(i, s) {
  var t = 0,
    s = s || 0,
    o = 0,
    c = s,
    f,
    d = i.length;
  do {
    if (c >= d)
      throw (($u.bytes = 0), new RangeError("Could not decode varint"));
    (f = i[c++]),
      (t += o < 28 ? (f & gd) << o : (f & gd) * Math.pow(2, o)),
      (o += 7);
  } while (f >= bS);
  return ($u.bytes = c - s), t;
}
var ES = Math.pow(2, 7),
  DS = Math.pow(2, 14),
  SS = Math.pow(2, 21),
  IS = Math.pow(2, 28),
  xS = Math.pow(2, 35),
  OS = Math.pow(2, 42),
  PS = Math.pow(2, 49),
  CS = Math.pow(2, 56),
  AS = Math.pow(2, 63),
  TS = function (i) {
    return i < ES
      ? 1
      : i < DS
      ? 2
      : i < SS
      ? 3
      : i < IS
      ? 4
      : i < xS
      ? 5
      : i < OS
      ? 6
      : i < PS
      ? 7
      : i < CS
      ? 8
      : i < AS
      ? 9
      : 10;
  },
  RS = { encode: yS, decode: _S, encodingLength: TS },
  tg = RS;
const yd = (i, e, t = 0) => (tg.encode(i, e, t), e),
  vd = (i) => tg.encodingLength(i),
  Lu = (i, e) => {
    const t = e.byteLength,
      s = vd(i),
      o = s + vd(t),
      c = new Uint8Array(o + t);
    return yd(i, c, 0), yd(t, c, s), c.set(e, o), new NS(i, t, e, c);
  };
class NS {
  constructor(e, t, s, o) {
    (this.code = e), (this.size = t), (this.digest = s), (this.bytes = o);
  }
}
const rg = ({ name: i, code: e, encode: t }) => new $S(i, e, t);
class $S {
  constructor(e, t, s) {
    (this.name = e), (this.code = t), (this.encode = s);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? Lu(this.code, t)
        : t.then((s) => Lu(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const ig = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e)),
  LS = rg({ name: "sha2-256", code: 18, encode: ig("SHA-256") }),
  US = rg({ name: "sha2-512", code: 19, encode: ig("SHA-512") });
var MS = Object.freeze({ __proto__: null, sha256: LS, sha512: US });
const ng = 0,
  jS = "identity",
  sg = Qp,
  qS = (i) => Lu(ng, sg(i)),
  FS = { code: ng, name: jS, encode: sg, digest: qS };
var zS = Object.freeze({ __proto__: null, identity: FS });
new TextEncoder(), new TextDecoder();
const md = {
  ...N2,
  ...L2,
  ...M2,
  ...q2,
  ...H2,
  ...X2,
  ...tS,
  ...nS,
  ...uS,
  ...gS,
};
({ ...MS, ...zS });
function og(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function HS(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? og(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function ag(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const wd = ag(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  uu = ag(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = HS(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  BS = {
    utf8: wd,
    "utf-8": wd,
    hex: md.base16,
    latin1: uu,
    ascii: uu,
    binary: uu,
    ...md,
  };
function KS(i, e = "utf8") {
  const t = BS[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? og(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
const cg = "wc",
  kS = 2,
  sh = "core",
  Fi = `${cg}@2:${sh}:`,
  VS = { name: sh, logger: "error" },
  WS = { database: ":memory:" },
  GS = "crypto",
  _d = "client_ed25519_seed",
  YS = ve.ONE_DAY,
  JS = "keychain",
  QS = "0.3",
  XS = "messages",
  ZS = "0.3",
  eI = ve.SIX_HOURS,
  tI = "publisher",
  ug = "irn",
  rI = "error",
  hg = "wss://relay.walletconnect.com",
  bd = "wss://relay.walletconnect.org",
  iI = "relayer",
  er = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  nI = "_subscription",
  bi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  sI = ve.ONE_SECOND,
  oI = "2.11.2",
  aI = 1e4,
  cI = "0.3",
  uI = "WALLETCONNECT_CLIENT_ID",
  Gr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  hI = "subscription",
  lI = "0.3",
  fI = ve.FIVE_SECONDS * 1e3,
  dI = "pairing",
  pI = "0.3",
  ws = {
    wc_pairingDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Ds = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  ni = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  gI = "history",
  yI = "0.3",
  vI = "expirer",
  zr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  mI = "0.3",
  hu = "verify-api",
  Fn = "https://verify.walletconnect.com",
  Uu = "https://verify.walletconnect.org",
  wI = [Fn, Uu],
  _I = "echo",
  bI = "https://echo.walletconnect.com";
class EI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = JS),
      (this.version = QS),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: c } = ae("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(c);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = e),
      (this.logger = br(t, this.name));
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Pp(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Cp(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class DI {
  constructor(e, t, s) {
    (this.core = e),
      (this.logger = t),
      (this.name = GS),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          c = sd(o);
        return Bp(c.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = QE();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const c = await this.getClientSeed(),
          f = sd(c),
          d = Au();
        return await V6(d, o, YS, f);
      }),
      (this.generateSharedKey = (o, c, f) => {
        this.isInitialized();
        const d = this.getPrivateKey(o),
          p = XE(d, c);
        return this.setSymKey(p, f);
      }),
      (this.setSymKey = async (o, c) => {
        this.isInitialized();
        const f = c || ZE(o);
        return await this.keychain.set(f, o), f;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, c, f) => {
        this.isInitialized();
        const d = Op(f),
          p = un(c);
        if ($f(d)) {
          const O = d.senderPublicKey,
            P = d.receiverPublicKey;
          o = await this.generateSharedKey(O, P);
        }
        const g = this.getSymKey(o),
          { type: v, senderPublicKey: _ } = d;
        return tD({ type: v, symKey: g, message: p, senderPublicKey: _ });
      }),
      (this.decode = async (o, c, f) => {
        this.isInitialized();
        const d = nD(c, f);
        if ($f(d)) {
          const p = d.receiverPublicKey,
            g = d.senderPublicKey;
          o = await this.generateSharedKey(p, g);
        }
        try {
          const p = this.getSymKey(o),
            g = rD({ symKey: p, encoded: c });
          return js(g);
        } catch (p) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(p);
        }
      }),
      (this.getPayloadType = (o) => {
        const c = sa(o);
        return Ls(c.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const c = sa(o);
        return c.senderPublicKey ? hr(c.senderPublicKey, ur) : void 0;
      }),
      (this.core = e),
      (this.logger = br(t, this.name)),
      (this.keychain = s || new EI(this.core, this.logger));
  }
  get context() {
    return _r(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(_d);
    } catch {
      (e = Au()), await this.keychain.set(_d, e);
    }
    return KS(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class SI extends D6 {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = XS),
      (this.version = ZS),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const c = Hn(o);
        let f = this.messages.get(s);
        return (
          typeof f > "u" && (f = {}),
          typeof f[c] < "u" ||
            ((f[c] = o), this.messages.set(s, f), await this.persist()),
          c
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const c = this.get(s),
          f = Hn(o);
        return typeof c[f] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = br(e, this.name)),
      (this.core = t);
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Pp(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Cp(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class II extends S6 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new Ar.EventEmitter()),
      (this.name = tI),
      (this.queue = new Map()),
      (this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, c) => {
        var f;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: c },
          });
        try {
          const d = (c == null ? void 0 : c.ttl) || eI,
            p = Tu(c),
            g = (c == null ? void 0 : c.prompt) || !1,
            v = (c == null ? void 0 : c.tag) || 0,
            _ = (c == null ? void 0 : c.id) || Gp().toString(),
            O = {
              topic: s,
              message: o,
              opts: { ttl: d, relay: p, prompt: g, tag: v, id: _ },
            },
            P = setTimeout(() => this.queue.set(_, O), this.publishTimeout);
          try {
            await await Ps(
              this.rpcPublish(s, o, d, p, g, v, _),
              this.publishTimeout,
              `Failed to publish payload, please try again. id:${_} tag:${v}`
            ),
              this.removeRequestFromQueue(_),
              this.relayer.events.emit(er.publish, O);
          } catch (S) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (f = c == null ? void 0 : c.internal) != null &&
                f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(_), S);
            return;
          } finally {
            clearTimeout(P);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: c },
            });
        } catch (d) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(d),
            d)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = e),
      (this.logger = br(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return _r(this.logger);
  }
  rpcPublish(e, t, s, o, c, f, d) {
    var p, g, v, _;
    const O = {
      method: ea(o.protocol).publish,
      params: { topic: e, message: t, ttl: s, prompt: c, tag: f },
      id: d,
    };
    return (
      cr((p = O.params) == null ? void 0 : p.prompt) &&
        ((g = O.params) == null || delete g.prompt),
      cr((v = O.params) == null ? void 0 : v.tag) &&
        ((_ = O.params) == null || delete _.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: O }),
      this.relayer.request(O)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: o } = e;
      await this.publish(t, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(er.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(er.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class xI {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const s = this.get(e);
        this.exists(e, t) || this.map.set(e, [...s, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const s = this.get(e);
        if (!this.exists(e, t)) return;
        const o = s.filter((c) => c !== t);
        if (!o.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var OI = Object.defineProperty,
  PI = Object.defineProperties,
  CI = Object.getOwnPropertyDescriptors,
  Ed = Object.getOwnPropertySymbols,
  AI = Object.prototype.hasOwnProperty,
  TI = Object.prototype.propertyIsEnumerable,
  Dd = (i, e, t) =>
    e in i
      ? OI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  _s = (i, e) => {
    for (var t in e || (e = {})) AI.call(e, t) && Dd(i, t, e[t]);
    if (Ed) for (var t of Ed(e)) TI.call(e, t) && Dd(i, t, e[t]);
    return i;
  },
  lu = (i, e) => PI(i, CI(e));
class RI extends O6 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new xI()),
      (this.events = new Ar.EventEmitter()),
      (this.name = hI),
      (this.version = lI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Fi),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const c = Tu(o),
            f = { topic: s, relay: c };
          this.pending.set(s, f);
          const d = await this.rpcSubscribe(s, c);
          return (
            this.onSubscribe(d, f),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            d
          );
        } catch (c) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(c),
            c)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (o == null ? void 0 : o.id) < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) => {
        if (this.topics.includes(s)) return !0;
        const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
        return await new Promise((c, f) => {
          const d = new ve.Watch();
          d.start(o);
          const p = setInterval(() => {
            !this.pending.has(s) &&
              this.topics.includes(s) &&
              (clearInterval(p), d.stop(o), c(!0)),
              d.elapsed(o) >= fI &&
                (clearInterval(p),
                d.stop(o),
                f(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = br(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = !1;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: s },
      });
    try {
      const o = Tu(s);
      await this.rpcUnsubscribe(e, t, o);
      const c = wt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, c),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: ea(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
    return Hn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      s = {
        method: ea(t.protocol).batchSubscribe,
        params: { topics: e.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Ps(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const o = {
      method: ea(s.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, lu(_s({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, _s({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, s),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, _s({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(Gr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(s.topic, e),
      this.events.emit(Gr.deleted, lu(_s({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Gr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Gr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    oi(t) &&
      this.onBatchSubscribe(t.map((s, o) => lu(_s({}, e[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(er.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(er.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Gr.created, async (e) => {
        const t = Gr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(Gr.deleted, async (e) => {
        const t = Gr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.restartInProgress || (clearInterval(t), e());
        }, this.pollingInterval);
      }));
  }
}
var NI = Object.defineProperty,
  Sd = Object.getOwnPropertySymbols,
  $I = Object.prototype.hasOwnProperty,
  LI = Object.prototype.propertyIsEnumerable,
  Id = (i, e, t) =>
    e in i
      ? NI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  UI = (i, e) => {
    for (var t in e || (e = {})) $I.call(e, t) && Id(i, t, e[t]);
    if (Sd) for (var t of Sd(e)) LI.call(e, t) && Id(i, t, e[t]);
    return i;
  };
class MI extends I6 {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Ar.EventEmitter()),
      (this.name = iI),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.request = async (t) => {
        this.logger.debug("Publishing Request Payload");
        const s = t.id;
        try {
          await this.toEstablishConnection();
          const o = this.provider.request(t);
          return (
            this.requestsInFlight.set(s, { promise: o, request: t }), await o
          );
        } catch (o) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(o),
            o)
          );
        } finally {
          this.requestsInFlight.delete(s);
        }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(er.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(er.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(bi.payload, this.onPayloadHandler),
          this.provider.on(bi.connect, this.onConnectHandler),
          this.provider.on(bi.disconnect, this.onDisconnectHandler),
          this.provider.on(bi.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? br(e.logger, this.name)
          : wa(_a({ level: e.logger || rI }))),
      (this.messages = new SI(this.logger, e.core)),
      (this.subscriber = new RI(this, this.logger)),
      (this.publisher = new II(this, this.logger)),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || hg),
      (this.projectId = e.projectId),
      (this.bundleId = hD()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${bd}...`
      ),
        await this.restartTransport(bd);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, aI);
  }
  get context() {
    return _r(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(),
      await this.publisher.publish(e, t, s),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
      });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let c;
    const f = (d) => {
      d.topic === e && (this.subscriber.off(Gr.created, f), c());
    };
    return (
      await Promise.all([
        new Promise((d) => {
          (c = d), this.subscriber.on(Gr.created, f);
        }),
        new Promise(async (d) => {
          (o = await this.subscriber.subscribe(e, t)), d();
        }),
      ]),
      o
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 &&
      (this.logger.debug(
        "Waiting for all in-flight requests to finish before closing transport..."
      ),
      this.requestsInFlight.forEach(async (e) => {
        await e.promise;
      })),
      (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await Ps(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(e) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((t) => {
            if (!this.initialized) return t();
            this.subscriber.once(Gr.resubscribed, () => {
              t();
            });
          }),
          new Promise(async (t, s) => {
            try {
              await Ps(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            t();
          }),
        ]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message)) throw t;
        this.provider.events.emit(bi.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = e || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await kf()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new xi(
      new d2(
        yD({
          sdkVersion: oI,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const o = this.messages.has(t, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      nh(e))
    ) {
      if (!e.method.endsWith(nI)) return;
      const t = e.params,
        { topic: s, message: o, publishedAt: c } = t.data,
        f = { topic: s, message: o, publishedAt: c };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(UI({ type: "event", event: t.id }, f)),
        this.events.emit(t.id, f),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(f);
    } else Da(e) && this.events.emit(er.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(er.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = ba(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(bi.payload, this.onPayloadHandler),
      this.provider.off(bi.connect, this.onConnectHandler),
      this.provider.off(bi.disconnect, this.onDisconnectHandler),
      this.provider.off(bi.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(er.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await kf();
    h3(async (t) => {
      this.initialized &&
        e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(er.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((e) => this.logger.error(e));
      }, ve.toMiliseconds(sI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var jI = Object.defineProperty,
  xd = Object.getOwnPropertySymbols,
  qI = Object.prototype.hasOwnProperty,
  FI = Object.prototype.propertyIsEnumerable,
  Od = (i, e, t) =>
    e in i
      ? jI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Pd = (i, e) => {
    for (var t in e || (e = {})) qI.call(e, t) && Od(i, t, e[t]);
    if (xd) for (var t of xd(e)) FI.call(e, t) && Od(i, t, e[t]);
    return i;
  };
class Ia extends x6 {
  constructor(e, t, s, o = Fi, c = void 0) {
    super(e, t, s, o),
      (this.core = e),
      (this.logger = t),
      (this.name = s),
      (this.map = new Map()),
      (this.version = cI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !cr(f)
              ? this.map.set(this.getKey(f), f)
              : zD(f)
              ? this.map.set(f.id, f)
              : HD(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, d) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, d)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: d,
              }),
              this.map.set(f, d),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f
          ? this.values.filter((d) =>
              Object.keys(f).every((p) => g2(d[p], f[p]))
            )
          : this.values
      )),
      (this.update = async (f, d) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: f,
            update: d,
          });
        const p = Pd(Pd({}, this.getData(f)), d);
        this.map.set(f, p), await this.persist();
      }),
      (this.delete = async (f, d) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: f,
              reason: d,
            }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = br(t, this.name)),
      (this.storagePrefix = o),
      (this.getKey = c);
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class zI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = dI),
      (this.version = pI),
      (this.events = new Hu()),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.ignoredPayloadTypes = [ln]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Au(),
          o = await this.core.crypto.setSymKey(s),
          c = Pr(ve.FIVE_MINUTES),
          f = { protocol: ug },
          d = { topic: o, expiry: c, relay: f, active: !1 },
          p = RD({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: f,
            expiryTimestamp: c,
          });
        return (
          await this.pairings.set(o, d),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, c),
          { topic: o, uri: p }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: c, relay: f, expiryTimestamp: d } = Ff(s.uri);
        let p;
        if (
          this.pairings.keys.includes(o) &&
          ((p = this.pairings.get(o)), p.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const g = d || Pr(ve.FIVE_MINUTES),
          v = { topic: o, relay: f, expiry: g, active: !1 };
        return (
          await this.pairings.set(o, v),
          this.core.expirer.set(o, g),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(Ds.create, v),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, { relay: f })),
          v
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = Pr(ve.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const c = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: f, resolve: d, reject: p } = qn();
          this.events.once($t("pairing_ping", c), ({ error: g }) => {
            g ? p(g) : d();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            wt("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, c) => {
        const f = Bn(o, c),
          d = await this.core.crypto.encode(s, f),
          p = ws[o].req;
        return (
          this.core.history.set(s, f), this.core.relayer.publish(s, d, p), f.id
        );
      }),
      (this.sendResult = async (s, o, c) => {
        const f = ba(s, c),
          d = await this.core.crypto.encode(o, f),
          p = await this.core.history.get(o, s),
          g = ws[p.request.method].res;
        await this.core.relayer.publish(o, d, g),
          await this.core.history.resolve(f);
      }),
      (this.sendError = async (s, o, c) => {
        const f = Ea(s, c),
          d = await this.core.crypto.encode(o, f),
          p = await this.core.history.get(o, s),
          g = ws[p.request.method]
            ? ws[p.request.method].res
            : ws.unregistered_method.res;
        await this.core.relayer.publish(o, d, g),
          await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, wt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => qi(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: c } = s;
        switch (c.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, c);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, c);
          default:
            return this.onUnknownRpcMethodRequest(o, c);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: c } = s,
          f = (await this.core.history.get(o, c.id)).request.method;
        switch (f) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, c);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(c, s, !0),
            this.events.emit(Ds.ping, { id: c, topic: s });
        } catch (f) {
          await this.sendError(c, s, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: c } = o;
        setTimeout(() => {
          Si(o)
            ? this.events.emit($t("pairing_ping", c), {})
            : Yr(o) &&
              this.events.emit($t("pairing_ping", c), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(Ds.delete, { id: c, topic: s });
        } catch (f) {
          await this.sendError(c, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: c, method: f } = o;
        try {
          if (this.registeredMethods.includes(f)) return;
          const d = wt("WC_METHOD_UNSUPPORTED", f);
          await this.sendError(c, s, d), this.logger.error(d);
        } catch (d) {
          await this.sendError(c, s, d), this.logger.error(d);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error(wt("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!mr(s)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `pair() params: ${s}`
          );
          throw new Error(f);
        }
        if (!FD(s.uri)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(f);
        }
        const c = Ff(s.uri);
        if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(f);
        }
        if (!(c != null && c.symKey)) {
          const { message: f } = ae("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(f);
        }
        if (
          c != null &&
          c.expiryTimestamp &&
          ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()
        ) {
          const { message: f } = ae(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!Wt(s, !1)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = ae(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (qi(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = ae("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = e),
      (this.logger = br(t, this.name)),
      (this.pairings = new Ia(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return _r(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        !this.pairings.keys.includes(t) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(t, s);
      try {
        nh(o)
          ? (this.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : Da(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.core.history.delete(t, o.id));
      } catch (c) {
        this.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(zr.expired, async (e) => {
      const { topic: t } = Tp(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(Ds.expire, { topic: t }));
    });
  }
}
class HI extends E6 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new Ar.EventEmitter()),
      (this.name = gI),
      (this.version = yI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, c) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: c,
          }),
          this.records.has(o.id))
        )
          return;
        const f = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: c,
          expiry: Pr(ve.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(ni.created, f);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Yr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(ni.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((c) => {
            if (c.topic === s) {
              if (typeof o < "u" && c.id !== o) return;
              this.records.delete(c.id), this.events.emit(ni.deleted, c);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = br(t, this.name));
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const s = {
          topic: t.topic,
          request: Bn(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(s);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ni.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ni.created, (e) => {
      const t = ni.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e }),
        this.persist();
    }),
      this.events.on(ni.updated, (e) => {
        const t = ni.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.events.on(ni.deleted, (e) => {
        const t = ni.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${e.id}`),
          this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class BI extends P6 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new Ar.EventEmitter()),
      (this.name = vI),
      (this.version = mI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Fi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const c = this.formatTarget(s),
          f = { target: c, expiry: o };
        this.expirations.set(c, f),
          this.checkExpiry(c, f),
          this.events.emit(zr.created, { target: c, expiration: f });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            c = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit(zr.deleted, { target: o, expiration: c });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = br(t, this.name));
  }
  get context() {
    return _r(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return vD(e);
    if (typeof e == "number") return mD(e);
    const { message: t } = ae("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(zr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(zr.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Yn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(zr.created, (e) => {
        const t = zr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(zr.expired, (e) => {
        const t = zr.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(zr.deleted, (e) => {
        const t = zr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class KI extends C6 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.name = hu),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Vn() || !Wn()) return;
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (c) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(c);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = Uu);
          try {
            await this.createIframe();
          } catch (c) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(c),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        let c;
        try {
          c = await this.fetchAttestation(s.attestationId, o);
        } catch (f) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(f),
            (c = await this.fetchAttestation(s.attestationId, Uu));
        }
        return c;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const c = this.startAbortTimer(ve.ONE_SECOND * 2),
          f = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(c), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (c) => {
          c.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((c) => {
            if (document.getElementById(hu)) return c();
            window.addEventListener("message", o);
            const f = document.createElement("iframe");
            (f.id = hu),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = "none"),
              document.body.append(f),
              (this.iframe = f),
              (s = c);
          }),
          new Promise((c, f) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                f("verify iframe load timeout");
            }, ve.toMiliseconds(ve.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || Fn;
        return (
          wI.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${Fn}`
            ),
            (o = Fn)),
          o
        );
      }),
      (this.logger = br(t, this.name)),
      (this.verifyUrl = Fn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Xu() && _2.IS_VITEST);
  }
  get context() {
    return _r(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e))
    );
  }
}
class kI extends A6 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = _I),
      (this.registerDeviceToken = async (s) => {
        const {
            clientId: o,
            token: c,
            notificationType: f,
            enableEncrypted: d = !1,
          } = s,
          p = `${bI}/${this.projectId}/clients`;
        await w2(p, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: o,
            type: f,
            token: c,
            always_raw: d,
          }),
        });
      }),
      (this.logger = br(t, this.context));
  }
}
var VI = Object.defineProperty,
  Cd = Object.getOwnPropertySymbols,
  WI = Object.prototype.hasOwnProperty,
  GI = Object.prototype.propertyIsEnumerable,
  Ad = (i, e, t) =>
    e in i
      ? VI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Td = (i, e) => {
    for (var t in e || (e = {})) WI.call(e, t) && Ad(i, t, e[t]);
    if (Cd) for (var t of Cd(e)) GI.call(e, t) && Ad(i, t, e[t]);
    return i;
  };
class oh extends b6 {
  constructor(e) {
    super(e),
      (this.protocol = cg),
      (this.version = kS),
      (this.name = sh),
      (this.events = new Ar.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = e == null ? void 0 : e.projectId),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || hg),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : wa(_a({ level: (e == null ? void 0 : e.logger) || VS.logger }));
    (this.logger = br(t, this.name)),
      (this.heartbeat = new Yn.HeartBeat()),
      (this.crypto = new DI(
        this,
        this.logger,
        e == null ? void 0 : e.keychain
      )),
      (this.history = new HI(this, this.logger)),
      (this.expirer = new BI(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new K3(Td(Td({}, WS), e == null ? void 0 : e.storageOptions))),
      (this.relayer = new MI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new zI(this, this.logger)),
      (this.verify = new KI(this.projectId || "", this.logger)),
      (this.echoClient = new kI(this.projectId || "", this.logger));
  }
  static async init(e) {
    const t = new oh(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(uI, s), t;
  }
  get context() {
    return _r(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const YI = oh,
  lg = "wc",
  fg = 2,
  dg = "client",
  ah = `${lg}@${fg}:${dg}:`,
  fu = {
    name: dg,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  Rd = "WALLETCONNECT_DEEPLINK_CHOICE",
  JI = "proposal",
  pg = "Proposal expired",
  QI = "session",
  Jo = ve.SEVEN_DAYS,
  XI = "engine",
  Ei = {
    wc_sessionPropose: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  du = { min: ve.FIVE_MINUTES, max: ve.SEVEN_DAYS },
  Di = { idle: "IDLE", active: "ACTIVE" },
  ZI = "request",
  e5 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var t5 = Object.defineProperty,
  r5 = Object.defineProperties,
  i5 = Object.getOwnPropertyDescriptors,
  Nd = Object.getOwnPropertySymbols,
  n5 = Object.prototype.hasOwnProperty,
  s5 = Object.prototype.propertyIsEnumerable,
  $d = (i, e, t) =>
    e in i
      ? t5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ar = (i, e) => {
    for (var t in e || (e = {})) n5.call(e, t) && $d(i, t, e[t]);
    if (Nd) for (var t of Nd(e)) s5.call(e, t) && $d(i, t, e[t]);
    return i;
  },
  jn = (i, e) => r5(i, i5(e));
class o5 extends R6 {
  constructor(e) {
    super(e),
      (this.name = XI),
      (this.events = new Hu()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [ln]),
      (this.requestQueue = { state: Di.idle, queue: [] }),
      (this.sessionRequestQueue = { state: Di.idle, queue: [] }),
      (this.requestQueueDelay = ve.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(Ei) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        await this.isInitialized();
        const s = jn(ar({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: c,
          optionalNamespaces: f,
          sessionProperties: d,
          relays: p,
        } = s;
        let g = o,
          v,
          _ = !1;
        if (
          (g && (_ = this.client.core.pairing.pairings.get(g).active), !g || !_)
        ) {
          const { topic: I, uri: C } = await this.client.core.pairing.create();
          (g = I), (v = C);
        }
        const O = await this.client.core.crypto.generateKeyPair(),
          P = Ei.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES,
          S = Pr(P),
          K = ar(
            {
              requiredNamespaces: c,
              optionalNamespaces: f,
              relays: p ?? [{ protocol: ug }],
              proposer: { publicKey: O, metadata: this.client.metadata },
              expiryTimestamp: S,
            },
            d && { sessionProperties: d }
          ),
          { reject: B, resolve: Z, done: $ } = qn(P, pg);
        if (
          (this.events.once(
            $t("session_connect"),
            async ({ error: I, session: C }) => {
              if (I) B(I);
              else if (C) {
                C.self.publicKey = O;
                const A = jn(ar({}, C), {
                  requiredNamespaces: K.requiredNamespaces,
                  optionalNamespaces: K.optionalNamespaces,
                });
                await this.client.session.set(C.topic, A),
                  await this.setExpiry(C.topic, C.expiry),
                  g &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: g,
                      metadata: C.peer.metadata,
                    })),
                  Z(A);
              }
            }
          ),
          !g)
        ) {
          const { message: I } = ae(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${g}`
          );
          throw new Error(I);
        }
        const M = await this.sendRequest({
          topic: g,
          method: "wc_sessionPropose",
          params: K,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(M, ar({ id: M }, K)), { uri: v, approval: $ }
        );
      }),
      (this.pair = async (t) => (
        await this.isInitialized(), await this.client.core.pairing.pair(t)
      )),
      (this.approve = async (t) => {
        await this.isInitialized(), await this.isValidApprove(t);
        const {
            id: s,
            relayProtocol: o,
            namespaces: c,
            sessionProperties: f,
          } = t,
          d = this.client.proposal.get(s);
        let {
          pairingTopic: p,
          proposer: g,
          requiredNamespaces: v,
          optionalNamespaces: _,
        } = d;
        p = p || "";
        const O = await this.client.core.crypto.generateKeyPair(),
          P = g.publicKey,
          S = await this.client.core.crypto.generateSharedKey(O, P);
        p &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: p,
            metadata: g.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: p,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: O },
          }),
          await this.client.proposal.delete(s, wt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: p }));
        const K = ar(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: c,
            pairingTopic: p,
            controller: { publicKey: O, metadata: this.client.metadata },
            expiry: Pr(Jo),
          },
          f && { sessionProperties: f }
        );
        await this.client.core.relayer.subscribe(S);
        const B = jn(ar({}, K), {
          topic: S,
          requiredNamespaces: v,
          optionalNamespaces: _,
          pairingTopic: p,
          acknowledged: !1,
          self: K.controller,
          peer: { publicKey: g.publicKey, metadata: g.metadata },
          controller: O,
        });
        await this.client.session.set(S, B);
        try {
          await this.sendRequest({
            topic: S,
            method: "wc_sessionSettle",
            params: K,
            throwOnFailedPublish: !0,
          });
        } catch (Z) {
          throw (
            (this.client.logger.error(Z),
            this.client.session.delete(S, wt("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(S),
            Z)
          );
        }
        return (
          await this.setExpiry(S, Pr(Jo)),
          {
            topic: S,
            acknowledged: () =>
              new Promise((Z) =>
                setTimeout(() => Z(this.client.session.get(S)), 500)
              ),
          }
        );
      }),
      (this.reject = async (t) => {
        await this.isInitialized(), await this.isValidReject(t);
        const { id: s, reason: o } = t,
          { pairingTopic: c } = this.client.proposal.get(s);
        c &&
          (await this.sendError(s, c, o),
          await this.client.proposal.delete(s, wt("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        await this.isInitialized(), await this.isValidUpdate(t);
        const { topic: s, namespaces: o } = t,
          c = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: f, resolve: d, reject: p } = qn();
        return (
          this.events.once($t("session_update", c), ({ error: g }) => {
            g ? p(g) : d();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (t) => {
        await this.isInitialized(), await this.isValidExtend(t);
        const { topic: s } = t,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: c, resolve: f, reject: d } = qn();
        return (
          this.events.once($t("session_extend", o), ({ error: p }) => {
            p ? d(p) : f();
          }),
          await this.setExpiry(s, Pr(Jo)),
          { acknowledged: c }
        );
      }),
      (this.request = async (t) => {
        await this.isInitialized(), await this.isValidRequest(t);
        const {
            chainId: s,
            request: o,
            topic: c,
            expiry: f = Ei.wc_sessionRequest.req.ttl,
          } = t,
          d = ih(),
          {
            done: p,
            resolve: g,
            reject: v,
          } = qn(f, "Request expired. Please try again.");
        return (
          this.events.once(
            $t("session_request", d),
            ({ error: _, result: O }) => {
              _ ? v(_) : g(O);
            }
          ),
          await Promise.all([
            new Promise(async (_) => {
              await this.sendRequest({
                clientRpcId: d,
                topic: c,
                method: "wc_sessionRequest",
                params: {
                  request: jn(ar({}, o), { expiryTimestamp: Pr(f) }),
                  chainId: s,
                },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch((O) => v(O)),
                this.client.events.emit("session_request_sent", {
                  topic: c,
                  request: o,
                  chainId: s,
                  id: d,
                }),
                _();
            }),
            new Promise(async (_) => {
              const O = await _D(this.client.core.storage, Rd);
              wD({ id: d, topic: c, wcDeepLink: O }), _();
            }),
            p(),
          ]).then((_) => _[2])
        );
      }),
      (this.respond = async (t) => {
        await this.isInitialized(), await this.isValidRespond(t);
        const { topic: s, response: o } = t,
          { id: c } = o;
        Si(o)
          ? await this.sendResult({
              id: c,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Yr(o) && (await this.sendError(c, s, o.error)),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        await this.isInitialized(), await this.isValidPing(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: c, resolve: f, reject: d } = qn();
          this.events.once($t("session_ping", o), ({ error: p }) => {
            p ? d(p) : f();
          }),
            await c();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (t) => {
        await this.isInitialized(), await this.isValidEmit(t);
        const { topic: s, event: o, chainId: c } = t;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: c },
        });
      }),
      (this.disconnect = async (t) => {
        await this.isInitialized(), await this.isValidDisconnect(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s))
          await this.sendRequest({
            topic: s,
            method: "wc_sessionDelete",
            params: wt("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: s, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(s))
          await this.client.core.pairing.disconnect({ topic: s });
        else {
          const { message: o } = ae(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${s}`
          );
          throw new Error(o);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => jD(s, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(t.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((c) => {
                var f, d;
                return (
                  ((f = c.peerMetadata) == null ? void 0 : f.url) &&
                  ((d = c.peerMetadata) == null ? void 0 : d.url) ===
                    t.peer.metadata.url &&
                  c.topic &&
                  c.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((c) =>
                  this.client.core.pairing.disconnect({ topic: c.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (t) => {
        const {
            topic: s,
            expirerHasDeleted: o = !1,
            emitEvent: c = !0,
            id: f = 0,
          } = t,
          { self: d } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, wt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(d.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(d.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          o || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(Rd)
            .catch((p) => this.client.logger.warn(p)),
          this.getPendingSessionRequests().forEach((p) => {
            p.topic === s &&
              this.deletePendingSessionRequest(p.id, wt("USER_DISCONNECTED"));
          }),
          c && this.client.events.emit("session_delete", { id: f, topic: s });
      }),
      (this.deleteProposal = async (t, s) => {
        await Promise.all([
          this.client.proposal.delete(t, wt("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.deletePendingSessionRequest = async (t, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, s),
          o ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((c) => c.id !== t)),
          o &&
            ((this.sessionRequestQueue.state = Di.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.setExpiry = async (t, s) => {
        this.client.session.keys.includes(t) &&
          (await this.client.session.update(t, { expiry: s })),
          this.client.core.expirer.set(t, s);
      }),
      (this.setProposal = async (t, s) => {
        await this.client.proposal.set(t, s),
          this.client.core.expirer.set(t, Pr(Ei.wc_sessionPropose.req.ttl));
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: s, topic: o, params: c, verifyContext: f } = t,
          d = c.request.expiryTimestamp || Pr(Ei.wc_sessionRequest.req.ttl);
        await this.client.pendingRequest.set(s, {
          id: s,
          topic: o,
          params: c,
          verifyContext: f,
        }),
          d && this.client.core.expirer.set(s, d);
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: s,
            method: o,
            params: c,
            expiry: f,
            relayRpcId: d,
            clientRpcId: p,
            throwOnFailedPublish: g,
          } = t,
          v = Bn(o, c, p);
        if (Wn() && e5.includes(o)) {
          const P = Hn(JSON.stringify(v));
          this.client.core.verify.register({ attestationId: P });
        }
        const _ = await this.client.core.crypto.encode(s, v),
          O = Ei[o].req;
        return (
          f && (O.ttl = f),
          d && (O.id = d),
          this.client.core.history.set(s, v),
          g
            ? ((O.internal = jn(ar({}, O.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, _, O))
            : this.client.core.relayer
                .publish(s, _, O)
                .catch((P) => this.client.logger.error(P)),
          v.id
        );
      }),
      (this.sendResult = async (t) => {
        const { id: s, topic: o, result: c, throwOnFailedPublish: f } = t,
          d = ba(s, c),
          p = await this.client.core.crypto.encode(o, d),
          g = await this.client.core.history.get(o, s),
          v = Ei[g.request.method].res;
        f
          ? ((v.internal = jn(ar({}, v.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, p, v))
          : this.client.core.relayer
              .publish(o, p, v)
              .catch((_) => this.client.logger.error(_)),
          await this.client.core.history.resolve(d);
      }),
      (this.sendError = async (t, s, o) => {
        const c = Ea(t, o),
          f = await this.client.core.crypto.encode(s, c),
          d = await this.client.core.history.get(s, t),
          p = Ei[d.request.method].res;
        this.client.core.relayer.publish(s, f, p),
          await this.client.core.history.resolve(c);
      }),
      (this.cleanup = async () => {
        const t = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          let c = !1;
          qi(o.expiry) && (c = !0),
            this.client.core.crypto.keychain.has(o.topic) || (c = !0),
            c && t.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            qi(o.expiryTimestamp) && s.push(o.id);
          }),
          await Promise.all([
            ...t.map((o) => this.deleteSession({ topic: o })),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === Di.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = Di.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              this.processRequest(t),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = Di.idle;
      }),
      (this.processRequest = (t) => {
        const { topic: s, payload: o } = t,
          c = o.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: s, payload: o } = t,
          c = (await this.client.core.history.get(s, o.id)).request.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${c}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: s } = t,
          { message: o } = ae(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          this.isValidConnect(ar({}, s.params));
          const f = o.expiryTimestamp || Pr(Ei.wc_sessionPropose.req.ttl),
            d = ar({ id: c, pairingTopic: t, expiryTimestamp: f }, o);
          await this.setProposal(c, d);
          const p = Hn(JSON.stringify(s)),
            g = await this.getVerifyContext(p, d.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: c,
            params: d,
            verifyContext: g,
          });
        } catch (f) {
          await this.sendError(c, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (t, s) => {
        const { id: o } = s;
        if (Si(s)) {
          const { result: c } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: c,
          });
          const f = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: f,
          });
          const d = f.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: d,
          });
          const p = c.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: p,
          });
          const g = await this.client.core.crypto.generateSharedKey(d, p);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: g,
          });
          const v = await this.client.core.relayer.subscribe(g);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: v,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else
          Yr(s) &&
            (await this.client.proposal.delete(o, wt("USER_DISCONNECTED")),
            this.events.emit($t("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidSessionSettleRequest(c);
          const {
              relay: f,
              controller: d,
              expiry: p,
              namespaces: g,
              sessionProperties: v,
              pairingTopic: _,
            } = s.params,
            O = ar(
              {
                topic: t,
                relay: f,
                expiry: p,
                namespaces: g,
                acknowledged: !0,
                pairingTopic: _,
                requiredNamespaces: {},
                optionalNamespaces: {},
                controller: d.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: d.publicKey, metadata: d.metadata },
              },
              v && { sessionProperties: v }
            );
          await this.sendResult({ id: s.id, topic: t, result: !0 }),
            this.events.emit($t("session_connect"), { session: O }),
            this.cleanupDuplicatePairings(O);
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (t, s) => {
        const { id: o } = s;
        Si(s)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit($t("session_approve", o), {}))
          : Yr(s) &&
            (await this.client.session.delete(t, wt("USER_DISCONNECTED")),
            this.events.emit($t("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          const f = `${t}_session_update`,
            d = Vo.get(f);
          if (d && this.isRequestOutOfSync(d, c)) {
            this.client.logger.info(`Discarding out of sync request - ${c}`);
            return;
          }
          this.isValidUpdate(ar({ topic: t }, o)),
            await this.client.session.update(t, { namespaces: o.namespaces }),
            await this.sendResult({ id: c, topic: t, result: !0 }),
            this.client.events.emit("session_update", {
              id: c,
              topic: t,
              params: o,
            }),
            Vo.set(f, c);
        } catch (f) {
          await this.sendError(c, t, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (t, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit($t("session_update", o), {})
          : Yr(s) &&
            this.events.emit($t("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, Pr(Jo)),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionExtendResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit($t("session_extend", o), {})
          : Yr(s) &&
            this.events.emit($t("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionPingResponse = (t, s) => {
        const { id: o } = s;
        setTimeout(() => {
          Si(s)
            ? this.events.emit($t("session_ping", o), {})
            : Yr(s) &&
              this.events.emit($t("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: t, reason: s.params }),
            await Promise.all([
              new Promise((c) => {
                this.client.core.relayer.once(er.publish, async () => {
                  c(await this.deleteSession({ topic: t, id: o }));
                });
              }),
              this.sendResult({ id: o, topic: t, result: !0 }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: wt("USER_DISCONNECTED"),
              }),
            ]);
        } catch (c) {
          this.client.logger.error(c);
        }
      }),
      (this.onSessionRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidRequest(ar({ topic: t }, c));
          const f = Hn(JSON.stringify(Bn("wc_sessionRequest", c, o))),
            d = this.client.session.get(t),
            p = await this.getVerifyContext(f, d.peer.metadata),
            g = { id: o, topic: t, params: c, verifyContext: p };
          await this.setPendingSessionRequest(g),
            this.addSessionRequestToSessionRequestQueue(g),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (t, s) => {
        const { id: o } = s;
        Si(s)
          ? this.events.emit($t("session_request", o), { result: s.result })
          : Yr(s) &&
            this.events.emit($t("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          const f = `${t}_session_event_${c.event.name}`,
            d = Vo.get(f);
          if (d && this.isRequestOutOfSync(d, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(ar({ topic: t }, c)),
            this.client.events.emit("session_event", {
              id: o,
              topic: t,
              params: c,
            }),
            Vo.set(f, o);
        } catch (f) {
          await this.sendError(o, t, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = Di.idle),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: s }) => {
        const o = this.client.core.history.pending;
        o.length > 0 &&
          o
            .filter(
              (c) => c.topic === t && c.request.method === "wc_sessionRequest"
            )
            .forEach((c) => {
              this.events.emit($t("session_request", c.request.id), {
                error: s,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === Di.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = Di.active),
            this.client.events.emit("session_request", t);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (t) => {
        if (t.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === t.topic);
        s &&
          this.onSessionProposeRequest(
            t.topic,
            Bn(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(p);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: c,
          sessionProperties: f,
          relays: d,
        } = t;
        if ((cr(s) || (await this.isValidPairingTopic(s)), !JD(d, !0))) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `connect() relays: ${d}`
          );
          throw new Error(p);
        }
        !cr(o) &&
          Cs(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !cr(c) &&
            Cs(c) !== 0 &&
            this.validateNamespaces(c, "optionalNamespaces"),
          cr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.validateNamespaces = (t, s) => {
        const o = YD(t, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!mr(t))
          throw new Error(
            ae("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: c,
          sessionProperties: f,
        } = t;
        await this.isValidProposalId(s);
        const d = this.client.proposal.get(s),
          p = ru(o, "approve()");
        if (p) throw new Error(p.message);
        const g = Bf(d.requiredNamespaces, o, "approve()");
        if (g) throw new Error(g.message);
        if (!Wt(c, !0)) {
          const { message: v } = ae(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${c}`
          );
          throw new Error(v);
        }
        cr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!mr(t)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(c);
        }
        const { id: s, reason: o } = t;
        if ((await this.isValidProposalId(s), !XD(o))) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(c);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!mr(t)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(g);
        }
        const { relay: s, controller: o, namespaces: c, expiry: f } = t;
        if (!Np(s)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(g);
        }
        const d = BD(o, "onSessionSettleRequest()");
        if (d) throw new Error(d.message);
        const p = ru(c, "onSessionSettleRequest()");
        if (p) throw new Error(p.message);
        if (qi(f)) {
          const { message: g } = ae("EXPIRED", "onSessionSettleRequest()");
          throw new Error(g);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: s, namespaces: o } = t;
        await this.isValidSessionTopic(s);
        const c = this.client.session.get(s),
          f = ru(o, "update()");
        if (f) throw new Error(f.message);
        const d = Bf(c.requiredNamespaces, o, "update()");
        if (d) throw new Error(d.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: s, request: o, chainId: c, expiry: f } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: d } = this.client.session.get(s);
        if (!Hf(d, c)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() chainId: ${c}`
          );
          throw new Error(p);
        }
        if (!ZD(o)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(p);
        }
        if (!r3(d, c, o.method)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(p);
        }
        if (f && !o3(f, du)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${du.min} and ${du.max}`
          );
          throw new Error(p);
        }
      }),
      (this.isValidRespond = async (t) => {
        var s;
        if (!mr(t)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: o, response: c } = t;
        try {
          await this.isValidSessionTopic(o);
        } catch (f) {
          throw (
            ((s = t == null ? void 0 : t.response) != null &&
              s.id &&
              this.cleanupAfterResponse(t),
            f)
          );
        }
        if (!e3(c)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(c)}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (t) => {
        if (!mr(t)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() params: ${t}`
          );
          throw new Error(d);
        }
        const { topic: s, event: o, chainId: c } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!Hf(f, c)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() chainId: ${c}`
          );
          throw new Error(d);
        }
        if (!t3(o)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(d);
        }
        if (!i3(f, c, o.name)) {
          const { message: d } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(d);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (t, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || Fn,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const c = await this.client.core.verify.resolve({
            attestationId: t,
            verifyUrl: s.verifyUrl,
          });
          c &&
            ((o.verified.origin = c.origin),
            (o.verified.isScam = c.isScam),
            (o.verified.validation =
              c.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (c) {
          this.client.logger.info(c);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (t, s) => {
        Object.values(t).forEach((o) => {
          if (!Wt(o, !1)) {
            const { message: c } = ae(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(c);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(t, s);
      try {
        nh(o)
          ? (this.client.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : Da(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.client.core.history.delete(t, o.id))
          : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (c) {
        this.client.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(zr.expired, async (e) => {
      const { topic: t, id: s } = Tp(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ae("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ds.create, (e) =>
      this.onPairingCreated(e)
    );
  }
  isValidPairingTopic(e) {
    if (!Wt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (qi(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ae("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Wt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (qi(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ae("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Wt(e, !1)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!QD(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (qi(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ae("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class a5 extends Ia {
  constructor(e, t) {
    super(e, t, JI, ah), (this.core = e), (this.logger = t);
  }
}
let c5 = class extends Ia {
  constructor(e, t) {
    super(e, t, QI, ah), (this.core = e), (this.logger = t);
  }
};
class u5 extends Ia {
  constructor(e, t) {
    super(e, t, ZI, ah, (s) => s.id), (this.core = e), (this.logger = t);
  }
}
let h5 = class gg extends T6 {
  constructor(e) {
    super(e),
      (this.protocol = lg),
      (this.version = fg),
      (this.name = fu.name),
      (this.events = new Ar.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (e == null ? void 0 : e.name) || fu.name),
      (this.metadata = (e == null ? void 0 : e.metadata) || fD());
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : wa(_a({ level: (e == null ? void 0 : e.logger) || fu.logger }));
    (this.core = (e == null ? void 0 : e.core) || new YI(e)),
      (this.logger = br(t, this.name)),
      (this.session = new c5(this.core, this.logger)),
      (this.proposal = new a5(this.core, this.logger)),
      (this.pendingRequest = new u5(this.core, this.logger)),
      (this.engine = new o5(this));
  }
  static async init(e) {
    const t = new gg(e);
    return await t.initialize(), t;
  }
  get context() {
    return _r(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
};
var Mu = { exports: {} };
(function (i, e) {
  var t = typeof self < "u" ? self : Jr,
    s = (function () {
      function c() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (c.prototype = t), new c();
    })();
  (function (c) {
    (function (f) {
      var d = {
        searchParams: "URLSearchParams" in c,
        iterable: "Symbol" in c && "iterator" in Symbol,
        blob:
          "FileReader" in c &&
          "Blob" in c &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in c,
        arrayBuffer: "ArrayBuffer" in c,
      };
      function p(D) {
        return D && DataView.prototype.isPrototypeOf(D);
      }
      if (d.arrayBuffer)
        var g = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          v =
            ArrayBuffer.isView ||
            function (D) {
              return D && g.indexOf(Object.prototype.toString.call(D)) > -1;
            };
      function _(D) {
        if (
          (typeof D != "string" && (D = String(D)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(D))
        )
          throw new TypeError("Invalid character in header field name");
        return D.toLowerCase();
      }
      function O(D) {
        return typeof D != "string" && (D = String(D)), D;
      }
      function P(D) {
        var R = {
          next: function () {
            var X = D.shift();
            return { done: X === void 0, value: X };
          },
        };
        return (
          d.iterable &&
            (R[Symbol.iterator] = function () {
              return R;
            }),
          R
        );
      }
      function S(D) {
        (this.map = {}),
          D instanceof S
            ? D.forEach(function (R, X) {
                this.append(X, R);
              }, this)
            : Array.isArray(D)
            ? D.forEach(function (R) {
                this.append(R[0], R[1]);
              }, this)
            : D &&
              Object.getOwnPropertyNames(D).forEach(function (R) {
                this.append(R, D[R]);
              }, this);
      }
      (S.prototype.append = function (D, R) {
        (D = _(D)), (R = O(R));
        var X = this.map[D];
        this.map[D] = X ? X + ", " + R : R;
      }),
        (S.prototype.delete = function (D) {
          delete this.map[_(D)];
        }),
        (S.prototype.get = function (D) {
          return (D = _(D)), this.has(D) ? this.map[D] : null;
        }),
        (S.prototype.has = function (D) {
          return this.map.hasOwnProperty(_(D));
        }),
        (S.prototype.set = function (D, R) {
          this.map[_(D)] = O(R);
        }),
        (S.prototype.forEach = function (D, R) {
          for (var X in this.map)
            this.map.hasOwnProperty(X) && D.call(R, this.map[X], X, this);
        }),
        (S.prototype.keys = function () {
          var D = [];
          return (
            this.forEach(function (R, X) {
              D.push(X);
            }),
            P(D)
          );
        }),
        (S.prototype.values = function () {
          var D = [];
          return (
            this.forEach(function (R) {
              D.push(R);
            }),
            P(D)
          );
        }),
        (S.prototype.entries = function () {
          var D = [];
          return (
            this.forEach(function (R, X) {
              D.push([X, R]);
            }),
            P(D)
          );
        }),
        d.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function K(D) {
        if (D.bodyUsed) return Promise.reject(new TypeError("Already read"));
        D.bodyUsed = !0;
      }
      function B(D) {
        return new Promise(function (R, X) {
          (D.onload = function () {
            R(D.result);
          }),
            (D.onerror = function () {
              X(D.error);
            });
        });
      }
      function Z(D) {
        var R = new FileReader(),
          X = B(R);
        return R.readAsArrayBuffer(D), X;
      }
      function $(D) {
        var R = new FileReader(),
          X = B(R);
        return R.readAsText(D), X;
      }
      function M(D) {
        for (
          var R = new Uint8Array(D), X = new Array(R.length), J = 0;
          J < R.length;
          J++
        )
          X[J] = String.fromCharCode(R[J]);
        return X.join("");
      }
      function I(D) {
        if (D.slice) return D.slice(0);
        var R = new Uint8Array(D.byteLength);
        return R.set(new Uint8Array(D)), R.buffer;
      }
      function C() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (D) {
            (this._bodyInit = D),
              D
                ? typeof D == "string"
                  ? (this._bodyText = D)
                  : d.blob && Blob.prototype.isPrototypeOf(D)
                  ? (this._bodyBlob = D)
                  : d.formData && FormData.prototype.isPrototypeOf(D)
                  ? (this._bodyFormData = D)
                  : d.searchParams && URLSearchParams.prototype.isPrototypeOf(D)
                  ? (this._bodyText = D.toString())
                  : d.arrayBuffer && d.blob && p(D)
                  ? ((this._bodyArrayBuffer = I(D.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : d.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(D) || v(D))
                  ? (this._bodyArrayBuffer = I(D))
                  : (this._bodyText = D = Object.prototype.toString.call(D))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof D == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : d.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(D) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          d.blob &&
            ((this.blob = function () {
              var D = K(this);
              if (D) return D;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? K(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(Z);
            })),
          (this.text = function () {
            var D = K(this);
            if (D) return D;
            if (this._bodyBlob) return $(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(M(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          d.formData &&
            (this.formData = function () {
              return this.text().then(ee);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function h(D) {
        var R = D.toUpperCase();
        return A.indexOf(R) > -1 ? R : D;
      }
      function b(D, R) {
        R = R || {};
        var X = R.body;
        if (D instanceof b) {
          if (D.bodyUsed) throw new TypeError("Already read");
          (this.url = D.url),
            (this.credentials = D.credentials),
            R.headers || (this.headers = new S(D.headers)),
            (this.method = D.method),
            (this.mode = D.mode),
            (this.signal = D.signal),
            !X && D._bodyInit != null && ((X = D._bodyInit), (D.bodyUsed = !0));
        } else this.url = String(D);
        if (
          ((this.credentials =
            R.credentials || this.credentials || "same-origin"),
          (R.headers || !this.headers) && (this.headers = new S(R.headers)),
          (this.method = h(R.method || this.method || "GET")),
          (this.mode = R.mode || this.mode || null),
          (this.signal = R.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && X)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(X);
      }
      b.prototype.clone = function () {
        return new b(this, { body: this._bodyInit });
      };
      function ee(D) {
        var R = new FormData();
        return (
          D.trim()
            .split("&")
            .forEach(function (X) {
              if (X) {
                var J = X.split("="),
                  k = J.shift().replace(/\+/g, " "),
                  V = J.join("=").replace(/\+/g, " ");
                R.append(decodeURIComponent(k), decodeURIComponent(V));
              }
            }),
          R
        );
      }
      function ne(D) {
        var R = new S(),
          X = D.replace(/\r?\n[\t ]+/g, " ");
        return (
          X.split(/\r?\n/).forEach(function (J) {
            var k = J.split(":"),
              V = k.shift().trim();
            if (V) {
              var te = k.join(":").trim();
              R.append(V, te);
            }
          }),
          R
        );
      }
      C.call(b.prototype);
      function ue(D, R) {
        R || (R = {}),
          (this.type = "default"),
          (this.status = R.status === void 0 ? 200 : R.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in R ? R.statusText : "OK"),
          (this.headers = new S(R.headers)),
          (this.url = R.url || ""),
          this._initBody(D);
      }
      C.call(ue.prototype),
        (ue.prototype.clone = function () {
          return new ue(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new S(this.headers),
            url: this.url,
          });
        }),
        (ue.error = function () {
          var D = new ue(null, { status: 0, statusText: "" });
          return (D.type = "error"), D;
        });
      var ge = [301, 302, 303, 307, 308];
      (ue.redirect = function (D, R) {
        if (ge.indexOf(R) === -1) throw new RangeError("Invalid status code");
        return new ue(null, { status: R, headers: { location: D } });
      }),
        (f.DOMException = c.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (R, X) {
          (this.message = R), (this.name = X);
          var J = Error(R);
          this.stack = J.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function ye(D, R) {
        return new Promise(function (X, J) {
          var k = new b(D, R);
          if (k.signal && k.signal.aborted)
            return J(new f.DOMException("Aborted", "AbortError"));
          var V = new XMLHttpRequest();
          function te() {
            V.abort();
          }
          (V.onload = function () {
            var ie = {
              status: V.status,
              statusText: V.statusText,
              headers: ne(V.getAllResponseHeaders() || ""),
            };
            ie.url =
              "responseURL" in V
                ? V.responseURL
                : ie.headers.get("X-Request-URL");
            var De = "response" in V ? V.response : V.responseText;
            X(new ue(De, ie));
          }),
            (V.onerror = function () {
              J(new TypeError("Network request failed"));
            }),
            (V.ontimeout = function () {
              J(new TypeError("Network request failed"));
            }),
            (V.onabort = function () {
              J(new f.DOMException("Aborted", "AbortError"));
            }),
            V.open(k.method, k.url, !0),
            k.credentials === "include"
              ? (V.withCredentials = !0)
              : k.credentials === "omit" && (V.withCredentials = !1),
            "responseType" in V && d.blob && (V.responseType = "blob"),
            k.headers.forEach(function (ie, De) {
              V.setRequestHeader(De, ie);
            }),
            k.signal &&
              (k.signal.addEventListener("abort", te),
              (V.onreadystatechange = function () {
                V.readyState === 4 && k.signal.removeEventListener("abort", te);
              })),
            V.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return (
        (ye.polyfill = !0),
        c.fetch ||
          ((c.fetch = ye), (c.Headers = S), (c.Request = b), (c.Response = ue)),
        (f.Headers = S),
        (f.Request = b),
        (f.Response = ue),
        (f.fetch = ye),
        Object.defineProperty(f, "__esModule", { value: !0 }),
        f
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (e = o.fetch),
    (e.default = o.fetch),
    (e.fetch = o.fetch),
    (e.Headers = o.Headers),
    (e.Request = o.Request),
    (e.Response = o.Response),
    (i.exports = e);
})(Mu, Mu.exports);
var l5 = Mu.exports;
const Ld = Rs(l5),
  f5 = { Accept: "application/json", "Content-Type": "application/json" },
  d5 = "POST",
  Ud = { headers: f5, method: d5 },
  Md = 10;
class Bi {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new Ar.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !ud(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || (await this.register());
    try {
      const s = un(e),
        c = await (
          await Ld(this.url, Object.assign(Object.assign({}, Ud), { body: s }))
        ).json();
      this.onPayload({ data: c });
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  async register(e = this.url) {
    if (!ud(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = un({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Ld(e, Object.assign(Object.assign({}, Ud), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const s = this.parseError(t);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? js(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = Ea(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Vp(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Md && this.events.setMaxListeners(Md);
  }
}
const jd = "error",
  p5 = "wss://relay.walletconnect.com",
  g5 = "wc",
  y5 = "universal_provider",
  qd = `${g5}@2:${y5}:`,
  v5 = "https://rpc.walletconnect.com/v1/",
  Oi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var bs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ju = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (i, e) {
  (function () {
    var t,
      s = "4.17.21",
      o = 200,
      c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      f = "Expected a function",
      d = "Invalid `variable` option passed into `_.template`",
      p = "__lodash_hash_undefined__",
      g = 500,
      v = "__lodash_placeholder__",
      _ = 1,
      O = 2,
      P = 4,
      S = 1,
      K = 2,
      B = 1,
      Z = 2,
      $ = 4,
      M = 8,
      I = 16,
      C = 32,
      A = 64,
      h = 128,
      b = 256,
      ee = 512,
      ne = 30,
      ue = "...",
      ge = 800,
      ye = 16,
      D = 1,
      R = 2,
      X = 3,
      J = 1 / 0,
      k = 9007199254740991,
      V = 17976931348623157e292,
      te = NaN,
      ie = 4294967295,
      De = ie - 1,
      oe = ie >>> 1,
      Se = [
        ["ary", h],
        ["bind", B],
        ["bindKey", Z],
        ["curry", M],
        ["curryRight", I],
        ["flip", ee],
        ["partial", C],
        ["partialRight", A],
        ["rearg", b],
      ],
      le = "[object Arguments]",
      Ae = "[object Array]",
      z = "[object AsyncFunction]",
      F = "[object Boolean]",
      L = "[object Date]",
      l = "[object DOMException]",
      T = "[object Error]",
      se = "[object Function]",
      he = "[object GeneratorFunction]",
      Ee = "[object Map]",
      He = "[object Number]",
      ke = "[object Null]",
      Me = "[object Object]",
      pt = "[object Promise]",
      gt = "[object Proxy]",
      qe = "[object RegExp]",
      Ie = "[object Set]",
      Ne = "[object String]",
      $e = "[object Symbol]",
      Fe = "[object Undefined]",
      Oe = "[object WeakMap]",
      Le = "[object WeakSet]",
      be = "[object ArrayBuffer]",
      Pe = "[object DataView]",
      Be = "[object Float32Array]",
      xe = "[object Float64Array]",
      Ve = "[object Int8Array]",
      Ge = "[object Int16Array]",
      Ze = "[object Int32Array]",
      et = "[object Uint8Array]",
      Je = "[object Uint8ClampedArray]",
      tr = "[object Uint16Array]",
      lr = "[object Uint32Array]",
      Qr = /\b__p \+= '';/g,
      rr = /\b(__p \+=) '' \+/g,
      ai = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Pi = /&(?:amp|lt|gt|quot|#39);/g,
      Ki = /[&<>"']/g,
      Dt = RegExp(Pi.source),
      yt = RegExp(Ki.source),
      St = /<%-([\s\S]+?)%>/g,
      It = /<%([\s\S]+?)%>/g,
      bt = /<%=([\s\S]+?)%>/g,
      vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Lt = /^\w*$/,
      Ut =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xt = /[\\^$.*+?()[\]{}|]/g,
      Mt = RegExp(xt.source),
      Ot = /^\s+/,
      At = /\s/,
      Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ht = /\{\n\/\* \[wrapped with (.+)\] \*/,
      jt = /,? & /,
      qt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      xa = /[()=,{}\[\]\/\s]/,
      Oa = /\\(\\)?/g,
      Pa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Rr = /\w*$/,
      Ca = /^[-+]0x[0-9a-f]+$/i,
      Aa = /^0b[01]+$/i,
      Ta = /^\[object .+?Constructor\]$/,
      Ra = /^0o[0-7]+$/i,
      Na = /^(?:0|[1-9]\d*)$/,
      ci = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      gn = /($^)/,
      $a = /['\n\r\u2028\u2029\\]/g,
      yn = "\\ud800-\\udfff",
      La = "\\u0300-\\u036f",
      Ua = "\\ufe20-\\ufe2f",
      vn = "\\u20d0-\\u20ff",
      zs = La + Ua + vn,
      Hs = "\\u2700-\\u27bf",
      Hr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Ma = "\\xac\\xb1\\xd7\\xf7",
      ja = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      qa = "\\u2000-\\u206f",
      Fa =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Bs = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ks = "\\ufe0e\\ufe0f",
      ki = Ma + ja + qa + Fa,
      Jn = "['’]",
      Vi = "[" + yn + "]",
      Qn = "[" + ki + "]",
      Wi = "[" + zs + "]",
      ks = "\\d+",
      za = "[" + Hs + "]",
      Vs = "[" + Hr + "]",
      Ws = "[^" + yn + ki + ks + Hs + Hr + Bs + "]",
      mn = "\\ud83c[\\udffb-\\udfff]",
      Ha = "(?:" + Wi + "|" + mn + ")",
      Gs = "[^" + yn + "]",
      wn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ci = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Er = "[" + Bs + "]",
      Ys = "\\u200d",
      Js = "(?:" + Vs + "|" + Ws + ")",
      Xr = "(?:" + Er + "|" + Ws + ")",
      Qs = "(?:" + Jn + "(?:d|ll|m|re|s|t|ve))?",
      Xs = "(?:" + Jn + "(?:D|LL|M|RE|S|T|VE))?",
      Zs = Ha + "?",
      eo = "[" + Ks + "]?",
      Ba = "(?:" + Ys + "(?:" + [Gs, wn, Ci].join("|") + ")" + eo + Zs + ")*",
      ui = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      to = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      ro = eo + Zs + Ba,
      _n = "(?:" + [za, wn, Ci].join("|") + ")" + ro,
      Ka = "(?:" + [Gs + Wi + "?", Wi, wn, Ci, Vi].join("|") + ")",
      Xn = RegExp(Jn, "g"),
      ka = RegExp(Wi, "g"),
      bn = RegExp(mn + "(?=" + mn + ")|" + Ka + ro, "g"),
      io = RegExp(
        [
          Er + "?" + Vs + "+" + Qs + "(?=" + [Qn, Er, "$"].join("|") + ")",
          Xr + "+" + Xs + "(?=" + [Qn, Er + Js, "$"].join("|") + ")",
          Er + "?" + Js + "+" + Qs,
          Er + "+" + Xs,
          to,
          ui,
          ks,
          _n,
        ].join("|"),
        "g"
      ),
      no = RegExp("[" + Ys + yn + zs + Ks + "]"),
      Gi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      so = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      Va = -1,
      ot = {};
    (ot[Be] =
      ot[xe] =
      ot[Ve] =
      ot[Ge] =
      ot[Ze] =
      ot[et] =
      ot[Je] =
      ot[tr] =
      ot[lr] =
        !0),
      (ot[le] =
        ot[Ae] =
        ot[be] =
        ot[F] =
        ot[Pe] =
        ot[L] =
        ot[T] =
        ot[se] =
        ot[Ee] =
        ot[He] =
        ot[Me] =
        ot[qe] =
        ot[Ie] =
        ot[Ne] =
        ot[Oe] =
          !1);
    var nt = {};
    (nt[le] =
      nt[Ae] =
      nt[be] =
      nt[Pe] =
      nt[F] =
      nt[L] =
      nt[Be] =
      nt[xe] =
      nt[Ve] =
      nt[Ge] =
      nt[Ze] =
      nt[Ee] =
      nt[He] =
      nt[Me] =
      nt[qe] =
      nt[Ie] =
      nt[Ne] =
      nt[$e] =
      nt[et] =
      nt[Je] =
      nt[tr] =
      nt[lr] =
        !0),
      (nt[T] = nt[se] = nt[Oe] = !1);
    var E = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      U = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Q = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      fe = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      at = parseFloat,
      Te = parseInt,
      ft = typeof bs == "object" && bs && bs.Object === Object && bs,
      Ft = typeof self == "object" && self && self.Object === Object && self,
      Qe = ft || Ft || Function("return this")(),
      ct = e && !e.nodeType && e,
      Tt = ct && !0 && i && !i.nodeType && i,
      fr = Tt && Tt.exports === ct,
      zt = fr && ft.process,
      dt = (function () {
        try {
          var j = Tt && Tt.require && Tt.require("util").types;
          return j || (zt && zt.binding && zt.binding("util"));
        } catch {}
      })(),
      ir = dt && dt.isArrayBuffer,
      Br = dt && dt.isDate,
      Nr = dt && dt.isMap,
      Zr = dt && dt.isRegExp,
      Zn = dt && dt.isSet,
      Yi = dt && dt.isTypedArray;
    function Kt(j, W, H) {
      switch (H.length) {
        case 0:
          return j.call(W);
        case 1:
          return j.call(W, H[0]);
        case 2:
          return j.call(W, H[0], H[1]);
        case 3:
          return j.call(W, H[0], H[1], H[2]);
      }
      return j.apply(W, H);
    }
    function mg(j, W, H, de) {
      for (var Ce = -1, tt = j == null ? 0 : j.length; ++Ce < tt; ) {
        var Ht = j[Ce];
        W(de, Ht, H(Ht), j);
      }
      return de;
    }
    function $r(j, W) {
      for (
        var H = -1, de = j == null ? 0 : j.length;
        ++H < de && W(j[H], H, j) !== !1;

      );
      return j;
    }
    function wg(j, W) {
      for (var H = j == null ? 0 : j.length; H-- && W(j[H], H, j) !== !1; );
      return j;
    }
    function hh(j, W) {
      for (var H = -1, de = j == null ? 0 : j.length; ++H < de; )
        if (!W(j[H], H, j)) return !1;
      return !0;
    }
    function Ai(j, W) {
      for (
        var H = -1, de = j == null ? 0 : j.length, Ce = 0, tt = [];
        ++H < de;

      ) {
        var Ht = j[H];
        W(Ht, H, j) && (tt[Ce++] = Ht);
      }
      return tt;
    }
    function oo(j, W) {
      var H = j == null ? 0 : j.length;
      return !!H && En(j, W, 0) > -1;
    }
    function Wa(j, W, H) {
      for (var de = -1, Ce = j == null ? 0 : j.length; ++de < Ce; )
        if (H(W, j[de])) return !0;
      return !1;
    }
    function mt(j, W) {
      for (
        var H = -1, de = j == null ? 0 : j.length, Ce = Array(de);
        ++H < de;

      )
        Ce[H] = W(j[H], H, j);
      return Ce;
    }
    function Ti(j, W) {
      for (var H = -1, de = W.length, Ce = j.length; ++H < de; )
        j[Ce + H] = W[H];
      return j;
    }
    function Ga(j, W, H, de) {
      var Ce = -1,
        tt = j == null ? 0 : j.length;
      for (de && tt && (H = j[++Ce]); ++Ce < tt; ) H = W(H, j[Ce], Ce, j);
      return H;
    }
    function _g(j, W, H, de) {
      var Ce = j == null ? 0 : j.length;
      for (de && Ce && (H = j[--Ce]); Ce--; ) H = W(H, j[Ce], Ce, j);
      return H;
    }
    function Ya(j, W) {
      for (var H = -1, de = j == null ? 0 : j.length; ++H < de; )
        if (W(j[H], H, j)) return !0;
      return !1;
    }
    var bg = Ja("length");
    function Eg(j) {
      return j.split("");
    }
    function Dg(j) {
      return j.match(qt) || [];
    }
    function lh(j, W, H) {
      var de;
      return (
        H(j, function (Ce, tt, Ht) {
          if (W(Ce, tt, Ht)) return (de = tt), !1;
        }),
        de
      );
    }
    function ao(j, W, H, de) {
      for (var Ce = j.length, tt = H + (de ? 1 : -1); de ? tt-- : ++tt < Ce; )
        if (W(j[tt], tt, j)) return tt;
      return -1;
    }
    function En(j, W, H) {
      return W === W ? Lg(j, W, H) : ao(j, fh, H);
    }
    function Sg(j, W, H, de) {
      for (var Ce = H - 1, tt = j.length; ++Ce < tt; )
        if (de(j[Ce], W)) return Ce;
      return -1;
    }
    function fh(j) {
      return j !== j;
    }
    function dh(j, W) {
      var H = j == null ? 0 : j.length;
      return H ? Xa(j, W) / H : te;
    }
    function Ja(j) {
      return function (W) {
        return W == null ? t : W[j];
      };
    }
    function Qa(j) {
      return function (W) {
        return j == null ? t : j[W];
      };
    }
    function ph(j, W, H, de, Ce) {
      return (
        Ce(j, function (tt, Ht, ut) {
          H = de ? ((de = !1), tt) : W(H, tt, Ht, ut);
        }),
        H
      );
    }
    function Ig(j, W) {
      var H = j.length;
      for (j.sort(W); H--; ) j[H] = j[H].value;
      return j;
    }
    function Xa(j, W) {
      for (var H, de = -1, Ce = j.length; ++de < Ce; ) {
        var tt = W(j[de]);
        tt !== t && (H = H === t ? tt : H + tt);
      }
      return H;
    }
    function Za(j, W) {
      for (var H = -1, de = Array(j); ++H < j; ) de[H] = W(H);
      return de;
    }
    function xg(j, W) {
      return mt(W, function (H) {
        return [H, j[H]];
      });
    }
    function gh(j) {
      return j && j.slice(0, wh(j) + 1).replace(Ot, "");
    }
    function Dr(j) {
      return function (W) {
        return j(W);
      };
    }
    function ec(j, W) {
      return mt(W, function (H) {
        return j[H];
      });
    }
    function es(j, W) {
      return j.has(W);
    }
    function yh(j, W) {
      for (var H = -1, de = j.length; ++H < de && En(W, j[H], 0) > -1; );
      return H;
    }
    function vh(j, W) {
      for (var H = j.length; H-- && En(W, j[H], 0) > -1; );
      return H;
    }
    function Og(j, W) {
      for (var H = j.length, de = 0; H--; ) j[H] === W && ++de;
      return de;
    }
    var Pg = Qa(E),
      Cg = Qa(U);
    function Ag(j) {
      return "\\" + fe[j];
    }
    function Tg(j, W) {
      return j == null ? t : j[W];
    }
    function Dn(j) {
      return no.test(j);
    }
    function Rg(j) {
      return Gi.test(j);
    }
    function Ng(j) {
      for (var W, H = []; !(W = j.next()).done; ) H.push(W.value);
      return H;
    }
    function tc(j) {
      var W = -1,
        H = Array(j.size);
      return (
        j.forEach(function (de, Ce) {
          H[++W] = [Ce, de];
        }),
        H
      );
    }
    function mh(j, W) {
      return function (H) {
        return j(W(H));
      };
    }
    function Ri(j, W) {
      for (var H = -1, de = j.length, Ce = 0, tt = []; ++H < de; ) {
        var Ht = j[H];
        (Ht === W || Ht === v) && ((j[H] = v), (tt[Ce++] = H));
      }
      return tt;
    }
    function co(j) {
      var W = -1,
        H = Array(j.size);
      return (
        j.forEach(function (de) {
          H[++W] = de;
        }),
        H
      );
    }
    function $g(j) {
      var W = -1,
        H = Array(j.size);
      return (
        j.forEach(function (de) {
          H[++W] = [de, de];
        }),
        H
      );
    }
    function Lg(j, W, H) {
      for (var de = H - 1, Ce = j.length; ++de < Ce; )
        if (j[de] === W) return de;
      return -1;
    }
    function Ug(j, W, H) {
      for (var de = H + 1; de--; ) if (j[de] === W) return de;
      return de;
    }
    function Sn(j) {
      return Dn(j) ? jg(j) : bg(j);
    }
    function Kr(j) {
      return Dn(j) ? qg(j) : Eg(j);
    }
    function wh(j) {
      for (var W = j.length; W-- && At.test(j.charAt(W)); );
      return W;
    }
    var Mg = Qa(Q);
    function jg(j) {
      for (var W = (bn.lastIndex = 0); bn.test(j); ) ++W;
      return W;
    }
    function qg(j) {
      return j.match(bn) || [];
    }
    function Fg(j) {
      return j.match(io) || [];
    }
    var zg = function j(W) {
        W = W == null ? Qe : In.defaults(Qe.Object(), W, In.pick(Qe, so));
        var H = W.Array,
          de = W.Date,
          Ce = W.Error,
          tt = W.Function,
          Ht = W.Math,
          ut = W.Object,
          rc = W.RegExp,
          Hg = W.String,
          Lr = W.TypeError,
          uo = H.prototype,
          Bg = tt.prototype,
          xn = ut.prototype,
          ho = W["__core-js_shared__"],
          lo = Bg.toString,
          it = xn.hasOwnProperty,
          Kg = 0,
          _h = (function () {
            var r = /[^.]+$/.exec((ho && ho.keys && ho.keys.IE_PROTO) || "");
            return r ? "Symbol(src)_1." + r : "";
          })(),
          fo = xn.toString,
          kg = lo.call(ut),
          Vg = Qe._,
          Wg = rc(
            "^" +
              lo
                .call(it)
                .replace(xt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          po = fr ? W.Buffer : t,
          Ni = W.Symbol,
          go = W.Uint8Array,
          bh = po ? po.allocUnsafe : t,
          yo = mh(ut.getPrototypeOf, ut),
          Eh = ut.create,
          Dh = xn.propertyIsEnumerable,
          vo = uo.splice,
          Sh = Ni ? Ni.isConcatSpreadable : t,
          ts = Ni ? Ni.iterator : t,
          Ji = Ni ? Ni.toStringTag : t,
          mo = (function () {
            try {
              var r = tn(ut, "defineProperty");
              return r({}, "", {}), r;
            } catch {}
          })(),
          Gg = W.clearTimeout !== Qe.clearTimeout && W.clearTimeout,
          Yg = de && de.now !== Qe.Date.now && de.now,
          Jg = W.setTimeout !== Qe.setTimeout && W.setTimeout,
          wo = Ht.ceil,
          _o = Ht.floor,
          ic = ut.getOwnPropertySymbols,
          Qg = po ? po.isBuffer : t,
          Ih = W.isFinite,
          Xg = uo.join,
          Zg = mh(ut.keys, ut),
          Bt = Ht.max,
          Qt = Ht.min,
          e0 = de.now,
          t0 = W.parseInt,
          xh = Ht.random,
          r0 = uo.reverse,
          nc = tn(W, "DataView"),
          rs = tn(W, "Map"),
          sc = tn(W, "Promise"),
          On = tn(W, "Set"),
          is = tn(W, "WeakMap"),
          ns = tn(ut, "create"),
          bo = is && new is(),
          Pn = {},
          i0 = rn(nc),
          n0 = rn(rs),
          s0 = rn(sc),
          o0 = rn(On),
          a0 = rn(is),
          Eo = Ni ? Ni.prototype : t,
          ss = Eo ? Eo.valueOf : t,
          Oh = Eo ? Eo.toString : t;
        function m(r) {
          if (Ct(r) && !Re(r) && !(r instanceof Ye)) {
            if (r instanceof Ur) return r;
            if (it.call(r, "__wrapped__")) return Pl(r);
          }
          return new Ur(r);
        }
        var Cn = (function () {
          function r() {}
          return function (n) {
            if (!Et(n)) return {};
            if (Eh) return Eh(n);
            r.prototype = n;
            var a = new r();
            return (r.prototype = t), a;
          };
        })();
        function Do() {}
        function Ur(r, n) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (m.templateSettings = {
          escape: St,
          evaluate: It,
          interpolate: bt,
          variable: "",
          imports: { _: m },
        }),
          (m.prototype = Do.prototype),
          (m.prototype.constructor = m),
          (Ur.prototype = Cn(Do.prototype)),
          (Ur.prototype.constructor = Ur);
        function Ye(r) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ie),
            (this.__views__ = []);
        }
        function c0() {
          var r = new Ye(this.__wrapped__);
          return (
            (r.__actions__ = dr(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = dr(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = dr(this.__views__)),
            r
          );
        }
        function u0() {
          if (this.__filtered__) {
            var r = new Ye(this);
            (r.__dir__ = -1), (r.__filtered__ = !0);
          } else (r = this.clone()), (r.__dir__ *= -1);
          return r;
        }
        function h0() {
          var r = this.__wrapped__.value(),
            n = this.__dir__,
            a = Re(r),
            u = n < 0,
            y = a ? r.length : 0,
            w = Ey(0, y, this.__views__),
            x = w.start,
            N = w.end,
            q = N - x,
            G = u ? N : x - 1,
            Y = this.__iteratees__,
            re = Y.length,
            ce = 0,
            pe = Qt(q, this.__takeCount__);
          if (!a || (!u && y == q && pe == q)) return Qh(r, this.__actions__);
          var we = [];
          e: for (; q-- && ce < pe; ) {
            G += n;
            for (var ze = -1, _e = r[G]; ++ze < re; ) {
              var We = Y[ze],
                Xe = We.iteratee,
                xr = We.type,
                or = Xe(_e);
              if (xr == R) _e = or;
              else if (!or) {
                if (xr == D) continue e;
                break e;
              }
            }
            we[ce++] = _e;
          }
          return we;
        }
        (Ye.prototype = Cn(Do.prototype)), (Ye.prototype.constructor = Ye);
        function Qi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function l0() {
          (this.__data__ = ns ? ns(null) : {}), (this.size = 0);
        }
        function f0(r) {
          var n = this.has(r) && delete this.__data__[r];
          return (this.size -= n ? 1 : 0), n;
        }
        function d0(r) {
          var n = this.__data__;
          if (ns) {
            var a = n[r];
            return a === p ? t : a;
          }
          return it.call(n, r) ? n[r] : t;
        }
        function p0(r) {
          var n = this.__data__;
          return ns ? n[r] !== t : it.call(n, r);
        }
        function g0(r, n) {
          var a = this.__data__;
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = ns && n === t ? p : n),
            this
          );
        }
        (Qi.prototype.clear = l0),
          (Qi.prototype.delete = f0),
          (Qi.prototype.get = d0),
          (Qi.prototype.has = p0),
          (Qi.prototype.set = g0);
        function hi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function y0() {
          (this.__data__ = []), (this.size = 0);
        }
        function v0(r) {
          var n = this.__data__,
            a = So(n, r);
          if (a < 0) return !1;
          var u = n.length - 1;
          return a == u ? n.pop() : vo.call(n, a, 1), --this.size, !0;
        }
        function m0(r) {
          var n = this.__data__,
            a = So(n, r);
          return a < 0 ? t : n[a][1];
        }
        function w0(r) {
          return So(this.__data__, r) > -1;
        }
        function _0(r, n) {
          var a = this.__data__,
            u = So(a, r);
          return u < 0 ? (++this.size, a.push([r, n])) : (a[u][1] = n), this;
        }
        (hi.prototype.clear = y0),
          (hi.prototype.delete = v0),
          (hi.prototype.get = m0),
          (hi.prototype.has = w0),
          (hi.prototype.set = _0);
        function li(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var u = r[n];
            this.set(u[0], u[1]);
          }
        }
        function b0() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Qi(),
              map: new (rs || hi)(),
              string: new Qi(),
            });
        }
        function E0(r) {
          var n = Uo(this, r).delete(r);
          return (this.size -= n ? 1 : 0), n;
        }
        function D0(r) {
          return Uo(this, r).get(r);
        }
        function S0(r) {
          return Uo(this, r).has(r);
        }
        function I0(r, n) {
          var a = Uo(this, r),
            u = a.size;
          return a.set(r, n), (this.size += a.size == u ? 0 : 1), this;
        }
        (li.prototype.clear = b0),
          (li.prototype.delete = E0),
          (li.prototype.get = D0),
          (li.prototype.has = S0),
          (li.prototype.set = I0);
        function Xi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.__data__ = new li(); ++n < a; ) this.add(r[n]);
        }
        function x0(r) {
          return this.__data__.set(r, p), this;
        }
        function O0(r) {
          return this.__data__.has(r);
        }
        (Xi.prototype.add = Xi.prototype.push = x0), (Xi.prototype.has = O0);
        function kr(r) {
          var n = (this.__data__ = new hi(r));
          this.size = n.size;
        }
        function P0() {
          (this.__data__ = new hi()), (this.size = 0);
        }
        function C0(r) {
          var n = this.__data__,
            a = n.delete(r);
          return (this.size = n.size), a;
        }
        function A0(r) {
          return this.__data__.get(r);
        }
        function T0(r) {
          return this.__data__.has(r);
        }
        function R0(r, n) {
          var a = this.__data__;
          if (a instanceof hi) {
            var u = a.__data__;
            if (!rs || u.length < o - 1)
              return u.push([r, n]), (this.size = ++a.size), this;
            a = this.__data__ = new li(u);
          }
          return a.set(r, n), (this.size = a.size), this;
        }
        (kr.prototype.clear = P0),
          (kr.prototype.delete = C0),
          (kr.prototype.get = A0),
          (kr.prototype.has = T0),
          (kr.prototype.set = R0);
        function Ph(r, n) {
          var a = Re(r),
            u = !a && nn(r),
            y = !a && !u && ji(r),
            w = !a && !u && !y && Nn(r),
            x = a || u || y || w,
            N = x ? Za(r.length, Hg) : [],
            q = N.length;
          for (var G in r)
            (n || it.call(r, G)) &&
              !(
                x &&
                (G == "length" ||
                  (y && (G == "offset" || G == "parent")) ||
                  (w &&
                    (G == "buffer" ||
                      G == "byteLength" ||
                      G == "byteOffset")) ||
                  gi(G, q))
              ) &&
              N.push(G);
          return N;
        }
        function Ch(r) {
          var n = r.length;
          return n ? r[yc(0, n - 1)] : t;
        }
        function N0(r, n) {
          return Mo(dr(r), Zi(n, 0, r.length));
        }
        function $0(r) {
          return Mo(dr(r));
        }
        function oc(r, n, a) {
          ((a !== t && !Vr(r[n], a)) || (a === t && !(n in r))) && fi(r, n, a);
        }
        function os(r, n, a) {
          var u = r[n];
          (!(it.call(r, n) && Vr(u, a)) || (a === t && !(n in r))) &&
            fi(r, n, a);
        }
        function So(r, n) {
          for (var a = r.length; a--; ) if (Vr(r[a][0], n)) return a;
          return -1;
        }
        function L0(r, n, a, u) {
          return (
            $i(r, function (y, w, x) {
              n(u, y, a(y), x);
            }),
            u
          );
        }
        function Ah(r, n) {
          return r && ti(n, kt(n), r);
        }
        function U0(r, n) {
          return r && ti(n, gr(n), r);
        }
        function fi(r, n, a) {
          n == "__proto__" && mo
            ? mo(r, n, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[n] = a);
        }
        function ac(r, n) {
          for (var a = -1, u = n.length, y = H(u), w = r == null; ++a < u; )
            y[a] = w ? t : zc(r, n[a]);
          return y;
        }
        function Zi(r, n, a) {
          return (
            r === r &&
              (a !== t && (r = r <= a ? r : a),
              n !== t && (r = r >= n ? r : n)),
            r
          );
        }
        function Mr(r, n, a, u, y, w) {
          var x,
            N = n & _,
            q = n & O,
            G = n & P;
          if ((a && (x = y ? a(r, u, y, w) : a(r)), x !== t)) return x;
          if (!Et(r)) return r;
          var Y = Re(r);
          if (Y) {
            if (((x = Sy(r)), !N)) return dr(r, x);
          } else {
            var re = Xt(r),
              ce = re == se || re == he;
            if (ji(r)) return el(r, N);
            if (re == Me || re == le || (ce && !y)) {
              if (((x = q || ce ? {} : wl(r)), !N))
                return q ? dy(r, U0(x, r)) : fy(r, Ah(x, r));
            } else {
              if (!nt[re]) return y ? r : {};
              x = Iy(r, re, N);
            }
          }
          w || (w = new kr());
          var pe = w.get(r);
          if (pe) return pe;
          w.set(r, x),
            Gl(r)
              ? r.forEach(function (_e) {
                  x.add(Mr(_e, n, a, _e, r, w));
                })
              : Vl(r) &&
                r.forEach(function (_e, We) {
                  x.set(We, Mr(_e, n, a, We, r, w));
                });
          var we = G ? (q ? Oc : xc) : q ? gr : kt,
            ze = Y ? t : we(r);
          return (
            $r(ze || r, function (_e, We) {
              ze && ((We = _e), (_e = r[We])),
                os(x, We, Mr(_e, n, a, We, r, w));
            }),
            x
          );
        }
        function M0(r) {
          var n = kt(r);
          return function (a) {
            return Th(a, r, n);
          };
        }
        function Th(r, n, a) {
          var u = a.length;
          if (r == null) return !u;
          for (r = ut(r); u--; ) {
            var y = a[u],
              w = n[y],
              x = r[y];
            if ((x === t && !(y in r)) || !w(x)) return !1;
          }
          return !0;
        }
        function Rh(r, n, a) {
          if (typeof r != "function") throw new Lr(f);
          return ds(function () {
            r.apply(t, a);
          }, n);
        }
        function as(r, n, a, u) {
          var y = -1,
            w = oo,
            x = !0,
            N = r.length,
            q = [],
            G = n.length;
          if (!N) return q;
          a && (n = mt(n, Dr(a))),
            u
              ? ((w = Wa), (x = !1))
              : n.length >= o && ((w = es), (x = !1), (n = new Xi(n)));
          e: for (; ++y < N; ) {
            var Y = r[y],
              re = a == null ? Y : a(Y);
            if (((Y = u || Y !== 0 ? Y : 0), x && re === re)) {
              for (var ce = G; ce--; ) if (n[ce] === re) continue e;
              q.push(Y);
            } else w(n, re, u) || q.push(Y);
          }
          return q;
        }
        var $i = sl(ei),
          Nh = sl(uc, !0);
        function j0(r, n) {
          var a = !0;
          return (
            $i(r, function (u, y, w) {
              return (a = !!n(u, y, w)), a;
            }),
            a
          );
        }
        function Io(r, n, a) {
          for (var u = -1, y = r.length; ++u < y; ) {
            var w = r[u],
              x = n(w);
            if (x != null && (N === t ? x === x && !Ir(x) : a(x, N)))
              var N = x,
                q = w;
          }
          return q;
        }
        function q0(r, n, a, u) {
          var y = r.length;
          for (
            a = je(a),
              a < 0 && (a = -a > y ? 0 : y + a),
              u = u === t || u > y ? y : je(u),
              u < 0 && (u += y),
              u = a > u ? 0 : Jl(u);
            a < u;

          )
            r[a++] = n;
          return r;
        }
        function $h(r, n) {
          var a = [];
          return (
            $i(r, function (u, y, w) {
              n(u, y, w) && a.push(u);
            }),
            a
          );
        }
        function Gt(r, n, a, u, y) {
          var w = -1,
            x = r.length;
          for (a || (a = Oy), y || (y = []); ++w < x; ) {
            var N = r[w];
            n > 0 && a(N)
              ? n > 1
                ? Gt(N, n - 1, a, u, y)
                : Ti(y, N)
              : u || (y[y.length] = N);
          }
          return y;
        }
        var cc = ol(),
          Lh = ol(!0);
        function ei(r, n) {
          return r && cc(r, n, kt);
        }
        function uc(r, n) {
          return r && Lh(r, n, kt);
        }
        function xo(r, n) {
          return Ai(n, function (a) {
            return yi(r[a]);
          });
        }
        function en(r, n) {
          n = Ui(n, r);
          for (var a = 0, u = n.length; r != null && a < u; ) r = r[ri(n[a++])];
          return a && a == u ? r : t;
        }
        function Uh(r, n, a) {
          var u = n(r);
          return Re(r) ? u : Ti(u, a(r));
        }
        function nr(r) {
          return r == null
            ? r === t
              ? Fe
              : ke
            : Ji && Ji in ut(r)
            ? by(r)
            : $y(r);
        }
        function hc(r, n) {
          return r > n;
        }
        function F0(r, n) {
          return r != null && it.call(r, n);
        }
        function z0(r, n) {
          return r != null && n in ut(r);
        }
        function H0(r, n, a) {
          return r >= Qt(n, a) && r < Bt(n, a);
        }
        function lc(r, n, a) {
          for (
            var u = a ? Wa : oo,
              y = r[0].length,
              w = r.length,
              x = w,
              N = H(w),
              q = 1 / 0,
              G = [];
            x--;

          ) {
            var Y = r[x];
            x && n && (Y = mt(Y, Dr(n))),
              (q = Qt(Y.length, q)),
              (N[x] =
                !a && (n || (y >= 120 && Y.length >= 120))
                  ? new Xi(x && Y)
                  : t);
          }
          Y = r[0];
          var re = -1,
            ce = N[0];
          e: for (; ++re < y && G.length < q; ) {
            var pe = Y[re],
              we = n ? n(pe) : pe;
            if (
              ((pe = a || pe !== 0 ? pe : 0), !(ce ? es(ce, we) : u(G, we, a)))
            ) {
              for (x = w; --x; ) {
                var ze = N[x];
                if (!(ze ? es(ze, we) : u(r[x], we, a))) continue e;
              }
              ce && ce.push(we), G.push(pe);
            }
          }
          return G;
        }
        function B0(r, n, a, u) {
          return (
            ei(r, function (y, w, x) {
              n(u, a(y), w, x);
            }),
            u
          );
        }
        function cs(r, n, a) {
          (n = Ui(n, r)), (r = Dl(r, n));
          var u = r == null ? r : r[ri(qr(n))];
          return u == null ? t : Kt(u, r, a);
        }
        function Mh(r) {
          return Ct(r) && nr(r) == le;
        }
        function K0(r) {
          return Ct(r) && nr(r) == be;
        }
        function k0(r) {
          return Ct(r) && nr(r) == L;
        }
        function us(r, n, a, u, y) {
          return r === n
            ? !0
            : r == null || n == null || (!Ct(r) && !Ct(n))
            ? r !== r && n !== n
            : V0(r, n, a, u, us, y);
        }
        function V0(r, n, a, u, y, w) {
          var x = Re(r),
            N = Re(n),
            q = x ? Ae : Xt(r),
            G = N ? Ae : Xt(n);
          (q = q == le ? Me : q), (G = G == le ? Me : G);
          var Y = q == Me,
            re = G == Me,
            ce = q == G;
          if (ce && ji(r)) {
            if (!ji(n)) return !1;
            (x = !0), (Y = !1);
          }
          if (ce && !Y)
            return (
              w || (w = new kr()),
              x || Nn(r) ? yl(r, n, a, u, y, w) : wy(r, n, q, a, u, y, w)
            );
          if (!(a & S)) {
            var pe = Y && it.call(r, "__wrapped__"),
              we = re && it.call(n, "__wrapped__");
            if (pe || we) {
              var ze = pe ? r.value() : r,
                _e = we ? n.value() : n;
              return w || (w = new kr()), y(ze, _e, a, u, w);
            }
          }
          return ce ? (w || (w = new kr()), _y(r, n, a, u, y, w)) : !1;
        }
        function W0(r) {
          return Ct(r) && Xt(r) == Ee;
        }
        function fc(r, n, a, u) {
          var y = a.length,
            w = y,
            x = !u;
          if (r == null) return !w;
          for (r = ut(r); y--; ) {
            var N = a[y];
            if (x && N[2] ? N[1] !== r[N[0]] : !(N[0] in r)) return !1;
          }
          for (; ++y < w; ) {
            N = a[y];
            var q = N[0],
              G = r[q],
              Y = N[1];
            if (x && N[2]) {
              if (G === t && !(q in r)) return !1;
            } else {
              var re = new kr();
              if (u) var ce = u(G, Y, q, r, n, re);
              if (!(ce === t ? us(Y, G, S | K, u, re) : ce)) return !1;
            }
          }
          return !0;
        }
        function jh(r) {
          if (!Et(r) || Cy(r)) return !1;
          var n = yi(r) ? Wg : Ta;
          return n.test(rn(r));
        }
        function G0(r) {
          return Ct(r) && nr(r) == qe;
        }
        function Y0(r) {
          return Ct(r) && Xt(r) == Ie;
        }
        function J0(r) {
          return Ct(r) && Bo(r.length) && !!ot[nr(r)];
        }
        function qh(r) {
          return typeof r == "function"
            ? r
            : r == null
            ? yr
            : typeof r == "object"
            ? Re(r)
              ? Hh(r[0], r[1])
              : zh(r)
            : cf(r);
        }
        function dc(r) {
          if (!fs(r)) return Zg(r);
          var n = [];
          for (var a in ut(r)) it.call(r, a) && a != "constructor" && n.push(a);
          return n;
        }
        function Q0(r) {
          if (!Et(r)) return Ny(r);
          var n = fs(r),
            a = [];
          for (var u in r)
            (u == "constructor" && (n || !it.call(r, u))) || a.push(u);
          return a;
        }
        function pc(r, n) {
          return r < n;
        }
        function Fh(r, n) {
          var a = -1,
            u = pr(r) ? H(r.length) : [];
          return (
            $i(r, function (y, w, x) {
              u[++a] = n(y, w, x);
            }),
            u
          );
        }
        function zh(r) {
          var n = Cc(r);
          return n.length == 1 && n[0][2]
            ? bl(n[0][0], n[0][1])
            : function (a) {
                return a === r || fc(a, r, n);
              };
        }
        function Hh(r, n) {
          return Tc(r) && _l(n)
            ? bl(ri(r), n)
            : function (a) {
                var u = zc(a, r);
                return u === t && u === n ? Hc(a, r) : us(n, u, S | K);
              };
        }
        function Oo(r, n, a, u, y) {
          r !== n &&
            cc(
              n,
              function (w, x) {
                if ((y || (y = new kr()), Et(w))) X0(r, n, x, a, Oo, u, y);
                else {
                  var N = u ? u(Nc(r, x), w, x + "", r, n, y) : t;
                  N === t && (N = w), oc(r, x, N);
                }
              },
              gr
            );
        }
        function X0(r, n, a, u, y, w, x) {
          var N = Nc(r, a),
            q = Nc(n, a),
            G = x.get(q);
          if (G) {
            oc(r, a, G);
            return;
          }
          var Y = w ? w(N, q, a + "", r, n, x) : t,
            re = Y === t;
          if (re) {
            var ce = Re(q),
              pe = !ce && ji(q),
              we = !ce && !pe && Nn(q);
            (Y = q),
              ce || pe || we
                ? Re(N)
                  ? (Y = N)
                  : Rt(N)
                  ? (Y = dr(N))
                  : pe
                  ? ((re = !1), (Y = el(q, !0)))
                  : we
                  ? ((re = !1), (Y = tl(q, !0)))
                  : (Y = [])
                : ps(q) || nn(q)
                ? ((Y = N),
                  nn(N) ? (Y = Ql(N)) : (!Et(N) || yi(N)) && (Y = wl(q)))
                : (re = !1);
          }
          re && (x.set(q, Y), y(Y, q, u, w, x), x.delete(q)), oc(r, a, Y);
        }
        function Bh(r, n) {
          var a = r.length;
          if (a) return (n += n < 0 ? a : 0), gi(n, a) ? r[n] : t;
        }
        function Kh(r, n, a) {
          n.length
            ? (n = mt(n, function (w) {
                return Re(w)
                  ? function (x) {
                      return en(x, w.length === 1 ? w[0] : w);
                    }
                  : w;
              }))
            : (n = [yr]);
          var u = -1;
          n = mt(n, Dr(me()));
          var y = Fh(r, function (w, x, N) {
            var q = mt(n, function (G) {
              return G(w);
            });
            return { criteria: q, index: ++u, value: w };
          });
          return Ig(y, function (w, x) {
            return ly(w, x, a);
          });
        }
        function Z0(r, n) {
          return kh(r, n, function (a, u) {
            return Hc(r, u);
          });
        }
        function kh(r, n, a) {
          for (var u = -1, y = n.length, w = {}; ++u < y; ) {
            var x = n[u],
              N = en(r, x);
            a(N, x) && hs(w, Ui(x, r), N);
          }
          return w;
        }
        function ey(r) {
          return function (n) {
            return en(n, r);
          };
        }
        function gc(r, n, a, u) {
          var y = u ? Sg : En,
            w = -1,
            x = n.length,
            N = r;
          for (r === n && (n = dr(n)), a && (N = mt(r, Dr(a))); ++w < x; )
            for (
              var q = 0, G = n[w], Y = a ? a(G) : G;
              (q = y(N, Y, q, u)) > -1;

            )
              N !== r && vo.call(N, q, 1), vo.call(r, q, 1);
          return r;
        }
        function Vh(r, n) {
          for (var a = r ? n.length : 0, u = a - 1; a--; ) {
            var y = n[a];
            if (a == u || y !== w) {
              var w = y;
              gi(y) ? vo.call(r, y, 1) : wc(r, y);
            }
          }
          return r;
        }
        function yc(r, n) {
          return r + _o(xh() * (n - r + 1));
        }
        function ty(r, n, a, u) {
          for (var y = -1, w = Bt(wo((n - r) / (a || 1)), 0), x = H(w); w--; )
            (x[u ? w : ++y] = r), (r += a);
          return x;
        }
        function vc(r, n) {
          var a = "";
          if (!r || n < 1 || n > k) return a;
          do n % 2 && (a += r), (n = _o(n / 2)), n && (r += r);
          while (n);
          return a;
        }
        function Ke(r, n) {
          return $c(El(r, n, yr), r + "");
        }
        function ry(r) {
          return Ch($n(r));
        }
        function iy(r, n) {
          var a = $n(r);
          return Mo(a, Zi(n, 0, a.length));
        }
        function hs(r, n, a, u) {
          if (!Et(r)) return r;
          n = Ui(n, r);
          for (
            var y = -1, w = n.length, x = w - 1, N = r;
            N != null && ++y < w;

          ) {
            var q = ri(n[y]),
              G = a;
            if (q === "__proto__" || q === "constructor" || q === "prototype")
              return r;
            if (y != x) {
              var Y = N[q];
              (G = u ? u(Y, q, N) : t),
                G === t && (G = Et(Y) ? Y : gi(n[y + 1]) ? [] : {});
            }
            os(N, q, G), (N = N[q]);
          }
          return r;
        }
        var Wh = bo
            ? function (r, n) {
                return bo.set(r, n), r;
              }
            : yr,
          ny = mo
            ? function (r, n) {
                return mo(r, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Kc(n),
                  writable: !0,
                });
              }
            : yr;
        function sy(r) {
          return Mo($n(r));
        }
        function jr(r, n, a) {
          var u = -1,
            y = r.length;
          n < 0 && (n = -n > y ? 0 : y + n),
            (a = a > y ? y : a),
            a < 0 && (a += y),
            (y = n > a ? 0 : (a - n) >>> 0),
            (n >>>= 0);
          for (var w = H(y); ++u < y; ) w[u] = r[u + n];
          return w;
        }
        function oy(r, n) {
          var a;
          return (
            $i(r, function (u, y, w) {
              return (a = n(u, y, w)), !a;
            }),
            !!a
          );
        }
        function Po(r, n, a) {
          var u = 0,
            y = r == null ? u : r.length;
          if (typeof n == "number" && n === n && y <= oe) {
            for (; u < y; ) {
              var w = (u + y) >>> 1,
                x = r[w];
              x !== null && !Ir(x) && (a ? x <= n : x < n)
                ? (u = w + 1)
                : (y = w);
            }
            return y;
          }
          return mc(r, n, yr, a);
        }
        function mc(r, n, a, u) {
          var y = 0,
            w = r == null ? 0 : r.length;
          if (w === 0) return 0;
          n = a(n);
          for (
            var x = n !== n, N = n === null, q = Ir(n), G = n === t;
            y < w;

          ) {
            var Y = _o((y + w) / 2),
              re = a(r[Y]),
              ce = re !== t,
              pe = re === null,
              we = re === re,
              ze = Ir(re);
            if (x) var _e = u || we;
            else
              G
                ? (_e = we && (u || ce))
                : N
                ? (_e = we && ce && (u || !pe))
                : q
                ? (_e = we && ce && !pe && (u || !ze))
                : pe || ze
                ? (_e = !1)
                : (_e = u ? re <= n : re < n);
            _e ? (y = Y + 1) : (w = Y);
          }
          return Qt(w, De);
        }
        function Gh(r, n) {
          for (var a = -1, u = r.length, y = 0, w = []; ++a < u; ) {
            var x = r[a],
              N = n ? n(x) : x;
            if (!a || !Vr(N, q)) {
              var q = N;
              w[y++] = x === 0 ? 0 : x;
            }
          }
          return w;
        }
        function Yh(r) {
          return typeof r == "number" ? r : Ir(r) ? te : +r;
        }
        function Sr(r) {
          if (typeof r == "string") return r;
          if (Re(r)) return mt(r, Sr) + "";
          if (Ir(r)) return Oh ? Oh.call(r) : "";
          var n = r + "";
          return n == "0" && 1 / r == -J ? "-0" : n;
        }
        function Li(r, n, a) {
          var u = -1,
            y = oo,
            w = r.length,
            x = !0,
            N = [],
            q = N;
          if (a) (x = !1), (y = Wa);
          else if (w >= o) {
            var G = n ? null : vy(r);
            if (G) return co(G);
            (x = !1), (y = es), (q = new Xi());
          } else q = n ? [] : N;
          e: for (; ++u < w; ) {
            var Y = r[u],
              re = n ? n(Y) : Y;
            if (((Y = a || Y !== 0 ? Y : 0), x && re === re)) {
              for (var ce = q.length; ce--; ) if (q[ce] === re) continue e;
              n && q.push(re), N.push(Y);
            } else y(q, re, a) || (q !== N && q.push(re), N.push(Y));
          }
          return N;
        }
        function wc(r, n) {
          return (
            (n = Ui(n, r)), (r = Dl(r, n)), r == null || delete r[ri(qr(n))]
          );
        }
        function Jh(r, n, a, u) {
          return hs(r, n, a(en(r, n)), u);
        }
        function Co(r, n, a, u) {
          for (
            var y = r.length, w = u ? y : -1;
            (u ? w-- : ++w < y) && n(r[w], w, r);

          );
          return a
            ? jr(r, u ? 0 : w, u ? w + 1 : y)
            : jr(r, u ? w + 1 : 0, u ? y : w);
        }
        function Qh(r, n) {
          var a = r;
          return (
            a instanceof Ye && (a = a.value()),
            Ga(
              n,
              function (u, y) {
                return y.func.apply(y.thisArg, Ti([u], y.args));
              },
              a
            )
          );
        }
        function _c(r, n, a) {
          var u = r.length;
          if (u < 2) return u ? Li(r[0]) : [];
          for (var y = -1, w = H(u); ++y < u; )
            for (var x = r[y], N = -1; ++N < u; )
              N != y && (w[y] = as(w[y] || x, r[N], n, a));
          return Li(Gt(w, 1), n, a);
        }
        function Xh(r, n, a) {
          for (var u = -1, y = r.length, w = n.length, x = {}; ++u < y; ) {
            var N = u < w ? n[u] : t;
            a(x, r[u], N);
          }
          return x;
        }
        function bc(r) {
          return Rt(r) ? r : [];
        }
        function Ec(r) {
          return typeof r == "function" ? r : yr;
        }
        function Ui(r, n) {
          return Re(r) ? r : Tc(r, n) ? [r] : Ol(rt(r));
        }
        var ay = Ke;
        function Mi(r, n, a) {
          var u = r.length;
          return (a = a === t ? u : a), !n && a >= u ? r : jr(r, n, a);
        }
        var Zh =
          Gg ||
          function (r) {
            return Qe.clearTimeout(r);
          };
        function el(r, n) {
          if (n) return r.slice();
          var a = r.length,
            u = bh ? bh(a) : new r.constructor(a);
          return r.copy(u), u;
        }
        function Dc(r) {
          var n = new r.constructor(r.byteLength);
          return new go(n).set(new go(r)), n;
        }
        function cy(r, n) {
          var a = n ? Dc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.byteLength);
        }
        function uy(r) {
          var n = new r.constructor(r.source, Rr.exec(r));
          return (n.lastIndex = r.lastIndex), n;
        }
        function hy(r) {
          return ss ? ut(ss.call(r)) : {};
        }
        function tl(r, n) {
          var a = n ? Dc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.length);
        }
        function rl(r, n) {
          if (r !== n) {
            var a = r !== t,
              u = r === null,
              y = r === r,
              w = Ir(r),
              x = n !== t,
              N = n === null,
              q = n === n,
              G = Ir(n);
            if (
              (!N && !G && !w && r > n) ||
              (w && x && q && !N && !G) ||
              (u && x && q) ||
              (!a && q) ||
              !y
            )
              return 1;
            if (
              (!u && !w && !G && r < n) ||
              (G && a && y && !u && !w) ||
              (N && a && y) ||
              (!x && y) ||
              !q
            )
              return -1;
          }
          return 0;
        }
        function ly(r, n, a) {
          for (
            var u = -1,
              y = r.criteria,
              w = n.criteria,
              x = y.length,
              N = a.length;
            ++u < x;

          ) {
            var q = rl(y[u], w[u]);
            if (q) {
              if (u >= N) return q;
              var G = a[u];
              return q * (G == "desc" ? -1 : 1);
            }
          }
          return r.index - n.index;
        }
        function il(r, n, a, u) {
          for (
            var y = -1,
              w = r.length,
              x = a.length,
              N = -1,
              q = n.length,
              G = Bt(w - x, 0),
              Y = H(q + G),
              re = !u;
            ++N < q;

          )
            Y[N] = n[N];
          for (; ++y < x; ) (re || y < w) && (Y[a[y]] = r[y]);
          for (; G--; ) Y[N++] = r[y++];
          return Y;
        }
        function nl(r, n, a, u) {
          for (
            var y = -1,
              w = r.length,
              x = -1,
              N = a.length,
              q = -1,
              G = n.length,
              Y = Bt(w - N, 0),
              re = H(Y + G),
              ce = !u;
            ++y < Y;

          )
            re[y] = r[y];
          for (var pe = y; ++q < G; ) re[pe + q] = n[q];
          for (; ++x < N; ) (ce || y < w) && (re[pe + a[x]] = r[y++]);
          return re;
        }
        function dr(r, n) {
          var a = -1,
            u = r.length;
          for (n || (n = H(u)); ++a < u; ) n[a] = r[a];
          return n;
        }
        function ti(r, n, a, u) {
          var y = !a;
          a || (a = {});
          for (var w = -1, x = n.length; ++w < x; ) {
            var N = n[w],
              q = u ? u(a[N], r[N], N, a, r) : t;
            q === t && (q = r[N]), y ? fi(a, N, q) : os(a, N, q);
          }
          return a;
        }
        function fy(r, n) {
          return ti(r, Ac(r), n);
        }
        function dy(r, n) {
          return ti(r, vl(r), n);
        }
        function Ao(r, n) {
          return function (a, u) {
            var y = Re(a) ? mg : L0,
              w = n ? n() : {};
            return y(a, r, me(u, 2), w);
          };
        }
        function An(r) {
          return Ke(function (n, a) {
            var u = -1,
              y = a.length,
              w = y > 1 ? a[y - 1] : t,
              x = y > 2 ? a[2] : t;
            for (
              w = r.length > 3 && typeof w == "function" ? (y--, w) : t,
                x && sr(a[0], a[1], x) && ((w = y < 3 ? t : w), (y = 1)),
                n = ut(n);
              ++u < y;

            ) {
              var N = a[u];
              N && r(n, N, u, w);
            }
            return n;
          });
        }
        function sl(r, n) {
          return function (a, u) {
            if (a == null) return a;
            if (!pr(a)) return r(a, u);
            for (
              var y = a.length, w = n ? y : -1, x = ut(a);
              (n ? w-- : ++w < y) && u(x[w], w, x) !== !1;

            );
            return a;
          };
        }
        function ol(r) {
          return function (n, a, u) {
            for (var y = -1, w = ut(n), x = u(n), N = x.length; N--; ) {
              var q = x[r ? N : ++y];
              if (a(w[q], q, w) === !1) break;
            }
            return n;
          };
        }
        function py(r, n, a) {
          var u = n & B,
            y = ls(r);
          function w() {
            var x = this && this !== Qe && this instanceof w ? y : r;
            return x.apply(u ? a : this, arguments);
          }
          return w;
        }
        function al(r) {
          return function (n) {
            n = rt(n);
            var a = Dn(n) ? Kr(n) : t,
              u = a ? a[0] : n.charAt(0),
              y = a ? Mi(a, 1).join("") : n.slice(1);
            return u[r]() + y;
          };
        }
        function Tn(r) {
          return function (n) {
            return Ga(of(sf(n).replace(Xn, "")), r, "");
          };
        }
        function ls(r) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new r();
              case 1:
                return new r(n[0]);
              case 2:
                return new r(n[0], n[1]);
              case 3:
                return new r(n[0], n[1], n[2]);
              case 4:
                return new r(n[0], n[1], n[2], n[3]);
              case 5:
                return new r(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var a = Cn(r.prototype),
              u = r.apply(a, n);
            return Et(u) ? u : a;
          };
        }
        function gy(r, n, a) {
          var u = ls(r);
          function y() {
            for (var w = arguments.length, x = H(w), N = w, q = Rn(y); N--; )
              x[N] = arguments[N];
            var G = w < 3 && x[0] !== q && x[w - 1] !== q ? [] : Ri(x, q);
            if (((w -= G.length), w < a))
              return fl(r, n, To, y.placeholder, t, x, G, t, t, a - w);
            var Y = this && this !== Qe && this instanceof y ? u : r;
            return Kt(Y, this, x);
          }
          return y;
        }
        function cl(r) {
          return function (n, a, u) {
            var y = ut(n);
            if (!pr(n)) {
              var w = me(a, 3);
              (n = kt(n)),
                (a = function (N) {
                  return w(y[N], N, y);
                });
            }
            var x = r(n, a, u);
            return x > -1 ? y[w ? n[x] : x] : t;
          };
        }
        function ul(r) {
          return pi(function (n) {
            var a = n.length,
              u = a,
              y = Ur.prototype.thru;
            for (r && n.reverse(); u--; ) {
              var w = n[u];
              if (typeof w != "function") throw new Lr(f);
              if (y && !x && Lo(w) == "wrapper") var x = new Ur([], !0);
            }
            for (u = x ? u : a; ++u < a; ) {
              w = n[u];
              var N = Lo(w),
                q = N == "wrapper" ? Pc(w) : t;
              q &&
              Rc(q[0]) &&
              q[1] == (h | M | C | b) &&
              !q[4].length &&
              q[9] == 1
                ? (x = x[Lo(q[0])].apply(x, q[3]))
                : (x = w.length == 1 && Rc(w) ? x[N]() : x.thru(w));
            }
            return function () {
              var G = arguments,
                Y = G[0];
              if (x && G.length == 1 && Re(Y)) return x.plant(Y).value();
              for (var re = 0, ce = a ? n[re].apply(this, G) : Y; ++re < a; )
                ce = n[re].call(this, ce);
              return ce;
            };
          });
        }
        function To(r, n, a, u, y, w, x, N, q, G) {
          var Y = n & h,
            re = n & B,
            ce = n & Z,
            pe = n & (M | I),
            we = n & ee,
            ze = ce ? t : ls(r);
          function _e() {
            for (var We = arguments.length, Xe = H(We), xr = We; xr--; )
              Xe[xr] = arguments[xr];
            if (pe)
              var or = Rn(_e),
                Or = Og(Xe, or);
            if (
              (u && (Xe = il(Xe, u, y, pe)),
              w && (Xe = nl(Xe, w, x, pe)),
              (We -= Or),
              pe && We < G)
            ) {
              var Nt = Ri(Xe, or);
              return fl(r, n, To, _e.placeholder, a, Xe, Nt, N, q, G - We);
            }
            var Wr = re ? a : this,
              mi = ce ? Wr[r] : r;
            return (
              (We = Xe.length),
              N ? (Xe = Ly(Xe, N)) : we && We > 1 && Xe.reverse(),
              Y && q < We && (Xe.length = q),
              this && this !== Qe && this instanceof _e && (mi = ze || ls(mi)),
              mi.apply(Wr, Xe)
            );
          }
          return _e;
        }
        function hl(r, n) {
          return function (a, u) {
            return B0(a, r, n(u), {});
          };
        }
        function Ro(r, n) {
          return function (a, u) {
            var y;
            if (a === t && u === t) return n;
            if ((a !== t && (y = a), u !== t)) {
              if (y === t) return u;
              typeof a == "string" || typeof u == "string"
                ? ((a = Sr(a)), (u = Sr(u)))
                : ((a = Yh(a)), (u = Yh(u))),
                (y = r(a, u));
            }
            return y;
          };
        }
        function Sc(r) {
          return pi(function (n) {
            return (
              (n = mt(n, Dr(me()))),
              Ke(function (a) {
                var u = this;
                return r(n, function (y) {
                  return Kt(y, u, a);
                });
              })
            );
          });
        }
        function No(r, n) {
          n = n === t ? " " : Sr(n);
          var a = n.length;
          if (a < 2) return a ? vc(n, r) : n;
          var u = vc(n, wo(r / Sn(n)));
          return Dn(n) ? Mi(Kr(u), 0, r).join("") : u.slice(0, r);
        }
        function yy(r, n, a, u) {
          var y = n & B,
            w = ls(r);
          function x() {
            for (
              var N = -1,
                q = arguments.length,
                G = -1,
                Y = u.length,
                re = H(Y + q),
                ce = this && this !== Qe && this instanceof x ? w : r;
              ++G < Y;

            )
              re[G] = u[G];
            for (; q--; ) re[G++] = arguments[++N];
            return Kt(ce, y ? a : this, re);
          }
          return x;
        }
        function ll(r) {
          return function (n, a, u) {
            return (
              u && typeof u != "number" && sr(n, a, u) && (a = u = t),
              (n = vi(n)),
              a === t ? ((a = n), (n = 0)) : (a = vi(a)),
              (u = u === t ? (n < a ? 1 : -1) : vi(u)),
              ty(n, a, u, r)
            );
          };
        }
        function $o(r) {
          return function (n, a) {
            return (
              (typeof n == "string" && typeof a == "string") ||
                ((n = Fr(n)), (a = Fr(a))),
              r(n, a)
            );
          };
        }
        function fl(r, n, a, u, y, w, x, N, q, G) {
          var Y = n & M,
            re = Y ? x : t,
            ce = Y ? t : x,
            pe = Y ? w : t,
            we = Y ? t : w;
          (n |= Y ? C : A), (n &= ~(Y ? A : C)), n & $ || (n &= ~(B | Z));
          var ze = [r, n, y, pe, re, we, ce, N, q, G],
            _e = a.apply(t, ze);
          return Rc(r) && Sl(_e, ze), (_e.placeholder = u), Il(_e, r, n);
        }
        function Ic(r) {
          var n = Ht[r];
          return function (a, u) {
            if (
              ((a = Fr(a)), (u = u == null ? 0 : Qt(je(u), 292)), u && Ih(a))
            ) {
              var y = (rt(a) + "e").split("e"),
                w = n(y[0] + "e" + (+y[1] + u));
              return (
                (y = (rt(w) + "e").split("e")), +(y[0] + "e" + (+y[1] - u))
              );
            }
            return n(a);
          };
        }
        var vy =
          On && 1 / co(new On([, -0]))[1] == J
            ? function (r) {
                return new On(r);
              }
            : Wc;
        function dl(r) {
          return function (n) {
            var a = Xt(n);
            return a == Ee ? tc(n) : a == Ie ? $g(n) : xg(n, r(n));
          };
        }
        function di(r, n, a, u, y, w, x, N) {
          var q = n & Z;
          if (!q && typeof r != "function") throw new Lr(f);
          var G = u ? u.length : 0;
          if (
            (G || ((n &= ~(C | A)), (u = y = t)),
            (x = x === t ? x : Bt(je(x), 0)),
            (N = N === t ? N : je(N)),
            (G -= y ? y.length : 0),
            n & A)
          ) {
            var Y = u,
              re = y;
            u = y = t;
          }
          var ce = q ? t : Pc(r),
            pe = [r, n, a, u, y, Y, re, w, x, N];
          if (
            (ce && Ry(pe, ce),
            (r = pe[0]),
            (n = pe[1]),
            (a = pe[2]),
            (u = pe[3]),
            (y = pe[4]),
            (N = pe[9] = pe[9] === t ? (q ? 0 : r.length) : Bt(pe[9] - G, 0)),
            !N && n & (M | I) && (n &= ~(M | I)),
            !n || n == B)
          )
            var we = py(r, n, a);
          else
            n == M || n == I
              ? (we = gy(r, n, N))
              : (n == C || n == (B | C)) && !y.length
              ? (we = yy(r, n, a, u))
              : (we = To.apply(t, pe));
          var ze = ce ? Wh : Sl;
          return Il(ze(we, pe), r, n);
        }
        function pl(r, n, a, u) {
          return r === t || (Vr(r, xn[a]) && !it.call(u, a)) ? n : r;
        }
        function gl(r, n, a, u, y, w) {
          return (
            Et(r) && Et(n) && (w.set(n, r), Oo(r, n, t, gl, w), w.delete(n)), r
          );
        }
        function my(r) {
          return ps(r) ? t : r;
        }
        function yl(r, n, a, u, y, w) {
          var x = a & S,
            N = r.length,
            q = n.length;
          if (N != q && !(x && q > N)) return !1;
          var G = w.get(r),
            Y = w.get(n);
          if (G && Y) return G == n && Y == r;
          var re = -1,
            ce = !0,
            pe = a & K ? new Xi() : t;
          for (w.set(r, n), w.set(n, r); ++re < N; ) {
            var we = r[re],
              ze = n[re];
            if (u) var _e = x ? u(ze, we, re, n, r, w) : u(we, ze, re, r, n, w);
            if (_e !== t) {
              if (_e) continue;
              ce = !1;
              break;
            }
            if (pe) {
              if (
                !Ya(n, function (We, Xe) {
                  if (!es(pe, Xe) && (we === We || y(we, We, a, u, w)))
                    return pe.push(Xe);
                })
              ) {
                ce = !1;
                break;
              }
            } else if (!(we === ze || y(we, ze, a, u, w))) {
              ce = !1;
              break;
            }
          }
          return w.delete(r), w.delete(n), ce;
        }
        function wy(r, n, a, u, y, w, x) {
          switch (a) {
            case Pe:
              if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                return !1;
              (r = r.buffer), (n = n.buffer);
            case be:
              return !(
                r.byteLength != n.byteLength || !w(new go(r), new go(n))
              );
            case F:
            case L:
            case He:
              return Vr(+r, +n);
            case T:
              return r.name == n.name && r.message == n.message;
            case qe:
            case Ne:
              return r == n + "";
            case Ee:
              var N = tc;
            case Ie:
              var q = u & S;
              if ((N || (N = co), r.size != n.size && !q)) return !1;
              var G = x.get(r);
              if (G) return G == n;
              (u |= K), x.set(r, n);
              var Y = yl(N(r), N(n), u, y, w, x);
              return x.delete(r), Y;
            case $e:
              if (ss) return ss.call(r) == ss.call(n);
          }
          return !1;
        }
        function _y(r, n, a, u, y, w) {
          var x = a & S,
            N = xc(r),
            q = N.length,
            G = xc(n),
            Y = G.length;
          if (q != Y && !x) return !1;
          for (var re = q; re--; ) {
            var ce = N[re];
            if (!(x ? ce in n : it.call(n, ce))) return !1;
          }
          var pe = w.get(r),
            we = w.get(n);
          if (pe && we) return pe == n && we == r;
          var ze = !0;
          w.set(r, n), w.set(n, r);
          for (var _e = x; ++re < q; ) {
            ce = N[re];
            var We = r[ce],
              Xe = n[ce];
            if (u) var xr = x ? u(Xe, We, ce, n, r, w) : u(We, Xe, ce, r, n, w);
            if (!(xr === t ? We === Xe || y(We, Xe, a, u, w) : xr)) {
              ze = !1;
              break;
            }
            _e || (_e = ce == "constructor");
          }
          if (ze && !_e) {
            var or = r.constructor,
              Or = n.constructor;
            or != Or &&
              "constructor" in r &&
              "constructor" in n &&
              !(
                typeof or == "function" &&
                or instanceof or &&
                typeof Or == "function" &&
                Or instanceof Or
              ) &&
              (ze = !1);
          }
          return w.delete(r), w.delete(n), ze;
        }
        function pi(r) {
          return $c(El(r, t, Tl), r + "");
        }
        function xc(r) {
          return Uh(r, kt, Ac);
        }
        function Oc(r) {
          return Uh(r, gr, vl);
        }
        var Pc = bo
          ? function (r) {
              return bo.get(r);
            }
          : Wc;
        function Lo(r) {
          for (
            var n = r.name + "", a = Pn[n], u = it.call(Pn, n) ? a.length : 0;
            u--;

          ) {
            var y = a[u],
              w = y.func;
            if (w == null || w == r) return y.name;
          }
          return n;
        }
        function Rn(r) {
          var n = it.call(m, "placeholder") ? m : r;
          return n.placeholder;
        }
        function me() {
          var r = m.iteratee || kc;
          return (
            (r = r === kc ? qh : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          );
        }
        function Uo(r, n) {
          var a = r.__data__;
          return Py(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
        }
        function Cc(r) {
          for (var n = kt(r), a = n.length; a--; ) {
            var u = n[a],
              y = r[u];
            n[a] = [u, y, _l(y)];
          }
          return n;
        }
        function tn(r, n) {
          var a = Tg(r, n);
          return jh(a) ? a : t;
        }
        function by(r) {
          var n = it.call(r, Ji),
            a = r[Ji];
          try {
            r[Ji] = t;
            var u = !0;
          } catch {}
          var y = fo.call(r);
          return u && (n ? (r[Ji] = a) : delete r[Ji]), y;
        }
        var Ac = ic
            ? function (r) {
                return r == null
                  ? []
                  : ((r = ut(r)),
                    Ai(ic(r), function (n) {
                      return Dh.call(r, n);
                    }));
              }
            : Gc,
          vl = ic
            ? function (r) {
                for (var n = []; r; ) Ti(n, Ac(r)), (r = yo(r));
                return n;
              }
            : Gc,
          Xt = nr;
        ((nc && Xt(new nc(new ArrayBuffer(1))) != Pe) ||
          (rs && Xt(new rs()) != Ee) ||
          (sc && Xt(sc.resolve()) != pt) ||
          (On && Xt(new On()) != Ie) ||
          (is && Xt(new is()) != Oe)) &&
          (Xt = function (r) {
            var n = nr(r),
              a = n == Me ? r.constructor : t,
              u = a ? rn(a) : "";
            if (u)
              switch (u) {
                case i0:
                  return Pe;
                case n0:
                  return Ee;
                case s0:
                  return pt;
                case o0:
                  return Ie;
                case a0:
                  return Oe;
              }
            return n;
          });
        function Ey(r, n, a) {
          for (var u = -1, y = a.length; ++u < y; ) {
            var w = a[u],
              x = w.size;
            switch (w.type) {
              case "drop":
                r += x;
                break;
              case "dropRight":
                n -= x;
                break;
              case "take":
                n = Qt(n, r + x);
                break;
              case "takeRight":
                r = Bt(r, n - x);
                break;
            }
          }
          return { start: r, end: n };
        }
        function Dy(r) {
          var n = r.match(ht);
          return n ? n[1].split(jt) : [];
        }
        function ml(r, n, a) {
          n = Ui(n, r);
          for (var u = -1, y = n.length, w = !1; ++u < y; ) {
            var x = ri(n[u]);
            if (!(w = r != null && a(r, x))) break;
            r = r[x];
          }
          return w || ++u != y
            ? w
            : ((y = r == null ? 0 : r.length),
              !!y && Bo(y) && gi(x, y) && (Re(r) || nn(r)));
        }
        function Sy(r) {
          var n = r.length,
            a = new r.constructor(n);
          return (
            n &&
              typeof r[0] == "string" &&
              it.call(r, "index") &&
              ((a.index = r.index), (a.input = r.input)),
            a
          );
        }
        function wl(r) {
          return typeof r.constructor == "function" && !fs(r) ? Cn(yo(r)) : {};
        }
        function Iy(r, n, a) {
          var u = r.constructor;
          switch (n) {
            case be:
              return Dc(r);
            case F:
            case L:
              return new u(+r);
            case Pe:
              return cy(r, a);
            case Be:
            case xe:
            case Ve:
            case Ge:
            case Ze:
            case et:
            case Je:
            case tr:
            case lr:
              return tl(r, a);
            case Ee:
              return new u();
            case He:
            case Ne:
              return new u(r);
            case qe:
              return uy(r);
            case Ie:
              return new u();
            case $e:
              return hy(r);
          }
        }
        function xy(r, n) {
          var a = n.length;
          if (!a) return r;
          var u = a - 1;
          return (
            (n[u] = (a > 1 ? "& " : "") + n[u]),
            (n = n.join(a > 2 ? ", " : " ")),
            r.replace(
              Pt,
              `{
/* [wrapped with ` +
                n +
                `] */
`
            )
          );
        }
        function Oy(r) {
          return Re(r) || nn(r) || !!(Sh && r && r[Sh]);
        }
        function gi(r, n) {
          var a = typeof r;
          return (
            (n = n ?? k),
            !!n &&
              (a == "number" || (a != "symbol" && Na.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < n
          );
        }
        function sr(r, n, a) {
          if (!Et(a)) return !1;
          var u = typeof n;
          return (
            u == "number" ? pr(a) && gi(n, a.length) : u == "string" && n in a
          )
            ? Vr(a[n], r)
            : !1;
        }
        function Tc(r, n) {
          if (Re(r)) return !1;
          var a = typeof r;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            r == null ||
            Ir(r)
            ? !0
            : Lt.test(r) || !vt.test(r) || (n != null && r in ut(n));
        }
        function Py(r) {
          var n = typeof r;
          return n == "string" ||
            n == "number" ||
            n == "symbol" ||
            n == "boolean"
            ? r !== "__proto__"
            : r === null;
        }
        function Rc(r) {
          var n = Lo(r),
            a = m[n];
          if (typeof a != "function" || !(n in Ye.prototype)) return !1;
          if (r === a) return !0;
          var u = Pc(a);
          return !!u && r === u[0];
        }
        function Cy(r) {
          return !!_h && _h in r;
        }
        var Ay = ho ? yi : Yc;
        function fs(r) {
          var n = r && r.constructor,
            a = (typeof n == "function" && n.prototype) || xn;
          return r === a;
        }
        function _l(r) {
          return r === r && !Et(r);
        }
        function bl(r, n) {
          return function (a) {
            return a == null ? !1 : a[r] === n && (n !== t || r in ut(a));
          };
        }
        function Ty(r) {
          var n = zo(r, function (u) {
              return a.size === g && a.clear(), u;
            }),
            a = n.cache;
          return n;
        }
        function Ry(r, n) {
          var a = r[1],
            u = n[1],
            y = a | u,
            w = y < (B | Z | h),
            x =
              (u == h && a == M) ||
              (u == h && a == b && r[7].length <= n[8]) ||
              (u == (h | b) && n[7].length <= n[8] && a == M);
          if (!(w || x)) return r;
          u & B && ((r[2] = n[2]), (y |= a & B ? 0 : $));
          var N = n[3];
          if (N) {
            var q = r[3];
            (r[3] = q ? il(q, N, n[4]) : N), (r[4] = q ? Ri(r[3], v) : n[4]);
          }
          return (
            (N = n[5]),
            N &&
              ((q = r[5]),
              (r[5] = q ? nl(q, N, n[6]) : N),
              (r[6] = q ? Ri(r[5], v) : n[6])),
            (N = n[7]),
            N && (r[7] = N),
            u & h && (r[8] = r[8] == null ? n[8] : Qt(r[8], n[8])),
            r[9] == null && (r[9] = n[9]),
            (r[0] = n[0]),
            (r[1] = y),
            r
          );
        }
        function Ny(r) {
          var n = [];
          if (r != null) for (var a in ut(r)) n.push(a);
          return n;
        }
        function $y(r) {
          return fo.call(r);
        }
        function El(r, n, a) {
          return (
            (n = Bt(n === t ? r.length - 1 : n, 0)),
            function () {
              for (
                var u = arguments, y = -1, w = Bt(u.length - n, 0), x = H(w);
                ++y < w;

              )
                x[y] = u[n + y];
              y = -1;
              for (var N = H(n + 1); ++y < n; ) N[y] = u[y];
              return (N[n] = a(x)), Kt(r, this, N);
            }
          );
        }
        function Dl(r, n) {
          return n.length < 2 ? r : en(r, jr(n, 0, -1));
        }
        function Ly(r, n) {
          for (var a = r.length, u = Qt(n.length, a), y = dr(r); u--; ) {
            var w = n[u];
            r[u] = gi(w, a) ? y[w] : t;
          }
          return r;
        }
        function Nc(r, n) {
          if (
            !(n === "constructor" && typeof r[n] == "function") &&
            n != "__proto__"
          )
            return r[n];
        }
        var Sl = xl(Wh),
          ds =
            Jg ||
            function (r, n) {
              return Qe.setTimeout(r, n);
            },
          $c = xl(ny);
        function Il(r, n, a) {
          var u = n + "";
          return $c(r, xy(u, Uy(Dy(u), a)));
        }
        function xl(r) {
          var n = 0,
            a = 0;
          return function () {
            var u = e0(),
              y = ye - (u - a);
            if (((a = u), y > 0)) {
              if (++n >= ge) return arguments[0];
            } else n = 0;
            return r.apply(t, arguments);
          };
        }
        function Mo(r, n) {
          var a = -1,
            u = r.length,
            y = u - 1;
          for (n = n === t ? u : n; ++a < n; ) {
            var w = yc(a, y),
              x = r[w];
            (r[w] = r[a]), (r[a] = x);
          }
          return (r.length = n), r;
        }
        var Ol = Ty(function (r) {
          var n = [];
          return (
            r.charCodeAt(0) === 46 && n.push(""),
            r.replace(Ut, function (a, u, y, w) {
              n.push(y ? w.replace(Oa, "$1") : u || a);
            }),
            n
          );
        });
        function ri(r) {
          if (typeof r == "string" || Ir(r)) return r;
          var n = r + "";
          return n == "0" && 1 / r == -J ? "-0" : n;
        }
        function rn(r) {
          if (r != null) {
            try {
              return lo.call(r);
            } catch {}
            try {
              return r + "";
            } catch {}
          }
          return "";
        }
        function Uy(r, n) {
          return (
            $r(Se, function (a) {
              var u = "_." + a[0];
              n & a[1] && !oo(r, u) && r.push(u);
            }),
            r.sort()
          );
        }
        function Pl(r) {
          if (r instanceof Ye) return r.clone();
          var n = new Ur(r.__wrapped__, r.__chain__);
          return (
            (n.__actions__ = dr(r.__actions__)),
            (n.__index__ = r.__index__),
            (n.__values__ = r.__values__),
            n
          );
        }
        function My(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = Bt(je(n), 0));
          var u = r == null ? 0 : r.length;
          if (!u || n < 1) return [];
          for (var y = 0, w = 0, x = H(wo(u / n)); y < u; )
            x[w++] = jr(r, y, (y += n));
          return x;
        }
        function jy(r) {
          for (
            var n = -1, a = r == null ? 0 : r.length, u = 0, y = [];
            ++n < a;

          ) {
            var w = r[n];
            w && (y[u++] = w);
          }
          return y;
        }
        function qy() {
          var r = arguments.length;
          if (!r) return [];
          for (var n = H(r - 1), a = arguments[0], u = r; u--; )
            n[u - 1] = arguments[u];
          return Ti(Re(a) ? dr(a) : [a], Gt(n, 1));
        }
        var Fy = Ke(function (r, n) {
            return Rt(r) ? as(r, Gt(n, 1, Rt, !0)) : [];
          }),
          zy = Ke(function (r, n) {
            var a = qr(n);
            return (
              Rt(a) && (a = t), Rt(r) ? as(r, Gt(n, 1, Rt, !0), me(a, 2)) : []
            );
          }),
          Hy = Ke(function (r, n) {
            var a = qr(n);
            return Rt(a) && (a = t), Rt(r) ? as(r, Gt(n, 1, Rt, !0), t, a) : [];
          });
        function By(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : je(n)), jr(r, n < 0 ? 0 : n, u))
            : [];
        }
        function Ky(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : je(n)),
              (n = u - n),
              jr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function ky(r, n) {
          return r && r.length ? Co(r, me(n, 3), !0, !0) : [];
        }
        function Vy(r, n) {
          return r && r.length ? Co(r, me(n, 3), !0) : [];
        }
        function Wy(r, n, a, u) {
          var y = r == null ? 0 : r.length;
          return y
            ? (a && typeof a != "number" && sr(r, n, a) && ((a = 0), (u = y)),
              q0(r, n, a, u))
            : [];
        }
        function Cl(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = a == null ? 0 : je(a);
          return y < 0 && (y = Bt(u + y, 0)), ao(r, me(n, 3), y);
        }
        function Al(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = u - 1;
          return (
            a !== t && ((y = je(a)), (y = a < 0 ? Bt(u + y, 0) : Qt(y, u - 1))),
            ao(r, me(n, 3), y, !0)
          );
        }
        function Tl(r) {
          var n = r == null ? 0 : r.length;
          return n ? Gt(r, 1) : [];
        }
        function Gy(r) {
          var n = r == null ? 0 : r.length;
          return n ? Gt(r, J) : [];
        }
        function Yy(r, n) {
          var a = r == null ? 0 : r.length;
          return a ? ((n = n === t ? 1 : je(n)), Gt(r, n)) : [];
        }
        function Jy(r) {
          for (var n = -1, a = r == null ? 0 : r.length, u = {}; ++n < a; ) {
            var y = r[n];
            u[y[0]] = y[1];
          }
          return u;
        }
        function Rl(r) {
          return r && r.length ? r[0] : t;
        }
        function Qy(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = a == null ? 0 : je(a);
          return y < 0 && (y = Bt(u + y, 0)), En(r, n, y);
        }
        function Xy(r) {
          var n = r == null ? 0 : r.length;
          return n ? jr(r, 0, -1) : [];
        }
        var Zy = Ke(function (r) {
            var n = mt(r, bc);
            return n.length && n[0] === r[0] ? lc(n) : [];
          }),
          ev = Ke(function (r) {
            var n = qr(r),
              a = mt(r, bc);
            return (
              n === qr(a) ? (n = t) : a.pop(),
              a.length && a[0] === r[0] ? lc(a, me(n, 2)) : []
            );
          }),
          tv = Ke(function (r) {
            var n = qr(r),
              a = mt(r, bc);
            return (
              (n = typeof n == "function" ? n : t),
              n && a.pop(),
              a.length && a[0] === r[0] ? lc(a, t, n) : []
            );
          });
        function rv(r, n) {
          return r == null ? "" : Xg.call(r, n);
        }
        function qr(r) {
          var n = r == null ? 0 : r.length;
          return n ? r[n - 1] : t;
        }
        function iv(r, n, a) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var y = u;
          return (
            a !== t && ((y = je(a)), (y = y < 0 ? Bt(u + y, 0) : Qt(y, u - 1))),
            n === n ? Ug(r, n, y) : ao(r, fh, y, !0)
          );
        }
        function nv(r, n) {
          return r && r.length ? Bh(r, je(n)) : t;
        }
        var sv = Ke(Nl);
        function Nl(r, n) {
          return r && r.length && n && n.length ? gc(r, n) : r;
        }
        function ov(r, n, a) {
          return r && r.length && n && n.length ? gc(r, n, me(a, 2)) : r;
        }
        function av(r, n, a) {
          return r && r.length && n && n.length ? gc(r, n, t, a) : r;
        }
        var cv = pi(function (r, n) {
          var a = r == null ? 0 : r.length,
            u = ac(r, n);
          return (
            Vh(
              r,
              mt(n, function (y) {
                return gi(y, a) ? +y : y;
              }).sort(rl)
            ),
            u
          );
        });
        function uv(r, n) {
          var a = [];
          if (!(r && r.length)) return a;
          var u = -1,
            y = [],
            w = r.length;
          for (n = me(n, 3); ++u < w; ) {
            var x = r[u];
            n(x, u, r) && (a.push(x), y.push(u));
          }
          return Vh(r, y), a;
        }
        function Lc(r) {
          return r == null ? r : r0.call(r);
        }
        function hv(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? (a && typeof a != "number" && sr(r, n, a)
                ? ((n = 0), (a = u))
                : ((n = n == null ? 0 : je(n)), (a = a === t ? u : je(a))),
              jr(r, n, a))
            : [];
        }
        function lv(r, n) {
          return Po(r, n);
        }
        function fv(r, n, a) {
          return mc(r, n, me(a, 2));
        }
        function dv(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var u = Po(r, n);
            if (u < a && Vr(r[u], n)) return u;
          }
          return -1;
        }
        function pv(r, n) {
          return Po(r, n, !0);
        }
        function gv(r, n, a) {
          return mc(r, n, me(a, 2), !0);
        }
        function yv(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var u = Po(r, n, !0) - 1;
            if (Vr(r[u], n)) return u;
          }
          return -1;
        }
        function vv(r) {
          return r && r.length ? Gh(r) : [];
        }
        function mv(r, n) {
          return r && r.length ? Gh(r, me(n, 2)) : [];
        }
        function wv(r) {
          var n = r == null ? 0 : r.length;
          return n ? jr(r, 1, n) : [];
        }
        function _v(r, n, a) {
          return r && r.length
            ? ((n = a || n === t ? 1 : je(n)), jr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function bv(r, n, a) {
          var u = r == null ? 0 : r.length;
          return u
            ? ((n = a || n === t ? 1 : je(n)),
              (n = u - n),
              jr(r, n < 0 ? 0 : n, u))
            : [];
        }
        function Ev(r, n) {
          return r && r.length ? Co(r, me(n, 3), !1, !0) : [];
        }
        function Dv(r, n) {
          return r && r.length ? Co(r, me(n, 3)) : [];
        }
        var Sv = Ke(function (r) {
            return Li(Gt(r, 1, Rt, !0));
          }),
          Iv = Ke(function (r) {
            var n = qr(r);
            return Rt(n) && (n = t), Li(Gt(r, 1, Rt, !0), me(n, 2));
          }),
          xv = Ke(function (r) {
            var n = qr(r);
            return (
              (n = typeof n == "function" ? n : t), Li(Gt(r, 1, Rt, !0), t, n)
            );
          });
        function Ov(r) {
          return r && r.length ? Li(r) : [];
        }
        function Pv(r, n) {
          return r && r.length ? Li(r, me(n, 2)) : [];
        }
        function Cv(r, n) {
          return (
            (n = typeof n == "function" ? n : t),
            r && r.length ? Li(r, t, n) : []
          );
        }
        function Uc(r) {
          if (!(r && r.length)) return [];
          var n = 0;
          return (
            (r = Ai(r, function (a) {
              if (Rt(a)) return (n = Bt(a.length, n)), !0;
            })),
            Za(n, function (a) {
              return mt(r, Ja(a));
            })
          );
        }
        function $l(r, n) {
          if (!(r && r.length)) return [];
          var a = Uc(r);
          return n == null
            ? a
            : mt(a, function (u) {
                return Kt(n, t, u);
              });
        }
        var Av = Ke(function (r, n) {
            return Rt(r) ? as(r, n) : [];
          }),
          Tv = Ke(function (r) {
            return _c(Ai(r, Rt));
          }),
          Rv = Ke(function (r) {
            var n = qr(r);
            return Rt(n) && (n = t), _c(Ai(r, Rt), me(n, 2));
          }),
          Nv = Ke(function (r) {
            var n = qr(r);
            return (n = typeof n == "function" ? n : t), _c(Ai(r, Rt), t, n);
          }),
          $v = Ke(Uc);
        function Lv(r, n) {
          return Xh(r || [], n || [], os);
        }
        function Uv(r, n) {
          return Xh(r || [], n || [], hs);
        }
        var Mv = Ke(function (r) {
          var n = r.length,
            a = n > 1 ? r[n - 1] : t;
          return (a = typeof a == "function" ? (r.pop(), a) : t), $l(r, a);
        });
        function Ll(r) {
          var n = m(r);
          return (n.__chain__ = !0), n;
        }
        function jv(r, n) {
          return n(r), r;
        }
        function jo(r, n) {
          return n(r);
        }
        var qv = pi(function (r) {
          var n = r.length,
            a = n ? r[0] : 0,
            u = this.__wrapped__,
            y = function (w) {
              return ac(w, r);
            };
          return n > 1 ||
            this.__actions__.length ||
            !(u instanceof Ye) ||
            !gi(a)
            ? this.thru(y)
            : ((u = u.slice(a, +a + (n ? 1 : 0))),
              u.__actions__.push({ func: jo, args: [y], thisArg: t }),
              new Ur(u, this.__chain__).thru(function (w) {
                return n && !w.length && w.push(t), w;
              }));
        });
        function Fv() {
          return Ll(this);
        }
        function zv() {
          return new Ur(this.value(), this.__chain__);
        }
        function Hv() {
          this.__values__ === t && (this.__values__ = Yl(this.value()));
          var r = this.__index__ >= this.__values__.length,
            n = r ? t : this.__values__[this.__index__++];
          return { done: r, value: n };
        }
        function Bv() {
          return this;
        }
        function Kv(r) {
          for (var n, a = this; a instanceof Do; ) {
            var u = Pl(a);
            (u.__index__ = 0),
              (u.__values__ = t),
              n ? (y.__wrapped__ = u) : (n = u);
            var y = u;
            a = a.__wrapped__;
          }
          return (y.__wrapped__ = r), n;
        }
        function kv() {
          var r = this.__wrapped__;
          if (r instanceof Ye) {
            var n = r;
            return (
              this.__actions__.length && (n = new Ye(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: jo, args: [Lc], thisArg: t }),
              new Ur(n, this.__chain__)
            );
          }
          return this.thru(Lc);
        }
        function Vv() {
          return Qh(this.__wrapped__, this.__actions__);
        }
        var Wv = Ao(function (r, n, a) {
          it.call(r, a) ? ++r[a] : fi(r, a, 1);
        });
        function Gv(r, n, a) {
          var u = Re(r) ? hh : j0;
          return a && sr(r, n, a) && (n = t), u(r, me(n, 3));
        }
        function Yv(r, n) {
          var a = Re(r) ? Ai : $h;
          return a(r, me(n, 3));
        }
        var Jv = cl(Cl),
          Qv = cl(Al);
        function Xv(r, n) {
          return Gt(qo(r, n), 1);
        }
        function Zv(r, n) {
          return Gt(qo(r, n), J);
        }
        function em(r, n, a) {
          return (a = a === t ? 1 : je(a)), Gt(qo(r, n), a);
        }
        function Ul(r, n) {
          var a = Re(r) ? $r : $i;
          return a(r, me(n, 3));
        }
        function Ml(r, n) {
          var a = Re(r) ? wg : Nh;
          return a(r, me(n, 3));
        }
        var tm = Ao(function (r, n, a) {
          it.call(r, a) ? r[a].push(n) : fi(r, a, [n]);
        });
        function rm(r, n, a, u) {
          (r = pr(r) ? r : $n(r)), (a = a && !u ? je(a) : 0);
          var y = r.length;
          return (
            a < 0 && (a = Bt(y + a, 0)),
            Ko(r) ? a <= y && r.indexOf(n, a) > -1 : !!y && En(r, n, a) > -1
          );
        }
        var im = Ke(function (r, n, a) {
            var u = -1,
              y = typeof n == "function",
              w = pr(r) ? H(r.length) : [];
            return (
              $i(r, function (x) {
                w[++u] = y ? Kt(n, x, a) : cs(x, n, a);
              }),
              w
            );
          }),
          nm = Ao(function (r, n, a) {
            fi(r, a, n);
          });
        function qo(r, n) {
          var a = Re(r) ? mt : Fh;
          return a(r, me(n, 3));
        }
        function sm(r, n, a, u) {
          return r == null
            ? []
            : (Re(n) || (n = n == null ? [] : [n]),
              (a = u ? t : a),
              Re(a) || (a = a == null ? [] : [a]),
              Kh(r, n, a));
        }
        var om = Ao(
          function (r, n, a) {
            r[a ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          }
        );
        function am(r, n, a) {
          var u = Re(r) ? Ga : ph,
            y = arguments.length < 3;
          return u(r, me(n, 4), a, y, $i);
        }
        function cm(r, n, a) {
          var u = Re(r) ? _g : ph,
            y = arguments.length < 3;
          return u(r, me(n, 4), a, y, Nh);
        }
        function um(r, n) {
          var a = Re(r) ? Ai : $h;
          return a(r, Ho(me(n, 3)));
        }
        function hm(r) {
          var n = Re(r) ? Ch : ry;
          return n(r);
        }
        function lm(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = je(n));
          var u = Re(r) ? N0 : iy;
          return u(r, n);
        }
        function fm(r) {
          var n = Re(r) ? $0 : sy;
          return n(r);
        }
        function dm(r) {
          if (r == null) return 0;
          if (pr(r)) return Ko(r) ? Sn(r) : r.length;
          var n = Xt(r);
          return n == Ee || n == Ie ? r.size : dc(r).length;
        }
        function pm(r, n, a) {
          var u = Re(r) ? Ya : oy;
          return a && sr(r, n, a) && (n = t), u(r, me(n, 3));
        }
        var gm = Ke(function (r, n) {
            if (r == null) return [];
            var a = n.length;
            return (
              a > 1 && sr(r, n[0], n[1])
                ? (n = [])
                : a > 2 && sr(n[0], n[1], n[2]) && (n = [n[0]]),
              Kh(r, Gt(n, 1), [])
            );
          }),
          Fo =
            Yg ||
            function () {
              return Qe.Date.now();
            };
        function ym(r, n) {
          if (typeof n != "function") throw new Lr(f);
          return (
            (r = je(r)),
            function () {
              if (--r < 1) return n.apply(this, arguments);
            }
          );
        }
        function jl(r, n, a) {
          return (
            (n = a ? t : n),
            (n = r && n == null ? r.length : n),
            di(r, h, t, t, t, t, n)
          );
        }
        function ql(r, n) {
          var a;
          if (typeof n != "function") throw new Lr(f);
          return (
            (r = je(r)),
            function () {
              return (
                --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a
              );
            }
          );
        }
        var Mc = Ke(function (r, n, a) {
            var u = B;
            if (a.length) {
              var y = Ri(a, Rn(Mc));
              u |= C;
            }
            return di(r, u, n, a, y);
          }),
          Fl = Ke(function (r, n, a) {
            var u = B | Z;
            if (a.length) {
              var y = Ri(a, Rn(Fl));
              u |= C;
            }
            return di(n, u, r, a, y);
          });
        function zl(r, n, a) {
          n = a ? t : n;
          var u = di(r, M, t, t, t, t, t, n);
          return (u.placeholder = zl.placeholder), u;
        }
        function Hl(r, n, a) {
          n = a ? t : n;
          var u = di(r, I, t, t, t, t, t, n);
          return (u.placeholder = Hl.placeholder), u;
        }
        function Bl(r, n, a) {
          var u,
            y,
            w,
            x,
            N,
            q,
            G = 0,
            Y = !1,
            re = !1,
            ce = !0;
          if (typeof r != "function") throw new Lr(f);
          (n = Fr(n) || 0),
            Et(a) &&
              ((Y = !!a.leading),
              (re = "maxWait" in a),
              (w = re ? Bt(Fr(a.maxWait) || 0, n) : w),
              (ce = "trailing" in a ? !!a.trailing : ce));
          function pe(Nt) {
            var Wr = u,
              mi = y;
            return (u = y = t), (G = Nt), (x = r.apply(mi, Wr)), x;
          }
          function we(Nt) {
            return (G = Nt), (N = ds(We, n)), Y ? pe(Nt) : x;
          }
          function ze(Nt) {
            var Wr = Nt - q,
              mi = Nt - G,
              uf = n - Wr;
            return re ? Qt(uf, w - mi) : uf;
          }
          function _e(Nt) {
            var Wr = Nt - q,
              mi = Nt - G;
            return q === t || Wr >= n || Wr < 0 || (re && mi >= w);
          }
          function We() {
            var Nt = Fo();
            if (_e(Nt)) return Xe(Nt);
            N = ds(We, ze(Nt));
          }
          function Xe(Nt) {
            return (N = t), ce && u ? pe(Nt) : ((u = y = t), x);
          }
          function xr() {
            N !== t && Zh(N), (G = 0), (u = q = y = N = t);
          }
          function or() {
            return N === t ? x : Xe(Fo());
          }
          function Or() {
            var Nt = Fo(),
              Wr = _e(Nt);
            if (((u = arguments), (y = this), (q = Nt), Wr)) {
              if (N === t) return we(q);
              if (re) return Zh(N), (N = ds(We, n)), pe(q);
            }
            return N === t && (N = ds(We, n)), x;
          }
          return (Or.cancel = xr), (Or.flush = or), Or;
        }
        var vm = Ke(function (r, n) {
            return Rh(r, 1, n);
          }),
          mm = Ke(function (r, n, a) {
            return Rh(r, Fr(n) || 0, a);
          });
        function wm(r) {
          return di(r, ee);
        }
        function zo(r, n) {
          if (typeof r != "function" || (n != null && typeof n != "function"))
            throw new Lr(f);
          var a = function () {
            var u = arguments,
              y = n ? n.apply(this, u) : u[0],
              w = a.cache;
            if (w.has(y)) return w.get(y);
            var x = r.apply(this, u);
            return (a.cache = w.set(y, x) || w), x;
          };
          return (a.cache = new (zo.Cache || li)()), a;
        }
        zo.Cache = li;
        function Ho(r) {
          if (typeof r != "function") throw new Lr(f);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, n[0]);
              case 2:
                return !r.call(this, n[0], n[1]);
              case 3:
                return !r.call(this, n[0], n[1], n[2]);
            }
            return !r.apply(this, n);
          };
        }
        function _m(r) {
          return ql(2, r);
        }
        var bm = ay(function (r, n) {
            n =
              n.length == 1 && Re(n[0])
                ? mt(n[0], Dr(me()))
                : mt(Gt(n, 1), Dr(me()));
            var a = n.length;
            return Ke(function (u) {
              for (var y = -1, w = Qt(u.length, a); ++y < w; )
                u[y] = n[y].call(this, u[y]);
              return Kt(r, this, u);
            });
          }),
          jc = Ke(function (r, n) {
            var a = Ri(n, Rn(jc));
            return di(r, C, t, n, a);
          }),
          Kl = Ke(function (r, n) {
            var a = Ri(n, Rn(Kl));
            return di(r, A, t, n, a);
          }),
          Em = pi(function (r, n) {
            return di(r, b, t, t, t, n);
          });
        function Dm(r, n) {
          if (typeof r != "function") throw new Lr(f);
          return (n = n === t ? n : je(n)), Ke(r, n);
        }
        function Sm(r, n) {
          if (typeof r != "function") throw new Lr(f);
          return (
            (n = n == null ? 0 : Bt(je(n), 0)),
            Ke(function (a) {
              var u = a[n],
                y = Mi(a, 0, n);
              return u && Ti(y, u), Kt(r, this, y);
            })
          );
        }
        function Im(r, n, a) {
          var u = !0,
            y = !0;
          if (typeof r != "function") throw new Lr(f);
          return (
            Et(a) &&
              ((u = "leading" in a ? !!a.leading : u),
              (y = "trailing" in a ? !!a.trailing : y)),
            Bl(r, n, { leading: u, maxWait: n, trailing: y })
          );
        }
        function xm(r) {
          return jl(r, 1);
        }
        function Om(r, n) {
          return jc(Ec(n), r);
        }
        function Pm() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return Re(r) ? r : [r];
        }
        function Cm(r) {
          return Mr(r, P);
        }
        function Am(r, n) {
          return (n = typeof n == "function" ? n : t), Mr(r, P, n);
        }
        function Tm(r) {
          return Mr(r, _ | P);
        }
        function Rm(r, n) {
          return (n = typeof n == "function" ? n : t), Mr(r, _ | P, n);
        }
        function Nm(r, n) {
          return n == null || Th(r, n, kt(n));
        }
        function Vr(r, n) {
          return r === n || (r !== r && n !== n);
        }
        var $m = $o(hc),
          Lm = $o(function (r, n) {
            return r >= n;
          }),
          nn = Mh(
            (function () {
              return arguments;
            })()
          )
            ? Mh
            : function (r) {
                return Ct(r) && it.call(r, "callee") && !Dh.call(r, "callee");
              },
          Re = H.isArray,
          Um = ir ? Dr(ir) : K0;
        function pr(r) {
          return r != null && Bo(r.length) && !yi(r);
        }
        function Rt(r) {
          return Ct(r) && pr(r);
        }
        function Mm(r) {
          return r === !0 || r === !1 || (Ct(r) && nr(r) == F);
        }
        var ji = Qg || Yc,
          jm = Br ? Dr(Br) : k0;
        function qm(r) {
          return Ct(r) && r.nodeType === 1 && !ps(r);
        }
        function Fm(r) {
          if (r == null) return !0;
          if (
            pr(r) &&
            (Re(r) ||
              typeof r == "string" ||
              typeof r.splice == "function" ||
              ji(r) ||
              Nn(r) ||
              nn(r))
          )
            return !r.length;
          var n = Xt(r);
          if (n == Ee || n == Ie) return !r.size;
          if (fs(r)) return !dc(r).length;
          for (var a in r) if (it.call(r, a)) return !1;
          return !0;
        }
        function zm(r, n) {
          return us(r, n);
        }
        function Hm(r, n, a) {
          a = typeof a == "function" ? a : t;
          var u = a ? a(r, n) : t;
          return u === t ? us(r, n, t, a) : !!u;
        }
        function qc(r) {
          if (!Ct(r)) return !1;
          var n = nr(r);
          return (
            n == T ||
            n == l ||
            (typeof r.message == "string" &&
              typeof r.name == "string" &&
              !ps(r))
          );
        }
        function Bm(r) {
          return typeof r == "number" && Ih(r);
        }
        function yi(r) {
          if (!Et(r)) return !1;
          var n = nr(r);
          return n == se || n == he || n == z || n == gt;
        }
        function kl(r) {
          return typeof r == "number" && r == je(r);
        }
        function Bo(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k;
        }
        function Et(r) {
          var n = typeof r;
          return r != null && (n == "object" || n == "function");
        }
        function Ct(r) {
          return r != null && typeof r == "object";
        }
        var Vl = Nr ? Dr(Nr) : W0;
        function Km(r, n) {
          return r === n || fc(r, n, Cc(n));
        }
        function km(r, n, a) {
          return (a = typeof a == "function" ? a : t), fc(r, n, Cc(n), a);
        }
        function Vm(r) {
          return Wl(r) && r != +r;
        }
        function Wm(r) {
          if (Ay(r)) throw new Ce(c);
          return jh(r);
        }
        function Gm(r) {
          return r === null;
        }
        function Ym(r) {
          return r == null;
        }
        function Wl(r) {
          return typeof r == "number" || (Ct(r) && nr(r) == He);
        }
        function ps(r) {
          if (!Ct(r) || nr(r) != Me) return !1;
          var n = yo(r);
          if (n === null) return !0;
          var a = it.call(n, "constructor") && n.constructor;
          return typeof a == "function" && a instanceof a && lo.call(a) == kg;
        }
        var Fc = Zr ? Dr(Zr) : G0;
        function Jm(r) {
          return kl(r) && r >= -k && r <= k;
        }
        var Gl = Zn ? Dr(Zn) : Y0;
        function Ko(r) {
          return typeof r == "string" || (!Re(r) && Ct(r) && nr(r) == Ne);
        }
        function Ir(r) {
          return typeof r == "symbol" || (Ct(r) && nr(r) == $e);
        }
        var Nn = Yi ? Dr(Yi) : J0;
        function Qm(r) {
          return r === t;
        }
        function Xm(r) {
          return Ct(r) && Xt(r) == Oe;
        }
        function Zm(r) {
          return Ct(r) && nr(r) == Le;
        }
        var ew = $o(pc),
          tw = $o(function (r, n) {
            return r <= n;
          });
        function Yl(r) {
          if (!r) return [];
          if (pr(r)) return Ko(r) ? Kr(r) : dr(r);
          if (ts && r[ts]) return Ng(r[ts]());
          var n = Xt(r),
            a = n == Ee ? tc : n == Ie ? co : $n;
          return a(r);
        }
        function vi(r) {
          if (!r) return r === 0 ? r : 0;
          if (((r = Fr(r)), r === J || r === -J)) {
            var n = r < 0 ? -1 : 1;
            return n * V;
          }
          return r === r ? r : 0;
        }
        function je(r) {
          var n = vi(r),
            a = n % 1;
          return n === n ? (a ? n - a : n) : 0;
        }
        function Jl(r) {
          return r ? Zi(je(r), 0, ie) : 0;
        }
        function Fr(r) {
          if (typeof r == "number") return r;
          if (Ir(r)) return te;
          if (Et(r)) {
            var n = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = Et(n) ? n + "" : n;
          }
          if (typeof r != "string") return r === 0 ? r : +r;
          r = gh(r);
          var a = Aa.test(r);
          return a || Ra.test(r)
            ? Te(r.slice(2), a ? 2 : 8)
            : Ca.test(r)
            ? te
            : +r;
        }
        function Ql(r) {
          return ti(r, gr(r));
        }
        function rw(r) {
          return r ? Zi(je(r), -k, k) : r === 0 ? r : 0;
        }
        function rt(r) {
          return r == null ? "" : Sr(r);
        }
        var iw = An(function (r, n) {
            if (fs(n) || pr(n)) {
              ti(n, kt(n), r);
              return;
            }
            for (var a in n) it.call(n, a) && os(r, a, n[a]);
          }),
          Xl = An(function (r, n) {
            ti(n, gr(n), r);
          }),
          ko = An(function (r, n, a, u) {
            ti(n, gr(n), r, u);
          }),
          nw = An(function (r, n, a, u) {
            ti(n, kt(n), r, u);
          }),
          sw = pi(ac);
        function ow(r, n) {
          var a = Cn(r);
          return n == null ? a : Ah(a, n);
        }
        var aw = Ke(function (r, n) {
            r = ut(r);
            var a = -1,
              u = n.length,
              y = u > 2 ? n[2] : t;
            for (y && sr(n[0], n[1], y) && (u = 1); ++a < u; )
              for (var w = n[a], x = gr(w), N = -1, q = x.length; ++N < q; ) {
                var G = x[N],
                  Y = r[G];
                (Y === t || (Vr(Y, xn[G]) && !it.call(r, G))) && (r[G] = w[G]);
              }
            return r;
          }),
          cw = Ke(function (r) {
            return r.push(t, gl), Kt(Zl, t, r);
          });
        function uw(r, n) {
          return lh(r, me(n, 3), ei);
        }
        function hw(r, n) {
          return lh(r, me(n, 3), uc);
        }
        function lw(r, n) {
          return r == null ? r : cc(r, me(n, 3), gr);
        }
        function fw(r, n) {
          return r == null ? r : Lh(r, me(n, 3), gr);
        }
        function dw(r, n) {
          return r && ei(r, me(n, 3));
        }
        function pw(r, n) {
          return r && uc(r, me(n, 3));
        }
        function gw(r) {
          return r == null ? [] : xo(r, kt(r));
        }
        function yw(r) {
          return r == null ? [] : xo(r, gr(r));
        }
        function zc(r, n, a) {
          var u = r == null ? t : en(r, n);
          return u === t ? a : u;
        }
        function vw(r, n) {
          return r != null && ml(r, n, F0);
        }
        function Hc(r, n) {
          return r != null && ml(r, n, z0);
        }
        var mw = hl(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = fo.call(n)),
              (r[n] = a);
          }, Kc(yr)),
          ww = hl(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = fo.call(n)),
              it.call(r, n) ? r[n].push(a) : (r[n] = [a]);
          }, me),
          _w = Ke(cs);
        function kt(r) {
          return pr(r) ? Ph(r) : dc(r);
        }
        function gr(r) {
          return pr(r) ? Ph(r, !0) : Q0(r);
        }
        function bw(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            ei(r, function (u, y, w) {
              fi(a, n(u, y, w), u);
            }),
            a
          );
        }
        function Ew(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            ei(r, function (u, y, w) {
              fi(a, y, n(u, y, w));
            }),
            a
          );
        }
        var Dw = An(function (r, n, a) {
            Oo(r, n, a);
          }),
          Zl = An(function (r, n, a, u) {
            Oo(r, n, a, u);
          }),
          Sw = pi(function (r, n) {
            var a = {};
            if (r == null) return a;
            var u = !1;
            (n = mt(n, function (w) {
              return (w = Ui(w, r)), u || (u = w.length > 1), w;
            })),
              ti(r, Oc(r), a),
              u && (a = Mr(a, _ | O | P, my));
            for (var y = n.length; y--; ) wc(a, n[y]);
            return a;
          });
        function Iw(r, n) {
          return ef(r, Ho(me(n)));
        }
        var xw = pi(function (r, n) {
          return r == null ? {} : Z0(r, n);
        });
        function ef(r, n) {
          if (r == null) return {};
          var a = mt(Oc(r), function (u) {
            return [u];
          });
          return (
            (n = me(n)),
            kh(r, a, function (u, y) {
              return n(u, y[0]);
            })
          );
        }
        function Ow(r, n, a) {
          n = Ui(n, r);
          var u = -1,
            y = n.length;
          for (y || ((y = 1), (r = t)); ++u < y; ) {
            var w = r == null ? t : r[ri(n[u])];
            w === t && ((u = y), (w = a)), (r = yi(w) ? w.call(r) : w);
          }
          return r;
        }
        function Pw(r, n, a) {
          return r == null ? r : hs(r, n, a);
        }
        function Cw(r, n, a, u) {
          return (
            (u = typeof u == "function" ? u : t), r == null ? r : hs(r, n, a, u)
          );
        }
        var tf = dl(kt),
          rf = dl(gr);
        function Aw(r, n, a) {
          var u = Re(r),
            y = u || ji(r) || Nn(r);
          if (((n = me(n, 4)), a == null)) {
            var w = r && r.constructor;
            y
              ? (a = u ? new w() : [])
              : Et(r)
              ? (a = yi(w) ? Cn(yo(r)) : {})
              : (a = {});
          }
          return (
            (y ? $r : ei)(r, function (x, N, q) {
              return n(a, x, N, q);
            }),
            a
          );
        }
        function Tw(r, n) {
          return r == null ? !0 : wc(r, n);
        }
        function Rw(r, n, a) {
          return r == null ? r : Jh(r, n, Ec(a));
        }
        function Nw(r, n, a, u) {
          return (
            (u = typeof u == "function" ? u : t),
            r == null ? r : Jh(r, n, Ec(a), u)
          );
        }
        function $n(r) {
          return r == null ? [] : ec(r, kt(r));
        }
        function $w(r) {
          return r == null ? [] : ec(r, gr(r));
        }
        function Lw(r, n, a) {
          return (
            a === t && ((a = n), (n = t)),
            a !== t && ((a = Fr(a)), (a = a === a ? a : 0)),
            n !== t && ((n = Fr(n)), (n = n === n ? n : 0)),
            Zi(Fr(r), n, a)
          );
        }
        function Uw(r, n, a) {
          return (
            (n = vi(n)),
            a === t ? ((a = n), (n = 0)) : (a = vi(a)),
            (r = Fr(r)),
            H0(r, n, a)
          );
        }
        function Mw(r, n, a) {
          if (
            (a && typeof a != "boolean" && sr(r, n, a) && (n = a = t),
            a === t &&
              (typeof n == "boolean"
                ? ((a = n), (n = t))
                : typeof r == "boolean" && ((a = r), (r = t))),
            r === t && n === t
              ? ((r = 0), (n = 1))
              : ((r = vi(r)), n === t ? ((n = r), (r = 0)) : (n = vi(n))),
            r > n)
          ) {
            var u = r;
            (r = n), (n = u);
          }
          if (a || r % 1 || n % 1) {
            var y = xh();
            return Qt(r + y * (n - r + at("1e-" + ((y + "").length - 1))), n);
          }
          return yc(r, n);
        }
        var jw = Tn(function (r, n, a) {
          return (n = n.toLowerCase()), r + (a ? nf(n) : n);
        });
        function nf(r) {
          return Bc(rt(r).toLowerCase());
        }
        function sf(r) {
          return (r = rt(r)), r && r.replace(ci, Pg).replace(ka, "");
        }
        function qw(r, n, a) {
          (r = rt(r)), (n = Sr(n));
          var u = r.length;
          a = a === t ? u : Zi(je(a), 0, u);
          var y = a;
          return (a -= n.length), a >= 0 && r.slice(a, y) == n;
        }
        function Fw(r) {
          return (r = rt(r)), r && yt.test(r) ? r.replace(Ki, Cg) : r;
        }
        function zw(r) {
          return (r = rt(r)), r && Mt.test(r) ? r.replace(xt, "\\$&") : r;
        }
        var Hw = Tn(function (r, n, a) {
            return r + (a ? "-" : "") + n.toLowerCase();
          }),
          Bw = Tn(function (r, n, a) {
            return r + (a ? " " : "") + n.toLowerCase();
          }),
          Kw = al("toLowerCase");
        function kw(r, n, a) {
          (r = rt(r)), (n = je(n));
          var u = n ? Sn(r) : 0;
          if (!n || u >= n) return r;
          var y = (n - u) / 2;
          return No(_o(y), a) + r + No(wo(y), a);
        }
        function Vw(r, n, a) {
          (r = rt(r)), (n = je(n));
          var u = n ? Sn(r) : 0;
          return n && u < n ? r + No(n - u, a) : r;
        }
        function Ww(r, n, a) {
          (r = rt(r)), (n = je(n));
          var u = n ? Sn(r) : 0;
          return n && u < n ? No(n - u, a) + r : r;
        }
        function Gw(r, n, a) {
          return (
            a || n == null ? (n = 0) : n && (n = +n),
            t0(rt(r).replace(Ot, ""), n || 0)
          );
        }
        function Yw(r, n, a) {
          return (
            (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = je(n)), vc(rt(r), n)
          );
        }
        function Jw() {
          var r = arguments,
            n = rt(r[0]);
          return r.length < 3 ? n : n.replace(r[1], r[2]);
        }
        var Qw = Tn(function (r, n, a) {
          return r + (a ? "_" : "") + n.toLowerCase();
        });
        function Xw(r, n, a) {
          return (
            a && typeof a != "number" && sr(r, n, a) && (n = a = t),
            (a = a === t ? ie : a >>> 0),
            a
              ? ((r = rt(r)),
                r &&
                (typeof n == "string" || (n != null && !Fc(n))) &&
                ((n = Sr(n)), !n && Dn(r))
                  ? Mi(Kr(r), 0, a)
                  : r.split(n, a))
              : []
          );
        }
        var Zw = Tn(function (r, n, a) {
          return r + (a ? " " : "") + Bc(n);
        });
        function e_(r, n, a) {
          return (
            (r = rt(r)),
            (a = a == null ? 0 : Zi(je(a), 0, r.length)),
            (n = Sr(n)),
            r.slice(a, a + n.length) == n
          );
        }
        function t_(r, n, a) {
          var u = m.templateSettings;
          a && sr(r, n, a) && (n = t), (r = rt(r)), (n = ko({}, n, u, pl));
          var y = ko({}, n.imports, u.imports, pl),
            w = kt(y),
            x = ec(y, w),
            N,
            q,
            G = 0,
            Y = n.interpolate || gn,
            re = "__p += '",
            ce = rc(
              (n.escape || gn).source +
                "|" +
                Y.source +
                "|" +
                (Y === bt ? Pa : gn).source +
                "|" +
                (n.evaluate || gn).source +
                "|$",
              "g"
            ),
            pe =
              "//# sourceURL=" +
              (it.call(n, "sourceURL")
                ? (n.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++Va + "]") +
              `
`;
          r.replace(ce, function (_e, We, Xe, xr, or, Or) {
            return (
              Xe || (Xe = xr),
              (re += r.slice(G, Or).replace($a, Ag)),
              We &&
                ((N = !0),
                (re +=
                  `' +
__e(` +
                  We +
                  `) +
'`)),
              or &&
                ((q = !0),
                (re +=
                  `';
` +
                  or +
                  `;
__p += '`)),
              Xe &&
                (re +=
                  `' +
((__t = (` +
                  Xe +
                  `)) == null ? '' : __t) +
'`),
              (G = Or + _e.length),
              _e
            );
          }),
            (re += `';
`);
          var we = it.call(n, "variable") && n.variable;
          if (!we)
            re =
              `with (obj) {
` +
              re +
              `
}
`;
          else if (xa.test(we)) throw new Ce(d);
          (re = (q ? re.replace(Qr, "") : re)
            .replace(rr, "$1")
            .replace(ai, "$1;")),
            (re =
              "function(" +
              (we || "obj") +
              `) {
` +
              (we
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (N ? ", __e = _.escape" : "") +
              (q
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              re +
              `return __p
}`);
          var ze = af(function () {
            return tt(w, pe + "return " + re).apply(t, x);
          });
          if (((ze.source = re), qc(ze))) throw ze;
          return ze;
        }
        function r_(r) {
          return rt(r).toLowerCase();
        }
        function i_(r) {
          return rt(r).toUpperCase();
        }
        function n_(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return gh(r);
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = Kr(n),
            w = yh(u, y),
            x = vh(u, y) + 1;
          return Mi(u, w, x).join("");
        }
        function s_(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return r.slice(0, wh(r) + 1);
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = vh(u, Kr(n)) + 1;
          return Mi(u, 0, y).join("");
        }
        function o_(r, n, a) {
          if (((r = rt(r)), r && (a || n === t))) return r.replace(Ot, "");
          if (!r || !(n = Sr(n))) return r;
          var u = Kr(r),
            y = yh(u, Kr(n));
          return Mi(u, y).join("");
        }
        function a_(r, n) {
          var a = ne,
            u = ue;
          if (Et(n)) {
            var y = "separator" in n ? n.separator : y;
            (a = "length" in n ? je(n.length) : a),
              (u = "omission" in n ? Sr(n.omission) : u);
          }
          r = rt(r);
          var w = r.length;
          if (Dn(r)) {
            var x = Kr(r);
            w = x.length;
          }
          if (a >= w) return r;
          var N = a - Sn(u);
          if (N < 1) return u;
          var q = x ? Mi(x, 0, N).join("") : r.slice(0, N);
          if (y === t) return q + u;
          if ((x && (N += q.length - N), Fc(y))) {
            if (r.slice(N).search(y)) {
              var G,
                Y = q;
              for (
                y.global || (y = rc(y.source, rt(Rr.exec(y)) + "g")),
                  y.lastIndex = 0;
                (G = y.exec(Y));

              )
                var re = G.index;
              q = q.slice(0, re === t ? N : re);
            }
          } else if (r.indexOf(Sr(y), N) != N) {
            var ce = q.lastIndexOf(y);
            ce > -1 && (q = q.slice(0, ce));
          }
          return q + u;
        }
        function c_(r) {
          return (r = rt(r)), r && Dt.test(r) ? r.replace(Pi, Mg) : r;
        }
        var u_ = Tn(function (r, n, a) {
            return r + (a ? " " : "") + n.toUpperCase();
          }),
          Bc = al("toUpperCase");
        function of(r, n, a) {
          return (
            (r = rt(r)),
            (n = a ? t : n),
            n === t ? (Rg(r) ? Fg(r) : Dg(r)) : r.match(n) || []
          );
        }
        var af = Ke(function (r, n) {
            try {
              return Kt(r, t, n);
            } catch (a) {
              return qc(a) ? a : new Ce(a);
            }
          }),
          h_ = pi(function (r, n) {
            return (
              $r(n, function (a) {
                (a = ri(a)), fi(r, a, Mc(r[a], r));
              }),
              r
            );
          });
        function l_(r) {
          var n = r == null ? 0 : r.length,
            a = me();
          return (
            (r = n
              ? mt(r, function (u) {
                  if (typeof u[1] != "function") throw new Lr(f);
                  return [a(u[0]), u[1]];
                })
              : []),
            Ke(function (u) {
              for (var y = -1; ++y < n; ) {
                var w = r[y];
                if (Kt(w[0], this, u)) return Kt(w[1], this, u);
              }
            })
          );
        }
        function f_(r) {
          return M0(Mr(r, _));
        }
        function Kc(r) {
          return function () {
            return r;
          };
        }
        function d_(r, n) {
          return r == null || r !== r ? n : r;
        }
        var p_ = ul(),
          g_ = ul(!0);
        function yr(r) {
          return r;
        }
        function kc(r) {
          return qh(typeof r == "function" ? r : Mr(r, _));
        }
        function y_(r) {
          return zh(Mr(r, _));
        }
        function v_(r, n) {
          return Hh(r, Mr(n, _));
        }
        var m_ = Ke(function (r, n) {
            return function (a) {
              return cs(a, r, n);
            };
          }),
          w_ = Ke(function (r, n) {
            return function (a) {
              return cs(r, a, n);
            };
          });
        function Vc(r, n, a) {
          var u = kt(n),
            y = xo(n, u);
          a == null &&
            !(Et(n) && (y.length || !u.length)) &&
            ((a = n), (n = r), (r = this), (y = xo(n, kt(n))));
          var w = !(Et(a) && "chain" in a) || !!a.chain,
            x = yi(r);
          return (
            $r(y, function (N) {
              var q = n[N];
              (r[N] = q),
                x &&
                  (r.prototype[N] = function () {
                    var G = this.__chain__;
                    if (w || G) {
                      var Y = r(this.__wrapped__),
                        re = (Y.__actions__ = dr(this.__actions__));
                      return (
                        re.push({ func: q, args: arguments, thisArg: r }),
                        (Y.__chain__ = G),
                        Y
                      );
                    }
                    return q.apply(r, Ti([this.value()], arguments));
                  });
            }),
            r
          );
        }
        function __() {
          return Qe._ === this && (Qe._ = Vg), this;
        }
        function Wc() {}
        function b_(r) {
          return (
            (r = je(r)),
            Ke(function (n) {
              return Bh(n, r);
            })
          );
        }
        var E_ = Sc(mt),
          D_ = Sc(hh),
          S_ = Sc(Ya);
        function cf(r) {
          return Tc(r) ? Ja(ri(r)) : ey(r);
        }
        function I_(r) {
          return function (n) {
            return r == null ? t : en(r, n);
          };
        }
        var x_ = ll(),
          O_ = ll(!0);
        function Gc() {
          return [];
        }
        function Yc() {
          return !1;
        }
        function P_() {
          return {};
        }
        function C_() {
          return "";
        }
        function A_() {
          return !0;
        }
        function T_(r, n) {
          if (((r = je(r)), r < 1 || r > k)) return [];
          var a = ie,
            u = Qt(r, ie);
          (n = me(n)), (r -= ie);
          for (var y = Za(u, n); ++a < r; ) n(a);
          return y;
        }
        function R_(r) {
          return Re(r) ? mt(r, ri) : Ir(r) ? [r] : dr(Ol(rt(r)));
        }
        function N_(r) {
          var n = ++Kg;
          return rt(r) + n;
        }
        var $_ = Ro(function (r, n) {
            return r + n;
          }, 0),
          L_ = Ic("ceil"),
          U_ = Ro(function (r, n) {
            return r / n;
          }, 1),
          M_ = Ic("floor");
        function j_(r) {
          return r && r.length ? Io(r, yr, hc) : t;
        }
        function q_(r, n) {
          return r && r.length ? Io(r, me(n, 2), hc) : t;
        }
        function F_(r) {
          return dh(r, yr);
        }
        function z_(r, n) {
          return dh(r, me(n, 2));
        }
        function H_(r) {
          return r && r.length ? Io(r, yr, pc) : t;
        }
        function B_(r, n) {
          return r && r.length ? Io(r, me(n, 2), pc) : t;
        }
        var K_ = Ro(function (r, n) {
            return r * n;
          }, 1),
          k_ = Ic("round"),
          V_ = Ro(function (r, n) {
            return r - n;
          }, 0);
        function W_(r) {
          return r && r.length ? Xa(r, yr) : 0;
        }
        function G_(r, n) {
          return r && r.length ? Xa(r, me(n, 2)) : 0;
        }
        return (
          (m.after = ym),
          (m.ary = jl),
          (m.assign = iw),
          (m.assignIn = Xl),
          (m.assignInWith = ko),
          (m.assignWith = nw),
          (m.at = sw),
          (m.before = ql),
          (m.bind = Mc),
          (m.bindAll = h_),
          (m.bindKey = Fl),
          (m.castArray = Pm),
          (m.chain = Ll),
          (m.chunk = My),
          (m.compact = jy),
          (m.concat = qy),
          (m.cond = l_),
          (m.conforms = f_),
          (m.constant = Kc),
          (m.countBy = Wv),
          (m.create = ow),
          (m.curry = zl),
          (m.curryRight = Hl),
          (m.debounce = Bl),
          (m.defaults = aw),
          (m.defaultsDeep = cw),
          (m.defer = vm),
          (m.delay = mm),
          (m.difference = Fy),
          (m.differenceBy = zy),
          (m.differenceWith = Hy),
          (m.drop = By),
          (m.dropRight = Ky),
          (m.dropRightWhile = ky),
          (m.dropWhile = Vy),
          (m.fill = Wy),
          (m.filter = Yv),
          (m.flatMap = Xv),
          (m.flatMapDeep = Zv),
          (m.flatMapDepth = em),
          (m.flatten = Tl),
          (m.flattenDeep = Gy),
          (m.flattenDepth = Yy),
          (m.flip = wm),
          (m.flow = p_),
          (m.flowRight = g_),
          (m.fromPairs = Jy),
          (m.functions = gw),
          (m.functionsIn = yw),
          (m.groupBy = tm),
          (m.initial = Xy),
          (m.intersection = Zy),
          (m.intersectionBy = ev),
          (m.intersectionWith = tv),
          (m.invert = mw),
          (m.invertBy = ww),
          (m.invokeMap = im),
          (m.iteratee = kc),
          (m.keyBy = nm),
          (m.keys = kt),
          (m.keysIn = gr),
          (m.map = qo),
          (m.mapKeys = bw),
          (m.mapValues = Ew),
          (m.matches = y_),
          (m.matchesProperty = v_),
          (m.memoize = zo),
          (m.merge = Dw),
          (m.mergeWith = Zl),
          (m.method = m_),
          (m.methodOf = w_),
          (m.mixin = Vc),
          (m.negate = Ho),
          (m.nthArg = b_),
          (m.omit = Sw),
          (m.omitBy = Iw),
          (m.once = _m),
          (m.orderBy = sm),
          (m.over = E_),
          (m.overArgs = bm),
          (m.overEvery = D_),
          (m.overSome = S_),
          (m.partial = jc),
          (m.partialRight = Kl),
          (m.partition = om),
          (m.pick = xw),
          (m.pickBy = ef),
          (m.property = cf),
          (m.propertyOf = I_),
          (m.pull = sv),
          (m.pullAll = Nl),
          (m.pullAllBy = ov),
          (m.pullAllWith = av),
          (m.pullAt = cv),
          (m.range = x_),
          (m.rangeRight = O_),
          (m.rearg = Em),
          (m.reject = um),
          (m.remove = uv),
          (m.rest = Dm),
          (m.reverse = Lc),
          (m.sampleSize = lm),
          (m.set = Pw),
          (m.setWith = Cw),
          (m.shuffle = fm),
          (m.slice = hv),
          (m.sortBy = gm),
          (m.sortedUniq = vv),
          (m.sortedUniqBy = mv),
          (m.split = Xw),
          (m.spread = Sm),
          (m.tail = wv),
          (m.take = _v),
          (m.takeRight = bv),
          (m.takeRightWhile = Ev),
          (m.takeWhile = Dv),
          (m.tap = jv),
          (m.throttle = Im),
          (m.thru = jo),
          (m.toArray = Yl),
          (m.toPairs = tf),
          (m.toPairsIn = rf),
          (m.toPath = R_),
          (m.toPlainObject = Ql),
          (m.transform = Aw),
          (m.unary = xm),
          (m.union = Sv),
          (m.unionBy = Iv),
          (m.unionWith = xv),
          (m.uniq = Ov),
          (m.uniqBy = Pv),
          (m.uniqWith = Cv),
          (m.unset = Tw),
          (m.unzip = Uc),
          (m.unzipWith = $l),
          (m.update = Rw),
          (m.updateWith = Nw),
          (m.values = $n),
          (m.valuesIn = $w),
          (m.without = Av),
          (m.words = of),
          (m.wrap = Om),
          (m.xor = Tv),
          (m.xorBy = Rv),
          (m.xorWith = Nv),
          (m.zip = $v),
          (m.zipObject = Lv),
          (m.zipObjectDeep = Uv),
          (m.zipWith = Mv),
          (m.entries = tf),
          (m.entriesIn = rf),
          (m.extend = Xl),
          (m.extendWith = ko),
          Vc(m, m),
          (m.add = $_),
          (m.attempt = af),
          (m.camelCase = jw),
          (m.capitalize = nf),
          (m.ceil = L_),
          (m.clamp = Lw),
          (m.clone = Cm),
          (m.cloneDeep = Tm),
          (m.cloneDeepWith = Rm),
          (m.cloneWith = Am),
          (m.conformsTo = Nm),
          (m.deburr = sf),
          (m.defaultTo = d_),
          (m.divide = U_),
          (m.endsWith = qw),
          (m.eq = Vr),
          (m.escape = Fw),
          (m.escapeRegExp = zw),
          (m.every = Gv),
          (m.find = Jv),
          (m.findIndex = Cl),
          (m.findKey = uw),
          (m.findLast = Qv),
          (m.findLastIndex = Al),
          (m.findLastKey = hw),
          (m.floor = M_),
          (m.forEach = Ul),
          (m.forEachRight = Ml),
          (m.forIn = lw),
          (m.forInRight = fw),
          (m.forOwn = dw),
          (m.forOwnRight = pw),
          (m.get = zc),
          (m.gt = $m),
          (m.gte = Lm),
          (m.has = vw),
          (m.hasIn = Hc),
          (m.head = Rl),
          (m.identity = yr),
          (m.includes = rm),
          (m.indexOf = Qy),
          (m.inRange = Uw),
          (m.invoke = _w),
          (m.isArguments = nn),
          (m.isArray = Re),
          (m.isArrayBuffer = Um),
          (m.isArrayLike = pr),
          (m.isArrayLikeObject = Rt),
          (m.isBoolean = Mm),
          (m.isBuffer = ji),
          (m.isDate = jm),
          (m.isElement = qm),
          (m.isEmpty = Fm),
          (m.isEqual = zm),
          (m.isEqualWith = Hm),
          (m.isError = qc),
          (m.isFinite = Bm),
          (m.isFunction = yi),
          (m.isInteger = kl),
          (m.isLength = Bo),
          (m.isMap = Vl),
          (m.isMatch = Km),
          (m.isMatchWith = km),
          (m.isNaN = Vm),
          (m.isNative = Wm),
          (m.isNil = Ym),
          (m.isNull = Gm),
          (m.isNumber = Wl),
          (m.isObject = Et),
          (m.isObjectLike = Ct),
          (m.isPlainObject = ps),
          (m.isRegExp = Fc),
          (m.isSafeInteger = Jm),
          (m.isSet = Gl),
          (m.isString = Ko),
          (m.isSymbol = Ir),
          (m.isTypedArray = Nn),
          (m.isUndefined = Qm),
          (m.isWeakMap = Xm),
          (m.isWeakSet = Zm),
          (m.join = rv),
          (m.kebabCase = Hw),
          (m.last = qr),
          (m.lastIndexOf = iv),
          (m.lowerCase = Bw),
          (m.lowerFirst = Kw),
          (m.lt = ew),
          (m.lte = tw),
          (m.max = j_),
          (m.maxBy = q_),
          (m.mean = F_),
          (m.meanBy = z_),
          (m.min = H_),
          (m.minBy = B_),
          (m.stubArray = Gc),
          (m.stubFalse = Yc),
          (m.stubObject = P_),
          (m.stubString = C_),
          (m.stubTrue = A_),
          (m.multiply = K_),
          (m.nth = nv),
          (m.noConflict = __),
          (m.noop = Wc),
          (m.now = Fo),
          (m.pad = kw),
          (m.padEnd = Vw),
          (m.padStart = Ww),
          (m.parseInt = Gw),
          (m.random = Mw),
          (m.reduce = am),
          (m.reduceRight = cm),
          (m.repeat = Yw),
          (m.replace = Jw),
          (m.result = Ow),
          (m.round = k_),
          (m.runInContext = j),
          (m.sample = hm),
          (m.size = dm),
          (m.snakeCase = Qw),
          (m.some = pm),
          (m.sortedIndex = lv),
          (m.sortedIndexBy = fv),
          (m.sortedIndexOf = dv),
          (m.sortedLastIndex = pv),
          (m.sortedLastIndexBy = gv),
          (m.sortedLastIndexOf = yv),
          (m.startCase = Zw),
          (m.startsWith = e_),
          (m.subtract = V_),
          (m.sum = W_),
          (m.sumBy = G_),
          (m.template = t_),
          (m.times = T_),
          (m.toFinite = vi),
          (m.toInteger = je),
          (m.toLength = Jl),
          (m.toLower = r_),
          (m.toNumber = Fr),
          (m.toSafeInteger = rw),
          (m.toString = rt),
          (m.toUpper = i_),
          (m.trim = n_),
          (m.trimEnd = s_),
          (m.trimStart = o_),
          (m.truncate = a_),
          (m.unescape = c_),
          (m.uniqueId = N_),
          (m.upperCase = u_),
          (m.upperFirst = Bc),
          (m.each = Ul),
          (m.eachRight = Ml),
          (m.first = Rl),
          Vc(
            m,
            (function () {
              var r = {};
              return (
                ei(m, function (n, a) {
                  it.call(m.prototype, a) || (r[a] = n);
                }),
                r
              );
            })(),
            { chain: !1 }
          ),
          (m.VERSION = s),
          $r(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (r) {
              m[r].placeholder = m;
            }
          ),
          $r(["drop", "take"], function (r, n) {
            (Ye.prototype[r] = function (a) {
              a = a === t ? 1 : Bt(je(a), 0);
              var u = this.__filtered__ && !n ? new Ye(this) : this.clone();
              return (
                u.__filtered__
                  ? (u.__takeCount__ = Qt(a, u.__takeCount__))
                  : u.__views__.push({
                      size: Qt(a, ie),
                      type: r + (u.__dir__ < 0 ? "Right" : ""),
                    }),
                u
              );
            }),
              (Ye.prototype[r + "Right"] = function (a) {
                return this.reverse()[r](a).reverse();
              });
          }),
          $r(["filter", "map", "takeWhile"], function (r, n) {
            var a = n + 1,
              u = a == D || a == X;
            Ye.prototype[r] = function (y) {
              var w = this.clone();
              return (
                w.__iteratees__.push({ iteratee: me(y, 3), type: a }),
                (w.__filtered__ = w.__filtered__ || u),
                w
              );
            };
          }),
          $r(["head", "last"], function (r, n) {
            var a = "take" + (n ? "Right" : "");
            Ye.prototype[r] = function () {
              return this[a](1).value()[0];
            };
          }),
          $r(["initial", "tail"], function (r, n) {
            var a = "drop" + (n ? "" : "Right");
            Ye.prototype[r] = function () {
              return this.__filtered__ ? new Ye(this) : this[a](1);
            };
          }),
          (Ye.prototype.compact = function () {
            return this.filter(yr);
          }),
          (Ye.prototype.find = function (r) {
            return this.filter(r).head();
          }),
          (Ye.prototype.findLast = function (r) {
            return this.reverse().find(r);
          }),
          (Ye.prototype.invokeMap = Ke(function (r, n) {
            return typeof r == "function"
              ? new Ye(this)
              : this.map(function (a) {
                  return cs(a, r, n);
                });
          })),
          (Ye.prototype.reject = function (r) {
            return this.filter(Ho(me(r)));
          }),
          (Ye.prototype.slice = function (r, n) {
            r = je(r);
            var a = this;
            return a.__filtered__ && (r > 0 || n < 0)
              ? new Ye(a)
              : (r < 0 ? (a = a.takeRight(-r)) : r && (a = a.drop(r)),
                n !== t &&
                  ((n = je(n)), (a = n < 0 ? a.dropRight(-n) : a.take(n - r))),
                a);
          }),
          (Ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse();
          }),
          (Ye.prototype.toArray = function () {
            return this.take(ie);
          }),
          ei(Ye.prototype, function (r, n) {
            var a = /^(?:filter|find|map|reject)|While$/.test(n),
              u = /^(?:head|last)$/.test(n),
              y = m[u ? "take" + (n == "last" ? "Right" : "") : n],
              w = u || /^find/.test(n);
            y &&
              (m.prototype[n] = function () {
                var x = this.__wrapped__,
                  N = u ? [1] : arguments,
                  q = x instanceof Ye,
                  G = N[0],
                  Y = q || Re(x),
                  re = function (We) {
                    var Xe = y.apply(m, Ti([We], N));
                    return u && ce ? Xe[0] : Xe;
                  };
                Y &&
                  a &&
                  typeof G == "function" &&
                  G.length != 1 &&
                  (q = Y = !1);
                var ce = this.__chain__,
                  pe = !!this.__actions__.length,
                  we = w && !ce,
                  ze = q && !pe;
                if (!w && Y) {
                  x = ze ? x : new Ye(this);
                  var _e = r.apply(x, N);
                  return (
                    _e.__actions__.push({ func: jo, args: [re], thisArg: t }),
                    new Ur(_e, ce)
                  );
                }
                return we && ze
                  ? r.apply(this, N)
                  : ((_e = this.thru(re)),
                    we ? (u ? _e.value()[0] : _e.value()) : _e);
              });
          }),
          $r(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (r) {
              var n = uo[r],
                a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
                u = /^(?:pop|shift)$/.test(r);
              m.prototype[r] = function () {
                var y = arguments;
                if (u && !this.__chain__) {
                  var w = this.value();
                  return n.apply(Re(w) ? w : [], y);
                }
                return this[a](function (x) {
                  return n.apply(Re(x) ? x : [], y);
                });
              };
            }
          ),
          ei(Ye.prototype, function (r, n) {
            var a = m[n];
            if (a) {
              var u = a.name + "";
              it.call(Pn, u) || (Pn[u] = []), Pn[u].push({ name: n, func: a });
            }
          }),
          (Pn[To(t, Z).name] = [{ name: "wrapper", func: t }]),
          (Ye.prototype.clone = c0),
          (Ye.prototype.reverse = u0),
          (Ye.prototype.value = h0),
          (m.prototype.at = qv),
          (m.prototype.chain = Fv),
          (m.prototype.commit = zv),
          (m.prototype.next = Hv),
          (m.prototype.plant = Kv),
          (m.prototype.reverse = kv),
          (m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = Vv),
          (m.prototype.first = m.prototype.head),
          ts && (m.prototype[ts] = Bv),
          m
        );
      },
      In = zg();
    Tt ? (((Tt.exports = In)._ = In), (ct._ = In)) : (Qe._ = In);
  }).call(bs);
})(ju, ju.exports);
var m5 = Object.defineProperty,
  w5 = Object.defineProperties,
  _5 = Object.getOwnPropertyDescriptors,
  Fd = Object.getOwnPropertySymbols,
  b5 = Object.prototype.hasOwnProperty,
  E5 = Object.prototype.propertyIsEnumerable,
  zd = (i, e, t) =>
    e in i
      ? m5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Qo = (i, e) => {
    for (var t in e || (e = {})) b5.call(e, t) && zd(i, t, e[t]);
    if (Fd) for (var t of Fd(e)) E5.call(e, t) && zd(i, t, e[t]);
    return i;
  },
  D5 = (i, e) => w5(i, _5(e));
function zi(i, e, t) {
  var s;
  const o = GE(i);
  return (
    ((s = e.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${v5}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
  );
}
function pn(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function yg(i) {
  return i.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function S5(i, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(i));
  if (!t.length) return [];
  const s = [];
  return (
    t.forEach((o) => {
      const c = e.namespaces[o].accounts;
      s.push(...c);
    }),
    s
  );
}
function Hd(i = {}, e = {}) {
  const t = Bd(i),
    s = Bd(e);
  return ju.exports.merge(t, s);
}
function Bd(i) {
  var e, t, s, o;
  const c = {};
  if (!Cs(i)) return c;
  for (const [f, d] of Object.entries(i)) {
    const p = Zu(f) ? [f] : d.chains,
      g = d.methods || [],
      v = d.events || [],
      _ = d.rpcMap || {},
      O = Es(f);
    c[O] = D5(Qo(Qo({}, c[O]), d), {
      chains: tu(p, (e = c[O]) == null ? void 0 : e.chains),
      methods: tu(g, (t = c[O]) == null ? void 0 : t.methods),
      events: tu(v, (s = c[O]) == null ? void 0 : s.events),
      rpcMap: Qo(Qo({}, _), (o = c[O]) == null ? void 0 : o.rpcMap),
    });
  }
  return c;
}
function I5(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function x5(i) {
  const e = {};
  for (const [t, s] of Object.entries(i)) {
    const o = s.methods || [],
      c = s.events || [],
      f = s.accounts || [],
      d = Zu(t) ? [t] : s.chains ? s.chains : yg(s.accounts);
    e[t] = { chains: d, methods: o, events: c, accounts: f };
  }
  return e;
}
function pu(i) {
  return typeof i == "number"
    ? i
    : i.includes("0x")
    ? parseInt(i, 16)
    : ((i = i.includes(":") ? i.split(":")[1] : i),
      isNaN(Number(i)) ? i : Number(i));
}
const vg = {},
  _t = (i) => vg[i],
  gu = (i, e) => {
    vg[i] = e;
  };
class O5 {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class P5 {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const s =
      t || zi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = parseInt(pn(t));
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, s;
    let o = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const c = parseInt(o, 16);
    if (this.isChainApproved(c)) this.setDefaultChain(`${c}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${c}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class C5 {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class A5 {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class T5 {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Oi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const s = this.getCardanoRPCUrl(t),
          o = pn(t);
        e[o] = this.createHttpProvider(o, s);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || this.getCardanoRPCUrl(e);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class R5 {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class N5 {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = pn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new xi(new Bi(s, _t("disableProviderPing")));
  }
}
class $5 {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = _t("events")),
      (this.client = _t("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const s = t || zi(`${this.name}:${e}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, s);
    }
    this.events.emit(Oi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        e[t] = this.createHttpProvider(
          t,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || zi(e, this.namespace);
    return typeof s > "u"
      ? void 0
      : new xi(new Bi(s, _t("disableProviderPing")));
  }
}
var L5 = Object.defineProperty,
  U5 = Object.defineProperties,
  M5 = Object.getOwnPropertyDescriptors,
  Kd = Object.getOwnPropertySymbols,
  j5 = Object.prototype.hasOwnProperty,
  q5 = Object.prototype.propertyIsEnumerable,
  kd = (i, e, t) =>
    e in i
      ? L5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Xo = (i, e) => {
    for (var t in e || (e = {})) j5.call(e, t) && kd(i, t, e[t]);
    if (Kd) for (var t of Kd(e)) q5.call(e, t) && kd(i, t, e[t]);
    return i;
  },
  yu = (i, e) => U5(i, M5(e));
class ch {
  constructor(e) {
    (this.events = new Hu()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof (e == null ? void 0 : e.logger) < "u" &&
        typeof (e == null ? void 0 : e.logger) != "string"
          ? e.logger
          : wa(_a({ level: (e == null ? void 0 : e.logger) || jd }))),
      (this.disableProviderPing =
        (e == null ? void 0 : e.disableProviderPing) || !1);
  }
  static async init(e) {
    const t = new ch(e);
    return await t.initialize(), t;
  }
  async request(e, t, s) {
    const [o, c] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({
      request: Xo({}, e),
      chainId: `${o}:${c}`,
      topic: this.session.topic,
      expiry: s,
    });
  }
  sendAsync(e, t, s, o) {
    const c = new Date().getTime();
    this.request(e, s, o)
      .then((f) => t(null, ba(c, f)))
      .catch((f) => t(f, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: wt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((c) => {
            this.session = c;
            const f = x5(c.namespaces);
            (this.namespaces = Hd(this.namespaces, f)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((c) => {
            if (c.message !== pg) throw c;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(e);
      this.getProvider(s).setDefaultChain(o, t);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (oi(t)) {
      for (const s of t)
        e.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await h5.init({
        logger: this.providerOpts.logger || jd,
        relayUrl: this.providerOpts.relayUrl || p5,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => Es(t))),
    ];
    gu("client", this.client),
      gu("events", this.events),
      gu("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const s = S5(t, this.session),
          o = yg(s),
          c = Hd(this.namespaces, this.optionalNamespaces),
          f = yu(Xo({}, c[t]), { accounts: s, chains: o });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new P5({ namespace: f });
            break;
          case "solana":
            this.rpcProviders[t] = new C5({ namespace: f });
            break;
          case "cosmos":
            this.rpcProviders[t] = new A5({ namespace: f });
            break;
          case "polkadot":
            this.rpcProviders[t] = new O5({ namespace: f });
            break;
          case "cip34":
            this.rpcProviders[t] = new T5({ namespace: f });
            break;
          case "elrond":
            this.rpcProviders[t] = new R5({ namespace: f });
            break;
          case "multiversx":
            this.rpcProviders[t] = new N5({ namespace: f });
            break;
          case "near":
            this.rpcProviders[t] = new $5({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: s } = t;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && oi(o) && this.events.emit("accountsChanged", o.map(I5));
        } else if (s.name === "chainChanged") {
          const o = t.chainId,
            c = t.event.data,
            f = Es(o),
            d = pu(o) !== pu(c) ? `${f}:${pu(c)}` : o;
          this.onChainChanged(d);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var s;
        const { namespaces: o } = t,
          c = (s = this.client) == null ? void 0 : s.session.get(e);
        (this.session = yu(Xo({}, c), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            yu(Xo({}, wt("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on(Oi.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: s, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", s);
  }
  validateChain(e) {
    const [t, s] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, s];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((f) => Es(f))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && s) return [t, s];
    const o = Es(Object.keys(this.namespaces)[0]),
      c = this.rpcProviders[o].getDefaultChain();
    return [o, c];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [s, o] = this.validateChain(e);
    o &&
      (t || this.getProvider(s).setDefaultChain(o),
      this.namespaces[s]
        ? (this.namespaces[s].defaultChain = o)
        : this.namespaces[`${s}:${o}`]
        ? (this.namespaces[`${s}:${o}`].defaultChain = o)
        : (this.namespaces[`${s}:${o}`] = { defaultChain: o }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${qd}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${qd}/${e}`);
  }
}
const F5 = ch,
  z5 = "wc",
  H5 = "ethereum_provider",
  B5 = `${z5}@2:${H5}:`,
  K5 = "https://rpc.walletconnect.com/v1/",
  qu = ["eth_sendTransaction", "personal_sign"],
  k5 = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  Fu = ["chainChanged", "accountsChanged"],
  V5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var W5 = Object.defineProperty,
  G5 = Object.defineProperties,
  Y5 = Object.getOwnPropertyDescriptors,
  Vd = Object.getOwnPropertySymbols,
  J5 = Object.prototype.hasOwnProperty,
  Q5 = Object.prototype.propertyIsEnumerable,
  Wd = (i, e, t) =>
    e in i
      ? W5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Ss = (i, e) => {
    for (var t in e || (e = {})) J5.call(e, t) && Wd(i, t, e[t]);
    if (Vd) for (var t of Vd(e)) Q5.call(e, t) && Wd(i, t, e[t]);
    return i;
  },
  Gd = (i, e) => G5(i, Y5(e));
function ua(i) {
  return Number(i[0].split(":")[1]);
}
function vu(i) {
  return `0x${i.toString(16)}`;
}
function X5(i) {
  const {
    chains: e,
    optionalChains: t,
    methods: s,
    optionalMethods: o,
    events: c,
    optionalEvents: f,
    rpcMap: d,
  } = i;
  if (!oi(e)) throw new Error("Invalid chains");
  const p = {
      chains: e,
      methods: s || qu,
      events: c || Fu,
      rpcMap: Ss({}, e.length ? { [ua(e)]: d[ua(e)] } : {}),
    },
    g = c == null ? void 0 : c.filter((P) => !Fu.includes(P)),
    v = s == null ? void 0 : s.filter((P) => !qu.includes(P));
  if (!t && !f && !o && !(g != null && g.length) && !(v != null && v.length))
    return { required: e.length ? p : void 0 };
  const _ =
      ((g == null ? void 0 : g.length) && (v == null ? void 0 : v.length)) ||
      !t,
    O = {
      chains: [...new Set(_ ? p.chains.concat(t || []) : t)],
      methods: [...new Set(p.methods.concat(o != null && o.length ? o : k5))],
      events: [...new Set(p.events.concat(f != null && f.length ? f : V5))],
      rpcMap: d,
    };
  return { required: e.length ? p : void 0, optional: t.length ? O : void 0 };
}
class uh {
  constructor() {
    (this.events = new Ar.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = B5),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new uh();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, s) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: s } = X5(this.rpc);
    try {
      const o = await new Promise(async (f, d) => {
        var p;
        this.rpc.showQrModal &&
          ((p = this.modal) == null ||
            p.subscribeModal((g) => {
              !g.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                d(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Gd(
                Ss(
                  { namespaces: Ss({}, t && { [this.namespace]: t }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: e == null ? void 0 : e.pairingTopic }
              )
            )
            .then((g) => {
              f(g);
            })
            .catch((g) => {
              d(new Error(g.message));
            });
      });
      if (!o) return;
      const c = YE(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c),
        this.setAccounts(c),
        this.events.emit("connect", { chainId: vu(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: s } = t;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", vu(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Gd(Ss({}, wt("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, s;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", vu(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, s, o] = e.split(":");
    return { chainId: `${t}:${s}`, address: o };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, s;
    const o = (t = e == null ? void 0 : e.chains) != null ? t : [],
      c = (s = e == null ? void 0 : e.optionalChains) != null ? s : [],
      f = o.concat(c);
    if (!f.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const d = o.length ? (e == null ? void 0 : e.methods) || qu : [],
      p = o.length ? (e == null ? void 0 : e.events) || Fu : [],
      g = (e == null ? void 0 : e.optionalMethods) || [],
      v = (e == null ? void 0 : e.optionalEvents) || [],
      _ = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(f, e.projectId),
      O = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return {
      chains: o == null ? void 0 : o.map((P) => this.formatChainId(P)),
      optionalChains: c.map((P) => this.formatChainId(P)),
      methods: d,
      events: p,
      optionalMethods: g,
      optionalEvents: v,
      rpcMap: _,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: O,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const s = {};
    return (
      e.forEach((o) => {
        s[o] = this.getRpcUrl(o, t);
      }),
      s
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? ua(this.rpc.chains)
        : ua(this.rpc.optionalChains)),
      (this.signer = await F5.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: s } = await Y_(
          () => import("./index-DYc5_LZJ.js").then((o) => o.i),
          __vite__mapDeps([0, 1, 2])
        );
        t = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            Ss({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: s, rpcMap: o } = e;
    t &&
      oi(t) &&
      ((this.rpc.chains = t.map((c) => this.formatChainId(c))),
      t.forEach((c) => {
        this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
      })),
      s &&
        oi(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          s == null ? void 0 : s.map((c) => this.formatChainId(c))),
        s.forEach((c) => {
          this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
        }));
  }
  getRpcUrl(e, t) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) ||
      `${K5}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const e = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      t = this.session.namespaces[`${this.namespace}:${e}`]
        ? this.session.namespaces[`${this.namespace}:${e}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts
    ),
      this.setAccounts(t == null ? void 0 : t.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
const yx = uh;
export {
  yx as EthereumProvider,
  V5 as OPTIONAL_EVENTS,
  k5 as OPTIONAL_METHODS,
  Fu as REQUIRED_EVENTS,
  qu as REQUIRED_METHODS,
  uh as default,
};
