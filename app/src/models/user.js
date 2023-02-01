"use strict"

const UserStorage = require("./userStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        if(body.id === "" && body.pswd === "") {
            return { succerss : false, message : "입력 오류" };
        }
        const { id, pswd } = UserStorage.getUserInfo(body.id);
        if(id) {
            if( id === body.id && pswd === body.pswd) {
                return { success : true  };
            }
            return { succerss : false, message : "패스워드 불일치" };
        }
        return { succerss : false, message : "존재하지 않는 아이디" };
    }
}

module.exports = User;