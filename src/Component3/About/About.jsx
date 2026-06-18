import aboutThumb from "/images/vechungtoi.jpg";
import { FaCircle, FaUserDoctor, FaHospitalUser } from "react-icons/fa6"; // Thêm icon bác sĩ và bệnh nhân
import { GiStethoscope } from "react-icons/gi"; // Thêm icon ống nghe y tế
import { HiOutlineSparkles } from "react-icons/hi2";

const About = () => {
  return (
    <section className="py-[120px] bg-gradient-to-t from-BodyBg1-0 from-25% relative z-10 px-2 xl:mx-10 rounded-b-[30px] -mb-[120px]">
      <div className="Container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-12 items-center bg-gradient-to-b from-BodyBg-0 from-60% rounded-[30px] border-2 border-white p-6 md:p-10 lg:p-8 shadow-xl">
          {/* Khối Hình Ảnh */}
          <div
            className="relative z-10 group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="overflow-hidden rounded-[30px] shadow-lg border border-white/20 relative">
              <img
                src={aboutThumb}
                draggable="false"
                className="w-full h-full object-cover rounded-[30px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                alt="Phòng khám Đa khoa Đông Hiếu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Khối Nội Dung */}
          <div
            className="relative px-2 md:px-4 lg:px-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Badge "Về chúng tôi" */}
            <div className="inline-block mb-5">
              <h6 className="flex items-center justify-start gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-PrimaryColor-0 text-[14px] font-bold border border-[#16a748]/30 rounded-full be-vietnam-pro-medium px-[20px] py-2 uppercase tracking-wider shadow-sm">
                <FaCircle size={"6"} className="animate-pulse text-[#16a748]" />
                Về chúng tôi
              </h6>
            </div>

            {/* Tiêu đề chính phối màu Gradient */}
            <h1 className="be-vietnam-pro-extrabold text-HeadingColor-0 text-[26px] leading-[34px] sm:text-[38px] sm:leading-[48px] md:text-[45px] md:leading-[55px] lg:text-[38px] lg:leading-[48px] xl:text-[46px] xl:leading-[56px] 2xl:text-[50px] 2xl:leading-[62px] mb-4">
              <span className="bg-gradient-to-r from-HeadingColor-0 via-[#16a748] to-emerald-600 bg-clip-text text-transparent">
                Phòng khám Đa khoa
              </span>
              <br />
              Đông Hiếu
            </h1>

            {/* Đoạn văn bản có nhấn chữ */}
            <p className="be-vietnam-pro-regular text-TextColor2-0 pb-6 text-justify leading-relaxed text-sm md:text-base">
              Phòng khám Đa khoa Đông Hiếu là địa chỉ{" "}
              {/* <span className="text-[#16a748] font-semibold underline decoration-wavy decoration-emerald-300 underline-offset-4">
                chăm sóc sức khỏe uy tín
              </span> */}
              chăm sóc sức khỏe uy tín
              , cung cấp dịch vụ khám chữa bệnh chất lượng với đội ngũ y bác sĩ
              giàu kinh nghiệm và hệ thống trang thiết bị hiện đại.
              <br /> <br />
              Với phương châm{" "}
              <span className="text-HeadingColor-0 font-bold bg-emerald-50 px-1 rounded">
                lấy người bệnh làm trung tâm
              </span>
              , phòng khám không ngừng nâng cao chất lượng chuyên môn, cải tiến
              dịch vụ và xây dựng môi trường y tế an toàn, thân thiện, đáp ứng
              nhu cầu của người dân trong khu vực.
            </p>

            <hr className="border-dashed border-gray-200 my-6" />

            {/* Khối tính năng 1: Chất lượng & Chuyên môn */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group/item">
              {/* Icon Ống nghe phối với Bác sĩ đại diện cho Chuyên môn */}
              <div className="size-[64px] shrink-0 rounded-2xl bg-gradient-to-br from-[#16a748] to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100 transition-transform duration-300 group-hover/item:scale-105 relative overflow-hidden">
                <GiStethoscope className="text-white text-3xl z-10 transition-transform duration-500 group-hover/item:rotate-12" />
                <div className="absolute -bottom-2 -right-2 text-white/10 text-4xl font-bold">
                  <FaUserDoctor />
                </div>
              </div>
              <div className="flex-1">
                <h6 className="be-vietnam-pro-bold font-bold text-HeadingColor-0 text-base uppercase pb-1 flex items-center gap-2 group-hover/item:text-PrimaryColor-0 transition-colors">
                  Chất lượng & Chuyên môn
                  <HiOutlineSparkles className="text-amber-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </h6>
                <p className="be-vietnam-pro-regular text-TextColor2-0 text-sm leading-relaxed">
                  Với cơ sở vật chất hiện đại và đội ngũ bác sĩ tận tâm, phòng
                  khám cung cấp dịch vụ khám chữa bệnh toàn diện, góp phần giảm
                  tải cho tuyến trên.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group/item">
              {/* Icon Ống nghe phối với Bác sĩ đại diện cho Chuyên môn */}
              <div className="size-[64px] shrink-0 rounded-2xl bg-gradient-to-br from-[#16a748] to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100 transition-transform duration-300 group-hover/item:scale-105 relative overflow-hidden">
                <FaHospitalUser className="text-white text-3xl z-10 transition-transform duration-500 group-hover/item:scale-110" />
                <div className="absolute -bottom-1 -right-1 text-white/10 text-4xl font-bold">
                  <FaCircle />
                </div>
              </div>
              <div className="flex-1">
                <h6 className="be-vietnam-pro-bold font-bold text-HeadingColor-0 text-base uppercase pb-1 flex items-center gap-2 group-hover/item:text-blue-600 transition-colors">
                  An toàn & Thân thiện
                  <HiOutlineSparkles className="text-amber-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </h6>
                <p className="be-vietnam-pro-regular text-TextColor2-0 text-sm leading-relaxed">
                  Hướng tới xây dựng môi trường y tế đạt chuẩn, an toàn, chu
                  đáo, là nơi người dân an tâm gửi gắm và bảo vệ sức khỏe gia
                  đình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
