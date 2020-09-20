import MainLayout from "../../components/MainLayout";
import { useSelector } from "react-redux";
import PostList from "../../components/PostList";
import GoHomePage from "../../components/GoHomePage";



export default function Post() {
  const posts = useSelector((state) => state.posts);

  return (
    <MainLayout>
      <GoHomePage />
      <PostList list={posts} />
    </MainLayout>
  );
}
