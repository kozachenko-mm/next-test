import { useState } from "react";
import MainLayout from "../../../components/MainLayout";
import styled from "styled-components";
import * as Api from "../../../services/api";

const H = styled.h1`
  font-size: 20px;
`;
const Div = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  width: 150px;
  margin-top: 3px;
  display: inline-block;
  padding: 3px;
`;
const Input = styled.input`
  border: 1px solid #aaa;
  box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
  border-radius: 2px;
`;
const Textarea = styled.textarea`
  border: 1px solid #aaa;
  box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
  border-radius: 2px;
`;

const Button = styled.button`
  background-color: #68b12f;
  background: linear-gradient(top, #68b12f, #50911e);
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 #9fd574;
  font-weight: bold;
  padding: 6px 20px;
  text-align: center;
  color: #ffffff;
  &:disabled {
    background: gray;
  }
`;

export default function New() {
  const [inputValues, setInputValues] = useState({ title: "", body: "" });
  const [isActive, setIsActive] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    if (inputValues.title && inputValues.body) setIsActive(true);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    Api.createPosts(inputValues);
    console.log(inputValues);
    setInputValues({
      title: "",
      body: "",
    });
  };
  return (
    <MainLayout>
      <H> Create your post</H>
      <form action="" action="post" name="post_form">
        <Div>
          <Label htmlFor="title">Title:</Label>
          <Input
            value={inputValues.title}
            type="text"
            name="title"
            onChange={handleOnChange}
          />
        </Div>
        <Div>
          <Label htmlFor="body">Message:</Label>
          <Textarea
            value={inputValues.body}
            name="body"
            cols="40"
            rows="6"
            onChange={handleOnChange}
          />
        </Div>

        {isActive && <Button onClick={handleOnClick} type="submit" >
          Send
        </Button>}
      </form>
    </MainLayout>
  );
}
