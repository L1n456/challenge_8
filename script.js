const qs = document.querySelectorAll(".qs");
const text = document.querySelectorAll(".text");
const arrow = document.querySelectorAll(".arrow");
const ask = document.querySelectorAll(".ask");


let count = 0;
for (let i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function onClick(event) {
        count ++;
        if (count %2 == 0) {
            text[i].style.display = "none";
            arrow[i].style.transform = "rotate(0deg)";
            ask[i].classList.remove("open");
            ask[i].classList.add("close");
        } else {
            text[i].style.display = "block";
            arrow[i].style.transform = "rotate(180deg)"; 
            ask[i].classList.remove("close");
            ask[i].classList.add("open");
        } 
    });   
}

