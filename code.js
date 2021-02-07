const green = document.getElementById('green')
const purple = document.getElementById('purple')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const btnStart = document.getElementById('btn-start')

class Game {
    constructor() {
        this.InitGame();
    }

    InitGame() {
        btnStart.classList.add('hide')
    }

}

function StartGame(){
    var game = new Game();
}
