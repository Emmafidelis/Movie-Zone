import { HStack } from "@chakra-ui/react";
import { useColorMode } from "../component/ui/color-mode";
import { Switch } from "../component/ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
