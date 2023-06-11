import { CONSTANTS, DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

//Dom elements
const _strategiesTags = UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_TAGS);
const _arrayStrategies = UTILS.getElementsFromDom(
  `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`
);

//class names
const borderedTag = UTILS.deletePointFromSelector(DOM_SELECTORS.TAG_BORDERED);
const selectedTag = UTILS.deletePointFromSelector(DOM_SELECTORS.TAG_COLORED);
const hidden = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY_HIDDEN);

export const addTagClickHandler = () => {
  _strategiesTags.addEventListener(CONSTANTS.CLICK, (e) => {
    const tag = e.target;
    if (
      tag.classList.contains(UTILS.deletePointFromSelector(DOM_SELECTORS.TAG))
    ) {
      removeSelectedTags();
      selectClickedTag(tag);
      if (tag.textContent.toLowerCase() === CONSTANTS.ALL) {
        showAllStrategies();
      } else {
        filterStrategiesByClickedTag(tag);
      }
    }
  });
};

const removeSelectedTags = () => {
  UTILS.getElementsFromDom(
    `${DOM_SELECTORS.STRATEGIES_TAGS} ${DOM_SELECTORS.TAG}`
  ).forEach((tag) => {
    tag.classList.remove(selectedTag);
    tag.classList.add(borderedTag);
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove(borderedTag);
  clickedTag.classList.add(selectedTag);
};

const showAllStrategies = () => {
  _arrayStrategies.forEach((strategy) => {
    strategy.classList.remove(hidden);
  });
};

const filterStrategiesByClickedTag = (selectedTag) => {
  const arrayStrategies = UTILS.getElementsFromDom(
    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`
  );

  arrayStrategies.forEach((strategy) => {
    strategy.classList.add(hidden);

    const arrayTagsStrategy = UTILS.getElementsFromDom(
      DOM_SELECTORS.TAG,
      strategy
    );

    arrayTagsStrategy.forEach((tag) => {
      selectedTag.textContent.toLowerCase() === tag.textContent.toLowerCase() &&
        strategy.classList.remove(hidden);
    });
  });
};
