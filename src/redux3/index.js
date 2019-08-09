
const ADD_NUM = '意大利炮兵营'
const RM_NUM = '回收意大利炮兵营'
//reducer 规则 函数  对处理增删改查等 返回 对象state() 
// 就在其他组件能拿到

export  function reducer(state=0,action){
	switch (action.type){
		case ADD_NUM:
			return state + 1
		case RM_NUM:
			return state - 1
		default: 
			return 100
	}

}
// dispatch 派发

export function addNum(){
	return {
		type:ADD_NUM
	}
}

export function removeNum() {
	return  {
		type:RM_NUM
	}
}

//异步操作
export function removeAsync(){
	return  (dispatch) => {
		setTimeout(()=>{
			dispatch(removeNum())
		},2500)
	}
		
	
	
}