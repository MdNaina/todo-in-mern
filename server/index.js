const express = require ("express")

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello World")
})

const PORT = 5000

app.listen(PORT, () => console.log(`server is started at PORT  ${PORT}`) );

