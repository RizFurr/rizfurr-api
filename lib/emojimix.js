let fetch = require("node-fetch");

module.exports = (async (emo1, emo2) => {
  let result = await fetch(
  `https://api.rizfurr.ml/api/emojimix/${encodeURIComponent(emo1)}/${encodeURIComponent(emo2)}`
  );
  if (result.status != 200) throw await result.json();
  return result.buffer();
}).bind();
