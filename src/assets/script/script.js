(function() {
	const parent = document.querySelector('#showOnScroll')
	const observed = document.querySelectorAll('#showOnScroll > div')

	window.addEventListener('DOMContentLoaded', (e) => {
		window.IntersectionObserver !== undefined && assignIntialProps()
	})

	function assignIntialProps() {
		const observer = new IntersectionObserver(showElements,
			{root: null, rootMargin: '0px', threshold: .4}
		)
		Array.from(observed).forEach(e => {
			e.style.visibility = 'hidden'
			e.style.opacity = 0
			observer.observe(e)
		})
		
	};
	function showElements(arr) {
		arr.forEach((ele) => {
			const observed = ele

			if (observed.isIntersecting) {
				observed.target.style.visibility = 'visible'
				observed.target.style.opacity = 1
			}
		})
	}

	

})()