"use strict"

const UserStorage = require("./userStorage");

class User {
    constructor(body){
        this.body = body;
    }

    // 로그인 로직 메서드
    async login() {
        const user = this.body;
        if(user.id === "" && user.pswd === "") {
            return { chk : 'info' , text : 'The login input box is empty.' };
        }
        const { id, pswd } = await UserStorage.getUserInfo(user.id);
        if(id) {
            if( id === user.id && pswd === user.pswd) {
                return { chk : 'success'}; 
            }
            return { chk : 'warning' , text : 'Password mismatch' };
        }
        return { chk : 'warning' , text : 'This Id does not exist.' }; 
    }

    // 회원가입 로직 메서드
    signup() {
        const user = this.body;
        const response = UserStorage.addUser(user);
        return response;
    }
}

module.exports = User;