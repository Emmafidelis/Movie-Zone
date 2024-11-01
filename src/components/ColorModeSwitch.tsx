import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "../component/ui/switch";
import { useColorMode } from "../component/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
