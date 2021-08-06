import express from "express";
import fivem from "fivem-server-stats";
const Router = express.Router();

Router.get("/", (req,res) => {
  res.send("This is working")
})

Router.get("/info", async (req,res) => {
  const {ip, port} = req.query;
  const infoRes = await fivem.getInfo(`${ip}:${port}`);
  res.send(infoRes)
})

Router.get("/players", async (req,res) => {
  const {ip, port} = req.query;
  const playerRes = await fivem.getPlayers(`${ip}:${port}`);
  res.send(playerRes)
})
Router.get("/playercount", async (req,res) => {
  const {ip, port} = req.query;
  const countRes = await fivem.getPlayerLength(`${ip}:${port}`);
  res.send(countRes)
})

export default Router;