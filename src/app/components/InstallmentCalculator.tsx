import { useState } from 'react';
import { Calculator, CreditCard, ArrowRight, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface InstallmentCalculatorProps {
  onCopy?: (data: { totalAmount: string }) => void;
}

export function InstallmentCalculator({ onCopy }: InstallmentCalculatorProps) {
  const [tripPrice, setTripPrice] = useState('');
  const [installments, setInstallments] = useState<number>(2);
  const [machineAmount, setMachineAmount] = useState<number | null>(null);
  const [installmentValue, setInstallmentValue] = useState<number | null>(null);

  // Taxas do Mercado Pago por número de parcelas
  // O cliente paga esses valores por parcela (com juros do MP)
  const installmentValues: { [key: number]: { [key: number]: number } } = {
    100: { // Para uma viagem de R$ 100
      2: 57.90,
      3: 40.27,  // Interpolado
      4: 30.49,  // Interpolado
      5: 24.14,
      6: 20.45,  // Interpolado
      7: 17.67,  // Interpolado
      8: 15.56,  // Interpolado
      9: 13.89,  // Interpolado
      10: 12.54, // Interpolado
      11: 11.43, // Interpolado
      12: 10.75,
    }
  };

  const calculateInstallment = () => {
    const price = parseFloat(tripPrice);
    if (price > 0) {
      // Valor fixo a passar na máquina (5.61% de taxa fixa)
      const amountToCharge = price * 1.0561;
      
      // Valor da parcela proporcional ao preço informado
      const baseInstallment = installmentValues[100][installments];
      const perInstallment = (baseInstallment * price) / 100;
      
      setMachineAmount(amountToCharge);
      setInstallmentValue(perInstallment);
    }
  };

  const handleCopyToBooking = () => {
    if (machineAmount && onCopy) {
      const bookingData = {
        totalAmount: `R$ ${machineAmount.toFixed(2)} (${installments}x de R$ ${installmentValue?.toFixed(2)})`
      };
      onCopy(bookingData);
      
      // Scroll para o formulário de agendamento
      const bookingSection = document.getElementById('agendar');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full mb-3">
          <Calculator className="size-4" />
          <span className="text-sm">Simulador de Parcelamento</span>
        </div>
        <h3 className="text-gray-900">Calcule o Valor com Taxas</h3>
        <p className="text-sm text-gray-600 mt-2">
          Descubra quanto cobrar para receber o valor desejado
        </p>
      </div>

      {/* Input de Valor Desejado */}
      <div className="mb-4">
        <label htmlFor="tripPrice" className="block text-gray-700 mb-2 text-sm">
          Preço da viagem (R$)
        </label>
        <Input
          id="tripPrice"
          type="number"
          placeholder="Ex: 100.00"
          value={tripPrice}
          onChange={(e) => setTripPrice(e.target.value)}
          min="0"
          step="0.01"
          className="w-full"
        />
      </div>

      {/* Seleção de Parcelas */}
      <div className="mb-4">
        <label htmlFor="installments" className="block text-gray-700 mb-2 text-sm">
          Número de parcelas
        </label>
        <select
          id="installments"
          value={installments}
          onChange={(e) => setInstallments(parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <option key={num} value={num}>
              {num}x
            </option>
          ))}
        </select>
      </div>

      {/* Botão Calcular */}
      <Button
        onClick={calculateInstallment}
        disabled={!tripPrice || parseFloat(tripPrice) <= 0}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 mb-4"
      >
        <Calculator className="size-4 mr-2" />
        Calcular
      </Button>

      {/* Resultado */}
      {machineAmount !== null && installmentValue !== null && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-200">
          <div className="text-center mb-3">
            <p className="text-sm text-gray-700 mb-2">Parcelas para o cliente:</p>
            <div className="flex items-center justify-center gap-2 mb-1">
              <CreditCard className="size-5 text-green-600" />
              <span className="text-2xl text-green-600">
                {installments}x de R$ {installmentValue.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-green-200 mb-3">
            <p className="text-xs text-gray-600 text-center">
              💰 Você receberá: <strong className="text-green-700">R$ {parseFloat(tripPrice).toFixed(2)}</strong>
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              ⚙️ Passar na máquina: <strong>R$ {machineAmount.toFixed(2)}</strong>
            </p>
          </div>

          {/* Botão Copiar para Agendamento */}
          <Button
            onClick={handleCopyToBooking}
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <Copy className="size-4 mr-2" />
            Usar no Agendamento
          </Button>

          {/* Informação do WhatsApp */}
          <div className="mt-3 pt-3 border-t border-green-200">
            <p className="text-xs text-gray-600 text-center">
              📱 O valor da máquina será enviado automaticamente para: <strong>(22) 99711-8730</strong>
            </p>
          </div>
        </div>
      )}

      {/* Informação sobre Mercado Pago */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs text-gray-700 text-center">
          <strong>💳 Aceitamos Parcelamento</strong><br />
          Parcele sua corrida em até 12x no cartão
        </p>
      </div>
    </div>
  );
}