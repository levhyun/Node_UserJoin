"use strict"

const User = require("../../models/user");

// 랜더링 객체
const rendering = {
    // home 컨트롤러
    home : (req,res) => {
        res.render("home/index");
    },

    // login 컨트롤러
    login : (req,res) => {
        res.render("home/login");
    },

    // Sign up 컨트롤러
    signup : (req,res) => {
        res.render("home/signup");
    }
};

// post 제어 객체
const process = {
    // 로그인 처리
    login : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },

    // 회원가입 처리
    signup : (req,res) => {
        const user = new User(req.body);
        const response = user.signup();
        return res.json(response);
    }
};

module.exports = {
    rendering,
    process
};