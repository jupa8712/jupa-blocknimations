<?php
/**
 * Plugin Name:       Jupa - Blocknimations
 * Description:       Lightweight scroll animations for any block. No animation JS library — powered by Animate.css, fully customizable via CSS.
 * Version:           1.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Jupa
 * Author URI:        https://www.jupa.co/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jupa-blocknimations
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueues the editor script that adds animation controls to existing blocks.
 */
function jupa_blocknimations_enqueue_editor_assets() {
	$asset_file = include __DIR__ . '/build/index.asset.php';

	wp_enqueue_script(
		'jupa-blocknimations-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_set_script_translations( 'jupa-blocknimations-editor', 'jupa-blocknimations' );
}
add_action( 'enqueue_block_editor_assets', 'jupa_blocknimations_enqueue_editor_assets' );

/**
 * Enqueues Animate.css on the front end only.
 */
/**
 * Decides, once the full page has rendered, whether any block is actually
 * animated — and if not, strips the plugin's stylesheet and script from
 * the output.
 *
 * Why not just tree-shake Animate.css? Any of its 97 animations can be
 * applied to any block in the editor, so a static build can't know which
 * keyframes a page needs. The only reliable signal is the rendered HTML —
 * so interior/detail pages that use no animations (the common case) load
 * none of the animation CSS (~25KB) at all.
 */
function jupa_blocknimations_start_buffering() {
	if (
		is_admin() ||
		( function_exists( 'wp_doing_ajax' ) && wp_doing_ajax() ) ||
		( function_exists( 'wp_is_json_request' ) && wp_is_json_request() ) ||
		( defined( 'REST_REQUEST' ) && REST_REQUEST ) ||
		( function_exists( 'is_feed' ) && is_feed() )
	) {
		return;
	}

	ob_start( 'jupa_blocknimations_maybe_strip_assets' );
}
add_action( 'template_redirect', 'jupa_blocknimations_start_buffering', 0 );

/**
 * Removes the plugin's <link>/<script> tags when the buffered page contains
 * no animated blocks.
 *
 * @param string $html The full rendered page.
 * @return string The page, possibly with our assets removed.
 */
function jupa_blocknimations_maybe_strip_assets( $html ) {
	if ( false !== strpos( $html, 'animate__animated' ) ) {
		return $html;
	}

	// WordPress prints an id="<handle>-css/js" on each enqueued asset.
	$html = preg_replace(
		'/<link[^>]*\bid=["\']jupa-blocknimations-css["\'][^>]*>/i',
		'',
		$html
	);
	$html = preg_replace(
		'/<script[^>]*\bid=["\']jupa-blocknimations-view-js["\'][^>]*>\s*<\/script>/i',
		'',
		$html
	);

	return $html;
}

function jupa_blocknimations_enqueue_frontend_assets() {
	$style_asset_file = include __DIR__ . '/build/index.asset.php';

	wp_register_style(
		'jupa-blocknimations',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		$style_asset_file['version']
	);
	wp_style_add_data( 'jupa-blocknimations', 'rtl', 'replace' );
	wp_enqueue_style( 'jupa-blocknimations' );

	$view_asset_file = include __DIR__ . '/build/view.asset.php';

	wp_enqueue_script(
		'jupa-blocknimations-view',
		plugins_url( 'build/view.js', __FILE__ ),
		$view_asset_file['dependencies'],
		$view_asset_file['version'],
		true
	);
}
add_action( 'wp_enqueue_scripts', 'jupa_blocknimations_enqueue_frontend_assets' );
