import {Home }from './Home';
import { About } from './About';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import { Navbar } from './Navbar';
import { Ordersummary } from './Ordersummary';
import { NoMatch } from './NoMatch';
import {Products} from './Products.js';
import { FeaturedProducts } from './FeaturedProducts';
import { NewProducts } from './NewProducts';
import { Users } from './Users';
import { UserDetails } from './UserDetails';
import { Admin } from './Admin';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='order-summary' element={<Ordersummary/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
      <Route path=':userId' element={<UserDetails />}/>
      <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<NoMatch/>}/>
      
    </Routes>
    </div>
             
  );
}

export default App;
