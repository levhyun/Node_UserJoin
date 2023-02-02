"use strict"

const UserStorage = require("./userStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        if(body.id === "" && body.pswd === "") {
            return { chk : 'info' , text : 'The login text box is empty.' };
        }
        const { id, pswd } = UserStorage.getUserInfo(body.id);
        if(id) {
            if( id === body.id && pswd === body.pswd) {
                return { chk : 'success'}; 
            }
            return { chk : 'warning' , text : 'Password mismatch' };
        }
        return { chk : 'warning' , text : 'This Id does not exist.' }; 
    }
}

module.exports = User;