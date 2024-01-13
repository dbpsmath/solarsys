const games = gameJSON
const params = new URLSearchParams(window.location.search)
document.addEventListener('DOMContentLoaded', () => {
    if (params.get("game")) {
        games.forEach(async game => {
            if (game.id != params.get("game")) return
            document.title = `${game.title} | DBP's Math`
            document.querySelector("#gameImage").src = game.image
            document.querySelector("#gameTitle").innerHTML = game.title
            if (game.description) document.querySelector("#gameDescription").innerHTML = game.description
            const circle = document.querySelector('.circle')
            if (document.location.host.startsWith('127.0.0.1')) {
                circle.querySelector('#frame').src = 'http://' + document.location.host + '/' + game.url
            } else {
                if (document.location.host.endsWith('localhost:9000')) {
                    circle.querySelector('#frame').src = 'http://' + document.location.host + '/' + game.url
                } else {
                    circle.querySelector('#frame').src = 'https://' + document.location.host + '/' + game.url
                }
            }
        })
    }
});