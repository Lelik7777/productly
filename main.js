(()=>{"use strict";var __webpack_modules__={208:()=>{eval("// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://productly/./src/sass/style.scss?")},861:()=>{eval('\n;// CONCATENATED MODULE: ./src/js/data.js\n//! Импорт картинок только в случае векторных изображений - они весят ничтожно мало (например - иконки). Еще удобно стили, при условии, что они разбиты по компонентам (т.е. не один большой css на все приложение).\r\n// Если импортить изображения, то они попадают в сборку, а значит:\r\n// размер сборки растет изрядно, а понадобится изображение (т.е. откроет ли его пользователь) не изместно\r\n// изображения в проде могут меняться, сегодня такое изображение в шапке, завтра другое, при этом для смены изображения потребуется пересобирать все приложение, а это не есть хорошо\r\n//поэтому целесообразнее использовать webpack copy plagin\r\n\r\n// import img1 from "../assets/images/strategies/strategy_1.jpg";\r\n// import img2 from "../assets/images/strategies/strategy_2.jpg";\r\n// import img3 from "../assets/images/strategies/strategy_3.jpg";\r\n// import img4 from "../assets/images/strategies/strategy_4_376.jpg";\r\n// import img5 from "../assets/images/strategies/strategy_5.jpg";\r\n\r\nconst DATA = [\r\n  {\r\n    id: 1,\r\n    title: "Increasing Prosperity With Positive Thinking",\r\n    //urlToImage: img1,\r\n    //путь прописывается, исходя из расположения файла в бандле(directory dist)\r\n    urlToImage: "./assets/strategy_1.jpg",\r\n    tags: ["Art", "Design"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 2,\r\n    title: "Motivation Is The First Step To Success",\r\n    //urlToImage: img2,\r\n    urlToImage: "./assets/strategy_2.jpg",\r\n    tags: ["Culture"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 3,\r\n    title: "Success Steps For Your Personal Or Business Life",\r\n    //urlToImage: img3,\r\n    urlToImage: "./assets/strategy_3.jpg",\r\n    tags: ["Culture", "Design", "Art"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 4,\r\n    title:\r\n      "Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",\r\n    // urlToImage: img4,\r\n    urlToImage: "./assets/strategy_4_376.jpg",\r\n    tags: ["Culture", "Design", "Art"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 5,\r\n    title: "Increasing Prosperity With Positive Thinking",\r\n    // urlToImage: img5,\r\n    urlToImage: "./assets/strategy_5.jpg",\r\n    tags: ["Design"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 6,\r\n    title: "Increasing Prosperity With Positive Thinking",\r\n    // urlToImage: img1,\r\n    urlToImage: "./assets/strategy_1.jpg",\r\n    tags: ["Art", "Design"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 7,\r\n    title: "Motivation Is The First Step To Success",\r\n    //urlToImage: img2,\r\n    urlToImage: "./assets/strategy_2.jpg",\r\n    tags: ["Culture"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 8,\r\n    title: "Success Steps For Your Personal Or Business Life",\r\n    // urlToImage: img3,\r\n    urlToImage: "./assets/strategy_3.jpg",\r\n    tags: ["Culture", "Design", "Art"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n  {\r\n    id: 9,\r\n    title: "Increasing Prosperity With Positive Thinking",\r\n    //urlToImage: img5,\r\n    urlToImage: "./assets/strategy_4_376.jpg",\r\n    tags: ["Design"],\r\n    content:\r\n      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",\r\n    date: "01.01.2020",\r\n  },\r\n];\r\n\n;// CONCATENATED MODULE: ./src/js/utils.js\nconst UTILS = {\r\n  getElementFromDom(selector, element = document) {\r\n    return element.querySelector(selector);\r\n  },\r\n  getElementsFromDom(selector, element = document) {\r\n    return element.querySelectorAll(selector);\r\n  },\r\n  deletePointFromSelector(selector) {\r\n    return selector.replace(/\\./g, "");\r\n  },\r\n};\r\n\n;// CONCATENATED MODULE: ./src/js/config.js\nconst DOM_SELECTORS = {\r\n  STRATEGIES_TAGS: ".strategies__tags",\r\n  STRATEGIES_CONTAINER: ".strategies__container",\r\n  STRATEGY: ".strategy",\r\n  STRATEGY_TAGS: ".strategY__tags",\r\n  STRATEGY_HIDDEN: ".strategy_hidden",\r\n  BLOCK_SHADOWED: ".block-shadowed",\r\n  TAG_COLORED: ".tag_colored",\r\n  TAG_BORDERED: ".tag_bordered",\r\n  TAG: ".tag",\r\n  TOOLS_BUTTONS: ".tools__buttons",\r\n  OVERLAY: ".overlay",\r\n  MODEL_CLOSE_BUTTON: ".modal__button_close",\r\n  MODAL_ARTICLE: ".modal__article",\r\n  HAMBURGER: ".hamburger",\r\n  HEADER_BUTTONS: ".header__buttons",\r\n  HEADER_NAVIGATION: ".header__navigation",\r\n  NAVIGATION_ITEMS: ".navigation__items",\r\n  BODY: ".body",\r\n  EMPLOYEES_SWITCHERS: ".employees__switches",\r\n  SWITCHER: ".switcher",\r\n  ABOUT_US_EMPLOYEES: ".about-us__employees",\r\n};\r\n\r\nconst CONSTANTS = {\r\n  CLICK: "click",\r\n  ALL: "all",\r\n  DIV: "div",\r\n  IMG: "img",\r\n  SPAN: "span",\r\n  H3: "h3",\r\n  TAGS: "tags",\r\n  TAG: "tag",\r\n  TAG_BORDERED: "tag_bordered",\r\n  MODAL_ARTICLE: "modal__article",\r\n  ARTICLE_IMAGE: "article__img",\r\n  STRATEGY_TITLE: "strategy__title",\r\n  ARTICLE_CONTENT: "article__content",\r\n  ARTICLE_DATE: "article__date",\r\n  ARTICLE_TITLE: "article__title",\r\n  ARTICLE_TEXT: "article__text",\r\n  ARTICLE_TAGS: "article__tags",\r\n  HEADER_NAVIGATION_ACTIVE: "header__navigation_active",\r\n  HEADER_BUTTONS_ACTIVE: "header__buttons_active",\r\n  HAMBURGER_ACTIVE: "hamburger_active",\r\n  OVERLAY: "overlay",\r\n  BODY_LOCK: "body_lock",\r\n  NAVIGATION_LINK: "navigation__link",\r\n  SWITCHER: "switcher",\r\n  SWITCHER_LEFT: "switcher_left",\r\n  SWITCHER_CENTER: "switcher_center",\r\n  SWITCHER_RIGHT: "switcher_right",\r\n  SWITCHER_COLOR: "switcher_color",\r\n};\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./src/js/Overlay.js\n\r\n\r\n\r\nclass Overlay {\r\n  build() {\r\n    this.overlay = this.createElement(CONSTANTS.DIV, CONSTANTS.OVERLAY);\r\n\r\n    this.bind();\r\n  }\r\n\r\n  createElement(element, ...classes) {\r\n    const node = document.createElement(element);\r\n    node.classList.add(...classes);\r\n    return node;\r\n  }\r\n  \r\n  bind() {\r\n    document.body.append(this.overlay);\r\n  }\r\n\r\n  delete() {\r\n    UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY).remove();\r\n  }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/js/pop-up.js\n\r\n\r\n\r\n\r\nconst _hamburger = UTILS.getElementFromDom(DOM_SELECTORS.HAMBURGER),\r\n  _body = UTILS.getElementFromDom(DOM_SELECTORS.BODY),\r\n  _headerButtons = UTILS.getElementFromDom(DOM_SELECTORS.HEADER_BUTTONS),\r\n  _headerNavigation = UTILS.getElementFromDom(DOM_SELECTORS.HEADER_NAVIGATION);\r\n\r\nconst addHamburgerClickHandler = () => {\r\n  _hamburger.addEventListener(CONSTANTS.CLICK, function () {\r\n    this.classList.toggle(CONSTANTS.HAMBURGER_ACTIVE);\r\n\r\n    if (UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY)) {\r\n      removeOverlay();\r\n    } else {\r\n      renderOverlay();\r\n      addOverlayClickHandler();\r\n    }\r\n\r\n    _body.classList.toggle(CONSTANTS.BODY_LOCK);\r\n\r\n    _headerNavigation.classList.toggle(CONSTANTS.HEADER_NAVIGATION_ACTIVE);\r\n\r\n    _headerButtons.classList.toggle(CONSTANTS.HEADER_BUTTONS_ACTIVE);\r\n  });\r\n};\r\n\r\nconst addNavigationLinkClickHandler = () => {\r\n  const _navigationItems = UTILS.getElementsFromDom(\r\n    DOM_SELECTORS.NAVIGATION_ITEMS\r\n  );\r\n  _navigationItems.forEach((item) => {\r\n    item.addEventListener(CONSTANTS.CLICK, function (e) {\r\n      const clickedElement = e.target;\r\n\r\n      clickedElement.classList.contains(CONSTANTS.NAVIGATION_LINK) &&\r\n        closePopup();\r\n    });\r\n  });\r\n};\r\n\r\nconst addOverlayClickHandler = () => {\r\n  const _overlay = UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY);\r\n\r\n  _overlay.addEventListener(CONSTANTS.CLICK, () => {\r\n    closePopup();\r\n  });\r\n};\r\nconst renderOverlay = () => {\r\n  new Overlay().build();\r\n};\r\n\r\nconst removeOverlay = () => {\r\n  new Overlay().delete();\r\n};\r\n\r\nconst closePopup = () => {\r\n  _hamburger.classList.remove(CONSTANTS.HAMBURGER_ACTIVE);\r\n\r\n  _body.classList.remove(CONSTANTS.BODY_LOCK);\r\n\r\n  _headerNavigation.classList.remove(CONSTANTS.HEADER_NAVIGATION_ACTIVE);\r\n\r\n  _headerButtons.classList.remove(CONSTANTS.HEADER_BUTTONS_ACTIVE);\r\n\r\n  removeOverlay();\r\n};\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./src/js/slider.js\n\r\n\r\n\r\nconst _EMPLOYEES_SWITCHERS = UTILS.getElementFromDom(\r\n    DOM_SELECTORS.EMPLOYEES_SWITCHERS\r\n  ),\r\n  _EMPLOYEES = UTILS.getElementFromDom(DOM_SELECTORS.ABOUT_US_EMPLOYEES),\r\n  _SWITCHERS = UTILS.getElementsFromDom(DOM_SELECTORS.SWITCHER);\r\n\r\nconst resetTranslateForEmployees = () => {\r\n  if (window.innerWidth > 768) {\r\n    _EMPLOYEES.style.transform = "translateX(0%)";\r\n    _SWITCHERS.forEach((switcher) => {\r\n      switcher.classList.remove(CONSTANTS.SWITCHER_COLOR);\r\n    });\r\n    _SWITCHERS[0].classList.add(CONSTANTS.SWITCHER_COLOR);\r\n  }\r\n};\r\n\r\nconst addSwitchersEmployeesHandler = () => {\r\n  _EMPLOYEES_SWITCHERS.addEventListener(CONSTANTS.CLICK, (e) => {\r\n    if (e.target.classList.contains(CONSTANTS.SWITCHER)) {\r\n      choseClickedSwitcher(e.target);\r\n      scrollSlide(e.target, window.innerWidth);\r\n    }\r\n  });\r\n};\r\n\r\nconst choseClickedSwitcher = (clickedElement) => {\r\n  _SWITCHERS.forEach((switcher) => {\r\n    switcher.classList.remove(CONSTANTS.SWITCHER_COLOR);\r\n    if (switcher.id === clickedElement.id) {\r\n      switcher.classList.add(CONSTANTS.SWITCHER_COLOR);\r\n    }\r\n  });\r\n};\r\n\r\nconst scrollSlide = (clickedElement, widthWindow) => {\r\n  const number = +clickedElement.id.replace(/\\D/g, "");\r\n\r\n  switch (number) {\r\n    case 1:\r\n      _EMPLOYEES.style.transform = "translateX(0%)";\r\n      break;\r\n    case 2:\r\n      widthWindow > 376\r\n        ? (_EMPLOYEES.style.transform = "translateX(-61%)")\r\n        : (_EMPLOYEES.style.transform = "translateX(-110%)");\r\n      break;\r\n    case 3:\r\n      widthWindow > 376\r\n        ? (_EMPLOYEES.style.transform = "translateX(-80%)")\r\n        : (_EMPLOYEES.style.transform = "translateX(-220%)");\r\n      break;\r\n    default:\r\n      return;\r\n  }\r\n};\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./src/js/strategies.js\n\r\n\r\n\r\n//class names\r\nconst borderedTag = UTILS.deletePointFromSelector(DOM_SELECTORS.TAG_BORDERED),\r\n  selectedTag = UTILS.deletePointFromSelector(DOM_SELECTORS.TAG_COLORED),\r\n  strategies_hidden = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY_HIDDEN);\r\n\r\nconst addTagClickHandler = () => {\r\n  const _strategiesTags = UTILS.getElementFromDom(\r\n    DOM_SELECTORS.STRATEGIES_TAGS\r\n  );\r\n\r\n  _strategiesTags.addEventListener(CONSTANTS.CLICK, (e) => {\r\n    const tag = e.target;\r\n    if (\r\n      tag.classList.contains(UTILS.deletePointFromSelector(DOM_SELECTORS.TAG))\r\n    ) {\r\n      removeSelectedTags();\r\n      selectClickedTag(tag);\r\n      if (tag.textContent.toLowerCase() === CONSTANTS.ALL) {\r\n        showAllStrategies();\r\n      } else {\r\n        filterStrategiesByClickedTag(tag);\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst removeSelectedTags = () => {\r\n  UTILS.getElementsFromDom(\r\n    `${DOM_SELECTORS.STRATEGIES_TAGS} ${DOM_SELECTORS.TAG}`\r\n  ).forEach((tag) => {\r\n    tag.classList.remove(selectedTag);\r\n    tag.classList.add(borderedTag);\r\n  });\r\n};\r\n\r\nconst selectClickedTag = (clickedTag) => {\r\n  clickedTag.classList.remove(borderedTag);\r\n  clickedTag.classList.add(selectedTag);\r\n};\r\n\r\nconst showAllStrategies = () => {\r\n  const arrayStrategies = UTILS.getElementsFromDom(\r\n    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`\r\n  );\r\n  arrayStrategies.forEach((strategy) => {\r\n    strategy.classList.remove(strategies_hidden);\r\n  });\r\n};\r\n\r\nconst filterStrategiesByClickedTag = (selectedTag) => {\r\n  const arrayStrategies = UTILS.getElementsFromDom(\r\n    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`\r\n  );\r\n\r\n  arrayStrategies.forEach((strategy) => {\r\n    strategy.classList.add(strategies_hidden);\r\n\r\n    const arrayTagsStrategy = UTILS.getElementsFromDom(\r\n      DOM_SELECTORS.TAG,\r\n      strategy\r\n    );\r\n\r\n    arrayTagsStrategy.forEach((tag) => {\r\n      selectedTag.textContent.toLowerCase() === tag.textContent.toLowerCase() &&\r\n        strategy.classList.remove(strategies_hidden);\r\n    });\r\n  });\r\n};\r\n\n;// CONCATENATED MODULE: ./src/js/Article.js\n\r\n\r\n\r\nclass Article {\r\n  constructor({ id, title, urlToImage, tags, ...rest }) {\r\n    this.id = id;\r\n    this.title = title;\r\n    this.urlToImage = urlToImage;\r\n    this.tags = tags;\r\n    this.rest = rest;\r\n    this.buildArticle();\r\n  }\r\n\r\n\r\n  buildArticle() {\r\n    const article = "article",\r\n      strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY),\r\n      blockShadowed = UTILS.deletePointFromSelector(\r\n        DOM_SELECTORS.BLOCK_SHADOWED\r\n      );\r\n\r\n    this.article = this.createElement(article, strategy, blockShadowed);\r\n    this.article.setAttribute("data-id", this.id);\r\n\r\n    this.createImage();\r\n    this.createTitle();\r\n    this.createTags();\r\n    this.groupTags = this.tags.map((tag) => this.createTag(tag));\r\n\r\n    this.bindElements();\r\n  }\r\n\r\n  createElement(element, ...classes) {\r\n    const node = document.createElement(element);\r\n    node.classList.add(...classes);\r\n    return node;\r\n  }\r\n  createArticle(){\r\n\r\n  }\r\n  createImage() {\r\n    const strategy = UTILS.deletePointFromSelector(DOM_SELECTORS.STRATEGY),\r\n      img = "img",\r\n      strategyImage = "strategy__img",\r\n      src = "src",\r\n      alt = "alt";\r\n\r\n    this.image = this.createElement(img, strategyImage);\r\n    this.image.setAttribute(src, this.urlToImage);\r\n    this.image.alt = `${strategy}_${this.id}`;\r\n    return this.image;\r\n  }\r\n  createTitle() {\r\n    const strategyTitle = "strategy__title",\r\n      h3 = "h3";\r\n\r\n    this.articleTitle = this.createElement(h3, strategyTitle);\r\n    this.articleTitle.textContent = this.title;\r\n  }\r\n  createTags() {\r\n    const tags = "tags",\r\n      strategyTags = "strategy__tags",\r\n      div = "div";\r\n\r\n    this.containerTags = this.createElement(div, tags, strategyTags);\r\n  }\r\n  createTag(content) {\r\n    const span = "span",\r\n      tag = "tag",\r\n      selectedTag = "tag_selected";\r\n\r\n    this.tag = this.createElement(span, tag, selectedTag);\r\n    this.tag.textContent = content;\r\n    return this.tag;\r\n  }\r\n  bindElements() {\r\n    this.containerTags.append(...this.groupTags);\r\n    this.article.append(this.image, this.articleTitle, this.containerTags);\r\n  }\r\n  renderArticle(parentElement) {\r\n    parentElement.append(this.article);\r\n  }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/js/Modal.js\n\r\n\r\n\r\nclass Modal {\r\n  constructor(...classes) {\r\n    this.classes = classes;\r\n  }\r\n\r\n  buildModal(content) {\r\n    this.overlay = this.createElement("div", "overlay");\r\n    this.modal = this.createElement("div", ...this.classes);\r\n    this.modalContent = this.createElement("div", "modal__content");\r\n    this.modalCloseButton = this.createElement(\r\n      "span",\r\n      "modal__button_close",\r\n      "icon",\r\n      "icon-close"\r\n    );\r\n    this.setContent(content);\r\n    this.addElementsToDom();\r\n    this.openModal();\r\n  }\r\n\r\n  createElement(element, ...classes) {\r\n    const node = document.createElement(element);\r\n    node.classList.add(...classes);\r\n    return node;\r\n  }\r\n\r\n  setContent(content) {\r\n    this.modalContent.append(content);\r\n  }\r\n  addElementsToDom() {\r\n    this.modal.append(this.modalCloseButton, this.modalContent);\r\n    this.overlay.append(this.modal);\r\n    this.overlay.addEventListener(CONSTANTS.CLICK, this.closeModal);\r\n  }\r\n\r\n  openModal() {\r\n    document.body.append(this.overlay);\r\n  }\r\n\r\n  closeModal(e) {\r\n    const clickedElement = e.target,\r\n      overlay = UTILS.deletePointFromSelector(DOM_SELECTORS.OVERLAY),\r\n      closeButton = UTILS.deletePointFromSelector(\r\n        DOM_SELECTORS.MODEL_CLOSE_BUTTON\r\n      );\r\n\r\n    (clickedElement.classList.contains(overlay) ||\r\n      clickedElement.classList.contains(closeButton)) &&\r\n      UTILS.getElementFromDom(DOM_SELECTORS.OVERLAY).remove();\r\n  }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/js/ModalArticle.js\n\r\n\r\n\r\nclass ModalArticle extends Modal {\r\n  constructor({ id, title, urlToImage, tags, content, date }, ...classes) {\r\n    super(...classes);\r\n    this.id = id;\r\n    this.tags = tags;\r\n    this.title = title;\r\n    this.urlToImage = urlToImage;\r\n    this.content = content;\r\n    this.date = date;\r\n  }\r\n  generateContent() {\r\n    //create different elements for modal content\r\n    this.modalArticle = super.createElement(\r\n      CONSTANTS.DIV,\r\n      CONSTANTS.MODAL_ARTICLE\r\n    );\r\n\r\n    this.createImage();\r\n\r\n    this.articleContent = this.createElement(\r\n      CONSTANTS.DIV,\r\n      CONSTANTS.ARTICLE_CONTENT\r\n    );\r\n\r\n    this.createArticleDate();\r\n\r\n    this.createArticleTitle();\r\n\r\n    this.createArticleText();\r\n\r\n    this.createTags();\r\n\r\n\r\n    this.bindElements();\r\n\r\n    return this.modalArticle;\r\n  }\r\n\r\n  createImage() {\r\n    this.image = super.createElement(CONSTANTS.IMG, CONSTANTS.ARTICLE_IMAGE);\r\n    this.image.src = this.urlToImage;\r\n    this.image.alt = `strategy_${this.id}`;\r\n  }\r\n  createArticleDate() {\r\n    this.articleDate = this.createElement(\r\n      CONSTANTS.DIV,\r\n      CONSTANTS.ARTICLE_DATE\r\n    );\r\n    this.articleDate.textContent = this.date;\r\n  }\r\n  createArticleTitle() {\r\n    this.articleTitle = this.createElement(\r\n      CONSTANTS.H3,\r\n      CONSTANTS.ARTICLE_TITLE,\r\n      CONSTANTS.STRATEGY_TITLE\r\n    );\r\n    this.articleTitle.textContent = this.title;\r\n  }\r\n  createArticleText() {\r\n    this.articleText = this.createElement(\r\n      CONSTANTS.DIV,\r\n      CONSTANTS.ARTICLE_TEXT\r\n    );\r\n    this.articleText.textContent = this.content;\r\n  }\r\n  createTags() {\r\n    this.articleTags = this.createElement(\r\n      CONSTANTS.DIV,\r\n      CONSTANTS.ARTICLE_TAGS,\r\n      CONSTANTS.TAGS\r\n    );\r\n    this.arrayTags = this.tags.map((tag) => this.createTag(tag));\r\n  }\r\n  createTag(content) {\r\n    this.tag = this.createElement(\r\n      CONSTANTS.SPAN,\r\n      CONSTANTS.TAG,\r\n      CONSTANTS.TAG_BORDERED\r\n    );\r\n    this.tag.textContent = content;\r\n    return this.tag;\r\n  }\r\n  \r\n  bindElements() {\r\n    this.articleTags.append(...this.arrayTags);\r\n    this.articleContent.append(\r\n      this.articleDate,\r\n      this.articleTitle,\r\n      this.articleText,\r\n      this.articleTags\r\n    );\r\n    this.modalArticle.append(this.image, this.articleContent);\r\n  }\r\n\r\n  render() {\r\n    const content = this.generateContent();\r\n    super.buildModal(content);\r\n  }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/js/strategy.js\n\r\n\r\n\r\n\r\n\r\n//? dynamic render strategies in DOM\r\nconst renderStrategiesInDom = (data) => {\r\n  getStrategiesContainer().innerHTML = "";\r\n  generateStrategies(data, getStrategiesContainer());\r\n  addStrategyClickHandler(data);\r\n};\r\n\r\nconst getStrategiesContainer = () => {\r\n  return UTILS.getElementFromDom(DOM_SELECTORS.STRATEGIES_CONTAINER);\r\n};\r\n\r\nconst generateStrategies = (data, parent) =>\r\n  data.map((strategy) => generateArticle(strategy).renderArticle(parent));\r\n\r\nconst generateArticle = (dataStrategy) => {\r\n  return new Article(dataStrategy);\r\n};\r\n\r\n//? open modal by clicking on strategy\r\nconst addStrategyClickHandler = (data) => {\r\n  UTILS.getElementsFromDom(\r\n    `${DOM_SELECTORS.STRATEGIES_CONTAINER} ${DOM_SELECTORS.STRATEGY}`\r\n  ).forEach((strategy) => {\r\n    strategy.addEventListener(CONSTANTS.CLICK, (e) => {\r\n      openStrategyModal(\r\n        data[e.target.closest(DOM_SELECTORS.STRATEGY).dataset.id - 1]\r\n      );\r\n    });\r\n  });\r\n};\r\n\r\nconst openStrategyModal = (data) => {\r\n  const modal = "modal",\r\n    ModalStrategy = "modal__strategy";\r\n\r\n  const modalWindow = new ModalArticle(data, modal, ModalStrategy);\r\n  modalWindow.render();\r\n};\r\n\n;// CONCATENATED MODULE: ./src/js/tools.js\n\r\n\r\n\r\n\r\nconst renderToolsModal = (content) => {\r\n  UTILS.getElementFromDom(DOM_SELECTORS.TOOLS_BUTTONS).addEventListener(\r\n    CONSTANTS.CLICK,\r\n    () => {\r\n      createModal(content);\r\n    }\r\n  );\r\n};\r\n\r\nconst createModal = (content) => {\r\n  const modal = new Modal("modal", "tools__modal");\r\n  modal.buildModal(content);\r\n};\r\n\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener("load", function () {\r\n  DATA && renderStrategiesInDom(DATA);\r\n  addTagClickHandler();\r\n  renderToolsModal("content for tools  modal");\r\n  addHamburgerClickHandler();\r\n  addNavigationLinkClickHandler();\r\n  addSwitchersEmployeesHandler();\r\n});\r\n\r\nwindow.addEventListener("resize", resetTranslateForEmployees);\r\n\n\n//# sourceURL=webpack://productly/./src/index.js_+_12_modules?')}};__webpack_modules__[861]();var __webpack_exports__={};__webpack_modules__[208]()})();