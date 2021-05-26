import React, { useContext } from 'react';
import { SelectedCharacterContext } from '../../context-provider/selected-character-context';
import './index.scss';

const Characters = ({characters}): React.ReactElement => {

    const [selectedCharacter, setNewCharacter] = useContext(SelectedCharacterContext);

    return(
        <div className="characters__container">
            {characters.map( (character, index) => (
                <div key={character+index} className="characters__container__item" 
                onClick={() => setNewCharacter(character)}>
                    <img src={character.image} alt={character.name}/>
                    <div>
                        <p>{character.name}</p>
                    </div>
                </div>
                ))
            }
        </div>
    );
}

export default Characters;
