import { DOM_SELECTORS } from "./config";
import { UTILS } from "./utils";

export class Article {
  constructor({ id, title, urlToImage, tags, ...rest }) {
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.rest = rest;
    this.buildArticle();
  }
  // <article class="strategy block-shadowed strategy_none">
  //             <img
  //               src="./src/assets/images/strategies/strategy_3.jpg"
  //               alt="strategy3"
  //               class="strategy__img"
  //             />
  //             <h3 class="strategy__title">
  //               Success Steps For Your Personal Or Business Life
  //             </h3>
  //             <div class="tags strategy__tags">
  //               <span class="tag tag_selected">Culture</span>
  //               <span class="tag tag_selected">Design</span>
  //               <span class="tag tag_selected">Art</span>
  //             </div>
  //           </article>

  buildArticle() {
    const article = "article";
    const strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY);
    const blockShadowed = UTILS.deletePointFromSelector(
      DOM_SELECTORS.BLOCK_SHADOWED
    );

    this.article = this.createElement(article, strategy, blockShadowed);
    this.article.setAttribute("data-id", this.id);

    this.createImage();
    this.createTitle();
    this.createTags();
    this.groupTags= this.tags.map((tag) => this.createTag(tag));
    
    this.bindElements();
  }
  createElement(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  createImage() {
    const strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY);
    const img = "img";
    const strategyImage = "strategy__img";
    const src = "src";
    const alt = "alt";

    this.image = this.createElement(img, strategyImage);
    this.image.setAttribute(src, this.urlToImage);
    this.image.alt = `${strategy}_${this.id}`;
    return this.image;
  }
  createTitle() {
    const strategyTitle = "strategy__title";
    const h3 = "h3";

    this.articleTitle = this.createElement(h3, strategyTitle);
    this.articleTitle.textContent = this.title;
  }
  createTags() {
    const tags = "tags";
    const strategyTags = "strategy__tags";
    const div = "div";

    this.containerTags = this.createElement(div, tags, strategyTags);
  }
  createTag(content) {
    const span = "span";
    const tag = "tag";
    const selectedTag = "tag_selected";

    this.tag = this.createElement(span, tag, selectedTag);
    this.tag.textContent = content;
    return this.tag;
  }
  bindElements() {
    this.containerTags.append(...this.groupTags);
    this.article.append(this.image, this.articleTitle, this.containerTags);
  }
  renderArticle(parentElement) {
    parentElement.append(this.article);
  }
}
