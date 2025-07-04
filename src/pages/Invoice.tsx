
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { users } from "@/lib/mockData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Invoice = () => {
  const { userId, purchaseIndex } = useParams<{ userId: string; purchaseIndex: string }>();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === userId);
  const purchase = user?.purchases[Number(purchaseIndex)];

  if (!user || !purchase) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4 text-aktivGreen-quaternary">Faktura hittades inte</h2>
        <Button onClick={() => navigate(-1)} variant="outline" className="border-aktivGreen-base/20">
          <ArrowLeft className="mr-2 h-4 w-4" /> Gå tillbaka
        </Button>
      </div>
    );
  }

  // Generate invoice number using userId, purchase index and date
  const generateInvoiceNumber = () => {
    const dateParts = purchase.date.split('-');
    return `FAK-${userId}${purchaseIndex}-${dateParts[0]}${dateParts[1]}${dateParts[2]}`;
  };

  // Add 30 days to purchase date for due date
  const getDueDate = () => {
    const date = new Date(purchase.date);
    date.setDate(date.getDate() + 30);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="border-aktivGreen-base/20 text-aktivGreen-quaternary hover:bg-aktivGreen-base/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Tillbaka till användare
        </Button>
        <Button 
          variant="outline"
          onClick={() => window.print()}
          className="border-aktivGreen-base/20 text-aktivGreen-quaternary hover:bg-aktivGreen-base/10"
        >
          <Printer className="mr-2 h-4 w-4" /> Skriv ut faktura
        </Button>
      </div>

      <Card className="border-aktivGreen-base/20 print:shadow-none">
        <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <CardTitle className="text-aktivGreen-quaternary text-xl md:text-2xl">FAKTURA</CardTitle>
              <p className="text-sm text-muted-foreground">#{generateInvoiceNumber()}</p>
            </div>
            <div className="text-right mt-4 sm:mt-0">
              <p className="text-sm font-medium">Aktiv Framtid</p>
              <p className="text-sm text-muted-foreground">Göteborg, Sverige</p>
              <p className="text-sm text-muted-foreground">info@aktivframtid.se</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-aktivGreen-quaternary mb-2">Fakturera till:</h3>
              <p className="text-sm">{user.name}</p>
              <p className="text-sm text-muted-foreground">Personnummer: {user.personnummer}</p>
            </div>
            <div className="md:text-right">
              <div className="flex justify-between md:justify-end md:space-x-8">
                <div className="md:text-right">
                  <h3 className="text-sm font-medium text-aktivGreen-quaternary mb-2">Utfärdandedatum:</h3>
                  <p className="text-sm">{purchase.date}</p>
                </div>
                <div className="md:text-right">
                  <h3 className="text-sm font-medium text-aktivGreen-quaternary mb-2">Förfallodatum:</h3>
                  <p className="text-sm">{getDueDate()}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-aktivGreen-base/20" />
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-aktivGreen-base/20">
                  <th className="text-left py-3 text-aktivGreen-quaternary font-medium">Beskrivning</th>
                  <th className="text-left py-3 text-aktivGreen-quaternary font-medium">Kategori</th>
                  <th className="text-right py-3 text-aktivGreen-quaternary font-medium">Belopp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4">{purchase.description}</td>
                  <td className="py-4">{purchase.category}</td>
                  <td className="text-right py-4">{purchase.amount.toLocaleString()} SEK</td>
                </tr>
                <tr className="border-t border-aktivGreen-base/20">
                  <td colSpan={2} className="py-4 text-right font-medium">Delsumma:</td>
                  <td className="text-right py-4">{purchase.amount.toLocaleString()} SEK</td>
                </tr>
                <tr>
                  <td colSpan={2} className="py-2 text-right font-medium">Moms (25%):</td>
                  <td className="text-right py-2">{(purchase.amount * 0.25).toLocaleString()} SEK</td>
                </tr>
                <tr className="border-t border-aktivGreen-base/20">
                  <td colSpan={2} className="py-4 text-right font-medium text-aktivGreen-quaternary">Totalt:</td>
                  <td className="text-right py-4 font-bold text-aktivGreen-quaternary">
                    {(purchase.amount * 1.25).toLocaleString()} SEK
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col items-start border-t border-aktivGreen-base/20 bg-aktivGreen-base/5">
          <div className="w-full py-4">
            <h3 className="text-sm font-medium text-aktivGreen-quaternary mb-2">Betalningsinformation:</h3>
            <p className="text-sm text-muted-foreground">Vänligen överför totalbeloppet till:</p>
            <p className="text-sm">Aktiv Framtid</p>
            <p className="text-sm">Referens: {generateInvoiceNumber()}</p>
          </div>
          <div className="w-full pt-2">
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Invoice;
