import { SVG, Path } from '@wordpress/primitives';

export const mouse = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
		<rect x="6.75" y="3" width="10.5" height="18" rx="5.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
		<rect x="11.25" y="7" width="1.5" height="4" rx="0.375" fill="currentColor" />
	</SVG>
);

export const lightning = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
		<Path
			d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</SVG>
);
