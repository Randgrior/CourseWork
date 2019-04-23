import {Category} from './category.model';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  isbn: string;
  price: number;
  stock: number;
  categories: Category[];
}
