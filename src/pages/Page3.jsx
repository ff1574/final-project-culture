import React from "react";
import { Carousel } from "primereact/carousel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page3.css";

const mediaExamples = [
  { title: "Frozen", medium: "Movie", origin: "The Snow Queen" },
  { title: "Supernatural", medium: "TV Show", origin: "Various Urban Legends" },
  { title: "The Witcher", medium: "Video Game", origin: "Slavic Folklore" },
  {
    title: "American Gods",
    medium: "Book/TV Show",
    origin: "Global Mythology",
  },
  {
    title: "Moana",
    medium: "Movie",
    origin: "Polynesian Mythology",
  },
  {
    title: "Coco",
    medium: "Movie",
    origin: "Mexican Folklore",
  },
  {
    title: "Pan’s Labyrinth",
    medium: "Movie",
    origin: "Spanish Folklore",
  },
];

const carouselImages = [
  {
    src: "/assets/images/day_of_the_dead.jpg",
    alt: "Day of the Dead",
    title: "Day of the Dead Festival",
  },
  {
    src: "/assets/images/chinese_new_year.jpg",
    alt: "Chinese New Year",
    title: "Chinese New Year",
  },
  {
    src: "/assets/images/krampus_festival.jpg",
    alt: "Krampus Festival",
    title: "Krampus Festival",
  },
  {
    src: "/assets/images/diwali.jpg",
    alt: "Diwali",
    title: "Diwali: Festival of Lights",
  },
  {
    src: "/assets/images/holi.jpg",
    alt: "Holi",
    title: "Holi: Festival of Colors",
  },
  {
    src: "/assets/images/venetian_carnival.jpg",
    alt: "Venetian Carnival",
    title: "Venetian Carnival",
  },
];

const Page3 = () => {
  const carouselItemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <img src={item.src} alt={item.alt} className="carousel-image" />
        <h4 className="carousel-title">{item.title}</h4>
      </div>
    );
  };

  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Folklore in Contemporary Culture</h1>
        <p>
          Folklore is not a relic of the past—it remains alive and influential
          in today’s world. From media and fashion to festivals and daily
          practices, folklore continues to shape cultural identities and inspire
          creativity.
        </p>
      </section>

      {/* Media Examples Section */}
      <section className="media-section">
        <h2>Folklore in Media</h2>
        <DataTable
          value={mediaExamples}
          className="media-table"
          stripedRows
        >
          <Column field="title" header="Title" />
          <Column field="medium" header="Medium" />
          <Column field="origin" header="Folkloric Origin" />
        </DataTable>
      </section>

      {/* Visual Representation Section */}
      <section className="visual-section">
        <h2>Folklore in Visual Arts and Fashion</h2>
        <p>
          Folklore has deeply influenced fashion and design. From traditional
          patterns in clothing to modern art inspired by mythological creatures,
          folklore continues to shape visual expression. Brands like Alexander
          McQueen and Dolce & Gabbana have famously drawn inspiration from
          folklore in their collections. Folk motifs are often used in tattoos,
          textiles, and public art installations, blending the old with the new.
        </p>
      </section>

      {/* Festivals Section */}
      <section className="festivals-section">
        <h2>Festivals Inspired by Folklore</h2>
        <Carousel
          value={carouselImages}
          itemTemplate={carouselItemTemplate}
          numVisible={1}
          numScroll={1}
          circular
          autoPlay
          style={{ maxWidth: "600px", margin: "0 auto" }}
        />
      </section>
    </div>
  );
};

export default Page3;
