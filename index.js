const express = require("express")

const app = express()

app.use(express.static(__dirname + "/personal_portfolio"))
app.use(express.static(__dirname + "/admin"))

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/personal_portfolio/index.html")
})

app.get("/admin", (req, res) => {
    return res.sendFile(__dirname + "/admin/dist/index.html")
})

app.listen(5003, () => {
    console.log("Listen on port 5003")
})
