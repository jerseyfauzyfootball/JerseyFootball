const WA='6285703090174';
const SIZES=['S','M','L','XL','XXL'];
const SIZE_ADD={S:-10000,M:0,L:10000,XL:20000,XXL:30000};
const CHEST={S:'52 x 69',M:'55 x 71',L:'58 x 73',XL:'61 x 75',XXL:'64 x 77'};
const PHOTOS={
 1:'images/opt/1.jpg',2:'images/opt/2.jpg',3:'images/opt/3.jpg',4:'images/opt/4.jpg',5:'images/opt/5.jpg',
 6:'images/opt/6.jpg',7:'images/opt/7.jpg',8:'images/opt/8.jpg',9:'images/opt/9.jpg',10:'images/opt/10.jpg',
 11:'images/opt/11.jpg',12:'images/opt/12.jpg',13:'images/opt/13.jpg',14:'images/opt/14.jpg',15:'images/opt/15.jpg',
 16:'images/opt/16.jpg',17:'images/opt/17.jpg',18:'images/opt/18.jpg',19:'images/opt/19.jpg',
 21:'images/retro/liverpool.png',22:'images/retro/arsenal.png',
 24:'images/retro/ac_milan.png',25:'images/retro/barca.png',26:'images/retro/real_madrid.png',
 37:'images/retro/chelsea.png',38:'images/retro/juventus.png'
};

const P=[
{id:1,club:'Manchester United',liga:'Liga Inggris',season:'2025/26',type:'Home',price:389000,off:15,grade:'Grade Ori',c1:'#c8102e',c2:'#111111',tx:'#ffffff',pat:'solid',num:7,sponsor:'Snapdragon',sz:SIZES},
{id:2,club:'Liverpool',liga:'Liga Inggris',season:'2025/26',type:'Home',price:379000,off:10,grade:'Grade Ori',c1:'#d00027',c2:'#a30019',tx:'#ffffff',pat:'solid',num:11,sponsor:'Standard Chartered',sz:['S','M','L','XL']},
{id:3,club:'Arsenal',liga:'Liga Inggris',season:'2025/26',type:'Home',price:459000,off:0,grade:'Player Issue',c1:'#e2231a',c2:'#f7f2e8',tx:'#ffffff',pat:'sleeves',num:7,sponsor:'Emirates Fly Better',sz:SIZES},
{id:4,club:'Chelsea',liga:'Liga Inggris',season:'2026/27',type:'Home',price:329000,off:20,grade:'Grade Ori',c1:'#1a1a1a',c2:'#3d5af1',tx:'#ffffff',pat:'half',num:10,sponsor:'Infinite Athlete',sz:['M','L','XL','XXL']},
{id:5,club:'Real Madrid',liga:'La Liga',season:'2025/26',type:'Home',price:549000,off:0,grade:'Player Issue',c1:'#f4f4f0',c2:'#d8c36a',tx:'#1b2a56',pat:'solid',num:5,sponsor:'Emirates',sz:SIZES},
{id:6,club:'Barcelona',liga:'La Liga',season:'2025/26',type:'Home',price:399000,off:15,grade:'Grade Ori',c1:'#14a086',c2:'#101a3c',tx:'#ffffff',pat:'solid',num:10,sponsor:'Spotify',sz:['S','M','L','XL']},
{id:7,club:'Juventus',liga:'Serie A',season:'2025/26',type:'Home',price:349000,off:10,grade:'Grade Ori',c1:'#f6f6f6',c2:'#111111',tx:'#111111',pat:'stripes',num:9,sponsor:'Jeep',sz:SIZES},
{id:8,club:'AC Milan',liga:'Serie A',season:'2025/26',type:'Home',price:339000,off:0,grade:'Grade Ori',c1:'#d6001c',c2:'#111111',tx:'#ffffff',pat:'stripes',num:10,sponsor:'Emirates',sz:['S','M','L','XL','XXL']},
{id:9,club:'Inter Milan',liga:'Serie A',season:'2026/27',type:'Home',price:429000,off:15,grade:'Player Issue',c1:'#ece8d8',c2:'#1b2b6b',tx:'#1b2b6b',pat:'hoops',num:9,sponsor:'Betsson',sz:['M','L','XL']},
{id:10,club:'Persija Jakarta',liga:'Liga Indonesia',season:'2025/26',type:'Home',price:289000,off:10,grade:'Grade Ori',c1:'#e8541c',c2:'#7a2308',tx:'#ffffff',pat:'solid',num:10,sponsor:'Bank DKI',sz:SIZES},
{id:11,club:'Persib Bandung',liga:'Liga Indonesia',season:'2025/26',type:'Home',price:299000,off:10,grade:'Grade Ori',c1:'#1c3fa8',c2:'#0d1f5c',tx:'#ffffff',pat:'solid',num:12,sponsor:'Indofood',sz:SIZES},
{id:12,club:'Timnas Indonesia',liga:'Timnas',season:'2026',type:'Home',price:469000,off:15,grade:'Player Issue',c1:'#c8102e',c2:'#8a0b20',tx:'#ffffff',pat:'solid',num:10,sponsor:'Garuda',sz:SIZES},
{id:13,club:'Bayern Munich',liga:'Liga Jerman',season:'2025/26',type:'Home',price:459000,off:0,grade:'Grade Ori',c1:'#d4021d',c2:'#0a2a66',tx:'#ffffff',pat:'solid',num:9,sponsor:'Deutsche Telekom',sz:SIZES},
{id:14,club:'Borussia Dortmund',liga:'Liga Jerman',season:'2025/26',type:'Home',price:409000,off:10,grade:'Grade Ori',c1:'#fde100',c2:'#111111',tx:'#111111',pat:'solid',num:10,sponsor:'Vodafone',sz:SIZES},
{id:15,club:'Manchester City',liga:'Liga Inggris',season:'2025/26',type:'Home',price:449000,off:0,grade:'Player Issue',c1:'#6cabdd',c2:'#1c2c5b',tx:'#1c2c5b',pat:'solid',num:9,sponsor:'Etihad',sz:SIZES},
{id:16,club:'Atletico Madrid',liga:'La Liga',season:'2025/26',type:'Home',price:359000,off:15,grade:'Grade Ori',c1:'#f6f6f6',c2:'#c8102e',tx:'#1b2a56',pat:'stripes',num:7,sponsor:'Riyadh Air',sz:SIZES},
{id:17,club:'Paris Saint-Germain',liga:'Liga Prancis',season:'2025/26',type:'Home',price:429000,off:10,grade:'Grade Ori',c1:'#0a1f4d',c2:'#da291c',tx:'#ffffff',pat:'solid',num:7,sponsor:'Qatar Airways',sz:SIZES},
{id:18,club:'Arema FC',liga:'Liga Indonesia',season:'2025/26',type:'Home',price:289000,off:0,grade:'Grade Ori',c1:'#1a3a9e',c2:'#f39200',tx:'#ffffff',pat:'solid',num:10,sponsor:'Indomie',sz:SIZES},
{id:19,club:'Persebaya Surabaya',liga:'Liga Indonesia',season:'2025/26',type:'Home',price:289000,off:10,grade:'Grade Ori',c1:'#1f8a3a',c2:'#0d3d1c',tx:'#ffffff',pat:'solid',num:10,sponsor:'Kapal Api',sz:SIZES},
{id:21,club:'Liverpool',liga:'Liga Inggris',season:'2004/05',type:'Home',price:459000,off:15,grade:'Retro Classic',c1:'#d00027',c2:'#ffffff',tx:'#ffffff',pat:'solid',num:8,sponsor:'Carlsberg',sz:SIZES,retro:true},
{id:22,club:'Arsenal',liga:'Liga Inggris',season:'2003/04',type:'Home',price:489000,off:10,grade:'Retro Classic',c1:'#e2231a',c2:'#f7f2e8',tx:'#ffffff',pat:'sleeves',num:14,sponsor:'O2',sz:SIZES,retro:true},
{id:24,club:'AC Milan',liga:'Serie A',season:'1989/90',type:'Home',price:499000,off:10,grade:'Retro Classic',c1:'#d6001c',c2:'#111111',tx:'#ffffff',pat:'stripes',num:9,sponsor:'Mediolanum',sz:SIZES,retro:true},
{id:25,club:'Barcelona',liga:'La Liga',season:'1991/92',type:'Home',price:499000,off:15,grade:'Retro Classic',c1:'#a50044',c2:'#004d98',tx:'#ffffff',pat:'half',num:10,sponsor:'Camp Nou',sz:SIZES,retro:true},
{id:26,club:'Real Madrid',liga:'La Liga',season:'2001/02',type:'Home',price:519000,off:10,grade:'Retro Classic',c1:'#f4f4f0',c2:'#d8c36a',tx:'#1b2a56',pat:'solid',num:5,sponsor:'Teka',sz:SIZES,retro:true},
{id:37,club:'Chelsea',liga:'Liga Inggris',season:'1996/97',type:'Home',price:469000,off:10,grade:'Retro Classic',c1:'#034694',c2:'#ffffff',tx:'#ffffff',pat:'solid',num:25,sponsor:'Coors',sz:SIZES,retro:true},
{id:38,club:'Juventus',liga:'Serie A',season:'1995/96',type:'Home',price:479000,off:15,grade:'Retro Classic',c1:'#f6f6f6',c2:'#111111',tx:'#111111',pat:'stripes',num:10,sponsor:'Sony',sz:SIZES,retro:true},
];

