# Dev Stack Builder

Dev Stack Builder is a responsive website for exploring development technologies and putting together a project stack. Browse the technology cards, compare their details, and add the tools you want to use.

## Built With

React and TypeScript
Vite
 Tailwind CSS
 React-Toastify
 JSON data

## Features

Explore technologies: View 12 technologies with their category, description, difficulty, rating, badge, and icon.
Build stack: Add technologies, remove individual items, or clear the whole stack. The same technology cannot be added twice.
Responsive interface: Use the catalogue and stack panel on mobile, tablet, and desktop screens. Loading and action messages keep users informed.


## React Questions

 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like elements inside JavaScript or TypeScript. We use it to describe what a React component should show on the page.

2. What is the difference between props and state?

Props are values a parent passes to a child component. State is data a component remembers and can update. In this project, a card receives a technology as a prop, while the selected stack is stored in state.

 3. What does `useState` do, and where did you use it?

`useState` lets a component remember values and update the page when they change. I used it for the mobile menu, technology data, loading and error messages, and selected technologies.

4. What does `useEffect` do, and why did you need it?

`useEffect` runs code that connects a component to something outside its render. I used it to fetch technologies.json when the technology section loads.

5. Why does a `.map()` list need a unique `key`?

A key helps React recognize each item when a list changes. I used each technology's unique id as the key for cards and selected stack items.

6. What is conditional rendering? Where did you use it?

Conditional rendering means showing different content depending on a condition. The Stack Panel shows an empty message when nothing is selected and a list when technologies have been added.

7. How do parent and child components communicate?

A parent sends data to a child through props. A child can call a function passed as a prop to request a change. Here, “TechnologySection” passes technology data and an “onAdd” function to “TechnologyCard”, the card calls that function when its button is clicked.
