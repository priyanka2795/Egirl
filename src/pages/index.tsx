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
        brand: 'rgb(231, 88, 88)',
        brandAccent: 'rgb(201, 29, 29)',
        brandButtonText: 'white',
        defaultButtonText: 'black',
        defaultButtonBorder: 'gray',
        defaultButtonBackground: 'white',
        defaultButtonBackgroundHover: 'white',
        inputBackground: 'transparent',
        inputBorder: 'lightgray',
        inputBorderHover: 'rgb(201, 29, 29)',
        inputBorderFocus: 'rgb(201, 29, 29)',
        inputText: 'black',
        inputLabelText: 'gray',
        inputPlaceholder: 'darkgray',
        messageText: 'gray',
        messageTextDanger: 'red',
        anchorTextColor: 'gray',
        anchorTextHoverColor: 'rgb(201, 29, 29)'
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
        borderRadiusButton: '6px',
        buttonBorderRadius: '6px',
        inputBorderRadius: '6px'
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
    <div className='grid min-h-screen grid-rows-[1fr,auto]'>
      <SEO
        title='Twitter - It’s what’s happening'
        description='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
      />
      <div className='grid grid-cols-5'>
        <div className='flex items-center justify-center bg-white font-serif font-bold text-8xl italic text-main-red col-span-3'>
          e-Girls
        </div>
        <div className='flex items-center bg-main-red col-span-2'>
          <div className='container mx-40 p-10 bg-white shadow-2xl drop-shadow-2xl'>
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
