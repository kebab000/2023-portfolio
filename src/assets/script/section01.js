// 새로고침시 맨위로
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

// 페이지 로딩 시간을 측정하고 페이지 시작
window.addEventListener("load", measurePageLoadTime);
function measurePageLoadTime() {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  // 로딩 화면 요소
  var loadingElement = document.getElementById("loading");
  var loadingTextElement = document.getElementById("loading-text");
  // 로딩 수치 업데이트
  var progress = 0;
  var increment = 100 / loadTime; // 로딩 시간에 따라 증가하는 진행률 계산
  var intervalId = setInterval(function () {
    progress += increment;
    loadingTextElement.textContent = Math.round(progress) + "%";
    if (progress >= 100) {
      clearInterval(intervalId);
      progress = 100; // 진행률(progress)을 100으로 제한
      loadingTextElement.textContent = Math.round(progress) + "%"; // 수치를 100%로 표시
      loadingElement.classList.add("hidden"); // 로딩 화면에 hidden 클래스 추가
      document.body.style.visibility = "visible"; // 페이지 내용 보이기
      setTimeout(function () {
        loadingElement.style.display = "none"; // 로딩 화면 숨기기
      }, 500); // 0.5초 후에 로딩 화면 요소 제거
      startPage(); // 페이지 실행 코드
    }
  });
}

function startPage() {
  document.querySelectorAll(".split").forEach((text) => {
    let theText = text.innerText;
    let newText = "";

    for (let i = 0; i < text.innerText.length; i++) {
      newText += "<span aria-hidden='true'>";
      if (text.innerText[i] == " ") {
        newText += "&nbsp;";
      } else {
        newText += text.innerText[i];
      }
      newText += "</span>";
    }

    text.innerHTML = newText;
    text.setAttribute("aria-label", theText);
  });

  gsap.set("#section1 .text .title > div span", { opacity: 0, yPercent: 100 });
  gsap.set("#section1 .text .desc > div span", {
    opacity: 0,
    yPercent: 150,
    rotationz: 50,
  });
  gsap.set("#section1 .bg", { opacity: 0 });

  setTimeout(() => {
    gsap.to("#section1 .text .title > div span", {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "circ.out",
      stagger: 0.05,
    });

    gsap.to("#section1 .text .desc > div span", {
      rotationz: 0,
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power2.out",
      stagger: 0.009,
      delay: 1,
    });

    gsap.to(".bg", {
      opacity: 0.5,
      duration: 2,
      delay: 3,
    });
  }, 1000);
}
