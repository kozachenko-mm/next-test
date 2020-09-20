import Link from "next/link";
import styled from "styled-components";
import * as Api from "../services/api";

const Li = styled.li`
  width: 30%;
  list-style: none;
  margin-bottom: 40px;
  border-bottom: 1px solid #696969;
`;

const List = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const P = styled.p`
  color: #696969;
`;



export default function ShortList({ list }) {
  return (
    <List>
      {list.map((item) => (
        <Li key={item.id}>
          <Link href={`/posts/${item.id}`}>
            <>
              <a>
                <h2>{item.title}</h2>
                <P>{item.body}</P>
              </a>
              {/* <button type="button" onClick={() => Api.deletePosts(item.id)}>
                del
              </button> */}
            </>
          </Link>
        </Li>
      ))}
    </List>
  );
}
