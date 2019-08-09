import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// Provider 组件  负责数据处理 （容器）

import { createStore,applyMiddleware,compose } from 'redux'
import App from './App';
import thunk from 'redux-thunk'


import { reducer } from './redux4/index'


const devToolsExtension = window.devToolsExtension?window.devToolsExtension():()=>{}

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		devToolsExtension
	)
)


	ReactDOM.render(
		<Provider store={store} >
			<App />, 
		</Provider>,
		
		document.getElementById('root')
	);




