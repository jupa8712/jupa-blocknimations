=== Jupa - Blocknimations ===
Contributors: jupa8
Tags: gutenberg, block, animation, scroll, animate.css
Requires at least: 6.8
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Lightweight scroll animations for any block. No animation JS library — powered by Animate.css, fully customizable via CSS.

== Description ==

Jupa Blocknimations adds animation controls directly to the blocks you already use (paragraph, image, columns, group, and more) — no new block, no extra markup. Pick from a curated shortlist or the full Animate.css catalog (97 animations, plus 4 custom "Reveal" wipes), add a delay, and it's ready.

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

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/jupa-blocknimations` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress.

== Changelog ==

= 0.1.0 =
* Initial development release.

== Upgrade Notice ==

= 0.1.0 =
Initial development release.
