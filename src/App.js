import React from 'react'
import Layout from './Components/Layout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faPhone, faMailBulk , faRocket, faTv, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faAddressBook, faPhone, faMailBulk, faRocket, faTv, faHeart, faCoffee)
function App (){
  

  return (
  <div className="App">     
  <Layout />
</div>
  );
}

export default App;
