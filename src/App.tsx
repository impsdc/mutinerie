import { HomeScreen } from "./screens/HomeScreen";
import { CaptainSelectionScreen } from "./screens/CaptainSelectionScreen";
import { RoleAssignmentScreen } from "./screens/RoleAssignmentScreen";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { system } from "./theme";
import { GetLocalStorage } from "./utils/localstorage";

const App = () => {
  const [step, setStep] = useState<number>(GetLocalStorage("step") || 1);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "step") {
        setStep(event.newValue ? parseInt(event.newValue) : 1);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [step]);

  useEffect(() => {
    localStorage.setItem("step", step.toString());
  }, [step]);

  const handleChangeStep = (step: number) => {
    setStep(step);
  };

  const getScreen = () => {
    switch (step) {
      case 1:
        return <HomeScreen onChangeStep={handleChangeStep} />;
      case 2:
        return <CaptainSelectionScreen onChangeStep={handleChangeStep} />;
      case 3:
        return <RoleAssignmentScreen onChangeStep={handleChangeStep} />;
      // case 4:
      // return <RoleDescriptionScreen />;
      default:
        return <HomeScreen onChangeStep={handleChangeStep} />;
    }
  };

  return <ChakraProvider value={system}>{getScreen()}</ChakraProvider>;
};

export default App;
