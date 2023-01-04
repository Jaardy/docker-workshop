import express from "express"
const app = express()

console.log("test")
app.get("/", (req, res) => {
    res.send("Hello world! I'm inside a container!")
})


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
})