const LIGAS=['Liga Inggris','La Liga','Serie A','Liga Jerman','Liga Prancis','Liga Indonesia','Timnas'];
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const rp=n=>'Rp '+Number(n).toLocaleString('id-ID');
const roundK=n=>Math.round(n/1000)*1000;
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let uid=0;

P.forEach(p=>{
 p.sz=p.sz||SIZES;
 p.off=Number(p.off)||0;
 p.sale=p.off?roundK(p.price*(1-p.off/100)):p.price;
 p.was=p.off?p.price:0;
 const hasDetail=p.id>=1&&p.id<=19;
 p.img=PHOTOS[p.id]?(hasDetail?[PHOTOS[p.id],`images/detail/${p.id}-1.jpg`,`images/detail/${p.id}-2.jpg`]:[PHOTOS[p.id]]):[];
});

const sizePrice=(p,s)=>p.sale+(SIZE_ADD[s]||0);
const sizeWas=(p,s)=>p.was?p.was+(SIZE_ADD[s]||0):0;
const minSize=p=>p.sz.reduce((a,s)=>sizePrice(p,s)<sizePrice(p,a)?s:a,p.sz[0]);
const shortPrice=n=>Math.round(n/1000).toLocaleString('id-ID')+'rb';

function jerseySVG(p,view=0){
 const u='j'+(uid++);
 const c1=p.c1||'#c8102e', c2=p.c2||'#111111', tx=p.tx||'#ffffff';
 const sponsor=esc(p.sponsor||'JERZI');
 const spSize=sponsor.length>=15?11:sponsor.length>=12?13:sponsor.length>=9?15:sponsor.length>=6?18:21;
 const initials=esc(p.club.split(' ').map(w=>w[0]).join('').slice(0,3));
 const name=esc(p.club.split(' ').slice(-1)[0]);
 const body='M100 40 C90 40 82 42 74 48 L48 80 L34 106 L54 128 L68 110 C64 150 64 220 68 266 C100 278 160 278 192 266 C196 220 196 150 192 110 L206 128 L226 106 L212 80 L186 48 C178 42 170 40 160 40 C152 56 108 56 100 40 Z';
  const bg=`<defs><radialGradient id="glow${u}" cx="50%" cy="38%" r="62%"><stop offset="0" stop-color="${c1}" stop-opacity=".34"/><stop offset="1" stop-color="${c1}" stop-opacity="0"/></radialGradient><linearGradient id="bg${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#251c1a"/><stop offset=".55" stop-color="#171110"/><stop offset="1" stop-color="#0b0908"/></linearGradient><linearGradient id="sh${u}" x1=".1" y1="0" x2=".9" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".22"/><stop offset=".38" stop-color="#ffffff" stop-opacity=".03"/><stop offset=".68" stop-color="#000000" stop-opacity=".06"/><stop offset="1" stop-color="#000000" stop-opacity=".32"/></linearGradient><clipPath id="c${u}"><path d="${body}"/></clipPath></defs><rect width="260" height="310" fill="url(#bg${u})"/><rect width="260" height="310" fill="url(#glow${u})"/><path d="M26 300 H234" stroke="${tx}" stroke-opacity=".08"/><ellipse cx="130" cy="281" rx="82" ry="12" fill="#000000" opacity=".4"/>`;
 const weave=`<g opacity=".16"><path d="M0 250 L260 140 M0 280 L260 170 M0 310 L260 200" stroke="${c2}" stroke-width="2"/></g>`;
 const shade=`<path d="M68 108 C64 150 64 220 68 266 L84 269 C79 220 79 150 83 110 Z" fill="#000000" opacity=".14"/><path d="M192 108 C196 150 196 220 192 266 L176 269 C181 220 181 150 177 110 Z" fill="#000000" opacity=".2"/><path d="M100 42 C90 42 82 44 76 50 L68 108" fill="none" stroke="#000000" stroke-opacity=".08"/><path d="M160 42 C170 42 178 44 184 50 L192 108" fill="none" stroke="#000000" stroke-opacity=".08"/><path d="M130 60 V266" stroke="#000000" stroke-opacity=".08" stroke-width="2"/>`;
 if(view===2){
  const lines=Array.from({length:11},(_,i)=>`<path d="M${-150+i*38} 330 L${110+i*38} -20" stroke="${c2}" stroke-width="10" opacity=".24"/>`).join('');
  return `<svg viewBox="0 0 260 310" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Detail bahan ${esc(p.club)}"><defs><linearGradient id="d${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}" stop-opacity=".8"/></linearGradient><pattern id="w${u}" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="${c1}"/><path d="M0 16 L16 0" stroke="${c2}" stroke-opacity=".35" stroke-width="3"/></pattern></defs><rect width="260" height="310" fill="url(#w${u})"/><rect width="260" height="310" fill="url(#d${u})" opacity=".7"/><g>${lines}</g><rect x="18" y="18" width="224" height="274" rx="8" fill="none" stroke="${tx}" stroke-opacity=".22"/><text x="130" y="130" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="48" fill="${tx}" letter-spacing="2">DRY-FIT</text><text x="130" y="158" text-anchor="middle" font-family="Barlow,sans-serif" font-weight="600" font-size="9" letter-spacing="2" fill="${tx}" opacity=".9">${esc(p.club).toUpperCase()}</text><text x="130" y="177" text-anchor="middle" font-family="Barlow,sans-serif" font-size="7" letter-spacing="1.5" fill="${tx}" opacity=".7">${esc(p.grade).toUpperCase()} · ${esc(p.season)}</text><circle cx="130" cy="222" r="22" fill="none" stroke="${tx}" stroke-opacity=".3"/><text x="130" y="228" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="19" fill="${tx}" opacity=".85">JZ</text><text x="130" y="272" text-anchor="middle" font-family="Barlow,sans-serif" font-size="7" letter-spacing="2" fill="${tx}" opacity=".6">JERZI · INDONESIA</text></svg>`;
 }
 let pat='';
 if(p.pat==='stripes') pat=Array.from({length:10},(_,i)=>`<rect x="${60+i*14}" y="0" width="7.5" height="310" fill="${c2}"/>`).join('');
 if(p.pat==='pinstripes') pat=Array.from({length:14},(_,i)=>`<rect x="${54+i*11}" y="0" width="3" height="310" fill="${c2}"/>`).join('');
 if(p.pat==='hoops') pat=Array.from({length:8},(_,i)=>`<rect x="0" y="${38+i*30}" width="260" height="14" fill="${c2}"/>`).join('');
 if(p.pat==='half') pat=`<rect x="130" y="0" width="130" height="310" fill="${c2}"/>`;
 if(p.pat==='sash') pat=`<polygon points="16,48 58,24 246,218 204,242" fill="${c2}" opacity=".96"/>`;
 let sleeves='';
 if(p.pat==='sleeves') sleeves=`<path d="M68 54 L26 88 L48 122 L70 104 Z" fill="${c2}"/><path d="M192 54 L234 88 L212 122 L190 104 Z" fill="${c2}"/>`;
 const cuff=`<path d="M34 106 L54 128" stroke="${c2}" stroke-width="7"/><path d="M226 106 L206 128" stroke="${c2}" stroke-width="7"/><path d="M34 106 L54 128" stroke="${tx}" stroke-opacity=".24" stroke-width="1"/><path d="M226 106 L206 128" stroke="${tx}" stroke-opacity=".24" stroke-width="1"/>`;
 const collar=p.retro
  ? `<path d="M100 42 Q130 64 160 42" fill="none" stroke="${tx}" stroke-width="5"/><path d="M126 50 V76" stroke="${tx}" stroke-width="2.5"/><circle cx="126" cy="58" r="2" fill="${tx}"/><circle cx="126" cy="68" r="2" fill="${tx}"/><path d="M100 42 C108 58 152 58 160 42" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="1.5"/>`
  : `<path d="M100 42 Q130 66 160 42" fill="none" stroke="${tx}" stroke-width="7" opacity=".96"/><path d="M100 42 Q130 66 160 42" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="1.5"/>`;
 const crest=`<g transform="translate(99 102)"><path d="M-12 -13 H12 V3 Q0 14 -12 3 Z" fill="#f7f2e8" stroke="${c2}" stroke-width="2"/><text y="0" text-anchor="middle" font-family="Barlow,sans-serif" font-weight="700" font-size="7.5" fill="${c2}">${initials}</text><path d="M0 -23 l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z" fill="#e4202b"/></g>`;
 const brand=`<g transform="translate(181 95)"><path d="M0 -11 L9 2 L3 2 L8 13 L-7 0 L0 0 Z" fill="${tx}"/></g>`;
 const patch=`<g transform="translate(55 111)"><circle r="8" fill="rgba(0,0,0,.34)" stroke="${tx}" stroke-opacity=".45" stroke-width=".8"/><text y="2.8" text-anchor="middle" font-family="Barlow,sans-serif" font-weight="700" font-size="6.5" fill="#ffffff">★</text></g><g transform="translate(205 111)"><circle r="8" fill="rgba(0,0,0,.34)" stroke="${tx}" stroke-opacity=".45" stroke-width=".8"/><text y="2.5" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="6.5" fill="#ffffff">JZ</text></g>`;
 const hem=`<path d="M68 264 C100 276 160 276 192 264" fill="none" stroke="${tx}" stroke-opacity=".2" stroke-width="1.5"/>`;
 let front='';
 if(view===1){
  front=`${crest}<text x="130" y="96" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="18" fill="${tx}" stroke="${c1}" stroke-width="2" paint-order="stroke" letter-spacing="3">${name}</text><text x="130" y="218" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="112" fill="${tx}" stroke="${c1}" stroke-width="3" paint-order="stroke">${p.num}</text>${hem}`;
 }else{
  front=`${crest}${brand}${patch}<text x="130" y="166" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="${spSize}" fill="${tx}" stroke="${c1}" stroke-width="2.6" paint-order="stroke" letter-spacing=".6">${sponsor}</text><text x="130" y="252" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="11" letter-spacing="3" fill="${tx}" opacity=".62">JERZI</text>${hem}`;
 }
 return `<svg viewBox="0 0 260 310" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Jersey ${esc(p.club)} ${esc(p.type)}">${bg}<g clip-path="url(#c${u})"><rect width="260" height="310" fill="${c1}"/>${pat}${sleeves}${cuff}${weave}${shade}<rect width="260" height="310" fill="url(#sh${u})"/></g><path d="${body}" fill="none" stroke="#000000" stroke-opacity=".42" stroke-width="1.5"/>${collar}${front}</svg>`;
}

