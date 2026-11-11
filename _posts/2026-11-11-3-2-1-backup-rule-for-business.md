---
title: "The 3-2-1 backup rule and why every business needs it"
description: "The 3-2-1 backup rule keeps three copies of your data on two kinds of media, with one offsite. Learn how backup and disaster recovery works in Nigeria."
date: 2026-11-11 08:00:00 +0100
category: Datacenter & Infrastructure
author: Veltriq Alliance Team
---

Most businesses believe their data is backed up. Fewer can say where the copies are, how old they are, or whether anyone has ever restored one. Then a server fails, ransomware encrypts the shared drive, or an office is flooded, and the backup turns out to sit on the same machine, in the same room, or on a USB drive that nobody can find.

The **3-2-1 backup rule** is a simple, widely used guide that avoids these traps. It is the foundation of sensible backup and disaster recovery in Nigeria, and it works for a ten-person office as well as for a bank branch network.

## What the 3-2-1 backup rule means

The rule has three parts:

- **3 copies of your data.** The live data you work with, plus two backups.
- **2 different types of storage.** For example, a disk-based backup appliance or NAS (network-attached storage, a dedicated box of disks on your network) and a cloud service. If one type fails or is hit by the same fault, the other is unaffected.
- **1 copy offsite.** At least one copy must be physically away from your main premises, so a fire, flood, theft or prolonged power surge at the office cannot destroy everything at once.

Many organisations now add two more points, often called 3-2-1-1-0: one copy that is **offline or immutable** (it cannot be changed or deleted, even by an attacker with administrator access), and **zero errors** after testing the restore.

## Why one copy is never enough

Think about what can go wrong with data in a typical Lagos business:

- **Hardware failure.** Disks and servers wear out, and heat and unstable power shorten their lives.
- **Power events.** Surges and sudden cuts can corrupt files and damage storage.
- **Human error.** Someone deletes a folder, or overwrites a spreadsheet with the wrong version.
- **Ransomware.** Malware that encrypts your files and demands payment. Attackers often look for backups first and encrypt or delete them too.
- **Theft and physical damage.** Laptops are stolen; offices suffer fire and flooding.

A backup that lives on the same server, or on an external drive permanently plugged into it, is not protected against most of these. This is why "two types" and "one offsite" matter so much.

## Applying the rule in practice

### Step 1: List what you must protect

Start with the data the business cannot operate without: accounting and ERP databases, customer records, email, file shares, and any line-of-business application. Do not forget laptops used by finance and sales staff, and cloud services such as Microsoft 365. Providers of cloud software generally keep the service running, but that is not the same as keeping a recoverable copy of your data. See our guide to [what the NDPA means for your IT systems](/blog/what-the-ndpa-means-for-your-it-systems/) for why protecting personal data is also a legal duty.

### Step 2: Choose your three copies

A common, practical setup looks like this:

1. **Copy one:** production data on your servers or laptops.
2. **Copy two:** a local backup on a NAS or backup server, which restores quickly because it is on your own network.
3. **Copy three:** an encrypted copy in the cloud or at a second site, which survives a disaster at the office.

Backup software from vendors such as Veeam can automate this, copying from local storage to a cloud or remote repository on a schedule.

### Step 3: Decide how often to back up

Ask: "If we lost everything since the last backup, how much work could we afford to redo?" The answer is your **recovery point objective (RPO)**. A business that can tolerate losing a day of work can back up nightly. One that processes payments all day may need backups every few minutes or hourly.

Also ask: "How long can we be down?" That is your **recovery time objective (RTO)**. Local copies restore faster than downloads over a limited internet link, which matters when bandwidth is costly or unreliable.

### Step 4: Protect the backups themselves

- Use **encryption**, both in transit and at rest, so a stolen disk or intercepted upload is useless to others.
- Keep at least one copy **immutable or offline**, so ransomware cannot reach it.
- Use separate credentials for the backup system, with multi-factor authentication, rather than your everyday administrator login.
- Keep backup storage on a protected power supply, with a UPS, as you would any critical server. Our article on [keeping your server room running through power cuts and heat](/blog/keeping-your-server-room-running-through-power-cuts-and-heat/) covers this in more detail.

### Step 5: Think about bandwidth and cost

Sending large amounts of data offsite over a metered or slow connection is a real constraint. Practical ways to manage it include:

- Running the first full backup over a weekend.
- Using incremental backups, which send only what has changed since the last run.
- Scheduling uploads for off-peak hours, and using compression.

Cloud storage is typically priced in dollars, so check your costs against the naira exchange rate and agree a budget before you commit.

## Test your restores

A backup you have never restored is a hope, not a plan. Put these on the calendar:

- **Monthly:** restore a few random files and confirm they open correctly.
- **Every quarter:** restore a full server or application to a test environment and time how long it takes.
- **Every year:** run a disaster recovery exercise as though the office were unavailable, and write down what went wrong.

Record the results, and if restores take longer than the business can tolerate, change the design now.

## A quick 3-2-1 checklist

- [ ] Do we have at least three copies of our critical data?
- [ ] Are they on at least two different types of storage?
- [ ] Is one copy outside our office, ideally in a different location or in the cloud?
- [ ] Is one copy offline or immutable?
- [ ] Are backups encrypted and protected by multi-factor authentication?
- [ ] Do we get an alert if a backup fails?
- [ ] Have we restored data successfully in the last three months?

If you answered "no" or "not sure" to any of these, that is where to start.

## Getting help

Veltriq Alliance designs and installs backup and disaster recovery solutions, from local appliances to cloud and offsite replication. You can read more about our [datacenter and infrastructure services](/services.html#datacenter), or [contact us](/contact.html?service=datacenter) to review how well your current backups would hold up on the worst day.
