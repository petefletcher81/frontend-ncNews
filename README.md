# NorthCoders News

This Northcoders New app is a news feed application in a similar style to Reddit. It is
the front end to the NC-news, a backend api which was set up using ExpressJS, MongoDB, Mongoose
and deployed through mLabs and Heroku.

The link for the backend project is here [Backend](https://github.com/petefletcher81/nc-news-backend/blob/master/README.md)
The link for the Heroku deployed application is : [NC-News](https://ncnew-pete.herokuapp.com/api)

Northcoders news has been created with the following:-
[React](https://reactjs.org/)
[Reach Router](https://reach.tech/router)
[Bootstrap 4](https://getbootstrap.com/)

[The live version can be found here](https://zealous-swirles-f0ca97.netlify.com)

This front end project aims to create a greate user experience, allowing the user to implement
C.R.U.D operations.

## Getting Started

##### Installing

To get started with this project start by forking and cloning the repository. Below is a great
guide

1. Fork this repository for your own account

2. Open your terminal

3. Clone the repo
   [Forking and Cloning A Repo](https://help.github.com/articles/fork-a-repo/)

4. cd into your local directory
   `cd Northcoders News`
5. Once you are in your chosen evnvironment and ready to start, simply run

`npm install`

to get node intalled.

The following dependencies are already installed:-

"@reach/router": "^1.2.1",
"axios": "^0.18.0",
"bootstrap": "^4.1.3",
"jquery": "^3.3.1",
"moment": "^2.22.2",
"popper.js": "^1.14.5",
"react": "^16.6.1",
"react-dom": "^16.6.1",
"react-scripts": "2.1.1"

## Development

Once you are in your chosen evnvironment and ready to start, simply run

`npm start`

to run the program. This runs a local server on localhost:3000. On the
front screen, the username is automatically inputted for you, simple click
login to enter Northcoders News.

Using Reach Router the routes have been divided up into the following endpoints:-

- '/' Home Screen- The use can select whether to go to articles, topics or logout
- 'http://localhost:3000/articles' The user cna see all articles with the option to
  vote on an article or 'Read More' where they will have more options with that article
- 'http://localhost:3000/articles/:article_id' Once selecting 'Read More', users can
  again vote for the article and show the comments for that article. Moreover, the
  user can add a comment using a post request from the form which appears on the
  clicked 'Add Comment' button.
- 'http://localhost:3000/articles/:article_id' Users will also be able to delete the
  comments that they have created for this article. A button will appear only for their
  comments.
- 'http://localhost:3000/articles/articles/search' This will enable the use to search
  the body an article, as it will filter as the user types.
- 'http://localhost:3000/topics' The use has access to the different Topic types.
- 'http://localhost:3000/topics/:topic_slug/articles' The user can view all articles
  for a given topic. Within each category, the user can go to more information about the
  select article.
- 'http://localhost:3000/topics/:topic_slug/articles' The use can add an article to their
  chosen topic simply by filling the form once the 'Add Article' button has been clicked.
- 'http://localhost:3000/logout' User has logged out
- 'http://localhost:3000/error' If any errors accur with the CRUD requests the user will
  be taken to an error screen.

## Deployment

The app has been deployed using Netify. This is a great easy to use deployment service that
is free.

[Deploy in less than 30 secs](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

## Author

Pete Fletcher

## Acknowledgements

All the Lecturers at Northcoders for they guidance.
In addition, a fantastic cohort for support and who acted as great sounding boards.
