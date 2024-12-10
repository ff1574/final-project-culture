import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import AuthorDialog from "./AuthorDialog";
import SourcesDialog from "./SourcesDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const [authorDialogVisible, setAuthorDialogVisible] = useState(false);
  const [sourcesDialogVisible, setSourcesDialogVisible] = useState(false);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Sources",
      icon: "pi pi-info-circle",
      command: () => setSourcesDialogVisible(true),
    },
    {
      label: "Author",
      icon: "pi pi-user",
      command: () => setAuthorDialogVisible(true),
    },
  ];

  return (
    <>
      <Menubar model={items} />
      <AuthorDialog
        visible={authorDialogVisible}
        onHide={() => setAuthorDialogVisible(false)}
      />
      <SourcesDialog
        visible={sourcesDialogVisible}
        onHide={() => setSourcesDialogVisible(false)}
      />
    </>
  );
};

export default Navbar;
