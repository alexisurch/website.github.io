(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[337], {
    5936: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["", function() {
            return r(8870)
        }
        ])
    },
    6939: function(e, t, r) {
        "";
        r.d(t, {
            Z: function() {
                return k
            }
        });
        var n = r(5893)
          , a = r(9411)
          , o = r(3750)
          , i = {
            hidden: {
                scale: 0,
                opacity: 0,
                x: 0,
                y: 150
            },
            enter: {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0
            },
            exit: {
                scale: 0,
                opacity: 0,
                x: 0,
                y: 150
            }
        };
        function s(e) {
            var t = e.darkMode
              , r = e.onClick;
            return (0,
            n.jsx)("div", {
                className: "fixed bottom-[1.5rem] md:bottom-[3rem] left-[1.5rem] md:left-[3rem]",
                children: (0,
                n.jsx)(a.E.div, {
                    initial: "hidden",
                    animate: "enter",
                    variants: i,
                    transition: {
                        type: "spring",
                        duration: .8
                    },
                    children: (0,
                    n.jsx)("button", {
                        className: "flex items-center justify-center w-[4rem] h-[4rem] bg-primary dark:bg-primary-dark text-background1 dark:text-background1-dark cursor-pointer transition-colors hover:bg-#fff rounded-full animate-bounce",
                        onClick: function() {
                            document.querySelector("html").classList.toggle("dark"),
                            r((function(e) {
                                return !e
                            }
                            ))
                        },
                        "aria-label": "Scroll to top",
                        type: "button",
                        children: t ? (0,
                        n.jsx)(o.UD2, {
                            size: "3rem"
                        }) : (0,
                        n.jsx)(o.gLD, {
                            size: "3rem"
                        })
                    })
                })
            })
        }
        var l = r(1664)
          , c = r.n(l)
          , d = r(8193)
          , x = r(9583)
          , m = r(471)
          , u = function(e) {
            var t = e.socials;
            return (0,
            n.jsxs)("div", {
                className: "flex justify-center items-center gap-4",
                children: [(0,
                n.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://github.com/alexisurch",
                    title: "Visit my github profile",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)(d.RrF, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                n.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://www.linkedin.com/in/alexander-onyia/",
                    title: "Contact me on LinkedIn",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)(d._iD, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                n.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://twitter.com/alex_analytics1",
                    title: "Contact me on Twitter",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)(x.fWC, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                n.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: t.medium,
                    title: "Read my blogs on Medium",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)(o.aY7, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                n.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "mailto://alexanderchukwuagoziem@gmail.com",
                    title: "Send directly an email",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)(m.i7m, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                })]
            })
        }
          , h = function(e) {
            var t = e.header;
            return (0,
            n.jsxs)("header", {
                className: "flex flex-row flex-auto justify-between py-8 px-4 sticky top-0 bg-bodyBgColor dark:bg-bodyBgColor-dark z-[21] ",
                children: [(0,
                n.jsx)("div", {
                    className: "flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold font-title",
                    children: (0,
                    n.jsx)(c(), {
                        href: "/#main",
                        children: (0,
                        n.jsx)("a", {
                            className: "flex items-center",
                            children: t.userTag
                        })
                    })
                }), (0,
                n.jsxs)("ul", {
                    className: "hidden lg:flex justify-center items-center gap-[2rem] mx-2",
                    children: [(0,
                    n.jsx)("li", {
                        children: (0,
                        n.jsx)(c(), {
                            href: "/#about",
                            children: (0,
                            n.jsx)("a", {
                                className: "text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors",
                                children: "About"
                            })
                        })
                    }), (0,
                    n.jsx)("li", {
                        children: (0,
                        n.jsx)(c(), {
                            href: "/work",
                            children: (0,
                            n.jsx)("a", {
                                className: "text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors",
                                children: "Projects"
                            })
                        })
                    })]
                }), (0,
                n.jsx)(u, {
                    socials: t.socials
                })]
            })
        }
          , p = r(7294)
          , f = r(7516)
          , b = {
            hidden: {
                scale: 0,
                opacity: 0,
                x: 0,
                y: 150
            },
            enter: {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0
            },
            exit: {
                scale: 0,
                opacity: 0,
                x: 0,
                y: 150
            }
        };
        function v() {
            var e = (0,
            p.useState)(!1)
              , t = e[0]
              , r = e[1];
            return (0,
            p.useEffect)((function() {
                var e = function() {
                    window.pageYOffset > 500 ? r(!0) : r(!1)
                };
                return window.addEventListener("scroll", e),
                function() {
                    return window.removeEventListener("scroll", e)
                }
            }
            ), []),
            (0,
            n.jsx)("div", {
                className: "fixed bottom-[1.5rem] md:bottom-[3rem] right-[1.5rem] md:right-[3rem]",
                children: t && (0,
                n.jsx)(a.E.div, {
                    initial: "hidden",
                    animate: "enter",
                    variants: b,
                    transition: {
                        type: "spring",
                        duration: .8
                    },
                    children: (0,
                    n.jsx)("button", {
                        className: "flex items-center justify-center w-[4rem] h-[4rem] bg-primary dark:bg-primary-dark text-background1 dark:text-background1-dark cursor-pointer transition-colors hover:bg-#fff rounded-full",
                        onClick: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        "aria-label": "Scroll to top",
                        type: "button",
                        children: (0,
                        n.jsx)(f.y02, {
                            size: "3rem"
                        })
                    })
                })
            })
        }
        var j = {
            hidden: {
                opacity: 0,
                x: -200,
                y: 0
            },
            enter: {
                opacity: 1,
                x: 0,
                y: 0
            },
            exit: {
                opacity: 0,
                x: 0,
                y: -100
            }
        }
          , k = function(e) {
            var t = e.children
              , r = e.darkMode
              , o = e.onClick
              , i = e.header;
            return (0,
            n.jsxs)("div", {
                className: "max-w-[1280px] w-full min-h-screen h-max m-auto relative",
                children: [(0,
                n.jsx)(h, {
                    header: i
                }), (0,
                n.jsx)(a.E.main, {
                    initial: "hidden",
                    animate: "enter",
                    exit: "exit",
                    variants: j,
                    transition: {
                        type: "linear",
                        duration: .8
                    },
                    children: t
                }), (0,
                n.jsxs)("footer", {
                    className: "text-accent-dark/40 text-xl w-full text-center absolute bottom-[20px]",
                    children: ["\xa9 2023 ", i.name, ". All Rights Reserved."]
                }), (0,
                n.jsx)(v, {}), (0,
                n.jsx)(s, {
                    darkMode: r,
                    onClick: o
                })]
            })
        }
    },
    8870: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSG: function() {
                return x
            }
        });
        var n = r(5893)
          , a = r(9008)
          , o = r.n(a)
          , i = r(5675)
          , s = r.n(i)
          , l = r(7294)
          , c = r(6939)
          , d = function(e) {
            var t = e.project;
            return (0,
            n.jsxs)("div", {
                className: "max-w-[250px] text-center text-primary dark:text-primary-dark",
                children: [(0,
                n.jsx)("a", {
                    href: t.link,
                    title: "".concat(t.name, " link"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-[250px] h-[130px] bg-background1-dark/20 dark:bg-background1/20 overflow-hidden rounded-3xl",
                        children: (0,
                        n.jsx)(s(), {
                            src: "/projects/".concat(t.image),
                            alt: t.name,
                            width: "250px",
                            height: "130px"
                        })
                    })
                }), (0,
                n.jsx)("div", {
                    className: "text-[22px] font-title font-extrabold",
                    children: t.name
                }), (0,
                n.jsx)("div", {
                    className: "text-[15px]",
                    children: t.description
                })]
            })
        }
          , x = !0;
        t.default = function(e) {
            var t = e.header
              , r = e.projects
              , a = (0,
            l.useState)(!0)
              , i = a[0]
              , s = a[1];
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(o(), {
                    children: (0,
                    n.jsx)("title", {
                        children: "My Work and Projects"
                    })
                }), (0,
                n.jsx)(c.Z, {
                    darkMode: i,
                    onClick: s,
                    header: t,
                    children: (0,
                    n.jsx)("article", {
                        className: "min-w-[400px] max-w-[770px] px-4 mx-auto pb-24 ",
                        children: (0,
                        n.jsxs)("main", {
                            className: " w-full flex flex-col items-center gap-8",
                            children: [(0,
                            n.jsx)("h2", {
                                className: "font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center",
                                children: "My Work"
                            }), (0,
                            n.jsx)("section", {
                                className: "w-[80%] flex flex-row flex-wrap gap-8 justify-evenly",
                                children: r.myProjects.map((function(e, t) {
                                    return (0,
                                    n.jsx)(d, {
                                        project: e
                                    }, t)
                                }
                                ))
                            }), (0,
                            n.jsx)("h2", {
                                className: "font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center",
                                children: "Collaborations"
                            }), (0,
                            n.jsx)("section", {
                                className: "w-[80%] h-auto flex flex-row flex-wrap gap-8 justify-evenly",
                                children: r.collaborations.map((function(e, t) {
                                    return (0,
                                    n.jsx)(d, {
                                        project: e
                                    }, t)
                                }
                                ))
                            }), (0,
                            n.jsx)("h2", {
                                className: "font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible mt-8 text-center",
                                children: "Open Source Contributions"
                            }), (0,
                            n.jsx)("section", {
                                className: "w-[80%] h-auto flex flex-row flex-wrap gap-8 justify-evenly",
                                children: r.openSource.map((function(e, t) {
                                    return (0,
                                    n.jsx)(d, {
                                        project: e
                                    }, t)
                                }
                                ))
                            })]
                        })
                    })
                })]
            })
        }
    },
    8357: function(e, t, r) {
        "use strict";
        r.d(t, {
            w_: function() {
                return c
            }
        });
        var n = r(7294)
          , a = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , o = n.createContext && n.createContext(a)
          , i = function() {
            return i = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            i.apply(this, arguments)
        }
          , s = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
            }
            return r
        };
        function l(e) {
            return e && e.map((function(e, t) {
                return n.createElement(e.tag, i({
                    key: t
                }, e.attr), l(e.child))
            }
            ))
        }
        function c(e) {
            return function(t) {
                return n.createElement(d, i({
                    attr: i({}, e.attr)
                }, t), l(e.child))
            }
        }
        function d(e) {
            var t = function(t) {
                var r, a = e.attr, o = e.size, l = e.title, c = s(e, ["attr", "size", "title"]), d = o || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", i({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, a, c, {
                    className: r,
                    style: i(i({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: d,
                    width: d,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && n.createElement("title", null, l), e.children)
            };
            return void 0 !== o ? n.createElement(o.Consumer, null, (function(e) {
                return t(e)
            }
            )) : t(a)
        }
    }
}, function(e) {
    e.O(0, [445, 13, 617, 955, 874, 960, 774, 888, 179], (function() {
        return t = 5936,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
