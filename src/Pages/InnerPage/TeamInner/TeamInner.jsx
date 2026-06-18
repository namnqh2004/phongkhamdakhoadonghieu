import teamThumb from "/images/dung.jpg";
import teamThumb2 from "/images/kieu.jpg";
import teamThumb3 from "/images/tam.jpg";
import teamThumb4 from "/images/trung.jpg";
import teamThumb5 from "/images/dinh.jpg";
import teamThumb6 from "/images/man.jpg";
import TeamInnerCard from "./TeamInnerCard";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Subscribe from "../../../Component1/Subscribe/Subscribe";

const teamData = [
  {
    id: 2,
    teamThumb: teamThumb,
    teamTitle: "BS. Chu Tiến Dũng",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ CKI Ngoại",
  },

  {
    id: 5,
    teamThumb: teamThumb5,
    teamTitle: "BS. Nguyễn Nam Đình",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ CKII Nội",
  },

  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "BS. Lê Quốc Trung",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ CKI CĐHA",
  },

  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "BS. Lương Thị Tâm",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ CKI Nội",
  },

  {
    id: 6,
    teamThumb: teamThumb6,
    teamTitle: "BS. Nguyễn Hữu Mẫn",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ Y học cổ truyền",
  },

  {
    id: 1,
    teamThumb: teamThumb2,
    teamTitle: "BS. Lô Văn Kiều",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: "Bác sĩ Sản phụ khoa",
  },
];

const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Bác sĩ"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Bác sĩ"}
      />
      <section className="bg-BodyBg-0 bg-no-repeat bg-cover bg-center py-28 relative">
        <div className="Container">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                teamDesc,
              }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamThumb={teamThumb}
                      teamTitle={teamTitle}
                      socialIcon={socialIcon}
                      socialIcon2={socialIcon2}
                      socialIcon3={socialIcon3}
                      teamDesc={teamDesc}
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default TeamInner;