function imgFallback(el,id,view=0){
 const p=P.find(x=>x.id===id);
 if(!p)return;
 el.outerHTML=jerseySVG(p,view);
}

const HERO=P.find(p=>p.id===12)||P[0];
const heroSize=HERO.sz.includes('M')?'M':minSize(HERO);
$('#heroArt').innerHTML=jerseySVG(HERO,0);
$('#heroImg').src=HERO.img[0]||'';
$('#heroName').textContent=`${HERO.club} · ${HERO.type} ${HERO.season}`;
$('#heroPrice').textContent=rp(sizePrice(HERO,heroSize));
$('#heroOff').textContent=HERO.off?`−${HERO.off}%`:'';
$('#heroOld').textContent=sizeWas(HERO,heroSize)?rp(sizeWas(HERO,heroSize)):'';
$('#heroOff').hidden=!HERO.off;
$('#heroOld').hidden=!sizeWas(HERO,heroSize);
$('#statJersey').textContent=P.length;

let cart=[],F={q:'',club:'',liga:'',price:'0',sort:'featured',tag:''},shown=12;
let cur=null,curSize='',curQty=1,modalView=0;
const CART_KEY='jerzi_cart_v2';

function cardMedia(p){
 return p.img.length
  ? `<img src="${p.img[0]}" alt="Jersey ${esc(p.club)} ${esc(p.type)} ${esc(p.season)}" loading="lazy" onerror="imgFallback(this,${p.id},0)">`
  : jerseySVG(p,0);
}
function thumbMarkup(p){
 return p.img.length
  ? `<img src="${p.img[0]}" alt="${esc(p.club)}" loading="lazy" onerror="imgFallback(this,${p.id},0)">`
  : jerseySVG(p,0);
}
function card(p,i,animate=true){
 const s=minSize(p), pr=sizePrice(p,s), was=sizeWas(p,s);
 const delay=animate?` style="--d:${(i%4)*55}ms"`:'';
 const badgeNew=p.id>19&&!p.retro?'<span class="badge new">Baru</span>':'';
 const hover=p.img.length>1?`<img class="hover-img" src="${p.img[1]}" alt="" loading="lazy" onerror="this.remove()">`:'';
 return `<article class="card${animate?'':' show'}"${delay}><div class="card-media" data-open="${p.id}" aria-label="Lihat ${esc(p.club)}">${cardMedia(p)}${hover}<div class="card-shade"></div><div class="badges">${p.off?`<span class="badge off">−${p.off}%</span>`:''}${p.retro?'<span class="badge retro">Retro</span>':''}${badgeNew}<span class="badge type">${p.type}</span></div><span class="quick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg></span></div><div class="card-info"><div class="card-meta"><span>${p.liga}</span><span>${p.grade}</span></div><h3 data-open="${p.id}">${p.club}</h3><div class="size-line">${p.season} · ${p.sz.join(' · ')}</div><div class="price-row"><span class="price">${p.sz.length>1?'<small>Mulai</small> ':''}${rp(pr)}</span>${was?`<span class="was">${rp(was)}</span>`:''}${p.off?`<span class="save">Hemat ${p.off}%</span>`:''}</div><button class="btn card-buy" data-buy="${p.id}">Pilih ukuran <span class="arr">→</span></button></div></article>`;
}

