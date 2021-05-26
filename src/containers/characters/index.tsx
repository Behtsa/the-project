import React, { useEffect, useState } from 'react';
// Components
import Characters from '../../components/characters/index';
import Sidebar from '../../components/sidebar/index';
// Services
import ApiService from '../../services/api.service';
import './index.scss';

const CharacterContainer = () => {

    const apiService = new ApiService();

    const [state, setState] = useState({
        info: {},
        results: []
    });

    const getCharacters = async () => {
        try {
            const characters = await apiService.getAllCharacters();
            setState({
                ...state,
                results: characters.data.results
            })
        } catch(error) {

        }
    }

    useEffect(() => {
        // TO DO: Add cache or session storage
        getCharacters();
    }, []);

    return (
        <div className="character__container">
            <Sidebar />
            {state.results ? 
                <Characters characters={state.results}/>
                : null
            }
        </div>
    );
}

export default CharacterContainer;
