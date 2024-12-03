import React from "react";
import { Timeline } from "primereact/timeline";
import { Carousel } from "primereact/carousel";
import { Panel } from "primereact/panel";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page2.css";

const timelineEvents = [
  {
    status: "Ancient Myths",
    date: "2000 BC",
    title: "Epic of Gilgamesh",
    description:
      "One of the earliest known literary works, exploring themes of heroism and mortality.",
  },
  {
    status: "Greek Tragedies",
    date: "500 BC",
    title: "The Iliad and The Odyssey",
    description:
      "Homer's epic poems, foundational texts of Western literature, depicting themes of heroism, fate, and human struggle.",
  },
  {
    status: "Medieval Legends",
    date: "1100 AD",
    title: "King Arthur",
    description:
      "The tales of Camelot and the Knights of the Round Table, symbolizing chivalry and justice.",
  },
  {
    status: "Fairy Tales",
    date: "1600 AD",
    title: "Grimm Brothers' Tales",
    description:
      "A collection of folklore like Cinderella and Hansel and Gretel, which have inspired countless retellings.",
  },
  {
    status: "Modern Literature",
    date: "1954 AD",
    title: "The Lord of the Rings",
    description:
      "J.R.R. Tolkien's masterpiece, drawing heavily from Norse and Anglo-Saxon mythology.",
  },
  {
    status: "Contemporary Stories",
    date: "2000 AD",
    title: "Harry Potter Series",
    description:
      "J.K. Rowling’s series intertwines modern fantasy with folklore-inspired themes and characters.",
  },
];

const books = [
  {
    title: "American Gods",
    author: "Neil Gaiman",
    description:
      "A novel where ancient gods struggle to survive in the modern world.",
  },
  {
    title: "Percy Jackson & the Olympians",
    author: "Rick Riordan",
    description: "A series reimagining Greek mythology for a younger audience.",
  },
  {
    title: "The Penelopiad",
    author: "Margaret Atwood",
    description: "A retelling of the Odyssey from Penelope’s perspective.",
  },
  {
    title: "Norse Mythology",
    author: "Neil Gaiman",
    description:
      "A modern retelling of Norse myths, bringing ancient tales to life.",
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    description:
      "A feminist retelling of the Greek mythological sorceress Circe, exploring themes of power and identity.",
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description:
      "A lyrical retelling of the Iliad focusing on the relationship between Achilles and Patroclus.",
  },
];

const bookTemplate = (book) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <h4>by {book.author}</h4>
    <p>{book.description}</p>
  </div>
);

const Page2 = () => {
  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Introduction Panel */}
      <Panel
        header="Folklore's Influence on Modern Literature"
        className="header-panel"
      >
        <p>
          Folklore provides the foundational themes, characters, and narratives
          that continue to shape modern storytelling. Its universal messages
          transcend time and cultural boundaries, inspiring some of the greatest
          literary works of all time.
        </p>
      </Panel>

      {/* Timeline Section */}
      <h2 className="section-header">
        Thematic Evolution of Folklore in Literature
      </h2>
      <Timeline
        value={timelineEvents}
        align="alternate"
        content={(item) => (
          <div>
            <h3>{item.title}</h3>
            <h4>{item.date}</h4>
            <p>{item.description}</p>
          </div>
        )}
      />

      {/* Character Archetypes Panel */}
      <Panel
        header="Character Archetypes in Folklore-Inspired Literature"
        className="archetypes-panel"
      >
        <p>
          Folklore introduces timeless archetypes that continue to influence
          modern narratives:
        </p>
        <ul>
          <li>
            <b>The Hero:</b> A courageous figure who embarks on a journey to
            overcome challenges. Examples: Frodo Baggins{" "}
            <strong>(The Lord of the Rings)</strong>, Harry Potter{" "}
            <strong>(Harry Potter series)</strong>, Katniss Everdeen{" "}
            <strong>(The Hunger Games)</strong>.
          </li>
          <li>
            <b>The Trickster:</b> A clever character who uses wit to outmaneuver
            others. Examples: Anansi the Spider, Loki{" "}
            <strong>(Norse Mythology)</strong>, Puck{" "}
            <strong>(A Midsummer Night's Dream)</strong>.
          </li>
          <li>
            <b>The Wise Mentor:</b> A guide who imparts wisdom and aids the
            hero. Examples: Gandalf <strong>(The Lord of the Rings)</strong>,
            Dumbledore <strong>(Harry Potter series)</strong>, Haymitch{" "}
            <strong>(The Hunger Games)</strong>.
          </li>
          <li>
            <b>The Villain:</b> A figure embodying conflict, often representing
            greed or tyranny. Examples: Sauron{" "}
            <strong>(The Lord of the Rings)</strong>, Voldemort{" "}
            <strong>(Harry Potter series)</strong>.
          </li>
          <li>
            <b>The Guardian:</b> Protects valuable secrets or treasures and
            tests the hero's resolve. Examples: Smaug{" "}
            <strong>(The Hobbit)</strong>.
          </li>
        </ul>
      </Panel>

      {/* Carousel Section */}
      <h2 className="section-header">Notable Works Influenced by Folklore</h2>
      <Carousel
        value={books}
        itemTemplate={bookTemplate}
        numVisible={2}
        numScroll={1}
        className="books-carousel"
      />
    </div>
  );
};

export default Page2;
