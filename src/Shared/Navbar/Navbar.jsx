import { Link, useNavigate } from "react-router-dom";
import Logo from "/images/logo.png";
import Logo2 from "/images/logo2.png";
// import homeOne from "/images/home1.png";
// import homeTwo from "/images/home2.png";
// import homeThree from "/images/home3.png";
// import homeFour from "/images/home4.png";
import btnArrow from "/images/arrow.png";
import "./navbar.css";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add("opened");
      bodyOverlay2.classList.add("apply");
    };

    const removeClasses = () => {
      sidebarContent.classList.remove("opened");
      bodyOverlay2.classList.remove("apply");
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener("click", addClasses);
      closeBtn2.addEventListener("click", removeClasses);
      bodyOverlay2.addEventListener("click", removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener("click", addClasses);
        closeBtn2.removeEventListener("click", removeClasses);
        bodyOverlay2.removeEventListener("click", removeClasses);
      }
    };
  }, []);

  //Menu Bar
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add("opened");
      bodyOverlay.classList.add("apply");
    };

    const removeClasses = () => {
      offcanvas.classList.remove("opened");
      bodyOverlay.classList.remove("apply");
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener("click", addClasses);
      closeBtn.addEventListener("click", removeClasses);
      bodyOverlay.addEventListener("click", removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener("click", addClasses);
        closeBtn.removeEventListener("click", removeClasses);
        bodyOverlay.removeEventListener("click", removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span className="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5 12.5-12.5 32.8 0 45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  const navigate = useNavigate();

  useEffect(() => {
    const mainMenuContent = document.querySelector(".main-menu-content");
    const mainMenuMobile = document.querySelector(".main-menu-mobile");

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const menuLinks = mainMenuMobile.querySelectorAll("a");
      menuLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("/")) {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            if (href !== window.location.pathname) {
              navigate(href);
            }
          });
        }
      });

      const arrows = mainMenuMobile.querySelectorAll(
        ".main-menu-mobile .has-dropdown > a",
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement("BUTTON");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener("click", (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle("dropdown-opened");
          arrow.parentElement.classList.toggle("expanded");
          arrow.parentElement.parentElement.classList.add("dropdown-opened");
          arrow.parentElement.parentElement
            .querySelectorAll(".submenu")
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";
            });
          arrow.parentElement.parentElement
            .querySelectorAll(".has-dropdown")
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove("dropdown-opened");
                sibling.querySelectorAll(".submenu").forEach((submenu) => {
                  submenu.style.display = "none";
                });
              }
            });
        });
      });
    }
  }, [headerIcon, navigate]);

  //Menu Search
  const handleMenuSearchClick = () => {
    document.body.classList.add("search-active");
  };

  const handleCloseSearchClick = () => {
    document.body.classList.remove("search-active");
  };

  const searchContentRef = useRef(null);
  const bodyOverlay3Ref = useRef(null);
  const searchInputRef = useRef(null); // Reference for the search input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set submitting state

    // Simulate a submission with a timeout (replace with your actual submission logic)
    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state
      // Optionally clear the input field or close the overlay
      if (searchInputRef.current) {
        searchInputRef.current.value = ""; // Clear the input
      }
      bodyOverlay3Ref.current.classList.remove("apply"); // Close overlay on submit (optional)
      searchContentRef.current.classList.remove("opened"); // Close search content (optional)
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <nav data-lenis-prevent>
      <div className="offcanvas-area be-vietnam-pro-regular">
        <div ref={offcanvasRef} className="offcanvas">
          <div className="offcanvas_close-btn">
            <button ref={closeBtnRef} className="close-btn">
              <FaTimes />
            </button>
          </div>
          <div className="offcanvas_logo inline-block">
            <Link to={"/"}>
              <img
                src={Logo2}
                draggable="false"
                alt="Logo Phòng khám Đông Hiếu"
              />
            </Link>
          </div>
          <div className="offcanvas_title">
            <p>
              Phòng khám Đa khoa Đông Hiếu cung cấp dịch vụ khám chữa bệnh chất
              lượng cao với đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện
              đại và quy trình khám nhanh chóng, thuận tiện.
            </p>
          </div>
          <div className="main-menu-mobile lg:none"></div>
          <div className="offcanvas_contact-info">
            <div className="offcanvas_contact-title">
              <h5>Liên Hệ Với Chúng Tôi</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={"/"}>Xóm Đông Mỹ, xã Đông Hiếu, tỉnh Nghệ An</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={"/"}>phongkhamdkdonghieu@gmail.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={"/"}>0975 161 115</Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas_input">
            <div className="offcanvas_input-title">
              <h4>Nhận Tin Tức Mới Nhất</h4>
            </div>
            <form action="#" method="post">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập địa chỉ Email"
                  required
                />
                <button type="submit">
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
          </div>
          <div className="offcanvas_social">
            <div className="social-icon">
              <Link to={"/"}>
                <FaFacebookF />
              </Link>
              <Link to={"/"}>
                <FaXTwitter />
              </Link>
              <Link to={"/"}>
                <FaPinterestP />
              </Link>
              <Link to={"/"}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={bodyOverlayRef} className="body-overlay"></div>
      {/* 🔹 Thanh thông tin trên cùng (Top Bar) */}
      <div className="bg-[#0e7a33] text-white text-sm py-2 px-4 lg:px-[30px] hidden md:block border-b border-white/10 shadow-sm">
        <div className="flex justify-between items-center max-w-full mx-auto">
          {/* Bên trái: Địa chỉ & Thời gian */}
          <div className="flex items-center space-x-6 opacity-95">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-white/80 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">
                Xóm Đông Mỹ, xã Đông Hiếu, tỉnh Nghệ An
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-white/80 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">
                Thứ 2 - Chủ Nhật: Sáng 06:45 - 11:15 | Chiều 14:00 - 17:30
              </span>
            </div>
          </div>

          {/* Bên phải: Hotline */}
          <div className="flex items-center">
  <a
    href="tel:0975161115"
    className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-bold"
  >
    <svg
      className="w-5 h-5 animate-pulse"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    <span>Hotline: 0975 161 115</span>
  </a>
