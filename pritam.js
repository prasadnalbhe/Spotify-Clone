const songs =[
    
    {
        no:1,
        poster :"https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3",
        title: "Chahun Main Ya Naa ( Ashiqui2 )",
        listeners:'400,000,000',
        url: "songs/chahun_main_ya_na.mp3",
        artist:'Arijit Singh',
        duration:'5.11',
    },
    {
        no:2,
        poster :"https://i.scdn.co/image/ab67616d0000b273bb38f55845eff36d5618003a",
        title: "Befikra",
        listeners:'400,000,000',
        url: "songs/Befikra.mp3",
        artist:'Arijit Singh',
        duration:'5.51',

    },
    {
        no:3,
        poster :"https://c.saavncdn.com/119/Chal-Wahan-Jaate-Hain-Hindi-2015-500x500.jpg",
        title: "Chal Waha Jate hai",
        listeners:'400,000,000',
        url: "songs/chal_waha_jate.mp3",
        artist:'Arijit Singh',
        duration:'5.26',

    },
    {
        no:4,
        poster :"https://i.scdn.co/image/ab67616d0000b273ff1cda069aac9352c258f8d1",
        title: "Channa Mereya",
        listeners:'400,000,000',
        url: "songs/channa_mereya.mp3",
        artist:'Arijit Singh',
        duration:'2.41',

    },
    {
        no:5,
        poster :"https://upload.wikimedia.org/wikipedia/en/8/89/Gerua_cover.jpg",
        title: "Gerua",
        listeners:'400,000,000',
        url: "songs/gerua.mp3",
        artist:'Arijit Singh',
        duration:'5.11',

    },
    {
        no:6,
        poster :"https://c-fa.cdn.smule.com/smule-gg-uw1-s-5/arr/c3/41/8e3554f6-172a-4294-98c6-71130c3fef52.jpg",
        title: "Darkhaast",
        listeners:'400,000,000',
        url: "songs/darkhaast.mp3",
        artist:'Arijit Singh',
        duration:'6.14',

    },
    {
        no:7,
        poster :"https://i1.sndcdn.com/artworks-000173364707-zsjhgg-t500x500.jpg",
        title: "Soch na sake",
        listeners:'400,000,000',
        url: "songs/soch_na_sake.mp3",
        artist:'Arijit Singh',
        duration:'4.41',

    },
    {
        no:8,
        poster :"https://shop.pianodaddy.com/wp-content/uploads/2020/07/Sooraj-Dooba-Hai-Roy.jpg",
        title: "Sooraj Dooba Hai",
        listeners:'400,000,000',
        url: "songs/sooraj_dooba.mp3",
        artist:'Arijit Singh',
        duration:'4.24',

    },
    {
        no:9,
        poster :"https://c.saavncdn.com/780/Sukoon-Mila-English-2021-20210921184647-500x500.jpg",
        title: "Sukoon Mila",
        listeners:'400,000,000',
        url: "songs/sukoon_mila.mp3",
        artist:'Arijit Singh',
        duration:'3.19',

    },
];

const song_no=document.getElementsByClassName('number');
const posters=document.getElementsByClassName('poster');
const total_listeners= document.getElementsByClassName('total_listeners');
const song_titles=document.getElementsByClassName('song_title');
const durations =document.getElementsByClassName('song-duration');

const song_list=document.querySelectorAll('.song-list');

// selecting playbar buttons

const playbar_poster=document.getElementsByClassName('play-bar-poster');
const song_name=document.getElementsByClassName('name-of-song');
const song_artist=document.getElementsByClassName('song_artist');

const play_btn=document.getElementById('play');
const pause_btn=document.getElementById('pause-btn')

const play_back=document.getElementById('playback');
const play_forward=document.getElementById('playforward')

const progress=document.getElementById('progress');
const bar2=document.getElementsByClassName('bar2')

const volume_progress=document.getElementById('volume')
const volume_bar=document.getElementById('v-bar')

let start_time=document.getElementById('start-time');
let end_time =document.getElementById('end-time');

let top_play_btn=document.getElementsByClassName('playbtn')[0]; 


let hamburgericon=document.getElementsByClassName('hamburger');

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    
    if(hamburgericon[0].classList.contains('transition_in')){
        hamburgericon[0].classList.remove('transition_in');
        hamburgericon[0].classList.add('transition_out');
    }
    else{
        hamburgericon[0].classList.add('transition_in');
        hamburgericon[0].classList.remove('transition_out');
        
    }

}

