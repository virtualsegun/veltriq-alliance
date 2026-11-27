---
title: "Single sign-on explained: one login for all your business apps"
description: "Single sign-on lets staff use one secure login for every business app. Learn how it works, what it costs in effort and how to roll it out safely in Nigeria."
date: 2026-11-27 08:00:00 +0100
category: Systems Integration
author: Veltriq Alliance Team
---

Count the passwords a typical employee uses in a day: email, the accounting package, the HR portal, the CRM, the bank portal, the helpdesk, a handful of web tools. Each one is another thing to forget, reuse or write on a sticky note. Each one is also another account for the IT team to create when someone joins and, more importantly, to remember to close when someone leaves. **Single sign-on** (usually shortened to SSO) solves this by letting staff sign in once and reach all their approved applications without typing a new password each time.

This guide explains how SSO works, what it is good for, where it can go wrong and how to introduce it step by step.

## What single sign-on means in plain English

With SSO, one trusted system holds each person's identity and proves it to your other applications. That trusted system is called the **identity provider**. Examples include Microsoft Entra ID (the cloud directory behind Microsoft 365), and similar services from other vendors. The applications that rely on it are the **service providers**, though most people simply call them "apps".

Think of a hotel key card. You prove who you are once at reception, and the card then opens your room, the gym and the lift. The hotel does not ask for your passport at every door. In the same way, the identity provider checks the user once, then vouches for them to each app.

Behind the scenes, apps and the identity provider talk using standard languages called SAML and OpenID Connect. When buying software, ask whether it supports SSO through either one.

## Why SSO is worth the effort

### Fewer passwords, fewer weak ones

When people must remember many passwords, they pick simple ones and reuse them. If one small web tool is breached, criminals try the same password on your email. With SSO, there is one strong credential to protect rather than twenty weak ones.

### Stronger security in one place

Because everyone passes through one door, you can put your best protection on it. You can require [multi-factor authentication](/blog/multi-factor-authentication-for-business/) once, at sign-in, and it then covers every connected app. You can also block sign-ins from unusual countries or from devices you do not manage, again in one place.

### Faster onboarding and, crucially, offboarding

When a new colleague starts, access to the right apps can be granted by group, such as "Finance" or "Sales". When someone leaves, disabling their one account cuts off every connected app at once. Without SSO, forgotten accounts in forgotten tools are a common way former staff keep access to company data.

### Fewer helpdesk calls

Password resets are among the most frequent requests to any helpdesk. Fewer passwords means fewer resets, which frees IT staff for more useful work. It also supports the data-protection duties many organisations have under the Nigeria Data Protection Act 2023, since you can show who had access to what. Our overview of [what the NDPA means for your IT systems](/blog/what-the-ndpa-means-for-your-it-systems/) covers those duties, and you should confirm specifics with a qualified adviser or the Nigeria Data Protection Commission.

## The risks to plan for

SSO concentrates access, which is both its strength and its risk. Consider these points before you start:

- **One account becomes more valuable.** If a criminal steals an SSO password, they could reach many apps. This is exactly why multi-factor authentication should be compulsory, not optional.
- **Availability matters.** If the identity provider or your internet link is down, people may be unable to sign in anywhere. In a country where fibre cuts and power outages happen, plan a backup internet connection and keep a small number of emergency administrator accounts with their own protection.
- **Not every app supports SSO.** Older, locally installed software may only accept its own username and password. You may need to leave those out at first, or use a password manager alongside SSO.
- **Some vendors charge extra.** Certain software makers place SSO on a higher-priced plan. Check this before you commit, and remember that subscription prices quoted in dollars can change in naira terms.

## How to roll out SSO: a practical plan

1. **List your applications.** Write down every app staff use, who owns it and how many people use it. You will often find tools nobody in IT knew about.
2. **Clean up your directory.** Remove accounts for people who have left, fix duplicate or misspelt names and organise staff into groups by department. SSO inherits any mess you already have.
3. **Choose your identity provider.** If you already use Microsoft 365, Entra ID is the natural starting point, because the accounts already exist. If you still run on-premises Active Directory, the two can be connected so staff keep one username and password. Other providers exist, so compare them against the apps you use.
4. **Decide the sign-in rules.** Require multi-factor authentication for everyone, set sensible session lengths and decide which devices may connect.
5. **Start with a pilot.** Connect two or three popular apps for a small group, such as the IT team and a friendly department, and gather feedback.
6. **Roll out in waves.** Add the remaining apps by priority, giving staff short, clear instructions each time. A one-page guide with screenshots is usually enough.
7. **Handle the exceptions.** For apps that cannot join SSO, record them, protect them with unique passwords stored in a password manager and revisit them at renewal time.
8. **Review regularly.** Each quarter, check who has access to what, remove unused apps and look at unusual sign-in alerts.

## A short readiness checklist

- Full list of business apps, and which support SSO.
- Directory tidied, with leavers removed.
- Multi-factor authentication ready for all users.
- Backup internet link and emergency administrator accounts planned.
- Pilot group chosen and staff guidance prepared.
- Owner named for adding and removing app access.

## Where integration fits in

If you are planning SSO or want to connect your existing systems more cleanly, our [systems integration services](/services.html#integration) can help with the design and rollout, and you can [contact our team](/contact.html) to discuss your own applications.
