**Learn Modern JavaScript Methods by Building Football Team Cards**

**Step 1-4:**
```javascript
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
```

**Step 5:**
```javascript
const myFavoriteFootballTeam = {};
```
- `const myFavoriteFootballTeam = {};` creates an empty object where you will store your favorite football team's information.

**Step 6-11:**
```javascript
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
  ],
};
```
- The `players` property is initialized with an empty array `[]`. This array will be used to store the list of players in the football team.

**Step 12:**
```javascript
Object.freeze(myFavoriteFootballTeam);
```
- `Object.freeze()` is a method in JavaScript used to freeze an object.
- After the object is frozen:
  - You cannot add new properties.
  - You cannot delete existing properties.
  - You cannot change the values of existing properties.
  - You cannot change the structure of arrays or nested objects unless they are also frozen (otherwise, they can still be modified).

**Step 13-14:**
```javascript
const team = myFavoriteFootballTeam.team;
const sport = myFavoriteFootballTeam.sport;
```

**Step 15:**
```javascript
const { sport, team } = myFavoriteFootballTeam;
```
- `{ sport, team }` is destructuring syntax that extracts the values from the `myFavoriteFootballTeam` object and assigns them to new variables named `sport` and `team`.

**Step 16:**
```javascript
const { sport, team, year, players } = myFavoriteFootballTeam;
```

**Step 17:**
```javascript
const { coachName } = myFavoriteFootballTeam.headCoach;
```

**Step 18:**
```javascript
typeOfSport.textContent = sport;
```
- `typeOfSport.textContent`: 
  - Accesses the HTML element with the ID `typeOfSport`.
  - Assigns the value of the `sport` variable (here, "Football") to the `textContent` property of this element.
- `textContent` is a property of a DOM element used to get or change the text content inside that element.

**Step 19:**
```javascript
teamName.textContent = team;
```

**Step 20:**
```javascript
worldCupYear.textContent = year;
headCoach.textContent = coachName;
```

**Step 21-32:**
```javascript
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `;
      }
    )
    .join("");
};
```

**Step 34-45:**
```javascript
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;

    default:
      setPlayerCards();  
      break;
  }
});
```