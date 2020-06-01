import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { useSpring, animated } from 'react-spring'
import logo from './assets/logo.png'
import rocket from './assets/rocket.svg'
import logoLooking from './assets/logo-looking.png'
import cursor from './assets/cursor.svg'
import BASH2 from './assets/bash2.svg'
import ClientsMessenger from './assets/clients-main-messenger.svg'
import signSmartphone from './assets/sign-smartphone.svg'
import signDesktop from './assets/sign-desktop.svg'
import signPlan from './assets/sign-plan.svg'
import illimani from './assets/illimani2.svg'



// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const url2 = (name, wrap = false) => `${wrap ? 'url(' : ''}../assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>


//Vertical
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

class App extends React.Component {

  
  render() {

    //Responsive
    //const isLaptopOrMobile = useMediaQuery({ query: '(max-width: 792px)' })

    return (
      
      <Parallax ref={ref => (this.parallax = ref)} pages={3} >
        <ParallaxLayer offset={1} speed={1} factor={2} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} factor={2} style={{ backgroundColor: '#87BCDE' }}/>

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '30%', marginLeft: '60%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>


        //Earth
        <ParallaxLayer offset={2.4} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={illimani} style={{ width: '200%' }} />
        </ParallaxLayer>

        
        //Logo
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          onClick={() => window.location.href='m.me/114241380306917'}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? <img src={logo} style={{ width: '70%' }}/>
                : <img src={logoLooking} style={{ width: '70%' }}/>
            }
        </MediaQuery>     
        </ParallaxLayer>
      

        //Smartphone
        <ParallaxLayer
          offset={0.95}
          speed={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer'}}
          onClick={() => window.location.href='m.me/114241380306917'}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? null
                : <img src={signSmartphone} style={{ width: '80%'}}/>
            }
        </MediaQuery>     
        </ParallaxLayer>


        //Computadora
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer'}}
          onClick={() => window.location.href='m.me/114241380306917'}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? null
                : <img src={signDesktop} style={{ width: '70%'}}/>
            }
        </MediaQuery>     
        </ParallaxLayer>

        //Asesoramiento
        <ParallaxLayer
          offset={1.95}
          speed={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer'}}
          onClick={() => window.location.href='m.me/114241380306917'}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? null
                :  <img src={signPlan} style={{ width: '70%' }} />
            }
        </MediaQuery>     
        </ParallaxLayer>
        
        //Cohete
        <ParallaxLayer
          offset={1}
          speed={3}
          style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}
          >

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? <img src={rocket} style={{ width: '20%', height: '60%', marginLeft: '5%' }}/>
                : <img src={rocket} style={{ width: '40%', height: '80%', marginLeft: '5%'}}/>
            }
        </MediaQuery>     
        </ParallaxLayer>
        

        //Contactanos

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer'}}
          onClick={() => window.location.href='m.me/114241380306917'}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? <img src={ClientsMessenger} />
                : <img src={ClientsMessenger} />
            }
        </MediaQuery>     
        </ParallaxLayer>

        
        //Cursor    
        <ParallaxLayer
          offset={3.2}
          speed={0.9}
          style={{ display: 'flex', alignItems: 'right', justifyContent: 'right' }}>

        <MediaQuery minDeviceWidth={1200}>
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
              matches
                ? <img src={cursor} style={{ width: '10%', marginLeft:'40%'}}/>
                : <img src={cursor} style={{ width: '20%', marginLeft:'40%'}}/>
            }
        </MediaQuery>     
        </ParallaxLayer>

        /Messenger
        <ParallaxLayer
          offset={3}
          speed={-1}
          style={{ display: 'flex', alignItems: 'right', justifyContent: 'right', cursor:'pointer' }}
          onClick={() => window.location.href='https://m.me/114241380306917'}>
          <div class="fb-messengermessageus" 
            messenger_app_id="<APP_ID>" 
            page_id="<PAGE_ID>"
            color="<blue | white>"
            size="<standard | large | xlarge>">
          </div>
        </ParallaxLayer>

        

    

      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

