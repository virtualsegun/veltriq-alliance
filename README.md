# Veltriq Alliance

Company website for Veltriq Alliance: IT systems integration, managed support, datacenter and infrastructure, networking and cyber security.

Static site (HTML, CSS, vanilla JavaScript). No build step, so it runs on any web host.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: hero with animated network, services, service finder, security self-check |
| `services.html` | Detail for all five services, with a scroll-tracking side menu |
| `about.html` | Who we are, mission, vision, values |
| `contact.html` | Contact details, map and enquiry form |

## Editing

- **Company details** (email, phone, WhatsApp, address) are set once at the top of `assets/js/main.js` in the `SITE` object and filled into every page.
- **Colours** are CSS variables at the top of `assets/css/styles.css`, sampled from the logo (navy `#0A224E`, teal `#036886`, gold `#D9A838`).
- **Service finder** answers and **security self-check** questions are the `FINDER` and `SCAN_QUESTIONS` lists in `main.js`.
- **Partners** are the `PARTNERS` list in `main.js`. To show an official logo instead of the name, put the file in `assets/img/partners/` and set that partner's `logo` to its file name.
- **Icons** are added with `<i data-icon="name"></i>`; available names are in the `ICONS` object in `main.js`.

## Contact form

With `SITE.formEndpoint` empty, submitting the form opens the visitor's email app with the enquiry filled in. To receive submissions directly, create a form endpoint (for example at formspree.io) and paste its URL into `SITE.formEndpoint`.

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works.
