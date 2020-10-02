// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    signin: function(loginurl="", id="", pw="") {
      let login_xpath = {xpath: "//div[@id='loginbutton']"}
      let twitter = {
        id: {xpath: "//input[@id='username_or_email']"},
        pw: {xpath: "//input[@id='password']"},
        signin_button: {xpath: "//input[@id='allow']"}
      }
      this.amOnPage(loginurl);
      this.scrollTo(login_xpath);
      this.click(login_xpath);
      this.fillField(twitter.id, id);
      this.fillField(twitter.pw, pw);
      this.click(twitter.signin_button)
    }
  });
}
