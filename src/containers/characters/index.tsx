import React, { useEffect, useState } from 'react';
// Components
import Characters from '../../components/characters/index';
import Loader from '../../components/loader';
import PopUp from '../../components/popup';
import Sidebar from '../../components/sidebar/index';
import Pagination from '../../components/pagination';
// Services
import ApiService from '../../services/api.service';
import './index.scss';

const CharacterContainer = () => {

    const apiService = new ApiService();

    const [state, setState] = useState({
        isLoading: false,
        isError: false,
        info: {},
        results: []
    });

    // const fn = async (time, label) => {
    //      await new Promise((res) => setTimeout(res, time));
    //      return label;
    //  }

    const closePopUp = () => setState({...state, isError: !state.isError})
    

    const getCharacters = async (selectedPage?: string) => {
        try {
            setState({...state, isLoading: true});
            const characters =  await apiService.getCharacters(selectedPage);
            // const characters = await Promise.race([fn(100000, "p1"), fn(500000, "p2")])
            setState({
                ...state,
                isLoading: false,
                results: characters.data.results
            });
        } catch(error) {
            setState({...state, isLoading: false, isError: true});
        }
    }

    useEffect(() => {
        // TO DO: Add cache or session storage
        getCharacters();
    }, []);

    return (
        
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
            <Pagination info={state.info} getCharactersPerPage={getCharacters}/>
        </div>
    );
}

export default CharacterContainer;
