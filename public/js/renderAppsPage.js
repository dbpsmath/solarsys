// Get the gallery containers
var imageGallery = document.getElementById("dynamic-gallery");
var popularGallery = document.getElementById("popular-gallery");

// Filter popular games (you can customize this logic based on your criteria)
let games = gameJSON
games = games.filter(game => game.app);

// Render all games dynamically
games.forEach(game => renderGame(game, imageGallery));

// Function to render a game
function renderGame(game, container) {
    const gameContainer = document.createElement("div");
    gameContainer.classList.add("image-container");

    const gameLink = document.createElement("a");
    gameLink.classList.add("normal-link");
    gameLink.href = `frame?game=${game.id}`;

    const gameImage = document.createElement("img");
    gameImage.classList.add("rounded-image");
    gameImage.src = game.image;
    gameImage.alt = game.title;

    const gameCaption = document.createElement("p");
    gameCaption.classList.add("caption");
    gameCaption.textContent = game.title;

    // Append elements to the container
    gameLink.appendChild(gameImage);
    gameLink.appendChild(gameCaption);
    gameContainer.appendChild(gameLink);
    container.appendChild(gameContainer);
}

