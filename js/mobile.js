window.onload = function () {
  var getNavi = document.getElementById("navigation");

  var mobile = document.createElement("span");
  mobile.setAttribute("id", "mobile-navigation");
  getNavi.parentNode.insertBefore(mobile, getNavi);

  document.getElementById("mobile-navigation").onclick = function () {
    var a = getNavi.getAttribute("style");
    if (a) {
      getNavi.removeAttribute("style");
      document.getElementById("mobile-navigation").style.backgroundImage =
        "url(images/mobile-menu.png)";
    } else {
      getNavi.style.display = "block";
      document.getElementById("mobile-navigation").style.backgroundImage =
        "url(images/mobile-close.png)";
    }
  };
  var getElm = getNavi.getElementsByTagName("LI");
  for (var i = 0; i < getElm.length; i++) {
    if (getElm[i].children.length > 1) {
      var smenu = document.createElement("span");
      smenu.setAttribute("class", "mobile-submenu");
      smenu.setAttribute("OnClick", "submenu(" + i + ")");
      getElm[i].appendChild(smenu);
    }
  }
  submenu = function (i) {
    var sub = getElm[i].children[1];
    var b = sub.getAttribute("style");
    if (b) {
      sub.removeAttribute("style");
      getElm[i].lastChild.style.backgroundImage =
        "url(images/mobile-expand.png)";
      getElm[i].lastChild.style.backgroundColor = "rgba(11, 163, 156, 0.7)";
    } else {
      sub.style.display = "block";
      getElm[i].lastChild.style.backgroundImage =
        "url(images/mobile-collapse.png)";
      getElm[i].lastChild.style.backgroundColor = "rgba(0,0,0,0.8)";
    }
  };
};

// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".modal .close");

  // Add click event listeners to all images with the 'character-image' class
  document.querySelectorAll(".character-image").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = img.src;
      captionText.innerText = img.alt;
    });
  });

  // Close modal when 'x' is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
window.onload = () => {
  if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    alert("Welcome to my Blue Lock website!");
  }
};


