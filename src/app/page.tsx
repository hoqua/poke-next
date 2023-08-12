import {attackIcon, getMyPokemonTeam, heartIcon} from "@/app/utils";
import TeamNavigation from "./_components/team-navigation";
import PokemonCard from "@/app/_components/pokemon-card";
import TotalStat from "@/app/_components/total-stat";
import BestPokemon from "@/app/_components/best-pokemon";
import TeamSize from "@/app/_components/team-size";
import PageWrapper from "@/app/_components/page-wrapper";

export default async function Home() {
  const pokemons = await getMyPokemonTeam()

  return <PageWrapper pokemons={pokemons}/>
}


