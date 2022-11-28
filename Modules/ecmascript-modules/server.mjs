import express from "express";
import { name } from "./get-name/index.mjs";
app.get("/", (req, res) => res.send(`Hello from ${name}!`));