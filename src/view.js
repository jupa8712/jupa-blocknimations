/**
 * "On Enter" mode (the default): play each block's animation once, the
 * first time it enters the viewport. Works the same whether the block
 * starts already visible on page load or is scrolled into view later,
 * since the observer checks intersection immediately on `observe()`.
 *
 * Blocks that enter together (e.g. a row of columns) are staggered
 * automatically based on their vertical order, unless the block already has
 * a manual delay set from the toolbar (an `animate__delay-*` class).
 *
 * "Scroll driven" blocks are skipped here when the browser supports
 * animation-timeline, since that mode is handled entirely by CSS
 * (see src/style.scss) — the two modes never touch the same element. If
 * the browser doesn't support it, those blocks fall back to this same
 * "on enter" handling instead of never animating.
 */
const supportsScrollDriven = CSS.supports( 'animation-timeline: view()' );

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
	const isScrollDriven = element.classList.contains( 'animate__scrollDriven' );

	if ( isScrollDriven && supportsScrollDriven ) {
		return;
	}

	observer.observe( element );
} );
