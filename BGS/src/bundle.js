(() => {
  "use strict";
  const e = document.querySelector("body"),
    t = document.getElementById("cursor-overlay"),
    s = document.querySelector(".btn-start-animation"),
    i = document.querySelector(".logo-BGS"),
    l = document.querySelector(".rotate-container"),
    o = document.getElementById("video"),
    a = document.getElementById("video-loop"),
    n = document.querySelector(".text-about"),
    c = document.querySelectorAll(".title"),
    r = document.querySelector(".btn__text-about"),
    d = document.querySelectorAll(".card"),
    u = document.querySelector(".btn-shopping"),
    y = document.querySelector(".btn-security"),
    v = document.querySelector(".btn-monitoring"),
    m = document.querySelector(".info-security"),
    L = document.querySelector(".info-shopping"),
    p = document.querySelector(".info-monitoring");
  let b = 350;
  const f = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  setTimeout(() => {
    i.classList.add("fade-in");
  }, 500),
    s.addEventListener("click", () => {
      setTimeout(() => {
        t.style.opacity = 1;
      }, 600),
        (o.style.visibility = "visible"),
        o.play(),
        f
          ? (o.setAttribute("autoplay", "autoplay"),
            o.setAttribute("playsinline", "playsinline"),
            o.setAttribute("muted", "muted"),
            a.setAttribute("autoplay", "autoplay"),
            a.setAttribute("playsinline", "playsinline"),
            a.setAttribute("muted", "muted"),
            (o.style.visibility = "visible"),
            o.play(),
            setTimeout(() => {
              (document.querySelector(".bg-video-loop").style.visibility =
                "visible"),
                (a.style.visibility = "visible"),
                a.play(),
                (document.querySelector(".bg-video-loop").style.opacity =
                  "0.6");
            }, 1890))
          : ((o.style.visibility = "visible"),
            o.play(),
            setTimeout(() => {
              (document.querySelector(".bg-video-loop").style.visibility =
                "visible"),
                a.play(),
                (document.querySelector(".bg-video-loop").style.opacity =
                  "0.6");
            }, 1300)),
        s.classList.add("scale-down"),
        l.classList.add("scale-down"),
        setTimeout(() => {
          (l.style.border = "none"), s.remove(), l.remove();
        }, 700),
        setTimeout(() => {
          (n.style.transition = "all 1s ease"),
            n.classList.remove("text-invisible"),
            c.forEach((e) => {
              let t = 0,
                s = setInterval(() => {
                  t >= c.length
                    ? clearInterval(s)
                    : ((e.style.transition = "all 0.5s ease"),
                      e.classList.add("color-change"),
                      t++);
                }, b);
              b += 350;
            });
        }, 700);
    });
  const E = () => {
    (() => {
      let e = 0;
      document.addEventListener(
        "scroll",
        function () {
          i.style.transition = "0.5s";
          let t = window.pageYOffset || document.documentElement.scrollTop;
          t > e
            ? i.classList.remove("fade-in")
            : t < e && i.classList.add("fade-in"),
            (e = t <= 0 ? 0 : t);
        },
        !1
      );
    })(),
      d.forEach((e) => {
        e.classList.add("fade-out");
      }),
      (e.style.overflow = "hidden");
  };
  r.addEventListener("click", () => {
    n.classList.add("text-fade-out"),
      d.forEach((e) => {
        e.classList.remove("fade-out");
      });
    let e = 0,
      t = setInterval(() => {
        if (e >= d.length) clearInterval(t);
        else {
          const t = d[e];
          (t.style.transitionDelay = "0.2s"),
            (t.style.transition = "all 1s ease"),
            t.classList.remove("card-invisible"),
            e++;
        }
      }, 300);
  }),
    y.addEventListener("click", () => {
      E(),
        (e.style.overflowX = "hidden"),
        (e.style.overflowY = "visible"),
        (m.style.transition = "all 1s ease"),
        m.classList.add("active");
    }),
    u.addEventListener("click", () => {
      E(), (L.style.transition = "all 1s ease"), L.classList.add("active");
    }),
    v.addEventListener("click", () => {
      E(), (p.style.transition = "all 1s ease"), p.classList.add("active");
    }),
    document.querySelectorAll(".btn-arrow-left").forEach((t) => {
      t.addEventListener("click", () => {
        d.forEach((e) => {
          e.classList.remove("fade-out");
        }),
          (e.style.overflow = "hidden"),
          m.classList.remove("active"),
          L.classList.remove("active"),
          p.classList.remove("active"),
          i.classList.contains("fade-in") || i.classList.add("fade-in");
      });
    }),
    i.addEventListener("click", () => {
      n.classList.contains("text-fade-out") &&
        (n.classList.remove("text-fade-out"),
        (e.style.overflow = "hidden"),
        E(),
        m.classList.contains("active") && m.classList.remove("active"),
        L.classList.contains("active") && L.classList.remove("active"),
        p.classList.contains("active") && p.classList.remove("active"));
    }),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.getElementById("cursor-overlay"),
        t = (e, t) => Math.random() * (t - e) + e;
      document.addEventListener("mousemove", function (s) {
        ((s, i) => {
          const l = document.createElement("div");
          (l.className = "particle"),
            l.style.setProperty("--x", t(-50, 50) + "px"),
            l.style.setProperty("--y", t(-50, 50) + "px"),
            (l.style.left = s + "px"),
            (l.style.top = i + "px"),
            e.appendChild(l),
            setTimeout(() => {
              l.remove();
            }, 800);
        })(s.clientX, s.clientY);
      });
    });
})();
