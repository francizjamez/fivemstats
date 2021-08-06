import express from "express";

import Router from "./routes.js"

const app = express();

const PORT = 8000

app.use("/", Router)

app.listen(PORT, async () => {
  console.log('====================================');
  console.log(`Server is listening on port ${PORT}`);
  console.log('====================================');
})


