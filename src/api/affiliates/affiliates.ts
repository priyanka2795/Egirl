import {
  getAffiliateJoinsByUser,
  getReferralJoinsByUser,
  addAffiliateLink,
  addAffiliateJoin,
  addReferralCode,
  addReferralJoin
} from '../utils/affiliates';



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



