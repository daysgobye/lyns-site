const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/contact.js"))),
  "component---src-pages-excerpt-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/excerpt.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/index.js"))),
  "component---src-pages-memoir-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/memoir.js"))),
  "component---src-pages-photo-gallery-js": hot(preferDefault(require("/Users/coles/Documents/web-dev/react/lyns-site/src/pages/photo-gallery.js")))
}

