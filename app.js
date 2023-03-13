const txtSearch = document.querySelector(".txtsearch"),
  searchbtn = document.querySelector(".fa-magnifying-glass"),
  photos = document.querySelector(".photos"),
  form = document.querySelector("form");

form.addEventListener("submit", showphoto);

function showphoto(e) {
  e.preventDefault();
  photos.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.unsplash.com/search/photos?query=${txtSearch.value}&client_id=-Y859Zedlj5rmyD9NfYtG-9oJRu_w-3U32WuydaWhJY`
  );
  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this);
      let res = JSON.parse(xhr.response);
      res.results.forEach((photo) => {
        const img = `
                <img class="img" src="${photo.urls.small}" alt"">
                `;
        photos.innerHTML += img;
      });
    }
  };
  xhr.send();
}
