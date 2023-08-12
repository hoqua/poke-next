'use client'
import {IPokemon} from "pokeapi-typescript";

export default function TeamSize({pokemons}: {pokemons: IPokemon[]}){

    return (
        <div className="stats">
            <div className="stat">
                <div className="stat-title">Total Team Size</div>
                <div className="stat-value">{pokemons.length}</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
        </div>
    )
}