import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
// import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import NewOrders from './components/NewOrders';
import OutForDelivery from './components/OutForDelivery';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path='/' exact render={ (props) =>
      (
        <div className="homePage">
          {/* <ul>
            <li></li>
            <li></li>
          </ul> */}
          <NewOrders />
          <OutForDelivery />
        </div>
      )
      } />
      {/* <Route path="/about" component={AboutUs} /> */}
      <Route path="/contact" component={Contacts} />
      <Route path="/addnew" 
      component={AddProduct} 
       />
      <Route path="/products" component={Products} />
      <Route path="/editProd" render={(props)=><EditProduct {...props} /> } />
      </Switch>
    </div>
    </Router>
    // <div className="App">
    //   <h1>App page</h1>
    // </div>
  );
}


export default App;
