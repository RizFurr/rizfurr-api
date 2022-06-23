const fetch = require("node-fetch");

module.exports = async function () {
  dts = await fetch("https://raw.caliph.my.id/quotesanime.json");
  json = await dts.json();
  random = json[Math.floor(Math.random() * json.length)];
  return { status: dts.status, result: random };
}.bind();
