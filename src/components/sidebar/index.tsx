import React, { useContext } from 'react';
import { SelectedCharacterContext } from '../../context-provider/selected-character-context';
import './index.scss';

const Sidebar = (): React.ReactElement => {

    const [selectedCharacter, setNewCharacter] = useContext(SelectedCharacterContext);

    return (
        <div className="sidebar__container">
            <div className="sidebar__container--fixed">
                <div>
                    <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                    <p>Name: {`${selectedCharacter.name}`}</p>
                    <p>Status: {`${selectedCharacter.status}`}</p>
                </div>
                <div>
                    <p>Species: {`${selectedCharacter.species}`}</p>
                    <p>Type: {`${selectedCharacter.type}`}</p>
                    <p>Gender: {`${selectedCharacter.gender}`}</p>
                </div>
                <div>
                    <div></div>
                    <p>First seen in: {`${selectedCharacter.origin.name}`}</p>
                    <p>Last known character location: {`${selectedCharacter.location.name}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;