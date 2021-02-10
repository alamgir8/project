
function getMusic(){
    const inputSong = document.getElementById('input-songs').value;
fetch(`https://api.lyrics.ovh/suggest/${inputSong}`)
.then(res => res.json())
.then(data => displaySongs(data.data))
.catch(error => console.log(error));

document.getElementById('input-songs').value = '';
document.getElementById('song-container').innerHTML = '';

}

const displaySongs = songs =>{

    const songContainer = document.getElementById('song-container');
    songs.forEach(song => {
       const songDiv = document.createElement('div');
       songDiv.className = 'single-result row align-items-center my-3 p-3';
       songDiv.innerHTML = `
       <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
            <source src="${song.preview}" type="audio/ogg">
           
        
          </audio>
          
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success" onclick ="getLyric('${song.artist.name}','${song.title}')">Get Lyrics</button>
        </div>    
       `
       songContainer.appendChild(songDiv);
        
    });
}

const getLyric = (artist, title) =>{
    
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => displayLyric(data.lyrics))
}

const displayLyric = lyric =>{
    const songLyric = document.getElementById('song-lyric');
    songLyric.innerText = lyric;
}
