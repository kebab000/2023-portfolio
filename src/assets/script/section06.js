ScrollTrigger.matchMedia({
  //desktop
  "(min-width: 481px)": function () {
    const sections = gsap.utils.toArray(".section");
    const section6Width = document.querySelector("#section6").offsetWidth;
    console.log(section6Width);
    let scrollTween = gsap.to("#section6", {
      x: -(document.querySelector("#section6").offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#section6",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        end: `+=${section6Width}`,
      },
    });
    // section3-section1
    gsap.set("#section6 .section .box__wrap", {
      width: "10vw",
      height: "10vw",
      x: 1050,
      y: 100,
      zIndex: 2,
    });
    gsap.set("#section6 .section .box__wrap .game__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });
    gsap.set("#section6 .section .box__wrap .parallax__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });
    gsap.set("#section6 .section .box__wrap .quiz__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });
    gsap.set("#section6 .section .box__wrap .mouse__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });
    gsap.set("#section6 .section .box__wrap .slider__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });

    // gsap.set("#section6 .section .box__wrap span", {autoAlpha: 0})
    // gsap.set("#section6 .section .box__wrap h3", {autoAlpha: 0, y: 10})
    // gsap.set("#section6 .section .box__wrap p", {autoAlpha: 0, y: 10})
    // gsap.set("#section6 .section .box__wrap .btn", {autoAlpha: 0, y: 10})
    // gsap.set("#section6 .section .box__wrap .qr", {autoAlpha: 0, y: 10})
    // gsap.set("#section6 .section .box__wrap .mockup", {autoAlpha: 0, x: 100})

    const ani101 = gsap.timeline();
    ani101.to("#section6 .section .box__wrap", {
      duration: 0.5,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 1200,
      rotateZ: 180,
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1.5,
      y: -180,
      rotateZ: 360,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 1, x: 1300 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      width: "500px",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      width: "500px",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap .game__wrap", {
      duration: 1,
      autoAlpha: 1,
      y: 0,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2.5, x: 1400 });
    ani101.to("#section6 .section .box__wrap .game__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });
    // 게임 끝
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 1550,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 1500,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 2300 });
    ani101.to("#section6 .section .box__wrap", { duration: 2, y: 160 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 2500,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 2600,
      width: "500px",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap .parallax__wrap", {
      duration: 2,
      autoAlpha: 1,
      y: 0,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 3000 });
    ani101.to("#section6 .section .box__wrap .parallax__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });

    // parallax 끝
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 3300 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", { duration: 1, y: -180 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      y: -180,
      x: 3700,
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1.5,
      x: 4000,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1.5,
      x: 4300,
      width: "500px",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap .quiz__wrap", {
      duration: 2,
      autoAlpha: 1,
      y: 0,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 4500 });
    ani101.to("#section6 .section .box__wrap .quiz__wrap", {
      duration: 0.5,
      autoAlpha: 0,
      y: 10,
    });

    // quiz 끝
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 4500,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 4500,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", { duration: 1, y: 0 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      y: -45,
      width: "10vw",
      height: "450px",
    });
    ani101.to("#section6 .section .box__wrap", {
      x: 4700,
      duration: 1,
      width: "600px",
      height: "450px",
    });
    ani101.to("#section6 .section .box__wrap .mouse__wrap", {
      duration: 2,
      autoAlpha: 1,
      y: 0,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 5000 });
    ani101.to("#section6 .section .box__wrap .mouse__wrap", {
      duration: 2,
      autoAlpha: 0,
      y: 10,
    });

    // mouse 끝
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 5300,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 2,
      x: 5500,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", { duration: 1, y: -180 });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 5600,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 5900,
      width: "500px",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap .slider__wrap", {
      duration: 2,
      autoAlpha: 1,
      y: 0,
    });
    ani101.to("#section6 .section .box__wrap", { duration: 2, x: 6000 });
    ani101.to("#section6 .section .box__wrap .slider__wrap", {
      duration: 1,
      autoAlpha: 0,
      y: 10,
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 6000,
      width: "10vw",
      height: "350px",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 1,
      x: 6200,
      width: "10vw",
      height: "10vw",
    });
    ani101.to("#section6 .section .box__wrap", {
      duration: 8,
      x: 6500,
      y: -180,
      rotateZ: 0,
    });
    ScrollTrigger.create({
      animation: ani101,
      trigger: "#section6 .section",
      start: "top top",
      end: "9000",
      // () => {
      //   const sectionWidth = document.querySelector("#section6 .section").offsetWidth;
      //   const containerWidth = window.innerWidth;
      //   return `+=${sectionWidth - containerWidth}`;
      // },
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // markers: true
    });
  },
  //mobile
  "(max-width: 480px)": function () {
    // console.log("480px");
    window.addEventListener("scroll", () => {
      let scrollTop6 = window.scrollY || document.documentElement.scrollTop;
      let section6Scroll =
        scrollTop6 - document.querySelector("#section6").offsetTop;
      console.log(section6Scroll / 2);
      document.querySelector("#section6 .box__wrap").style.transform =
        "translateX(" + (-section6Scroll + 300) / 2 + "px)";
    });
  },
});
