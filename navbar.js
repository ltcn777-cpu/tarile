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
var side=P.map(function(p){var on=p.f===cur;if(!p.h)return '<span class="sl off"><b>'+p.n+'</b>'+p.t+'<em>Sắp ra mắt</em></span>';return '<a class="sl'+(on?' on':'')+'" href="'+p.h+'"><b>'+p.n+'</b>'+p.t+'</a>'+(p.s?p.s.map(function(s){return '<a class="ss" href="'+(on?'':p.f)+s[1]+'">'+s[0]+'</a>'}).join(''):'')}).join('');
var css='#hd{gap:14px}#hd::after{background:rgba(0,229,255,.22);animation:none}'
+'.hl{display:flex;align-items:center;gap:16px}'
+'.sbt{flex:none;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:44px;height:40px;padding:0;border:1px solid rgba(0,229,255,.45);background:rgba(0,229,255,.1);cursor:pointer;clip-path:polygon(15% 0,100% 0,85% 100%,0 100%);transition:background .3s}'
+'.sbt i{display:block;width:20px;height:2px;background:#00E5FF;transition:background .3s,width .3s}.sbt i:nth-child(2){width:14px;align-self:flex-start;margin-left:12px}'
+'.sbt:hover,.sbt:focus-visible{background:#00E5FF;outline:none}.sbt:hover i,.sbt:focus-visible i{background:#05070D}.sbt:hover i:nth-child(2){width:20px}'
+'.beam{position:absolute;left:-30%;bottom:0;width:30%;height:3px;pointer-events:none;background:linear-gradient(90deg,transparent,#00E5FF,#fff,#00E5FF,transparent);box-shadow:0 0 12px #00E5FF,0 0 22px #0066FF;animation:beam 3.2s cubic-bezier(.4,0,.2,1) infinite}'
+'@keyframes beam{to{left:110%}}'
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
+'.sbf{padding-top:14px;border-top:1px solid rgba(255,255,255,.1);font-size:.75rem;color:#94a3b8}.sbf p{margin:0 0 4px}.sbf b{color:#00E5FF}'
+'@media(prefers-reduced-motion:reduce){.beam{animation:none;left:35%}.sb,.sbo{transition:none}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
document.body.insertAdjacentHTML('afterbegin','<header id="hd"><div class="hl"><button class="sbt" id="sbOpen" type="button" aria-label="Mở thanh bên" aria-expanded="false" aria-controls="sb"><i></i><i></i><i></i></button><a class="logo" href="index.html" aria-label="TARI LE – WSB"><img class="logo-img" src="logo-tari%20le.jpg" alt="" width="44" height="44" decoding="async" onerror="this.style.display=\'none\'"><span class="lt"><b id="brandTitle" data-text="TARI LE">TARI LE</b><small id="brandSub" data-text="WSB">WSB</small></span></a></div><nav id="nav" aria-label="Menu chính">'+nav+'</nav><i class="beam"></i></header><div class="sbo" id="sbo"></div><aside class="sb" id="sb" aria-label="Thanh bên" aria-hidden="true"><div class="sbh"><span>SYSTEM // MENU</span><button id="sbX" type="button">✕ ĐÓNG</button></div><div class="sbl">'+side+'</div><div class="sbf"><p>TRẠNG THÁI: <b>● TRỰC TUYẾN</b></p><p>TARI LE // WSB NETWORK</p></div></aside>');
var sb=document.getElementById('sb'),so=document.getElementById('sbo'),ob=document.getElementById('sbOpen');
function tg(o){sb.classList.toggle('open',o);so.classList.toggle('show',o);sb.setAttribute('aria-hidden',!o);ob.setAttribute('aria-expanded',o);document.documentElement.style.overflow=o?'hidden':'';(o?document.getElementById('sbX'):ob).focus()}
ob.onclick=function(){tg(!sb.classList.contains('open'))};document.getElementById('sbX').onclick=function(){tg(false)};so.onclick=function(){tg(false)};
sb.addEventListener('click',function(e){if(e.target.closest('a'))tg(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&sb.classList.contains('open'))tg(false)});
})();
