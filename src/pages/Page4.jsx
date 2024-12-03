import React from "react";
import { Chart } from "primereact/chart";
import { DataView } from "primereact/dataview";
import { Panel } from "primereact/panel";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page4.css";

const endangeredStats = {
  labels: ["Preserved Traditions", "Endangered Traditions"],
  datasets: [
    {
      data: [45, 55],
      backgroundColor: ["#42A5F5", "#FF6384"],
      hoverBackgroundColor: ["#64B5F6", "#FF7993"],
    },
  ],
};

const preservationProjects = [
  {
    title: "UNESCO Intangible Cultural Heritage",
    description:
      "A global initiative to protect and document cultural practices, oral traditions, and festivals.",
    link: "https://ich.unesco.org/",
  },
  {
    title: "StoryWeaver",
    description:
      "A platform for sharing and translating folktales, aimed at preserving endangered languages.",
    link: "https://storyweaver.org.in/",
  },
  {
    title: "Folklore Library",
    description:
      "A digital project to document and share folklore stories from around the world.",
    link: "https://www.folklorelibrary.com/",
  },
  {
    title: "Endangered Languages Project",
    description:
      "A collaborative online resource for supporting and documenting endangered languages worldwide.",
    link: "https://www.endangeredlanguages.com/",
  },
  {
    title: "World Oral Literature Project",
    description:
      "An initiative to document and archive oral traditions at risk of disappearing.",
    link: "https://www.oralliterature.org/",
  },
];

const culturalRevivalTips = [
  {
    title: "Community Storytelling Events",
    description:
      "Organize local events to share and celebrate traditional stories and songs.",
  },
  {
    title: "Digital Story Platforms",
    description:
      "Leverage online platforms to document and share folklore globally.",
  },
  {
    title: "Educational Integration",
    description:
      "Introduce folklore in school curriculums to educate younger generations.",
  },
  {
    title: "Cultural Festivals",
    description:
      "Promote and organize festivals celebrating folklore, crafts, and local traditions.",
  },
];

const Page4 = () => {
  const itemTemplate = (project) => {
    return (
      <Panel header={project.title} className="project-panel">
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </Panel>
    );
  };

  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Reviving Folklore in a Globalized World</h1>
        <p>
          As globalization accelerates, many traditional stories, customs, and
          languages face extinction. Reviving folklore is crucial for preserving
          cultural diversity and fostering a sense of identity in our rapidly
          changing world.
        </p>
      </section>

      {/* Globalization Challenges Section */}
      <section className="challenges-section">
        <h2>Challenges to Folklore Preservation</h2>
        <ul>
          <li>
            <b>Decline in Oral Traditions:</b> Modern lifestyles and
            urbanization have reduced the transmission of stories through
            generations.
          </li>
          <li>
            <b>Endangered Languages:</b> Many languages are disappearing, taking
            their unique folklore with them.
          </li>
          <li>
            <b>Globalization:</b> The homogenization of culture threatens local
            traditions and narratives.
          </li>
          <li>
            <b>Digital Overload:</b> The rapid proliferation of digital content
            can overshadow traditional forms of storytelling.
          </li>
        </ul>
      </section>

      {/* Interactive Visual Section */}
      <section className="visual-section">
        <h2>Endangered Traditions: A Global Perspective</h2>
        <Chart type="doughnut" data={endangeredStats} className="chart" />
      </section>

      {/* Preservation Projects Section */}
      <section className="projects-section">
        <h2>Notable Preservation Projects</h2>
        <DataView
          value={preservationProjects}
          layout="list"
          itemTemplate={itemTemplate}
        />
      </section>

      {/* Revival Tips Section */}
      <section className="revival-section">
        <h2>Tips for Reviving Folklore</h2>
        <div className="revival-tips">
          {culturalRevivalTips.map((tip) => (
            <Panel
              key={tip.title}
              header={tip.title}
              className="revival-tip-panel"
            >
              <p>{tip.description}</p>
            </Panel>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page4;
