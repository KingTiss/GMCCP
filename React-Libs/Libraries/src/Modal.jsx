import React, { useState } from 'react'

export default function NotificationDemo() {
    const [notification, setNotification] = useState("")

    const showNotification = (type) => {
      setNotification(type);
      setTimeout(()=> setNotification("",3000));
    }
  
  
  return (
    <div className='flex gap-2 '><button className="btn btn-active btn-info">Info</button>
    <button className="btn btn-active btn-success"onClick={()=> showNotification("success")}>Success</button>
    <button className="btn btn-active btn-warning">Warning</button>
    <button className="btn btn-active btn-error">Error</button></div>

    
  )
}
 