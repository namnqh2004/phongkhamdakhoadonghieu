import { useState } from "react";

const SocialContactWidgets = () => {
  // Trạng thái hiển thị số điện thoại khi click/hover
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  return (
    /* CONTAINER CHÍNH: space-y-6 tạo khoảng cách an toàn, ngăn các nút dính vào nhau */
    <div className="fixed bottom-10 left-6 z-50 flex flex-col space-y-4">
      
      {/* 1. KHU VỰC NÚT ZALO */}
      <div className="relative h-12 w-12 flex items-center justify-center group">
        {/* Vòng sóng lan tỏa - bị giới hạn hoàn toàn trong block h-12 w-12 */}
        <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-blue-500 opacity-25 duration-1000"></span>
        
        <a
          href="https://zalo.me/0975161115" // Thay số Zalo phòng khám vào đây
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <span className="font-black text-xs tracking-tighter">Zalo</span>
        </a>

        {/* Tooltip hiển thị khi hover */}
        <span className="absolute left-16 scale-0 rounded bg-gray-900 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap font-medium shadow-md">
          Chat Zalo với chúng tôi
        </span>
      </div>

      {/* 2. KHU VỰC NÚT FACEBOOK MESSENGER */}
      <div className="relative h-12 w-12 flex items-center justify-center group">
        {/* Vòng sóng lan tỏa */}
        <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-cyan-500 opacity-25 duration-1000"></span>
        
        <a
          href="https://m.me/pkdkdonghieu" // Thay link fanpage vào đây
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#0066ff] to-[#00c6ff] text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.145 2 11.257c0 2.913 1.453 5.513 3.734 7.234V22l3.359-1.844c.915.253 1.884.391 2.907.391 5.523 0 10-4.145 10-9.257S17.523 2 12 2zm1.093 11.93-2.525-2.7-4.931 2.7 5.419-5.753 2.59 2.7 4.866-2.7-5.419 5.753z"/>
          </svg>
        </a>

        <span className="absolute left-16 scale-0 rounded bg-gray-900 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap font-medium shadow-md">
          Nhắn tin Facebook
        </span>
      </div>

      {/* 3. KHU VỰC NÚT ĐIỆN THOẠI HOTLINE (ĐỨNG YÊN) */}
      <div className="relative h-12 w-12 flex items-center justify-center group">
        {/* Vòng sóng lan tỏa */}
        <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-emerald-500 opacity-25 duration-1000"></span>
        
        <a
          href="tel:02383xxxxxx" // Thay số Hotline phòng khám vào đây
          onMouseEnter={() => setShowPhoneTooltip(true)}
          onMouseLeave={() => setShowPhoneTooltip(false)}
          onClick={() => setShowPhoneTooltip(!showPhoneTooltip)}
          /* Đã loại bỏ class "animate-[wiggle...]" -> Nút sẽ đứng yên hoàn toàn */
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#16a748] text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Khung hiển thị Số Điện Thoại bung ra mượt mà từ cạnh bên */}
        <div className={`absolute left-16 bg-white border border-emerald-100 rounded-xl py-1.5 px-3.5 shadow-xl transition-all duration-300 transform origin-left z-20 ${showPhoneTooltip ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Hotline Đặt Lịch</p>
          <a href="tel:02383xxxxxx" className="text-[#16a748] font-extrabold text-sm whitespace-nowrap hover:underline">
            02383.xxx.xxx
          </a>
        </div>
      </div>

    </div>
  );
};

export default SocialContactWidgets;