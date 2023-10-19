import React from 'react';
import BreadCrumbs from '../BreadCrumbs';
import Image from 'next/image';
import editDemoImg from '../../../../public/assets/learning-center/learning_profile_img.png';
import profileBanner from '../../../../public/assets/learning-center/profileBanner.png';
import arrowLeft from '../../../../public/assets/arrow-left-lightGrey.png';
import arrowRight from '../../../../public/assets/arrow-right-lightGrey.png';
import ContentSection from './ContentSection';

function ProfileIndex() {
  return (
    <div className='px-6 pb-6'>
      <div className='flex gap-4'>
        <div>
          <BreadCrumbs title='Profile' />
          <div className=''>
            <div className='pt-2 pb-10'>
              <Image src={profileBanner} alt='' />
            </div>
            {/* SECTION ONE */}
            <div>
              <div className='pb-1 text-[27px] font-black text-white'>
                What is a character Profile?
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
              <Image src={editDemoImg} alt='' />
            </div>
            {/* SECTION THREE */}
            <div>
              <div className='text-[27px] font-black text-white'>
                Unique username
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
            <div className='pt-10'>
              <div className='text-[27px] font-black text-white'>
                General benefits
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
            {/* SECTION FIVE */}
            <div className='my-10 rounded-[14px] border-l-[4px]  border-[#5848BC] bg-[#141224] p-4 text-[16px] text-white/[0.80]'>
              <span className='font-black'>Note:</span> Start your onboarding
              journey with beginner-friendly tips that will have you create your
              own unique characters.
            </div>
            {/* SECTION SIX */}
            <div>
              <div className='text-[27px] font-black text-white'>
                What next?
              </div>
              <p className='text-[16px] text-[#979797]'>
                Balancing uniqueness, relevance and memorability is key when
                choosing both the name and username for your AI character. This
                choices will shape how users interact with your character and
                create a lasting impression in the virtual realm.
              </p>

              <ul className='list-inside list-disc py-4 pl-2 text-[16px] text-[#979797]'>
                <li>Combine sounds or syllables to from a new name.</li>
                <li>Play with language, puns or unconventional spellings.</li>
                <li>Blend elements from different languages for uniqueness.</li>
                <li>Choose a name tied to character traits or likes.</li>
                <li>Ensure the name is not used elsewhere.</li>
              </ul>
            </div>
            {/* SECTION SEVEN */}
            <div className='grid grid-cols-2 gap-4 pt-8'>
              <div className='cursor-pointer rounded-[20px] border border-white/[0.08] bg-white/[0.08] p-5 hover:border-none hover:bg-white/[0.05]'>
                <div className='flex items-center gap-2'>
                  <Image src={arrowLeft} alt='' />
                  <span className='text-[12px] text-[#979797]'>
                    Previous step
                  </span>
                </div>
                <div className='pt-1 text-[18px] font-black text-white'>
                  Profile
                </div>
              </div>
              <div className='flex cursor-pointer flex-col items-end rounded-[20px] border border-white/[0.08] bg-white/[0.08] p-5 hover:border-none hover:bg-white/[0.05]'>
                <div className='flex items-center gap-2'>
                  <span className='text-[12px] text-[#979797]'>Next step</span>
                  <Image src={arrowRight} alt='' />
                </div>
                <div className='pt-1 text-[18px] font-black text-white'>
                  Partner Program
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContentSection />
      </div>
    </div>
  );
}

export default ProfileIndex;
