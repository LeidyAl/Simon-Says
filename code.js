const green = document.getElementById('green')
const purple = document.getElementById('purple')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const btnStart = document.getElementById('btn-start')

class Game {
    constructor() {
        this.InitGame();
        this.SequenceGenerator();
        this.nextLevel();
    }

    InitGame() {
        btnStart.classList.add('hide');
        this.level = 1
        this.colors = {
            green,
            purple,
            blue,
            yellow
        }
    }

    SequenceGenerator() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.LigthSequence();
        this.AddEventClick();
    }

    NumberToColor(number) {
        switch (number) {
            case 0:
                return 'green'
            case 1:
                return 'purple'
            case 2:
                return 'blue'
            case 3:
                return 'yellow'
        }
    }

    LigthSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.NumberToColor(this.sequence[i])
            setTimeout(() => this.ToIlluminateColor(color), 1000 * i)
        }
    }

    ToIlluminateColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.OffColor(color), 350)
    }

    OffColor(color) {
        this.colors[color].classList.remove('light')
    }
    AddEventClick(){
        this.colors.green.addEventListener('click', this.chooseColor.bind(this))
        this.colors.purple.addEventListener('click', this.chooseColor.bind(this))
        this.colors.blue.addEventListener('click', this.chooseColor.bind(this))
        this.colors.yellow.addEventListener('click', this.chooseColor.bind(this))
    }

    chooseColor(e){
        console.log(e)
    }
}

function StartGame() {
    window.game = new Game();
}
