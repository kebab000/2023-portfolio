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
ani3.to(".sec3-section3 .box",      {duration:0.5, width: "10vw", height: "60vh"})
ani3.to(".sec3-section3 .box",      {duration:0.5, width: "25vw", height: "60vh"})
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
ani4.to(".sec3-sect4on2 .box",      {duration:0.3, y: -50})
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