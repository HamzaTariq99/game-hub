import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // larger devices
      }}
      templateColumns={{
        base: "1fr", // take all availble space on small
        lg: "200px 1fr", // first 200 baki main grid all space
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading />
          <Flex marginBottom={1}>
            <Box marginRight={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage