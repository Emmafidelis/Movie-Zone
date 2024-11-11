import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "../component/ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input borderRadius={20} placeholder="Search here..." variant="outline" />
    </InputGroup>
  );
};

export default SearchInput;
