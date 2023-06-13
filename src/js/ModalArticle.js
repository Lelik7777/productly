import { Modal } from "./Modal";
import { CONSTANTS } from "./config";

export class ModalArticle extends Modal {
  constructor({ id, title, urlToImage, tags, content, date }, ...classes) {
    super(...classes);
    this.id = id;
    this.tags = tags;
    this.title = title;
    this.urlToImage = urlToImage;
    this.content = content;
    this.date = date;
  }
  generateContent() {
    //create different elements for modal content
    this.modalArticle = super.createElement(
      CONSTANTS.DIV,
      CONSTANTS.MODAL_ARTICLE
    );

    this.createImage();

    this.articleContent = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_CONTENT
    );

    this.createArticleDate();

    this.createArticleTitle();

    this.createArticleText();

    this.createTags();


    this.bindElements();

    return this.modalArticle;
  }

  createImage() {
    this.image = super.createElement(CONSTANTS.IMG, CONSTANTS.ARTICLE_IMAGE);
    this.image.src = this.urlToImage;
    this.image.alt = `strategy_${this.id}`;
  }
  createArticleDate() {
    this.articleDate = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_DATE
    );
    this.articleDate.textContent = this.date;
  }
  createArticleTitle() {
    this.articleTitle = this.createElement(
      CONSTANTS.H3,
      CONSTANTS.ARTICLE_TITLE,
      CONSTANTS.STRATEGY_TITLE
    );
    this.articleTitle.textContent = this.title;
  }
  createArticleText() {
    this.articleText = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_TEXT
    );
    this.articleText.textContent = this.content;
  }
  createTags() {
    this.articleTags = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_TAGS,
      CONSTANTS.TAGS
    );
    this.arrayTags = this.tags.map((tag) => this.createTag(tag));
  }
  createTag(content) {
    this.tag = this.createElement(
      CONSTANTS.SPAN,
      CONSTANTS.TAG,
      CONSTANTS.TAG_BORDERED
    );
    this.tag.textContent = content;
    return this.tag;
  }
  
  bindElements() {
    this.articleTags.append(...this.arrayTags);
    this.articleContent.append(
      this.articleDate,
      this.articleTitle,
      this.articleText,
      this.articleTags
    );
    this.modalArticle.append(this.image, this.articleContent);
  }

  render() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}
