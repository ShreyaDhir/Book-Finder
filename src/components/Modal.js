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

const Modal = ({ book }) => {
  const [open, setOpen] = useState(false);
  // const { book } = props;

  return (
    <div>
      <Button onClick={() => setOpen(true)}>About Books</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          title
          
          {/* Title: {book.volumeInfo.title} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            desc
          {console.log(book)}
            {/* {book.volumeInfo.description} */}
          </DialogContentText>
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
