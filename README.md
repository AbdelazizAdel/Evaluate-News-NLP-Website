**Challenges:**
1. I have started from scratch so figuring out what to do in the beginning was challenging as there was no starter code like what happend in the lessons.
2. figuring out how to integrate the api using sdk and using enviroment variables was new.
3. figuring out how use jest to make tests for asynchronous functions that use fetch api and manipulate the dom was very challenging for me as I had to
mock the fetch api and the dom inorder for it to work and figuring out that the solution was to mock them was even more difficult.

**Resources:**
1. jest documentation.
2. stackoverflow.

**NOTES:**
1. please note that the aylien api does subjectivity anlaysis only for tweets(sentences) not documents so i have set the mode to documents and as a result
i only show the polarity of the article that the url points to only and not the subjectivity. If i set the mode to tweets subjectivity analysis is possible
but the results will be misleading so i didn't do it.
2. please note that if you enterd a valid url but the url doesn't exist an error message will appear to the user but after like 4-5 seconds because the api actually
tries to fetch the article from the fake url so this takes a couple of seconds.