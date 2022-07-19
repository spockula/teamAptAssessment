# TeamApt User Interface Conversion Assessment


## How to Run
* clone repository
* run npm install to get default angular packages
* run 'ng serve' for a dev server and navigate to http://localhost:4200/.
* You can also see a hosted version of this implementation hosted on heroku: [Team Apt Assessment](https://team-apt-assessment.herokuapp.com/)

## Architecture Considerations & Assumptions
* Task is a single simple page
* Using any javascript framework would be overkill and unnecessary for a simple page; hence no framework was used.
* Entire task was done with pure html, javscript and scss (scss was compiled to css with "sass watcher")
* Given the expected rotation animation of the shimmer at the bottom of the page, I tweaked the design on figma to allow for a seamless 360 degree rotation.
* The javascript code in "script.js" exists only for animating the left and right coins with gsap (An animation package), all other animations are done with css.

## Created By:

- [@spockula](https://www.github.com/spockula)
