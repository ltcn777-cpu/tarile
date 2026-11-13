var nav=document.getElementById('nav'),bg=document.getElementById('bg');
function setOpen(o){nav.classList.toggle('open',o);bg.classList.toggle('x',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Đóng menu':'Mở menu')}
bg.addEventListener('click',function(){setOpen(!nav.classList.contains('open'))});
var links=[].slice.call(nav.querySelectorAll('a'));
/* Menu chỉ đổi mục sáng khi người dùng tự bấm, không tự chạy theo thanh cuộn */
nav.addEventListener('click',function(e){
  var a=e.target.closest('a');
  if(!a)return;
  if(a.classList.contains('off')){e.preventDefault();return}
  links.forEach(function(l){l.classList.toggle('on',l===a)});
  setOpen(false);
});
document.querySelector('.logo').addEventListener('click',function(){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#gioi-thieu')})});

/* Hiệu ứng hiện dần khi cuộn tới (không ảnh hưởng menu) */
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.05});
[].slice.call(document.querySelectorAll('section.s')).forEach(function(s){rv.observe(s)});

/* Vì sao: tạo ngẫu nhiên bằng box-shadow, bay chéo chậm và lặp liền mạch */
var T=Math.max(window.screen.width||1280,window.screen.height||800,1400);
function makeStars(el,count,colors){
  var base=[],out=[],i,k;
  for(i=0;i<count;i++){base.push([Math.floor(Math.random()*T),Math.floor(Math.random()*T),colors[Math.floor(Math.random()*colors.length)]])}
  [[0,0],[T,0],[0,T],[T,T]].forEach(function(o){
    base.forEach(function(s){out.push((s[0]+o[0])+'px '+(s[1]+o[1])+'px '+s[2])})
  });
  el.style.setProperty('--s',out.join(','));
  el.style.setProperty('--t',T+'px');
}
makeStars(document.getElementById('st1'),130,['#ffffff','#E0E6ED']);
makeStars(document.getElementById('st2'),50,['#ffffff','#9D4EDD','#00E5FF','#FFB300']);

/* Logo: cứ ~4 giây glitch rồi đổi qua lại giữa WSB và WASABI */
var logo=document.querySelector('.logo'),bT=document.getElementById('brandTitle'),bS=document.getElementById('brandSub'),isW=false;
function glitchSwap(){
  bT.classList.add('glitch-active');bS.classList.add('glitch-active');
  setTimeout(function(){
    isW=!isW;
    logo.classList.toggle('is-wasabi',isW);
    bS.textContent=isW?'WASABI':'WSB';
    bS.setAttribute('data-text',bS.textContent);
  },170);
  setTimeout(function(){bT.classList.remove('glitch-active');bS.classList.remove('glitch-active')},400);
}
setInterval(glitchSwap,4000);

/* Khung tiêu đề: viền chạy sáng khi lướt tới */
var tf=document.getElementById('titleFrame');
if(tf){new IntersectionObserver(function(es){es.forEach(function(e){tf.classList.toggle('in-view',e.isIntersecting)})},{threshold:.3}).observe(tf)}
/* Thẻ Profile: nghiêng 3D theo con trỏ chuột */
var arW=document.getElementById('arWrap'),arC=document.getElementById('arCard');
if(arW&&arC){
  arW.addEventListener('mousemove',function(e){
    var r=arW.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    var rx=((y-r.height/2)/(r.height/2))*-8,ry=((x-r.width/2)/(r.width/2))*8;
    arC.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg)';
  });
  arW.addEventListener('mouseleave',function(){arC.style.transform='rotateX(0deg) rotateY(0deg)'});
}

/* MY INTERESTS: nghiêng 3D theo chuột + ánh sáng phản chiếu */
[].slice.call(document.querySelectorAll('.card.i3d')).forEach(function(card){
  card.addEventListener('mousemove',function(e){
    var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    var rx=((y-r.height/2)/(r.height/2))*-12,ry=((x-r.width/2)/(r.width/2))*12;
    card.style.setProperty('--mx',x+'px');card.style.setProperty('--my',y+'px');
    card.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg) scale3d(1.03,1.03,1.03)';
  });
  card.addEventListener('mouseleave',function(){card.style.transform='rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'});
});

