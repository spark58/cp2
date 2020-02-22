function onClick(e) {
  e.preventDefault();
  // get form values
  let artist = document.getElementById('artist').value;
  let title = document.getElementById('title').value;
  console.log(artist);
  console.log(title);

let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
console.log(url)
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      console.log(json);
      updateResult(json.lyrics);
    });
  }

  function updateResult(info) {
  info = info.replace(/\n/g, "<br>");
  document.getElementById('result').innerHTML = info;
}

document.getElementById('search').addEventListener('click', onClick);
