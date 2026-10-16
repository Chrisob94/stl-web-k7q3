(function(){
  var all=window.GAMES||[];
  var games=all.filter(function(g){return g&&!g.hidden});
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function joinNames(list){
    var names=list.map(function(g){return g.name});
    if(names.length<2) return names.join('');
    if(names.length===2) return names[0]+' and '+names[1];
    return names.slice(0,-1).join(', ')+' and '+names[names.length-1];
  }
  var label=joinNames(games);
  var studio='Static Toad Labs is an independent iOS game studio from Ireland, making '+(label||'mobile games')+'.';
  var meta=document.querySelector('meta[name="description"][data-games]');
  var og=document.querySelector('meta[property="og:description"][data-games]');
  if(meta) meta.setAttribute('content',studio);
  if(og) og.setAttribute('content',studio);
  var play=games.length===1?label+' (the "Game")':(games.length?'our mobile games ('+label+' — the "Games")':'our mobile games (the "Games")');
  var terms=games.length===1?label+' (the "Game")':(games.length?'our games '+label+' (the "Games")':'our games (the "Games")');
  var nodes=document.querySelectorAll('[data-legal-games]');
  for(var n=0;n<nodes.length;n++) nodes[n].textContent=nodes[n].getAttribute('data-legal-games')==='terms'?terms:play;
  var heading=document.querySelector('[data-games-heading]');
  if(heading) heading.textContent=games.length===1?'Our game':'Our games';
  var cta=document.querySelector('[data-games-cta]');
  if(cta) cta.textContent=games.length===1?'See the game':'See our games';
  var root=document.getElementById('games-list');
  if(root){
    if(games.length===1) root.classList.add('single');
    root.innerHTML=games.map(function(g,i){
      var base='assets/games/'+g.slug+'/';
      var shots=(g.screenshots&&g.screenshots.length?g.screenshots:[null,null,null]).map(function(s,k){
        return '<div class="phone"><div class="notch"></div>'+(s?'<img loading="lazy" src="'+base+esc(s)+'" alt="'+esc(g.name)+' screenshot '+(k+1)+'">':'<div class="ph">Screenshot '+(k+1)+'<small>coming soon</small></div>')+'</div>';}).join('');
      var hero0=g.titleScreen?'<img loading="lazy" src="'+base+esc(g.titleScreen)+'" alt="'+esc(g.name)+' title screen">':'<div class="ph">Title screen<small>coming soon</small></div>';
      var hero='<div class="phone vphone"><div class="notch"></div>'+hero0+'</div>';
      var badge=g.appStoreUrl?'<a class="badge" href="'+esc(g.appStoreUrl)+'" target="_blank" rel="noopener"> Download on the App Store</a>':'<span class="badge soon"> App Store — coming soon</span>';
      var L=g.links||{},names={website:'Website',testflight:'TestFlight beta',support:'Support',privacy:'Privacy',x:'X',instagram:'Instagram',tiktok:'TikTok',youtube:'YouTube',discord:'Discord'};
      var lk=Object.keys(names).filter(function(k){return L[k]}).map(function(k){return '<a href="'+esc(L[k])+'" target="_blank" rel="noopener">'+names[k]+'</a>'}).join('');
      var links='<div class="glinks">'+(lk||'<span class="none">Links coming soon</span>')+'</div>';
      var icon=g.icon?'<img class="appicon" src="'+base+esc(g.icon)+'" alt="'+esc(g.name)+' app icon">':'<div class="appicon ph">icon</div>';
      var num=games.length>1?'<span class="num">0'+(i+1)+'</span>':'';
      return '<article class="game'+(games.length>1&&i%2?' rev':'')+'" id="'+esc(g.slug)+'" style="--accent:'+esc(g.accent)+'">'+
        '<div class="info">'+num+'<div class="title">'+icon+'<h3>'+esc(g.name)+'</h3></div><p class="tagline">'+esc(g.tagline)+'</p><p>'+esc(g.description)+'</p>'+
        (g.features&&g.features.length?'<ul class="feat">'+g.features.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul>':'')+'<div class="tags">'+g.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div>'+badge+links+
        '</div><div class="shots">'+hero+shots+'</div></article>';
    }).join('');
  }
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();
document.querySelector('.menu')&&document.querySelector('.menu').addEventListener('click',function(){document.body.classList.toggle('nav-open')});
