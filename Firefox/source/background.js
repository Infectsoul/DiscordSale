const TARGET_URL =
  "https://discord.com/api/v9/users/@me/mfa/webauthn/credentials";

const HEADERS_TO_CAPTURE = [
  "accept",
  "accept-language",
  "authorization",
  "cache-control",
  "pragma",
  "priority",
  "x-debug-options",
  "x-discord-locale",
  "x-discord-timezone",
  "x-super-properties"
];

browser.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (details.url !== TARGET_URL) {
      return;
    }

    const requestHeaders = details.requestHeaders || [];
    const data = {};

    for (const header of requestHeaders) {
      const name = header.name.toLowerCase();

      if (HEADERS_TO_CAPTURE.includes(name)) {
        data[name] = header.value;
      }
    }

    saveHeaders(data);
  },
  {
    urls: ["https://discord.com/*"]
  },
  ["requestHeaders"]
);

function saveHeaders(data) {
  browser.storage.local
    .set({ requestHeaders: data })
    .then(() => {
      console.log("Headers salvos:", data);
    })
    .catch((error) => {
      console.error("Erro ao salvar headers:", error);
    });
}