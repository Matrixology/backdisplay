/*
 * BackDisplay website settings. This is the only file you need to edit.
 * Leave a value as "" and its button or card is hidden from the page.
 */
window.REARDECK = {
  version: "1.5.2",
  // Where the APK is downloaded from. A GitHub Release link is best (free, no size limit),
  // e.g. "https://github.com/YOURNAME/reardeck/releases/latest/download/RearDeck.apk"
  apkUrl: "https://github.com/Matrixology/backdisplay/releases/latest/download/BackDisplay.apk",
  apkSize: "50 MB",                 // e.g. "28 MB"
  apkSha256: "238d6643e8920e6cfc24fb4e00e4d770b39af70a8e370f02f246396e78587a7c",               // optional: lets careful users check the file
  playUrl: "",
  email: "matrixology@gmail.com",
  privacyUrl: "privacy.html",
  // Visitor counting with GoatCounter (no cookies, no personal data): your code from
  // goatcounter.com, e.g. "backdisplay" for backdisplay.goatcounter.com. "" = no counting.
  goatcounter: "matrixology",

  // ---- Support options (each card shows only when it has a value) ----
  binancePayId: "155112876",            // your Binance Pay ID (numbers), from Binance → Pay → Receive
  binanceQr: "",               // optional: a QR image you saved from Binance, e.g. "img/binance-qr.png"
  usdt: [                      // crypto addresses; delete the lines you don't use
    { network: "TRC20 (Tron)", address: "TPUncxewqSgEJadWsy9XZfW2unThTMM4CN" },
  ],
  bank: {                      // for supporters in Pakistan (IBFT / Raast)
    title: "", iban: "", accountName: "", bankName: "", raastId: "",
  },
  wallets: [                   // JazzCash, Easypaisa, SadaPay, NayaPay …
    { name: "SadaPay", number: "03292594899", holder: "" },
    { name: "JazzCash", number: "", holder: "" },
    { name: "Easypaisa", number: "", holder: "" },
  ],
  cardUrl: "https://matrixologist.gumroad.com/l/backdisplay", // card payments for anyone, e.g. a Gumroad "pay what you want" link
  cardLabel: "Pay by card",
  membershipUrl: "https://www.patreon.com/c/matrixology1", // e.g. a Patreon page
  membershipLabel: "Monthly on Patreon",
};
