
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
/*! lazysizes - v5.3.2 */

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,i,o){"use strict";var l,d,u={};function s(e,t,a){var n,r;u[e]||(n=i.createElement(t?"link":"script"),r=i.getElementsByTagName("script")[0],t?(n.rel="stylesheet",n.href=e):(n.onload=function(){n.onerror=null,n.onload=null,a()},n.onerror=n.onload,n.src=e),u[e]=!0,u[n.src||n.href]=!0,r.parentNode.insertBefore(n,r))}i.addEventListener&&(l=function(e,t){var a=i.createElement("img");a.onload=function(){a.onload=null,a.onerror=null,a=null,t()},a.onerror=a.onload,a.src=e,a&&a.complete&&a.onload&&a.onload()},addEventListener("lazybeforeunveil",function(e){var t,a,n;if(e.detail.instance==o&&!e.defaultPrevented){var r=e.target;if("none"==r.preload&&(r.preload=r.getAttribute("data-preload")||"auto"),null!=r.getAttribute("data-autoplay"))if(r.getAttribute("data-expand")&&!r.autoplay)try{r.play()}catch(e){}else requestAnimationFrame(function(){r.setAttribute("data-expand","-10"),o.aC(r,o.cfg.lazyClass)});(t=r.getAttribute("data-link"))&&s(t,!0),(t=r.getAttribute("data-script"))&&(e.detail.firesLoad=!0,s(t,null,function(){e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)})),(t=r.getAttribute("data-require"))&&(o.cfg.requireJs?o.cfg.requireJs([t]):s(t)),(a=r.getAttribute("data-bg"))&&(e.detail.firesLoad=!0,l(a,function(){r.style.backgroundImage="url("+(d.test(a)?JSON.stringify(a):a)+")",e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)})),(n=r.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,l(n,function(){r.poster=n,e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)}))}},!(d=/\(|\)|\s|'/)))});


const Confetti = (() => {
    "use strict";
    const e = 10;
    let t,
        o,
        n = 75,
        i = 25,
        r = 1,
        s = !1,
        l = !0,
        a = [],
        d = new Date().getTime();
    function p(e) {
        if (
            ((t = document.createElement("canvas")),
            (o = t.getContext("2d")),
            (t.width = 2 * window.innerWidth),
            (t.height = 2 * window.innerHeight),
            (t.style.position = "fixed"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.width = "calc(100%)"),
            (t.style.height = "calc(100%)"),
            (t.style.margin = 0),
            (t.style.padding = 0),
            (t.style.zIndex = 999999999),
            (t.style.pointerEvents = "none"),
            document.body.appendChild(t),
            null != e)
        ) {
            let t = document.getElementById(e);
            null != t &&
                t.addEventListener("click", (e) => {
                    !(function (e, t) {
                        let o = [];
                        for (let i = 0; i < n; i++) o.push(c(e, t));
                        a.push({ particles: o });
                    })(2 * e.clientX, 2 * e.clientY),
                        l && (e.target.style.visibility = "");
                });
        }
        window.addEventListener("resize", () => {
            (t.width = 2 * window.innerWidth), (t.height = 2 * window.innerHeight);
        });
    }
    function y(e) {
        return e.pos.y - 2 * e.size.x > 2 * window.innerHeight;
    }
    function c(e, t) {
        let o = (16 * Math.random() + 4) * r,
            n = (4 * Math.random() + 4) * r;
        return { pos: { x: e - o / 2, y: t - n / 2 }, vel: h(), size: { x: o, y: n }, rotation: 360 * Math.random(), rotation_speed: 10 * (Math.random() - 0.5), hue: 360 * Math.random(), opacity: 100, lifetime: Math.random() + 0.25 };
    }
    function h() {
        let e = Math.random() - 0.5,
            t = Math.random() - 0.7,
            o = Math.sqrt(e * e + t * t);
        return (t /= o), { x: (e /= o) * (Math.random() * i), y: t * (Math.random() * i) };
    }
    return (
        (p.prototype.setCount = (e) => {
            "number" == typeof e ? (n = e) : console.error("[ERROR] Confetti.setCount() - Input needs to be of type 'number'");
        }),
        (p.prototype.setPower = (e) => {
            "number" == typeof e ? (i = e) : console.error("[ERROR] Confetti.setPower() - Input needs to be of type 'number'");
        }),
        (p.prototype.setSize = (e) => {
            "number" == typeof e ? (r = e) : console.error("[ERROR] Confetti.setSize() - Input needs to be of type 'number'");
        }),
        (p.prototype.setFade = (e) => {
            "boolean" == typeof e ? (s = e) : console.error("[ERROR] Confetti.setFade() - Input needs to be of type 'boolean'");
        }),
        (p.prototype.destroyTarget = (e) => {
            "boolean" == typeof e ? (l = e) : console.error("[ERROR] Confetti.destroyTarget() - Input needs to be of type 'boolean'");
        }),
        window.requestAnimationFrame(function t(n) {
            let i = (n - d) / 1e3;
            d = n;
            for (let t = a.length - 1; t >= 0; t--) {
                let o = a[t];
                for (let t = o.particles.length - 1; t >= 0; t--) {
                    let n = o.particles[t];
                    (n.vel.y += e * (n.size.y / (10 * r)) * i),
                        (n.vel.x += 25 * (Math.random() - 0.5) * i),
                        (n.vel.x *= 0.98),
                        (n.vel.y *= 0.98),
                        (n.pos.x += n.vel.x),
                        (n.pos.y += n.vel.y),
                        (n.rotation += n.rotation_speed),
                        s && (n.opacity -= n.lifetime),
                        y(n) && o.particles.splice(t, 1);
                }
                0 == o.particles.length && a.splice(t, 1);
            }
            !(function () {
                o.clearRect(0, 0, 2 * window.innerWidth, 2 * window.innerHeight);
                for (const d of a)
                    for (const a of d.particles)
                        (e = a.pos.x),
                            (t = a.pos.y),
                            (n = a.size.x),
                            (i = a.size.y),
                            (r = a.rotation),
                            (s = a.hue),
                            (l = a.opacity),
                            o.save(),
                            o.beginPath(),
                            o.translate(e + n / 2, t + i / 2),
                            o.rotate((r * Math.PI) / 180),
                            o.rect(-n / 2, -i / 2, n, i),
                            (o.fillStyle = `hsla(${s}deg, 90%, 65%, ${l}%)`),
                            o.fill(),
                            o.restore();
                var e, t, n, i, r, s, l;
            })(),
                window.requestAnimationFrame(t);
        }),
        p
    );
})();

// Pass in the id of an element
let confetti = new Confetti("heart");

// Edit given parameters
confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);

