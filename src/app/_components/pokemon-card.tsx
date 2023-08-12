'use client'
import {IPokemon} from "pokeapi-typescript";
import {usePokemonStore} from "@/app/utils";
import Image from "next/image";

export default function PokemonCard({pokemon}: {pokemon: IPokemon}){
    const currentPokemon = usePokemonStore(state => state.pokemon) || pokemon
    return (
        <div className="flex flex-col items-center gap-8 ">
            <progress className="progress w-56" value={currentPokemon.base_experience} max="300"></progress>

            <div className="h-56">
                <Image src={(currentPokemon.sprites as any).other.dream_world.front_default} width={200} height={200} alt="pokemon" className="h-25"/>

            </div>

            <div className="stats stats-vertical ">

                <div className="stat">
                    <div className="stat-title">Abilities</div>
                    <div className="stat-desc uppercase">{currentPokemon.abilities.map(a => a.ability.name).join(' | ')}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Type</div>
                    <div className="stat-desc uppercase">{currentPokemon.types.map(t => t.type.name).join(' | ')}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Stat</div>
                    <div className="stat-desc uppercase whitespace-pre-wrap">{currentPokemon.stats.map(t => t.stat.name + ': ' + t.base_stat).join(' | ')}</div>
                </div>
            </div>

            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Remove</button>

        </div>
    )
}