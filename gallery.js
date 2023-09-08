//select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .cards");

// Define the filterCards functions
const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
        //Iterate over each filterable card
    filterableCards.forEach(cards => {
        //Add "hide" class to hide the cards initially
        cards.classList.add("hide");
        //check id the card matches the selected filter or all is selected
        if (cards.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            cards.classList.remove("hide");
        }
    });
};
//add click event listner to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));