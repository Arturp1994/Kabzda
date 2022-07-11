import React, {useState} from "react";

export default {
  title: "React.memo demo"
}

const Counter =(props: { count:number })=>{
  return <div>{props.count}</div>
}

const UsersSecret =(props: { users: Array<string> })=>{
  return <div>{props.users.map((u, i)=><div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Exampel = ()=>{
  const [counter, setCounter] = useState(0)
  const [user, setUsers] = useState(['Artur','Dima', 'Vika'])

return <>
  <button onClick={()=>setCounter(counter + 1)}>+</button>
  <Counter count={counter}/>
  <Users users={user}/>
</>
}