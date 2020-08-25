import React from 'react';
import CharacterItem from '../CharacterGrid/CharacterItem';
import Spinner from '../UI/Spinner';

const CharacterGrid = (props) => {
    return props.loading ? (<Spinner />) : (<section className='cards'>{props.characters.map(character => (
        <CharacterItem key={character.char_id} character={character}></CharacterItem>
    ))}</section>
    )
}

export default CharacterGrid
