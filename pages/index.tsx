import Footer from '@/components/Footer';
import css from '/styles/Home.module.scss';
import { NextPage } from 'next';
import Banner from '@/components/Banner';
import { bannerSlides } from '@/constants/bannerSlides';
import BannerSlide from '@/UI/BannerSlide';
import Meta from '@/components/Meta';
import Button from '@/UI/Button';
import { BsLightningChargeFill } from 'react-icons/bs';
import { GiLetterBomb } from 'react-icons/gi';
import Galery from '@/components/Galery';
import { FilmCardArray } from '@/mocks/FilmCardArray';
import { topTenCards } from '@/constants/topTenCards';
import TopTenCard from '@/UI/TopTenCard';
import titleBadge from '/assets/topTen/titleBadge.svg'

interface IHome {
  children: React.ReactNode;
}

const Home: NextPage<IHome> = ({ children }) => {
  return (
    <>
      <Meta title="Главная" description="Онлайн кинотеатр Иви" />
      <main className={css.main}>
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
        <section className={`wrapper ${css.buttons}`}>
          <Button icon={<BsLightningChargeFill />} primaryText="30 дней подписки за 1 ₽" />
          <Button icon={<GiLetterBomb />} primaryText="Активировать сертификат" />
        </section>
        <Galery title="Рекомендую посмотреть" slides={FilmCardArray} />
        <Galery
          titleImage={titleBadge}
          title="за неделю"
          slides={topTenCards.map((e, index) => (
            <TopTenCard
              key={index}
              position={e.position}
              title={e.title}
              poster={e.poster}
              href={e.href}
            />
          ))}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;