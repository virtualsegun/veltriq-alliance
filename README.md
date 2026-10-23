# Veltriq Alliance

Company website for Veltriq Alliance: IT systems integration, managed support, datacenter and infrastructure, networking and cyber security.

Built with Jekyll on GitHub Pages: plain HTML pages plus a Markdown blog. GitHub builds and publishes the site automatically on every push to `main`.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: hero with animated network, services, service finder, security self-check |
| `services.html` | Detail for all five services, with a scroll-tracking side menu |
| `about.html` | Who we are, mission, vision, values |
| `contact.html` | Contact details, map and enquiry form |
| `blog/index.html` | Blog listing with category filter and newsletter signup |
| `privacy.html` | Privacy notice for the contact and newsletter forms |

The shared header, footer and page head are in `_layouts/default.html`; blog posts use `_layouts/post.html`. Posts live in `_posts/`. See **BLOG-GUIDE.md** for how to publish posts and connect the newsletter.

## Editing

- **Company details** (email, phone, WhatsApp, address) are in the `SITE` object at the top of `assets/js/main.js` and written into the HTML (footer in `_layouts/default.html`, the contact page, and `_includes/schema-organization.html`). Change all three when details change.
- **Colours** are CSS variables at the top of `assets/css/styles.css`, sampled from the logo (navy `#0A224E`, teal `#036886`, gold `#D9A838`).
- **Service finder** answers and **security self-check** questions are the `FINDER` and `SCAN_QUESTIONS` lists in `main.js`.
- **Partners** are the `PARTNERS` list in `main.js`. To show an official logo instead of the name, put the file in `assets/img/partners/` and set that partner's `logo` to its file name.
- **Icons** are added with `<i data-icon="name"></i>`; available names are in the `ICONS` object in `main.js`.

## Contact and newsletter forms

With `SITE.sheetEndpoint` empty, the forms open the visitor's email app with the details filled in. Once a Google Sheet is connected (see BLOG-GUIDE.md), submissions are saved there and enquiries are emailed to the sales address.

## Preview locally

The pages use Jekyll layouts, so a local preview needs Ruby and Jekyll (`bundle exec jekyll serve`). Otherwise push to `main` and check the live site; if a build fails, GitHub keeps the previous version online.
