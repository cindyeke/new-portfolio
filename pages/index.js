import { useState, useEffect } from "react";
import LoadingScreen from "@/src/components/views/LoadingScreen/LoadingScreen";

const Home = () => {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

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

  return <div>Home</div>;
};

export default Home;
