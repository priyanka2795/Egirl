import Image from 'next/image';
type RequestItemProps = {
  src: string;
  alt: string;
  selected?: boolean;
  onSelect: () => void;
};

export function RequestItem({
  src,
  alt,
  selected,
  onSelect
}: RequestItemProps): JSX.Element {
  return (
    <button
      className={`h-12 w-12 rounded border-2  ${selected && 'border-black'}`}
      onClick={onSelect}
    >
      <Image
        src={src}
        alt={alt}
        width='48px'
        height='48px'
        className='rounded object-cover'
      />
    </button>
  );
}
