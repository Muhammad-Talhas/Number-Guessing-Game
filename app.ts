const input = document.getElementById("input") as HTMLInputElement;
const congrat = document.querySelector(".congrat") as HTMLElement;
const guess_btn = document.getElementById("guess_btn") as HTMLButtonElement;
const result_para = document.getElementById("result_para") as HTMLElement;

let generate_num: number = Math.floor(Math.random() * 10) + 1;

guess_btn.addEventListener("click", () => {
    const guessValue: string = input.value;
    const guess_num: number = parseInt(guessValue);

    console.log(generate_num);

    if (guessValue === "") {
        result_para.textContent = "Enter a Number";
        input.style.border = "2px solid #C10000";
        return;
    }

    if (isNaN(guess_num) || guess_num < 1 || guess_num > 10) {
        result_para.textContent = "Number Must be between (1 to 10)";
        input.style.border = "2px solid #C10000";
        return;
    }

    if (guess_num > generate_num) {
        result_para.textContent = "Too Large";
        result_para.setAttribute("class", "red");
    } else if (guess_num < generate_num) {
        result_para.textContent = "Too Small";
        result_para.setAttribute("class", "yellow");
    } else {
        result_para.textContent = "Congrat! 🎉";
        congrat.style.display = "flex";
        result_para.setAttribute("class", "green");
    }

    input.style.border = "";
});

const playAgainBtn = document.querySelector(".play-agin button") as HTMLButtonElement;

playAgainBtn.addEventListener("click", () => {
    generate_num = Math.floor(Math.random() * 10) + 1;
    input.value = "";
    result_para.textContent = "";
    congrat.style.display = "none";
});
