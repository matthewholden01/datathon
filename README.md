#Datathon Challenge Project
##React Frontend
We used next.js which is a framework based on React.js. Although next.js has it's benefits in pre-rendering pages for speed and allowing you to be serverless, we had to use a flask backend which lost some of the efficiency of next.js.
##Flask Backend
We used a flask backend server where we would first POST the user information to the Server, which was then parsed and converted into a dictionary with pandas, and then this user data was used to perform Predicitive modeling to give reccomendations to the user for workshops and other aspects, this data is then gathered and kept by the server until it is eventually fetched by the Client when the Dashboard is loaded in.
##DataScience Files
We were not able to successfully integrate the Python Backend computations with the client. Although we were able to communicate between the React client and Flask server, we were unsuccessful in getting the Predicitive modeling properly formatted in time for our submission. The Data Science files are all of the analytical operations done on the given data. Although we did not quite fully finish the front end, the prededictive modeling was complete and is quite impressive and should be given a look.
##Video of Project
https://youtu.be/NoKo57d7Y04
