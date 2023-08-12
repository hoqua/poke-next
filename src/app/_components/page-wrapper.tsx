'use client'
import {IPokemon} from "pokeapi-typescript";
import TeamNavigation from "@/app/_components/team-navigation";
import PokemonCard from "@/app/_components/pokemon-card";
import TeamSize from "@/app/_components/team-size";
import BestPokemon from "@/app/_components/best-pokemon";
import TotalStat from "@/app/_components/total-stat";
import {attackIcon, heartIcon} from "@/app/utils";

export default function PageWrapper({pokemons}: {pokemons: IPokemon[]}) {
    return (
        <div className="grid grid-cols-3 h-screen items-center p-8">
            <TeamNavigation pokemons={pokemons} />

            <PokemonCard pokemon={pokemons[0]} />

            <div className="flex flex-col">
                <TeamSize pokemons={pokemons}></TeamSize>
                <BestPokemon pokemons={pokemons} />
                <TotalStat statId={0} pokemons={pokemons} icon={heartIcon}/>
                <TotalStat statId={1} pokemons={pokemons} icon={attackIcon}/>
                <TotalStat statId={2} pokemons={pokemons} icon={attackIcon}/>
                <TotalStat statId={3} pokemons={pokemons} icon={attackIcon}/>
            </div>
        </div>
    )
}