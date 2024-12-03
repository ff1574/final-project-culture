import React, { useState, useEffect } from "react";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/TabMenu.css";

const TabMenuComponent = () => {
  // Track active index based on location
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const tabItems = [
    { label: "What is Folklore?", icon: "pi pi-book", route: "/page1" },
    { label: "Folklore in Literature", icon: "pi pi-pencil", route: "/page2" },
    { label: "Folklore in Culture", icon: "pi pi-globe", route: "/page3" },
    { label: "Reviving Folklore", icon: "pi pi-refresh", route: "/page4" },
    { label: "Future of Folklore", icon: "pi pi-forward", route: "/page5" },
  ];

  useEffect(() => {
    const currentIndex = tabItems.findIndex(
      (item) => item.route === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location, tabItems]);

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
    navigate(tabItems[e.index].route);
  };

  return (
    <TabMenu
      model={tabItems}
      activeIndex={activeIndex}
      onTabChange={handleTabChange}
      style={{ marginBottom: "2em" }}
    />
  );
};

export default TabMenuComponent;
