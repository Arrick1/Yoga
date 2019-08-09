import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';




/* <------- Imported Components -------> */
import * as routes from './constants/routes'
import Home from './components/Home'





/* <------- Styling & Animations -------> */
import './App.css';
import { useTransition, animated } from 'react-spring'




const App = () => {

  const { location } = useContext(__RouterContext)

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)"  },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  })
    return(
        <div className="grid-main">
          {transitions.map(({ item, key, props }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>

                <Route exact path={routes.HOME} render={() => <Home/>}/>

              </Switch>

            </animated.div>
          ))}
          </div> 
    )
  }



export default App;
