import React, { Fragment , useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Dashboard/Home';
import '../src/App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);


  return (
    <div className="App">
    {isAuthenticated ? (
      <Home setIsAuthenticated={setIsAuthenticated} />
    ) : (
      <Login setIsAuthenticated={setIsAuthenticated} />
    )}
  </div>
  );
  
}

export default App;
