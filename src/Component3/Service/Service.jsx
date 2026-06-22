// import serviceIcon from "/images/service-icn.png";
import serviceIcon2 from "/images/service-icn2.png";
import serviceIcon3 from "/images/service-icn3.png";
import btnIcon from "/images/arrow.png";
import ServiceCard from "./ServiceCard";
import serviceShape from "/images/doctor-set.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ServiceNavigation from "./ServiceNavigation";
import { FaCircle } from "react-icons/fa6";

const ServiceData = [
  {
    id: 4,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceSubTitle: "Chăm sóc sức khỏe",
    serviceTitle: "Khám sức khỏe định kỳ",
    serviceDesc:
      "Gói khám sức khỏe cá nhân và doanh nghiệp giúp phát hiện sớm nguy cơ bệnh lý, bảo vệ sức khỏe toàn diện.",
    serviceUrl: "/",
    btnContent: "Xem thêm",
    btnIcon: btnIcon,
  },
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceSubTitle: "Khám bệnh",
    serviceTitle: "Khám ngoại trú",
    serviceDesc:
      "Khám tổng quát và chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm, tư vấn tận tình và trả kết quả nhanh trong ngày.",
    serviceUrl: "/",
    btnContent: "Xem thêm",
    btnIcon: btnIcon,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceSubTitle: "Cận lâm sàng",
    serviceTitle: "Xét nghiệm",
    serviceDesc:
      "Hệ thống xét nghiệm tự động hiện đại, thực hiện hơn 200 loại xét nghiệm phục vụ chẩn đoán và theo dõi điều trị.",
    serviceUrl: "/",
    btnContent: "Xem thêm",
    btnIcon: btnIcon,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceSubTitle: "Cận lâm sàng",
    serviceTitle: "Chẩn đoán hình ảnh",
    serviceDesc:
      "Trang bị siêu âm 4D, X-quang kỹ thuật số và các thiết bị chẩn đoán hiện đại cho hình ảnh rõ nét, chính xác.",
    serviceUrl: "/",
    btnContent: "Xem thêm",
    btnIcon: btnIcon,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="px-4 xl:px-10 bg-[url(/images/motivation-bg.jpg)] bg-cover bg-center bg-no-repeat pt-[240px] pb-[120px] relative">
      <div className="text-center">
        <div
          className="inline-block mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h6 className="flex items-center justify-start gap-2 bg-white bg-opacity-0 text-white text-[15px] font-semibold border border-white border-opacity-10 rounded-full be-vietnam-pro-regular px-[22px] py-2 uppercase">
            <FaCircle size={"8"} />
            Đa dạng chuyên khoa – Công nghệ hiện đại
          </h6>
        </div>
        <h1 className="be-vietnam-pro-bold text-white text-[20px] leading-[28px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[46px] xl:leading-[57px] 2xl:text-[55px] 2xl:leading-[67px]">
          Dịch vụ Y tế
        </h1>
      </div>
      <div className="Container">
        <div
          className="relative z-10 mt-[44px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper {...settings}>
            {ServiceData.map(
              ({
                id,
                serviceIcon,
                serviceShape,
                serviceSubTitle,
                serviceTitle,
                serviceDesc,
                serviceUrl,
                btnContent,
                btnIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-[94px]">
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceShape={serviceShape}
                        serviceSubTitle={serviceSubTitle}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                        serviceUrl={serviceUrl}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                  </SwiperSlide>
                );
              },
            )}
            <ServiceNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
