import { useQuery } from '@tanstack/react-query';
import SkeletonReveiwCard from '../skeleton/SkeletonReviewCard';
import { Review, ReviewPage } from '@/config/types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { reviewApi } from '@/api';
import { useEffect, useState } from 'react';
import debounce from '@/utils/debounce';
// import { Review } from '@/config/types';
// import { reviewApi } from '@/api';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function RealTimeReviewsSection() {
  const [reviewCount, setReviewCount] = useState<number>(0);

  const { data, isLoading } = useQuery<ReviewPage>({
    queryKey: ['review', 'new'], // 쿼리 키
    queryFn: async () => {
      return reviewApi.fetchReviews();
    },
  });

  console.log(data);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 1280) {
        setReviewCount(5);
      } else if (window.innerWidth >= 1024) {
        setReviewCount(4);
      } else if (window.innerWidth >= 768) {
        setReviewCount(3);
      } else {
        setReviewCount(2);
      }
      console.log('resize');
    }, 100);

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex h-[460px] items-center justify-center gap-24 px-[100px] lg:h-[610px] xl:h-[760px] xl:gap-36'>
      <div>
        <div>
          <p className='text-sm text-gray-300 lg:text-base xl:text-lg'>RECOMMEND CATEGORY</p>
          <h1 className='text-[24px] lg:text-[36px] xl:text-[44px]'>
            실시간 <span className='font-semibold'>생생후기</span>
          </h1>
          <p className='text-sm lg:text-base xl:text-lg'>게임을 더 재미있게 만드는 방법?</p>
          <p className='text-sm lg:text-base xl:text-lg'>믿을 수 있는 게임 메이트와 함께라면 가능합니다!</p>
        </div>
      </div>
      <div className='relative w-full lg:w-[500px] xl:max-w-[660px]'>
        <div className='flex flex-col gap-5'>
          {isLoading
            ? Array.from({ length: reviewCount }).map((_, i) => <SkeletonReveiwCard key={i} />)
            : data?.results?.slice(0, reviewCount).map((review: Review, i: number) => (
                <div key={i} className='flex h-[100px] justify-between rounded-3xl bg-white px-4 py-3 shadow-lg'>
                  <div>
                    <h1 className='text-lg font-bold'>{review.game_request_id}1</h1>
                    <div className='flex'>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <img key={i} src='/src/assets/imgs/star.svg' alt='별점' />
                      ))}
                    </div>
                    <div>{review.content}</div>
                  </div>
                  <div className='flex flex-col items-end justify-between'>
                    <p className='text-gray-400'>{dayjs(review.created_at).fromNow()}</p>
                    {/* FIX: review에서 게임메이트의 아이디를 받아올 수 있어야함. */}
                    <Link to={`/user/${review.game_request_id}`}>
                      <button className='rounded-md bg-primary px-2 py-1 font-semibold text-primaryText'>
                        메이트 정보
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>

        {/* 그라데이션 오버레이 적용 */}
        <div className='absolute bottom-[-20px] left-[-20px] right-[-20px] h-[100px] bg-gradient-to-t from-primary to-transparent'></div>
      </div>
    </div>
  );
}