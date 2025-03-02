# Knex Demo

You will learn how to work with databases in Node.js using Knex.js and Objection.js. A database is a collection of data that is stored in a computer system. Databases are used to store, retrieve, and manage data. Databases can be relational or non-relational. Relational databases store data in tables, and non-relational databases store data in documents, key-value pairs, or graphs.

In this project, you will learn how to create a database schema using Knex.js, a SQL query builder for Node.js. You will also learn how to interact with the database using an Object Relational Mapper, specifically Objection.js. You will build a database by modeling data via entities and use relations (one-to-one, many-to-many, one-to-many/many-to-one) to design a performant data structure.

Knex is a SQL query builder that is flexible and easy to use. It is used to interact with SQL databases. Knex is used to create and manage database schemas, and to perform CRUD operations on the database.

We will use SQLite as our database, but Knex can be used with other databases like PostgreSQL, MySQL, MariaDB, SQLite3, and Oracle. The benefit of using SQLite is that it is a self-contained, serverless, zero-configuration, transactional SQL database engine.

## How to use this repo

1. Clone the repo
2. Create a `.env` file in the root of the project and add the following:
```
PORT=3000
DATABASE_TYPE=sqlite
DATABASE_NAME=knex_demo.sqlite3
NODE_ENV=development
```
3. Run `npm install`
4. Run `npm run start:dev` to start the server

## How to use Knex

1. To create a migration file, run `npx knex migrate:make migration_name`
2. To run the migration, run `npx knex migrate:latest`
3. To rollback the migration, run `npx knex migrate:rollback`
4. To create a seed file, run `npx knex seed:make seed_name`
5. To run the seed file, run `npx knex seed:run`

## How to use Objection.js

1. To create a model, create a new file in the `models` directory and extend the `Model` class from `objection`
2. To create a relation, use the `relationMappings` method in the model
3. To query the database, use the `query` method in the model
