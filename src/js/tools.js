import { Modal } from "./Modal";
import { DOM_SELECTORS, CONSTANTS } from "./config";
import { UTILS } from "./utils";

export const renderToolsModal = (content) => {
  UTILS.getElementFromDom(DOM_SELECTORS.TOOLS_BUTTONS).addEventListener(
    CONSTANTS.CLICK,
    () => {
      createModal(content);
    }
  );
};

const createModal = (content) => {
  const modal = new Modal("modal", "tools__modal");
  modal.buildModal(content);
};
