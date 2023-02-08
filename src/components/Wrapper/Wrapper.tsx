import React, { FC } from 'react'
import { WrapperPropType } from '../../types/wrapperType'



export function Wrapper(props: WrapperPropType) {
  return (
    <div className="m-auto max-w-[768px] px-6 pb-6">
      {props.children}
    </div>
  )
}
