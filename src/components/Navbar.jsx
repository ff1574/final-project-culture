import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import AuthorDialog from "./AuthorDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const [authorDialogVisible, setAuthorDialogVisible] = useState(false);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
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
    </>
  );
};

export default Navbar;
