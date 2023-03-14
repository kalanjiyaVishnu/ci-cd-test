import express from "express"
import configs from "../config/"

const app = express()
const port = 3006

app.get("/", (req, res) => res.send("Hello World!"))

// app.get("/template/:id", (req, res) => {
//   const { id } = req.params
//   if (!id || !Object.keys(configs).includes(id))
//     return res.status(400).send({ error: "Template id is invalid" })
//   res.status(200).json(configs[id])
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
