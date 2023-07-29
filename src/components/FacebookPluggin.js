import React from "react"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookPluggin = () => {
  return (
    <>
      <div>
        {typeof window !== 'undefiend' && <MessengerCustomerChat
          pageId="103170092237571"
          appId="5345237808874287"
        />}
      </div>
      <div 
        class="zalo-chat-widget" 
        data-oaid="3473601869890654178" 
        data-welcome-message="Rất vui khi được hỗ trợ bạn!" 
        data-autopopup="0" 
        data-width="" 
        data-height=""></div>
    </>
  )
}

export default FacebookPluggin
