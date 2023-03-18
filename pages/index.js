import { useState, useEffect } from "react";
import LoadingScreen from "@/src/views/LoadingScreen/LoadingScreen";
import Home from "@/src/views/Home/Home";

const App = () => {
  const [isLoadingScreen, setIsLoadingScreen] = useState(false);

  const showLoadingScreen = () => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, [7000]);
  };

  useEffect(() => {
    showLoadingScreen();
  }, []);

  if (isLoadingScreen) {
    return <LoadingScreen />;
  }

  return <Home />;
};

export default App;
