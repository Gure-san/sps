import React from 'react';
import { LabelPropType, labelType } from '../../types/components/labelType';

function UnstyledLabel({style, children = 'Label Text'}: LabelPropType) {
  return (
    <div className={`w-max px-4 py-2 mr-4 text-sm font-semibold rounded-md ${style}`}>
      {children}
    </div>
  )
}

export function Label({group, children, noBorder = false}: LabelPropType): React.ReactElement {
  let labelStyle;

  switch(group) {
    case labelType.PRESENT :
      labelStyle = {
        background: 'bg-green-100',
        text: 'text-green-900',
        borderColor: 'border border-green-200'
      } 
      break;

    case labelType.PERMISSION :
      labelStyle = {
        background: 'bg-orange-100',
        text: 'text-orange-900',
        borderColor: 'border border-orange-200'
      }
      break;

    case labelType.ABSENT :
      labelStyle = {
        background: 'bg-slate-100',
        text: 'text-dark-900',
        borderColor: 'border border-dark-100'
      }
      break;

    case labelType.LATE : 
      labelStyle = {
        background: 'bg-red-100',
        text: 'text-red-900',
        borderColor: 'border border-red-200'
      }
      break;
  }

  return (
    <UnstyledLabel group={group} style={`${labelStyle?.background} ${labelStyle?.text} ${noBorder ? '' : labelStyle?.borderColor}`}>
      {children}
    </UnstyledLabel>
  )
}
