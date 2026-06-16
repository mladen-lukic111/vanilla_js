const colors = ["green", "red", "rgba(134, 123, 201)", "#f15026"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // get random number between 0 - 3
    // cause our array has 4 values
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
    return Math.round(Math.random() * (colors.length - 1));
};