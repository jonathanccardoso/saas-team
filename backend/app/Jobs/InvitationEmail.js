"use strict";

const Mail = use("Mail");

class InvitationEmail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return "InvitationEmail-job";
  }

  // This is where the work is done.
  async handle({ user, team, email }) {
    // send data to template
    await Mail.send(
      ["emails.invitation"],
      { team: team.name, user: user.mame },
      (message) => {
        message
          .to(email)
          .from("jonathan99moura@hotmail.com", "Jonathan | Team")
          .subject(`Invite to join on time ${team.name}`);
      }
    );
  }
}

module.exports = InvitationEmail;
