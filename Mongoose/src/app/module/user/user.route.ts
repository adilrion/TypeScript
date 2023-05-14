const express = require('express');
const router = express.Router();
import {getUsers, createUser} from "./user.controller"
router.get("/", getUsers);
router.post("/create-user/", createUser);


export default router;