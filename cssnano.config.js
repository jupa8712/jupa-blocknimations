// The default @wordpress/scripts cssnano config strips all comments,
// including the /*! ... */ license banner Animate.css (MIT) ships with.
// MIT requires that notice to survive in redistributed copies, so this
// keeps "bang" comments while still stripping everything else.
module.exports = {
	preset: [
		'default',
		{
			discardComments: {
				removeAll: false,
			},
		},
	],
};
