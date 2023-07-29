import React from "react"

const FacebookPluggin = () => {
  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
      <div 
        class="zalo-chat-widget" 
        data-oaid="3473601869890654178" 
        data-welcome-message="Rất vui khi được hỗ trợ bạn!" 
        data-autopopup="0" 
        data-width="" 
        data-height="">
          <iframe 
            frameborder="0" 
            allowfullscreen="" 
            scrolling="no" 
            width="60"
            height="60" 
            src="https://page.widget.zalo.me/?position=null&amp;oaid=3473601869890654178&amp;welcomemessage=R%E1%BA%A5t%20vui%20khi%20%C4%91%C6%B0%E1%BB%A3c%20h%E1%BB%97%20tr%E1%BB%A3%20b%E1%BA%A1n!&amp;autopopup=0&amp;leftside=false&amp;width=440&amp;height=813&amp;style=2&amp;id=789c1125-bfe3-437c-9474-f563a12b0950&amp;domain=nonbaohiemst&amp;android=false&amp;ios=false" style="max-height: 90vh; position: absolute; bottom: 0px; right: 0px;"></iframe>
        </div>
    </>
  )
}

export default FacebookPluggin
