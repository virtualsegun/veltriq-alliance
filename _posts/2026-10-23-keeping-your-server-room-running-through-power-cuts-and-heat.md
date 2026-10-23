---
title: "Keeping your server room running through power cuts and heat"
description: "Unstable grid power and high temperatures are the two biggest threats to server rooms in Nigeria. Here is how to design power, cooling and monitoring so your systems stay up."
date: 2026-10-23 09:10:00 +0100
category: Datacenter & Infrastructure
author: Veltriq Alliance Team
---

In many parts of the world, a server room's main enemies are hardware failure and human error. In Nigeria, two more sit at the top of the list: **unstable power** and **heat**. Grid outages, voltage swings, generator changeovers and air conditioners that fail without warning cause a large share of the downtime we see.

The good news is that both are manageable with the right design. Here is how to approach it.

## Power: build a chain, not a single device

Reliable power comes from several layers working together. If any one of them is missing or neglected, the whole chain is only as strong as that gap.

### Grid and generator, with automatic changeover

An **automatic transfer switch (ATS)** starts the generator and switches the load over when grid power fails, then switches back when it returns, without anyone needing to be on site. Manual changeover works only when someone is there, awake and quick.

### Voltage regulation and surge protection

Grid and generator power both fluctuate. Spikes, sags and surges shorten the life of power supplies and can damage equipment outright. An **automatic voltage regulator (AVR)** and proper **surge protection** at the distribution board protect everything downstream.

### The UPS: your bridge between power sources

The **uninterruptible power supply** keeps equipment running during the gap between grid failure and generator start, and during changeovers. For server rooms, choose an **online (double-conversion) UPS**. It continuously cleans the power your equipment receives, rather than only stepping in when power fails.

When sizing it, consider:

- **Load:** total power drawn by servers, storage and network equipment, plus room to grow.
- **Runtime:** enough to cover a failed generator start and a safe, orderly shutdown, not just the few seconds of a normal changeover.
- **Redundancy:** for critical systems, a second UPS or redundant power modules, with dual-power-supply servers fed from separate sources.

### Graceful shutdown

If power cannot be restored before the batteries run out, servers should **shut down automatically and cleanly**, rather than crashing when the power cuts. Shutdown software connected to the UPS does this, protecting data and preventing corruption.

### Batteries need care

UPS batteries wear out, and heat wears them out faster. As a rule of thumb, the life of sealed lead-acid batteries roughly halves for every 8 to 10°C above 25°C. Check battery health regularly, run periodic self-tests, and plan replacement before failure rather than after.

## Cooling: heat is a silent killer

Servers and network equipment generate a lot of heat, and Lagos temperatures give you little margin. Common problems include:

- **A single air conditioner.** When it fails, temperatures can climb to dangerous levels within an hour.
- **Units that do not restart after a power cut.** Many split units stay off when power returns until someone presses a button, often overnight or over a weekend.
- **Poor airflow.** Hot exhaust air gets pulled back into equipment intakes, and cables block vents.

**What good looks like:**

- Keep equipment intake temperatures within the widely used guideline of **18 to 27°C**.
- Install **at least two cooling units**, so one can fail or be serviced without risk, ideally with automatic switching between them.
- Make sure cooling **restarts automatically** after power is restored.
- Arrange racks so cold air feeds the front of equipment and hot air is exhausted away, using blanking panels and tidy cabling.

## Monitoring: know before it fails

Most server room incidents give warning signs: rising temperature, high humidity, a UPS switching to battery, water on the floor. **Environmental monitoring** turns those signs into alerts on your phone, so you can act before equipment fails.

A good monitoring setup covers:

- Temperature and humidity at rack level.
- Water leak detection near air conditioners and under raised floors.
- UPS status, battery level and power quality.
- Smoke detection, and door and access sensors.

Alerts should go by SMS or email to more than one person, with clear escalation if nobody responds.

## Test it before you need it

Power and cooling systems that look fine on paper often fail on the day. Every few months:

1. Simulate a grid failure and confirm the generator starts and the ATS switches over.
2. Check the UPS can carry the load for the expected runtime.
3. Confirm cooling restarts on its own after a power interruption.
4. Trigger a test alert and make sure the right people receive it.

## How we can help

Veltriq Alliance designs, builds and maintains server rooms and datacenter infrastructure: racks and containment, UPS and power distribution, precision cooling, and environmental monitoring with real-time alerts. We can also audit an existing room and give you a prioritised list of risks and fixes.

[Talk to us about your server room](/contact.html?service=datacenter), or read more about our [datacenter and infrastructure services](/services.html#datacenter).
