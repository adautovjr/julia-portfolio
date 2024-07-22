'use strict';

/**
 * project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project.project',
  ({ strapi }) => ({
    async findOne(slug) {
      const entity = await strapi.db.query("api::project.project").findOne({
        where: {
          $and: [{ slug }],
        },
      });

      return entity;
    },
  })
);
