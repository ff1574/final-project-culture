import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { Panel } from "primereact/panel";
import { Timeline } from "primereact/timeline";
import { Chart } from "primereact/chart";
import { Dialog } from "primereact/dialog";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page1.css";

const folkloreExamples = [
  {
    region: "Africa",
    story: "Anansi the Spider",
    summary:
      "Anansi, a cunning and wise spider, is a beloved figure in African folklore, particularly in Ghana. He uses his cleverness to outsmart others, often imparting lessons about morality, greed, and resourcefulness.",
    image: "/assets/images/anansi.webp",
  },
  {
    region: "Europe",
    story: "Robin Hood",
    summary:
      "Robin Hood is a legendary outlaw from medieval England who lived in Sherwood Forest. Known for 'robbing the rich to feed the poor,' he is a symbol of justice and resistance against corruption.",
    image: "/assets/images/robin_hood.webp",
  },
  {
    region: "Asia",
    story: "The Monkey King (Sun Wukong)",
    summary:
      "Sun Wukong, the Monkey King, is a central figure in the Chinese classic Journey to the West. Born from a magical stone, he possesses incredible strength and shape-shifting abilities.",
    image: "/assets/images/sun_wukong.webp",
  },
  {
    region: "North America",
    story: "Paul Bunyan",
    summary:
      "Paul Bunyan, a giant lumberjack, is a symbol of the American frontier spirit. His tales celebrate ingenuity, exploration, and the rugged determination of early settlers.",
    image: "/assets/images/paul_bunyan.webp",
  },
];

const folkloreTimeline = [
  {
    period: "Ancient Times",
    event: "Creation Myths",
    description:
      "Myths explaining the origins of the world and humanity, such as the Norse Yggdrasil or the Hindu Vishnu's cosmic dance.",
  },
  {
    period: "Medieval Period",
    event: "Heroic Legends",
    description:
      "Legends like King Arthur's Camelot and Beowulf, reflecting cultural values of chivalry and bravery.",
  },
  {
    period: "Renaissance",
    event: "Fairy Tales",
    description:
      "The Brothers Grimm and Charles Perrault popularized tales like Cinderella and Sleeping Beauty.",
  },
  {
    period: "Modern Era",
    event: "Folklore in Media",
    description:
      "Folklore themes adapted into books, movies, and video games, such as Tolkien's The Lord of the Rings.",
  },
];

const folkloreImpactData = {
  labels: [
    "Cultural Preservation",
    "Education",
    "Art Inspiration",
    "Community",
  ],
  datasets: [
    {
      label: "Folklore's Impact",
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      data: [35, 25, 20, 20],
    },
  ],
};

