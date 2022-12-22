const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

var clients = setInterval(happyClients, 0)
var project = setInterval(projectDone, 0)
var awards = setInterval(awardscount, 30)
var years = setInterval(yearscount, 30)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 520) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 640) {
        clearInterval(clients)
    }
}

function awardscount() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 55) {
        clearInterval(awards)
    }
}

function yearscount() {
    count4++
    document.querySelector("#number4").innerHTML = count4
    if (count4 == 15) {
        clearInterval(years)
    }
}