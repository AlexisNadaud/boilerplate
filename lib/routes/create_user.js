'use strict';

module.exports = {
    method: 'post',
    path: '/user/create',
    options: {
        handler: async  (request, h) => {

            const { userService } = request.services();
            console.log(request);
            return userService.createUser();
        },
        response: {

        },
        tags: ['api']
    }
    
};