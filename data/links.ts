import { routes } from "../utils/constants"

export const navLinks = [
  {
    name: "Home",
    route: routes.HERO_ROUTE,
    label: "Go to home page",
    classN: "home-link"
  },
  {
    name: "About",
    route: routes.ABOUT_ROUTE,
    label: "Go to about page",
    classN: "about-link"
  },
  {
    name: "Skills",
    route: routes.SKILLS_ROUTE,
    label: "Go to skills page",
    classN: "skills-link"
  },
  {
    name: "Works",
    route: routes.WORKS_ROUTE,
    label: "Go to works page",
    classN: "works-link"
  },
  {
    name: "Contact",
    route: routes.CONTACT_ROUTE,
    label: "Go to contact page",
    classN: "contact-link"
  }
]

export const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/ibakhtir",
    label: "Go to Github"
  },
  {
    name: "Telegram",
    url: "https://t.me/ibakhtir",
    label: "Go to Telegram"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bakhtir/",
    label: "Go to LinkedIn"
  }
]
