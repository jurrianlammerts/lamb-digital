import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Chat from '../../components/Chat';
import AutoplayVideo from '../../components/AutoplayVideo';
import Header from '../../components/Project/Header';
import IntroText from '../../components/Project/IntroText';
import Video from '../../components/Project/Video';

const fyx = () => {
  return (
    <Layout>
      <SEO />
      <Header brand="FYX" title="Be distinctive, not different" />
      <ParallaxBanner
        layers={[
          {
            image: '/images/fyx-4.jpg',
            amount: 0.4,
          },
        ]}
        style={{
          height: '100vh',
        }}
      />

      <IntroText
        href="https://fyx.nl"
        title="For Your Xperience"
        body="FYX is a creative marketing & event agency based in Rotterdam. The three letters of their brand name stand for For Your Xperience. Loosely translated blood, sweat and an absolute motivation overload to create the ultimate experience with their work for their target group, their customers and their visitors."
      />
      <Video id="groof" src="/videos/Groof.mp4" />
      <Header title="Careful rebranding" />
      <ParallaxBanner
        layers={[
          {
            image: '/images/fyx-3.jpg',
            amount: 0.4,
          },
        ]}
        style={{
          height: '100vh',
        }}
      />
      <Header
        title="The design will not leave you cold"
        body="Plenty of illustrations and icons, bright hues, and micro animated functional elements all come together to really set a creative mood and submerge the user in the app’s special atmosphere."
      />
      <Chat />
    </Layout>
  );
};

export default fyx;
