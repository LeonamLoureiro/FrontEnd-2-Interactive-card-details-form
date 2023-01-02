# Frontend Mentor - Interactive card details form

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

## Introduction 👋

This is a portfolio project intended to test and showcase my skills as a front-end developer.

The source of this project is the website [Frontend Mentor](https://www.frontendmentor.io/) which has challenges that help to improve our coding ability by building realistic projects.

For this project, it was necessary to use knowledge in HTML, CSS and JavaScript.

## The challenge

The challenge is to build out this interactive card details form and get it looking as close to the design as possible.

The requeriments were: 

- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## Steps to Solution

The project was started with html, listing the structures, separating into three spaces: the background images (one for mobile and one for desktop), the image of the cards, with the respective labels and the form with the card data to be filled .

Then the focus was on working on the styling of the page. There are considerable differences between the mobile version and the desktop version, which required a customized desktop media query to satisfy the model, within the background image and in the positioning and dimensions of each element.

Due to the particularity of the project, what required more attention was the positioning of the text that overlaps the cards and updates in real time. The positioning needed to be perfect and it was possible to achieve a good look, both on mobile and desktop.

It also required some attention to styling the form, particularly the expiration date part, where it used the command width: 100% to resolve the issues.

The next step was to do the JavaScript. It was necessary to update on the screen what was typed by the user. For that, I used onInput functions in each of the fields along with DOM manipulation.

It was also necessary to validate the form data. At the beginning I had a problem and decided to resort to the Chat GPT, where I managed together with the artificial intelligence, a more elaborate suggestion than the one I was trying.

I needed to make the necessary customizations to the suggestion, however it is worth mentioning that artificial intelligence tools such as Chat GPT, if well used, enhance the work of developers, and it is also possible to extract learning to take to other projects.

After that, the final job was to submit the form and make the code appear in the "thank you" section that has the "Continue" button that clears all data from the screen.

## Final Result

The project is available at [this site](https://effulgent-baklava-fd6f28.netlify.app/). 

## Other Considerations

I think that this project is not so simple as it requires great attention to detail, although it is a simple page, as there are a number of elements and particularities to consider.

Even so, I know that I did my best and learned a lot from carrying out this project, achieving the initial purpose.

A closer look is likely to see points for refactoring and improving the code. Nothing different from what it is in a conventional project...

## Contact me

I'm always looking to improve my skills and it's always nice to talk about web development.

To reach me, contact me by email leonamloureiro1@gmail.com or [Linkedin](https://www.linkedin.com/in/leonamloureiro/):
