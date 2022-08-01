import { default as Sidebar } from "./components/Sidebar";
import { default as Feed } from "./components/Feed";
import { default as Rightbar } from "./components/Rightbar";
import { default as Navbar } from "./components/Navbar";
import { default as Add } from "./components/Add";
import { Box, createTheme, Stack } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@mui/system";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
