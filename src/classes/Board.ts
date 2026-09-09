export default class Board {
  element: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    this.resizeCanvasElement();
    this.fireCanvasElementEvents();
  }

  resizeCanvasElement() {
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }

  fireCanvasElementEvents() {
    window.addEventListener("resize", () => {
      this.resizeCanvasElement();
    });
  }
}
