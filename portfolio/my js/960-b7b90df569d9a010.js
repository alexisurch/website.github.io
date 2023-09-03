(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[960], {
    3454: function(t, e, n) {
        "use strict";
        var r, o;
        t.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" === typeof (null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(7663)
    },
    1210: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.getDomainLocale = function(t, e, n, r) {
            return !1
        }
        ;
        ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    8045: function(t, e, n) {
        "use strict";
        var r = n(9361).default
          , o = n(4941).Z
          , i = n(3929).Z;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            var e = t.src
              , n = t.sizes
              , a = t.unoptimized
              , f = void 0 !== a && a
              , v = t.priority
              , m = void 0 !== v && v
              , w = t.loading
              , T = t.lazyRoot
              , V = void 0 === T ? null : T
              , M = t.lazyBoundary
              , R = t.className
              , L = t.quality
              , j = t.width
              , O = t.height
              , k = t.style
              , D = t.objectFit
              , I = t.objectPosition
              , F = t.onLoadingComplete
              , B = t.placeholder
              , U = void 0 === B ? "empty" : B
              , z = t.blurDataURL
              , N = h(t, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"])
              , _ = s.useContext(d.ImageConfigContext)
              , H = s.useMemo((function() {
                var t = g || _ || l.imageConfigDefault
                  , e = i(t.deviceSizes).concat(i(t.imageSizes)).sort((function(t, e) {
                    return t - e
                }
                ))
                  , n = t.deviceSizes.sort((function(t, e) {
                    return t - e
                }
                ));
                return p({}, t, {
                    allSizes: e,
                    deviceSizes: n
                })
            }
            ), [_])
              , W = N
              , q = n ? "responsive" : "intrinsic";
            "layout"in W && (W.layout && (q = W.layout),
            delete W.layout);
            var Y = P;
            if ("loader"in W) {
                if (W.loader) {
                    var X = W.loader;
                    Y = function(t) {
                        t.config;
                        var e = h(t, ["config"]);
                        return X(e)
                    }
                }
                delete W.loader
            }
            var G = "";
            if (function(t) {
                return "object" === typeof t && (E(t) || function(t) {
                    return void 0 !== t.src
                }(t))
            }(e)) {
                var Z = E(e) ? e.default : e;
                if (!Z.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));
                if (z = z || Z.blurDataURL,
                G = Z.src,
                (!q || "fill" !== q) && (O = O || Z.height,
                j = j || Z.width,
                !Z.height || !Z.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))
            }
            e = "string" === typeof e ? e : G;
            var K = A(j)
              , $ = A(O)
              , J = A(L)
              , Q = !m && ("lazy" === w || "undefined" === typeof w);
            (e.startsWith("data:") || e.startsWith("blob:")) && (f = !0,
            Q = !1);
            x.has(e) && (Q = !1);
            y && (f = !0);
            var tt, et = o(s.useState(!1), 2), nt = et[0], rt = et[1], ot = o(c.useIntersection({
                rootRef: V,
                rootMargin: M || "200px",
                disabled: !Q
            }), 3), it = ot[0], at = ot[1], st = ot[2], ut = !Q || at, lt = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, ct = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, dt = !1, ft = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: D,
                objectPosition: I
            };
            0;
            var pt = Object.assign({}, k, ft)
              , vt = "blur" !== U || nt ? {} : {
                backgroundSize: D || "cover",
                backgroundPosition: I || "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("'.concat(z, '")')
            };
            if ("fill" === q)
                lt.display = "block",
                lt.position = "absolute",
                lt.top = 0,
                lt.left = 0,
                lt.bottom = 0,
                lt.right = 0;
            else if ("undefined" !== typeof K && "undefined" !== typeof $) {
                var ht = $ / K
                  , mt = isNaN(ht) ? "100%" : "".concat(100 * ht, "%");
                "responsive" === q ? (lt.display = "block",
                lt.position = "relative",
                dt = !0,
                ct.paddingTop = mt) : "intrinsic" === q ? (lt.display = "inline-block",
                lt.position = "relative",
                lt.maxWidth = "100%",
                dt = !0,
                ct.maxWidth = "100%",
                tt = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K, "%27%20height=%27").concat($, "%27/%3e")) : "fixed" === q && (lt.display = "inline-block",
                lt.position = "relative",
                lt.width = K,
                lt.height = $)
            } else
                0;
            var yt = {
                src: b,
                srcSet: void 0,
                sizes: void 0
            };
            ut && (yt = S({
                config: H,
                src: e,
                unoptimized: f,
                layout: q,
                width: K,
                quality: J,
                sizes: n,
                loader: Y
            }));
            var gt = e;
            0;
            var xt, bt = "imagesrcset", wt = "imagesizes";
            bt = "imageSrcSet",
            wt = "imageSizes";
            var Et = (r(xt = {}, bt, yt.srcSet),
            r(xt, wt, yt.sizes),
            xt)
              , St = s.default.useLayoutEffect
              , At = s.useRef(F)
              , Pt = s.useRef(e);
            s.useEffect((function() {
                At.current = F
            }
            ), [F]),
            St((function() {
                Pt.current !== e && (st(),
                Pt.current = e)
            }
            ), [st, e]);
            var Tt = p({
                isLazy: Q,
                imgAttributes: yt,
                heightInt: $,
                widthInt: K,
                qualityInt: J,
                layout: q,
                className: R,
                imgStyle: pt,
                blurStyle: vt,
                loading: w,
                config: H,
                unoptimized: f,
                placeholder: U,
                loader: Y,
                srcString: gt,
                onLoadingCompleteRef: At,
                setBlurComplete: rt,
                setIntersection: it,
                isVisible: ut,
                noscriptSizes: n
            }, W);
            return s.default.createElement(s.default.Fragment, null, s.default.createElement("span", {
                style: lt
            }, dt ? s.default.createElement("span", {
                style: ct
            }, tt ? s.default.createElement("img", {
                style: {
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: tt
            }) : null) : null, s.default.createElement(C, Object.assign({}, Tt))), m ? s.default.createElement(u.default, null, s.default.createElement("link", Object.assign({
                key: "__nimg-" + yt.src + yt.srcSet + yt.sizes,
                rel: "preload",
                as: "image",
                href: yt.srcSet ? void 0 : yt.src
            }, Et))) : null)
        }
        ;
        var a, s = function(t) {
            if (t && t.__esModule)
                return t;
            if (null === t || "object" !== typeof t && "function" !== typeof t)
                return {
                    default: t
                };
            var e = v();
            if (e && e.has(t))
                return e.get(t);
            var n = {}
              , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = t[o]
                }
            n.default = t,
            e && e.set(t, n);
            return n
        }(n(7294)), u = (a = n(5443)) && a.__esModule ? a : {
            default: a
        }, l = n(9309), c = n(7190), d = n(9977), f = (n(3794),
        n(2392));
        function p() {
            return p = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
            ,
            p.apply(this, arguments)
        }
        function v() {
            if ("function" !== typeof WeakMap)
                return null;
            var t = new WeakMap;
            return v = function() {
                return t
            }
            ,
            t
        }
        function h(t, e) {
            if (null == t)
                return {};
            var n, r, o = {}, i = Object.keys(t);
            for (r = 0; r < i.length; r++)
                n = i[r],
                e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o
        }
        var m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            experimentalLayoutRaw: !1
        } || {}
          , y = m.experimentalUnoptimized
          , g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            experimentalLayoutRaw: !1
        }
          , x = new Set
          , b = (new Map,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        var w = new Map([["default", function(t) {
            var e = t.config
              , n = t.src
              , r = t.width
              , o = t.quality;
            0;
            if (n.endsWith(".svg") && !e.dangerouslyAllowSVG)
                return n;
            return "".concat(f.normalizePathTrailingSlash(e.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
        }
        ], ["imgix", function(t) {
            var e = t.config
              , n = t.src
              , r = t.width
              , o = t.quality
              , i = new URL("".concat(e.path).concat(V(n)))
              , a = i.searchParams;
            a.set("auto", a.get("auto") || "format"),
            a.set("fit", a.get("fit") || "max"),
            a.set("w", a.get("w") || r.toString()),
            o && a.set("q", o.toString());
            return i.href
        }
        ], ["cloudinary", function(t) {
            var e = t.config
              , n = t.src
              , r = t.width
              , o = t.quality
              , i = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
            return "".concat(e.path).concat(i).concat(V(n))
        }
        ], ["akamai", function(t) {
            var e = t.config
              , n = t.src
              , r = t.width;
            return "".concat(e.path).concat(V(n), "?imwidth=").concat(r)
        }
        ], ["custom", function(t) {
            var e = t.src;
            throw new Error('Image with src "'.concat(e, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function E(t) {
            return void 0 !== t.default
        }
        function S(t) {
            var e = t.config
              , n = t.src
              , r = t.unoptimized
              , o = t.layout
              , a = t.width
              , s = t.quality
              , u = t.sizes
              , l = t.loader;
            if (r)
                return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
            var c = function(t, e, n, r) {
                var o = t.deviceSizes
                  , a = t.allSizes;
                if (r && ("fill" === n || "responsive" === n)) {
                    for (var s, u = /(^|\s)(1?\d?\d)vw/g, l = []; s = u.exec(r); s)
                        l.push(parseInt(s[2]));
                    if (l.length) {
                        var c, d = .01 * (c = Math).min.apply(c, i(l));
                        return {
                            widths: a.filter((function(t) {
                                return t >= o[0] * d
                            }
                            )),
                            kind: "w"
                        }
                    }
                    return {
                        widths: a,
                        kind: "w"
                    }
                }
                return "number" !== typeof e || "fill" === n || "responsive" === n ? {
                    widths: o,
                    kind: "w"
                } : {
                    widths: i(new Set([e, 2 * e].map((function(t) {
                        return a.find((function(e) {
                            return e >= t
                        }
                        )) || a[a.length - 1]
                    }
                    )))),
                    kind: "x"
                }
            }(e, a, o, u)
              , d = c.widths
              , f = c.kind
              , p = d.length - 1;
            return {
                sizes: u || "w" !== f ? u : "100vw",
                srcSet: d.map((function(t, r) {
                    return "".concat(l({
                        config: e,
                        src: n,
                        quality: s,
                        width: t
                    }), " ").concat("w" === f ? t : r + 1).concat(f)
                }
                )).join(", "),
                src: l({
                    config: e,
                    src: n,
                    quality: s,
                    width: d[p]
                })
            }
        }
        function A(t) {
            return "number" === typeof t ? t : "string" === typeof t ? parseInt(t, 10) : void 0
        }
        function P(t) {
            var e, n = (null == (e = t.config) ? void 0 : e.loader) || "default", r = w.get(n);
            if (r)
                return r(t);
            throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(n))
        }
        function T(t, e, n, r, o, i) {
            t && t.src !== b && t["data-loaded-src"] !== e && (t["data-loaded-src"] = e,
            ("decode"in t ? t.decode() : Promise.resolve()).catch((function() {}
            )).then((function() {
                if (t.parentNode && (x.add(e),
                "blur" === r && i(!0),
                null == o ? void 0 : o.current)) {
                    var n = t.naturalWidth
                      , a = t.naturalHeight;
                    o.current({
                        naturalWidth: n,
                        naturalHeight: a
                    })
                }
            }
            )))
        }
        var C = function(t) {
            var e = t.imgAttributes
              , n = (t.heightInt,
            t.widthInt)
              , r = t.qualityInt
              , o = t.layout
              , i = t.className
              , a = t.imgStyle
              , u = t.blurStyle
              , l = t.isLazy
              , c = t.placeholder
              , d = t.loading
              , f = t.srcString
              , v = t.config
              , m = t.unoptimized
              , y = t.loader
              , g = t.onLoadingCompleteRef
              , x = t.setBlurComplete
              , b = t.setIntersection
              , w = t.onLoad
              , E = t.onError
              , A = (t.isVisible,
            t.noscriptSizes)
              , P = h(t, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
            return d = l ? "lazy" : d,
            s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, P, e, {
                decoding: "async",
                "data-nimg": o,
                className: i,
                style: p({}, a, u),
                ref: s.useCallback((function(t) {
                    b(t),
                    (null == t ? void 0 : t.complete) && T(t, f, 0, c, g, x)
                }
                ), [b, f, o, c, g, x]),
                onLoad: function(t) {
                    T(t.currentTarget, f, 0, c, g, x),
                    w && w(t)
                },
                onError: function(t) {
                    "blur" === c && x(!0),
                    E && E(t)
                }
            })), (l || "blur" === c) && s.default.createElement("noscript", null, s.default.createElement("img", Object.assign({}, P, S({
                config: v,
                src: f,
                unoptimized: m,
                layout: o,
                width: n,
                quality: r,
                sizes: A,
                loader: y
            }), {
                decoding: "async",
                "data-nimg": o,
                style: a,
                className: i,
                loading: d
            }))))
        };
        function V(t) {
            return "/" === t[0] ? t.slice(1) : t
        }
        ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    8418: function(t, e, n) {
        "use strict";
        var r = n(4941).Z;
        n(5753).default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var o, i = (o = n(7294)) && o.__esModule ? o : {
            default: o
        }, a = n(6273), s = n(2725), u = n(3462), l = n(1018), c = n(7190), d = n(1210), f = n(8684);
        var p = "undefined" !== typeof i.default.useTransition
          , v = {};
        function h(t, e, n, r) {
            if (t && a.isLocalURL(e)) {
                t.prefetch(e, n, r).catch((function(t) {
                    0
                }
                ));
                var o = r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
                v[e + "%" + n + (o ? "%" + o : "")] = !0
            }
        }
        var m = i.default.forwardRef((function(t, e) {
            var n, o = t.href, m = t.as, y = t.children, g = t.prefetch, x = t.passHref, b = t.replace, w = t.shallow, E = t.scroll, S = t.locale, A = t.onClick, P = t.onMouseEnter, T = t.legacyBehavior, C = void 0 === T ? !0 !== Boolean(!1) : T, V = function(t, e) {
                if (null == t)
                    return {};
                var n, r, o = {}, i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "legacyBehavior"]);
            n = y,
            !C || "string" !== typeof n && "number" !== typeof n || (n = i.default.createElement("a", null, n));
            var M = !1 !== g
              , R = r(p ? i.default.useTransition() : [], 2)[1]
              , L = i.default.useContext(u.RouterContext)
              , j = i.default.useContext(l.AppRouterContext);
            j && (L = j);
            var O, k = i.default.useMemo((function() {
                var t = r(a.resolveHref(L, o, !0), 2)
                  , e = t[0]
                  , n = t[1];
                return {
                    href: e,
                    as: m ? a.resolveHref(L, m) : n || e
                }
            }
            ), [L, o, m]), D = k.href, I = k.as, F = i.default.useRef(D), B = i.default.useRef(I);
            C && (O = i.default.Children.only(n));
            var U = C ? O && "object" === typeof O && O.ref : e
              , z = r(c.useIntersection({
                rootMargin: "200px"
            }), 3)
              , N = z[0]
              , _ = z[1]
              , H = z[2]
              , W = i.default.useCallback((function(t) {
                B.current === I && F.current === D || (H(),
                B.current = I,
                F.current = D),
                N(t),
                U && ("function" === typeof U ? U(t) : "object" === typeof U && (U.current = t))
            }
            ), [I, U, D, H, N]);
            i.default.useEffect((function() {
                var t = _ && M && a.isLocalURL(D)
                  , e = "undefined" !== typeof S ? S : L && L.locale
                  , n = v[D + "%" + I + (e ? "%" + e : "")];
                t && !n && h(L, D, I, {
                    locale: e
                })
            }
            ), [I, D, _, S, M, L]);
            var q = {
                ref: W,
                onClick: function(t) {
                    C || "function" !== typeof A || A(t),
                    C && O.props && "function" === typeof O.props.onClick && O.props.onClick(t),
                    t.defaultPrevented || function(t, e, n, r, o, i, s, u, l) {
                        if ("A" !== t.currentTarget.nodeName.toUpperCase() || !function(t) {
                            var e = t.currentTarget.target;
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) && a.isLocalURL(n)) {
                            t.preventDefault();
                            var c = function() {
                                e[o ? "replace" : "push"](n, r, {
                                    shallow: i,
                                    locale: u,
                                    scroll: s
                                })
                            };
                            l ? l(c) : c()
                        }
                    }(t, L, D, I, b, w, E, S, j ? R : void 0)
                },
                onMouseEnter: function(t) {
                    C || "function" !== typeof P || P(t),
                    C && O.props && "function" === typeof O.props.onMouseEnter && O.props.onMouseEnter(t),
                    a.isLocalURL(D) && h(L, D, I, {
                        priority: !0
                    })
                }
            };
            if (!C || x || "a" === O.type && !("href"in O.props)) {
                var Y = "undefined" !== typeof S ? S : L && L.locale
                  , X = L && L.isLocaleDomain && d.getDomainLocale(I, Y, L.locales, L.domainLocales);
                q.href = X || f.addBasePath(s.addLocale(I, Y, L && L.defaultLocale))
            }
            return C ? i.default.cloneElement(O, q) : i.default.createElement("a", Object.assign({}, V, q), n)
        }
        ));
        e.default = m,
        ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    7190: function(t, e, n) {
        "use strict";
        var r = n(4941).Z;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.useIntersection = function(t) {
            var e = t.rootRef
              , n = t.rootMargin
              , l = t.disabled || !a
              , c = o.useRef()
              , d = r(o.useState(!1), 2)
              , f = d[0]
              , p = d[1]
              , v = r(o.useState(null), 2)
              , h = v[0]
              , m = v[1];
            o.useEffect((function() {
                if (a) {
                    if (c.current && (c.current(),
                    c.current = void 0),
                    l || f)
                        return;
                    return h && h.tagName && (c.current = function(t, e, n) {
                        var r = function(t) {
                            var e, n = {
                                root: t.root || null,
                                margin: t.rootMargin || ""
                            }, r = u.find((function(t) {
                                return t.root === n.root && t.margin === n.margin
                            }
                            ));
                            if (r && (e = s.get(r)))
                                return e;
                            var o = new Map
                              , i = new IntersectionObserver((function(t) {
                                t.forEach((function(t) {
                                    var e = o.get(t.target)
                                      , n = t.isIntersecting || t.intersectionRatio > 0;
                                    e && n && e(n)
                                }
                                ))
                            }
                            ),t);
                            return e = {
                                id: n,
                                observer: i,
                                elements: o
                            },
                            u.push(n),
                            s.set(n, e),
                            e
                        }(n)
                          , o = r.id
                          , i = r.observer
                          , a = r.elements;
                        return a.set(t, e),
                        i.observe(t),
                        function() {
                            if (a.delete(t),
                            i.unobserve(t),
                            0 === a.size) {
                                i.disconnect(),
                                s.delete(o);
                                var e = u.findIndex((function(t) {
                                    return t.root === o.root && t.margin === o.margin
                                }
                                ));
                                e > -1 && u.splice(e, 1)
                            }
                        }
                    }(h, (function(t) {
                        return t && p(t)
                    }
                    ), {
                        root: null == e ? void 0 : e.current,
                        rootMargin: n
                    })),
                    function() {
                        null == c.current || c.current(),
                        c.current = void 0
                    }
                }
                if (!f) {
                    var t = i.requestIdleCallback((function() {
                        return p(!0)
                    }
                    ));
                    return function() {
                        return i.cancelIdleCallback(t)
                    }
                }
            }
            ), [h, l, n, e, f]);
            var y = o.useCallback((function() {
                p(!1)
            }
            ), []);
            return [m, f, y]
        }
        ;
        var o = n(7294)
          , i = n(9311)
          , a = "function" === typeof IntersectionObserver;
        var s = new Map
          , u = [];
        ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    1018: function(t, e, n) {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.AppRouterContext = void 0;
        var o = ((r = n(7294)) && r.__esModule ? r : {
            default: r
        }).default.createContext(null);
        e.AppRouterContext = o
    },
    7663: function(t) {
        !function() {
            var e = {
                308: function(t) {
                    var e, n, r = t.exports = {};
                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function i() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === o || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (r) {
                            try {
                                return e.call(null, t, 0)
                            } catch (r) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" === typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            e = o
                        }
                        try {
                            n = "function" === typeof clearTimeout ? clearTimeout : i
                        } catch (t) {
                            n = i
                        }
                    }();
                    var s, u = [], l = !1, c = -1;
                    function d() {
                        l && s && (l = !1,
                        s.length ? u = s.concat(u) : c = -1,
                        u.length && f())
                    }
                    function f() {
                        if (!l) {
                            var t = a(d);
                            l = !0;
                            for (var e = u.length; e; ) {
                                for (s = u,
                                u = []; ++c < e; )
                                    s && s[c].run();
                                c = -1,
                                e = u.length
                            }
                            s = null,
                            l = !1,
                            function(t) {
                                if (n === clearTimeout)
                                    return clearTimeout(t);
                                if ((n === i || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    n(t)
                                } catch (e) {
                                    try {
                                        return n.call(null, t)
                                    } catch (e) {
                                        return n.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function p(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function v() {}
                    r.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                e[n - 1] = arguments[n];
                        u.push(new p(t,e)),
                        1 !== u.length || l || a(f)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = v,
                    r.addListener = v,
                    r.once = v,
                    r.off = v,
                    r.removeListener = v,
                    r.removeAllListeners = v,
                    r.emit = v,
                    r.prependListener = v,
                    r.prependOnceListener = v,
                    r.listeners = function(t) {
                        return []
                    }
                    ,
                    r.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(t) {
                var o = n[t];
                if (void 0 !== o)
                    return o.exports;
                var i = n[t] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    e[t](i, i.exports, r),
                    a = !1
                } finally {
                    a && delete n[t]
                }
                return i.exports
            }
            r.ab = "//";
            var o = r(308);
            t.exports = o
        }()
    },
    5675: function(t, e, n) {
        t.exports = n(8045)
    },
    1664: function(t, e, n) {
        t.exports = n(8418)
    },
    9411: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return Ma
            }
        });
        var r = function(t, e) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            ,
            r(t, e)
        };
        function o(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function n() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        var i = function() {
            return i = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ,
            i.apply(this, arguments)
        };
        function a(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
            }
            return n
        }
        Object.create;
        function s(t, e) {
            var n = "function" === typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (s) {
                o = {
                    error: s
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function u(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                    !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)),
                    r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        }
        Object.create;
        var l = n(7294)
          , c = n(3454)
          , d = ("undefined" === typeof c || c.env,
        "production")
          , f = function(t) {
            return {
                isEnabled: function(e) {
                    return t.some((function(t) {
                        return !!e[t]
                    }
                    ))
                }
            }
        }
          , p = {
            measureLayout: f(["layout", "layoutId", "drag"]),
            animation: f(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: f(["exit"]),
            drag: f(["drag", "dragControls"]),
            focus: f(["whileFocus"]),
            hover: f(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: f(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: f(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: f(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        var v = (0,
        l.createContext)({
            strict: !1
        })
          , h = Object.keys(p)
          , m = h.length;
        var y = (0,
        l.createContext)({
            transformPagePoint: function(t) {
                return t
            },
            isStatic: !1,
            reducedMotion: "never"
        })
          , g = (0,
        l.createContext)({});
        var x = (0,
        l.createContext)(null)
          , b = "undefined" !== typeof document
          , w = b ? l.useLayoutEffect : l.useEffect
          , E = {
            current: null
        }
          , S = !1;
        function A() {
            return !S && function() {
                if (S = !0,
                b)
                    if (window.matchMedia) {
                        var t = window.matchMedia("(prefers-reduced-motion)")
                          , e = function() {
                            return E.current = t.matches
                        };
                        t.addListener(e),
                        e()
                    } else
                        E.current = !1
            }(),
            s((0,
            l.useState)(E.current), 1)[0]
        }
        function P(t, e, n, r) {
            var o = (0,
            l.useContext)(v)
              , i = (0,
            l.useContext)(g).visualElement
              , a = (0,
            l.useContext)(x)
              , s = function() {
                var t = A()
                  , e = (0,
                l.useContext)(y).reducedMotion;
                return "never" !== e && ("always" === e || t)
            }()
              , u = (0,
            l.useRef)(void 0);
            r || (r = o.renderer),
            !u.current && r && (u.current = r(t, {
                visualState: e,
                parent: i,
                props: n,
                presenceId: null === a || void 0 === a ? void 0 : a.id,
                blockInitialAnimation: !1 === (null === a || void 0 === a ? void 0 : a.initial),
                shouldReduceMotion: s
            }));
            var c = u.current;
            return w((function() {
                null === c || void 0 === c || c.syncRender()
            }
            )),
            (0,
            l.useEffect)((function() {
                var t;
                null === (t = null === c || void 0 === c ? void 0 : c.animationState) || void 0 === t || t.animateChanges()
            }
            )),
            w((function() {
                return function() {
                    return null === c || void 0 === c ? void 0 : c.notifyUnmount()
                }
            }
            ), []),
            c
        }
        function T(t) {
            return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function C(t) {
            return Array.isArray(t)
        }
        function V(t) {
            return "string" === typeof t || C(t)
        }
        function M(t, e, n, r, o) {
            var i;
            return void 0 === r && (r = {}),
            void 0 === o && (o = {}),
            "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
            "string" === typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
            "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
            e
        }
        function R(t, e, n) {
            var r = t.getProps();
            return M(r, e, null !== n && void 0 !== n ? n : r.custom, function(t) {
                var e = {};
                return t.forEachValue((function(t, n) {
                    return e[n] = t.get()
                }
                )),
                e
            }(t), function(t) {
                var e = {};
                return t.forEachValue((function(t, n) {
                    return e[n] = t.getVelocity()
                }
                )),
                e
            }(t))
        }
        function L(t) {
            var e;
            return "function" === typeof (null === (e = t.animate) || void 0 === e ? void 0 : e.start) || V(t.initial) || V(t.animate) || V(t.whileHover) || V(t.whileDrag) || V(t.whileTap) || V(t.whileFocus) || V(t.exit)
        }
        function j(t) {
            return Boolean(L(t) || t.variants)
        }
        function O(t) {
            var e = function(t, e) {
                if (L(t)) {
                    var n = t.initial
                      , r = t.animate;
                    return {
                        initial: !1 === n || V(n) ? n : void 0,
                        animate: V(r) ? r : void 0
                    }
                }
                return !1 !== t.inherit ? e : {}
            }(t, (0,
            l.useContext)(g))
              , n = e.initial
              , r = e.animate;
            return (0,
            l.useMemo)((function() {
                return {
                    initial: n,
                    animate: r
                }
            }
            ), [k(n), k(r)])
        }
        function k(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        function D(t) {
            var e = (0,
            l.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
        const I = 1 / 60 * 1e3
          , F = "undefined" !== typeof performance ? ()=>performance.now() : ()=>Date.now()
          , B = "undefined" !== typeof window ? t=>window.requestAnimationFrame(t) : t=>setTimeout((()=>t(F())), I);
        let U = !0
          , z = !1
          , N = !1;
        const _ = {
            delta: 0,
            timestamp: 0
        }
          , H = ["read", "update", "preRender", "render", "postRender"]
          , W = H.reduce(((t,e)=>(t[e] = function(t) {
            let e = []
              , n = []
              , r = 0
              , o = !1
              , i = !1;
            const a = new WeakSet
              , s = {
                schedule: (t,i=!1,s=!1)=>{
                    const u = s && o
                      , l = u ? e : n;
                    return i && a.add(t),
                    -1 === l.indexOf(t) && (l.push(t),
                    u && o && (r = e.length)),
                    t
                }
                ,
                cancel: t=>{
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1),
                    a.delete(t)
                }
                ,
                process: u=>{
                    if (o)
                        i = !0;
                    else {
                        if (o = !0,
                        [e,n] = [n, e],
                        n.length = 0,
                        r = e.length,
                        r)
                            for (let n = 0; n < r; n++) {
                                const r = e[n];
                                r(u),
                                a.has(r) && (s.schedule(r),
                                t())
                            }
                        o = !1,
                        i && (i = !1,
                        s.process(u))
                    }
                }
            };
            return s
        }((()=>z = !0)),
        t)), {})
          , q = H.reduce(((t,e)=>{
            const n = W[e];
            return t[e] = (t,e=!1,r=!1)=>(z || K(),
            n.schedule(t, e, r)),
            t
        }
        ), {})
          , Y = H.reduce(((t,e)=>(t[e] = W[e].cancel,
        t)), {})
          , X = H.reduce(((t,e)=>(t[e] = ()=>W[e].process(_),
        t)), {})
          , G = t=>W[t].process(_)
          , Z = t=>{
            z = !1,
            _.delta = U ? I : Math.max(Math.min(t - _.timestamp, 40), 1),
            _.timestamp = t,
            N = !0,
            H.forEach(G),
            N = !1,
            z && (U = !1,
            B(Z))
        }
          , K = ()=>{
            z = !0,
            U = !0,
            N || B(Z)
        }
          , $ = ()=>_;
        var J = q;
        const Q = (t,e,n)=>-n * t + n * e + t;
        function tt(t, e) {
            return e ? t * (1e3 / e) : 0
        }
        function et(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function nt(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        var rt = function() {
            function t() {
                this.subscriptions = []
            }
            return t.prototype.add = function(t) {
                var e = this;
                return et(this.subscriptions, t),
                function() {
                    return nt(e.subscriptions, t)
                }
            }
            ,
            t.prototype.notify = function(t, e, n) {
                var r = this.subscriptions.length;
                if (r)
                    if (1 === r)
                        this.subscriptions[0](t, e, n);
                    else
                        for (var o = 0; o < r; o++) {
                            var i = this.subscriptions[o];
                            i && i(t, e, n)
                        }
            }
            ,
            t.prototype.getSize = function() {
                return this.subscriptions.length
            }
            ,
            t.prototype.clear = function() {
                this.subscriptions.length = 0
            }
            ,
            t
        }()
          , ot = function() {
            function t(t) {
                var e, n = this;
                this.version = "6.4.1",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.updateSubscribers = new rt,
                this.velocityUpdateSubscribers = new rt,
                this.renderSubscribers = new rt,
                this.canTrackVelocity = !1,
                this.updateAndNotify = function(t, e) {
                    void 0 === e && (e = !0),
                    n.prev = n.current,
                    n.current = t;
                    var r = $()
                      , o = r.delta
                      , i = r.timestamp;
                    n.lastUpdated !== i && (n.timeDelta = o,
                    n.lastUpdated = i,
                    J.postRender(n.scheduleVelocityCheck)),
                    n.prev !== n.current && n.updateSubscribers.notify(n.current),
                    n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()),
                    e && n.renderSubscribers.notify(n.current)
                }
                ,
                this.scheduleVelocityCheck = function() {
                    return J.postRender(n.velocityCheck)
                }
                ,
                this.velocityCheck = function(t) {
                    t.timestamp !== n.lastUpdated && (n.prev = n.current,
                    n.velocityUpdateSubscribers.notify(n.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = (e = this.current,
                !isNaN(parseFloat(e)))
            }
            return t.prototype.onChange = function(t) {
                return this.updateSubscribers.add(t)
            }
            ,
            t.prototype.clearListeners = function() {
                this.updateSubscribers.clear()
            }
            ,
            t.prototype.onRenderRequest = function(t) {
                return t(this.get()),
                this.renderSubscribers.add(t)
            }
            ,
            t.prototype.attach = function(t) {
                this.passiveEffect = t
            }
            ,
            t.prototype.set = function(t, e) {
                void 0 === e && (e = !0),
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            ,
            t.prototype.get = function() {
                return this.current
            }
            ,
            t.prototype.getPrevious = function() {
                return this.prev
            }
            ,
            t.prototype.getVelocity = function() {
                return this.canTrackVelocity ? tt(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            ,
            t.prototype.start = function(t) {
                var e = this;
                return this.stop(),
                new Promise((function(n) {
                    e.hasAnimated = !0,
                    e.stopAnimation = t(n)
                }
                )).then((function() {
                    return e.clearAnimation()
                }
                ))
            }
            ,
            t.prototype.stop = function() {
                this.stopAnimation && this.stopAnimation(),
                this.clearAnimation()
            }
            ,
            t.prototype.isAnimating = function() {
                return !!this.stopAnimation
            }
            ,
            t.prototype.clearAnimation = function() {
                this.stopAnimation = null
            }
            ,
            t.prototype.destroy = function() {
                this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }
            ,
            t
        }();
        function it(t) {
            return new ot(t)
        }
        var at = function(t) {
            return Boolean(null !== t && "object" === typeof t && t.getVelocity)
        };
        const st = (t,e,n)=>Math.min(Math.max(n, t), e)
          , ut = .001;
        function lt({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
            let o, i, a = 1 - e;
            a = st(.05, 1, a),
            t = st(.01, 10, t / 1e3),
            a < 1 ? (o = e=>{
                const r = e * a
                  , o = r * t
                  , i = r - n
                  , s = ct(e, a)
                  , u = Math.exp(-o);
                return ut - i / s * u
            }
            ,
            i = e=>{
                const r = e * a * t
                  , i = r * n + n
                  , s = Math.pow(a, 2) * Math.pow(e, 2) * t
                  , u = Math.exp(-r)
                  , l = ct(Math.pow(e, 2), a);
                return (-o(e) + ut > 0 ? -1 : 1) * ((i - s) * u) / l
            }
            ) : (o = e=>Math.exp(-e * t) * ((e - n) * t + 1) - .001,
            i = e=>Math.exp(-e * t) * (t * t * (n - e)));
            const s = function(t, e, n) {
                let r = n;
                for (let o = 1; o < 12; o++)
                    r -= t(r) / e(r);
                return r
            }(o, i, 5 / t);
            if (t *= 1e3,
            isNaN(s))
                return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                };
            {
                const e = Math.pow(s, 2) * r;
                return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(r * e),
                    duration: t
                }
            }
        }
        function ct(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        const dt = ["duration", "bounce"]
          , ft = ["stiffness", "damping", "mass"];
        function pt(t, e) {
            return e.some((e=>void 0 !== t[e]))
        }
        function vt(t) {
            var {from: e=0, to: n=1, restSpeed: r=2, restDelta: o} = t
              , i = a(t, ["from", "to", "restSpeed", "restDelta"]);
            const s = {
                done: !1,
                value: e
            };
            let {stiffness: u, damping: l, mass: c, velocity: d, duration: f, isResolvedFromDuration: p} = function(t) {
                let e = Object.assign({
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1
                }, t);
                if (!pt(t, ft) && pt(t, dt)) {
                    const n = lt(t);
                    e = Object.assign(Object.assign(Object.assign({}, e), n), {
                        velocity: 0,
                        mass: 1
                    }),
                    e.isResolvedFromDuration = !0
                }
                return e
            }(i)
              , v = ht
              , h = ht;
            function m() {
                const t = d ? -d / 1e3 : 0
                  , r = n - e
                  , i = l / (2 * Math.sqrt(u * c))
                  , a = Math.sqrt(u / c) / 1e3;
                if (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, .4)),
                i < 1) {
                    const e = ct(a, i);
                    v = o=>{
                        const s = Math.exp(-i * a * o);
                        return n - s * ((t + i * a * r) / e * Math.sin(e * o) + r * Math.cos(e * o))
                    }
                    ,
                    h = n=>{
                        const o = Math.exp(-i * a * n);
                        return i * a * o * (Math.sin(e * n) * (t + i * a * r) / e + r * Math.cos(e * n)) - o * (Math.cos(e * n) * (t + i * a * r) - e * r * Math.sin(e * n))
                    }
                } else if (1 === i)
                    v = e=>n - Math.exp(-a * e) * (r + (t + a * r) * e);
                else {
                    const e = a * Math.sqrt(i * i - 1);
                    v = o=>{
                        const s = Math.exp(-i * a * o)
                          , u = Math.min(e * o, 300);
                        return n - s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
                    }
                }
            }
            return m(),
            {
                next: t=>{
                    const e = v(t);
                    if (p)
                        s.done = t >= f;
                    else {
                        const i = 1e3 * h(t)
                          , a = Math.abs(i) <= r
                          , u = Math.abs(n - e) <= o;
                        s.done = a && u
                    }
                    return s.value = s.done ? n : e,
                    s
                }
                ,
                flipTarget: ()=>{
                    d = -d,
                    [e,n] = [n, e],
                    m()
                }
            }
        }
        vt.needsInterpolation = (t,e)=>"string" === typeof t || "string" === typeof e;
        const ht = t=>0
          , mt = (t,e,n)=>{
            const r = e - t;
            return 0 === r ? 1 : (n - t) / r
        }
          , yt = (t,e)=>n=>Math.max(Math.min(n, e), t)
          , gt = t=>t % 1 ? Number(t.toFixed(5)) : t
          , xt = /(-)?([\d]*\.?[\d])+/g
          , bt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi
          , wt = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function Et(t) {
            return "string" === typeof t
        }
        const St = {
            test: t=>"number" === typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , At = Object.assign(Object.assign({}, St), {
            transform: yt(0, 1)
        })
          , Pt = Object.assign(Object.assign({}, St), {
            default: 1
        })
          , Tt = (t,e)=>n=>Boolean(Et(n) && wt.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
          , Ct = (t,e,n)=>r=>{
            if (!Et(r))
                return r;
            const [o,i,a,s] = r.match(xt);
            return {
                [t]: parseFloat(o),
                [e]: parseFloat(i),
                [n]: parseFloat(a),
                alpha: void 0 !== s ? parseFloat(s) : 1
            }
        }
          , Vt = yt(0, 255)
          , Mt = Object.assign(Object.assign({}, St), {
            transform: t=>Math.round(Vt(t))
        })
          , Rt = {
            test: Tt("rgb", "red"),
            parse: Ct("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: r=1})=>"rgba(" + Mt.transform(t) + ", " + Mt.transform(e) + ", " + Mt.transform(n) + ", " + gt(At.transform(r)) + ")"
        };
        const Lt = {
            test: Tt("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , r = ""
                  , o = "";
                return t.length > 5 ? (e = t.substr(1, 2),
                n = t.substr(3, 2),
                r = t.substr(5, 2),
                o = t.substr(7, 2)) : (e = t.substr(1, 1),
                n = t.substr(2, 1),
                r = t.substr(3, 1),
                o = t.substr(4, 1),
                e += e,
                n += n,
                r += r,
                o += o),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: o ? parseInt(o, 16) / 255 : 1
                }
            },
            transform: Rt.transform
        }
          , jt = t=>({
            test: e=>Et(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , Ot = jt("deg")
          , kt = jt("%")
          , Dt = jt("px")
          , It = jt("vh")
          , Ft = jt("vw")
          , Bt = Object.assign(Object.assign({}, kt), {
            parse: t=>kt.parse(t) / 100,
            transform: t=>kt.transform(100 * t)
        })
          , Ut = {
            test: Tt("hsl", "hue"),
            parse: Ct("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: r=1})=>"hsla(" + Math.round(t) + ", " + kt.transform(gt(e)) + ", " + kt.transform(gt(n)) + ", " + gt(At.transform(r)) + ")"
        };
        function zt(t, e, n) {
            return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        function Nt({hue: t, saturation: e, lightness: n, alpha: r}) {
            t /= 360,
            n /= 100;
            let o = 0
              , i = 0
              , a = 0;
            if (e /= 100) {
                const r = n < .5 ? n * (1 + e) : n + e - n * e
                  , s = 2 * n - r;
                o = zt(s, r, t + 1 / 3),
                i = zt(s, r, t),
                a = zt(s, r, t - 1 / 3)
            } else
                o = i = a = n;
            return {
                red: Math.round(255 * o),
                green: Math.round(255 * i),
                blue: Math.round(255 * a),
                alpha: r
            }
        }
        const _t = (t,e,n)=>{
            const r = t * t
              , o = e * e;
            return Math.sqrt(Math.max(0, n * (o - r) + r))
        }
          , Ht = [Lt, Rt, Ut]
          , Wt = t=>Ht.find((e=>e.test(t)))
          , qt = t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`
          , Yt = (t,e)=>{
            let n = Wt(t)
              , r = Wt(e);
            qt(t),
            qt(e);
            let o = n.parse(t)
              , i = r.parse(e);
            n === Ut && (o = Nt(o),
            n = Rt),
            r === Ut && (i = Nt(i),
            r = Rt);
            const a = Object.assign({}, o);
            return t=>{
                for (const e in a)
                    "alpha" !== e && (a[e] = _t(o[e], i[e], t));
                return a.alpha = Q(o.alpha, i.alpha, t),
                n.transform(a)
            }
        }
          , Xt = {
            test: t=>Rt.test(t) || Lt.test(t) || Ut.test(t),
            parse: t=>Rt.test(t) ? Rt.parse(t) : Ut.test(t) ? Ut.parse(t) : Lt.parse(t),
            transform: t=>Et(t) ? t : t.hasOwnProperty("red") ? Rt.transform(t) : Ut.transform(t)
        }
          , Gt = "${c}"
          , Zt = "${n}";
        function Kt(t) {
            "number" === typeof t && (t = `${t}`);
            const e = [];
            let n = 0;
            const r = t.match(bt);
            r && (n = r.length,
            t = t.replace(bt, Gt),
            e.push(...r.map(Xt.parse)));
            const o = t.match(xt);
            return o && (t = t.replace(xt, Zt),
            e.push(...o.map(St.parse))),
            {
                values: e,
                numColors: n,
                tokenised: t
            }
        }
        function $t(t) {
            return Kt(t).values
        }
        function Jt(t) {
            const {values: e, numColors: n, tokenised: r} = Kt(t)
              , o = e.length;
            return t=>{
                let e = r;
                for (let r = 0; r < o; r++)
                    e = e.replace(r < n ? Gt : Zt, r < n ? Xt.transform(t[r]) : gt(t[r]));
                return e
            }
        }
        const Qt = t=>"number" === typeof t ? 0 : t;
        const te = {
            test: function(t) {
                var e, n, r, o;
                return isNaN(t) && Et(t) && (null !== (n = null === (e = t.match(xt)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(bt)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
            },
            parse: $t,
            createTransformer: Jt,
            getAnimatableNone: function(t) {
                const e = $t(t);
                return Jt(t)(e.map(Qt))
            }
        }
          , ee = t=>"number" === typeof t
          , ne = (t,e)=>n=>e(t(n))
          , re = (...t)=>t.reduce(ne);
        function oe(t, e) {
            return ee(t) ? n=>Q(t, e, n) : Xt.test(t) ? Yt(t, e) : ue(t, e)
        }
        const ie = (t,e)=>{
            const n = [...t]
              , r = n.length
              , o = t.map(((t,n)=>oe(t, e[n])));
            return t=>{
                for (let e = 0; e < r; e++)
                    n[e] = o[e](t);
                return n
            }
        }
          , ae = (t,e)=>{
            const n = Object.assign(Object.assign({}, t), e)
              , r = {};
            for (const o in n)
                void 0 !== t[o] && void 0 !== e[o] && (r[o] = oe(t[o], e[o]));
            return t=>{
                for (const e in r)
                    n[e] = r[e](t);
                return n
            }
        }
        ;
        function se(t) {
            const e = te.parse(t)
              , n = e.length;
            let r = 0
              , o = 0
              , i = 0;
            for (let a = 0; a < n; a++)
                r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
            return {
                parsed: e,
                numNumbers: r,
                numRGB: o,
                numHSL: i
            }
        }
        const ue = (t,e)=>{
            const n = te.createTransformer(e)
              , r = se(t)
              , o = se(e);
            return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? re(ie(r.parsed, o.parsed), n) : n=>`${n > 0 ? e : t}`
        }
          , le = (t,e)=>n=>Q(t, e, n);
        function ce(t, e, n) {
            const r = []
              , o = n || ("number" === typeof (i = t[0]) ? le : "string" === typeof i ? Xt.test(i) ? Yt : ue : Array.isArray(i) ? ie : "object" === typeof i ? ae : void 0);
            var i;
            const a = t.length - 1;
            for (let s = 0; s < a; s++) {
                let n = o(t[s], t[s + 1]);
                if (e) {
                    const t = Array.isArray(e) ? e[s] : e;
                    n = re(t, n)
                }
                r.push(n)
            }
            return r
        }
        function de(t, e, {clamp: n=!0, ease: r, mixer: o}={}) {
            const i = t.length;
            e.length,
            !r || !Array.isArray(r) || r.length,
            t[0] > t[i - 1] && (t = [].concat(t),
            e = [].concat(e),
            t.reverse(),
            e.reverse());
            const a = ce(e, r, o)
              , s = 2 === i ? function([t,e], [n]) {
                return r=>n(mt(t, e, r))
            }(t, a) : function(t, e) {
                const n = t.length
                  , r = n - 1;
                return o=>{
                    let i = 0
                      , a = !1;
                    if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1,
                    a = !0),
                    !a) {
                        let e = 1;
                        for (; e < n && !(t[e] > o || e === r); e++)
                            ;
                        i = e - 1
                    }
                    const s = mt(t[i], t[i + 1], o);
                    return e[i](s)
                }
            }(t, a);
            return n ? e=>s(st(t[0], t[i - 1], e)) : s
        }
        const fe = t=>e=>1 - t(1 - e)
          , pe = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , ve = t=>e=>e * e * ((t + 1) * e - t)
          , he = t=>t
          , me = (ye = 2,
        t=>Math.pow(t, ye));
        var ye;
        const ge = fe(me)
          , xe = pe(me)
          , be = t=>1 - Math.sin(Math.acos(t))
          , we = fe(be)
          , Ee = pe(we)
          , Se = ve(1.525)
          , Ae = fe(Se)
          , Pe = pe(Se)
          , Te = (t=>{
            const e = ve(t);
            return t=>(t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        )(1.525)
          , Ce = t=>{
            if (1 === t || 0 === t)
                return t;
            const e = t * t;
            return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
        }
          , Ve = fe(Ce);
        function Me(t, e) {
            return t.map((()=>e || xe)).splice(0, t.length - 1)
        }
        function Re({from: t=0, to: e=1, ease: n, offset: r, duration: o=300}) {
            const i = {
                done: !1,
                value: t
            }
              , a = Array.isArray(e) ? e : [t, e]
              , s = function(t, e) {
                return t.map((t=>t * e))
            }(r && r.length === a.length ? r : function(t) {
                const e = t.length;
                return t.map(((t,n)=>0 !== n ? n / (e - 1) : 0))
            }(a), o);
            function u() {
                return de(s, a, {
                    ease: Array.isArray(n) ? n : Me(a, n)
                })
            }
            let l = u();
            return {
                next: t=>(i.value = l(t),
                i.done = t >= o,
                i),
                flipTarget: ()=>{
                    a.reverse(),
                    l = u()
                }
            }
        }
        const Le = {
            keyframes: Re,
            spring: vt,
            decay: function({velocity: t=0, from: e=0, power: n=.8, timeConstant: r=350, restDelta: o=.5, modifyTarget: i}) {
                const a = {
                    done: !1,
                    value: e
                };
                let s = n * t;
                const u = e + s
                  , l = void 0 === i ? u : i(u);
                return l !== u && (s = l - e),
                {
                    next: t=>{
                        const e = -s * Math.exp(-t / r);
                        return a.done = !(e > o || e < -o),
                        a.value = a.done ? l : l + e,
                        a
                    }
                    ,
                    flipTarget: ()=>{}
                }
            }
        };
        function je(t, e, n=0) {
            return t - e - n
        }
        const Oe = t=>{
            const e = ({delta: e})=>t(e);
            return {
                start: ()=>J.update(e, !0),
                stop: ()=>Y.update(e)
            }
        }
        ;
        function ke(t) {
            var e, n, {from: r, autoplay: o=!0, driver: i=Oe, elapsed: s=0, repeat: u=0, repeatType: l="loop", repeatDelay: c=0, onPlay: d, onStop: f, onComplete: p, onRepeat: v, onUpdate: h} = t, m = a(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
            let y, g, x, {to: b} = m, w = 0, E = m.duration, S = !1, A = !0;
            const P = function(t) {
                if (Array.isArray(t.to))
                    return Re;
                if (Le[t.type])
                    return Le[t.type];
                const e = new Set(Object.keys(t));
                return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? Re : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? vt : Re
            }(m);
            (null === (n = (e = P).needsInterpolation) || void 0 === n ? void 0 : n.call(e, r, b)) && (x = de([0, 100], [r, b], {
                clamp: !1
            }),
            r = 0,
            b = 100);
            const T = P(Object.assign(Object.assign({}, m), {
                from: r,
                to: b
            }));
            function C() {
                w++,
                "reverse" === l ? (A = w % 2 === 0,
                s = function(t, e, n=0, r=!0) {
                    return r ? je(e + -t, e, n) : e - (t - e) + n
                }(s, E, c, A)) : (s = je(s, E, c),
                "mirror" === l && T.flipTarget()),
                S = !1,
                v && v()
            }
            function V(t) {
                if (A || (t = -t),
                s += t,
                !S) {
                    const t = T.next(Math.max(0, s));
                    g = t.value,
                    x && (g = x(g)),
                    S = A ? t.done : s <= 0
                }
                null === h || void 0 === h || h(g),
                S && (0 === w && (null !== E && void 0 !== E || (E = s)),
                w < u ? function(t, e, n, r) {
                    return r ? t >= e + n : t <= -n
                }(s, E, c, A) && C() : (y.stop(),
                p && p()))
            }
            return o && (null === d || void 0 === d || d(),
            y = i(V),
            y.start()),
            {
                stop: ()=>{
                    null === f || void 0 === f || f(),
                    y.stop()
                }
            }
        }
        var De = function(t) {
            return 1e3 * t
        };
        const Ie = (t,e)=>1 - 3 * e + 3 * t
          , Fe = (t,e)=>3 * e - 6 * t
          , Be = t=>3 * t
          , Ue = (t,e,n)=>((Ie(e, n) * t + Fe(e, n)) * t + Be(e)) * t
          , ze = (t,e,n)=>3 * Ie(e, n) * t * t + 2 * Fe(e, n) * t + Be(e);
        const Ne = .1;
        function _e(t, e, n, r) {
            if (t === e && n === r)
                return he;
            const o = new Float32Array(11);
            for (let a = 0; a < 11; ++a)
                o[a] = Ue(a * Ne, t, n);
            function i(e) {
                let r = 0
                  , i = 1;
                for (; 10 !== i && o[i] <= e; ++i)
                    r += Ne;
                --i;
                const a = r + (e - o[i]) / (o[i + 1] - o[i]) * Ne
                  , s = ze(a, t, n);
                return s >= .001 ? function(t, e, n, r) {
                    for (let o = 0; o < 8; ++o) {
                        const o = ze(e, n, r);
                        if (0 === o)
                            return e;
                        e -= (Ue(e, n, r) - t) / o
                    }
                    return e
                }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
                    let i, a, s = 0;
                    do {
                        a = e + (n - e) / 2,
                        i = Ue(a, r, o) - t,
                        i > 0 ? n = a : e = a
                    } while (Math.abs(i) > 1e-7 && ++s < 10);
                    return a
                }(e, r, r + Ne, t, n)
            }
            return t=>0 === t || 1 === t ? t : Ue(i(t), e, r)
        }
        var He = {
            linear: he,
            easeIn: me,
            easeInOut: xe,
            easeOut: ge,
            circIn: be,
            circInOut: Ee,
            circOut: we,
            backIn: Se,
            backInOut: Pe,
            backOut: Ae,
            anticipate: Te,
            bounceIn: Ve,
            bounceInOut: t=>t < .5 ? .5 * (1 - Ce(1 - 2 * t)) : .5 * Ce(2 * t - 1) + .5,
            bounceOut: Ce
        }
          , We = function(t) {
            if (Array.isArray(t)) {
                t.length;
                var e = s(t, 4);
                return _e(e[0], e[1], e[2], e[3])
            }
            return "string" === typeof t ? ("Invalid easing type '".concat(t, "'"),
            He[t]) : t
        }
          , qe = function(t, e) {
            return "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !te.test(e) || e.startsWith("url(")))
        }
          , Ye = function(t) {
            return Array.isArray(t)
        }
          , Xe = function() {
            return {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            }
        }
          , Ge = function(t) {
            return {
                type: "spring",
                stiffness: 550,
                damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }
        }
          , Ze = function() {
            return {
                type: "keyframes",
                ease: "linear",
                duration: .3
            }
        }
          , Ke = function(t) {
            return {
                type: "keyframes",
                duration: .8,
                values: t
            }
        }
          , $e = {
            x: Xe,
            y: Xe,
            z: Xe,
            rotate: Xe,
            rotateX: Xe,
            rotateY: Xe,
            rotateZ: Xe,
            scaleX: Ge,
            scaleY: Ge,
            scale: Ge,
            opacity: Ze,
            backgroundColor: Ze,
            color: Ze,
            default: Ge
        };
        const Je = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function Qe(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            const [r] = n.match(xt) || [];
            if (!r)
                return t;
            const o = n.replace(r, "");
            let i = Je.has(e) ? 1 : 0;
            return r !== n && (i *= 100),
            e + "(" + i + o + ")"
        }
        const tn = /([a-z-]*)\(.*?\)/g
          , en = Object.assign(Object.assign({}, te), {
            getAnimatableNone: t=>{
                const e = t.match(tn);
                return e ? e.map(Qe).join(" ") : t
            }
        });
        var nn = i(i({}, St), {
            transform: Math.round
        })
          , rn = {
            borderWidth: Dt,
            borderTopWidth: Dt,
            borderRightWidth: Dt,
            borderBottomWidth: Dt,
            borderLeftWidth: Dt,
            borderRadius: Dt,
            radius: Dt,
            borderTopLeftRadius: Dt,
            borderTopRightRadius: Dt,
            borderBottomRightRadius: Dt,
            borderBottomLeftRadius: Dt,
            width: Dt,
            maxWidth: Dt,
            height: Dt,
            maxHeight: Dt,
            size: Dt,
            top: Dt,
            right: Dt,
            bottom: Dt,
            left: Dt,
            padding: Dt,
            paddingTop: Dt,
            paddingRight: Dt,
            paddingBottom: Dt,
            paddingLeft: Dt,
            margin: Dt,
            marginTop: Dt,
            marginRight: Dt,
            marginBottom: Dt,
            marginLeft: Dt,
            rotate: Ot,
            rotateX: Ot,
            rotateY: Ot,
            rotateZ: Ot,
            scale: Pt,
            scaleX: Pt,
            scaleY: Pt,
            scaleZ: Pt,
            skew: Ot,
            skewX: Ot,
            skewY: Ot,
            distance: Dt,
            translateX: Dt,
            translateY: Dt,
            translateZ: Dt,
            x: Dt,
            y: Dt,
            z: Dt,
            perspective: Dt,
            transformPerspective: Dt,
            opacity: At,
            originX: Bt,
            originY: Bt,
            originZ: Dt,
            zIndex: nn,
            fillOpacity: At,
            strokeOpacity: At,
            numOctaves: nn
        }
          , on = i(i({}, rn), {
            color: Xt,
            backgroundColor: Xt,
            outlineColor: Xt,
            fill: Xt,
            stroke: Xt,
            borderColor: Xt,
            borderTopColor: Xt,
            borderRightColor: Xt,
            borderBottomColor: Xt,
            borderLeftColor: Xt,
            filter: en,
            WebkitFilter: en
        })
          , an = function(t) {
            return on[t]
        };
        function sn(t, e) {
            var n, r = an(t);
            return r !== en && (r = te),
            null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
        }
        var un = !1
          , ln = function(t) {
            return Ye(t) ? t[t.length - 1] || 0 : t
        };
        function cn(t) {
            var e = t.ease
              , n = t.times
              , r = t.yoyo
              , o = t.flip
              , s = t.loop
              , u = a(t, ["ease", "times", "yoyo", "flip", "loop"])
              , l = i({}, u);
            return n && (l.offset = n),
            u.duration && (l.duration = De(u.duration)),
            u.repeatDelay && (l.repeatDelay = De(u.repeatDelay)),
            e && (l.ease = function(t) {
                return Array.isArray(t) && "number" !== typeof t[0]
            }(e) ? e.map(We) : We(e)),
            "tween" === u.type && (l.type = "keyframes"),
            (r || s || o) && (!0,
            r ? l.repeatType = "reverse" : s ? l.repeatType = "loop" : o && (l.repeatType = "mirror"),
            l.repeat = s || r || o || u.repeat),
            "spring" !== u.type && (l.type = "keyframes"),
            l
        }
        function dn(t, e, n) {
            var r;
            return Array.isArray(e.to) && (null !== (r = t.duration) && void 0 !== r || (t.duration = .8)),
            function(t) {
                Array.isArray(t.to) && null === t.to[0] && (t.to = u([], s(t.to), !1),
                t.to[0] = t.from)
            }(e),
            function(t) {
                t.when,
                t.delay,
                t.delayChildren,
                t.staggerChildren,
                t.staggerDirection,
                t.repeat,
                t.repeatType,
                t.repeatDelay,
                t.from;
                var e = a(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(e).length
            }(t) || (t = i(i({}, t), function(t, e) {
                var n;
                return n = Ye(e) ? Ke : $e[t] || $e.default,
                i({
                    to: e
                }, n(e))
            }(n, e.to))),
            i(i({}, e), cn(t))
        }
        function fn(t, e, n, r, o) {
            var a, s = hn(r, t), u = null !== (a = s.from) && void 0 !== a ? a : e.get(), l = qe(t, n);
            "none" === u && l && "string" === typeof n ? u = sn(t, n) : pn(u) && "string" === typeof n ? u = vn(n) : !Array.isArray(n) && pn(n) && "string" === typeof u && (n = vn(u));
            var c = qe(t, u);
            return "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property."),
            c && l && !1 !== s.type ? function() {
                var r = {
                    from: u,
                    to: n,
                    velocity: e.getVelocity(),
                    onComplete: o,
                    onUpdate: function(t) {
                        return e.set(t)
                    }
                };
                return "inertia" === s.type || "decay" === s.type ? function({from: t=0, velocity: e=0, min: n, max: r, power: o=.8, timeConstant: i=750, bounceStiffness: a=500, bounceDamping: s=10, restDelta: u=1, modifyTarget: l, driver: c, onUpdate: d, onComplete: f, onStop: p}) {
                    let v;
                    function h(t) {
                        return void 0 !== n && t < n || void 0 !== r && t > r
                    }
                    function m(t) {
                        return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
                    }
                    function y(t) {
                        null === v || void 0 === v || v.stop(),
                        v = ke(Object.assign(Object.assign({}, t), {
                            driver: c,
                            onUpdate: e=>{
                                var n;
                                null === d || void 0 === d || d(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            }
                            ,
                            onComplete: f,
                            onStop: p
                        }))
                    }
                    function g(t) {
                        y(Object.assign({
                            type: "spring",
                            stiffness: a,
                            damping: s,
                            restDelta: u
                        }, t))
                    }
                    if (h(t))
                        g({
                            from: t,
                            velocity: e,
                            to: m(t)
                        });
                    else {
                        let r = o * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = m(r)
                          , s = a === n ? -1 : 1;
                        let c, d;
                        const f = t=>{
                            c = d,
                            d = t,
                            e = tt(t - c, $().delta),
                            (1 === s && t > a || -1 === s && t < a) && g({
                                from: t,
                                to: a,
                                velocity: e
                            })
                        }
                        ;
                        y({
                            type: "decay",
                            from: t,
                            velocity: e,
                            timeConstant: i,
                            power: o,
                            restDelta: u,
                            modifyTarget: l,
                            onUpdate: h(r) ? f : void 0
                        })
                    }
                    return {
                        stop: ()=>null === v || void 0 === v ? void 0 : v.stop()
                    }
                }(i(i({}, r), s)) : ke(i(i({}, dn(s, r, t)), {
                    onUpdate: function(t) {
                        var e;
                        r.onUpdate(t),
                        null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
                    },
                    onComplete: function() {
                        var t;
                        r.onComplete(),
                        null === (t = s.onComplete) || void 0 === t || t.call(s)
                    }
                }))
            }
            : function() {
                var t, r, i = ln(n);
                return e.set(i),
                o(),
                null === (t = null === s || void 0 === s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, i),
                null === (r = null === s || void 0 === s ? void 0 : s.onComplete) || void 0 === r || r.call(s),
                {
                    stop: function() {}
                }
            }
        }
        function pn(t) {
            return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function vn(t) {
            return "number" === typeof t ? 0 : sn("", t)
        }
        function hn(t, e) {
            return t[e] || t.default || t
        }
        function mn(t, e, n, r) {
            return void 0 === r && (r = {}),
            un && (r = {
                type: !1
            }),
            e.start((function(o) {
                var i, a, s = fn(t, e, n, r, o), u = function(t, e) {
                    var n, r;
                    return null !== (r = null !== (n = (hn(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
                }(r, t), l = function() {
                    return a = s()
                };
                return u ? i = window.setTimeout(l, De(u)) : l(),
                function() {
                    clearTimeout(i),
                    null === a || void 0 === a || a.stop()
                }
            }
            ))
        }
        var yn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , gn = yn.length
          , xn = function(t) {
            return "string" === typeof t ? parseFloat(t) : t
        }
          , bn = function(t) {
            return "number" === typeof t || Dt.test(t)
        };
        function wn(t, e) {
            var n;
            return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
        }
        var En = An(0, .5, we)
          , Sn = An(.5, .95, he);
        function An(t, e, n) {
            return function(r) {
                return r < t ? 0 : r > e ? 1 : n(mt(t, e, r))
            }
        }
        function Pn(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function Tn(t, e) {
            Pn(t.x, e.x),
            Pn(t.y, e.y)
        }
        function Cn(t) {
            return void 0 === t || 1 === t
        }
        function Vn(t) {
            var e = t.scale
              , n = t.scaleX
              , r = t.scaleY;
            return !Cn(e) || !Cn(n) || !Cn(r)
        }
        function Mn(t) {
            return Vn(t) || Rn(t.x) || Rn(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function Rn(t) {
            return t && "0%" !== t
        }
        function Ln(t, e, n) {
            return n + e * (t - n)
        }
        function jn(t, e, n, r, o) {
            return void 0 !== o && (t = Ln(t, o, r)),
            Ln(t, n, r) + e
        }
        function On(t, e, n, r, o) {
            void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            t.min = jn(t.min, e, n, r, o),
            t.max = jn(t.max, e, n, r, o)
        }
        function kn(t, e) {
            var n = e.x
              , r = e.y;
            On(t.x, n.translate, n.scale, n.originPoint),
            On(t.y, r.translate, r.scale, r.originPoint)
        }
        function Dn(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function In(t, e, n) {
            var r = s(n, 3)
              , o = r[0]
              , i = r[1]
              , a = r[2]
              , u = void 0 !== e[a] ? e[a] : .5
              , l = Q(t.min, t.max, u);
            On(t, e[o], e[i], l, e.scale)
        }
        var Fn = ["x", "scaleX", "originX"]
          , Bn = ["y", "scaleY", "originY"];
        function Un(t, e) {
            In(t.x, e, Fn),
            In(t.y, e, Bn)
        }
        const zn = t=>t.hasOwnProperty("x") && t.hasOwnProperty("y")
          , Nn = t=>zn(t) && t.hasOwnProperty("z")
          , _n = (t,e)=>Math.abs(t - e);
        function Hn(t, e) {
            if (ee(t) && ee(e))
                return _n(t, e);
            if (zn(t) && zn(e)) {
                const n = _n(t.x, e.x)
                  , r = _n(t.y, e.y)
                  , o = Nn(t) && Nn(e) ? _n(t.z, e.z) : 0;
                return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
            }
        }
        function Wn(t) {
            return t.max - t.min
        }
        function qn(t, e, n) {
            return void 0 === e && (e = 0),
            void 0 === n && (n = .01),
            Hn(t, e) < n
        }
        function Yn(t, e, n, r) {
            void 0 === r && (r = .5),
            t.origin = r,
            t.originPoint = Q(e.min, e.max, t.origin),
            t.scale = Wn(n) / Wn(e),
            (qn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = Q(n.min, n.max, t.origin) - t.originPoint,
            (qn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function Xn(t, e, n, r) {
            Yn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
            Yn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
        }
        function Gn(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + Wn(e)
        }
        function Zn(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + Wn(e)
        }
        function Kn(t, e, n) {
            Zn(t.x, e.x, n.x),
            Zn(t.y, e.y, n.y)
        }
        function $n(t, e, n, r, o) {
            return t = Ln(t -= e, 1 / n, r),
            void 0 !== o && (t = Ln(t, 1 / o, r)),
            t
        }
        function Jn(t, e, n, r, o) {
            var i = s(n, 3)
              , a = i[0]
              , u = i[1]
              , l = i[2];
            !function(t, e, n, r, o, i, a) {
                if (void 0 === e && (e = 0),
                void 0 === n && (n = 1),
                void 0 === r && (r = .5),
                void 0 === i && (i = t),
                void 0 === a && (a = t),
                kt.test(e) && (e = parseFloat(e),
                e = Q(a.min, a.max, e / 100) - a.min),
                "number" === typeof e) {
                    var s = Q(i.min, i.max, r);
                    t === i && (s -= e),
                    t.min = $n(t.min, e, n, s, o),
                    t.max = $n(t.max, e, n, s, o)
                }
            }(t, e[a], e[u], e[l], e.scale, r, o)
        }
        var Qn = ["x", "scaleX", "originX"]
          , tr = ["y", "scaleY", "originY"];
        function er(t, e, n, r) {
            Jn(t.x, e, Qn, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x),
            Jn(t.y, e, tr, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
        }
        function nr(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function rr(t) {
            return nr(t.x) && nr(t.y)
        }
        function or(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }
        var ir = function() {
            function t() {
                this.members = []
            }
            return t.prototype.add = function(t) {
                et(this.members, t),
                t.scheduleRender()
            }
            ,
            t.prototype.remove = function(t) {
                if (nt(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    var e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            ,
            t.prototype.relegate = function(t) {
                var e, n = this.members.findIndex((function(e) {
                    return t === e
                }
                ));
                if (0 === n)
                    return !1;
                for (var r = n; r >= 0; r--) {
                    var o = this.members[r];
                    if (!1 !== o.isPresent) {
                        e = o;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            ,
            t.prototype.promote = function(t, e) {
                var n, r = this.lead;
                t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r && (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                e && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues,
                t.snapshot.isShared = !0),
                (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()))
            }
            ,
            t.prototype.exitAnimationComplete = function() {
                this.members.forEach((function(t) {
                    var e, n, r, o, i;
                    null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                    null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                }
                ))
            }
            ,
            t.prototype.scheduleRender = function() {
                this.members.forEach((function(t) {
                    t.instance && t.scheduleRender(!1)
                }
                ))
            }
            ,
            t.prototype.removeLeadSnapshot = function() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
            ,
            t
        }()
          , ar = {};
        function sr(t, e, n) {
            var r = t.x.translate / e.x
              , o = t.y.translate / e.y
              , i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
            if (i += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "),
            n) {
                var a = n.rotate
                  , s = n.rotateX
                  , u = n.rotateY;
                a && (i += "rotate(".concat(a, "deg) ")),
                s && (i += "rotateX(".concat(s, "deg) ")),
                u && (i += "rotateY(".concat(u, "deg) "))
            }
            var l = t.x.scale * e.x
              , c = t.y.scale * e.y;
            return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (i += "scale(".concat(l, ", ").concat(c, ")")) ? "none" : i
        }
        function ur(t) {
            return [t("x"), t("y")]
        }
        var lr = ["", "X", "Y", "Z"]
          , cr = ["transformPerspective", "x", "y", "z"];
        function dr(t, e) {
            return cr.indexOf(t) - cr.indexOf(e)
        }
        ["translate", "scale", "rotate", "skew"].forEach((function(t) {
            return lr.forEach((function(e) {
                return cr.push(t + e)
            }
            ))
        }
        ));
        var fr = new Set(cr);
        function pr(t) {
            return fr.has(t)
        }
        var vr = new Set(["originX", "originY", "originZ"]);
        function hr(t) {
            return vr.has(t)
        }
        var mr = function(t, e) {
            return t.depth - e.depth
        }
          , yr = function() {
            function t() {
                this.children = [],
                this.isDirty = !1
            }
            return t.prototype.add = function(t) {
                et(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.remove = function(t) {
                nt(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.forEach = function(t) {
                this.isDirty && this.children.sort(mr),
                this.isDirty = !1,
                this.children.forEach(t)
            }
            ,
            t
        }();
        function gr(t) {
            var e, n = at(t) ? t.get() : t;
            return e = n,
            Boolean(e && "object" === typeof e && e.mix && e.toValue) ? n.toValue() : n
        }
        var xr = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function br(t) {
            var e = t.attachResizeListener
              , n = t.defaultParent
              , r = t.measureScroll
              , o = t.checkIsScrollRoot
              , a = t.resetTransform;
            return function() {
                function t(t, e, r) {
                    var o = this;
                    void 0 === e && (e = {}),
                    void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = function() {
                        o.isUpdating && (o.isUpdating = !1,
                        o.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = function() {
                        o.nodes.forEach(Cr),
                        o.nodes.forEach(Vr)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.id = t,
                    this.latestValues = e,
                    this.root = r ? r.root || r : this,
                    this.path = r ? u(u([], s(r.path), !1), [r], !1) : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (var i = 0; i < this.path.length; i++)
                        this.path[i].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new yr)
                }
                return t.prototype.addEventListener = function(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rt),
                    this.eventHandlers.get(t).add(e)
                }
                ,
                t.prototype.notifyListeners = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    var r = this.eventHandlers.get(t);
                    null === r || void 0 === r || r.notify.apply(r, u([], s(e), !1))
                }
                ,
                t.prototype.hasListeners = function(t) {
                    return this.eventHandlers.has(t)
                }
                ,
                t.prototype.registerPotentialNode = function(t, e) {
                    this.potentialNodes.set(t, e)
                }
                ,
                t.prototype.mount = function(t, n) {
                    var r, o = this;
                    if (void 0 === n && (n = !1),
                    !this.instance) {
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName,
                        this.instance = t;
                        var a = this.options
                          , s = a.layoutId
                          , u = a.layout
                          , l = a.visualElement;
                        if (l && !l.getInstance() && l.mount(t),
                        this.root.nodes.add(this),
                        null === (r = this.parent) || void 0 === r || r.children.add(this),
                        this.id && this.root.potentialNodes.delete(this.id),
                        n && (u || s) && (this.isLayoutDirty = !0),
                        e) {
                            var c, d = function() {
                                return o.root.updateBlockedByResize = !1
                            };
                            e(t, (function() {
                                o.root.updateBlockedByResize = !0,
                                clearTimeout(c),
                                c = window.setTimeout(d, 250),
                                xr.hasAnimatedSinceResize && (xr.hasAnimatedSinceResize = !1,
                                o.nodes.forEach(Tr))
                            }
                            ))
                        }
                        s && this.root.registerSharedNode(s, this),
                        !1 !== this.options.animate && l && (s || u) && this.addEventListener("didUpdate", (function(t) {
                            var e, n, r, a, s, u = t.delta, c = t.hasLayoutChanged, d = t.hasRelativeTargetChanged, f = t.layout;
                            if (o.isTreeAnimationBlocked())
                                return o.target = void 0,
                                void (o.relativeTarget = void 0);
                            var p = null !== (n = null !== (e = o.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : kr
                              , v = l.getProps()
                              , h = v.onLayoutAnimationStart
                              , m = v.onLayoutAnimationComplete
                              , y = !o.targetLayout || !or(o.targetLayout, f) || d
                              , g = !c && d;
                            if ((null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || g || c && (y || !o.currentAnimation)) {
                                o.resumeFrom && (o.resumingFrom = o.resumeFrom,
                                o.resumingFrom.resumingFrom = void 0),
                                o.setAnimationOrigin(u, g);
                                var x = i(i({}, hn(p, "layout")), {
                                    onPlay: h,
                                    onComplete: m
                                });
                                l.shouldReduceMotion && (x.delay = 0,
                                x.type = !1),
                                o.startAnimation(x)
                            } else
                                c || 0 !== o.animationProgress || o.finishAnimation(),
                                o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a));
                            o.targetLayout = f
                        }
                        ))
                    }
                }
                ,
                t.prototype.unmount = function() {
                    var t, e;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) || void 0 === t || t.remove(this),
                    null === (e = this.parent) || void 0 === e || e.children.delete(this),
                    this.instance = void 0,
                    Y.preRender(this.updateProjection)
                }
                ,
                t.prototype.blockUpdate = function() {
                    this.updateManuallyBlocked = !0
                }
                ,
                t.prototype.unblockUpdate = function() {
                    this.updateManuallyBlocked = !1
                }
                ,
                t.prototype.isUpdateBlocked = function() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                ,
                t.prototype.isTreeAnimationBlocked = function() {
                    var t;
                    return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                }
                ,
                t.prototype.startUpdate = function() {
                    var t;
                    this.isUpdateBlocked() || (this.isUpdating = !0,
                    null === (t = this.nodes) || void 0 === t || t.forEach(Mr))
                }
                ,
                t.prototype.willUpdate = function(t) {
                    var e, n, r;
                    if (void 0 === t && (t = !0),
                    this.root.isUpdateBlocked())
                        null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                    else if (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty) {
                        this.isLayoutDirty = !0;
                        for (var o = 0; o < this.path.length; o++) {
                            var i = this.path[o];
                            i.shouldResetTransform = !0,
                            i.updateScroll()
                        }
                        var a = this.options
                          , s = a.layoutId
                          , u = a.layout;
                        if (void 0 !== s || u) {
                            var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                            this.prevTransformTemplateValue = null === l || void 0 === l ? void 0 : l(this.latestValues, ""),
                            this.updateSnapshot(),
                            t && this.notifyListeners("willUpdate")
                        }
                    }
                }
                ,
                t.prototype.didUpdate = function() {
                    if (this.isUpdateBlocked())
                        return this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        void this.nodes.forEach(Ar);
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(Dr),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(Pr),
                    this.nodes.forEach(wr),
                    this.nodes.forEach(Er),
                    this.clearAllSnapshots(),
                    X.update(),
                    X.preRender(),
                    X.render())
                }
                ,
                t.prototype.clearAllSnapshots = function() {
                    this.nodes.forEach(Sr),
                    this.sharedNodes.forEach(Rr)
                }
                ,
                t.prototype.scheduleUpdateProjection = function() {
                    J.preRender(this.updateProjection, !1, !0)
                }
                ,
                t.prototype.scheduleCheckAfterUnmount = function() {
                    var t = this;
                    J.postRender((function() {
                        t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                    }
                    ))
                }
                ,
                t.prototype.updateSnapshot = function() {
                    if (!this.snapshot && this.instance) {
                        var t = this.measure()
                          , e = this.removeTransform(this.removeElementScroll(t));
                        Fr(e),
                        this.snapshot = {
                            measured: t,
                            layout: e,
                            latestValues: {}
                        }
                    }
                }
                ,
                t.prototype.updateLayout = function() {
                    var t;
                    if (this.instance && (this.updateScroll(),
                    this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (var e = 0; e < this.path.length; e++) {
                                this.path[e].updateScroll()
                            }
                        var n = this.measure();
                        Fr(n);
                        var r = this.layout;
                        this.layout = {
                            measured: n,
                            actual: this.removeElementScroll(n)
                        },
                        this.layoutCorrected = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.isLayoutDirty = !1,
                        this.projectionDelta = void 0,
                        this.notifyListeners("measure", this.layout.actual),
                        null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                    }
                }
                ,
                t.prototype.updateScroll = function() {
                    this.options.layoutScroll && this.instance && (this.isScrollRoot = o(this.instance),
                    this.scroll = r(this.instance))
                }
                ,
                t.prototype.resetTransform = function() {
                    var t;
                    if (a) {
                        var e = this.isLayoutDirty || this.shouldResetTransform
                          , n = this.projectionDelta && !rr(this.projectionDelta)
                          , r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate
                          , o = null === r || void 0 === r ? void 0 : r(this.latestValues, "")
                          , i = o !== this.prevTransformTemplateValue;
                        e && (n || Mn(this.latestValues) || i) && (a(this.instance, o),
                        this.shouldResetTransform = !1,
                        this.scheduleRender())
                    }
                }
                ,
                t.prototype.measure = function() {
                    var t = this.options.visualElement;
                    if (!t)
                        return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                    var e = t.measureViewportBox()
                      , n = this.root.scroll;
                    return n && (Dn(e.x, n.x),
                    Dn(e.y, n.y)),
                    e
                }
                ,
                t.prototype.removeElementScroll = function(t) {
                    var e = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Tn(e, t);
                    for (var n = 0; n < this.path.length; n++) {
                        var r = this.path[n]
                          , o = r.scroll
                          , i = r.options
                          , a = r.isScrollRoot;
                        if (r !== this.root && o && i.layoutScroll) {
                            if (a) {
                                Tn(e, t);
                                var s = this.root.scroll;
                                s && (Dn(e.x, -s.x),
                                Dn(e.y, -s.y))
                            }
                            Dn(e.x, o.x),
                            Dn(e.y, o.y)
                        }
                    }
                    return e
                }
                ,
                t.prototype.applyTransform = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Tn(n, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var o = this.path[r];
                        !e && o.options.layoutScroll && o.scroll && o !== o.root && Un(n, {
                            x: -o.scroll.x,
                            y: -o.scroll.y
                        }),
                        Mn(o.latestValues) && Un(n, o.latestValues)
                    }
                    return Mn(this.latestValues) && Un(n, this.latestValues),
                    n
                }
                ,
                t.prototype.removeTransform = function(t) {
                    var e, n = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Tn(n, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var o = this.path[r];
                        if (o.instance && Mn(o.latestValues)) {
                            Vn(o.latestValues) && o.updateSnapshot();
                            var i = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Tn(i, o.measure()),
                            er(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
                        }
                    }
                    return Mn(this.latestValues) && er(n, this.latestValues),
                    n
                }
                ,
                t.prototype.setTargetDelta = function(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection()
                }
                ,
                t.prototype.setOptions = function(t) {
                    var e;
                    this.options = i(i(i({}, this.options), t), {
                        crossfade: null === (e = t.crossfade) || void 0 === e || e
                    })
                }
                ,
                t.prototype.clearMeasurements = function() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                ,
                t.prototype.resolveTargetDelta = function() {
                    var t, e, n, r, o = this.options, i = o.layout, a = o.layoutId;
                    this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Kn(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    Tn(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target,
                    n = this.relativeTarget,
                    r = this.relativeParent.target,
                    Gn(e.x, n.x, r.x),
                    Gn(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Tn(this.target, this.layout.actual),
                    kn(this.target, this.targetDelta)) : Tn(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                    this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Kn(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                    Tn(this.relativeTarget, this.relativeTargetOrigin)))))
                }
                ,
                t.prototype.getClosestProjectingParent = function() {
                    if (this.parent && !Mn(this.parent.latestValues))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                ,
                t.prototype.calcProjection = function() {
                    var t, e = this.options, n = e.layout, r = e.layoutId;
                    if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (n || r)) {
                        var o = this.getLead();
                        Tn(this.layoutCorrected, this.layout.actual),
                        function(t, e, n, r) {
                            var o, i;
                            void 0 === r && (r = !1);
                            var a = n.length;
                            if (a) {
                                var s, u;
                                e.x = e.y = 1;
                                for (var l = 0; l < a; l++)
                                    u = (s = n[l]).projectionDelta,
                                    "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && Un(t, {
                                        x: -s.scroll.x,
                                        y: -s.scroll.y
                                    }),
                                    u && (e.x *= u.x.scale,
                                    e.y *= u.y.scale,
                                    kn(t, u)),
                                    r && Mn(s.latestValues) && Un(t, s.latestValues))
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                        var i = o.target;
                        if (i) {
                            this.projectionDelta || (this.projectionDelta = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            },
                            this.projectionDeltaWithTransform = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            });
                            var a = this.treeScale.x
                              , s = this.treeScale.y
                              , u = this.projectionTransform;
                            Xn(this.projectionDelta, this.layoutCorrected, i, this.latestValues),
                            this.projectionTransform = sr(this.projectionDelta, this.treeScale),
                            this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0,
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", i))
                        }
                    }
                }
                ,
                t.prototype.hide = function() {
                    this.isVisible = !1
                }
                ,
                t.prototype.show = function() {
                    this.isVisible = !0
                }
                ,
                t.prototype.scheduleRender = function(t) {
                    var e, n, r;
                    void 0 === t && (t = !0),
                    null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                    t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                ,
                t.prototype.setAnimationOrigin = function(t, e) {
                    var n, r = this;
                    void 0 === e && (e = !1);
                    var o = this.snapshot
                      , a = (null === o || void 0 === o ? void 0 : o.latestValues) || {}
                      , s = i({}, this.latestValues)
                      , u = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !e;
                    var l = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                      , c = null === o || void 0 === o ? void 0 : o.isShared
                      , d = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1
                      , f = Boolean(c && !d && !0 === this.options.crossfade && !this.path.some(Or));
                    this.animationProgress = 0,
                    this.mixTargetDelta = function(e) {
                        var n, o, i, p, v, h = e / 1e3;
                        Lr(u.x, t.x, h),
                        Lr(u.y, t.y, h),
                        r.setTargetDelta(u),
                        r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (Kn(l, r.layout.actual, r.relativeParent.layout.actual),
                        o = r.relativeTarget,
                        i = r.relativeTargetOrigin,
                        p = l,
                        v = h,
                        jr(o.x, i.x, p.x, v),
                        jr(o.y, i.y, p.y, v)),
                        c && (r.animationValues = s,
                        function(t, e, n, r, o, i) {
                            var a, s, u, l;
                            o ? (t.opacity = Q(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, En(r)),
                            t.opacityExit = Q(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, Sn(r))) : i && (t.opacity = Q(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                            for (var c = 0; c < gn; c++) {
                                var d = "border".concat(yn[c], "Radius")
                                  , f = wn(e, d)
                                  , p = wn(n, d);
                                void 0 === f && void 0 === p || (f || (f = 0),
                                p || (p = 0),
                                0 === f || 0 === p || bn(f) === bn(p) ? (t[d] = Math.max(Q(xn(f), xn(p), r), 0),
                                (kt.test(p) || kt.test(f)) && (t[d] += "%")) : t[d] = p)
                            }
                            (e.rotate || n.rotate) && (t.rotate = Q(e.rotate || 0, n.rotate || 0, r))
                        }(s, a, r.latestValues, h, f, d)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender(),
                        r.animationProgress = h
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                ,
                t.prototype.startAnimation = function(t) {
                    var e, n, r = this;
                    this.notifyListeners("animationStart"),
                    null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                    this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                    this.pendingAnimation && (Y.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = J.update((function() {
                        xr.hasAnimatedSinceResize = !0,
                        r.currentAnimation = function(t, e, n) {
                            void 0 === n && (n = {});
                            var r = at(t) ? t : it(t);
                            return mn("", r, e, n),
                            {
                                stop: function() {
                                    return r.stop()
                                },
                                isAnimating: function() {
                                    return r.isAnimating()
                                }
                            }
                        }(0, 1e3, i(i({}, t), {
                            onUpdate: function(e) {
                                var n;
                                r.mixTargetDelta(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            },
                            onComplete: function() {
                                var e;
                                null === (e = t.onComplete) || void 0 === e || e.call(t),
                                r.completeAnimation()
                            }
                        })),
                        r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                        r.pendingAnimation = void 0
                    }
                    ))
                }
                ,
                t.prototype.completeAnimation = function() {
                    var t;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                ,
                t.prototype.finishAnimation = function() {
                    var t;
                    this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                ,
                t.prototype.applyTransformsToTarget = function() {
                    var t = this.getLead()
                      , e = t.targetWithTransforms
                      , n = t.target
                      , r = t.layout
                      , o = t.latestValues;
                    e && n && r && (Tn(e, n),
                    Un(e, o),
                    Xn(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                }
                ,
                t.prototype.registerSharedNode = function(t, e) {
                    var n, r, o;
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new ir),
                    this.sharedNodes.get(t).add(e),
                    e.promote({
                        transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                        preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                    })
                }
                ,
                t.prototype.isLead = function() {
                    var t = this.getStack();
                    return !t || t.lead === this
                }
                ,
                t.prototype.getLead = function() {
                    var t;
                    return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                ,
                t.prototype.getPrevLead = function() {
                    var t;
                    return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                ,
                t.prototype.getStack = function() {
                    var t = this.options.layoutId;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                ,
                t.prototype.promote = function(t) {
                    var e = void 0 === t ? {} : t
                      , n = e.needsReset
                      , r = e.transition
                      , o = e.preserveFollowOpacity
                      , i = this.getStack();
                    i && i.promote(this, o),
                    n && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    r && this.setOptions({
                        transition: r
                    })
                }
                ,
                t.prototype.relegate = function() {
                    var t = this.getStack();
                    return !!t && t.relegate(this)
                }
                ,
                t.prototype.resetRotation = function() {
                    var t = this.options.visualElement;
                    if (t) {
                        for (var e = !1, n = {}, r = 0; r < lr.length; r++) {
                            var o = "rotate" + lr[r];
                            t.getStaticValue(o) && (e = !0,
                            n[o] = t.getStaticValue(o),
                            t.setStaticValue(o, 0))
                        }
                        if (e) {
                            for (var o in null === t || void 0 === t || t.syncRender(),
                            n)
                                t.setStaticValue(o, n[o]);
                            t.scheduleRender()
                        }
                    }
                }
                ,
                t.prototype.getProjectionStyles = function(t) {
                    var e, n, r, o, i, a;
                    void 0 === t && (t = {});
                    var s = {};
                    if (!this.instance || this.isSVG)
                        return s;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    s.visibility = "";
                    var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        s.opacity = "",
                        s.pointerEvents = gr(t.pointerEvents) || "",
                        s.transform = u ? u(this.latestValues, "") : "none",
                        s;
                    var l = this.getLead();
                    if (!this.projectionDelta || !this.layout || !l.target) {
                        var c = {};
                        return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1,
                        c.pointerEvents = gr(t.pointerEvents) || ""),
                        this.hasProjected && !Mn(this.latestValues) && (c.transform = u ? u({}, "") : "none",
                        this.hasProjected = !1),
                        c
                    }
                    var d = l.animationValues || l.latestValues;
                    this.applyTransformsToTarget(),
                    s.transform = sr(this.projectionDeltaWithTransform, this.treeScale, d),
                    u && (s.transform = u(d, s.transform));
                    var f = this.projectionDelta
                      , p = f.x
                      , v = f.y;
                    for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"),
                    l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = d.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = l === this ? null !== (i = d.opacity) && void 0 !== i ? i : "" : null !== (a = d.opacityExit) && void 0 !== a ? a : 0,
                    ar)
                        if (void 0 !== d[h]) {
                            var m = ar[h]
                              , y = m.correct
                              , g = m.applyTo
                              , x = y(d[h], l);
                            if (g)
                                for (var b = g.length, w = 0; w < b; w++)
                                    s[g[w]] = x;
                            else
                                s[h] = x
                        }
                    return this.options.layoutId && (s.pointerEvents = l === this ? gr(t.pointerEvents) || "" : "none"),
                    s
                }
                ,
                t.prototype.clearSnapshot = function() {
                    this.resumeFrom = this.snapshot = void 0
                }
                ,
                t.prototype.resetTree = function() {
                    this.root.nodes.forEach((function(t) {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    )),
                    this.root.nodes.forEach(Ar),
                    this.root.sharedNodes.clear()
                }
                ,
                t
            }()
        }
        function wr(t) {
            t.updateLayout()
        }
        function Er(t) {
            var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                var a = t.layout
                  , s = a.actual
                  , u = a.measured;
                "size" === t.options.animationType ? ur((function(t) {
                    var e = i.isShared ? i.measured[t] : i.layout[t]
                      , n = Wn(e);
                    e.min = s[t].min,
                    e.max = e.min + n
                }
                )) : "position" === t.options.animationType && ur((function(t) {
                    var e = i.isShared ? i.measured[t] : i.layout[t]
                      , n = Wn(s[t]);
                    e.max = e.min + n
                }
                ));
                var l = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                Xn(l, s, i.layout);
                var c = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                i.isShared ? Xn(c, t.applyTransform(u, !0), i.measured) : Xn(c, s, i.layout);
                var d = !rr(l)
                  , f = !1;
                if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(),
                t.relativeParent && !t.relativeParent.resumeFrom)) {
                    var p = t.relativeParent
                      , v = p.snapshot
                      , h = p.layout;
                    if (v && h) {
                        var m = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Kn(m, i.layout, v.layout);
                        var y = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Kn(y, s, h.actual),
                        or(m, y) || (f = !0)
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: s,
                    snapshot: i,
                    delta: c,
                    layoutDelta: l,
                    hasLayoutChanged: d,
                    hasRelativeTargetChanged: f
                })
            } else
                t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
            t.options.transition = void 0
        }
        function Sr(t) {
            t.clearSnapshot()
        }
        function Ar(t) {
            t.clearMeasurements()
        }
        function Pr(t) {
            var e = t.options.visualElement;
            (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(),
            t.resetTransform()
        }
        function Tr(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0
        }
        function Cr(t) {
            t.resolveTargetDelta()
        }
        function Vr(t) {
            t.calcProjection()
        }
        function Mr(t) {
            t.resetRotation()
        }
        function Rr(t) {
            t.removeLeadSnapshot()
        }
        function Lr(t, e, n) {
            t.translate = Q(e.translate, 0, n),
            t.scale = Q(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function jr(t, e, n, r) {
            t.min = Q(e.min, n.min, r),
            t.max = Q(e.max, n.max, r)
        }
        function Or(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        var kr = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function Dr(t, e) {
            for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                if (Boolean(t.path[r].instance)) {
                    n = t.path[r];
                    break
                }
            var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
            o && t.mount(o, !0)
        }
        function Ir(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function Fr(t) {
            Ir(t.x),
            Ir(t.y)
        }
        var Br = 1;
        var Ur = (0,
        l.createContext)({})
          , zr = (0,
        l.createContext)({});
        var Nr = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.getSnapshotBeforeUpdate = function() {
                return this.updateProps(),
                null
            }
            ,
            e.prototype.componentDidUpdate = function() {}
            ,
            e.prototype.updateProps = function() {
                var t = this.props
                  , e = t.visualElement
                  , n = t.props;
                e && e.setProps(n)
            }
            ,
            e.prototype.render = function() {
                return this.props.children
            }
            ,
            e
        }(l.Component);
        function _r(t) {
            var e = t.preloadedFeatures
              , n = t.createVisualElement
              , r = t.projectionNodeConstructor
              , o = t.useRender
              , a = t.useVisualState
              , s = t.Component;
            return e && function(t) {
                for (var e in t)
                    null !== t[e] && ("projectionNodeConstructor" === e ? p.projectionNodeConstructor = t[e] : p[e].Component = t[e])
            }(e),
            (0,
            l.forwardRef)((function(t, u) {
                var c = function(t) {
                    var e, n = t.layoutId, r = null === (e = (0,
                    l.useContext)(Ur)) || void 0 === e ? void 0 : e.id;
                    return r && void 0 !== n ? r + "-" + n : n
                }(t);
                t = i(i({}, t), {
                    layoutId: c
                });
                var f = (0,
                l.useContext)(y)
                  , x = null
                  , w = O(t)
                  , E = f.isStatic ? void 0 : D((function() {
                    if (xr.hasEverUpdated)
                        return Br++
                }
                ))
                  , S = a(t, f.isStatic);
                return !f.isStatic && b && (w.visualElement = P(s, S, i(i({}, f), t), n),
                function(t, e, n, r) {
                    var o, i = e.layoutId, a = e.layout, s = e.drag, u = e.dragConstraints, c = e.layoutScroll, d = (0,
                    l.useContext)(zr);
                    r && n && !(null === n || void 0 === n ? void 0 : n.projection) && (n.projection = new r(t,n.getLatestValues(),null === (o = n.parent) || void 0 === o ? void 0 : o.projection),
                    n.projection.setOptions({
                        layoutId: i,
                        layout: a,
                        alwaysMeasureLayout: Boolean(s) || u && T(u),
                        visualElement: n,
                        scheduleRender: function() {
                            return n.scheduleRender()
                        },
                        animationType: "string" === typeof a ? a : "both",
                        initialPromotionConfig: d,
                        layoutScroll: c
                    }))
                }(E, t, w.visualElement, r || p.projectionNodeConstructor),
                x = function(t, e, n) {
                    var r = []
                      , o = (0,
                    l.useContext)(v);
                    if (!e)
                        return null;
                    "production" !== d && n && o.strict;
                    for (var a = 0; a < m; a++) {
                        var s = h[a]
                          , u = p[s]
                          , c = u.isEnabled
                          , f = u.Component;
                        c(t) && f && r.push(l.createElement(f, i({
                            key: s
                        }, t, {
                            visualElement: e
                        })))
                    }
                    return r
                }(t, w.visualElement, e)),
                l.createElement(Nr, {
                    visualElement: w.visualElement,
                    props: i(i({}, f), t)
                }, x, l.createElement(g.Provider, {
                    value: w
                }, o(s, t, E, function(t, e, n) {
                    return (0,
                    l.useCallback)((function(r) {
                        var o;
                        r && (null === (o = t.mount) || void 0 === o || o.call(t, r)),
                        e && (r ? e.mount(r) : e.unmount()),
                        n && ("function" === typeof n ? n(r) : T(n) && (n.current = r))
                    }
                    ), [e])
                }(S, w.visualElement, u), S, f.isStatic, w.visualElement)))
            }
            ))
        }
        function Hr(t) {
            function e(e, n) {
                return void 0 === n && (n = {}),
                _r(t(e, n))
            }
            if ("undefined" === typeof Proxy)
                return e;
            var n = new Map;
            return new Proxy(e,{
                get: function(t, r) {
                    return n.has(r) || n.set(r, e(r)),
                    n.get(r)
                }
            })
        }
        var Wr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
        function qr(t) {
            return "string" === typeof t && !t.includes("-") && !!(Wr.indexOf(t) > -1 || /[A-Z]/.test(t))
        }
        function Yr(t, e) {
            var n = e.layout
              , r = e.layoutId;
            return pr(t) || hr(t) || (n || void 0 !== r) && (!!ar[t] || "opacity" === t)
        }
        var Xr = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        };
        function Gr(t) {
            return t.startsWith("--")
        }
        var Zr = function(t, e) {
            return e && "number" === typeof t ? e.transform(t) : t
        };
        function Kr(t, e, n, r) {
            var o, i = t.style, a = t.vars, s = t.transform, u = t.transformKeys, l = t.transformOrigin;
            u.length = 0;
            var c = !1
              , d = !1
              , f = !0;
            for (var p in e) {
                var v = e[p];
                if (Gr(p))
                    a[p] = v;
                else {
                    var h = rn[p]
                      , m = Zr(v, h);
                    if (pr(p)) {
                        if (c = !0,
                        s[p] = m,
                        u.push(p),
                        !f)
                            continue;
                        v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (f = !1)
                    } else
                        hr(p) ? (l[p] = m,
                        d = !0) : i[p] = m
                }
            }
            c ? i.transform = function(t, e, n, r) {
                var o = t.transform
                  , i = t.transformKeys
                  , a = e.enableHardwareAcceleration
                  , s = void 0 === a || a
                  , u = e.allowTransformNone
                  , l = void 0 === u || u
                  , c = "";
                i.sort(dr);
                for (var d = !1, f = i.length, p = 0; p < f; p++) {
                    var v = i[p];
                    c += "".concat(Xr[v] || v, "(").concat(o[v], ") "),
                    "z" === v && (d = !0)
                }
                return !d && s ? c += "translateZ(0)" : c = c.trim(),
                r ? c = r(o, n ? "" : c) : l && n && (c = "none"),
                c
            }(t, n, f, r) : r ? i.transform = r({}, "") : !e.transform && i.transform && (i.transform = "none"),
            d && (i.transformOrigin = function(t) {
                var e = t.originX
                  , n = void 0 === e ? "50%" : e
                  , r = t.originY
                  , o = void 0 === r ? "50%" : r
                  , i = t.originZ
                  , a = void 0 === i ? 0 : i;
                return "".concat(n, " ").concat(o, " ").concat(a)
            }(l))
        }
        var $r = function() {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }
        };
        function Jr(t, e, n) {
            for (var r in e)
                at(e[r]) || Yr(r, n) || (t[r] = e[r])
        }
        function Qr(t, e, n) {
            var r = {};
            return Jr(r, t.style || {}, t),
            Object.assign(r, function(t, e, n) {
                var r = t.transformTemplate;
                return (0,
                l.useMemo)((function() {
                    var t = {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {}
                    };
                    Kr(t, e, {
                        enableHardwareAcceleration: !n
                    }, r);
                    var o = t.style;
                    return i(i({}, t.vars), o)
                }
                ), [e])
            }(t, e, n)),
            t.transformValues && (r = t.transformValues(r)),
            r
        }
        function to(t, e, n) {
            var r = {}
              , o = Qr(t, e, n);
            return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1,
            o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
            o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")),
            r.style = o,
            r
        }
        var eo = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);
        function no(t) {
            return eo.has(t)
        }
        var ro, oo = function(t) {
            return !no(t)
        };
        try {
            (ro = require("@emotion/is-prop-valid").default) && (oo = function(t) {
                return t.startsWith("on") ? !no(t) : ro(t)
            }
            )
        } catch (Ra) {}
        function io(t, e, n) {
            return "string" === typeof t ? t : Dt.transform(e + n * t)
        }
        var ao = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , so = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function uo(t, e, n, r) {
            var o = e.attrX
              , i = e.attrY
              , s = e.originX
              , u = e.originY
              , l = e.pathLength
              , c = e.pathSpacing
              , d = void 0 === c ? 1 : c
              , f = e.pathOffset
              , p = void 0 === f ? 0 : f;
            Kr(t, a(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r),
            t.attrs = t.style,
            t.style = {};
            var v = t.attrs
              , h = t.style
              , m = t.dimensions;
            v.transform && (m && (h.transform = v.transform),
            delete v.transform),
            m && (void 0 !== s || void 0 !== u || h.transform) && (h.transformOrigin = function(t, e, n) {
                var r = io(e, t.x, t.width)
                  , o = io(n, t.y, t.height);
                return "".concat(r, " ").concat(o)
            }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)),
            void 0 !== o && (v.x = o),
            void 0 !== i && (v.y = i),
            void 0 !== l && function(t, e, n, r, o) {
                void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0),
                t.pathLength = 1;
                var i = o ? ao : so;
                t[i.offset] = Dt.transform(-r);
                var a = Dt.transform(e)
                  , s = Dt.transform(n);
                t[i.array] = "".concat(a, " ").concat(s)
            }(v, l, d, p, !1)
        }
        var lo = function() {
            return i(i({}, {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }), {
                attrs: {}
            })
        };
        function co(t, e) {
            var n = (0,
            l.useMemo)((function() {
                var n = lo();
                return uo(n, e, {
                    enableHardwareAcceleration: !1
                }, t.transformTemplate),
                i(i({}, n.attrs), {
                    style: i({}, n.style)
                })
            }
            ), [e]);
            if (t.style) {
                var r = {};
                Jr(r, t.style, t),
                n.style = i(i({}, r), n.style)
            }
            return n
        }
        function fo(t) {
            void 0 === t && (t = !1);
            return function(e, n, r, o, a, s) {
                var u = a.latestValues
                  , c = (qr(e) ? co : to)(n, u, s)
                  , d = function(t, e, n) {
                    var r = {};
                    for (var o in t)
                        (oo(o) || !0 === n && no(o) || !e && !no(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
                    return r
                }(n, "string" === typeof e, t)
                  , f = i(i(i({}, d), c), {
                    ref: o
                });
                return r && (f["data-projection-id"] = r),
                (0,
                l.createElement)(e, f)
            }
        }
        var po = /([a-z])([A-Z])/g
          , vo = function(t) {
            return t.replace(po, "$1-$2").toLowerCase()
        };
        function ho(t, e, n, r) {
            var o = e.style
              , i = e.vars;
            for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(a, i[a])
        }
        var mo = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
        function yo(t, e, n, r) {
            for (var o in ho(t, e, void 0, r),
            e.attrs)
                t.setAttribute(mo.has(o) ? o : vo(o), e.attrs[o])
        }
        function go(t) {
            var e = t.style
              , n = {};
            for (var r in e)
                (at(e[r]) || Yr(r, t)) && (n[r] = e[r]);
            return n
        }
        function xo(t) {
            var e = go(t);
            for (var n in t) {
                if (at(t[n]))
                    e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
            }
            return e
        }
        function bo(t) {
            return "object" === typeof t && "function" === typeof t.start
        }
        function wo(t, e, n, r) {
            var o = t.scrapeMotionValuesFromProps
              , i = t.createRenderState
              , a = t.onMount
              , s = {
                latestValues: So(e, n, r, o),
                renderState: i()
            };
            return a && (s.mount = function(t) {
                return a(e, t, s)
            }
            ),
            s
        }
        var Eo = function(t) {
            return function(e, n) {
                var r = (0,
                l.useContext)(g)
                  , o = (0,
                l.useContext)(x);
                return n ? wo(t, e, r, o) : D((function() {
                    return wo(t, e, r, o)
                }
                ))
            }
        };
        function So(t, e, n, r) {
            var o = {}
              , i = !1 === (null === n || void 0 === n ? void 0 : n.initial)
              , s = r(t);
            for (var u in s)
                o[u] = gr(s[u]);
            var l = t.initial
              , c = t.animate
              , d = L(t)
              , f = j(t);
            e && f && !d && !1 !== t.inherit && (null !== l && void 0 !== l || (l = e.initial),
            null !== c && void 0 !== c || (c = e.animate));
            var p = i || !1 === l
              , v = p ? c : l;
            v && "boolean" !== typeof v && !bo(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
                var n = M(t, e);
                if (n) {
                    var r = n.transitionEnd;
                    n.transition;
                    var i = a(n, ["transitionEnd", "transition"]);
                    for (var s in i) {
                        var u = i[s];
                        if (Array.isArray(u))
                            u = u[p ? u.length - 1 : 0];
                        null !== u && (o[s] = u)
                    }
                    for (var s in r)
                        o[s] = r[s]
                }
            }
            ));
            return o
        }
        var Ao, Po = {
            useVisualState: Eo({
                scrapeMotionValuesFromProps: xo,
                createRenderState: lo,
                onMount: function(t, e, n) {
                    var r = n.renderState
                      , o = n.latestValues;
                    try {
                        r.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (i) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    uo(r, o, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate),
                    yo(e, r)
                }
            })
        }, To = {
            useVisualState: Eo({
                scrapeMotionValuesFromProps: go,
                createRenderState: $r
            })
        };
        function Co(t, e, n, r) {
            return void 0 === r && (r = {
                passive: !0
            }),
            t.addEventListener(e, n, r),
            function() {
                return t.removeEventListener(e, n)
            }
        }
        function Vo(t, e, n, r) {
            (0,
            l.useEffect)((function() {
                var o = t.current;
                if (n && o)
                    return Co(o, e, n, r)
            }
            ), [t, e, n, r])
        }
        function Mo(t) {
            return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
        }
        function Ro(t) {
            return !!t.touches
        }
        !function(t) {
            t.Animate = "animate",
            t.Hover = "whileHover",
            t.Tap = "whileTap",
            t.Drag = "whileDrag",
            t.Focus = "whileFocus",
            t.InView = "whileInView",
            t.Exit = "exit"
        }(Ao || (Ao = {}));
        var Lo = {
            pageX: 0,
            pageY: 0
        };
        function jo(t, e) {
            void 0 === e && (e = "page");
            var n = t.touches[0] || t.changedTouches[0] || Lo;
            return {
                x: n[e + "X"],
                y: n[e + "Y"]
            }
        }
        function Oo(t, e) {
            return void 0 === e && (e = "page"),
            {
                x: t[e + "X"],
                y: t[e + "Y"]
            }
        }
        function ko(t, e) {
            return void 0 === e && (e = "page"),
            {
                point: Ro(t) ? jo(t, e) : Oo(t, e)
            }
        }
        var Do = function(t, e) {
            void 0 === e && (e = !1);
            var n, r = function(e) {
                return t(e, ko(e))
            };
            return e ? (n = r,
            function(t) {
                var e = t instanceof MouseEvent;
                (!e || e && 0 === t.button) && n(t)
            }
            ) : r
        }
          , Io = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , Fo = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function Bo(t) {
            return b && null === window.onpointerdown ? t : b && null === window.ontouchstart ? Fo[t] : b && null === window.onmousedown ? Io[t] : t
        }
        function Uo(t, e, n, r) {
            return Co(t, Bo(e), Do(n, "pointerdown" === e), r)
        }
        function zo(t, e, n, r) {
            return Vo(t, Bo(e), n && Do(n, "pointerdown" === e), r)
        }
        function No(t) {
            var e = null;
            return function() {
                return null === e && (e = t,
                function() {
                    e = null
                }
                )
            }
        }
        var _o = No("dragHorizontal")
          , Ho = No("dragVertical");
        function Wo(t) {
            var e = !1;
            if ("y" === t)
                e = Ho();
            else if ("x" === t)
                e = _o();
            else {
                var n = _o()
                  , r = Ho();
                n && r ? e = function() {
                    n(),
                    r()
                }
                : (n && n(),
                r && r())
            }
            return e
        }
        function qo() {
            var t = Wo(!0);
            return !t || (t(),
            !1)
        }
        function Yo(t, e, n) {
            return function(r, o) {
                var i;
                Mo(r) && !qo() && (null === (i = t.animationState) || void 0 === i || i.setActive(Ao.Hover, e),
                null === n || void 0 === n || n(r, o))
            }
        }
        var Xo = function(t, e) {
            return !!e && (t === e || Xo(t, e.parentElement))
        };
        function Go(t) {
            return (0,
            l.useEffect)((function() {
                return function() {
                    return t()
                }
            }
            ), [])
        }
        var Zo = new Set;
        var Ko = new WeakMap
          , $o = new WeakMap
          , Jo = function(t) {
            var e;
            null === (e = Ko.get(t.target)) || void 0 === e || e(t)
        }
          , Qo = function(t) {
            t.forEach(Jo)
        };
        function ti(t, e, n) {
            var r = function(t) {
                var e = t.root
                  , n = a(t, ["root"])
                  , r = e || document;
                $o.has(r) || $o.set(r, {});
                var o = $o.get(r)
                  , s = JSON.stringify(n);
                return o[s] || (o[s] = new IntersectionObserver(Qo,i({
                    root: e
                }, n))),
                o[s]
            }(e);
            return Ko.set(t, n),
            r.observe(t),
            function() {
                Ko.delete(t),
                r.unobserve(t)
            }
        }
        var ei = {
            some: 0,
            all: 1
        };
        function ni(t, e, n, r) {
            var o = r.root
              , i = r.margin
              , a = r.amount
              , s = void 0 === a ? "some" : a
              , u = r.once;
            (0,
            l.useEffect)((function() {
                if (t) {
                    var r = {
                        root: null === o || void 0 === o ? void 0 : o.current,
                        rootMargin: i,
                        threshold: "number" === typeof s ? s : ei[s]
                    };
                    return ti(n.getInstance(), r, (function(t) {
                        var r, o = t.isIntersecting;
                        if (e.isInView !== o && (e.isInView = o,
                        !u || o || !e.hasEnteredView)) {
                            o && (e.hasEnteredView = !0),
                            null === (r = n.animationState) || void 0 === r || r.setActive(Ao.InView, o);
                            var i = n.getProps()
                              , a = o ? i.onViewportEnter : i.onViewportLeave;
                            null === a || void 0 === a || a(t)
                        }
                    }
                    ))
                }
            }
            ), [t, o, i, s])
        }
        function ri(t, e, n, r) {
            var o = r.fallback
              , i = void 0 === o || o;
            (0,
            l.useEffect)((function() {
                var r, o;
                t && i && ("production" !== d && (r = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.",
                !1 || Zo.has(r) || (console.warn(r),
                o && console.warn(o),
                Zo.add(r))),
                requestAnimationFrame((function() {
                    var t;
                    e.hasEnteredView = !0;
                    var r = n.getProps().onViewportEnter;
                    null === r || void 0 === r || r(null),
                    null === (t = n.animationState) || void 0 === t || t.setActive(Ao.InView, !0)
                }
                )))
            }
            ), [t])
        }
        var oi = function(t) {
            return function(e) {
                return t(e),
                null
            }
        }
          , ii = {
            inView: oi((function(t) {
                var e = t.visualElement
                  , n = t.whileInView
                  , r = t.onViewportEnter
                  , o = t.onViewportLeave
                  , i = t.viewport
                  , a = void 0 === i ? {} : i
                  , s = (0,
                l.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , u = Boolean(n || r || o);
                a.once && s.current.hasEnteredView && (u = !1),
                ("undefined" === typeof IntersectionObserver ? ri : ni)(u, s.current, e, a)
            }
            )),
            tap: oi((function(t) {
                var e = t.onTap
                  , n = t.onTapStart
                  , r = t.onTapCancel
                  , o = t.whileTap
                  , i = t.visualElement
                  , a = e || n || r || o
                  , s = (0,
                l.useRef)(!1)
                  , u = (0,
                l.useRef)(null)
                  , c = {
                    passive: !(n || e || r || h)
                };
                function d() {
                    var t;
                    null === (t = u.current) || void 0 === t || t.call(u),
                    u.current = null
                }
                function f() {
                    var t;
                    return d(),
                    s.current = !1,
                    null === (t = i.animationState) || void 0 === t || t.setActive(Ao.Tap, !1),
                    !qo()
                }
                function p(t, n) {
                    f() && (Xo(i.getInstance(), t.target) ? null === e || void 0 === e || e(t, n) : null === r || void 0 === r || r(t, n))
                }
                function v(t, e) {
                    f() && (null === r || void 0 === r || r(t, e))
                }
                function h(t, e) {
                    var r;
                    d(),
                    s.current || (s.current = !0,
                    u.current = re(Uo(window, "pointerup", p, c), Uo(window, "pointercancel", v, c)),
                    null === (r = i.animationState) || void 0 === r || r.setActive(Ao.Tap, !0),
                    null === n || void 0 === n || n(t, e))
                }
                zo(i, "pointerdown", a ? h : void 0, c),
                Go(d)
            }
            )),
            focus: oi((function(t) {
                var e = t.whileFocus
                  , n = t.visualElement;
                Vo(n, "focus", e ? function() {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(Ao.Focus, !0)
                }
                : void 0),
                Vo(n, "blur", e ? function() {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(Ao.Focus, !1)
                }
                : void 0)
            }
            )),
            hover: oi((function(t) {
                var e = t.onHoverStart
                  , n = t.onHoverEnd
                  , r = t.whileHover
                  , o = t.visualElement;
                zo(o, "pointerenter", e || r ? Yo(o, !0, e) : void 0, {
                    passive: !e
                }),
                zo(o, "pointerleave", n || r ? Yo(o, !1, n) : void 0, {
                    passive: !n
                })
            }
            ))
        }
          , ai = 0
          , si = function() {
            return ai++
        };
        function ui() {
            var t = (0,
            l.useContext)(x);
            if (null === t)
                return [!0, null];
            var e = t.isPresent
              , n = t.onExitComplete
              , r = t.register
              , o = D(si);
            (0,
            l.useEffect)((function() {
                return r(o)
            }
            ), []);
            return !e && n ? [!1, function() {
                return null === n || void 0 === n ? void 0 : n(o)
            }
            ] : [!0]
        }
        function li(t, e) {
            if (!Array.isArray(e))
                return !1;
            var n = e.length;
            if (n !== t.length)
                return !1;
            for (var r = 0; r < n; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        var ci = function(t) {
            return /^0[^.\s]+$/.test(t)
        }
          , di = function(t) {
            return function(e) {
                return e.test(t)
            }
        }
          , fi = [St, Dt, kt, Ot, Ft, It, {
            test: function(t) {
                return "auto" === t
            },
            parse: function(t) {
                return t
            }
        }]
          , pi = function(t) {
            return fi.find(di(t))
        }
          , vi = u(u([], s(fi), !1), [Xt, te], !1)
          , hi = function(t) {
            return vi.find(di(t))
        };
        function mi(t, e, n) {
            t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, it(n))
        }
        function yi(t, e) {
            var n = R(t, e)
              , r = n ? t.makeTargetAnimatable(n, !1) : {}
              , o = r.transitionEnd
              , s = void 0 === o ? {} : o;
            r.transition;
            var u = a(r, ["transitionEnd", "transition"]);
            for (var l in u = i(i({}, u), s)) {
                mi(t, l, ln(u[l]))
            }
        }
        function gi(t, e) {
            if (e)
                return (e[t] || e.default || e).from
        }
        function xi(t, e, n) {
            var r;
            void 0 === n && (n = {});
            var o = R(t, e, n.custom)
              , a = (o || {}).transition
              , u = void 0 === a ? t.getDefaultTransition() || {} : a;
            n.transitionOverride && (u = n.transitionOverride);
            var l = o ? function() {
                return bi(t, o, n)
            }
            : function() {
                return Promise.resolve()
            }
              , c = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                void 0 === r && (r = 0);
                var o = u.delayChildren
                  , a = void 0 === o ? 0 : o
                  , s = u.staggerChildren
                  , l = u.staggerDirection;
                return function(t, e, n, r, o, a) {
                    void 0 === n && (n = 0);
                    void 0 === r && (r = 0);
                    void 0 === o && (o = 1);
                    var s = []
                      , u = (t.variantChildren.size - 1) * r
                      , l = 1 === o ? function(t) {
                        return void 0 === t && (t = 0),
                        t * r
                    }
                    : function(t) {
                        return void 0 === t && (t = 0),
                        u - t * r
                    }
                    ;
                    return Array.from(t.variantChildren).sort(wi).forEach((function(t, r) {
                        s.push(xi(t, e, i(i({}, a), {
                            delay: n + l(r)
                        })).then((function() {
                            return t.notifyAnimationComplete(e)
                        }
                        )))
                    }
                    )),
                    Promise.all(s)
                }(t, e, a + r, s, l, n)
            }
            : function() {
                return Promise.resolve()
            }
              , d = u.when;
            if (d) {
                var f = s("beforeChildren" === d ? [l, c] : [c, l], 2)
                  , p = f[0]
                  , v = f[1];
                return p().then(v)
            }
            return Promise.all([l(), c(n.delay)])
        }
        function bi(t, e, n) {
            var r, o = void 0 === n ? {} : n, s = o.delay, u = void 0 === s ? 0 : s, l = o.transitionOverride, c = o.type, d = t.makeTargetAnimatable(e), f = d.transition, p = void 0 === f ? t.getDefaultTransition() : f, v = d.transitionEnd, h = a(d, ["transition", "transitionEnd"]);
            l && (p = l);
            var m = []
              , y = c && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[c]);
            for (var g in h) {
                var x = t.getValue(g)
                  , b = h[g];
                if (!(!x || void 0 === b || y && Ei(y, g))) {
                    var w = i({
                        delay: u
                    }, p);
                    t.shouldReduceMotion && pr(g) && (w = i(i({}, w), {
                        type: !1,
                        delay: 0
                    }));
                    var E = mn(g, x, b, w);
                    m.push(E)
                }
            }
            return Promise.all(m).then((function() {
                v && yi(t, v)
            }
            ))
        }
        function wi(t, e) {
            return t.sortNodePosition(e)
        }
        function Ei(t, e) {
            var n = t.protectedKeys
              , r = t.needsAnimating
              , o = n.hasOwnProperty(e) && !0 !== r[e];
            return r[e] = !1,
            o
        }
        var Si = [Ao.Animate, Ao.InView, Ao.Focus, Ao.Hover, Ao.Tap, Ao.Drag, Ao.Exit]
          , Ai = u([], s(Si), !1).reverse()
          , Pi = Si.length;
        function Ti(t) {
            return function(e) {
                return Promise.all(e.map((function(e) {
                    var n = e.animation
                      , r = e.options;
                    return function(t, e, n) {
                        var r;
                        if (void 0 === n && (n = {}),
                        t.notifyAnimationStart(e),
                        Array.isArray(e)) {
                            var o = e.map((function(e) {
                                return xi(t, e, n)
                            }
                            ));
                            r = Promise.all(o)
                        } else if ("string" === typeof e)
                            r = xi(t, e, n);
                        else {
                            var i = "function" === typeof e ? R(t, e, n.custom) : e;
                            r = bi(t, i, n)
                        }
                        return r.then((function() {
                            return t.notifyAnimationComplete(e)
                        }
                        ))
                    }(t, n, r)
                }
                )))
            }
        }
        function Ci(t) {
            var e = Ti(t)
              , n = function() {
                var t;
                return (t = {})[Ao.Animate] = Vi(!0),
                t[Ao.InView] = Vi(),
                t[Ao.Hover] = Vi(),
                t[Ao.Tap] = Vi(),
                t[Ao.Drag] = Vi(),
                t[Ao.Focus] = Vi(),
                t[Ao.Exit] = Vi(),
                t
            }()
              , r = {}
              , o = !0
              , l = function(e, n) {
                var r = R(t, n);
                if (r) {
                    r.transition;
                    var o = r.transitionEnd
                      , s = a(r, ["transition", "transitionEnd"]);
                    e = i(i(i({}, e), s), o)
                }
                return e
            };
            function c(a, c) {
                for (var d, f = t.getProps(), p = t.getVariantContext(!0) || {}, v = [], h = new Set, m = {}, y = 1 / 0, g = function(e) {
                    var r = Ai[e]
                      , g = n[r]
                      , x = null !== (d = f[r]) && void 0 !== d ? d : p[r]
                      , b = V(x)
                      , w = r === c ? g.isActive : null;
                    !1 === w && (y = e);
                    var E = x === p[r] && x !== f[r] && b;
                    if (E && o && t.manuallyAnimateOnMount && (E = !1),
                    g.protectedKeys = i({}, m),
                    !g.isActive && null === w || !x && !g.prevProp || bo(x) || "boolean" === typeof x)
                        return "continue";
                    var S = function(t, e) {
                        if ("string" === typeof e)
                            return e !== t;
                        if (C(e))
                            return !li(e, t);
                        return !1
                    }(g.prevProp, x)
                      , A = S || r === c && g.isActive && !E && b || e > y && b
                      , P = Array.isArray(x) ? x : [x]
                      , T = P.reduce(l, {});
                    !1 === w && (T = {});
                    var M = g.prevResolvedValues
                      , R = void 0 === M ? {} : M
                      , L = i(i({}, R), T)
                      , j = function(t) {
                        A = !0,
                        h.delete(t),
                        g.needsAnimating[t] = !0
                    };
                    for (var O in L) {
                        var k = T[O]
                          , D = R[O];
                        m.hasOwnProperty(O) || (k !== D ? Ye(k) && Ye(D) ? !li(k, D) || S ? j(O) : g.protectedKeys[O] = !0 : void 0 !== k ? j(O) : h.add(O) : void 0 !== k && h.has(O) ? j(O) : g.protectedKeys[O] = !0)
                    }
                    g.prevProp = x,
                    g.prevResolvedValues = T,
                    g.isActive && (m = i(i({}, m), T)),
                    o && t.blockInitialAnimation && (A = !1),
                    A && !E && v.push.apply(v, u([], s(P.map((function(t) {
                        return {
                            animation: t,
                            options: i({
                                type: r
                            }, a)
                        }
                    }
                    ))), !1))
                }, x = 0; x < Pi; x++)
                    g(x);
                if (r = i({}, m),
                h.size) {
                    var b = {};
                    h.forEach((function(e) {
                        var n = t.getBaseTarget(e);
                        void 0 !== n && (b[e] = n)
                    }
                    )),
                    v.push({
                        animation: b
                    })
                }
                var w = Boolean(v.length);
                return o && !1 === f.initial && !t.manuallyAnimateOnMount && (w = !1),
                o = !1,
                w ? e(v) : Promise.resolve()
            }
            return {
                isAnimated: function(t) {
                    return void 0 !== r[t]
                },
                animateChanges: c,
                setActive: function(e, r, o) {
                    var i;
                    if (n[e].isActive === r)
                        return Promise.resolve();
                    null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                        var n;
                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                    }
                    )),
                    n[e].isActive = r;
                    var a = c(o, e);
                    for (var s in n)
                        n[s].protectedKeys = {};
                    return a
                },
                setAnimateFunction: function(n) {
                    e = n(t)
                },
                getState: function() {
                    return n
                }
            }
        }
        function Vi(t) {
            return void 0 === t && (t = !1),
            {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        var Mi = {
            animation: oi((function(t) {
                var e = t.visualElement
                  , n = t.animate;
                e.animationState || (e.animationState = Ci(e)),
                bo(n) && (0,
                l.useEffect)((function() {
                    return n.subscribe(e)
                }
                ), [n])
            }
            )),
            exit: oi((function(t) {
                var e = t.custom
                  , n = t.visualElement
                  , r = s(ui(), 2)
                  , o = r[0]
                  , i = r[1]
                  , a = (0,
                l.useContext)(x);
                (0,
                l.useEffect)((function() {
                    var t, r;
                    n.isPresent = o;
                    var s = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Ao.Exit, !o, {
                        custom: null !== (r = null === a || void 0 === a ? void 0 : a.custom) && void 0 !== r ? r : e
                    });
                    !o && (null === s || void 0 === s || s.then(i))
                }
                ), [o])
            }
            ))
        }
          , Ri = function() {
            function t(t, e, n) {
                var r = this
                  , o = (void 0 === n ? {} : n).transformPagePoint;
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function() {
                    if (r.lastMoveEvent && r.lastMoveEventInfo) {
                        var t = Oi(r.lastMoveEventInfo, r.history)
                          , e = null !== r.startEvent
                          , n = Hn(t.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                        if (e || n) {
                            var o = t.point
                              , a = $().timestamp;
                            r.history.push(i(i({}, o), {
                                timestamp: a
                            }));
                            var s = r.handlers
                              , u = s.onStart
                              , l = s.onMove;
                            e || (u && u(r.lastMoveEvent, t),
                            r.startEvent = r.lastMoveEvent),
                            l && l(r.lastMoveEvent, t)
                        }
                    }
                }
                ,
                this.handlePointerMove = function(t, e) {
                    r.lastMoveEvent = t,
                    r.lastMoveEventInfo = Li(e, r.transformPagePoint),
                    Mo(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : J.update(r.updatePoint, !0)
                }
                ,
                this.handlePointerUp = function(t, e) {
                    r.end();
                    var n = r.handlers
                      , o = n.onEnd
                      , i = n.onSessionEnd
                      , a = Oi(Li(e, r.transformPagePoint), r.history);
                    r.startEvent && o && o(t, a),
                    i && i(t, a)
                }
                ,
                !(Ro(t) && t.touches.length > 1)) {
                    this.handlers = e,
                    this.transformPagePoint = o;
                    var a = Li(ko(t), this.transformPagePoint)
                      , s = a.point
                      , u = $().timestamp;
                    this.history = [i(i({}, s), {
                        timestamp: u
                    })];
                    var l = e.onSessionStart;
                    l && l(t, Oi(a, this.history)),
                    this.removeListeners = re(Uo(window, "pointermove", this.handlePointerMove), Uo(window, "pointerup", this.handlePointerUp), Uo(window, "pointercancel", this.handlePointerUp))
                }
            }
            return t.prototype.updateHandlers = function(t) {
                this.handlers = t
            }
            ,
            t.prototype.end = function() {
                this.removeListeners && this.removeListeners(),
                Y.update(this.updatePoint)
            }
            ,
            t
        }();
        function Li(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function ji(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function Oi(t, e) {
            var n = t.point;
            return {
                point: n,
                delta: ji(n, Di(e)),
                offset: ji(n, ki(e)),
                velocity: Ii(e, .1)
            }
        }
        function ki(t) {
            return t[0]
        }
        function Di(t) {
            return t[t.length - 1]
        }
        function Ii(t, e) {
            if (t.length < 2)
                return {
                    x: 0,
                    y: 0
                };
            for (var n = t.length - 1, r = null, o = Di(t); n >= 0 && (r = t[n],
            !(o.timestamp - r.timestamp > De(e))); )
                n--;
            if (!r)
                return {
                    x: 0,
                    y: 0
                };
            var i = (o.timestamp - r.timestamp) / 1e3;
            if (0 === i)
                return {
                    x: 0,
                    y: 0
                };
            var a = {
                x: (o.x - r.x) / i,
                y: (o.y - r.y) / i
            };
            return a.x === 1 / 0 && (a.x = 0),
            a.y === 1 / 0 && (a.y = 0),
            a
        }
        function Fi(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function Bi(t, e) {
            var n, r = e.min - t.min, o = e.max - t.max;
            return e.max - e.min < t.max - t.min && (r = (n = s([o, r], 2))[0],
            o = n[1]),
            {
                min: r,
                max: o
            }
        }
        var Ui = .35;
        function zi(t, e, n) {
            return {
                min: Ni(t, e),
                max: Ni(t, n)
            }
        }
        function Ni(t, e) {
            var n;
            return "number" === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
        }
        function _i(t) {
            var e = t.top;
            return {
                x: {
                    min: t.left,
                    max: t.right
                },
                y: {
                    min: e,
                    max: t.bottom
                }
            }
        }
        function Hi(t, e) {
            return _i(function(t, e) {
                if (!e)
                    return t;
                var n = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        var Wi = new WeakMap
          , qi = function() {
            function t(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                },
                this.visualElement = t
            }
            return t.prototype.start = function(t, e) {
                var n = this
                  , r = (void 0 === e ? {} : e).snapToCursor
                  , o = void 0 !== r && r;
                if (!1 !== this.visualElement.isPresent) {
                    this.panSession = new Ri(t,{
                        onSessionStart: function(t) {
                            n.stopAnimation(),
                            o && n.snapToCursor(ko(t, "page").point)
                        },
                        onStart: function(t, e) {
                            var r, o = n.getProps(), i = o.drag, a = o.dragPropagation, s = o.onDragStart;
                            (!i || a || (n.openGlobalLock && n.openGlobalLock(),
                            n.openGlobalLock = Wo(i),
                            n.openGlobalLock)) && (n.isDragging = !0,
                            n.currentDirection = null,
                            n.resolveConstraints(),
                            n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0,
                            n.visualElement.projection.target = void 0),
                            ur((function(t) {
                                var e, r, o = n.getAxisMotionValue(t).get() || 0;
                                if (kt.test(o)) {
                                    var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                    if (i)
                                        o = Wn(i) * (parseFloat(o) / 100)
                                }
                                n.originPoint[t] = o
                            }
                            )),
                            null === s || void 0 === s || s(t, e),
                            null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(Ao.Drag, !0))
                        },
                        onMove: function(t, e) {
                            var r = n.getProps()
                              , o = r.dragPropagation
                              , i = r.dragDirectionLock
                              , a = r.onDirectionLock
                              , s = r.onDrag;
                            if (o || n.openGlobalLock) {
                                var u = e.offset;
                                if (i && null === n.currentDirection)
                                    return n.currentDirection = function(t, e) {
                                        void 0 === e && (e = 10);
                                        var n = null;
                                        Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                        return n
                                    }(u),
                                    void (null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)));
                                n.updateAxis("x", e.point, u),
                                n.updateAxis("y", e.point, u),
                                n.visualElement.syncRender(),
                                null === s || void 0 === s || s(t, e)
                            }
                        },
                        onSessionEnd: function(t, e) {
                            return n.stop(t, e)
                        }
                    },{
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
            }
            ,
            t.prototype.stop = function(t, e) {
                var n = this.isDragging;
                if (this.cancel(),
                n) {
                    var r = e.velocity;
                    this.startAnimation(r);
                    var o = this.getProps().onDragEnd;
                    null === o || void 0 === o || o(t, e)
                }
            }
            ,
            t.prototype.cancel = function() {
                var t, e;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                this.panSession = void 0,
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Ao.Drag, !1)
            }
            ,
            t.prototype.updateAxis = function(t, e, n) {
                var r = this.getProps().drag;
                if (n && Yi(t, r, this.currentDirection)) {
                    var o = this.getAxisMotionValue(t)
                      , i = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (i = function(t, e, n) {
                        var r = e.min
                          , o = e.max;
                        return void 0 !== r && t < r ? t = n ? Q(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? Q(o, t, n.max) : Math.min(t, o)),
                        t
                    }(i, this.constraints[t], this.elastic[t])),
                    o.set(i)
                }
            }
            ,
            t.prototype.resolveConstraints = function() {
                var t = this
                  , e = this.getProps()
                  , n = e.dragConstraints
                  , r = e.dragElastic
                  , o = (this.visualElement.projection || {}).layout
                  , i = this.constraints;
                n && T(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
                    var n = e.top
                      , r = e.left
                      , o = e.bottom
                      , i = e.right;
                    return {
                        x: Fi(t.x, r, i),
                        y: Fi(t.y, n, o)
                    }
                }(o.actual, n),
                this.elastic = function(t) {
                    return void 0 === t && (t = Ui),
                    !1 === t ? t = 0 : !0 === t && (t = Ui),
                    {
                        x: zi(t, "left", "right"),
                        y: zi(t, "top", "bottom")
                    }
                }(r),
                i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ur((function(e) {
                    t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                        var n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(o.actual[e], t.constraints[e]))
                }
                ))
            }
            ,
            t.prototype.resolveRefConstraints = function() {
                var t = this.getProps()
                  , e = t.dragConstraints
                  , n = t.onMeasureDragConstraints;
                if (!e || !T(e))
                    return !1;
                var r = e.current
                  , o = this.visualElement.projection;
                if (!o || !o.layout)
                    return !1;
                var i = function(t, e, n) {
                    var r = Hi(t, n)
                      , o = e.scroll;
                    return o && (Dn(r.x, o.x),
                    Dn(r.y, o.y)),
                    r
                }(r, o.root, this.visualElement.getTransformPagePoint())
                  , a = function(t, e) {
                    return {
                        x: Bi(t.x, e.x),
                        y: Bi(t.y, e.y)
                    }
                }(o.layout.actual, i);
                if (n) {
                    var s = n(function(t) {
                        var e = t.x
                          , n = t.y;
                        return {
                            top: n.min,
                            right: e.max,
                            bottom: n.max,
                            left: e.min
                        }
                    }(a));
                    this.hasMutatedConstraints = !!s,
                    s && (a = _i(s))
                }
                return a
            }
            ,
            t.prototype.startAnimation = function(t) {
                var e = this
                  , n = this.getProps()
                  , r = n.drag
                  , o = n.dragMomentum
                  , a = n.dragElastic
                  , s = n.dragTransition
                  , u = n.dragSnapToOrigin
                  , l = n.onDragTransitionEnd
                  , c = this.constraints || {}
                  , d = ur((function(n) {
                    var l;
                    if (Yi(n, r, e.currentDirection)) {
                        var d = null !== (l = null === c || void 0 === c ? void 0 : c[n]) && void 0 !== l ? l : {};
                        u && (d = {
                            min: 0,
                            max: 0
                        });
                        var f = a ? 200 : 1e6
                          , p = a ? 40 : 1e7
                          , v = i(i({
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: p,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                        }, s), d);
                        return e.startAxisValueAnimation(n, v)
                    }
                }
                ));
                return Promise.all(d).then(l)
            }
            ,
            t.prototype.startAxisValueAnimation = function(t, e) {
                return mn(t, this.getAxisMotionValue(t), 0, e)
            }
            ,
            t.prototype.stopAnimation = function() {
                var t = this;
                ur((function(e) {
                    return t.getAxisMotionValue(e).stop()
                }
                ))
            }
            ,
            t.prototype.getAxisMotionValue = function(t) {
                var e, n, r = "_drag" + t.toUpperCase(), o = this.visualElement.getProps()[r];
                return o || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
            }
            ,
            t.prototype.snapToCursor = function(t) {
                var e = this;
                ur((function(n) {
                    if (Yi(n, e.getProps().drag, e.currentDirection)) {
                        var r = e.visualElement.projection
                          , o = e.getAxisMotionValue(n);
                        if (r && r.layout) {
                            var i = r.layout.actual[n]
                              , a = i.min
                              , s = i.max;
                            o.set(t[n] - Q(a, s, .5))
                        }
                    }
                }
                ))
            }
            ,
            t.prototype.scalePositionWithinConstraints = function() {
                var t, e = this, n = this.getProps(), r = n.drag, o = n.dragConstraints, i = this.visualElement.projection;
                if (T(o) && i && this.constraints) {
                    this.stopAnimation();
                    var a = {
                        x: 0,
                        y: 0
                    };
                    ur((function(t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                            var r = n.get();
                            a[t] = function(t, e) {
                                var n = .5
                                  , r = Wn(t)
                                  , o = Wn(e);
                                return o > r ? n = mt(e.min, e.max - r, t.min) : r > o && (n = mt(t.min, t.max - o, e.min)),
                                st(0, 1, n)
                            }({
                                min: r,
                                max: r
                            }, e.constraints[t])
                        }
                    }
                    ));
                    var s = this.visualElement.getProps().transformTemplate;
                    this.visualElement.getInstance().style.transform = s ? s({}, "") : "none",
                    null === (t = i.root) || void 0 === t || t.updateScroll(),
                    i.updateLayout(),
                    this.resolveConstraints(),
                    ur((function(t) {
                        if (Yi(t, r, null)) {
                            var n = e.getAxisMotionValue(t)
                              , o = e.constraints[t]
                              , i = o.min
                              , s = o.max;
                            n.set(Q(i, s, a[t]))
                        }
                    }
                    ))
                }
            }
            ,
            t.prototype.addListeners = function() {
                var t, e = this;
                Wi.set(this.visualElement, this);
                var n = Uo(this.visualElement.getInstance(), "pointerdown", (function(t) {
                    var n = e.getProps()
                      , r = n.drag
                      , o = n.dragListener;
                    r && (void 0 === o || o) && e.start(t)
                }
                ))
                  , r = function() {
                    T(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                }
                  , o = this.visualElement.projection
                  , i = o.addEventListener("measure", r);
                o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(),
                o.updateLayout()),
                r();
                var a = Co(window, "resize", (function() {
                    return e.scalePositionWithinConstraints()
                }
                ));
                return o.addEventListener("didUpdate", (function(t) {
                    var n = t.delta
                      , r = t.hasLayoutChanged;
                    e.isDragging && r && (ur((function(t) {
                        var r = e.getAxisMotionValue(t);
                        r && (e.originPoint[t] += n[t].translate,
                        r.set(r.get() + n[t].translate))
                    }
                    )),
                    e.visualElement.syncRender())
                }
                )),
                function() {
                    a(),
                    n(),
                    i()
                }
            }
            ,
            t.prototype.getProps = function() {
                var t = this.visualElement.getProps()
                  , e = t.drag
                  , n = void 0 !== e && e
                  , r = t.dragDirectionLock
                  , o = void 0 !== r && r
                  , a = t.dragPropagation
                  , s = void 0 !== a && a
                  , u = t.dragConstraints
                  , l = void 0 !== u && u
                  , c = t.dragElastic
                  , d = void 0 === c ? Ui : c
                  , f = t.dragMomentum
                  , p = void 0 === f || f;
                return i(i({}, t), {
                    drag: n,
                    dragDirectionLock: o,
                    dragPropagation: s,
                    dragConstraints: l,
                    dragElastic: d,
                    dragMomentum: p
                })
            }
            ,
            t
        }();
        function Yi(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        var Xi = {
            pan: oi((function(t) {
                var e = t.onPan
                  , n = t.onPanStart
                  , r = t.onPanEnd
                  , o = t.onPanSessionStart
                  , i = t.visualElement
                  , a = e || n || r || o
                  , s = (0,
                l.useRef)(null)
                  , u = (0,
                l.useContext)(y).transformPagePoint
                  , c = {
                    onSessionStart: o,
                    onStart: n,
                    onMove: e,
                    onEnd: function(t, e) {
                        s.current = null,
                        r && r(t, e)
                    }
                };
                (0,
                l.useEffect)((function() {
                    null !== s.current && s.current.updateHandlers(c)
                }
                )),
                zo(i, "pointerdown", a && function(t) {
                    s.current = new Ri(t,c,{
                        transformPagePoint: u
                    })
                }
                ),
                Go((function() {
                    return s.current && s.current.end()
                }
                ))
            }
            )),
            drag: oi((function(t) {
                var e = t.dragControls
                  , n = t.visualElement
                  , r = D((function() {
                    return new qi(n)
                }
                ));
                (0,
                l.useEffect)((function() {
                    return e && e.subscribe(r)
                }
                ), [r, e]),
                (0,
                l.useEffect)((function() {
                    return r.addListeners()
                }
                ), [r])
            }
            ))
        }
          , Gi = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
        var Zi = function(t) {
            var e = t.treeType
              , n = void 0 === e ? "" : e
              , r = t.build
              , o = t.getBaseTarget
              , a = t.makeTargetAnimatable
              , l = t.measureViewportBox
              , c = t.render
              , d = t.readValueFromInstance
              , f = t.removeValueFromRenderState
              , p = t.sortNodePosition
              , v = t.scrapeMotionValuesFromProps;
            return function(t, e) {
                var h = t.parent
                  , m = t.props
                  , y = t.presenceId
                  , g = t.blockInitialAnimation
                  , x = t.visualState
                  , b = t.shouldReduceMotion;
                void 0 === e && (e = {});
                var w, E, S = !1, A = x.latestValues, P = x.renderState, T = function() {
                    var t = Gi.map((function() {
                        return new rt
                    }
                    ))
                      , e = {}
                      , n = {
                        clearAllListeners: function() {
                            return t.forEach((function(t) {
                                return t.clear()
                            }
                            ))
                        },
                        updatePropListeners: function(t) {
                            Gi.forEach((function(r) {
                                var o, i = "on" + r, a = t[i];
                                null === (o = e[r]) || void 0 === o || o.call(e),
                                a && (e[r] = n[i](a))
                            }
                            ))
                        }
                    };
                    return t.forEach((function(t, e) {
                        n["on" + Gi[e]] = function(e) {
                            return t.add(e)
                        }
                        ,
                        n["notify" + Gi[e]] = function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            return t.notify.apply(t, u([], s(e), !1))
                        }
                    }
                    )),
                    n
                }(), C = new Map, M = new Map, R = {}, O = i({}, A);
                function k() {
                    w && S && (D(),
                    c(w, P, m.style, H.projection))
                }
                function D() {
                    r(H, P, A, e, m)
                }
                function I() {
                    T.notifyUpdate(A)
                }
                function F(t, e) {
                    var n = e.onChange((function(e) {
                        A[t] = e,
                        m.onUpdate && J.update(I, !1, !0)
                    }
                    ))
                      , r = e.onRenderRequest(H.scheduleRender);
                    M.set(t, (function() {
                        n(),
                        r()
                    }
                    ))
                }
                var B = v(m);
                for (var U in B) {
                    var z = B[U];
                    void 0 !== A[U] && at(z) && z.set(A[U], !1)
                }
                var N = L(m)
                  , _ = j(m)
                  , H = i(i({
                    treeType: n,
                    current: null,
                    depth: h ? h.depth + 1 : 0,
                    parent: h,
                    children: new Set,
                    presenceId: y,
                    shouldReduceMotion: b,
                    variantChildren: _ ? new Set : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(null === h || void 0 === h ? void 0 : h.isMounted()),
                    blockInitialAnimation: g,
                    isMounted: function() {
                        return Boolean(w)
                    },
                    mount: function(t) {
                        S = !0,
                        w = H.current = t,
                        H.projection && H.projection.mount(t),
                        _ && h && !N && (E = null === h || void 0 === h ? void 0 : h.addVariantChild(H)),
                        C.forEach((function(t, e) {
                            return F(e, t)
                        }
                        )),
                        null === h || void 0 === h || h.children.add(H),
                        H.setProps(m)
                    },
                    unmount: function() {
                        var t;
                        null === (t = H.projection) || void 0 === t || t.unmount(),
                        Y.update(I),
                        Y.render(k),
                        M.forEach((function(t) {
                            return t()
                        }
                        )),
                        null === E || void 0 === E || E(),
                        null === h || void 0 === h || h.children.delete(H),
                        T.clearAllListeners(),
                        w = void 0,
                        S = !1
                    },
                    addVariantChild: function(t) {
                        var e, n = H.getClosestVariantNode();
                        if (n)
                            return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                            function() {
                                return n.variantChildren.delete(t)
                            }
                    },
                    sortNodePosition: function(t) {
                        return p && n === t.treeType ? p(H.getInstance(), t.getInstance()) : 0
                    },
                    getClosestVariantNode: function() {
                        return _ ? H : null === h || void 0 === h ? void 0 : h.getClosestVariantNode()
                    },
                    getLayoutId: function() {
                        return m.layoutId
                    },
                    getInstance: function() {
                        return w
                    },
                    getStaticValue: function(t) {
                        return A[t]
                    },
                    setStaticValue: function(t, e) {
                        return A[t] = e
                    },
                    getLatestValues: function() {
                        return A
                    },
                    setVisibility: function(t) {
                        H.isVisible !== t && (H.isVisible = t,
                        H.scheduleRender())
                    },
                    makeTargetAnimatable: function(t, e) {
                        return void 0 === e && (e = !0),
                        a(H, t, m, e)
                    },
                    measureViewportBox: function() {
                        return l(w, m)
                    },
                    addValue: function(t, e) {
                        H.hasValue(t) && H.removeValue(t),
                        C.set(t, e),
                        A[t] = e.get(),
                        F(t, e)
                    },
                    removeValue: function(t) {
                        var e;
                        C.delete(t),
                        null === (e = M.get(t)) || void 0 === e || e(),
                        M.delete(t),
                        delete A[t],
                        f(t, P)
                    },
                    hasValue: function(t) {
                        return C.has(t)
                    },
                    getValue: function(t, e) {
                        var n = C.get(t);
                        return void 0 === n && void 0 !== e && (n = it(e),
                        H.addValue(t, n)),
                        n
                    },
                    forEachValue: function(t) {
                        return C.forEach(t)
                    },
                    readValue: function(t) {
                        var n;
                        return null !== (n = A[t]) && void 0 !== n ? n : d(w, t, e)
                    },
                    setBaseTarget: function(t, e) {
                        O[t] = e
                    },
                    getBaseTarget: function(t) {
                        if (o) {
                            var e = o(m, t);
                            if (void 0 !== e && !at(e))
                                return e
                        }
                        return O[t]
                    }
                }, T), {
                    build: function() {
                        return D(),
                        P
                    },
                    scheduleRender: function() {
                        J.render(k, !1, !0)
                    },
                    syncRender: k,
                    setProps: function(t) {
                        (t.transformTemplate || m.transformTemplate) && H.scheduleRender(),
                        m = t,
                        T.updatePropListeners(t),
                        R = function(t, e, n) {
                            var r;
                            for (var o in e) {
                                var i = e[o]
                                  , a = n[o];
                                if (at(i))
                                    t.addValue(o, i);
                                else if (at(a))
                                    t.addValue(o, it(i));
                                else if (a !== i)
                                    if (t.hasValue(o)) {
                                        var s = t.getValue(o);
                                        !s.hasAnimated && s.set(i)
                                    } else
                                        t.addValue(o, it(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                            }
                            for (var o in n)
                                void 0 === e[o] && t.removeValue(o);
                            return e
                        }(H, v(m), R)
                    },
                    getProps: function() {
                        return m
                    },
                    getVariant: function(t) {
                        var e;
                        return null === (e = m.variants) || void 0 === e ? void 0 : e[t]
                    },
                    getDefaultTransition: function() {
                        return m.transition
                    },
                    getTransformPagePoint: function() {
                        return m.transformPagePoint
                    },
                    getVariantContext: function(t) {
                        if (void 0 === t && (t = !1),
                        t)
                            return null === h || void 0 === h ? void 0 : h.getVariantContext();
                        if (!N) {
                            var e = (null === h || void 0 === h ? void 0 : h.getVariantContext()) || {};
                            return void 0 !== m.initial && (e.initial = m.initial),
                            e
                        }
                        for (var n = {}, r = 0; r < $i; r++) {
                            var o = Ki[r]
                              , i = m[o];
                            (V(i) || !1 === i) && (n[o] = i)
                        }
                        return n
                    }
                });
                return H
            }
        }
          , Ki = u(["initial"], s(Si), !1)
          , $i = Ki.length;
        function Ji(t) {
            return "string" === typeof t && t.startsWith("var(--")
        }
        var Qi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function ta(t, e, n) {
            void 0 === n && (n = 1),
            'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.');
            var r = s(function(t) {
                var e = Qi.exec(t);
                if (!e)
                    return [, ];
                var n = s(e, 3);
                return [n[1], n[2]]
            }(t), 2)
              , o = r[0]
              , i = r[1];
            if (o) {
                var a = window.getComputedStyle(e).getPropertyValue(o);
                return a ? a.trim() : Ji(i) ? ta(i, e, n + 1) : i
            }
        }
        var ea, na = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), ra = function(t) {
            return na.has(t)
        }, oa = function(t, e) {
            t.set(e, !1),
            t.set(e)
        }, ia = function(t) {
            return t === St || t === Dt
        };
        !function(t) {
            t.width = "width",
            t.height = "height",
            t.left = "left",
            t.right = "right",
            t.top = "top",
            t.bottom = "bottom"
        }(ea || (ea = {}));
        var aa = function(t, e) {
            return parseFloat(t.split(", ")[e])
        }
          , sa = function(t, e) {
            return function(n, r) {
                var o = r.transform;
                if ("none" === o || !o)
                    return 0;
                var i = o.match(/^matrix3d\((.+)\)$/);
                if (i)
                    return aa(i[1], e);
                var a = o.match(/^matrix\((.+)\)$/);
                return a ? aa(a[1], t) : 0
            }
        }
          , ua = new Set(["x", "y", "z"])
          , la = cr.filter((function(t) {
            return !ua.has(t)
        }
        ));
        var ca = {
            width: function(t, e) {
                var n = t.x
                  , r = e.paddingLeft
                  , o = void 0 === r ? "0" : r
                  , i = e.paddingRight
                  , a = void 0 === i ? "0" : i;
                return n.max - n.min - parseFloat(o) - parseFloat(a)
            },
            height: function(t, e) {
                var n = t.y
                  , r = e.paddingTop
                  , o = void 0 === r ? "0" : r
                  , i = e.paddingBottom
                  , a = void 0 === i ? "0" : i;
                return n.max - n.min - parseFloat(o) - parseFloat(a)
            },
            top: function(t, e) {
                var n = e.top;
                return parseFloat(n)
            },
            left: function(t, e) {
                var n = e.left;
                return parseFloat(n)
            },
            bottom: function(t, e) {
                var n = t.y
                  , r = e.top;
                return parseFloat(r) + (n.max - n.min)
            },
            right: function(t, e) {
                var n = t.x
                  , r = e.left;
                return parseFloat(r) + (n.max - n.min)
            },
            x: sa(4, 13),
            y: sa(5, 14)
        }
          , da = function(t, e, n, r) {
            void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            e = i({}, e),
            r = i({}, r);
            var o = Object.keys(e).filter(ra)
              , a = []
              , u = !1
              , l = [];
            if (o.forEach((function(o) {
                var i = t.getValue(o);
                if (t.hasValue(o)) {
                    var s, c = n[o], d = pi(c), f = e[o];
                    if (Ye(f)) {
                        var p = f.length
                          , v = null === f[0] ? 1 : 0;
                        c = f[v],
                        d = pi(c);
                        for (var h = v; h < p; h++)
                            s ? pi(f[h]) : (s = pi(f[h])) === d || ia(d) && ia(s)
                    } else
                        s = pi(f);
                    if (d !== s)
                        if (ia(d) && ia(s)) {
                            var m = i.get();
                            "string" === typeof m && i.set(parseFloat(m)),
                            "string" === typeof f ? e[o] = parseFloat(f) : Array.isArray(f) && s === Dt && (e[o] = f.map(parseFloat))
                        } else
                            (null === d || void 0 === d ? void 0 : d.transform) && (null === s || void 0 === s ? void 0 : s.transform) && (0 === c || 0 === f) ? 0 === c ? i.set(s.transform(c)) : e[o] = d.transform(f) : (u || (a = function(t) {
                                var e = [];
                                return la.forEach((function(n) {
                                    var r = t.getValue(n);
                                    void 0 !== r && (e.push([n, r.get()]),
                                    r.set(n.startsWith("scale") ? 1 : 0))
                                }
                                )),
                                e.length && t.syncRender(),
                                e
                            }(t),
                            u = !0),
                            l.push(o),
                            r[o] = void 0 !== r[o] ? r[o] : e[o],
                            oa(i, f))
                }
            }
            )),
            l.length) {
                var c = l.indexOf("height") >= 0 ? window.pageYOffset : null
                  , d = function(t, e, n) {
                    var r = e.measureViewportBox()
                      , o = e.getInstance()
                      , i = getComputedStyle(o)
                      , a = i.display
                      , s = {};
                    "none" === a && e.setStaticValue("display", t.display || "block"),
                    n.forEach((function(t) {
                        s[t] = ca[t](r, i)
                    }
                    )),
                    e.syncRender();
                    var u = e.measureViewportBox();
                    return n.forEach((function(n) {
                        var r = e.getValue(n);
                        oa(r, s[n]),
                        t[n] = ca[n](u, i)
                    }
                    )),
                    t
                }(e, t, l);
                return a.length && a.forEach((function(e) {
                    var n = s(e, 2)
                      , r = n[0]
                      , o = n[1];
                    t.getValue(r).set(o)
                }
                )),
                t.syncRender(),
                null !== c && window.scrollTo({
                    top: c
                }),
                {
                    target: d,
                    transitionEnd: r
                }
            }
            return {
                target: e,
                transitionEnd: r
            }
        };
        function fa(t, e, n, r) {
            return function(t) {
                return Object.keys(t).some(ra)
            }(e) ? da(t, e, n, r) : {
                target: e,
                transitionEnd: r
            }
        }
        var pa = function(t, e, n, r) {
            var o = function(t, e, n) {
                var r, o = a(e, []), s = t.getInstance();
                if (!(s instanceof Element))
                    return {
                        target: o,
                        transitionEnd: n
                    };
                for (var u in n && (n = i({}, n)),
                t.forEachValue((function(t) {
                    var e = t.get();
                    if (Ji(e)) {
                        var n = ta(e, s);
                        n && t.set(n)
                    }
                }
                )),
                o) {
                    var l = o[u];
                    if (Ji(l)) {
                        var c = ta(l, s);
                        c && (o[u] = c,
                        n && (null !== (r = n[u]) && void 0 !== r || (n[u] = l)))
                    }
                }
                return {
                    target: o,
                    transitionEnd: n
                }
            }(t, e, r);
            return fa(t, e = o.target, n, r = o.transitionEnd)
        };
        var va = {
            treeType: "dom",
            readValueFromInstance: function(t, e) {
                if (pr(e)) {
                    var n = an(e);
                    return n && n.default || 0
                }
                var r, o = (r = t,
                window.getComputedStyle(r));
                return (Gr(e) ? o.getPropertyValue(e) : o[e]) || 0
            },
            sortNodePosition: function(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            },
            getBaseTarget: function(t, e) {
                var n;
                return null === (n = t.style) || void 0 === n ? void 0 : n[e]
            },
            measureViewportBox: function(t, e) {
                return Hi(t, e.transformPagePoint)
            },
            resetTransform: function(t, e, n) {
                var r = n.transformTemplate;
                e.style.transform = r ? r({}, "") : "none",
                t.scheduleRender()
            },
            restoreTransform: function(t, e) {
                t.style.transform = e.style.transform
            },
            removeValueFromRenderState: function(t, e) {
                var n = e.vars
                  , r = e.style;
                delete n[t],
                delete r[t]
            },
            makeTargetAnimatable: function(t, e, n, r) {
                var o = n.transformValues;
                void 0 === r && (r = !0);
                var s = e.transition
                  , u = e.transitionEnd
                  , l = a(e, ["transition", "transitionEnd"])
                  , c = function(t, e, n) {
                    var r, o, i = {};
                    for (var a in t)
                        i[a] = null !== (r = gi(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                    return i
                }(l, s || {}, t);
                if (o && (u && (u = o(u)),
                l && (l = o(l)),
                c && (c = o(c))),
                r) {
                    !function(t, e, n) {
                        var r, o, i, a, s = Object.keys(e).filter((function(e) {
                            return !t.hasValue(e)
                        }
                        )), u = s.length;
                        if (u)
                            for (var l = 0; l < u; l++) {
                                var c = s[l]
                                  , d = e[c]
                                  , f = null;
                                Array.isArray(d) && (f = d[0]),
                                null === f && (f = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]),
                                void 0 !== f && null !== f && ("string" === typeof f && (/^\-?\d*\.?\d+$/.test(f) || ci(f)) ? f = parseFloat(f) : !hi(f) && te.test(d) && (f = sn(c, d)),
                                t.addValue(c, it(f)),
                                null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = f),
                                t.setBaseTarget(c, f))
                            }
                    }(t, l, c);
                    var d = pa(t, l, c, u);
                    u = d.transitionEnd,
                    l = d.target
                }
                return i({
                    transition: s,
                    transitionEnd: u
                }, l)
            },
            scrapeMotionValuesFromProps: go,
            build: function(t, e, n, r, o) {
                void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"),
                Kr(e, n, r, o.transformTemplate)
            },
            render: ho
        }
          , ha = Zi(va)
          , ma = Zi(i(i({}, va), {
            getBaseTarget: function(t, e) {
                return t[e]
            },
            readValueFromInstance: function(t, e) {
                var n;
                return pr(e) ? (null === (n = an(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = mo.has(e) ? e : vo(e),
                t.getAttribute(e))
            },
            scrapeMotionValuesFromProps: xo,
            build: function(t, e, n, r, o) {
                uo(e, n, r, o.transformTemplate)
            },
            render: yo
        }))
          , ya = function(t, e) {
            return qr(t) ? ma(e, {
                enableHardwareAcceleration: !1
            }) : ha(e, {
                enableHardwareAcceleration: !0
            })
        };
        function ga(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        var xa = {
            correct: function(t, e) {
                if (!e.target)
                    return t;
                if ("string" === typeof t) {
                    if (!Dt.test(t))
                        return t;
                    t = parseFloat(t)
                }
                var n = ga(t, e.target.x)
                  , r = ga(t, e.target.y);
                return "".concat(n, "% ").concat(r, "%")
            }
        }
          , ba = "_$css"
          , wa = {
            correct: function(t, e) {
                var n = e.treeScale
                  , r = e.projectionDelta
                  , o = t
                  , i = t.includes("var(")
                  , a = [];
                i && (t = t.replace(Qi, (function(t) {
                    return a.push(t),
                    ba
                }
                )));
                var s = te.parse(t);
                if (s.length > 5)
                    return o;
                var u = te.createTransformer(t)
                  , l = "number" !== typeof s[0] ? 1 : 0
                  , c = r.x.scale * n.x
                  , d = r.y.scale * n.y;
                s[0 + l] /= c,
                s[1 + l] /= d;
                var f = Q(c, d, .5);
                "number" === typeof s[2 + l] && (s[2 + l] /= f),
                "number" === typeof s[3 + l] && (s[3 + l] /= f);
                var p = u(s);
                if (i) {
                    var v = 0;
                    p = p.replace(ba, (function() {
                        var t = a[v];
                        return v++,
                        t
                    }
                    ))
                }
                return p
            }
        }
          , Ea = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.componentDidMount = function() {
                var t, e = this, n = this.props, r = n.visualElement, o = n.layoutGroup, a = n.switchLayoutGroup, s = n.layoutId, u = r.projection;
                t = Sa,
                Object.assign(ar, t),
                u && ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(u),
                (null === a || void 0 === a ? void 0 : a.register) && s && a.register(u),
                u.root.didUpdate(),
                u.addEventListener("animationComplete", (function() {
                    e.safeToRemove()
                }
                )),
                u.setOptions(i(i({}, u.options), {
                    onExitComplete: function() {
                        return e.safeToRemove()
                    }
                }))),
                xr.hasEverUpdated = !0
            }
            ,
            e.prototype.getSnapshotBeforeUpdate = function(t) {
                var e = this
                  , n = this.props
                  , r = n.layoutDependency
                  , o = n.visualElement
                  , i = n.drag
                  , a = n.isPresent
                  , s = o.projection;
                return s ? (s.isPresent = a,
                i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(),
                t.isPresent !== a && (a ? s.promote() : s.relegate() || J.postRender((function() {
                    var t;
                    (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                }
                ))),
                null) : null
            }
            ,
            e.prototype.componentDidUpdate = function() {
                var t = this.props.visualElement.projection;
                t && (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props
                  , e = t.visualElement
                  , n = t.layoutGroup
                  , r = t.switchLayoutGroup
                  , o = e.projection;
                o && (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o),
                (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o))
            }
            ,
            e.prototype.safeToRemove = function() {
                var t = this.props.safeToRemove;
                null === t || void 0 === t || t()
            }
            ,
            e.prototype.render = function() {
                return null
            }
            ,
            e
        }(l.Component);
        var Sa = {
            borderRadius: i(i({}, xa), {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: xa,
            borderTopRightRadius: xa,
            borderBottomLeftRadius: xa,
            borderBottomRightRadius: xa,
            boxShadow: wa
        }
          , Aa = {
            measureLayout: function(t) {
                var e = s(ui(), 2)
                  , n = e[0]
                  , r = e[1]
                  , o = (0,
                l.useContext)(Ur);
                return l.createElement(Ea, i({}, t, {
                    layoutGroup: o,
                    switchLayoutGroup: (0,
                    l.useContext)(zr),
                    isPresent: n,
                    safeToRemove: r
                }))
            }
        }
          , Pa = br({
            attachResizeListener: function(t, e) {
                return Co(t, "resize", e)
            },
            measureScroll: function() {
                return {
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }
            },
            checkIsScrollRoot: function() {
                return !0
            }
        })
          , Ta = {
            current: void 0
        }
          , Ca = br({
            measureScroll: function(t) {
                return {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }
            },
            defaultParent: function() {
                if (!Ta.current) {
                    var t = new Pa(0,{});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    Ta.current = t
                }
                return Ta.current
            },
            resetTransform: function(t, e) {
                t.style.transform = null !== e && void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: function(t) {
                return Boolean("fixed" === window.getComputedStyle(t).position)
            }
        })
          , Va = i(i(i(i({}, Mi), ii), Xi), Aa)
          , Ma = Hr((function(t, e) {
            return function(t, e, n, r, o) {
                var a = e.forwardMotionProps
                  , s = void 0 !== a && a
                  , u = qr(t) ? Po : To;
                return i(i({}, u), {
                    preloadedFeatures: n,
                    useRender: fo(s),
                    createVisualElement: r,
                    projectionNodeConstructor: o,
                    Component: t
                })
            }(t, e, Va, ya, Ca)
        }
        ))
    }
}]);
