---
title: "Ransomware protection for Nigerian businesses: where to start"
description: "Ransomware protection starts with a few practical steps: tested backups, multi-factor authentication, patching and trained staff. Here is where to begin."
date: 2026-11-21 08:00:00 +0100
category: Cyber Security
author: Veltriq Alliance Team
---

Imagine arriving on Monday morning to find every file on the shared drive renamed with a strange extension, and a text file on each desktop demanding payment to get your data back. Invoices, customer records, payroll and email archives are all locked. That is **ransomware**: malicious software that encrypts your files, or steals them, and then demands money.

No business is too small to be a target, because attackers are often not choosing victims personally. They look for any organisation with weak passwords, unpatched systems or untested backups. This guide explains ransomware protection in plain terms and gives a sensible order of work for Nigerian organisations that want to reduce their risk without a huge budget.

## How ransomware usually gets in

Understanding the usual routes tells you where to spend first. The most common are:

- **Phishing emails.** A staff member opens a booby-trapped attachment or enters their password on a fake sign-in page. Our [phishing checklist for your staff](/blog/how-to-spot-a-phishing-email-checklist/) covers how to spot these.
- **Stolen or weak passwords.** Attackers log in to remote access tools, email or VPN accounts using passwords reused from other breaches, or guessed.
- **Unpatched software.** Known flaws in servers, firewalls and applications stay open for months because nobody has time to update them.
- **Exposed remote access.** Remote Desktop or other management services left open to the internet are a favourite target.
- **Infected downloads and USB drives.** Pirated software and shared flash drives are common carriers.

## Step 1: Make backups that survive an attack

Backups are the difference between an unpleasant week and a business-threatening event. Attackers know this, so modern ransomware tries to find and encrypt or delete backups too.

- Follow the **3-2-1 rule**: three copies of your data, on two types of storage, with one copy offsite. Our guide to the [3-2-1 backup rule](/blog/3-2-1-backup-rule-for-business/) explains it in detail.
- Keep at least one copy **offline or immutable**, meaning it cannot be changed or deleted for a set period even by an administrator. Several backup products, including Veeam, support this.
- Do not leave a backup drive permanently attached to the server it protects.
- **Test a restore** regularly. A backup you have never restored is an assumption, not a plan.

## Step 2: Turn on multi-factor authentication

**Multi-factor authentication (MFA)** asks for a second proof of identity, such as a code from an app, in addition to the password. It stops most attacks that rely on a stolen password alone. Prioritise:

1. Email accounts, especially Microsoft 365 or other cloud mail.
2. Remote access, VPN and any administrator accounts.
3. Banking, payment and finance applications.

Prefer an authenticator app over SMS codes where you can, since phone numbers can be hijacked through SIM swap fraud.

## Step 3: Keep systems patched

A **patch** is an update that fixes a security flaw. Make a simple routine:

- List every server, laptop, firewall, router and key application you run.
- Apply operating system and security updates on a schedule, with critical ones done first.
- Retire software that no longer receives updates, such as old versions of Windows.

This is tedious work, which is why many organisations hand it to a support provider with monitoring tools in place.

## Step 4: Protect laptops, servers and phones

**Endpoint protection** is software that watches each device for malicious behaviour. Basic antivirus catches known threats; modern endpoint products also spot suspicious behaviour, such as a program suddenly encrypting hundreds of files, and can stop it. Choose a product that is centrally managed, so IT can see every device from one place, and make sure it is installed everywhere, including the director's laptop.

## Step 5: Limit how far an attacker can travel

Assume that one day something will get in. The aim is to keep the damage small.

- **Give people only the access they need.** Not everyone needs administrator rights or access to every folder.
- **Separate your network.** Keep guest Wi-Fi, office computers and servers apart so that an infection in one area does not spread to all.
- **Use a properly configured firewall** to block unnecessary inbound connections, and close remote access ports that do not need to be public.
- **Remove old accounts** belonging to former staff and contractors.

## Step 6: Train your people

Technology reduces risk, but staff decisions still matter. Short, regular sessions work better than an annual lecture:

- Teach staff to pause on urgent or unusual requests.
- Make reporting easy and blame-free. Someone who reports a mistake within minutes can save the company.
- Run occasional simulated phishing tests; platforms such as KnowBe4 are designed for this.

## Step 7: Write down your response plan

When ransomware strikes, confusion costs time. A one-page plan should answer:

1. Who is called first, and who makes decisions?
2. How do we isolate affected devices? Usually this means unplugging the network cable or disabling Wi-Fi, not switching off, so that evidence is kept.
3. Who contacts our IT provider, insurer, bank and key customers?
4. Where are the backups, and who can restore them?
5. If personal data may have been affected, who handles notification under the Nigeria Data Protection Act (NDPA) 2023? Our article on [what the NDPA means for your IT systems](/blog/what-the-ndpa-means-for-your-it-systems/) gives the background.

Should you pay the ransom? Law enforcement agencies generally advise against it, because payment does not guarantee you get your data back and it encourages further attacks. The best answer is to be prepared so that you never face the choice.

## A one-page starting checklist

- Backups follow 3-2-1, with one copy offline or immutable.
- A restore has been tested in the last quarter.
- MFA is on for email, remote access and administrator accounts.
- Updates are applied on a schedule, and unsupported systems are replaced.
- Endpoint protection is installed and centrally managed.
- Remote access is limited and protected.
- Staff have had awareness training this year.
- A written incident response plan exists and people know where it is.

## Getting help

You do not need to do everything at once. Start with backups and MFA, then work down the list. Veltriq Alliance helps organisations in Lagos and across Nigeria with firewalls, endpoint protection, backup and staff training. Read about our [cyber security services](/services.html#security), or [contact us](/contact.html?service=security) to review how well prepared your business is for a ransomware attack.
