export default class Board {
  element: HTMLCanvasElement;

  constructor() {
    this.createCanvasElement();
  }

  createCanvasElement() {
    this.element = document.createElement("canvas");
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }
}
