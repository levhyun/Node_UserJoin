"use strict"

class UserStorage {
    static #users = {
        id : ["a", "b", "c"],
        pswd : ["1", "2", "3"]
    };

    static getUsers(...fileds) {
        const users = this.#users;
        const result = fileds.reduce((result, key) => {
            if(users.hasOwnProperty(key)) {
                result[key] = users[key];
            }
            return result;
        }, {});
        return result;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const index  = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((result, key) => {
            result[key] = users[key][index];
            return result;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;