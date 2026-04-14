// URL of the JSON file in your repo
const DATA_URL = 'https://coltonrubenstein-cmyk.github.io/Tier-list-for-comp-in-cheerio-tga//main/players.json';

async function loadPlayers() {
    try {
        const response = await fetch(DATA_URL);
        const players = await response.json();
        renderPlayers(players);
    } catch (err) {
        console.error('Failed to load players:', err);
        document.getElementById('playerList').innerHTML = '<li>Error loading tier list</li>';
    }
}

function renderPlayers(players) {
    const list = document.getElementById('playerList');
    list.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} (${player.role}) - ${player.points}`;
        li.style.color = player.role.toLowerCase() === "ground" ? "green" : "brown";
        list.appendChild(li);
    });
}

// Load players when the page opens
loadPlayers();
