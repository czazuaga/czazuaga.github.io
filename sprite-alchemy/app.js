(function(){
  const links=[...document.querySelectorAll('.nav a')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function tick(){
    let current=sections[0];
    for(const s of sections){ if(s.getBoundingClientRect().top<130) current=s; }
    links.forEach(a=>a.classList.toggle('active',current&&a.getAttribute('href')==='#'+current.id));
  }
  document.addEventListener('scroll',tick,{passive:true});
  tick();
})();
