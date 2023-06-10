import { addTagClickHandler } from "./js/strategies";
import { Modal } from "./js/Modal";

window.addEventListener("load", function () {
  addTagClickHandler();
  renderStrategyModal("content for modal");
});

const renderStrategyModal = (content) => {
  const modalStrategy = new Modal('modal','modal__strategy');
  modalStrategy.buildModal(content);
  console.log('render modal');
};