function inRange(p,r){return r==='0'||(r==='1'&&p.sale<350000)||(r==='2'&&p.sale>=350000&&p.sale<=450000)||(r==='3'&&p.sale>450000)}
function filtered(){
 const q=F.q.toLowerCase().trim();
 let list=P.filter(p=>{
  const hay=(p.club+' '+p.liga+' '+p.type+' '+p.season+' '+p.grade+' '+(p.sponsor||'')+' '+(p.retro?'retro':'')).toLowerCase();
  return (!q||hay.includes(q))&&(!F.club||p.club===F.club)&&(!F.liga||p.liga===F.liga)&&inRange(p,F.price);
 });
 if(F.tag==='promo')list=list.filter(p=>p.off>0);
 if(F.tag==='retro')list=list.filter(p=>p.retro);
 if(F.tag==='player')list=list.filter(p=>p.grade==='Player Issue');
 if(F.sort==='new')list=list.slice().sort((a,b)=>b.id-a.id);
 if(F.sort==='low')list=list.slice().sort((a,b)=>sizePrice(a,minSize(a))-sizePrice(b,minSize(b)));
 if(F.sort==='high')list=list.slice().sort((a,b)=>sizePrice(b,minSize(b))-sizePrice(a,minSize(a)));
 if(F.sort==='disc')list=list.slice().sort((a,b)=>b.off-a.off);
 return list;
}
function render(animate=true){
 const list=filtered();
 $('#resCount').innerHTML=`<b>${list.length}</b> jersey ditemukan`;
 $('#grid').innerHTML=list.length
  ? list.slice(0,shown).map((p,i)=>card(p,i,animate)).join('')
  : '<div class="empty"><span class="eicon">?</span><h3>Tidak ada jersey yang cocok</h3><p>Coba kata kunci lain atau reset filter untuk melihat semua koleksi.</p><button class="btn ghost" data-reset>Reset filter</button></div>';
 const more=$('#more');
 more.hidden=list.length<=shown;
 more.textContent=`Muat ${Math.min(8,list.length-shown)} jersey lagi`;
 $$('.cat').forEach(c=>c.classList.toggle('on',c.dataset.l===F.liga));
 $$('#tags .chip').forEach(c=>c.classList.toggle('on',c.dataset.tag===F.tag));
 observe();
}
function refilter(){shown=12;render()}
function resetFilters(){
 F={q:'',club:'',liga:'',price:'0',sort:'featured',tag:''};
 $('#q').value='';$('#fClub').value='';$('#fLiga').value='';$('#fPrice').value='0';$('#fSort').value='featured';
 shown=12;render();
}

