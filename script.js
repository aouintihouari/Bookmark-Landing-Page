const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("header-logo");
const shareIconsContainer = document.getElementById("share-container");
const separation = document.querySelectorAll(".separation");
const faqs = document.querySelectorAll(".faq");

const logoLink = "images/logo-bookmark.svg";
const logoLightLink = "images/logo-bookmark-light.svg";

const tabs = document.querySelectorAll(".tab");
const indicators = document.querySelectorAll(".underline-indicator");

const features = [
  {
    image: "images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: "images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: "images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const featureImage = document.getElementById("feature-image");
const featureTitle = document.getElementById("feature-title");
const featureDescription = document.getElementById("feature-description");

const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementById("error-message");
const contactButton = document.getElementById("contact-us");
const emailContainer = document.getElementById("email-container");

hamburger.addEventListener("click", () => {
  overlay.classList.remove("h-0");
  overlay.classList.add("h-full");
  hamburger.classList.add("hidden");
  close.classList.remove("hidden");
  overlay.classList.remove("hidden");
  logo.src = logoLightLink;
  navbar.classList.remove("hidden");
  shareIconsContainer.classList.remove("hidden");
  separation.forEach((e) => e.classList.remove("hidden"));
});

close.addEventListener("click", () => {
  overlay.classList.remove("h-full");
  overlay.classList.add("h-0");
  hamburger.classList.remove("hidden");
  close.classList.add("hidden");
  overlay.classList.add("hidden");
  logo.src = logoLink;
  navbar.classList.add("hidden");
  shareIconsContainer.classList.add("hidden");
  separation.forEach((e) => e.classList.add("hidden"));
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("text-custom-dark-blue");
      t.classList.add("text-custom-gray");
      t.nextElementSibling.classList.remove("w-4/12", "md:w-10/12");
      t.nextElementSibling.classList.add("w-0");
    });

    tab.classList.remove("text-custom-gray");
    tab.classList.add("text-custom-dark-blue");
    tab.nextElementSibling.classList.remove("w-0");
    tab.nextElementSibling.classList.add("w-4/12", "md:w-10/12");
    featureImage.src = features[tab.dataset["tab"]].image;
    featureTitle.textContent = features[tab.dataset["tab"]].title;
    featureDescription.textContent = features[tab.dataset["tab"]].description;
  });
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const arrow = faq.querySelector(".arrow");
    const content = faq.querySelector(".faq-content");

    arrow.classList.toggle("arrow-open");
    arrow.classList.toggle("arrow-close");

    content.classList.toggle("hidden");
  });
});

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    emailContainer.classList.remove("bg-custom-light-blue");
    emailContainer.classList.add("bg-custom-red");
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("border-custom-red");
    emailInput.classList.remove("border-custom-light-blue");
    emailInput.classList.add("md:mt-7");
  } else {
    emailContainer.classList.add("bg-custom-light-blue");
    emailContainer.classList.remove("bg-custom-red");
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("border-custom-red");
    emailInput.classList.add("border-custom-light-blue");
    emailInput.classList.remove("md:mt-7");
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
