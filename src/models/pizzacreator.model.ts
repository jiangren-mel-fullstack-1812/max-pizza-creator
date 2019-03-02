import {Entity, model, property} from '@loopback/repository';

@model()
export class Pizzacreator extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
  })
  quantity?: number;


  constructor(data?: Partial<Pizzacreator>) {
    super(data);
  }
}
