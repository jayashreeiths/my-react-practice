import React,{useState} from 'react'
function CountComponent(){
	const initialvalue=1;
const[count,setcount]=useState(initialvalue)
const incrementFive=()=>{
for (let i=0;i<5;i++)
{
setcount(prevcount=>prevcount+1)
}
}
	return(
<div>
	count{count}
	<button onClick={()=>setcount(initialvalue)}>Reset</button>
	<button onClick={()=>setcount(prevcount=>prevcount+1)}>Increment</button>
	<button onClick={()=>setcount(prevcount=>prevcount-1)}>Decrement</button>
	<button onClick={incrementFive}>Increment5</button>
	<button onClick={()=>setcount(prevcount=>prevcount*2)}>Multiply 2</button>
	<button onClick={()=>setcount(prevcount=>prevcount)}>Previous Value</button>
</div>
	)
}
export default CountComponent