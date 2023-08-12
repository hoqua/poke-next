'use client'
import {IPokemon} from "pokeapi-typescript";
import {ReactNode} from "react";

interface ITotalStatProps {
    pokemons: IPokemon[]
    statId: number
    icon: ReactNode
}

export default function TotalStat(props: ITotalStatProps){
    const { pokemons, statId, icon } = props
    const name = pokemons[0].stats[statId].stat.name
    const total = pokemons.map((pokemon) => pokemon.stats[statId].base_stat).reduce((a, b) => a + b, 0)

    return (
        <div className="stat cursor-pointer hover:shadow-lg " onClick={navigateToStats}>
            <div className="stat-figure text-primary">
                {icon}
            </div>
            <div className="stat-title uppercase">Total {name}</div>
            <div className="stat-value text-primary">{total}</div>
            <div className="stat-desc">{total / 2}% more than last month</div>
        </div>
    )
}

function navigateToStats(){
    console.log('navigate to stats')
}