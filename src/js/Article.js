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


  buildArticle() {
    const article = "article",
      strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY),
      blockShadowed = UTILS.deletePointFromSelector(
        DOM_SELECTORS.BLOCK_SHADOWED
      );

    this.article = this.createElement(article, strategy, blockShadowed);
    this.article.setAttribute("data-id", this.id);

    this.createImage();
    this.createTitle();
    this.createTags();
    this.groupTags = this.tags.map((tag) => this.createTag(tag));

    this.bindElements();
  }

  createElement(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  createArticle(){

  }
  createImage() {
    const strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY),
      img = "img",
      strategyImage = "strategy__img",
      src = "src",
      alt = "alt";

    this.image = this.createElement(img, strategyImage);
    this.image.setAttribute(src, this.urlToImage);
    this.image.alt = `${strategy}_${this.id}`;
    return this.image;
  }
  createTitle() {
    const strategyTitle = "strategy__title",
      h3 = "h3";

    this.articleTitle = this.createElement(h3, strategyTitle);
    this.articleTitle.textContent = this.title;
  }
  createTags() {
    const tags = "tags",
      strategyTags = "strategy__tags",
      div = "div";

    this.containerTags = this.createElement(div, tags, strategyTags);
  }
  createTag(content) {
    const span = "span",
      tag = "tag",
      selectedTag = "tag_selected";

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
