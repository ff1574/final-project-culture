import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const BlogPostCard = ({ title, summary, route }) => {
  const navigate = useNavigate();

  return (
    <Card title={title} style={{ marginBottom: "2em" }}>
      <p>{summary}</p>
      <Button
        label="Read More"
        icon="pi pi-angle-right"
        onClick={() => navigate(route)}
      />
    </Card>
  );
};
BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default BlogPostCard;
