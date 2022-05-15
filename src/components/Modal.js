import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from "@mui/material";
// import ModalContent from "./ModalContent";

const Modal = ({
  title,
  description,
  image,
  bookUrl,
  authors,
  pageCount,
  publishedDate,
}) => {
  const [open, setOpen] = useState(false);
  // const { book } = props;

  return (
    <div>
      <Button sx={{ width: 1 / 2 }} onClick={() => setOpen(true)}>
        About Books
      </Button>
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: 16,
              color: "text.secondary",
              fontWeight: "medium",
            }}
          >
            {authors} ({publishedDate})
          </DialogContentText>
          <div className="flex-row">
            <div className="flex-column">
              <DialogContentText sx={{ color: "text.main", mt: 2 }}>
                {description}
              </DialogContentText>
              <Link
                target="_blank"
                sx={{
                  mt: 8,
                  fontFamily: "Roboto",
                }}
                href={bookUrl}
                underline="none"
              >
                see Preview at Google Books
              </Link>
            </div>
            <div className="flex-column">
              <img src={image} alt={title} />
              <span className="page-count">{pageCount} pages</span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
