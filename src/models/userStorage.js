"use strict"

class UserStorage {
    static #users = {
        id : ["a", "b", "c"],
        pswd : ["1", "2", "3"]
    };

    // 해당하는 id를 가진 유저 정보 반환
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

    // 유저 추가
    static addUser(userInfo) {

    }
}

module.exports = UserStorage;