Feature('Bang - Bang - Bang Test');

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

Scenario('Bang Bang Bang Gang', async ({ I }) => {
  let paramText = ""
  if(typeof process.env.paramtext != "undefined") {
    paramText = process.env.paramtext
  }

  const DeclearEnvironment = require("./declearenvironment.js")
  const env = require("./env.js")

  const decEnv = new DeclearEnvironment(env)

  const base_url = decEnv.getBaseUrlrl()
  const twc = decEnv.getTwitterCredential()
  const twitter_id = twc.id
  const twitter_pw = twc.pw
  const total_bang_num = decEnv.getBangCount()

  let login_xpath = {xpath: "//div[@id='loginbutton']"}
  let twitter_id_xpath = {xpath: "//input[@id='username_or_email']"}
  let twitter_pw_xpath = {xpath: "//input[@id='password']"}
  I.amOnPage(base_url);
  I.signin(base_url, twitter_id, twitter_pw)

  let connect_button = {xpath: "//div[@id='connect_camera']"}
  I.waitForElement(connect_button, 20)
  I.click(connect_button)

  let bang_button = {xpath: "//div[@id='attack']"}
  let setting_button = {xpath: "//div[@id='settings']"}
  let message_box = {xpath: "//input[@id='sendstr']"}
  let save_message_button = {xpath: "//div[@id='sbstore']"}
  for(let i=0; i<total_bang_num; i++) {
    I.waitForElement(bang_button, 20)
    I.scrollTo(bang_button);
    //
    I.scrollTo(setting_button);
    I.click(setting_button);
    if(paramText != "") {
      I.fillField(message_box, paramText)
    } else {
      I.fillField(message_box, `テスト回数：${i}/${total_bang_num}`)
    }
    await sleep(4000)
    I.click(save_message_button)
    await sleep(4000)
    await I.click(bang_button)
    await sleep(4000)

  }

});