// card section1

// collapse
$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse")
        .on("show.bs.collapse", function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        })
        .on("hide.bs.collapse", function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        });
});

/* AUTHOR: Osvaldas Valutis, www.osvaldas.info */

var first_time_bars = 1;

$(".video-status").on("click", function () {
    if (!$(this).find(".s-video-playing").get(0)) {
        var e = $(".s-video-playing");
        e.length > 0 && e.get(0).pause();
        let s = $(this).siblings(".video-wrapper").find(".s-video").get(0);
        s.play(),
            $(this).css("display", "none"),
            s.setAttribute("controls", "true"),
            s.classList.add("s-video-playing"),
            $(".s-video-playing")
                .on("ended", function (e) {
                    $(this).removeAttr("controls"), $(this).removeClass("s-video-playing"), $(this).closest(".video-wrapper").siblings(".video-status").css("display", "block");
                })
                .on("pause", function (e) {
                    $(this).removeAttr("controls"), $(this).removeClass("s-video-playing"), $(this).closest(".video-wrapper").siblings(".video-status").css("display", "block");
                });
    }
});
let e = !1,
    s = 0,
    i = {};
function a(e) {
    $(".usecase-mask").animate({ scrollLeft: e }, 300);
}
function t() {
    e ? ($(".home-hero").removeClass("heroplay"), $(".g2-badge-section").removeClass("move-down")) : ($(".home-hero").addClass("heroplay"), $(".g2-badge-section").addClass("move-down")),
        i["ha-1"].initiate(),
        e
            ? ($("#ha-1").get(0).pause(), ($("#ha-1").get(0).currentTime = 0), $("#hm-1").get(0).pause(), ($("#hm-1").get(0).currentTime = 0), (e = !e))
            : ($("#ha-1").get(0).play(),
              $("#ha-1")
                  .on("ended", function (e) {
                      $("#hm-1").get(0).pause(), ($("#hm-1").get(0).currentTime = 0), $(".voice-head-images").removeClass("zoom"), $(".volume-indicator").animate({ opacity: 0 }, 0.2), (s = 0);
                  })
                  .on("pause", function (e) {
                      $(".voice-head-images").removeClass("zoom"), $(".volume-indicator").animate({ opacity: 0 }, 0.2), (s = 0);
                  })
                  .on("timeupdate", function (e) {
                      let i = $("#ha-1").get(0).currentTime;
                      i > 2.5 && i < 3.5 && 0 == s
                          ? ($("#hero-voice-1").find(".voice-head-images").addClass("zoom"), $("#hero-voice-1").find(".volume-indicator").delay(300).animate({ opacity: 1 }, 0.2), s++)
                          : i > 24.5 && i < 25.5 && 1 == s
                          ? ($("#hero-voice-1").find(".volume-indicator").animate({ opacity: 0 }, 0.2),
                            $("#hero-voice-1").find(".voice-head-images").removeClass("zoom"),
                            $("#hero-voice-2").find(".voice-head-images").addClass("zoom"),
                            $("#hero-voice-2").find(".volume-indicator").delay(300).animate({ opacity: 1 }, 0.2),
                            s++)
                          : i > 52.5 && i < 53.5 && 2 == s
                          ? ($("#hero-voice-2").find(".volume-indicator").animate({ opacity: 0 }, 0.2),
                            $("#hero-voice-2").find(".voice-head-images").removeClass("zoom"),
                            $("#hero-voice-3").find(".voice-head-images").addClass("zoom"),
                            $("#hero-voice-3").find(".volume-indicator").delay(300).animate({ opacity: 1 }, 0.2),
                            s++)
                          : i > 70.5 && i < 71.5 && 3 == s
                          ? ($("#hero-voice-3").find(".volume-indicator").animate({ opacity: 0 }, 0.2),
                            $("#hero-voice-3").find(".voice-head-images").removeClass("zoom"),
                            $("#hero-voice-4").find(".voice-head-images").addClass("zoom"),
                            $("#hero-voice-4").find(".volume-indicator").delay(300).animate({ opacity: 1 }, 0.2),
                            s++)
                          : i > 87.5 &&
                            i < 88.5 &&
                            4 == s &&
                            ($("#hero-voice-4").find(".volume-indicator").animate({ opacity: 0 }, 0.2),
                            $("#hero-voice-4").find(".voice-head-images").removeClass("zoom"),
                            $("#hero-voice-5").find(".voice-head-images").addClass("zoom"),
                            $("#hero-voice-5").find(".volume-indicator").delay(300).animate({ opacity: 1 }, 0.2),
                            s++);
                  }),
              $("#hm-1").get(0).play(),
              (e = !e));
}
$(document).ready(function () {
    $(".usecase-block").each(function (e, s) {
        s.id = "uc-" + e;
    }),
        $(".usecase-container").prepend("<div class='spacer'></div>"),
        $(".usecase-container").append("<div class='spacer'></div>"),
        [...document.querySelectorAll(".usecase-audio")].forEach((e) => {
            let s = e.getAttribute("id");
        });
    let e = $(".home-hero-audio").attr("id");
}),
    $(".usecase-block").on("click", function () {
        init_bars();
        var s = 1152,
            o = $(".usecase-mask").width(),
            n = 305;
        $(window).width() < 479 && (n = 0.9 * $(window).width() - 120);
        var c = parseInt($(this).attr("id").replace(/uc-/, ""), 10),
            d = $(".usecase-block").hasClass("expand");
        if ((s += n) > o) var l = Math.floor((o - n) / 144);
        $(this).siblings(".usecase-block").removeClass("expand");
        var u = $(".usecase-audio");
        if (
            ($.each(u, function (e, s) {
                s && s.pause();
            }),
            $(".uc-play").removeClass("uc-pause"),
            (d = !1),
            $(this).toggleClass("expand"),
            (d = !d),
            c + 1 > l)
        ) {
            var m = 144 * (c + 1) + n - o + 12;
            setTimeout(
                function () {
                    a(m);
                },
                300,
                m
            );
        } else a(0);
        if ($(this).hasClass("expand")) {
            $(this).find(".uc-play").addClass("uc-pause"), e && t();
            var h = $(this).find(".usecase-audio").get(0);
            h.play(),
                $(this)
                    .find(".usecase-audio")
                    .on("ended", function (e) {
                        $(this).closest(".uc-play").removeClass("uc-pause"), $(this).closest(".expand").toggleClass("expand"), (d = !d);
                    })
                    .on("pause", function (e) {
                        $(this).closest(".uc-play").removeClass("uc-pause"), $(this).closest(".expand").toggleClass("expand"), (d = !d);
                    });
        } else $(this).find(".uc-play").removeClass("uc-pause"), $(this).find(".usecase-audio").get(0).pause(), ($(this).find(".usecase-audio").get(0).currentTime = 0);
    }),
    $(".play-home")
        .on("click", function (e) {
            t();
        })
        .on("focus", function (e) {
            e.preventDefault();
        });
