
class ConsoleUser {
  constructor(name, console) {
    this.name = name;
    this.console = console;
  }

  beginGame() {
    this.console.startNewGame();
  }

  clickButton(color) {
    this.console.click(color);
  }
}
