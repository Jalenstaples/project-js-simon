class Button {
  constructor(color, htmlElement, sound = undefined, id = undefined) {
    this.color = color;
    this.sound = sound;
    this.id = id;
    this.htmlElement = htmlElement;
  }

  click() {
    $(this.htmlElement).addClass('clicked');
    this.sound.play();

    setTimeout(() => {
      $(this.htmlElement).removeClass('clicked');
    }, 200);
    // play sound
  }
}
