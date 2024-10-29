import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HtmlHTMLAttributes, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSearch: (SearchText: string) => void;
// }
const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
 const setSearchText= useGameQueryStore(s=> s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        // to prevent the form to posted on server
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
