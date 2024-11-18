
**Step 51:**
```javascript
const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);
```

**Step 52-55:**
```javascript
const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
}
```
- `userData?.songs[0]` gets the first song in the `songs` array.
- `.id` is the `id` property of that song.

**Step 56:**
```javascript
nextButton.addEventListener("click", playNextSong);
```

**Step 57-59:**
```javascript
const playPreviousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
  }
};
```
- `currentSongIndex - 1` helps access the song right before the current one.

**Step 60:**
```javascript
previousButton.addEventListener("click", playPreviousSong);
```

**Step 61-65:**
```javascript
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });
  
  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};
```
- `document.querySelectorAll(".playlist-song")`: Selects all elements with the `.playlist-song` class.
- `aria-current` is an attribute used to indicate the current element in a group. This helps assistive tools identify the current element, aiding users with visual impairments or those who need assistance.
- `setAttribute("aria-current", "true")`: Adds the `aria-current` attribute with the value "true" to highlight the element.
- `removeAttribute("aria-current")`: Removes the `aria-current` attribute from songs that are not the current one.

**Step 66:**
```javascript
highlightCurrentSong();
audio.play();
```

**Step 67-70:**
```javascript
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;
  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};
```
- `textContent` is the property used to change the text content of a DOM element. This is a simple way to update the display content.
- The syntax `condition ? valueIfTrue : valueIfFalse` allows you to check a condition and assign corresponding values. In this case, if `currentTitle` or `currentArtist` exists, they are assigned to `textContent`; otherwise, the default value is an empty string.
- `userData?.currentSong?.title` ensures that if `userData` or `currentSong` is null or undefined, the program won’t throw an error and will return `undefined`.

**Step 71:**
```javascript
setPlayerDisplay();
audio.play();
```

**Step 72-74:**
```javascript
const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};
```

**Step 75:**
```javascript
highlightCurrentSong();
setPlayerDisplay();
setPlayButtonAccessibleText();
audio.play();
```

**Step 76-79:**
```javascript
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};
```
- Using the `sort()` method to shuffle the `songs` array in the `userData` object. The `Math.random() - 0.5` trick is a common way to shuffle an array.
- After shuffling, `userData.currentSong` is set to null and `userData.songCurrentTime` to 0, which helps restart the music playback process.
- Calls `renderSongs(userData?.songs)`, `pauseSong()`, `setPlayerDisplay()`, and `setPlayButtonAccessibleText()` to update the interface and stop the current music.

**Step 80:**
```javascript
shuffleButton.addEventListener("click", shuffle);
```

**Step 81-85:**
```javascript
const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs); 
  highlightCurrentSong(); 
  setPlayButtonAccessibleText(); 
};
```

**Step 86:**
```html
<button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
</button>
```

**Step 87-94:**
```javascript
if (userData?.songs.length === 0) {
  const resetButton = document.createElement("button");
  const resetText = document.createTextNode("Reset Playlist");

  resetButton.id = "reset";
  resetButton.ariaLabel = "Reset playlist";
  resetButton.appendChild(resetText);
  playlistSongs.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    userData.songs = [...allSongs];
    renderSongs(sortSongs()); 
    setPlayButtonAccessibleText();
    resetButton.remove();
  });
}
```
- "Creating an HTML button and appending it to the DOM": Use `createElement()` to create a new element and `appendChild()` to add it to the DOM.
- "Using `ariaLabel` for accessibility": Adding the `ariaLabel` attribute improves the accessibility of the interface.
- "Reset the playlist with the reset button": Use the reset button to restore the default song list when necessary.

**Step 95-99:**
```javascript
audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    playNextSong();
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});
```
