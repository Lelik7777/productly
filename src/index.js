import { addTagClickHandler } from "./js/strategies";
import { renderToolsModal } from "./js/tools";

window.addEventListener("load", function () {
  addTagClickHandler();
  renderToolsModal("content for tools  modal");
});
