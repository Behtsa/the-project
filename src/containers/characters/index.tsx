import React, { useState } from 'react';
import Characters from '../../components/characters/index';
import Sidebar from '../../components/sidebar/index';
import './index.scss';

const CharacterContainer = () => {

    const [state, setState] = useState({});

    return (
        <div className="character__container">
            <Sidebar />
            <Characters />
        </div>
    );
}

export default CharacterContainer;
