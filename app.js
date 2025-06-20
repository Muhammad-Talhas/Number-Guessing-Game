let input = document.getElementById("input")
let congrat = document.querySelector(".congrat");
let guess_btn = document.getElementById("guess_btn")
let result_para = document.getElementById("result_para")
let generate_num = Math.floor(Math.random() * 10) + 1;

guess_btn.addEventListener("click", function () {
    let guess_num = document.getElementById("input").value

    console.log(generate_num)
    if (guess_num === "") {
        result_para.textContent = "Enter a Number"
        input.style.border = "2px solid #C10000"
        return
    }

    else if (guess_num < 0 || guess_num > 10) {
        result_para.textContent = "Number Must be between (1 to 10)"
        input.style.border = "2px solid #C10000"
        return
    }

    else if (guess_num > generate_num) {
        result_para.textContent = "to Large"
        result_para.setAttribute("class", "red")

    }
    else if (guess_num < generate_num) {
        result_para.textContent = "to Small"
        result_para.setAttribute("class", "yellow")
    }

    else {
        result_para.textContent = "Congrat! 🎉"
        congrat.style.display = "flex";
        result_para.setAttribute("class", "green")
    }
    input.style.border = ""

})

let playAgainBtn = document.querySelector(".play-agin button");

playAgainBtn.addEventListener("click", function () {
    generate_num = Math.floor(Math.random() * 10) + 1;
    document.getElementById("input").value = "";
    result_para.textContent = "";
    document.querySelector(".congrat").style.display = "none";
});