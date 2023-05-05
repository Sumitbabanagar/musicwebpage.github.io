console.log("welcome to java script")

let songIndex=0
let audioElement = new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let masterSongName=document.getElementById("masterSongName")
let songItemPlay=document.getElementsByClassName("songItemPlay")
let songItems=Array.from(document.getElementsByClassName("songItem"))

let songs=[
    {songName:"Dandelions - Ruth B", filePath: "songs/1.mp3",coverPath:"cover/1.jfif"},
    {songName:"Dancin", filePath: "songs/2.mp3",coverPath:"cover/2.jfif"},
    {songName:"Drop-Some-Money", filePath: "songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Night Changes", filePath: "songs/4.mp3",coverPath:"cover/4.jfif"},
    {songName:"Peaches", filePath: "songs/5.mp3",coverPath:"cover/5.jfif"},
    {songName:"Hey Nalle Nille", filePath: "songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Ondu Malebillu", filePath: "song/7.mp3",coverPath:"cover/7.jfif"},
    {songName:"Sariyaagi Nenapide", filePath: "songs/8.mp3",coverPath:"cover/8.jpg"}, 
]

songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath
element.getElementsByClassName("songname")[0].innerText=songs[i].songName
})

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currenTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity=0 
    }
})



//Listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    //update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100)
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
      
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex=parseInt(e.target.id)
        if(audioElement.paused||audioElement.currentTime<=0){
        makeAllPlays();
        e.target.classList.add("fa-pause-circle")
        e.target.classList.remove("fa-play-circle")
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")}
        else{
            e.target.classList.add("fa-play-circle")
            e.target.classList.remove("fa-pause-circle")
            audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        
        }
    })
})
// next button logic
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})

//privious button logic
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=9
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})



// masterPlay.addEventListener("click", ()=>{
//     if(audioElement.paused || audioElement.currenTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle")
//         masterPlay.classList.add("fa-pause-circle")
//         gif.style.opacity=1
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove("fa-pause-circle")
//         masterPlay.classList.add("fa-play-circle")
//         gif.style.opacity=0 
//     }
// })
