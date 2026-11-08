var nav=document.getElementById('nav'),bg=document.getElementById('bg');
function setOpen(o){nav.classList.toggle('open',o);bg.classList.toggle('x',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Đóng menu':'Mở menu')}
bg.addEventListener('click',function(){setOpen(!nav.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
var links=[].slice.call(nav.querySelectorAll('a'));
var secs=[].slice.call(document.querySelectorAll('section.s'));
var spy=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}
})},{rootMargin:'-45% 0px -50% 0px'});
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}})},{threshold:.2});
secs.forEach(function(s){spy.observe(s);rv.observe(s)});
