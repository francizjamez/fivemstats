import express from "express";

import Router from "./routes.js"

const app = express();

app.use("/", Router)

app.listen(process.env.PORT || 8000, async () => {
  console.log('====================================');
  console.log(`Server is listening on port ${PORT}`);
  console.log('====================================');
})


