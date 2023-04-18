const tape = document.getElementById("tr");
const links = document.getElementsByClassName("links")

function playTape() {
    tape.classList.toggle("pressed");
    
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("pos" + i);
    }
}