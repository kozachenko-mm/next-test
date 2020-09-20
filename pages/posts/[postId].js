import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import GoHomePage from "../../components/GoHomePage";
import MainLayout from "../../components/MainLayout";

export default function Post() {
  const route = useRouter();
  const postId = Number(route.query.postId);

  const posts = useSelector((state) => state.posts).find(
    (item) => item.id === postId
  );
  console.log(posts);
  return (
    <MainLayout>
      <GoHomePage />
      {posts && (
        <>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </>
      )}
    </MainLayout>
  );
}
