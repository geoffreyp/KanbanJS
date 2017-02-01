# Kanban JS

## How to install KanbanJS ?
### Get the project :

``` git clone git@github.com:geoffreyp/KanbanJS.git ```

### Install dependencies :

``` npm install ```

``` bower install ```

### Configure database :
Create config/config.json with correct database value:

```json
{
  "development": {
    "username": "root",
    "password": "null",
    "database": "database_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```
The ORM used is Sequelize, it allow you to use a lot of
SQL dialect (mysql, postgreSQL, SQLite, mongodb, ...).

### Start the project :

``` npm start ```

The first time, sequelize create all tables with their relations.