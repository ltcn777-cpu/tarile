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
