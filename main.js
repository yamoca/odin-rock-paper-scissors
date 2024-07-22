console.log("hello world");
// let answer = prompt("type smth: ");
//console.log(answer);

let objects = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let rand = Math.random();
    if (rand <= 0.3) {
        return objects[0];
    } else if (rand > 0.3 && rand <= 0.6) {
        return objects[1];
    } else {
        return objects[2];
    }
}

alert(getComputerChoice());