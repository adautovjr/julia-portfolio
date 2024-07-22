'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
      type Query {
        project(slug: String, id: ID): ProjectEntityResponse
      }`,
      resolvers: {
        Query: {
          project: {
            resolve: async (_parent, args, _context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.service(
                "api::project.project"
              ).findOne(args.id || args.slug);
              return toEntityResponse(data);
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
