import { Box, Center } from "@chakra-ui/react";
import { BackButton } from "./BackButton";

interface LayoutProps {
  children: React.ReactNode;
  margin?: number;
  onGoBack?: () => void;
}

export const Layout = ({ children, margin = 8, onGoBack }: LayoutProps) => {
  return (
    <Box
      minH="100dvh"
      bg="url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDN6MmoxeTR5MnN2aThoYTl6c3pkMXYzbThjbzAwM29xNTg1eWJqMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8rEiAAlQD9gOxarV2B/giphy.gif')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center center"
      position="relative"
      // style={{
      //   transform: "scale(1.1)",
      // }}
    >
      {onGoBack && <BackButton onClick={onGoBack} />}
      <Center h="100vh">
        <Box m={margin} minW={"200px"} maxW={"500px"}>
          {children}
        </Box>
      </Center>
    </Box>
  );
};
