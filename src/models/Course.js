import knex from "../lib/Knex.js";
import { Model } from "objection";
import User from "./User.js";

// instantiate the model
Model.knex(knex);

class Interest extends Model {
  static get tableName() {
    return "courses";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "credits"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        credits: { type: "integer" }
      },
    };
  }

  	
static get relationMappings() {
  return {
    users: {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: "courses.id",
        through: {
          from: "course_user.course_id",
          to: "course_user.user_id",
        },
        to: "users.id",
      },
    },
  };
}
}

export default Interest;
