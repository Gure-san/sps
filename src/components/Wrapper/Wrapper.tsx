import React, { FC } from 'react'
import { WrapperType } from '../../types/wrapperType'



export function Wrapper(props: WrapperType) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}
