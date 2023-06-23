import { CONSTANTS, DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

const _EMPLOYEES_SWITCHERS = UTILS.getElementFromDom(
    DOM_SELECTORS.EMPLOYEES_SWITCHERS
  ),
  _EMPLOYEES = UTILS.getElementFromDom(DOM_SELECTORS.ABOUT_US_EMPLOYEES),
  _SWITCHERS = UTILS.getElementsFromDom(DOM_SELECTORS.SWITCHER);

const resetTranslateForEmployees = () => {
  if (window.innerWidth > 768) {
    _EMPLOYEES.style.transform = "translateX(0%)";
    _SWITCHERS.forEach((switcher) => {
      switcher.classList.remove(CONSTANTS.SWITCHER_COLOR);
    });
    _SWITCHERS[0].classList.add(CONSTANTS.SWITCHER_COLOR);
  }
};

const addSwitchersEmployeesHandler = () => {
  _EMPLOYEES_SWITCHERS.addEventListener(CONSTANTS.CLICK, (e) => {
    if (e.target.classList.contains(CONSTANTS.SWITCHER)) {
      choseClickedSwitcher(e.target);
      scrollSlide(e.target, window.innerWidth);
    }
  });
};

const choseClickedSwitcher = (clickedElement) => {
  _SWITCHERS.forEach((switcher) => {
    switcher.classList.remove(CONSTANTS.SWITCHER_COLOR);
    if (switcher.id === clickedElement.id) {
      switcher.classList.add(CONSTANTS.SWITCHER_COLOR);
    }
  });
};

const scrollSlide = (clickedElement, widthWindow) => {
  const number = +clickedElement.id.replace(/\D/g, "");

  switch (number) {
    case 1:
      _EMPLOYEES.style.transform = "translateX(0%)";
      break;
    case 2:
      widthWindow > 376
        ? (_EMPLOYEES.style.transform = "translateX(-61%)")
        : (_EMPLOYEES.style.transform = "translateX(-110%)");
      break;
    case 3:
      widthWindow > 376
        ? (_EMPLOYEES.style.transform = "translateX(-80%)")
        : (_EMPLOYEES.style.transform = "translateX(-220%)");
      break;
    default:
      return;
  }
};

export { addSwitchersEmployeesHandler, resetTranslateForEmployees};