let o = function () {
        let e = this.getAttribute("data-step-text");
        for (var s = 0; s < c.length; s++) {
            let i = c[s].getAttribute("data-step-image");
            i != e ? (c[s].style.opacity = "0") : i == e && (c[s].style.opacity = "1");
        }
    },
    nn = document.getElementsByClassName("stepper-list-item"),
    c = document.getElementsByClassName("step-image-style");
for (var d = 0; d < nn.length; d++) nn[d].addEventListener("mouseenter", o, !1);
let l = document.getElementsByClassName("voice-card");
document.getElementsByClassName("voice-audio-player"), document.getElementById("seek-obj");
let u = function () {
    let e = this.querySelector(".voice-audio-player"),
        s = this.querySelector(".c-play"),
        i = this.querySelector(".c-pause");
    (i.style.display = "block"), (s.style.display = "none");
    e.getAttribute("id");
    let a = e.paused;
    !(function () {
        let e = document.getElementsByClassName("voice-audio-player");
        document.getElementsByClassName(".cplay"), document.getElementsByClassName(".c-pause");
        for (let s = 0; s < e.length; s++)
            if (!e[s].paused) {
                e[s].pause();
                let i = l[s].querySelector(".c-play");
                (l[s].querySelector(".c-pause").style.display = "none"), (i.style.display = "block");
            }
    })(),
        a &&
            (e.play(),
            this.classList.add("playing"),
            this.classList.remove("paused"),
            e.addEventListener("ended", (e) => {
                this.classList.remove("paused", "playing"), (i.style.display = "none"), (s.style.display = "block");
            }));
};
for (d = 0; d < l.length; d++) l[d].addEventListener("click", u, !1);

function init_bars() {
    if (first_time_bars == 1) {
        first_time_bars = 0;
        for (let i = 0; i < 90; i++) {
            const left = i * 2 + 1;
            const anim = Math.floor(Math.random() * 75 + 800);
            const height = Math.floor(Math.random() * 25 + 13);


            $(".usecase-ac-embed.w-embed > div").each(function () {
                    this.innerHTML += `<div class="bar-line" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`;
                });
            

            
        }
    }
}

//from allegis.forms.js
//https://www.allegisgroup.com/_res/allegisgroup/js/exclude/Allegis.Forms.js
function pciPortalPolicyConfirmation(obj) {
    $("#myModal4").modal("show");
    /*
        if ($(obj).is(":checked")) {
            $("#myModal4").modal('show');
            
            $("input[type='submit']").removeAttr('disabled');
        } else {
            $("input[type='submit']").prop('disabled', true);
        }*/
}

//  Video Poster Setup

