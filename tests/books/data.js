const book = {
  title: "Unlocking Android",
  isbn: "1933988673",
  page_count: 416,
  published_date: "2009-04-01T00:00:00.000-0700",
  image_link:
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
  description:
    "Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
  status: "",
};
const author = {
  name: "W. Frank Ableson",
};

const category = {
  name: "Open Source",
};

const validBook = {
  title: "Flex on Java",
  isbn: "1933988797",
  page_count: 265,
  published_date: "2010-10-15T00:00:00.000-0700",
  image_link:
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
  description:
    "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   ",
  status: "HOLD",
  authors: ["Bernerd Allmon", "Jeremy Anderson"],
  categories: ["Internet"],
};

const nonValidBook = {
  title: "Flex on Java",
  isbn: "1933988797",
  page_count: 265,
  published_date: "2010-10-15T00:00:00.000-0700",
  image_link:
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
  description:
    "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   ",
  status: "HOLD",
  categories: ["Internet"],
};

module.exports = { book, author, category, validBook, nonValidBook };
