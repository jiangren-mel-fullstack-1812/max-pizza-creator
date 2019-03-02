import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pizzacreator} from '../models';
import {PizzacreatorRepository} from '../repositories';

export class PizzacreatorsystemController {
  constructor(
    @repository(PizzacreatorRepository)
    public pizzacreatorRepository : PizzacreatorRepository,
  ) {}

  @post('/pizzacreators', {
    responses: {
      '200': {
        description: 'Pizzacreator model instance',
        content: {'application/json': {schema: {'x-ts-type': Pizzacreator}}},
      },
    },
  })
  async create(@requestBody() pizzacreator: Pizzacreator): Promise<Pizzacreator> {
    return await this.pizzacreatorRepository.create(pizzacreator);
  }

  @get('/pizzacreators/count', {
    responses: {
      '200': {
        description: 'Pizzacreator model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pizzacreator)) where?: Where,
  ): Promise<Count> {
    return await this.pizzacreatorRepository.count(where);
  }

  @get('/pizzacreators', {
    responses: {
      '200': {
        description: 'Array of Pizzacreator model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Pizzacreator}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pizzacreator)) filter?: Filter,
  ): Promise<Pizzacreator[]> {
    return await this.pizzacreatorRepository.find(filter);
  }

  @patch('/pizzacreators', {
    responses: {
      '200': {
        description: 'Pizzacreator PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() pizzacreator: Pizzacreator,
    @param.query.object('where', getWhereSchemaFor(Pizzacreator)) where?: Where,
  ): Promise<Count> {
    return await this.pizzacreatorRepository.updateAll(pizzacreator, where);
  }

  @get('/pizzacreators/{id}', {
    responses: {
      '200': {
        description: 'Pizzacreator model instance',
        content: {'application/json': {schema: {'x-ts-type': Pizzacreator}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Pizzacreator> {
    return await this.pizzacreatorRepository.findById(id);
  }

  @patch('/pizzacreators/{id}', {
    responses: {
      '204': {
        description: 'Pizzacreator PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() pizzacreator: Pizzacreator,
  ): Promise<void> {
    await this.pizzacreatorRepository.updateById(id, pizzacreator);
  }

  @put('/pizzacreators/{id}', {
    responses: {
      '204': {
        description: 'Pizzacreator PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pizzacreator: Pizzacreator,
  ): Promise<void> {
    await this.pizzacreatorRepository.replaceById(id, pizzacreator);
  }

  @del('/pizzacreators/{id}', {
    responses: {
      '204': {
        description: 'Pizzacreator DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pizzacreatorRepository.deleteById(id);
  }
}
