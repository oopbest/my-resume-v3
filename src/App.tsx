import { ThemeProvider } from "./components/theme-provider";
import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayout />
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
