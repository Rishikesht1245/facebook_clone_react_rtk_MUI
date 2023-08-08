import * as React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import Loader from "./components/Loader";

function App() {
  const [mode, setMode] = React.useState("light");
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoaderFinished = () => {
    setIsLoading(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      {false ? (
        <Loader onLoaderFinished={handleLoaderFinished} />
      ) : (
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            {/* navbar */}
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />
              <Rightbar />
            </Stack>
          </Box>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
