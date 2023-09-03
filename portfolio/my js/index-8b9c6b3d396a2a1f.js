(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(1954)
        }
        ])
    },
    6939: function(e, t, r) {
        "";
        r.d(t, {
            Z: function() {
                return b
            }
        });
        var a = r(5893)
          , n = r(9411)
          , i = r(3750)
          , s = {
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
        function o(e) {
            var t = e.darkMode
              , r = e.onClick;
            return (0,
            a.jsx)("div", {
                className: "fixed bottom-[1.5rem] md:bottom-[3rem] left-[1.5rem] md:left-[3rem]",
                children: (0,
                a.jsx)(n.E.div, {
                    initial: "hidden",
                    animate: "enter",
                    variants: s,
                    transition: {
                        type: "spring",
                        duration: .8
                    },
                    children: (0,
                    a.jsx)("button", {
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
                        a.jsx)(i.UD2, {
                            size: "3rem"
                        }) : (0,
                        a.jsx)(i.gLD, {
                            size: "3rem"
                        })
                    })
                })
            })
        }
        var l = r(1664)
          , x = r.n(l)
          , d = r(8193)
          , p = r(9583)
          , c = r(471)
          , f = function(e) {
            var t = e.socials;
            return (0,
            a.jsxs)("div", {
                className: "flex justify-center items-center gap-4",
                children: [(0,
                a.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://github.com/alexisurch",
                    title: "Visit my github profile",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    a.jsx)(d.RrF, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                a.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://www.linkedin.com/in/alexander-onyia/",
                    title: "Contact me on LinkedIn",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    a.jsx)(d._iD, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                }), (0,
                a.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "https://twitter.com/alex_analytics1",
                    title: "Contact me on Twitter",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    a.jsx)(p.fWC, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
               
                }), (0,
                a.jsx)("a", {
                    className: "transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark",
                    href: "mailto://alexanderchukwuagoziem@gmail.com",
                    title: "Send directly an email",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0,
                    a.jsx)(c.i7m, {
                        className: "w-10 h-10 md:w-12 md:h-12",
                        size: "3rem"
                    })
                })]
            })
        }
          , m = function(e) {
            var t = e.header;
            return (0,
            a.jsxs)("header", {
                className: "flex flex-row flex-auto justify-between py-8 px-4 sticky top-0 bg-bodyBgColor dark:bg-bodyBgColor-dark z-[21] ",
                children: [(0,
                a.jsx)("div", {
                    className: "flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold font-title",
                    children: (0,
                    a.jsx)(x(), {
                        href: "/#main",
                        children: (0,
                        a.jsx)("a", {
                            className: "flex items-center",
                            children: t.userTag
                        })
                    })
                }), (0,
                a.jsxs)("ul", {
                    className: "hidden lg:flex justify-center items-center gap-[2rem] mx-2",
                    children: [(0,
                    a.jsx)("li", {
                        children: (0,
                        a.jsx)(x(), {
                            href: "/#about",
                            children: (0,
                            a.jsx)("a", {
                                className: "text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors",
                               
                            })
                        })
                    }), (0,
                    a.jsx)("li", {
                        children: (0,
                        a.jsx)(x(), {
                            href: "/work",
                            children: (0,
                            a.jsx)("a", {
                                className: "text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors",
                             
                            })
                        })
                    })]
                }), (0,
                a.jsx)(f, {
                    socials: t.socials
                })]
            })
        }
          , h = r(7294)
          , u = r(7516)
          , j = {
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
        function g() {
            var e = (0,
            h.useState)(!1)
              , t = e[0]
              , r = e[1];
            return (0,
            h.useEffect)((function() {
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
            a.jsx)("div", {
                className: "fixed bottom-[1.5rem] md:bottom-[3rem] right-[1.5rem] md:right-[3rem]",
                children: t && (0,
                a.jsx)(n.E.div, {
                    initial: "hidden",
                    animate: "enter",
                    variants: j,
                    transition: {
                        type: "spring",
                        duration: .8
                    },
                    children: (0,
                    a.jsx)("button", {
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
                        a.jsx)(u.y02, {
                            size: "3rem"
                        })
                    })
                })
            })
        }
        var y = {
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
          , b = function(e) {
            var t = e.children
              , r = e.darkMode
              , i = e.onClick
              , s = e.header;
            return (0,
            a.jsxs)("div", {
                className: "max-w-[1280px] w-full min-h-screen h-max m-auto relative",
                children: [(0,
                a.jsx)(m, {
                    header: s
                }), (0,
                a.jsx)(n.E.main, {
                    initial: "hidden",
                    animate: "enter",
                    exit: "exit",
                    variants: y,
                    transition: {
                        type: "linear",
                        duration: .8
                    },
                    children: t
                }), (0,
                a.jsxs)("footer", {
                    className: "text-accent-dark/40 text-xl w-full text-center absolute bottom-[20px]",
                    children: ["\xa9 2023 ", s.name, ". All Rights Reserved."]
                }), (0,
                a.jsx)(g, {}), (0,
                a.jsx)(o, {
                    darkMode: r,
                    onClick: i
                })]
            })
        }
    },
    1954: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSG: function() {
                return w
            },
            default: function() {
                return v
            }
        });
        var a = r(5893)
          , n = r(7294)
          , i = r(9008)
          , s = r.n(i)
          , o = r(6939)
          , l = r(3614)
          , x = r.n(l)
          , d = r(1664)
          , p = r.n(d)
          , c = r(7106)
          , f = function(e) {
            var t = e.intro
              , r = (0,
            n.useRef)()
              , i = (0,
            n.useRef)();
            return (0,
            n.useEffect)((function() {
                return i.current = new (x())(r.current,{
                    strings: t.designations,
                    typeSpeed: 50,
                    backSpeed: 50,
                    loop: !0
                }),
                function() {
                    i.current.destroy()
                }
            }
            ), []),
            (0,
            a.jsx)("section", {
                id: "introText",
                className: "flex flex-row justify-center items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden",
                children: (0,
                a.jsxs)("div", {
                    className: "md:w-[93%] lg:w-[100%] flex flex-col mx-auto lg:px-44 xl:px-0",
                    children: [(0,
                    a.jsxs)("h2", {
                        className: "font-title font-[800] text-[26px] md:text-[56px] lg:text-[65px] leading-[32px] md:leading-[56px] lg:leading-[72px] w-max max-w-[100%] pt-[16px] md:pt-[40px] lg:pt-[30px] pb-[8px] md:pb-[12px] lg:pb-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]",
                        children: ["Hello, ", (0,
                        a.jsx)("br", {}), "I am Onyia Alexander"]
                    }), (0,
                    a.jsxs)("p", {
                        className: "max-w-[670px] lg:max-w-[800px] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300]",
                        children: [(0,
                        a.jsxs)("span", {
                            className: "flex gap-4",
                            children: ["I am a", (0,
                            a.jsx)("span", {
                                title: "my designations",
                                className: "font-title",
                                ref: r
                            })]
                        }), t.text, (0,
                        a.jsx)("br", {}), "Have a look at my", " ", (0,
                        a.jsx)("a", {
                            className: "font-medium text-button hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-all rounded-[5px] hover:animate-pulse",
                            href: "https://drive.google.com/file/d/11b2TVXjudXZAarUCiD5I6A27_i0BlWBz/view?usp=drive_link",
                            title: "https://drive.google.com/file/d/11b2TVXjudXZAarUCiD5I6A27_i0BlWBz/view?usp=drive_link",
                            target: "_blank",
                            rel: "https://drive.google.com/file/d/11b2TVXjudXZAarUCiD5I6A27_i0BlWBz/view?usp=drive_link",
                            children: "Resume"
                        }), (0,
                        a.jsx)(p(), {
                            href: "https://alexisurch.github.io/Alexander-s-portfolio-website-page-/",
                            title: "my projects and work experience",
                            children: (0,
                            a.jsxs)("a", {
                                className: "group mt-8 flex justify-center items-center h-[33px] md:h-[60px] w-[71px] md:w-[150px] bg-background1-dark dark:bg-background1 text-primary-dark dark:text-primary font-bold transition-all rounded-2xl",
                                children: ["VIEW PROJECTS", (0,
                                a.jsx)("span", {
                                    className: "ml-2 animate-pulse hidden group-hover:inline",
                                    children: (0,
                                    a.jsx)(c.vi0, {})
                                })]
                            })
                        })]
                    })]
                })
            })
        }
        
          
        , m = function(e) {
            var t = e.darkMode;
            return (0,
            a.jsx)(a.Fragment, {
                children: t ? (0,
                a.jsx)("div", {
                   
                    children: (0,
                    a.jsxs)("svg", {
                     
                        
                       
                        children: [(0,
                        a.jsxs)("g", {
                            opacity: "0.25",
                            children: [(0,
                            a.jsx)("path", {
                                
                            }), (0,
                            a.jsx)("path", {
                                
                            }), (0,
                            a.jsx)("path", {
                               
                            })]
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "295.027",
                            cy: "193.118",
                            transform: "translate(-295.027 -193.118)",
                            rx: "1.07306",
                            ry: "1.07433",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M294.685 193.474L268.932 219.258",
                            transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "295.027",
                            cy: "193.118",
                            transform: "translate(-295.027 -193.118)",
                            rx: "1.07306",
                            ry: "1.07433",
                            fill: "#46737",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M294.685 193.474L268.932 219.258",
                            transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "476.525",
                            cy: "363.313",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M476.171 362.952L450.417 337.168",
                            transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "382.164",
                            cy: "155.029",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M381.81 154.669L356.057 128.885",
                            transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "333.324",
                            cy: "382.691",
                            rx: "1.07306",
                            ry: "1.07433",
                            transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "0",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_1"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M333.667 382.335L359.42 356.551",
                            transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "0",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_1"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "165.524",
                            cy: "93.9596",
                            rx: "1.07306",
                            ry: "1.07433",
                            transform: "translate(-165.524 -93.9596)",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "3",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M165.182 94.3159L139.429 120.1",
                            transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "3",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "476.525",
                            cy: "363.313",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                            fill: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "12s",
                                begin: "4",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M476.171 362.952L450.417 337.168",
                            transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                            stroke: "rgba(255,255,255, .5)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "12s",
                                begin: "4",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsxs)("defs", {
                            children: [(0,
                            a.jsxs)("radialGradient", {
                                id: "paint0_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("radialGradient", {
                                id: "paint1_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("radialGradient", {
                                id: "paint2_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint3_linear",
                                x1: "295.043",
                                y1: "193.116",
                                x2: "269.975",
                                y2: "218.154",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint4_linear",
                                x1: "476.529",
                                y1: "363.31",
                                x2: "451.461",
                                y2: "338.272",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint5_linear",
                                x1: "382.168",
                                y1: "155.027",
                                x2: "357.1",
                                y2: "129.989",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint6_linear",
                                x1: "333.309",
                                y1: "382.693",
                                x2: "358.376",
                                y2: "357.655",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fff"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint7_linear",
                                x1: "165.54",
                                y1: "93.9578",
                                x2: "140.472",
                                y2: "118.996",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fff",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint8_linear",
                                x1: "414.367",
                                y1: "301.156",
                                x2: "439.435",
                                y2: "276.118",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint9_linear",
                                x1: "515.943",
                                y1: "288.238",
                                x2: "541.339",
                                y2: "291.454",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint10_linear",
                                x1: "117.001",
                                y1: "230.619",
                                x2: "117.36",
                                y2: "258.193",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fff"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fff",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint11_linear",
                                x1: "476.529",
                                y1: "363.31",
                                x2: "451.461",
                                y2: "338.272",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                }) : (0,
                a.jsx)("div", {
                    
                    children: (0,
                    a.jsxs)("svg", {
                        
                        children: [(0,
                        a.jsxs)("g", {
                           
                            children: [(0,
                            a.jsx)("path", {
                              
                            }), (0,
                            a.jsx)("path", {
                           
                            }), (0,
                            a.jsx)("path", {
                              
                            })]
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "295.027",
                            cy: "193.118",
                            transform: "translate(-295.027 -193.118)",
                            rx: "1.07306",
                            ry: "1.07433",
                            fill: "#17181F",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M294.685 193.474L268.932 219.258",
                            transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                            stroke: "url(#paint3_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "295.027",
                            cy: "193.118",
                            transform: "translate(-295.027 -193.118)",
                            rx: "1.07306",
                            ry: "1.07433",
                            fill: "#46737",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M294.685 193.474L268.932 219.258",
                            transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                            stroke: "url(#paint7_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_2"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "476.525",
                            cy: "363.313",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                            fill: "#17181F",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M476.171 362.952L450.417 337.168",
                            transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                            stroke: "url(#paint4_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "382.164",
                            cy: "155.029",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
                            fill: "#17181F",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M381.81 154.669L356.057 128.885",
                            transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
                            stroke: "url(#paint5_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "1",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "333.324",
                            cy: "382.691",
                            rx: "1.07306",
                            ry: "1.07433",
                            transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
                            fill: "#17181F",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "0",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_1"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M333.667 382.335L359.42 356.551",
                            transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
                            stroke: "url(#paint6_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "5s",
                                begin: "0",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_1"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "165.524",
                            cy: "93.9596",
                            rx: "1.07306",
                            ry: "1.07433",
                            transform: "translate(-165.524 -93.9596)",
                            fill: "#17181F",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "3",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M165.182 94.3159L139.429 120.1",
                            transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
                            stroke: "url(#paint7_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "10s",
                                begin: "3",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("ellipse", {
                            cx: "476.525",
                            cy: "363.313",
                            rx: "1.07433",
                            ry: "1.07306",
                            transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                            fill: "#fefefe",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "12s",
                                begin: "4",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsx)("path", {
                            d: "M476.171 362.952L450.417 337.168",
                            transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                            stroke: "url(#paint11_linear)",
                            children: (0,
                            a.jsx)("animateMotion", {
                                dur: "12s",
                                begin: "4",
                                repeatCount: "indefinite",
                                rotate: "auto",
                                children: (0,
                                a.jsx)("mpath", {
                                    xlinkHref: "#path_0"
                                })
                            })
                        }), (0,
                        a.jsxs)("defs", {
                            children: [(0,
                            a.jsxs)("radialGradient", {
                                id: "paint0_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("radialGradient", {
                                id: "paint1_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("radialGradient", {
                                id: "paint2_radial",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(301 301) rotate(90) scale(300)",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint3_linear",
                                x1: "295.043",
                                y1: "193.116",
                                x2: "269.975",
                                y2: "218.154",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint4_linear",
                                x1: "476.529",
                                y1: "363.31",
                                x2: "451.461",
                                y2: "338.272",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint5_linear",
                                x1: "382.168",
                                y1: "155.027",
                                x2: "357.1",
                                y2: "129.989",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint6_linear",
                                x1: "333.309",
                                y1: "382.693",
                                x2: "358.376",
                                y2: "357.655",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint7_linear",
                                x1: "165.54",
                                y1: "93.9578",
                                x2: "140.472",
                                y2: "118.996",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint8_linear",
                                x1: "414.367",
                                y1: "301.156",
                                x2: "439.435",
                                y2: "276.118",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint9_linear",
                                x1: "515.943",
                                y1: "288.238",
                                x2: "541.339",
                                y2: "291.454",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint10_linear",
                                x1: "117.001",
                                y1: "230.619",
                                x2: "117.36",
                                y2: "258.193",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#17181F"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#17181F",
                                    stopOpacity: "0"
                                })]
                            }), (0,
                            a.jsxs)("linearGradient", {
                                id: "paint11_linear",
                                x1: "476.529",
                                y1: "363.31",
                                x2: "451.461",
                                y2: "338.272",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                a.jsx)("stop", {
                                    stopColor: "#fefefe"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#fefefe",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , h = (r(5675),
        function(e) {
            var t = e.about;
            return (0,
            a.jsx)("section", {
                className: "relative",
                children: (0,
                a.jsxs)("article", {
                    className: "flex flex-col lg:px-48 mx-auto w-[calc(100vw-32px)] lg:w-auto max-w-[1040px] box-content relative overflow-visible",
                    id: "about",
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-[32px] md:w-[48px] lg:w-[64px] h-[2px] md:h-[4px] lg:h-[6px] my-[2rem] lg:my-[4rem] rounded-[10px] bg-primary dark:bg-primary-dark"
                    }), (0,
                    a.jsxs)("h2", {
                        className: "relative w-full font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[48px] lg:leading-[56px] h-[40px] md:h-[48px] lg:h-[56px] max-w-[100%] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible",
                        children: ["About Me", (0,
                        a.jsx)("img", {

                            src: "images/profile.jpg",
                            alt: "my picture",
                            className: "absolute right-[10px] xl:right-[-100px] top-[-55px] xl:top-0 h-[100px] xl:h-[300px] rounded-[50%] border-2 xl:border-8 border-background1-dark dark:border-background1"
                        })]
                    }), (0,
                    a.jsx)("p", {
                        className: "max-w-[670px] lg:max-w-[800px] text-[14px] md:text-[18px] lg:text-[22px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300] pb-[3.6rem]",
                        children: t.info
                    })]
                })
            })
        }
        )
          , u = r(1799)
          , j = r(9583)
          , g = function(e) {
            var t = e.icon
              , r = e.course
              , n = e.institution
              , i = e.duration
              , s = e.gpa;
            return (0,
            a.jsxs)("div", {
                className: "flex flex-row max-w-[450px] min-h-[110px] m-2 p-4 bg-primary-[0.1%] bg-primary/[0.05] dark:bg-primary-dark/[0.03] rounded-[10px] items-center gap-8",
                children: [(0,
                a.jsxs)("span", {
                    children: ["" === t ? (0,
                    a.jsx)(j.VI, {
                        size: "6rem"
                    }) : "", "university" === t ? (0,
                    a.jsx)(j.Q7H, {
                        size: "6rem"
                    }) : ""]
                }), (0,
                a.jsxs)("span", {
                    className: "flex-grow flex flex-col justify-center",
                    children: [(0,
                    a.jsx)("h4", {
                        className: "font-bold font-title text-[18px] lg:text-[22px] text-primary dark:text-primary-dark",
                        children: r
                    }), (0,
                    a.jsx)("h5", {
                        className: "font-bold font-title text-[16px] lg:text-[20px] text-primary/60 dark:text-primary-dark/60",
                        children: n
                    }), (0,
                    a.jsxs)("span", {
                        className: "flex justify-between font-title text-[14px] lg:text-[18px] text-primary/50 dark:text-primary-dark/50 pr-8",
                        children: [i, " ", (0,
                        a.jsx)("span", {
                            children: s
                        })]
                    })]
                })]
            })
        }
          , y = function(e) {
            var t = e.education;
            return (0,
            a.jsx)("section", {
                children: (0,
                a.jsxs)("article", {
                    className: "flex flex-col lg:px-48 mx-auto w-[calc(100vw-32px)] lg:w-auto max-w-[1040px] box-content ",
                    id: "about",
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-[32px] md:w-[48px] lg:w-[64px] h-[2px] md:h-[4px] lg:h-[6px] my-[2rem] lg:my-[4rem] rounded-[10px] bg-primary dark:bg-primary-dark"
                    }), (0,
                    a.jsx)("h2", {
                        className: "relative w-full font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[48px] lg:leading-[56px] h-[40px] md:h-[48px] lg:h-[56px] max-w-[100%] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible",
                        children: "Education"
                    }), (0,
                    a.jsx)("div", {
                        className: " pb-[3.6rem] flex flex-wrap",
                        children: t.map((function(e, t) {
                            return (0,
                            a.jsx)(g, (0,
                            u.Z)({}, e), t)
                        }
                        ))
                    })]
                })
            })
        }
          , b = r(5434)
          , k = function(e) {
            var t = e.icon
              , r = e.position
              , n = e.institution
              , i = e.duration;
            return (0,
            a.jsxs)("div", {
                className: "flex flex-row max-w-[450px] min-h-[110px] m-2 p-4 bg-primary-[0.1%] bg-primary/[0.05] dark:bg-primary-dark/[0.03] rounded-[10px] items-center gap-8",
                children: [(0,
                a.jsxs)("span", {
                    children: ["remote" === t ? (0,
                    a.jsx)(b.zc2, {
                        size: "6rem"
                    }) : "", "work" === t ? (0,
                    a.jsx)(b.CvH, {
                        size: "6rem"
                    }) : ""]
                }), (0,
                a.jsxs)("span", {
                    className: "flex-grow flex flex-col justify-center",
                    children: [(0,
                    a.jsx)("h4", {
                        className: "font-bold font-title text-[18px] lg:text-[22px] text-primary dark:text-primary-dark",
                        children: r
                    }), (0,
                    a.jsx)("h5", {
                        className: "font-bold font-title text-[16px] lg:text-[20px] text-primary/60 dark:text-primary-dark/60",
                        children: n
                    }), (0,
                        a.jsx)("span", {
                            className: "font-title text-[14px] lg:text-[18px] text-primary/50 dark:text-primary-dark/50 pr-8",
                            children: i
                        })]
                })]
            })
        }
          , C = function(e) {
            var t = e.jobs;
            return (0,
            a.jsx)("section", {
                children: (0,
                a.jsxs)("article", {
                    className: "flex flex-col lg:px-48 mx-auto w-[calc(100vw-32px)] lg:w-auto max-w-[1040px] box-content ",
                    id: "about",
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-[32px] md:w-[48px] lg:w-[64px] h-[2px] md:h-[4px] lg:h-[6px] my-[2rem] lg:my-[4rem] rounded-[10px] bg-primary dark:bg-primary-dark"
                    }), (0,
                    a.jsx)("h2", {
                        className: "relative w-full font-title font-[800] text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[48px] lg:leading-[56px] h-[40px] md:h-[48px] lg:h-[56px] max-w-[100%] mb-[8px] md:mb-[12px] lg:mb-[16px] overflow-visible",
                        children: "Work Experience"
                    }), (0,
                    a.jsx)("div", {
                        className: " pb-[3.6rem] flex flex-wrap",
                        children: t.map((function(e, t) {
                            return (0,
                            a.jsx)(k, (0,
                            u.Z)({}, e), t)
                        }
                        ))
                    })]
                })
            })
        }
          , w = !0
          , v = function(e) {
            var t = e.jobs
              , r = e.education
              , i = e.about
              , l = e.intro
              , x = e.header
              , d = (0,
            n.useState)(!0)
              , p = d[0]
              , c = d[1];
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(s(), {
                    children: (0,
                    a.jsx)("title", {
                        children: "Onyia Alexander"
                    })
                }), (0,
                a.jsxs)(o.Z, {
                    darkMode: p,
                    onClick: c,
                    header: x,
                    children: [(0,
                    a.jsxs)("section", {
                        id: "main",
                        className: "grid items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-2 h-screen top-[-86px]",
                        children: [(0,
                        a.jsx)(f, {
                            intro: l
                        }), (0,
                        a.jsx)(m, {
                            darkMode: p
                        })]
                    }), (0,
                    a.jsx)(h, {
                        about: i
                    }), (0,
                    a.jsx)(C, {
                        jobs: t
                    }), (0,
                    a.jsx)(y, {
                        education: r
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [445, 13, 617, 955, 874, 907, 228, 960, 579, 774, 888, 179], (function() {
        return t = 5557,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
