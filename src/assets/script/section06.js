const sections = gsap.utils.toArray(".section");
const section6Width = document.querySelector("#section6").offsetWidth
console.log(section6Width)
let scrollTween = gsap.to("#section6", {
  x: -(document.querySelector("#section6").offsetWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#section6",
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    end: `+=${section6Width}`,
  }
});

// section3-section1
gsap.set("#section6 .section .box__wrap", {width: "10vw", height: "10vw", x:1050, y:100,zIndex:2})
gsap.set("#section6 .section .box__wrap .game__wrap", {duration:0.5,autoAlpha:0, y: 10})
gsap.set("#section6 .section .box__wrap .parallax__wrap", {duration:0.5,autoAlpha:0, y: 10})
gsap.set("#section6 .section .box__wrap .quiz__wrap", {duration:0.5,autoAlpha:0, y: 10})
gsap.set("#section6 .section .box__wrap .mouse__wrap", {duration:0.5,autoAlpha:0, y: 10})
gsap.set("#section6 .section .box__wrap .slider__wrap", {duration:0.5,autoAlpha:0, y: 10})

// gsap.set("#section6 .section .box__wrap span", {autoAlpha: 0})
// gsap.set("#section6 .section .box__wrap h3", {autoAlpha: 0, y: 10})
// gsap.set("#section6 .section .box__wrap p", {autoAlpha: 0, y: 10})
// gsap.set("#section6 .section .box__wrap .btn", {autoAlpha: 0, y: 10})
// gsap.set("#section6 .section .box__wrap .qr", {autoAlpha: 0, y: 10})
// gsap.set("#section6 .section .box__wrap .mockup", {autoAlpha: 0, x: 100})

const ani101 = gsap.timeline();
ani101.to("#section6 .section .box__wrap", {duration:0.5, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:2, x:1200, rotateZ:180})
ani101.to("#section6 .section .box__wrap", {duration:1.5, y:-180, rotateZ:360})
ani101.to("#section6 .section .box__wrap", {duration:1, x:800})
ani101.to("#section6 .section .box__wrap", {duration:1, width: "500px", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:1, width: "500px", height: "350px"})
ani101.to("#section6 .section .box__wrap .game__wrap", {duration:1, autoAlpha:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:2.5, x:900,})
ani101.to("#section6 .section .box__wrap .game__wrap", {duration:0.5,autoAlpha:0, y: 10})
// 게임 끝
ani101.to("#section6 .section .box__wrap", {duration:2, x:1050, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:2, x:1100, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:2, y:150})
ani101.to("#section6 .section .box__wrap", {duration:2, x:1200, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:2, x:1250, width: "500px", height: "350px"})
ani101.to("#section6 .section .box__wrap .parallax__wrap", {duration:2, autoAlpha:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:2, x:1300,})
ani101.to("#section6 .section .box__wrap .parallax__wrap", {duration:0.5,autoAlpha:0, y: 10})

// parallax 끝
ani101.to("#section6 .section .box__wrap", {duration:1, x:1550, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:1, x:2050, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:1, y:-180})
ani101.to("#section6 .section .box__wrap", {duration:1.5, x:2150, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:1.5, x:2150, width: "500px", height: "350px"})
ani101.to("#section6 .section .box__wrap .quiz__wrap", {duration:2, autoAlpha:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:2, x:2100,})
ani101.to("#section6 .section .box__wrap .quiz__wrap", {duration:0.5,autoAlpha:0, y: 10})

// quiz 끝
ani101.to("#section6 .section .box__wrap", {duration:1, x:2200, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:1, x:2350, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:1, y:-90, width: "10vw", height: "450px"})
ani101.to("#section6 .section .box__wrap", {duration:1, width: "600px", height: "450px"})
ani101.to("#section6 .section .box__wrap .mouse__wrap", {duration:2, autoAlpha:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:2, x:2400,})
ani101.to("#section6 .section .box__wrap .mouse__wrap", {duration:2,autoAlpha:0, y: 10})

// mouse 끝
ani101.to("#section6 .section .box__wrap", {duration:2, x:3150, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:2, x:3100, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:1, y:-180})
ani101.to("#section6 .section .box__wrap", {duration:1, x:2800, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:1, x:2800, width: "500px", height: "350px"})
ani101.to("#section6 .section .box__wrap .slider__wrap", {duration:2, autoAlpha:1, y:0})
ani101.to("#section6 .section .box__wrap", {duration:2, x:2850,})
ani101.to("#section6 .section .box__wrap .slider__wrap", {duration:1,autoAlpha:0, y: 10})
ani101.to("#section6 .section .box__wrap", {duration:3, x:2900, width: "10vw", height: "350px"})
ani101.to("#section6 .section .box__wrap", {duration:3, x:2900, width: "10vw", height: "10vw"})
ani101.to("#section6 .section .box__wrap", {duration:10,x:3500, y:-180, rotateZ:0})

// slider끝


// ani10.to("#section6 .section .box__wrap span", {duration:0.5, autoAlpha:1})
// ani10.to("#section6 .section .box__wrap",      {duration:0.3, x: 300})
// ani10.to("#section6 .section .box__wrap",      {duration:0.3, y: 300})
// ani10.to("#section6 .section .box__wrap",      {duration:0.3, x: 0})
// ani10.to("#section6 .section .box__wrap",      {duration:0.3, y: 0})
// ani10.to("#section6 .section .box__wrap",      {duration:0.5, width: "400px", height: "10vw"})
// ani10.to("#section6 .section .box__wrap",      {duration:0.5, width: "400px", height: "500px"})
// ani10.to("#section6 .section .box__wrap h3",   {duration:0.5, autoAlpha:1, y: 0})
// ani10.to("#section6 .section .box__wrap p",    {duration:0.5, autoAlpha:1, y: 0})
// ani10.to("#section6 .section .box__wrap .btn", {duration:0.5, autoAlpha:1, y: 0})
// ani10.to("#section6 .section .box__wrap .qr",  {duration:0.5, autoAlpha:1, y: -40})
// ani10.to("#section6 .section .box__wrap .mockup",  {duration:1.5, autoAlpha:1, x: 0,})
// ani10.to("#section6 .section .box__wrap",      {duration:1, y: -10, autoAlpha:1})


// ScrollTrigger.create({
//     animation: ani101,
//     trigger: "#section6 .section",
//     start: "top top",
//     end: "+=4000",
//     scrub: true,
//     pin: true, 
//     anticipatePin: 1,
//     markers: true
// });

ScrollTrigger.create({
  animation: ani101,
  trigger: "#section6 .section",
  start: "top top",
  end: "5000",
  // () => {
  //   const sectionWidth = document.querySelector("#section6 .section").offsetWidth;
  //   const containerWidth = window.innerWidth;
  //   return `+=${sectionWidth - containerWidth}`;
  // },
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: true
});
