// section3-section1
gsap.set(".sec3-section1 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section1 .box span", {autoAlpha: 0})
gsap.set(".sec3-section1 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section1 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section1 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section1 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section1 .box .mockup", {autoAlpha: 0, x: 100})

const ani1 = gsap.timeline();
ani1.to(".sec3-section1 .box",      {duration:0.5, width: "10vw", height: "10vw", autoAlpha:1})
ani1.to(".sec3-section1 .box span", {duration:0.5, autoAlpha:1})
ani1.to(".sec3-section1 .box",      {duration:0.3, x: 300})
ani1.to(".sec3-section1 .box",      {duration:0.3, y: 300})
ani1.to(".sec3-section1 .box",      {duration:0.3, x: 0})
ani1.to(".sec3-section1 .box",      {duration:0.3, y: 0})
ani1.to(".sec3-section1 .box",      {duration:0.5, width: "25vw", height: "10vw"})
ani1.to(".sec3-section1 .box",      {duration:0.5, width: "25vw", height: "auto"})
ani1.to(".sec3-section1 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani1.to(".sec3-section1 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani1.to(".sec3-section1 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani1.to(".sec3-section1 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani1.to(".sec3-section1 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})
// ani1.to(".sec3-section1 .box",      {duration:1, y: -10, autoAlpha:1})


ScrollTrigger.create({
    animation: ani1,
    trigger: ".sec3-section1",
    start: "top top",
    end: "+=3500",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    // markers: true
});

// section3-section2
gsap.set(".sec3-section2 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section2 .box span", {autoAlpha: 1})
gsap.set(".sec3-section2 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section2 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section2 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section2 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section2 .box .mockup", {autoAlpha: 0, x: -100})


const ani2 = gsap.timeline();
ani2.to(".sec3-section2 .box",      {duration:0, width: "10vw", height: "10vw", autoAlpha:1})
ani2.to(".sec3-section2 .box span", {duration:0.5, autoAlpha:1})
ani2.to(".sec3-section2 .box",      {duration:0.3, x: 200})
ani2.to(".sec3-section2 .box",      {duration:0.3, y: -300})
ani2.to(".sec3-section2 .box",      {duration:0.3, x: 0})
// ani2.to(".sec3-section2 .box",      {duration:0.3, y: -50})
ani2.to(".sec3-section2 .box",      {duration:0.4, width: "25vw", height: "10vw"})
ani2.to(".sec3-section2 .box",      {duration:0.5, width: "25vw", height: "auto", y: -450})
ani2.to(".sec3-section2 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani2.to(".sec3-section2 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani2.to(".sec3-section2 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani2.to(".sec3-section2 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani2.to(".sec3-section2 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})



ScrollTrigger.create({
    animation: ani2,
    trigger: ".sec3-section2",
    start: "top 100%",
    end: "+=3000",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    // markers: true
});

// section3-section3
gsap.set(".sec3-section3 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section3 .box span", {autoAlpha: 0})
gsap.set(".sec3-section3 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section3 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section3 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section3 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section3 .box .mockup", {autoAlpha: 0, x: 100})

const ani3 = gsap.timeline();
ani3.to(".sec3-section3 .box",      {duration:0.5, width: "10vw", height: "10vw", autoAlpha:1})
ani3.to(".sec3-section3 .box span", {duration:0.5, autoAlpha:1})
ani3.to(".sec3-section3 .box",      {duration:0.3, x: 300})
ani3.to(".sec3-section3 .box",      {duration:0.3, y: 300})
ani3.to(".sec3-section3 .box",      {duration:0.3, x: 0})
ani3.to(".sec3-section3 .box",      {duration:0.3, y: -150})
ani3.to(".sec3-section3 .box",      {duration:1.5, width: "10vw", height: "33vw"})
ani3.to(".sec3-section3 .box",      {duration:0.5, width: "25vw", height: "33vw"})
ani3.to(".sec3-section3 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani3.to(".sec3-section3 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani3.to(".sec3-section3 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani3.to(".sec3-section3 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani3.to(".sec3-section3 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})

ScrollTrigger.create({
    animation: ani3,
    trigger: ".sec3-section3",
    start: "top 150%",
    end: "+=3500",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    markers: true
});


// section3-section4
gsap.set(".sec3-section4 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section4 .box span", {autoAlpha: 0})
gsap.set(".sec3-section4 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section4 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section4 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section4 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section4 .box .mockup", {autoAlpha: 0, x: -100})

const ani4 = gsap.timeline();
ani4.to(".sec3-section4 .box",      {duration:0, width: "10vw", height: "10vw", autoAlpha:1})
ani4.to(".sec3-section4 .box span", {duration:0.5, autoAlpha:1})
ani4.to(".sec3-section4 .box",      {duration:0.3, x: 200})
ani4.to(".sec3-section4 .box",      {duration:0.3, y: 200})
ani4.to(".sec3-section4 .box",      {duration:0.3, x: 0})
ani4.to(".sec3-section4 .box",      {duration:0.3, y: -100})
ani4.to(".sec3-section4 .box",      {duration:0.4, width: "25vw", height: "10vw"})
ani4.to(".sec3-section4 .box",      {duration:0.5, width: "25vw", height: "auto"})
ani4.to(".sec3-section4 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani4.to(".sec3-section4 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani4.to(".sec3-section4 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani4.to(".sec3-section4 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani4.to(".sec3-section4 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})

ScrollTrigger.create({
    animation: ani4,
    trigger: ".sec3-section4",
    start: "top 100%",
    end: "+=3500",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    // markers: true
});

// section3-section5
gsap.set(".sec3-section5 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section5 .box span", {autoAlpha: 0})
gsap.set(".sec3-section5 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section5 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section5 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section5 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section5 .box .mockup", {autoAlpha: 0, x: 100})

const ani5 = gsap.timeline();
ani5.to(".sec3-section5 .box",      {duration:0.5, width: "10vw", height: "10vw", autoAlpha:1})
ani5.to(".sec3-section5 .box span", {duration:0.3, autoAlpha:1})
// ani5.to(".sec3-section5 .box",      {duration:1.3, rotateZ: -720, x:0, y: 0})
ani5.to(".sec3-section5 .box",      {duration:0.3, x: 300})
ani5.to(".sec3-section5 .box",      {duration:0.3, y: 300})
ani5.to(".sec3-section5 .box",      {duration:0.3, x: 0})
ani5.to(".sec3-section5 .box",      {duration:0.3, y: 0})
ani5.to(".sec3-section5 .box",      {duration:0.5, width: "25vw", height: "10vw"})
ani5.to(".sec3-section5 .box",      {duration:0.5, width: "25vw", height: "auto"})
ani5.to(".sec3-section5 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani5.to(".sec3-section5 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani5.to(".sec3-section5 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani5.to(".sec3-section5 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani5.to(".sec3-section5 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})
// ani1.to(".sec3-section1 .box",      {duration:1, y: -10, autoAlpha:1})

ScrollTrigger.create({
    animation: ani5,
    trigger: ".sec3-section5",
    start: "top 150%",
    end: "+=3500",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    markers: true
});

// box 6

// section3-section6
gsap.set(".sec3-section6 .box", {autoAlpha: 1, width: "10vw", height: "10vw"})
gsap.set(".sec3-section6 .box span", {autoAlpha: 0})
gsap.set(".sec3-section6 .box h3", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section6 .box p", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section6 .box .btn", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section6 .box .qr", {autoAlpha: 0, y: 10})
gsap.set(".sec3-section6 .box .mockup", {autoAlpha: 0, x: -100})

const ani6 = gsap.timeline();
ani6.to(".sec3-section6 .box",      {duration:0, width: "10vw", height: "10vw", autoAlpha:1, x:0})
ani6.to(".sec3-section6 .box span", {duration:0.5, autoAlpha:1})
ani6.to(".sec3-section6 .box",      {duration:0.3, x: 200})
ani6.to(".sec3-section6 .box",      {duration:0.3, y: 200})
ani6.to(".sec3-section6 .box",      {duration:0.3, x: 0})
ani6.to(".sec3-section6 .box",      {duration:0.3, y: -100})
ani6.to(".sec3-section6 .box",      {duration:0.4, width: "25vw", height: "10vw"})
ani6.to(".sec3-section6 .box",      {duration:0.5, width: "25vw", height: "auto"})
ani6.to(".sec3-section6 .box h3",   {duration:0.5, autoAlpha:1, y: 0})
ani6.to(".sec3-section6 .box p",    {duration:0.5, autoAlpha:1, y: 0})
ani6.to(".sec3-section6 .box .btn", {duration:0.5, autoAlpha:1, y: 0})
ani6.to(".sec3-section6 .box .qr",  {duration:0.5, autoAlpha:1, y: 0})
ani6.to(".sec3-section6 .box .mockup",  {duration:1.5, autoAlpha:1, x: 0})

ScrollTrigger.create({
    animation: ani6,
    trigger: ".sec3-section6",
    start: "top 100%",
    end: "+=3500",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    // markers: true
});