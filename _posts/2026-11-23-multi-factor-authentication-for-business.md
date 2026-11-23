---
title: "Multi-factor authentication: why passwords alone are no longer enough"
description: "Multi-factor authentication adds a second check to every login, so a stolen password is not enough. Learn how it works and how to roll it out."
date: 2026-11-23 08:00:00 +0100
category: Cyber Security
author: Veltriq Alliance Team
---

A password is a secret that has to be remembered, typed, and kept safe by people who are busy. It is also the thing attackers go after first. Passwords get reused across websites, guessed, shared on WhatsApp, written on sticky notes and handed over on fake sign-in pages. Once an attacker has one, they can log in as your finance officer from anywhere in the world.

**Multi-factor authentication (MFA)** closes that gap. It asks for a second proof of identity in addition to the password, so a stolen password on its own no longer opens the door. This guide explains how MFA works, which type to choose, and how to introduce it in a Nigerian business without upsetting your staff.

## What multi-factor authentication means

MFA combines two or more different kinds of proof:

- **Something you know**, such as a password or PIN.
- **Something you have**, such as your phone, a security key or a smart card.
- **Something you are**, such as a fingerprint or face scan.

Two passwords are not MFA, because both are the same kind of proof. A password plus a code from your phone is. You may also hear the term **two-factor authentication (2FA)**, which simply means MFA with exactly two steps.

## Why passwords alone fail

Attackers rarely need to "hack" anything. They take the easier routes:

- **Phishing.** A convincing email sends staff to a fake Microsoft 365 or bank login page. Our [phishing checklist](/blog/how-to-spot-a-phishing-email-checklist/) shows how to spot these.
- **Reused passwords.** When one website suffers a breach, attackers try the same email and password on other services.
- **Guessing and automated attempts.** Software can try thousands of common passwords against an email account.

With MFA switched on, the attacker has the password but not the second factor, and the login fails. MFA is not perfect, but it blocks a very large share of account takeover attempts, which is why it appears in almost every serious security guideline.

## The types of MFA, from strongest to weakest

Not every second factor is equally safe. A practical ranking:

1. **Hardware security keys and passkeys.** A small USB or NFC key, or a passkey stored on your device, that proves you are on the real website. These resist phishing best.
2. **Authenticator app prompts or codes.** Apps such as Microsoft Authenticator generate a code or ask you to approve a sign-in. Good for most businesses.
3. **SMS text codes.** Better than nothing, but weaker. Phone numbers can be taken over through **SIM swap fraud**, where a criminal convinces a network to move your number to a new SIM. Network coverage can also be unreliable in some buildings.
4. **Email codes.** Weakest, because they depend on the security of the email account that may already be compromised.

Where you have a choice, use an authenticator app or a security key, and keep SMS only as a fallback.

## Where to switch on MFA first

You do not have to protect everything on day one. Start where a compromise would hurt most:

1. **Email.** Whoever controls a mailbox can reset passwords for almost everything else, and can send fake invoices from your real address.
2. **Administrator accounts.** Anyone who can change settings, create users or reach servers.
3. **Remote access.** VPN, Remote Desktop and any cloud management portals.
4. **Finance and banking.** Internet banking, payment platforms, mobile money business accounts and accounting software.
5. **Cloud storage and business applications** holding customer or staff data.
6. **Everyone else.** Roll out to all staff once the first groups are stable.

If you use Microsoft 365, MFA settings are built in, and it is worth reviewing them as part of your wider setup. Our guide to [migrating to Microsoft 365](/blog/microsoft-365-migration-nigeria-step-by-step/) covers the stage at which identity settings should be configured. Other vendors in this space include Cisco Duo and Entrust, which can protect on-premises and cloud systems.

## A practical rollout plan

1. **Pick the method.** Choose an authenticator app as the standard, with a security key for administrators and executives.
2. **Plan for lost phones.** Decide in advance how staff recover access if a phone is lost, stolen or replaced. Keep a small number of protected emergency accounts and a clear identity check before any reset.
3. **Pilot with IT and management.** Fix teething problems with a small group first.
4. **Brief everyone.** Explain in plain words why it is being done: it protects them and the company. A short written guide with screenshots saves many support calls.
5. **Enrol in stages.** Do it department by department, with a helpdesk person available.
6. **Set a deadline and enforce it.** Optional MFA is usually ignored.
7. **Review regularly.** Remove leavers promptly and check that new staff are enrolled on their first day.

## Common objections, answered

- **"It slows people down."** A sign-in approval takes a few seconds, and many systems only ask again when you use a new device or location.
- **"Staff will not have data or signal."** Authenticator apps generate codes offline, so they work without a network connection.
- **"Shared accounts cannot use it."** That is a reason to stop sharing accounts. Give each person their own login so activity can be traced.

## Watch for MFA fatigue

Attackers who already have a password sometimes send repeated approval prompts, hoping a tired user taps "Approve" just to make them stop. Teach staff to deny any prompt they did not trigger and to report it immediately, because it means their password is already known. Where your platform allows it, require the user to type a number shown on the login screen instead of simply tapping approve.

## MFA and data protection

The Nigeria Data Protection Act (NDPA) 2023 expects organisations that handle personal data to apply appropriate technical and organisational security measures. MFA on email, customer databases and administrator accounts is one of the clearest and most affordable ways to show that you take that duty seriously. Our article on [what the NDPA means for your IT systems](/blog/what-the-ndpa-means-for-your-it-systems/) explains the wider picture.

## Next steps

Start this week: enable MFA on every email account and every administrator login, then work outwards. Veltriq Alliance helps organisations in Lagos and across Nigeria plan and deploy identity protection as part of our [cyber security services](/services.html#security). If you would like help choosing the right method and rolling it out smoothly, [contact us](/contact.html).
