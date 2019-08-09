import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addNum,removeNum,removeAsync } from './redux4'

class App extends Component {
  render(){

  
  	console.log(this.props)
    return (
      <div>
          <h2>hello redux</h2>
          <br />
          <hr/>
          <h3>{this.props.xyz}</h3>
          <br />
          <hr/>
          <input type="button" defaultValue = {'增加'} onClick = {()=>{
          		this.props.addNum()
          }}/>
          <br/>
          <hr/>
            <input type="button" defaultValue = {'删减'} onClick = {()=>{
          		
          		this.props.removeNum()
          }}/>
          <br/>
          <hr/>
           <input type="button" defaultValue = {'异步删减'} onClick = {()=>{
          		
          		this.props.removeAsync()
          }}/>

      </div>
    )
  }
}

	

const mapStateProps = (state) => {

	return {xyz:state}
}

const mapDispatchToProps = {addNum,removeNum,removeAsync}

App = connect(mapStateProps,mapDispatchToProps)(App)



export default App;
