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
const supportsScrollDriven = CSS.supports('animation-timeline: view()');

const observer = new IntersectionObserver(
	(entries) => {
		entries
			.filter((entry) => entry.isIntersecting)
			.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
			.forEach((entry, index) => {
				const hasManualDelay = [...entry.target.classList].some((c) =>
					c.startsWith('animate__delay-')
				);

				if (!hasManualDelay) {
					entry.target.style.animationDelay = `${index * 0.15}s`;
				}

				entry.target.classList.add('animate__inView');
				observer.unobserve(entry.target);
			});
	},
	{ rootMargin: '0px 0px -10% 0px' }
);

// Guard against observing the same element twice (e.g. if a re-scan runs
// while an element is still pending).
const observed = new WeakSet();

const observeElement = (element) => {
	const isScrollDriven = element.classList.contains('animate__scrollDriven');

	// Scroll-driven blocks are handled entirely by CSS where supported,
	// so the observer never touches them — they fall back to this same
	// "on enter" handling only in browsers without animation-timeline.
	if ((isScrollDriven && supportsScrollDriven) || observed.has(element)) {
		return;
	}

	observed.add(element);
	observer.observe(element);
};

// Scan the whole document (including any element added after this runs),
// picking up blocks injected dynamically (lazy embeds, carousels, AJAX
// pagination, infinite scroll, etc.).
const scan = () => {
	document.querySelectorAll('.animate__animated').forEach(observeElement);
};

scan();

// Re-scan whenever new nodes enter the DOM so content injected after the
// initial page load still gets observed. Debounced slightly to avoid
// re-scanning on every tiny mutation during heavy renders.
let scanTimer;
const scheduleScan = () => {
	clearTimeout(scanTimer);
	scanTimer = setTimeout(scan, 100);
};

if (typeof MutationObserver !== 'undefined') {
	new MutationObserver(scheduleScan).observe(document.body, {
		childList: true,
		subtree: true,
	});
}
