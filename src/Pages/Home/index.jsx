import axios from "axios";
import React, { useState, useRef } from "react";
import {
  Container,
  H1,
  ContainerItems,
  Image,
  Input,
  InputLabel,
  Button,
} from "./styles";
import BurguerOne from "../../assets/burger 1.svg";

function App() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputOrder = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      order: inputOrder.current.value,
    });
    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="Burguer-One" src={BurguerOne} />
      <ContainerItems>
        <H1> Faça seu pedido ! </H1>
        <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel> Pedido do cliente</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />
        <Button onClick={addNewUser}  to="/users"> Novo pedido </Button>
       
      </ContainerItems> 
    </Container>
  );
}

export default App;
