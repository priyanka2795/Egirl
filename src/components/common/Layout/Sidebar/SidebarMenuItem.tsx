import TestIcon from './TestIcon';
type SidebarMenuItemProps = {
  text: string;
  active: boolean;
};

export default function SidebarMenuItem({
  text,
  active
}: SidebarMenuItemProps) {
  return (
    <div className='hoverEffect flex items-center justify-center space-x-3 text-lg text-white xl:justify-start'>
      <TestIcon className='h-7' />
      <span className={`${active && 'font-bold'} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