$('#cats').innerHTML=LIGAS.map((l,i)=>`<button class="cat" data-l="${l}"><span class="idx">0${i+1}</span><strong>${l}</strong><span>${P.filter(p=>p.liga===l).length} jersey</span><i class="arrow">↗</i></button>`).join('');
$('#fClub').innerHTML='<option value="">Semua klub</option>'+Array.from(new Set(P.map(p=>p.club))).sort((a,b)=>a.localeCompare(b)).map(c=>`<option>${c}</option>`).join('');
$('#fLiga').innerHTML='<option value="">Semua liga</option>'+LIGAS.map(l=>`<option>${l}</option>`).join('');
$('#tags').innerHTML=`<button class="chip on" data-tag="">Semua</button><button class="chip" data-tag="promo">Lagi diskon</button><button class="chip" data-tag="retro">Koleksi retro</button><button class="chip" data-tag="player">Player Issue</button>`;

$('#q').oninput=e=>{F.q=e.target.value;refilter()};
$('#fClub').onchange=e=>{F.club=e.target.value;refilter()};
$('#fLiga').onchange=e=>{F.liga=e.target.value;refilter()};
$('#fPrice').onchange=e=>{F.price=e.target.value;refilter()};
$('#fSort').onchange=e=>{F.sort=e.target.value;refilter()};
$('#tags').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;F.tag=b.dataset.tag;refilter()};
$('#reset').onclick=resetFilters;
$('#more').onclick=()=>{shown+=8;render(false)};
$('#cats').onclick=e=>{const b=e.target.closest('.cat');if(!b)return;F.liga=F.liga===b.dataset.l?'':b.dataset.l;$('#fLiga').value=F.liga;refilter();if(F.liga)document.querySelector('#katalog').scrollIntoView({behavior:'smooth'})};
$('#grid').onclick=e=>{
 if(e.target.closest('[data-reset]')){resetFilters();return}
 const buy=e.target.closest('[data-buy]');
 if(buy){openModal(+buy.dataset.buy,true);return}
 const open=e.target.closest('[data-open]');
 if(open)openModal(+open.dataset.open);
};

function galleryFor(p){
 if(p.img.length){
  const labels=['Tampilan depan','Detail logo','Detail bahan'];
  const g=p.img.map((src,i)=>({t:'img',src,label:labels[i]||'Foto produk'}));
  g.push({t:'svg',v:1,label:'Tampilan punggung'});
  return g;
 }
 return [{t:'svg',v:0,label:'Tampilan depan'},{t:'svg',v:1,label:'Tampilan punggung'},{t:'svg',v:2,label:'Detail bahan'}];
}
function viewMarkup(p,g){
 if(g.t==='img')return `<img src="${g.src}" alt="Jersey ${esc(p.club)} ${esc(g.label)}" loading="lazy" onerror="imgFallback(this,${p.id},0)">`;
 return jerseySVG(p,g.v);
}
function thumbView(p,g){
 if(g.t==='img')return `<img src="${g.src}" alt="" loading="lazy" onerror="imgFallback(this,${p.id},0)">`;
 return jerseySVG(p,g.v);
}
function descFor(p){
 return p.grade==='Player Issue'
  ? 'Bahan Player Issue: kain ultra-ringan dengan zona ventilasi dan potongan slim fit seperti jersey pemain di lapangan. Bordir logo rapi, nyaman dipakai main maupun nobar.'
  : p.retro
  ? 'Koleksi Retro Classic: potongan dan detail mengikuti musim ikonik, bahan dry-fit modern yang tetap adem. Cocok untuk kolektor dan pencinta sejarah klub.'
  : 'Bahan Grade Ori: poliester dry-fit lembut, menyerap keringat, potongan regular yang nyaman untuk harian dan nobar. Bordir logo dan jahitan rapat.';
}
function openModal(id,needSize=false){
 cur=P.find(p=>p.id===+id);
 if(!cur)return;
 curSize=cur.sz.includes('M')?'M':cur.sz[0];
 curQty=1;modalView=0;
 const p=cur,g=galleryFor(p);
 const sizes=SIZES.map(s=>{
  const ok=p.sz.includes(s);
  return `<button class="size-btn ${s===curSize?'on':''}" data-s="${s}" ${ok?'':'disabled'} aria-pressed="${s===curSize}"><b>${s}</b><span>${ok?shortPrice(sizePrice(p,s)):'Habis'}</span></button>`;
 }).join('');
 $('#modal').innerHTML=`<button class="ib mx" id="mClose" aria-label="Tutup"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="mbody"><div class="gallery"><div class="main" id="mMain">${viewMarkup(p,g[0])}<span class="view-label" id="mViewLabel">${g[0].label}</span></div><div class="thumbs" id="mThumbs">${g.map((x,i)=>`<button class="th ${i===0?'on':''}" data-v="${i}" aria-label="${x.label}" aria-pressed="${i===0}">${thumbView(p,x)}</button>`).join('')}</div></div><div class="mi"><span class="badge type">${p.type}</span>${p.retro?' <span class="badge retro">Retro</span>':''}${p.off?` <span class="badge off">−${p.off}%</span>`:''}<h2>${p.club}</h2><div class="m-meta">Musim ${p.season} · ${p.liga} · <b>${p.grade}</b></div><div class="m-grade"><i></i>${p.grade==='Player Issue'?'Slim fit · bahan ringan':'Regular fit · dry-fit'}</div><div class="price-block"><span class="m-price" id="mPrice"></span><span class="m-old" id="mOld"></span><span class="m-save" id="mSave"></span></div><p class="m-desc">${descFor(p)}</p><div class="size-head"><span class="fl">Pilih ukuran</span><span id="mSizeHint">Harga menyesuaikan ukuran</span></div><div class="size-grid" id="mSizes">${sizes}</div><div class="size-note">Ukuran tersedia: ${p.sz.join(', ')}. ${p.off?`Harga sudah termasuk diskon ${p.off}%.`:'Harga belum termasuk ongkir.'}</div><div class="err" id="mErr">${needSize?'Silakan cek ukuran dan harga sebelum menambahkan.':''}</div><div class="qrow"><div class="qty"><button id="mm" aria-label="Kurangi">−</button><span id="mq">1</span><button id="mp" aria-label="Tambah">+</button></div><button class="btn primary" id="mAdd">Tambah ke keranjang</button></div><details class="acc"><summary>Panduan ukuran (dalam cm)</summary><table><tr><th>Ukuran</th>${SIZES.map(s=>`<th>${s}</th>`).join('')}</tr><tr><td>Dada x Panjang</td>${SIZES.map(s=>`<td>${CHEST[s]}</td>`).join('')}</tr></table><p class="size-note">Cara ukur: lingkar dada diukur dari ketiak ke ketiak, panjang dari bahu ke ujung bawah jersey. Jika ragu, ambil satu ukuran lebih besar.</p></details><details class="acc"><summary>Bahan, pengiriman &amp; retur</summary><p class="size-note">Dikemas rapi dan dikirim dari Tangerang. Nomor resi dikirim lewat WhatsApp. Tukar ukuran gratis maksimal 7 hari selama jersey belum dicuci dan label masih lengkap.</p></details><div class="mini-perks"><span>Garansi tukar 7 hari</span><span>Stok real-time</span><span>Bisa COD</span><span>Admin fast response</span></div></div></div>`;
 show('#modal');
 $('#modal').scrollTop=0;
 updateModalPrice();
}
function updateModalPrice(){
 if(!cur||!curSize)return;
 const pr=sizePrice(cur,curSize),was=sizeWas(cur,curSize);
 $('#mPrice').textContent=rp(pr);
 $('#mPrice').classList.remove('pop');void $('#mPrice').offsetWidth;$('#mPrice').classList.add('pop');
 $('#mOld').textContent=was?rp(was):'';
 $('#mOld').hidden=!was;
 $('#mSave').textContent=was?`Hemat ${rp(was-pr)} (${cur.off}%)`:'';
 $('#mSave').hidden=!was;
 $('#mSizeHint').textContent=`Ukuran ${curSize} · ${cur.grade}`;
}
function setModalView(i){
 if(!cur)return;
 const g=galleryFor(cur)[i];
 modalView=i;
 $('#mMain').innerHTML=viewMarkup(cur,g)+`<span class="view-label" id="mViewLabel">${g.label}</span>`;
 $('#mViewLabel').textContent=g.label;
 $$('#mThumbs .th').forEach((b,j)=>{b.classList.toggle('on',j===i);b.setAttribute('aria-pressed',j===i)});
}
$('#modal').onclick=e=>{
 if(e.target.closest('#mClose'))return hide();
 const th=e.target.closest('#mThumbs .th');
 if(th){setModalView(+th.dataset.v);return}
 const sb=e.target.closest('.size-btn');
 if(sb&&!sb.disabled){
  curSize=sb.dataset.s;
  $$('#mSizes .size-btn').forEach(b=>{b.classList.toggle('on',b===sb);b.setAttribute('aria-pressed',b===sb)});
  $('#mErr').textContent='';
  updateModalPrice();
  return;
 }
 if(e.target.id==='mm'){curQty=Math.max(1,curQty-1);$('#mq').textContent=curQty;return}
 if(e.target.id==='mp'){curQty=Math.min(20,curQty+1);$('#mq').textContent=curQty;return}
 if(e.target.id==='mAdd'){
  if(!curSize){$('#mErr').textContent='Pilih ukuran dulu sebelum menambah ke keranjang.';return}
  addToCart(cur,curSize,curQty);
  hide();
  show('#drawer');
 }
};

