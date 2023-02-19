// React
import React from "react"

interface DataContactList {
  name: string,
  phoneNumber: string
}

type ContactItemPropType = {
  name: string | undefined,
  phoneNumber: string | undefined
}

export {
  ContactItemPropType,
  DataContactList
}