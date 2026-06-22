import serviceThumb from "/images/srvce.png";
import serviceThumb2 from "/images/sv1.jpg";
import serviceThumb3 from "/images/sv2.png";
import serviceThumb4 from "/images/sv3.jpg";
import serviceThumb5 from "/images/sv4.jpg";
import serviceThumb6 from "/images/sv5.png";
import serviceThumb7 from "/images/sv6.png";
import ServiceCard from "./ServiceCard";
import serviceShape from "/images/srvce-shp.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { LuArrowUpRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ServiceNavigation from "./ServiceNavigation";

const ServiceData = [
  {
    id: 4,
    serviceThumb: serviceThumb5,
    serviceShape: serviceShape,
    serviceSubTitle: "Chẩn đoán hình ảnh",
    serviceTitle: "Nội soi Tiêu Hóa",
    serviceUrl: "/dich-vu/noi-soi-tieu-hoa",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 4,
    serviceThumb: serviceThumb4,
    serviceShape: serviceShape,
    serviceSubTitle: "Chẩn đoán hình ảnh",
    serviceTitle: "Chụp MRI",
    serviceUrl: "/dich-vu/mri",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 1,
    serviceThumb: serviceThumb7,
    serviceShape: serviceShape,
    serviceSubTitle: "Chẩn đoán hình ảnh",
    serviceTitle: "Chụp X-Quang",
    serviceUrl: "/dich-vu/x-quang",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceShape: serviceShape,
    serviceSubTitle: "Chẩn đoán hình ảnh",
    serviceTitle: "Chụp CT-Scanner",
    serviceUrl: "/dich-vu/ct-scanner",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb,
    serviceShape: serviceShape,
    serviceSubTitle: "Siêu âm",
    serviceTitle: "Siêu âm 4D",
    serviceUrl: "/dich-vu/sieu-am",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 5,
    serviceThumb: serviceThumb2,
    serviceShape: serviceShape,
    serviceSubTitle: "Răng Hàm Mặt",
    serviceTitle: "Răng Hàm Mặt",
    serviceUrl: "/dich-vu/rang-ham-mat",
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 5,
    serviceThumb: serviceThumb6,
    serviceShape: serviceShape,
    serviceSubTitle: "Xét nghiệm",
    serviceTitle: "Xét nghiệm tự động",
    serviceUrl: "/dich-vu/xet-nghiem",
    btnIcon: <LuArrowUpRight />,
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
        slidesPerView: 4.35,
      },
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="service px-5 2xl:px-20 bg-Secondarycolor-0 bg-cover bg-bottom bg-no-repeat py-[120px] relative">
      <div className="grid grid-cols-12 md:items-center border-b border-BorderColor2-0 pb-7 gap-7 lg:gap-0">
        <div
          className="col-span-12 md:col-span-6 lg:col-span-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="be-vietnam-pro-bold text-white text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[34px] lg:leading-[44px] xl:text-[48px] xl:leading-[58px] 2xl:text-[60px] 2xl:leading-[70px]">
            Dịch Vụ
          </h1>
        </div>

        <div
          className="col-span-12 md:col-span-6 lg:col-span-5 flex justify-start lg:justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="be-vietnam-pro-regular text-lg text-TextColor3-0">
            Cung cấp các dịch vụ khám chữa bệnh, xét nghiệm và chẩn đoán hình
            ảnh hiện đại với đội ngũ bác sĩ giàu kinh nghiệm.
            <br className="hidden 2xl:block" />
            Hệ thống trang thiết bị tiên tiến cùng quy trình chăm sóc tận tâm,
            <br className="hidden 2xl:block" />
            mang đến sự an tâm cho mọi khách hàng.
          </p>
        </div>

        <div
          className="col-span-12 lg:col-span-3 flex lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link to={"/dich-vu"}>
            <button className="primary-btn mt-3 px-8">
              Xem tất cả dịch vụ
              <GoArrowRight size={"22"} className="-rotate-45" />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-[60px] before:absolute before:z-40 before:left-[25px] before:bottom-[302px] before:rotate-0 before:w-[2px] 2xl:before:h-[170px] before:bg-gradient-to-t before:from-PrimaryColor-0 before:to-transparent">
        <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
          {ServiceData.map(
            ({
              id,
              serviceThumb,
              serviceShape,
              serviceSubTitle,
              serviceTitle,
              serviceUrl,
              btnIcon,
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    className="pb-[60px] service-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <ServiceCard
                      serviceThumb={serviceThumb}
                      serviceShape={serviceShape}
                      serviceSubTitle={serviceSubTitle}
                      serviceTitle={serviceTitle}
                      serviceUrl={serviceUrl}
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
    </section>
  );
};

export default Service;
