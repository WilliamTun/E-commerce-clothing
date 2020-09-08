import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  // Auth Changes starts
  unsubscribeFromAuth = null 

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }

      setCurrentUser({ userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // Auth Changes ends


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage /> 
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/** 
const HomePage = props => {
  console.log(props);
  return(
    <div>
      <Link to='/topics'>Topics</Link>
      <button onClick={() => props.history.push('/topics')}> Topics </button>

      <h1> Home Page </h1>
    </div>
  );
}



const TopicsList = props => (
  <div>
      <h1> Topics List Page </h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/14`}>To Topic 14</Link>
      <Link to={`${props.match.url}/15`}>To Topic 15</Link>

  </div>
);


const TopicDetail = () => (
  <div>
      <h1> Topic Detail Page </h1>
  </div>
);
*/



/** 
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}


            //<Route exact path='/topics' component={TopicsList}/>
            //<Route path='/topics/:topicId' component={TopicDetail}/>
            //<Route exact path='/hats' component={HatsPage}/>

*/
