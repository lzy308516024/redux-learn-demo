import { createStore } from 'redux'


//reducer 规则 函数  对处理增删改查等 返回 对象state() 
// 就在其他组件能拿到

function reducer(state=0,action){
	switch (action.type){
		case '骑兵营':
			return state+5
		case '意大利炮兵营':
			return state-1
		default: 
			return 0
	}

}
// dispatch 派发


const store = createStore(reducer)  //参数接收一共函数

console.log(store.getState())

function listener(){
	const getCurrent = store.getState()
	console.log(`现在的状态是${getCurrent}`)
}

store.subscribe(listener)

store.dispatch({
	type:'意大利炮兵营',
})

store.dispatch({
	type:'骑兵营',
})