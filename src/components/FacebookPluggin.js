import React from "react"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookPluggin = () => {

  return (
    <div>
      {typeof window !== 'undefiend' && <MessengerCustomerChat
        pageId="103170092237571"
        appId="5345237808874287"
      />}
    </div>
  )
}

export default FacebookPluggin
