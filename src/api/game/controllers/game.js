'use strict';

/**
 * game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', {
    async create(ctx) {
        const user = ctx.state.user;

        const game = await super.create(ctx);

        const updated = await strapi.entityService.update("api::game.game", game.data.id, {
            data: {
                owner: user.id
            }
        });

        return result;
    },

    async find(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };
    
        return super.find(ctx);
    },

    async findOne(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };
    
        return super.findOne(ctx);
    },
    async update(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };
    
        return super.update(ctx);
    },
    async delete(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            owner: user.id
        };
    
        return super.delete(ctx);
    }
});


