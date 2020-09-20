import axios from "axios";

export const getPosts = () => {
  return axios.get(`https://simple-blog-api.crew.red/posts`);
};

export const createPosts = (data) => {
  return axios.post(`https://simple-blog-api.crew.red/posts`, data);
};

export const deletePosts = (id) => {
  console.log(id)
  return axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
};
