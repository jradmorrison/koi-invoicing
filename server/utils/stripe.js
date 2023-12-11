const stripe = () => {
  const createAccount = (async () => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);
    const account = await stripe.accounts.create({
      type: 'standard',
    });
    const accountID = account.id;
    
    console.log(`account ID : ${accountID}`)
    console.log("accountCreated");
    
    const accountLink = await stripe.accountLinks.create({
      account: accountID,
      refresh_url: 'https://example.com/reauth',
      return_url: 'https://example.com/return',
      type: 'account_onboarding',
    });
    
    const url = accountLink.url;
    
    const accountObj = {
      accountID,
      url,
    }
    console.log(accountObj);
    return accountObj; //Return the URL to be placed on the Dashboard
  })
  
  createAccount();
}

module.exports = stripe;