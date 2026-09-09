import { isolate as _isolate } from "@/helpers";

export default class Board {
  element: HTMLCanvasElement = document.createElement("canvas");

  constructor() {
    this.resizeCanvasElement();
    this.fireCanvasElementEvents();
    this.appendCanvasElement();
  }

  appendCanvasElement(): void {
    window.document.body.append(this.element);
  }

  resizeCanvasElement() {
    this.element.width = innerWidth;
    this.element.height = innerWidth;
  }

  fireCanvasElementEvents() {
    window.addEventListener("resize", this.resizeCanvasElement);
  }

  isolate(callback: Function): void {
    _isolate(this.element, callback);
  }
}
