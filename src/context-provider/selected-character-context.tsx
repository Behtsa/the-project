import { useState, createContext } from 'react';

export const SelectedCharacterContext = createContext([] as any); // Todo agregar el array type

export const SelectedCharacterContextProvider = ({ children }) => {
    const [selectedCharacter, setNewCharacter] = useState({
        id: null,
        name: 'Monserrat González',
        status: 'Alive',
        species: 'Human',	
        type: 'Human',
        gender: 'Female',
        origin: {
            name: '',
            link: ''
        },
        location: {
            name: '',
            link: ''
        },
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQFCFHZ8jCIsKA/profile-displayphoto-shrink_800_800/0/1523332968541?e=1627516800&v=beta&t=VtoQ2C1ATAZiUk6GXMaiqdBu8wJ8ZJj3Fo4PgOanJnI',
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
