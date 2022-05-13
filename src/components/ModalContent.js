import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button } from 'bootstrap';
import React from 'react'

const ModalContent = ({ id, title, description, authors }) => {
  console.log('id: ' + id)
  console.log("title: " + title);
  console.log("description: " + description);
  console.log("authors: " + authors);
  return (
    <div>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
    </div>
  );
}

export default ModalContent