function loadCart(){
 try{
  const raw=localStorage.getItem(CART_KEY);
  if(!raw)return;
  const data=JSON.parse(raw);
  if(!Array.isArray(data))return;
  cart=data.map(it=>{
   const p=P.find(x=>x.id===Number(it.id));
   if(!p||!p.sz.includes(it.size))return null;
   return {id:p.id,size:it.size,qty:Math.max(1,Math.min(20,Number(it.qty)||1))};
  }).filter(Boolean);
 }catch(e){cart=[]}
}
function saveCart(){
 try{localStorage.setItem(CART_KEY,JSON.stringify(cart))}catch(e){}
}
function totals(){
 let sub=0,total=0;
 cart.forEach(c=>{
  const p=P.find(x=>x.id===c.id);
  if(!p)return;
  sub+=(sizeWas(p,c.size)||sizePrice(p,c.size))*c.qty;
  total+=sizePrice(p,c.size)*c.qty;
 });
 return {sub,total,disc:sub-total};
}
function renderCart(){
 const n=cart.reduce((a,c)=>a+c.qty,0);
 $('#cnt').textContent=n;
 $('#drawerCount').textContent=`${n} item`;
 $('#clearCart').hidden=!n;
 if(!n){
  $('#items').innerHTML='<div class="empty"><span class="eicon">0</span><h3>Keranjang masih kosong</h3><p>Pilih jersey dari katalog, lalu tentukan ukuran dan jumlahnya.</p><button class="btn ghost" data-shop>Mulai belanja</button></div>';
  $('#ofm').hidden=true;
  $('#checkout').disabled=true;
  $('#subtotal').textContent='Rp 0';
  $('#discount').textContent='−Rp 0';
  $('#discRow').hidden=true;
  $('#total').textContent='Rp 0';
  return;
 }
 $('#items').innerHTML=cart.map(c=>{
  const p=P.find(x=>x.id===c.id);
  if(!p)return '';
  const pr=sizePrice(p,c.size),was=sizeWas(p,c.size),key=p.id+'-'+c.size;
  return `<div class="it"><div class="it-thumb">${thumbMarkup(p)}</div><div class="it-info"><b>${p.club} ${p.type}</b><small>${p.season} · Ukuran ${c.size} · ${p.grade}</small><div class="it-price">${rp(pr)}${was?`<s>${rp(was)}</s>`:''}</div><div class="qty"><button data-d="-1" data-k="${key}" aria-label="Kurangi">−</button><span>${c.qty}</span><button data-d="1" data-k="${key}" aria-label="Tambah">+</button></div></div><button class="rm" data-rm="${key}" aria-label="Hapus ${esc(p.club)}">×</button></div>`;
 }).join('');
 $('#ofm').hidden=false;
 $('#checkout').disabled=false;
 const t=totals();
 $('#subtotal').textContent=rp(t.sub);
 $('#discount').textContent='−'+rp(t.disc);
 $('#discRow').hidden=!t.disc;
 $('#total').textContent=rp(t.total);
}
function addToCart(p,size,qty){
 if(!p||!size||!p.sz.includes(size))return;
 const it=cart.find(c=>c.id===p.id&&c.size===size);
 if(it)it.qty=Math.min(20,it.qty+qty);
 else cart.push({id:p.id,size,qty:Math.max(1,Math.min(20,qty))});
 saveCart();renderCart();
 const c=$('#cnt');c.classList.add('pop');setTimeout(()=>c.classList.remove('pop'),260);
 toast(`${p.club} ${p.type} ukuran ${size} masuk keranjang`);
}
$('#items').onclick=e=>{
 if(e.target.closest('[data-shop]')){hide();location.hash='#katalog';return}
 const d=e.target.closest('[data-d]'),r=e.target.closest('[data-rm]');
 if(d){
  const c=cart.find(x=>x.id+'-'+x.size===d.dataset.k);
  if(!c)return;
  c.qty+=Number(d.dataset.d);
  if(c.qty<1)cart=cart.filter(x=>x!==c);
  else if(c.qty>20)c.qty=20;
  saveCart();renderCart();
 }
 if(r){cart=cart.filter(x=>x.id+'-'+x.size!==r.dataset.rm);saveCart();renderCart()}
};
$('#clearCart').onclick=()=>{cart=[];saveCart();renderCart();toast('Keranjang dikosongkan')};
window.addEventListener('storage',e=>{if(e.key===CART_KEY){loadCart();renderCart()}});

