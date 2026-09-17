=== Jupa - Blocknimations ===
Contributors: jupa8
Tags: gutenberg, block editor, animation, scroll animation, css animation
Requires at least: 6.8
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Lightweight scroll animations for any block. No animation JS library — powered by Animate.css, fully customizable via CSS.

== Description ==

Jupa Blocknimations adds animation controls directly to the blocks you already use (paragraph, image, columns, group, and more) — no new block, no extra markup. Pick from a curated shortlist or the full Animate.css catalog (97 animations, plus 4 custom "Reveal" wipes).

= Two animation types, no conflicts =

* **On Enter** (default): plays once the first time a block scrolls into view. Blocks that enter together are staggered automatically. Works in every browser.
* **Scroll driven**: ties the animation directly to scroll position using native CSS (`animation-timeline`). Falls back to "On Enter" automatically in browsers without support — nothing ever breaks.

= Lightweight by design =

No animation JS library is bundled. The only front-end script is a small IntersectionObserver (under 1KB); everything else runs on plain CSS. Since animations are just real Animate.css classes and CSS custom properties, they're easy to customize from your own CSS — override `--animate-duration`, `--animate-distance`, or any property with a normal rule (add `!important` if needed).

**A note on restraint:** animation is a great touch for a site's experience, but overusing it or mixing too many different effects on one page tends to hurt more than it helps. That's why the toolbar leads with a short, curated shortlist instead of dumping the full catalog on you — the rest is there via "More Animations…" when you really need it, not by default.

== How to Use ==

1. Select a supported block (paragraph, heading, image, gallery, group, columns, button, cover, video, and more).
2. Three new icons appear in the block toolbar:
   * **Animation** (video icon): pick from the curated shortlist (fades, reveals), or choose **More Animations…** to open the full catalog (97 Animate.css animations grouped by category, plus 4 Reveal wipes).
   * **Delay** (clock icon): add a fixed delay (200ms–3000ms). Leave it on "None" to let blocks that enter together stagger automatically instead.
   * **Type** (lightning/mouse icon): click to switch between **On Enter** and **Scroll driven**. Delay hides automatically in Scroll driven mode, since it has no effect there.
3. Preview the result on the front end — animations only run there, never in the editor.

== Frequently Asked Questions ==

= Why don't I see the animation while editing? =

Animations are a front-end effect only, by design — the editor always shows the block in its normal, final state so you can keep editing without it fading in and out around you. Preview the page or view it live to see the animation play.

= Does this work with any block, including third-party ones? =

It's enabled by default on the most common core blocks (paragraph, heading, image, gallery, group, columns, button, cover, video, and more). It relies on the block having a normal `className` attribute, which almost all blocks support.

= My block doesn't show the animation controls — what can I do? =

Wrap it in a Group block and animate the group instead — it'll get exactly the same effect.

= Does it slow down my site? =

No extra animation library is loaded. The plugin adds Animate.css's CSS and a small IntersectionObserver script (under 1KB) only on pages where it's needed.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/jupa-blocknimations` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress.

== Other Notes ==

= Source code =

The full, human-readable source (including build tools and config) is publicly available at:
https://github.com/jupa8712/jupa-blocknimations

The `build/` folder shipped in this plugin is compiled from the `src/` folder in that repository using `@wordpress/scripts`. To rebuild it yourself:

1. `npm install`
2. `npm run build`

== Changelog ==

= 1.0.0 =
* First stable release.

= 0.1.0 =
* Initial development release.

== Upgrade Notice ==

= 1.0.0 =
First stable release.
