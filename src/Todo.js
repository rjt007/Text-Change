import React, { useState } from 'react';
import './index.css';

const Todo = ()=>{

    const [num, newnum] = useState(0);
    const increase = ()=>{
        newnum(num+1);
    }
    const decrease = ()=>{
        if(num>0)
        {
            newnum(num-1);
        }
        else{
            alert("Sorry!! Can't be less than 0.");
        }
    }
    return(<>
    <div className="maindiv">
        <div className="numdiv">
            <h1>{num}</h1>
        </div>
        <div className="buttondiv">
            <div className="buttoninc">
            <button onClick={increase}>Increase</button>
            </div>
            <div className="buttondec">
            <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    </div>
    </>)
}

export default Todo;