import React from 'react'
import BreadCrumbs from '../BreadCrumbs';
import Image from 'next/image';
import voiceBanner from '@/assets/learning-center/voiceBanner.png'
import PrevNextStep from '../PrevNextStep';
import DemoImg from '@/assets/learning-center/blank_img.png';
import VoiceContent from './VoiceContent';

function VoiceIndex() {
  return (
    <div className='px-6 pb-6 '>
    <div className='flex gap-4'>
      <div>
        <BreadCrumbs title='Voice' />
        <div className=''>
          <div className='pt-2 pb-10'>
            <Image src={voiceBanner} alt='' />
          </div>
          {/* SECTION ONE */}
          <div>
            <div
              className='pb-1 text-[27px] font-black text-white'
              id='what_is_characterVoice'
            >
              What is a Character Voice?
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's name is their identity in this virtual world.
              Choose a name that resonates with their personality, interests,
              and traits. Whether it's a whimsical fantasy name or something
              more down-to-earth, make sure it encapsulates what makes your
              character unique. Keep in mind that this name will be how users
              address your character throughout their interactions.
            </p>
            <p className='pt-4 text-[16px] text-[#979797]'>
              Once you've carefully selected the perfect name and username.
              You will be ready to delve deeper into character's persona.
              You'll have the opportunity to define their likes, traits,
              description and the world they inhabit. This is where your
              character truly comes to life, forming connections and
              interactions with users from around the virtual realm.
            </p>
            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The name is your AI character's identity in the virtual world.
              </li>
              <li>
                Choose a name that reflects your character's personality,
                traits and interests.
              </li>
              <li>
                Consider creating a unique name that isn't common or overused.
              </li>
              <li>
                Invent new names, play with word combinations, or mix
                languages for originality.
              </li>
              <li>Ensure the name is easy to remember and pronounce.</li>
            </ul>
            <p className='text-[16px] text-[#979797]'>
              Remember, your character is a canvas for your imagination. So,
              choose wisely and have fun with the process!Your AI character is
              on the brink of a fascinating journey within the digital
              landscape you're about to create.
            </p>
          </div>
          {/* SECTION TWO */}
          <div className='py-10'>
            <Image src={DemoImg} alt='' />
          </div>
          {/* SECTION THREE */}
          <div>
            <div
              className='text-[27px] font-black text-white'
              id='how_it_works'
            >
              How it works?
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>

            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The username is your character's digital handle, how they are
                known by other users.
              </li>
              <li>Aim for a catchy and memorable username.</li>
              <li>
                Use wordplay, reference their likes, traits or incorporate
                creativity.
              </li>
              <li>
                Check for the availability of the username to ensure it's
                unique.
              </li>
              <li>
                Keep the username distinct to avoid confusions with others
              </li>
            </ul>
            <p className='text-[16px] text-[#979797]'>
              Feel free to adapt and customize this text to match the style
              and tone of your social media app, and to provide any additional
              instructions or guidance that you think users might need during
              the character creation process.
            </p>
          </div>
          {/* SECTION FOUR */}
          {/* <div className='pt-10'>
            <div className='text-[27px] font-black text-white' id='base_type'>
              Base type
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>
            <div
              className='pt-4 text-[27px] font-black text-white'
              id='roleplay'
            >
              Roleplay
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>
            <p className='text-[16px] text-[#979797]'>
              Feel free to adapt and customize this text to match the style
              and tone of your social media app, and to provide any additional
              instructions or guidance that you think users might need during
              the character creation process.
            </p>

            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The username is your character's digital handle, how they are
                known by other users.
              </li>
              <li>Aim for a catchy and memorable username.</li>
              <li>
                Use wordplay, reference their likes, traits or incorporate
                creativity.
              </li>
              <li>
                Check for the availability of the username to ensure it's
                unique.
              </li>
              <li>
                Keep the username distinct to avoid confusions with others
              </li>
            </ul>
          </div> */}
          {/* SECTION FIVE */}
          {/* <div
            className='text-[27px] font-black text-white'
            id='conversational'
          >
            Conversational
          </div> */}

          {/* <p className='text-[16px] text-[#979797]'>
            Feel free to adapt and customize this text to match the style and
            tone of your social media app, and to provide any additional
            instructions or guidance that you think users might need during
            the character creation process.
          </p> */}
          {/* SECTION SIX */}
          {/* <div className='pt-10'>
            <div className='text-[27px] font-black text-white' id='likes'>
              Likes
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>
            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The username is your character's digital handle, how they are
                known by other users.
              </li>
              <li>Aim for a catchy and memorable username.</li>
              <li>
                Use wordplay, reference their likes, traits or incorporate
                creativity.
              </li>
              <li>
                Check for the availability of the username to ensure it's
                unique.
              </li>
              <li>
                Keep the username distinct to avoid confusions with others
              </li>
            </ul>
          </div> */}
          {/* SECTION SEVEN */}
          {/* <div className='pt-6'>
            <div className='text-[27px] font-black text-white' id='traits'>
              Traits
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>

            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The username is your character's digital handle, how they are
                known by other users.
              </li>
              <li>Aim for a catchy and memorable username.</li>
              <li>
                Use wordplay, reference their likes, traits or incorporate
                creativity.
              </li>
              <li>
                Check for the availability of the username to ensure it's
                unique.
              </li>
              <li>
                Keep the username distinct to avoid confusions with others
              </li>
            </ul>
          </div> */}
          {/* SECTION EIGHT */}
          {/* <div className='pt-3 pb-10'>
            <Image src={DemoImg} alt='' />
          </div> */}
          {/* SECTION NINE */}
          {/* <div className='pt-4'>
            <div
              className='text-[27px] font-black text-white'
              id='description'
            >
              Descriptions
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname. Get creative with it! It could be related to
              their likes, traits, or even a play on words. your character's
              username should be catchy and easy to remember.
            </p>

            <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
              <li>
                The username is your character's digital handle, how they are
                known by other users.
              </li>
              <li>Aim for a catchy and memorable username.</li>
              <li>
                Use wordplay, reference their likes, traits or incorporate
                creativity.
              </li>
              <li>
                Check for the availability of the username to ensure it's
                unique.
              </li>
              <li>
                Keep the username distinct to avoid confusions with others
              </li>
            </ul>
          </div> */}
          {/* SECTION TEN */}
          {/* <div className=''>
            <div
              className='text-[27px] font-black text-white'
              id='general_desc'
            >
              General Descriptions
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname.
            </p>
          </div> */}
          {/* SECTION ELEVEN */}
          {/* <div className='pt-4'>
            <div
              className='text-[27px] font-black text-white'
              id='world_desc'
            >
              World Descriptions
            </div>
            <p className='text-[16px] text-[#979797]'>
              Feel free to adapt and customize this text to match the style
              and tone of your social media app, and to provide any additional
              instructions or guidance that you think users might need during
              the character creation process.
            </p>
          </div> */}
          {/* SECTION TWELVE */}
          {/* <div className='pt-4'>
            <div
              className='text-[18px] font-black text-white'
              id='why_is_so_important'
            >
              Why is this so important?
            </div>
            <p className='text-[16px] text-[#979797]'>
              Your character's username is their digital handle, the tag that
              identifies them to other users in the app. It's like their
              online nickname.
            </p>
          </div> */}
          {/* SECTION THIRTEEN */}
          <PrevNextStep />
        </div>
      </div>
      <VoiceContent/>
    </div>
  </div>
  )
}

export default VoiceIndex