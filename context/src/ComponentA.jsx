  import React, {useContext} from 'react'
  import { MyContext } from './context'

  export const ComponentA = () => {
    const [state, setState] = useContext(MyContext)  
    return (
      <div>
        <h1>
          {state}
          <button onClick={() => setState('Hello')}>click</button>
        </h1>
      </div>
    )
  }
