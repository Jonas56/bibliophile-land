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

const book2 = {
  title: "Collective Intelligence in Action",
  isbn: "1933988312",
  page_count: 600,
  published_date: "2010-11-15T00:00:00.000-0800",
  image_link:
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
  description:
    "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.",
  status: "",
};
const author = {
  name: "W. Frank Ableson",
};

const category = {
  name: "Open Source",
};

const user = {
  name: "Jonas",
  username: "Jonas56",
  email: "jonas@tesla.com",
  hashed_password: "Jonas@123",
  age: 21,
};

module.exports = {
  book,
  book2,
  author,
  category,
  user,
};
