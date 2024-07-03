import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import ContentWrapper from '../components/ContentWrapper';
import Main from '../components/Main';

const Services = () => {
  return (
    <ContentWrapper>
      <Main page="Services">
        <Carousel page="Services" />
        <CallToAction linkedPages={["Contact"]} />
      </Main>
    </ContentWrapper>
  );
};

export default Services;
