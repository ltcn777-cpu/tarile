(function(){
var $=function(i){return document.getElementById(i)},RM=matchMedia('(prefers-reduced-motion: reduce)').matches,GAMES=['Free Fire','Liên Quân','PUBG','Play Together','FC Mobile VN'];
function fill(i,a,f){$(i).innerHTML=a.map(f).join('')}
function pad(n){return('00'+n).slice(-3)}
/* HERO: khối 3D xoay theo chuột + nhảy số */
var cube=$('cube'),ry=25,rx=-20,tx=0,ty=0;
$('hero').addEventListener('mousemove',function(e){var r=this.getBoundingClientRect();tx=((e.clientY-r.top)/r.height-.5)*-70;ty=((e.clientX-r.left)/r.width-.5)*160});
(function f(){ry+=.35;cube.style.transform='rotateX('+(rx+=(tx-20-rx)*.06)+'deg) rotateY('+(ry+ty*.5)+'deg)';if(!RM)requestAnimationFrame(f)})();
new IntersectionObserver(function(es,o){es.forEach(function(e){if(!e.isIntersecting)return;o.unobserve(e.target);var b=e.target,n=+b.dataset.n,s=null;(function st(t){s=s||t;var p=Math.min((t-s)/1400,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)})(performance.now())})},{threshold:.5}).observe($('c1'));
['c1','c2','c3'].forEach(function(i){var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){o.disconnect();var b=$(i),n=+b.dataset.n,s=null;(function st(t){s=s||t;var p=Math.min((t-s)/1400,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)})(performance.now())}});o.observe($(i))});
/* 5 thẻ hologram */
var U=[['Quân Đoàn','Free Fire','#FFB300'],['Clan','Liên Quân Mobile','#00E5FF'],['Hội','PUBG','#CCFF00'],['Hội Nhóm','Play Together','#FF4655'],['Liên Đoàn','FC Mobile VN','#C084FC']];
fill('cards',U,function(u,i){return '<article class="hc" style="--c:'+u[2]+'"><span class="no">0'+(i+1)+'</span><small>'+u[1].toUpperCase()+'</small><h4>'+u[0]+' UZI</h4><p>'+u[0]+' UZI bên '+u[1]+'</p><span class="d">THÀNH LẬP // 00/00/2026</span></article>'});
[].forEach.call(document.querySelectorAll('.hc'),function(c){c.onmousemove=function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform='rotateX('+((.5-y)*16)+'deg) rotateY('+((x-.5)*16)+'deg) translateZ(12px)';c.style.setProperty('--bx',x*100+'%');c.style.setProperty('--by',y*100+'%')};c.onmouseleave=function(){c.style.transform=''}});
[].forEach.call(document.querySelectorAll('.bc'),function(c){c.onmousemove=function(e){var r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}});
/* Timeline */
fill('tl',[['00.2026','Lễ ra mắt Quân Đoàn UZI','Khởi đầu của cả gia đình.'],['00.2026','Giao lưu giữa các quân đoàn','Online, chơi chung nhiều game.'],['00.2026','Gặp mặt offline','Anh em gặp nhau, check-in trên địa cầu.'],['00.2026','Mini game nội bộ','Chơi vui, có quà.']],function(e){return '<div class="ev"><time>'+e[0]+'</time><b>'+e[1]+'</b><span>'+e[2]+'</span></div>'});
/* Coverflow: [tiêu đề, nền tảng, link giả] */
var V=[['Video đú trend #1','TikTok'],['Video đú trend #2','TikTok'],['Video đú trend #3','YouTube'],['Video đú trend #4','TikTok'],['Video đú trend #5','Facebook']],cur=2;
fill('cf',V,function(v,i){return '<a href="https://example.com/video-'+(i+1)+'" target="_blank" rel="noopener" data-p="'+v[1].toUpperCase()+'"><b>'+v[0]+'</b><small>'+v[1]+' // link tạm</small></a>'});
var sl=[].slice.call($('cf').children);
function cfr(){sl.forEach(function(a,i){var d=i-cur,m=Math.abs(d);a.style.transform='translateX('+d*62+'%) translateZ('+(-m*160)+'px) rotateY('+(-d*38)+'deg)';a.style.opacity=m>2?0:1-m*.3;a.style.zIndex=9-m;a.style.pointerEvents=m>2?'none':''})}
sl.forEach(function(a,i){a.onclick=function(e){if(i!==cur){e.preventDefault();cur=i;cfr()}}});
$('pv').onclick=function(){cur=Math.max(0,cur-1);cfr()};$('nx').onclick=function(){cur=Math.min(sl.length-1,cur+1);cfr()};cfr();
/* Vé giải đấu: tàn lửa + nút từ tính */
(function(){var c=$('em'),x=c.getContext('2d'),P=[],i;function rs(){c.width=c.offsetWidth;c.height=c.offsetHeight}rs();addEventListener('resize',rs);for(i=0;i<45;i++)P.push([Math.random(),Math.random(),Math.random()*2+.6,Math.random()*.6+.2]);(function f(){x.clearRect(0,0,c.width,c.height);P.forEach(function(p){p[1]-=p[3]*.002;if(p[1]<0){p[1]=1;p[0]=Math.random()}x.fillStyle='rgba(255,'+(120+p[2]*40|0)+',30,'+p[1]*.8+')';x.beginPath();x.arc(p[0]*c.width,p[1]*c.height,p[2],0,6.3);x.fill()});if(!RM)requestAnimationFrame(f)})()})();
var mg=$('mag'),tkt=$('tkt');tkt.addEventListener('mousemove',function(e){var r=mg.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2;mg.style.transform=Math.hypot(dx,dy)<150?'translate('+dx*.3+'px,'+dy*.3+'px)':''});tkt.addEventListener('mouseleave',function(){mg.style.transform=''});
/* Huy hiệu */
function bd(id,a,ic){fill(id,a,function(t){return '<article class="bd"><div class="hex">'+ic+'</div><h4>'+t[0]+'</h4><p>'+t[1]+'</p></article>'})}
bd('bo',[['Giải đấu khác #1','Tên giải · Kết quả · Năm'],['Giải đấu khác #2','Tên giải · Kết quả · Năm'],['Giải đấu khác #3','Tên giải · Kết quả · Năm']],'⚔');
bd('ba',[['Thành tích #1','Cập nhật thành tích thật'],['Thành tích #2','Cập nhật thành tích thật'],['Thành tích #3','Cập nhật thành tích thật']],'★');
/* Terminal giải mã chữ */
var CH='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/#@$%&*',R={'Luật Quân Đoàn':['luat-quan-doan.txt','Tôn trọng mọi thành viên, không chửi bậy, không công kích cá nhân.','Đổi tên theo quy định của quân đoàn khi vào nhóm.','Không dùng phần mềm gian lận, không phá hoại giải đấu.','Hoạt động đều đặn, báo trước khi vắng lâu.','Nghe theo điều hành của quản trị viên.'],'Luật Luyện Phòng':['luat-luyen-phong.txt','Vào phòng đúng giờ hẹn, đủ người mới bắt đầu.','Giữ liên lạc trong trận, không troll đồng đội.','Không rời phòng giữa chừng khi chưa báo.','Thua thì rút kinh nghiệm, không đổ lỗi.'],'Quyền Lợi':['quyen-loi.txt','Tham gia mọi sự kiện, giải đấu nội bộ.','Tích Danh Dự theo hoạt động và thành tích.','Giao lưu, luyện tập cùng các quân đoàn anh em.','Góp ý, đề xuất ý tưởng cho cộng đồng.']},tp=$('tp');
function scr(t){clearInterval(tp._t);if(RM){tp.textContent=t;return}var k=0;tp._t=setInterval(function(){tp.textContent=t.slice(0,k)+t.slice(k,k+14).replace(/[^\n ]/g,function(){return CH[Math.random()*CH.length|0]});k+=4;if(k>t.length+14){clearInterval(tp._t);tp.textContent=t}},24)}
Object.keys(R).forEach(function(k,i){var b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=function(){[].forEach.call($('tt').children,function(x){x.classList.toggle('on',x===b)});var a=R[k];scr('$ cat '+a[0]+'\n\n'+a.slice(1).map(function(l,j){return '['+pad(j+1).slice(1)+'] '+l}).join('\n')+'\n\n# Bản nháp, thay bằng luật chính thức.')};$('tt').appendChild(b);if(!i)b.onclick()});
/* Địa cầu 3D check-in */
(function(){var cv=$('gl'),c=cv.getContext('2d'),R=210,C=280,D=[],T=.4,ph=-106*Math.PI/180,hov=0,t=0,K='uziGlobe',mine=[],i,y,r,a;cv.width=cv.height=1120;c.scale(2,2);
for(i=0;i<900;i++){y=1-2*(i+.5)/900;r=Math.sqrt(1-y*y);a=i*2.39996;D.push([Math.cos(a)*r,y,Math.sin(a)*r])}
var S=[[21.03,105.85,'Hà Nội'],[16.05,108.2,'Đà Nẵng'],[10.78,106.7,'TP.HCM'],[10.03,105.78,'Cần Thơ']];
try{mine=JSON.parse(localStorage.getItem(K)||'[]')}catch(e){}
function V(la,lo){la*=Math.PI/180;lo*=Math.PI/180;return[Math.cos(la)*Math.sin(lo),Math.sin(la),Math.cos(la)*Math.cos(lo)]}
function P(v,k){var x=v[0]*k,y=v[1]*k,z=v[2]*k,cp=Math.cos(ph),sp=Math.sin(ph),xr=x*cp+z*sp,zr=-x*sp+z*cp,ct=Math.cos(T),st=Math.sin(T);return[C+R*xr,C-R*(y*ct-zr*st),zr*ct+y*st]}
function pin(p,col,i){var v=V(p[0],p[1]),b=P(v,1);if(b[2]<-.05)return;var e=P(v,1.38+.08*Math.sin(t*.04+i)),g=c.createLinearGradient(b[0],b[1],e[0],e[1]);g.addColorStop(0,col);g.addColorStop(1,'rgba(255,255,255,0)');c.strokeStyle=g;c.lineWidth=3;c.shadowColor=col;c.shadowBlur=14;c.beginPath();c.moveTo(b[0],b[1]);c.lineTo(e[0],e[1]);c.stroke();c.shadowBlur=0;c.fillStyle=col;c.beginPath();c.arc(b[0],b[1],4,0,6.3);c.fill();if(b[2]>.15){c.fillStyle='#fff';c.font='600 13px "Space Grotesk",sans-serif';c.fillText(p[2],e[0]+8,e[1]+4)}}
function draw(){t++;if(!hov&&!RM)ph-=.003;c.clearRect(0,0,560,560);var g=c.createRadialGradient(C,C,R*.9,C,C,R*1.2);g.addColorStop(0,'rgba(204,255,0,.15)');g.addColorStop(1,'rgba(204,255,0,0)');c.fillStyle=g;c.beginPath();c.arc(C,C,R*1.2,0,6.3);c.fill();c.fillStyle='#0d1016';c.beginPath();c.arc(C,C,R,0,6.3);c.fill();D.forEach(function(d){var p=P(d,1);if(p[2]>0){c.fillStyle='rgba(204,255,0,'+(.1+.5*p[2])+')';c.fillRect(p[0],p[1],1.6,1.6)}});S.forEach(function(p,i){pin(p,'#FF4655',i)});mine.forEach(function(p,i){pin(p,'#CCFF00',i+9)});requestAnimationFrame(draw)}
function save(){$('gc').textContent=mine.length+' cờ do bạn cắm';try{localStorage.setItem(K,JSON.stringify(mine))}catch(e){}}
cv.onmouseenter=function(){hov=1};cv.onmouseleave=function(){hov=0};
cv.addEventListener('click',function(e){var q=cv.getBoundingClientRect(),u=((e.clientX-q.left)/q.width*560-C)/R,v=(C-(e.clientY-q.top)/q.height*560)/R,w2=1-u*u-v*v;if(w2<0)return;var w=Math.sqrt(w2),ct=Math.cos(T),st=Math.sin(T),zr=w*ct-v*st,yy=v*ct+w*st,cp=Math.cos(ph),sp=Math.sin(ph),n=prompt('Tên địa điểm check-in:');if(n&&n.trim()){mine.push([+(Math.asin(yy)*180/Math.PI).toFixed(2),+(Math.atan2(u*cp-zr*sp,u*sp+zr*cp)*180/Math.PI).toFixed(2),n.trim().slice(0,24).replace(/[<>&]/g,'')]);save()}});
$('gu').onclick=function(){mine.pop();save()};$('gp').onclick=function(){if(navigator.clipboard)navigator.clipboard.writeText(JSON.stringify(mine));$('gc').textContent='Đã sao chép '+mine.length+' cờ'};
save();draw()})();
/* Bảng xếp hạng: sửa mảng MEM [tên, danh dự, game, thời gian vào] */
var NM='UZI•Rồng Lửa|Bảo Kiên|Minh Phát|Hoàng Nam|Gia Huy|Thanh Tùng|Quốc Bảo|Đức Anh|Tuấn Kiệt|Nhật Minh|Khánh Duy|Hữu Phước|Trọng Nghĩa|Anh Khoa|Thiên Ân|Việt Hưng|Công Danh|Phúc Lâm|Ngọc Sơn|Mạnh Cường|Tấn Lộc|Hải Đăng|Trí Dũng|Bảo Long|Quang Vinh|Đăng Khôi|Xuân Bách|Thế Vĩ|Kim Ngân|Lan Anh'.split('|'),
MEM=NM.map(function(n,i){return[n,Math.max(100,2500-i*73),GAMES[i%5],(i%12+1)+'/2026']}),MC=['#C0C8D4','#FFD400','#CD7F32'],qi=$('q'),sel=$('g');
$('pod').innerHTML=[1,0,2].map(function(i){var m=MEM[i];return '<div class="pd p'+(i+1)+'" style="--mc:'+MC[i===0?1:i===1?0:2]+'"><div class="md">'+(i+1)+'</div><b>'+m[0]+'</b><span>'+m[1].toLocaleString('vi-VN')+' DANH DỰ</span><br><span>'+m[2]+'</span></div>'}).join('');
sel.innerHTML='<option value="">Tất cả game</option>'+GAMES.map(function(g){return '<option>'+g+'</option>'}).join('');
function lb(){var q=qi.value.trim().toLowerCase(),g=sel.value,h='',i,m,n=0;for(i=3;i<250;i++){m=MEM[i];if((q||g)&&(!m||(q&&m[0].toLowerCase().indexOf(q)<0)||(g&&m[2]!==g)))continue;n++;h+='<div class="rw'+(m?'':' em')+'"><span>'+pad(i+1)+'</span>'+(m?'<span>'+m[0]+'</span><span>'+m[1].toLocaleString('vi-VN')+'</span><span>'+m[2]+'</span><span>'+m[3]+'</span>':'<span>— Trống —</span><span>—</span><span>—</span><span>—</span>')+'</div>'}$('lb').innerHTML=h||'<div class="rw em"><span></span><span>Không tìm thấy.</span></div>';$('mc').textContent=MEM.length+' / 250 đã điền'+((q||g)?' · '+n+' kết quả':'')}
qi.oninput=lb;sel.onchange=lb;lb();
/* Chữ điện ảnh + thanh laser theo cuộn */
var ws=[],tk=0;'Quân Đoàn mạnh không phải vì thắng nhiều trận, mà vì có các bạn ở đây'.split(' ').forEach(function(w){var s=document.createElement('span');s.textContent=w+' ';$('kp').appendChild(s);ws.push(s)});
var evs=[].slice.call(document.querySelectorAll('.ev'));
function onS(){var vh=innerHeight,r=$('tl').getBoundingClientRect();$('fill').style.height=Math.min(1,Math.max(0,(vh*.6-r.top)/r.height))*100+'%';evs.forEach(function(e){e.classList.toggle('lit',e.getBoundingClientRect().top<vh*.6)});var k=$('kin').getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh*.9-k.top)/(k.height*.8)));ws.forEach(function(w,i){w.style.opacity=.12+.88*Math.min(1,Math.max(0,p*ws.length-i))})}
addEventListener('scroll',function(){if(!tk){tk=1;requestAnimationFrame(function(){tk=0;onS()})}},{passive:true});onS();
})();
