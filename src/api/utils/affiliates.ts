/// Getters

// Get affiliate link id for given affiliate link
export async function getAffiliateLinkId(affiliate_link: string, client: any) {
  let { data, error, status } = await client
    .from('affiliate_links')
    .select(`id`)
    .filter('affiliate_link', 'eq', affiliate_link);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data[0]['id'];
}

// Get affiliate link for user
export async function getAffiliateLink(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('affiliate_links')
    .select(`id, affiliate_link, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data[0];
}

// Get affiliate joins for user
export async function getAffiliateJoinsByUser(user_id: string, client: any) {
  let affiliate_link_id_data = await getAffiliateLink(user_id, client);
  console.log("this is affiliate_link_id_data: ", affiliate_link_id_data)
  let affiliate_link_id = affiliate_link_id_data['id'];
  console.log("this is affiliate_link_id: ", affiliate_link_id)
  let { data, error, status } = await client
    .from('affiliate_joins')
    .select(`affiliate_link_id, affiliate_user_id, created_at`)
    .filter('affiliate_link_id', 'eq', affiliate_link_id);

  if ((error && status !== 406) || !data) {
    console.log('this is getAffiliateJoinsByUser error: ', error);
    throw error;
  }

  return data;
}

// Get referral id for given referral code
export async function getReferralId(referral_code: string, client: any) {
  let { data, error, status } = await client
    .from('referrals')
    .select(`id`)
    .filter('referral_code', 'eq', referral_code);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data[0]['id'];
}

// Get referral link for user
export async function getReferralLink(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('referrals')
    .select(`id, referral_code, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data[0];
}

// Get referral joins for user
export async function getReferralJoinsByUser(user_id: string, client: any) {
  let referral_code_data = await getReferralLink(user_id, client);
  let referral_code_id = referral_code_data['id'];
  console.log("this is referral_code_id: ", referral_code_id)
  let { data, error, status } = await client
    .from('referral_joins')
    .select(`referral_id, referral_user_id, created_at`)
    .filter('referral_id', 'eq', referral_code_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

/// Setters

// Add affiliate link
export async function addAffiliateLink(
  user_id: string,
  affiliate_link: string,
  client: any
) {
  let affiliate_link_data = {
    user_id,
    affiliate_link,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('affiliate_links')
    .insert([affiliate_link_data]);

  if (error && status !== 201) {
    throw error;
  }

  return affiliate_link_data;
}

// Add affiliate join
export async function addAffiliateJoin(
  affiliate_link: string,
  affiliate_user_id: string,
  client: any
) {
  let affiliate_link_id = await getAffiliateLinkId(affiliate_link, client);
  let affiliate_join_data = {
    affiliate_link_id,
    affiliate_user_id,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('affiliate_joins')
    .insert([affiliate_join_data]);

  if (error && status !== 201) {
    throw error;
  }

  return affiliate_join_data;
}

// Add referral code
export async function addReferralCode(
  referral_code: string,
  referral_user_id: string,
  client: any
) {
  let referral_data = {
    referral_user_id,
    referral_code,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('referrals')
    .insert([referral_data]);

  if (error && status !== 201) {
    throw error;
  }

  return referral_data;
}

// Add referral join
export async function addReferralJoin(
  referral_code: string,
  referral_user_id: string,
  client: any
) {
  let referral_id = await getReferralId(referral_code, client);
  let referral_join_data = {
    referral_id,
    referral_user_id,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client
    .from('referral_joins')
    .insert([referral_join_data]);

  if (error && status !== 201) {
    throw error;
  }

  return referral_join_data;
}
