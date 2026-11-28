---
title: "Business email compromise: how fake invoice scams work and how email security stops them"
description: "Business email compromise tricks staff into paying fake invoices. See how the scam works and which email security steps and payment rules stop it."
date: 2026-11-28 08:00:00 +0100
category: Cyber Security
author: Veltriq Alliance Team
---

A supplier emails to say their bank details have changed. The message looks genuine, the tone is familiar, and the invoice matches an order you really placed. Your finance team pays it. Days later the real supplier asks why they have not been paid, and the money is gone.

This is **business email compromise (BEC)**: a fraud in which an attacker uses email, either from a hacked mailbox or from a convincing fake, to trick staff into sending money or sensitive information. Good email security helps, but BEC is stopped by combining technology with simple payment rules. This guide explains how the scam works and what to put in place.

## How fake invoice scams work

BEC rarely involves malware, which is why ordinary antivirus does not catch it. The attacker relies on timing, patience and your normal routines. The usual pattern looks like this:

1. **Access or imitation.** The attacker either breaks into a real mailbox (often by phishing a password) or registers a lookalike domain, such as one with a swapped letter or an added word.
2. **Watching.** If they are inside a mailbox, they read for days or weeks. They learn who approves payments, which suppliers you use, how invoices are worded and when large payments are due.
3. **The switch.** At the right moment they send a message from the genuine account, or from the lookalike, with a new bank account for an invoice that is genuinely due. Sometimes they set up a hidden inbox rule so replies never reach the real owner.
4. **The payment.** Once the transfer is made, the money is usually moved on quickly, which makes recovery difficult.

Variations include a fake message from a managing director asking for an urgent, confidential transfer, a request to buy gift vouchers, and a message to the payroll team asking to change an employee's salary account.

## Why it works so well in Nigerian organisations

- **Informal approvals.** Payment requests are often agreed over email or WhatsApp, so a forged request does not look out of place.
- **Respect for seniority.** Few staff question an instruction that appears to come from a director.
- **Many supplier and contractor payments.** Frequent invoices and bank detail changes make a fraudulent one easy to hide.
- **Reading on phones.** The full sender address is often hidden on a small screen, so lookalike domains are easy to miss.

## Warning signs to train staff to notice

- A change of bank account, especially to a different bank or to a personal account name.
- Urgency, secrecy or pressure to skip the normal approval process.
- A sender address that differs slightly from the usual one, or a reply-to address that does not match.
- A request to contact the sender only by email, not by phone.
- A message from a colleague that is out of character, such as a request for vouchers or confidential data.

Our [phishing email checklist](/blog/how-to-spot-a-phishing-email-checklist/) covers the general habits that also apply here.

## Payment controls that stop the fraud

Process is your strongest defence, because it works even when the email looks perfect.

- **Call back on a known number.** Never change supplier bank details on the strength of an email. Phone a contact using a number already on your records, not one in the message.
- **Two people for every change and every large payment.** One person enters the change, another verifies it independently.
- **Hold new bank details briefly.** Where possible, make a small test payment or wait for confirmation before the first full payment.
- **Keep a verified supplier list.** Record who may request changes and how they will be confirmed.
- **Make it safe to question.** Staff should know that checking a senior person's request is expected, not rude.
- **Act fast if you have paid.** Contact your bank immediately, and report the fraud. Speed gives the best chance of stopping the transfer.

## Email security measures that reduce the risk

- **Multi-factor authentication (MFA).** A stolen password alone should not open a mailbox. See our guide to [multi-factor authentication](/blog/multi-factor-authentication-for-business/).
- **Email authentication records (SPF, DKIM and DMARC).** These settings make it harder for attackers to send messages that pretend to come from your own domain.
- **Email filtering.** Microsoft 365 includes protection features, and products from vendors such as Sophos and others add more layers, including checks on links and lookalike domains.
- **External sender warnings.** A banner on messages from outside the organisation helps staff spot a spoofed internal address.
- **Mailbox rule monitoring.** Hidden forwarding or deletion rules are a common sign of a compromised account, so review them regularly and alert on new ones.
- **Sign-in monitoring.** Alerts for logins from unusual locations or devices can reveal a break-in early.
- **Security awareness training.** Regular exercises, using platforms such as KnowBe4, keep the warning signs fresh in people's minds.

## Data protection angle

If an attacker reads a mailbox, they may see personal data about staff, customers or patients. Under the Nigeria Data Protection Act 2023 (NDPA), a breach of personal data can carry reporting duties to the Nigeria Data Protection Commission. Check the current requirements with your legal adviser and make sure your incident process says who decides and who reports.

## A short checklist to start this week

- Write down a rule: no bank detail change without a call-back.
- Require a second approver above an agreed payment value.
- Turn on MFA for every mailbox, starting with finance and executives.
- Check that SPF, DKIM and DMARC are set up for your domain.
- Review mailbox forwarding rules and external sender warnings.
- Brief the finance team on a real example of the scam.

## Getting help

Veltriq Alliance helps organisations in Lagos and across Nigeria secure email, enforce multi-factor authentication and train staff to spot fraud. Read more about our [cyber security services](/services.html#security), or [contact us](/contact.html) to review how well your payment process and mailboxes would stand up to a convincing fake invoice.
