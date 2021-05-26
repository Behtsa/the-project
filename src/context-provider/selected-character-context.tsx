import { useState, createContext } from 'react';

export const SelectedCharacterContext = createContext([] as any); // Todo agregar el array type

export const SelectedCharacterContextProvider = ({ children }) => {
    const [selectedCharacter, setNewCharacter] = useState({
        id: null,
        name: '',
        status: '',
        species: '',	
        type: '',
        gender: '',
        origin: {
            name: '',
            link: ''
        },
        location: {
            name: '',
            link: ''
        },
        image: '',
        episode: [],
        url: '',
        created: ''
    });

    return (
        <SelectedCharacterContext.Provider value={[selectedCharacter, setNewCharacter]}>
            { children }
        </SelectedCharacterContext.Provider>
    );
};
