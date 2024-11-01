import React from 'react';
import { getGame } from '@/config/const';
import { MateGameInfo } from '@/config/types';

interface ChatMateRequestInfoProps {
  mateGameInfo: MateGameInfo;
  setOrderModalOpen: () => void;
}

const ChatMateRequestInfo: React.FC<ChatMateRequestInfoProps> = ({ mateGameInfo, setOrderModalOpen }) => {
  return (
    <div className='sticky top-0 mx-3 flex items-center gap-3 rounded-xl bg-white px-4 py-2'>
      <img className='h-[75px] w-[75px] object-contain' src={getGame(mateGameInfo.game_id)?.gameCardImg} />
      <div className='flex min-w-[180px] grow flex-col gap-[1px]'>
        <span className='max-w-[192px] truncate font-semibold'>{getGame(mateGameInfo.game_id)?.title}</span>
        {mateGameInfo.average_rating ? (
          <div className='flex items-center gap-[1px]'>
            <img src='/src/assets/imgs/star.svg' alt='리뷰 별점 아이콘' className='h-[16px] w-[16px]' />
            <span className='text-sm'>{mateGameInfo.average_rating}</span>
            <span className='max-w-[192px] truncate text-sm text-gray-300'>
              &nbsp;| 리뷰 수 {mateGameInfo.review_count}
            </span>
          </div>
        ) : (
          <span className='max-w-[192px] truncate text-sm text-gray-300'>
            {mateGameInfo.level ? mateGameInfo.level : mateGameInfo.description}
          </span>
        )}
        <div className='flex items-center gap-1'>
          <img className='h-5 w-5 rounded-full' src='/favicon.png' />
          <span className='font-semibold text-primary'>{mateGameInfo.request_price}</span>
          <span className='text-sm text-gray-300'>/판</span>
        </div>
      </div>
      <button
        className='rounded-lg bg-gradient-to-r from-primary to-limeGreen px-4 py-1 font-semibold'
        onClick={setOrderModalOpen}
      >
        의뢰
      </button>
    </div>
  );
};

export default ChatMateRequestInfo;
