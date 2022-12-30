import Contenido  from './components/contenido';
import { ItemListContainer } from './components/ItemListContainer';
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

function App() {
  return (
      <Layout> 
        <ItemListContainer />
          <Contenido /> 
        </Layout>  
  );
}

export default App;
