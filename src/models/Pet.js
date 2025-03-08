import knexConfig from "../lib/Knex.js";
import { Model } from "objection";
import User from "./User.js";

// instantiate the model
Model.knex(knexConfig);

// imports & config
class Pet extends Model {
  static get tableName() {
    return "pets";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species", "age"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        species: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "integer" },
        owner_id: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "pets.owner_id",
          to: "users.id",
        },
      },
    };
  }
}

export default Pet;
