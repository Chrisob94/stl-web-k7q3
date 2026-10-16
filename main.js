(function(){
  var root=document.getElementById('games-list'); if(!root||!window.GAMES) return;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  root.innerHTML=GAMES.map(function(g,i){
    var base='assets/games/'+g.slug+'/';
    var shots=(g.screenshots.length?g.screenshots:[null,null,null]).map(function(s,k){
      return '<div class="phone"><div class="notch"></div>'+(s?'<img loading="lazy" src="'+base+esc(s)+'" alt="'+esc(g.name)+' screenshot '+(k+1)+'">':'<div class="ph">Screenshot '+(k+1)+'<small>coming soon</small></div>')+'</div>';}).join('');
    var hero0=g.titleScreen?'<img loading="lazy" src="'+base+esc(g.titleScreen)+'" alt="'+esc(g.name)+' title screen">':'<div class="ph">Title screen<small>coming soon</small></div>';
    var hero='<div class="phone vphone"><div class="notch"></div>'+hero0+'</div>';
    var badge=g.appStoreUrl?'<a class="badge" href="'+esc(g.appStoreUrl)+'" target="_blank" rel="noopener"> Download on the App Store</a>':'<span class="badge soon"> App Store — coming soon</span>';
    var L=g.links||{},names={website:'Website',testflight:'TestFlight beta',support:'Support',privacy:'Privacy',x:'X',instagram:'Instagram',tiktok:'TikTok',youtube:'YouTube',discord:'Discord'};
    var lk=Object.keys(names).filter(function(k){return L[k]}).map(function(k){return '<a href="'+esc(L[k])+'" target="_blank" rel="noopener">'+names[k]+'</a>'}).join('');
    var links='<div class="glinks">'+(lk||'<span class="none">Links coming soon</span>')+'</div>';
    var icon=g.icon?'<img class="appicon" src="'+base+esc(g.icon)+'" alt="'+esc(g.name)+' app icon">':'<div class="appicon ph">icon</div>';
    return '<article class="game'+(i%2?' rev':'')+'" id="'+g.slug+'" style="--accent:'+g.accent+'">'+
      '<div class="info"><span class="num">0'+(i+1)+'</span><div class="title">'+icon+'<h3>'+esc(g.name)+'</h3></div><p class="tagline">'+esc(g.tagline)+'</p><p>'+esc(g.description)+'</p>'+
      (g.features&&g.features.length?'<ul class="feat">'+g.features.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul>':'')+'<div class="tags">'+g.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div>'+badge+links+
      '</div><div class="shots">'+hero+shots+'</div></article>';
  }).join('');
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();
document.querySelector('.menu')&&document.querySelector('.menu').addEventListener('click',function(){document.body.classList.toggle('nav-open')});
