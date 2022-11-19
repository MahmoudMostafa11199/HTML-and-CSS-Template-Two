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

///////////////////////////////////////////////////////////
// Smoth Scrolling

allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
	link.addEventListener("click", function(e) {
		e.preventDefault();

		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#")
      		window.scrollTo({
        	top: 0,
        	behavior: "smooth",
		    });

	    // Scroll to other links
	    if (href !== "#" && href.startsWith("#")) {
	      const sectionEl = document.querySelector(href);
	      sectionEl.scrollIntoView({ behavior: "smooth" });
	    }

	    // Close mobile naviagtion
	    if (link.classList.contains("nav-link"))
	      headerEl.classList.toggle("nav-open");
	})
})