document.addEventListener("DOMContentLoaded", function () {
    // Smooth hover effect for buttons and images
    const meetButton = document.querySelector(".more");
    const characters = document.querySelectorAll(".character img");

    if (meetButton) {
        meetButton.addEventListener("mouseover", function () {
            meetButton.style.backgroundColor = "#1e75c7";
        });
        meetButton.addEventListener("mouseout", function () {
            meetButton.style.backgroundColor = "#2b8bd9";
        });
    }

    characters.forEach((img) => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });
});
function showModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".article h3");
    sections.forEach((section) => {
        section.addEventListener("click", () => {
            const nextParagraphs = section.nextElementSibling;
            if (nextParagraphs) {
                nextParagraphs.style.display =
                    nextParagraphs.style.display === "none" ? "block" : "none";
            }
        });
    });
});


