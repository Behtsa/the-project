import React, { useEffect, useState } from 'react';
// Components
import Characters from '../../components/characters/index';
import Loader from '../../components/loader';
import PopUp from '../../components/popup';
import Sidebar from '../../components/sidebar/index';
import Pagination from '../../components/pagination';
// Services
import ApiService from '../../services/api.service';
import SessionStorageService from '../../services/session-storage.service';
import './index.scss';

const CharacterContainer = () => {

    const apiService = new ApiService();
    const sessionStorageService = new SessionStorageService();

    const [state, setState] = useState({
        isLoading: false,
        isError: false,
        info: {},
        results: []
    });

    const closePopUp = () => setState({...state, isError: !state.isError})
    

    const getCharacters = async (selectedPage?: string) => {
        try {
            setState({...state, isLoading: true});
            const characters = await apiService.getCharacters(selectedPage);
            setState({
                ...state,
                isLoading: false,
                results: characters.data.results,
                info: characters.data.info
            });
        } catch(error) {
            setState({...state, isLoading: false, isError: true});
        }
    }

    useEffect(() => {
        if (state.results && state.results.length > 0) {
            const charactersFromStorage = sessionStorageService.getSessionItem();
            setState({
                ...state, 
                results: charactersFromStorage.results, 
                info: charactersFromStorage.info
            })
        } else {
            getCharacters();
        }
    }, []);

    useEffect(() => {
        sessionStorageService.saveInfoInStorage({
            info: state.info,
            results: state.results
        })
    }, [state.results, state.info])

    return (
        <div>
            <div className="character__container">
                {state.isLoading ?  <Loader /> : null}
                {state.isError ?  
                    <PopUp popUpTitle="Oops!" imgSrc="errorRickMorty.jpeg" closePopUp={closePopUp}/> 
                : null}
                <Sidebar />
                {state.results ? 
                    <Characters characters={state.results}/>
                    : null
                }
            </div>
            <Pagination info={state.info} getCharactersPerPage={getCharacters}/>
        </div>
    );
}

export default CharacterContainer;
