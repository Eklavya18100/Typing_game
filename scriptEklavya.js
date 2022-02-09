const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');
// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];let time=10;
    let score=0;
    let difficulty='Easy';
   
  let timeinterval =setInterval(updateTime,1000);
  function updateTime(){
      
    time--;
    timeEl.innerHTML=time+'s';
    if(time===0){
        clearInterval(timeinterval);
        endgameEl.innerHTML=`
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
      `;
      endgameEl.style.display = 'flex';
    }
   
  }
  function getRandom(){
      return words[Math.floor(Math.random()*words.length)];
  }
  function addWord(){
    let a=getRandom();
    word.innerHTML=a;
  }
  addWord();
  text.addEventListener('input',e=>{
      let val=text.value;
      if(val===word.innerHTML){
          addWord();
          text.value='';
          if(difficulty==='Easy'){
            time+=5;
        }
        else if(val==='Medium'){
          time+=4;
      }
      else{
          time+=2;
      }
      updateTime();
          score++;
          scoreEl.innerHTML=score;
      }
  })
  settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
  });
  difficultySelect.addEventListener('change',(e)=>{
       difficulty=e.target.value;
     

  })
