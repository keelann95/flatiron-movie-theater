# Implement a 'mini' web application using JavaScript.
Flatiron Movie Theater is open for business! I will be building out an application, Flatdango, that allows a user to purchase movie tickets from the theater.

## Requirements
For this project, you must:

1. Have a well-written README file.
2. Fetch data from a local server running JSON DB server.

## Pre-requisite Data
You can use this JSON file for your server DB.

        db.json

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

1. Create a new project folder.
2. Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
3. Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
5. Please make sure you regularly commit to the repository.

## Project Guidelines
Your project should conform to the following set of guidelines:

 ## Core Deliverables:
As a user, I can:

1. See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`.
2. See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) There is a placeholder `li` in the `ul#films` element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list.
3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature**.

## System Requirements
1.Node 18+
2.JSON Server
3.A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
4.Operating System (Windows 10+, MacOS, Linux, etc.)
5.A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
6.RAM >= 4GB
7.Disk space >= 1GB

## Installation
To use this repo, follow these steps:

### Alternative One
1. Open the terminal/CLI on your computer.

2. If you don't have JSON server installed in the terminal, install it globally using the following command:

        npm install -g json-server  

3. Clone the repository by running the following command:

       git clone https://github.com/keelann95/flatiron-movie-theater 

4. Change directory to the repo folder:

        cd flatiron-movie-theater 

5. Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .


### Alternative Two
1. On the top right corner of this page there is a button labelled Fork.

2. Click on that button to create a copy of the repository to your own account.

3. Follow the process described in Alternative One above.

4. Remember to replace your username when cloning.

        git clone https://github.com/keelann95/flatiron-movie-theater 

## Running the application locally
1. Open the integrated terminal in your code editor and run json-server:

        json-server watch db.json

2. Open the index.html file in Mozilla Firefox, Safari or any Chromium-based browser.

3. If using VS Code, you can use the Live Server extension to run the file on the browser for live reloading.
4. Click [HERE] to install the Live Server extension and to read instructions on how to use it.

## Authors
    @keelann95