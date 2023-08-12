'use client'
import {IPokemon} from "pokeapi-typescript";
import Image from "next/image";

export default function BestPokemon({ pokemons }: { pokemons: IPokemon[] }) {
    const highest = pokemons.sort((a, b) => b.stats[1].base_stat -  a.stats[1].base_stat)[0]

    return (
        <div className="stat hover:shadow-lg cursor-pointer">
            <div className="stat-figure text-secondary">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <Image src={(highest.sprites as any).other.dream_world.front_default} width={50} height={50} alt="pokemon"/>
                    </div>
                </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">MVP</div>
            <div className="stat-desc text-secondary">31 wins</div>
        </div>
    )
}