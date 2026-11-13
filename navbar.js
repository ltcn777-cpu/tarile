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
/* SÓNG PHỔ LĂNG KÍNH: dải sóng + hàng thanh equalizer chạy băng chuyền, màu trượt Bạc → Xanh băng → Tím điện, nhịp "beat" và hạt sáng bay lên từ đỉnh */
var hd=document.getElementById('hd'),cv=document.createElement('canvas'),cx=cv.getContext('2d'),H=60,BY=30,W=0,dpr=1,t=0,last=0,pk=[],ps=[],
still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,
ST=[[0,[255,255,255]],[.25,[0,229,255]],[.5,[112,0,255]],[.75,[0,229,255]],[1,[255,255,255]]];
cv.className='bolt';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);
function R(a,b){return a+Math.random()*(b-a)}
function col(u){u=u-Math.floor(u);for(var i=1;i<ST.length;i++){if(u<=ST[i][0]){var a=ST[i-1],b=ST[i],f=(u-a[0])/(b[0]-a[0]);return[a[1][0]+(b[1][0]-a[1][0])*f,a[1][1]+(b[1][1]-a[1][1])*f,a[1][2]+(b[1][2]-a[1][2])*f]}}return ST[0][1]}
function rgba(c,a){return'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+a+')'}
function place(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';cv.style.top=(hd.getBoundingClientRect().bottom-BY)+'px';cx.setTransform(dpr,0,0,dpr,0,0);pk=[];if(still)draw(0)}
function draw(dt){
 t+=dt;cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
 var SP=7,n=Math.ceil(W/SP)+1,i,x,u,c,e,h,beat=Math.pow(Math.max(0,Math.sin(t*2.6)),8)*.45,flow=t*.07;
 /* 1. Thanh equalizer: sóng lan từ trái sang phải, màu trượt cùng chiều */
 for(i=0;i<n;i++){x=i*SP;e=Math.min(1,x/90,(W-x)/90);if(e<=0)continue;
  h=2+16*(.5+.5*Math.sin(x*.021-t*2.4))*(.55+.45*Math.sin(x*.0065+t*.8))*(1+beat)+1.5*Math.sin(x*.19+t*9)*(.5+.5*Math.sin(t*3+i));h=Math.max(1.5,Math.min(h,26));
  c=col(x/W*1.4-flow);
  cx.lineCap='round';cx.lineWidth=4.5;cx.strokeStyle=rgba(c,.10*e);cx.beginPath();cx.moveTo(x,BY-h);cx.lineTo(x,BY+h);cx.stroke();
  cx.lineWidth=1.6;cx.strokeStyle=rgba(c,.8*e);cx.beginPath();cx.moveTo(x,BY-h);cx.lineTo(x,BY+h);cx.stroke();
  /* chấm đỉnh rơi chậm (peak hold) */
  pk[i]=Math.max(h,(pk[i]||0)-.35);
  cx.fillStyle='rgba(255,255,255,'+.9*e+')';cx.fillRect(x-.9,BY-pk[i]-3,1.8,1.8);
  if(h>17&&ps.length<140&&Math.random()<.05)ps.push({x:x,y:BY-h-2,vx:R(.2,1.1),vy:R(-1.1,-.3),l:1,d:R(.012,.03),c:c})}
 /* 2. Dải sóng sin chính, gradient trượt */
 var g=cx.createLinearGradient(0,0,W,0),m=Math.ceil(W/40),k;for(k=0;k<=m;k++)g.addColorStop(k/m,rgba(col(k/m*1.4-flow),1));
 function wave(){cx.beginPath();for(var X=0;X<=W;X+=3){var Y=BY+Math.sin(X*.015-t*1.7)*(5+3*beat)+Math.cos(X*.04+t*2.3)*2.4;X?cx.lineTo(X,Y):cx.moveTo(X,Y)}}
 wave();cx.lineWidth=7;cx.strokeStyle=g;cx.globalAlpha=.16;cx.stroke();
 wave();cx.lineWidth=2;cx.globalAlpha=1;cx.strokeStyle=g;cx.shadowColor='#00E5FF';cx.shadowBlur=12;cx.stroke();cx.shadowBlur=0;
 /* 3. Hạt sáng tách khỏi đỉnh và tan dần */
 ps=ps.filter(function(p){p.x+=p.vx;p.y+=p.vy;p.l-=p.d;if(p.l<=0)return false;cx.fillStyle=rgba(p.c,p.l);cx.fillRect(p.x,p.y,1.8,1.8);return true});
 cx.globalCompositeOperation='source-over'}
function frame(now){requestAnimationFrame(frame);var dt=Math.min((now-last)/1000,.05);last=now;if(document.hidden)return;draw(dt)}
place();addEventListener('resize',place);setTimeout(place,1000);if(window.ResizeObserver)new ResizeObserver(place).observe(hd);
if(!still)requestAnimationFrame(function(s){last=s;frame(s)});
})();
