
'use client';

import { useState, useTransition } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import SalesChart, { chartData as monthlySalesData } from '@/components/sales-chart';
import CategorySalesChart, { chartData as categorySalesData } from '@/components/category-sales-chart';
import TopProductsChart, { chartData as topProductsData } from '@/components/top-products-chart';
import { Button } from '@/components/ui/button';
import { Download, Sparkles, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { getSalesReportSummary } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import ReactMarkdown from 'react-markdown';


export default function ReportsPage() {
    const [isPending, startTransition] = useTransition();
    const [summary, setSummary] = useState<string | null>(null);
    const { toast } = useToast();

    const handleDownloadPdf = () => {
        const input = document.getElementById('reports-content');
        if (input) {
            // Add a temporary class to set a specific width for PDF generation
            input.classList.add('pdf-render');
            
            html2canvas(input, { 
                scale: 2,
                onclone: (document) => {
                    // Ensure the content is visible during rendering
                    const content = document.getElementById('reports-content');
                    if(content) {
                        content.style.position = 'absolute';
                        content.style.left = '0';
                        content.style.top = '0';
                        content.style.width = '1024px'; // A fixed width for consistent PDF layout
                    }
                }
            }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`sales-report-${new Date().toISOString().split('T')[0]}.pdf`);
            
            // Remove the temporary class after rendering
            input.classList.remove('pdf-render');
            });
        }
    };

    const handleGenerateSummary = () => {
        setSummary(null);
        startTransition(async () => {
            const response = await getSalesReportSummary({
                salesData: {
                    monthlySales: monthlySalesData,
                    categorySales: categorySalesData,
                    topProducts: topProductsData,
                }
            });
            if (response.success && response.data) {
                setSummary(response.data.summary);
            } else {
                toast({
                variant: 'destructive',
                title: 'Error',
                description: response.error || 'Failed to generate summary.',
                });
            }
        });
    }

  return (
    <div className="space-y-8">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">
            Sales Reports
            </h1>
            <p className="text-muted-foreground">
                Analyze your sales data and generate AI-powered insights.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleGenerateSummary} disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate AI Summary
            </Button>
            <Button onClick={handleDownloadPdf}>
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
            </Button>
        </div>
      </div>

      <div id="reports-content" className="space-y-8">
        
        {isPending && (
            <Card className="text-center p-12">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">
                    Our AI is analyzing your data...
                </p>
            </Card>
        )}

        {summary && (
             <Card className="animate-in fade-in-50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-accent" />
                        AI-Generated Insights
                    </CardTitle>
                    <CardDescription>
                        A summary of key trends and performance based on your sales data.
                    </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{summary}</ReactMarkdown>
                </CardContent>
            </Card>
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
            <CardDescription>
              This chart shows the total sales revenue over the last six months, providing a clear view of your business's performance and growth trajectory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Category-wise Sales</CardTitle>
                    <CardDescription>
                        This pie chart breaks down sales by product category, helping you understand which types of products are most popular with your customers.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CategorySalesChart />
                </CardContent>
            </Card>
             <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Top-Selling Products</CardTitle>
                    <CardDescription>
                        This bar chart ranks your best-performing products by sales quantity, allowing you to quickly identify your most valuable items.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <TopProductsChart />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
