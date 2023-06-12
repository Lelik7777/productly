import { Modal } from "./Modal";
import { CONSTANTS } from "./config";

{
  /* <div class="modal__article">
            <img
              src="./src/assets/images/strategies/strategy_1.jpg"
              alt="strategy1"
              class="article__img"
            />
            <div class="article__content">
              <div class="article__date">12/12/2020</div>
              <h3 class="article__title strategy__title">
                Motivation Is The First Step To Success
              </h3>
              <div class="article__text">
                Knowing yourself is the first, and a very critical step in the
                process of planning your future. How can you figure out what you
                want to do with your life if you don’t know: What am I going to
                do with the rest of my life? What is my dream job? What do I
                enjoy doing? What’s my passion? What kind of career fits my
                personality?
              </div>
              <div class="article__tags tags">
                <span class="tag  tag_bordered">Culture</span>
              </div> */
}
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

    this.image = super.createElement(CONSTANTS.IMG, CONSTANTS.ARTICLE_IMAGE);
    this.image.src = this.urlToImage;
    this.image.alt = `strategy_${this.id}`;

    this.articleContent = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_CONTENT
    );

    this.articleDate = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_DATE
    );
    this.articleDate.textContent = this.date;

    this.articleTitle = this.createElement(
      CONSTANTS.H3,
      CONSTANTS.ARTICLE_TITLE,
      CONSTANTS.STRATEGY_TITLE
    );
    this.articleTitle.textContent = this.title;

    this.articleText = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_TEXT
    );
    this.articleText.textContent = this.content;

    this.articleTags = this.createElement(
      CONSTANTS.DIV,
      CONSTANTS.ARTICLE_TAGS,
      CONSTANTS.TAGS
    );
    this.arrayTags = this.tags.map((tag) => this.createTag(tag));

    //bind elements into modal article
    this.articleTags.append(...this.arrayTags);
    this.articleContent.append(
      this.articleDate,
      this.articleTitle,
      this.articleText,
      this.articleTags
    );
    this.modalArticle.append(this.image, this.articleContent);

    return this.modalArticle;
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
  render() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}
