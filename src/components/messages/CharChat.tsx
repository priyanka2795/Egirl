import Image from 'next/image';

type ChatChatProps = {
  name: string;
  atName: string;
  date: string;
  profileUrl: string;
  lastMessage: string;
};

export function CharChat({
  name,
  atName,
  date,
  profileUrl,
  lastMessage
}: ChatChatProps): JSX.Element {
  return (
    <button className='flex w-full cursor-pointer select-none items-center bg-gray-100 p-4 hover:bg-gray-200 focus:bg-gray-200'>
      <div className=' flex w-[12%]'>
        <Image
          src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
          alt={name}
          width='48px'
          height='48px'
          className='rounded-full object-cover'
        />
      </div>

      <div className='flex w-[85%] flex-col'>
        <div className='flex items-end justify-between text-black'>
          <div className='flex'>
            <h1 className='mr-2 text-sm '>{name}</h1>
            <h2 className='text-sm'>{atName}</h2>
          </div>
          <p className='text-xs'>{date}</p>
        </div>
        <p className='max-lines-1 truncate text-xs text-gray-500'>
          {lastMessage}
        </p>
      </div>
    </button>
  );
}
