import { ToDo } from './components/ToDo';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
);

export default App;
