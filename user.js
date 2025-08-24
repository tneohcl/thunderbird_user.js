// ============================================================================
// Terence's Hardened Thunderbird user.js
// Privacy-first, secure-by-default, but still usable for daily email
// ============================================================================

// -------------------------------------
// 0. TELEMETRY & DATA COLLECTION
// -------------------------------------
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("mail.instrumentation.postUrl", ""); // no reporting
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// -------------------------------------
// 1. MESSAGE DISPLAY & PRIVACY
// -------------------------------------
// Block remote images (tracking pixels)
user_pref("mailnews.message_display.disable_remote_image", true);

// Prefer plain text, but allow simple HTML fallback
user_pref("mailnews.display.prefer_plaintext", true);
user_pref("mailnews.display.html_as", 3);  // 1=plain, 3=simple HTML
user_pref("mailnews.display.disallow_mime_handlers", 3); // block inline JS/plugins

// Block read receipts
user_pref("mail.mdn.report.enabled", false);

// Disable loading of external stylesheets in emails
user_pref("mailnews.display.html_external_styles", false);

// -------------------------------------
// 2. SECURITY
// -------------------------------------
// Enforce SSL/TLS
user_pref("mail.server.default.use_ssl", true);
user_pref("mail.smtpserver.default.use_ssl", true);

// Disable JavaScript globally in mail
user_pref("javascript.enabled", false);

// Disable inline execution
user_pref("mail.inline_attachments", false);

// Disable "Open with system default" directly (forces Save-As first)
user_pref("network.protocol-handler.external-default", false);

// -------------------------------------
// 3. INDEXING & SEARCH
// -------------------------------------
// Disable Global Database Indexing (privacy + speed)
user_pref("mailnews.database.global.indexer.enabled", false);

// -------------------------------------
// 4. UPDATES
// -------------------------------------
// Security updates: keep ON
user_pref("app.update.enabled", true);
user_pref("app.update.auto", true);

// -------------------------------------
// 5. MISCELLANEOUS
// -------------------------------------
// Disable geolocation (not really needed in mail client)
user_pref("geo.enabled", false);

// Disable experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");

// -------------------------------------
// 6. ENCRYPTION (OpenPGP/S/MIME)
// -------------------------------------
// Always prefer encryption/signing if configured
user_pref("mail.openpgp.enable", true);
user_pref("mail.identity.default.encryptionpolicy", 2); // 0=never, 2=always if possible
user_pref("mail.identity.default.sign_mail", true);
