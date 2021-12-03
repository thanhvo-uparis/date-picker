import css from './App.css';
import Header from './components/header/Header';
import DateInput from './components/date/DateInput';

function App () {
  return(
    <div className="app-container">
    <Header/>
    <DateInput/>
    </div>
)
}

export default App;

/*
const Header = () => (
  <p>Hello word</p>
)

export default Header;
*/

/*
const App = () => (
  <div>
    <Header/>
  </div>
)
*/