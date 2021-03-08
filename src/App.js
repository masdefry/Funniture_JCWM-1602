import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Register from './Pages/Register'
import CreatePassword from './Pages/CreatePassword'
import CatalogProducts from './Pages/CatalogProducts'
import DetailProduct from './Pages/DetailProduct'

// CSS
import './Supports/Stylesheets/Utils.css'
import './Supports/Stylesheets/LandingPage.css'
import './Supports/Stylesheets/CatalogPage.css'

export default class App extends React.Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/register' component={Register} />
            <Route path='/create-password' component={CreatePassword} />
            <Route path='/products' component={CatalogProducts} />
            <Route path='/detail-product/:idProduct' component={DetailProduct} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}
