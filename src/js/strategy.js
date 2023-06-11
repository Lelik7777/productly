import { Article } from "./Article";
import { DOM_SELECTORS } from "./config";
import { DATA } from "./data";
import { UTILS } from "./utils";

export const renderStrategiesInDom = (data) => {
  getStrategiesContainer().innerHTML = "";
  generateStrategies(DATA, getStrategiesContainer());
};

const getStrategiesContainer = () => {
  return UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_CONTAINER);
};

const generateStrategies = (data, parent) =>
  data.map((strategy) => generateArticle(strategy).renderArticle(parent));

const generateArticle = (dataStrategy) => {
  return new Article(dataStrategy);
};
