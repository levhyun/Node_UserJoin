"use strict"

const fs = require("fs").promises;

class UserStorage {
    // 모든 유저 정보 반환
    static #getUsers(data, all, fields) {
        const users = JSON.parse(data);
        if (all) return users;
        const userInfo = fields.reduce((result, key) => {
            if(users.hasOwnProperty(key)) {
                result[key] = users[key];
            }
            return result;
        }, {});
        return userInfo;
    }

    // 함수 호출 결과를 promises로 반환
    static getUsers(all, ...fields) {
        return fs
            .readFile("./src/database/userData.json")
            .then((data) => {
                return this.#getUsers(data, all, fields);
            })
            .catch(console.error);
    }

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
    static async addUser(userInfo) {
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)) {
            return { chk : 'warning' , text : 'This Id does exist.' }; 
        }
        users.id.push(userInfo.id);
        users.pswd.push(userInfo.pswd);
        users.name.push(userInfo.name);
        fs.writeFile("./src/database/userData.json", JSON.stringify(users));
        return { chk : 'success' };
    }
}

module.exports = UserStorage;