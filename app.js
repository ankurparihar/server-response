const express = require('express')
const url = require('url')
const app = express()
const { response } = require('express')
const port = process.env.PORT || 3000


app.listen(port, () => {
	console.log(`app listening at PORT ${port}`)
})

app.get('/', (req, res) => {
	const queryObject = url.parse(req.url, true).query
	let server = queryObject.server
	
	if(server) res.setHeader('Server', server)
	res.send("Real magic happns at F12 :)")
})