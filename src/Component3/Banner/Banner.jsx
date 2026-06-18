import { Link } from "react-router-dom";
import bannerThumb from "/images/bannn.jpg"; // Đường dẫn đến ảnh bác sĩ chất lượng cao

const Banner = () => {
  return (
    /* TỐI ƯU MOBILE: Thay pt-20 pb-20 thành pt-6 pb-12 sm:pt-12 lg:pt-20 lg:pb-20 giúp kéo gần khoảng cách với navbar trên điện thoại */
    <div className="relative w-full bg-[#f8fafc] overflow-hidden flex items-start pt-6 pb-12 sm:pt-12 lg:pt-20 lg:pb-20">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      {/* Vòng tròn mờ trang trí phía sau cột chữ */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-50 rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none" />

      {/* CONTAINER CHÍNH */}
      {/* TỐI ƯU MOBILE: Thay py-12 thành py-4 sm:py-8 lg:py-0 để thu hẹp không gian trống thừa */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* CỘT TRÁI - NỘI DUNG CHỮ */}
          {/* TỐI ƯU MOBILE: Giảm space-y từ 6 xuống 4 để các phần text đứng gọn gàng hơn */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-8 text-center lg:text-left">
            {/* Tagbadge y đức */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-[#e6f7ed] text-[#16a748] text-[12px] sm:text-[13px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-emerald-100 shadow-xs">
                {/* Inline SVG cho biểu tượng vòng tròn nhỏ nhấp nháy (thay thế FaCircle) */}
                <svg
                  className="w-2.5 h-2.5 text-[#16a748] animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Y ĐỨC TẠO NIỀM TIN
              </span>
            </div>

            {/* Tiêu đề chính */}
            <h1 className="be-vietnam-pro-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-[56px] text-[#1a253c] leading-[1.15] tracking-tight">
              Chăm sóc sức khỏe <br />
              <span className="block text-[#16a748] mt-1 sm:mt-2">
                Toàn diện – Tận tâm
              </span>
            </h1>

            {/* Đoạn mô tả ngắn */}
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Phòng khám Đa khoa Đông Hiếu quy tụ đội ngũ y bác sĩ đầu ngành,
              mang đến dịch vụ y tế chất lượng cao và sự an tâm tuyệt đối cho
              khách hàng.
            </p>

            {/* Cặp nút hành động */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/booking" className="inline-block">
                <button className="w-full sm:w-auto bg-[#16a748] hover:bg-[#099645] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Liên hệ ngay
                </button>
              </Link>

              <Link to="/about" className="inline-block">
                <button className="w-full sm:w-auto border-2 border-[#16a748] text-[#16a748] hover:bg-emerald-50/50 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Tìm hiểu thêm
                </button>
              </Link>
            </div>

            {/* Các thông số thống kê nổi bật bên dưới nút */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#16a748]">
                  ---
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                  Chuyên khoa
                </span>
              </div>
              <div className="text-center lg:text-left border-x border-gray-100 px-4">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#16a748]">
                  ---
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                  Bác sĩ
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#16a748]">
                  24/7
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                  Cấp cứu
                </span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI - HÌNH ẢNH CẮT VÁT VÀ CONTAINER XANH LÁ */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[500px]">
            {/* Lớp hình khối vát chéo màu xanh lá đặc trưng phía sau từ ảnh gốc */}
            <div className="absolute right-[-15%] bottom-[-10%] top-[-10%] left-[10%] lg:left-[22%] bg-[#16a748] rounded-tl-[120px] rounded-bl-[40px] rounded-br-[40px] lg:rounded-br-none lg:rounded-tr-none -z-10 transform skew-x-3 overflow-hidden shadow-2xl" />

            {/* Khung ảnh chính với đường viền bo đặc thù không đều (Organic shape) */}
            <div className="relative w-[280px] h-[280px] sm:w-[410px] sm:h-[410px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden border-[10px] border-white shadow-2xl bg-white group transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={bannerThumb}
                alt="Đội ngũ bác sĩ Đông Hiếu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable="false"
              />
            </div>

            {/* Thẻ nổi chứng nhận Đạt chuẩn Bộ Y Tế */}
            {/* Thẻ nổi chứng nhận Bộ Y Tế */}
            <div className="absolute bottom-6 left-2 sm:left-4 z-20">
              <div className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_15px_40px_rgba(22,167,72,0.18)] border border-emerald-100 hover:-translate-y-1 transition-all duration-300">
                {/* Huy hiệu */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-green-400/30 blur-md animate-pulse"></div>

                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#16a748] to-[#0f8a3b] flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Nội dung */}
                <div>
                  <div className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide mb-1">
                    Chứng nhận
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                    Đạt chuẩn Bộ Y Tế
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
