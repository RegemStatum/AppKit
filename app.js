const mainBlocks = {
  header: document.querySelector(".header"),
  topBg: document.querySelector(".top-bg"),
  about: document.querySelector("#about"),
  testimonials: document.querySelector("#testimonials"),
  features: document.querySelector("#features"),
  team: document.querySelector("#team"),
  pricing: document.querySelector("#pricing"),
  contact: document.querySelector("#contact"),
  footer: document.querySelector(".footer"),
};

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    mainBlocks.header.classList.add("header-moved");
  } else {
    mainBlocks.header.classList.remove("header-moved");
  }

  const headerList = document.querySelectorAll(".header-menu-list");

  if (
    window.pageYOffset > mainBlocks.about.offsetTop - 3 &&
    window.pageYOffset <= mainBlocks.testimonials.offsetTop - 3
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(0).classList.add("li-chosen");
  } else if (
    window.pageYOffset > mainBlocks.testimonials.offsetTop - 3 &&
    window.pageYOffset <= mainBlocks.features.offsetTop - 3
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(1).classList.add("li-chosen");
  } else if (
    window.pageYOffset > mainBlocks.features.offsetTop - 3 &&
    window.pageYOffset <= mainBlocks.team.offsetTop - 3
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(2).classList.add("li-chosen");
  } else if (
    window.pageYOffset > mainBlocks.team.offsetTop - 3 &&
    window.pageYOffset <= mainBlocks.pricing.offsetTop - 3
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(3).classList.add("li-chosen");
  } else if (
    window.pageYOffset > mainBlocks.pricing.offsetTop - 3 &&
    window.pageYOffset <=
      mainBlocks.contact.offsetTop - 3 - mainBlocks.contact.offsetHeight / 0.8
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(4).classList.add("li-chosen");
  } else if (
    window.pageYOffset >
    mainBlocks.contact.offsetTop - 3 - mainBlocks.contact.offsetHeight / 0.8
  ) {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
    headerList.item(5).classList.add("li-chosen");
  } else {
    headerList.forEach((item) => {
      item.classList.remove("li-chosen");
    });
  }
};

const markers = document.querySelectorAll(".greetings-pros-marker");

function changeTopBg(index) {
  const topBg = mainBlocks.topBg;
  const topBgHeading = document.querySelector("#top-bg-h2");
  const topBgText = document.querySelector("#top-bg-text");
  const topBgButton = document.querySelector("#top-bg-button");

  const topBgHeadings = {
    0: "AppKit is the perfect front-end template for app developers",
    1: "Angular Lover?",
    2: "Ready to build outstanding apps?",
  };

  const topBgTexts = {
    0: "It helps developers to build beautiful and user-friendly web apps quickly and easily!",
    1: "AppKit also comes with an Angular JS version. It empowers developers to create UI components with very little code. Feeding data into AppKit directives is quick and easy.",
    2: "Get AppKit today and it will supercharge your development. It's a must-have for any developers who are serious about building great products!",
  };

  const topBgButtons = {
    0: "Get started",
    1: "Find out more",
    2: "Try it now",
  };

  markers.forEach((marker) => {
    marker.classList.remove("marker-highlighted");
  });
  markers[index].classList.add("marker-highlighted");
  topBg.style.backgroundImage = `url('images/hero-${index + 1}.jpg')`;
  topBgHeading.classList.add("fade");
  topBgText.classList.add("fade");
  topBgButton.classList.add("fade");

  setTimeout(() => {
    topBgHeading.innerHTML = topBgHeadings[index];
    topBgText.innerHTML = topBgTexts[index];
    topBgButton.innerHTML = topBgButtons[index];
    topBgHeading.classList.remove("fade");
    topBgText.classList.remove("fade");
    topBgButton.classList.remove("fade");
  }, 600);
}

for (let marker of markers) {
  marker.addEventListener("click", (e) => {
    let index = Array.prototype.indexOf.call(markers, marker);
    changeTopBg(index);
  });
}

function changeTopBgAfterTime(index) {
  return function () {
    changeTopBg(index);
    index === 2 ? (index = 0) : index++;
  };
}

function changeTopBgAfter13s() {
  let changeTopBgStartIndex0 = changeTopBgAfterTime(0);
  setInterval(changeTopBgStartIndex0, 13000);
}

changeTopBgAfter13s();

const as = document.querySelectorAll(".features-list-a");
const image = document.querySelector("#features-image");

for (let a of as) {
  a.addEventListener("click", (e) => {
    as.forEach((a) => {
      a.classList.remove("features-list-active");
    });
    a.classList.add("features-list-active");
    e.preventDefault();
    let index = Array.prototype.indexOf.call(as, a);
    image.parentElement.classList.add("hidden");
    setTimeout(() => {
      image.src = `images/feature-${index + 1}.png`;
      image.parentElement.classList.remove("hidden");
    }, 700);
  });
}

const headerMenuButton = document.querySelector("#header-menu-btn");
const headerMenu = mainBlocks.header.querySelector(".header-menu");

headerMenuButton.addEventListener("click", (e) => {
  if (headerMenu.classList.contains("mobile")) {
    headerMenu.classList.toggle("shown");
  } else {
    headerMenu.classList.toggle("mobile");
    setTimeout(() => {
      headerMenu.classList.toggle("shown");
    }, 0);
  }
});
