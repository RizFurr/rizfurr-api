const axios = require("axios");
const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};
const clean2 = require("html-entities").AllHtmlEntities.decode;

module.exports = (async (q) => {
  let data = await axios.get(
    "http://app.chordindonesia.com/?json=get_search_results&search=" + q
  );
  let result = data.data;
  if (result.count < 0)
    return {
      status: 404,
      message: "no chords for this song were found",
      result: null,
    };
  res = result.posts[0];
  h = {};
  h.id = res.id;
  h.title = clean2(res.title);
  let data2 = await axios.get(
    "http://app.chordindonesia.com/?json=get_post&id=" + h.id
  );
  let result2 = data2.data;
  h.content = clean(result2.post.content).trim();
  return { status: 200, result: h };
}).bind();
