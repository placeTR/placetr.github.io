document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === "#hakkimizda") {
        var hakkimizdaSection = document.getElementById("hakkimizda");
        if (hakkimizdaSection) {
            var yOffset = hakkimizdaSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth', });
        }
    }
    if (window.location.hash === "#urunler") {
        var hakkimizdaSection = document.getElementById("urunler");
        if (hakkimizdaSection) {
            var yOffset = hakkimizdaSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }
    if (window.location.hash === "#iletisim") {
        var hakkimizdaSection = document.getElementById("iletisim");
        if (hakkimizdaSection) {
            var yOffset = hakkimizdaSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }
    if (window.location.hash === "#placeUn") {
        var hakkimizdaSection = document.getElementById("placeun");
        if (hakkimizdaSection) {
            var yOffset = hakkimizdaSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function toggleTheme() {
    var body = document.body;
    var isDarkTheme = body.classList.contains("dark");
    if (isDarkTheme) {
        document.cookie = "theme=light";
    } else {
        document.cookie = "theme=dark";
    }
}

const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top");
const goToBottomButton = document.querySelector(".go-to-bottom");

document.body.onload = function () {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
        goToBottomButton.classList.add("hidden");
    } else {
        backToTopButton.classList.add("hidden");
        goToBottomButton.classList.remove("hidden");
    }
    if (getCookie("theme") !== null) {
        document.body.classList.value = getCookie("theme");
        if (getCookie("theme") === "light") {
            document.querySelector(".horizontal-menu").style.backgroundColor = "white";
            document.querySelector("#name").style.color = "black";
            document.querySelector("#email").style.color = "black";
            document.querySelector("#sub").style.color = "black";
            document.querySelector("#body").style.color = "black";
            document.querySelector("footer").style.backgroundColor = "white";
        }
    } else {
        document.body.classList.value = "dark";
        document.querySelector(".horizontal-menu").style.backgroundColor = "black";
            document.querySelector("#name").style.color = "white";
            document.querySelector("#email").style.color = "white";
            document.querySelector("#sub").style.color = "white";
            document.querySelector("#body").style.color = "white";
            document.querySelector("footer").style.backgroundColor = "black";
    }
}

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
    goToBottomButton.classList.remove("hidde");
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

const goToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
}

backToTopButton.addEventListener("click", goToTop);
goToBottomButton.addEventListener("click", goToBottom);

document.querySelector(".theme").addEventListener("click", function () {
    toggleTheme();
    if (document.body.classList.value === "dark") {
        document.body.classList.value = "light";
        document.querySelector(".horizontal-menu").style.backgroundColor = "white";
        document.querySelector("#name").style.color = "black";
        document.querySelector("#email").style.color = "black";
        document.querySelector("#sub").style.color = "black";
        document.querySelector("#body").style.color = "black";
        document.querySelector("footer").style.backgroundColor = "white";
    } else {
        document.body.classList.value = "dark";
        document.querySelector(".horizontal-menu").style.backgroundColor = "black";
        document.querySelector("#name").style.color = "white";
        document.querySelector("#email").style.color = "white";
        document.querySelector("#sub").style.color = "white";
        document.querySelector("#body").style.color = "white";
        document.querySelector("footer").style.backgroundColor = "black";
    }
})