const Page1 = () => {
  const [dialogVisible, setDialogVisible] = useState(false); // State for dialog visibility
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogText, setDialogText] = useState("");
  const [dialogImage, setDialogImage] = useState("");
  const timelineRef = useRef(null);
  const timelineContainerRef = useRef(null);

  const handleImageClick = (imageSrc, dialogTitle, dialogText) => {
    setDialogImage(imageSrc);
    setDialogTitle(dialogTitle);
    setDialogText(dialogText);
    setDialogVisible(true);
  };

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline");
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineElements = timelineContainerRef.current.querySelectorAll(
      ".p-timeline-event-content"
    );
    timelineElements.forEach((el) => timelineObserver.observe(el));

    return () => {
      timelineElements.forEach((el) => timelineObserver.unobserve(el));
    };
  }, []);

  const itemTemplate = (example) => (
    <Card
      title={example.story}
      subTitle={example.region}
      className="example-card"
    >
      <div className="example-content">
        <img
          src={example.image}
          alt={example.story}
          className="example-image"
          onClick={() =>
            handleImageClick(example.image, example.story, example.summary)
          }
        />
        <p>{example.summary}</p>
      </div>
    </Card>
  );

  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Header Section */}
      <Panel header="What is Folklore?" className="header-panel">
        <p>
          Folklore is a collection of traditional beliefs, customs, stories,
          songs, and practices passed through generations, reflecting the
          cultural identity and wisdom of a community.
        </p>
        <blockquote>
          "Folklore is a nation's subconscious, a wellspring of wisdom, and the
          essence of humanity." – Anonymous Writer
        </blockquote>
      </Panel>

      {/* Key Elements Section */}
      <Accordion className="key-elements">
        <AccordionTab header="Myths">
          <p>
            Myths are traditional stories, especially ones concerning the early
            history of a people or explaining a natural or social phenomenon,
            and typically involving supernatural beings or events. They often
            involve gods, supernatural beings, and heroes.
          </p>
          <ul>
            <li>
              <b>Yggdrasil:</b> The Norse World Tree that connects the nine
              realms, symbolizing life and interconnectedness.
            </li>
            <li>
              <b>Prometheus:</b> The Greek titan who brought fire to humanity,
              embodying knowledge and rebellion.
            </li>
            <li>
              <b>Hindu Creation Myth:</b> Vishnu, the preserver, and Shiva, the
              destroyer, depict the cosmic cycle of creation and renewal.
            </li>
            <li>
              <b>Quetzalcoatl:</b> The Aztec feathered serpent god associated
              with creation, wisdom, and wind, believed to have shaped humanity
              from clay.
            </li>
            <li>
              <b>Amaterasu:</b> The Japanese sun goddess who emerged from a
              cave, symbolizing light overcoming darkness and bringing life to
              the world.
            </li>
            <li>
              <b>Maui:</b> A Polynesian demigod known for feats like fishing up
              entire islands and stealing fire for humans.
            </li>
          </ul>
        </AccordionTab>

        <AccordionTab header="Legends">
          <p>
            Legends are semi-historical narratives celebrating heroic figures or
            extraordinary events. They inspire and teach societal values.
          </p>
          <ul>
            <li>
              <b>Robin Hood:</b> The English outlaw who stood for justice,
              symbolizing fairness and bravery.
            </li>
            <li>
              <b>King Arthur:</b> The legendary king and his Knights of the
              Round Table, reflecting chivalry and greatness.
            </li>
            <li>
              <b>Mulan:</b> The Chinese heroine who disguised herself to join
              the army, showcasing courage and self-sacrifice.
            </li>
            <li>
              <b>El Cid:</b> A Spanish hero whose exploits during the
              Reconquista made him a symbol of honor and patriotism.
            </li>
            <li>
              <b>William Tell:</b> The Swiss folk hero known for shooting an
              apple off his son’s head, symbolizing resistance against tyranny.
            </li>
            <li>
              <b>Manas:</b> A Kyrgyz epic hero celebrated in a vast oral
              tradition for uniting tribes and defending against invaders.
            </li>
          </ul>
        </AccordionTab>

        <AccordionTab header="Fairy Tales">
          <p>
            Fairy tales use magic, enchantment, and moral lessons to convey
            universal themes. Often aimed at children, these tales carry deeper
            allegorical meanings.
          </p>
          <ul>
            <li>
              <b>Cinderella:</b> A tale of hope and justice, as a young girl
              overcomes adversity through kindness and magic.
            </li>
            <li>
              <b>Hansel and Gretel:</b> A story of resilience and cleverness, as
              siblings outsmart a witch.
            </li>
            <li>
              <b>The Frog Prince:</b> A story of transformation and redemption,
              emphasizing the importance of keeping promises.
            </li>
            <li>
              <b>Snow White:</b> A classic tale of jealousy, friendship, and the
              triumph of good over evil, involving a poisoned apple and seven
              dwarfs.
            </li>
            <li>
              <b>Beauty and the Beast:</b> A story of love and acceptance,
              teaching that true beauty lies within.
            </li>
            <li>
              <b>Rumpelstiltskin:</b> A cautionary tale about greed, wit, and
              the power of knowing someone’s name.
            </li>
            <li>
              <b>The Little Mermaid:</b> A tale of sacrifice and longing, where
              a mermaid dreams of becoming human to find love.
            </li>
          </ul>
        </AccordionTab>
      </Accordion>

      {/* Timeline Section */}
      <div ref={timelineContainerRef} className="timeline-page1">
        <Timeline
          value={folkloreTimeline}
          align="alternate"
          content={(item) => (
            <div>
              <h3>{item.period}</h3>
              <h4>{item.event}</h4>
              <p>{item.description}</p>
            </div>
          )}
          className="timeline"
        />
      </div>

      {/* Impact of Folklore Section */}
      <Panel header="The Impact of Folklore" className="impact-panel">
        <p>
          Folklore profoundly influences various aspects of life and culture.
          Its impact can be categorized as follows:
        </p>
        <Chart
          type="doughnut"
          data={folkloreImpactData}
          className="impact-chart"
        />
      </Panel>

      {/* Global Examples Section */}
      <h2 className="examples-header">
        Folklore Examples from Around the World
      </h2>
      <DataView
        value={folkloreExamples}
        layout="list"
        itemTemplate={itemTemplate}
        className="examples-list"
      />

      {/* Image Dialog */}
      <Dialog
        visible={dialogVisible}
        onHide={() => setDialogVisible(false)}
        style={{ width: "90%", maxWidth: "600px" }} // Responsive width
        header={dialogTitle}
      >
        <img src={dialogImage} alt="Expanded" style={{ width: "100%" }} />
        <p>{dialogText}</p>
      </Dialog>
    </div>
  );
};

export default Page1;
