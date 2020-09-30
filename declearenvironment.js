"use strict";

class DeclearEnvironment {

  constructor(param = { base_url: null, twitter: {id: null, pw: null}, bang_count: 0 })  {
    if(param.base_url == null
       || param.twitter.id == null
       || param.twitter.pw == null
       || param.bang_count == null) {
      return false
    }
    this.base_url = param.base_url
    this.twitter = {
      id: param.twitter.id,
      pw: param.twitter.pw
    }
    this.bang_count = param.bang_count
  }

  getBaseUrlrl() {
    return this.base_url
  }

  getTwitterCredential() {
    return this.twitter
  }

  getBangCount() {
    return this.bang_count
  }

}

module.exports = DeclearEnvironment

