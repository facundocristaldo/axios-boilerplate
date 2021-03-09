import React from "react";
import { Box, Button, Card, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const Post = ({ post, deleteHandler }) => {
  return (
    <Box margin={5}>
      <Card>
        <Box padding={3} position="relative">
          <Button onClick={deleteHandler}>
            {" "}
            <Delete />
          </Button>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Post;
