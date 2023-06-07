import {
  getAffiliateJoinsByUser,
  getReferralJoinsByUser,
  addAffiliateLink,
  addAffiliateJoin,
  addReferralCode,
  addReferralJoin
} from '../utils/affiliates';

import { supabaseClient } from '../../config/supabaseClient';

/// Affiliates and Referrals

/// Getters

// Get affiliates by user
export async function getAffiliatesByUser(user_id: string, client: any) {
  const affiliates = await getAffiliateJoinsByUser(user_id, client);
  console.log('this is affiliates: ', affiliates);
  return affiliates;
}

// Get referrals by user
export async function getReferralsByUser(user_id: string, client: any) {
  const referrals = await getReferralJoinsByUser(user_id, client);
  console.log('this is referrals: ', referrals);
  return referrals;
}

/// Setters

// Create affiliate link
export async function createAffiliateLink(
  user_id: string,
  affiliate_link: string,
  client: any
) {
  const affiliate = await addAffiliateLink(user_id, affiliate_link, client);
  return affiliate;
}

// Create affiliate join
export async function createAffiliateJoin(
  affiliate_link: string,
  affiliate_user_id: string,
  client: any
) {
  const affiliate_join = await addAffiliateJoin(
    affiliate_link,
    affiliate_user_id,
    client
  );
  return affiliate_join;
}

// Create referral code
export async function createReferral(
  user_id: string,
  referral_code: string,
  client: any
) {
  const referral = await addReferralCode(user_id, referral_code, client);
  return referral;
}

// Create referral join
export async function createReferralJoin(
  affiliate_user_id: string,
  referral_code: string,
  client: any
) {
  const referral_join = await addReferralJoin(
    affiliate_user_id,
    referral_code,
    client
  );
  return referral_join;
}

// createAffiliateLink(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   'test-affiliate-1',
//   supabaseClient
// );
// createReferral(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   'test-referral-1',
//   supabaseClient
// );
// createAffiliateJoin(
//   'test-affiliate-1',
//   'd692bc5c-5df1-408f-9d18-a14afc8216ed',
//   supabaseClient
// );
// createReferralJoin(
//   'test-referral-1',
//   'd692bc5c-5df1-408f-9d18-a14afc8216ed',
//   supabaseClient
// );

// getAffiliatesByUser(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   supabaseClient
// );

getReferralsByUser(
  'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
  supabaseClient
);
