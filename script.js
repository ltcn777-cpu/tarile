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
