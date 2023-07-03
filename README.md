# Reviews-Carousel

# Our Reviews

This project displays a collection of reviews dynamically on a webpage. Each review includes an avatar, the reviewer's name, job title, and a testimonial text. The reviews can be navigated using previous and next buttons.

## HTML Structure

The HTML structure of the project consists of the following elements:

- A container `div` that holds the review elements.
- An avatar `img` element to display the reviewer's image.
- A `div` with the class `box` containing the name and job title.
- A `p` element to display the testimonial text.
- Previous and next buttons with the classes `prev` and `next`, respectively.

## JavaScript Functionality

The JavaScript code provides the dynamic functionality for the project. It performs the following tasks:

1. Creates an array called `data` that stores the review information.
2. Retrieves references to the HTML elements using `document.querySelector`.
3. Sets the initial content of the elements using the first item in the `data` array.
4. Adds event listeners to the previous and next buttons to handle navigation.
5. Updates the content of the elements based on the current index when the buttons are clicked.
   - The index is incremented for the next button and decremented for the previous button.
   - If the index goes beyond the length of the `data` array, it wraps around to the first or last item.

## CSS Styling

The project uses an external CSS file referenced in the HTML. The styles defined in the CSS file can be found in `style.css`. These styles control the visual appearance of the review box, avatar, text, and buttons.

Make sure to have the necessary image files in the "img" folder and ensure that they are correctly referenced in the JavaScript code.

Enjoy using the project and feel free to customize it further based on your needs!
