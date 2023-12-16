import express from "express";
import { createlogindata, customerLogin, deletelogin, getlogin, updatelogin } from "../Controller/logindata.js";


const router = express.Router();

router.post('/', createlogindata);

router.get('/', getlogin);

router.delete("/:id", deletelogin);

router.put("/:id", updatelogin);

router.post('/user', customerLogin)

export default router;