$(document).on("click", ".js-videoPoster", function (ev) {
    "use strict";
    ev.preventDefault();
    videoStop();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-videoWrapper");
    videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
    "use strict";
    var $iframe = $wrapper.find(".js-videoIframe");
    var src = $iframe.data("src");
    // hide poster
    $wrapper.addClass("videoWrapperActive");
    // add iframe src in, starting the video
    $iframe.attr("src", src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
    "use strict";
    // if we're stopping all videos on page
    if (!$wrapper) {
        var $wrapper = $(".js-videoWrapper");
        var $iframe = $(".js-videoIframe");
        // if we're stopping a particular video
    } else {
        var $iframe = $wrapper.find(".js-videoIframe");
    }
    // reveal poster
    $wrapper.removeClass("videoWrapperActive");
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr("src", "");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

$('input[type="checkbox"]').on("change", function () {
    $('input[name="' + this.name + '"]')
        .not(this)
        .prop("checked", false);
});

/* custom vlad */
//swiper slider set audio src swiper-slide speech

var currentButton; // global scope track the song playing
var audioPlaying = false; // global scope toggle audio state on/off
var first_time_voice_modal = 1;
var first_time_carusel = 1;
var clicked_product = "Revoicer";
var purchase_redir = "https://revoicer.com/purchase/fe_redir.php";
function dataPopupClosed(data) {
    if (data == null) {
        //window.location="https://revoicer.com/thank-you";
    } else {
        if (typeof data.id != "undefined") {
            window.location.replace(purchase_redir + "?id=" + data.id + "&prod=" + clicked_product);
            //window.location=purchase_redir+"?id="+data.id+"&prod="+clicked_product;
        }
    }
}

function dataPopupWebhookReceived(data) {
    if (data == null) {
        //window.location="https://revoicer.com/thank-you";
    } else {
        if (typeof data.id != "undefined") {
            window.location.replace(purchase_redir + "?id=" + data.id + "&prod=" + clicked_product);
            //window.location=purchase_redir+"?id="+data.id+"&prod="+clicked_product;
        }
    }
}

$(document).ready(function () {
	
	$('#myCheckbox2').change(() => {
		if($('#myCheckbox2').is(':checked')) {
			$(".buynow").attr("data-product-id2","revoicer-voice-clone");
			$(".buynow").click();
		} else {
			$(".buynow").removeAttr("data-product-id2");
		}
	});
	
    //show modal correct answer
    $(".buynow").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = $(this).attr("data-product-name");
        purchase_redir = $(this).attr("data-redirect");
        fastspring.builder.clean();
        fastspring.builder.tag({ source: $(this).attr("data-source") });
        fastspring.builder.add($(this).attr("data-product-id"));
		
		var attr = $(this).attr('data-product-id2');
		if (typeof attr !== 'undefined' && attr !== false) {
					fastspring.builder.add($(this).attr("data-product-id2"));
		}
		attr = $(this).attr('data-coupon');
		if (typeof attr !== 'undefined' && attr !== false) {
					fastspring.builder.promo($(this).attr("data-coupon"));
		}
        fastspring.builder.checkout();
    });

    $(".buyprotrial").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = "Revoicer PRO";
        purchase_redir = "https://revoicer.com/purchase/pro_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe-trial" });
        fastspring.builder.add("revoicer-pro-trial");
        fastspring.builder.checkout();
    });
    $(".buypro").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = "Revoicer PRO";
        purchase_redir = "https://revoicer.com/purchase/pro_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe" });
        fastspring.builder.add("revoicer-pro");
        fastspring.builder.checkout();
    });
    $(".buytrial").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = "Revoicer";
        purchase_redir = "https://revoicer.com/purchase/fe_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe-trial" });
        fastspring.builder.add("revoicer-trial");
        fastspring.builder.checkout();
    });
    $(".buystandard").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
	
        clicked_product = "Revoicer";
        purchase_redir = "https://revoicer.com/purchase/fe_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe" });
        fastspring.builder.add("revoicer-37");
        fastspring.builder.checkout();
    });
    $(".buyagency").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = "Revoicer AGENCY";
        purchase_redir = "https://revoicer.com/purchase/agency_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe" });
        fastspring.builder.add("revoicer-agency");
        fastspring.builder.checkout();
    });
    $(".buyagencytrial").on("click", function (e) {
        e.preventDefault();
        fb_atc(27);
        clicked_product = "Revoicer AGENCY";
        purchase_redir = "https://revoicer.com/purchase/agency_redir.php";
        //fastspring.builder.tag({'vtid':'revoicer-text-from-voice-insoft'});
        fastspring.builder.clean();
        fastspring.builder.tag({ source: "fe-trial" });
        fastspring.builder.add("revoicer-agency-trial");
        fastspring.builder.checkout();
    });

    //set data-src for all emotions slider
    $(".portfolio-inner").each(function () {
        var voice_name = $(this).find(".voice_name").text().trim().replace("(pro)", "");

        $(this)
            .find("a")
            .attr("data-src", "" + voice_name.toLowerCase() + "-normal2.mp3");
    });
    //set for big voices images
    $("#carouselExampleIndicators .col-lg-6").each(function () {
        var voice_name = $(this).find(".voice_name").text().trim().replace("(pro)", "");

        $(this)
            .find(".audioBox-inn")
            .each(function () {
                var emotion = $(this).find("span").text().trim();
                $(this).attr("data-src", "" + voice_name.toLowerCase() + "-" + emotion.toLowerCase() + ".mp3");
            });
    });

    //play for slider audios
    $("body").on("click", ".top_button_play,.audioBox-inn,.audioPlayerpop,.mybutton3 a", function (e) {
        e.preventDefault();
        var filePath = $(this).attr("data-src");
        if (audioPlaying == false) {
            audio.src = "sound/" + filePath;
            audioPlaying = true;
            if ($(this).hasClass("audioPlayerpop")) {
                audio_music.currentTime = 0;
                audio_music.play();
            }
        } else if (currentButton == this && audioPlaying == true) {
            audio.pause();
            audio_music.pause();
            audioPlaying = false;
        } else if (currentButton != this) {
            audio.src = "sound/" + filePath;
            currentButton.classList.toggle("paused");
            if ($(this).hasClass("audioBox-inn")) {
                $(currentButton).find(".audioPlayerai").toggleClass("audioPlayerai-playing");
            }
            if ($(this).hasClass("audioPlayerpop")) {
                $(currentButton).find(".audioPlayerai2").toggleClass("audioPlayerai2-playing");
            }

            audioPlaying = true;
        }

        currentButton = this;
        $(this).find(".audioPlayerai").toggleClass("audioPlayerai-playing");
        $(this).find(".audioPlayerai2").toggleClass("audioPlayerai2-playing");
        currentButton.classList.toggle("paused");
    });

    //open video modals
    /*var trigger = $('.videoModalTriger');
    trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });*/

    //section2-audio
    $(".carousel").on("touchstart", function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;

            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel("next");
            } else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel("prev");
            }
        });
        $(this).on("touchend", function () {
            $(this).off("touchmove");
        });
    });

    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        },
    };
    jQuery.event.special.touchmove = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        },
    };
    jQuery.event.special.wheel = {
        setup: function (_, ns, handle) {
            this.addEventListener("wheel", handle, { passive: true });
        },
    };
    jQuery.event.special.mousewheel = {
        setup: function (_, ns, handle) {
            this.addEventListener("mousewheel", handle, { passive: true });
        },
    };

    //mute all playing voices
    $("#myModal3").on("hidden.bs.modal", function (e) {
        if (audioPlaying == true) {
            currentButton.classList.toggle("paused");
            $(currentButton).find(".audioPlayerai").toggleClass("audioPlayerai-playing");
            $(currentButton).find(".audioPlayerai2").toggleClass("audioPlayerai2-playing");
        }
        audio.pause();
        audio_music.pause();
        audioPlaying = false;
    });
    //CHECKOUT ALL OUR VOICES POPUP
    $("#myModal3").on("shown.bs.modal", function (e) {
        if (audioPlaying == true) {
            currentButton.classList.toggle("paused");
            $(currentButton).find(".audioPlayerai").toggleClass("audioPlayerai-playing");
            $(currentButton).find(".audioPlayerai2").toggleClass("audioPlayerai2-playing");
        }
        audio.pause();
        audio_music.pause();
        audioPlaying = false;

        var $invoker = $(e.relatedTarget);
        if (first_time_voice_modal == 1) {
            first_time_voice_modal = 0;
            $(".all_voices_list").empty();
            for (let i = 0; i < voices_list.length; i++) {
                var pro = "";
                if (voices_list[i].type == "1") {
                    pro = '<img src="imageswebp/crown.webp" class="img-fluid mx-auto center-block crown" alt="crown" style="position:absolute; left:80%;top:5px; ">';
                }
                var english = "all_languages";
                if (voices_list[i].lang_name.includes("English")) {
                    english = " just_english";
                }
                var temp = `<div class="flagBoxpop ${english}">
                                    
                                            <div class="flagBoxpop-inner">
                                            ${pro}
                                                <div class="row m-0">
                                                    
                                                    <div class="col-lg-3 col-md-3 col-2 align-self-center p-0">
                                                        <img data-src="images/voices/${voices_list[i]["voice_name"].toLowerCase()}.jpg" class="img-fluid mx-auto lazyload d-block person" style="border-radius: 50%;" alt="person"> 
                                                    </div>
                                                                
                                                    <div class="col-lg-7 col-md-6 col-8 align-self-center">
                                                        <p class="lg15 md14 sm12 xs14 AvertaStd-Bold lh140 black2">
                                                            ${voices_list[i]["voice_name"]} <span class="lg11 md11 sm10 xs12 AvertaStd-Regular titlebg lh120 mt2" style="color: #647ea5;">${voices_list[i]["lang_name"]} </span>
                                                        </p>
                                                        <img src="imageswebp/soundimg.webp" class="img-fluid mr-auto d-block mt6 soundimg" alt="soundimg">
                                                    </div>

                                                    <div class="col-lg-2 col-md-3 col-2 align-self-center p-0">

                                                        <div class="audioPlayer audioPlayerpop" data-src="sound_soft/${voices_list[i]["voice_name"]}.mp3">
                                                            <div class="audioPlayerai2">
                                                                <div class="audioPlayerai2-playpause" title=""><a href="#" aria-label="Click to play text to voice audio"></a></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                
                                            </div>
                                    
                                        </div>
            `;
                $(".all_voices_list").append(temp);
            }
        }
        if ($(e.relatedTarget).hasClass("only_english")) {
            $(".just_english").removeClass("d-none");
            $(".all_languages").addClass("d-none");
        } else {
            $(".just_english").removeClass("d-none");
            $(".all_languages").removeClass("d-none");
        }
    }); //ALL VOICES END









    /*
$('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
    if(first_time_carusel==1)
    {
        first_time_carusel=0;
        $("#carouselExampleIndicators .placeholder").remove();
        $('#carouselExampleIndicators .carousel-inner').append(caru);
        
        
    }
  //e.to
})*/
});

