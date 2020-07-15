"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const User = use("App/Models/User");
const Role = use("Adonis/Acl/Role");
const Permission = use("Adonis/Acl/Permission");

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: "Jonathan Cardoso",
      email: "jonathan99moura@hotmail.com",
      password: "123456",
    });

    // create permissions
    const createInvite = await Permission.create({
      slug: "invites_create",
      name: "Invite members",
    });

    const createProject = await Permission.create({
      slug: "projects_create",
      name: "Create projects",
    });

    // roles
    const admin = await Role.create({
      slug: "administrator",
      name: "Administrator",
    });

    const moderator = await Role.create({
      slug: "moderator",
      name: "Moderator",
    });

    await Role.create({
      slug: "visitor",
      name: "Visitor",
    });

    // associating permissions.
    await admin.permissions().attach([createInvite.id, createProject.id]);
    await moderator.permissions().attach([createProject.id]);

    const team = await user.teams().create({
      name: "Incuba",
      user_id: user.id,
    });

    const teamJoin = await user.teamJoins().where("team_id", team.id).first();

    await teamJoin.roles().attach([admin.id]);
  }
}

module.exports = DatabaseSeeder;
