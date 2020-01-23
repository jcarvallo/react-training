import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ModalDelete = props => {
  const {
    isOpenDelete,
    handleOpenCloseModalDelete,
    deleteUser,
    dataForm
  } = props;

  return (
    <Modal isOpen={isOpenDelete} toggle={handleOpenCloseModalDelete}>
      <ModalHeader toggle={handleOpenCloseModalDelete}>Delete User</ModalHeader>
      <ModalBody>
        <h6>{`¿Está seguro de eliminar ${dataForm.name}?`}</h6>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={deleteUser}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={handleOpenCloseModalDelete}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDelete;
