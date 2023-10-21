import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  H1,
  ContainerItems,
  Image,
  Divs,
  DivTwo,
  Order,
  Name,
  NameDiv,
  OrderDiv,
  LinkButton,
} from "./styles";
import BurguerTwo from "../../assets/burger 2.svg";
import Trash from "../../assets/trash.svg";

function App() {
  // const users = [];
  const [users, setUsers] = useState([]);

  useEffect(() => {
   async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()
  }, [users])

  
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="Burguer-One" src={BurguerTwo} />
      <ContainerItems>
        <H1> Pedidos </H1>
        <ul>
          {users.map((user) => {
            return (
              <Divs key={user.id}>
                <DivTwo>
                <NameDiv>
                <Name>{user.name}</Name> 
                </NameDiv>
                <OrderDiv>
                <Order>{user.order}</Order>
                </OrderDiv>
                </DivTwo>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="trash-can" />
                </button>
              </Divs>
            );
          })}
        </ul>
          <LinkButton to="/"> Voltar </LinkButton>
      </ContainerItems>
    </Container>
  );
}

export default App;
