## Express Postgres Auth Starter App

1. `npm install`
1. In the root of your project, create a `.env` file:

    ```
    touch .env
    ```

1. In `.env`, add a secret key variable to create your token. **Do not put quotes around it**:

    ```
    JWTSECRET=dieselisthebest123!
    ```

1. The database specifics are located in `config/config.json`. Create a postgres development database from the command line:

    ```
    createdb jwt_auth_starter_db_dev
    ```

1. Run the migrations:

    ```
    sequelize db:migrate
    ```

1. Run `npm start`

1. `POST` `/api/users/signup`

    ![](https://i.imgur.com/ekEuT0z.png)

1. `POST` `/api/users/login`

    ![](https://i.imgur.com/fue8r6q.png)

1. `GET` `/api/users`

    ![](https://i.imgur.com/fue8r6q.png)

1. `POST` `/api/users` To decode a token

    ![](https://i.imgur.com/VsOEjhu.png)

1. `GET` `/api/users/:id` You must have a valid token to see your route.

    ![](https://i.imgur.com/Ysh6Oj4.png)

    <br>

    **If the token doesn't belong to that user id**

    ![](https://i.imgur.com/Ysh6Oj4.png)