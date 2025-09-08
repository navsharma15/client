import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* Chat Header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
        <p className="text-white font-medium flex items-center gap-2">
          Martin Johnson
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
        </p>

        {/* Back button (mobile only) */}
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden max-w-7 cursor-pointer ml-auto"
        />

        {/* Help icon (hidden on mobile) */}
        <img
          src={assets.help_icon}
          alt=""
          className="max-md:hidden max-w-5 ml-auto"
        />
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== "680f50e4f10f3cd28382ecf9" && "flex-row-reverse"
            }`}
          >
            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}

            {/* Avatar + Time */}
            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? assets.avatar_icon
                    : assets.profile_martin
                }
                alt=""
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

     {/* search area  */}
<div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
  <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
    <input type="text" placeholder="Send a Message" className='flex-1 text-sm p-3 border-none rounded-lg utline-none
    text-white palceholder-gray -400'/>
    <input type="file" id='image' accept='image/png ,image/jpeg' hidden/>
    <label htmlFor="image">
      <img src={assets.gallery_icon} alt="" className="w-5 mr-2
      cursor-pointer"/>
    </label>
  </div>
<img src={assets.send_button} alt="" className="w-7 cursor-pointer"/>
</div>

    </div>
  ) : (
    // Default Screen (no user selected)
    <div className="flex flex-col items-center justify-center gap-3 text-gray-500 bg-white/10 h-full max-md:hidden">
      <img src={assets.logo_icon} className="w-16" alt="Logo" />
      <p className="text-lg font-medium text-white">Chat Anytime, Anywhere</p>
    </div>
  );
};

export default ChatContainer;
