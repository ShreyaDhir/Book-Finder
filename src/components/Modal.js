import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
// import ModalContent from "./ModalContent";

const Modal = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  // const { book } = props;

  return (
    <div>
      <Button onClick={() => setOpen(true)}>About Books</Button>
      <Dialog open={open}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
