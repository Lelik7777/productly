import { DATA } from "./js/data";
import {
  addHamburgerClickHandler,
  addNavigationLinkClickHandler,
} from "./js/pop-up";
import { addSwitchersEmployeesHandler, resetTranslateForEmployees } from "./js/slider";
import { addTagClickHandler } from "./js/strategies";
import { renderStrategiesInDom } from "./js/strategy";
import { renderToolsModal } from "./js/tools";

window.addEventListener("load", function () {
  DATA && renderStrategiesInDom(DATA);
  addTagClickHandler();
  renderToolsModal("content for tools  modal");
  addHamburgerClickHandler();
  addNavigationLinkClickHandler();
  addSwitchersEmployeesHandler();
});

window.addEventListener("resize", resetTranslateForEmployees);
