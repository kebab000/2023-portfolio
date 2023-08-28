let scrollTop = 0;
const layout1 = document.querySelector(".left .left__desc");
const layout2 = document.querySelector(".right #ticket");
const siteCount = document.querySelector(".site__count");
const phpCount = document.querySelector(".php__count");
let count1 = 4;
let count2 = 2;



// 영수증 시간
function printTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const timeString = `${year}/${month}/${date}`;
  document.getElementById("date").textContent = timeString;
  setTimeout(printTime, 1000); // 1초마다 업데이트
}

printTime();

gsap.set(layout1, { autoAlpha: 1, y: -5100 });
// gsap.set(layout2, { autoAlpha: 1, y: 535 });

let scrollLayout = 0;
window.addEventListener("scroll", () => {
  scrollTop =
    window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  scrollLayout = scrollTop * 0.5;

  siteCount.innerHTML = count1;
  phpCount.innerHTML = count2;

  //info
  document.querySelector(".scroll span").innerHTML = parseInt(scrollTop);

  gsap.to(layout1, { duration: 0.3, y: -5100 + scrollLayout });

  if (scrollTop > 26500) {
    document.querySelector("#section1 .text .d3").innerHTML =
      "배움에 겸손하게 접근하며, 새로운 기술과 도구를 습득하여 혁신적인 솔루션을 만들어내고자 합니다.";
    document.querySelector("#section1 .text .d2").innerHTML =
      "문제에 직면했을 때도 포기하지 않고 창의적인 해결책을 모색하며, 팀과의 협업을 통해 협력적인 개발자로 성장하고 싶습니다.";
    document.querySelector("#section1 .text .d1").innerHTML =
      "소프트웨어 개발의 여정에서 함께 성장하며, 혁신과 가치를 창출하는 신입 개발자로 거듭날 것입니다.";
    document.querySelector("#section1 .text .t1").innerHTML = "EXPLORE";
    document.querySelector("#section1 .text .t2").innerHTML = "INNOVATE";
    document.querySelector("#section1 .bg").style.display = "none";
    document.querySelector("#section1 .bg2").style.display = "block";
  }
  if (scrollTop < 26500) {
    document.querySelector("#section1 .text .d3").innerHTML =
      "세부적인 곳까지 파고드는 개발자가 되겠습니다.";
    document.querySelector("#section1 .text .d2").innerHTML =
      "신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며";
    document.querySelector("#section1 .text .d1").innerHTML =
      "어떤 일이라도 노력하고 즐기면  그 결과는 빛을 바란다고 생각합니다.";
    document.querySelector("#section1 .text .t1").innerHTML = "YOSEP";
    document.querySelector("#section1 .text .t2").innerHTML = "PORTFOLIO";
    document.querySelector("#section1 .bg2").style.display = "none";
    document.querySelector("#section1 .bg").style.display = "block";
  }
  if (scrollTop > 32500) {
    document.querySelector("#section1 .bg2").style.display = "none";
    document.querySelector("#section1 .bg").style.display = "block";
    document.querySelector("#section1 .text .d3").innerHTML = "";
    document.querySelector("#section1 .text .d2").innerHTML = "";
    document.querySelector("#section1 .text .d1").innerHTML = "";
    document.querySelector("#section1 .text .t1").innerHTML = "";
    document.querySelector("#section1 .text .t2").innerHTML = "";
  }
});

