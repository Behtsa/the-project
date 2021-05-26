import CharacterContainer from './containers/characters';
import { SelectedCharacterContextProvider } from './context-provider/selected-character-context';

const App = () => (
  <div className="App">
    <SelectedCharacterContextProvider>
      <CharacterContainer />
    </SelectedCharacterContextProvider>
  </div>
)

export default App;
