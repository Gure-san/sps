import React, { FC } from 'react'
import { WrapperPropType } from '../../types/wrapperType'



export function Wrapper(props: WrapperPropType) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}
