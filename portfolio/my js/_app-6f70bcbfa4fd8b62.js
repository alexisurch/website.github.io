(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    3837: function(e, t, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return o(231)
        }
        ])
    },
    231: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, {
            default: function() {
                return f
            }
        });
        var r = o(1799)
          , a = o(5893)
          , n = o(9008)
          , p = o.n(n)
          , i = o(7294);
        function l() {
            return l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var r in o)
                        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            }
            ,
            l.apply(this, arguments)
        }
        function h(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.__proto__ = t
        }
        var c = {
            templateTitle: "",
            noindex: !1,
            nofollow: !1,
            defaultOpenGraphImageWidth: 0,
            defaultOpenGraphImageHeight: 0,
            defaultOpenGraphVideoWidth: 0,
            defaultOpenGraphVideoHeight: 0
        }
          , s = function(e, t, o) {
            void 0 === t && (t = []);
            var r = void 0 === o ? {} : o
              , a = r.defaultWidth
              , n = r.defaultHeight;
            return t.reduce((function(t, o, r) {
                return t.push(i.createElement("meta", {
                    key: "og:" + e + ":0" + r,
                    property: "og:" + e,
                    content: o.url
                })),
                o.alt && t.push(i.createElement("meta", {
                    key: "og:" + e + ":alt0" + r,
                    property: "og:" + e + ":alt",
                    content: o.alt
                })),
                o.secureUrl && t.push(i.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + r,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString()
                })),
                o.type && t.push(i.createElement("meta", {
                    key: "og:" + e + ":type0" + r,
                    property: "og:" + e + ":type",
                    content: o.type.toString()
                })),
                o.width ? t.push(i.createElement("meta", {
                    key: "og:" + e + ":width0" + r,
                    property: "og:" + e + ":width",
                    content: o.width.toString()
                })) : a && t.push(i.createElement("meta", {
                    key: "og:" + e + ":width0" + r,
                    property: "og:" + e + ":width",
                    content: a.toString()
                })),
                o.height ? t.push(i.createElement("meta", {
                    key: "og:" + e + ":height" + r,
                    property: "og:" + e + ":height",
                    content: o.height.toString()
                })) : n && t.push(i.createElement("meta", {
                    key: "og:" + e + ":height" + r,
                    property: "og:" + e + ":height",
                    content: n.toString()
                })),
                t
            }
            ), [])
        }
          , d = function(e) {
            var t, o, r, a = [];
            e.titleTemplate && (c.templateTitle = e.titleTemplate);
            var n = "";
            e.title ? (n = e.title,
            c.templateTitle && (n = c.templateTitle.replace(/%s/g, (function() {
                return n
            }
            )))) : e.defaultTitle && (n = e.defaultTitle),
            n && a.push(i.createElement("title", {
                key: "title"
            }, n));
            var p, h, d = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex, u = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow, m = "";
            if (e.robotsProps) {
                var f = e.robotsProps
                  , g = f.nosnippet
                  , y = f.maxSnippet
                  , G = f.maxImagePreview
                  , k = f.maxVideoPreview
                  , v = f.noarchive
                  , b = f.noimageindex
                  , E = f.notranslate
                  , w = f.unavailableAfter;
                m = (g ? ",nosnippet" : "") + (y ? ",max-snippet:" + y : "") + (G ? ",max-image-preview:" + G : "") + (v ? ",noarchive" : "") + (w ? ",unavailable_after:" + w : "") + (b ? ",noimageindex" : "") + (k ? ",max-video-preview:" + k : "") + (E ? ",notranslate" : "")
            }
            (d || u ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
            e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
            a.push(i.createElement("meta", {
                key: "robots",
                name: "robots",
                content: (d ? "noindex" : "index") + "," + (u ? "nofollow" : "follow") + m
            }))) : a.push(i.createElement("meta", {
                key: "robots",
                name: "robots",
                content: "index,follow" + m
            })),
            e.description && a.push(i.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description
            })),
            e.mobileAlternate && a.push(i.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href
            })),
            e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function(e) {
                a.push(i.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href
                }))
            }
            )),
            e.twitter && (e.twitter.cardType && a.push(i.createElement("meta", {
                key: "twitter:card",
                name: "twitter:card",
                content: e.twitter.cardType
            })),
            e.twitter.site && a.push(i.createElement("meta", {
                key: "twitter:site",
                name: "twitter:site",
                content: e.twitter.site
            })),
            e.twitter.handle && a.push(i.createElement("meta", {
                key: "twitter:creator",
                name: "twitter:creator",
                content: e.twitter.handle
            }))),
            e.facebook && e.facebook.appId && a.push(i.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId
            })),
            null != (t = e.openGraph) && t.title || n) && a.push(i.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (p = e.openGraph) ? void 0 : p.title) || n
            }));
            (null != (o = e.openGraph) && o.description || e.description) && a.push(i.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content: (null == (h = e.openGraph) ? void 0 : h.description) || e.description
            }));
            if (e.openGraph) {
                if ((e.openGraph.url || e.canonical) && a.push(i.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical
                })),
                e.openGraph.type) {
                    var _ = e.openGraph.type.toLowerCase();
                    a.push(i.createElement("meta", {
                        key: "og:type",
                        property: "og:type",
                        content: _
                    })),
                    "profile" === _ && e.openGraph.profile ? (e.openGraph.profile.firstName && a.push(i.createElement("meta", {
                        key: "profile:first_name",
                        property: "profile:first_name",
                        content: e.openGraph.profile.firstName
                    })),
                    e.openGraph.profile.lastName && a.push(i.createElement("meta", {
                        key: "profile:last_name",
                        property: "profile:last_name",
                        content: e.openGraph.profile.lastName
                    })),
                    e.openGraph.profile.username && a.push(i.createElement("meta", {
                        key: "profile:username",
                        property: "profile:username",
                        content: e.openGraph.profile.username
                    })),
                    e.openGraph.profile.gender && a.push(i.createElement("meta", {
                        key: "profile:gender",
                        property: "profile:gender",
                        content: e.openGraph.profile.gender
                    }))) : "book" === _ && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.book.isbn && a.push(i.createElement("meta", {
                        key: "book:isbn",
                        property: "book:isbn",
                        content: e.openGraph.book.isbn
                    })),
                    e.openGraph.book.releaseDate && a.push(i.createElement("meta", {
                        key: "book:release_date",
                        property: "book:release_date",
                        content: e.openGraph.book.releaseDate
                    })),
                    e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e
                        }))
                    }
                    ))) : "article" === _ && e.openGraph.article ? (e.openGraph.article.publishedTime && a.push(i.createElement("meta", {
                        key: "article:published_time",
                        property: "article:published_time",
                        content: e.openGraph.article.publishedTime
                    })),
                    e.openGraph.article.modifiedTime && a.push(i.createElement("meta", {
                        key: "article:modified_time",
                        property: "article:modified_time",
                        content: e.openGraph.article.modifiedTime
                    })),
                    e.openGraph.article.expirationTime && a.push(i.createElement("meta", {
                        key: "article:expiration_time",
                        property: "article:expiration_time",
                        content: e.openGraph.article.expirationTime
                    })),
                    e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.article.section && a.push(i.createElement("meta", {
                        key: "article:section",
                        property: "article:section",
                        content: e.openGraph.article.section
                    })),
                    e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e
                        }))
                    }
                    ))) : "video.movie" !== _ && "video.episode" !== _ && "video.tv_show" !== _ && "video.other" !== _ || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function(e, t) {
                        e.profile && a.push(i.createElement("meta", {
                            key: "video:actor:0" + t,
                            property: "video:actor",
                            content: e.profile
                        })),
                        e.role && a.push(i.createElement("meta", {
                            key: "video:actor:role:0" + t,
                            property: "video:actor:role",
                            content: e.role
                        }))
                    }
                    )),
                    e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.duration && a.push(i.createElement("meta", {
                        key: "video:duration",
                        property: "video:duration",
                        content: e.openGraph.video.duration.toString()
                    })),
                    e.openGraph.video.releaseDate && a.push(i.createElement("meta", {
                        key: "video:release_date",
                        property: "video:release_date",
                        content: e.openGraph.video.releaseDate
                    })),
                    e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function(e, t) {
                        a.push(i.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e
                        }))
                    }
                    )),
                    e.openGraph.video.series && a.push(i.createElement("meta", {
                        key: "video:series",
                        property: "video:series",
                        content: e.openGraph.video.series
                    })))
                }
                e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
                e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
                e.openGraph.images && e.openGraph.images.length && a.push.apply(a, s("image", e.openGraph.images, {
                    defaultWidth: c.defaultOpenGraphImageWidth,
                    defaultHeight: c.defaultOpenGraphImageHeight
                })),
                e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
                e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
                e.openGraph.videos && e.openGraph.videos.length && a.push.apply(a, s("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight
                })),
                e.openGraph.locale && a.push(i.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale
                })),
                e.openGraph.site_name && a.push(i.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name
                }))
            }
            return e.canonical && a.push(i.createElement("link", {
                rel: "canonical",
                href: e.canonical,
                key: "canonical"
            })),
            e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function(e) {
                var t, o, r;
                a.push(i.createElement("meta", l({
                    key: "meta:" + (null != (t = null != (o = null != (r = e.keyOverride) ? r : e.name) ? o : e.property) ? t : e.httpEquiv)
                }, e)))
            }
            )),
            null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach((function(e) {
                var t;
                a.push(i.createElement("link", l({
                    key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                }, e)))
            }
            )),
            a
        }
          , u = (i.Component,
        function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            return h(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.title
                  , o = e.noindex
                  , r = void 0 !== o && o
                  , a = e.nofollow
                  , n = e.robotsProps
                  , l = e.description
                  , h = e.canonical
                  , c = e.openGraph
                  , s = e.facebook
                  , u = e.twitter
                  , m = e.additionalMetaTags
                  , f = e.titleTemplate
                  , g = e.mobileAlternate
                  , y = e.languageAlternates
                  , G = e.additionalLinkTags;
                return i.createElement(p(), null, d({
                    title: t,
                    noindex: r,
                    nofollow: a,
                    robotsProps: n,
                    description: l,
                    canonical: h,
                    facebook: s,
                    openGraph: c,
                    additionalMetaTags: m,
                    twitter: u,
                    titleTemplate: f,
                    mobileAlternate: g,
                    languageAlternates: y,
                    additionalLinkTags: G
                }))
            }
            ,
            t
        }(i.Component))
          , m = Object.freeze({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        });
        new RegExp("[" + Object.keys(m).join("") + "]","g");
        o(906);
        var f = function(e) {
            var t = e.Component
              , o = e.pageProps;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(u, {
                    title: "Onyia Alexander's Portfolio",
                    description: "The personal portfolio website for Onyia Alexander, data analyst, data scientist, business analyst but most of all an avid learner.",
                    openGraph: {
                        type: "website",
                        locale: "en_GB",
                        url: "",
                        description: "The personal portfolio website for Onyia Alexaner, data analyst, data scientist business analyst, but most of all an avid learner.",
                        site_name: "Onyia Alexander"
                    }
                }), (0,
                a.jsx)(t, (0,
                r.Z)({}, o))]
            })
        }
    },
    906: function() {},
    9008: function(e, t, o) {
        e.exports = o(5443)
    },
    1799: function(e, t, o) {
        "use strict";
        function r(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {}
                  , a = Object.keys(o);
                "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(o).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable
                }
                )))),
                a.forEach((function(t) {
                    r(e, t, o[t])
                }
                ))
            }
            return e
        }
        o.d(t, {
            Z: function() {
                return a
            }
        })
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], (function() {
        return t(3837),
        t(387)
    }
    ));
    var o = e.O();
    _N_E = o
}
]);
