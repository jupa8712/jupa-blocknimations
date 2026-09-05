import { __ } from '@wordpress/i18n';

export const ListAnimate = [
	{
		title: __('None', 'jupa-blocknimations'),
		value: 'none-default',
	},
	{
		title: 'fadeIn',
		value: 'animate__fadeIn',
	},
	{
		title: 'fadeInUp',
		value: 'animate__fadeInUp',
	},
	{
		title: 'fadeInRight',
		value: 'animate__fadeInRight',
	},
	{
		title: 'fadeInDown',
		value: 'animate__fadeInDown',
	},
	{
		title: 'fadeInLeft',
		value: 'animate__fadeInLeft',
	},
];

export const ListDelay = [
	{
		title: __('None', 'jupa-blocknimations'),
		value: 'none-default',
	},
	{
		title: __('Delay 200ms', 'jupa-blocknimations'),
		value: 'animate__delay-200',
	},
	{
		title: __('Delay 400ms', 'jupa-blocknimations'),
		value: 'animate__delay-400',
	},
	{
		title: __('Delay 600ms', 'jupa-blocknimations'),
		value: 'animate__delay-600',
	},
	{
		title: __('Delay 800ms', 'jupa-blocknimations'),
		value: 'animate__delay-800',
	},
	{
		title: __('Delay 1000ms', 'jupa-blocknimations'),
		value: 'animate__delay-1000',
	},
	{
		title: __('Delay 1500ms', 'jupa-blocknimations'),
		value: 'animate__delay-1500',
	},
	{
		title: __('Delay 2000ms', 'jupa-blocknimations'),
		value: 'animate__delay-2000',
	},
	{
		title: __('Delay 2500ms', 'jupa-blocknimations'),
		value: 'animate__delay-2500',
	},
	{
		title: __('Delay 3000ms', 'jupa-blocknimations'),
		value: 'animate__delay-3000',
	},
];

export const ListAnimationType = [
	{
		title: __('On Enter', 'jupa-blocknimations'),
		value: 'none-default',
	},
	{
		title: __('Scroll driven', 'jupa-blocknimations'),
		value: 'animate__scrollDriven',
	},
];

// Full Animate.css catalog (97 animations), grouped the same way the
// library's own docs group them, plus our own custom "Reveal" group. Shown
// in the "Advance" modal; the toolbar keeps only the curated ListAnimate /
// ListAnimateImages subsets above.
export const ListAnimateAll = [
	{
		label: __('Attention seekers', 'jupa-blocknimations'),
		options: [
			'bounce',
			'flash',
			'pulse',
			'rubberBand',
			'shakeX',
			'shakeY',
			'headShake',
			'swing',
			'tada',
			'wobble',
			'jello',
			'heartBeat',
		],
	},
	{
		label: __('Back entrances', 'jupa-blocknimations'),
		options: ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],
	},
	{
		label: __('Back exits', 'jupa-blocknimations'),
		options: ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],
	},
	{
		label: __('Bouncing entrances', 'jupa-blocknimations'),
		options: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
	},
	{
		label: __('Bouncing exits', 'jupa-blocknimations'),
		options: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
	},
	{
		label: __('Fading entrances', 'jupa-blocknimations'),
		options: [
			'fadeIn',
			'fadeInDown',
			'fadeInDownBig',
			'fadeInLeft',
			'fadeInLeftBig',
			'fadeInRight',
			'fadeInRightBig',
			'fadeInUp',
			'fadeInUpBig',
			'fadeInTopLeft',
			'fadeInTopRight',
			'fadeInBottomLeft',
			'fadeInBottomRight',
		],
	},
	{
		label: __('Fading exits', 'jupa-blocknimations'),
		options: [
			'fadeOut',
			'fadeOutDown',
			'fadeOutDownBig',
			'fadeOutLeft',
			'fadeOutLeftBig',
			'fadeOutRight',
			'fadeOutRightBig',
			'fadeOutUp',
			'fadeOutUpBig',
			'fadeOutTopLeft',
			'fadeOutTopRight',
			'fadeOutBottomRight',
			'fadeOutBottomLeft',
		],
	},
	{
		label: __('Flippers', 'jupa-blocknimations'),
		options: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
	},
	{
		label: __('Lightspeed', 'jupa-blocknimations'),
		options: [
			'lightSpeedInRight',
			'lightSpeedInLeft',
			'lightSpeedOutRight',
			'lightSpeedOutLeft',
		],
	},
	{
		label: __('Rotating entrances', 'jupa-blocknimations'),
		options: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
	},
	{
		label: __('Rotating exits', 'jupa-blocknimations'),
		options: [
			'rotateOut',
			'rotateOutDownLeft',
			'rotateOutDownRight',
			'rotateOutUpLeft',
			'rotateOutUpRight',
		],
	},
	{
		label: __('Specials', 'jupa-blocknimations'),
		options: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
	},
	{
		label: __('Zooming entrances', 'jupa-blocknimations'),
		options: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],
	},
	{
		label: __('Zooming exits', 'jupa-blocknimations'),
		options: ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],
	},
	{
		label: __('Sliding entrances', 'jupa-blocknimations'),
		options: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
	},
	{
		label: __('Sliding exits', 'jupa-blocknimations'),
		options: ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
	},
	{
		label: __('Reveal', 'jupa-blocknimations'),
		options: ['revealUp', 'revealRight', 'revealDown', 'revealLeft'],
	},
].map(({ label, options }) => ({
	label,
	options: options.map((name) => ({ title: name, value: `animate__${name}` })),
}));

// Every real Animate.css animation, flattened, plus "None" — used to detect
// the currently active animation regardless of whether it was picked from
// the toolbar's curated list or the full "Advance" catalog.
export const flatAnimateAll = [
	{ title: __('None', 'jupa-blocknimations'), value: 'none-default' },
	...ListAnimateAll.flatMap((group) => group.options),
];

export const allowedBlocks = [
	'core/button',
	'core/column',
	'core/columns',
	'core/cover',
	'core/details',
	'core/embed',
	'core/gallery',
	'core/group',
	'core/heading',
	'core/html',
	'core/image',
	'core/list',
	'core/paragraph',
	'core/post-title',
	'core/post-featured-image',
	'core/separator',
	'core/social-links',
	'core/video',
];

export const ListAnimateImages = [
	{
		title: 'revealUp',
		value: 'animate__revealUp',
	},
	{
		title: 'revealRight',
		value: 'animate__revealRight',
	},
	{
		title: 'revealDown',
		value: 'animate__revealDown',
	},
	{
		title: 'revealLeft',
		value: 'animate__revealLeft',
	},
];
