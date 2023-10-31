import React from 'react'
import Discord from '../../../public/assets/learning-center/discord.svg';
import Twitter from '../../../public/assets/learning-center/twitter.svg';
import Instagram from '../../../public/assets/learning-center/instagram.svg';
import Reddit from '../../../public/assets/learning-center/reddit.svg';
function SocialMediaContent() {
  return (
    <div className='flex gap-4 px-4 mt-5'>
    <Discord />
    <Twitter />
    <Instagram />
    <Reddit />
  </div>
  )
}

export default SocialMediaContent
