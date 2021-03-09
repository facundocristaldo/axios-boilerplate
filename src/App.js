import "./App.css";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Axios Boilerplate</Typography>
        </Toolbar>
      </AppBar>
      <Box marginTop={10}>
        <Container>
          <Posts />
        </Container>
      </Box>
    </>
  );
}

export default App;
