import MainLayout from "../components/MainLayout";
import { useSelector } from "react-redux";
import PostList from "../components/PostList";



export default function Home() {
  const posts = useSelector((state) => state.posts);
  const shortListPosts = posts.slice(-9).reverse();

  return (
    <MainLayout>
      <PostList list={shortListPosts} />
    </MainLayout>
  );
}
