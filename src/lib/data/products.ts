/**
 * @file This file contains mock data for products.
 * In a real application, this data would be fetched from a database (e.g., MariaDB).
 * The `products` table could have columns like: id, name, category, price, stock_quantity, image_url, image_hint.
 */

import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'PRD001',
    name: 'LED Headlight Bulb',
    category: 'Lighting',
    price: 1200.0,
    stock: 150,
    imageUrl: 'https://picsum.photos/400/400?random=1',
    imageHint: 'headlight',
  },
  {
    id: 'PRD002',
    name: 'Sporty Seat Cover',
    category: 'Accessories',
    price: 850.0,
    stock: 80,
    imageUrl: 'https://picsum.photos/400/400?random=2',
    imageHint: 'seat cover',
  },
  {
    id: 'PRD003',
    name: 'Tubeless Tyre',
    category: 'Tyres',
    price: 2500.0,
    stock: 45,
    imageUrl: 'https://picsum.photos/400/400?random=3',
    imageHint: 'tyre',
  },
  {
    id: 'PRD004',
    name: 'Disc Brake Pad',
    category: 'Brakes',
    price: 450.0,
    stock: 200,
    imageUrl: 'https://picsum.photos/400/400?random=4',
    imageHint: 'brake pad',
  },
  {
    id: 'PRD005',
    name: 'Performance Air Filter',
    category: 'Engine Parts',
    price: 1800.0,
    stock: 3,
    imageUrl: 'https://picsum.photos/400/400?random=5',
    imageHint: 'air filter',
  },
  {
    id: 'PRD006',
    name: 'Chain Lubricant',
    category: 'Maintenance',
    price: 350.0,
    stock: 120,
    imageUrl: 'https://picsum.photos/400/400?random=6',
    imageHint: 'lubricant can',
  },
  {
    id: 'PRD007',
    name: 'Mobile Holder',
    category: 'Accessories',
    price: 550.0,
    stock: 95,
    imageUrl: 'https://picsum.photos/400/400?random=7',
    imageHint: 'phone mount',
  },
  {
    id: 'PRD008',
    name: 'Engine Oil',
    category: 'Engine Parts',
    price: 950.0,
    stock: 7,
    imageUrl: 'https://picsum.photos/400/400?random=8',
    imageHint: 'engine oil',
  },
];
