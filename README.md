* [] Install dependencies 
* [] Create Model
 * [] Cube Model
  * id, name, description, imageURL, DifficultyLevel
* [] Store the cube in the database.json
* [] Create routes
 * [] / = main page (visualize all cubes in database and a search field)
 * [] /about - render the about page
 * [] /create - render the cube form
 * [] /details/:id - render the details page about selected cube
 * [] Any other should render 404 message
* [] Create templates - using Handlebars.
* [] Implement searching logic:
 * [] if the user searches only a string and NO difficulty, render all difficulties.
 * [] if the search does not meet the requirements return to / page
