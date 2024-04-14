import React from 'react'
import { Address, Resturent } from './model/resturent'

interface OwnProps {
    info: Resturent,
    changeAddress(address:Address):void
    
}

const Store:React.FC<OwnProps> = ({info, changeAddress}) => {
  return (
    <div>
        {info.name}
    </div>
  )
}

export default Store