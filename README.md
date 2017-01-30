# Kanban JS

## How install KanbanJS ?
Clone repository :

``` git clone git@github.com:geoffreyp/KanbanJS.git ```

Install npm and bower dependencies :

``` npm install ```

``` bower install ```

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

Then start the project :

``` npm start ```