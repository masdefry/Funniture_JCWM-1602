import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'

// Pages Child 
import Profile from './UserProfile/Profile'
import TransactionHistory from './UserProfile/TransactionHistory'

export default class UserProfile extends React.Component{

    state = {
        isRefresh: false
    }

    render(){
        return(
            <div className='container my-5'>
                <div className="row">
                    <div className="col-12">
                        <Link to='/user-profile/profile'>
                            <button type="button" class="btn btn-warning" onClick={() => this.setState({isRefresh: true})} style={{borderRadius: '50px'}}>Profile</button>
                        </Link>
                        <Link to='/user-profile/transaction-history'>
                            <button type="button" class="btn btn-warning mx-3" style={{borderRadius: '50px'}}>Transaction History</button>
                        </Link>
                        <button type="button" class="btn btn-warning" style={{borderRadius: '50px'}}>Address</button>
                    </div>
                    <div className='col-12 mt-3 border-bottom'>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={LandingPage} />
                                <Route path='/user-profile/profile' component={Profile} />
                                <Route path='/user-profile/transaction-history' component={TransactionHistory} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}