import './App.css'
import Navbar from "./components/Navbar"
import ListItems from "./containers/ListItems"
import { Provider } from 'react-redux'
import { store } from './state'

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <ListItems />
    </div>
    </Provider>
  )
}

export default App