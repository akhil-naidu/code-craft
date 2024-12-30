const data =
  process.env.NODE_ENV === 'development'
    ? {
        domain: 'https://premium-griffon-43.clerk.accounts.dev/',
        applicationID: 'convex',
      }
    : {
        domain: 'https://clerk.fsadp.com',
        applicationID: 'convex',
      };

export default {
  providers: [data],
};
