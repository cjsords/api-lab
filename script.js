//api call
// console.log(apiData);
// console.log(apiData.data.children[0].data.title); //title
// console.log(apiData.data.children[0].data.thumbnail); //image
// console.log(
//   `https://www.reddit.com${apiData.data.children[0].data.permalink}`
// );

const mainPage = document.querySelector(".main");
fetch("https://www.reddit.com/r/aww/.json")
  .then(response => response.json())
  .then(apiData => {
    let i = 0;
    for (i; i < 10; i++) {
      //creating main container
      let container = document.createElement("div");
      container.classList.add("article-container");

      //posted by
      let postedBy = document.createElement("p");
      postedBy.classList.add("posted-by");
      let authorIcon = document.createElement("div");
      authorIcon.innerHTML = `<i class="far fa-user-circle"></i>`;
      postedBy.append(authorIcon);
      let authorLink = document.createElement("div");
      authorLink.innerText = `Posted by ${apiData.data.children[i].data.author_fullname}.`;
      postedBy.append(authorLink);
      container.append(postedBy);

      //adding title
      let titleEl = document.createElement("h3");
      titleEl.innerText = apiData.data.children[i].data.title;
      container.append(titleEl);

      //adding link
      let linkEl = document.createElement("a");
      linkEl.innerText = "See Full Post";
      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${apiData.data.children[i].data.permalink}`
      );
      container.append(linkEl);

      //adding img
      let thumbnailEl = document.createElement("img");
      thumbnailEl.setAttribute("src", apiData.data.children[i].data.thumbnail);
      container.append(thumbnailEl);

      mainPage.append(container);
    }
  });
