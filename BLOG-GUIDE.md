# Blog and newsletter guide

How to publish blog posts on www.veltriqalliance.com.ng, and how newsletter signups and contact enquiries are collected.

## Option 1: Visual editor (for the team)

The site uses [Pages CMS](https://app.pagescms.org), a free editor that saves posts straight to the website. There is no code involved.

### One-time setup (repository owner)

1. Go to https://app.pagescms.org and **Sign in with GitHub** using the account that owns the `veltriq-alliance` repository.
2. When asked, **install the Pages CMS GitHub App** and give it access to the `veltriq-alliance` repository only.
3. Open the repository. The editor reads its settings from `.pages.yml`, which is already in place.
4. To give a team member access, open **Settings → Collaborators** in Pages CMS and invite them **by email**. They don't need a GitHub account.

### Writing a post

1. Sign in at https://app.pagescms.org (team members use the link in their invitation email).
2. Open **Blog posts → Add an entry**.
3. Fill in:
   - **Title:** clear and specific, for example "How to protect your business from ransomware".
   - **Summary:** one or two sentences. This shows on the blog page, in Google and when the link is shared.
   - **Publish date:** today.
   - **Category:** pick the closest match.
   - **Cover image:** optional. Without one, the post gets a branded cover automatically.
   - **Article:** write or paste the text. Use the toolbar for headings, bold text, lists and links.
4. Click **Save**. The post is live within about a minute at `www.veltriqalliance.com.ng/blog/`.

To edit or delete a post later, open it from the **Blog posts** list.

### Writing tips

- Use **Heading 2** for main sections and **Heading 3** for sub-points. Don't use Heading 1; the title already is one.
- Aim for 600–1,200 words, written for business owners and IT managers rather than engineers.
- End with a short paragraph linking to the relevant service, for example `/services.html#security` or `/contact.html?service=security`.
- Only use images you own or have the right to use.

## Option 2: Ask Claude (or a developer) to publish

Send the text (a Word document is fine) and say which category it belongs to. Posts are Markdown files in `_posts/` named `YYYY-MM-DD-short-title.md`, starting with:

```yaml
---
title: "Post title"
description: "One or two sentence summary."
date: 2026-10-23 09:00:00 +0100
category: Cyber Security
author: Veltriq Alliance Team
image: /assets/img/blog/optional-cover.jpg
---
```

Categories must match `_data/categories.yml`. Committing and pushing to `main` publishes the post.

## Newsletter and contact form

Until a Google Sheet is connected, the newsletter and contact forms open the visitor's email app with their details filled in, addressed to sales@veltriqalliance.com.ng.

### Connecting the Google Sheet (about 10 minutes)

1. Sign in to Google with the account that should own the data, and create a new Google Sheet named **Veltriq Alliance website forms**.
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the sample code, paste the whole of `tools/google-sheet-forms.gs`, and click **Save**.
4. Choose the `setup` function in the toolbar and click **Run**. Approve the permission prompts (Google will warn that the app isn't verified; choose **Advanced → Go to project**). This creates the **Subscribers** and **Enquiries** tabs.
5. Click **Deploy → New deployment**, choose type **Web app**, set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy**.
6. Copy the **Web app URL** (it ends in `/exec`) and put it in `sheetEndpoint` at the top of `assets/js/main.js`, or send it to whoever maintains the site.

After that:

- **Newsletter signups** are added to the **Subscribers** tab, with duplicates skipped.
- **Contact enquiries** are added to the **Enquiries** tab and emailed to sales@veltriqalliance.com.ng. Replying to that email goes straight to the sender.

### Sending the newsletter

Don't send newsletters to the list from a normal Gmail or Outlook mailbox. Bulk email from a personal mailbox tends to land in spam, can get your domain blocklisted, and doesn't handle unsubscribes as the NDPA requires.

When you're ready to send the first issue, create a free account with an email service such as **MailerLite** (free up to 1,000 subscribers) or **Brevo**. Then download the Subscribers tab as CSV (**File → Download → CSV**), import it, and send from there. The service handles unsubscribe links automatically.

If someone emails asking to unsubscribe, delete their row from the Subscribers tab and from the email service.
