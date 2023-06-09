import { UTILS } from "./utils";
import { DOM_SELECTORS,CONSTANTS } from "./config";

const container_tags = UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_TAGS);

export const addTagClickHandler = () => {
container_tags.addEventListener(CONSTANTS.CLICK,()=>{
  console.log('clicked');
});

};

const removeSelectedTags = () => {
  UTILS.getElementsFromDom(
    `${DOM_SELECTORS.STRATEGIES_TAGS} ${DOM_SELECTORS.TAG}`
  ).forEach((tag) => {
    tag.classList.remove(
      UTILS.deletePointFromSelector(DOM_SELECTORS.TAG_COLORED)
    );
  });
};