function fb_atc(price) {

		fbq("track", "AddToCart", {
			value: price,
			currency: "USD",
		});
	
}

var voices_list = [
    { voice_name: "Amahle", lang_name: "Afrikaans - South Africa", type: "0" },
    { voice_name: "Arno", lang_name: "Afrikaans - South Africa", type: "0" },
    { voice_name: "Ajola", lang_name: "Albanian", type: "0" },
    { voice_name: "Admir", lang_name: "Albanian", type: "1" },
    { voice_name: "Heba", lang_name: "Arabic - Egypt", type: "0" },
    { voice_name: "Aharon", lang_name: "Arabic - Egypt", type: "1" },
    { voice_name: "Abbas", lang_name: "Arabic - Saudi Arabia", type: "0" },
    { voice_name: "Adelmira", lang_name: "Arabic - Saudi Arabia", type: "1" },
    { voice_name: "Abbud", lang_name: "Azerbaijani", type: "1" },
    { voice_name: "Sevda", lang_name: "Azerbaijani", type: "1" },
    { voice_name: "Bitan", lang_name: "Bangla - Bangladesh", type: "0" },
    { voice_name: "Barsha", lang_name: "Bangla - Bangladesh", type: "1" },
    { voice_name: "Anirban", lang_name: "Bengali - India", type: "0" },
    { voice_name: "Aarya", lang_name: "Bengali - India", type: "1" },
    { voice_name: "Pavla", lang_name: "Bulgarian", type: "0" },
    { voice_name: "Nikolay", lang_name: "Bulgarian", type: "1" },
    { voice_name: "Pedro", lang_name: "Catalan - Spain", type: "0" },
    { voice_name: "Estel", lang_name: "Catalan - Spain", type: "1" },
    { voice_name: "Valeria", lang_name: "Catalan - Spain", type: "1" },
    { voice_name: "Den", lang_name: "Chinese - Cantonese (Traditional)", type: "0" },
    { voice_name: "Chun", lang_name: "Chinese - Cantonese (Traditional)", type: "1" },
    { voice_name: "Fen", lang_name: "Chinese - Mandarin", type: "0" },
    { voice_name: "Lixin", lang_name: "Chinese - Mandarin", type: "0" },
    { voice_name: "Chyou", lang_name: "Chinese - Mandarin", type: "1" },
    { voice_name: "Lingyun", lang_name: "Chinese - Mandarin", type: "1" },
    { voice_name: "Daiyu", lang_name: "Chinese - Mandarin", type: "1" },
    { voice_name: "Jakov", lang_name: "Croatian", type: "0" },
    { voice_name: "Nika", lang_name: "Croatian", type: "1" },
    { voice_name: "Evka", lang_name: "Czech", type: "0" },
    { voice_name: "Marek", lang_name: "Czech", type: "1" },
    { voice_name: "Nora", lang_name: "Danish", type: "0" },
    { voice_name: "Aksel", lang_name: "Danish", type: "1" },

    { voice_name: "Dirk", lang_name: "Dutch", type: "0" },
    { voice_name: "Luc", lang_name: "Dutch - Belgian", type: "0" },
    { voice_name: "Monique", lang_name: "Dutch - Belgian", type: "1" },
    { voice_name: "Tess", lang_name: "Dutch - Netherlands", type: "1" },
    { voice_name: "Chantal", lang_name: "Dutch - Netherlands", type: "1" },
    { voice_name: "Palesa", lang_name: "English - African", type: "0" },
    { voice_name: "Katlego", lang_name: "English - African", type: "0" },
    { voice_name: "Mandla", lang_name: "English - African", type: "0" },
    { voice_name: "Amma", lang_name: "English - African", type: "1" },
    { voice_name: "Bongani", lang_name: "English - African", type: "1" },
    { voice_name: "Hakim", lang_name: "English - African", type: "1" },
    { voice_name: "Amara", lang_name: "English - African", type: "1" },
    { voice_name: "Abeni", lang_name: "English - African", type: "1" },
    { voice_name: "Noah", lang_name: "English - Australia", type: "0" },
    { voice_name: "Grace", lang_name: "English - Australia", type: "0" },
    { voice_name: "Willow", lang_name: "English - Australia", type: "1" },
    { voice_name: "Henry", lang_name: "English - Australia", type: "1" },
    { voice_name: "James", lang_name: "English - British", type: "0" },
    { voice_name: "Connor", lang_name: "English - British", type: "0" },
    { voice_name: "Kirsten", lang_name: "English - British", type: "0" },
    
    { voice_name: "Jenna", lang_name: "English - British", type: "1" },
    { voice_name: "Grayson", lang_name: "English - British", type: "1" },
    { voice_name: "Violet", lang_name: "English - British", type: "1" },
    { voice_name: "Vivian", lang_name: "English - British", type: "1" },
    { voice_name: "Lyla", lang_name: "English - British", type: "1" },
    { voice_name: "Mirai", lang_name: "English - India", type: "0" },
    { voice_name: "Rudra", lang_name: "English - India", type: "1" },
    { voice_name: "Oisin", lang_name: "English - Ireland", type: "1" },
    { voice_name: "Waren", lang_name: "English - US", type: "0" },
    { voice_name: "Andrew", lang_name: "English - US", type: "0" },
    { voice_name: "Rob Kid", lang_name: "English - US", type: "0" },
    { voice_name: "Victoria Kid", lang_name: "English - US", type: "0" },
    { voice_name: "Penelope", lang_name: "English - US", type: "0" },
    { voice_name: "Axel", lang_name: "English - US", type: "0" },
    { voice_name: "Leo", lang_name: "English - US", type: "0" },
    { voice_name: "Zoey", lang_name: "English - US", type: "0" },
    { voice_name: "Kayla", lang_name: "English - US", type: "0" },
    { voice_name: "Amanda", lang_name: "English - US", type: "1" },
    { voice_name: "Ricky Kid", lang_name: "English - US", type: "1" },
    { voice_name: "Mary Kid", lang_name: "English - US", type: "1" },
    { voice_name: "Caroline", lang_name: "English - US", type: "1" },
    { voice_name: "Amber", lang_name: "English - US", type: "1" },
    { voice_name: "Charlotte", lang_name: "English - US", type: "1" },
    { voice_name: "Johny", lang_name: "English - US", type: "1" },
    { voice_name: "Sophia", lang_name: "English - US", type: "1" },
    { voice_name: "Addison", lang_name: "English - US", type: "1" },
    { voice_name: "Robert", lang_name: "English - US", type: "1" },
    { voice_name: "Patricia", lang_name: "English - US", type: "1" },
    { voice_name: "Jordan", lang_name: "English - US", type: "1" },
    { voice_name: "Claire", lang_name: "English - US", type: "1" },
    { voice_name: "Valentina", lang_name: "English - US", type: "1" },
    { voice_name: "Lydia", lang_name: "English - US", type: "1" },
    { voice_name: "Emily", lang_name: "English - US", type: "1" },
    { voice_name: "Cleo", lang_name: "English - US", type: "1" },
    { voice_name: "Nova", lang_name: "English - US", type: "1" },
    { voice_name: "Tyler", lang_name: "English - US", type: "1" },
    { voice_name: "Caleb", lang_name: "English - US", type: "1" },
    { voice_name: "Eduk", lang_name: "Estonian", type: "0" },
    { voice_name: "Saskia", lang_name: "Estonian", type: "1" },
    { voice_name: "Christian", lang_name: "Filipino", type: "0" },
    { voice_name: "Nathalie", lang_name: "Filipino", type: "1" },
    { voice_name: "Anneli", lang_name: "Finnish", type: "0" },
    { voice_name: "Erno", lang_name: "Finnish", type: "1" },
    { voice_name: "Kaarina", lang_name: "Finnish", type: "1" },
    { voice_name: "Francois", lang_name: "French", type: "0" },
    { voice_name: "Ines", lang_name: "French", type: "0" },
    { voice_name: "Audrey", lang_name: "French", type: "0" },
    { voice_name: "Eleanor", lang_name: "French", type: "1" },
    { voice_name: "Andre", lang_name: "French", type: "1" },
    { voice_name: "Antoinette", lang_name: "French", type: "1" },
    { voice_name: "Matis", lang_name: "French", type: "1" },
    { voice_name: "Alderic", lang_name: "French", type: "1" },
    { voice_name: "Madelyn", lang_name: "French", type: "1" },
    { voice_name: "Anastasie", lang_name: "French - Belgium", type: "0" },
    { voice_name: "Briand", lang_name: "French - Belgium", type: "1" },
    { voice_name: "Nicolas", lang_name: "French - Canada", type: "0" },
    { voice_name: "Elodie", lang_name: "French - Canada", type: "1" },
    { voice_name: "Felix", lang_name: "French - Canada", type: "1" },
    { voice_name: "Demna", lang_name: "Georgian", type: "0" },
    { voice_name: "Ketevan", lang_name: "Georgian", type: "1" },
    { voice_name: "Klaus", lang_name: "German", type: "0" },
    { voice_name: "Susanne", lang_name: "German", type: "0" },
    { voice_name: "Lucas", lang_name: "German", type: "0" },
    { voice_name: "Lukas", lang_name: "German", type: "0" },
    { voice_name: "Emma", lang_name: "German", type: "1" },
    { voice_name: "Mila", lang_name: "German", type: "1" },
    { voice_name: "Lotte", lang_name: "German", type: "1" },
    { voice_name: "Margarete", lang_name: "German", type: "1" },
    { voice_name: "Elias", lang_name: "German", type: "1" },
    { voice_name: "Leon", lang_name: "German", type: "1" },
    { voice_name: "Irma", lang_name: "German", type: "1" },
    { voice_name: "Karolina Kid", lang_name: "German", type: "1" },
    { voice_name: "Maximilian", lang_name: "German", type: "1" },
    { voice_name: "Laura", lang_name: "German", type: "1" },
    { voice_name: "Hans", lang_name: "German - Austria", type: "0" },
    { voice_name: "Lina", lang_name: "German - Austria", type: "1" },
    { voice_name: "Tobias", lang_name: "Greek", type: "0" },
    { voice_name: "Cora", lang_name: "Greek", type: "1" },
    { voice_name: "Eliana", lang_name: "Hebrew", type: "0" },
    { voice_name: "Nathan", lang_name: "Hebrew", type: "1" },
    { voice_name: "Rishi", lang_name: "Hindi - India", type: "0" },
    { voice_name: "Shyla", lang_name: "Hindi - India", type: "1" },
    { voice_name: "Cili", lang_name: "Hungarian", type: "0" },
    { voice_name: "Ferenc", lang_name: "Hungarian", type: "1" },
    { voice_name: "Adika", lang_name: "Indonesian", type: "0" },
    { voice_name: "Bethari", lang_name: "Indonesian", type: "1" },
    { voice_name: "Maeve", lang_name: "Irish", type: "0" },
    { voice_name: "Freya", lang_name: "Irish", type: "1" },
    { voice_name: "Vittoria", lang_name: "Italian", type: "0" },
    { voice_name: "Riccardo", lang_name: "Italian", type: "0" },
    { voice_name: "Giulia", lang_name: "Italian", type: "0" },
    { voice_name: "Daniella", lang_name: "Italian", type: "1" },
    { voice_name: "Lorenzo", lang_name: "Italian", type: "1" },
    { voice_name: "Aurelio", lang_name: "Italian", type: "1" },
    { voice_name: "Giovanni", lang_name: "Italian", type: "1" },
    { voice_name: "Antonella", lang_name: "Italian", type: "1" },
    { voice_name: "Annabella", lang_name: "Italian", type: "1" },
    { voice_name: "Sergio", lang_name: "Italian", type: "1" },
    { voice_name: "Milana", lang_name: "Italian", type: "1" },
    { voice_name: "Flavia", lang_name: "Italian", type: "1" },
    { voice_name: "Akari", lang_name: "Japanese", type: "0" },
    { voice_name: "Akio", lang_name: "Japanese", type: "1" },
    { voice_name: "Agung", lang_name: "Javanese - Indonesia", type: "0" },
    { voice_name: "Diah", lang_name: "Javanese - Indonesia", type: "1" },
    { voice_name: "Ji Hoon", lang_name: "Korean", type: "0" },
    { voice_name: "Dal", lang_name: "Korean", type: "0" },
    { voice_name: "Bora", lang_name: "Korean", type: "1" },
    { voice_name: "Dam-Bi", lang_name: "Korean", type: "1" },
    { voice_name: "Gabija", lang_name: "Lithuanian", type: "0" },
    { voice_name: "Moze", lang_name: "Lithuanian", type: "1" },
    { voice_name: "Ismail", lang_name: "Malay", type: "0" },
    { voice_name: "Siti", lang_name: "Malay", type: "1" },
    { voice_name: "Darsheel", lang_name: "Marathi - India", type: "0" },
    { voice_name: "Sanvi", lang_name: "Marathi - India", type: "1" },
    { voice_name: "Celine", lang_name: "Norwegian", type: "0" },
    { voice_name: "Dina", lang_name: "Norwegian", type: "1" },
    { voice_name: "Ole", lang_name: "Norwegian", type: "1" },
    { voice_name: "Mikolaj", lang_name: "Polish", type: "0" },
    { voice_name: "Joasia", lang_name: "Polish", type: "1" },
    { voice_name: "Krysia", lang_name: "Polish", type: "1" },
    { voice_name: "Calie", lang_name: "Portuguese", type: "0" },
    { voice_name: "Alessandra", lang_name: "Portuguese", type: "1" },
    { voice_name: "Emanuel", lang_name: "Portuguese", type: "1" },
    { voice_name: "Paulo", lang_name: "Portuguese - Brazilian", type: "0" },
    { voice_name: "Antonia", lang_name: "Portuguese - Brazilian", type: "0" },
    { voice_name: "Juliana", lang_name: "Portuguese - Brazilian", type: "0" },
    { voice_name: "Larissa", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Marcos", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Cristina", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Bento", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Claudio", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Benedita", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Helena", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Danilo", lang_name: "Portuguese - Brazilian", type: "1" },
    { voice_name: "Bogdan", lang_name: "Romanian", type: "0" },
    { voice_name: "Alessia", lang_name: "Romanian", type: "1" },
    { voice_name: "Kirill", lang_name: "Russian", type: "0" },
    { voice_name: "Ekaterina", lang_name: "Russian", type: "1" },
    { voice_name: "Anya", lang_name: "Russian", type: "1" },
    { voice_name: "Sofija", lang_name: "Serbian", type: "0" },
    { voice_name: "Milosz", lang_name: "Serbian", type: "1" },
    { voice_name: "Daleka", lang_name: "Slovak", type: "0" },
    { voice_name: "Havel", lang_name: "Slovak", type: "1" },
    { voice_name: "Andrej", lang_name: "Slovenian", type: "0" },
    { voice_name: "Zala", lang_name: "Slovenian", type: "1" },
    { voice_name: "Cristian", lang_name: "Spanish", type: "0" },
    { voice_name: "Leandra", lang_name: "Spanish", type: "1" },
    { voice_name: "Facundo", lang_name: "Spanish - Argentina", type: "0" },
    { voice_name: "Martina", lang_name: "Spanish - Argentina", type: "1" },
    { voice_name: "Francisco", lang_name: "Spanish - Bolivia", type: "0" },
    { voice_name: "Lara", lang_name: "Spanish - Bolivia", type: "1" },
    { voice_name: "Hugo", lang_name: "Spanish - Chile", type: "0" },
    { voice_name: "Guadalupe", lang_name: "Spanish - Chile", type: "1" },
    { voice_name: "Triana", lang_name: "Spanish - Colombia", type: "0" },
    { voice_name: "Simon", lang_name: "Spanish - Colombia", type: "1" },
    { voice_name: "Mauricio", lang_name: "Spanish - Costa Rica", type: "0" },
    { voice_name: "Alejandra", lang_name: "Spanish - Costa Rica", type: "1" },
    { voice_name: "Carlota", lang_name: "Spanish - Cuba", type: "0" },
    { voice_name: "Ricardo", lang_name: "Spanish - Cuba", type: "1" },
    { voice_name: "Emiliano", lang_name: "Spanish - Ecuador", type: "0" },
    { voice_name: "Alicia", lang_name: "Spanish - Ecuador", type: "1" },
    { voice_name: "Kassandra", lang_name: "Spanish - Guatemala", type: "0" },
    { voice_name: "Gonzalo", lang_name: "Spanish - Guatemala", type: "1" },
    { voice_name: "Antonio", lang_name: "Spanish - Honduras", type: "0" },
    { voice_name: "Maritza", lang_name: "Spanish - Honduras", type: "1" },
    { voice_name: "Camila", lang_name: "Spanish - Mexic", type: "0" },
    { voice_name: "Diego", lang_name: "Spanish - Mexic", type: "0" },
    { voice_name: "Noemi", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Araceli", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Estrella", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Patricio", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Cristobal", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Lizette", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Mariela", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Luciano", lang_name: "Spanish - Mexic", type: "1" },
    { voice_name: "Mariana", lang_name: "Spanish - Spain", type: "0" },
    { voice_name: "Jorge", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Dante", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Santino", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Carina", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Angelina", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Gael", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Damian", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Barbara", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Amaia", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Katalia", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Vicente", lang_name: "Spanish - Spain", type: "1" },
    { voice_name: "Manuel", lang_name: "Spanish - Uruguay", type: "0" },
    { voice_name: "Viviana", lang_name: "Spanish - Uruguay", type: "1" },
    { voice_name: "Gabriela", lang_name: "Spanish - US", type: "0" },
    { voice_name: "Luciana", lang_name: "Spanish - US", type: "1" },
    { voice_name: "Luis", lang_name: "Spanish - US", type: "1" },
    { voice_name: "Renata", lang_name: "Spanish - US", type: "1" },
    { voice_name: "Bautista", lang_name: "Spanish - Venezuela", type: "0" },
    { voice_name: "Fernanda", lang_name: "Spanish - Venezuela", type: "1" },
    { voice_name: "Intan", lang_name: "Sundanese - Indonesia", type: "0" },
    { voice_name: "Lars", lang_name: "Swedish", type: "0" },
    { voice_name: "Karin", lang_name: "Swedish", type: "1" },
    { voice_name: "Chien Hung", lang_name: "Taiwanese Chinese", type: "0" },
    { voice_name: "Thara", lang_name: "Tamil - India", type: "0" },
    { voice_name: "Kavin", lang_name: "Tamil - India", type: "1" },
    { voice_name: "Arthit", lang_name: "Thai", type: "0" },
    { voice_name: "Berat", lang_name: "Turkish", type: "0" },
    { voice_name: "Ayaz", lang_name: "Turkish", type: "0" },
    { voice_name: "Beste", lang_name: "Turkish", type: "1" },
    { voice_name: "Amil", lang_name: "Urdu - India", type: "0" },
    { voice_name: "Liba", lang_name: "Urdu - India", type: "1" },
];


/**/

var clicked_id;
var audio_var = new Audio();


$('.ppbutton').on("click",function(){
  var datasrc = $(this).attr('data-src');
  clicked_id= $(this).attr('id');
  console.log(clicked_id);
  audio_var.pause();
  
  $('.ppbutton').not(this).each(function(){
      $(this).removeClass('fa-square');
      $(this).addClass('fa-play');
	  
	  $(this).closest(".cloning-box-main").removeClass('voice-active');
	  $(this).closest(".cloning-box-main").addClass('voice-remove');
  });
  
  if($(this).hasClass('fa-play')){
     console.log('play_click');
     audio_var.src=datasrc;
     $(this).removeClass('fa-play');
     $(this).addClass('fa-square');
     console.log(audio_var);
     audio_var.play();
	 $(this).closest(".cloning-box-main").removeClass("voice-remove");
	 $(this).closest(".cloning-box-main").addClass("voice-active");
   } 
   
   else {
     console.log('pause_click');
     $(this).removeClass('fa-square');
     $(this).addClass('fa-play');
     console.log(audio_var);
     audio_var.pause();
     //audio_var.src='';
     //audio_var.load();
	 console.log(audio_var);
	 $(this).closest(".cloning-box-main").removeClass("voice-active");
	 $(this).closest(".cloning-box-main").addClass("voice-remove");
   }

  
});

  audio_var.onended = function() {
     $("#"+clicked_id).removeClass('fa-square');
     $("#"+clicked_id).addClass('fa-play');
	 
	 $("#"+clicked_id).closest(".cloning-box-main").removeClass('voice-active');
	 $("#"+clicked_id).closest(".cloning-box-main").addClass('voice-remove');
  };
  
  

  for (let i = 0; i < 90; i++) {

  const left = i * 2 + 1;
  const anim = Math.floor(Math.random() * 75 + 400);
  const height = Math.floor(Math.random() * 25 + 3);
  console.log(height);

  //document.querySelector('#bars-1').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
  //document.querySelector('#bars-2').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
  //document.querySelector('#bars-3').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
  //document.querySelector('#bars-4').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
  //document.querySelector('#bars-5').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
  //document.querySelector('#bars-6').innerHTML += `<div class="bar-wave" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`; `<div class="bar-wave" style="left:${left}px">Hello</div>`;
}
 
 
