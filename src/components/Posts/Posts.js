import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import axiosInstance from "../../utils/axios";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/posts").then((response) => {
      if (response.status === 200) {
        const slicedPosts = response.data.slice(0, 4);
        setPosts(slicedPosts);
      }
    });
  }, []);

  const addPostHandler = () => {
    const data = {
      title: "onetitle",
      body: "body of post",
      author: "Someone",
    };
    axiosInstance
      .post("/postss", data)
      .then((response) => {
        alert("response.status=" + response.status);
      })
      .catch((error) => alert("Error at post " + error));
  };
  const deletePost = (postId) => {
    axiosInstance
      .delete("/posts/" + postId)
      .then((response) => alert("response.status=" + response.status));
  };
  return (
    <Container>
      <Typography variant="h3">Posts</Typography>
      <Button variant="outlined" onClick={addPostHandler}>
        Add Post
      </Button>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          deleteHandler={() => deletePost(post.id)}
        />
      ))}
    </Container>
  );
};

export default Posts;
