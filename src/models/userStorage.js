"use strict"

const fs = require("fs").promises;

class UserStorage {
    // static getUser(...fields) {
    //     const users = this.#users;
    //     const userInfo = fields.reduce((result, key) => {
    //         if(users.hasOwnProperty(key)) {
    //             result[key] = users[key];
    //         }
    //         return result;
    //     }, {});
    //     return userInfo;
    // }

    // 해당하는 id를 가진 유저 정보 반환
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const index  = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((result, key) => {
            result[key] = users[key][index];
            return result;
        }, {});
        return userInfo;
    }

    // 함수 호출 결과를 promises로 반환
    static getUserInfo(id) {
        return fs
            .readFile("./src/database/userData.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    // 유저 추가
    static addUser(userInfo) {

    }
}

module.exports = UserStorage;