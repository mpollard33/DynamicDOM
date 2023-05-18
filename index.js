const savedBookmarks = [
  { name: "Instagram", link: "http://www.instagram.com" },
  { name: "Google", link: "http://www.google.com" },
];

const bookmark = (name, link) => ({ name: name, link: link });

//  List of bookmarks
console.log(`List of Bookmarks: ${savedBookmarks}`);

//  render a list of bookmarks
const bookmarkRender = () => {
  const list = document.querySelector("#bookmark-list");

  for (let ele in savedBookmarks) {
    const entry = document.createElement("li");
    entry.textContent = savedBookmarks[ele].name;
    console.log(`New entry: ${savedBookmarks[ele].name}`);
    list.append(entry);
  }
};
