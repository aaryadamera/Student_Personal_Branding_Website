document.addEventListener('DOMContentLoaded', function(){
  // set years
  const years = [document.getElementById('year'), document.getElementById('year2'), document.getElementById('year3'), document.getElementById('year4'), document.getElementById('year5')];
  years.forEach(el => el && (el.textContent = new Date().getFullYear()));

  // reveal on scroll simple
  const reveals = document.querySelectorAll('.reveal');
  function revealOnScroll(){ 
    for(const r of reveals){
      const rect = r.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        r.style.animationPlayState = 'running';
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
