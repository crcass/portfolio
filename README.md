# Portfolio

![Portfolio](/public/thumbnail.jpg)

## Technology

This app was built with [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/), [React Transition Group](https://reactcommunity.org/react-transition-group/) & [styled-components](https://www.styled-components.com/)

## Concept

A personal portfolio that is clean, easy to navigate, and allows visitors to view my projects and contact me.

## Motivation

I wanted to create a new portfolio site that is easy to maintain and could grow over time without being clunky or cumbersome.

## Design Process

I started with the idea that all of the data would populate from a single array of JSON objects. Instead of creating individual components or pages, I could simply create templates for a project page and pass in the data from that JSON object. With this in mind, I started witht the Projects page.

Once each project was displaying correctly on the Projects page, I started working on using React Router to pass data into the individual pages for each project. When you visit an individual project's page, you're actually visiting a template that has been populated with the data for that project. None of the individual project pages are hard-coded.

After the individual project pages were displaying properly, I added a 'Latest Projects' section that always display the four most-recent projects, and created the hero image on the main page that cycles through those most-recent projects. I added a 'Featured Projects' section to the main page, and added the Profile and Contact pages.

I wanted to have a smoother user experience, so I spent some time working out page transitions with React Transition Group. This adds a fade-in effect when a new page is displayed.

## Future Development

- I am currently working on adding a custom CMS that will allow me to update the site without having to rebuild each time
- I am working on integrating social media (Twitter, Instagram, etc.) into the site
- I will be adding default images to appear while the project images are loading. This will prevent layout/re-flow problems while the images are being downloaded.

## Known Issues

- No known issues. Please report any issues you find!

♥︎ cc
