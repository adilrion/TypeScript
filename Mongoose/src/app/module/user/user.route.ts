import createUser from "./user.controller";

const express = require('express');
const route = express.Router();
route.get("/", createUser);

export default route