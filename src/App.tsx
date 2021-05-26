import Header from './components/header';
import CharacterContainer from './containers/characters';
import { SelectedCharacterContextProvider } from './context-provider/selected-character-context';

const App = () => (
  <div className="App">
    <SelectedCharacterContextProvider>
      {/* <Header /> */}
      <CharacterContainer />
    </SelectedCharacterContextProvider>
  </div>
)

export default App;
