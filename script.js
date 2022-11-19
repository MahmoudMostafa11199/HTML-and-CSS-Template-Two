///////////////////////////////////////////////////////////
// Current Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



///////////////////////////////////////////////////////////
// Mobile Nav

const btnNav=document.querySelector(".btn-mobile-nav")
const headerEl=document.querySelector(".header")

btnNav.addEventListener("click",function(){
	headerEl.classList.toggle("nav-open")
})

///////////////////////////////////////////////////////////
// Sticky Nav

const landingEl =document.querySelector(".landing");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);

		if (!ent.isIntersecting) {
			document.body.classList.add("sticky")
			// landingEl.classList.add("sticky")
		}

		if (ent.isIntersecting) {
			document.body.classList.remove("sticky")
			// landingEl.classList.remove("sticky")
		}
	},
	{
		root: null,
		threshold : 0,
		rootMargin: "-80px",
	})

obs.observe(landingEl);
