'use client'
import TeamNavigation from "@/app/_components/team-navigation";
import PokemonCard from "@/app/_components/pokemon-card";
import PageWrapper from "@/app/_components/page-wrapper";
import {IPokemon} from "pokeapi-typescript";

export default function PokemonTeam({pokemons}: {pokemons: IPokemon[]}){
  return (
      <div className="grid grid-cols-3 h-screen items-center p-8">
          <TeamNavigation pokemons={pokemons} />
          <PokemonCard pokemon={pokemons[0]} />
          <PageWrapper pokemons={pokemons} />
      </div>
  )
}