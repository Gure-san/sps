import React from 'react';
import { LabelPropType, labelType } from '../../types/labelType';

function UnstyledLabel({style, children = 'Label Text'}: LabelPropType) {
  return (
    <div className={`w-max px-4 py-2 mr-4 text-sm font-semibold rounded-md border ${style}`}>
      {children}
    </div>
  )
}

export function Label({group, children}: LabelPropType): React.ReactElement {
  let labelStyle;

  switch(group) {
    case labelType.PRESENT :
      labelStyle = {
        background: 'bg-green-100',
        text: 'text-green-900',
        borderColor: 'border-green-200'
      } 
      break;

    case labelType.PERMISSION :
      labelStyle = {
        background: 'bg-yellow-100',
        text: 'text-yellow-900',
        borderColor: 'border-yellow-200'
      }
      break;

    case labelType.ABSENT :
      labelStyle = {
        background: 'bg-white',
        text: 'text-dark-900',
        borderColor: 'border-dark-100'
      }
      break;

    case labelType.LATE : 
      labelStyle = {
        background: 'bg-red-100',
        text: 'text-red-900',
        borderColor: 'border-red-200'
      }
      break;
  }

  return (
    <UnstyledLabel group={group} style={`${labelStyle?.background} ${labelStyle?.text} ${labelStyle?.borderColor}`}>
      {children}
    </UnstyledLabel>
  )
}
