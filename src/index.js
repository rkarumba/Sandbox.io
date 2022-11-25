let userOne = {
  email: "rye@ninja.com",
  name: "rye",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  }
};
