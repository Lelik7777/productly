import { addTagClickHandler } from "./js/strategies";
import { renderStrategiesInDom } from "./js/strategy";
import { renderToolsModal } from "./js/tools";
import { DATA } from "./js/data";

window.addEventListener("load", function () {
  DATA&&renderStrategiesInDom(DATA);
  addTagClickHandler();
  renderToolsModal("content for tools  modal");
});
