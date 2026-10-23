/**
 * Veltriq Alliance website forms → Google Sheet
 *
 * Receives newsletter signups and contact enquiries from the website, saves
 * them to tabs in the Google Sheet this script is attached to, and emails
 * each new enquiry to NOTIFY_EMAIL.
 *
 * Setup: see "Newsletter and contact form" in BLOG-GUIDE.md.
 */

const NOTIFY_EMAIL = "sales@veltriqalliance.com.ng";

const TABS = {
  newsletter: { name: "Subscribers", headers: ["Date", "Email", "Name", "Consent", "Signed up on page"] },
  contact: { name: "Enquiries", headers: ["Date", "Name", "Company", "Email", "Phone", "Services", "Timeline", "Message", "Page"] },
};

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return done(); // spam honeypot filled in

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (p.type === "newsletter") saveSubscriber(p);
    else if (p.type === "contact") saveEnquiry(p);
  } finally {
    lock.releaseLock();
  }
  return done();
}

function saveSubscriber(p) {
  const email = String(p.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
  const sheet = getTab(TABS.newsletter);
  const rows = sheet.getLastRow() - 1;
  if (rows > 0) {
    const existing = sheet.getRange(2, 2, rows, 1).getValues().flat();
    if (existing.indexOf(email) !== -1) return; // already subscribed
  }
  sheet.appendRow([new Date(), email, clean(p.name), clean(p.consent), clean(p.page)]);
}

function saveEnquiry(p) {
  const sheet = getTab(TABS.contact);
  sheet.appendRow([
    new Date(), clean(p.name), clean(p.company), clean(p.email), clean(p.phone),
    clean(p.services), clean(p.timeline), clean(p.message), clean(p.page),
  ]);
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email || "") ? p.email : NOTIFY_EMAIL;
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: replyTo,
    subject: "Website enquiry: " + (p.company || p.name || "new enquiry") + (p.services ? " (" + p.services + ")" : ""),
    body: [
      "New enquiry from the website.",
      "",
      "Name: " + (p.name || "-"),
      "Company: " + (p.company || "-"),
      "Email: " + (p.email || "-"),
      "Phone: " + (p.phone || "-"),
      "Services: " + (p.services || "-"),
      "Timeline: " + (p.timeline || "-"),
      "",
      p.message || "",
      "",
      "Reply to this email to respond directly to the sender.",
    ].join("\n"),
  });
}

function getTab(tab) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(tab.name);
  if (!sheet) {
    sheet = ss.insertSheet(tab.name);
    sheet.appendRow(tab.headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, tab.headers.length).setFontWeight("bold");
  }
  return sheet;
}

// Trim, cap length, and stop values being treated as spreadsheet formulas.
function clean(value) {
  const s = String(value || "").trim().slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function done() {
  return ContentService.createTextOutput("ok");
}

// Run this once from the editor to grant permissions and create the tabs.
function setup() {
  getTab(TABS.newsletter);
  getTab(TABS.contact);
}
