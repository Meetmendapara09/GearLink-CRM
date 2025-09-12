
export type Invoice = {
  id: string;
  customer: string;
  email: string;
  amount: string;
  dueDate: string;
  issuedDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  items: {
    name: string;
    quantity: number;
    price: string;
    total: string;
  }[];
  subtotal: string;
  tax: string;
};

export type Customer = {
  name: string;
  email: string;
  phone: string;
  totalSpent: string;
  lastPurchase: string;
  avatar: string;
  status: 'Active' | 'New' | 'Inactive';
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  imageHint: string;
};

export type CartItem = Product & { quantity: number };

export type Deal = {
  id: string;
  title: string;
  customer: string;
  value: string;
  stage: 'New Lead' | 'Contacted' | 'Proposal Sent' | 'Negotiation' | 'Closed - Won';
  assignee: {
    name: string;
    avatar: string;
  };
};

export type Task = {
  id: string;
  title: string;
  assignee: {
    name: string;
    avatar: string;
  };
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'To Do' | 'In Progress' | 'Done';
};
