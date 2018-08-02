# JEES-LOUISE

![lame](https://media0.giphy.com/media/Mzs8ZU7tSwn4I/giphy.gif)

Sorry BORING Readme another one will follow.

## The following user stories were implemented: 
1) I can write any search term into a search box and hit submit
2) based on the search term an API call to Guardian will be triggered and the 5 most popular articles including title, publishing date and link will be shown
3) another API call to lastFM based on the search term will be triggered showing the 5 most tracks containing the term including title, artist and link

## Some basic goals:
- both API calls are being made via the backend (server-router-handler) to respective external servers using the node.js request module
- backend testing (router: making fake HTTP requests and logic functions) should be done via tape, tap-spec and supertest modules
- the file structure should be modularised
- use travis for continuous github control 

## Stretch goals:
- Host the project on Heroku



# please use locally for now
- clone repo 
- run npm install
- run node src/server.js


