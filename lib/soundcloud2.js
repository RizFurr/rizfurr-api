const axios = require('axios')
const cheerio = require('cheerio')

async function soundcloud2(url) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.klickaud.co/download.php",
			method: "POST",
			data: new URLSearchParams(Object.entries({'value': url, 'afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a' : '2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e'})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "RizFurr UwU"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const res = { 
			  status: 200,
			  creator: "RizFurr",
			  result:{
			  title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
			  thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			  }
			}
			resolve(res)
		}).catch(reject)
})
}

module.exports = soundcloud2.bind();
