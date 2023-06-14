import { UTILS } from "./utils";
import { CONSTANTS, DOM_SELECTORS } from "./config";
import { Overlay } from "./Overlay";

const _hamburger = UTILS.getElementFromDom(DOM_SELECTORS.HAMBURGER),
  _body = UTILS.getElementFromDom(DOM_SELECTORS.BODY),
  _headerButtons = UTILS.getElementFromDom(DOM_SELECTORS.HEADER_BUTTONS),
  _headerNavigation = UTILS.getElementFromDom(DOM_SELECTORS.HEADER_NAVIGATION);

const addHamburgerClickHandler = () => {
  _hamburger.addEventListener(CONSTANTS.CLICK, function () {
    this.classList.toggle(CONSTANTS.HAMBURGER_ACTIVE);

    if (UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY)) {
      removeOverlay();
    } else {
      renderOverlay();
      addOverlayClickHandler();
    }

    _body.classList.toggle(CONSTANTS.BODY_LOCK);

    _headerNavigation.classList.toggle(CONSTANTS.HEADER_NAVIGATION_ACTIVE);

    _headerButtons.classList.toggle(CONSTANTS.HEADER_BUTTONS_ACTIVE);
  });
};

const addNavigationLinkClickHandler = () => {
  const _navigationItems = UTILS.getElementsFromDom(
    DOM_SELECTORS.NAVIGATION_ITEMS
  );
  _navigationItems.forEach((item) => {
    item.addEventListener(CONSTANTS.CLICK, function (e) {
      const clickedElement = e.target;

      clickedElement.classList.contains(CONSTANTS.NAVIGATION_LINK) &&
        closePopup();
    });
  });
};

const addOverlayClickHandler=()=>{
  const _overlay = UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY);

  _overlay.addEventListener(CONSTANTS.CLICK, () => {
    closePopup();
  });
}
const renderOverlay = () => {
  new Overlay().build();
};

const removeOverlay = () => {
  new Overlay().delete();
};

const closePopup = () => {
  _hamburger.classList.remove(CONSTANTS.HAMBURGER_ACTIVE);

  _body.classList.remove(CONSTANTS.BODY_LOCK);

  _headerNavigation.classList.remove(CONSTANTS.HEADER_NAVIGATION_ACTIVE);

  _headerButtons.classList.remove(CONSTANTS.HEADER_BUTTONS_ACTIVE);

  removeOverlay();
};

export { addHamburgerClickHandler, addNavigationLinkClickHandler };
