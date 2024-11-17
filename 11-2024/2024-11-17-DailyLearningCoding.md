
**Step 21:**
```javascript
const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info">
      <span class="playlist-song-title">${song.title}</span>
      </button>
      </li>
      `;
    })
```
- `<button>`:
  + This is the button to display song information.
  + Class: `playlist-song-info` is used for styling or interaction via CSS/JavaScript.
- `<span>`:
  + Contains the song's title (`song.title`).
  + Class: `playlist-song-title` applies CSS formatting to the title.
- Interpolating `${song.title}`:
  + Inserts content from the `title` property of the `song` object.
  + Example: If `song.title` is "Song A", the content will be `<span class="playlist-song-title">Song A</span>`.
- Nested HTML:
  + `<button>` wraps `<span>`, creating the complete structure for each song.

**Step 22:**
```html
<button class="playlist-song-info">
    <span class="playlist-song-title">${song.title}</span>
    <span class="playlist-song-artist">${song.artist}</span>
    <span class="playlist-song-duration">${song.duration}</span>
</button>
```

**Step 23:**
```html
<button class="playlist-song-delete" aria-label="Delete ${song.title}">
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
    </svg>
</button>
```
- The class `playlist-song-delete` is used for identification.
- `aria-label` improves accessibility, allowing screen readers to understand that this button deletes the specific song.
- The provided SVG icon will display as a delete icon.

**Step 24:**
```javascript
const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
          </svg>
      </button>
      </li>
      `;
    })
    .join("");
```
- After using `map()`, you have an array of HTML strings.
- After applying `join("")`, the array is joined into a single string, without commas.

**Step 25:**
```javascript
// Update the content of the playlistSongs element
playlistSongs.innerHTML = songsHTML;
```

**Step 26:**
```javascript
// Display the list of songs
renderSongs(userData?.songs);
```
- Optional Chaining (`?.`):
  + Safely checks nested properties.
  + If `userData` or `userData.songs` is `null` or `undefined`, the expression `userData?.songs` will return `undefined` instead of throwing an error.
- `renderSongs`:
  + This function was defined in earlier steps to display the list of songs on the interface.

**Step 27:**
```javascript
// Function to sort songs by title
const sortSongs = () => {

};
```
- The `sort()` method of arrays in JavaScript is used to sort elements.
- When sorting strings, you can use a comparison function that returns negative, 0, or positive values:
  - Negative: Keeps the order.
  - 0: No change to the order.
  - Positive: Reverses the order.

**Step 28:**
```javascript
userData?.songs.sort();
```
- `sort()` converts the elements of the array into strings and sorts them in place based on UTF-16 encoding.
- By default, this method sorts strings in ascending order.

**Step 29:**
```javascript
userData?.songs.sort((a, b) => {

});
```
- How `sort()` works with a callback function:
  + The callback function is called on each pair of elements in the array to determine their order.
  + This function returns:
    - `-1` if the first element should appear before the second.
    - `1` if the first element should appear after the second.
    - `0` if the order of the two elements is unchanged.

**Step 30:**
```javascript
userData?.songs.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
});
```
- `a.title < b.title`: This condition checks if the title of the first song (`a.title`) comes before the title of the second song (`b.title`) alphabetically. If true, it returns `-1`, meaning `a` will come before `b` in the sorted array.


**Step 31:**
```javascript
if (a.title > b.title) {
  return 1;
}
```
- This condition checks if the title of song `a` comes after song `b` alphabetically. If so, it returns `1`, indicating that `b` should come before `a` in the sorted array.

**Step 32:**
```javascript
return 0;
```
- If the titles of `a` and `b` are the same, returning `0` means that the order of these two songs should not be changed.

**Step 33:**
```javascript
return userData?.songs;
```
- This returns the sorted array of songs after applying the sort logic.

**Step 34:**
```javascript
renderSongs(sortSongs());
```
- Calls the `sortSongs` function to sort the songs and then renders the sorted list using the `renderSongs` function.

**Step 35:**
```javascript
const playSong = (id) => {
  
};
```
- This is the function that will play a song when called. It takes the `id` of the song to play.

**Step 36:**
```javascript
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
};
```
- `find()` is used to locate the song with the matching `id` in the `songs` array.

**Step 37:**
```javascript
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
};
```
- Sets the `audio.src` to the source of the selected song and updates the `audio.title` to reflect the song's title.

**Step 38-39:**
```javascript
if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
  audio.currentTime = 0;
} else {
  audio.currentTime = userData?.songCurrentTime;
}
```
- This checks whether the current song is playing and if it’s different from the song that was just selected. If it's a new song, it resets the playback to the start (`audio.currentTime = 0`); otherwise, it continues from the previous playback time stored in `userData.songCurrentTime`.

**Step 40:**
```javascript
userData.currentSong = song;
```
- Updates the `userData.currentSong` to the selected song, so the app knows which song is currently playing.

**Step 41:**
```javascript
playButton.classList.add("playing");
audio.play();
```
- Adds the `playing` class to the play button to visually indicate that the song is playing, then starts playback using `audio.play()`.

**Step 42:**
```javascript
playButton.addEventListener("click", () => {
  
});
```
- Adds a click event listener to the play button, which will trigger the function to play or pause the song when clicked.

**Step 43-44:**
```javascript
playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});
```
- Checks if a song is already playing. If no song is playing, it starts the first song in the list; otherwise, it resumes the current song.

**Step 45:**
```html
<button class="playlist-song-info" onclick="playSong(${song.id})">
  <span class="playlist-song-title">${song.title}</span>
  <span class="playlist-song-artist">${song.artist}</span>
  <span class="playlist-song-duration">${song.duration}</span>
</button>
```
- Adds an `onclick` handler to the song info button, which calls the `playSong()` function when the button is clicked.

**Step 46-48:**
```javascript
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};
```
- The `pauseSong` function stops the playback and stores the current playback time in `userData.songCurrentTime`. It also removes the `playing` class from the play button to reflect that the song is paused.

**Step 49:**
```javascript
pauseButton.addEventListener("click", pauseSong);
```
- Adds a click event listener to the pause button, which will pause the song when clicked.

**Step 50:**
```javascript
const getCurrentSongIndex = () => {

}
```
- This function is likely intended to return the index of the currently playing song in the `userData.songs` array.