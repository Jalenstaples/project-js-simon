
let simonConsole = new Console();
let player = new ConsoleUser('name', simonConsole);
player.beginGame();

// Listen for clicks
$('.simon-button.green').on('click', () => player.clickButton('green'));
$('.simon-button.blue').on('click', () => player.clickButton('blue'));
$('.simon-button.yellow').on('click', () => player.clickButton('yellow'));
$('.simon-button.red').on('click', () => player.clickButton('red'));

// Listen for keyboard input : t,y,g,h
document.addEventListener('keypress', (event) => {
  let keyName = event.key;
  if (keyName === 't') {
    player.clickButton('green');
  };
  if (keyName === 'y') {
    player.clickButton('red');
  };
  if (keyName === 'g') {
    player.clickButton('yellow');
  }
  if (keyName === 'h') {
    player.clickButton('blue');
  }
});

/* let greenButton = document.getElementById("green");
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let yellowButton = document.getElementById("yellow");

greenButton.addEventListener('click', function() {
  player.clickButton('green');
});

redButton.addEventListener('click', function() {
  player.clickButton('red');
});

yellowButton.addEventListener('click', function() {
  player.clickButton('yellow');
});

blueButton.addEventListener('click', function() {
  player.clickButton('blue');
});
 */
