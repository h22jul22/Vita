import { useUserStore } from '@/config/store';

export default function ProfileImg() {
  const { user } = useUserStore();

  return (
    <>
      <div className='absolute -top-[75px] right-[30%] flex w-[150px] gap-10 rounded-full bg-gray-100 md:-top-[100px] md:w-[200px] lg:-top-[125px] lg:w-[250px] xl:-top-[150px] xl:w-[300px]'>
        <img
          className='h-full w-full scale-90 rounded-full object-cover'
          src={user.profile_image !== null ? user.profile_image! : '/favicon.png'}
          alt={user ? `${user.nickname}의 프로필 이미지` : '프로필 이미지'}
        />
      </div>
    </>
  );
}
