import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "../component/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import useMovieQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
