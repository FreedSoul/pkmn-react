# Hi this a pokedex app

I created the app to search, interesting and valuable info about pokemons to play pkmn games,
in a much more concise way avoiding interesting, but not relevant info to play

## the app have 3 sections

- find pkmn and evolutions
- compare pkmns
- whats that pokemon?

## [Credits to evan liaw for the background images](https://evanliaw.com/)

## Challenges

- day 1: struggle using swr fetcher function, call directly a function instead of saving the function in the variable __const fetcher__
- day 2: struggle with swr to do a sequencial fetching in two diferent components, i resolved to join the components in 1, i try to fetch then fetch again, with some info from the first fetch, but reading POKE-API documentation, comparing what i want to do and the structure of the api, it was unnecessary (refetching), reading the swr docs found the [conditional fetching](https://swr.vercel.app/docs/conditional-fetching) and [here](https://stackoverflow.com/questions/63487265/use-swr-with-depending-request-data), then i use the named data destructured to fetch all the info in one go
- day 3: i couldnt make work the conditional fetching, then i resolved it using a checking if, for every named data [pkmn,species,evolution] [this post helps](https://stackoverflow.com/questions/60375246/cant-access-to-my-data-from-a-swr-fetch-react)
- day 4: i realized that until [evolution] was ok, but fetching secuencially wll not work because not all pkmns have 3 evolutions, onwards i had to use a parallel fetching with the evolutions component
- day 5: pressing a key in the pokemon input, was triggering a fetch for every key i press, resolved using [debounce function](https://blog.logrocket.com/how-and-when-to-debounce-or-throttle-in-react/), and i found that calling a swr hook again after the line 52 throw and error in pokemon.js, seems that is neccesary to call all the swr fetch hooks before the ifs that check error or no data yet
- day 6 and 7: trying to apply functional programming extracting the json data provided by POKE API, using map and filter in conjunction have a good fit (never forget writting right the syntax of map and filter functs)
- day 8: trying to updating the initial state of the whatpkmn variable in whatpkmn page, i have to use 2 useEffect because math.random get a rerender loop if use with other states updates 
- day 9: learning to use chakra ui, a diferent approach to make css, i realize the power using props as css rules, join with react states
- day 10: getting done the last details of pokedex index
- day 11: added responsive with chakra-ui to pokedex index
- day 12: working on compare page 80%, reutilizing components from pokedex, with flags to apply conditional rendering

## reminder

- remember when passing functions as props to child just send the reference like [theprop={handlerX}] or to send arguments use [theprop={()=>handlerX(...args)}]never use [theprop={handlerX()}] <-- this make the function to inmediately being executed in every rerender
- how do you pass data from the child to parent?, using callbacks
- icons react-icons, --GiCompactDisc, --GiCrossedSwords, BsArrowRepeat, --CgArrowUpR, --ImStatsBars, abilites: TbHierarchy2, add pkmn: RiAddCircleLine, GiWeightScale, CgFormatLineHeight, types: BiIntersect - BsIntersect, page compare: MdCompare, page whatpkmn: BsQuestionSquareFill - BsQuestionDiamond - GiDominoMask - FaMask, details: TbListDetails
- make children relative to parent #parent{position:relative} #children{postion:absolute,top:0...} [more](https://stackoverflow.com/questions/5209814/can-i-position-an-element-fixed-relative-to-parent)
- to do: add evolution arrow with triggers, history of compared pkmns (localstorage), change the bg color of pokedex depends of pkmn type
