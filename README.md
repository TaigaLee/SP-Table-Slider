## Project Setup

The project was boostrapped with create-react-app.

The information from S&P 500 Total Returns by Year was used in JSON format. 

To run the project for now, clone the repo and run npm start.

## Environment

I used the dependencies lodash, rc-slider, and semantic-react-ui. This allowed me to build a responsive grid that mapped out the data nicely, and allows to sort with a click of the button. I am also versed in materialize-ui, but decided to use semantic-react-ui as it works with the slider component nicely. 

The slider was implemented using the range component of rc-slider, and allows for the user to filter which years they want to see. The cumulative return will update according to which years they've selected.
