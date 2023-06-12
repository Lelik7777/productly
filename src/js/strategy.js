import { Article } from "./Article";
import { ModalArticle } from "./ModalArticle";
import { CONSTANTS, DOM_SELECTORS } from "./config";
import { DATA } from "./data";
import { UTILS } from "./utils";

//? dynamic render strategies in DOM
export const renderStrategiesInDom = (data) => {
  getStrategiesContainer().innerHTML = "";
  generateStrategies(DATA, getStrategiesContainer());
  addStrategyClickHandler();
};

const getStrategiesContainer = () => {
  return UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_CONTAINER);
};

const generateStrategies = (data, parent) =>
  data.map((strategy) => generateArticle(strategy).renderArticle(parent));

const generateArticle = (dataStrategy) => {
  return new Article(dataStrategy);
};

//? open strategy modal window
const addStrategyClickHandler = () => {
  UTILS.getElementsFromDom(
    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`
  ).forEach((strategy) => {
    strategy.addEventListener(CONSTANTS.CLICK, () => {
      strategy && openModalArticle();
    });
  });
};

const openModalArticle = () => {
  const modalArticle = new ModalArticle(DATA, DOM_SELECTORS.MODAL_ARTICLE);
  modalArticle.renderModal();
};
