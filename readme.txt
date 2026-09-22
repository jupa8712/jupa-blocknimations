=== Jupa - Blocknimations ===
Contributors: jupa8
Tags: gutenberg, block editor, animation, scroll animation, css animation
Requires at least: 6.8
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Lightweight scroll animations for any block. No animation JS library — powered by Animate.css, fully customizable via CSS.

== Description ==

Jupa Blocknimations adds animation controls directly to the blocks you already use (paragraph, image, columns, group, and more) — no new block, no extra markup. Pick from a curated shortlist or the full Animate.css catalog (97 animations, plus 4 custom "Reveal" wipes).

* **On Enter** (default): plays once the first time a block scrolls into view, staggering blocks that enter together. Works in every browser.
* **Scroll driven**: ties the animation to scroll position via native CSS (`animation-timeline`), falling back to "On Enter" automatically where unsupported.
* **Respects reduced motion**: with the OS "reduce motion" setting, animated blocks render in their final state — no movement.
* **Loads only where needed**: pages without an animated block skip the animation CSS and script entirely.

No animation JS library is bundled — just a small IntersectionObserver (under 1KB) plus plain CSS. Animations are real Animate.css classes and CSS custom properties, so they're easy to override from your own CSS (e.g. `--animate-duration`, `--animate-distance`, or any property with `!important`).

**A note on restraint:** animation is a great touch, but overusing it or mixing too many effects tends to hurt more than it helps. That's why the toolbar leads with a short, curated shortlist — the full catalog is one click away via "More Animations…" when you actually need it.

[youtube https://www.youtube.com/watch?v=e2uARdOSeXQ]

= How to Use =

1. Select a supported block (paragraph, heading, image, gallery, group, columns, button, cover, video, and more).
2. Three icons appear in its toolbar:
   * **Animation**: the curated shortlist, or **More Animations…** for the full catalog.
   * **Delay**: a fixed 200ms–3000ms delay, or leave on "None" for automatic staggering.
   * **Type**: click to switch between **On Enter** and **Scroll driven** (hides Delay, which has no effect there).
3. Preview on the front end — animations only run there, never in the editor.

= Source Code =

Full source, including build tools, is at https://github.com/jupa8712/jupa-blocknimations. The `build/` folder is compiled from `src/` via `@wordpress/scripts` — run `npm install` then `npm run build` to regenerate it.

= Credits =

"Scroll down" icon (https://www.magnific.com/animated-icon/scroll-down_17905763) — Designed by Magnific (https://www.magnific.com).

== Frequently Asked Questions ==

= Why don't I see the animation while editing? =

By design — the editor always shows the block in its final state. Preview or view the page live to see it play.

= Does this work with any block, including third-party ones? =

It's enabled on the most common core blocks out of the box. It just needs the block to support a normal `className` attribute, which almost all do.

= My block doesn't show the animation controls — what can I do? =

Wrap it in a Group block and animate the group instead.

= Does it slow down my site? =

No. No extra animation library is loaded — just Animate.css's CSS and a script under 1KB — and both are only served on pages that actually contain an animated block.

== Screenshots ==

1. Curated animation shortlist, plus custom reveals and the full catalog one click away.
2. Fixed delay options, or leave it on auto-stagger.
3. The Advance modal: full animation catalog and animation type in one place.
4. The mouse icon marks a block set to Scroll driven.
5. Full Animate.css catalog, grouped by category.
6. One click toggles between animation types.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/jupa-blocknimations` directory, or install through the WordPress plugins screen.
2. Activate through the "Plugins" screen.

== Changelog ==

= 1.1.0 =
* Advance modal: animation Type moved to the top, followed by Animation and a Delay control (shown only for "On Enter" blocks).
* Removed the "pressed" highlight from the Type toggle.
* Accessibility: animated blocks respect the OS "reduce motion" preference.
* Scroll-driven blocks now ignore any leftover toolbar delay.
* Blocks injected after load (lazy embeds, carousels, AJAX pagination) are picked up automatically via a MutationObserver.
* Performance: the animation CSS and script load only on pages that actually use animated blocks.

= 1.0.0 =
* First stable release.

= 0.1.0 =
* Initial development release.

== Upgrade Notice ==

= 1.1.0 =
Improved accessibility, performance, and a reworked Advance modal. No breaking changes.

= 1.0.0 =
First stable release.
