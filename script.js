const envelope=document.getElementById('envelope');
const openBtn=document.getElementById('openBtn');
const closeBtn=document.getElementById('closeBtn');
const hint=document.getElementById('hint');
const confetti=document.getElementById('confetti');
function celebrate(){
 const icons=['♡','✿','✧','🌸','💕','✨'];
 for(let i=0;i<38;i++){const p=document.createElement('span');p.className='confetti-piece';p.textContent=icons[Math.floor(Math.random()*icons.length)];p.style.left=(Math.random()*100)+'%';p.style.animationDelay=(Math.random()*1.1)+'s';p.style.animationDuration=(2.5+Math.random()*1.6)+'s';confetti.appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true});}
}
function openLetter(){if(envelope.classList.contains('open'))return;envelope.classList.add('open');openBtn.hidden=true;closeBtn.hidden=false;hint.textContent='A semester may end, but the lessons and gratitude stay. ♡';celebrate();}
function closeLetter(){envelope.classList.remove('open');closeBtn.hidden=true;openBtn.hidden=false;hint.textContent='A small note to celebrate the end of our first semester.';}
openBtn.addEventListener('click',openLetter);closeBtn.addEventListener('click',closeLetter);envelope.addEventListener('click',openLetter);envelope.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLetter();}});
