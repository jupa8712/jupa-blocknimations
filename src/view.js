/**
 * Default animation mode: play each block's animation once, the first time
 * it enters the viewport. Works the same whether the block starts already
 * visible on page load or is scrolled into view later, since the observer
 * checks intersection immediately on `observe()`.
 *
 * Blocks that enter together (e.g. a row of columns) are staggered
 * automatically based on their vertical order, unless the block already has
 * a manual delay set from the toolbar (an `animate__delay-*` class).
 */
const observer = new IntersectionObserver(
	( entries ) => {
		entries
			.filter( ( entry ) => entry.isIntersecting )
			.sort( ( a, b ) => a.boundingClientRect.top - b.boundingClientRect.top )
			.forEach( ( entry, index ) => {
				const hasManualDelay = [ ...entry.target.classList ].some( ( c ) =>
					c.startsWith( 'animate__delay-' )
				);

				if ( ! hasManualDelay ) {
					entry.target.style.animationDelay = `${ index * 0.15 }s`;
				}

				entry.target.classList.add( 'animate__inView' );
				observer.unobserve( entry.target );
			} );
	},
	{ rootMargin: '0px 0px -10% 0px' }
);

document.querySelectorAll( '.animate__animated' ).forEach( ( element ) => {
	observer.observe( element );
} );
