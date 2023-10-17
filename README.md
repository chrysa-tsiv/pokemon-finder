# Assessment: Building a Basic Page Structure with Angular

[Stackblitz App Link](https://github-w8tww4.stackblitz.io) (https://github-w8tww4.stackblitz.io)

## Objective

The goal of this technical assessment is to utilize the Angular project to create a webpage that demonstrates proper HTML usage, responsive CSS styling, component organization, effective route management, and successful HTTP requests.

## Requirements

### 1. Page Structure:

Create a page with the following sections:

- A section at the top of the page.
- A section left-hand side.
- A content section, that should show a list using an accordion component that will be used to present information from an API.
- A section at the bottom of the page.

### 2. Angular Components:

The accordion should be a versatile and reusable component.
**You also have the choice to** create individual Angular components for the sections of the page that you consider important.

### 3. HTTP Request and Data:

In the Main Content section, as previously mentioned, create a list of accordions, with at least 2 items. Each accordion's title should correspond to the name of a Pokémon, while the content should display its respective image.
To gather the required data, start by sending a request to this API endpoint: https://pokeapi.co/api/v2/pokemon?limit=:limit (Replace ":limit" with the desired number of Pokémon to retrieve). Afterward, you can utilize the URLs provided for each Pokémon to fetch their names and images.

**Note:** Extract the Pokémon name from the response using the "name" property, and access the image from the "sprites" property.

## Assessment Steps

### 1. Creating a Repository:

Begin your assessment by making a repository. You can decide how to init and submit your work, but I recommend using the online coding environment [StackBlitz](https://stackblitz.com). This platform lets you develop and share the project with us by providing the project's link.

### 2. Work on the Requirements:

Follow the instructions provided in the requirements section.

### 3. Ensure Compatibility Across Various Devices and Screen Sizes:

Don't focus on how the design looks, but use the correct HTML structure and proper CSS to create a responsive layout. Also, make sure to optimize the implementation for the best performance.

### 4. Accomplish Tasks Without External Libraries:

Apart from Angular and RxJS, don't use any other libraries or frameworks for this assessment.
