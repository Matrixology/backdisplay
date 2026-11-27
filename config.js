/*
 * BackDisplay website settings. This is the only file you need to edit.
 * Leave a value as "" and its button or card is hidden from the page.
 */
window.REARDECK = {
  version: "1.5.1",
  // Where the APK is downloaded from. A GitHub Release link is best (free, no size limit),
  // e.g. "https://github.com/YOURNAME/reardeck/releases/latest/download/RearDeck.apk"
  apkUrl: "https://github.com/Matrixology/backdisplay/releases/latest/download/BackDisplay.apk",
  apkSize: "50 MB",                 // e.g. "28 MB"
  apkSha256: "e62689746d736d3688e20f449adfa269a8d803c23c8b4e1c1764265c0e32f228",               // optional: lets careful users check the file
  playUrl: "",
  email: "matrixology@gmail.com",
  privacyUrl: "privacy.html",

  // ---- Support options (each card shows only when it has a value) ----
  binancePayId: "155112876",            // your Binance Pay ID (numbers), from Binance → Pay → Receive
  binanceQr: "",               // optional: a QR image you saved from Binance, e.g. "img/binance-qr.png"
  usdt: [                      // crypto addresses; delete the lines you don't use
    { network: "TRC20 (Tron)", address: "" },
    { network: "BEP20 (BNB Smart Chain)", address: "" },
  ],
  bank: {                      // for supporters in Pakistan (IBFT / Raast)
    title: "", iban: "", accountName: "", bankName: "", raastId: "",
  },
  wallets: [                   // JazzCash, Easypaisa, SadaPay, NayaPay …
    { name: "JazzCash", number: "", holder: "" },
    { name: "Easypaisa", number: "", holder: "" },
  ],
  cardUrl: "https://matrixologist.gumroad.com/l/backdisplay", // card payments for anyone, e.g. a Gumroad "pay what you want" link
  cardLabel: "Pay by card",
  membershipUrl: "",           // e.g. a Patreon page
  membershipLabel: "Monthly support",
};
