'use client'
import { IPokemon } from "pokeapi-typescript";
import Image from "next/image";
import {usePokemonStore} from "@/app/utils";

export default function TeamNavigation({pokemons}: {pokemons: IPokemon[]}) {

    const change = usePokemonStore((state) => state.change);

    return (
        <div className="flex flex-col gap-5 pr-6">
            {pokemons.map((pokemon) => (
                <button  key={pokemon.id}  className="btn glass h-24 p-4" onClick={() => change(pokemon)}>
                    <Image src={(pokemon.sprites as any).other.dream_world.front_default} width={60} height={60} alt="pokemon"/>
                    <span className="uppercase">{pokemon.name}</span>
                </button>
            ))}
        </div>
    )
}