import React, {useContext} from 'react'
import { MyContext } from '../ccontext'
import { ComponentC } from './componentC'


export const ComponentA = () => {
  const [state,setState] = useContext(MyContext)
  return (
    <div>
      <ComponentC/>
      <span>{state+`1`}</span>
      <button onClick={()=> setState('qweqweqweqwe')}>click</button>
    </div>
    
  )
}
