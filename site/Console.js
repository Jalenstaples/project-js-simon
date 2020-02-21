// let Button = require('./Button');

class Console {
  constructor() {
    this.colors = ['green', 'blue', 'yellow', 'red'];
    this.refDict = { 'green': '.simon-button.green', 'blue': '.simon-button.blue', 'yellow': '.simon-button.yellow', 'red': '.simon-button.red' };
    this.soundDict = {
      'green': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      'red': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      'blue': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      'yellow': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    };
    this.buttons = [];
    for (let color of this.colors) {
      this.buttons.push(new Button(color, this.refDict[color], this.soundDict[color]));
    }
    this.gameSequence = [];
    this.userSequence = [];
    this.roundsPassed = 0;
  }

  startNewGame() {
    //let startRound = new Audio("http://soundbible.com/grab.php?id=56&type=mp3");
    let startRound = new Audio("http://www.therapboard.com/audio/takeoff_takeoff.mp3");
    startRound.play();
    this.roundsPassed = 0;
    setTimeout(() => {
      this.nextRound();
    }, 1000);
    this.updateRoundCount();

  }

  nextRound() {
    let randomIndex = Math.floor(Math.random() * 4);
    this.gameSequence.push(this.colors[randomIndex]);
    setTimeout(() => {
      this.promptMove();
    }, 1000);
  }

  promptMove() {
    // Play the current sequence for the user
    // We need a sequence of nested setTimeout functions
    let doSetTimeout = (i) => {
      if (i === this.gameSequence.length) {
        return;
      }
      setTimeout(() => {
        console.log('testing');
        for (let button of this.buttons) {
          if (button.color === this.gameSequence[i]) {
            button.click();
          }
        }
        console.log('Milliseconds in computer sequence play:');
        console.log(600 * (0.99) ** this.gameSequence.length - 1);
        doSetTimeout(i + 1);
      }, 600 * (0.99) ** (this.gameSequence.length - 1)); // This should make the rounds "faster" as you go along
    };
    doSetTimeout(0);

    /* console.log(this.buttons);
    for (let item of this.gameSequence) {
      setTimeout(() => {
        for (let button of this.buttons) {
          if (button.color === item.color) {
            button.click();
          }
        }
      }, 1000);
    } */
  }

  moveCorrect() {
    // Check the button the user clicked against the corresponding item of the pattern
    return this.userSequence.join('') === this.gameSequence.join('');
  }

  click(color) {
    for (let button of this.buttons) {
      if (button.color === color) {
        button.click();
      }
    }
    this.userSequence.push(color);
    if (this.userSequence.join('') !== this.gameSequence.slice(0, this.userSequence.length).join('')) {
      this.endGame();
      return;
    }
    if (this.userSequence.length === this.gameSequence.length) {
      if (this.moveCorrect()) {
        this.roundsPassed++;
        this.updateRoundCount();
        this.userSequence = [];
        let Khaled = new Audio("http://www.therapboard.com/audio/khaled-anotherone.mp3");
        setTimeout(() => {
          Khaled.play();
        }, 750);
        setTimeout(() => this.nextRound(), 250);
      } else {
        this.endGame();
      }
    }
  }

  updateRoundCount() {
    $('.roundcounter .roundcount').text(`${this.roundsPassed}`);
  }

  endGame() {
    this.gameSequence = [];
    let endSound = new Audio("http://www.therapboard.com/audio/gucci_8.mp3");
    setTimeout(() => {
      endSound.play();
      alert(`You\'ve lost the game! Your score was ${this.roundsPassed}`);
    }, 750);
    this.updateRoundCount();
    this.userSequence = [];

    // Play End game sound
  }
}
