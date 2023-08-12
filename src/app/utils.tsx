import PokeAPI, {IPokemon} from "pokeapi-typescript";
import { create } from 'zustand';

const pokemonTeamIds = [1, 2, 3, 4, 5, 6]

export async function getMyPokemonTeam () {
    return await Promise.all(pokemonTeamIds.map(id => PokeAPI.Pokemon.fetch(id)))
}

export const heartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
export const attackIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

interface IPokemonStore {
    pokemon: IPokemon | null
    change: (pokemon: IPokemon) => void
}
export const usePokemonStore = create<IPokemonStore>((set) => ({
    pokemon: null,
    change: (pokemon) => set(() => ({ pokemon })),
}));


