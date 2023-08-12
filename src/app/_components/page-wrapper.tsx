'use client'
import {IPokemon} from "pokeapi-typescript";

export default function TeamStats({pokemons}: {pokemons: IPokemon[]}) {
    return <div>{pokemons.length}</div>
}