hamburgericon[0].addEventListener('click',toggleSidebar);

const changeicon=()=>{
    
   
    if(!audio.paused && play_btn.classList.contains('hide')){
        return;
    }
    else if(!audio.paused && pause_btn.classList.contains('hide')){
        pause_btn.classList.remove('hide');
        play_btn.classList.add('hide');
    }

    else{
        pause_btn.classList.add('hide');
        play_btn.classList.remove('hide')
    }

}

let num=4;
let audio=new Audio("songs/channa_mereya.mp3");

audio.volume=volume_progress.value/100;
volume_bar.style.width=`${volume_progress.value}%`; 

play_bar_update();

console.log(volume_progress.volume)

for(i=0;i<song_list.length;i++){
    song_no[i].innerText=songs[i].no;
    posters[i].src=songs[i].poster;
    total_listeners[i].innerText=songs[i].listeners;
    song_titles[i].innerText=songs[i].title;
    durations[i].innerText=songs[i].duration;
}

top_play_btn.addEventListener('click',()=>{
    audio=new Audio("songs/channa_mereya.mp3");
    audio.volume=volume_progress.value;
    audio.play();
    changeicon();
    play_bar_update();

})
 
song_list.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        num=ele.getElementsByClassName('number')[0].innerText;
        console.log(num);


        if(audio.paused || audio.currentTime<=0)  {
            audio=new Audio(songs[num-1].url); 
            audio.play();
            changeicon();
        }
        else{
            audio.pause();
            audio=new Audio(songs[num-1].url);
            audio.play();
            changeicon();

        }

        
        play_bar_update();
       
    })
})

function updatePlayBar(){
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        bar2[0].style.width = `${progressPercent}%`;
        progress.value = progressPercent;

        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime % 60);
        if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
        start_time.innerText = `${currentMinutes}:${currentSeconds}`;
    }

    audio.volume=volume_progress.value/100;

}

function play_bar_update(){
    playbar_poster[0].src=songs[num-1].poster;
    song_name[0].innerText=songs[num-1].title;
    song_artist[0].innerText=songs[num-1].artist;
    end_time.innerText=songs[num-1].duration;

    audio.addEventListener('timeupdate',updatePlayBar);
}


play_btn.addEventListener('click',()=>{


   if(audio.paused || audio.currentTime<=0)  {
        audio.play();
        changeicon();
    }
    else{
        audio.pause();
        changeicon();
 
    }
}) 
 

// PLAYBACK CODE HERE

play_back.addEventListener('click',()=>{
   
    if(num===1){
        num=5; //When number get 0 by clicking play back btn it initializedd to 5 
    }

    if(audio.paused || audio.currentTime<=0)  {
        num--;
        audio=new Audio(songs[num-1].url); 
        audio.play();
        changeicon();

        play_bar_update();

    } 
    else{ 
        audio.pause(); 
        num--;   
        audio=new Audio(songs[num-1].url);
        audio.play();
        changeicon();

        play_bar_update();

    }

})



play_forward.addEventListener('click',()=>{
   
    if(num===song_list.length){
        num=5; //When number get songlist length by clicking play back btn it initializedd to 5 
    }

 
    if(audio.paused || audio.currentTime<=0)  {
        num++; 
        audio=new Audio(songs[num-1].url);  
        audio.play();
        changeicon(); 

        play_bar_update();

    } 
    else{ 
        audio.pause(); 
        num++;
        audio=new Audio(songs[num-1].url);
        audio.play();
        changeicon();

        play_bar_update();

    }

})

pause_btn.addEventListener('click',()=>{
    audio.pause();
    changeicon();
})

 
volume_progress.addEventListener('change',()=>{

    volume_bar.style.width=`${volume_progress.value}%`; 
    audio.volume= volume_progress.value/100; 
})

// Function to reset progress bar
function resetProgressBar() {
    bar2[0].style.width = '0';
    progress.value = 0;
    start_time.innerText = '0:00';
}


// Event listener to update progress bar as song plays


// Event listener for progress bar input
progress.addEventListener('input', (e) => {
    const seekTime = (audio.duration / 100) * e.target.value;
    audio.currentTime = seekTime;
    bar2[0].style.width = `${e.target.value}%`;
    audio.play();
    changeicon();

});
