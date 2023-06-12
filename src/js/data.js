//! Импорт картинок только в случае векторных изображений - они весят ничтожно мало (например - иконки). Еще удобно стили, при условии, что они разбиты по компонентам (т.е. не один большой css на все приложение).
// Если импортить изображения, то они попадают в сборку, а значит:
// размер сборки растет изрядно, а понадобится изображение (т.е. откроет ли его пользователь) не изместно
// изображения в проде могут меняться, сегодня такое изображение в шапке, завтра другое, при этом для смены изображения потребуется пересобирать все приложение, а это не есть хорошо
//поэтому целесообразнее использовать webpack copy plagin

// import img1 from "../assets/images/strategies/strategy_1.jpg";
// import img2 from "../assets/images/strategies/strategy_2.jpg";
// import img3 from "../assets/images/strategies/strategy_3.jpg";
// import img4 from "../assets/images/strategies/strategy_4_376.jpg";
// import img5 from "../assets/images/strategies/strategy_5.jpg";

export const DATA = [
  {
    id: 1,
    title: "Increasing Prosperity With Positive Thinking",
    //urlToImage: img1,
    //путь прописывается, исходя из расположения файла в бандле(directory dist)
    urlToImage:'./assets/strategy_1.jpg' ,
    tags: ["Art", "Design"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 2,
    title: "Motivation Is The First Step To Success",
    //urlToImage: img2,
    urlToImage:'./assets/strategy_2.jpg' ,
    tags: ["Culture"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 3,
    title: "Success Steps For Your Personal Or Business Life",
    //urlToImage: img3,
    urlToImage:'./assets/strategy_3.jpg' ,
    tags: ["Culture", "Design", "Art"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 4,
    title:
    "Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",
    // urlToImage: img4,
    urlToImage:'./assets/strategy_4_376.jpg',
    tags: ["Culture", "Design", "Art"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 5,
    title: "Increasing Prosperity With Positive Thinking",
    // urlToImage: img5,
    urlToImage:'./assets/strategy_5.jpg' ,
    tags: ["Design"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 6,
    title: "Increasing Prosperity With Positive Thinking",
    // urlToImage: img1,
    urlToImage:'./assets/strategy_1.jpg' ,
    tags: ["Art", "Design"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 7,
    title: "Motivation Is The First Step To Success",
    //urlToImage: img2,
    urlToImage:'./assets/strategy_2.jpg' ,
    tags: ["Culture"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 8,
    title: "Success Steps For Your Personal Or Business Life",
    // urlToImage: img3,
    urlToImage:'./assets/strategy_3.jpg' ,
    tags: ["Culture", "Design", "Art"],
    content:
    "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 9,
    title: "Increasing Prosperity With Positive Thinking",
    //urlToImage: img5,
    urlToImage:'./assets/strategy_4_376.jpg' ,
    tags: ["Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
];
