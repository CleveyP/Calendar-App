
import './App.css';
import { HeaderLinks } from './components/HeaderLinks/HeaderLinksComponent';
import { SearchBar } from './components/SearchBar/SearchBarComponent';
import { ViewsButton } from './components/ViewsButton/ViewsButtonComponent';

function App() {
  return (
    <div className="App">
      <HeaderLinks/>
      <header>
        <SearchBar/>
        <h1 id="current-month">{"<January 2023>"}</h1>
        <ViewsButton/>
      </header>
      
    </div>
  );
}

export default App;
