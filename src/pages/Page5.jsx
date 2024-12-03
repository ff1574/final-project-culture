import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
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
    "Innovation",
    "Cultural Fusion",
    "Environmentalism",
    "Digital Age",
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
        "#C9CBCF",
        "#9B59B6",
        "#2ECC71",
        "#1ABC9C",
      ],
      data: [50, 35, 40, 30, 20, 25, 15, 45, 60, 70, 40, 30, 20, 25],
    },
  ],
};

const Page5 = () => {
  const [story, setStory] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleStorySubmit = () => {
    if (story.trim() !== "") {
      setDialogVisible(true);
      setStory("");
    }
  };

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
          <li>
            <b>Augmented Reality (AR):</b> AR brings folklore to life in
            real-world settings, enhancing cultural education and tourism.
          </li>
        </ul>
      </section>

      {/* Word Cloud Section */}
      <section className="word-cloud-section">
        <h2>Emerging Folklore Themes</h2>
        <Chart type="bar" data={wordCloudData} className="chart" />
      </section>

      {/* User Contribution Section */}
      <section className="contribution-section">
        <h2>Share Your Own Story</h2>
        <p>
          Contribute to the evolving tapestry of folklore by sharing a story or
          myth from your culture or imagination.
        </p>
        <div className="input-section">
          <InputTextarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={5}
            cols={50}
            placeholder="Write your story here..."
          />
          <Button
            label="Submit Story"
            icon="pi pi-check"
            className="p-button-rounded submit-button"
            onClick={handleStorySubmit}
          />
        </div>
      </section>

      {/* Submission Dialog */}
      <Dialog
        header="Thank You!"
        visible={dialogVisible}
        style={{ width: "30vw" }}
        modal
        onHide={() => setDialogVisible(false)}
      >
        <p>
          Your story has been submitted and will be part of our folklore
          archive.
        </p>
      </Dialog>
    </div>
  );
};

export default Page5;
