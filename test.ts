interface Fruits {
  apple: 'apple';
  banana: 'banana';
  orange: 'orange';
}

const fruits: Fruits = {
  apple: 'apple',
  banana: 'banana',
  orange: 'orange',
};

type FruitNames<T extends keyof Fruits = keyof Fruits> = Record<
  T,
  `fruit-${Fruits[T]}`
>;
