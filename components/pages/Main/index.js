import HotelInfo from './HotelInfo';
import Welcome from './Welcome';

const Main = (props) => {
  return (
    <main id="wrapper">
      <Welcome {...props} />

      <HotelInfo />
    </main>
  );
};

export default Main;
