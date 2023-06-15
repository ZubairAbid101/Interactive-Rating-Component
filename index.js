let ratingSelectorButton = document.querySelectorAll(".rating-number");
let submitButton = document.querySelector("#submit-button");
let assignedRating = document.querySelector("#assigned-rating");

let ratingCard = document.querySelector("#rating-card");
let thankyouCard = document.querySelector("#thank-you-card");

ratingSelectorButton.forEach(btn => {
    btn.addEventListener("click", function setActiveButton() {
        assignedRating.innerHTML = `You selected ${btn.innerHTML} out of 5`;
    })
});

submitButton.addEventListener("click", function submitRating () {
    ratingCard.style.display = "none";
    thankyouCard.style.display = "block";
})