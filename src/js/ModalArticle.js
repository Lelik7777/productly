import { Modal } from "./Modal";
export class ModalArticle extends Modal {
  constructor({ id, title, urlToImage, tags, content, date }, ...classes) {
    super(classes);
    this.content=content;
    this.date=date;
    this.generateContent();
  }
  generateContent() {

  }

  renderModal(){
    let content='modal-article content';
    super.buildModal(content);
  }
}
