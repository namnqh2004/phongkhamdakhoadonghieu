/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Phòng khám Đa khoa Đông Hiếu - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
