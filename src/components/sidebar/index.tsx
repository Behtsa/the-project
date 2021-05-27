import React, { useContext } from 'react';
import { SelectedCharacterContext } from '../../context-provider/selected-character-context';
import './index.scss';

const Sidebar = (): React.ReactElement => {

    const [selectedCharacter, setNewCharacter] = useContext(SelectedCharacterContext);

    return (
        <div className="sidebar">
            <div className="sidebar__image__wrapper">
                <img className="sidebar__image" src={selectedCharacter.image} alt={selectedCharacter.name}/>
            </div>
            <div className="sidebar__title">
                <p>{`${selectedCharacter.name}`}</p>
            </div>
            <div className="sidebar__content">
                <p>
                    <span className="sidebar__label">Status </span> 
                    <span className={`sidebar__status sidebar__status--${selectedCharacter.status}`}></span> 
                    {`${selectedCharacter.status}`}
                </p>
                <p>
                    <span className="sidebar__label">Species </span> 
                    {`${selectedCharacter.species}`}
                </p>
                <p>
                    <span className="sidebar__label">Type </span> 
                    {`${selectedCharacter.type}`}
                </p>
                <p>
                    <span className="sidebar__label">Gender </span> 
                    {`${selectedCharacter.gender}`}
                </p>
                <p>
                    <span className="sidebar__label">Episodes </span> 
                    {`${selectedCharacter.episode.length}`}</p>
            </div>
        </div>
    );
}

export default Sidebar;