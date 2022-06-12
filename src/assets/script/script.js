(function() {
	const parent = document.querySelector('#showOnScroll')
	const elementsToObserve = document.querySelectorAll('#showOnScroll > div, .qa-sec')

	window.addEventListener('DOMContentLoaded', (e) => {
		window.IntersectionObserver !== undefined && assignIntialProps()
	})

	function assignIntialProps() {
		const observer = new IntersectionObserver(showElements,
			{root: null, rootMargin: '0px', threshold: .4}
		)
		Array.from(elementsToObserve).forEach(e => {
			e.style.visibility = 'hidden'
			e.style.opacity = 0
			observer.observe(e)
		})
		
	};
	function showElements(arr) {
		arr.forEach((ele, i) => {
			// console.log(ele.target)
			const observed = ele

			if (observed.isIntersecting) {
				observed.target.style.visibility = 'visible'
				observed.target.style.opacity = '1'
				assignClassnames(observed.target, ['animate__animated', 'animate__fadeInUp'])
			}
		})
	}
	function assignClassnames(ele, classnames) {
		classnames.forEach(name => ele.classList.add(name))
	}

})()