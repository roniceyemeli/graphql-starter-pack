const {dummyData, UserList} = require('../dummyData')

const resolvers = {
    Query: {
        users(){
            return UserList;
        }
    }
}

module.exports = {resolvers}