<?php
/**
 * Plugin Name:       Jupa - Blocknimations
 * Description:       Lightweight scroll animations for any block. No animation JS library — powered by Animate.css, fully customizable via CSS.
 * Version:           1.0.0
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
