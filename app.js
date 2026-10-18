const BANK = [
{id:"s1",cat:"series",name:"Series numéricas",level:1,q:"¿Qué número continúa la serie? 2, 4, 6, 8, …",opts:["9","10","11","12"],a:1,why:"La serie aumenta de 2 en 2: 2, 4, 6, 8, 10."},
{id:"s2",cat:"series",name:"Series numéricas",level:1,q:"Completa la serie: 5, 10, 15, 20, …",opts:["22","24","25","30"],a:2,why:"Cada término aumenta en 5. El siguiente es 25."},
{id:"s3",cat:"series",name:"Series numéricas",level:2,q:"¿Qué número falta? 3, 6, 12, 24, …",opts:["36","42","48","54"],a:2,why:"Cada término se multiplica por 2: 24 × 2 = 48."},
{id:"s4",cat:"series",name:"Series numéricas",level:2,q:"Continúa: 21, 18, 15, 12, …",opts:["10","9","8","6"],a:1,why:"Se resta 3 en cada paso. 12 − 3 = 9."},
{id:"s5",cat:"series",name:"Series numéricas",level:3,q:"¿Qué número sigue? 2, 5, 11, 23, 47, …",opts:["84","93","95","96"],a:2,why:"Se multiplica por 2 y se suma 1: 47 × 2 + 1 = 95."},
{id:"s6",cat:"series",name:"Series numéricas",level:3,q:"Completa: 1, 4, 9, 16, 25, …",opts:["30","32","36","49"],a:2,why:"Son cuadrados perfectos: 1², 2², 3², 4², 5². Sigue 6² = 36."},
{id:"m1",cat:"math",name:"Cálculo y problemas",level:1,q:"Un billete cuesta 18 €. ¿Cuánto cuestan 3 billetes al mismo precio?",opts:["36 €","48 €","54 €","60 €"],a:2,why:"18 × 3 = 54 €."},
{id:"m2",cat:"math",name:"Cálculo y problemas",level:1,q:"¿Cuánto es el 10 % de 250?",opts:["2,5","15","25","50"],a:2,why:"El 10 % equivale a dividir entre 10: 250 ÷ 10 = 25."},
{id:"m3",cat:"math",name:"Cálculo y problemas",level:2,q:"Un precio de 80 € baja un 15 %. ¿Cuál es el precio final?",opts:["65 €","68 €","70 €","72 €"],a:1,why:"El 15 % de 80 es 12. Precio final: 80 − 12 = 68 €."},
{id:"m4",cat:"math",name:"Cálculo y problemas",level:2,q:"Un tren recorre 180 km en 2 horas. ¿Cuál es su velocidad media?",opts:["60 km/h","80 km/h","90 km/h","100 km/h"],a:2,why:"Velocidad media = distancia ÷ tiempo = 180 ÷ 2 = 90 km/h."},
{id:"m5",cat:"math",name:"Cálculo y problemas",level:3,q:"Una cantidad aumenta de 240 a 300. ¿Qué porcentaje ha aumentado?",opts:["20 %","25 %","30 %","60 %"],a:1,why:"El aumento es 60. 60 ÷ 240 = 0,25, es decir, 25 %."},
{id:"m6",cat:"math",name:"Cálculo y problemas",level:3,q:"Una persona realiza 48 gestiones en 6 horas a ritmo constante. ¿Cuántas realizaría en 9 horas?",opts:["64","68","72","78"],a:2,why:"48 ÷ 6 = 8 gestiones por hora. En 9 horas: 8 × 9 = 72."},
{id:"l1",cat:"logic",name:"Lógica y deducción",level:1,q:"Todos los inspectores llevan identificación. Laura es inspectora. ¿Qué conclusión es válida?",opts:["Laura no lleva identificación","Laura lleva identificación","Todas las personas con identificación son inspectoras","No se puede concluir nada"],a:1,why:"Si todos los inspectores llevan identificación y Laura es inspectora, Laura lleva identificación."},
{id:"l2",cat:"logic",name:"Lógica y deducción",level:1,q:"¿Cuál no pertenece al grupo?",opts:["Círculo","Triángulo","Cuadrado","Kilómetro"],a:3,why:"Círculo, triángulo y cuadrado son figuras geométricas; kilómetro es una unidad de longitud."},
{id:"l3",cat:"logic",name:"Lógica y deducción",level:2,q:"Ana llega antes que Bruno. Bruno llega antes que Carla. ¿Quién llega la última?",opts:["Ana","Bruno","Carla","No se sabe"],a:2,why:"El orden es Ana, Bruno y Carla. Carla llega la última."},
{id:"l4",cat:"logic",name:"Lógica y deducción",level:2,q:"Si hoy es miércoles, ¿qué día será dentro de 10 días?",opts:["Viernes","Sábado","Domingo","Lunes"],a:1,why:"7 días después será miércoles; 3 días más tarde, sábado."},
{id:"l5",cat:"logic",name:"Lógica y deducción",level:3,q:"Todos los A son B. Ningún B es C. ¿Qué afirmación debe ser cierta?",opts:["Algunos A son C","Ningún A es C","Todos los C son A","Todos los B son A"],a:1,why:"Si A está contenido en B y ningún B pertenece a C, ningún A puede pertenecer a C."},
{id:"l6",cat:"logic",name:"Lógica y deducción",level:3,q:"En una fila, Pablo está delante de Inés y detrás de Marcos. ¿Quién está más adelantado?",opts:["Pablo","Inés","Marcos","No se puede saber"],a:2,why:"Pablo está detrás de Marcos; por tanto, Marcos está más adelantado."},
{id:"v1",cat:"verbal",name:"Razonamiento verbal",level:1,q:"Elige el sinónimo más cercano de «preciso».",opts:["Exacto","Confuso","Tardío","Escaso"],a:0,why:"«Preciso» puede significar exacto o determinado."},
{id:"v2",cat:"verbal",name:"Razonamiento verbal",level:1,q:"Elige el antónimo de «frecuente».",opts:["Habitual","Común","Esporádico","Repetido"],a:2,why:"«Esporádico» significa ocasional, lo contrario de frecuente."},
{id:"v3",cat:"verbal",name:"Razonamiento verbal",level:2,q:"Completa la analogía: Libro es a leer como mapa es a…",opts:["Dibujar","Orientarse","Escribir","Medir"],a:1,why:"Un libro sirve para leer; un mapa sirve para orientarse."},
{id:"v4",cat:"verbal",name:"Razonamiento verbal",level:2,q:"¿Qué palabra no encaja?",opts:["Andén","Taquilla","Billete","Manzana"],a:3,why:"Las tres primeras se relacionan con el transporte ferroviario; «manzana» no."},
{id:"v5",cat:"verbal",name:"Razonamiento verbal",level:3,q:"«Aunque el servicio se retrasó, la información a los viajeros fue puntual». ¿Qué se afirma?",opts:["No hubo retraso","La información llegó a tiempo pese al retraso","Los viajeros no recibieron información","El servicio fue puntual"],a:1,why:"La frase distingue el retraso del servicio de la puntualidad de la información."},
{id:"v6",cat:"verbal",name:"Razonamiento verbal",level:3,q:"Elige la palabra más cercana a «diligente».",opts:["Descuidado","Aplicado","Indiferente","Lento"],a:1,why:"«Diligente» describe a quien actúa con cuidado, rapidez y responsabilidad; «aplicado» es la opción más cercana."},
{id:"a1",cat:"attention",name:"Atención y precisión",level:1,q:"¿Qué código es exactamente igual a AB7K-291?",opts:["AB7K-219","AB7K-291","A87K-291","AB7X-291"],a:1,why:"Solo la segunda opción conserva todos los caracteres y su orden."},
{id:"a2",cat:"attention",name:"Atención y precisión",level:1,q:"¿Cuántas veces aparece la letra A en «BANANA»?",opts:["1","2","3","4"],a:2,why:"BANANA contiene tres letras A."},
{id:"a3",cat:"attention",name:"Atención y precisión",level:2,q:"Señala el código diferente de los demás.",opts:["RT-4836","RT-4836","RT-4386","RT-4836"],a:2,why:"El tercer código cambia el orden de los dígitos 3 y 8."},
{id:"a4",cat:"attention",name:"Atención y precisión",level:2,q:"En la secuencia 4 7 4 9 4 2 4 6, ¿cuántos números 4 aparecen?",opts:["2","3","4","5"],a:2,why:"El número 4 aparece en las posiciones 1, 3, 5 y 7: cuatro veces."},
{id:"a5",cat:"attention",name:"Atención y precisión",level:3,q:"¿Qué pareja de códigos es idéntica?",opts:["NQ-5081 / NQ-5801","LM-7429 / LM-7429","PR-6638 / PR-6683","XT-0194 / XT-0914"],a:1,why:"Solo la pareja LM-7429 / LM-7429 es idéntica."},
{id:"a6",cat:"attention",name:"Atención y precisión",level:3,q:"¿Cuál de estos códigos contiene dos dígitos iguales consecutivos?",opts:["C-1824","D-4557","E-7319","F-2684"],a:1,why:"En D-4557, los dígitos 5 y 5 aparecen consecutivamente."}
];
const CAT_LABEL={series:"Series numéricas",math:"Cálculo y problemas",logic:"Lógica y deducción",verbal:"Razonamiento verbal",attention:"Atención y precisión"};
const $=id=>document.getElementById(id);
let session=[],idx=0,answers=[],startedAt=0,tick=null,levelMode="adaptive",currentLevel=1,correctStreak=0,wrongStreak=0,answered=false;
function readStore(){try{return JSON.parse(localStorage.getItem("renfeN2Progress")||'{"sessions":[],"answered":0,"correct":0,"streak":0}')}catch(e){return {sessions:[],answered:0,correct:0,streak:0}}}
function writeStore(s){localStorage.setItem("renfeN2Progress",JSON.stringify(s));renderStats()}
function renderStats(){const s=readStore();$("statDone").textContent=s.answered;$("statAccuracy").textContent=s.answered?Math.round(s.correct/s.answered*100)+"%":"—";$("statStreak").textContent=s.streak||0}
function showTab(tab){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));["home","progress","about","quiz","results"].forEach(id=>$(id).classList.toggle("hidden",id!==tab));if(tab==="progress")renderProgress()}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{$("mode").value=b.dataset.mode;startSession()}));
$("startBtn").addEventListener("click",startSession);
function startSession(){
const mode=$("mode").value,count=Number($("count").value);levelMode=$("level").value;currentLevel=levelMode==="adaptive"?1:Number(levelMode);
let pool=BANK.filter(q=>mode==="mixed"||q.cat===mode);
if(levelMode!=="adaptive")pool=pool.filter(q=>q.level===currentLevel);
pool=shuffle(pool);session=[];
while(session.length<count){let candidates=pool.filter(q=>!session.some(x=>x.id===q.id));if(!candidates.length){pool=shuffle(BANK.filter(q=>mode==="mixed"||q.cat===mode));candidates=pool.filter(q=>!session.some(x=>x.id===q.id));}if(!candidates.length)break;session.push(candidates[0]);}
idx=0;answers=[];correctStreak=0;wrongStreak=0;startedAt=Date.now();answered=false;
clearInterval(tick);tick=setInterval(updateTimer,1000);showTab("quiz");renderQuestion();
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function updateTimer(){const sec=Math.floor((Date.now()-startedAt)/1000);$("timer").textContent=fmt(sec)}
function fmt(sec){return Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0")}
function renderQuestion(){
if(idx>=session.length){finish();return}
const q=session[idx];answered=false;$("qCounter").textContent=`Pregunta ${idx+1} de ${session.length}`;$("qLevel").textContent="Nivel "+(["","inicial","intermedio","avanzado"][q.level]);$("progressBar").style.width=(idx/session.length*100)+"%";$("qCategory").textContent=q.name;$("qText").textContent=q.q;$("feedback").className="feedback hidden";$("feedback").textContent="";$("nextBtn").classList.add("hidden");$("options").innerHTML="";
q.opts.forEach((opt,i)=>{const b=document.createElement("button");b.className="option";b.innerHTML=`<span class="letter">${"ABCD"[i]}</span><span></span>`;b.querySelector("span:last-child").textContent=opt;b.addEventListener("click",()=>choose(i));$("options").appendChild(b)});
}
function choose(choice){
if(answered)return;answered=true;const q=session[idx],isCorrect=choice===q.a;answers.push({q,choice,isCorrect});document.querySelectorAll(".option").forEach((b,i)=>{b.disabled=true;if(i===q.a)b.classList.add("correct");if(i===choice&&!isCorrect)b.classList.add("wrong")});
$("feedback").className="feedback "+(isCorrect?"good":"bad");$("feedback").innerHTML=`<b>${isCorrect?"Correcto":"No es correcto"}.</b> ${escapeHtml(q.why)}`;$("nextBtn").classList.remove("hidden");$("nextBtn").textContent=idx===session.length-1?"Ver resultados":"Siguiente";
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("nextBtn").addEventListener("click",()=>{if(!answered)return;idx++;if(levelMode==="adaptive"&&idx<session.length){const last=answers[answers.length-1];if(last.isCorrect){correctStreak++;wrongStreak=0}else{wrongStreak++;correctStreak=0}if(correctStreak>=2){currentLevel=Math.min(3,currentLevel+1);correctStreak=0;let candidates=BANK.filter(q=>q.level===currentLevel&&($("mode").value==="mixed"||q.cat===$("mode").value)&&!session.some(x=>x.id===q.id));if(candidates.length)session[idx]=shuffle(candidates)[0]}else if(wrongStreak>=2){currentLevel=Math.max(1,currentLevel-1);wrongStreak=0;let candidates=BANK.filter(q=>q.level===currentLevel&&($("mode").value==="mixed"||q.cat===$("mode").value)&&!session.some(x=>x.id===q.id));if(candidates.length)session[idx]=shuffle(candidates)[0]}}renderQuestion()});
$("quitBtn").addEventListener("click",()=>{if(confirm("¿Terminar esta práctica y ver los resultados de las preguntas respondidas?"))finish()});
function finish(){clearInterval(tick);const duration=Math.floor((Date.now()-startedAt)/1000),correct=answers.filter(a=>a.isCorrect).length,total=answers.length,percent=total?Math.round(correct/total*100):0;
$("finalScore").textContent=percent+"%";$("finalCorrect").textContent=correct;$("finalWrong").textContent=total-correct;$("finalTime").textContent=fmt(duration);
$("resultSummary").textContent=percent>=80?"Buen resultado. Sube la dificultad o practica otra área.":percent>=60?"Base razonable. Revisa los errores antes de repetir.":"Dedica tiempo a entender las explicaciones y repite esta área.";
const mistakes=answers.filter(a=>!a.isCorrect);$("mistakes").innerHTML=mistakes.length?mistakes.map((a,i)=>`<div class="history-row"><div><b>${escapeHtml(a.q.q)}</b><div class="muted">Tu respuesta: ${escapeHtml(a.q.opts[a.choice])} · Correcta: ${escapeHtml(a.q.opts[a.q.a])}</div><div class="muted">${escapeHtml(a.q.why)}</div></div></div>`).join(""):'<p class="muted">Sin errores en esta sesión.</p>';
const store=readStore();store.answered+=total;store.correct+=correct;store.streak=total&&correct===total?(store.streak||0)+1:0;store.sessions.unshift({date:new Date().toLocaleString("es-ES",{dateStyle:"short",timeStyle:"short"}),correct,total,percent,duration,mode:$("mode").value});store.sessions=store.sessions.slice(0,20);writeStore(store);showTab("results");}
$("againBtn").addEventListener("click",()=>showTab("home"));$("progressBtn").addEventListener("click",()=>showTab("progress"));$("backHome").addEventListener("click",()=>showTab("home"));
function renderProgress(){const s=readStore();$("pSessions").textContent=s.sessions.length;$("pAnswered").textContent=s.answered;$("pAccuracy").textContent=s.answered?Math.round(s.correct/s.answered*100)+"%":"—";$("history").innerHTML=s.sessions.length?s.sessions.map(x=>`<div class="history-row"><div><b>${escapeHtml(x.date)}</b><div class="muted">${escapeHtml(CAT_LABEL[x.mode]||"Simulacro mixto")} · ${x.correct}/${x.total} aciertos · ${fmt(x.duration)}</div></div><b>${x.percent}%</b></div>`).join(""):'<p class="muted">Todavía no hay sesiones guardadas. Completa una práctica para empezar.</p>'}
$("resetProgress").addEventListener("click",()=>{if(confirm("¿Borrar todo el progreso guardado en este dispositivo?")){localStorage.removeItem("renfeN2Progress");renderProgress();renderStats()}});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
renderStats();