const WILS=['https://api.datawilayah.com/','https://emsifa.github.io/api-wilayah-indonesia/api/','https://cdn.jsdelivr.net/gh/emsifa/api-wilayah-indonesia@gh-pages/api/'],WC={};
let wi=0;
async function wget(p){
 if(WC[p])return WC[p];
 if(wi===0){
  try{
   const ep=p==='provinces'?'provinces':p.startsWith('regencies/')?'regencies?province_code='+p.split('/')[1]:p.startsWith('districts/')?'districts?regency_code='+p.split('/')[1]:'villages?district_code='+p.split('/')[1];
   const c=new AbortController(),t=setTimeout(()=>c.abort(),6000);
   const r=await fetch('https://api.datawilayah.com/'+ep,{signal:c.signal,mode:'cors'});
   clearTimeout(t);
   if(r.ok){
    const j=await r.json(),d=j.data||j;
    if(Array.isArray(d)&&d.length)return WC[p]=d.map(x=>({id:String(x.code||x.id),name:x.name||x.nama}));
   }
  }catch(e){}
  wi=1;
 }
 for(let k=1;k<WILS.length;k++){
  const j=(wi-1+k)%(WILS.length-1)+1;
  try{
   const c=new AbortController(),t=setTimeout(()=>c.abort(),8000);
   const r=await fetch(WILS[j]+p+'.json',{signal:c.signal,mode:'cors'});
   clearTimeout(t);
   if(!r.ok)continue;
   const d=await r.json();
   if(Array.isArray(d)&&d.length){wi=j;return WC[p]=d}
  }catch(e){}
 }
 throw 0;
}
const tc=t=>t.toLowerCase().replace(/(^|[\s\-\/(])([a-z])/g,(m,a,b)=>a+b.toUpperCase());
const LVL=['Provinsi','Kota/Kabupaten','Kecamatan','Kelurahan/Desa'];
let sel=[],lvl=0,pkData=[],place=null;
function pkPath(){return lvl===0?'provinces':lvl===1?`regencies/${sel[0].id}`:lvl===2?`districts/${sel[1].id}`:`villages/${sel[2].id}`}
function pkSteps(){$('#pkSteps').innerHTML=sel.map((x,i)=>`<button class="pkd" data-i="${i}">${tc(x.name)}</button>`).join('')+`<div class="pkd cur">Pilih ${LVL[lvl]}</div>`}
function pkRender(){const q=$('#pkQ').value.toLowerCase().trim(),l=pkData.filter(x=>!q||x.name.toLowerCase().includes(q));$('#pkList').innerHTML=l.length?l.map(x=>`<button class="pki" data-id="${x.id}">${tc(x.name)}</button>`).join(''):'<div class="empty">Tidak ditemukan.</div>'}
async function pkLoad(){
 $('#pkQ').value='';pkSteps();$('#pkList').innerHTML='<div class="empty">Memuat daftar wilayah...</div>';
 try{pkData=await wget(pkPath())}catch(e){$('#pkList').innerHTML='<div class="empty">Data wilayah gagal dimuat. Cek koneksi internet kamu.<br><button class="chip" id="pkRetry" style="margin-top:14px">Coba lagi</button> <button class="chip" id="pkManual" style="margin-top:14px">Isi manual</button></div>';return}
 pkRender();$('#pkList').scrollTop=0;
}
function pkClose(){$('#pk').classList.remove('open');if(!$('#drawer').classList.contains('open')&&!$('#modal').classList.contains('open'))document.body.style.overflow=''}
$('#oLokasi').onclick=()=>{sel=[];lvl=0;$('#pk').classList.add('open');document.body.style.overflow='hidden';pkLoad()};
$('#pkBack').onclick=()=>{if(lvl>0){sel.pop();lvl--;pkLoad()}else pkClose()};
$('#pkQ').oninput=pkRender;
$('#pkSteps').onclick=e=>{const b=e.target.closest('[data-i]');if(!b)return;const i=+b.dataset.i;sel=sel.slice(0,i);lvl=i;pkLoad()};
$('#pkList').onclick=e=>{
 if(e.target.id==='pkRetry')return pkLoad();
 if(e.target.id==='pkManual'){pkClose();setManual(true);return}
 const b=e.target.closest('.pki');if(!b)return;
 const it=pkData.find(x=>String(x.id)===b.dataset.id);if(!it)return;
 sel[lvl]={id:it.id,name:it.name};
 if(lvl<3){lvl++;pkLoad()}else{
  place={prov:sel[0].name,kab:sel[1].name,kec:sel[2].name,kel:sel[3].name};
  const t=$('#locTxt');t.className='';t.textContent=[place.kel,place.kec,place.kab,place.prov].map(tc).join(', ');
  $('#ofErr').textContent='';pkClose();
 }
};
function setManual(on){$('#manBox').hidden=!on;$('#locFg').hidden=on;$('#manToggle').textContent=on?'Pakai daftar wilayah':'Daftar wilayah tidak muncul? Isi manual';if(on)$('#mProv').focus()}
$('#manToggle').onclick=()=>setManual($('#manBox').hidden);
$('#oKodePos').oninput=e=>{e.target.value=e.target.value.replace(/\D/g,'')};
let pay='';
const PAYNOTE={'Transfer Bank':'Nomor rekening dikirim admin lewat WhatsApp setelah pesanan masuk.','QRIS':'Kode QRIS dikirim admin lewat WhatsApp setelah pesanan masuk.','E-Wallet':'Nomor e-wallet dikirim admin lewat WhatsApp setelah pesanan masuk.','COD':'Bayar ke kurir saat barang tiba. Ketersediaan COD dikonfirmasi admin.'};
$('#payOpts').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;pay=b.dataset.p;$$('#payOpts .chip').forEach(x=>x.classList.toggle('on',x===b));$('#payNote').textContent=PAYNOTE[pay];$('#ofErr').textContent=''};
$('#checkout').onclick=()=>{
 if(!cart.length)return;
 const v=id=>$(id).value.trim(),nm=v('#oNama'),tp=v('#oTelp').replace(/[\s.\-()]/g,''),kp=v('#oKodePos'),jl=v('#oJalan'),dt=v('#oDetail'),ct=v('#oCatatan');
 let el='',msg='';
 const man=!$('#manBox').hidden,pl=man?{prov:v('#mProv'),kab:v('#mKab'),kec:v('#mKec'),kel:v('#mKel')}:place;
 if(!nm){el='#oNama';msg='Isi nama lengkap dulu.'}
 else if(!/^(\+62|62|0)8\d{7,12}$/.test(tp)){el='#oTelp';msg='Nomor telepon belum valid (contoh: 08123456789).'}
 else if(!pl||!pl.prov||!pl.kab||!pl.kec){el=man?'#mProv':'#oLokasi';msg=man?'Isi provinsi, kota/kabupaten, dan kecamatan dulu.':'Pilih provinsi, kota, kecamatan, dan kelurahan dulu.'}
 else if(!/^\d{5}$/.test(kp)){el='#oKodePos';msg='Kode pos harus 5 digit angka.'}
 else if(!jl){el='#oJalan';msg='Isi nama jalan, gedung, atau no. rumah.'}
 else if(!pay){el='#payOpts';msg='Pilih metode pembayaran dulu.'}
 if(msg){$('#ofErr').textContent=msg;$(el).scrollIntoView({block:'center'});if($(el).focus&&el!=='#payOpts')$(el).focus();return}
 let sub=0,total=0,m='Halo JERZI, saya mau pesan:\n\n';
 cart.forEach((c,i)=>{
  const p=P.find(x=>x.id===c.id),pr=sizePrice(p,c.size),was=sizeWas(p,c.size)||pr;
  sub+=was*c.qty;total+=pr*c.qty;
  m+=`${i+1}. ${p.club} ${p.type} ${p.season} (${p.grade})\n   Ukuran ${c.size} x ${c.qty} = ${rp(pr*c.qty)}${p.off?` (diskon ${p.off}%, normal ${rp(was*c.qty)})`:''}\n`;
 });
 m+=`\nSubtotal: ${rp(sub)}\n`;if(sub-total>0)m+=`Diskon: -${rp(sub-total)}\n`;m+=`Total: ${rp(total)}\n\n*Data Pemesan*\nNama: ${nm}\nNo. Telepon: ${tp}\nAlamat: ${jl}${dt?', '+dt:''}\n${pl.kel?'Kelurahan/Desa: '+tc(pl.kel)+'\n':''}Kecamatan: ${tc(pl.kec)}\nKota/Kab: ${tc(pl.kab)}\nProvinsi: ${tc(pl.prov)}\nKode Pos: ${kp}\n`;
 if(ct)m+=`Catatan: ${ct}\n`;
 m+=`\n*Metode Pembayaran*: ${pay}\n\nTerima kasih!`;
 window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank');
 toast('Pesanan diteruskan ke WhatsApp admin');
};

