import { CoinPackage } from '@/config/const';
import { useNavigate } from 'react-router-dom';

type Props = {
  coinData: CoinPackage;
};

export default function CoinBox({ coinData }: Props) {
  const navigate = useNavigate();

  const handlePaymentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        coinData,
      },
    });
  };

  return (
    <div
      onClick={(e) => handlePaymentClick(e)}
      className='flex h-[160px] w-11/12 cursor-pointer flex-col items-center gap-2 rounded-xl border border-gray-200 bg-[#F8F8F8]'
    >
      <div className='flex w-full justify-end'>
        <div className='w-7/12 rounded-bl-xl rounded-tr-xl bg-purple text-center text-sm font-medium text-[#FFFFFF]'>
          {coinData.discountRate}% OFF
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mb-[13px] flex items-center'>
          <img className='mr-2 h-[24px] w-[24px]' src='/src/assets/imgs/vitaCoin.svg' alt='vitaCoin' />
          <h1 className='text-2xl font-semibold text-deepYellow'>{coinData.coin.toLocaleString()}</h1>
        </div>
        <div className='mb-[13px] w-full border-t-2 border-dashed border-gray-300'></div>
        <p className='text-base font-semibold text-gray-500'>₩ {coinData.discountPrice.toLocaleString()}</p>
        <p className='text-xs font-semibold text-gray-300 line-through'>₩ {coinData.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
