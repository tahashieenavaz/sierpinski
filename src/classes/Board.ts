export default class Board {
  element: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    this.createCanvasElement();
  }

  createCanvasElement() {
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }
}
