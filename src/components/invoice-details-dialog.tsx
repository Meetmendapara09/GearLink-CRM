'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cog, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { Invoice } from '@/lib/types';

const handleDownloadPdf = (invoiceId: string) => {
  const input = document.getElementById(`invoice-content`);
  if (input) {
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${invoiceId}.pdf`);
    });
  }
};

export function InvoiceDetailsDialog({
  invoice,
  isOpen,
  onOpenChange,
}: {
  invoice: Invoice | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Invoice Details</DialogTitle>
          <DialogDescription>
            Viewing invoice {invoice.id} for {invoice.customer}.
          </DialogDescription>
        </DialogHeader>
        <div id="invoice-content" className="bg-background p-8 pt-4">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Cog className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary font-headline">
                  GearLink
                </h1>
              </div>
              <p className="text-muted-foreground text-sm">
                123 Auto Lane, New Delhi, India
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold">INVOICE</h2>
              <p className="text-muted-foreground">#{invoice.id}</p>
              <Badge
                variant={
                  invoice.status === 'Paid'
                    ? 'default'
                    : invoice.status === 'Pending'
                    ? 'secondary'
                    : 'destructive'
                }
                className={`mt-2`}
              >
                {invoice.status}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="font-semibold mb-1">Bill to</p>
              <p className="font-bold text-lg">{invoice.customer}</p>
              <p className="text-muted-foreground text-sm">{invoice.email}</p>
            </div>
            <div className="text-right">
              <div className="grid grid-cols-2">
                <p className="font-semibold">Issue Date:</p> <p>{invoice.issuedDate}</p>
                <p className="font-semibold">Due Date:</p> <p>{invoice.dueDate}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Item</TableHead>
                  <TableHead className="text-center">Qty</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-center">{item.quantity}</TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                    <TableCell className="text-right">{item.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p className="font-medium">{invoice.subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Tax (GST @ 18%)</p>
                <p className="font-medium">{invoice.tax}</p>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">{invoice.amount}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-muted-foreground text-sm">
            <p>Thank you for your business!</p>
            <p>GearLink | contact@gearlink.in</p>
          </div>
        </div>
        <DialogFooter className="p-6 pt-0 bg-background border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => handleDownloadPdf(invoice.id)}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