</div>
        </div>
      </div>

      <div className="header-area header-sticky py-5 lg:py-0">
        <div className="px-2 lg:px-[30px]">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-12">
            <div className="col-span-3">
              <div className="header-logo inline-block">
                <Link to={"/"}>
                  <img src={Logo} draggable="false" />
                </Link>
              </div>
            </div>
            <div className="col-span-6 hidden lg:block">
              <div className="header-main-menu text-center">
                <nav className="main-menu-content">
                  <ul>
                    <li className="has-dropdown">
                      <Link to={"/"} className="active">
                        Trang chủ
                      </Link>
                      {/* <div className="submenu has-homemenu mega-menu !hidden lg:!block">
                        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/"}>
                                <img src={homeOne} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/home2"}>
                                <img src={homeTwo} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"/home3"}>
                                <img src={homeThree} />
                                <h6>Live Demo</h6>
                              </Link>
                            </div>
                          </div>
                          <div className="homemenu">
                            <div className="homemenu-thumb">
                              <Link to={"#"} className="cursor-wait">
                                <img src={homeFour} />
                                <h6>Coming Soon</h6>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="submenu lg:hidden">
                        <li>
                          <Link to={"/"}>Home Page One</Link>
                        </li>
                        <li>
                          <Link to={"/home2"}>Home Page Two</Link>
                        </li>
                        <li>
                          <Link to={"/home3"}>Home Page Three</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to={"/about"}>Giới thiệu</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>Dịch vụ</Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/priceList"}>Bảng Giá</Link>
                        </li>
                        {/* <li>
                          <Link to={"/about"}>about us</Link>
                        </li>
                        <li>
                          <Link to={"/service"}>Our Service</Link>
                        </li>
                        <li>
                          <Link to={"/team"}>team member</Link>
                        </li>
                        <li>
                          <Link to={"/team_details"}>team details</Link>
                        </li>
                        <li>
                          <Link to={"/project"}>Project</Link>
                        </li>
                        <li>
                          <Link to={"/project_details"}>Project Details</Link>
                        </li>
                        <li>
                          <Link to={"/appointment"}>appointment</Link>
                        </li>
                        <li>
                          <Link to={"/testimonial"}>testimonial</Link>
                        </li>
                        <li>
                          <Link to={"/faqs"}>faqs</Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>Contact Us</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>Tin tức</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link to={"/service"}>service</Link>
                        </li>
                        <li>
                          <Link to={"/service_details"}>service details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="has-dropdown">
                      <Link to={"/"}>Chuyên khoa</Link>
                      <ul className="submenu">
                       <li>
                          <Link to={"/team"}>Bác sĩ</Link>
                        </li>
                        {/* <li>
                          <Link to={"/blog_left_sidebar"}>
                            blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/blog_right_sidebar"}>
                            blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/blog_details"}>blog details</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link to={"/contact"}>Liên hệ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-span-3">
              <div className="header-right-box flex items-center gap-10 lg:gap-0 justify-end">
                <div className="size-[50px] rounded-full bg-BodyBg2-0 hidden sm:flex lg:hidden 2xl:flex items-center justify-center text-HeadingColor-0 relative z-10 transition-all duration-500 hover:text-white before:absolute before:left-0 before:top-0 before:w-full before:rounded-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100">
                  <button onClick={handleMenuSearchClick}>
                    <IoSearch size={"18"} />
                  </button>
                </div>
                <div className="header-btn hidden lg:block">
                  <Link to={"/appointment"}>
                    Đặt lịch khám<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={btnArrow} draggable="false" />
                  </Link>
                </div>
                <div className="hidden 2xl:block ml-2">
                  <button
                    ref={menuSideBarRef}
                    className="menu-sidebar size-[50px] rounded-full bg-PrimaryColor-0 flex items-center justify-center text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:rounded-full before:h-full before:bg-Secondarycolor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 hover:before:scale-100"
                  >
                    <CgMenuGridO size={"30"} />
                  </button>
                </div>
                <div className="header-bar lg:hidden">
                  <button ref={menuBarRef} className="menu-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-content">
          <div ref={sidebarContentRef} className="sidebar">
            <div className="sidebar_close-btn">
              <button ref={closeBtn2Ref} className="close-btn2">
                <FaTimes />
              </button>
            </div>
            <div className="sidebar_logo">
              <Link to={"/"}>
                <img src={Logo2} draggable="false" />
              </Link>
            </div>
            <div className="sidebar_title">
              <p>
                Chăm sóc sức khỏe toàn diện bằng việc duy trì lối sống lành
                mạnh, dinh dưỡng cân bằng và kiểm tra sức khỏe định kỳ cùng
                chuyên gia.
              </p>
            </div>
            <div className="sidebar_contact-info">
              <div className="sidebar_contact-title">
                <h5>Bạn có câu hỏi? Liên hệ với chúng tôi!</h5>
              </div>
              <ul>
                <li>
                  <MdLocationPin />
                  <Link to={"/"}>Xóm Đông Mỹ, xã Đông Hiếu, Nghệ An</Link>
                </li>
                <li>
                  <FaEnvelope />
                  <Link to={"/"}>phongkhamdkdonghieu@gmail.com</Link>
                </li>
                <li>
                  <FaPhoneAlt />
                  <Link to={"/"}>0975 161 115</Link>
                </li>
              </ul>
            </div>
            <div className="sidebar_input">
              <div className="offcanvas_input-title">
                <h4>Nhận thông tin y tế</h4>
              </div>
              <form action="#" method="post">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Nhập Email của bạn"
                    required
                  />
                  <button type="submit">
                    <IoMdPaperPlane />
                  </button>
                </div>
              </form>
            </div>
            <ul className="sidebar-social-icon">
              <li>
                <Link to={"/"}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaPinterestP />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div ref={bodyOverlay2Ref} className="body-overlay2"></div>
        <div className="search-popup">
          <button className="close-search" onClick={handleCloseSearchClick}>
            <LiaTimesSolid />
          </button>
          <button className="close-search2" onClick={handleCloseSearchClick}>
            <FaArrowUp />
          </button>
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search Here"
                required
                ref={searchInputRef}
              />
              <button
                type="submit"
                disabled={isSubmitting} // Disable button if submitting
              >
                {isSubmitting ? (
                  <span>Loading...</span> // Show loading text
                ) : (
                  <IoSearch />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
