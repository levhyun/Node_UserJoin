"use strict"

const UserStorage = require("./userStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        if(body.id === "" && body.pswd === "") {
            return { chk : 'info' , text : '공백 입력' };
        }
        const { id, pswd } = UserStorage.getUserInfo(body.id);
        if(id) {
            if( id === body.id && pswd === body.pswd) {
                return { chk : 'success' , text : '로그인 성공' }; 
            }
            return { chk : 'warning' , text : '패스워드 불일치' };
        }
        return { chk : 'warning' , text : '존재하지 않는 아이디' }; 
    }
}

module.exports = User;