ScrollTrigger.matchMedia({
  //desktop
  "(min-width: 768px)": function () {
    let scrollTop3 = 0;
    window.addEventListener("scroll", () => {
      scrollTop3 =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop;

      if (scrollTop3 > 10000) {
        document.querySelector("#section4 .my__sign").style.opacity = "1";
      }
      if (scrollTop3 > 27000) {
        document.querySelector("#section4 .my__sign").style.opacity = "0";
      }
      if (scrollTop3 < 10000) {
        document.querySelector("#section4 .my__sign").style.opacity = "0";
      }
    });

    function section4Scroll() {
      scrollTop3 = document.documentElement.scrollTop;

      const section4Top = document.querySelector("#section4");
      let offset1 = (scrollTop3 - section4Top.offsetTop) * -0.15;
      let offset2 = (scrollTop3 - section4Top.offsetTop) * 0.2;
      let offset3 = (scrollTop3 - section4Top.offsetTop) * -0.05;
      let offset4 = (scrollTop3 - section4Top.offsetTop) * 0.07;
      let offset5 = (scrollTop3 - section4Top.offsetTop) * 0.09;
      let offset6 = (scrollTop3 - section4Top.offsetTop) * 0.09;
      let offset7 = (scrollTop3 - section4Top.offsetTop) * -0.08;

      gsap.to(".img1", { duration: 0.3, y: -offset1 });
      gsap.to(".img2", { duration: 0.3, y: -offset2 });
      gsap.to(".img3", { duration: 0.3, y: -offset3 });
      gsap.to(".img4", { duration: 0.3, y: -offset4 });
      gsap.to(".img5", { duration: 0.3, y: -offset5 });
      gsap.to(".img6", { duration: 0.3, y: -offset6 });
      gsap.to(".img7", { duration: 0.3, y: -offset7 });

      requestAnimationFrame(section4Scroll);
    }
    section4Scroll();

    const section4Img = gsap.utils.toArray("#section4 img");
  },
  //mobile
  "(max-width: 480px)": function () {
    // console.log("480px");
    let scrollTop3 = 0;
    window.addEventListener("scroll", () => {
      scrollTop3 =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop;

      if (scrollTop3 > 5500) {
        document.querySelector("#section4 .my__sign").style.opacity = "1";
      }
      if (scrollTop3 > 8000) {
        document.querySelector("#section4 .my__sign").style.opacity = "0";
      }
      if (scrollTop3 < 5500) {
        document.querySelector("#section4 .my__sign").style.opacity = "0";
      }
    });

    function section4Scroll() {
      scrollTop3 = document.documentElement.scrollTop;

      const section4Top = document.querySelector("#section4");
      let offset1 = (scrollTop3 - section4Top.offsetTop) * 0.08;
      let offset2 = (scrollTop3 - section4Top.offsetTop) * 0.11;
      let offset3 = (scrollTop3 - section4Top.offsetTop) * 0.14;
      let offset4 = (scrollTop3 - section4Top.offsetTop) * 0.17;
      let offset5 = (scrollTop3 - section4Top.offsetTop) * 0.2;
      let offset6 = (scrollTop3 - section4Top.offsetTop) * 0.23;
      let offset7 = (scrollTop3 - section4Top.offsetTop) * 0.26;

      gsap.to(".img1", { duration: 0.3, y: -offset1 });
      gsap.to(".img2", { duration: 0.3, y: -offset2 });
      gsap.to(".img3", { duration: 0.3, y: -offset3 });
      gsap.to(".img4", { duration: 0.3, y: -offset4 });
      gsap.to(".img5", { duration: 0.3, y: -offset5 });
      gsap.to(".img6", { duration: 0.3, y: -offset6 });
      gsap.to(".img7", { duration: 0.3, y: -offset7 });

      requestAnimationFrame(section4Scroll);
    }
    section4Scroll();

    const section4Img = gsap.utils.toArray("#section4 img");
  },
});
