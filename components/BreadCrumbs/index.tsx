import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Routes } from '@/constants/routes';

import style from './BreadCrumbs.module.scss';
import classNames from 'classnames';

const convertBreadcrumb = (href: keyof typeof Routes): string => {
  return Routes[href]
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü');
};

type PathType = {
  breadcrumb: string;
  href: string;
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<null | PathType[]>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label={style.container}>
      <ol className={style.container}>
        <li className={style.breadcrumb}>
          <Link href="/">Мой Иви</Link>
        </li>
        <p className={style.divider}>/</p>
        {breadcrumbs.map(({ href, breadcrumb }, index) => {
          return (
            <>
              <li
                key={href}
                className={classNames(
                  { [style.disabled]: index === breadcrumbs.length - 1 },
                  style.breadcrumb
                )}
              >
                <Link href={href}>{convertBreadcrumb(breadcrumb as keyof typeof Routes)}</Link>
              </li>
              {index != breadcrumbs.length - 1 && <p className={style.divider}>/</p>}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
