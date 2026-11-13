/* NAVBAR DÙNG CHUNG: sửa menu ở đây, mọi trang tự cập nhật.
   Khi tạo xong trang mới, điền đường dẫn vào "h" (ví dụ h:'am-nhac.html') là mục đó bật sáng. */
(function(){
var P=[
 {n:'01',t:'Giới Thiệu',h:'index.html#gioi-thieu',f:'index.html'},
 {n:'02',t:'Quân Đoàn UZI',h:'quan-doan-uzi.html',f:'quan-doan-uzi.html',s:[['5 Quân Đoàn Anh Em','#doi'],['Sự Kiện & Video','#su-kien'],['Giải Đấu & Thành Tích','#giai-dau'],['Luật & Địa Cầu Check-in','#luat'],['Bảng Xếp Hạng','#vinh'],['Gia Nhập','#join']]},
 {n:'03',t:'Âm Nhạc',h:'',f:'am-nhac.html'},
 {n:'04',t:'Games',h:'',f:'games.html'},
 {n:'05',t:'Học Tập',h:'',f:'hoc-tap.html'},
 {n:'06',t:'Kênh',h:'',f:'kenh.html'}
];
var cur=location.pathname.split('/').pop()||'index.html';
var nav=P.map(function(p,i){var on=p.f===cur;return p.h?'<a'+(on?' class="on"':'')+' href="'+p.h+'" style="--i:'+i+'"><i>'+p.n+'</i><span>'+p.t+'</span></a>':'<a class="off" aria-disabled="true" tabindex="-1" title="Sắp ra mắt" style="--i:'+i+'"><i>'+p.n+'</i><span>'+p.t+'</span></a>'}).join('');
var side=P.map(function(p,i){var on=p.f===cur;if(!p.h)return '<span class="sl off"><b>'+p.n+'</b>'+p.t+'<em>Sắp ra mắt</em></span>';var a='<a class="sl'+(on?' on':'')+'" href="'+p.h+'"><b>'+p.n+'</b>'+p.t+'</a>';if(!p.s)return a;var id='sgm'+i;return '<div class="sg'+(on?' open cur':'')+'"><div class="sgr">'+a+'<button class="sga" type="button" aria-label="Mở hoặc đóng mục con của '+p.t+'" aria-expanded="'+on+'" aria-controls="'+id+'"><span>▾</span></button></div><div class="sgm" id="'+id+'"><div>'+p.s.map(function(s){return '<a class="ss" href="'+(on?'':p.f)+s[1]+'">'+s[0]+'</a>'}).join('')+'</div></div></div>'}).join('');
var css='#hd{gap:14px}#hd::after{background:linear-gradient(90deg,rgba(160,190,235,.12),rgba(210,225,255,.38),rgba(160,190,235,.12));animation:none}'
+'.hl{display:flex;align-items:center;gap:16px}'
+'.sbt{flex:none;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:44px;height:40px;padding:0;border:1px solid rgba(0,229,255,.45);background:rgba(0,229,255,.1);cursor:pointer;clip-path:polygon(15% 0,100% 0,85% 100%,0 100%);transition:background .3s}'
+'.sbt i{display:block;width:20px;height:2px;background:#00E5FF;transition:background .3s,width .3s}.sbt i:nth-child(2){width:14px;align-self:flex-start;margin-left:12px}'
+'.sbt:hover,.sbt:focus-visible{background:#00E5FF;outline:none}.sbt:hover i,.sbt:focus-visible i{background:#05070D}.sbt:hover i:nth-child(2){width:20px}'
+'.bolt{position:fixed;left:0;width:100%;z-index:51;pointer-events:none}'
+'@media(max-width:980px){#hd nav{display:none}}'
+'.sbo{position:fixed;inset:0;z-index:99;background:rgba(0,0,0,.65);backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .3s}.sbo.show{opacity:1;pointer-events:auto}'
+'.sb{position:fixed;top:0;left:0;bottom:0;z-index:100;width:min(300px,86vw);display:flex;flex-direction:column;padding:24px;background:rgba(7,11,20,.96);backdrop-filter:blur(20px);border-right:1px solid rgba(0,229,255,.35);font-family:"Chakra Petch","Be Vietnam Pro",sans-serif;visibility:hidden;transform:translateX(-105%);transition:transform .35s cubic-bezier(.25,1,.5,1),visibility .35s}.sb.open{visibility:visible;transform:none}'
+'.sbh{display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.1)}.sbh span{font-size:.8rem;letter-spacing:.2em;color:#00E5FF}'
+'.sbh button{padding:4px 10px;border:1px solid #FF2A85;background:transparent;color:#FF2A85;font:700 .8rem inherit;font-family:inherit;cursor:pointer}.sbh button:hover,.sbh button:focus-visible{background:#FF2A85;color:#fff;outline:none}'
+'.sbl{flex:1;display:flex;flex-direction:column;gap:6px;margin:18px 0;overflow:auto}'
+'.sl{display:block;padding:12px 14px;font-weight:700;color:#E2E8F0;background:rgba(255,255,255,.03);border-left:3px solid transparent;transition:all .2s}.sl b{margin-right:8px;color:#00E5FF}'
+'a.sl:hover,a.sl:focus-visible,.sl.on{background:rgba(0,229,255,.12);border-left-color:#00E5FF;padding-left:20px;color:#fff;outline:none}'
+'.sl.off{color:#64748b;cursor:not-allowed}.sl em{float:right;font-size:.7rem;font-style:normal;letter-spacing:.1em;color:#475569}'
+'.ss{display:block;margin-left:22px;padding:7px 14px;font-size:.85rem;color:#94a3b8;border-left:1px solid rgba(0,229,255,.25);transition:all .2s}.ss:hover,.ss:focus-visible{color:#00E5FF;padding-left:20px;outline:none}'
+'.sgr{display:flex;align-items:stretch;gap:2px}.sgr .sl{flex:1}'
+'.sga{flex:none;width:46px;padding:0;border:0;background:rgba(255,255,255,.03);color:#00E5FF;font-size:.85rem;cursor:pointer;transition:background .2s,color .2s}.sga span{display:inline-block;transition:transform .3s}'
+'.sg.cur .sga{background:rgba(0,229,255,.12)}.sga:hover,.sga:focus-visible{background:#00E5FF;color:#05070D;outline:none}.sg.open .sga span{transform:rotate(180deg)}'
+'.sgm{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}.sg.open .sgm{grid-template-rows:1fr}'
+'.sgm>div{min-height:0;overflow:hidden;visibility:hidden;transition:visibility .3s}.sg.open .sgm>div{visibility:visible}'
+'.sgm .ss:first-child{margin-top:6px}.sgm .ss:last-child{margin-bottom:4px}'
+'.sbf{padding-top:14px;border-top:1px solid rgba(255,255,255,.1);font-size:.75rem;color:#94a3b8}.sbf p{margin:0 0 4px}.sbf b{color:#00E5FF}'
+'@media(prefers-reduced-motion:reduce){.sb,.sbo,.sgm,.sga span{transition:none}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
document.body.insertAdjacentHTML('afterbegin','<header id="hd"><div class="hl"><button class="sbt" id="sbOpen" type="button" aria-label="Mở thanh bên" aria-expanded="false" aria-controls="sb"><i></i><i></i><i></i></button><a class="logo" href="index.html" aria-label="TARI LE – WSB"><img class="logo-img" src="logo-tari%20le.jpg" alt="" width="44" height="44" decoding="async" onerror="this.style.display=\'none\'"><span class="lt"><b id="brandTitle" data-text="TARI LE">TARI LE</b><small id="brandSub" data-text="WSB">WSB</small></span></a></div><nav id="nav" aria-label="Menu chính">'+nav+'</nav></header><div class="sbo" id="sbo"></div><aside class="sb" id="sb" aria-label="Thanh bên" aria-hidden="true"><div class="sbh"><span>SYSTEM // MENU</span><button id="sbX" type="button">✕ ĐÓNG</button></div><div class="sbl">'+side+'</div><div class="sbf"><p>TRẠNG THÁI: <b>● TRỰC TUYẾN</b></p><p>TARI LE // WSB NETWORK</p></div></aside>');
var sb=document.getElementById('sb'),so=document.getElementById('sbo'),ob=document.getElementById('sbOpen');
function tg(o){sb.classList.toggle('open',o);so.classList.toggle('show',o);sb.setAttribute('aria-hidden',!o);ob.setAttribute('aria-expanded',o);document.documentElement.style.overflow=o?'hidden':'';(o?document.getElementById('sbX'):ob).focus()}
ob.onclick=function(){tg(!sb.classList.contains('open'))};document.getElementById('sbX').onclick=function(){tg(false)};so.onclick=function(){tg(false)};
sb.addEventListener('click',function(e){var b=e.target.closest('.sga');if(b){var o=b.closest('.sg').classList.toggle('open');b.setAttribute('aria-expanded',o);return}if(e.target.closest('a'))tg(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&sb.classList.contains('open'))tg(false)});
/* TIA SÉT BẠC: canvas cố định ngay mép dưới header, phân hình (midpoint displacement) + nhánh + tia lửa */
var hd=document.getElementById('hd'),cv=document.createElement('canvas'),cx=cv.getContext('2d'),H=60,BY=30,W=0,dpr=1,bolts=[],sparks=[],nextAt=0,still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
cv.className='bolt';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);
function place(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';cv.style.top=(hd.getBoundingClientRect().bottom-BY)+'px';cx.setTransform(dpr,0,0,dpr,0,0)}
place();addEventListener('resize',place);setTimeout(place,1000);if(window.ResizeObserver)new ResizeObserver(place).observe(hd);
function R(a,b){return a+Math.random()*(b-a)}
/* Đường gãy khúc: chia đôi liên tục, mỗi lần lệch ngẫu nhiên, biên độ giảm dần */
function jag(x1,y1,x2,y2,amp,d){var p=[[x1,y1],[x2,y2]],i,j,n;for(i=0;i<d;i++){n=[];for(j=0;j<p.length-1;j++){var a=p[j],b=p[j+1],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,o=R(-.5,.5)*amp;n.push(a,[(a[0]+b[0])/2-dy/l*o,(a[1]+b[1])/2+dx/l*o])}n.push(p[p.length-1]);p=n;amp*=.56}return p}
function mk(x1,x2){var main=jag(x1,BY,x2,BY+R(-4,4),R(22,34),7),br=[],i,k,s,a,l;for(i=3;i<main.length-3;i++){if(Math.random()<.085){s=main[i];a=Math.random()<.7?R(.15,1.1):R(-1.1,-.15);l=R(16,52);br.push({p:jag(s[0],s[1],s[0]+Math.cos(a)*l*(Math.random()<.5?1:-1),s[1]+Math.sin(a)*l,l*.5,4),w:R(.35,.6)})}}return{m:main,b:br}}
function strike(x1,x2,delay){var o=mk(x1,x2);bolts.push({x1:x1,x2:x2,t0:performance.now()+delay,g:o,last:0,dur:R(420,620),amp:1})}
function sp(x,y,n){for(var i=0;i<n;i++)sparks.push({x:x,y:y,vx:R(-2.2,2.2),vy:R(-1.8,1.4),l:1,d:R(.04,.09)})}
function path(p,f){var i,n=Math.max(2,Math.floor(p.length*f));cx.beginPath();cx.moveTo(p[0][0],p[0][1]);for(i=1;i<n&&i<p.length;i++)cx.lineTo(p[i][0],p[i][1])}
function line(p,f,k,I){cx.lineJoin='round';cx.lineCap='round';
 path(p,f);cx.shadowBlur=0;cx.strokeStyle='rgba(110,160,255,'+.10*I+')';cx.lineWidth=11*k;cx.stroke();
 path(p,f);cx.strokeStyle='rgba(185,210,255,'+.30*I+')';cx.lineWidth=4.2*k;cx.stroke();
 path(p,f);cx.shadowColor='rgba(200,225,255,.95)';cx.shadowBlur=10;cx.strokeStyle='rgba(255,255,255,'+Math.min(1,.97*I)+')';cx.lineWidth=1.5*k;cx.stroke();cx.shadowBlur=0}
function frame(now){
 requestAnimationFrame(frame);if(document.hidden)return;
 if(now>nextAt){var w=Math.random()<.16?R(W*.45,W*.8):R(160,520),x=R(-40,Math.max(0,W-w+40));strike(x,x+w,0);if(Math.random()<.4)strike(x+R(-30,30),x+w*R(.5,1),R(70,150));nextAt=now+R(650,2100)}
 cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
 bolts=bolts.filter(function(b){
  var t=now-b.t0;if(t<0)return true;if(t>b.dur)return false;
  var grow=Math.min(1,t/110),I;
  /* nhấp nháy: sáng gắt, tắt, sáng lại; 2 pha cuối mờ dần */
  if(t<110)I=1;else{var ph=Math.floor((t-110)/55)%4;I=[1,.35,.9,.5][ph]*(1-Math.max(0,(t-b.dur*.65)/(b.dur*.35)))}
  if(t-b.last>45&&t>110){b.g=mk(b.x1,b.x2);b.last=t}
  if(grow<1&&t<20){sp(b.x1,BY,4)}
  line(b.g.m,grow,1,I);b.g.b.forEach(function(br){if(grow>.35)line(br.p,Math.min(1,(grow-.35)/.65),br.w,I*.85)});
  if(t>=110&&!b.s){b.s=1;sp(b.x2,BY,7);sp(b.x1,BY,4)}
  if(grow<1){var hd2=b.g.m[Math.min(b.g.m.length-1,Math.floor(b.g.m.length*grow))];cx.beginPath();cx.arc(hd2[0],hd2[1],3,0,6.3);cx.fillStyle='rgba(255,255,255,'+I+')';cx.shadowColor='#fff';cx.shadowBlur=16;cx.fill();cx.shadowBlur=0}
  return true});
 sparks=sparks.filter(function(s){s.x+=s.vx;s.y+=s.vy;s.vy+=.12;s.l-=s.d;if(s.l<=0)return false;cx.fillStyle='rgba(225,238,255,'+s.l+')';cx.fillRect(s.x,s.y,1.6,1.6);return true});
 cx.globalCompositeOperation='source-over'}
if(!still)requestAnimationFrame(frame);
})();
