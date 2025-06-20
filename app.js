var input = document.getElementById("input");
var congrat = document.querySelector(".congrat");
var guess_btn = document.getElementById("guess_btn");
var result_para = document.getElementById("result_para");
var generate_num = Math.floor(Math.random() * 10) + 1;
guess_btn.addEventListener("click", function () {
    var guessValue = input.value;
    var guess_num = parseInt(guessValue);
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
    }
    else if (guess_num < generate_num) {
        result_para.textContent = "Too Small";
        result_para.setAttribute("class", "yellow");
    }
    else {
        result_para.textContent = "Congrat! 🎉";
        congrat.style.display = "flex";
        result_para.setAttribute("class", "green");
    }
    input.style.border = "";
});
var playAgainBtn = document.querySelector(".play-agin button");
playAgainBtn.addEventListener("click", function () {
    generate_num = Math.floor(Math.random() * 10) + 1;
    input.value = "";
    result_para.textContent = "";
    congrat.style.display = "none";
});
