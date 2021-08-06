import express from "express";
import fivem from "fivem-server-stats";
const Router = express.Router();

Router.get("/", (req,res) => {
  res.send("Welcome to fiveM server stats")
})

Router.get("/info", async (req,res) => {
  const {ip, port} = req.query;

  if(!ip || !port){
    res.send("send an ip and a port as a query")
  }
  else{
    const infoRes = await fivem.getInfo(`${ip}:${port}`);
    res.send(infoRes)
  }

})

Router.get("/players", async (req,res) => {
  const {ip, port} = req.query;
  if(!ip || !port){

    res.send("send an ip and a port as a query")
  }
  else{
    const playerRes = await fivem.getPlayers(`${ip}:${port}`);
  res.send(playerRes)
  }

})
Router.get("/playercount", async (req,res) => {
  const {ip, port} = req.query;
  if(!ip || !port){

    res.send("send an ip and a port as a query")
  }
  else{
    const countRes = await fivem.getPlayerLength(`${ip}:${port}`);
    res.send(countRes)
  }

})

export default Router;