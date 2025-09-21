
const url = 'https://musicapi-19wk.onrender.com/music/myAPI'
const songlist = document.getElementById("song-list");
let currentAudio = null;

const getMusic = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        show.innerHTML = "";
        data.map((user, i) =>  {
            show.innerHTML += `
            <p>${i + 1}. ${user.id} ${user.artistName} <br> ${user.songTitle} <br> ${user.albumName} <br> ${user.releaseDate} </p>
            <img style="border-radius:100%; width:100px; height:100px;margin-right:20px" src="${user.songImage}" alt=""> 
            <audio id=${i} src=${user.songUrl}></audio>
            <button  style="padding:8px; width:100px; border-radius: 6px; border: none;background: #17a74a; color:white; font-weight:bold"  onclick="playMusic(${i})">Play</button>
            <button  style="padding:8px; width:100px; border-radius: 6px; border: none;background: red; color:white; font-weight:bold"  onclick="pauseMusic(${i})">Pause</button>
            <hr>
            `
        })  
    })

}
const playMusic = (i)=>{
  const audio = document.getElementById(i);
    if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = audio;
  audio.play();
}

const pauseMusic = (i) => {
  const audio = document.getElementById(i)
  audio.pause();
};
getMusic();
