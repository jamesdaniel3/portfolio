import spotifySocialImage from "../assets/project_previews/spotify_socal.png";
import hazingReportImage from "../assets/project_previews/hazing_reporter.png";
import dataParserImage from "../assets/project_previews/oh_data_parser.png";
import searingChartGeneratorImage from "../assets/project_previews/seating_chart_generator.png";
import programmingLanguageImage from "../assets/project_previews/programming_language.png";

export const web_projects = [
  {
    id: "spotify_social",
    name: "Spotify Social",
    description:
      "This project was created to practice using React, APIs, Express.js, and Firebase. After a user logs in to Spotify, they can view information about their listening habits, as well as message other users.",
    github_link: "https://github.com/jamesdaniel3/spotify-social",
    display_image: spotifySocialImage,
  },
  {
    id: "hazing_reporter",
    name: "UVA Hazing Reporter",
    description:
      "This project was my first experience with web-development, where I learned to use Django, Heroku, and PostgreSQl, among other things. I built it with a team for my Advanced Software Development course and it is a take on a hazing whistleblower system for the University of Virginia.",
    github_link: "https://github.com/jamesdaniel3/hazing-reporter-simulator",
    live_link: "https://hazing-reporter-simulator-4777047cf362.herokuapp.com/",
    display_image: hazingReportImage,
  },
];

export const cli_projects = [
  {
    id: "oh_data_parser",
    name: "Office Hours Data Parser",
    description:
      "This project was created to help our staff of TA's more effectively help our students. The website that we run office hours through keeps track of all kinds of data surrounding interactions, but it is all simply stored in files (CSV and JSON) that are thousands of lines long with no way to easily digest it. I built this project to give us access to all kinds of useful information quickly and in a readable format. I'm especially proud of the documentation on this project!",
    github_link: "https://github.com/jamesdaniel3/MDH-Reader",
    display_image: dataParserImage,
  },
  {
    id: "seating_chart_generator",
    name: "Seating Chart Generator",
    description:
      "This project was created to fufill our need for fresh seating charts every week in labs. It was built to be able to run with many of the different room configurations in the Computer Science department and can easily have more added. I have included test data in this Github Repository, so you should be able to test out the project yourself!",
    github_link: "https://github.com/jamesdaniel3/seating-chart-generator",
    display_image: searingChartGeneratorImage,
  },
];

export const in_the_works_projects = [
  {
    id: "programming_language",
    name: "My First Programming Language",
    description:
      "The project at the top of my programming bucket list for the last year or so has been to one day make my own programming language. One thing that was preventing me from getting started was the idea that I couldn't find a particular niche that I thought needed satisfying, leaving me without a reason to build a language. However, I realized that I will need to be practiced when I do finally find a niche for my future programming language, so I am making my first attempt now. This language is a simple, interpreted language built with C. My  goal is to build enough functionality that I can write merge sort in it.",
    github_link: "https://github.com/jamesdaniel3/my-first-language",
    display_image: programmingLanguageImage,
  },
];
