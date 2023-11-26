var Gy = Object.defineProperty;
var Xy = (e, t, n) => t in e ? Gy(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
var In = (e, t, n) => (Xy(e, typeof t != "symbol" ? t + "" : t, n), n);

function Qy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r) if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : {enumerable: !0, get: () => r[o]})
            }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {childList: !0, subtree: !0});

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Fh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Yy(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {value: !0}), Object.keys(e).forEach(function (r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0, get: function () {
                return e[r]
            }
        })
    }), n
}

var Wh = {exports: {}}, ia = {}, Uh = {exports: {}}, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps = Symbol.for("react.element"), qy = Symbol.for("react.portal"), Zy = Symbol.for("react.fragment"),
    Jy = Symbol.for("react.strict_mode"), e1 = Symbol.for("react.profiler"), t1 = Symbol.for("react.provider"),
    n1 = Symbol.for("react.context"), r1 = Symbol.for("react.forward_ref"), o1 = Symbol.for("react.suspense"),
    i1 = Symbol.for("react.memo"), s1 = Symbol.for("react.lazy"), dp = Symbol.iterator;

function l1(e) {
    return e === null || typeof e != "object" ? null : (e = dp && e[dp] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Vh = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, Hh = Object.assign, Kh = {};

function Ko(e, t, n) {
    this.props = e, this.context = t, this.refs = Kh, this.updater = n || Vh
}

Ko.prototype.isReactComponent = {};
Ko.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Ko.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Gh() {
}

Gh.prototype = Ko.prototype;

function vd(e, t, n) {
    this.props = e, this.context = t, this.refs = Kh, this.updater = n || Vh
}

var yd = vd.prototype = new Gh;
yd.constructor = vd;
Hh(yd, Ko.prototype);
yd.isPureReactComponent = !0;
var fp = Array.isArray, Xh = Object.prototype.hasOwnProperty, xd = {current: null},
    Qh = {key: !0, ref: !0, __self: !0, __source: !0};

function Yh(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Xh.call(t, r) && !Qh.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n; else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {$$typeof: ps, type: e, key: i, ref: s, props: o, _owner: xd.current}
}

function a1(e, t) {
    return {$$typeof: ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function bd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ps
}

function u1(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var pp = /\/+/g;

function wu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? u1("" + e.key) : t.toString(36)
}

function tl(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (i) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case ps:
                case qy:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + wu(s, 0) : r, fp(o) ? (n = "", e != null && (n = e.replace(pp, "$&/") + "/"), tl(o, t, n, "", function (u) {
        return u
    })) : o != null && (bd(o) && (o = a1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(pp, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", fp(e)) for (var l = 0; l < e.length; l++) {
        i = e[l];
        var a = r + wu(i, l);
        s += tl(i, t, n, a, o)
    } else if (a = l1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + wu(i, l++), s += tl(i, t, n, a, o); else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Rs(e, t, n) {
    if (e == null) return e;
    var r = [], o = 0;
    return tl(e, r, "", "", function (i) {
        return t.call(n, i, o++)
    }), r
}

function c1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var bt = {current: null}, nl = {transition: null},
    d1 = {ReactCurrentDispatcher: bt, ReactCurrentBatchConfig: nl, ReactCurrentOwner: xd};
se.Children = {
    map: Rs, forEach: function (e, t, n) {
        Rs(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Rs(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Rs(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!bd(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
se.Component = Ko;
se.Fragment = Zy;
se.Profiler = e1;
se.PureComponent = vd;
se.StrictMode = Jy;
se.Suspense = o1;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d1;
se.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Hh({}, e.props), o = e.key, i = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = xd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Xh.call(t, a) && !Qh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n; else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {$$typeof: ps, type: e.type, key: o, ref: i, props: r, _owner: s}
};
se.createContext = function (e) {
    return e = {
        $$typeof: n1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: t1, _context: e}, e.Consumer = e
};
se.createElement = Yh;
se.createFactory = function (e) {
    var t = Yh.bind(null, e);
    return t.type = e, t
};
se.createRef = function () {
    return {current: null}
};
se.forwardRef = function (e) {
    return {$$typeof: r1, render: e}
};
se.isValidElement = bd;
se.lazy = function (e) {
    return {$$typeof: s1, _payload: {_status: -1, _result: e}, _init: c1}
};
se.memo = function (e, t) {
    return {$$typeof: i1, type: e, compare: t === void 0 ? null : t}
};
se.startTransition = function (e) {
    var t = nl.transition;
    nl.transition = {};
    try {
        e()
    } finally {
        nl.transition = t
    }
};
se.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
se.useCallback = function (e, t) {
    return bt.current.useCallback(e, t)
};
se.useContext = function (e) {
    return bt.current.useContext(e)
};
se.useDebugValue = function () {
};
se.useDeferredValue = function (e) {
    return bt.current.useDeferredValue(e)
};
se.useEffect = function (e, t) {
    return bt.current.useEffect(e, t)
};
se.useId = function () {
    return bt.current.useId()
};
se.useImperativeHandle = function (e, t, n) {
    return bt.current.useImperativeHandle(e, t, n)
};
se.useInsertionEffect = function (e, t) {
    return bt.current.useInsertionEffect(e, t)
};
se.useLayoutEffect = function (e, t) {
    return bt.current.useLayoutEffect(e, t)
};
se.useMemo = function (e, t) {
    return bt.current.useMemo(e, t)
};
se.useReducer = function (e, t, n) {
    return bt.current.useReducer(e, t, n)
};
se.useRef = function (e) {
    return bt.current.useRef(e)
};
se.useState = function (e) {
    return bt.current.useState(e)
};
se.useSyncExternalStore = function (e, t, n) {
    return bt.current.useSyncExternalStore(e, t, n)
};
se.useTransition = function () {
    return bt.current.useTransition()
};
se.version = "18.2.0";
Uh.exports = se;
var h = Uh.exports;
const Sn = Fh(h), Bi = Qy({__proto__: null, default: Sn}, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1 = h, p1 = Symbol.for("react.element"), m1 = Symbol.for("react.fragment"),
    h1 = Object.prototype.hasOwnProperty, g1 = f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v1 = {key: !0, ref: !0, __self: !0, __source: !0};

function qh(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) h1.call(t, r) && !v1.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {$$typeof: p1, type: e, key: i, ref: s, props: o, _owner: g1.current}
}

ia.Fragment = m1;
ia.jsx = qh;
ia.jsxs = qh;
Wh.exports = ia;
var C = Wh.exports, Zh = {exports: {}}, Ft = {}, Jh = {exports: {}}, eg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t($, I) {
        var B = $.length;
        $.push(I);
        e:for (; 0 < B;) {
            var X = B - 1 >>> 1, Y = $[X];
            if (0 < o(Y, I)) $[X] = I, $[B] = Y, B = X; else break e
        }
    }

    function n($) {
        return $.length === 0 ? null : $[0]
    }

    function r($) {
        if ($.length === 0) return null;
        var I = $[0], B = $.pop();
        if (B !== I) {
            $[0] = B;
            e:for (var X = 0, Y = $.length, le = Y >>> 1; X < le;) {
                var G = 2 * (X + 1) - 1, oe = $[G], te = G + 1, Ce = $[te];
                if (0 > o(oe, B)) te < Y && 0 > o(Ce, oe) ? ($[X] = Ce, $[te] = B, X = te) : ($[X] = oe, $[G] = B, X = G); else if (te < Y && 0 > o(Ce, B)) $[X] = Ce, $[te] = B, X = te; else break e
            }
        }
        return I
    }

    function o($, I) {
        var B = $.sortIndex - I.sortIndex;
        return B !== 0 ? B : $.id - I.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var s = Date, l = s.now();
        e.unstable_now = function () {
            return s.now() - l
        }
    }
    var a = [], u = [], c = 1, d = null, p = 3, w = !1, v = !1, y = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g($) {
        for (var I = n(u); I !== null;) {
            if (I.callback === null) r(u); else if (I.startTime <= $) r(u), I.sortIndex = I.expirationTime, t(a, I); else break;
            I = n(u)
        }
    }

    function b($) {
        if (y = !1, g($), !v) if (n(a) !== null) v = !0, L(E); else {
            var I = n(u);
            I !== null && D(b, I.startTime - $)
        }
    }

    function E($, I) {
        v = !1, y && (y = !1, f(T), T = -1), w = !0;
        var B = p;
        try {
            for (g(I), d = n(a); d !== null && (!(d.expirationTime > I) || $ && !O());) {
                var X = d.callback;
                if (typeof X == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var Y = X(d.expirationTime <= I);
                    I = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(a) && r(a), g(I)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var le = !0; else {
                var G = n(u);
                G !== null && D(b, G.startTime - I), le = !1
            }
            return le
        } finally {
            d = null, p = B, w = !1
        }
    }

    var R = !1, k = null, T = -1, M = 5, P = -1;

    function O() {
        return !(e.unstable_now() - P < M)
    }

    function j() {
        if (k !== null) {
            var $ = e.unstable_now();
            P = $;
            var I = !0;
            try {
                I = k(!0, $)
            } finally {
                I ? N() : (R = !1, k = null)
            }
        } else R = !1
    }

    var N;
    if (typeof m == "function") N = function () {
        m(j)
    }; else if (typeof MessageChannel < "u") {
        var A = new MessageChannel, _ = A.port2;
        A.port1.onmessage = j, N = function () {
            _.postMessage(null)
        }
    } else N = function () {
        S(j, 0)
    };

    function L($) {
        k = $, R || (R = !0, N())
    }

    function D($, I) {
        T = S(function () {
            $(e.unstable_now())
        }, I)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function ($) {
        $.callback = null
    }, e.unstable_continueExecution = function () {
        v || w || (v = !0, L(E))
    }, e.unstable_forceFrameRate = function ($) {
        0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < $ ? Math.floor(1e3 / $) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return p
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, e.unstable_next = function ($) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = p
        }
        var B = p;
        p = I;
        try {
            return $()
        } finally {
            p = B
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function ($, I) {
        switch ($) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                $ = 3
        }
        var B = p;
        p = $;
        try {
            return I()
        } finally {
            p = B
        }
    }, e.unstable_scheduleCallback = function ($, I, B) {
        var X = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? X + B : X) : B = X, $) {
            case 1:
                var Y = -1;
                break;
            case 2:
                Y = 250;
                break;
            case 5:
                Y = 1073741823;
                break;
            case 4:
                Y = 1e4;
                break;
            default:
                Y = 5e3
        }
        return Y = B + Y, $ = {
            id: c++,
            callback: I,
            priorityLevel: $,
            startTime: B,
            expirationTime: Y,
            sortIndex: -1
        }, B > X ? ($.sortIndex = B, t(u, $), n(a) === null && $ === n(u) && (y ? (f(T), T = -1) : y = !0, D(b, B - X))) : ($.sortIndex = Y, t(a, $), v || w || (v = !0, L(E))), $
    }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function ($) {
        var I = p;
        return function () {
            var B = p;
            p = I;
            try {
                return $.apply(this, arguments)
            } finally {
                p = B
            }
        }
    }
})(eg);
Jh.exports = eg;
var y1 = Jh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg = h, zt = y1;

function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var ng = new Set, Fi = {};

function Vr(e, t) {
    $o(e, t), $o(e + "Capture", t)
}

function $o(e, t) {
    for (Fi[e] = t, e = 0; e < t.length; e++) ng.add(t[e])
}

var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    lc = Object.prototype.hasOwnProperty,
    x1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    mp = {}, hp = {};

function b1(e) {
    return lc.call(hp, e) ? !0 : lc.call(mp, e) ? !1 : x1.test(e) ? hp[e] = !0 : (mp[e] = !0, !1)
}

function C1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function w1(e, t, n, r) {
    if (t === null || typeof t > "u" || C1(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ct(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}

var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    at[e] = new Ct(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    at[t] = new Ct(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    at[e] = new Ct(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    at[e] = new Ct(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    at[e] = new Ct(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    at[e] = new Ct(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    at[e] = new Ct(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    at[e] = new Ct(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    at[e] = new Ct(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Cd = /[\-:]([a-z])/g;

function wd(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Cd, wd);
    at[t] = new Ct(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Cd, wd);
    at[t] = new Ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Cd, wd);
    at[t] = new Ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    at[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
at.xlinkHref = new Ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    at[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Sd(e, t, n, r) {
    var o = at.hasOwnProperty(t) ? at[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w1(t, n, o, r) && (n = null), r || o === null ? b1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Kn = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ps = Symbol.for("react.element"),
    so = Symbol.for("react.portal"), lo = Symbol.for("react.fragment"), kd = Symbol.for("react.strict_mode"),
    ac = Symbol.for("react.profiler"), rg = Symbol.for("react.provider"), og = Symbol.for("react.context"),
    Ed = Symbol.for("react.forward_ref"), uc = Symbol.for("react.suspense"), cc = Symbol.for("react.suspense_list"),
    Rd = Symbol.for("react.memo"), Yn = Symbol.for("react.lazy"), ig = Symbol.for("react.offscreen"),
    gp = Symbol.iterator;

function ni(e) {
    return e === null || typeof e != "object" ? null : (e = gp && e[gp] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Ne = Object.assign, Su;

function yi(e) {
    if (Su === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Su = t && t[1] || ""
    }
    return `
` + Su + e
}

var ku = !1;

function Eu(e, t) {
    if (!e || ku) return "";
    ku = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
                if (s !== 1 || l !== 1) do if (s--, l--, 0 > l || o[s] !== i[l]) {
                    var a = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                } while (1 <= s && 0 <= l);
                break
            }
        }
    } finally {
        ku = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? yi(e) : ""
}

function S1(e) {
    switch (e.tag) {
        case 5:
            return yi(e.type);
        case 16:
            return yi("Lazy");
        case 13:
            return yi("Suspense");
        case 19:
            return yi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Eu(e.type, !1), e;
        case 11:
            return e = Eu(e.type.render, !1), e;
        case 1:
            return e = Eu(e.type, !0), e;
        default:
            return ""
    }
}

function dc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case lo:
            return "Fragment";
        case so:
            return "Portal";
        case ac:
            return "Profiler";
        case kd:
            return "StrictMode";
        case uc:
            return "Suspense";
        case cc:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case og:
            return (e.displayName || "Context") + ".Consumer";
        case rg:
            return (e._context.displayName || "Context") + ".Provider";
        case Ed:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Rd:
            return t = e.displayName || null, t !== null ? t : dc(e.type) || "Memo";
        case Yn:
            t = e._payload, e = e._init;
            try {
                return dc(e(t))
            } catch {
            }
    }
    return null
}

function k1(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return dc(t);
        case 8:
            return t === kd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function mr(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function sg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function E1(e) {
    var t = sg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return o.call(this)
            }, set: function (s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function $s(e) {
    e._valueTracker || (e._valueTracker = E1(e))
}

function lg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = sg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function yl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function fc(e, t) {
    var n = t.checked;
    return Ne({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function vp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = mr(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ag(e, t) {
    t = t.checked, t != null && Sd(e, "checked", t, !1)
}

function pc(e, t) {
    ag(e, t);
    var n = mr(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? mc(e, t.type, n) : t.hasOwnProperty("defaultValue") && mc(e, t.type, mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function yp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function mc(e, t, n) {
    (t !== "number" || yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var xi = Array.isArray;

function xo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + mr(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function hc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return Ne({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function xp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(z(92));
            if (xi(n)) {
                if (1 < n.length) throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: mr(n)}
}

function ug(e, t) {
    var n = mr(t.value), r = mr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function bp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function cg(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function gc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Ts, dg = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Ts = Ts || document.createElement("div"), Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ts.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Wi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var ki = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, R1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ki).forEach(function (e) {
    R1.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ki[t] = ki[e]
    })
});

function fg(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ki.hasOwnProperty(e) && ki[e] ? ("" + t).trim() : t + "px"
}

function pg(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = fg(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}

var P1 = Ne({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function vc(e, t) {
    if (t) {
        if (P1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(z(62))
    }
}

function yc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var xc = null;

function Pd(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var bc = null, bo = null, Co = null;

function Cp(e) {
    if (e = gs(e)) {
        if (typeof bc != "function") throw Error(z(280));
        var t = e.stateNode;
        t && (t = ca(t), bc(e.stateNode, e.type, t))
    }
}

function mg(e) {
    bo ? Co ? Co.push(e) : Co = [e] : bo = e
}

function hg() {
    if (bo) {
        var e = bo, t = Co;
        if (Co = bo = null, Cp(e), t) for (e = 0; e < t.length; e++) Cp(t[e])
    }
}

function gg(e, t) {
    return e(t)
}

function vg() {
}

var Ru = !1;

function yg(e, t, n) {
    if (Ru) return e(t, n);
    Ru = !0;
    try {
        return gg(e, t, n)
    } finally {
        Ru = !1, (bo !== null || Co !== null) && (vg(), hg())
    }
}

function Ui(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ca(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(z(231, t, typeof n));
    return n
}

var Cc = !1;
if (Fn) try {
    var ri = {};
    Object.defineProperty(ri, "passive", {
        get: function () {
            Cc = !0
        }
    }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri)
} catch {
    Cc = !1
}

function $1(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}

var Ei = !1, xl = null, bl = !1, wc = null, T1 = {
    onError: function (e) {
        Ei = !0, xl = e
    }
};

function M1(e, t, n, r, o, i, s, l, a) {
    Ei = !1, xl = null, $1.apply(T1, arguments)
}

function O1(e, t, n, r, o, i, s, l, a) {
    if (M1.apply(this, arguments), Ei) {
        if (Ei) {
            var u = xl;
            Ei = !1, xl = null
        } else throw Error(z(198));
        bl || (bl = !0, wc = u)
    }
}

function Hr(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function xg(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function wp(e) {
    if (Hr(e) !== e) throw Error(z(188))
}

function I1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Hr(e), t === null) throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return wp(o), e;
                if (i === r) return wp(o), t;
                i = i.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return) n = o, r = i; else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(z(189))
            }
        }
        if (n.alternate !== r) throw Error(z(190))
    }
    if (n.tag !== 3) throw Error(z(188));
    return n.stateNode.current === n ? e : t
}

function bg(e) {
    return e = I1(e), e !== null ? Cg(e) : null
}

function Cg(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Cg(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var wg = zt.unstable_scheduleCallback, Sp = zt.unstable_cancelCallback, N1 = zt.unstable_shouldYield,
    L1 = zt.unstable_requestPaint, We = zt.unstable_now, j1 = zt.unstable_getCurrentPriorityLevel,
    $d = zt.unstable_ImmediatePriority, Sg = zt.unstable_UserBlockingPriority, Cl = zt.unstable_NormalPriority,
    _1 = zt.unstable_LowPriority, kg = zt.unstable_IdlePriority, sa = null, kn = null;

function A1(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
        kn.onCommitFiberRoot(sa, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var dn = Math.clz32 ? Math.clz32 : B1, z1 = Math.log, D1 = Math.LN2;

function B1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (z1(e) / D1 | 0) | 0
}

var Ms = 64, Os = 4194304;

function bi(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function wl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = bi(l) : (i &= s, i !== 0 && (r = bi(i)))
    } else s = n & ~o, s !== 0 ? r = bi(s) : i !== 0 && (r = bi(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - dn(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function F1(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function W1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - dn(i), l = 1 << s, a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = F1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function Sc(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Eg() {
    var e = Ms;
    return Ms <<= 1, !(Ms & 4194240) && (Ms = 64), e
}

function Pu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ms(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dn(t), e[t] = n
}

function U1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - dn(n), i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Td(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - dn(n), o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}

var xe = 0;

function Rg(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var Pg, Md, $g, Tg, Mg, kc = !1, Is = [], ir = null, sr = null, lr = null, Vi = new Map, Hi = new Map, Zn = [],
    V1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function kp(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            ir = null;
            break;
        case"dragenter":
        case"dragleave":
            sr = null;
            break;
        case"mouseover":
        case"mouseout":
            lr = null;
            break;
        case"pointerover":
        case"pointerout":
            Vi.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Hi.delete(t.pointerId)
    }
}

function oi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = gs(t), t !== null && Md(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function H1(e, t, n, r, o) {
    switch (t) {
        case"focusin":
            return ir = oi(ir, e, t, n, r, o), !0;
        case"dragenter":
            return sr = oi(sr, e, t, n, r, o), !0;
        case"mouseover":
            return lr = oi(lr, e, t, n, r, o), !0;
        case"pointerover":
            var i = o.pointerId;
            return Vi.set(i, oi(Vi.get(i) || null, e, t, n, r, o)), !0;
        case"gotpointercapture":
            return i = o.pointerId, Hi.set(i, oi(Hi.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Og(e) {
    var t = Pr(e.target);
    if (t !== null) {
        var n = Hr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = xg(n), t !== null) {
                    e.blockedOn = t, Mg(e.priority, function () {
                        $g(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function rl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Ec(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            xc = r, n.target.dispatchEvent(r), xc = null
        } else return t = gs(n), t !== null && Md(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ep(e, t, n) {
    rl(e) && n.delete(t)
}

function K1() {
    kc = !1, ir !== null && rl(ir) && (ir = null), sr !== null && rl(sr) && (sr = null), lr !== null && rl(lr) && (lr = null), Vi.forEach(Ep), Hi.forEach(Ep)
}

function ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kc || (kc = !0, zt.unstable_scheduleCallback(zt.unstable_NormalPriority, K1)))
}

function Ki(e) {
    function t(o) {
        return ii(o, e)
    }

    if (0 < Is.length) {
        ii(Is[0], e);
        for (var n = 1; n < Is.length; n++) {
            var r = Is[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ir !== null && ii(ir, e), sr !== null && ii(sr, e), lr !== null && ii(lr, e), Vi.forEach(t), Hi.forEach(t), n = 0; n < Zn.length; n++) r = Zn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Zn.length && (n = Zn[0], n.blockedOn === null);) Og(n), n.blockedOn === null && Zn.shift()
}

var wo = Kn.ReactCurrentBatchConfig, Sl = !0;

function G1(e, t, n, r) {
    var o = xe, i = wo.transition;
    wo.transition = null;
    try {
        xe = 1, Od(e, t, n, r)
    } finally {
        xe = o, wo.transition = i
    }
}

function X1(e, t, n, r) {
    var o = xe, i = wo.transition;
    wo.transition = null;
    try {
        xe = 4, Od(e, t, n, r)
    } finally {
        xe = o, wo.transition = i
    }
}

function Od(e, t, n, r) {
    if (Sl) {
        var o = Ec(e, t, n, r);
        if (o === null) Au(e, t, r, kl, n), kp(e, r); else if (H1(o, e, t, n, r)) r.stopPropagation(); else if (kp(e, r), t & 4 && -1 < V1.indexOf(e)) {
            for (; o !== null;) {
                var i = gs(o);
                if (i !== null && Pg(i), i = Ec(e, t, n, r), i === null && Au(e, t, r, kl, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else Au(e, t, r, null, n)
    }
}

var kl = null;

function Ec(e, t, n, r) {
    if (kl = null, e = Pd(r), e = Pr(e), e !== null) if (t = Hr(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = xg(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return kl = e, null
}

function Ig(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (j1()) {
                case $d:
                    return 1;
                case Sg:
                    return 4;
                case Cl:
                case _1:
                    return 16;
                case kg:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var er = null, Id = null, ol = null;

function Ng() {
    if (ol) return ol;
    var e, t = Id, n = t.length, r, o = "value" in er ? er.value : er.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
    return ol = o.slice(e, 1 < r ? 1 - r : void 0)
}

function il(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ns() {
    return !0
}

function Rp() {
    return !1
}

function Wt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ns : Rp, this.isPropagationStopped = Rp, this
    }

    return Ne(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ns)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ns)
        }, persist: function () {
        }, isPersistent: Ns
    }), t
}

var Go = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, Nd = Wt(Go), hs = Ne({}, Go, {view: 0, detail: 0}), Q1 = Wt(hs), $u, Tu, si, la = Ne({}, hs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ld,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? ($u = e.screenX - si.screenX, Tu = e.screenY - si.screenY) : Tu = $u = 0, si = e), $u)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Tu
        }
    }), Pp = Wt(la), Y1 = Ne({}, la, {dataTransfer: 0}), q1 = Wt(Y1), Z1 = Ne({}, hs, {relatedTarget: 0}), Mu = Wt(Z1),
    J1 = Ne({}, Go, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), ex = Wt(J1), tx = Ne({}, Go, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), nx = Wt(tx), rx = Ne({}, Go, {data: 0}), $p = Wt(rx), ox = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ix = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, sx = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function lx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sx[e]) ? !!t[e] : !1
}

function Ld() {
    return lx
}

var ax = Ne({}, hs, {
    key: function (e) {
        if (e.key) {
            var t = ox[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ix[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ld,
    charCode: function (e) {
        return e.type === "keypress" ? il(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), ux = Wt(ax), cx = Ne({}, la, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Tp = Wt(cx), dx = Ne({}, hs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ld
}), fx = Wt(dx), px = Ne({}, Go, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), mx = Wt(px), hx = Ne({}, la, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), gx = Wt(hx), vx = [9, 13, 27, 32], jd = Fn && "CompositionEvent" in window, Ri = null;
Fn && "documentMode" in document && (Ri = document.documentMode);
var yx = Fn && "TextEvent" in window && !Ri, Lg = Fn && (!jd || Ri && 8 < Ri && 11 >= Ri), Mp = String.fromCharCode(32),
    Op = !1;

function jg(e, t) {
    switch (e) {
        case"keyup":
            return vx.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function _g(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var ao = !1;

function xx(e, t) {
    switch (e) {
        case"compositionend":
            return _g(t);
        case"keypress":
            return t.which !== 32 ? null : (Op = !0, Mp);
        case"textInput":
            return e = t.data, e === Mp && Op ? null : e;
        default:
            return null
    }
}

function bx(e, t) {
    if (ao) return e === "compositionend" || !jd && jg(e, t) ? (e = Ng(), ol = Id = er = null, ao = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return Lg && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var Cx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ip(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cx[e.type] : t === "textarea"
}

function Ag(e, t, n, r) {
    mg(r), t = El(t, "onChange"), 0 < t.length && (n = new Nd("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Pi = null, Gi = null;

function wx(e) {
    Xg(e, 0)
}

function aa(e) {
    var t = fo(e);
    if (lg(t)) return e
}

function Sx(e, t) {
    if (e === "change") return t
}

var zg = !1;
if (Fn) {
    var Ou;
    if (Fn) {
        var Iu = "oninput" in document;
        if (!Iu) {
            var Np = document.createElement("div");
            Np.setAttribute("oninput", "return;"), Iu = typeof Np.oninput == "function"
        }
        Ou = Iu
    } else Ou = !1;
    zg = Ou && (!document.documentMode || 9 < document.documentMode)
}

function Lp() {
    Pi && (Pi.detachEvent("onpropertychange", Dg), Gi = Pi = null)
}

function Dg(e) {
    if (e.propertyName === "value" && aa(Gi)) {
        var t = [];
        Ag(t, Gi, e, Pd(e)), yg(wx, t)
    }
}

function kx(e, t, n) {
    e === "focusin" ? (Lp(), Pi = t, Gi = n, Pi.attachEvent("onpropertychange", Dg)) : e === "focusout" && Lp()
}

function Ex(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return aa(Gi)
}

function Rx(e, t) {
    if (e === "click") return aa(t)
}

function Px(e, t) {
    if (e === "input" || e === "change") return aa(t)
}

function $x(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var pn = typeof Object.is == "function" ? Object.is : $x;

function Xi(e, t) {
    if (pn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!lc.call(t, o) || !pn(e[o], t[o])) return !1
    }
    return !0
}

function jp(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function _p(e, t) {
    var n = jp(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = jp(n)
    }
}

function Bg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Fg() {
    for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = yl(e.document)
    }
    return t
}

function _d(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Tx(e) {
    var t = Fg(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bg(n.ownerDocument.documentElement, n)) {
        if (r !== null && _d(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length, i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = _p(n, i);
                var s = _p(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var Mx = Fn && "documentMode" in document && 11 >= document.documentMode, uo = null, Rc = null, $i = null, Pc = !1;

function Ap(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pc || uo == null || uo !== yl(r) || (r = uo, "selectionStart" in r && _d(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), $i && Xi($i, r) || ($i = r, r = El(Rc, "onSelect"), 0 < r.length && (t = new Nd("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = uo)))
}

function Ls(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var co = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd")
}, Nu = {}, Wg = {};
Fn && (Wg = document.createElement("div").style, "AnimationEvent" in window || (delete co.animationend.animation, delete co.animationiteration.animation, delete co.animationstart.animation), "TransitionEvent" in window || delete co.transitionend.transition);

function ua(e) {
    if (Nu[e]) return Nu[e];
    if (!co[e]) return e;
    var t = co[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wg) return Nu[e] = t[n];
    return e
}

var Ug = ua("animationend"), Vg = ua("animationiteration"), Hg = ua("animationstart"), Kg = ua("transitionend"),
    Gg = new Map,
    zp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function yr(e, t) {
    Gg.set(e, t), Vr(t, [e])
}

for (var Lu = 0; Lu < zp.length; Lu++) {
    var ju = zp[Lu], Ox = ju.toLowerCase(), Ix = ju[0].toUpperCase() + ju.slice(1);
    yr(Ox, "on" + Ix)
}
yr(Ug, "onAnimationEnd");
yr(Vg, "onAnimationIteration");
yr(Hg, "onAnimationStart");
yr("dblclick", "onDoubleClick");
yr("focusin", "onFocus");
yr("focusout", "onBlur");
yr(Kg, "onTransitionEnd");
$o("onMouseEnter", ["mouseout", "mouseover"]);
$o("onMouseLeave", ["mouseout", "mouseover"]);
$o("onPointerEnter", ["pointerout", "pointerover"]);
$o("onPointerLeave", ["pointerout", "pointerover"]);
Vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Nx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));

function Dp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, O1(r, t, void 0, e), e.currentTarget = null
}

function Xg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], o = r.event;
        r = r.listeners;
        e:{
            var i = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var l = r[s], a = l.instance, u = l.currentTarget;
                if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                Dp(o, l, u), i = a
            } else for (s = 0; s < r.length; s++) {
                if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                Dp(o, l, u), i = a
            }
        }
    }
    if (bl) throw e = wc, bl = !1, wc = null, e
}

function Re(e, t) {
    var n = t[Ic];
    n === void 0 && (n = t[Ic] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Qg(t, e, 2, !1), n.add(r))
}

function _u(e, t, n) {
    var r = 0;
    t && (r |= 4), Qg(n, e, r, t)
}

var js = "_reactListening" + Math.random().toString(36).slice(2);

function Qi(e) {
    if (!e[js]) {
        e[js] = !0, ng.forEach(function (n) {
            n !== "selectionchange" && (Nx.has(n) || _u(n, !1, e), _u(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[js] || (t[js] = !0, _u("selectionchange", !1, t))
    }
}

function Qg(e, t, n, r) {
    switch (Ig(t)) {
        case 1:
            var o = G1;
            break;
        case 4:
            o = X1;
            break;
        default:
            o = Od
    }
    n = o.bind(null, t, n, e), o = void 0, !Cc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
}

function Au(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var a = s.tag;
                if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                s = s.return
            }
            for (; l !== null;) {
                if (s = Pr(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    yg(function () {
        var u = i, c = Pd(n), d = [];
        e:{
            var p = Gg.get(e);
            if (p !== void 0) {
                var w = Nd, v = e;
                switch (e) {
                    case"keypress":
                        if (il(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        w = ux;
                        break;
                    case"focusin":
                        v = "focus", w = Mu;
                        break;
                    case"focusout":
                        v = "blur", w = Mu;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        w = Mu;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        w = Pp;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        w = q1;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        w = fx;
                        break;
                    case Ug:
                    case Vg:
                    case Hg:
                        w = ex;
                        break;
                    case Kg:
                        w = mx;
                        break;
                    case"scroll":
                        w = Q1;
                        break;
                    case"wheel":
                        w = gx;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        w = nx;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        w = Tp
                }
                var y = (t & 4) !== 0, S = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var m = u, g; m !== null;) {
                    g = m;
                    var b = g.stateNode;
                    if (g.tag === 5 && b !== null && (g = b, f !== null && (b = Ui(m, f), b != null && y.push(Yi(m, b, g)))), S) break;
                    m = m.return
                }
                0 < y.length && (p = new w(p, v, null, n, c), d.push({event: p, listeners: y}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== xc && (v = n.relatedTarget || n.fromElement) && (Pr(v) || v[Wn])) break e;
                if ((w || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = u, v = v ? Pr(v) : null, v !== null && (S = Hr(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = u), w !== v)) {
                    if (y = Pp, b = "onMouseLeave", f = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = Tp, b = "onPointerLeave", f = "onPointerEnter", m = "pointer"), S = w == null ? p : fo(w), g = v == null ? p : fo(v), p = new y(b, m + "leave", w, n, c), p.target = S, p.relatedTarget = g, b = null, Pr(c) === u && (y = new y(f, m + "enter", v, n, c), y.target = g, y.relatedTarget = S, b = y), S = b, w && v) t:{
                        for (y = w, f = v, m = 0, g = y; g; g = Qr(g)) m++;
                        for (g = 0, b = f; b; b = Qr(b)) g++;
                        for (; 0 < m - g;) y = Qr(y), m--;
                        for (; 0 < g - m;) f = Qr(f), g--;
                        for (; m--;) {
                            if (y === f || f !== null && y === f.alternate) break t;
                            y = Qr(y), f = Qr(f)
                        }
                        y = null
                    } else y = null;
                    w !== null && Bp(d, p, w, y, !1), v !== null && S !== null && Bp(d, S, v, y, !0)
                }
            }
            e:{
                if (p = u ? fo(u) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var E = Sx; else if (Ip(p)) if (zg) E = Px; else {
                    E = Ex;
                    var R = kx
                } else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Rx);
                if (E && (E = E(e, u))) {
                    Ag(d, E, n, c);
                    break e
                }
                R && R(e, p, u), e === "focusout" && (R = p._wrapperState) && R.controlled && p.type === "number" && mc(p, "number", p.value)
            }
            switch (R = u ? fo(u) : window, e) {
                case"focusin":
                    (Ip(R) || R.contentEditable === "true") && (uo = R, Rc = u, $i = null);
                    break;
                case"focusout":
                    $i = Rc = uo = null;
                    break;
                case"mousedown":
                    Pc = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    Pc = !1, Ap(d, n, c);
                    break;
                case"selectionchange":
                    if (Mx) break;
                case"keydown":
                case"keyup":
                    Ap(d, n, c)
            }
            var k;
            if (jd) e:{
                switch (e) {
                    case"compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case"compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            } else ao ? jg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Lg && n.locale !== "ko" && (ao || T !== "onCompositionStart" ? T === "onCompositionEnd" && ao && (k = Ng()) : (er = c, Id = "value" in er ? er.value : er.textContent, ao = !0)), R = El(u, T), 0 < R.length && (T = new $p(T, e, null, n, c), d.push({
                event: T,
                listeners: R
            }), k ? T.data = k : (k = _g(n), k !== null && (T.data = k)))), (k = yx ? xx(e, n) : bx(e, n)) && (u = El(u, "onBeforeInput"), 0 < u.length && (c = new $p("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = k))
        }
        Xg(d, t)
    })
}

function Yi(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function El(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e, i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Ui(e, n), i != null && r.unshift(Yi(e, i, o)), i = Ui(e, t), i != null && r.push(Yi(e, i, o))), e = e.return
    }
    return r
}

function Qr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Bp(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n, a = l.alternate, u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = Ui(n, i), a != null && s.unshift(Yi(n, a, l))) : o || (a = Ui(n, i), a != null && s.push(Yi(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var Lx = /\r\n?/g, jx = /\u0000|\uFFFD/g;

function Fp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lx, `
`).replace(jx, "")
}

function _s(e, t, n) {
    if (t = Fp(t), Fp(e) !== t && n) throw Error(z(425))
}

function Rl() {
}

var $c = null, Tc = null;

function Mc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Oc = typeof setTimeout == "function" ? setTimeout : void 0,
    _x = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wp = typeof Promise == "function" ? Promise : void 0,
    Ax = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wp < "u" ? function (e) {
        return Wp.resolve(null).then(e).catch(zx)
    } : Oc;

function zx(e) {
    setTimeout(function () {
        throw e
    })
}

function zu(e, t) {
    var n = t, r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), Ki(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ki(t)
}

function ar(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Up(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var Xo = Math.random().toString(36).slice(2), Cn = "__reactFiber$" + Xo, qi = "__reactProps$" + Xo,
    Wn = "__reactContainer$" + Xo, Ic = "__reactEvents$" + Xo, Dx = "__reactListeners$" + Xo,
    Bx = "__reactHandles$" + Xo;

function Pr(e) {
    var t = e[Cn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Wn] || n[Cn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Up(e); e !== null;) {
                if (n = e[Cn]) return n;
                e = Up(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function gs(e) {
    return e = e[Cn] || e[Wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function fo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(z(33))
}

function ca(e) {
    return e[qi] || null
}

var Nc = [], po = -1;

function xr(e) {
    return {current: e}
}

function Pe(e) {
    0 > po || (e.current = Nc[po], Nc[po] = null, po--)
}

function Ee(e, t) {
    po++, Nc[po] = e.current, e.current = t
}

var hr = {}, ht = xr(hr), kt = xr(!1), jr = hr;

function To(e, t) {
    var n = e.type.contextTypes;
    if (!n) return hr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Et(e) {
    return e = e.childContextTypes, e != null
}

function Pl() {
    Pe(kt), Pe(ht)
}

function Vp(e, t, n) {
    if (ht.current !== hr) throw Error(z(168));
    Ee(ht, t), Ee(kt, n)
}

function Yg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(z(108, k1(e) || "Unknown", o));
    return Ne({}, n, r)
}

function $l(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hr, jr = ht.current, Ee(ht, e), Ee(kt, kt.current), !0
}

function Hp(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(z(169));
    n ? (e = Yg(e, t, jr), r.__reactInternalMemoizedMergedChildContext = e, Pe(kt), Pe(ht), Ee(ht, e)) : Pe(kt), Ee(kt, n)
}

var Ln = null, da = !1, Du = !1;

function qg(e) {
    Ln === null ? Ln = [e] : Ln.push(e)
}

function Fx(e) {
    da = !0, qg(e)
}

function br() {
    if (!Du && Ln !== null) {
        Du = !0;
        var e = 0, t = xe;
        try {
            var n = Ln;
            for (xe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ln = null, da = !1
        } catch (o) {
            throw Ln !== null && (Ln = Ln.slice(e + 1)), wg($d, br), o
        } finally {
            xe = t, Du = !1
        }
    }
    return null
}

var mo = [], ho = 0, Tl = null, Ml = 0, Kt = [], Gt = 0, _r = null, _n = 1, An = "";

function Sr(e, t) {
    mo[ho++] = Ml, mo[ho++] = Tl, Tl = e, Ml = t
}

function Zg(e, t, n) {
    Kt[Gt++] = _n, Kt[Gt++] = An, Kt[Gt++] = _r, _r = e;
    var r = _n;
    e = An;
    var o = 32 - dn(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - dn(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, _n = 1 << 32 - dn(t) + o | n << o | r, An = i + e
    } else _n = 1 << i | n << o | r, An = e
}

function Ad(e) {
    e.return !== null && (Sr(e, 1), Zg(e, 1, 0))
}

function zd(e) {
    for (; e === Tl;) Tl = mo[--ho], mo[ho] = null, Ml = mo[--ho], mo[ho] = null;
    for (; e === _r;) _r = Kt[--Gt], Kt[Gt] = null, An = Kt[--Gt], Kt[Gt] = null, _n = Kt[--Gt], Kt[Gt] = null
}

var _t = null, jt = null, Me = !1, an = null;

function Jg(e, t) {
    var n = Xt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Kp(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, jt = ar(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, jt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _r !== null ? {
                id: _n,
                overflow: An
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Xt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, jt = null, !0) : !1;
        default:
            return !1
    }
}

function Lc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function jc(e) {
    if (Me) {
        var t = jt;
        if (t) {
            var n = t;
            if (!Kp(e, t)) {
                if (Lc(e)) throw Error(z(418));
                t = ar(n.nextSibling);
                var r = _t;
                t && Kp(e, t) ? Jg(r, n) : (e.flags = e.flags & -4097 | 2, Me = !1, _t = e)
            }
        } else {
            if (Lc(e)) throw Error(z(418));
            e.flags = e.flags & -4097 | 2, Me = !1, _t = e
        }
    }
}

function Gp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    _t = e
}

function As(e) {
    if (e !== _t) return !1;
    if (!Me) return Gp(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mc(e.type, e.memoizedProps)), t && (t = jt)) {
        if (Lc(e)) throw ev(), Error(z(418));
        for (; t;) Jg(e, t), t = ar(t.nextSibling)
    }
    if (Gp(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            jt = ar(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            jt = null
        }
    } else jt = _t ? ar(e.stateNode.nextSibling) : null;
    return !0
}

function ev() {
    for (var e = jt; e;) e = ar(e.nextSibling)
}

function Mo() {
    jt = _t = null, Me = !1
}

function Dd(e) {
    an === null ? an = [e] : an.push(e)
}

var Wx = Kn.ReactCurrentBatchConfig;

function sn(e, t) {
    if (e && e.defaultProps) {
        t = Ne({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var Ol = xr(null), Il = null, go = null, Bd = null;

function Fd() {
    Bd = go = Il = null
}

function Wd(e) {
    var t = Ol.current;
    Pe(Ol), e._currentValue = t
}

function _c(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function So(e, t) {
    Il = e, Bd = go = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (St = !0), e.firstContext = null)
}

function qt(e) {
    var t = e._currentValue;
    if (Bd !== e) if (e = {context: e, memoizedValue: t, next: null}, go === null) {
        if (Il === null) throw Error(z(308));
        go = e, Il.dependencies = {lanes: 0, firstContext: e}
    } else go = go.next = e;
    return t
}

var $r = null;

function Ud(e) {
    $r === null ? $r = [e] : $r.push(e)
}

function tv(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Ud(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Un(e, r)
}

function Un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var qn = !1;

function Vd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function nv(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function zn(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function ur(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, fe & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Un(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Ud(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Un(e, n)
}

function sl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Td(e, n)
    }
}

function Xp(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null, i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Nl(e, t, n, r) {
    var o = e.updateQueue;
    qn = !1;
    var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l, u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0, c = u = a = null, l = i;
        do {
            var p = l.lane, w = l.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: w,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e:{
                    var v = e, y = l;
                    switch (p = t, w = n, y.tag) {
                        case 1:
                            if (v = y.payload, typeof v == "function") {
                                d = v.call(w, d, p);
                                break e
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = y.payload, p = typeof v == "function" ? v.call(w, d, p) : v, p == null) break e;
                            d = Ne({}, d, p);
                            break e;
                        case 2:
                            qn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [l] : p.push(l))
            } else w = {
                eventTime: w,
                lane: p,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = w, a = d) : c = c.next = w, s |= p;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                p = l, l = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (1);
        if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        zr |= s, e.lanes = s, e.memoizedState = d
    }
}

function Qp(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function") throw Error(z(191, o));
            o.call(r)
        }
    }
}

var rv = new tg.Component().refs;

function Ac(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var fa = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Hr(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = xt(), o = dr(e), i = zn(r, o);
        i.payload = t, n != null && (i.callback = n), t = ur(e, i, o), t !== null && (fn(t, e, o, r), sl(t, e, o))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = xt(), o = dr(e), i = zn(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ur(e, i, o), t !== null && (fn(t, e, o, r), sl(t, e, o))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = xt(), r = dr(e), o = zn(n, r);
        o.tag = 2, t != null && (o.callback = t), t = ur(e, o, r), t !== null && (fn(t, e, r, n), sl(t, e, r))
    }
};

function Yp(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xi(n, r) || !Xi(o, i) : !0
}

function ov(e, t, n) {
    var r = !1, o = hr, i = t.contextType;
    return typeof i == "object" && i !== null ? i = qt(i) : (o = Et(t) ? jr : ht.current, r = t.contextTypes, i = (r = r != null) ? To(e, o) : hr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function qp(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fa.enqueueReplaceState(t, t.state, null)
}

function zc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = rv, Vd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = qt(i) : (i = Et(t) ? jr : ht.current, o.context = To(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ac(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && fa.enqueueReplaceState(o, o.state, null), Nl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function li(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(z(309));
                var r = n.stateNode
            }
            if (!r) throw Error(z(147, e));
            var o = r, i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) {
                var l = o.refs;
                l === rv && (l = o.refs = {}), s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(z(284));
        if (!n._owner) throw Error(z(290, e))
    }
    return e
}

function zs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Zp(e) {
    var t = e._init;
    return t(e._payload)
}

function iv(e) {
    function t(f, m) {
        if (e) {
            var g = f.deletions;
            g === null ? (f.deletions = [m], f.flags |= 16) : g.push(m)
        }
    }

    function n(f, m) {
        if (!e) return null;
        for (; m !== null;) t(f, m), m = m.sibling;
        return null
    }

    function r(f, m) {
        for (f = new Map; m !== null;) m.key !== null ? f.set(m.key, m) : f.set(m.index, m), m = m.sibling;
        return f
    }

    function o(f, m) {
        return f = fr(f, m), f.index = 0, f.sibling = null, f
    }

    function i(f, m, g) {
        return f.index = g, e ? (g = f.alternate, g !== null ? (g = g.index, g < m ? (f.flags |= 2, m) : g) : (f.flags |= 2, m)) : (f.flags |= 1048576, m)
    }

    function s(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function l(f, m, g, b) {
        return m === null || m.tag !== 6 ? (m = Ku(g, f.mode, b), m.return = f, m) : (m = o(m, g), m.return = f, m)
    }

    function a(f, m, g, b) {
        var E = g.type;
        return E === lo ? c(f, m, g.props.children, b, g.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Yn && Zp(E) === m.type) ? (b = o(m, g.props), b.ref = li(f, m, g), b.return = f, b) : (b = fl(g.type, g.key, g.props, null, f.mode, b), b.ref = li(f, m, g), b.return = f, b)
    }

    function u(f, m, g, b) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Gu(g, f.mode, b), m.return = f, m) : (m = o(m, g.children || []), m.return = f, m)
    }

    function c(f, m, g, b, E) {
        return m === null || m.tag !== 7 ? (m = Ir(g, f.mode, b, E), m.return = f, m) : (m = o(m, g), m.return = f, m)
    }

    function d(f, m, g) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = Ku("" + m, f.mode, g), m.return = f, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ps:
                    return g = fl(m.type, m.key, m.props, null, f.mode, g), g.ref = li(f, null, m), g.return = f, g;
                case so:
                    return m = Gu(m, f.mode, g), m.return = f, m;
                case Yn:
                    var b = m._init;
                    return d(f, b(m._payload), g)
            }
            if (xi(m) || ni(m)) return m = Ir(m, f.mode, g, null), m.return = f, m;
            zs(f, m)
        }
        return null
    }

    function p(f, m, g, b) {
        var E = m !== null ? m.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return E !== null ? null : l(f, m, "" + g, b);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ps:
                    return g.key === E ? a(f, m, g, b) : null;
                case so:
                    return g.key === E ? u(f, m, g, b) : null;
                case Yn:
                    return E = g._init, p(f, m, E(g._payload), b)
            }
            if (xi(g) || ni(g)) return E !== null ? null : c(f, m, g, b, null);
            zs(f, g)
        }
        return null
    }

    function w(f, m, g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number") return f = f.get(g) || null, l(m, f, "" + b, E);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Ps:
                    return f = f.get(b.key === null ? g : b.key) || null, a(m, f, b, E);
                case so:
                    return f = f.get(b.key === null ? g : b.key) || null, u(m, f, b, E);
                case Yn:
                    var R = b._init;
                    return w(f, m, g, R(b._payload), E)
            }
            if (xi(b) || ni(b)) return f = f.get(g) || null, c(m, f, b, E, null);
            zs(m, b)
        }
        return null
    }

    function v(f, m, g, b) {
        for (var E = null, R = null, k = m, T = m = 0, M = null; k !== null && T < g.length; T++) {
            k.index > T ? (M = k, k = null) : M = k.sibling;
            var P = p(f, k, g[T], b);
            if (P === null) {
                k === null && (k = M);
                break
            }
            e && k && P.alternate === null && t(f, k), m = i(P, m, T), R === null ? E = P : R.sibling = P, R = P, k = M
        }
        if (T === g.length) return n(f, k), Me && Sr(f, T), E;
        if (k === null) {
            for (; T < g.length; T++) k = d(f, g[T], b), k !== null && (m = i(k, m, T), R === null ? E = k : R.sibling = k, R = k);
            return Me && Sr(f, T), E
        }
        for (k = r(f, k); T < g.length; T++) M = w(k, f, T, g[T], b), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? T : M.key), m = i(M, m, T), R === null ? E = M : R.sibling = M, R = M);
        return e && k.forEach(function (O) {
            return t(f, O)
        }), Me && Sr(f, T), E
    }

    function y(f, m, g, b) {
        var E = ni(g);
        if (typeof E != "function") throw Error(z(150));
        if (g = E.call(g), g == null) throw Error(z(151));
        for (var R = E = null, k = m, T = m = 0, M = null, P = g.next(); k !== null && !P.done; T++, P = g.next()) {
            k.index > T ? (M = k, k = null) : M = k.sibling;
            var O = p(f, k, P.value, b);
            if (O === null) {
                k === null && (k = M);
                break
            }
            e && k && O.alternate === null && t(f, k), m = i(O, m, T), R === null ? E = O : R.sibling = O, R = O, k = M
        }
        if (P.done) return n(f, k), Me && Sr(f, T), E;
        if (k === null) {
            for (; !P.done; T++, P = g.next()) P = d(f, P.value, b), P !== null && (m = i(P, m, T), R === null ? E = P : R.sibling = P, R = P);
            return Me && Sr(f, T), E
        }
        for (k = r(f, k); !P.done; T++, P = g.next()) P = w(k, f, T, P.value, b), P !== null && (e && P.alternate !== null && k.delete(P.key === null ? T : P.key), m = i(P, m, T), R === null ? E = P : R.sibling = P, R = P);
        return e && k.forEach(function (j) {
            return t(f, j)
        }), Me && Sr(f, T), E
    }

    function S(f, m, g, b) {
        if (typeof g == "object" && g !== null && g.type === lo && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ps:
                    e:{
                        for (var E = g.key, R = m; R !== null;) {
                            if (R.key === E) {
                                if (E = g.type, E === lo) {
                                    if (R.tag === 7) {
                                        n(f, R.sibling), m = o(R, g.props.children), m.return = f, f = m;
                                        break e
                                    }
                                } else if (R.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Yn && Zp(E) === R.type) {
                                    n(f, R.sibling), m = o(R, g.props), m.ref = li(f, R, g), m.return = f, f = m;
                                    break e
                                }
                                n(f, R);
                                break
                            } else t(f, R);
                            R = R.sibling
                        }
                        g.type === lo ? (m = Ir(g.props.children, f.mode, b, g.key), m.return = f, f = m) : (b = fl(g.type, g.key, g.props, null, f.mode, b), b.ref = li(f, m, g), b.return = f, f = b)
                    }
                    return s(f);
                case so:
                    e:{
                        for (R = g.key; m !== null;) {
                            if (m.key === R) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                                n(f, m.sibling), m = o(m, g.children || []), m.return = f, f = m;
                                break e
                            } else {
                                n(f, m);
                                break
                            } else t(f, m);
                            m = m.sibling
                        }
                        m = Gu(g, f.mode, b), m.return = f, f = m
                    }
                    return s(f);
                case Yn:
                    return R = g._init, S(f, m, R(g._payload), b)
            }
            if (xi(g)) return v(f, m, g, b);
            if (ni(g)) return y(f, m, g, b);
            zs(f, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(f, m.sibling), m = o(m, g), m.return = f, f = m) : (n(f, m), m = Ku(g, f.mode, b), m.return = f, f = m), s(f)) : n(f, m)
    }

    return S
}

var Oo = iv(!0), sv = iv(!1), vs = {}, En = xr(vs), Zi = xr(vs), Ji = xr(vs);

function Tr(e) {
    if (e === vs) throw Error(z(174));
    return e
}

function Hd(e, t) {
    switch (Ee(Ji, t), Ee(Zi, e), Ee(En, vs), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : gc(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = gc(t, e)
    }
    Pe(En), Ee(En, t)
}

function Io() {
    Pe(En), Pe(Zi), Pe(Ji)
}

function lv(e) {
    Tr(Ji.current);
    var t = Tr(En.current), n = gc(t, e.type);
    t !== n && (Ee(Zi, e), Ee(En, n))
}

function Kd(e) {
    Zi.current === e && (Pe(En), Pe(Zi))
}

var Oe = xr(0);

function Ll(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var Bu = [];

function Gd() {
    for (var e = 0; e < Bu.length; e++) Bu[e]._workInProgressVersionPrimary = null;
    Bu.length = 0
}

var ll = Kn.ReactCurrentDispatcher, Fu = Kn.ReactCurrentBatchConfig, Ar = 0, Ie = null, Qe = null, Je = null, jl = !1,
    Ti = !1, es = 0, Ux = 0;

function ct() {
    throw Error(z(321))
}

function Xd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pn(e[n], t[n])) return !1;
    return !0
}

function Qd(e, t, n, r, o, i) {
    if (Ar = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? Gx : Xx, e = n(r, o), Ti) {
        i = 0;
        do {
            if (Ti = !1, es = 0, 25 <= i) throw Error(z(301));
            i += 1, Je = Qe = null, t.updateQueue = null, ll.current = Qx, e = n(r, o)
        } while (Ti)
    }
    if (ll.current = _l, t = Qe !== null && Qe.next !== null, Ar = 0, Je = Qe = Ie = null, jl = !1, t) throw Error(z(300));
    return e
}

function Yd() {
    var e = es !== 0;
    return es = 0, e
}

function vn() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return Je === null ? Ie.memoizedState = Je = e : Je = Je.next = e, Je
}

function Zt() {
    if (Qe === null) {
        var e = Ie.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Qe.next;
    var t = Je === null ? Ie.memoizedState : Je.next;
    if (t !== null) Je = t, Qe = e; else {
        if (e === null) throw Error(z(310));
        Qe = e, e = {
            memoizedState: Qe.memoizedState,
            baseState: Qe.baseState,
            baseQueue: Qe.baseQueue,
            queue: Qe.queue,
            next: null
        }, Je === null ? Ie.memoizedState = Je = e : Je = Je.next = e
    }
    return Je
}

function ts(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Wu(e) {
    var t = Zt(), n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = Qe, o = r.baseQueue, i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null, a = null, u = i;
        do {
            var c = u.lane;
            if ((Ar & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d, s = r) : a = a.next = d, Ie.lanes |= c, zr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, pn(r, t.memoizedState) || (St = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, Ie.lanes |= i, zr |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Uu(e) {
    var t = Zt(), n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        pn(i, t.memoizedState) || (St = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function av() {
}

function uv(e, t) {
    var n = Ie, r = Zt(), o = t(), i = !pn(r.memoizedState, o);
    if (i && (r.memoizedState = o, St = !0), r = r.queue, qd(fv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Je !== null && Je.memoizedState.tag & 1) {
        if (n.flags |= 2048, ns(9, dv.bind(null, n, r, o, t), void 0, null), tt === null) throw Error(z(349));
        Ar & 30 || cv(n, t, o)
    }
    return o
}

function cv(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = Ie.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function dv(e, t, n, r) {
    t.value = n, t.getSnapshot = r, pv(t) && mv(e)
}

function fv(e, t, n) {
    return n(function () {
        pv(t) && mv(e)
    })
}

function pv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !pn(e, n)
    } catch {
        return !0
    }
}

function mv(e) {
    var t = Un(e, 1);
    t !== null && fn(t, e, 1, -1)
}

function Jp(e) {
    var t = vn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ts,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Kx.bind(null, Ie, e), [t.memoizedState, e]
}

function ns(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Ie.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function hv() {
    return Zt().memoizedState
}

function al(e, t, n, r) {
    var o = vn();
    Ie.flags |= e, o.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r)
}

function pa(e, t, n, r) {
    var o = Zt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Qe !== null) {
        var s = Qe.memoizedState;
        if (i = s.destroy, r !== null && Xd(r, s.deps)) {
            o.memoizedState = ns(t, n, i, r);
            return
        }
    }
    Ie.flags |= e, o.memoizedState = ns(1 | t, n, i, r)
}

function em(e, t) {
    return al(8390656, 8, e, t)
}

function qd(e, t) {
    return pa(2048, 8, e, t)
}

function gv(e, t) {
    return pa(4, 2, e, t)
}

function vv(e, t) {
    return pa(4, 4, e, t)
}

function yv(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function xv(e, t, n) {
    return n = n != null ? n.concat([e]) : null, pa(4, 4, yv.bind(null, t, e), n)
}

function Zd() {
}

function bv(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Cv(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function wv(e, t, n) {
    return Ar & 21 ? (pn(n, t) || (n = Eg(), Ie.lanes |= n, zr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n)
}

function Vx(e, t) {
    var n = xe;
    xe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Fu.transition;
    Fu.transition = {};
    try {
        e(!1), t()
    } finally {
        xe = n, Fu.transition = r
    }
}

function Sv() {
    return Zt().memoizedState
}

function Hx(e, t, n) {
    var r = dr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, kv(e)) Ev(t, n); else if (n = tv(e, t, n, r), n !== null) {
        var o = xt();
        fn(n, e, r, o), Rv(n, t, r)
    }
}

function Kx(e, t, n) {
    var r = dr(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (kv(e)) Ev(t, o); else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState, l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, pn(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, Ud(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {
        } finally {
        }
        n = tv(e, t, o, r), n !== null && (o = xt(), fn(n, e, r, o), Rv(n, t, r))
    }
}

function kv(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie
}

function Ev(e, t) {
    Ti = jl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Rv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Td(e, n)
    }
}

var _l = {
    readContext: qt,
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useInsertionEffect: ct,
    useLayoutEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useMutableSource: ct,
    useSyncExternalStore: ct,
    useId: ct,
    unstable_isNewReconciler: !1
}, Gx = {
    readContext: qt, useCallback: function (e, t) {
        return vn().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: qt, useEffect: em, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, al(4194308, 4, yv.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return al(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return al(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = vn();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = vn();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = Hx.bind(null, Ie, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = vn();
        return e = {current: e}, t.memoizedState = e
    }, useState: Jp, useDebugValue: Zd, useDeferredValue: function (e) {
        return vn().memoizedState = e
    }, useTransition: function () {
        var e = Jp(!1), t = e[0];
        return e = Vx.bind(null, e[1]), vn().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = Ie, o = vn();
        if (Me) {
            if (n === void 0) throw Error(z(407));
            n = n()
        } else {
            if (n = t(), tt === null) throw Error(z(349));
            Ar & 30 || cv(r, t, n)
        }
        o.memoizedState = n;
        var i = {value: n, getSnapshot: t};
        return o.queue = i, em(fv.bind(null, r, i, e), [e]), r.flags |= 2048, ns(9, dv.bind(null, r, i, n, t), void 0, null), n
    }, useId: function () {
        var e = vn(), t = tt.identifierPrefix;
        if (Me) {
            var n = An, r = _n;
            n = (r & ~(1 << 32 - dn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = es++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = Ux++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, Xx = {
    readContext: qt,
    useCallback: bv,
    useContext: qt,
    useEffect: qd,
    useImperativeHandle: xv,
    useInsertionEffect: gv,
    useLayoutEffect: vv,
    useMemo: Cv,
    useReducer: Wu,
    useRef: hv,
    useState: function () {
        return Wu(ts)
    },
    useDebugValue: Zd,
    useDeferredValue: function (e) {
        var t = Zt();
        return wv(t, Qe.memoizedState, e)
    },
    useTransition: function () {
        var e = Wu(ts)[0], t = Zt().memoizedState;
        return [e, t]
    },
    useMutableSource: av,
    useSyncExternalStore: uv,
    useId: Sv,
    unstable_isNewReconciler: !1
}, Qx = {
    readContext: qt,
    useCallback: bv,
    useContext: qt,
    useEffect: qd,
    useImperativeHandle: xv,
    useInsertionEffect: gv,
    useLayoutEffect: vv,
    useMemo: Cv,
    useReducer: Uu,
    useRef: hv,
    useState: function () {
        return Uu(ts)
    },
    useDebugValue: Zd,
    useDeferredValue: function (e) {
        var t = Zt();
        return Qe === null ? t.memoizedState = e : wv(t, Qe.memoizedState, e)
    },
    useTransition: function () {
        var e = Uu(ts)[0], t = Zt().memoizedState;
        return [e, t]
    },
    useMutableSource: av,
    useSyncExternalStore: uv,
    useId: Sv,
    unstable_isNewReconciler: !1
};

function No(e, t) {
    try {
        var n = "", r = t;
        do n += S1(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {value: e, source: t, stack: o, digest: null}
}

function Vu(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function Dc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var Yx = typeof WeakMap == "function" ? WeakMap : Map;

function Pv(e, t, n) {
    n = zn(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        zl || (zl = !0, Qc = r), Dc(e, t)
    }, n
}

function $v(e, t, n) {
    n = zn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }, n.callback = function () {
            Dc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        Dc(e, t), typeof r != "function" && (cr === null ? cr = new Set([this]) : cr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function tm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Yx;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = cb.bind(null, e, t, n), t.then(e, e))
}

function nm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function rm(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zn(-1, 1), t.tag = 2, ur(n, t, 1))), n.lanes |= 1), e)
}

var qx = Kn.ReactCurrentOwner, St = !1;

function yt(e, t, n, r) {
    t.child = e === null ? sv(t, null, n, r) : Oo(t, e.child, n, r)
}

function om(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return So(t, o), r = Qd(e, t, n, r, i, o), n = Yd(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vn(e, t, o)) : (Me && n && Ad(t), t.flags |= 1, yt(e, t, r, o), t.child)
}

function im(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !lf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Tv(e, t, i, r, o)) : (e = fl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xi, n(s, r) && e.ref === t.ref) return Vn(e, t, o)
    }
    return t.flags |= 1, e = fr(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Tv(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Xi(i, r) && e.ref === t.ref) if (St = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (St = !0); else return t.lanes = e.lanes, Vn(e, t, o)
    }
    return Bc(e, t, n, r, o)
}

function Mv(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Ee(yo, Nt), Nt |= n; else {
        if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Ee(yo, Nt), Nt |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = i !== null ? i.baseLanes : n, Ee(yo, Nt), Nt |= r
    } else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ee(yo, Nt), Nt |= r;
    return yt(e, t, o, n), t.child
}

function Ov(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Bc(e, t, n, r, o) {
    var i = Et(n) ? jr : ht.current;
    return i = To(t, i), So(t, o), n = Qd(e, t, n, r, i, o), r = Yd(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Vn(e, t, o)) : (Me && r && Ad(t), t.flags |= 1, yt(e, t, n, o), t.child)
}

function sm(e, t, n, r, o) {
    if (Et(n)) {
        var i = !0;
        $l(t)
    } else i = !1;
    if (So(t, o), t.stateNode === null) ul(e, t), ov(t, n, r), zc(t, n, r, o), r = !0; else if (e === null) {
        var s = t.stateNode, l = t.memoizedProps;
        s.props = l;
        var a = s.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = qt(u) : (u = Et(n) ? jr : ht.current, u = To(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && qp(t, s, r, u), qn = !1;
        var p = t.memoizedState;
        s.state = p, Nl(t, r, s, o), a = t.memoizedState, l !== r || p !== a || kt.current || qn ? (typeof c == "function" && (Ac(t, n, c, r), a = t.memoizedState), (l = qn || Yp(t, n, l, r, p, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, nv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : sn(t.type, l), s.props = u, d = t.pendingProps, p = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = qt(a) : (a = Et(n) ? jr : ht.current, a = To(t, a));
        var w = n.getDerivedStateFromProps;
        (c = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || p !== a) && qp(t, s, r, a), qn = !1, p = t.memoizedState, s.state = p, Nl(t, r, s, o);
        var v = t.memoizedState;
        l !== d || p !== v || kt.current || qn ? (typeof w == "function" && (Ac(t, n, w, r), v = t.memoizedState), (u = qn || Yp(t, n, u, r, p, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Fc(e, t, n, r, i, o)
}

function Fc(e, t, n, r, o, i) {
    Ov(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Hp(t, n, !1), Vn(e, t, i);
    r = t.stateNode, qx.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Oo(t, e.child, null, i), t.child = Oo(t, null, l, i)) : yt(e, t, l, i), t.memoizedState = r.state, o && Hp(t, n, !0), t.child
}

function Iv(e) {
    var t = e.stateNode;
    t.pendingContext ? Vp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vp(e, t.context, !1), Hd(e, t.containerInfo)
}

function lm(e, t, n, r, o) {
    return Mo(), Dd(o), t.flags |= 256, yt(e, t, n, r), t.child
}

var Wc = {dehydrated: null, treeContext: null, retryLane: 0};

function Uc(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Nv(e, t, n) {
    var r = t.pendingProps, o = Oe.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(Oe, o & 1), e === null) return jc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ga(s, r, 0, null), e = Ir(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Uc(n), t.memoizedState = Wc, e) : Jd(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Zx(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {mode: "hidden", children: r.children};
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = fr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = fr(l, i) : (i = Ir(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Uc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Wc, r
    }
    return i = e.child, e = i.sibling, r = fr(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Jd(e, t) {
    return t = ga({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Ds(e, t, n, r) {
    return r !== null && Dd(r), Oo(t, e.child, null, n), e = Jd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zx(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vu(Error(z(422))), Ds(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ga({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Ir(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Oo(t, e.child, null, s), t.child.memoizedState = Uc(s), t.memoizedState = Wc, i);
    if (!(t.mode & 1)) return Ds(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(z(419)), r = Vu(i, r, void 0), Ds(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, St || l) {
        if (r = tt, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Un(e, o), fn(r, e, o, -1))
        }
        return sf(), r = Vu(Error(z(421))), Ds(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = db.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, jt = ar(o.nextSibling), _t = t, Me = !0, an = null, e !== null && (Kt[Gt++] = _n, Kt[Gt++] = An, Kt[Gt++] = _r, _n = e.id, An = e.overflow, _r = t), t = Jd(t, r.children), t.flags |= 4096, t)
}

function am(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _c(e.return, t, n)
}

function Hu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Lv(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (yt(e, t, r.children, n), r = Oe.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && am(e, n, t); else if (e.tag === 19) am(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ee(Oe, r), !(t.mode & 1)) t.memoizedState = null; else switch (o) {
        case"forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Ll(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Hu(t, !1, o, n, i);
            break;
        case"backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Ll(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Hu(t, !0, n, null, i);
            break;
        case"together":
            Hu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ul(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), zr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child, n = fr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = fr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jx(e, t, n) {
    switch (t.tag) {
        case 3:
            Iv(t), Mo();
            break;
        case 5:
            lv(t);
            break;
        case 1:
            Et(t.type) && $l(t);
            break;
        case 4:
            Hd(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, o = t.memoizedProps.value;
            Ee(Ol, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ee(Oe, Oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nv(e, t, n) : (Ee(Oe, Oe.current & 1), e = Vn(e, t, n), e !== null ? e.sibling : null);
            Ee(Oe, Oe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Lv(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(Oe, Oe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Mv(e, t, n)
    }
    return Vn(e, t, n)
}

var jv, Vc, _v, Av;
jv = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Vc = function () {
};
_v = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Tr(En.current);
        var i = null;
        switch (n) {
            case"input":
                o = fc(e, o), r = fc(e, r), i = [];
                break;
            case"select":
                o = Ne({}, o, {value: void 0}), r = Ne({}, r, {value: void 0}), i = [];
                break;
            case"textarea":
                o = hc(e, o), r = hc(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Rl)
        }
        vc(n, r);
        var s;
        n = null;
        for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
            var l = o[u];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
                for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
            } else n || (i || (i = []), i.push(u, n)), n = a; else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fi.hasOwnProperty(u) ? (a != null && u === "onScroll" && Re("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Av = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ai(e, t) {
    if (!Me) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function dt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling; else for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function eb(e, t, n) {
    var r = t.pendingProps;
    switch (zd(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return dt(t), null;
        case 1:
            return Et(t.type) && Pl(), dt(t), null;
        case 3:
            return r = t.stateNode, Io(), Pe(kt), Pe(ht), Gd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (As(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, an !== null && (Zc(an), an = null))), Vc(e, t), dt(t), null;
        case 5:
            Kd(t);
            var o = Tr(Ji.current);
            if (n = t.type, e !== null && t.stateNode != null) _v(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(z(166));
                    return dt(t), null
                }
                if (e = Tr(En.current), As(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Cn] = t, r[qi] = i, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            Re("cancel", r), Re("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Re("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (o = 0; o < Ci.length; o++) Re(Ci[o], r);
                            break;
                        case"source":
                            Re("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Re("error", r), Re("load", r);
                            break;
                        case"details":
                            Re("toggle", r);
                            break;
                        case"input":
                            vp(r, i), Re("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!i.multiple}, Re("invalid", r);
                            break;
                        case"textarea":
                            xp(r, i), Re("invalid", r)
                    }
                    vc(n, i), o = null;
                    for (var s in i) if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && _s(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && _s(r.textContent, l, e), o = ["children", "" + l]) : Fi.hasOwnProperty(s) && l != null && s === "onScroll" && Re("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            $s(r), yp(r, i, !0);
                            break;
                        case"textarea":
                            $s(r), bp(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Rl)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Cn] = t, e[qi] = r, jv(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = yc(n, r), n) {
                            case"dialog":
                                Re("cancel", e), Re("close", e), o = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Re("load", e), o = r;
                                break;
                            case"video":
                            case"audio":
                                for (o = 0; o < Ci.length; o++) Re(Ci[o], e);
                                o = r;
                                break;
                            case"source":
                                Re("error", e), o = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Re("error", e), Re("load", e), o = r;
                                break;
                            case"details":
                                Re("toggle", e), o = r;
                                break;
                            case"input":
                                vp(e, r), o = fc(e, r), Re("invalid", e);
                                break;
                            case"option":
                                o = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, o = Ne({}, r, {value: void 0}), Re("invalid", e);
                                break;
                            case"textarea":
                                xp(e, r), o = hc(e, r), Re("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        vc(n, o), l = o;
                        for (i in l) if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? pg(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && dg(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Wi(e, a) : typeof a == "number" && Wi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Fi.hasOwnProperty(i) ? a != null && i === "onScroll" && Re("scroll", e) : a != null && Sd(e, i, a, s))
                        }
                        switch (n) {
                            case"input":
                                $s(e), yp(e, r, !1);
                                break;
                            case"textarea":
                                $s(e), bp(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + mr(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? xo(e, !!r.multiple, i, !1) : r.defaultValue != null && xo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Rl)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return dt(t), null;
        case 6:
            if (e && t.stateNode != null) Av(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
                if (n = Tr(Ji.current), Tr(En.current), As(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Cn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
                        case 3:
                            _s(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && _s(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Cn] = t, t.stateNode = r
            }
            return dt(t), null;
        case 13:
            if (Pe(Oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Me && jt !== null && t.mode & 1 && !(t.flags & 128)) ev(), Mo(), t.flags |= 98560, i = !1; else if (i = As(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(z(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
                        i[Cn] = t
                    } else Mo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    dt(t), i = !1
                } else an !== null && (Zc(an), an = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Oe.current & 1 ? Ye === 0 && (Ye = 3) : sf())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
        case 4:
            return Io(), Vc(e, t), e === null && Qi(t.stateNode.containerInfo), dt(t), null;
        case 10:
            return Wd(t.type._context), dt(t), null;
        case 17:
            return Et(t.type) && Pl(), dt(t), null;
        case 19:
            if (Pe(Oe), i = t.memoizedState, i === null) return dt(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) ai(i, !1); else {
                if (Ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (s = Ll(e), s !== null) {
                        for (t.flags |= 128, ai(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Ee(Oe, Oe.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                i.tail !== null && We() > Lo && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = Ll(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Me) return dt(t), null
                } else 2 * We() - i.renderingStartTime > Lo && n !== 1073741824 && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = We(), t.sibling = null, n = Oe.current, Ee(Oe, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
        case 22:
        case 23:
            return of(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(z(156, t.tag))
}

function tb(e, t) {
    switch (zd(t), t.tag) {
        case 1:
            return Et(t.type) && Pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Io(), Pe(kt), Pe(ht), Gd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Kd(t), null;
        case 13:
            if (Pe(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(z(340));
                Mo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Pe(Oe), null;
        case 4:
            return Io(), null;
        case 10:
            return Wd(t.type._context), null;
        case 22:
        case 23:
            return of(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Bs = !1, pt = !1, nb = typeof WeakSet == "function" ? WeakSet : Set, H = null;

function vo(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        ze(e, t, r)
    } else n.current = null
}

function Hc(e, t, n) {
    try {
        n()
    } catch (r) {
        ze(e, t, r)
    }
}

var um = !1;

function rb(e, t) {
    if ($c = Sl, e = Fg(), _d(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, l = -1, a = -1, u = 0, c = 0, d = e, p = null;
                t:for (; ;) {
                    for (var w; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (w = d.firstChild) !== null;) p = d, d = w;
                    for (; ;) {
                        if (d === e) break t;
                        if (p === n && ++u === o && (l = s), p === i && ++c === r && (a = s), (w = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = w
                }
                n = l === -1 || a === -1 ? null : {start: l, end: a}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Tc = {
        focusedElem: e,
        selectionRange: n
    }, Sl = !1, H = t; H !== null;) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e; else for (; H !== null;) {
        t = H;
        try {
            var v = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (v !== null) {
                        var y = v.memoizedProps, S = v.memoizedState, f = t.stateNode,
                            m = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : sn(t.type, y), S);
                        f.__reactInternalSnapshotBeforeUpdate = m
                    }
                    break;
                case 3:
                    var g = t.stateNode.containerInfo;
                    g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(z(163))
            }
        } catch (b) {
            ze(t, t.return, b)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, H = e;
            break
        }
        H = t.return
    }
    return v = um, um = !1, v
}

function Mi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Hc(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function ma(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Kc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function zv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Cn], delete t[qi], delete t[Ic], delete t[Dx], delete t[Bx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Dv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function cm(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Dv(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Gc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Rl)); else if (r !== 4 && (e = e.child, e !== null)) for (Gc(e, t, n), e = e.sibling; e !== null;) Gc(e, t, n), e = e.sibling
}

function Xc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Xc(e, t, n), e = e.sibling; e !== null;) Xc(e, t, n), e = e.sibling
}

var it = null, ln = !1;

function Xn(e, t, n) {
    for (n = n.child; n !== null;) Bv(e, t, n), n = n.sibling
}

function Bv(e, t, n) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
        kn.onCommitFiberUnmount(sa, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            pt || vo(n, t);
        case 6:
            var r = it, o = ln;
            it = null, Xn(e, t, n), it = r, ln = o, it !== null && (ln ? (e = it, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : it.removeChild(n.stateNode));
            break;
        case 18:
            it !== null && (ln ? (e = it, n = n.stateNode, e.nodeType === 8 ? zu(e.parentNode, n) : e.nodeType === 1 && zu(e, n), Ki(e)) : zu(it, n.stateNode));
            break;
        case 4:
            r = it, o = ln, it = n.stateNode.containerInfo, ln = !0, Xn(e, t, n), it = r, ln = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!pt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o, s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Hc(n, t, s), o = o.next
                } while (o !== r)
            }
            Xn(e, t, n);
            break;
        case 1:
            if (!pt && (vo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                ze(n, t, l)
            }
            Xn(e, t, n);
            break;
        case 21:
            Xn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (pt = (r = pt) || n.memoizedState !== null, Xn(e, t, n), pt = r) : Xn(e, t, n);
            break;
        default:
            Xn(e, t, n)
    }
}

function dm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new nb), t.forEach(function (r) {
            var o = fb.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function on(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, s = t, l = s;
            e:for (; l !== null;) {
                switch (l.tag) {
                    case 5:
                        it = l.stateNode, ln = !1;
                        break e;
                    case 3:
                        it = l.stateNode.containerInfo, ln = !0;
                        break e;
                    case 4:
                        it = l.stateNode.containerInfo, ln = !0;
                        break e
                }
                l = l.return
            }
            if (it === null) throw Error(z(160));
            Bv(i, s, o), it = null, ln = !1;
            var a = o.alternate;
            a !== null && (a.return = null), o.return = null
        } catch (u) {
            ze(o, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Fv(t, e), t = t.sibling
}

function Fv(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (on(t, e), gn(e), r & 4) {
                try {
                    Mi(3, e, e.return), ma(3, e)
                } catch (y) {
                    ze(e, e.return, y)
                }
                try {
                    Mi(5, e, e.return)
                } catch (y) {
                    ze(e, e.return, y)
                }
            }
            break;
        case 1:
            on(t, e), gn(e), r & 512 && n !== null && vo(n, n.return);
            break;
        case 5:
            if (on(t, e), gn(e), r & 512 && n !== null && vo(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Wi(o, "")
                } catch (y) {
                    ze(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && ag(o, i), yc(l, s);
                    var u = yc(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s], d = a[s + 1];
                        c === "style" ? pg(o, d) : c === "dangerouslySetInnerHTML" ? dg(o, d) : c === "children" ? Wi(o, d) : Sd(o, c, d, u)
                    }
                    switch (l) {
                        case"input":
                            pc(o, i);
                            break;
                        case"textarea":
                            ug(o, i);
                            break;
                        case"select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? xo(o, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? xo(o, !!i.multiple, i.defaultValue, !0) : xo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[qi] = i
                } catch (y) {
                    ze(e, e.return, y)
                }
            }
            break;
        case 6:
            if (on(t, e), gn(e), r & 4) {
                if (e.stateNode === null) throw Error(z(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (y) {
                    ze(e, e.return, y)
                }
            }
            break;
        case 3:
            if (on(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Ki(t.containerInfo)
            } catch (y) {
                ze(e, e.return, y)
            }
            break;
        case 4:
            on(t, e), gn(e);
            break;
        case 13:
            on(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (nf = We())), r & 4 && dm(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pt = (u = pt) || c, on(t, e), pt = u) : on(t, e), gn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (H = e, c = e.child; c !== null;) {
                    for (d = H = c; H !== null;) {
                        switch (p = H, w = p.child, p.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Mi(4, p, p.return);
                                break;
                            case 1:
                                vo(p, p.return);
                                var v = p.stateNode;
                                if (typeof v.componentWillUnmount == "function") {
                                    r = p, n = p.return;
                                    try {
                                        t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                    } catch (y) {
                                        ze(r, n, y)
                                    }
                                }
                                break;
                            case 5:
                                vo(p, p.return);
                                break;
                            case 22:
                                if (p.memoizedState !== null) {
                                    pm(d);
                                    continue
                                }
                        }
                        w !== null ? (w.return = p, H = w) : pm(d)
                    }
                    c = c.sibling
                }
                e:for (c = null, d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = fg("display", s))
                            } catch (y) {
                                ze(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ze(e, e.return, y)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            on(t, e), gn(e), r & 4 && dm(e);
            break;
        case 21:
            break;
        default:
            on(t, e), gn(e)
    }
}

function gn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (Dv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Wi(o, ""), r.flags &= -33);
                    var i = cm(e);
                    Xc(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, l = cm(e);
                    Gc(e, l, s);
                    break;
                default:
                    throw Error(z(161))
            }
        } catch (a) {
            ze(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ob(e, t, n) {
    H = e, Wv(e)
}

function Wv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null;) {
        var o = H, i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Bs;
            if (!s) {
                var l = o.alternate, a = l !== null && l.memoizedState !== null || pt;
                l = Bs;
                var u = pt;
                if (Bs = s, (pt = a) && !u) for (H = o; H !== null;) s = H, a = s.child, s.tag === 22 && s.memoizedState !== null ? mm(o) : a !== null ? (a.return = s, H = a) : mm(o);
                for (; i !== null;) H = i, Wv(i), i = i.sibling;
                H = o, Bs = l, pt = u
            }
            fm(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, H = i) : fm(e)
    }
}

function fm(e) {
    for (; H !== null;) {
        var t = H;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pt || ma(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pt) if (n === null) r.componentDidMount(); else {
                            var o = t.elementType === t.type ? n.memoizedProps : sn(t.type, n.memoizedProps);
                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var i = t.updateQueue;
                        i !== null && Qp(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Qp(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case"img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Ki(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                }
                pt || t.flags & 512 && Kc(t)
            } catch (p) {
                ze(t, t.return, p)
            }
        }
        if (t === e) {
            H = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, H = n;
            break
        }
        H = t.return
    }
}

function pm(e) {
    for (; H !== null;) {
        var t = H;
        if (t === e) {
            H = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, H = n;
            break
        }
        H = t.return
    }
}

function mm(e) {
    for (; H !== null;) {
        var t = H;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ma(4, t)
                    } catch (a) {
                        ze(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            ze(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Kc(t)
                    } catch (a) {
                        ze(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Kc(t)
                    } catch (a) {
                        ze(t, s, a)
                    }
            }
        } catch (a) {
            ze(t, t.return, a)
        }
        if (t === e) {
            H = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, H = l;
            break
        }
        H = t.return
    }
}

var ib = Math.ceil, Al = Kn.ReactCurrentDispatcher, ef = Kn.ReactCurrentOwner, Qt = Kn.ReactCurrentBatchConfig, fe = 0,
    tt = null, He = null, lt = 0, Nt = 0, yo = xr(0), Ye = 0, rs = null, zr = 0, ha = 0, tf = 0, Oi = null, wt = null,
    nf = 0, Lo = 1 / 0, Nn = null, zl = !1, Qc = null, cr = null, Fs = !1, tr = null, Dl = 0, Ii = 0, Yc = null,
    cl = -1, dl = 0;

function xt() {
    return fe & 6 ? We() : cl !== -1 ? cl : cl = We()
}

function dr(e) {
    return e.mode & 1 ? fe & 2 && lt !== 0 ? lt & -lt : Wx.transition !== null ? (dl === 0 && (dl = Eg()), dl) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ig(e.type)), e) : 1
}

function fn(e, t, n, r) {
    if (50 < Ii) throw Ii = 0, Yc = null, Error(z(185));
    ms(e, n, r), (!(fe & 2) || e !== tt) && (e === tt && (!(fe & 2) && (ha |= n), Ye === 4 && Jn(e, lt)), Rt(e, r), n === 1 && fe === 0 && !(t.mode & 1) && (Lo = We() + 500, da && br()))
}

function Rt(e, t) {
    var n = e.callbackNode;
    W1(e, t);
    var r = wl(e, e === tt ? lt : 0);
    if (r === 0) n !== null && Sp(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Sp(n), t === 1) e.tag === 0 ? Fx(hm.bind(null, e)) : qg(hm.bind(null, e)), Ax(function () {
            !(fe & 6) && br()
        }), n = null; else {
            switch (Rg(r)) {
                case 1:
                    n = $d;
                    break;
                case 4:
                    n = Sg;
                    break;
                case 16:
                    n = Cl;
                    break;
                case 536870912:
                    n = kg;
                    break;
                default:
                    n = Cl
            }
            n = Yv(n, Uv.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Uv(e, t) {
    if (cl = -1, dl = 0, fe & 6) throw Error(z(327));
    var n = e.callbackNode;
    if (ko() && e.callbackNode !== n) return null;
    var r = wl(e, e === tt ? lt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r); else {
        t = r;
        var o = fe;
        fe |= 2;
        var i = Hv();
        (tt !== e || lt !== t) && (Nn = null, Lo = We() + 500, Or(e, t));
        do try {
            ab();
            break
        } catch (l) {
            Vv(e, l)
        } while (1);
        Fd(), Al.current = i, fe = o, He !== null ? t = 0 : (tt = null, lt = 0, t = Ye)
    }
    if (t !== 0) {
        if (t === 2 && (o = Sc(e), o !== 0 && (r = o, t = qc(e, o))), t === 1) throw n = rs, Or(e, 0), Jn(e, r), Rt(e, We()), n;
        if (t === 6) Jn(e, r); else {
            if (o = e.current.alternate, !(r & 30) && !sb(o) && (t = Bl(e, r), t === 2 && (i = Sc(e), i !== 0 && (r = i, t = qc(e, i))), t === 1)) throw n = rs, Or(e, 0), Jn(e, r), Rt(e, We()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(z(345));
                case 2:
                    kr(e, wt, Nn);
                    break;
                case 3:
                    if (Jn(e, r), (r & 130023424) === r && (t = nf + 500 - We(), 10 < t)) {
                        if (wl(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            xt(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Oc(kr.bind(null, e, wt, Nn), t);
                        break
                    }
                    kr(e, wt, Nn);
                    break;
                case 4:
                    if (Jn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - dn(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = We() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ib(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Oc(kr.bind(null, e, wt, Nn), r);
                        break
                    }
                    kr(e, wt, Nn);
                    break;
                case 5:
                    kr(e, wt, Nn);
                    break;
                default:
                    throw Error(z(329))
            }
        }
    }
    return Rt(e, We()), e.callbackNode === n ? Uv.bind(null, e) : null
}

function qc(e, t) {
    var n = Oi;
    return e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = wt, wt = n, t !== null && Zc(t)), e
}

function Zc(e) {
    wt === null ? wt = e : wt.push.apply(wt, e)
}

function sb(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!pn(i(), o)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Jn(e, t) {
    for (t &= ~tf, t &= ~ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - dn(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function hm(e) {
    if (fe & 6) throw Error(z(327));
    ko();
    var t = wl(e, 0);
    if (!(t & 1)) return Rt(e, We()), null;
    var n = Bl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Sc(e);
        r !== 0 && (t = r, n = qc(e, r))
    }
    if (n === 1) throw n = rs, Or(e, 0), Jn(e, t), Rt(e, We()), n;
    if (n === 6) throw Error(z(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, kr(e, wt, Nn), Rt(e, We()), null
}

function rf(e, t) {
    var n = fe;
    fe |= 1;
    try {
        return e(t)
    } finally {
        fe = n, fe === 0 && (Lo = We() + 500, da && br())
    }
}

function Dr(e) {
    tr !== null && tr.tag === 0 && !(fe & 6) && ko();
    var t = fe;
    fe |= 1;
    var n = Qt.transition, r = xe;
    try {
        if (Qt.transition = null, xe = 1, e) return e()
    } finally {
        xe = r, Qt.transition = n, fe = t, !(fe & 6) && br()
    }
}

function of() {
    Nt = yo.current, Pe(yo)
}

function Or(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _x(n)), He !== null) for (n = He.return; n !== null;) {
        var r = n;
        switch (zd(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Pl();
                break;
            case 3:
                Io(), Pe(kt), Pe(ht), Gd();
                break;
            case 5:
                Kd(r);
                break;
            case 4:
                Io();
                break;
            case 13:
                Pe(Oe);
                break;
            case 19:
                Pe(Oe);
                break;
            case 10:
                Wd(r.type._context);
                break;
            case 22:
            case 23:
                of()
        }
        n = n.return
    }
    if (tt = e, He = e = fr(e.current, null), lt = Nt = t, Ye = 0, rs = null, tf = ha = zr = 0, wt = Oi = null, $r !== null) {
        for (t = 0; t < $r.length; t++) if (n = $r[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var s = i.next;
                i.next = o, r.next = s
            }
            n.pending = r
        }
        $r = null
    }
    return e
}

function Vv(e, t) {
    do {
        var n = He;
        try {
            if (Fd(), ll.current = _l, jl) {
                for (var r = Ie.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                jl = !1
            }
            if (Ar = 0, Je = Qe = Ie = null, Ti = !1, es = 0, ef.current = null, n === null || n.return === null) {
                Ye = 1, rs = t, He = null;
                break
            }
            e:{
                var i = e, s = n.return, l = n, a = t;
                if (t = lt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a, c = l, d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var w = nm(s);
                    if (w !== null) {
                        w.flags &= -257, rm(w, s, l, i, t), w.mode & 1 && tm(i, u, t), t = w, a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var y = new Set;
                            y.add(a), t.updateQueue = y
                        } else v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tm(i, u, t), sf();
                            break e
                        }
                        a = Error(z(426))
                    }
                } else if (Me && l.mode & 1) {
                    var S = nm(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), rm(S, s, l, i, t), Dd(No(a, l));
                        break e
                    }
                }
                i = a = No(a, l), Ye !== 4 && (Ye = 2), Oi === null ? Oi = [i] : Oi.push(i), i = s;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var f = Pv(i, a, t);
                            Xp(i, f);
                            break e;
                        case 1:
                            l = a;
                            var m = i.type, g = i.stateNode;
                            if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (cr === null || !cr.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var b = $v(i, l, t);
                                Xp(i, b);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Gv(n)
        } catch (E) {
            t = E, He === n && n !== null && (He = n = n.return);
            continue
        }
        break
    } while (1)
}

function Hv() {
    var e = Al.current;
    return Al.current = _l, e === null ? _l : e
}

function sf() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), tt === null || !(zr & 268435455) && !(ha & 268435455) || Jn(tt, lt)
}

function Bl(e, t) {
    var n = fe;
    fe |= 2;
    var r = Hv();
    (tt !== e || lt !== t) && (Nn = null, Or(e, t));
    do try {
        lb();
        break
    } catch (o) {
        Vv(e, o)
    } while (1);
    if (Fd(), fe = n, Al.current = r, He !== null) throw Error(z(261));
    return tt = null, lt = 0, Ye
}

function lb() {
    for (; He !== null;) Kv(He)
}

function ab() {
    for (; He !== null && !N1();) Kv(He)
}

function Kv(e) {
    var t = Qv(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? Gv(e) : He = t, ef.current = null
}

function Gv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = tb(n, t), n !== null) {
                n.flags &= 32767, He = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                Ye = 6, He = null;
                return
            }
        } else if (n = eb(n, t, Nt), n !== null) {
            He = n;
            return
        }
        if (t = t.sibling, t !== null) {
            He = t;
            return
        }
        He = t = e
    } while (t !== null);
    Ye === 0 && (Ye = 5)
}

function kr(e, t, n) {
    var r = xe, o = Qt.transition;
    try {
        Qt.transition = null, xe = 1, ub(e, t, n, r)
    } finally {
        Qt.transition = o, xe = r
    }
    return null
}

function ub(e, t, n, r) {
    do ko(); while (tr !== null);
    if (fe & 6) throw Error(z(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (U1(e, i), e === tt && (He = tt = null, lt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fs || (Fs = !0, Yv(Cl, function () {
        return ko(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Qt.transition, Qt.transition = null;
        var s = xe;
        xe = 1;
        var l = fe;
        fe |= 4, ef.current = null, rb(e, n), Fv(n, e), Tx(Tc), Sl = !!$c, Tc = $c = null, e.current = n, ob(n), L1(), fe = l, xe = s, Qt.transition = i
    } else e.current = n;
    if (Fs && (Fs = !1, tr = e, Dl = o), i = e.pendingLanes, i === 0 && (cr = null), A1(n.stateNode), Rt(e, We()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
        componentStack: o.stack,
        digest: o.digest
    });
    if (zl) throw zl = !1, e = Qc, Qc = null, e;
    return Dl & 1 && e.tag !== 0 && ko(), i = e.pendingLanes, i & 1 ? e === Yc ? Ii++ : (Ii = 0, Yc = e) : Ii = 0, br(), null
}

function ko() {
    if (tr !== null) {
        var e = Rg(Dl), t = Qt.transition, n = xe;
        try {
            if (Qt.transition = null, xe = 16 > e ? 16 : e, tr === null) var r = !1; else {
                if (e = tr, tr = null, Dl = 0, fe & 6) throw Error(z(331));
                var o = fe;
                for (fe |= 4, H = e.current; H !== null;) {
                    var i = H, s = i.child;
                    if (H.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (H = u; H !== null;) {
                                    var c = H;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Mi(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, H = d; else for (; H !== null;) {
                                        c = H;
                                        var p = c.sibling, w = c.return;
                                        if (zv(c), c === u) {
                                            H = null;
                                            break
                                        }
                                        if (p !== null) {
                                            p.return = w, H = p;
                                            break
                                        }
                                        H = w
                                    }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null, y = S
                                    } while (y !== null)
                                }
                            }
                            H = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, H = s; else e:for (; H !== null;) {
                        if (i = H, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Mi(9, i, i.return)
                        }
                        var f = i.sibling;
                        if (f !== null) {
                            f.return = i.return, H = f;
                            break e
                        }
                        H = i.return
                    }
                }
                var m = e.current;
                for (H = m; H !== null;) {
                    s = H;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, H = g; else e:for (s = m; H !== null;) {
                        if (l = H, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ma(9, l)
                            }
                        } catch (E) {
                            ze(l, l.return, E)
                        }
                        if (l === s) {
                            H = null;
                            break e
                        }
                        var b = l.sibling;
                        if (b !== null) {
                            b.return = l.return, H = b;
                            break e
                        }
                        H = l.return
                    }
                }
                if (fe = o, br(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
                    kn.onPostCommitFiberRoot(sa, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            xe = n, Qt.transition = t
        }
    }
    return !1
}

function gm(e, t, n) {
    t = No(n, t), t = Pv(e, t, 1), e = ur(e, t, 1), t = xt(), e !== null && (ms(e, 1, t), Rt(e, t))
}

function ze(e, t, n) {
    if (e.tag === 3) gm(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            gm(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cr === null || !cr.has(r))) {
                e = No(n, e), e = $v(t, e, 1), t = ur(t, e, 1), e = xt(), t !== null && (ms(t, 1, e), Rt(t, e));
                break
            }
        }
        t = t.return
    }
}

function cb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = xt(), e.pingedLanes |= e.suspendedLanes & n, tt === e && (lt & n) === n && (Ye === 4 || Ye === 3 && (lt & 130023424) === lt && 500 > We() - nf ? Or(e, 0) : tf |= n), Rt(e, t)
}

function Xv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Os, Os <<= 1, !(Os & 130023424) && (Os = 4194304)) : t = 1);
    var n = xt();
    e = Un(e, t), e !== null && (ms(e, t, n), Rt(e, n))
}

function db(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Xv(e, n)
}

function fb(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(z(314))
    }
    r !== null && r.delete(t), Xv(e, n)
}

var Qv;
Qv = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || kt.current) St = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return St = !1, Jx(e, t, n);
        St = !!(e.flags & 131072)
    } else St = !1, Me && t.flags & 1048576 && Zg(t, Ml, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ul(e, t), e = t.pendingProps;
            var o = To(t, ht.current);
            So(t, n), o = Qd(null, t, r, e, o, n);
            var i = Yd();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Et(r) ? (i = !0, $l(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vd(t), o.updater = fa, t.stateNode = o, o._reactInternals = t, zc(t, r, e, n), t = Fc(null, t, r, !0, i, n)) : (t.tag = 0, Me && i && Ad(t), yt(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (ul(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = mb(r), e = sn(r, e), o) {
                    case 0:
                        t = Bc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sm(null, t, r, e, n);
                        break e;
                    case 11:
                        t = om(null, t, r, e, n);
                        break e;
                    case 14:
                        t = im(null, t, r, sn(r.type, e), n);
                        break e
                }
                throw Error(z(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : sn(r, o), Bc(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : sn(r, o), sm(e, t, r, o, n);
        case 3:
            e:{
                if (Iv(t), e === null) throw Error(z(387));
                r = t.pendingProps, i = t.memoizedState, o = i.element, nv(e, t), Nl(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated) if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = No(Error(z(423)), t), t = lm(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = No(Error(z(424)), t), t = lm(e, t, r, n, o);
                    break e
                } else for (jt = ar(t.stateNode.containerInfo.firstChild), _t = t, Me = !0, an = null, n = sv(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (Mo(), r === o) {
                        t = Vn(e, t, n);
                        break e
                    }
                    yt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return lv(t), e === null && jc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Mc(r, o) ? s = null : i !== null && Mc(r, i) && (t.flags |= 32), Ov(e, t), yt(e, t, s, n), t.child;
        case 6:
            return e === null && jc(t), null;
        case 13:
            return Nv(e, t, n);
        case 4:
            return Hd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Oo(t, null, r, n) : yt(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : sn(r, o), om(e, t, r, o, n);
        case 7:
            return yt(e, t, t.pendingProps, n), t.child;
        case 8:
            return yt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return yt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ee(Ol, r._currentValue), r._currentValue = s, i !== null) if (pn(i.value, s)) {
                    if (i.children === o.children && !kt.current) {
                        t = Vn(e, t, n);
                        break e
                    }
                } else for (i = t.child, i !== null && (i.return = t); i !== null;) {
                    var l = i.dependencies;
                    if (l !== null) {
                        s = i.child;
                        for (var a = l.firstContext; a !== null;) {
                            if (a.context === r) {
                                if (i.tag === 1) {
                                    a = zn(-1, n & -n), a.tag = 2;
                                    var u = i.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var c = u.pending;
                                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                    }
                                }
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), _c(i.return, n, t), l.lanes |= n;
                                break
                            }
                            a = a.next
                        }
                    } else if (i.tag === 10) s = i.type === t.type ? null : i.child; else if (i.tag === 18) {
                        if (s = i.return, s === null) throw Error(z(341));
                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), _c(s, n, t), s = i.sibling
                    } else s = i.child;
                    if (s !== null) s.return = i; else for (s = i; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (i = s.sibling, i !== null) {
                            i.return = s.return, s = i;
                            break
                        }
                        s = s.return
                    }
                    i = s
                }
                yt(e, t, o.children, n), t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, So(t, n), o = qt(o), r = r(o), t.flags |= 1, yt(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = sn(r, t.pendingProps), o = sn(r.type, o), im(e, t, r, o, n);
        case 15:
            return Tv(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : sn(r, o), ul(e, t), t.tag = 1, Et(r) ? (e = !0, $l(t)) : e = !1, So(t, n), ov(t, r, o), zc(t, r, o, n), Fc(null, t, r, !0, e, n);
        case 19:
            return Lv(e, t, n);
        case 22:
            return Mv(e, t, n)
    }
    throw Error(z(156, t.tag))
};

function Yv(e, t) {
    return wg(e, t)
}

function pb(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Xt(e, t, n, r) {
    return new pb(e, t, n, r)
}

function lf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function mb(e) {
    if (typeof e == "function") return lf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ed) return 11;
        if (e === Rd) return 14
    }
    return 2
}

function fr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function fl(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") lf(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case lo:
            return Ir(n.children, o, i, t);
        case kd:
            s = 8, o |= 8;
            break;
        case ac:
            return e = Xt(12, n, t, o | 2), e.elementType = ac, e.lanes = i, e;
        case uc:
            return e = Xt(13, n, t, o), e.elementType = uc, e.lanes = i, e;
        case cc:
            return e = Xt(19, n, t, o), e.elementType = cc, e.lanes = i, e;
        case ig:
            return ga(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case rg:
                    s = 10;
                    break e;
                case og:
                    s = 9;
                    break e;
                case Ed:
                    s = 11;
                    break e;
                case Rd:
                    s = 14;
                    break e;
                case Yn:
                    s = 16, r = null;
                    break e
            }
            throw Error(z(130, e == null ? e : typeof e, ""))
    }
    return t = Xt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Ir(e, t, n, r) {
    return e = Xt(7, e, r, t), e.lanes = n, e
}

function ga(e, t, n, r) {
    return e = Xt(22, e, r, t), e.elementType = ig, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function Ku(e, t, n) {
    return e = Xt(6, e, null, t), e.lanes = n, e
}

function Gu(e, t, n) {
    return t = Xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function hb(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pu(0), this.expirationTimes = Pu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function af(e, t, n, r, o, i, s, l, a) {
    return e = new hb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Xt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Vd(i), e
}

function gb(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: so, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function qv(e) {
    if (!e) return hr;
    e = e._reactInternals;
    e:{
        if (Hr(e) !== e || e.tag !== 1) throw Error(z(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Et(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Et(n)) return Yg(e, n, t)
    }
    return t
}

function Zv(e, t, n, r, o, i, s, l, a) {
    return e = af(n, r, !0, e, o, i, s, l, a), e.context = qv(null), n = e.current, r = xt(), o = dr(n), i = zn(r, o), i.callback = t ?? null, ur(n, i, o), e.current.lanes = o, ms(e, o, r), Rt(e, r), e
}

function va(e, t, n, r) {
    var o = t.current, i = xt(), s = dr(o);
    return n = qv(n), t.context === null ? t.context = n : t.pendingContext = n, t = zn(i, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ur(o, t, s), e !== null && (fn(e, o, s, i), sl(e, o, s)), s
}

function Fl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function vm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function uf(e, t) {
    vm(e, t), (e = e.alternate) && vm(e, t)
}

function vb() {
    return null
}

var Jv = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function cf(e) {
    this._internalRoot = e
}

ya.prototype.render = cf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(z(409));
    va(e, t, null, null)
};
ya.prototype.unmount = cf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dr(function () {
            va(null, e, null, null)
        }), t[Wn] = null
    }
};

function ya(e) {
    this._internalRoot = e
}

ya.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Tg();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++) ;
        Zn.splice(n, 0, e), n === 0 && Og(e)
    }
};

function df(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ym() {
}

function yb(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Fl(s);
                i.call(u)
            }
        }
        var s = Zv(t, r, e, 0, null, !1, !1, "", ym);
        return e._reactRootContainer = s, e[Wn] = s.current, Qi(e.nodeType === 8 ? e.parentNode : e), Dr(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = Fl(a);
            l.call(u)
        }
    }
    var a = af(e, 0, !1, null, null, !1, !1, "", ym);
    return e._reactRootContainer = a, e[Wn] = a.current, Qi(e.nodeType === 8 ? e.parentNode : e), Dr(function () {
        va(t, a, n, r)
    }), a
}

function ba(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function () {
                var a = Fl(s);
                l.call(a)
            }
        }
        va(t, s, e, o)
    } else s = yb(n, t, e, o, r);
    return Fl(s)
}

Pg = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = bi(t.pendingLanes);
                n !== 0 && (Td(t, n | 1), Rt(t, We()), !(fe & 6) && (Lo = We() + 500, br()))
            }
            break;
        case 13:
            Dr(function () {
                var r = Un(e, 1);
                if (r !== null) {
                    var o = xt();
                    fn(r, e, 1, o)
                }
            }), uf(e, 1)
    }
};
Md = function (e) {
    if (e.tag === 13) {
        var t = Un(e, 134217728);
        if (t !== null) {
            var n = xt();
            fn(t, e, 134217728, n)
        }
        uf(e, 134217728)
    }
};
$g = function (e) {
    if (e.tag === 13) {
        var t = dr(e), n = Un(e, t);
        if (n !== null) {
            var r = xt();
            fn(n, e, t, r)
        }
        uf(e, t)
    }
};
Tg = function () {
    return xe
};
Mg = function (e, t) {
    var n = xe;
    try {
        return xe = e, t()
    } finally {
        xe = n
    }
};
bc = function (e, t, n) {
    switch (t) {
        case"input":
            if (pc(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ca(r);
                        if (!o) throw Error(z(90));
                        lg(r), pc(r, o)
                    }
                }
            }
            break;
        case"textarea":
            ug(e, n);
            break;
        case"select":
            t = n.value, t != null && xo(e, !!n.multiple, t, !1)
    }
};
gg = rf;
vg = Dr;
var xb = {usingClientEntryPoint: !1, Events: [gs, fo, ca, mg, hg, rf]},
    ui = {findFiberByHostInstance: Pr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, bb = {
        bundleType: ui.bundleType,
        version: ui.version,
        rendererPackageName: ui.rendererPackageName,
        rendererConfig: ui.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Kn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = bg(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ui.findFiberByHostInstance || vb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ws.isDisabled && Ws.supportsFiber) try {
        sa = Ws.inject(bb), kn = Ws
    } catch {
    }
}
Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xb;
Ft.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!df(t)) throw Error(z(200));
    return gb(e, t, null, n)
};
Ft.createRoot = function (e, t) {
    if (!df(e)) throw Error(z(299));
    var n = !1, r = "", o = Jv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = af(e, 1, !1, null, null, n, !1, r, o), e[Wn] = t.current, Qi(e.nodeType === 8 ? e.parentNode : e), new cf(t)
};
Ft.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
    return e = bg(t), e = e === null ? null : e.stateNode, e
};
Ft.flushSync = function (e) {
    return Dr(e)
};
Ft.hydrate = function (e, t, n) {
    if (!xa(t)) throw Error(z(200));
    return ba(null, e, t, !0, n)
};
Ft.hydrateRoot = function (e, t, n) {
    if (!df(e)) throw Error(z(405));
    var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Jv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zv(t, null, e, 1, n ?? null, o, !1, i, s), e[Wn] = t.current, Qi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ya(t)
};
Ft.render = function (e, t, n) {
    if (!xa(t)) throw Error(z(200));
    return ba(null, e, t, !1, n)
};
Ft.unmountComponentAtNode = function (e) {
    if (!xa(e)) throw Error(z(40));
    return e._reactRootContainer ? (Dr(function () {
        ba(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Wn] = null
        })
    }), !0) : !1
};
Ft.unstable_batchedUpdates = rf;
Ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!xa(n)) throw Error(z(200));
    if (e == null || e._reactInternals === void 0) throw Error(z(38));
    return ba(e, t, n, !1, r)
};
Ft.version = "18.2.0-next-9e3b772b8-20220608";

function e0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)
    } catch (e) {
        console.error(e)
    }
}

e0(), Zh.exports = Ft;
var Ca = Zh.exports;
const Us = Fh(Ca);
var t0, xm = Ca;
t0 = xm.createRoot, xm.hydrateRoot;

function x() {
    return x = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, x.apply(this, arguments)
}

function jn(e) {
    return e !== null && typeof e == "object" && e.constructor === Object
}

function n0(e) {
    if (!jn(e)) return e;
    const t = {};
    return Object.keys(e).forEach(n => {
        t[n] = n0(e[n])
    }), t
}

function mt(e, t, n = {clone: !0}) {
    const r = n.clone ? x({}, e) : e;
    return jn(e) && jn(t) && Object.keys(t).forEach(o => {
        o !== "__proto__" && (jn(t[o]) && o in e && jn(e[o]) ? r[o] = mt(e[o], t[o], n) : n.clone ? r[o] = jn(t[o]) ? n0(t[o]) : t[o] : r[o] = t[o])
    }), r
}

function gr(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}

var Se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff = Symbol.for("react.element"), pf = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"),
    Sa = Symbol.for("react.strict_mode"), ka = Symbol.for("react.profiler"), Ea = Symbol.for("react.provider"),
    Ra = Symbol.for("react.context"), Cb = Symbol.for("react.server_context"), Pa = Symbol.for("react.forward_ref"),
    $a = Symbol.for("react.suspense"), Ta = Symbol.for("react.suspense_list"), Ma = Symbol.for("react.memo"),
    Oa = Symbol.for("react.lazy"), wb = Symbol.for("react.offscreen"), r0;
r0 = Symbol.for("react.module.reference");

function tn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case ff:
                switch (e = e.type, e) {
                    case wa:
                    case ka:
                    case Sa:
                    case $a:
                    case Ta:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Cb:
                            case Ra:
                            case Pa:
                            case Oa:
                            case Ma:
                            case Ea:
                                return e;
                            default:
                                return t
                        }
                }
            case pf:
                return t
        }
    }
}

Se.ContextConsumer = Ra;
Se.ContextProvider = Ea;
Se.Element = ff;
Se.ForwardRef = Pa;
Se.Fragment = wa;
Se.Lazy = Oa;
Se.Memo = Ma;
Se.Portal = pf;
Se.Profiler = ka;
Se.StrictMode = Sa;
Se.Suspense = $a;
Se.SuspenseList = Ta;
Se.isAsyncMode = function () {
    return !1
};
Se.isConcurrentMode = function () {
    return !1
};
Se.isContextConsumer = function (e) {
    return tn(e) === Ra
};
Se.isContextProvider = function (e) {
    return tn(e) === Ea
};
Se.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ff
};
Se.isForwardRef = function (e) {
    return tn(e) === Pa
};
Se.isFragment = function (e) {
    return tn(e) === wa
};
Se.isLazy = function (e) {
    return tn(e) === Oa
};
Se.isMemo = function (e) {
    return tn(e) === Ma
};
Se.isPortal = function (e) {
    return tn(e) === pf
};
Se.isProfiler = function (e) {
    return tn(e) === ka
};
Se.isStrictMode = function (e) {
    return tn(e) === Sa
};
Se.isSuspense = function (e) {
    return tn(e) === $a
};
Se.isSuspenseList = function (e) {
    return tn(e) === Ta
};
Se.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === wa || e === ka || e === Sa || e === $a || e === Ta || e === wb || typeof e == "object" && e !== null && (e.$$typeof === Oa || e.$$typeof === Ma || e.$$typeof === Ea || e.$$typeof === Ra || e.$$typeof === Pa || e.$$typeof === r0 || e.getModuleId !== void 0)
};
Se.typeOf = tn;

function V(e) {
    if (typeof e != "string") throw new Error(gr(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function Jc(...e) {
    return e.reduce((t, n) => n == null ? t : function (...o) {
        t.apply(this, o), n.apply(this, o)
    }, () => {
    })
}

function Ia(e, t = 166) {
    let n;

    function r(...o) {
        const i = () => {
            e.apply(this, o)
        };
        clearTimeout(n), n = setTimeout(i, t)
    }

    return r.clear = () => {
        clearTimeout(n)
    }, r
}

function Sb(e, t) {
    return () => null
}

function Ni(e, t) {
    var n, r;
    return h.isValidElement(e) && t.indexOf((n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1
}

function qe(e) {
    return e && e.ownerDocument || document
}

function $n(e) {
    return qe(e).defaultView || window
}

function kb(e, t) {
    return () => null
}

function Wl(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}

const Eb = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Dt = Eb;
let bm = 0;

function Rb(e) {
    const [t, n] = h.useState(e), r = e || t;
    return h.useEffect(() => {
        t == null && (bm += 1, n(`mui-${bm}`))
    }, [t]), r
}

const Cm = Bi["useId".toString()];

function ys(e) {
    if (Cm !== void 0) {
        const t = Cm();
        return e ?? t
    }
    return Rb(e)
}

function Pb(e, t, n, r, o) {
    return null
}

function Ul({controlled: e, default: t, name: n, state: r = "value"}) {
    const {current: o} = h.useRef(e !== void 0), [i, s] = h.useState(t), l = o ? e : i, a = h.useCallback(u => {
        o || s(u)
    }, []);
    return [l, a]
}

function un(e) {
    const t = h.useRef(e);
    return Dt(() => {
        t.current = e
    }), h.useRef((...n) => (0, t.current)(...n)).current
}

function Le(...e) {
    return h.useMemo(() => e.every(t => t == null) ? null : t => {
        e.forEach(n => {
            Wl(n, t)
        })
    }, e)
}

let Na = !0, ed = !1, wm;
const $b = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0
};

function Tb(e) {
    const {type: t, tagName: n} = e;
    return !!(n === "INPUT" && $b[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable)
}

function Mb(e) {
    e.metaKey || e.altKey || e.ctrlKey || (Na = !0)
}

function Xu() {
    Na = !1
}

function Ob() {
    this.visibilityState === "hidden" && ed && (Na = !0)
}

function Ib(e) {
    e.addEventListener("keydown", Mb, !0), e.addEventListener("mousedown", Xu, !0), e.addEventListener("pointerdown", Xu, !0), e.addEventListener("touchstart", Xu, !0), e.addEventListener("visibilitychange", Ob, !0)
}

function Nb(e) {
    const {target: t} = e;
    try {
        return t.matches(":focus-visible")
    } catch {
    }
    return Na || Tb(t)
}

function La() {
    const e = h.useCallback(o => {
        o != null && Ib(o.ownerDocument)
    }, []), t = h.useRef(!1);

    function n() {
        return t.current ? (ed = !0, window.clearTimeout(wm), wm = window.setTimeout(() => {
            ed = !1
        }, 100), t.current = !1, !0) : !1
    }

    function r(o) {
        return Nb(o) ? (t.current = !0, !0) : !1
    }

    return {isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e}
}

function o0(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t)
}

function mf(e, t) {
    const n = x({}, t);
    return Object.keys(e).forEach(r => {
        if (r.toString().match(/^(components|slots)$/)) n[r] = x({}, e[r], n[r]); else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[r] || {}, i = t[r];
            n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = x({}, i), Object.keys(o).forEach(s => {
                n[r][s] = mf(o[s], i[s])
            }))
        } else n[r] === void 0 && (n[r] = e[r])
    }), n
}

function J(e, t, n = void 0) {
    const r = {};
    return Object.keys(e).forEach(o => {
        r[o] = e[o].reduce((i, s) => {
            if (s) {
                const l = t(s);
                l !== "" && i.push(l), n && n[s] && i.push(n[s])
            }
            return i
        }, []).join(" ")
    }), r
}

const Sm = e => e, Lb = () => {
    let e = Sm;
    return {
        configure(t) {
            e = t
        }, generate(t) {
            return e(t)
        }, reset() {
            e = Sm
        }
    }
}, jb = Lb(), hf = jb, _b = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
};

function q(e, t, n = "Mui") {
    const r = _b[t];
    return r ? `${n}-${r}` : `${hf.generate(e)}-${t}`
}

function ee(e, t, n = "Mui") {
    const r = {};
    return t.forEach(o => {
        r[o] = q(e, o, n)
    }), r
}

const Br = "$$material";

function W(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function i0(e) {
    var t = Object.create(null);
    return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}

var Ab = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    zb = i0(function (e) {
        return Ab.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    });

function Db(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function Bb(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}

var Fb = function () {
        function e(n) {
            var r = this;
            this._insertTag = function (o) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o)
            }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
        }

        var t = e.prototype;
        return t.hydrate = function (r) {
            r.forEach(this._insertTag)
        }, t.insert = function (r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Bb(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = Db(o);
                try {
                    i.insertRule(r, i.cssRules.length)
                } catch {
                }
            } else o.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function () {
            this.tags.forEach(function (r) {
                return r.parentNode && r.parentNode.removeChild(r)
            }), this.tags = [], this.ctr = 0
        }, e
    }(), ft = "-ms-", Vl = "-moz-", he = "-webkit-", s0 = "comm", gf = "rule", vf = "decl", Wb = "@import",
    l0 = "@keyframes", Ub = "@layer", Vb = Math.abs, ja = String.fromCharCode, Hb = Object.assign;

function Kb(e, t) {
    return st(e, 0) ^ 45 ? (((t << 2 ^ st(e, 0)) << 2 ^ st(e, 1)) << 2 ^ st(e, 2)) << 2 ^ st(e, 3) : 0
}

function a0(e) {
    return e.trim()
}

function Gb(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}

function ge(e, t, n) {
    return e.replace(t, n)
}

function td(e, t) {
    return e.indexOf(t)
}

function st(e, t) {
    return e.charCodeAt(t) | 0
}

function os(e, t, n) {
    return e.slice(t, n)
}

function xn(e) {
    return e.length
}

function yf(e) {
    return e.length
}

function Vs(e, t) {
    return t.push(e), e
}

function Xb(e, t) {
    return e.map(t).join("")
}

var _a = 1, jo = 1, u0 = 0, Tt = 0, Ve = 0, Qo = "";

function Aa(e, t, n, r, o, i, s) {
    return {value: e, root: t, parent: n, type: r, props: o, children: i, line: _a, column: jo, length: s, return: ""}
}

function ci(e, t) {
    return Hb(Aa("", null, null, "", null, null, 0), e, {length: -e.length}, t)
}

function Qb() {
    return Ve
}

function Yb() {
    return Ve = Tt > 0 ? st(Qo, --Tt) : 0, jo--, Ve === 10 && (jo = 1, _a--), Ve
}

function At() {
    return Ve = Tt < u0 ? st(Qo, Tt++) : 0, jo++, Ve === 10 && (jo = 1, _a++), Ve
}

function Rn() {
    return st(Qo, Tt)
}

function pl() {
    return Tt
}

function xs(e, t) {
    return os(Qo, e, t)
}

function is(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function c0(e) {
    return _a = jo = 1, u0 = xn(Qo = e), Tt = 0, []
}

function d0(e) {
    return Qo = "", e
}

function ml(e) {
    return a0(xs(Tt - 1, nd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function qb(e) {
    for (; (Ve = Rn()) && Ve < 33;) At();
    return is(e) > 2 || is(Ve) > 3 ? "" : " "
}

function Zb(e, t) {
    for (; --t && At() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97);) ;
    return xs(e, pl() + (t < 6 && Rn() == 32 && At() == 32))
}

function nd(e) {
    for (; At();) switch (Ve) {
        case e:
            return Tt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && nd(Ve);
            break;
        case 40:
            e === 41 && nd(e);
            break;
        case 92:
            At();
            break
    }
    return Tt
}

function Jb(e, t) {
    for (; At() && e + Ve !== 47 + 10;) if (e + Ve === 42 + 42 && Rn() === 47) break;
    return "/*" + xs(t, Tt - 1) + "*" + ja(e === 47 ? e : At())
}

function eC(e) {
    for (; !is(Rn());) At();
    return xs(e, Tt)
}

function tC(e) {
    return d0(hl("", null, null, null, [""], e = c0(e), 0, [0], e))
}

function hl(e, t, n, r, o, i, s, l, a) {
    for (var u = 0, c = 0, d = s, p = 0, w = 0, v = 0, y = 1, S = 1, f = 1, m = 0, g = "", b = o, E = i, R = r, k = g; S;) switch (v = m, m = At()) {
        case 40:
            if (v != 108 && st(k, d - 1) == 58) {
                td(k += ge(ml(m), "&", "&\f"), "&\f") != -1 && (f = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            k += ml(m);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            k += qb(v);
            break;
        case 92:
            k += Zb(pl() - 1, 7);
            continue;
        case 47:
            switch (Rn()) {
                case 42:
                case 47:
                    Vs(nC(Jb(At(), pl()), t, n), a);
                    break;
                default:
                    k += "/"
            }
            break;
        case 123 * y:
            l[u++] = xn(k) * f;
        case 125 * y:
        case 59:
        case 0:
            switch (m) {
                case 0:
                case 125:
                    S = 0;
                case 59 + c:
                    f == -1 && (k = ge(k, /\f/g, "")), w > 0 && xn(k) - d && Vs(w > 32 ? Em(k + ";", r, n, d - 1) : Em(ge(k, " ", "") + ";", r, n, d - 2), a);
                    break;
                case 59:
                    k += ";";
                default:
                    if (Vs(R = km(k, t, n, u, c, o, l, g, b = [], E = [], d), i), m === 123) if (c === 0) hl(k, t, R, R, b, i, d, l, E); else switch (p === 99 && st(k, 3) === 110 ? 100 : p) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            hl(e, R, R, r && Vs(km(e, R, R, 0, 0, o, l, g, o, b = [], d), E), o, E, d, l, r ? b : E);
                            break;
                        default:
                            hl(k, R, R, R, [""], E, 0, l, E)
                    }
            }
            u = c = w = 0, y = f = 1, g = k = "", d = s;
            break;
        case 58:
            d = 1 + xn(k), w = v;
        default:
            if (y < 1) {
                if (m == 123) --y; else if (m == 125 && y++ == 0 && Yb() == 125) continue
            }
            switch (k += ja(m), m * y) {
                case 38:
                    f = c > 0 ? 1 : (k += "\f", -1);
                    break;
                case 44:
                    l[u++] = (xn(k) - 1) * f, f = 1;
                    break;
                case 64:
                    Rn() === 45 && (k += ml(At())), p = Rn(), c = d = xn(g = k += eC(pl())), m++;
                    break;
                case 45:
                    v === 45 && xn(k) == 2 && (y = 0)
            }
    }
    return i
}

function km(e, t, n, r, o, i, s, l, a, u, c) {
    for (var d = o - 1, p = o === 0 ? i : [""], w = yf(p), v = 0, y = 0, S = 0; v < r; ++v) for (var f = 0, m = os(e, d + 1, d = Vb(y = s[v])), g = e; f < w; ++f) (g = a0(y > 0 ? p[f] + " " + m : ge(m, /&\f/g, p[f]))) && (a[S++] = g);
    return Aa(e, t, n, o === 0 ? gf : l, a, u, c)
}

function nC(e, t, n) {
    return Aa(e, t, n, s0, ja(Qb()), os(e, 2, -2), 0)
}

function Em(e, t, n, r) {
    return Aa(e, t, n, vf, os(e, 0, r), os(e, r + 1, -1), r)
}

function Eo(e, t) {
    for (var n = "", r = yf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n
}

function rC(e, t, n, r) {
    switch (e.type) {
        case Ub:
            if (e.children.length) break;
        case Wb:
        case vf:
            return e.return = e.return || e.value;
        case s0:
            return "";
        case l0:
            return e.return = e.value + "{" + Eo(e.children, r) + "}";
        case gf:
            e.value = e.props.join(",")
    }
    return xn(n = Eo(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function oC(e) {
    var t = yf(e);
    return function (n, r, o, i) {
        for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
        return s
    }
}

function iC(e) {
    return function (t) {
        t.root || (t = t.return) && e(t)
    }
}

var sC = function (t, n, r) {
    for (var o = 0, i = 0; o = i, i = Rn(), o === 38 && i === 12 && (n[r] = 1), !is(i);) At();
    return xs(t, Tt)
}, lC = function (t, n) {
    var r = -1, o = 44;
    do switch (is(o)) {
        case 0:
            o === 38 && Rn() === 12 && (n[r] = 1), t[r] += sC(Tt - 1, n, r);
            break;
        case 2:
            t[r] += ml(o);
            break;
        case 4:
            if (o === 44) {
                t[++r] = Rn() === 58 ? "&\f" : "", n[r] = t[r].length;
                break
            }
        default:
            t[r] += ja(o)
    } while (o = At());
    return t
}, aC = function (t, n) {
    return d0(lC(c0(t), n))
}, Rm = new WeakMap, uC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";) if (r = r.parent, !r) return;
        if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Rm.get(r)) && !o) {
            Rm.set(t, !0);
            for (var i = [], s = aC(n, i), l = r.props, a = 0, u = 0; a < s.length; a++) for (var c = 0; c < l.length; c++, u++) t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a]
        }
    }
}, cC = function (t) {
    if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
    }
};

function f0(e, t) {
    switch (Kb(e, t)) {
        case 5103:
            return he + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return he + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return he + e + Vl + e + ft + e + e;
        case 6828:
        case 4268:
            return he + e + ft + e + e;
        case 6165:
            return he + e + ft + "flex-" + e + e;
        case 5187:
            return he + e + ge(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + ft + "flex-$1$2") + e;
        case 5443:
            return he + e + ft + "flex-item-" + ge(e, /flex-|-self/, "") + e;
        case 4675:
            return he + e + ft + "flex-line-pack" + ge(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return he + e + ft + ge(e, "shrink", "negative") + e;
        case 5292:
            return he + e + ft + ge(e, "basis", "preferred-size") + e;
        case 6060:
            return he + "box-" + ge(e, "-grow", "") + he + e + ft + ge(e, "grow", "positive") + e;
        case 4554:
            return he + ge(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
        case 6187:
            return ge(ge(ge(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return ge(e, /(image-set\([^]*)/, he + "$1$`$1");
        case 4968:
            return ge(ge(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return ge(e, /(.+)-inline(.+)/, he + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (xn(e) - 1 - t > 6) switch (st(e, t + 1)) {
                case 109:
                    if (st(e, t + 4) !== 45) break;
                case 102:
                    return ge(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Vl + (st(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~td(e, "stretch") ? f0(ge(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (st(e, t + 1) !== 115) break;
        case 6444:
            switch (st(e, xn(e) - 3 - (~td(e, "!important") && 10))) {
                case 107:
                    return ge(e, ":", ":" + he) + e;
                case 101:
                    return ge(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (st(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + ft + "$2box$3") + e
            }
            break;
        case 5936:
            switch (st(e, t + 11)) {
                case 114:
                    return he + e + ft + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return he + e + ft + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return he + e + ft + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return he + e + ft + e + e
    }
    return e
}

var dC = function (t, n, r, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
        case vf:
            t.return = f0(t.value, t.length);
            break;
        case l0:
            return Eo([ci(t, {value: ge(t.value, "@", "@" + he)})], o);
        case gf:
            if (t.length) return Xb(t.props, function (i) {
                switch (Gb(i, /(::plac\w+|:read-\w+)/)) {
                    case":read-only":
                    case":read-write":
                        return Eo([ci(t, {props: [ge(i, /:(read-\w+)/, ":" + Vl + "$1")]})], o);
                    case"::placeholder":
                        return Eo([ci(t, {props: [ge(i, /:(plac\w+)/, ":" + he + "input-$1")]}), ci(t, {props: [ge(i, /:(plac\w+)/, ":" + Vl + "$1")]}), ci(t, {props: [ge(i, /:(plac\w+)/, ft + "input-$1")]})], o)
                }
                return ""
            })
    }
}, fC = [dC], pC = function (t) {
    var n = t.key;
    if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function (y) {
            var S = y.getAttribute("data-emotion");
            S.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""))
        })
    }
    var o = t.stylisPlugins || fC, i = {}, s, l = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (y) {
        for (var S = y.getAttribute("data-emotion").split(" "), f = 1; f < S.length; f++) i[S[f]] = !0;
        l.push(y)
    });
    var a, u = [uC, cC];
    {
        var c, d = [rC, iC(function (y) {
            c.insert(y)
        })], p = oC(u.concat(o, d)), w = function (S) {
            return Eo(tC(S), p)
        };
        a = function (S, f, m, g) {
            c = m, w(S ? S + "{" + f.styles + "}" : f.styles), g && (v.inserted[f.name] = !0)
        }
    }
    var v = {
        key: n,
        sheet: new Fb({
            key: n,
            container: s,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: i,
        registered: {},
        insert: a
    };
    return v.sheet.hydrate(l), v
}, p0 = {exports: {}}, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt = typeof Symbol == "function" && Symbol.for, xf = nt ? Symbol.for("react.element") : 60103,
    bf = nt ? Symbol.for("react.portal") : 60106, za = nt ? Symbol.for("react.fragment") : 60107,
    Da = nt ? Symbol.for("react.strict_mode") : 60108, Ba = nt ? Symbol.for("react.profiler") : 60114,
    Fa = nt ? Symbol.for("react.provider") : 60109, Wa = nt ? Symbol.for("react.context") : 60110,
    Cf = nt ? Symbol.for("react.async_mode") : 60111, Ua = nt ? Symbol.for("react.concurrent_mode") : 60111,
    Va = nt ? Symbol.for("react.forward_ref") : 60112, Ha = nt ? Symbol.for("react.suspense") : 60113,
    mC = nt ? Symbol.for("react.suspense_list") : 60120, Ka = nt ? Symbol.for("react.memo") : 60115,
    Ga = nt ? Symbol.for("react.lazy") : 60116, hC = nt ? Symbol.for("react.block") : 60121,
    gC = nt ? Symbol.for("react.fundamental") : 60117, vC = nt ? Symbol.for("react.responder") : 60118,
    yC = nt ? Symbol.for("react.scope") : 60119;

function Ut(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case xf:
                switch (e = e.type, e) {
                    case Cf:
                    case Ua:
                    case za:
                    case Ba:
                    case Da:
                    case Ha:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Wa:
                            case Va:
                            case Ga:
                            case Ka:
                            case Fa:
                                return e;
                            default:
                                return t
                        }
                }
            case bf:
                return t
        }
    }
}

function m0(e) {
    return Ut(e) === Ua
}

be.AsyncMode = Cf;
be.ConcurrentMode = Ua;
be.ContextConsumer = Wa;
be.ContextProvider = Fa;
be.Element = xf;
be.ForwardRef = Va;
be.Fragment = za;
be.Lazy = Ga;
be.Memo = Ka;
be.Portal = bf;
be.Profiler = Ba;
be.StrictMode = Da;
be.Suspense = Ha;
be.isAsyncMode = function (e) {
    return m0(e) || Ut(e) === Cf
};
be.isConcurrentMode = m0;
be.isContextConsumer = function (e) {
    return Ut(e) === Wa
};
be.isContextProvider = function (e) {
    return Ut(e) === Fa
};
be.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === xf
};
be.isForwardRef = function (e) {
    return Ut(e) === Va
};
be.isFragment = function (e) {
    return Ut(e) === za
};
be.isLazy = function (e) {
    return Ut(e) === Ga
};
be.isMemo = function (e) {
    return Ut(e) === Ka
};
be.isPortal = function (e) {
    return Ut(e) === bf
};
be.isProfiler = function (e) {
    return Ut(e) === Ba
};
be.isStrictMode = function (e) {
    return Ut(e) === Da
};
be.isSuspense = function (e) {
    return Ut(e) === Ha
};
be.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === za || e === Ua || e === Ba || e === Da || e === Ha || e === mC || typeof e == "object" && e !== null && (e.$$typeof === Ga || e.$$typeof === Ka || e.$$typeof === Fa || e.$$typeof === Wa || e.$$typeof === Va || e.$$typeof === gC || e.$$typeof === vC || e.$$typeof === yC || e.$$typeof === hC)
};
be.typeOf = Ut;
p0.exports = be;
var xC = p0.exports, h0 = xC, bC = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0},
    CC = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, g0 = {};
g0[h0.ForwardRef] = bC;
g0[h0.Memo] = CC;
var wC = !0;

function SC(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }), r
}

var v0 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || wC === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
}, y0 = function (t, n, r) {
    v0(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
        var i = n;
        do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
    }
};

function kC(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}

var EC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}, RC = /[A-Z]|^ms/g, PC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, x0 = function (t) {
    return t.charCodeAt(1) === 45
}, Pm = function (t) {
    return t != null && typeof t != "boolean"
}, Qu = i0(function (e) {
    return x0(e) ? e : e.replace(RC, "-$&").toLowerCase()
}), $m = function (t, n) {
    switch (t) {
        case"animation":
        case"animationName":
            if (typeof n == "string") return n.replace(PC, function (r, o, i) {
                return bn = {name: o, styles: i, next: bn}, o
            })
    }
    return EC[t] !== 1 && !x0(t) && typeof n == "number" && n !== 0 ? n + "px" : n
};

function ss(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case"boolean":
            return "";
        case"object": {
            if (n.anim === 1) return bn = {name: n.name, styles: n.styles, next: bn}, n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0) for (; r !== void 0;) bn = {name: r.name, styles: r.styles, next: bn}, r = r.next;
                var o = n.styles + ";";
                return o
            }
            return $C(e, t, n)
        }
        case"function": {
            if (e !== void 0) {
                var i = bn, s = n(e);
                return bn = i, ss(e, t, s)
            }
            break
        }
    }
    if (t == null) return n;
    var l = t[n];
    return l !== void 0 ? l : n
}

function $C(e, t, n) {
    var r = "";
    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += ss(e, t, n[o]) + ";"; else for (var i in n) {
        var s = n[i];
        if (typeof s != "object") t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Pm(s) && (r += Qu(i) + ":" + $m(i, s) + ";"); else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var l = 0; l < s.length; l++) Pm(s[l]) && (r += Qu(i) + ":" + $m(i, s[l]) + ";"); else {
            var a = ss(e, t, s);
            switch (i) {
                case"animation":
                case"animationName": {
                    r += Qu(i) + ":" + a + ";";
                    break
                }
                default:
                    r += i + "{" + a + "}"
            }
        }
    }
    return r
}

var Tm = /label:\s*([^\s;\n{]+)\s*(;|$)/g, bn, wf = function (t, n, r) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var o = !0, i = "";
        bn = void 0;
        var s = t[0];
        s == null || s.raw === void 0 ? (o = !1, i += ss(r, n, s)) : i += s[0];
        for (var l = 1; l < t.length; l++) i += ss(r, n, t[l]), o && (i += s[l]);
        Tm.lastIndex = 0;
        for (var a = "", u; (u = Tm.exec(i)) !== null;) a += "-" + u[1];
        var c = kC(i) + a;
        return {name: c, styles: i, next: bn}
    }, TC = function (t) {
        return t()
    }, b0 = Bi["useInsertionEffect"] ? Bi["useInsertionEffect"] : !1, MC = b0 || TC, Mm = b0 || h.useLayoutEffect,
    C0 = h.createContext(typeof HTMLElement < "u" ? pC({key: "css"}) : null);
C0.Provider;
var w0 = function (t) {
    return h.forwardRef(function (n, r) {
        var o = h.useContext(C0);
        return t(n, o, r)
    })
}, Xa = h.createContext({}), OC = w0(function (e, t) {
    var n = e.styles, r = wf([n], void 0, h.useContext(Xa)), o = h.useRef();
    return Mm(function () {
        var i = t.key + "-global", s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
        }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
        return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function () {
            s.flush()
        }
    }, [t]), Mm(function () {
        var i = o.current, s = i[0], l = i[1];
        if (l) {
            i[1] = !1;
            return
        }
        if (r.next !== void 0 && y0(t, r.next, !0), s.tags.length) {
            var a = s.tags[s.tags.length - 1].nextElementSibling;
            s.before = a, s.flush()
        }
        t.insert("", r, s, !1)
    }, [t, r.name]), null
});

function IC() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return wf(t)
}

var Sf = function () {
        var t = IC.apply(void 0, arguments), n = "animation-" + t.name;
        return {
            name: n, styles: "@keyframes " + n + "{" + t.styles + "}", anim: 1, toString: function () {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
        }
    }, NC = zb, LC = function (t) {
        return t !== "theme"
    }, Om = function (t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? NC : LC
    }, Im = function (t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o = t.__emotion_forwardProp && i ? function (s) {
                return t.__emotion_forwardProp(s) && i(s)
            } : i
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
    }, jC = function (t) {
        var n = t.cache, r = t.serialized, o = t.isStringTag;
        return v0(n, r, o), MC(function () {
            return y0(n, r, o)
        }), null
    }, _C = function e(t, n) {
        var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
        n !== void 0 && (i = n.label, s = n.target);
        var l = Im(t, n, r), a = l || Om(o), u = !a("as");
        return function () {
            var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c); else {
                d.push(c[0][0]);
                for (var p = c.length, w = 1; w < p; w++) d.push(c[w], c[0][w])
            }
            var v = w0(function (y, S, f) {
                var m = u && y.as || o, g = "", b = [], E = y;
                if (y.theme == null) {
                    E = {};
                    for (var R in y) E[R] = y[R];
                    E.theme = h.useContext(Xa)
                }
                typeof y.className == "string" ? g = SC(S.registered, b, y.className) : y.className != null && (g = y.className + " ");
                var k = wf(d.concat(b), S.registered, E);
                g += S.key + "-" + k.name, s !== void 0 && (g += " " + s);
                var T = u && l === void 0 ? Om(m) : a, M = {};
                for (var P in y) u && P === "as" || T(P) && (M[P] = y[P]);
                return M.className = g, M.ref = f, h.createElement(h.Fragment, null, h.createElement(jC, {
                    cache: S,
                    serialized: k,
                    isStringTag: typeof m == "string"
                }), h.createElement(m, M))
            });
            return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = l, Object.defineProperty(v, "toString", {
                value: function () {
                    return "." + s
                }
            }), v.withComponent = function (y, S) {
                return e(y, x({}, n, S, {shouldForwardProp: Im(v, S, !0)})).apply(void 0, d)
            }, v
        }
    },
    AC = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    rd = _C.bind();
AC.forEach(function (e) {
    rd[e] = rd(e)
});

function zC(e) {
    return e == null || Object.keys(e).length === 0
}

function DC(e) {
    const {styles: t, defaultTheme: n = {}} = e, r = typeof t == "function" ? o => t(zC(o) ? n : o) : t;
    return C.jsx(OC, {styles: r})
}

/**
 * @mui/styled-engine v5.14.18
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function S0(e, t) {
    return rd(e, t)
}

const BC = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}, FC = ["values", "unit", "step"], WC = e => {
    const t = Object.keys(e).map(n => ({key: n, val: e[n]})) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {[r.key]: r.val}), {})
};

function UC(e) {
    const {values: t = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, unit: n = "px", step: r = 5} = e, o = W(e, FC),
        i = WC(t), s = Object.keys(i);

    function l(p) {
        return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`
    }

    function a(p) {
        return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`
    }

    function u(p, w) {
        const v = s.indexOf(w);
        return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : w) - r / 100}${n})`
    }

    function c(p) {
        return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p)
    }

    function d(p) {
        const w = s.indexOf(p);
        return w === 0 ? l(s[1]) : w === s.length - 1 ? a(s[w]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and")
    }

    return x({keys: s, values: i, up: l, down: a, between: u, only: c, not: d, unit: n}, o)
}

const VC = {borderRadius: 4}, HC = VC;

function Li(e, t) {
    return t ? mt(e, t, {clone: !1}) : e
}

const kf = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
    Nm = {keys: ["xs", "sm", "md", "lg", "xl"], up: e => `@media (min-width:${kf[e]}px)`};

function Mt(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Nm;
        return t.reduce((s, l, a) => (s[i.up(i.keys[a])] = n(t[a]), s), {})
    }
    if (typeof t == "object") {
        const i = r.breakpoints || Nm;
        return Object.keys(t).reduce((s, l) => {
            if (Object.keys(i.values || kf).indexOf(l) !== -1) {
                const a = i.up(l);
                s[a] = n(t[l], l)
            } else {
                const a = l;
                s[a] = t[a]
            }
            return s
        }, {})
    }
    return n(t)
}

function k0(e = {}) {
    var t;
    return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
        const i = e.up(o);
        return r[i] = {}, r
    }, {})) || {}
}

function E0(e, t) {
    return e.reduce((n, r) => {
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r], n
    }, t)
}

function KC(e, ...t) {
    const n = k0(e), r = [n, ...t].reduce((o, i) => mt(o, i), {});
    return E0(Object.keys(n), r)
}

function GC(e, t) {
    if (typeof e != "object") return {};
    const n = {}, r = Object.keys(t);
    return Array.isArray(e) ? r.forEach((o, i) => {
        i < e.length && (n[o] = !0)
    }) : r.forEach(o => {
        e[o] != null && (n[o] = !0)
    }), n
}

function Nr({values: e, breakpoints: t, base: n}) {
    const r = n || GC(e, t), o = Object.keys(r);
    if (o.length === 0) return e;
    let i;
    return o.reduce((s, l, a) => (Array.isArray(e) ? (s[l] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[i], i = l) : s[l] = e, s), {})
}

function _o(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
        if (r != null) return r
    }
    return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e)
}

function Hl(e, t, n, r = n) {
    let o;
    return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = _o(e, n) || r, t && (o = t(o, r, e)), o
}

function ye(e) {
    const {prop: t, cssProperty: n = e.prop, themeKey: r, transform: o} = e, i = s => {
        if (s[t] == null) return null;
        const l = s[t], a = s.theme, u = _o(a, r) || {};
        return Mt(s, l, d => {
            let p = Hl(u, o, d);
            return d === p && typeof d == "string" && (p = Hl(u, o, `${t}${d === "default" ? "" : V(d)}`, d)), n === !1 ? p : {[n]: p}
        })
    };
    return i.propTypes = {}, i.filterProps = [t], i
}

function XC(e) {
    const t = {};
    return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}

const QC = {m: "margin", p: "padding"},
    YC = {t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"]},
    Lm = {marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py"}, qC = XC(e => {
        if (e.length > 2) if (Lm[e]) e = Lm[e]; else return [e];
        const [t, n] = e.split(""), r = QC[t], o = YC[n] || "";
        return Array.isArray(o) ? o.map(i => r + i) : [r + o]
    }),
    Ef = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
    Rf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ef, ...Rf];

function bs(e, t, n, r) {
    var o;
    const i = (o = _o(e, t, !1)) != null ? o : n;
    return typeof i == "number" ? s => typeof s == "string" ? s : i * s : Array.isArray(i) ? s => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
    }
}

function Pf(e) {
    return bs(e, "spacing", 8)
}

function Fr(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t), r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}

function ZC(e, t) {
    return n => e.reduce((r, o) => (r[o] = Fr(t, n), r), {})
}

function JC(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = qC(n), i = ZC(o, r), s = e[n];
    return Mt(e, s, i)
}

function R0(e, t) {
    const n = Pf(e.theme);
    return Object.keys(e).map(r => JC(e, t, r, n)).reduce(Li, {})
}

function _e(e) {
    return R0(e, Ef)
}

_e.propTypes = {};
_e.filterProps = Ef;

function Ae(e) {
    return R0(e, Rf)
}

Ae.propTypes = {};
Ae.filterProps = Rf;

function ew(e = 8) {
    if (e.mui) return e;
    const t = Pf({spacing: e}), n = (...r) => (r.length === 0 ? [1] : r).map(i => {
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s
    }).join(" ");
    return n.mui = !0, n
}

function Qa(...e) {
    const t = e.reduce((r, o) => (o.filterProps.forEach(i => {
        r[i] = o
    }), r), {}), n = r => Object.keys(r).reduce((o, i) => t[i] ? Li(o, t[i](r)) : o, {});
    return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n
}

function wn(e) {
    return typeof e != "number" ? e : `${e}px solid`
}

const tw = ye({prop: "border", themeKey: "borders", transform: wn}),
    nw = ye({prop: "borderTop", themeKey: "borders", transform: wn}),
    rw = ye({prop: "borderRight", themeKey: "borders", transform: wn}),
    ow = ye({prop: "borderBottom", themeKey: "borders", transform: wn}),
    iw = ye({prop: "borderLeft", themeKey: "borders", transform: wn}),
    sw = ye({prop: "borderColor", themeKey: "palette"}), lw = ye({prop: "borderTopColor", themeKey: "palette"}),
    aw = ye({prop: "borderRightColor", themeKey: "palette"}), uw = ye({prop: "borderBottomColor", themeKey: "palette"}),
    cw = ye({prop: "borderLeftColor", themeKey: "palette"}), Ya = e => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = bs(e.theme, "shape.borderRadius", 4), n = r => ({borderRadius: Fr(t, r)});
            return Mt(e, e.borderRadius, n)
        }
        return null
    };
Ya.propTypes = {};
Ya.filterProps = ["borderRadius"];
Qa(tw, nw, rw, ow, iw, sw, lw, aw, uw, cw, Ya);
const qa = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = bs(e.theme, "spacing", 8), n = r => ({gap: Fr(t, r)});
        return Mt(e, e.gap, n)
    }
    return null
};
qa.propTypes = {};
qa.filterProps = ["gap"];
const Za = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = bs(e.theme, "spacing", 8), n = r => ({columnGap: Fr(t, r)});
        return Mt(e, e.columnGap, n)
    }
    return null
};
Za.propTypes = {};
Za.filterProps = ["columnGap"];
const Ja = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = bs(e.theme, "spacing", 8), n = r => ({rowGap: Fr(t, r)});
        return Mt(e, e.rowGap, n)
    }
    return null
};
Ja.propTypes = {};
Ja.filterProps = ["rowGap"];
const dw = ye({prop: "gridColumn"}), fw = ye({prop: "gridRow"}), pw = ye({prop: "gridAutoFlow"}),
    mw = ye({prop: "gridAutoColumns"}), hw = ye({prop: "gridAutoRows"}), gw = ye({prop: "gridTemplateColumns"}),
    vw = ye({prop: "gridTemplateRows"}), yw = ye({prop: "gridTemplateAreas"}), xw = ye({prop: "gridArea"});
Qa(qa, Za, Ja, dw, fw, pw, mw, hw, gw, vw, yw, xw);

function Ro(e, t) {
    return t === "grey" ? t : e
}

const bw = ye({prop: "color", themeKey: "palette", transform: Ro}),
    Cw = ye({prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Ro}),
    ww = ye({prop: "backgroundColor", themeKey: "palette", transform: Ro});
Qa(bw, Cw, ww);

function Lt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e
}

const Sw = ye({prop: "width", transform: Lt}), $f = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = n => {
            var r, o;
            const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || kf[n];
            return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {maxWidth: `${i}${e.theme.breakpoints.unit}`} : {maxWidth: i} : {maxWidth: Lt(n)}
        };
        return Mt(e, e.maxWidth, t)
    }
    return null
};
$f.filterProps = ["maxWidth"];
const kw = ye({prop: "minWidth", transform: Lt}), Ew = ye({prop: "height", transform: Lt}),
    Rw = ye({prop: "maxHeight", transform: Lt}), Pw = ye({prop: "minHeight", transform: Lt});
ye({prop: "size", cssProperty: "width", transform: Lt});
ye({prop: "size", cssProperty: "height", transform: Lt});
const $w = ye({prop: "boxSizing"});
Qa(Sw, $f, kw, Ew, Rw, Pw, $w);
const Tw = {
    border: {themeKey: "borders", transform: wn},
    borderTop: {themeKey: "borders", transform: wn},
    borderRight: {themeKey: "borders", transform: wn},
    borderBottom: {themeKey: "borders", transform: wn},
    borderLeft: {themeKey: "borders", transform: wn},
    borderColor: {themeKey: "palette"},
    borderTopColor: {themeKey: "palette"},
    borderRightColor: {themeKey: "palette"},
    borderBottomColor: {themeKey: "palette"},
    borderLeftColor: {themeKey: "palette"},
    borderRadius: {themeKey: "shape.borderRadius", style: Ya},
    color: {themeKey: "palette", transform: Ro},
    bgcolor: {themeKey: "palette", cssProperty: "backgroundColor", transform: Ro},
    backgroundColor: {themeKey: "palette", transform: Ro},
    p: {style: Ae},
    pt: {style: Ae},
    pr: {style: Ae},
    pb: {style: Ae},
    pl: {style: Ae},
    px: {style: Ae},
    py: {style: Ae},
    padding: {style: Ae},
    paddingTop: {style: Ae},
    paddingRight: {style: Ae},
    paddingBottom: {style: Ae},
    paddingLeft: {style: Ae},
    paddingX: {style: Ae},
    paddingY: {style: Ae},
    paddingInline: {style: Ae},
    paddingInlineStart: {style: Ae},
    paddingInlineEnd: {style: Ae},
    paddingBlock: {style: Ae},
    paddingBlockStart: {style: Ae},
    paddingBlockEnd: {style: Ae},
    m: {style: _e},
    mt: {style: _e},
    mr: {style: _e},
    mb: {style: _e},
    ml: {style: _e},
    mx: {style: _e},
    my: {style: _e},
    margin: {style: _e},
    marginTop: {style: _e},
    marginRight: {style: _e},
    marginBottom: {style: _e},
    marginLeft: {style: _e},
    marginX: {style: _e},
    marginY: {style: _e},
    marginInline: {style: _e},
    marginInlineStart: {style: _e},
    marginInlineEnd: {style: _e},
    marginBlock: {style: _e},
    marginBlockStart: {style: _e},
    marginBlockEnd: {style: _e},
    displayPrint: {cssProperty: !1, transform: e => ({"@media print": {display: e}})},
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {style: qa},
    rowGap: {style: Ja},
    columnGap: {style: Za},
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {themeKey: "zIndex"},
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {themeKey: "shadows"},
    width: {transform: Lt},
    maxWidth: {style: $f},
    minWidth: {transform: Lt},
    height: {transform: Lt},
    maxHeight: {transform: Lt},
    minHeight: {transform: Lt},
    boxSizing: {},
    fontFamily: {themeKey: "typography"},
    fontSize: {themeKey: "typography"},
    fontStyle: {themeKey: "typography"},
    fontWeight: {themeKey: "typography"},
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {cssProperty: !1, themeKey: "typography"}
}, eu = Tw;

function Mw(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
    return e.every(r => n.size === Object.keys(r).length)
}

function Ow(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Iw() {
    function e(n, r, o, i) {
        const s = {[n]: r, theme: o}, l = i[n];
        if (!l) return {[n]: r};
        const {cssProperty: a = n, themeKey: u, transform: c, style: d} = l;
        if (r == null) return null;
        if (u === "typography" && r === "inherit") return {[n]: r};
        const p = _o(o, u) || {};
        return d ? d(s) : Mt(s, r, v => {
            let y = Hl(p, c, v);
            return v === y && typeof v == "string" && (y = Hl(p, c, `${n}${v === "default" ? "" : V(v)}`, v)), a === !1 ? y : {[a]: y}
        })
    }

    function t(n) {
        var r;
        const {sx: o, theme: i = {}} = n || {};
        if (!o) return null;
        const s = (r = i.unstable_sxConfig) != null ? r : eu;

        function l(a) {
            let u = a;
            if (typeof a == "function") u = a(i); else if (typeof a != "object") return a;
            if (!u) return null;
            const c = k0(i.breakpoints), d = Object.keys(c);
            let p = c;
            return Object.keys(u).forEach(w => {
                const v = Ow(u[w], i);
                if (v != null) if (typeof v == "object") if (s[w]) p = Li(p, e(w, v, i, s)); else {
                    const y = Mt({theme: i}, v, S => ({[w]: S}));
                    Mw(y, v) ? p[w] = t({sx: v, theme: i}) : p = Li(p, y)
                } else p = Li(p, e(w, v, i, s))
            }), E0(d, p)
        }

        return Array.isArray(o) ? o.map(l) : l(o)
    }

    return t
}

const P0 = Iw();
P0.filterProps = ["sx"];
const tu = P0, Nw = ["breakpoints", "palette", "spacing", "shape"];

function Cs(e = {}, ...t) {
    const {breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}} = e, s = W(e, Nw), l = UC(n), a = ew(o);
    let u = mt({
        breakpoints: l,
        direction: "ltr",
        components: {},
        palette: x({mode: "light"}, r),
        spacing: a,
        shape: x({}, HC, i)
    }, s);
    return u = t.reduce((c, d) => mt(c, d), u), u.unstable_sxConfig = x({}, eu, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function (d) {
        return tu({sx: d, theme: this})
    }, u
}

function Lw(e) {
    return Object.keys(e).length === 0
}

function nu(e = null) {
    const t = h.useContext(Xa);
    return !t || Lw(t) ? e : t
}

const jw = Cs();

function ru(e = jw) {
    return nu(e)
}

function _w({styles: e, themeId: t, defaultTheme: n = {}}) {
    const r = ru(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
    return C.jsx(DC, {styles: o})
}

const Aw = ["sx"], zw = e => {
    var t, n;
    const r = {systemProps: {}, otherProps: {}},
        o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : eu;
    return Object.keys(e).forEach(i => {
        o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i]
    }), r
};

function ou(e) {
    const {sx: t} = e, n = W(e, Aw), {systemProps: r, otherProps: o} = zw(n);
    let i;
    return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
        const l = t(...s);
        return jn(l) ? x({}, r, l) : r
    } : i = x({}, r, t), x({}, o, {sx: i})
}

function $0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e; else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = $0(e[t])) && (r && (r += " "), r += n); else for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function U() {
    for (var e, t, n = 0, r = ""; n < arguments.length;) (e = arguments[n++]) && (t = $0(e)) && (r && (r += " "), r += t);
    return r
}

const Dw = ["className", "component"];

function Bw(e = {}) {
    const {themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: o} = e,
        i = S0("div", {shouldForwardProp: l => l !== "theme" && l !== "sx" && l !== "as"})(tu);
    return h.forwardRef(function (a, u) {
        const c = ru(n), d = ou(a), {className: p, component: w = "div"} = d, v = W(d, Dw);
        return C.jsx(i, x({as: w, ref: u, className: U(p, o ? o(r) : r), theme: t && c[t] || c}, v))
    })
}

const Fw = ["variant"];

function jm(e) {
    return e.length === 0
}

function T0(e) {
    const {variant: t} = e, n = W(e, Fw);
    let r = t || "";
    return Object.keys(n).sort().forEach(o => {
        o === "color" ? r += jm(r) ? e[o] : V(e[o]) : r += `${jm(r) ? o : V(o)}${V(e[o].toString())}`
    }), r
}

const Ww = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

function Uw(e) {
    return Object.keys(e).length === 0
}

function Vw(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}

const Hw = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null,
    Kl = e => {
        const t = {};
        return e && e.forEach(n => {
            const r = T0(n.props);
            t[r] = n.style
        }), t
    }, Kw = (e, t) => {
        let n = [];
        return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Kl(n)
    }, Gl = (e, t, n) => {
        const {ownerState: r = {}} = e, o = [];
        return n && n.forEach(i => {
            let s = !0;
            Object.keys(i.props).forEach(l => {
                r[l] !== i.props[l] && e[l] !== i.props[l] && (s = !1)
            }), s && o.push(t[T0(i.props)])
        }), o
    }, Gw = (e, t, n, r) => {
        var o;
        const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
        return Gl(e, t, i)
    };

function ji(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}

const Xw = Cs(), Qw = e => e && e.charAt(0).toLowerCase() + e.slice(1);

function gl({defaultTheme: e, theme: t, themeId: n}) {
    return Uw(t) ? e : t[n] || t
}

function Yw(e) {
    return e ? (t, n) => n[e] : null
}

const _m = ({styledArg: e, props: t, defaultTheme: n, themeId: r}) => {
    const o = e(x({}, t, {theme: gl(x({}, t, {defaultTheme: n, themeId: r}))}));
    let i;
    if (o && o.variants && (i = o.variants, delete o.variants), i) {
        const s = Gl(t, Kl(i), i);
        return [o, ...s]
    }
    return o
};

function M0(e = {}) {
    const {themeId: t, defaultTheme: n = Xw, rootShouldForwardProp: r = ji, slotShouldForwardProp: o = ji} = e,
        i = s => tu(x({}, s, {theme: gl(x({}, s, {defaultTheme: n, themeId: t}))}));
    return i.__mui_systemSx = !0, (s, l = {}) => {
        BC(s, b => b.filter(E => !(E != null && E.__mui_systemSx)));
        const {name: a, slot: u, skipVariantsResolver: c, skipSx: d, overridesResolver: p = Yw(Qw(u))} = l,
            w = W(l, Ww), v = c !== void 0 ? c : u && u !== "Root" && u !== "root" || !1, y = d || !1;
        let S, f = ji;
        u === "Root" || u === "root" ? f = r : u ? f = o : Vw(s) && (f = void 0);
        const m = S0(s, x({shouldForwardProp: f, label: S}, w)), g = (b, ...E) => {
            const R = E ? E.map(P => {
                if (typeof P == "function" && P.__emotion_real !== P) return O => _m({
                    styledArg: P,
                    props: O,
                    defaultTheme: n,
                    themeId: t
                });
                if (jn(P)) {
                    let O = P, j;
                    return P && P.variants && (j = P.variants, delete O.variants, O = N => {
                        let A = P;
                        return Gl(N, Kl(j), j).forEach(L => {
                            A = mt(A, L)
                        }), A
                    }), O
                }
                return P
            }) : [];
            let k = b;
            if (jn(b)) {
                let P;
                b && b.variants && (P = b.variants, delete k.variants, k = O => {
                    let j = b;
                    return Gl(O, Kl(P), P).forEach(A => {
                        j = mt(j, A)
                    }), j
                })
            } else typeof b == "function" && b.__emotion_real !== b && (k = P => _m({
                styledArg: b,
                props: P,
                defaultTheme: n,
                themeId: t
            }));
            a && p && R.push(P => {
                const O = gl(x({}, P, {defaultTheme: n, themeId: t})), j = Hw(a, O);
                if (j) {
                    const N = {};
                    return Object.entries(j).forEach(([A, _]) => {
                        N[A] = typeof _ == "function" ? _(x({}, P, {theme: O})) : _
                    }), p(P, N)
                }
                return null
            }), a && !v && R.push(P => {
                const O = gl(x({}, P, {defaultTheme: n, themeId: t}));
                return Gw(P, Kw(a, O), O, a)
            }), y || R.push(i);
            const T = R.length - E.length;
            if (Array.isArray(b) && T > 0) {
                const P = new Array(T).fill("");
                k = [...b, ...P], k.raw = [...b.raw, ...P]
            }
            const M = m(k, ...R);
            return s.muiName && (M.muiName = s.muiName), M
        };
        return m.withConfig && (g.withConfig = m.withConfig), g
    }
}

const qw = M0(), O0 = qw;

function I0(e) {
    const {theme: t, name: n, props: r} = e;
    return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : mf(t.components[n].defaultProps, r)
}

function Tf({props: e, name: t, defaultTheme: n, themeId: r}) {
    let o = ru(n);
    return r && (o = o[r] || o), I0({theme: o, name: t, props: e})
}

function Mf(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n)
}

function Zw(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
}

function Wr(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return Wr(Zw(e));
    const t = e.indexOf("("), n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error(gr(9, e));
    let r = e.substring(t + 1, e.length - 1), o;
    if (n === "color") {
        if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1) throw new Error(gr(10, o))
    } else r = r.split(",");
    return r = r.map(i => parseFloat(i)), {type: n, values: r, colorSpace: o}
}

function iu(e) {
    const {type: t, colorSpace: n} = e;
    let {values: r} = e;
    return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`
}

function Jw(e) {
    e = Wr(e);
    const {values: t} = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o),
        s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let l = "rgb";
    const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
    return e.type === "hsla" && (l += "a", a.push(t[3])), iu({type: l, values: a})
}

function od(e) {
    e = Wr(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Wr(Jw(e)).values : e.values;
    return t = t.map(n => (e.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}

function eS(e, t) {
    const n = od(e), r = od(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}

function Ke(e, t) {
    return e = Wr(e), t = Mf(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, iu(e)
}

function Xl(e, t) {
    if (e = Wr(e), t = Mf(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t; else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return iu(e)
}

function Ql(e, t) {
    if (e = Wr(e), t = Mf(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t; else if (e.type.indexOf("rgb") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t; else if (e.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return iu(e)
}

function tS(e, t = .15) {
    return od(e) > .5 ? Xl(e, t) : Ql(e, t)
}

const nS = h.createContext(null), N0 = nS;

function L0() {
    return h.useContext(N0)
}

const rS = typeof Symbol == "function" && Symbol.for, oS = rS ? Symbol.for("mui.nested") : "__THEME_NESTED__";

function iS(e, t) {
    return typeof t == "function" ? t(e) : x({}, e, t)
}

function sS(e) {
    const {children: t, theme: n} = e, r = L0(), o = h.useMemo(() => {
        const i = r === null ? n : iS(r, n);
        return i != null && (i[oS] = r !== null), i
    }, [n, r]);
    return C.jsx(N0.Provider, {value: o, children: t})
}

const Am = {};

function zm(e, t, n, r = !1) {
    return h.useMemo(() => {
        const o = e && t[e] || t;
        if (typeof n == "function") {
            const i = n(o), s = e ? x({}, t, {[e]: i}) : i;
            return r ? () => s : s
        }
        return e ? x({}, t, {[e]: n}) : x({}, t, n)
    }, [e, t, n, r])
}

function lS(e) {
    const {children: t, theme: n, themeId: r} = e, o = nu(Am), i = L0() || Am, s = zm(r, o, n), l = zm(r, i, n, !0);
    return C.jsx(sS, {theme: l, children: C.jsx(Xa.Provider, {value: s, children: t})})
}

const aS = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], uS = Cs(), cS = O0("div", {
    name: "MuiContainer", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[`maxWidth${V(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters]
    }
}), dS = e => Tf({props: e, name: "MuiContainer", defaultTheme: uS}), fS = (e, t) => {
    const n = a => q(t, a), {classes: r, fixed: o, disableGutters: i, maxWidth: s} = e,
        l = {root: ["root", s && `maxWidth${V(String(s))}`, o && "fixed", i && "disableGutters"]};
    return J(l, n, r)
};

function pS(e = {}) {
    const {createStyledComponent: t = cS, useThemeProps: n = dS, componentName: r = "MuiContainer"} = e,
        o = t(({theme: s, ownerState: l}) => x({
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block"
        }, !l.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up("sm")]: {paddingLeft: s.spacing(3), paddingRight: s.spacing(3)}
        }), ({theme: s, ownerState: l}) => l.fixed && Object.keys(s.breakpoints.values).reduce((a, u) => {
            const c = u, d = s.breakpoints.values[c];
            return d !== 0 && (a[s.breakpoints.up(c)] = {maxWidth: `${d}${s.breakpoints.unit}`}), a
        }, {}), ({
                     theme: s,
                     ownerState: l
                 }) => x({}, l.maxWidth === "xs" && {[s.breakpoints.up("xs")]: {maxWidth: Math.max(s.breakpoints.values.xs, 444)}}, l.maxWidth && l.maxWidth !== "xs" && {[s.breakpoints.up(l.maxWidth)]: {maxWidth: `${s.breakpoints.values[l.maxWidth]}${s.breakpoints.unit}`}}));
    return h.forwardRef(function (l, a) {
        const u = n(l), {
            className: c,
            component: d = "div",
            disableGutters: p = !1,
            fixed: w = !1,
            maxWidth: v = "lg"
        } = u, y = W(u, aS), S = x({}, u, {component: d, disableGutters: p, fixed: w, maxWidth: v}), f = fS(S, r);
        return C.jsx(o, x({as: d, ownerState: S, className: U(f.root, c), ref: a}, y))
    })
}

const mS = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], hS = Cs(),
    gS = O0("div", {name: "MuiStack", slot: "Root", overridesResolver: (e, t) => t.root});

function vS(e) {
    return Tf({props: e, name: "MuiStack", defaultTheme: hS})
}

function yS(e, t) {
    const n = h.Children.toArray(e).filter(Boolean);
    return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(h.cloneElement(t, {key: `separator-${i}`})), r), [])
}

const xS = e => ({row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom"})[e],
    bS = ({ownerState: e, theme: t}) => {
        let n = x({display: "flex", flexDirection: "column"}, Mt({theme: t}, Nr({
            values: e.direction,
            breakpoints: t.breakpoints.values
        }), r => ({flexDirection: r})));
        if (e.spacing) {
            const r = Pf(t),
                o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}),
                i = Nr({values: e.direction, base: o}), s = Nr({values: e.spacing, base: o});
            typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
                if (!i[a]) {
                    const p = u > 0 ? i[c[u - 1]] : "column";
                    i[a] = p
                }
            }), n = mt(n, Mt({theme: t}, s, (a, u) => e.useFlexGap ? {gap: Fr(r, a)} : {
                "& > :not(style):not(style)": {margin: 0},
                "& > :not(style) ~ :not(style)": {[`margin${xS(u ? i[u] : e.direction)}`]: Fr(r, a)}
            }))
        }
        return n = KC(t.breakpoints, n), n
    };

function CS(e = {}) {
    const {createStyledComponent: t = gS, useThemeProps: n = vS, componentName: r = "MuiStack"} = e,
        o = () => J({root: ["root"]}, a => q(r, a), {}), i = t(bS);
    return h.forwardRef(function (a, u) {
        const c = n(a), d = ou(c), {
            component: p = "div",
            direction: w = "column",
            spacing: v = 0,
            divider: y,
            children: S,
            className: f,
            useFlexGap: m = !1
        } = d, g = W(d, mS), b = {direction: w, spacing: v, useFlexGap: m}, E = o();
        return C.jsx(i, x({as: p, ownerState: b, ref: u, className: U(E.root, f)}, g, {children: y ? yS(S, y) : S}))
    })
}

function wS(e, t) {
    return x({
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {"@media (orientation: landscape)": {minHeight: 48}},
            [e.up("sm")]: {minHeight: 64}
        }
    }, t)
}

const SS = {black: "#000", white: "#fff"}, ls = SS, kS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
}, ES = kS, RS = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
}, Yr = RS, PS = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
}, qr = PS, $S = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
}, di = $S, TS = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
}, Zr = TS, MS = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
}, Jr = MS, OS = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
}, eo = OS, IS = ["mode", "contrastThreshold", "tonalOffset"], Dm = {
    text: {primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)"},
    divider: "rgba(0, 0, 0, 0.12)",
    background: {paper: ls.white, default: ls.white},
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: .04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: .08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .12
    }
}, Yu = {
    text: {
        primary: ls.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {paper: "#121212", default: "#121212"},
    action: {
        active: ls.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: .08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: .16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .24
    }
};

function Bm(e, t, n, r) {
    const o = r.light || r, i = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ql(e.main, o) : t === "dark" && (e.dark = Xl(e.main, i)))
}

function NS(e = "light") {
    return e === "dark" ? {main: Zr[200], light: Zr[50], dark: Zr[400]} : {main: Zr[700], light: Zr[400], dark: Zr[800]}
}

function LS(e = "light") {
    return e === "dark" ? {main: Yr[200], light: Yr[50], dark: Yr[400]} : {main: Yr[500], light: Yr[300], dark: Yr[700]}
}

function jS(e = "light") {
    return e === "dark" ? {main: qr[500], light: qr[300], dark: qr[700]} : {
        main: qr[700],
        light: qr[400],
        dark: qr[800]
    }
}

function _S(e = "light") {
    return e === "dark" ? {main: Jr[400], light: Jr[300], dark: Jr[700]} : {
        main: Jr[700],
        light: Jr[500],
        dark: Jr[900]
    }
}

function AS(e = "light") {
    return e === "dark" ? {main: eo[400], light: eo[300], dark: eo[700]} : {
        main: eo[800],
        light: eo[500],
        dark: eo[900]
    }
}

function zS(e = "light") {
    return e === "dark" ? {main: di[400], light: di[300], dark: di[700]} : {
        main: "#ed6c02",
        light: di[500],
        dark: di[900]
    }
}

function DS(e) {
    const {mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2} = e, o = W(e, IS), i = e.primary || NS(t),
        s = e.secondary || LS(t), l = e.error || jS(t), a = e.info || _S(t), u = e.success || AS(t),
        c = e.warning || zS(t);

    function d(y) {
        return eS(y, Yu.text.primary) >= n ? Yu.text.primary : Dm.text.primary
    }

    const p = ({color: y, name: S, mainShade: f = 500, lightShade: m = 300, darkShade: g = 700}) => {
        if (y = x({}, y), !y.main && y[f] && (y.main = y[f]), !y.hasOwnProperty("main")) throw new Error(gr(11, S ? ` (${S})` : "", f));
        if (typeof y.main != "string") throw new Error(gr(12, S ? ` (${S})` : "", JSON.stringify(y.main)));
        return Bm(y, "light", m, r), Bm(y, "dark", g, r), y.contrastText || (y.contrastText = d(y.main)), y
    }, w = {dark: Yu, light: Dm};
    return mt(x({
        common: x({}, ls),
        mode: t,
        primary: p({color: i, name: "primary"}),
        secondary: p({color: s, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700"}),
        error: p({color: l, name: "error"}),
        warning: p({color: c, name: "warning"}),
        info: p({color: a, name: "info"}),
        success: p({color: u, name: "success"}),
        grey: ES,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: r
    }, w[t]), o)
}

const BS = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function FS(e) {
    return Math.round(e * 1e5) / 1e5
}

const Fm = {textTransform: "uppercase"}, Wm = '"Roboto", "Helvetica", "Arial", sans-serif';

function WS(e, t) {
    const n = typeof t == "function" ? t(e) : t, {
        fontFamily: r = Wm,
        fontSize: o = 14,
        fontWeightLight: i = 300,
        fontWeightRegular: s = 400,
        fontWeightMedium: l = 500,
        fontWeightBold: a = 700,
        htmlFontSize: u = 16,
        allVariants: c,
        pxToRem: d
    } = n, p = W(n, BS), w = o / 14, v = d || (f => `${f / u * w}rem`), y = (f, m, g, b, E) => x({
        fontFamily: r,
        fontWeight: f,
        fontSize: v(m),
        lineHeight: g
    }, r === Wm ? {letterSpacing: `${FS(b / m)}em`} : {}, E, c), S = {
        h1: y(i, 96, 1.167, -1.5),
        h2: y(i, 60, 1.2, -.5),
        h3: y(s, 48, 1.167, 0),
        h4: y(s, 34, 1.235, .25),
        h5: y(s, 24, 1.334, 0),
        h6: y(l, 20, 1.6, .15),
        subtitle1: y(s, 16, 1.75, .15),
        subtitle2: y(l, 14, 1.57, .1),
        body1: y(s, 16, 1.5, .15),
        body2: y(s, 14, 1.43, .15),
        button: y(l, 14, 1.75, .4, Fm),
        caption: y(s, 12, 1.66, .4),
        overline: y(s, 12, 2.66, 1, Fm),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return mt(x({
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: a
    }, S), p, {clone: !1})
}

const US = .2, VS = .14, HS = .12;

function Te(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${US})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${VS})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${HS})`].join(",")
}

const KS = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
    GS = KS, XS = ["duration", "easing", "delay"], QS = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    }, YS = {shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195};

function Um(e) {
    return `${Math.round(e)}ms`
}

function qS(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}

function ZS(e) {
    const t = x({}, QS, e.easing), n = x({}, YS, e.duration);
    return x({
        getAutoHeightDuration: qS, create: (o = ["all"], i = {}) => {
            const {duration: s = n.standard, easing: l = t.easeInOut, delay: a = 0} = i;
            return W(i, XS), (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof s == "string" ? s : Um(s)} ${l} ${typeof a == "string" ? a : Um(a)}`).join(",")
        }
    }, e, {easing: t, duration: n})
}

const JS = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
}, ek = JS, tk = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function Of(e = {}, ...t) {
    const {mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {}} = e, s = W(e, tk);
    if (e.vars) throw new Error(gr(18));
    const l = DS(r), a = Cs(e);
    let u = mt(a, {
        mixins: wS(a.breakpoints, n),
        palette: l,
        shadows: GS.slice(),
        typography: WS(l, i),
        transitions: ZS(o),
        zIndex: x({}, ek)
    });
    return u = mt(u, s), u = t.reduce((c, d) => mt(c, d), u), u.unstable_sxConfig = x({}, eu, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function (d) {
        return tu({sx: d, theme: this})
    }, u
}

const nk = Of(), su = nk;

function Mn() {
    const e = ru(su);
    return e[Br] || e
}

function Z({props: e, name: t}) {
    return Tf({props: e, name: t, defaultTheme: su, themeId: Br})
}

const Ot = e => ji(e) && e !== "classes", rk = ji, ok = M0({themeId: Br, defaultTheme: su, rootShouldForwardProp: Ot}),
    F = ok, ik = ["theme"];

function sk(e) {
    let {theme: t} = e, n = W(e, ik);
    const r = t[Br];
    return C.jsx(lS, x({}, n, {themeId: r ? Br : void 0, theme: r || t}))
}

const lk = e => {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
}, Vm = lk;

function ak(e, t, n, r, o) {
    const [i, s] = h.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return Dt(() => {
        let l = !0;
        if (!n) return;
        const a = n(e), u = () => {
            l && s(a.matches)
        };
        return u(), a.addListener(u), () => {
            l = !1, a.removeListener(u)
        }
    }, [e, n]), i
}

const j0 = Bi["useSyncExternalStore"];

function uk(e, t, n, r, o) {
    const i = h.useCallback(() => t, [t]), s = h.useMemo(() => {
        if (o && n) return () => n(e).matches;
        if (r !== null) {
            const {matches: c} = r(e);
            return () => c
        }
        return i
    }, [i, e, r, o, n]), [l, a] = h.useMemo(() => {
        if (n === null) return [i, () => () => {
        }];
        const c = n(e);
        return [() => c.matches, d => (c.addListener(d), () => {
            c.removeListener(d)
        })]
    }, [i, n, e]);
    return j0(a, l, s)
}

function _0(e, t = {}) {
    const n = nu(), r = typeof window < "u" && typeof window.matchMedia < "u", {
        defaultMatches: o = !1,
        matchMedia: i = r ? window.matchMedia : null,
        ssrMatchMedia: s = null,
        noSsr: l = !1
    } = I0({name: "MuiUseMediaQuery", props: t, theme: n});
    let a = typeof e == "function" ? e(n) : e;
    return a = a.replace(/^@media( ?)/m, ""), (j0 !== void 0 ? uk : ak)(a, o, i, s, l)
}

function A0(e) {
    return C.jsx(_w, x({}, e, {defaultTheme: su, themeId: Br}))
}

const ck = (e, t) => x({
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%"
    }, t && !e.vars && {colorScheme: e.palette.mode}),
    dk = e => x({color: (e.vars || e).palette.text.primary}, e.typography.body1, {
        backgroundColor: (e.vars || e).palette.background.default,
        "@media print": {backgroundColor: (e.vars || e).palette.common.white}
    }), fk = (e, t = !1) => {
        var n;
        const r = {};
        t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([s, l]) => {
            var a;
            r[e.getColorSchemeSelector(s).replace(/\s*&/, "")] = {colorScheme: (a = l.palette) == null ? void 0 : a.mode}
        });
        let o = x({
            html: ck(e, t),
            "*, *::before, *::after": {boxSizing: "inherit"},
            "strong, b": {fontWeight: e.typography.fontWeightBold},
            body: x({margin: 0}, dk(e), {"&::backdrop": {backgroundColor: (e.vars || e).palette.background.default}})
        }, r);
        const i = (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
        return i && (o = [o, i]), o
    };

function pk(e) {
    const t = Z({props: e, name: "MuiCssBaseline"}), {children: n, enableColorScheme: r = !1} = t;
    return C.jsxs(h.Fragment, {children: [C.jsx(A0, {styles: o => fk(o, r)}), n]})
}

const mk = Of(),
    hk = Bw({themeId: Br, defaultTheme: mk, defaultClassName: "MuiBox-root", generateClassName: hf.generate}), nr = hk;

function gk(e) {
    return q("MuiDivider", e)
}

ee("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const vk = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"],
    yk = e => {
        const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: i,
            orientation: s,
            textAlign: l,
            variant: a
        } = e;
        return J({
            root: ["root", t && "absolute", a, i && "light", s === "vertical" && "vertical", o && "flexItem", n && "withChildren", n && s === "vertical" && "withChildrenVertical", l === "right" && s !== "vertical" && "textAlignRight", l === "left" && s !== "vertical" && "textAlignLeft"],
            wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
        }, gk, r)
    }, xk = F("div", {
        name: "MuiDivider", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft]
        }
    })(({theme: e, ownerState: t}) => x({
        margin: 0,
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: (e.vars || e).palette.divider,
        borderBottomWidth: "thin"
    }, t.absolute && {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
    }, t.light && {borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Ke(e.palette.divider, .08)}, t.variant === "inset" && {marginLeft: 72}, t.variant === "middle" && t.orientation === "horizontal" && {
        marginLeft: e.spacing(2),
        marginRight: e.spacing(2)
    }, t.variant === "middle" && t.orientation === "vertical" && {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1)
    }, t.orientation === "vertical" && {
        height: "100%",
        borderBottomWidth: 0,
        borderRightWidth: "thin"
    }, t.flexItem && {alignSelf: "stretch", height: "auto"}), ({ownerState: e}) => x({}, e.children && {
        display: "flex",
        whiteSpace: "nowrap",
        textAlign: "center",
        border: 0,
        "&::before, &::after": {content: '""', alignSelf: "center"}
    }), ({
             theme: e,
             ownerState: t
         }) => x({}, t.children && t.orientation !== "vertical" && {
        "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(e.vars || e).palette.divider}`
        }
    }), ({theme: e, ownerState: t}) => x({}, t.children && t.orientation === "vertical" && {
        flexDirection: "column",
        "&::before, &::after": {height: "100%", borderLeft: `thin solid ${(e.vars || e).palette.divider}`}
    }), ({ownerState: e}) => x({}, e.textAlign === "right" && e.orientation !== "vertical" && {
        "&::before": {width: "90%"},
        "&::after": {width: "10%"}
    }, e.textAlign === "left" && e.orientation !== "vertical" && {
        "&::before": {width: "10%"},
        "&::after": {width: "90%"}
    })), bk = F("span", {
        name: "MuiDivider", slot: "Wrapper", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical]
        }
    })(({theme: e, ownerState: t}) => x({
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`
    }, t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    })), z0 = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiDivider"}), {
            absolute: o = !1,
            children: i,
            className: s,
            component: l = i ? "div" : "hr",
            flexItem: a = !1,
            light: u = !1,
            orientation: c = "horizontal",
            role: d = l !== "hr" ? "separator" : void 0,
            textAlign: p = "center",
            variant: w = "fullWidth"
        } = r, v = W(r, vk), y = x({}, r, {
            absolute: o,
            component: l,
            flexItem: a,
            light: u,
            orientation: c,
            role: d,
            textAlign: p,
            variant: w
        }), S = yk(y);
        return C.jsx(xk, x({
            as: l,
            className: U(S.root, s),
            role: d,
            ref: n,
            ownerState: y
        }, v, {children: i ? C.jsx(bk, {className: S.wrapper, ownerState: y, children: i}) : null}))
    });
z0.muiSkipListHighlight = !0;
const D0 = z0;

function Ao(e) {
    return typeof e == "string"
}

function wi(e, t, n) {
    return e === void 0 || Ao(e) ? t : x({}, t, {ownerState: x({}, t.ownerState, n)})
}

const Ck = {disableDefaultClasses: !1}, wk = h.createContext(Ck);

function Sk(e) {
    const {disableDefaultClasses: t} = h.useContext(wk);
    return n => t ? "" : e(n)
}

function Yl(e, t = []) {
    if (e === void 0) return {};
    const n = {};
    return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => {
        n[r] = e[r]
    }), n
}

function kk(e, t, n) {
    return typeof e == "function" ? e(t, n) : e
}

function Hm(e) {
    if (e === void 0) return {};
    const t = {};
    return Object.keys(e).filter(n => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n => {
        t[n] = e[n]
    }), t
}

function Ek(e) {
    const {getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i} = e;
    if (!t) {
        const w = U(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
            v = x({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
            y = x({}, n, o, r);
        return w.length > 0 && (y.className = w), Object.keys(v).length > 0 && (y.style = v), {
            props: y,
            internalRef: void 0
        }
    }
    const s = Yl(x({}, o, r)), l = Hm(r), a = Hm(o), u = t(s),
        c = U(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
        d = x({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
        p = x({}, u, n, a, l);
    return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {props: p, internalRef: u.ref}
}

const Rk = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];

function vr(e) {
    var t;
    const {elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = !1} = e, s = W(e, Rk),
        l = i ? {} : kk(r, o), {props: a, internalRef: u} = Ek(x({}, s, {externalSlotProps: l})),
        c = Le(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
    return wi(n, x({}, a, {ref: c}), o)
}

function Pk(e) {
    const t = qe(e);
    return t.body === e ? $n(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}

function _i(e, t) {
    t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}

function Km(e) {
    return parseInt($n(e).getComputedStyle(e).paddingRight, 10) || 0
}

function $k(e) {
    const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1,
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r
}

function Gm(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, s => {
        const l = i.indexOf(s) === -1, a = !$k(s);
        l && a && _i(s, o)
    })
}

function qu(e, t) {
    let n = -1;
    return e.some((r, o) => t(r) ? (n = o, !0) : !1), n
}

function Tk(e, t) {
    const n = [], r = e.container;
    if (!t.disableScrollLock) {
        if (Pk(r)) {
            const s = o0(qe(r));
            n.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r
            }), r.style.paddingRight = `${Km(r) + s}px`;
            const l = qe(r).querySelectorAll(".mui-fixed");
            [].forEach.call(l, a => {
                n.push({
                    value: a.style.paddingRight,
                    property: "padding-right",
                    el: a
                }), a.style.paddingRight = `${Km(a) + s}px`
            })
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = qe(r).body; else {
            const s = r.parentElement, l = $n(r);
            i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r
        }
        n.push({value: i.style.overflow, property: "overflow", el: i}, {
            value: i.style.overflowX,
            property: "overflow-x",
            el: i
        }, {value: i.style.overflowY, property: "overflow-y", el: i}), i.style.overflow = "hidden"
    }
    return () => {
        n.forEach(({value: i, el: s, property: l}) => {
            i ? s.style.setProperty(l, i) : s.style.removeProperty(l)
        })
    }
}

function Mk(e) {
    const t = [];
    return [].forEach.call(e.children, n => {
        n.getAttribute("aria-hidden") === "true" && t.push(n)
    }), t
}

class Ok {
    constructor() {
        this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
    }

    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        r = this.modals.length, this.modals.push(t), t.modalRef && _i(t.modalRef, !1);
        const o = Mk(n);
        Gm(n, t.mount, t.modalRef, o, !0);
        const i = qu(this.containers, s => s.container === n);
        return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
            modals: [t],
            container: n,
            restore: null,
            hiddenSiblings: o
        }), r)
    }

    mount(t, n) {
        const r = qu(this.containers, i => i.modals.indexOf(t) !== -1), o = this.containers[r];
        o.restore || (o.restore = Tk(o, n))
    }

    remove(t, n = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const o = qu(this.containers, s => s.modals.indexOf(t) !== -1), i = this.containers[o];
        if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && _i(t.modalRef, n), Gm(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1); else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && _i(s.modalRef, !1)
        }
        return r
    }

    isTopModal(t) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
    }
}

function Ik(e) {
    return typeof e == "function" ? e() : e
}

function Nk(e) {
    return e ? e.props.hasOwnProperty("in") : !1
}

const Lk = new Ok;

function jk(e) {
    const {
        container: t,
        disableEscapeKeyDown: n = !1,
        disableScrollLock: r = !1,
        manager: o = Lk,
        closeAfterTransition: i = !1,
        onTransitionEnter: s,
        onTransitionExited: l,
        children: a,
        onClose: u,
        open: c,
        rootRef: d
    } = e, p = h.useRef({}), w = h.useRef(null), v = h.useRef(null), y = Le(v, d), [S, f] = h.useState(!c), m = Nk(a);
    let g = !0;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
    const b = () => qe(w.current), E = () => (p.current.modalRef = v.current, p.current.mount = w.current, p.current),
        R = () => {
            o.mount(E(), {disableScrollLock: r}), v.current && (v.current.scrollTop = 0)
        }, k = un(() => {
            const L = Ik(t) || b().body;
            o.add(E(), L), v.current && R()
        }), T = h.useCallback(() => o.isTopModal(E()), [o]), M = un(L => {
            w.current = L, L && (c && T() ? R() : v.current && _i(v.current, g))
        }), P = h.useCallback(() => {
            o.remove(E(), g)
        }, [g, o]);
    h.useEffect(() => () => {
        P()
    }, [P]), h.useEffect(() => {
        c ? k() : (!m || !i) && P()
    }, [c, P, m, i, k]);
    const O = L => D => {
        var $;
        ($ = L.onKeyDown) == null || $.call(L, D), !(D.key !== "Escape" || D.which === 229 || !T()) && (n || (D.stopPropagation(), u && u(D, "escapeKeyDown")))
    }, j = L => D => {
        var $;
        ($ = L.onClick) == null || $.call(L, D), D.target === D.currentTarget && u && u(D, "backdropClick")
    };
    return {
        getRootProps: (L = {}) => {
            const D = Yl(e);
            delete D.onTransitionEnter, delete D.onTransitionExited;
            const $ = x({}, D, L);
            return x({role: "presentation"}, $, {onKeyDown: O($), ref: y})
        }, getBackdropProps: (L = {}) => {
            const D = L;
            return x({"aria-hidden": !0}, D, {onClick: j(D), open: c})
        }, getTransitionProps: () => {
            const L = () => {
                f(!1), s && s()
            }, D = () => {
                f(!0), l && l(), i && P()
            };
            return {
                onEnter: Jc(L, a == null ? void 0 : a.props.onEnter),
                onExited: Jc(D, a == null ? void 0 : a.props.onExited)
            }
        }, rootRef: y, portalRef: M, isTopModal: T, exited: S, hasTransition: m
    }
}

function Xm(e) {
    return e.substring(2).toLowerCase()
}

function _k(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
}

function Ak(e) {
    const {
        children: t,
        disableReactTree: n = !1,
        mouseEvent: r = "onClick",
        onClickAway: o,
        touchEvent: i = "onTouchEnd"
    } = e, s = h.useRef(!1), l = h.useRef(null), a = h.useRef(!1), u = h.useRef(!1);
    h.useEffect(() => (setTimeout(() => {
        a.current = !0
    }, 0), () => {
        a.current = !1
    }), []);
    const c = Le(t.ref, l), d = un(v => {
        const y = u.current;
        u.current = !1;
        const S = qe(l.current);
        if (!a.current || !l.current || "clientX" in v && _k(v, S)) return;
        if (s.current) {
            s.current = !1;
            return
        }
        let f;
        v.composedPath ? f = v.composedPath().indexOf(l.current) > -1 : f = !S.documentElement.contains(v.target) || l.current.contains(v.target), !f && (n || !y) && o(v)
    }), p = v => y => {
        u.current = !0;
        const S = t.props[v];
        S && S(y)
    }, w = {ref: c};
    return i !== !1 && (w[i] = p(i)), h.useEffect(() => {
        if (i !== !1) {
            const v = Xm(i), y = qe(l.current), S = () => {
                s.current = !0
            };
            return y.addEventListener(v, d), y.addEventListener("touchmove", S), () => {
                y.removeEventListener(v, d), y.removeEventListener("touchmove", S)
            }
        }
    }, [d, i]), r !== !1 && (w[r] = p(r)), h.useEffect(() => {
        if (r !== !1) {
            const v = Xm(r), y = qe(l.current);
            return y.addEventListener(v, d), () => {
                y.removeEventListener(v, d)
            }
        }
    }, [d, r]), C.jsx(h.Fragment, {children: h.cloneElement(t, w)})
}

const zk = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

function Dk(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}

function Bk(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = r => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e
}

function Fk(e) {
    return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Bk(e))
}

function Wk(e) {
    const t = [], n = [];
    return Array.from(e.querySelectorAll(zk)).forEach((r, o) => {
        const i = Dk(r);
        i === -1 || !Fk(r) || (i === 0 ? t.push(r) : n.push({documentOrder: o, tabIndex: i, node: r}))
    }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map(r => r.node).concat(t)
}

function Uk() {
    return !0
}

function Vk(e) {
    const {
            children: t,
            disableAutoFocus: n = !1,
            disableEnforceFocus: r = !1,
            disableRestoreFocus: o = !1,
            getTabbable: i = Wk,
            isEnabled: s = Uk,
            open: l
        } = e, a = h.useRef(!1), u = h.useRef(null), c = h.useRef(null), d = h.useRef(null), p = h.useRef(null),
        w = h.useRef(!1), v = h.useRef(null), y = Le(t.ref, v), S = h.useRef(null);
    h.useEffect(() => {
        !l || !v.current || (w.current = !n)
    }, [n, l]), h.useEffect(() => {
        if (!l || !v.current) return;
        const g = qe(v.current);
        return v.current.contains(g.activeElement) || (v.current.hasAttribute("tabIndex") || v.current.setAttribute("tabIndex", "-1"), w.current && v.current.focus()), () => {
            o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null)
        }
    }, [l]), h.useEffect(() => {
        if (!l || !v.current) return;
        const g = qe(v.current), b = k => {
            S.current = k, !(r || !s() || k.key !== "Tab") && g.activeElement === v.current && k.shiftKey && (a.current = !0, c.current && c.current.focus())
        }, E = () => {
            const k = v.current;
            if (k === null) return;
            if (!g.hasFocus() || !s() || a.current) {
                a.current = !1;
                return
            }
            if (k.contains(g.activeElement) || r && g.activeElement !== u.current && g.activeElement !== c.current) return;
            if (g.activeElement !== p.current) p.current = null; else if (p.current !== null) return;
            if (!w.current) return;
            let T = [];
            if ((g.activeElement === u.current || g.activeElement === c.current) && (T = i(v.current)), T.length > 0) {
                var M, P;
                const O = !!((M = S.current) != null && M.shiftKey && ((P = S.current) == null ? void 0 : P.key) === "Tab"),
                    j = T[0], N = T[T.length - 1];
                typeof j != "string" && typeof N != "string" && (O ? N.focus() : j.focus())
            } else k.focus()
        };
        g.addEventListener("focusin", E), g.addEventListener("keydown", b, !0);
        const R = setInterval(() => {
            g.activeElement && g.activeElement.tagName === "BODY" && E()
        }, 50);
        return () => {
            clearInterval(R), g.removeEventListener("focusin", E), g.removeEventListener("keydown", b, !0)
        }
    }, [n, r, o, s, l, i]);
    const f = g => {
        d.current === null && (d.current = g.relatedTarget), w.current = !0, p.current = g.target;
        const b = t.props.onFocus;
        b && b(g)
    }, m = g => {
        d.current === null && (d.current = g.relatedTarget), w.current = !0
    };
    return C.jsxs(h.Fragment, {
        children: [C.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: m,
            ref: u,
            "data-testid": "sentinelStart"
        }), h.cloneElement(t, {ref: y, onFocus: f}), C.jsx("div", {
            tabIndex: l ? 0 : -1,
            onFocus: m,
            ref: c,
            "data-testid": "sentinelEnd"
        })]
    })
}

var Pt = "top", Jt = "bottom", en = "right", $t = "left", If = "auto", ws = [Pt, Jt, en, $t], zo = "start", as = "end",
    Hk = "clippingParents", B0 = "viewport", fi = "popper", Kk = "reference", Qm = ws.reduce(function (e, t) {
        return e.concat([t + "-" + zo, t + "-" + as])
    }, []), F0 = [].concat(ws, [If]).reduce(function (e, t) {
        return e.concat([t, t + "-" + zo, t + "-" + as])
    }, []), Gk = "beforeRead", Xk = "read", Qk = "afterRead", Yk = "beforeMain", qk = "main", Zk = "afterMain",
    Jk = "beforeWrite", eE = "write", tE = "afterWrite", nE = [Gk, Xk, Qk, Yk, qk, Zk, Jk, eE, tE];

function Tn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Bt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Ur(e) {
    var t = Bt(e).Element;
    return e instanceof t || e instanceof Element
}

function Yt(e) {
    var t = Bt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Nf(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Bt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function rE(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
        var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
        !Yt(i) || !Tn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function (s) {
            var l = o[s];
            l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l)
        }))
    })
}

function oE(e) {
    var t = e.state, n = {
        popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
        arrow: {position: "absolute"},
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
        Object.keys(t.elements).forEach(function (r) {
            var o = t.elements[r], i = t.attributes[r] || {},
                s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function (a, u) {
                    return a[u] = "", a
                }, {});
            !Yt(o) || !Tn(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function (a) {
                o.removeAttribute(a)
            }))
        })
    }
}

const iE = {name: "applyStyles", enabled: !0, phase: "write", fn: rE, effect: oE, requires: ["computeStyles"]};

function Pn(e) {
    return e.split("-")[0]
}

var Lr = Math.max, ql = Math.min, Do = Math.round;

function id() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function (t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function W0() {
    return !/^((?!chrome|android).)*safari/i.test(id())
}

function Bo(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(), o = 1, i = 1;
    t && Yt(e) && (o = e.offsetWidth > 0 && Do(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Do(r.height) / e.offsetHeight || 1);
    var s = Ur(e) ? Bt(e) : window, l = s.visualViewport, a = !W0() && n,
        u = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / i, d = r.width / o,
        p = r.height / i;
    return {width: d, height: p, top: c, right: u + d, bottom: c + p, left: u, x: u, y: c}
}

function Lf(e) {
    var t = Bo(e), n = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function U0(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Nf(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function Hn(e) {
    return Bt(e).getComputedStyle(e)
}

function sE(e) {
    return ["table", "td", "th"].indexOf(Tn(e)) >= 0
}

function Cr(e) {
    return ((Ur(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function lu(e) {
    return Tn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Nf(e) ? e.host : null) || Cr(e)
}

function Ym(e) {
    return !Yt(e) || Hn(e).position === "fixed" ? null : e.offsetParent
}

function lE(e) {
    var t = /firefox/i.test(id()), n = /Trident/i.test(id());
    if (n && Yt(e)) {
        var r = Hn(e);
        if (r.position === "fixed") return null
    }
    var o = lu(e);
    for (Nf(o) && (o = o.host); Yt(o) && ["html", "body"].indexOf(Tn(o)) < 0;) {
        var i = Hn(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return o;
        o = o.parentNode
    }
    return null
}

function Ss(e) {
    for (var t = Bt(e), n = Ym(e); n && sE(n) && Hn(n).position === "static";) n = Ym(n);
    return n && (Tn(n) === "html" || Tn(n) === "body" && Hn(n).position === "static") ? t : n || lE(e) || t
}

function jf(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Ai(e, t, n) {
    return Lr(e, ql(t, n))
}

function aE(e, t, n) {
    var r = Ai(e, t, n);
    return r > n ? n : r
}

function V0() {
    return {top: 0, right: 0, bottom: 0, left: 0}
}

function H0(e) {
    return Object.assign({}, V0(), e)
}

function K0(e, t) {
    return t.reduce(function (n, r) {
        return n[r] = e, n
    }, {})
}

var uE = function (t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {placement: n.placement})) : t, H0(typeof t != "number" ? t : K0(t, ws))
};

function cE(e) {
    var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets,
        l = Pn(n.placement), a = jf(l), u = [$t, en].indexOf(l) >= 0, c = u ? "height" : "width";
    if (!(!i || !s)) {
        var d = uE(o.padding, n), p = Lf(i), w = a === "y" ? Pt : $t, v = a === "y" ? Jt : en,
            y = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c], S = s[a] - n.rects.reference[a],
            f = Ss(i), m = f ? a === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, g = y / 2 - S / 2, b = d[w],
            E = m - p[c] - d[v], R = m / 2 - p[c] / 2 + g, k = Ai(b, R, E), T = a;
        n.modifiersData[r] = (t = {}, t[T] = k, t.centerOffset = k - R, t)
    }
}

function dE(e) {
    var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || U0(t.elements.popper, o) && (t.elements.arrow = o))
}

const fE = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: cE,
    effect: dE,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Fo(e) {
    return e.split("-")[1]
}

var pE = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

function mE(e, t) {
    var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
    return {x: Do(n * o) / o || 0, y: Do(r * o) / o || 0}
}

function qm(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position,
        a = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = s.x, w = p === void 0 ? 0 : p,
        v = s.y, y = v === void 0 ? 0 : v, S = typeof c == "function" ? c({x: w, y}) : {x: w, y};
    w = S.x, y = S.y;
    var f = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), g = $t, b = Pt, E = window;
    if (u) {
        var R = Ss(n), k = "clientHeight", T = "clientWidth";
        if (R === Bt(n) && (R = Cr(n), Hn(R).position !== "static" && l === "absolute" && (k = "scrollHeight", T = "scrollWidth")), R = R, o === Pt || (o === $t || o === en) && i === as) {
            b = Jt;
            var M = d && R === E && E.visualViewport ? E.visualViewport.height : R[k];
            y -= M - r.height, y *= a ? 1 : -1
        }
        if (o === $t || (o === Pt || o === Jt) && i === as) {
            g = en;
            var P = d && R === E && E.visualViewport ? E.visualViewport.width : R[T];
            w -= P - r.width, w *= a ? 1 : -1
        }
    }
    var O = Object.assign({position: l}, u && pE), j = c === !0 ? mE({x: w, y}, Bt(n)) : {x: w, y};
    if (w = j.x, y = j.y, a) {
        var N;
        return Object.assign({}, O, (N = {}, N[b] = m ? "0" : "", N[g] = f ? "0" : "", N.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + y + "px)" : "translate3d(" + w + "px, " + y + "px, 0)", N))
    }
    return Object.assign({}, O, (t = {}, t[b] = m ? y + "px" : "", t[g] = f ? w + "px" : "", t.transform = "", t))
}

function hE(e) {
    var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive,
        s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
            placement: Pn(t.placement),
            variation: Fo(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qm(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qm(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
}

const gE = {name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: hE, data: {}};
var Hs = {passive: !0};

function vE(e) {
    var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize,
        l = s === void 0 ? !0 : s, a = Bt(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Hs)
    }), l && a.addEventListener("resize", n.update, Hs), function () {
        i && u.forEach(function (c) {
            c.removeEventListener("scroll", n.update, Hs)
        }), l && a.removeEventListener("resize", n.update, Hs)
    }
}

const yE = {
    name: "eventListeners", enabled: !0, phase: "write", fn: function () {
    }, effect: vE, data: {}
};
var xE = {left: "right", right: "left", bottom: "top", top: "bottom"};

function vl(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
        return xE[t]
    })
}

var bE = {start: "end", end: "start"};

function Zm(e) {
    return e.replace(/start|end/g, function (t) {
        return bE[t]
    })
}

function _f(e) {
    var t = Bt(e), n = t.pageXOffset, r = t.pageYOffset;
    return {scrollLeft: n, scrollTop: r}
}

function Af(e) {
    return Bo(Cr(e)).left + _f(e).scrollLeft
}

function CE(e, t) {
    var n = Bt(e), r = Cr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
    if (o) {
        i = o.width, s = o.height;
        var u = W0();
        (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {width: i, height: s, x: l + Af(e), y: a}
}

function wE(e) {
    var t, n = Cr(e), r = _f(e), o = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = Lr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        s = Lr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        l = -r.scrollLeft + Af(e), a = -r.scrollTop;
    return Hn(o || n).direction === "rtl" && (l += Lr(n.clientWidth, o ? o.clientWidth : 0) - i), {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function zf(e) {
    var t = Hn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}

function G0(e) {
    return ["html", "body", "#document"].indexOf(Tn(e)) >= 0 ? e.ownerDocument.body : Yt(e) && zf(e) ? e : G0(lu(e))
}

function zi(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = G0(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Bt(r),
        s = o ? [i].concat(i.visualViewport || [], zf(r) ? r : []) : r, l = t.concat(s);
    return o ? l : l.concat(zi(lu(s)))
}

function sd(e) {
    return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
}

function SE(e, t) {
    var n = Bo(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function Jm(e, t, n) {
    return t === B0 ? sd(CE(e, n)) : Ur(t) ? SE(t, n) : sd(wE(Cr(e)))
}

function kE(e) {
    var t = zi(lu(e)), n = ["absolute", "fixed"].indexOf(Hn(e).position) >= 0, r = n && Yt(e) ? Ss(e) : e;
    return Ur(r) ? t.filter(function (o) {
        return Ur(o) && U0(o, r) && Tn(o) !== "body"
    }) : []
}

function EE(e, t, n, r) {
    var o = t === "clippingParents" ? kE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0],
        l = i.reduce(function (a, u) {
            var c = Jm(e, u, r);
            return a.top = Lr(c.top, a.top), a.right = ql(c.right, a.right), a.bottom = ql(c.bottom, a.bottom), a.left = Lr(c.left, a.left), a
        }, Jm(e, s, r));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
}

function X0(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? Pn(r) : null, i = r ? Fo(r) : null,
        s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (o) {
        case Pt:
            a = {x: s, y: t.y - n.height};
            break;
        case Jt:
            a = {x: s, y: t.y + t.height};
            break;
        case en:
            a = {x: t.x + t.width, y: l};
            break;
        case $t:
            a = {x: t.x - n.width, y: l};
            break;
        default:
            a = {x: t.x, y: t.y}
    }
    var u = o ? jf(o) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (i) {
            case zo:
                a[u] = a[u] - (t[c] / 2 - n[c] / 2);
                break;
            case as:
                a[u] = a[u] + (t[c] / 2 - n[c] / 2);
                break
        }
    }
    return a
}

function us(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i,
        l = n.boundary, a = l === void 0 ? Hk : l, u = n.rootBoundary, c = u === void 0 ? B0 : u, d = n.elementContext,
        p = d === void 0 ? fi : d, w = n.altBoundary, v = w === void 0 ? !1 : w, y = n.padding,
        S = y === void 0 ? 0 : y, f = H0(typeof S != "number" ? S : K0(S, ws)), m = p === fi ? Kk : fi,
        g = e.rects.popper, b = e.elements[v ? m : p],
        E = EE(Ur(b) ? b : b.contextElement || Cr(e.elements.popper), a, c, s), R = Bo(e.elements.reference),
        k = X0({reference: R, element: g, strategy: "absolute", placement: o}), T = sd(Object.assign({}, g, k)),
        M = p === fi ? T : R, P = {
            top: E.top - M.top + f.top,
            bottom: M.bottom - E.bottom + f.bottom,
            left: E.left - M.left + f.left,
            right: M.right - E.right + f.right
        }, O = e.modifiersData.offset;
    if (p === fi && O) {
        var j = O[o];
        Object.keys(P).forEach(function (N) {
            var A = [en, Jt].indexOf(N) >= 0 ? 1 : -1, _ = [Pt, Jt].indexOf(N) >= 0 ? "y" : "x";
            P[N] += j[_] * A
        })
    }
    return P
}

function RE(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations,
        a = n.allowedAutoPlacements, u = a === void 0 ? F0 : a, c = Fo(r), d = c ? l ? Qm : Qm.filter(function (v) {
            return Fo(v) === c
        }) : ws, p = d.filter(function (v) {
            return u.indexOf(v) >= 0
        });
    p.length === 0 && (p = d);
    var w = p.reduce(function (v, y) {
        return v[y] = us(e, {placement: y, boundary: o, rootBoundary: i, padding: s})[Pn(y)], v
    }, {});
    return Object.keys(w).sort(function (v, y) {
        return w[v] - w[y]
    })
}

function PE(e) {
    if (Pn(e) === If) return [];
    var t = vl(e);
    return [Zm(e), t, Zm(t)]
}

function $E(e) {
    var t = e.state, n = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, w = n.flipVariations, v = w === void 0 ? !0 : w, y = n.allowedAutoPlacements, S = t.options.placement, f = Pn(S), m = f === S, g = a || (m || !v ? [vl(S)] : PE(S)), b = [S].concat(g).reduce(function (G, oe) {
            return G.concat(Pn(oe) === If ? RE(t, {
                placement: oe,
                boundary: c,
                rootBoundary: d,
                padding: u,
                flipVariations: v,
                allowedAutoPlacements: y
            }) : oe)
        }, []), E = t.rects.reference, R = t.rects.popper, k = new Map, T = !0, M = b[0], P = 0; P < b.length; P++) {
            var O = b[P], j = Pn(O), N = Fo(O) === zo, A = [Pt, Jt].indexOf(j) >= 0, _ = A ? "width" : "height",
                L = us(t, {placement: O, boundary: c, rootBoundary: d, altBoundary: p, padding: u}),
                D = A ? N ? en : $t : N ? Jt : Pt;
            E[_] > R[_] && (D = vl(D));
            var $ = vl(D), I = [];
            if (i && I.push(L[j] <= 0), l && I.push(L[D] <= 0, L[$] <= 0), I.every(function (G) {
                return G
            })) {
                M = O, T = !1;
                break
            }
            k.set(O, I)
        }
        if (T) for (var B = v ? 3 : 1, X = function (oe) {
            var te = b.find(function (Ce) {
                var pe = k.get(Ce);
                if (pe) return pe.slice(0, oe).every(function (ue) {
                    return ue
                })
            });
            if (te) return M = te, "break"
        }, Y = B; Y > 0; Y--) {
            var le = X(Y);
            if (le === "break") break
        }
        t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0)
    }
}

const TE = {name: "flip", enabled: !0, phase: "main", fn: $E, requiresIfExists: ["offset"], data: {_skip: !1}};

function eh(e, t, n) {
    return n === void 0 && (n = {x: 0, y: 0}), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function th(e) {
    return [Pt, en, Jt, $t].some(function (t) {
        return e[t] >= 0
    })
}

function ME(e) {
    var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow,
        s = us(t, {elementContext: "reference"}), l = us(t, {altBoundary: !0}), a = eh(s, r), u = eh(l, o, i),
        c = th(a), d = th(u);
    t.modifiersData[n] = {
        referenceClippingOffsets: a,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: d
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": d
    })
}

const OE = {name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ME};

function IE(e, t, n) {
    var r = Pn(e), o = [$t, Pt].indexOf(r) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, {placement: e})) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * o, [$t, en].indexOf(r) >= 0 ? {x: l, y: s} : {x: s, y: l}
}

function NE(e) {
    var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o,
        s = F0.reduce(function (c, d) {
            return c[d] = IE(d, t.rects, i), c
        }, {}), l = s[t.placement], a = l.x, u = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s
}

const LE = {name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: NE};

function jE(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = X0({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}

const _E = {name: "popperOffsets", enabled: !0, phase: "read", fn: jE, data: {}};

function AE(e) {
    return e === "x" ? "y" : "x"
}

function zE(e) {
    var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis,
        l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, p = n.tether,
        w = p === void 0 ? !0 : p, v = n.tetherOffset, y = v === void 0 ? 0 : v,
        S = us(t, {boundary: a, rootBoundary: u, padding: d, altBoundary: c}), f = Pn(t.placement), m = Fo(t.placement),
        g = !m, b = jf(f), E = AE(b), R = t.modifiersData.popperOffsets, k = t.rects.reference, T = t.rects.popper,
        M = typeof y == "function" ? y(Object.assign({}, t.rects, {placement: t.placement})) : y,
        P = typeof M == "number" ? {mainAxis: M, altAxis: M} : Object.assign({mainAxis: 0, altAxis: 0}, M),
        O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {x: 0, y: 0};
    if (R) {
        if (i) {
            var N, A = b === "y" ? Pt : $t, _ = b === "y" ? Jt : en, L = b === "y" ? "height" : "width", D = R[b],
                $ = D + S[A], I = D - S[_], B = w ? -T[L] / 2 : 0, X = m === zo ? k[L] : T[L],
                Y = m === zo ? -T[L] : -k[L], le = t.elements.arrow, G = w && le ? Lf(le) : {width: 0, height: 0},
                oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : V0(),
                te = oe[A], Ce = oe[_], pe = Ai(0, k[L], G[L]),
                ue = g ? k[L] / 2 - B - pe - te - P.mainAxis : X - pe - te - P.mainAxis,
                Be = g ? -k[L] / 2 + B + pe + Ce + P.mainAxis : Y + pe + Ce + P.mainAxis,
                ne = t.elements.arrow && Ss(t.elements.arrow),
                ke = ne ? b === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                re = (N = O == null ? void 0 : O[b]) != null ? N : 0, ce = D + ue - re - ke, ae = D + Be - re,
                gt = Ai(w ? ql($, ce) : $, D, w ? Lr(I, ae) : I);
            R[b] = gt, j[b] = gt - D
        }
        if (l) {
            var rt, Ue = b === "x" ? Pt : $t, ut = b === "x" ? Jt : en, $e = R[E], ve = E === "y" ? "height" : "width",
                ot = $e + S[Ue], Fe = $e - S[ut], de = [Pt, $t].indexOf(f) !== -1,
                Ze = (rt = O == null ? void 0 : O[E]) != null ? rt : 0,
                Ge = de ? ot : $e - k[ve] - T[ve] - Ze + P.altAxis, vt = de ? $e + k[ve] + T[ve] - Ze - P.altAxis : Fe,
                me = w && de ? aE(Ge, $e, vt) : Ai(w ? Ge : ot, $e, w ? vt : Fe);
            R[E] = me, j[E] = me - $e
        }
        t.modifiersData[r] = j
    }
}

const DE = {name: "preventOverflow", enabled: !0, phase: "main", fn: zE, requiresIfExists: ["offset"]};

function BE(e) {
    return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
}

function FE(e) {
    return e === Bt(e) || !Yt(e) ? _f(e) : BE(e)
}

function WE(e) {
    var t = e.getBoundingClientRect(), n = Do(t.width) / e.offsetWidth || 1, r = Do(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}

function UE(e, t, n) {
    n === void 0 && (n = !1);
    var r = Yt(t), o = Yt(t) && WE(t), i = Cr(t), s = Bo(e, o, n), l = {scrollLeft: 0, scrollTop: 0}, a = {x: 0, y: 0};
    return (r || !r && !n) && ((Tn(t) !== "body" || zf(i)) && (l = FE(t)), Yt(t) ? (a = Bo(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Af(i))), {
        x: s.left + l.scrollLeft - a.x,
        y: s.top + l.scrollTop - a.y,
        width: s.width,
        height: s.height
    }
}

function VE(e) {
    var t = new Map, n = new Set, r = [];
    e.forEach(function (i) {
        t.set(i.name, i)
    });

    function o(i) {
        n.add(i.name);
        var s = [].concat(i.requires || [], i.requiresIfExists || []);
        s.forEach(function (l) {
            if (!n.has(l)) {
                var a = t.get(l);
                a && o(a)
            }
        }), r.push(i)
    }

    return e.forEach(function (i) {
        n.has(i.name) || o(i)
    }), r
}

function HE(e) {
    var t = VE(e);
    return nE.reduce(function (n, r) {
        return n.concat(t.filter(function (o) {
            return o.phase === r
        }))
    }, [])
}

function KE(e) {
    var t;
    return function () {
        return t || (t = new Promise(function (n) {
            Promise.resolve().then(function () {
                t = void 0, n(e())
            })
        })), t
    }
}

function GE(e) {
    var t = e.reduce(function (n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
        }) : r, n
    }, {});
    return Object.keys(t).map(function (n) {
        return t[n]
    })
}

var nh = {placement: "bottom", modifiers: [], strategy: "absolute"};

function rh() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function XE(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? nh : o;
    return function (l, a, u) {
        u === void 0 && (u = i);
        var c = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, nh, i),
            modifiersData: {},
            elements: {reference: l, popper: a},
            attributes: {},
            styles: {}
        }, d = [], p = !1, w = {
            state: c, setOptions: function (f) {
                var m = typeof f == "function" ? f(c.options) : f;
                y(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
                    reference: Ur(l) ? zi(l) : l.contextElement ? zi(l.contextElement) : [],
                    popper: zi(a)
                };
                var g = HE(GE([].concat(r, c.options.modifiers)));
                return c.orderedModifiers = g.filter(function (b) {
                    return b.enabled
                }), v(), w.update()
            }, forceUpdate: function () {
                if (!p) {
                    var f = c.elements, m = f.reference, g = f.popper;
                    if (rh(m, g)) {
                        c.rects = {
                            reference: UE(m, Ss(g), c.options.strategy === "fixed"),
                            popper: Lf(g)
                        }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function (P) {
                            return c.modifiersData[P.name] = Object.assign({}, P.data)
                        });
                        for (var b = 0; b < c.orderedModifiers.length; b++) {
                            if (c.reset === !0) {
                                c.reset = !1, b = -1;
                                continue
                            }
                            var E = c.orderedModifiers[b], R = E.fn, k = E.options, T = k === void 0 ? {} : k,
                                M = E.name;
                            typeof R == "function" && (c = R({state: c, options: T, name: M, instance: w}) || c)
                        }
                    }
                }
            }, update: KE(function () {
                return new Promise(function (S) {
                    w.forceUpdate(), S(c)
                })
            }), destroy: function () {
                y(), p = !0
            }
        };
        if (!rh(l, a)) return w;
        w.setOptions(u).then(function (S) {
            !p && u.onFirstUpdate && u.onFirstUpdate(S)
        });

        function v() {
            c.orderedModifiers.forEach(function (S) {
                var f = S.name, m = S.options, g = m === void 0 ? {} : m, b = S.effect;
                if (typeof b == "function") {
                    var E = b({state: c, name: f, instance: w, options: g}), R = function () {
                    };
                    d.push(E || R)
                }
            })
        }

        function y() {
            d.forEach(function (S) {
                return S()
            }), d = []
        }

        return w
    }
}

var QE = [yE, _E, gE, iE, LE, TE, DE, fE, OE], YE = XE({defaultModifiers: QE});

function qE(e) {
    return typeof e == "function" ? e() : e
}

const Q0 = h.forwardRef(function (t, n) {
    const {children: r, container: o, disablePortal: i = !1} = t, [s, l] = h.useState(null),
        a = Le(h.isValidElement(r) ? r.ref : null, n);
    if (Dt(() => {
        i || l(qE(o) || document.body)
    }, [o, i]), Dt(() => {
        if (s && !i) return Wl(n, s), () => {
            Wl(n, null)
        }
    }, [n, s, i]), i) {
        if (h.isValidElement(r)) {
            const u = {ref: a};
            return h.cloneElement(r, u)
        }
        return C.jsx(h.Fragment, {children: r})
    }
    return C.jsx(h.Fragment, {children: s && Ca.createPortal(r, s)})
});

function ZE(e) {
    return q("MuiPopper", e)
}

ee("MuiPopper", ["root"]);
const JE = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
    e2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

function t2(e, t) {
    if (t === "ltr") return e;
    switch (e) {
        case"bottom-end":
            return "bottom-start";
        case"bottom-start":
            return "bottom-end";
        case"top-end":
            return "top-start";
        case"top-start":
            return "top-end";
        default:
            return e
    }
}

function ld(e) {
    return typeof e == "function" ? e() : e
}

function n2(e) {
    return e.nodeType !== void 0
}

const r2 = () => J({root: ["root"]}, Sk(ZE)), o2 = {}, i2 = h.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: s,
        disablePortal: l,
        modifiers: a,
        open: u,
        placement: c,
        popperOptions: d,
        popperRef: p,
        slotProps: w = {},
        slots: v = {},
        TransitionProps: y
    } = t, S = W(t, JE), f = h.useRef(null), m = Le(f, n), g = h.useRef(null), b = Le(g, p), E = h.useRef(b);
    Dt(() => {
        E.current = b
    }, [b]), h.useImperativeHandle(p, () => g.current, []);
    const R = t2(c, s), [k, T] = h.useState(R), [M, P] = h.useState(ld(o));
    h.useEffect(() => {
        g.current && g.current.forceUpdate()
    }), h.useEffect(() => {
        o && P(ld(o))
    }, [o]), Dt(() => {
        if (!M || !u) return;
        const _ = $ => {
            T($.placement)
        };
        let L = [{name: "preventOverflow", options: {altBoundary: l}}, {
            name: "flip",
            options: {altBoundary: l}
        }, {
            name: "onUpdate", enabled: !0, phase: "afterWrite", fn: ({state: $}) => {
                _($)
            }
        }];
        a != null && (L = L.concat(a)), d && d.modifiers != null && (L = L.concat(d.modifiers));
        const D = YE(M, f.current, x({placement: R}, d, {modifiers: L}));
        return E.current(D), () => {
            D.destroy(), E.current(null)
        }
    }, [M, l, a, u, d, R]);
    const O = {placement: k};
    y !== null && (O.TransitionProps = y);
    const j = r2(), N = (r = v.root) != null ? r : "div", A = vr({
        elementType: N,
        externalSlotProps: w.root,
        externalForwardedProps: S,
        additionalProps: {role: "tooltip", ref: m},
        ownerState: t,
        className: j.root
    });
    return C.jsx(N, x({}, A, {children: typeof i == "function" ? i(O) : i}))
}), s2 = h.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: s = "ltr",
        disablePortal: l = !1,
        keepMounted: a = !1,
        modifiers: u,
        open: c,
        placement: d = "bottom",
        popperOptions: p = o2,
        popperRef: w,
        style: v,
        transition: y = !1,
        slotProps: S = {},
        slots: f = {}
    } = t, m = W(t, e2), [g, b] = h.useState(!0), E = () => {
        b(!1)
    }, R = () => {
        b(!0)
    };
    if (!a && !c && (!y || g)) return null;
    let k;
    if (i) k = i; else if (r) {
        const P = ld(r);
        k = P && n2(P) ? qe(P).body : qe(null).body
    }
    const T = !c && a && (!y || g) ? "none" : void 0, M = y ? {in: c, onEnter: E, onExited: R} : void 0;
    return C.jsx(Q0, {
        disablePortal: l,
        container: k,
        children: C.jsx(i2, x({
            anchorEl: r,
            direction: s,
            disablePortal: l,
            modifiers: u,
            ref: n,
            open: y ? !g : c,
            placement: d,
            popperOptions: p,
            popperRef: w,
            slotProps: S,
            slots: f
        }, m, {style: x({position: "fixed", top: 0, left: 0, display: T}, v), TransitionProps: M, children: o}))
    })
});

function l2(e = {}) {
    const {
        autoHideDuration: t = null,
        disableWindowBlurListener: n = !1,
        onClose: r,
        open: o,
        resumeHideDuration: i
    } = e, s = h.useRef();
    h.useEffect(() => {
        if (!o) return;

        function f(m) {
            m.defaultPrevented || (m.key === "Escape" || m.key === "Esc") && (r == null || r(m, "escapeKeyDown"))
        }

        return document.addEventListener("keydown", f), () => {
            document.removeEventListener("keydown", f)
        }
    }, [o, r]);
    const l = un((f, m) => {
        r == null || r(f, m)
    }), a = un(f => {
        !r || f == null || (clearTimeout(s.current), s.current = setTimeout(() => {
            l(null, "timeout")
        }, f))
    });
    h.useEffect(() => (o && a(t), () => {
        clearTimeout(s.current)
    }), [o, t, a]);
    const u = f => {
        r == null || r(f, "clickaway")
    }, c = () => {
        clearTimeout(s.current)
    }, d = h.useCallback(() => {
        t != null && a(i ?? t * .5)
    }, [t, i, a]), p = f => m => {
        const g = f.onBlur;
        g == null || g(m), d()
    }, w = f => m => {
        const g = f.onFocus;
        g == null || g(m), c()
    }, v = f => m => {
        const g = f.onMouseEnter;
        g == null || g(m), c()
    }, y = f => m => {
        const g = f.onMouseLeave;
        g == null || g(m), d()
    };
    return h.useEffect(() => {
        if (!n && o) return window.addEventListener("focus", d), window.addEventListener("blur", c), () => {
            window.removeEventListener("focus", d), window.removeEventListener("blur", c)
        }
    }, [n, d, o]), {
        getRootProps: (f = {}) => {
            const m = x({}, Yl(e), Yl(f));
            return x({role: "presentation"}, f, m, {
                onBlur: p(m),
                onFocus: w(m),
                onMouseEnter: v(m),
                onMouseLeave: y(m)
            })
        }, onClickAway: u
    }
}

const a2 = ["onChange", "maxRows", "minRows", "style", "value"];

function Ks(e) {
    return parseInt(e, 10) || 0
}

const u2 = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)"
    }
};

function oh(e) {
    return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow
}

const c2 = h.forwardRef(function (t, n) {
    const {onChange: r, maxRows: o, minRows: i = 1, style: s, value: l} = t,
        a = W(t, a2), {current: u} = h.useRef(l != null), c = h.useRef(null), d = Le(n, c), p = h.useRef(null),
        w = h.useRef(0), [v, y] = h.useState({outerHeightStyle: 0}), S = h.useCallback(() => {
            const b = c.current, R = $n(b).getComputedStyle(b);
            if (R.width === "0px") return {outerHeightStyle: 0};
            const k = p.current;
            k.style.width = R.width, k.value = b.value || t.placeholder || "x", k.value.slice(-1) === `
` && (k.value += " ");
            const T = R.boxSizing, M = Ks(R.paddingBottom) + Ks(R.paddingTop),
                P = Ks(R.borderBottomWidth) + Ks(R.borderTopWidth), O = k.scrollHeight;
            k.value = "x";
            const j = k.scrollHeight;
            let N = O;
            i && (N = Math.max(Number(i) * j, N)), o && (N = Math.min(Number(o) * j, N)), N = Math.max(N, j);
            const A = N + (T === "border-box" ? M + P : 0), _ = Math.abs(N - O) <= 1;
            return {outerHeightStyle: A, overflow: _}
        }, [o, i, t.placeholder]), f = (b, E) => {
            const {outerHeightStyle: R, overflow: k} = E;
            return w.current < 20 && (R > 0 && Math.abs((b.outerHeightStyle || 0) - R) > 1 || b.overflow !== k) ? (w.current += 1, {
                overflow: k,
                outerHeightStyle: R
            }) : b
        }, m = h.useCallback(() => {
            const b = S();
            oh(b) || y(E => f(E, b))
        }, [S]);
    Dt(() => {
        const b = () => {
            const O = S();
            oh(O) || Ca.flushSync(() => {
                y(j => f(j, O))
            })
        }, E = () => {
            w.current = 0, b()
        };
        let R;
        const k = Ia(E), T = c.current, M = $n(T);
        M.addEventListener("resize", k);
        let P;
        return typeof ResizeObserver < "u" && (P = new ResizeObserver(E), P.observe(T)), () => {
            k.clear(), cancelAnimationFrame(R), M.removeEventListener("resize", k), P && P.disconnect()
        }
    }, [S]), Dt(() => {
        m()
    }), h.useEffect(() => {
        w.current = 0
    }, [l]);
    const g = b => {
        w.current = 0, u || m(), r && r(b)
    };
    return C.jsxs(h.Fragment, {
        children: [C.jsx("textarea", x({
            value: l,
            onChange: g,
            ref: d,
            rows: i,
            style: x({height: v.outerHeightStyle, overflow: v.overflow ? "hidden" : void 0}, s)
        }, a)), C.jsx("textarea", {
            "aria-hidden": !0,
            className: t.className,
            readOnly: !0,
            ref: p,
            tabIndex: -1,
            style: x({}, u2.shadow, s, {paddingTop: 0, paddingBottom: 0})
        })]
    })
});

function ad(e, t) {
    return ad = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, o) {
        return r.__proto__ = o, r
    }, ad(e, t)
}

function Y0(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ad(e, t)
}

const ih = {disabled: !1}, Zl = Sn.createContext(null);
var d2 = function (t) {
    return t.scrollTop
}, Si = "unmounted", Er = "exited", Rr = "entering", no = "entered", ud = "exiting", Gn = function (e) {
    Y0(t, e);

    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var s = o, l = s && !s.isMounting ? r.enter : r.appear, a;
        return i.appearStatus = null, r.in ? l ? (a = Er, i.appearStatus = Rr) : a = no : r.unmountOnExit || r.mountOnEnter ? a = Si : a = Er, i.state = {status: a}, i.nextCallback = null, i
    }

    t.getDerivedStateFromProps = function (o, i) {
        var s = o.in;
        return s && i.status === Si ? {status: Er} : null
    };
    var n = t.prototype;
    return n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
    }, n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
            var s = this.state.status;
            this.props.in ? s !== Rr && s !== no && (i = Rr) : (s === Rr || s === no) && (i = ud)
        }
        this.updateStatus(!1, i)
    }, n.componentWillUnmount = function () {
        this.cancelNextCallback()
    }, n.getTimeouts = function () {
        var o = this.props.timeout, i, s, l;
        return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
            exit: i,
            enter: s,
            appear: l
        }
    }, n.updateStatus = function (o, i) {
        if (o === void 0 && (o = !1), i !== null) if (this.cancelNextCallback(), i === Rr) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var s = this.props.nodeRef ? this.props.nodeRef.current : Us.findDOMNode(this);
                s && d2(s)
            }
            this.performEnter(o)
        } else this.performExit(); else this.props.unmountOnExit && this.state.status === Er && this.setState({status: Si})
    }, n.performEnter = function (o) {
        var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o,
            a = this.props.nodeRef ? [l] : [Us.findDOMNode(this), l], u = a[0], c = a[1], d = this.getTimeouts(),
            p = l ? d.appear : d.enter;
        if (!o && !s || ih.disabled) {
            this.safeSetState({status: no}, function () {
                i.props.onEntered(u)
            });
            return
        }
        this.props.onEnter(u, c), this.safeSetState({status: Rr}, function () {
            i.props.onEntering(u, c), i.onTransitionEnd(p, function () {
                i.safeSetState({status: no}, function () {
                    i.props.onEntered(u, c)
                })
            })
        })
    }, n.performExit = function () {
        var o = this, i = this.props.exit, s = this.getTimeouts(),
            l = this.props.nodeRef ? void 0 : Us.findDOMNode(this);
        if (!i || ih.disabled) {
            this.safeSetState({status: Er}, function () {
                o.props.onExited(l)
            });
            return
        }
        this.props.onExit(l), this.safeSetState({status: ud}, function () {
            o.props.onExiting(l), o.onTransitionEnd(s.exit, function () {
                o.safeSetState({status: Er}, function () {
                    o.props.onExited(l)
                })
            })
        })
    }, n.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
    }, n.safeSetState = function (o, i) {
        i = this.setNextCallback(i), this.setState(o, i)
    }, n.setNextCallback = function (o) {
        var i = this, s = !0;
        return this.nextCallback = function (l) {
            s && (s = !1, i.nextCallback = null, o(l))
        }, this.nextCallback.cancel = function () {
            s = !1
        }, this.nextCallback
    }, n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Us.findDOMNode(this),
            l = o == null && !this.props.addEndListener;
        if (!s || l) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = a[0], c = a[1];
            this.props.addEndListener(u, c)
        }
        o != null && setTimeout(this.nextCallback, o)
    }, n.render = function () {
        var o = this.state.status;
        if (o === Si) return null;
        var i = this.props, s = i.children;
        i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
        var l = W(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return Sn.createElement(Zl.Provider, {value: null}, typeof s == "function" ? s(o, l) : Sn.cloneElement(Sn.Children.only(s), l))
    }, t
}(Sn.Component);
Gn.contextType = Zl;
Gn.propTypes = {};

function to() {
}

Gn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: to,
    onEntering: to,
    onEntered: to,
    onExit: to,
    onExiting: to,
    onExited: to
};
Gn.UNMOUNTED = Si;
Gn.EXITED = Er;
Gn.ENTERING = Rr;
Gn.ENTERED = no;
Gn.EXITING = ud;
const Df = Gn;

function f2(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Bf(e, t) {
    var n = function (i) {
        return t && h.isValidElement(i) ? t(i) : i
    }, r = Object.create(null);
    return e && h.Children.map(e, function (o) {
        return o
    }).forEach(function (o) {
        r[o.key] = n(o)
    }), r
}

function p2(e, t) {
    e = e || {}, t = t || {};

    function n(c) {
        return c in t ? t[c] : e[c]
    }

    var r = Object.create(null), o = [];
    for (var i in e) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
    var s, l = {};
    for (var a in t) {
        if (r[a]) for (s = 0; s < r[a].length; s++) {
            var u = r[a][s];
            l[r[a][s]] = n(u)
        }
        l[a] = n(a)
    }
    for (s = 0; s < o.length; s++) l[o[s]] = n(o[s]);
    return l
}

function Mr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}

function m2(e, t) {
    return Bf(e.children, function (n) {
        return h.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Mr(n, "appear", e),
            enter: Mr(n, "enter", e),
            exit: Mr(n, "exit", e)
        })
    })
}

function h2(e, t, n) {
    var r = Bf(e.children), o = p2(t, r);
    return Object.keys(o).forEach(function (i) {
        var s = o[i];
        if (h.isValidElement(s)) {
            var l = i in t, a = i in r, u = t[i], c = h.isValidElement(u) && !u.props.in;
            a && (!l || c) ? o[i] = h.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: Mr(s, "exit", e),
                enter: Mr(s, "enter", e)
            }) : !a && l && !c ? o[i] = h.cloneElement(s, {in: !1}) : a && l && h.isValidElement(u) && (o[i] = h.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: Mr(s, "exit", e),
                enter: Mr(s, "enter", e)
            }))
        }
    }), o
}

var g2 = Object.values || function (e) {
    return Object.keys(e).map(function (t) {
        return e[t]
    })
}, v2 = {
    component: "div", childFactory: function (t) {
        return t
    }
}, Ff = function (e) {
    Y0(t, e);

    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var s = i.handleExited.bind(f2(i));
        return i.state = {contextValue: {isMounting: !0}, handleExited: s, firstRender: !0}, i
    }

    var n = t.prototype;
    return n.componentDidMount = function () {
        this.mounted = !0, this.setState({contextValue: {isMounting: !1}})
    }, n.componentWillUnmount = function () {
        this.mounted = !1
    }, t.getDerivedStateFromProps = function (o, i) {
        var s = i.children, l = i.handleExited, a = i.firstRender;
        return {children: a ? m2(o, l) : h2(o, s, l), firstRender: !1}
    }, n.handleExited = function (o, i) {
        var s = Bf(this.props.children);
        o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function (l) {
            var a = x({}, l.children);
            return delete a[o.key], {children: a}
        }))
    }, n.render = function () {
        var o = this.props, i = o.component, s = o.childFactory, l = W(o, ["component", "childFactory"]),
            a = this.state.contextValue, u = g2(this.state.children).map(s);
        return delete l.appear, delete l.enter, delete l.exit, i === null ? Sn.createElement(Zl.Provider, {value: a}, u) : Sn.createElement(Zl.Provider, {value: a}, Sn.createElement(i, l, u))
    }, t
}(Sn.Component);
Ff.propTypes = {};
Ff.defaultProps = v2;
const y2 = Ff, Wf = e => e.scrollTop;

function Wo(e, t) {
    var n, r;
    const {timeout: o, easing: i, style: s = {}} = e;
    return {
        duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
        easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
        delay: s.transitionDelay
    }
}

const x2 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
    b2 = {entering: {opacity: 1}, entered: {opacity: 1}}, C2 = h.forwardRef(function (t, n) {
        const r = Mn(), o = {
            enter: r.transitions.duration.enteringScreen,
            exit: r.transitions.duration.leavingScreen
        }, {
            addEndListener: i,
            appear: s = !0,
            children: l,
            easing: a,
            in: u,
            onEnter: c,
            onEntered: d,
            onEntering: p,
            onExit: w,
            onExited: v,
            onExiting: y,
            style: S,
            timeout: f = o,
            TransitionComponent: m = Df
        } = t, g = W(t, x2), b = h.useRef(null), E = Le(b, l.ref, n), R = A => _ => {
            if (A) {
                const L = b.current;
                _ === void 0 ? A(L) : A(L, _)
            }
        }, k = R(p), T = R((A, _) => {
            Wf(A);
            const L = Wo({style: S, timeout: f, easing: a}, {mode: "enter"});
            A.style.webkitTransition = r.transitions.create("opacity", L), A.style.transition = r.transitions.create("opacity", L), c && c(A, _)
        }), M = R(d), P = R(y), O = R(A => {
            const _ = Wo({style: S, timeout: f, easing: a}, {mode: "exit"});
            A.style.webkitTransition = r.transitions.create("opacity", _), A.style.transition = r.transitions.create("opacity", _), w && w(A)
        }), j = R(v), N = A => {
            i && i(b.current, A)
        };
        return C.jsx(m, x({
            appear: s,
            in: u,
            nodeRef: b,
            onEnter: T,
            onEntered: M,
            onEntering: k,
            onExit: O,
            onExited: j,
            onExiting: P,
            addEndListener: N,
            timeout: f
        }, g, {
            children: (A, _) => h.cloneElement(l, x({
                style: x({
                    opacity: 0,
                    visibility: A === "exited" && !u ? "hidden" : void 0
                }, b2[A], S, l.props.style), ref: E
            }, _))
        }))
    }), q0 = C2;

function w2(e) {
    return q("MuiBackdrop", e)
}

ee("MuiBackdrop", ["root", "invisible"]);
const S2 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"],
    k2 = e => {
        const {classes: t, invisible: n} = e;
        return J({root: ["root", n && "invisible"]}, w2, t)
    }, E2 = F("div", {
        name: "MuiBackdrop", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.invisible && t.invisible]
        }
    })(({ownerState: e}) => x({
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent"
    }, e.invisible && {backgroundColor: "transparent"})), R2 = h.forwardRef(function (t, n) {
        var r, o, i;
        const s = Z({props: t, name: "MuiBackdrop"}), {
            children: l,
            className: a,
            component: u = "div",
            components: c = {},
            componentsProps: d = {},
            invisible: p = !1,
            open: w,
            slotProps: v = {},
            slots: y = {},
            TransitionComponent: S = q0,
            transitionDuration: f
        } = s, m = W(s, S2), g = x({}, s, {component: u, invisible: p}), b = k2(g), E = (r = v.root) != null ? r : d.root;
        return C.jsx(S, x({
            in: w,
            timeout: f
        }, m, {
            children: C.jsx(E2, x({"aria-hidden": !0}, E, {
                as: (o = (i = y.root) != null ? i : c.Root) != null ? o : u,
                className: U(b.root, a, E == null ? void 0 : E.className),
                ownerState: x({}, g, E == null ? void 0 : E.ownerState),
                classes: b,
                ref: n,
                children: l
            }))
        }))
    }), Z0 = R2;

function P2(e) {
    return q("MuiModal", e)
}

ee("MuiModal", ["root", "hidden", "backdrop"]);
const $2 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"],
    T2 = e => {
        const {open: t, exited: n, classes: r} = e;
        return J({root: ["root", !t && n && "hidden"], backdrop: ["backdrop"]}, P2, r)
    }, M2 = F("div", {
        name: "MuiModal", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, !n.open && n.exited && t.hidden]
        }
    })(({theme: e, ownerState: t}) => x({
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
    }, !t.open && t.exited && {visibility: "hidden"})),
    O2 = F(Z0, {name: "MuiModal", slot: "Backdrop", overridesResolver: (e, t) => t.backdrop})({zIndex: -1}),
    I2 = h.forwardRef(function (t, n) {
        var r, o, i, s, l, a;
        const u = Z({name: "MuiModal", props: t}), {
            BackdropComponent: c = O2,
            BackdropProps: d,
            className: p,
            closeAfterTransition: w = !1,
            children: v,
            container: y,
            component: S,
            components: f = {},
            componentsProps: m = {},
            disableAutoFocus: g = !1,
            disableEnforceFocus: b = !1,
            disableEscapeKeyDown: E = !1,
            disablePortal: R = !1,
            disableRestoreFocus: k = !1,
            disableScrollLock: T = !1,
            hideBackdrop: M = !1,
            keepMounted: P = !1,
            onBackdropClick: O,
            open: j,
            slotProps: N,
            slots: A
        } = u, _ = W(u, $2), L = x({}, u, {
            closeAfterTransition: w,
            disableAutoFocus: g,
            disableEnforceFocus: b,
            disableEscapeKeyDown: E,
            disablePortal: R,
            disableRestoreFocus: k,
            disableScrollLock: T,
            hideBackdrop: M,
            keepMounted: P
        }), {
            getRootProps: D,
            getBackdropProps: $,
            getTransitionProps: I,
            portalRef: B,
            isTopModal: X,
            exited: Y,
            hasTransition: le
        } = jk(x({}, L, {rootRef: n})), G = x({}, L, {exited: Y}), oe = T2(G), te = {};
        if (v.props.tabIndex === void 0 && (te.tabIndex = "-1"), le) {
            const {onEnter: re, onExited: ce} = I();
            te.onEnter = re, te.onExited = ce
        }
        const Ce = (r = (o = A == null ? void 0 : A.root) != null ? o : f.Root) != null ? r : M2,
            pe = (i = (s = A == null ? void 0 : A.backdrop) != null ? s : f.Backdrop) != null ? i : c,
            ue = (l = N == null ? void 0 : N.root) != null ? l : m.root,
            Be = (a = N == null ? void 0 : N.backdrop) != null ? a : m.backdrop, ne = vr({
                elementType: Ce,
                externalSlotProps: ue,
                externalForwardedProps: _,
                getSlotProps: D,
                additionalProps: {ref: n, as: S},
                ownerState: G,
                className: U(p, ue == null ? void 0 : ue.className, oe == null ? void 0 : oe.root, !G.open && G.exited && (oe == null ? void 0 : oe.hidden))
            }), ke = vr({
                elementType: pe,
                externalSlotProps: Be,
                additionalProps: d,
                getSlotProps: re => $(x({}, re, {
                    onClick: ce => {
                        O && O(ce), re != null && re.onClick && re.onClick(ce)
                    }
                })),
                className: U(Be == null ? void 0 : Be.className, d == null ? void 0 : d.className, oe == null ? void 0 : oe.backdrop),
                ownerState: G
            });
        return !P && !j && (!le || Y) ? null : C.jsx(Q0, {
            ref: B,
            container: y,
            disablePortal: R,
            children: C.jsxs(Ce, x({}, ne, {
                children: [!M && c ? C.jsx(pe, x({}, ke)) : null, C.jsx(Vk, {
                    disableEnforceFocus: b,
                    disableAutoFocus: g,
                    disableRestoreFocus: k,
                    isEnabled: X,
                    open: j,
                    children: h.cloneElement(v, te)
                })]
            }))
        })
    }), Uf = I2;

function N2(e) {
    return q("MuiSvgIcon", e)
}

ee("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const L2 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
    j2 = e => {
        const {color: t, fontSize: n, classes: r} = e,
            o = {root: ["root", t !== "inherit" && `color${V(t)}`, `fontSize${V(n)}`]};
        return J(o, N2, r)
    }, _2 = F("svg", {
        name: "MuiSvgIcon", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.color !== "inherit" && t[`color${V(n.color)}`], t[`fontSize${V(n.fontSize)}`]]
        }
    })(({theme: e, ownerState: t}) => {
        var n, r, o, i, s, l, a, u, c, d, p, w, v;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: t.hasSvgAsChild ? void 0 : "currentColor",
            flexShrink: 0,
            transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter}),
            fontSize: {
                inherit: "inherit",
                small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
                medium: ((l = e.typography) == null || (a = l.pxToRem) == null ? void 0 : a.call(l, 24)) || "1.5rem",
                large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
            }[t.fontSize],
            color: (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? d : {
                action: (w = (e.vars || e).palette) == null || (w = w.action) == null ? void 0 : w.active,
                disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
                inherit: void 0
            }[t.color]
        }
    }), J0 = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiSvgIcon"}), {
            children: o,
            className: i,
            color: s = "inherit",
            component: l = "svg",
            fontSize: a = "medium",
            htmlColor: u,
            inheritViewBox: c = !1,
            titleAccess: d,
            viewBox: p = "0 0 24 24"
        } = r, w = W(r, L2), v = h.isValidElement(o) && o.type === "svg", y = x({}, r, {
            color: s,
            component: l,
            fontSize: a,
            instanceFontSize: t.fontSize,
            inheritViewBox: c,
            viewBox: p,
            hasSvgAsChild: v
        }), S = {};
        c || (S.viewBox = p);
        const f = j2(y);
        return C.jsxs(_2, x({
            as: l,
            className: U(f.root, i),
            focusable: "false",
            color: u,
            "aria-hidden": d ? void 0 : !0,
            role: d ? "img" : void 0,
            ref: n
        }, S, w, v && o.props, {
            ownerState: y,
            children: [v ? o.props.children : o, d ? C.jsx("title", {children: d}) : null]
        }))
    });
J0.muiName = "SvgIcon";
const sh = J0;

function Vt(e, t) {
    function n(r, o) {
        return C.jsx(sh, x({"data-testid": `${t}Icon`, ref: o}, r, {children: e}))
    }

    return n.muiName = sh.muiName, h.memo(h.forwardRef(n))
}

const A2 = {
        configure: e => {
            hf.configure(e)
        }
    }, z2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        capitalize: V,
        createChainedFunction: Jc,
        createSvgIcon: Vt,
        debounce: Ia,
        deprecatedPropType: Sb,
        isMuiElement: Ni,
        ownerDocument: qe,
        ownerWindow: $n,
        requirePropFactory: kb,
        setRef: Wl,
        unstable_ClassNameGenerator: A2,
        unstable_useEnhancedEffect: Dt,
        unstable_useId: ys,
        unsupportedProp: Pb,
        useControlled: Ul,
        useEventCallback: un,
        useForkRef: Le,
        useIsFocusVisible: La
    }, Symbol.toStringTag, {value: "Module"})),
    D2 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function B2(e, t, n) {
    const r = t.getBoundingClientRect(), o = n && n.getBoundingClientRect(), i = $n(t);
    let s;
    if (t.fakeTransform) s = t.fakeTransform; else {
        const u = i.getComputedStyle(t);
        s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform")
    }
    let l = 0, a = 0;
    if (s && s !== "none" && typeof s == "string") {
        const u = s.split("(")[1].split(")")[0].split(",");
        l = parseInt(u[4], 10), a = parseInt(u[5], 10)
    }
    return e === "left" ? o ? `translateX(${o.right + l - r.left}px)` : `translateX(${i.innerWidth + l - r.left}px)` : e === "right" ? o ? `translateX(-${r.right - o.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + a - r.top}px)` : `translateY(${i.innerHeight + a - r.top}px)` : o ? `translateY(-${r.top - o.top + r.height - a}px)` : `translateY(-${r.top + r.height - a}px)`
}

function F2(e) {
    return typeof e == "function" ? e() : e
}

function Gs(e, t, n) {
    const r = F2(n), o = B2(e, t, r);
    o && (t.style.webkitTransform = o, t.style.transform = o)
}

const W2 = h.forwardRef(function (t, n) {
    const r = Mn(), o = {enter: r.transitions.easing.easeOut, exit: r.transitions.easing.sharp}, i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen
    }, {
        addEndListener: s,
        appear: l = !0,
        children: a,
        container: u,
        direction: c = "down",
        easing: d = o,
        in: p,
        onEnter: w,
        onEntered: v,
        onEntering: y,
        onExit: S,
        onExited: f,
        onExiting: m,
        style: g,
        timeout: b = i,
        TransitionComponent: E = Df
    } = t, R = W(t, D2), k = h.useRef(null), T = Le(a.ref, k, n), M = $ => I => {
        $ && (I === void 0 ? $(k.current) : $(k.current, I))
    }, P = M(($, I) => {
        Gs(c, $, u), Wf($), w && w($, I)
    }), O = M(($, I) => {
        const B = Wo({timeout: b, style: g, easing: d}, {mode: "enter"});
        $.style.webkitTransition = r.transitions.create("-webkit-transform", x({}, B)), $.style.transition = r.transitions.create("transform", x({}, B)), $.style.webkitTransform = "none", $.style.transform = "none", y && y($, I)
    }), j = M(v), N = M(m), A = M($ => {
        const I = Wo({timeout: b, style: g, easing: d}, {mode: "exit"});
        $.style.webkitTransition = r.transitions.create("-webkit-transform", I), $.style.transition = r.transitions.create("transform", I), Gs(c, $, u), S && S($)
    }), _ = M($ => {
        $.style.webkitTransition = "", $.style.transition = "", f && f($)
    }), L = $ => {
        s && s(k.current, $)
    }, D = h.useCallback(() => {
        k.current && Gs(c, k.current, u)
    }, [c, u]);
    return h.useEffect(() => {
        if (p || c === "down" || c === "right") return;
        const $ = Ia(() => {
            k.current && Gs(c, k.current, u)
        }), I = $n(k.current);
        return I.addEventListener("resize", $), () => {
            $.clear(), I.removeEventListener("resize", $)
        }
    }, [c, p, u]), h.useEffect(() => {
        p || D()
    }, [p, D]), C.jsx(E, x({
        nodeRef: k,
        onEnter: P,
        onEntered: j,
        onEntering: O,
        onExit: A,
        onExited: _,
        onExiting: N,
        addEndListener: L,
        appear: l,
        in: p,
        timeout: b
    }, R, {
        children: ($, I) => h.cloneElement(a, x({
            ref: T,
            style: x({visibility: $ === "exited" && !p ? "hidden" : void 0}, g, a.props.style)
        }, I))
    }))
}), U2 = W2;

function V2(e) {
    return q("MuiPaper", e)
}

ee("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const H2 = ["className", "component", "elevation", "square", "variant"], K2 = e => {
    const {square: t, elevation: n, variant: r, classes: o} = e,
        i = {root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]};
    return J(i, V2, o)
}, G2 = F("div", {
    name: "MuiPaper", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]]
    }
})(({theme: e, ownerState: t}) => {
    var n;
    return x({
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow")
    }, !t.square && {borderRadius: e.shape.borderRadius}, t.variant === "outlined" && {border: `1px solid ${(e.vars || e).palette.divider}`}, t.variant === "elevation" && x({boxShadow: (e.vars || e).shadows[t.elevation]}, !e.vars && e.palette.mode === "dark" && {backgroundImage: `linear-gradient(${Ke("#fff", Vm(t.elevation))}, ${Ke("#fff", Vm(t.elevation))})`}, e.vars && {backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]}))
}), X2 = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiPaper"}), {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: l = !1,
        variant: a = "elevation"
    } = r, u = W(r, H2), c = x({}, r, {component: i, elevation: s, square: l, variant: a}), d = K2(c);
    return C.jsx(G2, x({as: i, ownerState: c, className: U(d.root, o), ref: n}, u))
}), mn = X2;

function Q2(e) {
    return q("MuiDrawer", e)
}

ee("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Y2 = ["BackdropProps"],
    q2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"],
    ey = (e, t) => {
        const {ownerState: n} = e;
        return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal]
    }, Z2 = e => {
        const {classes: t, anchor: n, variant: r} = e, o = {
            root: ["root"],
            docked: [(r === "permanent" || r === "persistent") && "docked"],
            modal: ["modal"],
            paper: ["paper", `paperAnchor${V(n)}`, r !== "temporary" && `paperAnchorDocked${V(n)}`]
        };
        return J(o, Q2, t)
    }, J2 = F(Uf, {
        name: "MuiDrawer",
        slot: "Root",
        overridesResolver: ey
    })(({theme: e}) => ({zIndex: (e.vars || e).zIndex.drawer})), lh = F("div", {
        shouldForwardProp: Ot,
        name: "MuiDrawer",
        slot: "Docked",
        skipVariantsResolver: !1,
        overridesResolver: ey
    })({flex: "0 0 auto"}), eR = F(mn, {
        name: "MuiDrawer", slot: "Paper", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.paper, t[`paperAnchor${V(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${V(n.anchor)}`]]
        }
    })(({theme: e, ownerState: t}) => x({
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0
    }, t.anchor === "left" && {left: 0}, t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
    }, t.anchor === "right" && {right: 0}, t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
    }, t.anchor === "left" && t.variant !== "temporary" && {borderRight: `1px solid ${(e.vars || e).palette.divider}`}, t.anchor === "top" && t.variant !== "temporary" && {borderBottom: `1px solid ${(e.vars || e).palette.divider}`}, t.anchor === "right" && t.variant !== "temporary" && {borderLeft: `1px solid ${(e.vars || e).palette.divider}`}, t.anchor === "bottom" && t.variant !== "temporary" && {borderTop: `1px solid ${(e.vars || e).palette.divider}`})),
    ty = {left: "right", right: "left", top: "down", bottom: "up"};

function tR(e) {
    return ["left", "right"].indexOf(e) !== -1
}

function nR(e, t) {
    return e.direction === "rtl" && tR(t) ? ty[t] : t
}

const rR = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiDrawer"}), o = Mn(), i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen
    }, {
        anchor: s = "left",
        BackdropProps: l,
        children: a,
        className: u,
        elevation: c = 16,
        hideBackdrop: d = !1,
        ModalProps: {BackdropProps: p} = {},
        onClose: w,
        open: v = !1,
        PaperProps: y = {},
        SlideProps: S,
        TransitionComponent: f = U2,
        transitionDuration: m = i,
        variant: g = "temporary"
    } = r, b = W(r.ModalProps, Y2), E = W(r, q2), R = h.useRef(!1);
    h.useEffect(() => {
        R.current = !0
    }, []);
    const k = nR(o, s), M = x({}, r, {anchor: s, elevation: c, open: v, variant: g}, E), P = Z2(M),
        O = C.jsx(eR, x({elevation: g === "temporary" ? c : 0, square: !0}, y, {
            className: U(P.paper, y.className),
            ownerState: M,
            children: a
        }));
    if (g === "permanent") return C.jsx(lh, x({
        className: U(P.root, P.docked, u),
        ownerState: M,
        ref: n
    }, E, {children: O}));
    const j = C.jsx(f, x({in: v, direction: ty[k], timeout: m, appear: R.current}, S, {children: O}));
    return g === "persistent" ? C.jsx(lh, x({
        className: U(P.root, P.docked, u),
        ownerState: M,
        ref: n
    }, E, {children: j})) : C.jsx(J2, x({
        BackdropProps: x({}, l, p, {transitionDuration: m}),
        className: U(P.root, P.modal, u),
        open: v,
        ownerState: M,
        onClose: w,
        hideBackdrop: d,
        ref: n
    }, E, b, {children: j}))
}), oR = rR, iR = h.createContext({}), Dn = iR;

function sR(e) {
    return q("MuiList", e)
}

ee("MuiList", ["root", "padding", "dense", "subheader"]);
const lR = ["children", "className", "component", "dense", "disablePadding", "subheader"], aR = e => {
        const {classes: t, disablePadding: n, dense: r, subheader: o} = e;
        return J({root: ["root", !n && "padding", r && "dense", o && "subheader"]}, sR, t)
    }, uR = F("ul", {
        name: "MuiList", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
        }
    })(({ownerState: e}) => x({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative"
    }, !e.disablePadding && {paddingTop: 8, paddingBottom: 8}, e.subheader && {paddingTop: 0})),
    cR = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiList"}), {
                children: o,
                className: i,
                component: s = "ul",
                dense: l = !1,
                disablePadding: a = !1,
                subheader: u
            } = r, c = W(r, lR), d = h.useMemo(() => ({dense: l}), [l]),
            p = x({}, r, {component: s, dense: l, disablePadding: a}), w = aR(p);
        return C.jsx(Dn.Provider, {
            value: d,
            children: C.jsxs(uR, x({as: s, className: U(w.root, i), ref: n, ownerState: p}, c, {children: [u, o]}))
        })
    }), ny = cR;

function dR(e) {
    const {
            className: t,
            classes: n,
            pulsate: r = !1,
            rippleX: o,
            rippleY: i,
            rippleSize: s,
            in: l,
            onExited: a,
            timeout: u
        } = e, [c, d] = h.useState(!1), p = U(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
        w = {width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o},
        v = U(n.child, c && n.childLeaving, r && n.childPulsate);
    return !l && !c && d(!0), h.useEffect(() => {
        if (!l && a != null) {
            const y = setTimeout(a, u);
            return () => {
                clearTimeout(y)
            }
        }
    }, [a, l, u]), C.jsx("span", {className: p, style: w, children: C.jsx("span", {className: v})})
}

const fR = ee("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
    Ht = fR, pR = ["center", "classes", "className"];
let au = e => e, ah, uh, ch, dh;
const cd = 550, mR = 80, hR = Sf(ah || (ah = au`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), gR = Sf(uh || (uh = au`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), vR = Sf(ch || (ch = au`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), yR = F("span", {name: "MuiTouchRipple", slot: "Root"})({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
    }), xR = F(dR, {name: "MuiTouchRipple", slot: "Ripple"})(dh || (dh = au`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Ht.rippleVisible, hR, cd, ({theme: e}) => e.transitions.easing.easeInOut, Ht.ripplePulsate, ({theme: e}) => e.transitions.duration.shorter, Ht.child, Ht.childLeaving, gR, cd, ({theme: e}) => e.transitions.easing.easeInOut, Ht.childPulsate, vR, ({theme: e}) => e.transitions.easing.easeInOut),
    bR = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiTouchRipple"}), {center: o = !1, classes: i = {}, className: s} = r,
            l = W(r, pR), [a, u] = h.useState([]), c = h.useRef(0), d = h.useRef(null);
        h.useEffect(() => {
            d.current && (d.current(), d.current = null)
        }, [a]);
        const p = h.useRef(!1), w = h.useRef(0), v = h.useRef(null), y = h.useRef(null);
        h.useEffect(() => () => {
            w.current && clearTimeout(w.current)
        }, []);
        const S = h.useCallback(b => {
            const {pulsate: E, rippleX: R, rippleY: k, rippleSize: T, cb: M} = b;
            u(P => [...P, C.jsx(xR, {
                classes: {
                    ripple: U(i.ripple, Ht.ripple),
                    rippleVisible: U(i.rippleVisible, Ht.rippleVisible),
                    ripplePulsate: U(i.ripplePulsate, Ht.ripplePulsate),
                    child: U(i.child, Ht.child),
                    childLeaving: U(i.childLeaving, Ht.childLeaving),
                    childPulsate: U(i.childPulsate, Ht.childPulsate)
                }, timeout: cd, pulsate: E, rippleX: R, rippleY: k, rippleSize: T
            }, c.current)]), c.current += 1, d.current = M
        }, [i]), f = h.useCallback((b = {}, E = {}, R = () => {
        }) => {
            const {pulsate: k = !1, center: T = o || E.pulsate, fakeElement: M = !1} = E;
            if ((b == null ? void 0 : b.type) === "mousedown" && p.current) {
                p.current = !1;
                return
            }
            (b == null ? void 0 : b.type) === "touchstart" && (p.current = !0);
            const P = M ? null : y.current, O = P ? P.getBoundingClientRect() : {width: 0, height: 0, left: 0, top: 0};
            let j, N, A;
            if (T || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches) j = Math.round(O.width / 2), N = Math.round(O.height / 2); else {
                const {clientX: _, clientY: L} = b.touches && b.touches.length > 0 ? b.touches[0] : b;
                j = Math.round(_ - O.left), N = Math.round(L - O.top)
            }
            if (T) A = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), A % 2 === 0 && (A += 1); else {
                const _ = Math.max(Math.abs((P ? P.clientWidth : 0) - j), j) * 2 + 2,
                    L = Math.max(Math.abs((P ? P.clientHeight : 0) - N), N) * 2 + 2;
                A = Math.sqrt(_ ** 2 + L ** 2)
            }
            b != null && b.touches ? v.current === null && (v.current = () => {
                S({pulsate: k, rippleX: j, rippleY: N, rippleSize: A, cb: R})
            }, w.current = setTimeout(() => {
                v.current && (v.current(), v.current = null)
            }, mR)) : S({pulsate: k, rippleX: j, rippleY: N, rippleSize: A, cb: R})
        }, [o, S]), m = h.useCallback(() => {
            f({}, {pulsate: !0})
        }, [f]), g = h.useCallback((b, E) => {
            if (clearTimeout(w.current), (b == null ? void 0 : b.type) === "touchend" && v.current) {
                v.current(), v.current = null, w.current = setTimeout(() => {
                    g(b, E)
                });
                return
            }
            v.current = null, u(R => R.length > 0 ? R.slice(1) : R), d.current = E
        }, []);
        return h.useImperativeHandle(n, () => ({
            pulsate: m,
            start: f,
            stop: g
        }), [m, f, g]), C.jsx(yR, x({
            className: U(Ht.root, i.root, s),
            ref: y
        }, l, {children: C.jsx(y2, {component: null, exit: !0, children: a})}))
    }), CR = bR;

function wR(e) {
    return q("MuiButtonBase", e)
}

const SR = ee("MuiButtonBase", ["root", "disabled", "focusVisible"]), kR = SR,
    ER = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
    RR = e => {
        const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o} = e,
            s = J({root: ["root", t && "disabled", n && "focusVisible"]}, wR, o);
        return n && r && (s.root += ` ${r}`), s
    }, PR = F("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {borderStyle: "none"},
        [`&.${kR.disabled}`]: {pointerEvents: "none", cursor: "default"},
        "@media print": {colorAdjust: "exact"}
    }), $R = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiButtonBase"}), {
            action: o,
            centerRipple: i = !1,
            children: s,
            className: l,
            component: a = "button",
            disabled: u = !1,
            disableRipple: c = !1,
            disableTouchRipple: d = !1,
            focusRipple: p = !1,
            LinkComponent: w = "a",
            onBlur: v,
            onClick: y,
            onContextMenu: S,
            onDragLeave: f,
            onFocus: m,
            onFocusVisible: g,
            onKeyDown: b,
            onKeyUp: E,
            onMouseDown: R,
            onMouseLeave: k,
            onMouseUp: T,
            onTouchEnd: M,
            onTouchMove: P,
            onTouchStart: O,
            tabIndex: j = 0,
            TouchRippleProps: N,
            touchRippleRef: A,
            type: _
        } = r, L = W(r, ER), D = h.useRef(null), $ = h.useRef(null), I = Le($, A), {
            isFocusVisibleRef: B,
            onFocus: X,
            onBlur: Y,
            ref: le
        } = La(), [G, oe] = h.useState(!1);
        u && G && oe(!1), h.useImperativeHandle(o, () => ({
            focusVisible: () => {
                oe(!0), D.current.focus()
            }
        }), []);
        const [te, Ce] = h.useState(!1);
        h.useEffect(() => {
            Ce(!0)
        }, []);
        const pe = te && !c && !u;
        h.useEffect(() => {
            G && p && !c && te && $.current.pulsate()
        }, [c, p, G, te]);

        function ue(Q, Xe, On = d) {
            return un(nn => (Xe && Xe(nn), !On && $.current && $.current[Q](nn), !0))
        }

        const Be = ue("start", R), ne = ue("stop", S), ke = ue("stop", f), re = ue("stop", T), ce = ue("stop", Q => {
            G && Q.preventDefault(), k && k(Q)
        }), ae = ue("start", O), gt = ue("stop", M), rt = ue("stop", P), Ue = ue("stop", Q => {
            Y(Q), B.current === !1 && oe(!1), v && v(Q)
        }, !1), ut = un(Q => {
            D.current || (D.current = Q.currentTarget), X(Q), B.current === !0 && (oe(!0), g && g(Q)), m && m(Q)
        }), $e = () => {
            const Q = D.current;
            return a && a !== "button" && !(Q.tagName === "A" && Q.href)
        }, ve = h.useRef(!1), ot = un(Q => {
            p && !ve.current && G && $.current && Q.key === " " && (ve.current = !0, $.current.stop(Q, () => {
                $.current.start(Q)
            })), Q.target === Q.currentTarget && $e() && Q.key === " " && Q.preventDefault(), b && b(Q), Q.target === Q.currentTarget && $e() && Q.key === "Enter" && !u && (Q.preventDefault(), y && y(Q))
        }), Fe = un(Q => {
            p && Q.key === " " && $.current && G && !Q.defaultPrevented && (ve.current = !1, $.current.stop(Q, () => {
                $.current.pulsate(Q)
            })), E && E(Q), y && Q.target === Q.currentTarget && $e() && Q.key === " " && !Q.defaultPrevented && y(Q)
        });
        let de = a;
        de === "button" && (L.href || L.to) && (de = w);
        const Ze = {};
        de === "button" ? (Ze.type = _ === void 0 ? "button" : _, Ze.disabled = u) : (!L.href && !L.to && (Ze.role = "button"), u && (Ze["aria-disabled"] = u));
        const Ge = Le(n, le, D), vt = x({}, r, {
            centerRipple: i,
            component: a,
            disabled: u,
            disableRipple: c,
            disableTouchRipple: d,
            focusRipple: p,
            tabIndex: j,
            focusVisible: G
        }), me = RR(vt);
        return C.jsxs(PR, x({
            as: de,
            className: U(me.root, l),
            ownerState: vt,
            onBlur: Ue,
            onClick: y,
            onContextMenu: ne,
            onFocus: ut,
            onKeyDown: ot,
            onKeyUp: Fe,
            onMouseDown: Be,
            onMouseLeave: ce,
            onMouseUp: re,
            onDragLeave: ke,
            onTouchEnd: gt,
            onTouchMove: rt,
            onTouchStart: ae,
            ref: Ge,
            tabIndex: u ? -1 : j,
            type: _
        }, Ze, L, {children: [s, pe ? C.jsx(CR, x({ref: I, center: i}, N)) : null]}))
    }), uu = $R;

function TR(e) {
    return q("MuiListItem", e)
}

const MR = ee("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]),
    ro = MR;

function OR(e) {
    return q("MuiListItemButton", e)
}

const IR = ee("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]),
    oo = IR,
    NR = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"],
    LR = (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters]
    }, jR = e => {
        const {alignItems: t, classes: n, dense: r, disabled: o, disableGutters: i, divider: s, selected: l} = e,
            u = J({root: ["root", r && "dense", !i && "gutters", s && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", l && "selected"]}, OR, n);
        return x({}, n, u)
    }, _R = F(uu, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiListItemButton",
        slot: "Root",
        overridesResolver: LR
    })(({theme: e, ownerState: t}) => x({
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest}),
        "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {backgroundColor: "transparent"}
        },
        [`&.${oo.selected}`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${oo.focusVisible}`]: {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)}
        },
        [`&.${oo.selected}:hover`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity)}
        },
        [`&.${oo.focusVisible}`]: {backgroundColor: (e.vars || e).palette.action.focus},
        [`&.${oo.disabled}`]: {opacity: (e.vars || e).palette.action.disabledOpacity}
    }, t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box"
    }, t.alignItems === "flex-start" && {alignItems: "flex-start"}, !t.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
    }, t.dense && {paddingTop: 4, paddingBottom: 4})), AR = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiListItemButton"}), {
                alignItems: o = "center",
                autoFocus: i = !1,
                component: s = "div",
                children: l,
                dense: a = !1,
                disableGutters: u = !1,
                divider: c = !1,
                focusVisibleClassName: d,
                selected: p = !1,
                className: w
            } = r, v = W(r, NR), y = h.useContext(Dn),
            S = h.useMemo(() => ({dense: a || y.dense || !1, alignItems: o, disableGutters: u}), [o, y.dense, a, u]),
            f = h.useRef(null);
        Dt(() => {
            i && f.current && f.current.focus()
        }, [i]);
        const m = x({}, r, {alignItems: o, dense: S.dense, disableGutters: u, divider: c, selected: p}), g = jR(m),
            b = Le(f, n);
        return C.jsx(Dn.Provider, {
            value: S,
            children: C.jsx(_R, x({
                ref: b,
                href: v.href || v.to,
                component: (v.href || v.to) && s === "div" ? "button" : s,
                focusVisibleClassName: U(g.focusVisible, d),
                ownerState: m,
                className: U(g.root, w)
            }, v, {classes: g, children: l}))
        })
    }), zR = AR;

function DR(e) {
    return q("MuiListItemSecondaryAction", e)
}

ee("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const BR = ["className"], FR = e => {
    const {disableGutters: t, classes: n} = e;
    return J({root: ["root", t && "disableGutters"]}, DR, n)
}, WR = F("div", {
    name: "MuiListItemSecondaryAction", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.disableGutters && t.disableGutters]
    }
})(({ownerState: e}) => x({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)"
}, e.disableGutters && {right: 0})), ry = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiListItemSecondaryAction"}), {className: o} = r, i = W(r, BR), s = h.useContext(Dn),
        l = x({}, r, {disableGutters: s.disableGutters}), a = FR(l);
    return C.jsx(WR, x({className: U(a.root, o), ownerState: l, ref: n}, i))
});
ry.muiName = "ListItemSecondaryAction";
const UR = ry, VR = ["className"],
    HR = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"],
    KR = (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction]
    }, GR = e => {
        const {
            alignItems: t,
            button: n,
            classes: r,
            dense: o,
            disabled: i,
            disableGutters: s,
            disablePadding: l,
            divider: a,
            hasSecondaryAction: u,
            selected: c
        } = e;
        return J({
            root: ["root", o && "dense", !s && "gutters", !l && "padding", a && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", c && "selected"],
            container: ["container"]
        }, TR, r)
    }, XR = F("div", {name: "MuiListItem", slot: "Root", overridesResolver: KR})(({
                                                                                      theme: e,
                                                                                      ownerState: t
                                                                                  }) => x({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "left"
    }, !t.disablePadding && x({paddingTop: 8, paddingBottom: 8}, t.dense && {
        paddingTop: 4,
        paddingBottom: 4
    }, !t.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
    }, !!t.secondaryAction && {paddingRight: 48}), !!t.secondaryAction && {[`& > .${oo.root}`]: {paddingRight: 48}}, {
        [`&.${ro.focusVisible}`]: {backgroundColor: (e.vars || e).palette.action.focus},
        [`&.${ro.selected}`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${ro.focusVisible}`]: {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)}
        },
        [`&.${ro.disabled}`]: {opacity: (e.vars || e).palette.action.disabledOpacity}
    }, t.alignItems === "flex-start" && {alignItems: "flex-start"}, t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box"
    }, t.button && {
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest}),
        "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {backgroundColor: "transparent"}
        },
        [`&.${ro.selected}:hover`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ke(e.palette.primary.main, e.palette.action.selectedOpacity)}
        }
    }, t.hasSecondaryAction && {paddingRight: 48})), QR = F("li", {
        name: "MuiListItem",
        slot: "Container",
        overridesResolver: (e, t) => t.container
    })({position: "relative"}), YR = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiListItem"}), {
                alignItems: o = "center",
                autoFocus: i = !1,
                button: s = !1,
                children: l,
                className: a,
                component: u,
                components: c = {},
                componentsProps: d = {},
                ContainerComponent: p = "li",
                ContainerProps: {className: w} = {},
                dense: v = !1,
                disabled: y = !1,
                disableGutters: S = !1,
                disablePadding: f = !1,
                divider: m = !1,
                focusVisibleClassName: g,
                secondaryAction: b,
                selected: E = !1,
                slotProps: R = {},
                slots: k = {}
            } = r, T = W(r.ContainerProps, VR), M = W(r, HR), P = h.useContext(Dn),
            O = h.useMemo(() => ({dense: v || P.dense || !1, alignItems: o, disableGutters: S}), [o, P.dense, v, S]),
            j = h.useRef(null);
        Dt(() => {
            i && j.current && j.current.focus()
        }, [i]);
        const N = h.Children.toArray(l), A = N.length && Ni(N[N.length - 1], ["ListItemSecondaryAction"]), _ = x({}, r, {
                alignItems: o,
                autoFocus: i,
                button: s,
                dense: O.dense,
                disabled: y,
                disableGutters: S,
                disablePadding: f,
                divider: m,
                hasSecondaryAction: A,
                selected: E
            }), L = GR(_), D = Le(j, n), $ = k.root || c.Root || XR, I = R.root || d.root || {},
            B = x({className: U(L.root, I.className, a), disabled: y}, M);
        let X = u || "li";
        return s && (B.component = u || "div", B.focusVisibleClassName = U(ro.focusVisible, g), X = uu), A ? (X = !B.component && !u ? "div" : X, p === "li" && (X === "li" ? X = "div" : B.component === "li" && (B.component = "div")), C.jsx(Dn.Provider, {
            value: O,
            children: C.jsxs(QR, x({
                as: p,
                className: U(L.container, w),
                ref: D,
                ownerState: _
            }, T, {
                children: [C.jsx($, x({}, I, !Ao($) && {
                    as: X,
                    ownerState: x({}, _, I.ownerState)
                }, B, {children: N})), N.pop()]
            }))
        })) : C.jsx(Dn.Provider, {
            value: O,
            children: C.jsxs($, x({}, I, {
                as: X,
                ref: D
            }, !Ao($) && {ownerState: x({}, _, I.ownerState)}, B, {children: [N, b && C.jsx(UR, {children: b})]}))
        })
    }), Xs = YR;

function qR(e) {
    return q("MuiListItemIcon", e)
}

ee("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const ZR = ["className"], JR = e => {
    const {alignItems: t, classes: n} = e;
    return J({root: ["root", t === "flex-start" && "alignItemsFlexStart"]}, qR, n)
}, eP = F("div", {
    name: "MuiListItemIcon", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart]
    }
})(({theme: e, ownerState: t}) => x({
    minWidth: 56,
    color: (e.vars || e).palette.action.active,
    flexShrink: 0,
    display: "inline-flex"
}, t.alignItems === "flex-start" && {marginTop: 8})), tP = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiListItemIcon"}), {className: o} = r, i = W(r, ZR), s = h.useContext(Dn),
        l = x({}, r, {alignItems: s.alignItems}), a = JR(l);
    return C.jsx(eP, x({className: U(a.root, o), ownerState: l, ref: n}, i))
}), nP = tP;

function rP(e) {
    return q("MuiTypography", e)
}

ee("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const oP = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
    iP = e => {
        const {align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: s} = e,
            l = {root: ["root", i, e.align !== "inherit" && `align${V(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]};
        return J(l, rP, s)
    }, sP = F("span", {
        name: "MuiTypography", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${V(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
        }
    })(({
            theme: e,
            ownerState: t
        }) => x({margin: 0}, t.variant === "inherit" && {font: "inherit"}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {textAlign: t.align}, t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }, t.gutterBottom && {marginBottom: "0.35em"}, t.paragraph && {marginBottom: 16})), fh = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p"
    }, lP = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
    }, aP = e => lP[e] || e, uP = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiTypography"}), o = aP(r.color), i = ou(x({}, r, {color: o})), {
            align: s = "inherit",
            className: l,
            component: a,
            gutterBottom: u = !1,
            noWrap: c = !1,
            paragraph: d = !1,
            variant: p = "body1",
            variantMapping: w = fh
        } = i, v = W(i, oP), y = x({}, i, {
            align: s,
            color: o,
            className: l,
            component: a,
            gutterBottom: u,
            noWrap: c,
            paragraph: d,
            variant: p,
            variantMapping: w
        }), S = a || (d ? "p" : w[p] || fh[p]) || "span", f = iP(y);
        return C.jsx(sP, x({as: S, ref: n, ownerState: y, className: U(f.root, l)}, v))
    }), et = uP;

function cP(e) {
    return q("MuiListItemText", e)
}

const dP = ee("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), ph = dP,
    fP = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"],
    pP = e => {
        const {classes: t, inset: n, primary: r, secondary: o, dense: i} = e;
        return J({
            root: ["root", n && "inset", i && "dense", r && o && "multiline"],
            primary: ["primary"],
            secondary: ["secondary"]
        }, cP, t)
    }, mP = F("div", {
        name: "MuiListItemText", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [{[`& .${ph.primary}`]: t.primary}, {[`& .${ph.secondary}`]: t.secondary}, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense]
        }
    })(({ownerState: e}) => x({
        flex: "1 1 auto",
        minWidth: 0,
        marginTop: 4,
        marginBottom: 4
    }, e.primary && e.secondary && {marginTop: 6, marginBottom: 6}, e.inset && {paddingLeft: 56})),
    hP = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiListItemText"}), {
            children: o,
            className: i,
            disableTypography: s = !1,
            inset: l = !1,
            primary: a,
            primaryTypographyProps: u,
            secondary: c,
            secondaryTypographyProps: d
        } = r, p = W(r, fP), {dense: w} = h.useContext(Dn);
        let v = a ?? o, y = c;
        const S = x({}, r, {disableTypography: s, inset: l, primary: !!v, secondary: !!y, dense: w}), f = pP(S);
        return v != null && v.type !== et && !s && (v = C.jsx(et, x({
            variant: w ? "body2" : "body1",
            className: f.primary,
            component: u != null && u.variant ? void 0 : "span",
            display: "block"
        }, u, {children: v}))), y != null && y.type !== et && !s && (y = C.jsx(et, x({
            variant: "body2",
            className: f.secondary,
            color: "text.secondary",
            display: "block"
        }, d, {children: y}))), C.jsxs(mP, x({className: U(f.root, i), ownerState: S, ref: n}, p, {children: [v, y]}))
    }), mh = hP, gP = "assets/matrix-b5ed2583.svg";

function vP(e) {
    return q("MuiLink", e)
}

const yP = ee("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]),
    xP = yP, oy = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
    }, bP = e => oy[e] || e, CP = ({theme: e, ownerState: t}) => {
        const n = bP(t.color), r = _o(e, `palette.${n}`, !1) || t.color, o = _o(e, `palette.${n}Channel`);
        return "vars" in e && o ? `rgba(${o} / 0.4)` : Ke(r, .4)
    }, wP = CP,
    SP = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"],
    kP = e => {
        const {classes: t, component: n, focusVisible: r, underline: o} = e,
            i = {root: ["root", `underline${V(o)}`, n === "button" && "button", r && "focusVisible"]};
        return J(i, vP, t)
    }, EP = F(et, {
        name: "MuiLink", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, t[`underline${V(n.underline)}`], n.component === "button" && t.button]
        }
    })(({
            theme: e,
            ownerState: t
        }) => x({}, t.underline === "none" && {textDecoration: "none"}, t.underline === "hover" && {
        textDecoration: "none",
        "&:hover": {textDecoration: "underline"}
    }, t.underline === "always" && x({textDecoration: "underline"}, t.color !== "inherit" && {
        textDecorationColor: wP({
            theme: e,
            ownerState: t
        })
    }, {"&:hover": {textDecorationColor: "inherit"}}), t.component === "button" && {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        "&::-moz-focus-inner": {borderStyle: "none"},
        [`&.${xP.focusVisible}`]: {outline: "auto"}
    })), RP = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiLink"}), {
                className: o,
                color: i = "primary",
                component: s = "a",
                onBlur: l,
                onFocus: a,
                TypographyClasses: u,
                underline: c = "always",
                variant: d = "inherit",
                sx: p
            } = r, w = W(r, SP), {isFocusVisibleRef: v, onBlur: y, onFocus: S, ref: f} = La(), [m, g] = h.useState(!1),
            b = Le(n, f), E = M => {
                y(M), v.current === !1 && g(!1), l && l(M)
            }, R = M => {
                S(M), v.current === !0 && g(!0), a && a(M)
            }, k = x({}, r, {color: i, component: s, focusVisible: m, underline: c, variant: d}), T = kP(k);
        return C.jsx(EP, x({
            color: i,
            className: U(T.root, o),
            classes: u,
            component: s,
            onBlur: E,
            onFocus: R,
            ref: b,
            ownerState: k,
            variant: d,
            sx: [...Object.keys(oy).includes(i) ? [] : [{color: i}], ...Array.isArray(p) ? p : [p]]
        }, w))
    }), iy = RP;

/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs() {
    return cs = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, cs.apply(this, arguments)
}

var rr;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(rr || (rr = {}));
const hh = "popstate";

function PP(e) {
    e === void 0 && (e = {});

    function t(o, i) {
        let {pathname: s = "/", search: l = "", hash: a = ""} = Kr(o.location.hash.substr(1));
        return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), dd("", {
            pathname: s,
            search: l,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(o, i) {
        let s = o.document.querySelector("base"), l = "";
        if (s && s.getAttribute("href")) {
            let a = o.location.href, u = a.indexOf("#");
            l = u === -1 ? a : a.slice(0, u)
        }
        return l + "#" + (typeof i == "string" ? i : Jl(i))
    }

    function r(o, i) {
        cu(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")")
    }

    return TP(t, n, r, e)
}

function De(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function cu(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function $P() {
    return Math.random().toString(36).substr(2, 8)
}

function gh(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}

function dd(e, t, n, r) {
    return n === void 0 && (n = null), cs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Kr(t) : t, {state: n, key: t && t.key || r || $P()})
}

function Jl(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Kr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function TP(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o = document.defaultView, v5Compat: i = !1} = r, s = o.history, l = rr.Pop, a = null, u = c();
    u == null && (u = 0, s.replaceState(cs({}, s.state, {idx: u}), ""));

    function c() {
        return (s.state || {idx: null}).idx
    }

    function d() {
        l = rr.Pop;
        let S = c(), f = S == null ? null : S - u;
        u = S, a && a({action: l, location: y.location, delta: f})
    }

    function p(S, f) {
        l = rr.Push;
        let m = dd(y.location, S, f);
        n && n(m, S), u = c() + 1;
        let g = gh(m, u), b = y.createHref(m);
        try {
            s.pushState(g, "", b)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            o.location.assign(b)
        }
        i && a && a({action: l, location: y.location, delta: 1})
    }

    function w(S, f) {
        l = rr.Replace;
        let m = dd(y.location, S, f);
        n && n(m, S), u = c();
        let g = gh(m, u), b = y.createHref(m);
        s.replaceState(g, "", b), i && a && a({action: l, location: y.location, delta: 0})
    }

    function v(S) {
        let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
            m = typeof S == "string" ? S : Jl(S);
        return De(f, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, f)
    }

    let y = {
        get action() {
            return l
        }, get location() {
            return e(o, s)
        }, listen(S) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(hh, d), a = S, () => {
                o.removeEventListener(hh, d), a = null
            }
        }, createHref(S) {
            return t(o, S)
        }, createURL: v, encodeLocation(S) {
            let f = v(S);
            return {pathname: f.pathname, search: f.search, hash: f.hash}
        }, push: p, replace: w, go(S) {
            return s.go(S)
        }
    };
    return y
}

var vh;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(vh || (vh = {}));

function MP(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Kr(t) : t, o = ds(r.pathname || "/", n);
    if (o == null) return null;
    let i = sy(e);
    OP(i);
    let s = null;
    for (let l = 0; s == null && l < i.length; ++l) s = BP(i[l], WP(o));
    return s
}

function sy(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (De(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = pr([r, a.relativePath]), c = n.concat(a);
        i.children && i.children.length > 0 && (De(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), sy(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: zP(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s); else for (let a of ly(i.path)) o(i, s, a)
    }), t
}

function ly(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = ly(r.join("/")), l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function OP(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : DP(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const IP = /^:\w+$/, NP = 3, LP = 2, jP = 1, _P = 10, AP = -2, yh = e => e === "*";

function zP(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(yh) && (r += AP), t && (r += LP), n.filter(o => !yh(o)).reduce((o, i) => o + (IP.test(i) ? NP : i === "" ? jP : _P), r)
}

function DP(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function BP(e, t) {
    let {routesMeta: n} = e, r = {}, o = "/", i = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s], a = s === n.length - 1, u = o === "/" ? t : t.slice(o.length) || "/",
            c = fd({path: l.relativePath, caseSensitive: l.caseSensitive, end: a}, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = l.route;
        i.push({
            params: r,
            pathname: pr([o, c.pathname]),
            pathnameBase: KP(pr([o, c.pathnameBase])),
            route: d
        }), c.pathnameBase !== "/" && (o = pr([o, c.pathnameBase]))
    }
    return i
}

function fd(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = FP(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0], s = i.replace(/(.)\/+$/, "$1"), l = o.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {paramName: p, isOptional: w} = c;
            if (p === "*") {
                let y = l[d] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const v = l[d];
            return w && !v ? u[p] = void 0 : u[p] = UP(v || "", p), u
        }, {}), pathname: i, pathnameBase: s, pattern: e
    }
}

function FP(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), cu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({paramName: "*"}), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function WP(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return cu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function UP(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return cu(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function ds(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function VP(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r = "", hash: o = ""} = typeof e == "string" ? Kr(e) : e;
    return {pathname: n ? n.startsWith("/") ? n : HP(n, t) : t, search: GP(r), hash: XP(o)}
}

function HP(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function Zu(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function ay(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function uy(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Kr(e) : (o = cs({}, e), De(!o.pathname || !o.pathname.includes("?"), Zu("?", "pathname", "search", o)), De(!o.pathname || !o.pathname.includes("#"), Zu("#", "pathname", "hash", o)), De(!o.search || !o.search.includes("#"), Zu("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, l;
    if (r || s == null) l = n; else {
        let d = t.length - 1;
        if (s.startsWith("..")) {
            let p = s.split("/");
            for (; p[0] === "..";) p.shift(), d -= 1;
            o.pathname = p.join("/")
        }
        l = d >= 0 ? t[d] : "/"
    }
    let a = VP(o, l), u = s && s !== "/" && s.endsWith("/"), c = (i || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}

const pr = e => e.join("/").replace(/\/\/+/g, "/"), KP = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    GP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    XP = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function QP(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}

const cy = ["post", "put", "patch", "delete"];
new Set(cy);
const YP = ["get", ...cy];
new Set(YP);

/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea() {
    return ea = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ea.apply(this, arguments)
}

const du = h.createContext(null), dy = h.createContext(null), Gr = h.createContext(null), fu = h.createContext(null),
    Xr = h.createContext({outlet: null, matches: [], isDataRoute: !1}), fy = h.createContext(null);

function qP(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    ks() || De(!1);
    let {basename: r, navigator: o} = h.useContext(Gr), {hash: i, pathname: s, search: l} = pu(e, {relative: n}), a = s;
    return r !== "/" && (a = s === "/" ? r : pr([r, s])), o.createHref({pathname: a, search: l, hash: i})
}

function ks() {
    return h.useContext(fu) != null
}

function Es() {
    return ks() || De(!1), h.useContext(fu).location
}

function py(e) {
    h.useContext(Gr).static || h.useLayoutEffect(e)
}

function ZP() {
    let {isDataRoute: e} = h.useContext(Xr);
    return e ? d$() : JP()
}

function JP() {
    ks() || De(!1);
    let e = h.useContext(du), {
            basename: t,
            navigator: n
        } = h.useContext(Gr), {matches: r} = h.useContext(Xr), {pathname: o} = Es(),
        i = JSON.stringify(ay(r).map(a => a.pathnameBase)), s = h.useRef(!1);
    return py(() => {
        s.current = !0
    }), h.useCallback(function (a, u) {
        if (u === void 0 && (u = {}), !s.current) return;
        if (typeof a == "number") {
            n.go(a);
            return
        }
        let c = uy(a, JSON.parse(i), o, u.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : pr([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u)
    }, [t, n, i, o, e])
}

function pu(e, t) {
    let {relative: n} = t === void 0 ? {} : t, {matches: r} = h.useContext(Xr), {pathname: o} = Es(),
        i = JSON.stringify(ay(r).map(s => s.pathnameBase));
    return h.useMemo(() => uy(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function e$(e, t) {
    return t$(e, t)
}

function t$(e, t, n) {
    ks() || De(!1);
    let {navigator: r} = h.useContext(Gr), {matches: o} = h.useContext(Xr), i = o[o.length - 1], s = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let a = Es(), u;
    if (t) {
        var c;
        let y = typeof t == "string" ? Kr(t) : t;
        l === "/" || (c = y.pathname) != null && c.startsWith(l) || De(!1), u = y
    } else u = a;
    let d = u.pathname || "/", p = l === "/" ? d : d.slice(l.length) || "/", w = MP(e, {pathname: p}),
        v = s$(w && w.map(y => Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: pr([l, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? l : pr([l, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), o, n);
    return t && v ? h.createElement(fu.Provider, {
        value: {
            location: ea({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u), navigationType: rr.Pop
        }
    }, v) : v
}

function n$() {
    let e = c$(), t = QP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, o = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"},
        i = null;
    return h.createElement(h.Fragment, null, h.createElement("h2", null, "Unexpected Application Error!"), h.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? h.createElement("pre", {style: o}, n) : null, i)
}

const r$ = h.createElement(n$, null);

class o$ extends h.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation}
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error ? h.createElement(Xr.Provider, {value: this.props.routeContext}, h.createElement(fy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function i$(e) {
    let {routeContext: t, match: n, children: r} = e, o = h.useContext(du);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), h.createElement(Xr.Provider, {value: t}, r)
}

function s$(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches; else return null
    }
    let i = e, s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let l = i.findIndex(a => a.route.id && (s == null ? void 0 : s[a.route.id]));
        l >= 0 || De(!1), i = i.slice(0, Math.min(i.length, l + 1))
    }
    return i.reduceRight((l, a, u) => {
        let c = a.route.id ? s == null ? void 0 : s[a.route.id] : null, d = null;
        n && (d = a.route.errorElement || r$);
        let p = t.concat(i.slice(0, u + 1)), w = () => {
            let v;
            return c ? v = d : a.route.Component ? v = h.createElement(a.route.Component, null) : a.route.element ? v = a.route.element : v = l, h.createElement(i$, {
                match: a,
                routeContext: {outlet: l, matches: p, isDataRoute: n != null},
                children: v
            })
        };
        return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? h.createElement(o$, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: c,
            children: w(),
            routeContext: {outlet: null, matches: p, isDataRoute: !0}
        }) : w()
    }, null)
}

var my = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
}(my || {}), ta = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(ta || {});

function l$(e) {
    let t = h.useContext(du);
    return t || De(!1), t
}

function a$(e) {
    let t = h.useContext(dy);
    return t || De(!1), t
}

function u$(e) {
    let t = h.useContext(Xr);
    return t || De(!1), t
}

function hy(e) {
    let t = u$(), n = t.matches[t.matches.length - 1];
    return n.route.id || De(!1), n.route.id
}

function c$() {
    var e;
    let t = h.useContext(fy), n = a$(ta.UseRouteError), r = hy(ta.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function d$() {
    let {router: e} = l$(my.UseNavigateStable), t = hy(ta.UseNavigateStable), n = h.useRef(!1);
    return py(() => {
        n.current = !0
    }), h.useCallback(function (o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ea({fromRouteId: t}, i)))
    }, [e, t])
}

function io(e) {
    De(!1)
}

function f$(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = rr.Pop,
        navigator: i,
        static: s = !1
    } = e;
    ks() && De(!1);
    let l = t.replace(/^\/*/, "/"), a = h.useMemo(() => ({basename: l, navigator: i, static: s}), [l, i, s]);
    typeof r == "string" && (r = Kr(r));
    let {pathname: u = "/", search: c = "", hash: d = "", state: p = null, key: w = "default"} = r,
        v = h.useMemo(() => {
            let y = ds(u, l);
            return y == null ? null : {location: {pathname: y, search: c, hash: d, state: p, key: w}, navigationType: o}
        }, [l, u, c, d, p, w, o]);
    return v == null ? null : h.createElement(Gr.Provider, {value: a}, h.createElement(fu.Provider, {
        children: n,
        value: v
    }))
}

function p$(e) {
    let {children: t, location: n} = e;
    return e$(pd(t), n)
}

new Promise(() => {
});

function pd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return h.Children.forEach(e, (r, o) => {
        if (!h.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === h.Fragment) {
            n.push.apply(n, pd(r.props.children, i));
            return
        }
        r.type !== io && De(!1), !r.props.index || !r.props.children || De(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = pd(r.props.children, i)), n.push(s)
    }), n
}

/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na() {
    return na = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, na.apply(this, arguments)
}

function gy(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function m$(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function h$(e, t) {
    return e.button === 0 && (!t || t === "_self") && !m$(e)
}

const g$ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    v$ = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
    y$ = h.createContext({isTransitioning: !1}), x$ = "startTransition", xh = Bi[x$];

function b$(e) {
    let {basename: t, children: n, future: r, window: o} = e, i = h.useRef();
    i.current == null && (i.current = PP({window: o, v5Compat: !0}));
    let s = i.current, [l, a] = h.useState({action: s.action, location: s.location}), {v7_startTransition: u} = r || {},
        c = h.useCallback(d => {
            u && xh ? xh(() => a(d)) : a(d)
        }, [a, u]);
    return h.useLayoutEffect(() => s.listen(c), [s, c]), h.createElement(f$, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s
    })
}

const C$ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    w$ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, S$ = h.forwardRef(function (t, n) {
        let {
            onClick: r,
            relative: o,
            reloadDocument: i,
            replace: s,
            state: l,
            target: a,
            to: u,
            preventScrollReset: c,
            unstable_viewTransition: d
        } = t, p = gy(t, g$), {basename: w} = h.useContext(Gr), v, y = !1;
        if (typeof u == "string" && w$.test(u) && (v = u, C$)) try {
            let g = new URL(window.location.href), b = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
                E = ds(b.pathname, w);
            b.origin === g.origin && E != null ? u = E + b.search + b.hash : y = !0
        } catch {
        }
        let S = qP(u, {relative: o}),
            f = R$(u, {replace: s, state: l, target: a, preventScrollReset: c, relative: o, unstable_viewTransition: d});

        function m(g) {
            r && r(g), g.defaultPrevented || f(g)
        }

        return h.createElement("a", na({}, p, {href: v || S, onClick: y || i ? r : m, ref: n, target: a}))
    }), k$ = h.forwardRef(function (t, n) {
        let {
                "aria-current": r = "page",
                caseSensitive: o = !1,
                className: i = "",
                end: s = !1,
                style: l,
                to: a,
                unstable_viewTransition: u,
                children: c
            } = t, d = gy(t, v$), p = pu(a, {relative: d.relative}), w = Es(),
            v = h.useContext(dy), {navigator: y} = h.useContext(Gr), S = v != null && P$(p) && u === !0,
            f = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname, m = w.pathname,
            g = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
        o || (m = m.toLowerCase(), g = g ? g.toLowerCase() : null, f = f.toLowerCase());
        let b = m === f || !s && m.startsWith(f) && m.charAt(f.length) === "/",
            E = g != null && (g === f || !s && g.startsWith(f) && g.charAt(f.length) === "/"),
            R = {isActive: b, isPending: E, isTransitioning: S}, k = b ? r : void 0, T;
        typeof i == "function" ? T = i(R) : T = [i, b ? "active" : null, E ? "pending" : null, S ? "transitioning" : null].filter(Boolean).join(" ");
        let M = typeof l == "function" ? l(R) : l;
        return h.createElement(S$, na({}, d, {
            "aria-current": k,
            className: T,
            ref: n,
            style: M,
            to: a,
            unstable_viewTransition: u
        }), typeof c == "function" ? c(R) : c)
    });
var md;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(md || (md = {}));
var bh;
(function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(bh || (bh = {}));

function E$(e) {
    let t = h.useContext(du);
    return t || De(!1), t
}

function R$(e, t) {
    let {
        target: n,
        replace: r,
        state: o,
        preventScrollReset: i,
        relative: s,
        unstable_viewTransition: l
    } = t === void 0 ? {} : t, a = ZP(), u = Es(), c = pu(e, {relative: s});
    return h.useCallback(d => {
        if (h$(d, n)) {
            d.preventDefault();
            let p = r !== void 0 ? r : Jl(u) === Jl(c);
            a(e, {replace: p, state: o, preventScrollReset: i, relative: s, unstable_viewTransition: l})
        }
    }, [u, a, c, r, o, n, e, i, s, l])
}

function P$(e, t) {
    t === void 0 && (t = {});
    let n = h.useContext(y$);
    n == null && De(!1);
    let {basename: r} = E$(md.useViewTransitionState), o = pu(e, {relative: t.relative});
    if (!n.isTransitioning) return !1;
    let i = ds(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        s = ds(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return fd(o.pathname, s) != null || fd(o.pathname, i) != null
}

const Ch = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {bgcolor: "rgba(255, 255, 255, 0.08)"}
}, $$ = {boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset", py: 1.5, px: 3};

function wh(e) {
    const {menuGroups: t, listenerMenu: n, onToggle: r, isMobile: o, ...i} = e;
    return C.jsxs(oR, {
        variant: "permanent", ...i,
        children: [C.jsxs(ny, {
            disablePadding: !0,
            children: [C.jsx(Xs, {
                sx: {
                    ...Ch, ...$$,
                    fontSize: 22,
                    color: "#fff",
                    padding: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none"
                }, children: C.jsx("img", {src: gP, alt: "img", width: 150})
            }), t.map(({description: s, menus: l}) => C.jsxs(nr, {
                sx: {bgcolor: "#101F33"},
                children: [C.jsx(Xs, {
                    sx: {py: 2, px: 3},
                    children: C.jsx(mh, {sx: {color: "#ffffff", userSelect: "none"}, children: s})
                }), l.map(({name: a, icon: u, active: c, route: d}) => C.jsx(Xs, {
                    disablePadding: !0,
                    onClick: () => {
                        o && r(), n(a)
                    },
                    children: C.jsxs(zR, {
                        selected: c,
                        sx: Ch,
                        component: k$,
                        to: d,
                        children: [C.jsx(nP, {children: u}), C.jsx(mh, {children: a})]
                    })
                }, a)), C.jsx(D0, {sx: {mt: 2}})]
            }, s))]
        }), C.jsx(Xs, {
            sx: {flexGrow: 1, alignItems: "flex-end", justifyContent: "center"},
            children: C.jsxs(et, {
                variant: "body2",
                color: "text.secondary",
                align: "center",
                sx: {color: "rgba(255,255,255,0.25)"},
                children: ["Copyright © ", C.jsx(iy, {
                    target: "_blank",
                    color: "inherit",
                    href: "https://github.com/ealejor/",
                    children: "ealejor"
                }), " ", new Date().getFullYear(), "."]
            })
        })]
    })
}

function T$(e) {
    return q("MuiAppBar", e)
}

ee("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const M$ = ["className", "color", "enableColorOnDark", "position"], O$ = e => {
    const {color: t, position: n, classes: r} = e, o = {root: ["root", `color${V(t)}`, `position${V(n)}`]};
    return J(o, T$, r)
}, Qs = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, I$ = F(mn, {
    name: "MuiAppBar", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[`position${V(n.position)}`], t[`color${V(n.color)}`]]
    }
})(({theme: e, ownerState: t}) => {
    const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return x({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0
    }, t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": {position: "absolute"}
    }, t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
    }, t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
    }, t.position === "static" && {position: "static"}, t.position === "relative" && {position: "relative"}, !e.vars && x({}, t.color === "default" && {
        backgroundColor: n,
        color: e.palette.getContrastText(n)
    }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
        backgroundColor: e.palette[t.color].main,
        color: e.palette[t.color].contrastText
    }, t.color === "inherit" && {color: "inherit"}, e.palette.mode === "dark" && !t.enableColorOnDark && {
        backgroundColor: null,
        color: null
    }, t.color === "transparent" && x({
        backgroundColor: "transparent",
        color: "inherit"
    }, e.palette.mode === "dark" && {backgroundImage: "none"})), e.vars && x({}, t.color === "default" && {
        "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Qs(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
        "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Qs(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
    }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
        "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Qs(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
        "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Qs(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
    }, {
        backgroundColor: "var(--AppBar-background)",
        color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
    }, t.color === "transparent" && {backgroundImage: "none", backgroundColor: "transparent", color: "inherit"}))
}), N$ = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiAppBar"}), {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: l = "fixed"
    } = r, a = W(r, M$), u = x({}, r, {color: i, position: l, enableColorOnDark: s}), c = O$(u);
    return C.jsx(I$, x({
        square: !0,
        component: "header",
        ownerState: u,
        elevation: 4,
        className: U(c.root, o, l === "fixed" && "mui-fixed"),
        ref: n
    }, a))
}), L$ = N$, j$ = h.createContext(), Sh = j$;

function _$(e) {
    return q("MuiGrid", e)
}

const A$ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], z$ = ["column-reverse", "column", "row-reverse", "row"],
    D$ = ["nowrap", "wrap-reverse", "wrap"], pi = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    B$ = ee("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...A$.map(e => `spacing-xs-${e}`), ...z$.map(e => `direction-xs-${e}`), ...D$.map(e => `wrap-xs-${e}`), ...pi.map(e => `grid-xs-${e}`), ...pi.map(e => `grid-sm-${e}`), ...pi.map(e => `grid-md-${e}`), ...pi.map(e => `grid-lg-${e}`), ...pi.map(e => `grid-xl-${e}`)]),
    fs = B$,
    F$ = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];

function Po(e) {
    const t = parseFloat(e);
    return `${t}${String(e).replace(String(t), "") || "px"}`
}

function W$({theme: e, ownerState: t}) {
    let n;
    return e.breakpoints.keys.reduce((r, o) => {
        let i = {};
        if (t[o] && (n = t[o]), !n) return r;
        if (n === !0) i = {flexBasis: 0, flexGrow: 1, maxWidth: "100%"}; else if (n === "auto") i = {
            flexBasis: "auto",
            flexGrow: 0,
            flexShrink: 0,
            maxWidth: "none",
            width: "auto"
        }; else {
            const s = Nr({values: t.columns, breakpoints: e.breakpoints.values}), l = typeof s == "object" ? s[o] : s;
            if (l == null) return r;
            const a = `${Math.round(n / l * 1e8) / 1e6}%`;
            let u = {};
            if (t.container && t.item && t.columnSpacing !== 0) {
                const c = e.spacing(t.columnSpacing);
                if (c !== "0px") {
                    const d = `calc(${a} + ${Po(c)})`;
                    u = {flexBasis: d, maxWidth: d}
                }
            }
            i = x({flexBasis: a, flexGrow: 0, maxWidth: a}, u)
        }
        return e.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(o)] = i, r
    }, {})
}

function U$({theme: e, ownerState: t}) {
    const n = Nr({values: t.direction, breakpoints: e.breakpoints.values});
    return Mt({theme: e}, n, r => {
        const o = {flexDirection: r};
        return r.indexOf("column") === 0 && (o[`& > .${fs.item}`] = {maxWidth: "none"}), o
    })
}

function vy({breakpoints: e, values: t}) {
    let n = "";
    Object.keys(t).forEach(o => {
        n === "" && t[o] !== 0 && (n = o)
    });
    const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
    return r.slice(0, r.indexOf(n))
}

function V$({theme: e, ownerState: t}) {
    const {container: n, rowSpacing: r} = t;
    let o = {};
    if (n && r !== 0) {
        const i = Nr({values: r, breakpoints: e.breakpoints.values});
        let s;
        typeof i == "object" && (s = vy({
            breakpoints: e.breakpoints.values,
            values: i
        })), o = Mt({theme: e}, i, (l, a) => {
            var u;
            const c = e.spacing(l);
            return c !== "0px" ? {
                marginTop: `-${Po(c)}`,
                [`& > .${fs.item}`]: {paddingTop: Po(c)}
            } : (u = s) != null && u.includes(a) ? {} : {marginTop: 0, [`& > .${fs.item}`]: {paddingTop: 0}}
        })
    }
    return o
}

function H$({theme: e, ownerState: t}) {
    const {container: n, columnSpacing: r} = t;
    let o = {};
    if (n && r !== 0) {
        const i = Nr({values: r, breakpoints: e.breakpoints.values});
        let s;
        typeof i == "object" && (s = vy({
            breakpoints: e.breakpoints.values,
            values: i
        })), o = Mt({theme: e}, i, (l, a) => {
            var u;
            const c = e.spacing(l);
            return c !== "0px" ? {
                width: `calc(100% + ${Po(c)})`,
                marginLeft: `-${Po(c)}`,
                [`& > .${fs.item}`]: {paddingLeft: Po(c)}
            } : (u = s) != null && u.includes(a) ? {} : {
                width: "100%",
                marginLeft: 0,
                [`& > .${fs.item}`]: {paddingLeft: 0}
            }
        })
    }
    return o
}

function K$(e, t, n = {}) {
    if (!e || e <= 0) return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number") return [n[`spacing-xs-${String(e)}`]];
    const r = [];
    return t.forEach(o => {
        const i = e[o];
        Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`])
    }), r
}

const G$ = F("div", {
    name: "MuiGrid", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e, {
            container: r,
            direction: o,
            item: i,
            spacing: s,
            wrap: l,
            zeroMinWidth: a,
            breakpoints: u
        } = n;
        let c = [];
        r && (c = K$(s, u, t));
        const d = [];
        return u.forEach(p => {
            const w = n[p];
            w && d.push(t[`grid-${p}-${String(w)}`])
        }), [t.root, r && t.container, i && t.item, a && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...d]
    }
})(({ownerState: e}) => x({boxSizing: "border-box"}, e.container && {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
}, e.item && {margin: 0}, e.zeroMinWidth && {minWidth: 0}, e.wrap !== "wrap" && {flexWrap: e.wrap}), U$, V$, H$, W$);

function X$(e, t) {
    if (!e || e <= 0) return [];
    if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number") return [`spacing-xs-${String(e)}`];
    const n = [];
    return t.forEach(r => {
        const o = e[r];
        if (Number(o) > 0) {
            const i = `spacing-${r}-${String(o)}`;
            n.push(i)
        }
    }), n
}

const Q$ = e => {
    const {classes: t, container: n, direction: r, item: o, spacing: i, wrap: s, zeroMinWidth: l, breakpoints: a} = e;
    let u = [];
    n && (u = X$(i, a));
    const c = [];
    a.forEach(p => {
        const w = e[p];
        w && c.push(`grid-${p}-${String(w)}`)
    });
    const d = {root: ["root", n && "container", o && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...c]};
    return J(d, _$, t)
}, Y$ = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiGrid"}), {breakpoints: o} = Mn(), i = ou(r), {
        className: s,
        columns: l,
        columnSpacing: a,
        component: u = "div",
        container: c = !1,
        direction: d = "row",
        item: p = !1,
        rowSpacing: w,
        spacing: v = 0,
        wrap: y = "wrap",
        zeroMinWidth: S = !1
    } = i, f = W(i, F$), m = w || v, g = a || v, b = h.useContext(Sh), E = c ? l || 12 : b, R = {}, k = x({}, f);
    o.keys.forEach(P => {
        f[P] != null && (R[P] = f[P], delete k[P])
    });
    const T = x({}, i, {
        columns: E,
        container: c,
        direction: d,
        item: p,
        rowSpacing: m,
        columnSpacing: g,
        wrap: y,
        zeroMinWidth: S,
        spacing: v
    }, R, {breakpoints: o.keys}), M = Q$(T);
    return C.jsx(Sh.Provider, {
        value: E,
        children: C.jsx(G$, x({ownerState: T, className: U(M.root, s), as: u, ref: n}, k))
    })
}), Ys = Y$;

function q$(e) {
    return q("MuiIconButton", e)
}

const Z$ = ee("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]),
    J$ = Z$, eT = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], tT = e => {
        const {classes: t, disabled: n, color: r, edge: o, size: i} = e,
            s = {root: ["root", n && "disabled", r !== "default" && `color${V(r)}`, o && `edge${V(o)}`, `size${V(i)}`]};
        return J(s, q$, t)
    }, nT = F(uu, {
        name: "MuiIconButton", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.color !== "default" && t[`color${V(n.color)}`], n.edge && t[`edge${V(n.edge)}`], t[`size${V(n.size)}`]]
        }
    })(({theme: e, ownerState: t}) => x({
        textAlign: "center",
        flex: "0 0 auto",
        fontSize: e.typography.pxToRem(24),
        padding: 8,
        borderRadius: "50%",
        overflow: "visible",
        color: (e.vars || e).palette.action.active,
        transition: e.transitions.create("background-color", {duration: e.transitions.duration.shortest})
    }, !t.disableRipple && {
        "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": {backgroundColor: "transparent"}
        }
    }, t.edge === "start" && {marginLeft: t.size === "small" ? -3 : -12}, t.edge === "end" && {marginRight: t.size === "small" ? -3 : -12}), ({
                                                                                                                                                  theme: e,
                                                                                                                                                  ownerState: t
                                                                                                                                              }) => {
        var n;
        const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
        return x({}, t.color === "inherit" && {color: "inherit"}, t.color !== "inherit" && t.color !== "default" && x({color: r == null ? void 0 : r.main}, !t.disableRipple && {"&:hover": x({}, r && {backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(r.main, e.palette.action.hoverOpacity)}, {"@media (hover: none)": {backgroundColor: "transparent"}})}), t.size === "small" && {
            padding: 5,
            fontSize: e.typography.pxToRem(18)
        }, t.size === "large" && {
            padding: 12,
            fontSize: e.typography.pxToRem(28)
        }, {[`&.${J$.disabled}`]: {backgroundColor: "transparent", color: (e.vars || e).palette.action.disabled}})
    }), rT = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiIconButton"}), {
            edge: o = !1,
            children: i,
            className: s,
            color: l = "default",
            disabled: a = !1,
            disableFocusRipple: u = !1,
            size: c = "medium"
        } = r, d = W(r, eT), p = x({}, r, {edge: o, color: l, disabled: a, disableFocusRipple: u, size: c}), w = tT(p);
        return C.jsx(nT, x({
            className: U(w.root, s),
            centerRipple: !0,
            focusRipple: !u,
            disabled: a,
            ref: n,
            ownerState: p
        }, d, {children: i}))
    }), hd = rT;
var Vf = {}, yy = {exports: {}};
(function (e) {
    function t(n) {
        return n && n.__esModule ? n : {default: n}
    }

    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
})(yy);
var oT = yy.exports, Ju = {};
const iT = Yy(z2);
var kh;

function sT() {
    return kh || (kh = 1, function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
                return t.createSvgIcon
            }
        });
        var t = iT
    }(Ju)), Ju
}

var lT = oT;
Object.defineProperty(Vf, "__esModule", {value: !0});
var xy = Vf.default = void 0, aT = lT(sT()), uT = C,
    cT = (0, aT.default)((0, uT.jsx)("path", {d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}), "Menu");
xy = Vf.default = cT;

function dT(e) {
    return q("MuiToolbar", e)
}

ee("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const fT = ["className", "component", "disableGutters", "variant"], pT = e => {
        const {classes: t, disableGutters: n, variant: r} = e;
        return J({root: ["root", !n && "gutters", r]}, dT, t)
    }, mT = F("div", {
        name: "MuiToolbar", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, !n.disableGutters && t.gutters, t[n.variant]]
        }
    })(({theme: e, ownerState: t}) => x({
        position: "relative",
        display: "flex",
        alignItems: "center"
    }, !t.disableGutters && {
        paddingLeft: e.spacing(2),
        paddingRight: e.spacing(2),
        [e.breakpoints.up("sm")]: {paddingLeft: e.spacing(3), paddingRight: e.spacing(3)}
    }, t.variant === "dense" && {minHeight: 48}), ({
                                                       theme: e,
                                                       ownerState: t
                                                   }) => t.variant === "regular" && e.mixins.toolbar),
    hT = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiToolbar"}), {
            className: o,
            component: i = "div",
            disableGutters: s = !1,
            variant: l = "regular"
        } = r, a = W(r, fT), u = x({}, r, {component: i, disableGutters: s, variant: l}), c = pT(u);
        return C.jsx(mT, x({as: i, className: U(c.root, o), ref: n, ownerState: u}, a))
    }), gT = hT,
    vT = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function gd(e) {
    return `scale(${e}, ${e ** 2})`
}

const yT = {entering: {opacity: 1, transform: gd(1)}, entered: {opacity: 1, transform: "none"}},
    ec = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    by = h.forwardRef(function (t, n) {
        const {
                addEndListener: r,
                appear: o = !0,
                children: i,
                easing: s,
                in: l,
                onEnter: a,
                onEntered: u,
                onEntering: c,
                onExit: d,
                onExited: p,
                onExiting: w,
                style: v,
                timeout: y = "auto",
                TransitionComponent: S = Df
            } = t, f = W(t, vT), m = h.useRef(), g = h.useRef(), b = Mn(), E = h.useRef(null), R = Le(E, i.ref, n),
            k = _ => L => {
                if (_) {
                    const D = E.current;
                    L === void 0 ? _(D) : _(D, L)
                }
            }, T = k(c), M = k((_, L) => {
                Wf(_);
                const {duration: D, delay: $, easing: I} = Wo({style: v, timeout: y, easing: s}, {mode: "enter"});
                let B;
                y === "auto" ? (B = b.transitions.getAutoHeightDuration(_.clientHeight), g.current = B) : B = D, _.style.transition = [b.transitions.create("opacity", {
                    duration: B,
                    delay: $
                }), b.transitions.create("transform", {
                    duration: ec ? B : B * .666,
                    delay: $,
                    easing: I
                })].join(","), a && a(_, L)
            }), P = k(u), O = k(w), j = k(_ => {
                const {duration: L, delay: D, easing: $} = Wo({style: v, timeout: y, easing: s}, {mode: "exit"});
                let I;
                y === "auto" ? (I = b.transitions.getAutoHeightDuration(_.clientHeight), g.current = I) : I = L, _.style.transition = [b.transitions.create("opacity", {
                    duration: I,
                    delay: D
                }), b.transitions.create("transform", {
                    duration: ec ? I : I * .666,
                    delay: ec ? D : D || I * .333,
                    easing: $
                })].join(","), _.style.opacity = 0, _.style.transform = gd(.75), d && d(_)
            }), N = k(p), A = _ => {
                y === "auto" && (m.current = setTimeout(_, g.current || 0)), r && r(E.current, _)
            };
        return h.useEffect(() => () => {
            clearTimeout(m.current)
        }, []), C.jsx(S, x({
            appear: o,
            in: l,
            nodeRef: E,
            onEnter: M,
            onEntered: P,
            onEntering: T,
            onExit: j,
            onExited: N,
            onExiting: O,
            addEndListener: A,
            timeout: y === "auto" ? null : y
        }, f, {
            children: (_, L) => h.cloneElement(i, x({
                style: x({
                    opacity: 0,
                    transform: gd(.75),
                    visibility: _ === "exited" && !l ? "hidden" : void 0
                }, yT[_], v, i.props.style), ref: R
            }, L))
        }))
    });
by.muiSupportAuto = !0;
const ra = by,
    xT = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"],
    bT = F(s2, {name: "MuiPopper", slot: "Root", overridesResolver: (e, t) => t.root})({}),
    CT = h.forwardRef(function (t, n) {
        var r;
        const o = nu(), i = Z({props: t, name: "MuiPopper"}), {
            anchorEl: s,
            component: l,
            components: a,
            componentsProps: u,
            container: c,
            disablePortal: d,
            keepMounted: p,
            modifiers: w,
            open: v,
            placement: y,
            popperOptions: S,
            popperRef: f,
            transition: m,
            slots: g,
            slotProps: b
        } = i, E = W(i, xT), R = (r = g == null ? void 0 : g.root) != null ? r : a == null ? void 0 : a.Root, k = x({
            anchorEl: s,
            container: c,
            disablePortal: d,
            keepMounted: p,
            modifiers: w,
            open: v,
            placement: y,
            popperOptions: S,
            popperRef: f,
            transition: m
        }, E);
        return C.jsx(bT, x({
            as: l,
            direction: o == null ? void 0 : o.direction,
            slots: {root: R},
            slotProps: b ?? u
        }, k, {ref: n}))
    }), Cy = CT;

function wT(e) {
    return q("MuiTooltip", e)
}

const ST = ee("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
    or = ST,
    kT = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];

function ET(e) {
    return Math.round(e * 1e5) / 1e5
}

const RT = e => {
    const {classes: t, disableInteractive: n, arrow: r, touch: o, placement: i} = e, s = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${V(i.split("-")[0])}`],
        arrow: ["arrow"]
    };
    return J(s, wT, t)
}, PT = F(Cy, {
    name: "MuiTooltip", slot: "Popper", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose]
    }
})(({theme: e, ownerState: t, open: n}) => x({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none"
}, !t.disableInteractive && {pointerEvents: "auto"}, !n && {pointerEvents: "none"}, t.arrow && {
    [`&[data-popper-placement*="bottom"] .${or.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {transformOrigin: "0 100%"}
    },
    [`&[data-popper-placement*="top"] .${or.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {transformOrigin: "100% 0"}
    },
    [`&[data-popper-placement*="right"] .${or.arrow}`]: x({}, t.isRtl ? {right: 0, marginRight: "-0.71em"} : {
        left: 0,
        marginLeft: "-0.71em"
    }, {height: "1em", width: "0.71em", "&::before": {transformOrigin: "100% 100%"}}),
    [`&[data-popper-placement*="left"] .${or.arrow}`]: x({}, t.isRtl ? {left: 0, marginLeft: "-0.71em"} : {
        right: 0,
        marginRight: "-0.71em"
    }, {height: "1em", width: "0.71em", "&::before": {transformOrigin: "0 0"}})
})), $T = F("div", {
    name: "MuiTooltip", slot: "Tooltip", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${V(n.placement.split("-")[0])}`]]
    }
})(({theme: e, ownerState: t}) => x({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ke(e.palette.grey[700], .92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium
}, t.arrow && {position: "relative", margin: 0}, t.touch && {
    padding: "8px 16px",
    fontSize: e.typography.pxToRem(14),
    lineHeight: `${ET(16 / 14)}em`,
    fontWeight: e.typography.fontWeightRegular
}, {
    [`.${or.popper}[data-popper-placement*="left"] &`]: x({transformOrigin: "right center"}, t.isRtl ? x({marginLeft: "14px"}, t.touch && {marginLeft: "24px"}) : x({marginRight: "14px"}, t.touch && {marginRight: "24px"})),
    [`.${or.popper}[data-popper-placement*="right"] &`]: x({transformOrigin: "left center"}, t.isRtl ? x({marginRight: "14px"}, t.touch && {marginRight: "24px"}) : x({marginLeft: "14px"}, t.touch && {marginLeft: "24px"})),
    [`.${or.popper}[data-popper-placement*="top"] &`]: x({
        transformOrigin: "center bottom",
        marginBottom: "14px"
    }, t.touch && {marginBottom: "24px"}),
    [`.${or.popper}[data-popper-placement*="bottom"] &`]: x({
        transformOrigin: "center top",
        marginTop: "14px"
    }, t.touch && {marginTop: "24px"})
})), TT = F("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
})(({theme: e}) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Ke(e.palette.grey[700], .9),
    "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
    }
}));
let qs = !1, tc = null, mi = {x: 0, y: 0};

function Zs(e, t) {
    return n => {
        t && t(n), e(n)
    }
}

const MT = h.forwardRef(function (t, n) {
        var r, o, i, s, l, a, u, c, d, p, w, v, y, S, f, m, g, b, E;
        const R = Z({props: t, name: "MuiTooltip"}), {
                arrow: k = !1,
                children: T,
                components: M = {},
                componentsProps: P = {},
                describeChild: O = !1,
                disableFocusListener: j = !1,
                disableHoverListener: N = !1,
                disableInteractive: A = !1,
                disableTouchListener: _ = !1,
                enterDelay: L = 100,
                enterNextDelay: D = 0,
                enterTouchDelay: $ = 700,
                followCursor: I = !1,
                id: B,
                leaveDelay: X = 0,
                leaveTouchDelay: Y = 1500,
                onClose: le,
                onOpen: G,
                open: oe,
                placement: te = "bottom",
                PopperComponent: Ce,
                PopperProps: pe = {},
                slotProps: ue = {},
                slots: Be = {},
                title: ne,
                TransitionComponent: ke = ra,
                TransitionProps: re
            } = R, ce = W(R, kT), ae = h.isValidElement(T) ? T : C.jsx("span", {children: T}), gt = Mn(),
            rt = gt.direction === "rtl", [Ue, ut] = h.useState(), [$e, ve] = h.useState(null), ot = h.useRef(!1),
            Fe = A || I, de = h.useRef(), Ze = h.useRef(), Ge = h.useRef(), vt = h.useRef(), [me, Q] = Ul({
                controlled: oe,
                default: !1,
                name: "Tooltip",
                state: "open"
            });
        let Xe = me;
        const On = ys(B), nn = h.useRef(), K = h.useCallback(() => {
            nn.current !== void 0 && (document.body.style.WebkitUserSelect = nn.current, nn.current = void 0), clearTimeout(vt.current)
        }, []);
        h.useEffect(() => () => {
            clearTimeout(de.current), clearTimeout(Ze.current), clearTimeout(Ge.current), K()
        }, [K]);
        const we = ie => {
            clearTimeout(tc), qs = !0, Q(!0), G && !Xe && G(ie)
        }, je = un(ie => {
            clearTimeout(tc), tc = setTimeout(() => {
                qs = !1
            }, 800 + X), Q(!1), le && Xe && le(ie), clearTimeout(de.current), de.current = setTimeout(() => {
                ot.current = !1
            }, gt.transitions.duration.shortest)
        }), hn = ie => {
            ot.current && ie.type !== "touchstart" || (Ue && Ue.removeAttribute("title"), clearTimeout(Ze.current), clearTimeout(Ge.current), L || qs && D ? Ze.current = setTimeout(() => {
                we(ie)
            }, qs ? D : L) : we(ie))
        }, Zo = ie => {
            clearTimeout(Ze.current), clearTimeout(Ge.current), Ge.current = setTimeout(() => {
                je(ie)
            }, X)
        }, {isFocusVisibleRef: ep, onBlur: jy, onFocus: _y, ref: Ay} = La(), [, tp] = h.useState(!1), np = ie => {
            jy(ie), ep.current === !1 && (tp(!1), Zo(ie))
        }, rp = ie => {
            Ue || ut(ie.currentTarget), _y(ie), ep.current === !0 && (tp(!0), hn(ie))
        }, op = ie => {
            ot.current = !0;
            const It = ae.props;
            It.onTouchStart && It.onTouchStart(ie)
        }, ip = hn, sp = Zo, zy = ie => {
            op(ie), clearTimeout(Ge.current), clearTimeout(de.current), K(), nn.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", vt.current = setTimeout(() => {
                document.body.style.WebkitUserSelect = nn.current, hn(ie)
            }, $)
        }, Dy = ie => {
            ae.props.onTouchEnd && ae.props.onTouchEnd(ie), K(), clearTimeout(Ge.current), Ge.current = setTimeout(() => {
                je(ie)
            }, Y)
        };
        h.useEffect(() => {
            if (!Xe) return;

            function ie(It) {
                (It.key === "Escape" || It.key === "Esc") && je(It)
            }

            return document.addEventListener("keydown", ie), () => {
                document.removeEventListener("keydown", ie)
            }
        }, [je, Xe]);
        const By = Le(ae.ref, Ay, ut, n);
        !ne && ne !== 0 && (Xe = !1);
        const xu = h.useRef(), Fy = ie => {
            const It = ae.props;
            It.onMouseMove && It.onMouseMove(ie), mi = {x: ie.clientX, y: ie.clientY}, xu.current && xu.current.update()
        }, Jo = {}, bu = typeof ne == "string";
        O ? (Jo.title = !Xe && bu && !N ? ne : null, Jo["aria-describedby"] = Xe ? On : null) : (Jo["aria-label"] = bu ? ne : null, Jo["aria-labelledby"] = Xe && !bu ? On : null);
        const rn = x({}, Jo, ce, ae.props, {
            className: U(ce.className, ae.props.className),
            onTouchStart: op,
            ref: By
        }, I ? {onMouseMove: Fy} : {}), ei = {};
        _ || (rn.onTouchStart = zy, rn.onTouchEnd = Dy), N || (rn.onMouseOver = Zs(ip, rn.onMouseOver), rn.onMouseLeave = Zs(sp, rn.onMouseLeave), Fe || (ei.onMouseOver = ip, ei.onMouseLeave = sp)), j || (rn.onFocus = Zs(rp, rn.onFocus), rn.onBlur = Zs(np, rn.onBlur), Fe || (ei.onFocus = rp, ei.onBlur = np));
        const Wy = h.useMemo(() => {
                var ie;
                let It = [{name: "arrow", enabled: !!$e, options: {element: $e, padding: 4}}];
                return (ie = pe.popperOptions) != null && ie.modifiers && (It = It.concat(pe.popperOptions.modifiers)), x({}, pe.popperOptions, {modifiers: It})
            }, [$e, pe]), ti = x({}, R, {
                isRtl: rt,
                arrow: k,
                disableInteractive: Fe,
                placement: te,
                PopperComponentProp: Ce,
                touch: ot.current
            }), Cu = RT(ti), lp = (r = (o = Be.popper) != null ? o : M.Popper) != null ? r : PT,
            ap = (i = (s = (l = Be.transition) != null ? l : M.Transition) != null ? s : ke) != null ? i : ra,
            up = (a = (u = Be.tooltip) != null ? u : M.Tooltip) != null ? a : $T,
            cp = (c = (d = Be.arrow) != null ? d : M.Arrow) != null ? c : TT,
            Uy = wi(lp, x({}, pe, (p = ue.popper) != null ? p : P.popper, {className: U(Cu.popper, pe == null ? void 0 : pe.className, (w = (v = ue.popper) != null ? v : P.popper) == null ? void 0 : w.className)}), ti),
            Vy = wi(ap, x({}, re, (y = ue.transition) != null ? y : P.transition), ti),
            Hy = wi(up, x({}, (S = ue.tooltip) != null ? S : P.tooltip, {className: U(Cu.tooltip, (f = (m = ue.tooltip) != null ? m : P.tooltip) == null ? void 0 : f.className)}), ti),
            Ky = wi(cp, x({}, (g = ue.arrow) != null ? g : P.arrow, {className: U(Cu.arrow, (b = (E = ue.arrow) != null ? E : P.arrow) == null ? void 0 : b.className)}), ti);
        return C.jsxs(h.Fragment, {
            children: [h.cloneElement(ae, rn), C.jsx(lp, x({
                as: Ce ?? Cy,
                placement: te,
                anchorEl: I ? {
                    getBoundingClientRect: () => ({
                        top: mi.y,
                        left: mi.x,
                        right: mi.x,
                        bottom: mi.y,
                        width: 0,
                        height: 0
                    })
                } : Ue,
                popperRef: xu,
                open: Ue ? Xe : !1,
                id: On,
                transition: !0
            }, ei, Uy, {
                popperOptions: Wy,
                children: ({TransitionProps: ie}) => C.jsx(ap, x({timeout: gt.transitions.duration.shorter}, ie, Vy, {children: C.jsxs(up, x({}, Hy, {children: [ne, k ? C.jsx(cp, x({}, Ky, {ref: ve})) : null]}))}))
            }))]
        })
    }), OT = MT, IT = Vt(C.jsx("path", {d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}), "AddOutlined"),
    NT = Vt(C.jsx("path", {d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}), "ClearOutlined"),
    LT = Vt(C.jsx("path", {d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}), "HelpOutlineOutlined"),
    jT = Vt(C.jsx("path", {d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}), "InfoOutlined"),
    _T = Vt(C.jsx("path", {d: "M19 13H5v-2h14v2z"}), "RemoveOutlined");

function AT(e) {
    return q("MuiDialogTitle", e)
}

const zT = ee("MuiDialogTitle", ["root"]), DT = zT, BT = h.createContext({}), wy = BT, FT = ["className", "id"],
    WT = e => {
        const {classes: t} = e;
        return J({root: ["root"]}, AT, t)
    }, UT = F(et, {name: "MuiDialogTitle", slot: "Root", overridesResolver: (e, t) => t.root})({
        padding: "16px 24px",
        flex: "0 0 auto"
    }), VT = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiDialogTitle"}), {className: o, id: i} = r, s = W(r, FT), l = r,
            a = WT(l), {titleId: u = i} = h.useContext(wy);
        return C.jsx(UT, x({component: "h2", className: U(a.root, o), ownerState: l, ref: n, variant: "h6", id: i ?? u}, s))
    }), HT = VT;

function KT(e) {
    return q("MuiDialogContent", e)
}

ee("MuiDialogContent", ["root", "dividers"]);
const GT = ["className", "dividers"], XT = e => {
    const {classes: t, dividers: n} = e;
    return J({root: ["root", n && "dividers"]}, KT, t)
}, QT = F("div", {
    name: "MuiDialogContent", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.dividers && t.dividers]
    }
})(({theme: e, ownerState: t}) => x({
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowY: "auto",
    padding: "20px 24px"
}, t.dividers ? {
    padding: "16px 24px",
    borderTop: `1px solid ${(e.vars || e).palette.divider}`,
    borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {[`.${DT.root} + &`]: {paddingTop: 0}})), YT = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiDialogContent"}), {className: o, dividers: i = !1} = r, s = W(r, GT),
        l = x({}, r, {dividers: i}), a = XT(l);
    return C.jsx(QT, x({className: U(a.root, o), ownerState: l, ref: n}, s))
}), qT = YT;

function ZT(e) {
    return q("MuiDialogContentText", e)
}

ee("MuiDialogContentText", ["root"]);
const JT = ["children", "className"], eM = e => {
    const {classes: t} = e, r = J({root: ["root"]}, ZT, t);
    return x({}, t, r)
}, tM = F(et, {
    shouldForwardProp: e => Ot(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
})({}), nM = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiDialogContentText"}), {className: o} = r, i = W(r, JT), s = eM(i);
    return C.jsx(tM, x({
        component: "p",
        variant: "body1",
        color: "text.secondary",
        ref: n,
        ownerState: i,
        className: U(s.root, o)
    }, r, {classes: s}))
}), Js = nM;

function rM(e) {
    return q("MuiDialogActions", e)
}

ee("MuiDialogActions", ["root", "spacing"]);
const oM = ["className", "disableSpacing"], iM = e => {
    const {classes: t, disableSpacing: n} = e;
    return J({root: ["root", !n && "spacing"]}, rM, t)
}, sM = F("div", {
    name: "MuiDialogActions", slot: "Root", overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, !n.disableSpacing && t.spacing]
    }
})(({ownerState: e}) => x({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto"
}, !e.disableSpacing && {"& > :not(style) ~ :not(style)": {marginLeft: 8}})), lM = h.forwardRef(function (t, n) {
    const r = Z({props: t, name: "MuiDialogActions"}), {className: o, disableSpacing: i = !1} = r, s = W(r, oM),
        l = x({}, r, {disableSpacing: i}), a = iM(l);
    return C.jsx(sM, x({className: U(a.root, o), ownerState: l, ref: n}, s))
}), aM = lM;

function uM(e) {
    return q("MuiButton", e)
}

const cM = ee("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
    el = cM, dM = h.createContext({}), fM = dM, pM = h.createContext(void 0), mM = pM,
    hM = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
    gM = e => {
        const {color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: s} = e, l = {
            root: ["root", i, `${i}${V(t)}`, `size${V(o)}`, `${i}Size${V(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
            label: ["label"],
            startIcon: ["startIcon", `iconSize${V(o)}`],
            endIcon: ["endIcon", `iconSize${V(o)}`]
        }, a = J(l, uM, s);
        return x({}, s, a)
    },
    Sy = e => x({}, e.size === "small" && {"& > *:nth-of-type(1)": {fontSize: 18}}, e.size === "medium" && {"& > *:nth-of-type(1)": {fontSize: 20}}, e.size === "large" && {"& > *:nth-of-type(1)": {fontSize: 22}}),
    vM = F(uu, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, t[n.variant], t[`${n.variant}${V(n.color)}`], t[`size${V(n.size)}`], t[`${n.variant}Size${V(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
        }
    })(({theme: e, ownerState: t}) => {
        var n, r;
        const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800],
            i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
        return x({}, e.typography.button, {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: (e.vars || e).shape.borderRadius,
            transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {duration: e.transitions.duration.short}),
            "&:hover": x({
                textDecoration: "none",
                backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": {backgroundColor: "transparent"}
            }, t.variant === "text" && t.color !== "inherit" && {
                backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": {backgroundColor: "transparent"}
            }, t.variant === "outlined" && t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": {backgroundColor: "transparent"}
            }, t.variant === "contained" && {
                backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": {
                    boxShadow: (e.vars || e).shadows[2],
                    backgroundColor: (e.vars || e).palette.grey[300]
                }
            }, t.variant === "contained" && t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {backgroundColor: (e.vars || e).palette[t.color].main}
            }),
            "&:active": x({}, t.variant === "contained" && {boxShadow: (e.vars || e).shadows[8]}),
            [`&.${el.focusVisible}`]: x({}, t.variant === "contained" && {boxShadow: (e.vars || e).shadows[6]}),
            [`&.${el.disabled}`]: x({color: (e.vars || e).palette.action.disabled}, t.variant === "outlined" && {border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`}, t.variant === "contained" && {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action.disabledBackground
            })
        }, t.variant === "text" && {padding: "6px 8px"}, t.variant === "text" && t.color !== "inherit" && {color: (e.vars || e).palette[t.color].main}, t.variant === "outlined" && {
            padding: "5px 15px",
            border: "1px solid currentColor"
        }, t.variant === "outlined" && t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ke(e.palette[t.color].main, .5)}`
        }, t.variant === "contained" && {
            color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
            backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
            boxShadow: (e.vars || e).shadows[2]
        }, t.variant === "contained" && t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main
        }, t.color === "inherit" && {
            color: "inherit",
            borderColor: "currentColor"
        }, t.size === "small" && t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13)
        }, t.size === "large" && t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15)
        }, t.size === "small" && t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13)
        }, t.size === "large" && t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15)
        }, t.size === "small" && t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13)
        }, t.size === "large" && t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15)
        }, t.fullWidth && {width: "100%"})
    }, ({ownerState: e}) => e.disableElevation && {
        boxShadow: "none",
        "&:hover": {boxShadow: "none"},
        [`&.${el.focusVisible}`]: {boxShadow: "none"},
        "&:active": {boxShadow: "none"},
        [`&.${el.disabled}`]: {boxShadow: "none"}
    }), yM = F("span", {
        name: "MuiButton", slot: "StartIcon", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.startIcon, t[`iconSize${V(n.size)}`]]
        }
    })(({ownerState: e}) => x({
        display: "inherit",
        marginRight: 8,
        marginLeft: -4
    }, e.size === "small" && {marginLeft: -2}, Sy(e))), xM = F("span", {
        name: "MuiButton", slot: "EndIcon", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.endIcon, t[`iconSize${V(n.size)}`]]
        }
    })(({ownerState: e}) => x({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8
    }, e.size === "small" && {marginRight: -2}, Sy(e))), bM = h.forwardRef(function (t, n) {
        const r = h.useContext(fM), o = h.useContext(mM), i = mf(r, t), s = Z({props: i, name: "MuiButton"}), {
                children: l,
                color: a = "primary",
                component: u = "button",
                className: c,
                disabled: d = !1,
                disableElevation: p = !1,
                disableFocusRipple: w = !1,
                endIcon: v,
                focusVisibleClassName: y,
                fullWidth: S = !1,
                size: f = "medium",
                startIcon: m,
                type: g,
                variant: b = "text"
            } = s, E = W(s, hM), R = x({}, s, {
                color: a,
                component: u,
                disabled: d,
                disableElevation: p,
                disableFocusRipple: w,
                fullWidth: S,
                size: f,
                type: g,
                variant: b
            }), k = gM(R), T = m && C.jsx(yM, {className: k.startIcon, ownerState: R, children: m}),
            M = v && C.jsx(xM, {className: k.endIcon, ownerState: R, children: v}), P = o || "";
        return C.jsxs(vM, x({
            ownerState: R,
            className: U(r.className, k.root, c, P),
            component: u,
            disabled: d,
            focusRipple: !w,
            focusVisibleClassName: U(k.focusVisible, y),
            ref: n,
            type: g
        }, E, {classes: k, children: [T, l, M]}))
    }), cn = bM;

function CM(e) {
    return q("MuiDialog", e)
}

const wM = ee("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]),
    nc = wM,
    SM = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"],
    kM = F(Z0, {name: "MuiDialog", slot: "Backdrop", overrides: (e, t) => t.backdrop})({zIndex: -1}), EM = e => {
        const {classes: t, scroll: n, maxWidth: r, fullWidth: o, fullScreen: i} = e, s = {
            root: ["root"],
            container: ["container", `scroll${V(n)}`],
            paper: ["paper", `paperScroll${V(n)}`, `paperWidth${V(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
        };
        return J(s, CM, t)
    }, RM = F(Uf, {
        name: "MuiDialog",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({"@media print": {position: "absolute !important"}}), PM = F("div", {
        name: "MuiDialog", slot: "Container", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.container, t[`scroll${V(n.scroll)}`]]
        }
    })(({ownerState: e}) => x({
        height: "100%",
        "@media print": {height: "auto"},
        outline: 0
    }, e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&:after": {content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0"}
    })), $M = F(mn, {
        name: "MuiDialog", slot: "Paper", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.paper, t[`scrollPaper${V(n.scroll)}`], t[`paperWidth${V(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen]
        }
    })(({theme: e, ownerState: t}) => x({
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": {overflowY: "visible", boxShadow: "none"}
    }, t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)"
    }, t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left"
    }, !t.maxWidth && {maxWidth: "calc(100% - 64px)"}, t.maxWidth === "xs" && {
        maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${nc.paperScrollBody}`]: {[e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {maxWidth: "calc(100% - 64px)"}}
    }, t.maxWidth && t.maxWidth !== "xs" && {
        maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
        [`&.${nc.paperScrollBody}`]: {[e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {maxWidth: "calc(100% - 64px)"}}
    }, t.fullWidth && {width: "calc(100% - 64px)"}, t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${nc.paperScrollBody}`]: {margin: 0, maxWidth: "100%"}
    })), TM = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiDialog"}), o = Mn(), i = {
                enter: o.transitions.duration.enteringScreen,
                exit: o.transitions.duration.leavingScreen
            }, {
                "aria-describedby": s,
                "aria-labelledby": l,
                BackdropComponent: a,
                BackdropProps: u,
                children: c,
                className: d,
                disableEscapeKeyDown: p = !1,
                fullScreen: w = !1,
                fullWidth: v = !1,
                maxWidth: y = "sm",
                onBackdropClick: S,
                onClose: f,
                open: m,
                PaperComponent: g = mn,
                PaperProps: b = {},
                scroll: E = "paper",
                TransitionComponent: R = q0,
                transitionDuration: k = i,
                TransitionProps: T
            } = r, M = W(r, SM), P = x({}, r, {disableEscapeKeyDown: p, fullScreen: w, fullWidth: v, maxWidth: y, scroll: E}),
            O = EM(P), j = h.useRef(), N = D => {
                j.current = D.target === D.currentTarget
            }, A = D => {
                j.current && (j.current = null, S && S(D), f && f(D, "backdropClick"))
            }, _ = ys(l), L = h.useMemo(() => ({titleId: _}), [_]);
        return C.jsx(RM, x({
            className: U(O.root, d),
            closeAfterTransition: !0,
            components: {Backdrop: kM},
            componentsProps: {backdrop: x({transitionDuration: k, as: a}, u)},
            disableEscapeKeyDown: p,
            onClose: f,
            open: m,
            ref: n,
            onClick: A,
            ownerState: P
        }, M, {
            children: C.jsx(R, x({
                appear: !0,
                in: m,
                timeout: k,
                role: "presentation"
            }, T, {
                children: C.jsx(PM, {
                    className: U(O.container),
                    onMouseDown: N,
                    ownerState: P,
                    children: C.jsx($M, x({
                        as: g,
                        elevation: 24,
                        role: "dialog",
                        "aria-describedby": s,
                        "aria-labelledby": _
                    }, b, {
                        className: U(O.paper, b.className),
                        ownerState: P,
                        children: C.jsx(wy.Provider, {value: L, children: c})
                    }))
                })
            }))
        }))
    }), MM = TM;

function OM(e) {
    return q("MuiAlert", e)
}

const IM = ee("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]),
    Eh = IM,
    NM = Vt(C.jsx("path", {d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}), "SuccessOutlined"),
    LM = Vt(C.jsx("path", {d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}), "ReportProblemOutlined"),
    jM = Vt(C.jsx("path", {d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}), "ErrorOutline"),
    _M = Vt(C.jsx("path", {d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}), "InfoOutlined"),
    AM = Vt(C.jsx("path", {d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}), "Close"),
    zM = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"],
    DM = e => {
        const {variant: t, color: n, severity: r, classes: o} = e,
            i = {root: ["root", `${t}${V(n || r)}`, `${t}`], icon: ["icon"], message: ["message"], action: ["action"]};
        return J(i, OM, o)
    }, BM = F(mn, {
        name: "MuiAlert", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, t[n.variant], t[`${n.variant}${V(n.color || n.severity)}`]]
        }
    })(({theme: e, ownerState: t}) => {
        const n = e.palette.mode === "light" ? Xl : Ql, r = e.palette.mode === "light" ? Ql : Xl, o = t.color || t.severity;
        return x({}, e.typography.body2, {
            backgroundColor: "transparent",
            display: "flex",
            padding: "6px 16px"
        }, o && t.variant === "standard" && {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, .9),
            [`& .${Eh.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
        }, o && t.variant === "outlined" && {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, .6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${Eh.icon}`]: e.vars ? {color: e.vars.palette.Alert[`${o}IconColor`]} : {color: e.palette[o].main}
        }, o && t.variant === "filled" && x({fontWeight: e.typography.fontWeightMedium}, e.vars ? {
            color: e.vars.palette.Alert[`${o}FilledColor`],
            backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
        } : {
            backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
            color: e.palette.getContrastText(e.palette[o].main)
        }))
    }), FM = F("div", {name: "MuiAlert", slot: "Icon", overridesResolver: (e, t) => t.icon})({
        marginRight: 12,
        padding: "7px 0",
        display: "flex",
        fontSize: 22,
        opacity: .9
    }), WM = F("div", {name: "MuiAlert", slot: "Message", overridesResolver: (e, t) => t.message})({
        padding: "8px 0",
        minWidth: 0,
        overflow: "auto"
    }), Rh = F("div", {name: "MuiAlert", slot: "Action", overridesResolver: (e, t) => t.action})({
        display: "flex",
        alignItems: "flex-start",
        padding: "4px 0 0 16px",
        marginLeft: "auto",
        marginRight: -8
    }), Ph = {
        success: C.jsx(NM, {fontSize: "inherit"}),
        warning: C.jsx(LM, {fontSize: "inherit"}),
        error: C.jsx(jM, {fontSize: "inherit"}),
        info: C.jsx(_M, {fontSize: "inherit"})
    }, UM = h.forwardRef(function (t, n) {
        var r, o, i, s, l, a;
        const u = Z({props: t, name: "MuiAlert"}), {
                action: c,
                children: d,
                className: p,
                closeText: w = "Close",
                color: v,
                components: y = {},
                componentsProps: S = {},
                icon: f,
                iconMapping: m = Ph,
                onClose: g,
                role: b = "alert",
                severity: E = "success",
                slotProps: R = {},
                slots: k = {},
                variant: T = "standard"
            } = u, M = W(u, zM), P = x({}, u, {color: v, severity: E, variant: T}), O = DM(P),
            j = (r = (o = k.closeButton) != null ? o : y.CloseButton) != null ? r : hd,
            N = (i = (s = k.closeIcon) != null ? s : y.CloseIcon) != null ? i : AM,
            A = (l = R.closeButton) != null ? l : S.closeButton, _ = (a = R.closeIcon) != null ? a : S.closeIcon;
        return C.jsxs(BM, x({
            role: b,
            elevation: 0,
            ownerState: P,
            className: U(O.root, p),
            ref: n
        }, M, {
            children: [f !== !1 ? C.jsx(FM, {
                ownerState: P,
                className: O.icon,
                children: f || m[E] || Ph[E]
            }) : null, C.jsx(WM, {ownerState: P, className: O.message, children: d}), c != null ? C.jsx(Rh, {
                ownerState: P,
                className: O.action,
                children: c
            }) : null, c == null && g ? C.jsx(Rh, {
                ownerState: P,
                className: O.action,
                children: C.jsx(j, x({
                    size: "small",
                    "aria-label": w,
                    title: w,
                    color: "inherit",
                    onClick: g
                }, A, {children: C.jsx(N, x({fontSize: "small"}, _))}))
            }) : null]
        }))
    }), Hf = UM;

function Yo({props: e, states: t, muiFormControl: n}) {
    return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {})
}

const VM = h.createContext(void 0), Kf = VM;

function qo() {
    return h.useContext(Kf)
}

function $h(e) {
    return e != null && !(Array.isArray(e) && e.length === 0)
}

function oa(e, t = !1) {
    return e && ($h(e.value) && e.value !== "" || t && $h(e.defaultValue) && e.defaultValue !== "")
}

function HM(e) {
    return e.startAdornment
}

function KM(e) {
    return q("MuiInputBase", e)
}

const GM = ee("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]),
    Uo = GM,
    XM = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
    mu = (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${V(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel]
    }, hu = (e, t) => {
        const {ownerState: n} = e;
        return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel]
    }, QM = e => {
        const {
            classes: t,
            color: n,
            disabled: r,
            error: o,
            endAdornment: i,
            focused: s,
            formControl: l,
            fullWidth: a,
            hiddenLabel: u,
            multiline: c,
            readOnly: d,
            size: p,
            startAdornment: w,
            type: v
        } = e, y = {
            root: ["root", `color${V(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", p && p !== "medium" && `size${V(p)}`, c && "multiline", w && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
            input: ["input", r && "disabled", v === "search" && "inputTypeSearch", c && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", w && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
        };
        return J(y, KM, t)
    }, gu = F("div", {name: "MuiInputBase", slot: "Root", overridesResolver: mu})(({
                                                                                       theme: e,
                                                                                       ownerState: t
                                                                                   }) => x({}, e.typography.body1, {
        color: (e.vars || e).palette.text.primary,
        lineHeight: "1.4375em",
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        [`&.${Uo.disabled}`]: {color: (e.vars || e).palette.text.disabled, cursor: "default"}
    }, t.multiline && x({padding: "4px 0 5px"}, t.size === "small" && {paddingTop: 1}), t.fullWidth && {width: "100%"})),
    vu = F("input", {name: "MuiInputBase", slot: "Input", overridesResolver: hu})(({theme: e, ownerState: t}) => {
        const n = e.palette.mode === "light",
            r = x({color: "currentColor"}, e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5}, {transition: e.transitions.create("opacity", {duration: e.transitions.duration.shorter})}),
            o = {opacity: "0 !important"},
            i = e.vars ? {opacity: e.vars.opacity.inputPlaceholder} : {opacity: n ? .42 : .5};
        return x({
            font: "inherit",
            letterSpacing: "inherit",
            color: "currentColor",
            padding: "4px 0 5px",
            border: 0,
            boxSizing: "content-box",
            background: "none",
            height: "1.4375em",
            margin: 0,
            WebkitTapHighlightColor: "transparent",
            display: "block",
            minWidth: 0,
            width: "100%",
            animationName: "mui-auto-fill-cancel",
            animationDuration: "10ms",
            "&::-webkit-input-placeholder": r,
            "&::-moz-placeholder": r,
            "&:-ms-input-placeholder": r,
            "&::-ms-input-placeholder": r,
            "&:focus": {outline: 0},
            "&:invalid": {boxShadow: "none"},
            "&::-webkit-search-decoration": {WebkitAppearance: "none"},
            [`label[data-shrink=false] + .${Uo.formControl} &`]: {
                "&::-webkit-input-placeholder": o,
                "&::-moz-placeholder": o,
                "&:-ms-input-placeholder": o,
                "&::-ms-input-placeholder": o,
                "&:focus::-webkit-input-placeholder": i,
                "&:focus::-moz-placeholder": i,
                "&:focus:-ms-input-placeholder": i,
                "&:focus::-ms-input-placeholder": i
            },
            [`&.${Uo.disabled}`]: {opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled},
            "&:-webkit-autofill": {animationDuration: "5000s", animationName: "mui-auto-fill"}
        }, t.size === "small" && {paddingTop: 1}, t.multiline && {
            height: "auto",
            resize: "none",
            padding: 0,
            paddingTop: 0
        }, t.type === "search" && {MozAppearance: "textfield"})
    }), YM = C.jsx(A0, {
        styles: {
            "@keyframes mui-auto-fill": {from: {display: "block"}},
            "@keyframes mui-auto-fill-cancel": {from: {display: "block"}}
        }
    }), qM = h.forwardRef(function (t, n) {
        var r;
        const o = Z({props: t, name: "MuiInputBase"}), {
                "aria-describedby": i,
                autoComplete: s,
                autoFocus: l,
                className: a,
                components: u = {},
                componentsProps: c = {},
                defaultValue: d,
                disabled: p,
                disableInjectingGlobalStyles: w,
                endAdornment: v,
                fullWidth: y = !1,
                id: S,
                inputComponent: f = "input",
                inputProps: m = {},
                inputRef: g,
                maxRows: b,
                minRows: E,
                multiline: R = !1,
                name: k,
                onBlur: T,
                onChange: M,
                onClick: P,
                onFocus: O,
                onKeyDown: j,
                onKeyUp: N,
                placeholder: A,
                readOnly: _,
                renderSuffix: L,
                rows: D,
                slotProps: $ = {},
                slots: I = {},
                startAdornment: B,
                type: X = "text",
                value: Y
            } = o, le = W(o, XM), G = m.value != null ? m.value : Y, {current: oe} = h.useRef(G != null), te = h.useRef(),
            Ce = h.useCallback(me => {
            }, []), pe = Le(te, g, m.ref, Ce), [ue, Be] = h.useState(!1), ne = qo(), ke = Yo({
                props: o,
                muiFormControl: ne,
                states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
            });
        ke.focused = ne ? ne.focused : ue, h.useEffect(() => {
            !ne && p && ue && (Be(!1), T && T())
        }, [ne, p, ue, T]);
        const re = ne && ne.onFilled, ce = ne && ne.onEmpty, ae = h.useCallback(me => {
            oa(me) ? re && re() : ce && ce()
        }, [re, ce]);
        Dt(() => {
            oe && ae({value: G})
        }, [G, ae, oe]);
        const gt = me => {
            if (ke.disabled) {
                me.stopPropagation();
                return
            }
            O && O(me), m.onFocus && m.onFocus(me), ne && ne.onFocus ? ne.onFocus(me) : Be(!0)
        }, rt = me => {
            T && T(me), m.onBlur && m.onBlur(me), ne && ne.onBlur ? ne.onBlur(me) : Be(!1)
        }, Ue = (me, ...Q) => {
            if (!oe) {
                const Xe = me.target || te.current;
                if (Xe == null) throw new Error(gr(1));
                ae({value: Xe.value})
            }
            m.onChange && m.onChange(me, ...Q), M && M(me, ...Q)
        };
        h.useEffect(() => {
            ae(te.current)
        }, []);
        const ut = me => {
            te.current && me.currentTarget === me.target && te.current.focus(), P && P(me)
        };
        let $e = f, ve = m;
        R && $e === "input" && (D ? ve = x({type: void 0, minRows: D, maxRows: D}, ve) : ve = x({
            type: void 0,
            maxRows: b,
            minRows: E
        }, ve), $e = c2);
        const ot = me => {
            ae(me.animationName === "mui-auto-fill-cancel" ? te.current : {value: "x"})
        };
        h.useEffect(() => {
            ne && ne.setAdornedStart(!!B)
        }, [ne, B]);
        const Fe = x({}, o, {
            color: ke.color || "primary",
            disabled: ke.disabled,
            endAdornment: v,
            error: ke.error,
            focused: ke.focused,
            formControl: ne,
            fullWidth: y,
            hiddenLabel: ke.hiddenLabel,
            multiline: R,
            size: ke.size,
            startAdornment: B,
            type: X
        }), de = QM(Fe), Ze = I.root || u.Root || gu, Ge = $.root || c.root || {}, vt = I.input || u.Input || vu;
        return ve = x({}, ve, (r = $.input) != null ? r : c.input), C.jsxs(h.Fragment, {
            children: [!w && YM, C.jsxs(Ze, x({}, Ge, !Ao(Ze) && {ownerState: x({}, Fe, Ge.ownerState)}, {
                ref: n,
                onClick: ut
            }, le, {
                className: U(de.root, Ge.className, a, _ && "MuiInputBase-readOnly"),
                children: [B, C.jsx(Kf.Provider, {
                    value: null,
                    children: C.jsx(vt, x({
                        ownerState: Fe,
                        "aria-invalid": ke.error,
                        "aria-describedby": i,
                        autoComplete: s,
                        autoFocus: l,
                        defaultValue: d,
                        disabled: ke.disabled,
                        id: S,
                        onAnimationStart: ot,
                        name: k,
                        placeholder: A,
                        readOnly: _,
                        required: ke.required,
                        rows: D,
                        value: G,
                        onKeyDown: j,
                        onKeyUp: N,
                        type: X
                    }, ve, !Ao(vt) && {as: $e, ownerState: x({}, Fe, ve.ownerState)}, {
                        ref: pe,
                        className: U(de.input, ve.className, _ && "MuiInputBase-readOnly"),
                        onBlur: rt,
                        onChange: Ue,
                        onFocus: gt
                    }))
                }), v, L ? L(x({}, ke, {startAdornment: B})) : null]
            }))]
        })
    }), Gf = qM;

function ZM(e) {
    return q("MuiInput", e)
}

const JM = x({}, Uo, ee("MuiInput", ["root", "underline", "input"])), hi = JM;

function eO(e) {
    return q("MuiOutlinedInput", e)
}

const tO = x({}, Uo, ee("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Qn = tO;

function nO(e) {
    return q("MuiFilledInput", e)
}

const rO = x({}, Uo, ee("MuiFilledInput", ["root", "underline", "input"])), wr = rO,
    oO = Vt(C.jsx("path", {d: "M7 10l5 5 5-5z"}), "ArrowDropDown"),
    iO = Vt(C.jsx("path", {d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}), "Person");

function sO(e) {
    return q("MuiAvatar", e)
}

ee("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const lO = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"], aO = e => {
        const {classes: t, variant: n, colorDefault: r} = e;
        return J({root: ["root", n, r && "colorDefault"], img: ["img"], fallback: ["fallback"]}, sO, t)
    }, uO = F("div", {
        name: "MuiAvatar", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, t[n.variant], n.colorDefault && t.colorDefault]
        }
    })(({theme: e, ownerState: t}) => x({
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: "50%",
        overflow: "hidden",
        userSelect: "none"
    }, t.variant === "rounded" && {borderRadius: (e.vars || e).shape.borderRadius}, t.variant === "square" && {borderRadius: 0}, t.colorDefault && x({color: (e.vars || e).palette.background.default}, e.vars ? {backgroundColor: e.vars.palette.Avatar.defaultBg} : {backgroundColor: e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600]}))),
    cO = F("img", {name: "MuiAvatar", slot: "Img", overridesResolver: (e, t) => t.img})({
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
        color: "transparent",
        textIndent: 1e4
    }), dO = F(iO, {name: "MuiAvatar", slot: "Fallback", overridesResolver: (e, t) => t.fallback})({
        width: "75%",
        height: "75%"
    });

function fO({crossOrigin: e, referrerPolicy: t, src: n, srcSet: r}) {
    const [o, i] = h.useState(!1);
    return h.useEffect(() => {
        if (!n && !r) return;
        i(!1);
        let s = !0;
        const l = new Image;
        return l.onload = () => {
            s && i("loaded")
        }, l.onerror = () => {
            s && i("error")
        }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, r && (l.srcset = r), () => {
            s = !1
        }
    }, [e, t, n, r]), o
}

const pO = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiAvatar"}), {
            alt: o,
            children: i,
            className: s,
            component: l = "div",
            imgProps: a,
            sizes: u,
            src: c,
            srcSet: d,
            variant: p = "circular"
        } = r, w = W(r, lO);
        let v = null;
        const y = fO(x({}, a, {src: c, srcSet: d})), S = c || d, f = S && y !== "error",
            m = x({}, r, {colorDefault: !f, component: l, variant: p}), g = aO(m);
        return f ? v = C.jsx(cO, x({
            alt: o,
            srcSet: d,
            src: c,
            sizes: u,
            ownerState: m,
            className: g.img
        }, a)) : i != null ? v = i : S && o ? v = o[0] : v = C.jsx(dO, {
            ownerState: m,
            className: g.fallback
        }), C.jsx(uO, x({as: l, ownerState: m, className: U(g.root, s), ref: n}, w, {children: v}))
    }), mO = pO, hO = pS({
        createStyledComponent: F("div", {
            name: "MuiContainer", slot: "Root", overridesResolver: (e, t) => {
                const {ownerState: n} = e;
                return [t.root, t[`maxWidth${V(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters]
            }
        }), useThemeProps: e => Z({props: e, name: "MuiContainer"})
    }), yu = hO,
    gO = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"],
    vO = e => {
        const {classes: t, disableUnderline: n} = e,
            o = J({root: ["root", !n && "underline"], input: ["input"]}, nO, t);
        return x({}, t, o)
    }, yO = F(gu, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [...mu(e, t), !n.disableUnderline && t.underline]
        }
    })(({theme: e, ownerState: t}) => {
        var n;
        const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
            i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
            s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
            l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return x({
            position: "relative",
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
            borderTopRightRadius: (e.vars || e).shape.borderRadius,
            transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
            }),
            "&:hover": {
                backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
                "@media (hover: none)": {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i}
            },
            [`&.${wr.focused}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i},
            [`&.${wr.disabled}`]: {backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l}
        }, !t.disableUnderline && {
            "&:after": {
                borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut
                }),
                pointerEvents: "none"
            },
            [`&.${wr.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
            [`&.${wr.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
            "&:before": {
                borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
                pointerEvents: "none"
            },
            [`&:hover:not(.${wr.disabled}, .${wr.error}):before`]: {borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`},
            [`&.${wr.disabled}:before`]: {borderBottomStyle: "dotted"}
        }, t.startAdornment && {paddingLeft: 12}, t.endAdornment && {paddingRight: 12}, t.multiline && x({padding: "25px 12px 8px"}, t.size === "small" && {
            paddingTop: 21,
            paddingBottom: 4
        }, t.hiddenLabel && {paddingTop: 16, paddingBottom: 17}, t.hiddenLabel && t.size === "small" && {
            paddingTop: 8,
            paddingBottom: 9
        }))
    }), xO = F(vu, {name: "MuiFilledInput", slot: "Input", overridesResolver: hu})(({
                                                                                        theme: e,
                                                                                        ownerState: t
                                                                                    }) => x({
        paddingTop: 25,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 12
    }, !e.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit"
        }
    }, e.vars && {
        "&:-webkit-autofill": {borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit"},
        [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    }, t.size === "small" && {paddingTop: 21, paddingBottom: 4}, t.hiddenLabel && {
        paddingTop: 16,
        paddingBottom: 17
    }, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0}, t.hiddenLabel && t.size === "small" && {
        paddingTop: 8,
        paddingBottom: 9
    }, t.multiline && {paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0})),
    ky = h.forwardRef(function (t, n) {
        var r, o, i, s;
        const l = Z({props: t, name: "MuiFilledInput"}), {
                components: a = {},
                componentsProps: u,
                fullWidth: c = !1,
                inputComponent: d = "input",
                multiline: p = !1,
                slotProps: w,
                slots: v = {},
                type: y = "text"
            } = l, S = W(l, gO), f = x({}, l, {fullWidth: c, inputComponent: d, multiline: p, type: y}), m = vO(l),
            g = {root: {ownerState: f}, input: {ownerState: f}}, b = w ?? u ? mt(w ?? u, g) : g,
            E = (r = (o = v.root) != null ? o : a.Root) != null ? r : yO,
            R = (i = (s = v.input) != null ? s : a.Input) != null ? i : xO;
        return C.jsx(Gf, x({
            slots: {root: E, input: R},
            componentsProps: b,
            fullWidth: c,
            inputComponent: d,
            multiline: p,
            ref: n,
            type: y
        }, S, {classes: m}))
    });
ky.muiName = "Input";
const Ey = ky;

function bO(e) {
    return q("MuiFormControl", e)
}

ee("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const CO = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"],
    wO = e => {
        const {classes: t, margin: n, fullWidth: r} = e,
            o = {root: ["root", n !== "none" && `margin${V(n)}`, r && "fullWidth"]};
        return J(o, bO, t)
    }, SO = F("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: ({ownerState: e}, t) => x({}, t.root, t[`margin${V(e.margin)}`], e.fullWidth && t.fullWidth)
    })(({ownerState: e}) => x({
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top"
    }, e.margin === "normal" && {marginTop: 16, marginBottom: 8}, e.margin === "dense" && {
        marginTop: 8,
        marginBottom: 4
    }, e.fullWidth && {width: "100%"})), kO = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiFormControl"}), {
            children: o,
            className: i,
            color: s = "primary",
            component: l = "div",
            disabled: a = !1,
            error: u = !1,
            focused: c,
            fullWidth: d = !1,
            hiddenLabel: p = !1,
            margin: w = "none",
            required: v = !1,
            size: y = "medium",
            variant: S = "outlined"
        } = r, f = W(r, CO), m = x({}, r, {
            color: s,
            component: l,
            disabled: a,
            error: u,
            fullWidth: d,
            hiddenLabel: p,
            margin: w,
            required: v,
            size: y,
            variant: S
        }), g = wO(m), [b, E] = h.useState(() => {
            let N = !1;
            return o && h.Children.forEach(o, A => {
                if (!Ni(A, ["Input", "Select"])) return;
                const _ = Ni(A, ["Select"]) ? A.props.input : A;
                _ && HM(_.props) && (N = !0)
            }), N
        }), [R, k] = h.useState(() => {
            let N = !1;
            return o && h.Children.forEach(o, A => {
                Ni(A, ["Input", "Select"]) && (oa(A.props, !0) || oa(A.props.inputProps, !0)) && (N = !0)
            }), N
        }), [T, M] = h.useState(!1);
        a && T && M(!1);
        const P = c !== void 0 && !a ? c : T;
        let O;
        const j = h.useMemo(() => ({
            adornedStart: b,
            setAdornedStart: E,
            color: s,
            disabled: a,
            error: u,
            filled: R,
            focused: P,
            fullWidth: d,
            hiddenLabel: p,
            size: y,
            onBlur: () => {
                M(!1)
            },
            onEmpty: () => {
                k(!1)
            },
            onFilled: () => {
                k(!0)
            },
            onFocus: () => {
                M(!0)
            },
            registerEffect: O,
            required: v,
            variant: S
        }), [b, s, a, u, R, P, d, p, O, v, y, S]);
        return C.jsx(Kf.Provider, {
            value: j,
            children: C.jsx(SO, x({as: l, ownerState: m, className: U(g.root, i), ref: n}, f, {children: o}))
        })
    }), EO = kO, RO = CS({
        createStyledComponent: F("div", {name: "MuiStack", slot: "Root", overridesResolver: (e, t) => t.root}),
        useThemeProps: e => Z({props: e, name: "MuiStack"})
    }), Xf = RO;

function PO(e) {
    return q("MuiFormHelperText", e)
}

const $O = ee("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]),
    Th = $O;
var Mh;
const TO = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"],
    MO = e => {
        const {classes: t, contained: n, size: r, disabled: o, error: i, filled: s, focused: l, required: a} = e,
            u = {root: ["root", o && "disabled", i && "error", r && `size${V(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]};
        return J(u, PO, t)
    }, OO = F("p", {
        name: "MuiFormHelperText", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, n.size && t[`size${V(n.size)}`], n.contained && t.contained, n.filled && t.filled]
        }
    })(({
            theme: e,
            ownerState: t
        }) => x({color: (e.vars || e).palette.text.secondary}, e.typography.caption, {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Th.disabled}`]: {color: (e.vars || e).palette.text.disabled},
        [`&.${Th.error}`]: {color: (e.vars || e).palette.error.main}
    }, t.size === "small" && {marginTop: 4}, t.contained && {marginLeft: 14, marginRight: 14})),
    IO = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiFormHelperText"}), {children: o, className: i, component: s = "p"} = r,
            l = W(r, TO), a = qo(), u = Yo({
                props: r,
                muiFormControl: a,
                states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
            }), c = x({}, r, {
                component: s,
                contained: u.variant === "filled" || u.variant === "outlined",
                variant: u.variant,
                size: u.size,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required
            }), d = MO(c);
        return C.jsx(OO, x({
            as: s,
            ownerState: c,
            className: U(d.root, i),
            ref: n
        }, l, {children: o === " " ? Mh || (Mh = C.jsx("span", {className: "notranslate", children: "​"})) : o}))
    }), NO = IO;

function LO(e) {
    return q("MuiFormLabel", e)
}

const jO = ee("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]),
    Di = jO, _O = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"],
    AO = e => {
        const {classes: t, color: n, focused: r, disabled: o, error: i, filled: s, required: l} = e, a = {
            root: ["root", `color${V(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
            asterisk: ["asterisk", i && "error"]
        };
        return J(a, LO, t)
    }, zO = F("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: ({ownerState: e}, t) => x({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
    })(({
            theme: e,
            ownerState: t
        }) => x({color: (e.vars || e).palette.text.secondary}, e.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${Di.focused}`]: {color: (e.vars || e).palette[t.color].main},
        [`&.${Di.disabled}`]: {color: (e.vars || e).palette.text.disabled},
        [`&.${Di.error}`]: {color: (e.vars || e).palette.error.main}
    })), DO = F("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (e, t) => t.asterisk
    })(({theme: e}) => ({[`&.${Di.error}`]: {color: (e.vars || e).palette.error.main}})),
    BO = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiFormLabel"}), {children: o, className: i, component: s = "label"} = r,
            l = W(r, _O), a = qo(), u = Yo({
                props: r,
                muiFormControl: a,
                states: ["color", "required", "focused", "disabled", "error", "filled"]
            }), c = x({}, r, {
                color: u.color || "primary",
                component: s,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required
            }), d = AO(c);
        return C.jsxs(zO, x({
            as: s,
            ownerState: c,
            className: U(d.root, i),
            ref: n
        }, l, {
            children: [o, u.required && C.jsxs(DO, {
                ownerState: c,
                "aria-hidden": !0,
                className: d.asterisk,
                children: [" ", "*"]
            })]
        }))
    }), FO = BO,
    WO = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"],
    UO = e => {
        const {classes: t, disableUnderline: n} = e,
            o = J({root: ["root", !n && "underline"], input: ["input"]}, ZM, t);
        return x({}, t, o)
    }, VO = F(gu, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [...mu(e, t), !n.disableUnderline && t.underline]
        }
    })(({theme: e, ownerState: t}) => {
        let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
        return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), x({position: "relative"}, t.formControl && {"label + &": {marginTop: 16}}, !t.disableUnderline && {
            "&:after": {
                borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut
                }),
                pointerEvents: "none"
            },
            [`&.${hi.focused}:after`]: {transform: "scaleX(1) translateX(0)"},
            [`&.${hi.error}`]: {"&:before, &:after": {borderBottomColor: (e.vars || e).palette.error.main}},
            "&:before": {
                borderBottom: `1px solid ${r}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {duration: e.transitions.duration.shorter}),
                pointerEvents: "none"
            },
            [`&:hover:not(.${hi.disabled}, .${hi.error}):before`]: {
                borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                "@media (hover: none)": {borderBottom: `1px solid ${r}`}
            },
            [`&.${hi.disabled}:before`]: {borderBottomStyle: "dotted"}
        })
    }), HO = F(vu, {name: "MuiInput", slot: "Input", overridesResolver: hu})({}), Ry = h.forwardRef(function (t, n) {
        var r, o, i, s;
        const l = Z({props: t, name: "MuiInput"}), {
                disableUnderline: a,
                components: u = {},
                componentsProps: c,
                fullWidth: d = !1,
                inputComponent: p = "input",
                multiline: w = !1,
                slotProps: v,
                slots: y = {},
                type: S = "text"
            } = l, f = W(l, WO), m = UO(l), b = {root: {ownerState: {disableUnderline: a}}}, E = v ?? c ? mt(v ?? c, b) : b,
            R = (r = (o = y.root) != null ? o : u.Root) != null ? r : VO,
            k = (i = (s = y.input) != null ? s : u.Input) != null ? i : HO;
        return C.jsx(Gf, x({
            slots: {root: R, input: k},
            slotProps: E,
            fullWidth: d,
            inputComponent: p,
            multiline: w,
            ref: n,
            type: S
        }, f, {classes: m}))
    });
Ry.muiName = "Input";
const Py = Ry;

function KO(e) {
    return q("MuiInputLabel", e)
}

ee("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const GO = ["disableAnimation", "margin", "shrink", "variant", "className"], XO = e => {
        const {classes: t, formControl: n, size: r, shrink: o, disableAnimation: i, variant: s, required: l} = e, a = {
            root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${V(r)}`, s],
            asterisk: [l && "asterisk"]
        }, u = J(a, KO, t);
        return x({}, t, u)
    }, QO = F(FO, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiInputLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [{[`& .${Di.asterisk}`]: t.asterisk}, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]]
        }
    })(({theme: e, ownerState: t}) => x({
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%"
    }, t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)"
    }, t.size === "small" && {transform: "translate(0, 17px) scale(1)"}, t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%"
    }, !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
        })
    }, t.variant === "filled" && x({
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(12px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
    }, t.size === "small" && {transform: "translate(12px, 13px) scale(1)"}, t.shrink && x({
        userSelect: "none",
        pointerEvents: "auto",
        transform: "translate(12px, 7px) scale(0.75)",
        maxWidth: "calc(133% - 24px)"
    }, t.size === "small" && {transform: "translate(12px, 4px) scale(0.75)"})), t.variant === "outlined" && x({
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(14px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
    }, t.size === "small" && {transform: "translate(14px, 9px) scale(1)"}, t.shrink && {
        userSelect: "none",
        pointerEvents: "auto",
        maxWidth: "calc(133% - 32px)",
        transform: "translate(14px, -9px) scale(0.75)"
    }))), YO = h.forwardRef(function (t, n) {
        const r = Z({name: "MuiInputLabel", props: t}), {disableAnimation: o = !1, shrink: i, className: s} = r,
            l = W(r, GO), a = qo();
        let u = i;
        typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
        const c = Yo({props: r, muiFormControl: a, states: ["size", "variant", "required", "focused"]}), d = x({}, r, {
            disableAnimation: o,
            formControl: a,
            shrink: u,
            size: c.size,
            variant: c.variant,
            required: c.required,
            focused: c.focused
        }), p = XO(d);
        return C.jsx(QO, x({"data-shrink": u, ownerState: d, ref: n, className: U(p.root, s)}, l, {classes: p}))
    }), qO = YO,
    ZO = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

function rc(e, t, n) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
}

function Oh(e, t, n) {
    return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild
}

function $y(e, t) {
    if (t === void 0) return !0;
    let n = e.innerText;
    return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0
}

function gi(e, t, n, r, o, i) {
    let s = !1, l = o(e, t, t ? n : !1);
    for (; l;) {
        if (l === e.firstChild) {
            if (s) return !1;
            s = !0
        }
        const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
        if (!l.hasAttribute("tabindex") || !$y(l, i) || a) l = o(e, l, n); else return l.focus(), !0
    }
    return !1
}

const JO = h.forwardRef(function (t, n) {
    const {
            actions: r,
            autoFocus: o = !1,
            autoFocusItem: i = !1,
            children: s,
            className: l,
            disabledItemsFocusable: a = !1,
            disableListWrap: u = !1,
            onKeyDown: c,
            variant: d = "selectedMenu"
        } = t, p = W(t, ZO), w = h.useRef(null),
        v = h.useRef({keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null});
    Dt(() => {
        o && w.current.focus()
    }, [o]), h.useImperativeHandle(r, () => ({
        adjustStyleForScrollbar: (g, b) => {
            const E = !w.current.style.width;
            if (g.clientHeight < w.current.clientHeight && E) {
                const R = `${o0(qe(g))}px`;
                w.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = R, w.current.style.width = `calc(100% + ${R})`
            }
            return w.current
        }
    }), []);
    const y = g => {
        const b = w.current, E = g.key, R = qe(b).activeElement;
        if (E === "ArrowDown") g.preventDefault(), gi(b, R, u, a, rc); else if (E === "ArrowUp") g.preventDefault(), gi(b, R, u, a, Oh); else if (E === "Home") g.preventDefault(), gi(b, null, u, a, rc); else if (E === "End") g.preventDefault(), gi(b, null, u, a, Oh); else if (E.length === 1) {
            const k = v.current, T = E.toLowerCase(), M = performance.now();
            k.keys.length > 0 && (M - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && T !== k.keys[0] && (k.repeating = !1)), k.lastTime = M, k.keys.push(T);
            const P = R && !k.repeating && $y(R, k);
            k.previousKeyMatched && (P || gi(b, R, !1, a, rc, k)) ? g.preventDefault() : k.previousKeyMatched = !1
        }
        c && c(g)
    }, S = Le(w, n);
    let f = -1;
    h.Children.forEach(s, (g, b) => {
        if (!h.isValidElement(g)) {
            f === b && (f += 1, f >= s.length && (f = -1));
            return
        }
        g.props.disabled || (d === "selectedMenu" && g.props.selected || f === -1) && (f = b), f === b && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (f += 1, f >= s.length && (f = -1))
    });
    const m = h.Children.map(s, (g, b) => {
        if (b === f) {
            const E = {};
            return i && (E.autoFocus = !0), g.props.tabIndex === void 0 && d === "selectedMenu" && (E.tabIndex = 0), h.cloneElement(g, E)
        }
        return g
    });
    return C.jsx(ny, x({role: "menu", ref: S, className: l, onKeyDown: y, tabIndex: o ? 0 : -1}, p, {children: m}))
}), eI = JO;

function tI(e) {
    return q("MuiPopover", e)
}

ee("MuiPopover", ["root", "paper"]);
const nI = ["onEntering"],
    rI = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"],
    oI = ["slotProps"];

function Ih(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n
}

function Nh(e, t) {
    let n = 0;
    return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n
}

function Lh(e) {
    return [e.horizontal, e.vertical].map(t => typeof t == "number" ? `${t}px` : t).join(" ")
}

function oc(e) {
    return typeof e == "function" ? e() : e
}

const iI = e => {
        const {classes: t} = e;
        return J({root: ["root"], paper: ["paper"]}, tI, t)
    }, sI = F(Uf, {name: "MuiPopover", slot: "Root", overridesResolver: (e, t) => t.root})({}),
    Ty = F(mn, {name: "MuiPopover", slot: "Paper", overridesResolver: (e, t) => t.paper})({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0
    }), lI = h.forwardRef(function (t, n) {
        var r, o, i;
        const s = Z({props: t, name: "MuiPopover"}), {
                action: l,
                anchorEl: a,
                anchorOrigin: u = {vertical: "top", horizontal: "left"},
                anchorPosition: c,
                anchorReference: d = "anchorEl",
                children: p,
                className: w,
                container: v,
                elevation: y = 8,
                marginThreshold: S = 16,
                open: f,
                PaperProps: m = {},
                slots: g,
                slotProps: b,
                transformOrigin: E = {vertical: "top", horizontal: "left"},
                TransitionComponent: R = ra,
                transitionDuration: k = "auto",
                TransitionProps: {onEntering: T} = {},
                disableScrollLock: M = !1
            } = s, P = W(s.TransitionProps, nI), O = W(s, rI), j = (r = b == null ? void 0 : b.paper) != null ? r : m,
            N = h.useRef(), A = Le(N, j.ref), _ = x({}, s, {
                anchorOrigin: u,
                anchorReference: d,
                elevation: y,
                marginThreshold: S,
                externalPaperSlotProps: j,
                transformOrigin: E,
                TransitionComponent: R,
                transitionDuration: k,
                TransitionProps: P
            }), L = iI(_), D = h.useCallback(() => {
                if (d === "anchorPosition") return c;
                const re = oc(a), ae = (re && re.nodeType === 1 ? re : qe(N.current).body).getBoundingClientRect();
                return {top: ae.top + Ih(ae, u.vertical), left: ae.left + Nh(ae, u.horizontal)}
            }, [a, u.horizontal, u.vertical, c, d]), $ = h.useCallback(re => ({
                vertical: Ih(re, E.vertical),
                horizontal: Nh(re, E.horizontal)
            }), [E.horizontal, E.vertical]), I = h.useCallback(re => {
                const ce = {width: re.offsetWidth, height: re.offsetHeight}, ae = $(ce);
                if (d === "none") return {top: null, left: null, transformOrigin: Lh(ae)};
                const gt = D();
                let rt = gt.top - ae.vertical, Ue = gt.left - ae.horizontal;
                const ut = rt + ce.height, $e = Ue + ce.width, ve = $n(oc(a)), ot = ve.innerHeight - S, Fe = ve.innerWidth - S;
                if (S !== null && rt < S) {
                    const de = rt - S;
                    rt -= de, ae.vertical += de
                } else if (S !== null && ut > ot) {
                    const de = ut - ot;
                    rt -= de, ae.vertical += de
                }
                if (S !== null && Ue < S) {
                    const de = Ue - S;
                    Ue -= de, ae.horizontal += de
                } else if ($e > Fe) {
                    const de = $e - Fe;
                    Ue -= de, ae.horizontal += de
                }
                return {top: `${Math.round(rt)}px`, left: `${Math.round(Ue)}px`, transformOrigin: Lh(ae)}
            }, [a, d, D, $, S]), [B, X] = h.useState(f), Y = h.useCallback(() => {
                const re = N.current;
                if (!re) return;
                const ce = I(re);
                ce.top !== null && (re.style.top = ce.top), ce.left !== null && (re.style.left = ce.left), re.style.transformOrigin = ce.transformOrigin, X(!0)
            }, [I]);
        h.useEffect(() => (M && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [a, M, Y]);
        const le = (re, ce) => {
            T && T(re, ce), Y()
        }, G = () => {
            X(!1)
        };
        h.useEffect(() => {
            f && Y()
        }), h.useImperativeHandle(l, () => f ? {
            updatePosition: () => {
                Y()
            }
        } : null, [f, Y]), h.useEffect(() => {
            if (!f) return;
            const re = Ia(() => {
                Y()
            }), ce = $n(a);
            return ce.addEventListener("resize", re), () => {
                re.clear(), ce.removeEventListener("resize", re)
            }
        }, [a, f, Y]);
        let oe = k;
        k === "auto" && !R.muiSupportAuto && (oe = void 0);
        const te = v || (a ? qe(oc(a)).body : void 0), Ce = (o = g == null ? void 0 : g.root) != null ? o : sI,
            pe = (i = g == null ? void 0 : g.paper) != null ? i : Ty, ue = vr({
                elementType: pe,
                externalSlotProps: x({}, j, {style: B ? j.style : x({}, j.style, {opacity: 0})}),
                additionalProps: {elevation: y, ref: A},
                ownerState: _,
                className: U(L.paper, j == null ? void 0 : j.className)
            }), Be = vr({
                elementType: Ce,
                externalSlotProps: (b == null ? void 0 : b.root) || {},
                externalForwardedProps: O,
                additionalProps: {ref: n, slotProps: {backdrop: {invisible: !0}}, container: te, open: f},
                ownerState: _,
                className: U(L.root, w)
            }), {slotProps: ne} = Be, ke = W(Be, oI);
        return C.jsx(Ce, x({}, ke, !Ao(Ce) && {slotProps: ne, disableScrollLock: M}, {
            children: C.jsx(R, x({
                appear: !0,
                in: f,
                onEntering: le,
                onExited: G,
                timeout: oe
            }, P, {children: C.jsx(pe, x({}, ue, {children: p}))}))
        }))
    }), aI = lI;

function uI(e) {
    return q("MuiMenu", e)
}

ee("MuiMenu", ["root", "paper", "list"]);
const cI = ["onEntering"],
    dI = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"],
    fI = {vertical: "top", horizontal: "right"}, pI = {vertical: "top", horizontal: "left"}, mI = e => {
        const {classes: t} = e;
        return J({root: ["root"], paper: ["paper"], list: ["list"]}, uI, t)
    }, hI = F(aI, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (e, t) => t.root
    })({}), gI = F(Ty, {name: "MuiMenu", slot: "Paper", overridesResolver: (e, t) => t.paper})({
        maxHeight: "calc(100% - 96px)",
        WebkitOverflowScrolling: "touch"
    }), vI = F(eI, {name: "MuiMenu", slot: "List", overridesResolver: (e, t) => t.list})({outline: 0}),
    yI = h.forwardRef(function (t, n) {
        var r, o;
        const i = Z({props: t, name: "MuiMenu"}), {
            autoFocus: s = !0,
            children: l,
            className: a,
            disableAutoFocusItem: u = !1,
            MenuListProps: c = {},
            onClose: d,
            open: p,
            PaperProps: w = {},
            PopoverClasses: v,
            transitionDuration: y = "auto",
            TransitionProps: {onEntering: S} = {},
            variant: f = "selectedMenu",
            slots: m = {},
            slotProps: g = {}
        } = i, b = W(i.TransitionProps, cI), E = W(i, dI), R = Mn(), k = R.direction === "rtl", T = x({}, i, {
            autoFocus: s,
            disableAutoFocusItem: u,
            MenuListProps: c,
            onEntering: S,
            PaperProps: w,
            transitionDuration: y,
            TransitionProps: b,
            variant: f
        }), M = mI(T), P = s && !u && p, O = h.useRef(null), j = (I, B) => {
            O.current && O.current.adjustStyleForScrollbar(I, R), S && S(I, B)
        }, N = I => {
            I.key === "Tab" && (I.preventDefault(), d && d(I, "tabKeyDown"))
        };
        let A = -1;
        h.Children.map(l, (I, B) => {
            h.isValidElement(I) && (I.props.disabled || (f === "selectedMenu" && I.props.selected || A === -1) && (A = B))
        });
        const _ = (r = m.paper) != null ? r : gI, L = (o = g.paper) != null ? o : w,
            D = vr({elementType: m.root, externalSlotProps: g.root, ownerState: T, className: [M.root, a]}),
            $ = vr({elementType: _, externalSlotProps: L, ownerState: T, className: M.paper});
        return C.jsx(hI, x({
            onClose: d,
            anchorOrigin: {vertical: "bottom", horizontal: k ? "right" : "left"},
            transformOrigin: k ? fI : pI,
            slots: {paper: _, root: m.root},
            slotProps: {root: D, paper: $},
            open: p,
            ref: n,
            transitionDuration: y,
            TransitionProps: x({onEntering: j}, b),
            ownerState: T
        }, E, {
            classes: v,
            children: C.jsx(vI, x({
                onKeyDown: N,
                actions: O,
                autoFocus: s && (A === -1 || u),
                autoFocusItem: P,
                variant: f
            }, c, {className: U(M.list, c.className), children: l}))
        }))
    }), xI = yI;

function bI(e) {
    return q("MuiNativeSelect", e)
}

const CI = ee("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]),
    Qf = CI, wI = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], SI = e => {
        const {classes: t, variant: n, disabled: r, multiple: o, open: i, error: s} = e, l = {
            select: ["select", n, r && "disabled", o && "multiple", s && "error"],
            icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"]
        };
        return J(l, bI, t)
    }, My = ({ownerState: e, theme: t}) => x({
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": x({}, t.vars ? {backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`} : {backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"}, {borderRadius: 0}),
        "&::-ms-expand": {display: "none"},
        [`&.${Qf.disabled}`]: {cursor: "default"},
        "&[multiple]": {height: "auto"},
        "&:not([multiple]) option, &:not([multiple]) optgroup": {backgroundColor: (t.vars || t).palette.background.paper},
        "&&&": {paddingRight: 24, minWidth: 16}
    }, e.variant === "filled" && {"&&&": {paddingRight: 32}}, e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": {borderRadius: (t.vars || t).shape.borderRadius},
        "&&&": {paddingRight: 32}
    }), kI = F("select", {
        name: "MuiNativeSelect", slot: "Select", shouldForwardProp: Ot, overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.select, t[n.variant], n.error && t.error, {[`&.${Qf.multiple}`]: t.multiple}]
        }
    })(My), Oy = ({ownerState: e, theme: t}) => x({
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${Qf.disabled}`]: {color: (t.vars || t).palette.action.disabled}
    }, e.open && {transform: "rotate(180deg)"}, e.variant === "filled" && {right: 7}, e.variant === "outlined" && {right: 7}),
    EI = F("svg", {
        name: "MuiNativeSelect", slot: "Icon", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen]
        }
    })(Oy), RI = h.forwardRef(function (t, n) {
        const {className: r, disabled: o, error: i, IconComponent: s, inputRef: l, variant: a = "standard"} = t,
            u = W(t, wI), c = x({}, t, {disabled: o, variant: a, error: i}), d = SI(c);
        return C.jsxs(h.Fragment, {
            children: [C.jsx(kI, x({
                ownerState: c,
                className: U(d.select, r),
                disabled: o,
                ref: l || n
            }, u)), t.multiple ? null : C.jsx(EI, {as: s, ownerState: c, className: d.icon})]
        })
    }), PI = RI;
var jh;
const $I = ["children", "classes", "className", "label", "notched"], TI = F("fieldset", {shouldForwardProp: Ot})({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
}), MI = F("legend", {shouldForwardProp: Ot})(({ownerState: e, theme: t}) => x({
    float: "unset",
    width: "auto",
    overflow: "hidden"
}, !e.withLabel && {
    padding: 0,
    lineHeight: "11px",
    transition: t.transitions.create("width", {duration: 150, easing: t.transitions.easing.easeOut})
}, e.withLabel && x({
    display: "block",
    padding: 0,
    height: 11,
    fontSize: "0.75em",
    visibility: "hidden",
    maxWidth: .01,
    transition: t.transitions.create("max-width", {duration: 50, easing: t.transitions.easing.easeOut}),
    whiteSpace: "nowrap",
    "& > span": {paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible"}
}, e.notched && {
    maxWidth: "100%",
    transition: t.transitions.create("max-width", {duration: 100, easing: t.transitions.easing.easeOut, delay: 50})
})));

function OI(e) {
    const {className: t, label: n, notched: r} = e, o = W(e, $I), i = n != null && n !== "",
        s = x({}, e, {notched: r, withLabel: i});
    return C.jsx(TI, x({"aria-hidden": !0, className: t, ownerState: s}, o, {
        children: C.jsx(MI, {
            ownerState: s,
            children: i ? C.jsx("span", {children: n}) : jh || (jh = C.jsx("span", {
                className: "notranslate",
                children: "​"
            }))
        })
    }))
}

const II = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], NI = e => {
        const {classes: t} = e, r = J({root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"]}, eO, t);
        return x({}, t, r)
    }, LI = F(gu, {
        shouldForwardProp: e => Ot(e) || e === "classes",
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: mu
    })(({theme: e, ownerState: t}) => {
        const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return x({
            position: "relative",
            borderRadius: (e.vars || e).shape.borderRadius,
            [`&:hover .${Qn.notchedOutline}`]: {borderColor: (e.vars || e).palette.text.primary},
            "@media (hover: none)": {[`&:hover .${Qn.notchedOutline}`]: {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n}},
            [`&.${Qn.focused} .${Qn.notchedOutline}`]: {borderColor: (e.vars || e).palette[t.color].main, borderWidth: 2},
            [`&.${Qn.error} .${Qn.notchedOutline}`]: {borderColor: (e.vars || e).palette.error.main},
            [`&.${Qn.disabled} .${Qn.notchedOutline}`]: {borderColor: (e.vars || e).palette.action.disabled}
        }, t.startAdornment && {paddingLeft: 14}, t.endAdornment && {paddingRight: 14}, t.multiline && x({padding: "16.5px 14px"}, t.size === "small" && {padding: "8.5px 14px"}))
    }), jI = F(OI, {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (e, t) => t.notchedOutline
    })(({theme: e}) => {
        const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
        return {borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t}
    }), _I = F(vu, {name: "MuiOutlinedInput", slot: "Input", overridesResolver: hu})(({
                                                                                          theme: e,
                                                                                          ownerState: t
                                                                                      }) => x({padding: "16.5px 14px"}, !e.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderRadius: "inherit"
        }
    }, e.vars && {
        "&:-webkit-autofill": {borderRadius: "inherit"},
        [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    }, t.size === "small" && {padding: "8.5px 14px"}, t.multiline && {padding: 0}, t.startAdornment && {paddingLeft: 0}, t.endAdornment && {paddingRight: 0})),
    Iy = h.forwardRef(function (t, n) {
        var r, o, i, s, l;
        const a = Z({props: t, name: "MuiOutlinedInput"}), {
                components: u = {},
                fullWidth: c = !1,
                inputComponent: d = "input",
                label: p,
                multiline: w = !1,
                notched: v,
                slots: y = {},
                type: S = "text"
            } = a, f = W(a, II), m = NI(a), g = qo(), b = Yo({
                props: a,
                muiFormControl: g,
                states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
            }), E = x({}, a, {
                color: b.color || "primary",
                disabled: b.disabled,
                error: b.error,
                focused: b.focused,
                formControl: g,
                fullWidth: c,
                hiddenLabel: b.hiddenLabel,
                multiline: w,
                size: b.size,
                type: S
            }), R = (r = (o = y.root) != null ? o : u.Root) != null ? r : LI,
            k = (i = (s = y.input) != null ? s : u.Input) != null ? i : _I;
        return C.jsx(Gf, x({
            slots: {root: R, input: k},
            renderSuffix: T => C.jsx(jI, {
                ownerState: E,
                className: m.notchedOutline,
                label: p != null && p !== "" && b.required ? l || (l = C.jsxs(h.Fragment, {children: [p, " ", "*"]})) : p,
                notched: typeof v < "u" ? v : !!(T.startAdornment || T.filled || T.focused)
            }),
            fullWidth: c,
            inputComponent: d,
            multiline: w,
            ref: n,
            type: S
        }, f, {classes: x({}, m, {notchedOutline: null})}))
    });
Iy.muiName = "Input";
const Ny = Iy;

function AI(e) {
    return q("MuiSelect", e)
}

const zI = ee("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]),
    vi = zI;
var _h;
const DI = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"],
    BI = F("div", {
        name: "MuiSelect", slot: "Select", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [{[`&.${vi.select}`]: t.select}, {[`&.${vi.select}`]: t[n.variant]}, {[`&.${vi.error}`]: t.error}, {[`&.${vi.multiple}`]: t.multiple}]
        }
    })(My, {
        [`&.${vi.select}`]: {
            height: "auto",
            minHeight: "1.4375em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }), FI = F("svg", {
        name: "MuiSelect", slot: "Icon", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen]
        }
    })(Oy), WI = F("input", {
        shouldForwardProp: e => rk(e) && e !== "classes",
        name: "MuiSelect",
        slot: "NativeInput",
        overridesResolver: (e, t) => t.nativeInput
    })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box"
    });

function Ah(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t)
}

function UI(e) {
    return e == null || typeof e == "string" && !e.trim()
}

const VI = e => {
        const {classes: t, variant: n, disabled: r, multiple: o, open: i, error: s} = e, l = {
            select: ["select", n, r && "disabled", o && "multiple", s && "error"],
            icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"],
            nativeInput: ["nativeInput"]
        };
        return J(l, AI, t)
    }, HI = h.forwardRef(function (t, n) {
        var r;
        const {
                "aria-describedby": o,
                "aria-label": i,
                autoFocus: s,
                autoWidth: l,
                children: a,
                className: u,
                defaultOpen: c,
                defaultValue: d,
                disabled: p,
                displayEmpty: w,
                error: v = !1,
                IconComponent: y,
                inputRef: S,
                labelId: f,
                MenuProps: m = {},
                multiple: g,
                name: b,
                onBlur: E,
                onChange: R,
                onClose: k,
                onFocus: T,
                onOpen: M,
                open: P,
                readOnly: O,
                renderValue: j,
                SelectDisplayProps: N = {},
                tabIndex: A,
                value: _,
                variant: L = "standard"
            } = t, D = W(t, DI), [$, I] = Ul({controlled: _, default: d, name: "Select"}), [B, X] = Ul({
                controlled: P,
                default: c,
                name: "Select"
            }), Y = h.useRef(null),
            le = h.useRef(null), [G, oe] = h.useState(null), {current: te} = h.useRef(P != null), [Ce, pe] = h.useState(),
            ue = Le(n, S), Be = h.useCallback(K => {
                le.current = K, K && oe(K)
            }, []), ne = G == null ? void 0 : G.parentNode;
        h.useImperativeHandle(ue, () => ({
            focus: () => {
                le.current.focus()
            }, node: Y.current, value: $
        }), [$]), h.useEffect(() => {
            c && B && G && !te && (pe(l ? null : ne.clientWidth), le.current.focus())
        }, [G, l]), h.useEffect(() => {
            s && le.current.focus()
        }, [s]), h.useEffect(() => {
            if (!f) return;
            const K = qe(le.current).getElementById(f);
            if (K) {
                const we = () => {
                    getSelection().isCollapsed && le.current.focus()
                };
                return K.addEventListener("click", we), () => {
                    K.removeEventListener("click", we)
                }
            }
        }, [f]);
        const ke = (K, we) => {
            K ? M && M(we) : k && k(we), te || (pe(l ? null : ne.clientWidth), X(K))
        }, re = K => {
            K.button === 0 && (K.preventDefault(), le.current.focus(), ke(!0, K))
        }, ce = K => {
            ke(!1, K)
        }, ae = h.Children.toArray(a), gt = K => {
            const we = ae.find(je => je.props.value === K.target.value);
            we !== void 0 && (I(we.props.value), R && R(K, we))
        }, rt = K => we => {
            let je;
            if (we.currentTarget.hasAttribute("tabindex")) {
                if (g) {
                    je = Array.isArray($) ? $.slice() : [];
                    const hn = $.indexOf(K.props.value);
                    hn === -1 ? je.push(K.props.value) : je.splice(hn, 1)
                } else je = K.props.value;
                if (K.props.onClick && K.props.onClick(we), $ !== je && (I(je), R)) {
                    const hn = we.nativeEvent || we, Zo = new hn.constructor(hn.type, hn);
                    Object.defineProperty(Zo, "target", {writable: !0, value: {value: je, name: b}}), R(Zo, K)
                }
                g || ke(!1, we)
            }
        }, Ue = K => {
            O || [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(K.key) !== -1 && (K.preventDefault(), ke(!0, K))
        }, ut = G !== null && B, $e = K => {
            !ut && E && (Object.defineProperty(K, "target", {writable: !0, value: {value: $, name: b}}), E(K))
        };
        delete D["aria-invalid"];
        let ve, ot;
        const Fe = [];
        let de = !1;
        (oa({value: $}) || w) && (j ? ve = j($) : de = !0);
        const Ze = ae.map(K => {
            if (!h.isValidElement(K)) return null;
            let we;
            if (g) {
                if (!Array.isArray($)) throw new Error(gr(2));
                we = $.some(je => Ah(je, K.props.value)), we && de && Fe.push(K.props.children)
            } else we = Ah($, K.props.value), we && de && (ot = K.props.children);
            return h.cloneElement(K, {
                "aria-selected": we ? "true" : "false", onClick: rt(K), onKeyUp: je => {
                    je.key === " " && je.preventDefault(), K.props.onKeyUp && K.props.onKeyUp(je)
                }, role: "option", selected: we, value: void 0, "data-value": K.props.value
            })
        });
        de && (g ? Fe.length === 0 ? ve = null : ve = Fe.reduce((K, we, je) => (K.push(we), je < Fe.length - 1 && K.push(", "), K), []) : ve = ot);
        let Ge = Ce;
        !l && te && G && (Ge = ne.clientWidth);
        let vt;
        typeof A < "u" ? vt = A : vt = p ? null : 0;
        const me = N.id || (b ? `mui-component-select-${b}` : void 0),
            Q = x({}, t, {variant: L, value: $, open: ut, error: v}), Xe = VI(Q),
            On = x({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper), nn = ys();
        return C.jsxs(h.Fragment, {
            children: [C.jsx(BI, x({
                ref: Be,
                tabIndex: vt,
                role: "combobox",
                "aria-controls": nn,
                "aria-disabled": p ? "true" : void 0,
                "aria-expanded": ut ? "true" : "false",
                "aria-haspopup": "listbox",
                "aria-label": i,
                "aria-labelledby": [f, me].filter(Boolean).join(" ") || void 0,
                "aria-describedby": o,
                onKeyDown: Ue,
                onMouseDown: p || O ? null : re,
                onBlur: $e,
                onFocus: T
            }, N, {
                ownerState: Q,
                className: U(N.className, Xe.select, u),
                id: me,
                children: UI(ve) ? _h || (_h = C.jsx("span", {className: "notranslate", children: "​"})) : ve
            })), C.jsx(WI, x({
                "aria-invalid": v,
                value: Array.isArray($) ? $.join(",") : $,
                name: b,
                ref: Y,
                "aria-hidden": !0,
                onChange: gt,
                tabIndex: -1,
                disabled: p,
                className: Xe.nativeInput,
                autoFocus: s,
                ownerState: Q
            }, D)), C.jsx(FI, {as: y, className: Xe.icon, ownerState: Q}), C.jsx(xI, x({
                id: `menu-${b || ""}`,
                anchorEl: ne,
                open: ut,
                onClose: ce,
                anchorOrigin: {vertical: "bottom", horizontal: "center"},
                transformOrigin: {vertical: "top", horizontal: "center"}
            }, m, {
                MenuListProps: x({
                    "aria-labelledby": f,
                    role: "listbox",
                    "aria-multiselectable": g ? "true" : void 0,
                    disableListWrap: !0,
                    id: nn
                }, m.MenuListProps),
                slotProps: x({}, m.slotProps, {paper: x({}, On, {style: x({minWidth: Ge}, On != null ? On.style : null)})}),
                children: Ze
            }))]
        })
    }), KI = HI,
    GI = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
    XI = ["root"], QI = e => {
        const {classes: t} = e;
        return t
    }, Yf = {
        name: "MuiSelect",
        overridesResolver: (e, t) => t.root,
        shouldForwardProp: e => Ot(e) && e !== "variant",
        slot: "Root"
    }, YI = F(Py, Yf)(""), qI = F(Ny, Yf)(""), ZI = F(Ey, Yf)(""), Ly = h.forwardRef(function (t, n) {
        const r = Z({name: "MuiSelect", props: t}), {
                autoWidth: o = !1,
                children: i,
                classes: s = {},
                className: l,
                defaultOpen: a = !1,
                displayEmpty: u = !1,
                IconComponent: c = oO,
                id: d,
                input: p,
                inputProps: w,
                label: v,
                labelId: y,
                MenuProps: S,
                multiple: f = !1,
                native: m = !1,
                onClose: g,
                onOpen: b,
                open: E,
                renderValue: R,
                SelectDisplayProps: k,
                variant: T = "outlined"
            } = r, M = W(r, GI), P = m ? PI : KI, O = qo(), j = Yo({props: r, muiFormControl: O, states: ["variant", "error"]}),
            N = j.variant || T, A = x({}, r, {variant: N, classes: s}), _ = QI(A), L = W(_, XI), D = p || {
                standard: C.jsx(YI, {ownerState: A}),
                outlined: C.jsx(qI, {label: v, ownerState: A}),
                filled: C.jsx(ZI, {ownerState: A})
            }[N], $ = Le(n, D.ref);
        return C.jsx(h.Fragment, {
            children: h.cloneElement(D, x({
                inputComponent: P,
                inputProps: x({
                    children: i,
                    error: j.error,
                    IconComponent: c,
                    variant: N,
                    type: void 0,
                    multiple: f
                }, m ? {id: d} : {
                    autoWidth: o,
                    defaultOpen: a,
                    displayEmpty: u,
                    labelId: y,
                    MenuProps: S,
                    onClose: g,
                    onOpen: b,
                    open: E,
                    renderValue: R,
                    SelectDisplayProps: x({id: d}, k)
                }, w, {classes: w ? mt(L, w.classes) : L}, p ? p.props.inputProps : {})
            }, f && m && N === "outlined" ? {notched: !0} : {}, {
                ref: $,
                className: U(D.props.className, l, _.root)
            }, !p && {variant: N}, M))
        })
    });
Ly.muiName = "Select";
const JI = Ly;

function e5(e) {
    return q("MuiSnackbarContent", e)
}

ee("MuiSnackbarContent", ["root", "message", "action"]);
const t5 = ["action", "className", "message", "role"], n5 = e => {
        const {classes: t} = e;
        return J({root: ["root"], action: ["action"], message: ["message"]}, e5, t)
    }, r5 = F(mn, {name: "MuiSnackbarContent", slot: "Root", overridesResolver: (e, t) => t.root})(({theme: e}) => {
        const t = e.palette.mode === "light" ? .8 : .98, n = tS(e.palette.background.default, t);
        return x({}, e.typography.body2, {
            color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
            backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "6px 16px",
            borderRadius: (e.vars || e).shape.borderRadius,
            flexGrow: 1,
            [e.breakpoints.up("sm")]: {flexGrow: "initial", minWidth: 288}
        })
    }), o5 = F("div", {
        name: "MuiSnackbarContent",
        slot: "Message",
        overridesResolver: (e, t) => t.message
    })({padding: "8px 0"}),
    i5 = F("div", {name: "MuiSnackbarContent", slot: "Action", overridesResolver: (e, t) => t.action})({
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        paddingLeft: 16,
        marginRight: -8
    }), s5 = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiSnackbarContent"}), {action: o, className: i, message: s, role: l = "alert"} = r,
            a = W(r, t5), u = r, c = n5(u);
        return C.jsxs(r5, x({
            role: l,
            square: !0,
            elevation: 6,
            className: U(c.root, i),
            ownerState: u,
            ref: n
        }, a, {
            children: [C.jsx(o5, {className: c.message, ownerState: u, children: s}), o ? C.jsx(i5, {
                className: c.action,
                ownerState: u,
                children: o
            }) : null]
        }))
    }), l5 = s5;

function a5(e) {
    return q("MuiSnackbar", e)
}

ee("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const u5 = ["onEnter", "onExited"],
    c5 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"],
    d5 = e => {
        const {classes: t, anchorOrigin: n} = e, r = {root: ["root", `anchorOrigin${V(n.vertical)}${V(n.horizontal)}`]};
        return J(r, a5, t)
    }, zh = F("div", {
        name: "MuiSnackbar", slot: "Root", overridesResolver: (e, t) => {
            const {ownerState: n} = e;
            return [t.root, t[`anchorOrigin${V(n.anchorOrigin.vertical)}${V(n.anchorOrigin.horizontal)}`]]
        }
    })(({theme: e, ownerState: t}) => {
        const n = {left: "50%", right: "auto", transform: "translateX(-50%)"};
        return x({
            zIndex: (e.vars || e).zIndex.snackbar,
            position: "fixed",
            display: "flex",
            left: 8,
            right: 8,
            justifyContent: "center",
            alignItems: "center"
        }, t.anchorOrigin.vertical === "top" ? {top: 8} : {bottom: 8}, t.anchorOrigin.horizontal === "left" && {justifyContent: "flex-start"}, t.anchorOrigin.horizontal === "right" && {justifyContent: "flex-end"}, {
            [e.breakpoints.up("sm")]: x({}, t.anchorOrigin.vertical === "top" ? {top: 24} : {bottom: 24}, t.anchorOrigin.horizontal === "center" && n, t.anchorOrigin.horizontal === "left" && {
                left: 24,
                right: "auto"
            }, t.anchorOrigin.horizontal === "right" && {right: 24, left: "auto"})
        })
    }), f5 = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiSnackbar"}), o = Mn(),
            i = {enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen}, {
                action: s,
                anchorOrigin: {vertical: l, horizontal: a} = {vertical: "bottom", horizontal: "left"},
                autoHideDuration: u = null,
                children: c,
                className: d,
                ClickAwayListenerProps: p,
                ContentProps: w,
                disableWindowBlurListener: v = !1,
                message: y,
                open: S,
                TransitionComponent: f = ra,
                transitionDuration: m = i,
                TransitionProps: {onEnter: g, onExited: b} = {}
            } = r, E = W(r.TransitionProps, u5), R = W(r, c5), k = x({}, r, {
                anchorOrigin: {vertical: l, horizontal: a},
                autoHideDuration: u,
                disableWindowBlurListener: v,
                TransitionComponent: f,
                transitionDuration: m
            }), T = d5(k), {getRootProps: M, onClickAway: P} = l2(x({}, k)), [O, j] = h.useState(!0), N = vr({
                elementType: zh,
                getSlotProps: M,
                externalForwardedProps: R,
                ownerState: k,
                additionalProps: {ref: n},
                className: [T.root, d]
            }), A = L => {
                j(!0), b && b(L)
            }, _ = (L, D) => {
                j(!1), g && g(L, D)
            };
        return !S && O ? null : C.jsx(Ak, x({onClickAway: P}, p, {
            children: C.jsx(zh, x({}, N, {
                children: C.jsx(f, x({
                    appear: !0,
                    in: S,
                    timeout: m,
                    direction: l === "top" ? "down" : "up",
                    onEnter: _,
                    onExited: A
                }, E, {children: c || C.jsx(l5, x({message: y, action: s}, w))}))
            }))
        }))
    }), qf = f5;

function p5(e) {
    return q("MuiTextField", e)
}

ee("MuiTextField", ["root"]);
const m5 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"],
    h5 = {standard: Py, filled: Ey, outlined: Ny}, g5 = e => {
        const {classes: t} = e;
        return J({root: ["root"]}, p5, t)
    }, v5 = F(EO, {name: "MuiTextField", slot: "Root", overridesResolver: (e, t) => t.root})({}),
    y5 = h.forwardRef(function (t, n) {
        const r = Z({props: t, name: "MuiTextField"}), {
            autoComplete: o,
            autoFocus: i = !1,
            children: s,
            className: l,
            color: a = "primary",
            defaultValue: u,
            disabled: c = !1,
            error: d = !1,
            FormHelperTextProps: p,
            fullWidth: w = !1,
            helperText: v,
            id: y,
            InputLabelProps: S,
            inputProps: f,
            InputProps: m,
            inputRef: g,
            label: b,
            maxRows: E,
            minRows: R,
            multiline: k = !1,
            name: T,
            onBlur: M,
            onChange: P,
            onFocus: O,
            placeholder: j,
            required: N = !1,
            rows: A,
            select: _ = !1,
            SelectProps: L,
            type: D,
            value: $,
            variant: I = "outlined"
        } = r, B = W(r, m5), X = x({}, r, {
            autoFocus: i,
            color: a,
            disabled: c,
            error: d,
            fullWidth: w,
            multiline: k,
            required: N,
            select: _,
            variant: I
        }), Y = g5(X), le = {};
        I === "outlined" && (S && typeof S.shrink < "u" && (le.notched = S.shrink), le.label = b), _ && ((!L || !L.native) && (le.id = void 0), le["aria-describedby"] = void 0);
        const G = ys(y), oe = v && G ? `${G}-helper-text` : void 0, te = b && G ? `${G}-label` : void 0, Ce = h5[I],
            pe = C.jsx(Ce, x({
                "aria-describedby": oe,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                fullWidth: w,
                multiline: k,
                name: T,
                rows: A,
                maxRows: E,
                minRows: R,
                type: D,
                value: $,
                id: G,
                inputRef: g,
                onBlur: M,
                onChange: P,
                onFocus: O,
                placeholder: j,
                inputProps: f
            }, le, m));
        return C.jsxs(v5, x({
            className: U(Y.root, l),
            disabled: c,
            error: d,
            fullWidth: w,
            ref: n,
            required: N,
            color: a,
            variant: I,
            ownerState: X
        }, B, {
            children: [b != null && b !== "" && C.jsx(qO, x({
                htmlFor: G,
                id: te
            }, S, {children: b})), _ ? C.jsx(JI, x({
                "aria-describedby": oe,
                id: G,
                labelId: te,
                value: $,
                input: pe
            }, L, {children: s})) : pe, v && C.jsx(NO, x({id: oe}, p, {children: v}))]
        }))
    }), ic = y5, x5 = ({title: e, description: t, open: n, setOpen: r}) => {
        const o = Mn(), i = _0(o.breakpoints.down("sm")), s = () => {
            r(!1)
        };
        return C.jsx(C.Fragment, {
            children: C.jsxs(MM, {
                fullScreen: i,
                open: n,
                onClose: s,
                "aria-labelledby": "responsive-dialog-title",
                children: [C.jsx(HT, {
                    id: "responsive-dialog-title",
                    children: C.jsx(et, {
                        variant: "h5",
                        mb: 2,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            fontSize: "2rem"
                        },
                        children: "Operaciones Con Matrices"
                    })
                }), C.jsx(D0, {}), C.jsxs(qT, {children: [C.jsx(Js, {children: C.jsx("strong", {children: "Suma y Resta de matrices"})}), C.jsx(Js, {children: "La unión de dos o más matrices solo puede hacerse si dichas matrices tienen la misma dimensión. Cada elemento de las matrices puede sumarse con los elementos que coincidan en posición en diferentes matrices."}), C.jsx("br", {}), C.jsx(Js, {children: C.jsx("strong", {children: "Multiplicación de matrices"})}), C.jsx(Js, {children: "Generalmente, la multiplicación de matrices cumple la propiedad no conmutativa, es decir, importa el orden de los elementos durante la multiplicación."})]}), C.jsx(aM, {
                    children: C.jsx(cn, {
                        autoFocus: !0,
                        variant: "contained",
                        onClick: s,
                        fullWidth: !0,
                        size: "large",
                        children: "Cerrar"
                    })
                })]
            })
        })
    };

function b5(e) {
    const {title: t, handleDrawerToggle: n, showHelp: r} = e, [o, i] = h.useState(!1), s = () => {
        i(!0)
    };
    return C.jsxs(C.Fragment, {
        children: [C.jsx(x5, {
            title: "",
            description: "",
            open: o,
            setOpen: i,
            onClick: s
        }), C.jsx(nr, {
            position: "static",
            width: "100%",
            children: C.jsx(L$, {
                component: "nav",
                color: "primary",
                position: "static",
                elevation: 10,
                sx: {zIndex: 1},
                children: C.jsx(gT, {
                    sx: {height: "70px"},
                    children: C.jsxs(Ys, {
                        container: !0,
                        alignItems: "center",
                        spacing: 1,
                        children: [C.jsx(Ys, {
                            item: !0,
                            sx: {display: {xs: "block", sm: "none"}},
                            children: C.jsx(hd, {
                                color: "inherit",
                                "aria-label": "open drawer",
                                onClick: n,
                                edge: "start",
                                children: C.jsx(xy, {})
                            })
                        }), C.jsx(Ys, {
                            item: !0,
                            sx: {flexGrow: 1},
                            children: C.jsx(et, {
                                color: "inherit",
                                sx: {
                                    fontSize: "1.2rem",
                                    userSelect: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "2px"
                                },
                                children: t
                            })
                        }), r && C.jsx(Ys, {
                            item: !0,
                            children: C.jsx(OT, {
                                title: "Ayuda",
                                children: C.jsx(hd, {color: "inherit", onClick: s, children: C.jsx(LT, {})})
                            })
                        })]
                    })
                })
            })
        })]
    })
}

let yn = Of({
    palette: {
        primary: {light: "#63ccff", main: "#009be5", dark: "#006db3"},
        mode: "light",
        background: {default: "#c7c7c7"}
    },
    typography: {h5: {fontWeight: 500, fontSize: 26, letterSpacing: .5}},
    shape: {borderRadius: 8},
    components: {MuiTab: {defaultProps: {disableRipple: !0}}},
    mixins: {toolbar: {minHeight: 48}}
});
yn = {
    ...yn, components: {
        MuiDrawer: {styleOverrides: {paper: {backgroundColor: "#081627"}}},
        MuiButton: {
            styleOverrides: {
                root: {textTransform: "none"},
                contained: {boxShadow: "none", "&:active": {boxShadow: "none"}}
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {marginLeft: yn.spacing(1)},
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: yn.palette.common.white
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: "0 16px",
                    minWidth: 0,
                    padding: 0,
                    [yn.breakpoints.up("md")]: {padding: 0, minWidth: 0}
                }
            }
        },
        MuiIconButton: {styleOverrides: {root: {padding: yn.spacing(1)}}},
        MuiTooltip: {styleOverrides: {tooltip: {borderRadius: 4}}},
        MuiDivider: {styleOverrides: {root: {backgroundColor: "rgb(255,255,255,0.15)"}}},
        MuiListItemButton: {styleOverrides: {root: {"&.Mui-selected": {color: "#4fc3f7"}}}},
        MuiListItemText: {styleOverrides: {primary: {fontSize: 14, fontWeight: yn.typography.fontWeightMedium}}},
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: yn.spacing(2),
                    "& svg": {fontSize: 20}
                }
            }
        },
        MuiAvatar: {styleOverrides: {root: {width: 32, height: 32}}}
    }
};
const Vo = ({ctl: e}) => {
    const t = () => C.jsx(C.Fragment, {
        children: e.matrix.map((n, r) => C.jsx("div", {
            className: "a",
            children: n.map((o, i) => C.jsx("div", {
                className: "b",
                children: C.jsx(ic, {
                    size: "small", variant: "outlined", value: o, onChange: s => {
                        if (s.target.value !== "") return console.log(`value[${r}][${i}]: ${s.target.value}`), e.changeMatrix(r, i, s)
                    }, sx: {width: "60px"}
                })
            }, i))
        }, r))
    });
    return C.jsxs("div", {
        className: "container",
        children: [C.jsxs("div", {
            className: "item button-top",
            children: [C.jsx(cn, {
                variant: "outlined",
                onClick: () => e.clickRemoveColumn(),
                children: "-"
            }), C.jsx(ic, {
                error: e.inputColumnsError,
                type: "number",
                id: "outlined-basic",
                size: "small",
                label: "columnas",
                variant: "outlined",
                value: e.inputColumnsValue,
                sx: {minWidth: "90px"},
                onChange: n => e.changeColumns(n)
            }), C.jsx(cn, {variant: "outlined", onClick: () => e.clickAddColumn(), children: "+"})]
        }), C.jsx("div", {
            className: "item dimension",
            children: C.jsxs("p", {children: [e.rows, " x ", e.columns]})
        }), C.jsx("div", {
            className: "item container-matrix",
            children: t()
        }), C.jsxs("div", {
            className: "item button-right",
            children: [C.jsx(cn, {
                variant: "outlined",
                onClick: () => e.clickRemoveRow(),
                children: "-"
            }), C.jsx(ic, {
                error: e.inputRowsError,
                type: "number",
                id: "outlined-basic",
                size: "small",
                label: "filas",
                variant: "outlined",
                value: e.inputRowsValue,
                onChange: n => e.changeRows(n)
            }), C.jsx(cn, {variant: "outlined", onClick: () => e.clickAddRow(), children: "+"})]
        })]
    })
};
const Zf = ({ctl: e}) => C.jsx(C.Fragment, {
    children: e.matrix.map((t, n) => C.jsx("div", {
        className: "container-result",
        children: t.map((r, o) => C.jsx("div", {
            className: "item-result",
            children: C.jsx("span", {
                style: {
                    display: "inline-block",
                    width: "60px",
                    border: "1px solid #ccc",
                    padding: "8px",
                    textAlign: "center",
                    borderRadius: "0px"
                }, children: r
            })
        }, o))
    }, n))
});

class Ho {
    constructor() {
        In(this, "rowsState");
        In(this, "columnsState");
        In(this, "matrixState");
        In(this, "inputRowsErrorState");
        In(this, "inputColumnsErrorState");
        In(this, "inputRowsValueState");
        In(this, "inputColumnsValueState");
        this.rowsState = h.useState(3), this.columnsState = h.useState(3), this.matrixState = h.useState(this.initializeMatrix(3, 3)), this.inputRowsErrorState = h.useState(!1), this.inputColumnsErrorState = h.useState(!1), this.inputRowsValueState = h.useState(""), this.inputColumnsValueState = h.useState("")
    }

    initializeMatrix(t, n) {
        return Array.from({length: t}, () => Array(n).fill(0))
    }

    clickAddRow() {
        this.setRow(t => t + 1), this.setMatrix(t => [...t, Array(this.columnsState[0]).fill(0)]), this.setInputValueRows("")
    }

    clickRemoveRow() {
        this.rows > 1 && (this.setRow(t => Math.max(t - 1, 1)), this.setMatrix(t => t.slice(0, -1))), this.setInputValueRows("")
    }

    clickAddColumn() {
        this.setColumn(t => t + 1), this.setMatrix(t => t.map(n => [...n, 0])), this.setInputValueColumns("")
    }

    clickRemoveColumn() {
        this.columns > 1 && (this.setColumn(t => Math.max(t - 1, 1)), this.setMatrix(t => t.map(n => n.slice(0, -1)))), this.setInputValueColumns("")
    }

    changeRows(t) {
        if (t.target.value === "" && this.inputRowsErrorState[1](!1), t.target.value === "-" || t.target.value === ".") {
            this.inputRowsErrorState[1](!0);
            return
        }
        const n = parseInt(t.target.value) || 0;
        n > 1 ? (this.rowsState[1](n), this.matrixState[1](r => this.initializeMatrix(n, r[0].length)), this.inputRowsErrorState[1](!1)) : this.inputRowsErrorState[1](!0)
    }

    changeColumns(t) {
        if (t.target.value === "" && this.setInputErrorColumns(!1), t.target.value === "-" || t.target.value === ".") {
            this.setInputErrorColumns(!0);
            return
        }
        const n = parseInt(t.target.value) || 0;
        n > 1 ? (this.setColumn(n), this.setMatrix(r => this.initializeMatrix(r.length, n)), this.setInputErrorColumns(!1)) : this.setInputErrorColumns(!0)
    }

    changeMatrix(t, n, r) {
        const o = parseInt(r.target.value) || 0,
            i = this.matrix.map((s, l) => l === t ? s.map((a, u) => u === n ? o : a) : s);
        this.setMatrix(i)
    }

    setRow(t) {
        this.rowsState[1](t)
    }

    setColumn(t) {
        this.columnsState[1](t)
    }

    setMatrix(t) {
        this.matrixState[1](t)
    }

    setInputErrorColumns(t) {
        this.inputColumnsErrorState[1](t)
    }

    setInputValueRows(t) {
        this.inputRowsValueState[1](t)
    }

    setInputValueColumns(t) {
        this.inputColumnsValueState[1](t)
    }

    get rows() {
        return this.rowsState[0]
    }

    get columns() {
        return this.columnsState[0]
    }

    get matrix() {
        return this.matrixState[0]
    }

    get inputRowsError() {
        return this.inputRowsErrorState[0]
    }

    get inputColumnsError() {
        return this.inputColumnsErrorState[0]
    }

    get inputRowsValue() {
        return this.inputRowsValueState[0]
    }

    get inputColumnsValue() {
        return this.inputColumnsValueState[0]
    }
}

class Jf {
    constructor() {
        In(this, "matrixState");
        this.matrixState = h.useState([])
    }

    setMatrix(t) {
        this.matrixState[1](t)
    }

    get matrix() {
        return this.matrixState[0]
    }
}

class Bn {
    static generateRandomMatrix(t, n) {
        const r = [];
        for (let o = 0; o < t; o++) {
            r[o] = [];
            for (let i = 0; i < n; i++) r[o][i] = Math.floor(Math.random() * 10) + 1
        }
        return r
    }

    static add(t, n) {
        if (!this.isValidMatrix(t) || !this.isValidMatrix(n)) throw new Error("Invalid matrices");
        const r = [];
        for (let o = 0; o < t.length; o++) {
            const i = [];
            for (let s = 0; s < t[o].length; s++) i.push(t[o][s] + n[o][s]);
            r.push(i)
        }
        return r
    }

    static sub(t, n) {
        if (!this.isValidMatrix(t) || !this.isValidMatrix(n)) throw new Error("Invalid matrices");
        const r = [];
        for (let o = 0; o < t.length; o++) {
            const i = [];
            for (let s = 0; s < t[o].length; s++) i.push(t[o][s] - n[o][s]);
            r.push(i)
        }
        return r
    }

    static mul(t, n) {
        if (!this.isValidMatrix(t) || !this.isValidMatrix(n)) throw new Error("Invalid matrices");
        const r = [];
        for (let o = 0; o < t.length; o++) {
            const i = [];
            for (let s = 0; s < n[0].length; s++) {
                let l = 0;
                for (let a = 0; a < t[0].length; a++) l += t[o][a] * n[a][s];
                i.push(l)
            }
            r.push(i)
        }
        return r
    }

    static isValidMatrix(t) {
        if (!t || t.length === 0 || t[0].length === 0) return !1;
        const n = t[0].length;
        for (let r = 1; r < t.length; r++) if (t[r].length !== n) return !1;
        return !0
    }
}

const C5 = h.forwardRef(function (t, n) {
        return C.jsx(Hf, {elevation: 6, ref: n, variant: "filled", ...t})
    }), Dh = () => {
        const [e, t] = h.useState(!1), n = () => {
            t(!0)
        }, r = (u, c) => {
            c !== "clickaway" && t(!1)
        }, o = new Ho, i = new Ho, s = new Jf, l = () => {
            const u = Bn.generateRandomMatrix(o.rows, o.columns), c = Bn.generateRandomMatrix(i.rows, i.columns);
            o.setMatrix(u), i.setMatrix(c), console.log(u), console.log(c)
        }, a = () => {
            if (o.rows !== i.rows || o.columns !== i.columns) {
                console.log("No se pueden sumar matrices de diferentes dimensiones!"), n();
                return
            }
            const u = Bn.add(o.matrix, i.matrix);
            s.setMatrix(u)
        };
        return C.jsx(C.Fragment, {
            children: C.jsx(yu, {
                children: C.jsx(mn, {
                    elevation: 3,
                    style: {padding: "20px", margin: "20px", flex: 1},
                    children: C.jsxs(Xf, {
                        spacing: 2,
                        sx: {width: "100%"},
                        children: [C.jsx(Vo, {ctl: o}), C.jsx(et, {
                            component: "h1",
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%",
                                fontSize: "2rem"
                            },
                            children: C.jsx("strong", {children: "+"})
                        }), C.jsx(Vo, {ctl: i}), C.jsx(cn, {
                            variant: "outlined", onClick: () => {
                                l()
                            }, children: "Rellenar aleatoriamente"
                        }), C.jsx(cn, {
                            variant: "contained",
                            onClick: a,
                            children: "Calcular"
                        }), C.jsx(Zf, {ctl: s}), C.jsx(qf, {
                            open: e,
                            autoHideDuration: 6e3,
                            onClose: r,
                            children: C.jsx(C5, {
                                onClose: r,
                                severity: "error",
                                sx: {width: "100%"},
                                children: "No se pueden sumar matrices de diferentes dimensiones!"
                            })
                        })]
                    })
                })
            })
        })
    }, w5 = h.forwardRef(function (t, n) {
        return C.jsx(Hf, {elevation: 6, ref: n, variant: "filled", ...t})
    }), S5 = () => {
        const [e, t] = h.useState(!1), n = () => {
            t(!0)
        }, r = (u, c) => {
            c !== "clickaway" && t(!1)
        }, o = new Ho, i = new Ho, s = new Jf, l = () => {
            const u = Bn.generateRandomMatrix(o.rows, o.columns), c = Bn.generateRandomMatrix(i.rows, i.columns);
            o.setMatrix(u), i.setMatrix(c)
        }, a = () => {
            if (o.rows !== i.rows || o.columns !== i.columns) {
                n();
                return
            }
            const u = Bn.sub(o.matrix, i.matrix);
            s.setMatrix(u)
        };
        return C.jsx(C.Fragment, {
            children: C.jsx(yu, {
                children: C.jsx(mn, {
                    elevation: 3,
                    style: {padding: "20px", margin: "20px", flex: 1},
                    children: C.jsxs(Xf, {
                        spacing: 2,
                        sx: {width: "100%"},
                        children: [C.jsx(Vo, {ctl: o}), C.jsx(et, {
                            component: "h1",
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%",
                                fontSize: "2rem"
                            },
                            children: C.jsx("strong", {children: "-"})
                        }), C.jsx(Vo, {ctl: i}), C.jsx(cn, {
                            variant: "outlined", onClick: () => {
                                l()
                            }, children: "Rellenar aleatoriamente"
                        }), C.jsx(cn, {
                            variant: "contained", onClick: () => {
                                a()
                            }, children: "Calcular"
                        }), C.jsx(Zf, {ctl: s}), C.jsx(qf, {
                            open: e,
                            autoHideDuration: 6e3,
                            onClose: r,
                            children: C.jsx(w5, {
                                onClose: r,
                                severity: "error",
                                sx: {width: "100%"},
                                children: "No se pueden restar matrices de diferentes dimensiones!"
                            })
                        })]
                    })
                })
            })
        })
    }, k5 = h.forwardRef(function (t, n) {
        return C.jsx(Hf, {elevation: 6, ref: n, variant: "filled", ...t})
    }), E5 = () => {
        const [e, t] = h.useState(!1), n = () => {
            t(!0)
        }, r = (u, c) => {
            c !== "clickaway" && t(!1)
        }, o = new Ho, i = new Ho, s = new Jf, l = () => {
            const u = Bn.generateRandomMatrix(o.rows, o.columns), c = Bn.generateRandomMatrix(i.rows, i.columns);
            o.setMatrix(u), i.setMatrix(c)
        }, a = () => {
            if (o.columns === i.rows) {
                const u = Bn.mul(o.matrix, i.matrix);
                s.setMatrix(u);
                return
            }
            n()
        };
        return C.jsx(C.Fragment, {
            children: C.jsx(yu, {
                children: C.jsx(mn, {
                    elevation: 3,
                    style: {padding: "20px", margin: "20px", flex: 1},
                    children: C.jsxs(Xf, {
                        spacing: 2,
                        sx: {width: "100%"},
                        children: [C.jsx(Vo, {ctl: o}), C.jsx(et, {
                            component: "h1",
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%",
                                fontSize: "2rem"
                            },
                            children: C.jsx("strong", {children: "x"})
                        }), C.jsx(Vo, {ctl: i}), C.jsx(cn, {
                            variant: "outlined", onClick: () => {
                                l()
                            }, children: "Rellenar aleatoriamente"
                        }), C.jsx(cn, {
                            variant: "contained", onClick: () => {
                                a()
                            }, children: "Calcular"
                        }), C.jsx(Zf, {ctl: s}), C.jsx(qf, {
                            open: e,
                            autoHideDuration: 6e3,
                            onClose: r,
                            children: C.jsx(k5, {
                                onClose: r,
                                severity: "error",
                                sx: {width: "100%"},
                                children: "Para hacer el producto de dos matrices, el número de columnas de la primera debe ser igual al número de filas de la segunda."
                            })
                        })]
                    })
                })
            })
        })
    }, R5 = "assets/profile-0615eff7.jpg", P5 = () => C.jsx(yu, {
        maxWidth: "md", children: C.jsx(mn, {
            elevation: 3, style: {padding: "20px", margin: "20px 0"}, children: C.jsxs(nr, {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                children: [C.jsx(mO, {
                    alt: "Tu Nombre",
                    src: R5,
                    sx: {width: 100, height: 100, mb: 2}
                }), C.jsx(et, {
                    variant: "h4",
                    mb: 2,
                    children: "Acerca de la Aplicación"
                }), C.jsxs(nr, {
                    children: [C.jsx(et, {
                        variant: "body1",
                        mb: 2,
                        children: "Bienvenido a la aplicación de resolución de operaciones con matrices. Esta aplicación fue creada con el objetivo de proporcionar una herramienta educativa y práctica para estudiantes y profesionales que trabajan con matemáticas lineales."
                    }), C.jsx(et, {
                        variant: "body1",
                        mb: 2,
                        children: "Desarrollador: Edgar Alejo Ramirez"
                    }), C.jsxs(et, {
                        variant: "body1",
                        mb: 2,
                        children: ["Esta aplicación utiliza tecnologías modernas de desarrollo web para ofrecer una experiencia de usuario fluida. Si tienes sugerencias, preguntas o comentarios, no dudes en ponerte en ", C.jsx(iy, {
                            target: "_blank",
                            color: "inherit",
                            href: "https://github.com/ealejor/",
                            sx: {color: "#0059ff"},
                            children: "contacto"
                        }), " conmigo."]
                    }), C.jsx(et, {
                        variant: "body1",
                        children: "¡Gracias por utilizar la aplicación y disfruta resolviendo operaciones con matrices!"
                    })]
                })]
            })
        })
    }), $5 = () => C.jsx(C.Fragment, {
        children: C.jsxs(p$, {
            children: [C.jsx(io, {
                path: "/",
                element: C.jsx(Dh, {})
            }), C.jsx(io, {path: "/difference", element: C.jsx(S5, {})}), C.jsx(io, {
                path: "/product",
                element: C.jsx(E5, {})
            }), C.jsx(io, {path: "/about", element: C.jsx(P5, {})}), C.jsx(io, {path: "*", element: C.jsx(Dh, {})})]
        })
    }), T5 = [{name: "Suma de matrices", icon: C.jsx(IT, {}), active: !1, route: "/"}, {
        name: "Diferencia de matrices",
        icon: C.jsx(_T, {}),
        active: !1,
        route: "/difference"
    }, {name: "Producto de matrices", icon: C.jsx(NT, {}), active: !1, route: "/product"}],
    M5 = [{name: "Acerca de", icon: C.jsx(jT, {}), active: !1, route: "/about"}],
    Bh = [{description: "Operaciones", menus: T5}, {description: "Más", menus: M5}], sc = 256, O5 = () => {
        const e = _0(yn.breakpoints.up("sm")), [t, n] = h.useState(!1), [r, o] = h.useState("Suma de matrices"), [i, s] = h.useState(!0),
            l = () => {
                n(!t)
            }, a = u => {
                o(u), s(u !== "Acerca de")
            };
        return C.jsx(sk, {
            theme: yn,
            children: C.jsxs(nr, {
                sx: {display: "flex", flexDirection: "row", minHeight: "100vh"},
                children: [C.jsx(pk, {}), C.jsxs(nr, {
                    component: "nav",
                    sx: {width: {sm: sc}, flexShrink: {sm: 0}},
                    children: [e ? null : C.jsx(wh, {
                        PaperProps: {style: {width: sc}},
                        variant: "temporary",
                        open: t,
                        onClose: l,
                        menuGroups: Bh,
                        listenerMenu: a,
                        onToggle: l,
                        isMobile: !e
                    }), C.jsx(wh, {
                        PaperProps: {style: {width: sc}},
                        sx: {display: {sm: "block", xs: "none"}},
                        menuGroups: Bh,
                        listenerMenu: a,
                        onToggle: l,
                        isMobile: !e
                    })]
                }), C.jsxs(nr, {
                    sx: {flex: 1, display: "flex", flexDirection: "column"},
                    children: [C.jsx(b5, {title: r, handleDrawerToggle: l, showHelp: i}), C.jsx(nr, {
                        component: "main",
                        sx: {flex: 1, py: 1, px: 1, bgcolor: "#eaeff1"},
                        children: C.jsx($5, {})
                    })]
                })]
            })
        })
    }, I5 = t0(document.getElementById("root"));
I5.render(C.jsx(h.StrictMode, {children: C.jsx(b$, {children: C.jsx(O5, {})})}));
