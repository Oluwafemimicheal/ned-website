import React from 'react'
import { Button, buttonVariants } from './components/ui/button'

const App = () => {
  return (
    <div>
      <Button className={buttonVariants({ variant: 'ghost' })} >Click</Button>
    </div>
  )
}

export default App
