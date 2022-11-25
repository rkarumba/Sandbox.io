
class User {
  constructor(email ,name){
       this.email = email;
       this.name = name;
       this.score = 0;
  }

  login(){
    console.log(this.email, "has logged in");
    return this;
  }
  logout(){
    console.log(this.email, "has logged out");
    return this;
  }
  updateScore(){
    this.score++;
    console.log(this.email, 'Score is now', this.score);
    return this;
  }


}

class Admin extends User {
      deleteUser(user){
         users = users.filter(u =>{
          return u.email != user.email;
         });
      }
}


let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('shaun@ninjas.com', 'shaun')
let users = [userOne, userTwo, admin];

admin.login().updateScore().updateScore().updateScore().logout().deleteUser(userOne);
console.log(users);