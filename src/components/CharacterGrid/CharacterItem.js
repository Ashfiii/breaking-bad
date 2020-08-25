import React from 'react'

const CharacterItem = (props) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={props.character.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{props.character.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {props.character.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {props.character.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {props.character.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {props.character.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
