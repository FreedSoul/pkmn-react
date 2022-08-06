# Hi this a pokedex app

I created the app to search, interesting and valuable info about pokemons to play pkmn games,
in a much more concise way avoiding interesting, but not relevant info to play

## [Credits to evan liaw for the background images](https://evanliaw.com/)

## challenges

- day 1: struggle using swr fetcher function, call directly a function instead of saving the function in the variable __const fetcher__
- day 2: struggle with swr to do a sequencial fetching in two diferent components, i resolved to join the components in 1, i try to fetch then fetch again, with some info from the first fetch, but reading POKE-API documentation, comparing what i want to do and the structure of the api, it was unnecessary (refetching), reading the swr docs found the [conditional fetching](https://swr.vercel.app/docs/conditional-fetching), then i use the named data destructured to fetch all the info in one go
- day 3: i couldnt make work the conditional fetching until i use a checking if, for every named data [pkmn,species,evolution]  
