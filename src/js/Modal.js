import { CONSTANTS, DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

export class Modal {
  constructor(...classes) {
    this.classes = classes;
  }

  buildModal(content) {
    this.overlay = this.createElement("div", "overlay");
    this.modal = this.createElement("div", ...this.classes);
    this.modalContent = this.createElement("div", "modal__content");
    this.modalCloseButton = this.createElement(
      "span",
      "modal__button_close",
      "icon",
      "icon-close"
    );
    this.setContent(content);
    this.addElementsToDom();
    this.openModal();
  }

  createElement(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    this.modalContent.append(content);
  }
  addElementsToDom() {
    this.modal.append(this.modalCloseButton, this.modalContent);
    this.overlay.append(this.modal);
    this.overlay.addEventListener(CONSTANTS.CLICK, this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    const clickedElement = e.target;
    const overlay = UTILS.deletePointFromSelector(DOM_SELECTORS.OVERLAY);
    const closeButton = UTILS.deletePointFromSelector(
      DOM_SELECTORS.MODEL_CLOSE_BUTTON
    );

    (clickedElement.classList.contains(overlay) ||
      clickedElement.classList.contains(closeButton)) &&
      UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY).remove();
  }
}
