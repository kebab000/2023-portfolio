// 새로고침시 맨위로
// const main = document.querySelector("#main");
window.onload = function () {
  // main.style.height = "100vh";
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

  // window.performance.timing은 브라우저의 성능 측정 API인 "Performance Timing API"를 사용합니다.
  // 이 API를 통해 웹 페이지가 로딩되는 데 걸리는 다양한 타이밍 정보에 접근할 수 있습니다.
  // window.performance.timing.navigationStart는 현재 문서의 네비게이션이 시작된 시간을 나타냅니다.
  // 즉, 웹 페이지가 로딩되기 시작한 시점을 나타냅니다.
  // window.performance.timing.domContentLoadedEventEnd는 DOMContentLoaded 이벤트가 발생하여 DOM 트리를 완전히 구성하고 스크립트와 스타일시트 등의 외부 리소스를 모두 로드한 시점을 나타냅니다.
  // 즉, 웹 페이지가 DOM 구성을 마치고 사용자에게 보여질 수 있는 상태가 되었을 때의 시점을 의미합니다.
  // 따라서 loadTime 변수는 웹 페이지가 로딩되기 시작한 시점부터 DOM 구성이 완료된 시점까지의 시간을 밀리초 단위로 측정한 값입니다.
  // 이 변수를 사용하면 웹 페이지의 로딩 성능을 파악하거나 최적화에 도움을 줄 수 있습니다.
  // 예를 들어, 이 값을 서버에 전송하여 웹 페이지의 성능 지표를 수집하고 모니터링하는 등의 용도로 사용할 수 있습니다.

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
      main.style.height = "100%";
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
