import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "../component/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search here..."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
