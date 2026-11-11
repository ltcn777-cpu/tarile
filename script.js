var nav=document.getElementById('nav'),bg=document.getElementById('bg');
function setOpen(o){nav.classList.toggle('open',o);bg.classList.toggle('x',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Đóng menu':'Mở menu')}
bg.addEventListener('click',function(){setOpen(!nav.classList.contains('open'))});
var links=[].slice.call(nav.querySelectorAll('a'));
/* Menu chỉ đổi mục sáng khi người dùng tự bấm, không tự chạy theo thanh cuộn */
nav.addEventListener('click',function(e){
  var a=e.target.closest('a');
  if(!a)return;
  links.forEach(function(l){l.classList.toggle('on',l===a)});
  setOpen(false);
});
document.querySelector('.logo').addEventListener('click',function(){links.forEach(function(l){l.classList.remove('on')})});

/* Hiệu ứng hiện dần khi cuộn tới (không ảnh hưởng menu) */
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.2});
[].slice.call(document.querySelectorAll('section.s')).forEach(function(s){rv.observe(s)});

/* Vì sao: tạo ngẫu nhiên bằng box-shadow, trôi chậm liên tục */
function makeStars(el,count,colors){
  var W=Math.max(window.screen.width||1280,1280),H=1400,out=[];
  for(var i=0;i<count;i++){
    out.push(Math.floor(Math.random()*W)+'px '+Math.floor(Math.random()*H)+'px '+colors[Math.floor(Math.random()*colors.length)]);
  }
  el.style.setProperty('--s',out.join(','));
}
makeStars(document.getElementById('st1'),140,['#ffffff','#E0E6ED']);
makeStars(document.getElementById('st2'),60,['#ffffff','#9D4EDD','#00E5FF','#FFB300']);
