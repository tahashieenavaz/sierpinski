import { isolate as _isolate } from "@/helpers";
import type { IsolateCallbackFunction } from "@/typing";

export default class Board {
  element: HTMLCanvasElement;

  constructor() {
    this.element = document.createElement("canvas");
    this.resizeCanvasElement();
    this.setCanvasElementEvents();
    this.appendCanvasElement();
  }

  appendCanvasElement(): void {
    window.document.body.append(this.element);
  }

  resizeCanvasElement = (): void => {
    this.element.width = innerWidth;
    this.element.height = innerHeight;
  };

  setCanvasElementEvents() {
    window.addEventListener("resize", this.resizeCanvasElement);
  }

  isolate(callback: IsolateCallbackFunction): void {
    _isolate(this.element, callback);
  }
}
