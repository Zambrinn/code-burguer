import styled from "styled-components";
import Background from "../../assets/bg.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  gap: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 160vh;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 98px;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-left: 20px;
`;

export const Input = styled.input`
  display: flex;
  padding: 19px 139px 18px 15px;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 42px;
`;

export const LinkButton = styled(Link)`
  display: flex;
  height: 68px;
  padding: 0px 113px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-weight: 900;
  line-height: 2.5px;
  cursor: pointer;
  margin-top: 56px;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const Divs = styled.div`
  width: 342px;
  height: 101px;
  flex-shrink: 0;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* height: 59px; */
    /* border-radius: 14px; */
    outline: none;
    border: none;
    background: none;
    border: none;
    cursor: pointer;

    img {
      margin-left: 190px;
    }
  }
`;

export const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  margin-top: 15px;
  margin-left: 20px;
`;

export const OrderDiv = styled.div`
  margin-top: 13px;
  margin-left: 20px;
`;

export const Name = styled.p`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Order = styled.p`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
