const io = require('./server.js').io;

const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('./client/src/components/Events.js')

const { createUser, createMessage, createChat } = require('./client/src/components/Factories.js')

let connectedUsers = {};
module.exports = function (socket) {
    console.log("Socket Id" + socket.id)


    socket.on(VERIFY_USER, (nickname, callback) => {
        if (isUser(connectedUsers, nickname)) {
            callback({ isUser: true, user: null })
        } else {
            callback({ isUser: false, user: createUser({ name: nickname }) })
        }
    })

    socket.on(USER_CONNECTED, (user) => {
        connectedUsers = addUser(connectedUsers, user);
        socket.user = user;
        io.emit(USER_CONNECTED, connectedUsers);
        console.log(connectedUsers);
    })

}

function addUser(userList, user) {
    let newList = Object.assign({}, userList);
    newList[user.name] = user
    return newList;
}

function removeUser(userList, username) {
    let newList = Object.assign({}, userList);
    delete newList[username];
    return newList;
}

function isUser(userList, username) {
    return username in userList
}
