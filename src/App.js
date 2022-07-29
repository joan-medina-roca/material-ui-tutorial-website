import { default as Sidebar } from "./components/Sidebar";
import { default as Feed } from "./components/Feed";
import { default as Rightbar } from "./components/Rightbar";
import { default as Navbar } from "./components/Navbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
