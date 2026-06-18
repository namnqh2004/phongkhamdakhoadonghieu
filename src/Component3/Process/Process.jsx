import { FaClipboardList, FaUserMd, FaStethoscope, FaNotesMedical, FaHeartbeat } from "react-icons/fa";

const processData = [
  {
    step: "01",
    title: "Đăng ký khám",
    desc: "Đặt lịch trực tuyến hoặc đến trực tiếp tại quầy đăng ký.",
    icon: <FaClipboardList />,
  },
  {
    step: "02",
    title: "Tiếp nhận & Hỏi bệnh",
    desc: "Bác sĩ tiếp nhận, khai thác tiền sử bệnh và triệu chứng.",
    icon: <FaUserMd />,
  },
  {
    step: "03",
    title: "Thăm khám & Xét nghiệm",
    desc: "Thăm khám lâm sàng, chỉ định xét nghiệm hoặc chẩn đoán hình ảnh.",
    icon: <FaStethoscope />,
  },
  {
    step: "04",
    title: "Chẩn đoán & Tư vấn",
    desc: "Bác sĩ đọc kết quả, chẩn đoán và tư vấn phác đồ điều trị.",
    icon: <FaNotesMedical />,
  },
  {
    step: "05",
    title: "Điều trị & Theo dõi",
    desc: "Điều trị theo phác đồ, theo dõi và tái khám định kỳ.",
    icon: <FaHeartbeat />,
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a253c]">
            Quy trình khám bệnh, chữa bệnh tại <br /> Phòng khám Đa khoa Đông Hiếu
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Quy trình khép kín, minh bạch – giúp bệnh nhân được chăm sóc nhanh chóng và chuyên nghiệp.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* ĐƯỜNG THẲNG NỐI GIỮA */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-green-200 hidden md:block -z-0" />

          {/* GRID 5 BƯỚC */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {processData.map((item) => (
              <div key={item.step} className="text-center flex flex-col items-center group">
                
                {/* KHUNG CHỨA VÒNG TRÒN SỐ & HIỆU ỨNG TỎA SÓNG */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  
                  {/* Vòng tròn nháy tỏa ra (animate-ping) chạy ngầm phía sau */}
                  <span className="absolute inset-1.5 inline-flex animate-ping rounded-full bg-[#16a748] opacity-25 duration-1000"></span>
                  
                  {/* Khối số chính nằm đè lên trên */}
                  <div className="w-20 h-20 rounded-full bg-[#16a748] text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-green-100 border-4 border-white relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {item.step}
                  </div>
                </div>

                {/* KHỐI CHỮ PHÍA DƯỚI */}
                <div className="mt-6 space-y-2 max-w-[200px] md:max-w-none">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg transition-colors duration-300 group-hover:text-[#16a748]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;