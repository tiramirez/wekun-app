import './App.css';
import React from 'react';
import Layout from './components/SurveyLayout';
import SideBarNav from './components/SideNav';
// import { Header } from "reactstrap";

const styles = {
  frame : {
    display:'flex',
  },
  sidebar: {
    minWidth: "200px",
    hight: "100%",
    paddingTop: "100px",
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
  },
  body: {
    width:"60%"
  }
};

function App() {
  return (
      <>
      <h1 className="text-black text-uppercase text-center my-4" style={{justifyContent: 'center'}}>Wekun Survey about Urban Perception</h1>
      <div style={styles.frame}>
        <SideBarNav style={styles.sidebar} />
        <Layout style={styles.body} />
      </div>
      </>
  );
}

export default App;
