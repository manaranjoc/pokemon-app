import React from "react";
import {useSelector} from "react-redux";
import styles from "./PokemonDetail.module.css";


export function PokemonDetail() {

    const { pokemonSelected } = useSelector(state => state.pokemonSelected);

    let content;

    if (pokemonSelected !== undefined) {
        content = (
           <div className={styles.modalBackground}>
               <div className={styles.modal}>
                   <div>
                       <h3>{pokemonSelected.name}</h3>
                   </div>
                   <hr/>
                   <div>
                       {pokemonSelected.description}
                   </div>
                   <hr/>
                   <div>
                        <div>
                            <h4>Height</h4>
                            <p>
                                {pokemonSelected.height}
                            </p>
                        </div>
                       <div>
                           <h4>Weight</h4>
                           <p>
                               {pokemonSelected.weight}
                           </p>
                       </div>
                       <div>
                           <h4>Abilities</h4>
                           <ul>
                               {pokemonSelected.abilities.map((ability) =>{
                                   return (<li key={ability.slot}>{ability.ability.name}</li>)
                               })}
                           </ul>
                       </div>
                       <div>
                           <h4>Type</h4>
                           <ul>
                               {pokemonSelected.types.map((type) =>{
                                   return (<li key={type.slot}>{type.type.name}</li>)
                               })}
                           </ul>
                       </div>
                   </div>
                   <hr/>

               </div>
           </div>
        );
    } else {
        content = null;
    }

    return (
        <div>
            {content}
        </div>
    )

}