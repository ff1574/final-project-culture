import React from "react";
import { Chart } from "primereact/chart";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page5.css";

const wordCloudData = {
  labels: [
    "Heroes",
    "Myths",
    "Legends",
    "Magic",
    "Transformation",
    "Tradition",
    "Courage",
    "Wit",
    "Morality",
    "Good vs Evil",
  ],
  datasets: [
    {
      label: "Frequency",
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#FF9F40",
        "#4BC0C0",
        "#9966FF",
        "#0DFF4D",
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
      ],
      data: [50, 35, 40, 30, 20, 25, 15, 45, 60, 70],
    },
  ],
};

const Page5 = () => {
  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Introduction Section */}
      <section className="intro-section">
        <h1>The Future of Folklore</h1>
        <p>
          As we look to the future, technology and globalization present both
          challenges and opportunities for folklore. New storytelling platforms
          and digital tools are reshaping how traditions are preserved and
          shared, ensuring folklore remains relevant in the modern world.
        </p>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <h2>Technology and Folklore</h2>
        <ul>
          <li>
            <b>AI in Storytelling:</b> Artificial intelligence can create
            folklore-inspired narratives, bridging traditional and modern
            storytelling techniques.
          </li>
          <li>
            <b>Virtual Reality Experiences:</b> VR allows users to immerse
            themselves in folklore worlds, experiencing stories interactively.
          </li>
          <li>
            <b>Digital Archives:</b> Platforms like the Global Folklore Archive
            enable communities to preserve their stories online.
          </li>
        </ul>
      </section>

      {/* Word Cloud Section */}
      <section className="word-cloud-section">
        <h2>Popular Folklore Themes</h2>
        <Chart type="bar" data={wordCloudData} className="chart" />
      </section>
    </div>
  );
};

export default Page5;
