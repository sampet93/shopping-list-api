export interface Item {
  id: number;
  text: string;
  done: boolean;
}

export let items: Item[] = [];