import Nav from "./Nav";
import Head from "next/head";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../redux/actions";

const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 5px;
`;

export default function MainLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Wrapper>
        <Nav />
        <main>{children}</main>
      </Wrapper>
    </>
  );
}
