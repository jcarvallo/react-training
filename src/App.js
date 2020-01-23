import React, { useState, useEffect } from "react";
import Contador from "./contador";
import Datalist from "./datalist";
import ModalForm from "./ModalForm";
import ModalDelete from "./ModalDelete";
import { Button } from "reactstrap";

const initialSate = {
  count: 0,
  hidden: false
};
const initialDataForm = {
  id: null,
  name: "",
  username: "",
  email: "",
  phone: ""
};

const App = () => {
  const [state, setState] = useState(initialSate);
  const [data, setData] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [isOpenDelete, setOpenModalDelete] = useState(false);
  const [dataForm, setDataForm] = useState(initialDataForm);
  const [action, setAction] = useState("");

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
          for (const i of json) {
              setData(preData => [
                ...preData,
                {
                  id: i.id,
                  name: i.name,
                  username: i.username,
                  email: i.email,
                  phone: i.phone
                }
              ]);
          }
          
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOpenCloseModal = () => setOpenModal(!isOpen);

  const handleOpenCloseModalDelete = () => setOpenModalDelete(!isOpenDelete);

  const handleEdit = data => {
    setDataForm(data);
    setAction("edit");
    handleOpenCloseModal();
  };

  const handleCreate = () => {
    setAction("create");
    setDataForm(initialDataForm);
    handleOpenCloseModal();
  };

  const handleDelete = data => {
    setDataForm(data);
    handleOpenCloseModalDelete();
  };

  const actionsContador = {
    state,
    Incrementar: () => setState(pre => ({ ...pre, count: pre.count + 1 })),
    Decrementar: () => setState(pre => ({ ...pre, count: pre.count - 1 })),
    multiplicar: () => setState(pre => ({ ...pre, hidden: !pre.hidden })),
    reset: () => setState(initialSate),
    onChange: ({ target }) =>
      setState(pre => ({ ...pre, [target.name]: parseInt(target.value) })),
    resultado: () => {
      let { count, numero_uno, numero_dos } = state;
      alert(`El valor es ${count * numero_uno + numero_dos}`);
    }
  };

  const actionForm = {
    isOpen,
    action,
    dataForm,
    handleOpenCloseModal: () => handleOpenCloseModal(),
    handleChangeForm: ({ target }) =>
      setDataForm(pre => ({ ...pre, [target.name]: target.value })),
    create: () => {
      dataForm.id = data.length + 1;
      setData(preData => [...preData, dataForm]);
      handleOpenCloseModal();
    },
    edit: () => {
      let index = data.findIndex(i => i.id === dataForm.id);
      data[index] = dataForm;
      setData(data);
      handleOpenCloseModal();
    }
  };

  const actionDelete = {
    isOpenDelete,
    dataForm,
    handleOpenCloseModalDelete: () => handleOpenCloseModalDelete(),
    deleteUser: () => {
      let index = data.findIndex(i => i.id === dataForm.id);
      data.splice(index, 1);
      setData(data);
      handleOpenCloseModalDelete();
    }
  };

  return (
    <>
      <Contador {...actionsContador} />
      <br></br>
      <h1>Ejercicio de CRUD</h1>
      <br></br>
      <Button onClick={handleCreate} color="primary">
        Create
      </Button>
      <br></br>
      <br></br>
      <Datalist
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ModalForm {...actionForm} />
      <ModalDelete {...actionDelete} />
    </>
  );
};

export default App;
