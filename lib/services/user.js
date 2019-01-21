'use strict';

const { Service } = require('schmervice');

module.exports = class UserService extends Service {
 
  async initialize(){ // CALLED ON SERVER INITIALIZATION (onPreStart)

    // set up stuff here
    this.users = [];
  }

  async teardown(){ // CALLED ON SERVER STOP (OnPostStop)

   // tear down stuff here
  }

  hello(user){

    return `Hello ${user.firstName}`
  }

  createUser(user){

    this.users.push(user);
  }

  async getAllUsers(){
    const { User } = this.server.models();

    var users = await User.query();

    return users;
  }
  
}

