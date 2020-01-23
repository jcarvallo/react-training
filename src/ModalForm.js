import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ModalForm = props => {
  const {
    isOpen,
    handleOpenCloseModal,
    handleChangeForm,
    create,
    edit,
    action,
    dataForm
  } = props;
  
  return (
    <Modal isOpen={isOpen} toggle={handleOpenCloseModal}>
      <ModalHeader toggle={handleOpenCloseModal}>
        {`${action === "create" ? "Create" : "Edit"} User`}
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={dataForm.name}
              onChange={handleChangeForm}
              id="name"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">UserName</Label>
            <Input
              type="text"
              name="username"
              value={dataForm.username}
              onChange={handleChangeForm}
              id="username"
              placeholder="UserName"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeForm}
              id="email"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeForm}
              id="phone"
              placeholder="Phone"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        {action === "create" ? (
          <Button color="primary" onClick={create}>
            Create
          </Button>
        ) : (
          <Button color="primary" onClick={edit}>
            Edit
          </Button>
        )}{" "}
        <Button color="secondary" onClick={handleOpenCloseModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;
