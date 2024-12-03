import React from "react";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";
import "../assets/css/AuthorDialog.css";
import PropTypes from "prop-types";

const AuthorDialog = ({ visible, onHide }) => {
  return (
    <Dialog
      header="Author"
      visible={visible}
      style={{ width: "30vw" }}
      modal
      onHide={onHide}
      className="author-dialog"
    >
      <div className="dialog-content">
        <Avatar
          image="/assets/images/portrait.png"
          size="xlarge"
          shape="circle"
          className="author-avatar"
          style={{ minWidth: "60%", height: "auto" }}
        />
        <h3 className="author-description">Franko Fišter</h3>
      </div>
    </Dialog>
  );
};
AuthorDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default AuthorDialog;
