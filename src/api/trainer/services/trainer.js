'use strict';

/**
 * trainer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trainer.trainer');
