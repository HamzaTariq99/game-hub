import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

const PlatformSelector = () => {
  // you are not desginging a state u are using a hook jahan sy data aa rha
  const { data, error } = usePlatforms();
  // ab filter krna ha to track rakhna ha sinstate jo ky app ko notify kry gi
  //const platformsData = data as FetchResponse<Platform> | undefined;
  const selectedPlatformId= useGameQueryStore(s=> s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  const setSelectedPlatformId= useGameQueryStore(s=> s.setPlatformId)


  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
