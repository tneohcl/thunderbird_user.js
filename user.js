// ============================================================================
// Thunderbird Arkenfox-Lite (Balanced Hardening)
// Privacy-first, secure-by-default, but keeps Thunderbird usable for daily email
// ============================================================================

// -------------------------------------
// 0. TELEMETRY & EXPERIMENTS
// -------------------------------------
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("mail.instrumentation.postUrl", "");   // no reporting
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");

// -------------------------------------
// 1. MESSAGE DISPLAY & PRIVACY
// -------------------------------------
// Block tracking pixels & external images
user_pref("mailnews.message_display.disable_remote_image", true);

// Prefer plain text, allow simple HTML fallback
user_pref("mailnews.display.prefer_plaintext", true);
user_pref("mailnews.display.html_as", 3);   // 1=plain, 3=simple HTML

// Block inline scripts/plugins in email
user_pref("mailnews.display.disallow_mime_handlers", 3);

// Disable read receipts
user_pref("mail.mdn.report.enabled", false);

// Block external stylesheets
user_pref("mailnews.display.html_external_styles", false);

// -------------------------------------
// 2. SECURITY
// -------------------------------------
// Force SSL/TLS for all accounts
user_pref("mail.server.default.use_ssl", true);
user_pref("mail.smtpserver.default.use_ssl", true);

// Disable JavaScript in mail (already default, enforced here)
user_pref("javascript.enabled", false);

// Safer attachment handling
user_pref("mail.inline_attachments", false);
user_pref("network.protocol-handler.external-default", false);

// -------------------------------------
// 3. INDEXING & SEARCH
// -------------------------------------
// Disable global indexing (privacy + performance gain)
// Searches are slower but less background activity
user_pref("mailnews.database.global.indexer.enabled", false);

// -------------------------------------
// 4. UPDATES
// -------------------------------------
// Security updates stay ON
user_pref("app.update.enabled", true);
user_pref("app.update.auto", true);

// -------------------------------------
// 5. MISCELLANEOUS
// -------------------------------------
user_pref("geo.enabled", false); // disable geolocation (not used in mail client)
user_pref("media.peerconnection.enabled", false); // disable WebRTC (not needed)

// -------------------------------------
// 6. ENCRYPTION (Optional: Enable if you use OpenPGP or S/MIME)
// -------------------------------------
user_pref("mail.openpgp.enable", true);
user_pref("mail.identity.default.encryptionpolicy", 2); // 0=never, 2=always if possible
user_pref("mail.identity.default.sign_mail", true);
