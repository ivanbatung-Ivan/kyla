const envelope=document.getElementById('envelope');
const openBtn=document.getElementById('openBtn');
const overlay=document.getElementById('letterOverlay');
const closeBtn=document.getElementById('xClose');
const hint=document.getElementById('hint');
const typed=document.getElementById('typedMessage');
const caret=document.getElementById('caret');
const closing=document.getElementById('closing');
const signature=document.getElementById('signature');
const confetti=document.getElementById('confetti');

const message = `Since tapos na ang first semester, gusto ko lang po kayong pasalamatan. Thank you po sa lahat ng effort, patience, and time na binigay ninyo sa amin this sem.

Thank you rin po sa mga lessons, reminders, advice, and even sa mga moments na challenging pero marami kaming natutunan. We appreciate how you guide us and help us understand things better. Hindi man po namin nasasabi palagi, malaking bagay po yung dedication ninyo.

Hopefully, you get to enjoy a well-deserved break. Sana po alam ninyo na appreciated kayo, not just as a teacher, but as someone who made this semester a little more meaningful.`;

let typingTimer=null;
function celebrate(){
 const icons=['♡','✿','✧','🌸','💕','✨'];
 for(let i=0;i<34;i++){const p=document.createElement('span');p.className='confetti-piece';p.textContent=icons[Math.floor(Math.random()*icons.length)];p.style.left=(Math.random()*100)+'%';p.style.animationDelay=(Math.random()*.8)+'s';p.style.animationDuration=(2.5+Math.random()*1.4)+'s';confetti.appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true});}
}
function typeMessage(){
 clearInterval(typingTimer);typed.textContent='';closing.hidden=true;signature.hidden=true;caret.hidden=false;
 let i=0;
 typingTimer=setInterval(()=>{
   typed.textContent=message.slice(0,i+1);i++;
   if(i>=message.length){clearInterval(typingTimer);caret.hidden=true;closing.hidden=false;signature.hidden=false;}
 },22);
}
function openLetter(){
 envelope.classList.add('open');overlay.classList.add('show');overlay.setAttribute('aria-hidden','false');
 openBtn.hidden=true;hint.textContent='Your thank-you note is ready. ♡';typeMessage();celebrate();
}
function closeLetter(){
 clearInterval(typingTimer);overlay.classList.remove('show');overlay.setAttribute('aria-hidden','true');
 envelope.classList.remove('open');openBtn.hidden=false;hint.textContent='Tap the envelope and watch your message appear.';
}
openBtn.addEventListener('click',openLetter);envelope.addEventListener('click',openLetter);
envelope.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLetter();}});
closeBtn.addEventListener('click',closeLetter);
overlay.addEventListener('click',e=>{if(e.target===overlay)closeLetter();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('show'))closeLetter();});
