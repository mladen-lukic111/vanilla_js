
// let numericValue = 0;
// let value = document.querySelector("#value");
// const decreaseBtn = document.querySelector(".decrease");
// const increaseBtn = document.querySelector(".increase");
// const resetBtn = document.querySelector(".reset");


// Classic way

// decreaseBtn.addEventListener("click", () => {
//     numericValue -= 1;
//     value.textContent = numericValue;
//     value.style.color = "red";
// });
// increaseBtn.addEventListener("click", () => {
//     numericValue += 1;
//     value.textContent = numericValue;
//     value.style.color = "green";
// });
// resetBtn.addEventListener("click", () => {
//     numericValue = 0;
//     value.textContent = numericValue;
//     value.style.color = "#222";
// });


// Event delegation way

    let count = 0;
    const value = document.querySelector("#value");
    const container = document.querySelector(".button-container");

    container.addEventListener("click", (e) => {
        const styles = e.target.classList;
        if(!styles.contains("btn")) return;

        if(styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) value.style.color = "green";
        else if (count < 0) value.style.color = "red";
        else value.style.color = "#222";

        value.textContent = count;
    });
