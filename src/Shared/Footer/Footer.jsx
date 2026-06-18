import { Link } from 'react-router-dom';
import footerLogo from '/images/logo2.png';
import { FaAnglesRight } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-Secondarycolor-0 relative z-10 pt-20 overflow-hidden'>
      <div className='Container'>
        <div className='grid gap-y-10 grid-cols-12'>
          {/* Giới thiệu */}
          <div className='col-span-12 md:col-span-6 lg:col-span-5'>
            <Link to='/'>
              <img
                src={footerLogo}
                draggable={false}
                width={280}
                alt='Phòng khám Đa khoa Đông Hiếu'
              />
            </Link>

            <p className='text-TextColor3-0 mt-4'>
              Chăm sóc sức khỏe tận tâm - Đồng hành cùng cộng đồng.
            </p>

            <p className='be-vietnam-pro-regular xl:text-lg font-medium text-white mt-8 mb-7'>
              Phòng khám Đa khoa Đông Hiếu cung cấp dịch vụ khám chữa bệnh
              chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị
              hiện đại và quy trình khám nhanh chóng, thuận tiện.
            </p>

            <form
              action='#'
              method='post'
              className='relative w-11/12'
            >
              <input
                type='email'
                placeholder='Nhập địa chỉ Email của bạn'
                className='w-full h-[54px] outline-none text-lg border-b-2 border-BorderColor2-0 bg-transparent py-3 text-white placeholder:text-TextColor3-0 mb-4'
              />

              <div className='absolute top-3 right-0'>
                <button
                  type='submit'
                  className='text-white'
                >
                  <MdOutlineArrowOutward size={28} />
                </button>
              </div>
            </form>
          </div>

          {/* Giới thiệu */}
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='be-vietnam-pro-regular text-2xl text-white font-semibold mb-8'>
              Giới thiệu
            </h4>

            <ul>
              {[
                'Trang chủ',
                'Giới thiệu phòng khám',
                'Đội ngũ bác sĩ',
                'Chuyên khoa',
                'Liên hệ',
              ].map((item) => (
                <li key={item}>
                  <Link to='/'>
                    <span className='flex items-center gap-2 font-medium text-white hover:text-PrimaryColor-0 mb-4 transition-all'>
                      <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dịch vụ */}
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='be-vietnam-pro-regular text-2xl text-white font-semibold mb-8'>
              Dịch vụ
            </h4>

            <ul>
              {[
                'Đặt lịch khám',
                'Khám BHYT',
                'Khám sức khỏe',
                'Bảng giá dịch vụ',
                'Tin tức y tế',
              ].map((item) => (
                <li key={item}>
                  <Link to='/'>
                    <span className='flex items-center gap-2 font-medium text-white hover:text-PrimaryColor-0 mb-4 transition-all'>
                      <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='be-vietnam-pro-regular text-2xl text-white font-semibold mb-8'>
              Thông tin liên hệ
            </h4>

            <p className='be-vietnam-pro-regular font-medium text-TextColor3-0'>
              Phòng khám Đa khoa Đông Hiếu
              <br />
              Xóm Đông Mỹ, xã Đông Hiếu, tỉnh Nghệ An
            </p>

            <h5 className='be-vietnam-pro-regular font-medium text-white text-xl mt-6 mb-1'>
              Email
            </h5>

            <a
              href='mailto:phongkhamdkdonghieu@gmail.com'
              className='text-TextColor3-0 hover:text-PrimaryColor-0 transition-all'
            >
              phongkhamdkdonghieu@gmail.com
            </a>

            <h5 className='be-vietnam-pro-regular font-medium text-white text-xl mt-6 mb-1'>
              Hotline
            </h5>

            <a
              href='tel:0975161115'
              className='text-TextColor3-0 hover:text-PrimaryColor-0 transition-all'
            >
              0975 161 115
            </a>

            <h5 className='be-vietnam-pro-regular font-medium text-white text-xl mt-6 mb-1'>
              Giờ làm việc
            </h5>

            <p className='text-TextColor3-0'>
              Thứ 2 - Chủ Nhật
              <br />
              06:30 - 17:30
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col md:flex-row gap-y-6 justify-between md:items-center py-7 mt-20 border-t border-BorderColor2-0'>
          <ul className='flex gap-6'>
            <li>
              <a
                href='#'
                className='text-white hover:text-PrimaryColor-0'
              >
                <FaFacebookF size={20} />
              </a>
            </li>

            <li>
              <a
                href='#'
                className='text-white hover:text-PrimaryColor-0'
              >
                <FaYoutube size={20} />
              </a>
            </li>

            <li>
              <a
                href='#'
                className='text-white hover:text-PrimaryColor-0'
              >
                <FaTiktok size={20} />
              </a>
            </li>
          </ul>

          <p className='be-vietnam-pro-regular text-TextColor3-0'>
            NGUYỄN QUANG HOÀI NAM - CNTT PKĐK Đông Hiếu © 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;