const showBtn = document.querSelector('.navbtn');
const topNav = document.querSelector('.top-nav');

showBtn.addEventListener('click',function(){
	if (topNav.classList.contains('shownav')) {
		topNav.classList.remove('shownav');
		showBtn.innerHTML=<i class=" fas fa-bars"></i>;

	} esle{

		topNav.classList.add('shownav');
		showBtn.innerHTML=<i class=" fas fa-times"></i>;

	}
});