const container = document.querySelector(".container");

function getQuote(url) {
    const data = fetch(url)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            const titleTag = document.createElement("h2");
            titleTag.innerText = data.title;
            container.appendChild(titleTag);
            const imageTag = document.createElement("img");
            imageTag.setAttribute("src", data.url);
            container.appendChild(imageTag);
        })
        .catch((error) => console.log("AN ERROR OCCURED"));
}

getQuote("https://meme-api.herokuapp.com/gimme");