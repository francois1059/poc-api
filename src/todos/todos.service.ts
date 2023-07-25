import { Injectable } from '@nestjs/common';
import { todos } from './todos';

@Injectable()
export class TodosService {
  listTodos() {
    return Promise.resolve(todos());
  }
}
