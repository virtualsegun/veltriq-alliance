---
title: "Choosing a UPS: sizing, runtime and battery types for your business"
description: "UPS and power protection for Nigerian businesses: how to choose the right UPS, size it for your load, plan runtime and compare lead-acid and lithium batteries."
date: 2026-11-25 08:00:00 +0100
category: Datacenter & Infrastructure
author: Veltriq Alliance Team
---

A UPS, short for uninterruptible power supply, is a box of batteries that keeps your equipment running when mains power drops. Plenty of Nigerian offices own one, yet it often beeps for ninety seconds and then the server goes down anyway. The usual cause is not a faulty unit. It is a UPS that was the wrong size, the wrong type, or never checked after installation. Getting **UPS and power protection** right starts with a few straightforward decisions.

## What UPS and power protection actually involve

A UPS does two jobs. First, it bridges the gap between power sources: from the grid failing to the generator starting, and during the changeover back. Second, depending on the type, it cleans up the power by smoothing out surges, sags and spikes before they reach your equipment.

It is not meant to run your office for hours. For that you need a generator or an inverter system. Think of the UPS as the part that gives your servers time to carry on, or to shut down safely, without losing data. For the wider picture of generators, voltage regulation and cooling, read our guide to [keeping your server room running through power cuts and heat](/blog/keeping-your-server-room-running-through-power-cuts-and-heat/).

## Step 1: Choose the right type

There are three common designs:

- **Offline (standby).** Passes mains power straight through and switches to battery when it fails. Cheap, and acceptable for a single desktop PC, but it offers little protection against poor-quality power and has a brief switchover moment.
- **Line-interactive.** Adds automatic voltage regulation, so it corrects mild sags and surges without using the battery. A sensible choice for small offices, network cabinets and point-of-sale equipment.
- **Online (double-conversion).** Continuously converts incoming power to battery-backed power and back again, so your equipment always receives clean, stable electricity with no switchover gap. This is the usual choice for servers, storage and core network equipment, and it suits Nigerian conditions where grid and generator power are both uneven.

As a rule, the more critical the equipment, the more you should lean towards online units.

## Step 2: Size it for your load

Sizing is where most mistakes happen. Follow these steps:

1. **List every device** the UPS will feed: servers, storage, switches, firewall, router, and anything else plugged in.
2. **Find the power draw of each, in watts.** It is on the label or in the specification sheet. Real consumption is usually lower than the label's maximum, but plan on the higher figure for sizing.
3. **Add the watts together**, then allow room for growth, so the unit is not already full on the day it is installed.
4. **Check the UPS rating in watts, not only VA.** VA (volt-amperes) is a larger number than watts, and the two are linked by the unit's power factor. Always compare your load in watts with the UPS's watt rating. Many problems come from comparing watts against VA.
5. **Avoid running close to the limit.** A UPS loaded near its maximum has little headroom for start-up surges and ages faster. Leaving a comfortable margin is good practice.

Keep printers, kettles, fridges and air conditioners off the UPS. They draw large surges and add nothing to business continuity.

## Step 3: Decide how much runtime you need

Runtime is how long the batteries can carry your load. It depends on the battery capacity and on how much you have plugged in: the heavier the load, the shorter the runtime. Instead of asking for "one hour", work out what you actually need:

- **Bridging to the generator.** If an automatic transfer switch starts the generator within seconds, you may need only a few minutes, with a safety margin for a slow or failed first start.
- **Safe shutdown.** Servers need enough time to close databases and power off cleanly. Test how long your longest shutdown takes, then add margin.
- **Longer outages.** If your site has no generator, or the grid is the only source, decide what must stay up and size batteries for that smaller load only. Extended battery packs are available for many models, at a cost.

Ask your supplier for the runtime curve at your actual load, rather than a headline figure quoted at half load.

## Step 4: Compare battery types

Most UPS units use one of two battery technologies:

- **Sealed lead-acid (VRLA).** The long-established choice. Lower purchase price and widely available, but the batteries wear out and typically need replacing every few years. Heat shortens their life considerably, which matters in a warm Lagos equipment room.
- **Lithium-ion.** Higher upfront cost, but generally longer service life, lower weight, smaller footprint and better tolerance of heat. Over the life of the system the total cost can work out competitive, especially where battery replacements mean downtime or site visits.

Whichever you choose, budget for replacement. Batteries are a consumable part, and a UPS with tired batteries gives a false sense of security.

## Step 5: Install and maintain it properly

A good unit can still fail through poor installation and neglect. Use this checklist:

- [ ] Fit shutdown software, or a network management card, so servers close down cleanly when the batteries run low.
- [ ] Keep the UPS in a cool, ventilated space, away from direct sunlight.
- [ ] Use properly rated circuits and sockets, with correct earthing.
- [ ] Set up alerts by email or SMS when the UPS goes on battery, or reports a fault.
- [ ] Run a test every few months by briefly pulling the mains and watching what happens.
- [ ] Record the battery installation date and plan replacement before it is due.

Managed monitoring tools, such as ManageEngine's network and infrastructure monitoring products, can include UPS status among the devices you track, so a failing battery becomes an alert and not a surprise. Power protection also supports your backups. A backup server that crashes mid-job helps nobody, as explained in our post on the [3-2-1 backup rule](/blog/3-2-1-backup-rule-for-business/).

## A simple way to start

Walk around your office or server room today and write down what is plugged into each UPS, its age, and when the batteries were last tested. That one list will tell you whether you are protected or only hopeful.

Veltriq Alliance helps organisations plan and install power protection as part of wider server room and infrastructure design. You can read about our [datacenter and infrastructure services](/services.html#datacenter), or [contact us](/contact.html?service=datacenter) to have your current setup reviewed.
