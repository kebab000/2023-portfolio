let scrollTop3= 0
window.addEventListener("scroll", ()=>{
    scrollTop3 = window.pageYOffset || window.scrollY ||document.documentElement.scrollTop;
            
    if (scrollTop3 > 10000) {
        document.querySelector("#section4 .my__sign").style.opacity = "1"
    }
    if (scrollTop3 > 27000) {
        document.querySelector("#section4 .my__sign").style.opacity = "0"
    }
    if (scrollTop3 < 10000) {
        document.querySelector("#section4 .my__sign").style.opacity = "0"
    }

});


function section4Scroll() {
    scrollTop3 = document.documentElement.scrollTop;

    const section4Top = document.querySelector("#section4");
    let offset1 = (scrollTop3 - section4Top.offsetTop) * 0.1;
    let offset2 = (scrollTop3 - section4Top.offsetTop) * 0.07;
    let offset3 = (scrollTop3 - section4Top.offsetTop) * 0.09;
    let offset4 = (scrollTop3 - section4Top.offsetTop) * 0.084;
    let offset5 = (scrollTop3 - section4Top.offsetTop) * 0.06;
    let offset6 = (scrollTop3 - section4Top.offsetTop) * 0.09;
    let offset7 = (scrollTop3 - section4Top.offsetTop) * 0.08;
  
    gsap.to(".img1", { duration: 0.3, y: -offset1 });
    gsap.to(".img2", { duration: 0.3, y: -offset2 });
    gsap.to(".img3", { duration: 0.3, y: -offset3 });
    gsap.to(".img4", { duration: 0.3, y: -offset4 });
    gsap.to(".img5", { duration: 0.3, y: -offset5 });
    gsap.to(".img6", { duration: 0.3, y: -offset6 });
    gsap.to(".img7", { duration: 0.3, y: -offset7 });
  
//     gsap.to(target2, { duration: 0.3, y: offset });
//     gsap.to(info01, { duration: 0.3, y: offset });
//     gsap.to(info02, { duration: 0.3, y: offset });
//     gsap.to(myProfile, { duration: 0.3, y: offset });
    requestAnimationFrame(section4Scroll);

}
  section4Scroll();


//   gsap.set(".img1", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img2", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img3", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img4", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img5", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img6", {autoAlpha: 1, filter: "grayscale(100%)" })
//   gsap.set(".img7", {autoAlpha: 1, filter: "grayscale(100%)" })

// const ani102 = gsap.timeline();
// ani102.to(".img1",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img1",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img2",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img2",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img3",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img3",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img4",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img4",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img5",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img5",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img6",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img6",      {duration:1,  filter: "grayscale(100%)"})
// ani102.to(".img7",      {duration:1,  filter: "grayscale(0%)"})
// ani102.to(".img7",      {duration:1,  filter: "grayscale(100%)"})


// ScrollTrigger.create({
//     animation: ani102,
//     trigger: ".img1",
//     scrub: true,
//     start: "top top%",

//     // pin: true, 
//     anticipatePin: 1,
//     markers: true
// });

const section4Img = gsap.utils.toArray("#section4 img");

// gsap.to(section4Img, {
//     duration: 2,
//     filter: "grayscale(0%)",
//     scrollTrigger: {
//         trigger: section4Img,
//         start: "top top",
//         markers: true,
//         scrub: 1, 
//     }
// });