import { faker } from '@faker-js/faker';

export const todos = (nb: number = 10) => {
  return [...Array(nb).keys()].map((i) => ({
    id: ++i,
    description: faker.lorem.sentence(),
  }));
};