let openEl=null;
function show(sel){
 const el=$(sel);if(!el)return;
 if($('#menu').classList.contains('open'))closeMenu();
 if(openEl&&openEl!==el)openEl.classList.remove('open');
 openEl=el;el.classList.add('open');$('#ov').classList.add('open');document.body.style.overflow='hidden';
}
function hide(keep){
 if(openEl){openEl.classList.remove('open');openEl=null}
 if(!keep){$('#ov').classList.remove('open');document.body.style.overflow=''}
}
$('#cartBtn').onclick=()=>show('#drawer');
$('#closeCart').onclick=()=>hide();
$('#ov').onclick=()=>hide();
document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;
 if($('#menu').classList.contains('open')){closeMenu();return}
 if($('#pk').classList.contains('open'))pkClose();else hide();
});
function closeMenu(){const m=$('#menu');m.classList.remove('open');$('#mscrim').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}
$('#burger').onclick=()=>{const m=$('#menu'),o=m.classList.toggle('open');$('#mscrim').classList.toggle('open',o);$('#burger').setAttribute('aria-expanded',o);document.body.classList.toggle('menu-open',o)};
$('#mscrim').onclick=closeMenu;
$('#menu').onclick=e=>{if(e.target.tagName==='A')closeMenu()};
$('#heroView').onclick=()=>openModal(12,true);

let tt;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2400)}

let io;
function observe(){
 if(io)io.disconnect();
 io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.07,rootMargin:'0px 0px -40px'});
 $$('.reveal:not(.show),.card:not(.show)').forEach(el=>io.observe(el));
}
const revTrack=$('#revTrack');
$('#revPrev').onclick=()=>revTrack.scrollBy({left:-revTrack.clientWidth*.82,behavior:'smooth'});
$('#revNext').onclick=()=>revTrack.scrollBy({left:revTrack.clientWidth*.82,behavior:'smooth'});

const prog=$('#progress'),topBtn=$('#top');
window.addEventListener('scroll',()=>{
 const h=document.documentElement;
 const pct=h.scrollTop/(h.scrollHeight-h.clientHeight||1);
 prog.style.width=(pct*100)+'%';
 topBtn.classList.toggle('show',h.scrollTop>680);
},{passive:true});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const stage=document.querySelector('.stage'),hc=$('#heroCard');
 stage.addEventListener('pointermove',e=>{
  const r=stage.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  hc.style.transform=`rotate(${2.5-x*4}deg) translate(${x*8}px,${y*8-4}px)`;
 });
 stage.addEventListener('pointerleave',()=>{hc.style.transform=''});
}

loadCart();
render();
renderCart();
(function(){
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 $$('.stat b').forEach(el=>{
  const target=Number(el.textContent);
  if(!isFinite(target))return;
  const dec=String(target).includes('.')?1:0,start=performance.now();
  function tick(now){
   const k=Math.min(1,(now-start)/900),v=target*(1-Math.pow(1-k,3));
   el.textContent=dec?v.toFixed(1):Math.round(v).toString();
   if(k<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
 });
})();
