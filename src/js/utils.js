export const UTILS = {
  getElementFromDom(selector) {
    return document.querySelector(selector);
  },
  getElementsFromDom(selector) {
    return document.querySelectorAll(selector);
  },
  deletePointFromSelector(selector) {
    return selector.replace(/\./g, "");
  },
  
};
// const getElementFromDom = (selector) => document.querySelector(selector);

// const getElementsFromDom = (selector) => document.querySelectorAll(selector);
