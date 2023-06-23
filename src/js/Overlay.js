import { CONSTANTS, DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

export class Overlay {
  build() {
    this.overlay = this.createElement(CONSTANTS.DIV, CONSTANTS.OVERLAY);

    this.bind();
  }

  createElement(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  
  bind() {
    document.body.append(this.overlay);
  }

  delete() {
    UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY).remove();
  }
}
