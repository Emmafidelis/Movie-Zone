import { BsChevronDown } from "react-icons/bs";
import { Button } from "../component/ui/button";
import {
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuContent,
} from "../component/ui/menu";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button>
          Order by: Relevance <BsChevronDown />
        </Button>
        <MenuContent>
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="Date">Date</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
        </MenuContent>
      </MenuTrigger>
    </MenuRoot>
  );
};

export default SortSelector;
