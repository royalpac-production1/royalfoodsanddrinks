//cookies section
const cookieBox = document.querySelector(".cookies"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("Royalpac")) return;
    cookieBox.classList.add("show");


    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if (button.id == "acceptBtn") {
                //set cookies for 1 month.
                document.cookie = "cookieBy= Royalpac; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};




window.addEventListener("load", executeCodes);