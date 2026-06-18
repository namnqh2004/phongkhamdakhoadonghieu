import About from '../../Component3/About/About';
// import Appointment from '../../Component1/Appointment/Appointment';
import Banner from '../../Component3/Banner/Banner';
import Blog from '../../Component3/Blog/Blog';
// import Brand from '../../Component3/Brand/Brand';
// import ContentSlider from '../../Component1/ContentSlider/ContentSlider';
// import Counter from '../../Component1/Counter/Counter';
// import Feature from '../../Component1/Feature/Feature';
import Service from '../../Component1/Service/Service';
import Service1 from '../../Component3/Service/Service';
// import Service2 from '../../Component3/Service2/Service2';
import Subscribe from '../../Component3/Subscribe/Subscribe';
import TeamMember from '../../Component1/TeamMember/TeamMember';
import Testimonial from '../../Component3/Testimonial/Testimonial';
// import Portfolio from '../../Component3/Portfolio/Portfolio';
import SocialContactWidgets from '../../Shared/SocialContactWidgets/SocialContactWidgets';
import Process from '../../Component3/Process/Process';

const Home1 = () => {
  return (
    <>
      <Banner />
      {/* <Counter /> */}
      {/* <Feature /> */}
      <About />
      {/* <ContentSlider /> */}
      <Service1 />
      {/* <Service2 /> */}
      {/* <Portfolio /> */}
      <Process/>
      <Service />
      {/* <Appointment /> */}
      <TeamMember />
      <Testimonial />
      <Blog />
      <Subscribe />
      <SocialContactWidgets/>
    </>
  );
};

export default Home1;
