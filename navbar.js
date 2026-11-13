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
/* SÓNG PHỔ LĂNG KÍNH LẤP LÁNH (Holo-Spectrum Wave): dải sóng sin bạc-xanh băng-tím điện, vạch equalizer chạy băng chuyền, tia lửa li ti tách ra từ đỉnh sóng và sao 4 cánh nhấp nháy. Canvas thuần, nhẹ. */
var hd=document.getElementById('hd'),cv=document.createElement('canvas'),cx=cv.getContext('2d'),H=60,BY=30,W=0,dpr=1,t=0,last=0,sp=[],gl=[],
still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,
ST=[[0,[255,255,255]],[.25,[0,229,255]],[.5,[130,60,255]],[.75,[0,229,255]],[1,[255,255,255]]];
cv.className='bolt';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);
/* Lớp ánh sáng nền (Ambient Backlight): nằm trong header, dưới logo + menu (z-index:-1), chữ luôn sắc nét */
var bg=document.createElement('canvas'),bx=bg.getContext('2d'),HH=60;
bg.setAttribute('aria-hidden','true');bg.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;pointer-events:none';
hd.style.isolation='isolate';hd.insertBefore(bg,hd.firstChild);
function R(a,b){return a+Math.random()*(b-a)}
function col(u){u=u-Math.floor(u);for(var i=1;i<ST.length;i++){if(u<=ST[i][0]){var a=ST[i-1],b=ST[i],f=(u-a[0])/(b[0]-a[0]);return[a[1][0]+(b[1][0]-a[1][0])*f,a[1][1]+(b[1][1]-a[1][1])*f,a[1][2]+(b[1][2]-a[1][2])*f]}}return ST[0][1]}
function rgba(c,a){return'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+a+')'}
function place(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;var hr=hd.getBoundingClientRect();HH=Math.round(hr.height);cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';cv.style.top=(hr.bottom-BY)+'px';bg.width=W*dpr;bg.height=HH*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
 sp=[];gl=[];for(var i=0;i<Math.max(8,Math.round(W/110));i++)gl.push({x:R(0,W),y:R(-20,20),v:R(6,18),p:R(0,6.3),s:R(1.5,3.5),z:R(3,7)});
 if(still)draw(0)}
/* Độ cao sóng tại x: hai tần số sin chồng nhau tạo chuyển động phức hợp */
function wy(x,k){return BY+(Math.sin(x*.015-t*2.7+k)*4.5+Math.cos(x*.04+t*4.8+k)*2.2)}
function grad(al,flow){var g=cx.createLinearGradient(0,0,W,0),m=Math.ceil(W/40),k,e;for(k=0;k<=m;k++){e=Math.min(1,k/m*8,(1-k/m)*8);g.addColorStop(k/m,rgba(col(k/m*1.3-flow),al*e))}return g}
function ribbon(k,lw,al,flow){var X;cx.beginPath();for(X=0;X<=W;X+=3)X?cx.lineTo(X,wy(X,k)):cx.moveTo(X,wy(X,k));cx.lineWidth=lw;cx.strokeStyle=grad(al,flow);cx.stroke()}
function star(x,y,z,a,c){cx.strokeStyle=rgba(c,a);cx.lineWidth=1;cx.beginPath();cx.moveTo(x-z,y);cx.lineTo(x+z,y);cx.moveTo(x,y-z);cx.lineTo(x,y+z);cx.stroke();
 cx.fillStyle='rgba(255,255,255,'+a+')';cx.beginPath();cx.arc(x,y,1.3,0,6.3);cx.fill()}
/* Luồng sáng quét tuần hoàn trái -> phải: SWP_V = tốc độ (px/giây), SWP_L = độ dài vệt sáng, SWP_R = bán kính làm bừng sáng */
var SWP_V=340,SWP_L=260,SWP_R=110;
function swx(){return((t*SWP_V)%(W+SWP_L*2))-SWP_L}
function bst(x,sx){var d=Math.abs(x-sx);return d<SWP_R?1-d/SWP_R:0}
function drawBg(sx){
 bx.setTransform(dpr,0,0,dpr,0,0);bx.clearRect(0,0,W,HH);
 var x0=sx-SWP_L,x1=sx+40,sk=HH*.35;if(x1<0||x0>W)return;
 var g=bx.createLinearGradient(x0,0,x1,0);g.addColorStop(0,'rgba(0,229,255,0)');g.addColorStop(.6,'rgba(0,229,255,.05)');g.addColorStop(.9,'rgba(160,225,255,.14)');g.addColorStop(1,'rgba(255,255,255,0)');
 bx.fillStyle=g;bx.beginPath();bx.moveTo(x0+sk,0);bx.lineTo(x1+sk,0);bx.lineTo(x1,HH);bx.lineTo(x0,HH);bx.closePath();bx.fill();
 /* sáng dần về phía mép dưới, mờ hẳn ở phía trên */
 bx.globalCompositeOperation='destination-in';var v=bx.createLinearGradient(0,0,0,HH);v.addColorStop(0,'rgba(0,0,0,.3)');v.addColorStop(1,'rgba(0,0,0,1)');bx.fillStyle=v;bx.fillRect(0,0,W,HH);bx.globalCompositeOperation='source-over'}
