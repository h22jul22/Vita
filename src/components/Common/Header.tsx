import { Link } from 'react-router-dom';
import { useChatModalStore, useModalStore, useUserStore } from '../../config/store';
import LoginModal from './LoginModal';
import { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import userImage from '/favicon.png';
import ProfileDropdown from './ProfileDropdown';
import GameDropdown from './GameDropdown';
import Search from './Search';
import vitaCoin from '@/assets/imgs/vitaCoin.svg';
import buttonPlus from '@/assets/imgs/button_plus.svg';

export default function Header() {
  const { modalStatus, setModalStatus } = useModalStore();
  const [gameHover, setGameHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const { user } = useUserStore();
  const setChatModalOpen = useChatModalStore((state) => state.setChatModalOpen);

  const handleLoginClick = () => {
    setModalStatus('login', true);
  };

  // 채팅 모달창 preloading
  const chatIconMouseEnterHandler = () => {
    import('@/components/Common/ChatModal');
  };

  return (
    <header className='flex items-center justify-between px-12'>
      <div className='flex gap-6 text-sm font-semibold text-primaryTextLight lg:text-base'>
        <Link to={'/'}>
          <div className='py-6 hover:text-primaryText'>홈페이지</div>
        </Link>
        <div
          className='cursor-pointer py-6 pr-4 hover:text-primaryText'
          onMouseEnter={() => setGameHover(true)}
          onMouseLeave={() => setGameHover(false)}
        >
          모든 서비스
        </div>
      </div>
      {/* 드롭다운 */}
      {gameHover && <GameDropdown setGameHover={setGameHover} />}
      <Link to={'/'}>
        <div className='text-[36px] font-bold lg:text-[42px] xl:text-[48px]'>
          VI<span className='text-white'>TA</span>
        </div>
      </Link>
      <div className='flex gap-6'>
        <div className='flex items-center gap-4'>
          {localStorage.getItem('accessToken') ? (
            <>
              <Link className='hidden xl:block' to={'/user/coin'}>
                <div className='flex items-center gap-2 rounded-md bg-slate-200 px-4 py-2'>
                  <img src={vitaCoin} alt='비타코인' />
                  <span className='font-semibold'>{user.coin}</span>
                  <img src={buttonPlus} alt='충전버튼' />
                </div>
              </Link>
              <button
                className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-slate-200'
                onClick={setChatModalOpen}
                onMouseEnter={chatIconMouseEnterHandler}
              >
                <AiOutlineMessage size={24} />
              </button>
              <button
                onMouseEnter={() => setProfileHover(true)}
                onMouseLeave={() => setProfileHover(false)}
                className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-slate-200'
              >
                <img
                  className='h-[36px] w-[36px] rounded-full object-cover'
                  src={user.profile_image ?? userImage}
                  alt='사용자 이미지'
                />
              </button>
              {profileHover && <ProfileDropdown user={user} setProfileHover={setProfileHover} />}
            </>
          ) : (
            <>
              <button onClick={handleLoginClick} className='font-semibold text-primaryTextLight hover:text-primaryText'>
                로그인
              </button>
            </>
          )}
        </div>
        <div className='hidden lg:block'>
          <Search />
        </div>
      </div>
      {modalStatus.login && <LoginModal />}
    </header>
  );
}
