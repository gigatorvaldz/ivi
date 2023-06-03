import Meta from '@/components/Meta/index';
import PopupAuth from '@/components/PopupAuth';

const loginPage = () => {
  return (
    <>
      <Meta title="Auth" description="auth page" />
      <PopupAuth type="registration" />
    </>
  );
};

export default loginPage;
