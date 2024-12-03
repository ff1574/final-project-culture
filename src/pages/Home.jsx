import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import "../assets/css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "What is Folklore?",
      summary: "Uncover the essence of folklore and its timeless tales.",
      route: "/page1",
    },
    {
      title: "Folklore's Influence on Modern Literature",
      summary: "See how ancient stories shape today's literary works.",
      route: "/page2",
    },
    {
      title: "Folklore in Contemporary Culture",
      summary: "Discover folklore's role in today's cultural landscape.",
      route: "/page3",
    },
    {
      title: "Reviving Folklore",
      summary: "Learn how folklore is being preserved in modern times.",
      route: "/page4",
    },
    {
      title: "Future of Folklore",
      summary: "Explore the future of folklore in a rapidly changing world.",
      route: "/page5",
    },
  ];

  // BlogPostCard template for carousel
  const blogTemplate = (post) => {
    return (
      <BlogPostCard
        title={post.title}
        summary={post.summary}
        route={post.route}
      />
    );
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ textAlign: "center", padding: "4em 0" }}
      >
        <h1>Folklore in Modern Literature & Culture</h1>
        <p>
          Here, we will explore how ancient myths, legends, and folktales
          continue to shape the stories we tell today and influence cultural
          identities worldwide.
        </p>
        <Button
          label="Find Out More"
          icon="pi pi-arrow-right"
          className="p-button-raised p-button-rounded"
          style={{ marginTop: "2em" }}
          onClick={() => navigate("/page1")}
        />
      </section>

      {/* Featured Blog Posts */}
      <section
        className="featured-posts"
        style={{ padding: "4em 0", background: "#ffffff" }}
      >
        <h2 style={{ textAlign: "center" }}>Featured Topics</h2>
        <Carousel
          value={blogPosts}
          itemTemplate={blogTemplate}
          numVisible={2}
          numScroll={1}
          responsiveOptions={[
            { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
            { breakpoint: "768px", numVisible: 1, numScroll: 1 },
          ]}
          style={{ marginTop: "2em" }}
        />
      </section>
    </div>
  );
};

export default Home;
