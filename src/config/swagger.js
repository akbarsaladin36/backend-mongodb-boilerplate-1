const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Nodejs,Express,and MongoDB Boilerplate REST API',
      version: '1.0.0',
      description: 'A simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: `http://localhost:${process.env.DB_PORT}/backend11/api/v1`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        }
      },
      schemas: {
        RegisterInput: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                password: {
                    type: 'string'
                }
            }
        },
        LoginInput: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                },
                password: {
                    type: 'string'
                }
            }
        },
        UserCreateInput: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                password: {
                    type: 'string'
                }
            }
        },
        UserUpdateInput: {
            type: 'object',
            properties: {
                first_name: {
                    type: 'string'
                },
                last_name: {
                    type: 'string'
                },
                address: {
                    type: 'string'
                },
                phone_number: {
                    type: 'string'
                }
            }  
        },
        UserResponse: {
            type: 'object',
            properties: {
                user_uuid: {
                    type: 'string',
                },
                username: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                first_name: {
                    type: 'string'
                },
                last_name: {
                    type: 'string'
                },
                address: {
                    type: 'string'
                },
                phone_number: {
                    type: 'string'
                }
            }
        },
        UserUpdateResponse: {
            type: 'object',
            properties: {
                user_uuid: {
                    type: 'string',
                },
                username: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                first_name: {
                    type: 'string'
                },
                last_name: {
                    type: 'string'
                },
                address: {
                    type: 'string'
                },
                phone_number: {
                    type: 'string'
                },
                updated_date: {
                    type: 'string',
                    format: 'date-time'
                },
                updated_by: {
                    type: 'string'
                },
                updated_by_username: {
                    type: 'string'
                },
            }
        }
      }
    }
    // security: [{
    //   bearerAuth: []
    // }]
 },
  apis: ['./src/app/routes/*.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    swaggerOptions: {
        url: '/backend11/api/v1/api-docs.json', // URL untuk mengakses spesifikasi Swagger JSON
    }
  }));
};