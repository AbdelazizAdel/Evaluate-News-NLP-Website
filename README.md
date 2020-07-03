**Description:**

This is an Article Analysis website that analayzes articles and informs the user of the polarity of the article (positive, negative or neutral) using the Aylien API.

**Steps to run the project:**
1. Clone the github repository.
2. Open the command Line Interface & navigate to the root of the project.
3. Type the command "npm install" in the CLI to download all dependencies in the package.json file.
4. Type the command "npm run build-prod" in the CLI to run the production environment configuration file.
5. Type the command "npm run start" to run the server.
6. Go to your browser and enter the following url "http://localhost:8081".
7. Enter the url of the article you want to analyze in the url field and then click analyze.

**Challenges:**

1. figuring out how to integrate the api using sdk and using enviroment variables was new.

2. figuring out how use jest to make tests for asynchronous functions that use fetch api and manipulate the dom was very challenging for me as I had to mock the fetch api and the dom inorder for it to work.

**NOTES:**
1. Please note that the aylien api does subjectivity anlaysis only for tweets(sentences) not documents so i have set the mode to documents and as a result i only show the polarity of the article that the url points to only and not the subjectivity. If i set the mode to tweets subjectivity analysis is possible but the results will be misleading so i didn't do it.

2. Please note that if you enterd a valid url but the url doesn't exist an error message will appear to the user but after like 4-5 seconds because the api actually tries to fetch the article from the fake url and it waits until the request times out which takes a couple of seconds.

3. If you want to run the project in the development environment, in step 4 type "npm run build-dev" instead of "npm run build-prod" 
but please note that in the development environment I am using webpack-dev-server so you won't be able to analyze the article. If you want to analyze your articles then use the production environment not the development environment.