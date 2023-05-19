const savedBookmarks = [
  { name: "Instagram", link: "http://www.instagram.com" },
  { name: "Google", link: "http://www.google.com" },
];

const bookmark = {};

// List of bookmarks
console.log(`List of Bookmarks:`, savedBookmarks);

const inputName = document.getElementById("bookmark-name");
inputName.addEventListener("input", () => {
  bookmark.name = inputName.value;

  return bookmark.name;
});

const inputLink = document.getElementById("bookmark-link");
inputLink.addEventListener("input", () => {
  bookmark.link = inputLink.value;

  return bookmark.link;
});

const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", () => {
  const entry = { name: inputName.value, link: inputLink.value };
  savedBookmarks.push(entry);
  bookmarkRender();
});

// Render a list of bookmarks
const bookmarkRender = () => {
  const list = document.querySelector("#bookmark-list");

  // Clear previous list
  list.innerHTML = "";

  for (let i = 0; i < savedBookmarks.length; i++) {
    const listItem = document.createElement("li");

    const para = document.createElement("p");
    para.textContent = `Name: ${savedBookmarks[i].name}`;

    const linkElement = document.createElement("a");
    linkElement.href = savedBookmarks[i].link;
    linkElement.textContent = savedBookmarks[i].link;

    const button = document.createElement("button");
    button.style.backgroundColor = "grey";
    button.style.border = "solid lightgrey 0.1em";
    button.style.borderRadius = "0.4em";
    button.style.height = "2.7em";
    button.innerText = "Remove Bookmark";

    const removeBookmark = (index) => {
      savedBookmarks.splice(index, 1);
      bookmarkRender();
    };

    button.addEventListener("click", () => removeBookmark(i));

    listItem.append(para, linkElement, button);

    console.log(`New entry: ${savedBookmarks[i].name}`);
    list.appendChild(listItem);
  }
};

bookmarkRender();
