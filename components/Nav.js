import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 2px solid #696969;
  
`;
const Ul = styled.ul`
  width: 800px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const A = styled.a`
  font-size: 20px;
  padding: 0 20px;
  cursor: pointer;
  color: darkblue;
  font-size: 24px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: blue;
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <Ul>
        <li>
          <Link href={"/"}>
            <A>Home</A>
          </Link>
        </li>
        <li>
          <Link href={"/posts"}>
            <A>Posts</A>
          </Link>
        </li>
        <li>
          <Link href={"/posts/new"}>
            <A>Create Post</A>
          </Link>
        </li>
      </Ul>
    </Navigation>
  );
}
