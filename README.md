# INCYCOS — Final Static Website

Files:
- index.html
- style.css
- script.js
- assets/

## Run locally
Open index.html directly, or use VS Code Live Server.

## Publish on GitHub Pages
Push the folder to a GitHub repository, then:
Repository → Settings → Pages → Deploy from a branch → main → /(root).

## Custom domain
In GitHub Pages, add your purchased domain. Configure the DNS records at your domain registrar according to GitHub's current custom-domain instructions.

## Contact form
This static version uses a mailto fallback. Change `hello@incycos.com` in `script.js` to your actual business email.
For automatic database storage, CRM, email notifications, spam protection and an admin dashboard, connect the form to your Django/API backend or a form provider.

## Notes
The design is responsive and includes:
- dark/light mode
- mobile navigation
- scroll progress
- animated counters
- reveal animations
- service modals
- active navigation highlighting
- project enquiry form
- local draft saving
- back-to-top control
- accessible labels and responsive layout
