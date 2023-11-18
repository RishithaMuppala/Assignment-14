import {inject} from '@loopback/core';
import {
  Request,
  ResponseObject,
  RestBindings,
  get,
  response,
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const CUSTOM_RESPONSE: ResponseObject = {
  description: 'Custom Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'MessageResponse',
        properties: {
          data: {type: 'string'},
        },
      },
    },
  },
};

export class CustomController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/custom-apis/get-data')
  @response(200, CUSTOM_RESPONSE)
  ping(): object {
    return {
      data: 'Custom Response data which we can send back',
    };
  }
}
