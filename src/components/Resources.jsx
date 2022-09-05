import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

export default function Resources() {
  const [keycloak, setKeycloak] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setKeycloak(keycloak)
      setAuthenticated(authenticated)
      console.log('authenticated: ', authenticated, keycloak);
    })
  }, [])

  if (keycloak) {
    if (authenticated) return (
      <div className='my-12 grid place-items-center'>
        <h1>Hello {keycloak.idTokenParsed.name}</h1>
        <div>
          <img src="https://random.imagecdn.app/500/250" />
        </div>
      </div>
    );
    else return (<div className='my-12'>Unable to authenticate!</div>)
  }

  return (
    <>
      <div className='my-12'>Initializing Keycloak...</div>
    </>
  )
}