import React from "react";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import "../assets/css/SourcesDialog.css";

const SourcesDialog = ({ visible, onHide }) => {
  const sources = [
    {
      title: "UNESCO Intangible Cultural Heritage",
      description:
        "A global initiative to protect and document cultural practices.",
      url: "https://ich.unesco.org/",
    },
    {
      title: "StoryWeaver",
      description: "A platform for sharing and translating folktales.",
      url: "https://storyweaver.org.in/",
    },
    {
      title: "Folklore Library",
      description: "A digital project to document and share folklore stories.",
      url: "https://www.folklorelibrary.com/",
    },
    {
      title: "PrimeReact Library",
      description: "React UI components for creating rich user interfaces.",
      url: "https://primereact.org/",
    },
    {
      title: "Epic of Gilgamesh",
      description: "Exploring themes of heroism and mortality.",
      url: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    },
    {
      title: "The Iliad and The Odyssey",
      description: "Homer's epic poems depicting heroism and human struggle.",
      url: "https://en.wikipedia.org/wiki/Homer",
    },
    {
      title: "Grimm Brothers' Tales",
      description: "Classic fairy tales like Cinderella and Hansel and Gretel.",
      url: "https://en.wikipedia.org/wiki/Grimm%27s_Fairy_Tales",
    },
    {
      title: "The Lord of the Rings",
      description: "J.R.R. Tolkien's masterpiece inspired by Norse mythology.",
      url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    },
    {
      title: "Harry Potter Series",
      description: "J.K. Rowling’s modern fantasy intertwined with folklore.",
      url: "https://en.wikipedia.org/wiki/Harry_Potter",
    },
    {
      title: "American Gods by Neil Gaiman",
      description: "Ancient gods struggling to survive in the modern world.",
      url: "https://en.wikipedia.org/wiki/American_Gods",
    },
    {
      title: "Percy Jackson & the Olympians",
      description: "Reimagining Greek mythology for a younger audience.",
      url: "https://en.wikipedia.org/wiki/Percy_Jackson_%26_the_Olympians",
    },
    {
      title: "The Penelopiad by Margaret Atwood",
      description: "A retelling of the Odyssey from Penelope’s perspective.",
      url: "https://en.wikipedia.org/wiki/The_Penelopiad",
    },
    {
      title: "Norse Mythology by Neil Gaiman",
      description: "Modern retelling of Norse myths.",
      url: "https://en.wikipedia.org/wiki/Norse_Mythology_(book)",
    },
    {
      title: "Circe by Madeline Miller",
      description:
        "A feminist retelling of the Greek mythological sorceress Circe.",
      url: "https://en.wikipedia.org/wiki/Circe_(novel)",
    },
    {
      title: "The Song of Achilles by Madeline Miller",
      description: "A lyrical retelling of the Iliad.",
      url: "https://en.wikipedia.org/wiki/The_Song_of_Achilles",
    },
  ];

  return (
    <Dialog
      header="Sources"
      visible={visible}
      style={{ width: "60vw" }}
      modal
      onHide={onHide}
    >
      <div className="p-grid p-align-start p-justify-center">
        {sources.map((source, index) => (
          <div key={index} className="p-col-12 p-md-6 p-lg-4">
            <Card
              title={source.title}
              className="source-card"
              subTitle={source.description}
            >
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Visit Source
              </a>
            </Card>
            {index < sources.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default SourcesDialog;
