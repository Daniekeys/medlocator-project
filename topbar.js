const toggleBtn = document.querySelector('.search-toogler');
const topbarLeft = document.querySelector('.topbar-left');

toggleBtn.addEventListener('click', ()=> {
 topbarLeft.classList.toggle('active');
 console.log("i dey here");
})