/* CURRENTLY WORKING ON: ánh sáng quét viền theo con trỏ + giải mã chữ */
var pjG=document.getElementById('pjGrid');
if(pjG){
  var pjs=[].slice.call(pjG.querySelectorAll('.pj'));
  pjG.addEventListener('mousemove',function(e){pjs.forEach(function(c){var r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')})});
  pjs.forEach(function(c){
    var el=c.querySelector('.dec'),t=el.textContent,sym='01<>/#$%&*';
    c.addEventListener('mouseenter',function(){
      clearInterval(el._d);var i=0;
      el._d=setInterval(function(){
        el.textContent=t.split('').map(function(ch,k){return(k<i||ch===' '||ch==='·')?ch:sym.charAt(Math.floor(Math.random()*sym.length))}).join('');
        if(i>=t.length){clearInterval(el._d);el.textContent=t}
        i+=1.2;
      },30);
    });
  });
}
/* Triết lý: 3 câu tự luân phiên */
var PQ=[
 {en:'“Without seeing reality clearly, wealth, kindness, and subtlety all become useless”',tag:'Tari Le // Strategic Vision 01',vi:'“Không Nhìn Rõ Thực Tế — Kinh Tế, Tử Tế, Tinh Tế Cũng Trở Nên Vô Dụng”',desc:'Tư duy cốt lõi trong điều hành và sáng tạo: mọi nguồn lực hay sự khéo léo đều chỉ phát huy giá trị khi được đặt trên nền tảng nhìn nhận đúng bản chất thực tế.'},
 {en:'“Don’t exaggerate what you hear, and never grow lazy when pressure rises”',tag:'Tari Le // Core Discipline 02',vi:'“Đừng Nghe 1 Kể 10 — Đừng Thấy Ngột Ngạt Mà Lười”',desc:'Giữ sự chuẩn xác trong từng thông tin và duy trì kỷ luật trước áp lực cao: bản lĩnh tạo nên khác biệt trong môi trường cạnh tranh.'},
 {en:'“Never trade a lifetime of peace for a fleeting moment of comfort”',tag:'Tari Le // Long-Term Mindset 03',vi:'“Đừng Vì Sung Sướng Nhất Thời Mà Làm Đau Khổ Cả Đời”',desc:'Tập trung vào giá trị bền vững thay vì những cám dỗ ngắn hạn. Mỗi lựa chọn kỷ luật hôm nay là nền móng vững chắc cho tương lai.'}
];
var phil=document.getElementById('phil');
if(phil){
  var pqBox=document.getElementById('philQ'),pqPills=[].slice.call(phil.querySelectorAll('.pq-pill')),pqI=0,pqT;
  function pqShow(i){
    pqBox.classList.add('out');
    setTimeout(function(){
      var q=PQ[i];
      document.getElementById('pqMain').textContent=q.vi;document.getElementById('pqTag').textContent=q.tag;
      document.getElementById('pqSub').textContent=q.en;document.getElementById('pqDesc').textContent=q.desc;
      document.getElementById('pqCnt').textContent='0'+(i+1)+' / 03';
      pqPills.forEach(function(p,k){p.classList.toggle('on',k===i)});
      pqBox.classList.remove('out');
    },300);
  }
  function pqReset(){clearInterval(pqT);pqT=setInterval(function(){pqI=(pqI+1)%PQ.length;pqShow(pqI)},5500)}
  pqPills.forEach(function(p,k){p.addEventListener('click',function(){pqI=k;pqShow(k);pqReset()})});
  phil.addEventListener('mouseenter',function(){clearInterval(pqT)});
  phil.addEventListener('mouseleave',pqReset);
  pqReset();
}

/* PERSONAL PROFILE: hiệu ứng giải mã chữ (Cyber Text Scramble) - chạy khi thẻ hiện ra và khi rê chuột vào từng dòng */
(function(){
  var els=[].slice.call(document.querySelectorAll('.ar-card .sc'));
  if(!els.length)return;
  var CH='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/#@$%&*',KEEP=/[\s,\/&.\-]/;
  var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* Tách chữ thật (cho trình đọc màn hình) và chữ hiển thị (bị xáo trộn) */
  els.forEach(function(el){
    var txt=el.getAttribute('data-text'),sr=document.createElement('span'),vis=document.createElement('span');
    sr.className='sr';sr.textContent=txt;vis.className='vis';vis.setAttribute('aria-hidden','true');vis.textContent=txt;
    el.textContent='';el.appendChild(sr);el.appendChild(vis);
  });
  function scramble(el){
    if(still||el._run)return;
    var vis=el.querySelector('.vis'),txt=el.getAttribute('data-text'),len=txt.length,dur=Math.min(800,380+len*12),t0=null,last=0;
    el._run=true;el.style.height=el.offsetHeight+'px';el.classList.add('scr');
    function step(t){
      if(t0===null)t0=t;
      var p=Math.min((t-t0)/dur,1);
      if(t-last>=40||p===1){
        last=t;
        var k=Math.floor(p*len),s='',i,c;
        for(i=0;i<len;i++){c=txt.charAt(i);s+=(i<k||KEEP.test(c))?c:CH.charAt(Math.floor(Math.random()*CH.length))}
        vis.textContent=s;
      }
      if(p<1){requestAnimationFrame(step)}
      else{vis.textContent=txt;el.classList.remove('scr');el.style.height='';el._run=false}
    }
    requestAnimationFrame(step);
  }
  /* Rê chuột vào dòng nào thì giải mã lại dòng đó */
  els.forEach(function(el){
    var host=el.closest('.pr,.ar-head');
    if(host)host.addEventListener('mouseenter',function(){scramble(el)});
  });
  /* Lần đầu: khi thẻ cuộn tới thì chạy lần lượt từng dòng */
  var wrap=document.getElementById('arWrap');
  if(wrap&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      if(es[0].isIntersecting){
        els.forEach(function(el,i){setTimeout(function(){scramble(el)},i*180)});
        io.disconnect();
      }
    },{threshold:.4});
    io.observe(wrap);
  }
})();

/* ===== TRANG 02: QUÂN ĐOÀN UZI ===== */
(function(){
  var $=function(id){return document.getElementById(id)};
  if(!$('uzUnits'))return;
  function fill(id,arr,fn){$(id).innerHTML=arr.map(fn).join('')}
  var GAMES=['Free Fire','Liên Quân','PUBG','Play Together','FC Mobile VN'];
  /* Sửa ngày thành lập ở đây */
  var UNITS=[
    ['Quân Đoàn','Free Fire','#FFB300','00/00/2026','Quân Đoàn UZI bên Free Fire'],
    ['Clan','Liên Quân Mobile','#00E5FF','00/00/2026','Clan UZI bên Liên Quân'],
    ['Hội','PUBG','#76FF03','00/00/2026','Hội UZI bên PUBG'],
    ['Hội Nhóm','Play Together','#FF2A85','00/00/2026','Hội Nhóm UZI bên Play Together'],
    ['Liên Đoàn','FC Mobile VN','#C084FC','00/00/2026','Liên Đoàn UZI bên FC Mobile VN']];
  fill('uzUnits',UNITS,function(u){return '<article class="card" style="--c:'+u[2]+'"><small>'+u[1]+'</small><h4>'+u[0]+' UZI</h4><p>'+u[4]+'</p><span class="d">THÀNH LẬP // '+u[3]+'</span></article>'});
  fill('uzFam',[
    ['#00E5FF','◎','Mục tiêu','Xây dựng một gia đình game thủ văn minh, đoàn kết, có tổ chức và có bản sắc riêng.'],
    ['#FF2A85','➜','Mong muốn tương lai','Phát triển thêm nhiều giải đấu, sự kiện offline và mở rộng sang các tựa game mới.'],
    ['#C084FC','⌬','Kết nối','Gắn kết nhiều quân đoàn, nhiều lĩnh vực: game, âm nhạc, công nghệ và học tập.']],
    function(c){return '<article class="card" style="--c:'+c[0]+'"><i class="ico">'+c[1]+'</i><h4>'+c[2]+'</h4><p>'+c[3]+'</p></article>'});
  /* Sự kiện mẫu: [ngày, nội dung, nhãn, màu] */
  fill('uzEvents',[
    ['00.2026','Lễ ra mắt Quân Đoàn UZI','KHỞI ĐẦU','#ff2a85'],
    ['00.2026','Giao lưu cuối tuần giữa các quân đoàn','ONLINE','#00f0ff'],
    ['00.2026','Gặp mặt offline, check-in cùng anh em','OFFLINE','#10b981'],
    ['00.2026','Mini game nội bộ có quà','MINIGAME','#a855f7']],
    function(e){return '<li class="up-row" style="--rc:'+e[3]+';--rg:color-mix(in srgb,'+e[3]+' 14%,transparent);--dc:#00f0ff"><span class="up-node"><i class="up-dot"></i></span><time class="up-date">'+e[0]+'</time><span class="up-text">'+e[1]+'</span><b class="up-badge">'+e[2]+'</b></li>'});
  /* Video trend: [tiêu đề, nền tảng, link giả] */
  fill('uzVids',[
    ['Video đú trend #1','TikTok','https://example.com/video-1'],
    ['Video đú trend #2','TikTok','https://example.com/video-2'],
    ['Video đú trend #3','YouTube Shorts','https://example.com/video-3']],
    function(v){return '<a class="uz-vid" href="'+v[2]+'" target="_blank" rel="noopener"><div class="uz-th">▶</div><b>'+v[0]+'</b><small>'+v[1]+' // link tạm</small></a>'});
  fill('uzOther',[
    ['Giải đấu khác #1','Tên giải · Kết quả · Năm'],
    ['Giải đấu khác #2','Tên giải · Kết quả · Năm'],
    ['Giải đấu khác #3','Tên giải · Kết quả · Năm']],
    function(t){return '<article class="card" style="--c:#C084FC"><small>ĐÃ THAM GIA</small><h4>'+t[0]+'</h4><p>'+t[1]+'</p></article>'});
  fill('uzAch',[['Thành tích #1','Cập nhật thành tích thật'],['Thành tích #2','Cập nhật thành tích thật'],['Thành tích #3','Cập nhật thành tích thật']],
    function(t){return '<article class="card" style="--c:#FFB300"><i class="ico">★</i><h4>'+t[0]+'</h4><p>'+t[1]+'</p></article>'});

  /* Luật & quyền lợi (bản nháp, sửa theo luật thật) */
  var RULES={
    'Luật Quân Đoàn':['Tôn trọng mọi thành viên, không chửi bậy, không công kích cá nhân.','Đổi tên theo quy định của quân đoàn khi vào nhóm.','Không dùng phần mềm gian lận, không phá hoại giải đấu.','Hoạt động đều đặn, báo trước khi vắng lâu.','Nghe theo điều hành của quản trị viên.'],
    'Luật Luyện Phòng':['Vào phòng đúng giờ hẹn, đủ người mới bắt đầu.','Giữ liên lạc trong trận, không troll đồng đội.','Không rời phòng giữa chừng khi chưa báo.','Thua thì rút kinh nghiệm, không đổ lỗi.'],
    'Quyền Lợi Thành Viên':['Được tham gia mọi sự kiện, giải đấu nội bộ của quân đoàn.','Được tích Danh Dự theo hoạt động và thành tích.','Được giao lưu, luyện tập cùng các quân đoàn anh em.','Được hỗ trợ, góp ý và đề xuất ý tưởng cho cộng đồng.']};
  var tabs=$('uzTabs'),pane=$('uzPane');
  Object.keys(RULES).forEach(function(k,i){
    var b=document.createElement('button');b.type='button';b.textContent=k;b.setAttribute('role','tab');
    b.onclick=function(){[].slice.call(tabs.children).forEach(function(x){x.classList.toggle('on',x===b)});
      pane.innerHTML='<ol>'+RULES[k].map(function(r){return '<li>'+r+'</li>'}).join('')+'</ol><p class="uz-note">Bản nháp, sẽ thay bằng luật chính thức.</p>'};
    tabs.appendChild(b);if(!i)b.onclick();
  });

  /* Bản đồ: bấm để cắm cờ */
  var svg=$('uzSvg'),mine=$('uzMine'),KEY='uziPins',pins=[];
  function esc(s){return String(s).replace(/[&<>"]/g,'')}
  function flag(p,c){return '<g class="pin" transform="translate('+p[0]+','+p[1]+')"><line y2="-24" stroke="#fff" stroke-width="2"/><path d="M0-24L17-18L0-12Z" fill="'+c+'"/><circle r="3.5" fill="'+c+'"/><text class="pl" x="8" y="10">'+esc(p[2])+'</text></g>'}
  $('uzSample').innerHTML=[[172,72,'Hà Nội (mẫu)'],[205,372,'Đà Nẵng (mẫu)'],[170,548,'TP.HCM (mẫu)'],[122,592,'Cần Thơ (mẫu)']].map(function(p){return flag(p,'#FF2A85')}).join('');
  try{pins=JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){pins=[]}
  function draw(){mine.innerHTML=pins.map(function(p){return flag(p,'#FFB300')}).join('');$('uzCnt').textContent=pins.length+' cờ do bạn cắm';try{localStorage.setItem(KEY,JSON.stringify(pins))}catch(e){}}
  svg.addEventListener('click',function(e){
    var pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;var q=pt.matrixTransform(svg.getScreenCTM().inverse());
    var n=prompt('Tên địa điểm check-in (ví dụ: Cần Thơ - quán cà phê):');
    if(n&&n.trim()){pins.push([Math.round(q.x),Math.round(q.y),n.trim().slice(0,30)]);draw()}
  });
  $('uzUndo').onclick=function(){pins.pop();draw()};
  $('uzCopy').onclick=function(){var t=JSON.stringify(pins);if(navigator.clipboard)navigator.clipboard.writeText(t);$('uzCnt').textContent='Đã sao chép '+pins.length+' cờ'};
  draw();

  /* Danh sách 250 thành viên: 30 tên giả + 220 ô trống. Sửa trực tiếp mảng MEM: [tên, danh dự, game, thời gian vào] */
  var NM='UZI•Rồng Lửa|Bảo Kiên|Minh Phát|Hoàng Nam|Gia Huy|Thanh Tùng|Quốc Bảo|Đức Anh|Tuấn Kiệt|Nhật Minh|Khánh Duy|Hữu Phước|Trọng Nghĩa|Anh Khoa|Thiên Ân|Việt Hưng|Công Danh|Phúc Lâm|Ngọc Sơn|Mạnh Cường|Tấn Lộc|Hải Đăng|Trí Dũng|Bảo Long|Quang Vinh|Đăng Khôi|Xuân Bách|Thế Vĩ|Kim Ngân|Lan Anh'.split('|');
  var MEM=NM.map(function(n,i){return [n,Math.max(100,2500-i*73),GAMES[i%5],(i%12+1)+'/2026']});
  var TOTAL=250,body=document.querySelector('#uzTbl tbody'),sel=$('uzG'),qi=$('uzQ');
  sel.innerHTML='<option value="">Tất cả game</option>'+GAMES.map(function(g){return '<option>'+g+'</option>'}).join('');
  function render(){
    var q=qi.value.trim().toLowerCase(),g=sel.value,rows='',shown=0,i,m;
    for(i=0;i<TOTAL;i++){
      m=MEM[i];
      if(q||g){if(!m||(q&&m[0].toLowerCase().indexOf(q)<0)||(g&&m[2]!==g))continue}
      shown++;
      rows+='<tr'+(m?'':' class="em"')+'><td>'+('00'+(i+1)).slice(-3)+'</td>'+(m?'<td>'+m[0]+'</td><td>'+m[1].toLocaleString('vi-VN')+'</td><td>'+m[2]+'</td><td>'+m[3]+'</td>':'<td>—</td><td>—</td><td>—</td><td>—</td>')+'</tr>';
    }
    body.innerHTML=rows||'<tr><td colspan="5">Không tìm thấy thành viên phù hợp.</td></tr>';
    $('uzMc').textContent=MEM.length+' / '+TOTAL+' đã điền'+((q||g)?' · '+shown+' kết quả':'');
  }
  qi.addEventListener('input',render);sel.addEventListener('change',render);render();

  /* Viền tiêu đề chạy sáng */
  var tf2=document.querySelector('.uzi .title-frame');
  if(tf2)new IntersectionObserver(function(es){es.forEach(function(e){tf2.classList.toggle('in-view',e.isIntersecting)})},{threshold:.3}).observe(tf2);
})();
