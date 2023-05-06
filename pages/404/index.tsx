import React from 'react';
import Layout from '../../components/Layout';
import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <Layout>
      <section className={styles.notFoundPage}>
        <div className="wrapper">
          <div className={styles.container}>
            <h2>Страница не найдена!</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PageNotFound;
