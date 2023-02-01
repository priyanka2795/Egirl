import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { LoginMain } from '@components/login/login-main';
import { LoginFooter } from '@components/login/login-footer';
import type { ReactElement, ReactNode } from 'react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/account/account';

export default function Login(): JSX.Element {
  const session = useSession();
  const supabase = useSupabaseClient();

  const customTheme = {
    default: {
      colors: {
        brand: 'hsla(333, 92%, 77%, 1)',
        brandAccent: 'hsla(333, 92%, 35%, 1)',
        brandButtonText: 'white',
        defaultButtonText: 'white',
        defaultButtonBackground: 'hsla(333, 92%, 77%, 1)',
        defaultButtonBackgroundHover: 'hsla(333, 92%, 35%, 1)',
        inputBackground: 'transparent',
        inputBorder: 'lightgray',
        inputBorderHover: 'gray',
        inputBorderFocus: 'gray',
        inputText: 'black',
        inputLabelText: 'gray',
        inputPlaceholder: 'darkgray',
        messageText: 'gray',
        messageTextDanger: 'red',
        anchorTextColor: 'gray',
        anchorTextHoverColor: 'darkgray'
      },
      space: {
        spaceSmall: '4px',
        spaceMedium: '8px',
        spaceLarge: '16px',
        labelBottomMargin: '8px',
        anchorBottomMargin: '4px',
        emailInputSpacing: '4px',
        socialAuthSpacing: '4px',
        buttonPadding: '10px 15px',
        inputPadding: '10px 15px'
      },
      fontSizes: {
        baseBodySize: '13px',
        baseInputSize: '14px',
        baseLabelSize: '14px',
        baseButtonSize: '14px'
      },
      fonts: {
        bodyFontFamily: `ui-sans-serif, sans-serif`,
        buttonFontFamily: `ui-sans-serif, sans-serif`,
        inputFontFamily: `ui-sans-serif, sans-serif`,
        labelFontFamily: `ui-sans-serif, sans-serif`
      },
      borderWidths: {
        buttonBorderWidth: '1px',
        inputBorderWidth: '1px'
      },
      radii: {
        borderRadiusButton: '4px',
        buttonBorderRadius: '4px',
        inputBorderRadius: '4px'
      }
      // dark: {
      //   colors: {
      //     brandButtonText: 'white',
      //     defaultButtonBackground: '#2e2e2e',
      //     defaultButtonBackgroundHover: '#3e3e3e',
      //     //..
      //   },
      // },
      // // You can also add more theme variations with different names.
      // evenDarker: {
      //   colors: {
      //     brandButtonText: 'white',
      //     defaultButtonBackground: '#1e1e1e',
      //     defaultButtonBackgroundHover: '#2e2e2e',
      //     //..
      //   },
      // },
    }
  };
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto] bg-white'>
      <SEO
        title='Twitter - It’s what’s happening'
        description='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
      />
      <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center bg-white font-mono text-8xl italic text-black text-pink-400'>
          e-Girls
        </div>
        <div className='flex items-center bg-gradient-to-b from-pink-300 to-red-200'>
          <div className='container mx-40 bg-white p-10'>
            {!session ? (
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: customTheme }}
                providers={['google', 'twitter', 'apple']}
                theme='default'
              />
            ) : (
              <Account session={session} />
            )}
          </div>
        </div>
      </div>

      {/* <LoginMain />
      <LoginFooter /> */}
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>{page}</AuthLayout>
);
