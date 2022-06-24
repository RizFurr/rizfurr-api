const FormData = require("form-data");
const type = require("file-type");
const fetch = require("node-fetch");

module.exports = async function uploadFile(buffer) {
  let { ext } = await type.fromBuffer(buffer);
  bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);

  response = await fetch("https://file.rizfurr.ml/api/upload", {
    method: "post",
    body: bodyForm,
  });

  return {
    status: response.status,
    result: (await response.json()).result,
  };
}.bind();
