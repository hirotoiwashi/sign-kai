import React from 'react';
import {useSelector} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import HeaderBeforeLogin from './HeaderBeforeLogin';

import HeaderAfterLogin from './HeaderAfterLogin';

import Login from './Login';
import {selectLoginState} from '../features/users/usersSlice'; 

import Events from './Events';

import ItemDetail from './ItemDetail';

import Cart from './Cart';

import About from './About';
import Policy from './Policy';
import Contact from './Contact';
import Payment from './Payment';
import Shipping from './Shipping';
import FAQ from './FAQ';

import Footer from './Footer';




const App = () => {
  const loginState = useSelector(selectLoginState);
    let Header;
    if(loginState){
      Header = (<HeaderAfterLogin />);
    }else{
      Header = (<HeaderBeforeLogin />);
    }

  const items = useSelector(state => state.items);

  return (
    <BrowserRouter>
    <div className="home-wrapper">
      <div className="home-container">
          {Header}

          <Switch>
            <Route exact path="(/)?" component={Events} />
            <Route exact path="/login" component={Login} />
            {items.map(item => (
              <Route exact path={`/event/id=${item.id}`} key={item.id} render={() => <ItemDetail key={item.id} itemId={item.id} itemTitle={item.title} itemImage={item.image} itemInfo={item.info}/>} />
            ))}
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/about" component={About} />
            <Route exact path="/privacy-policy" component={Policy} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/FAQ" component={FAQ} />
          </Switch>

        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
