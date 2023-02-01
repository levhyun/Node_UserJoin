"use strict"

// 모듈
const express = require("express");
const router = express.Router();

// 컨트롤러 세팅
const ctrl = require("./home.ctrl");

// home 랜더링 컨트롤러 등록
router.get("/", ctrl.rendering.home);

// login 랜더링 컨트롤러 등록
router.get("/login", ctrl.rendering.login);

// Sign up 랜더링 컨트롤러 등록
router.get("/signup", ctrl.rendering.signup);

// login 프로세스 컨트롤러 등록
router.post("/login", ctrl.process.login);

module.exports = router;