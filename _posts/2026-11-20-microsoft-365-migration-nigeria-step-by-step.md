---
title: "Microsoft 365 migration in Nigeria: a step-by-step plan"
description: "Planning a Microsoft 365 migration in Nigeria? Follow this step-by-step plan covering email, files, identity, security and staff training to avoid downtime."
date: 2026-11-20 08:00:00 +0100
category: Systems Integration
author: Veltriq Alliance Team
---

Many Nigerian businesses still run email on an old hosted mailbox, files on a shared folder in the office and logins on a server nobody wants to touch. Moving to Microsoft 365 can tidy all of this up, but a rushed move leaves staff locked out, mail missing and files in the wrong place. A well-planned **Microsoft 365 migration in Nigeria** is mostly preparation. The technical switch itself is often the shortest part.

This guide walks through the steps in the order we would suggest, written for owners, managers and IT staff rather than engineers.

## What Microsoft 365 actually includes

Microsoft 365 is a subscription bundle of cloud services. Depending on the plan, it includes business email (Exchange Online), file storage and sharing (OneDrive and SharePoint), chat and meetings (Teams), the Office applications, and identity and security tools. "Cloud" simply means these run in Microsoft's data centres and you reach them over the internet. If you are weighing this against keeping systems in your own building, our guide to [cloud, on-premises and hybrid options](/blog/hybrid-cloud-nigeria-cloud-or-on-premises/) explains how to decide.

## Step 1: Define what you are moving and why

Write down the goals. Typical ones are reliable email, safer file sharing, easier remote work and fewer servers to power and cool. Then list what exists today:

- Number of users, shared mailboxes and email addresses (aliases).
- Where mail is hosted now and how large the mailboxes are.
- Where files live: a file server, personal laptops, USB drives or another cloud service.
- Applications that depend on your current logins or on local mail.

This inventory drives the licence choice and the timetable. Ask for prices in naira where possible, and remember that subscriptions are usually priced in dollars, so the monthly cost can move with the exchange rate.

## Step 2: Check your internet link first

Once email and files are in the cloud, your internet connection becomes critical. Test speed and stability at every office during working hours. If a branch depends on a single link, plan a second one before you move. A fibre cut should not stop an entire office from reading mail.

## Step 3: Prepare your domain and identity

Your company domain (for example, yourcompany.com.ng) must be verified in Microsoft 365, and the DNS records, which tell the internet where your mail goes, will be changed at cut-over. Find out who controls your domain registration and DNS now. Surprisingly often, the person who set it up has left.

Decide how staff will sign in. If you already use Active Directory, Microsoft's on-premises login system, you can connect it to the cloud so staff keep one username and password. If you have no directory, you can create accounts directly in Microsoft 365. Clean up first: remove accounts of people who have left and fix duplicate or misspelt names.

## Step 4: Secure the tenant before anyone logs in

A "tenant" is your organisation's own space inside Microsoft 365. Set it up securely from day one:

- Turn on multi-factor authentication, which asks for a second proof such as a phone prompt, for every user, and especially administrators.
- Limit the number of administrators and give each one a separate admin account.
- Block legacy sign-in methods that cannot use multi-factor authentication.
- Set up email authentication records (SPF, DKIM and DMARC) so criminals find it harder to send mail pretending to be you.
- Decide who may share files outside the company.

Because staff will be sent new login details, they are prime targets for fake messages. Remind them of the points in our [phishing email checklist](/blog/how-to-spot-a-phishing-email-checklist/).

## Step 5: Migrate email

For small organisations, mailboxes can be copied across in one go. Larger ones usually move in batches over several days. A safe pattern is:

1. Create the accounts and assign licences.
2. Copy existing mail, calendars and contacts to the new mailboxes while the old system keeps running.
3. Lower the DNS "time to live" setting a few days ahead so that the change takes effect quickly.
4. Switch the mail routing records over a weekend or evening.
5. Run a final copy to catch any mail that arrived during the switch.
6. Set up phones and Outlook on each device.

Keep the old mail service active for a few weeks as a safety net before cancelling it.

## Step 6: Move files sensibly

Do not simply copy a decade of folders into the cloud. Decide what is still needed, archive the rest and design a structure. Department files usually suit SharePoint or Teams; personal working files suit OneDrive. Check file names and path lengths, which can cause errors, and agree permissions by team rather than person. If your file server holds personal data of customers, patients or staff, consider your duties under the Nigeria Data Protection Act (NDPA) 2023 and confirm details with the Nigeria Data Protection Commission or a qualified adviser. Our overview of [what the NDPA means for your IT systems](/blog/what-the-ndpa-means-for-your-it-systems/) is a useful starting point.

## Step 7: Train staff and support them

Most migration complaints come from people, not technology. Hold short sessions on signing in, setting up multi-factor authentication, finding shared files and using Teams. Name a few "champions" in each department who can answer simple questions, and have a clear contact for urgent problems during the first week.

## Step 8: Back up and review

Microsoft keeps the service running, but you remain responsible for your data. Deleted items, mistakes and malicious changes are not automatically recoverable forever, so consider an independent backup and follow the [3-2-1 backup rule](/blog/3-2-1-backup-rule-for-business/). After a month, review mailbox usage, licence counts and security alerts, and switch off anything you no longer need.

## A quick readiness checklist

- Goals, user list and data inventory written down.
- Internet links tested, with a backup where possible.
- Domain and DNS access confirmed.
- Multi-factor authentication and admin controls planned.
- Cut-over scheduled outside peak hours, with a rollback plan.
- Staff briefed and a support contact named.

## Getting help

A migration touches email, identity, security and files at once, which is why many organisations bring in a partner. Our [systems integration services](/services.html#integration) cover Microsoft 365 planning, migration and connecting your existing systems. If you would like to talk through your own move, [contact our team](/contact.html).
