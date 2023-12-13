# gu-phone-book
-- Interview take home project --

A simple proof of concept application that supports all CRUD operations. The frontend (React/Redux) communicates with a Node Express backend utilizing MySQL to server/store data.

Testing suite setup to use Jest and potentially another library for backend. Self tested with Postman, although not as 'commercial' of a solution.


# Dependencies
- Node / NPM installed
- MySQL server setup

# To Run:

Frontend:
- Change `REACT_APP_BASE_URL` in `.env`
- Install dependencies: `npm install`
- Run application locally: `npm run start`

Backend:
- Make sure a database is created. (The table will create automatically)
- Change database information in `db.config.js`
- Start node server: `npm run start`

Some pictures of reference:
![image](https://user-images.githubusercontent.com/28940587/172940768-a2171188-a584-4bed-8955-f72d214808b8.png)

![image](https://user-images.githubusercontent.com/28940587/172940829-7cdd5449-ae4e-42a2-9b83-2e7c6a7d4c1a.png)