function draw(dt){
 t+=dt;cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
 var flow=t*.07,sx0=swx(),X,i,h,e,c,b;
 /* 1. Vạch equalizer siêu mảnh chạy băng chuyền, cao thấp theo nhịp sóng */
 var sx=(t*28)%10;cx.lineWidth=1.2;
 for(X=sx;X<W;X+=10){e=Math.min(1,X/W*8,(1-X/W)*8);b=bst(X,sx0);h=Math.abs(Math.sin(X*.02-t*3.2))*9+2+b*7;c=col(X/W*1.3-flow);var y=wy(X,0);
  cx.strokeStyle=rgba(c,Math.min(1,(.7+b*.6)*e));cx.beginPath();cx.moveTo(X,y-h/2);cx.lineTo(X,y+h/2);cx.stroke()}
 /* 2. Dải sóng chính: lớp glow rộng + lõi sáng, thêm một dải phụ lệch pha */
 ribbon(0,7,.16,flow);ribbon(0,2,.95,flow);ribbon(2.1,1,.4,flow+.1);
 /* 2b. Luồng sáng quét: vệt cyan -> đầu trắng bạc, bám theo đường sóng + quầng sáng ở đầu */
 var a0=Math.max(0,sx0-SWP_L),a1=Math.min(W,sx0+30);
 if(a1>a0){var sg=cx.createLinearGradient(sx0-SWP_L,0,sx0+30,0);sg.addColorStop(0,'rgba(0,229,255,0)');sg.addColorStop(.65,'rgba(0,229,255,.85)');sg.addColorStop(.9,'rgba(255,255,255,1)');sg.addColorStop(1,'rgba(255,255,255,0)');
  [[8,.22],[2.5,1]].forEach(function(q){cx.beginPath();for(X=a0;X<=a1;X+=3)X>a0?cx.lineTo(X,wy(X,0)):cx.moveTo(X,wy(X,0));cx.lineWidth=q[0];cx.globalAlpha=q[1];cx.strokeStyle=sg;cx.stroke()});cx.globalAlpha=1;
  if(sx0>=0&&sx0<=W){var hy=wy(sx0,0),rg=cx.createRadialGradient(sx0,hy,0,sx0,hy,28);rg.addColorStop(0,'rgba(255,255,255,.85)');rg.addColorStop(.3,'rgba(0,229,255,.35)');rg.addColorStop(1,'rgba(0,229,255,0)');cx.fillStyle=rg;cx.fillRect(sx0-28,hy-28,56,56)}}
 /* 3. Tia lửa tách ra từ đỉnh sóng rồi tan dần */
 if(!still&&sp.length<110&&Math.random()<.9){X=R(0,W);sp.push({x:X,y:wy(X,0),vx:R(-8,8),vy:R(-34,-8)*(Math.random()<.35?-1:1),a:0,m:R(.9,1.9),r:R(.6,1.7)})}
 if(!still&&sx0>0&&sx0<W&&sp.length<160){for(i=0;i<2;i++)sp.push({x:sx0-R(0,40),y:wy(sx0,0),vx:R(-14,4),vy:R(-30,30),a:0,m:R(.5,1.2),r:R(.7,1.8)})}
 for(i=sp.length-1;i>=0;i--){var p=sp[i];p.a+=dt;if(p.a>=p.m){sp.splice(i,1);continue}
  p.x+=p.vx*dt;p.y+=p.vy*dt;var f=1-p.a/p.m;c=col(p.x/W*1.3-flow);
  cx.fillStyle=rgba(c,.9*f);cx.beginPath();cx.arc(p.x,p.y,p.r*(.5+f),0,6.3);cx.fill();
  cx.fillStyle=rgba(c,.18*f);cx.beginPath();cx.arc(p.x,p.y,p.r*3.2,0,6.3);cx.fill()}
 /* 4. Sao 4 cánh lấp lánh trôi chậm, nhấp nháy theo nhịp riêng */
 gl.forEach(function(g){g.x+=g.v*dt;if(g.x>W+8)g.x=-8;var bb=bst(g.x,sx0),a=Math.min(1,Math.pow(Math.max(0,Math.sin(t*g.s+g.p)),3)+bb*.8);if(a<.02)return;
  star(g.x,BY+g.y+Math.sin(t+g.p)*4,g.z*(.5+.5*a)*(1+bb*.6),a,col(g.x/W*1.3-flow))});
 drawBg(sx0);cx.globalCompositeOperation='source-over'}
function frame(now){requestAnimationFrame(frame);var dt=Math.min((now-last)/1000,.05);last=now;if(document.hidden)return;draw(dt)}
place();addEventListener('resize',place);setTimeout(place,1000);if(window.ResizeObserver)new ResizeObserver(place).observe(hd);
if(!still)requestAnimationFrame(function(s){last=s;frame(s)});
})();
