import Footer from '@/components/Footer';
import css from '/styles/Home.module.scss';
import { NextPage } from 'next';
import Banner from '@/components/Banner';
import { bannerSlides } from '@/constants/bannerSlides';
import BannerSlide from '@/UI/BannerSlide';
import Meta from '@/components/Meta';
import Galery from '@/components/Galery';
import { FilmCardArray } from '@/mocks/FilmCardArray';
import { topTenCards } from '@/constants/topTenCards';
import TopTenCard from '@/UI/TopTenCard';
import titleBadge from '/assets/topTen/titleBadge.svg';
import Header from '@/components/Header';
import DescriptionBlock from '@/components/DescriptionBlock';
import { description } from '@/constants/mainPageDescriptionBlock';
import TeaserList from '@/UI/TeaserList';
import lightning from '/assets/mainPage/lightning.svg';
import gift from '/assets/mainPage/gift.svg';

interface IHome {
  children: React.ReactNode;
}

const Home: NextPage<IHome> = ({ children }) => {
  return (
    <>
      <Meta title="Главная" description="Онлайн кинотеатр Иви" />
      <Header />
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
        <section>
          <div className="wrapper">
            <TeaserList
              items={[
                { text: '30 дней подписки за 1 ₽', icon: lightning },
                { text: 'Активировать сертификат', icon: gift },
              ]}
            />
          </div>
        </section>
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
        <section className={css.description}>
          <div className="wrapper">
            <DescriptionBlock
              isMainPage
              title="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
              content={description}
            />
          </div>
        </section>
        <Galery title="Добрые мультфильмы" slides={FilmCardArray} />
        <Galery title="Драмы" slides={FilmCardArray} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