ScrollTrigger.matchMedia({
  //desktop
  "(min-width: 480px)": function () {
    window.addEventListener("scroll", () => {
      scrollTop =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop;
      scrollLayout = scrollTop * 0.5;

      siteCount.innerHTML = count1;
      phpCount.innerHTML = count2;

      //info
      document.querySelector(".scroll span").innerHTML = parseInt(scrollTop);

      gsap.to(layout1, { duration: 0.3, y: -5100 + scrollLayout });

      if (scrollTop > 26500) {
        document.querySelector("#section1 .text .d3").innerHTML =
          "배움에 겸손하게 접근하며, 새로운 기술과 도구를 습득하여 혁신적인 솔루션을 만들어내고자 합니다.";
        document.querySelector("#section1 .text .d2").innerHTML =
          "문제에 직면했을 때도 포기하지 않고 창의적인 해결책을 모색하며, 팀과의 협업을 통해 협력적인 개발자로 성장하고 싶습니다.";
        document.querySelector("#section1 .text .d1").innerHTML =
          "소프트웨어 개발의 여정에서 함께 성장하며, 혁신과 가치를 창출하는 신입 개발자로 거듭날 것입니다.";
        document.querySelector("#section1 .text .t1").innerHTML = "EXPLORE";
        document.querySelector("#section1 .text .t2").innerHTML = "INNOVATE";
        document.querySelector("#section1 .bg").style.display = "none";
        document.querySelector("#section1 .bg2").style.display = "block";
      }
      if (scrollTop < 26500) {
        document.querySelector("#section1 .text .d3").innerHTML =
          "세부적인 곳까지 파고드는 개발자가 되겠습니다.";
        document.querySelector("#section1 .text .d2").innerHTML =
          "신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며";
        document.querySelector("#section1 .text .d1").innerHTML =
          "어떤 일이라도 노력하고 즐기면  그 결과는 빛을 바란다고 생각합니다.";
        document.querySelector("#section1 .text .t1").innerHTML = "YOSEP";
        document.querySelector("#section1 .text .t2").innerHTML = "PORTFOLIO";
        document.querySelector("#section1 .bg2").style.display = "none";
        document.querySelector("#section1 .bg").style.display = "block";
      }
      if (scrollTop > 32500) {
        document.querySelector("#section1 .bg2").style.display = "none";
        document.querySelector("#section1 .bg").style.display = "block";
        document.querySelector("#section1 .text .d3").innerHTML = "";
        document.querySelector("#section1 .text .d2").innerHTML = "";
        document.querySelector("#section1 .text .d1").innerHTML = "";
        document.querySelector("#section1 .text .t1").innerHTML = "";
        document.querySelector("#section1 .text .t2").innerHTML = "";
      }
    });

    window.addEventListener("scroll", () => {
      scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      if (scrollTop > 6300) {
        document.querySelector(".right #ticket").classList.add("active1");
      }
      if (scrollTop > 8700) {
        document.querySelector(".right #ticket").classList.remove("active1");
        document.querySelector(".right #ticket").classList.add("active2");
      }
      if (scrollTop > 11750) {
        document.querySelector(".right #ticket").classList.remove("active2");
        document.querySelector(".right #ticket").classList.add("active3");
      }
      if (scrollTop > 15900) {
        document.querySelector(".right #ticket").classList.remove("active3");
        document.querySelector(".right #ticket").classList.add("active4");
      }
      if (scrollTop > 19300) {
        document.querySelector(".right #ticket").classList.remove("active4");
        document.querySelector(".right #ticket").classList.add("active5");
      }
      if (scrollTop > 23150) {
        document.querySelector(".right #ticket").classList.remove("active5");
        document.querySelector(".right #ticket").classList.add("active6");
      }
      if (scrollTop > 31200) {
        document.querySelector(".right #ticket").classList.remove("active6");
        document.querySelector(".right #ticket").classList.add("active7");
      }
      if (scrollTop > 33200) {
        document.querySelector(".right #ticket").classList.remove("active7");
        document.querySelector(".right #ticket").classList.add("active8");
      }
      if (scrollTop > 34800) {
        document.querySelector(".right #ticket").classList.remove("active8");
        document.querySelector(".right #ticket").classList.add("active9");
      }
      if (scrollTop > 36000) {
        document.querySelector(".right #ticket").classList.remove("active9");
        document.querySelector(".right #ticket").classList.add("active10");
      }
      if (scrollTop > 37550) {
        document.querySelector(".right #ticket").classList.remove("active10");
        document.querySelector(".right #ticket").classList.add("active11");
      }
      if (scrollTop > 39000) {
        document.querySelector(".right #ticket").classList.remove("active11");
        document.querySelector(".right #ticket").classList.add("active12");
        document.querySelector(".right #ticket").style.transition = "all 2.5s";
      }
    });
  },
  //pad
  "(max-width: 481px)": function () {},
  // phone
  "(max-width: 480px)": function () {
    // console.log("768px");
    window.addEventListener("scroll", () => {
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollLayout = scrollTop * 0.5;

      siteCount.innerHTML = count1;
      phpCount.innerHTML = count2;
      //info
      document.querySelector(".scroll span").innerHTML = parseInt(scrollTop);

      gsap.to(layout1, { duration: 0.3, y: -5100 + scrollLayout });

      if (scrollTop > 8000) {
        document.querySelector("#section1 .text .t1").innerHTML = "EXPLORE";
        document.querySelector("#section1 .text .t2").innerHTML = "INNOVATE";
        document.querySelector("#section1 .bg").style.display = "none";
        document.querySelector("#section1 .bg2").style.display = "block";
        document.querySelector("#section1 .text .desc").style.display = "block";
        document.querySelector("#section1").style.alignItems = "flex-start";
        document.querySelector("#section1 .text .title").style.margin =
          "10vh 0px 18vh 0vh";

        document.querySelector("#section1 .text .d3").innerHTML =
          "세부적인 곳까지 파고드는<br> 개발자가 되겠습니다.";
        document.querySelector("#section1 .text .d2").innerHTML =
          "배움에 있어 겸손함을 유지하며";
        document.querySelector("#section1 .text .d1").innerHTML =
          "어떤 일이라도 노력하고 즐기면 <br> 그 결과는 빛을 바란다고 생각합니다.";
      }
      if (scrollTop < 8000) {
        document.querySelector("#section1 .text .t1").innerHTML = "YOSEP";
        document.querySelector("#section1 .text .t2").innerHTML = "PORTFOLIO";
        document.querySelector("#section1 .bg2").style.display = "none";
        document.querySelector("#section1 .bg").style.display = "block";
        document.querySelector("#section1 .text .desc").style.display = "none";
        document.querySelector("#section1").style.alignItems = "center";
      }
      if (scrollTop > 9900) {
        document.querySelector("#section1 .bg2").style.display = "none";
        document.querySelector("#section1 .bg").style.display = "block";
        document.querySelector("#section1 .text .desc").style.display = "none";
        document.querySelector("#section1 .text .d3").innerHTML = "";
        document.querySelector("#section1 .text .d2").innerHTML = "";
        document.querySelector("#section1 .text .d1").innerHTML = "";
        document.querySelector("#section1 .text .t1").innerHTML = "";
        document.querySelector("#section1 .text .t2").innerHTML = "";
      }
    });
  },
});
