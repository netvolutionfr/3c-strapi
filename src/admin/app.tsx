import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    // Expose the French locale in the admin language picker.
    locales: ['fr'],
  },
  bootstrap(app: StrapiApp) {
    // Keep default bootstrapping; extend here if admin needs customization.
    console.log(app);
  },
};
