import { GetStaticProps, NextPage } from 'next';
import css from '/styles/Home.module.scss';
import Banner from '@/components/Banner';
import { bannerSlides } from '@/constants/bannerSlides';
import BannerSlide from '@/UI/BannerSlide';
import Meta from '@/components/Meta';
import Galery from '@/components/Galery';
import { FilmCardArray } from '@/mocks/FilmCardArray';
import { topTenCards } from '@/constants/topTenCards';
import TopTenCard from '@/UI/TopTenCard';
import titleBadge from '/assets/topTen/titleBadge.svg';
import DescriptionBlock from '@/components/DescriptionBlock';
import { description } from '@/constants/mainPageDescriptionBlock';
import TeaserList from '@/UI/TeaserList';
import lightning from '/assets/mainPage/lightning.svg';
import gift from '/assets/mainPage/gift.svg';
import { collections } from '@/constants/collections';
import CollectionItem from '@/UI/CollectionItem';
import Layout from '@/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Главная" description="Онлайн кинотеатр Иви" />
      <Layout>
        <main className={css.main}>
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
                  { text: 'subFor30Days', icon: lightning },
                  { text: 'certificate', icon: gift },
                ]}
              />
            </div>
          </section>
          <Galery
            initialVisibleCards={4}
            isTitleLink={false}
            title="collectionHead"
            slides={collections.map((e, index) => (
              <CollectionItem key={index} title={e.title} image={e.image} href={e.href} />
            ))}
          />
          <Galery
            initialVisibleCards={5}
            titleImage={titleBadge}
            title="duringTheWeek"
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
                title="headInfo"
                content={description}
              />
            </div>
          </section>
          <Galery title="kindCartoons" slides={FilmCardArray} />
          <Galery title="drama" slides={FilmCardArray} />
        </main>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale ?? 'ru')),
    },
  };
};
