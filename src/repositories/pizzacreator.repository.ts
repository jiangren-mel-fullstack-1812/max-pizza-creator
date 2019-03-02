import {DefaultCrudRepository} from '@loopback/repository';
import {Pizzacreator} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PizzacreatorRepository extends DefaultCrudRepository<
  Pizzacreator,
  typeof Pizzacreator.prototype.id
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Pizzacreator, dataSource);
  }
}
