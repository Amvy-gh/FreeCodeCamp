# Music Player JavaScript Code Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [DOM Element References](#dom-element-references)
3. [Song Data Structure](#song-data-structure)
4. [Core Variables](#core-variables)
5. [Core Functions](#core-functions)
   - [Audio Playback Functions](#audio-playback-functions)
   - [Playlist Management Functions](#playlist-management-functions)
   - [UI Update Functions](#ui-update-functions)
6. [Event Listeners](#event-listeners)
7. [Initialization](#initialization)

## Introduction

This document provides a detailed line-by-line explanation of the JavaScript implementation for a music player web application. The player offers functionality to play, pause, navigate between songs, shuffle the playlist, and delete songs.

## DOM Element References

```javascript
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
```

These lines retrieve references to important DOM elements using their IDs:
- `playlistSongs`: Container for the list of songs
- `playButton`: Button to start playback
- `pauseButton`: Button to pause playback
- `nextButton`: Button to play the next song
- `previousButton`: Button to play the previous song
- `shuffleButton`: Button to shuffle the playlist

## Song Data Structure

```javascript
const allSongs = [
  {
    id: 0,
    title: "All Falls Down",
    artist: "JunLIB",
    duration: "3:22",
    src: "src/All Falls Down.mp3"
  },
  // Additional song entries...
];
```

This creates an array of song objects. Each song object contains:
- `id`: Unique identifier for the song
- `title`: Song title
- `artist`: Song artist name
- `duration`: Song length in minutes:seconds format
- `src`: Path to the audio file

## Core Variables

```javascript
const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};
```

- `audio`: Creates a new HTML Audio element to handle audio playback
- `userData`: An object containing the application state:
  - `songs`: A working copy of the song list (using the spread operator to create a new array)
  - `currentSong`: Reference to the currently playing song (null when no song is playing)
  - `songCurrentTime`: Stores the current playback position in seconds

## Core Functions

### Audio Playback Functions

#### playSong Function

```javascript
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};
```

This function plays a song by its ID:
- `userData?.songs.find()`: Uses optional chaining (`?.`) and the find method to locate the song by ID
- Sets the audio source and title based on the song object
- Determines playback position:
  - If it's a new song (or no song was playing), start from the beginning
  - If resuming the same song, continue from where it was paused
- Updates the current song in the user data
- Adds the "playing" class to the play button for visual indication
- Calls helper functions to update UI components:
  - `highlightCurrentSong()`: Visually highlights the current song in the playlist
  - `setPlayerDisplay()`: Updates the player display with current song info
  - `setPlayButtonAccessibleText()`: Sets accessibility text for screen readers
- Starts playback with `audio.play()`

#### pauseSong Function

```javascript
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  
  playButton.classList.remove("playing");
  audio.pause();
};
```

This function pauses the current song:
- Saves the current playback position to `userData.songCurrentTime`
- Removes the "playing" class from the play button
- Pauses audio playback

#### playNextSong Function

```javascript
const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};
```

This function plays the next song in the playlist:
- If no song is currently playing (`userData?.currentSong === null`), plays the first song
- Otherwise:
  - Gets the index of the current song
  - Gets the next song object
  - Plays the next song by its ID

#### playPreviousSong Function

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

This function plays the previous song in the playlist:
- If no song is currently playing, does nothing and exits
- Otherwise:
  - Gets the index of the current song
  - Gets the previous song object
  - Plays the previous song by its ID

### Playlist Management Functions

#### shuffle Function

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

This function shuffles the playlist:
- Uses `sort()` with a random comparison function to randomize the song order
- Resets the current song and playback position
- Re-renders the playlist with the shuffled order
- Pauses any playback
- Updates the player display and accessibility text

#### deleteSong Function

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

This function removes a song from the playlist:
- If the song being deleted is currently playing:
  - Resets the current song and playback position
  - Pauses playback
  - Updates the player display
- Filters out the song with the specified ID from the song list
- Re-renders the playlist, highlights the current song, and updates accessibility text

### UI Update Functions

#### setPlayerDisplay Function

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

This function updates the player display with the current song information:
- Gets DOM references to the title and artist display elements
- Uses optional chaining to safely access the current song's title and artist
- Updates the text content of the display elements (empty string if no song is selected)

#### highlightCurrentSong Function

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

This function visually highlights the currently playing song in the playlist:
- Gets all playlist song elements
- Finds the element corresponding to the current song
- Removes the "aria-current" attribute from all songs
- Adds the "aria-current" attribute to the current song (if one is playing)

#### renderSongs Function

```javascript
const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;

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
};
```

This function renders the song list in the UI:
- Maps through the song array to create HTML for each song:
  - Creates a list item with the song ID
  - Adds a button to play the song
  - Displays title, artist, and duration
  - Adds a delete button with an SVG icon
- Joins the HTML strings and updates the playlist container
- If the playlist is empty:
  - Creates a reset button
  - Adds text and attributes to the button
  - Appends it to the playlist container
  - Adds a click event listener that:
    - Restores the original song list
    - Re-renders the sorted playlist
    - Updates the accessibility text
    - Removes the reset button

#### setPlayButtonAccessibleText Function

```javascript
const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};
```

This function updates the accessibility text for the play button:
- Gets the current song or the first song in the list
- Sets the "aria-label" attribute to include the song title (or just "Play" if no title)

#### getCurrentSongIndex Function

```javascript
const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);
```

This utility function returns the index of the current song in the playlist:
- Uses `indexOf()` to find the position of the current song in the songs array
- Uses optional chaining to safely access properties

## Event Listeners

```javascript
playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

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

These lines set up event listeners for user interactions:

- **Play Button Click**:
  - If no song is currently playing, plays the first song
  - Otherwise, resumes the current song

- **Pause Button Click**:
  - Calls the `pauseSong` function

- **Next Button Click**:
  - Calls the `playNextSong` function

- **Previous Button Click**:
  - Calls the `playPreviousSong` function

- **Shuffle Button Click**:
  - Calls the `shuffle` function

- **Audio Ended Event**:
  - Triggers when a song finishes playing
  - Checks if there's a next song in the playlist
  - If a next song exists, plays it
  - Otherwise, resets the player state:
    - Clears the current song
    - Resets the playback position
    - Pauses playback
    - Updates UI components

## Initialization

```javascript
const sortSongs = () => {
  userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();
```

These final sections handle the initial setup of the player:

- **sortSongs Function**:
  - Sorts the songs alphabetically by title
  - Returns the sorted array

- **Initial Calls**:
  - Sorts the songs and renders them to the playlist
  - Sets the initial accessibility text for the play button