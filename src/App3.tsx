import React from 'react'
import { useDispatch , useSelector} from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators,State } from './state';

const App3 = () => {

    const dispatch = useDispatch();

    const {depositMoney,withdrawMoney,bankrupt} = bindActionCreators(actionCreators,dispatch)

    const amount = useSelector((state:State)=>state.bank)
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={()=>{depositMoney(1000)}}>deposit</button>
            <button onClick={()=>{withdrawMoney(500)}}>withdraw</button>
            <button onClick={()=>{bankrupt()}}>bankrupt</button>
        </div>
    )
}

export default App3
