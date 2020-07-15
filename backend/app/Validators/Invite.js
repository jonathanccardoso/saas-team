'use strict'

class Invite {
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      // validation rules
      invite: 'required|array',
      'invite.*': 'required|email',
    }
  }
}

module.exports = Invite
