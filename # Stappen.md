# Stappen

1. Interest.js maken in /models/Interest.js

2. Migration maken:
    npx knex make:migration create_interests_table

3. Migration invullen
```js
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.timestamps(true, true); // created_at and updated_at
````
4. Migrate
    npx knex migrate:latest

5. Seed maken:
    npx knex seed:make 03_seed_interests

6. Seed invullen

7. Seed uitvoeren
    npx knex seed:run