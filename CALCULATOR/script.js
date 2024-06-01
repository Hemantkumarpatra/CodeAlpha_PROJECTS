const dipslay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () =>{
        if (item.id == "clear") {
            dipslay.innerText = "";
        }else if (item.id == "backspace") {
            let string = dipslay.innerText.toString();
            dipslay.innerText = string.substr(0, string.length - 1);
        }else if (dipslay.innerText != "" && item.id == "equal") {
            dipslay.innerText = eval(dipslay.innerText);
        }else if (dipslay.innerText == "" && item.id == "equal") {
            dipslay.innerText = "Empty!";
            setTimeout(() => (dipslay.innerText = ""), 2000);
        }else {
            dipslay.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};