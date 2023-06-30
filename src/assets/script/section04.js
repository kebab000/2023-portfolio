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