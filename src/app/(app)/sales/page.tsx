'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, X, Check, Trash2, FilePlus2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data/products';
import type { Product, CartItem } from '@/lib/types';


export default function SalesPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  }

  const handleFinalizeSale = () => {
    if (cart.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Empty Cart',
        description: 'Please add items to the sale before finalizing.',
      });
      return;
    }
    toast({
      title: 'Sale Finalized',
      description: 'A new invoice has been created for this sale.',
      action: <Check className="h-5 w-5" />,
    });
    clearCart();
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Point of Sale
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Click a product to add it to the current sale.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover"
                        data-ai-hint={product.imageHint}
                      />
                      <div className="p-3">
                        <h4 className="font-semibold text-sm truncate">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{`₹${product.price.toFixed(2)}`}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0">
                        <Button
                            variant="default"
                            size="sm"
                            className="w-full rounded-t-none"
                            onClick={() => handleAddToCart(product)}
                        >
                            <PlusCircle className="mr-2 h-4 w-4" /> Add to Sale
                        </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="sticky top-8">
          <CardHeader>
            <CardTitle>Current Sale</CardTitle>
            <CardDescription>Items in the current transaction.</CardDescription>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                <p>No items in sale.</p>
              </div>
            ) : (
              <ScrollArea className="h-[350px]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead className="w-[60px]">Qty</TableHead>
                            <TableHead className="text-right w-[80px]">Total</TableHead>
                             <TableHead className="w-[40px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                  <TableBody>
                    {cart.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium text-xs py-2">{item.name}</TableCell>
                        <TableCell className="py-2">
                          <Input
                            type="number"
                            className="h-8 w-14"
                            value={item.quantity}
                            onChange={(e) =>
                              handleUpdateQuantity(item.id, parseInt(e.target.value))
                            }
                            min="1"
                          />
                        </TableCell>
                        <TableCell className="text-right font-medium py-2">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                         <TableCell className="py-2">
                             <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleRemoveFromCart(item.id)}>
                                 <X className="h-4 w-4" />
                             </Button>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            )}
          </CardContent>
          {cart.length > 0 && (
              <>
                <Separator />
                <CardContent className='p-6 space-y-2'>
                   <div className="flex justify-between text-sm">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p className="font-medium">₹{subtotal.toFixed(2)}</p>
                    </div>
                     <div className="flex justify-between text-sm">
                        <p className="text-muted-foreground">Tax (GST @ 18%)</p>
                        <p className="font-medium">₹{tax.toFixed(2)}</p>
                    </div>
                     <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                        <p>Total</p>
                        <p>₹{total.toFixed(2)}</p>
                    </div>
                </CardContent>
                <Separator />
                <CardFooter className="flex justify-between pt-6">
                    <Button variant="outline" onClick={clearCart}>
                       <Trash2 className="mr-2 h-4 w-4" /> Clear
                    </Button>
                    <Button onClick={handleFinalizeSale}>
                        <FilePlus2 className="mr-2 h-4 w-4" /> Finalize Sale
                    </Button>
                </CardFooter>
              </>
          )}
        </Card>
      </div>
    </div>
  );
}
