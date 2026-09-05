const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: async () => ( {
		...( await defaultConfig.entry() ),
		view: path.resolve( __dirname, 'src', 'view.js' ),
	} ),
};
