import { Article } from "./Article";
import { ModalArticle } from "./ModalArticle";
import { CONSTANTS, DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

//? dynamic render strategies in DOM
export const renderStrategiesInDom = (data) => {
  getStrategiesContainer().innerHTML = "";
  generateStrategies(data, getStrategiesContainer());
  addStrategyClickHandler(data);
};

const getStrategiesContainer = () => {
  return UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_CONTAINER);
};

const generateStrategies = (data, parent) =>
  data.map((strategy) => generateArticle(strategy).renderArticle(parent));

const generateArticle = (dataStrategy) => {
  return new Article(dataStrategy);
};

//? open modal by clicking on strategy
const addStrategyClickHandler = (data) => {
  UTILS.getElementsFromDom(
    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`
  ).forEach((strategy) => {
    strategy.addEventListener(CONSTANTS.CLICK, (e) => {
      openStrategyModal(
        data[e.target.closest(DOM_SELECTORS.STRATEGY).dataset.id - 1]
      );
    });
  });
};

const openStrategyModal = (data) => {
  const modal = "modal",
    ModalStrategy = "modal__strategy";

  const modalWindow = new ModalArticle(data, modal, ModalStrategy);
  modalWindow.render();
};
