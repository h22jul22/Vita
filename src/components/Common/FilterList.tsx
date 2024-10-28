import { authApi } from '@/api';
import { useUserStore } from '@/config/store';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FilterList() {
  const navigate = useNavigate();
  const { unSetUser } = useUserStore();

  const location = useLocation();
  const getNavigateClass = (path: string) => {
    return classNames('my-3 text-base hover:text-[#3A3A3A] cursor-pointer', {
      'text-[#3A3A3A]': location.pathname === path,
      'text-[#898989]': location.pathname !== path,
    });
  };

  const handleLogoutClick = async () => {
    try {
      const response = await authApi.logout();

      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        unSetUser();
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex w-[300px] min-w-[300px] flex-col items-end bg-[#e2e2e2] p-10 lg:w-[350px] xl:w-[400px]'>
      <div className='w-2/3'>
        <p className={getNavigateClass('/user/edit-info')} onClick={() => navigate('/user/edit-info')}>
          <big>
            <strong>/</strong>
          </big>{' '}
          &nbsp;프로필
        </p>
        <p className={getNavigateClass('/user/gamemate')} onClick={() => navigate('/user/gamemate')}>
          <big>
            <strong>/</strong>
          </big>{' '}
          &nbsp;게임 메이트 등록
        </p>
        <p className={getNavigateClass('/user/coin')} onClick={() => navigate('/user/coin')}>
          <big>
            <strong>/</strong>
          </big>{' '}
          &nbsp;코인
        </p>
        <p className={getNavigateClass('/user/orders')} onClick={() => navigate('/user/orders')}>
          <big>
            <strong>/</strong>
          </big>{' '}
          &nbsp;내 의뢰
        </p>
        <br />
        <hr className='h-[1px] border-0 bg-[#898989]' />
        <br />
        <p onClick={handleLogoutClick} className='mt-3 cursor-pointer text-[#898989] hover:text-[#3A3A3A]'>
          로그아웃
        </p>
      </div>
    </div>
  );
}
