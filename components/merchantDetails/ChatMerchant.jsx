import Script from 'next/script'
import React from 'react'

const ChatMerchant = () => {
  return (
    <div className='justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none bg-[#0009]'>
        <div className='h-full w-full flex justify-center items-center '>
            <div id='tawk_55c6190f73fe77791185ffa1'></div>
            <Script id="tawk" strategy="lazyOnload">
            {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_55c6190f73fe77791185ffa1';
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/55c6190f73fe77791185ffa1/1gebo876v';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);})();

            `}
            </Script>
            </div>
    </div>
  )
}

export default ChatMerchant