const green = document.getElementById('green')
const purple = document.getElementById('purple')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const btnStart = document.getElementById('btn-start')
const LastLevel = 10

class Game {
    constructor() {
        this.InitGame = this.InitGame.bind(this);
        this.InitGame();
        this.SequenceGenerator();
        setTimeout(this.nextLevel, 500)
        this.colors = {
            green,
            purple,
            blue,
            yellow
        }
    }

    InitGame() {
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this);
        this.RemoveEventClick = this.RemoveEventClick.bind(this);
        this.toggleBtnStart();
        this.level = 1

    }

    toggleBtnStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide');
        }
        else {
            btnStart.classList.add('hide');

        }
    }
    SequenceGenerator() {
        this.sequence = new Array(LastLevel).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.subLevel = 0;
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

    ColorToNumber(color) {
        switch (color) {
            case 'green':
                return 0
            case 'purple':
                return 1
            case 'blue':
                return 2
            case 'yellow':
                return 3
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
    AddEventClick() {
        this.colors.green.addEventListener('click', this.chooseColor)
        this.colors.purple.addEventListener('click', this.chooseColor)
        this.colors.blue.addEventListener('click', this.chooseColor)
        this.colors.yellow.addEventListener('click', this.chooseColor)
    }

    RemoveEventClick() {
        this.colors.green.removeEventListener('click', this.chooseColor)
        this.colors.purple.removeEventListener('click', this.chooseColor)
        this.colors.blue.removeEventListener('click', this.chooseColor)
        this.colors.yellow.removeEventListener('click', this.chooseColor)
    }

    chooseColor(e) {
        const nameColor = e.target.dataset.color;
        const numberColor = this.ColorToNumber(nameColor);
        this.ToIlluminateColor(nameColor);
        if (numberColor === this.sequence[this.subLevel]) {
            this.subLevel++;
            if (this.subLevel === this.level) {
                this.level++;
                this.RemoveEventClick();
                if (this.level === (LastLevel + 1)) {
                    this.WinGame();
                }
                else {
                    setTimeout(this.nextLevel, 1500);
                }
            }
        }
        else {
            this.LoseGame();
        }

    }
    WinGame() {
        swal('¡Felicidades!', 'Ganaste el juego', 'success')
            .then(this.InitGame.bind(this));
    }

    LoseGame() {
        swal('¡Lo lamento!', 'Perdiste el juego :(', 'error')
            .then(() => {
                this.RemoveEventClick();
                this.InitGame();
            });
    }
}

function StartGame() {
    window.game = new Game();
}
