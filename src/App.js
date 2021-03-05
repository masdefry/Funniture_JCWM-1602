import React from 'react'

import Navbar from './Components/Navbar'
import LandingPage from './Pages/LandingPage'

// CSS
import './Supports/Stylesheets/Utils.css'
import './Supports/Stylesheets/LandingPage.css'
import Footer from './Components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './Pages/Register'
import CreatePassword from './Pages/CreatePassword'
import CatalogProducts from './Pages/CatalogProducts'
import DetailProduct from './Pages/DetailProduct'

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
