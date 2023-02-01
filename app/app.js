"use strict"

// 모듈
const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 정적 파일 등록
app.use(express.static(path.join(__dirname, './src/public')));

// json 파싱 미들위어 등록
app.use(bodyParser.json());

// 한글, 공백 포함 json 인식 문제 해결
app.use(bodyParser.urlencoded({ extended: true }))

// 미들웨어 등록
app.use("/", home);

module.exports = app;