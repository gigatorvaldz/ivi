import Footer from '@/components/Footer';
import { NextPage } from 'next';
import Banner from '@/components/Banner';
import { bannerSlides } from '@/constants/bannerSlides';
import BannerSlide from '@/UI/BannerSlide';
import Meta from '@/components/Meta';

interface IHome {
  children: React.ReactNode;
}

const Home: NextPage<IHome> = ({ children }) => {
  return (
    <>
      <Meta
        title='Главная'
        description='Онлайн кинотеатр Иви'
      />
      <main>
        {children}
        <Banner
          slides={bannerSlides.map((e, index) => (
            <BannerSlide
              key={index}
              backgroundImage={e.backgroundImage}
              title={e.title}
              info={e.info}
              buttonText={e.buttonText}
              href={e.href}
              textColor={e.textColor}
            />
          ))}
        />
        </main>
      <Footer />
    </>
  );
};

export default Home;
