# Hacker News API React app

The app will fetch the Hacker News API and show them in a list of items. Clicking an item from the list will open the link.

## Usage

To run the app and visualize it on `http://localhost:3000` by default, you will need to run the command in the terminal:

`npm start`

To run the tests

`npm test`

## Roadmap (in progress)

In the short-term future new features can be added to enhance and scale-up the app. Some of the proposed features to be implemented are (in the following order):

- **NavBar**

> For showing basic options as the login / signup or logout buttons, as other menus in order to navigate within the app

- **Login / Signup**

> Implement a basic backend to signup / login an user, storing basic info as an username, password and some possible extra options for the context of the page and user. The proposed backend would be implemented using MongoDB and Apollo GraphQL.

- **Bookmark stories**

> For logged in user, bookmark stories and show them in a separate section

- **Docker / Kubernetes**

> First setup for the containerization of the client and server and the communication among them. Setup an orchestration using Docker Compose for development, and Kubernetes for production

- **Upvote / Downvote stories**

> Add buttons to give the option to a logged in user to upvote / downvote a story

- **Sort / Filter**

> Add some basic sorting / filtering for the stories (based on date, votes, last update, etc.)

- **Search**

> Add search option where you will use either a title, url or author as input
