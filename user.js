// ============================================================================
// Hardened Thunderbird user.js (v2.2)
// Privacy & Security first, daily email-friendly configuration
// ============================================================================

// --- Privacy: Telemetry & Data Collection ---
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

// --- Privacy: Tracking & Remote Content ---
user_pref("mail.trusteddomains", "");
user_pref("mailnews.message_display.disable_remote_image", true); // blocks tracking pixels
user_pref("mail.phishing.detection.enabled", true);
user_pref("mail.phishing.detection.disallow_form_actions", true);

// --- Privacy: Identity & Receipts ---
user_pref("mail.mdn.report.enabled", false); // disables read receipts
user_pref("mail.server.default.login_at_startup", false);

// --- Security: Connections ---
user_pref("network.security.ports.banned.override", ""); // caution: opens all ports
user_pref("mail.server.default.use_ssl", true);
user_pref("mail.smtpserver.default.use_ssl", true);
user_pref("security.tls.version.min", 3); // TLS 1.2
user_pref("security.tls.version.max", 4); // TLS 1.3
user_pref("mailnews.start_page.enabled", false);

// --- Security: Content in Emails ---
user_pref("javascript.enabled", false); // disables JS in messages
user_pref("mailnews.display.html_as", 1); // simplified HTML (allows better readability)
user_pref("mailnews.display.prefer_plaintext", true);
user_pref("mailnews.display.disallow_mime_handlers", 3);
user_pref("mailnews.display.disallow_mime_handlers.images", false); // allow inline images
user_pref("mail.inline_attachments", false);

// --- Security: Attachments ---
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mailnews.attachments.open.safe", false); // always prompt
user_pref("mailnews.downloadToTempFile", true);

// --- Updates ---
user_pref("app.update.auto", true);
user_pref("extensions.update.enabled", true);

// --- Usability ---
user_pref("mailnews.start_page.url", "about:blank");
user_pref("mailnews.message_display.show_all_body_parts_menu", true);
user_pref("mailnews.display.show_all_body_parts", true);
user_pref("mail.threadpane.use_correspondents", true);
user_pref("mailnews.display.original_date", true);
user_pref("mail.openMessageBehavior", 0); // open in tab

// --- Performance / Indexing ---
user_pref("mailnews.database.global.indexer.enabled", true); // enables faster search
user_pref("mailnews.default_sort_order", 2); // newest first

// --- Networking hygiene ---
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.captive-portal-service.enabled", false);

// --- Cookies (used by some add-ons/calendars) ---
user_pref("network.cookie.cookieBehavior", 1); // block 3rd-party cookies
user_pref("network.cookie.lifetimePolicy", 2); // session-only

// --- Graphics / WebGL ---
user_pref("webgl.disable-extensions", false);
user_pref("webgl.min_capability_mode", true);

// ============================================================================
// Optional extras (uncomment to enable)
// ============================================================================

// DNS-over-HTTPS (set your resolver URI)
user_pref("network.trr.mode", 2); // DoH first, fallback to system
user_pref("network.trr.uri", "https://your-doh-resolver.example/dns-query");

// Relax inline image blocking for newsletters (already enabled above)
// user_pref("mailnews.display.disallow_mime_handlers.images", false);

// Show plaintext instead of simplified HTML
// user_pref("mailnews.display.html_as", 3);

// Re-enable global indexer if disabled
// user_pref("mailnews.database.global.indexer.enabled", true);
