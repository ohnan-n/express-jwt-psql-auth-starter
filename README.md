## Express Mongo Auth Starter App

1. `npm install`
1. In the root of your project, create a `.env` file:

    ```
    touch .env
    ```

1. In `.env`, add a secret key variable to create your token. **Do not put quotes around it**:

    ```
    JWTSECRET=dieselisthebest123!
    ```

1. `POST` `/api/users/signup`

    ![](https://i.imgur.com/yjnaaKr.png)

1. `POST` `/api/users/login`

    ![](https://i.imgur.com/yrwAVmS.png)

1. `GET` `/api/users`

    ![](https://i.imgur.com/VZLLF9x.png)

1. `POST` `/api/users` To decode a token

    ![](https://i.imgur.com/eVIAfvk.png)

1. `GET` `/api/users/:id` You must have a valid token to see your route.

    ![](https://i.imgur.com/5TCxYLB.png)

    <br>

    **If the token doesn't belong to that user id**

    ![](https://i.imgur.com/HjQ8Wsv.png)