export class Modal {
  constructor(...classes) {
    this.classes = classes;
  }
  buildModal(content) {
    this.overlay = this.createElement("div", "overlay", "strategy-overlay");
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
    document.body.append(this.overlay);
  }
}
