import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import {Cards,Chart,CountryPicker} from './components';
import styles from "./App.module.css";
import {fetchData} from './api/index'

class App extends React.Component{
  componentDidMount()
  {
    const data = await fetchData()
  }
render()
{
  return (
    <div class={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}
   
}
export default App;