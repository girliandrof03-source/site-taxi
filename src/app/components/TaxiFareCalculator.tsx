import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, MapPin, DollarSign, Clock, Info } from 'lucide-react';

export function TaxiFareCalculator() {
  const [distance, setDistance] = useState('');
  const [tariff, setTariff] = useState<'1' | '2'>('1');
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

  // Tarifas de táxi de Cabo Frio
  const BANDEIRADA = 6.60; // Valor inicial
  const TARIFA_KM_BANDEIRA_1 = 4.00; // Por km durante o dia (6h-22h)
  const TARIFA_KM_BANDEIRA_2 = 4.80; // Por km à noite/fim de semana/feriado
  const HORA_PARADA = 38.75; // Hora parada ou lenta

  const popularRoutes = [
    { name: 'Centro - Praia do Forte', distance: 5, description: 'Centro até Praia do Forte' },
    { name: 'Rodoviária - Praia do Forte', distance: 7, description: 'Rodoviária até Praia do Forte' },
    { name: 'Centro - Arraial do Cabo', distance: 8, description: 'Centro até Arraial do Cabo' },
    { name: 'Aeroporto - Centro', distance: 12, description: 'Aeroporto até Centro de Cabo Frio' },
    { name: 'Centro - Búzios', distance: 25, description: 'Centro até Búzios' },
    { name: 'Aeroporto - Búzios', distance: 35, description: 'Aeroporto até Búzios' },
  ];

  const calculateFare = (distanceKm: number) => {
    const tarifaKm = tariff === '1' ? TARIFA_KM_BANDEIRA_1 : TARIFA_KM_BANDEIRA_2;
    const total = BANDEIRADA + (distanceKm * tarifaKm);
    return total;
  };

  const handleCalculate = () => {
    const distanceValue = parseFloat(distance);
    if (distanceValue > 0) {
      const fare = calculateFare(distanceValue);
      setEstimatedFare(fare);
    }
  };

  const handleRouteSelect = (routeDistance: number) => {
    setDistance(routeDistance.toString());
    const fare = calculateFare(routeDistance);
    setEstimatedFare(fare);
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 border-2 border-blue-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-2 rounded-full mb-4">
          <Calculator className="size-5" />
          <span>Calculadora de Corrida</span>
        </div>
        <h3 className="mb-3 text-gray-900">Calcule o Valor da Sua Corrida</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Saiba quanto vai custar sua corrida de táxi em Cabo Frio antes de solicitar!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tariff Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-gray-900 mb-2">Tarifas de Cabo Frio</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-700"><strong>Bandeirada:</strong> R$ {BANDEIRADA.toFixed(2)}</p>
                  <p className="text-gray-700"><strong>Bandeira 1 (Dia):</strong> R$ {TARIFA_KM_BANDEIRA_1.toFixed(2)}/km</p>
                  <p className="text-gray-600 text-xs mt-1">Dias úteis: 06h às 22h</p>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Bandeira 2 (Noite/Feriado):</strong> R$ {TARIFA_KM_BANDEIRA_2.toFixed(2)}/km</p>
                  <p className="text-gray-600 text-xs mt-1">Noites, Domingos e Feriados</p>
                  <p className="text-gray-700 mt-2"><strong>Hora Parada:</strong> R$ {HORA_PARADA.toFixed(2)}/hora</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-gray-900 mb-4">Insira os Dados da Corrida</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Distance Input */}
            <div>
              <label htmlFor="distance" className="block text-gray-700 mb-2">
                <MapPin className="size-4 inline mr-1" />
                Distância (km)
              </label>
              <Input
                id="distance"
                type="number"
                placeholder="Ex: 10"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                min="0"
                step="0.1"
                className="w-full"
              />
            </div>

            {/* Tariff Selection */}
            <div>
              <label htmlFor="tariff" className="block text-gray-700 mb-2">
                <Clock className="size-4 inline mr-1" />
                Bandeira
              </label>
              <select
                id="tariff"
                value={tariff}
                onChange={(e) => setTariff(e.target.value as '1' | '2')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">Bandeira 1 - Dia (R$ {TARIFA_KM_BANDEIRA_1.toFixed(2)}/km)</option>
                <option value="2">Bandeira 2 - Noite/Feriado (R$ {TARIFA_KM_BANDEIRA_2.toFixed(2)}/km)</option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="mt-6">
            <Button
              onClick={handleCalculate}
              disabled={!distance || parseFloat(distance) <= 0}
              className="w-full bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:from-blue-700 hover:to-sky-700"
            >
              <Calculator className="size-4 mr-2" />
              Calcular Valor
            </Button>
          </div>

          {/* Result */}
          {estimatedFare !== null && (
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 mb-1">Valor Estimado da Corrida:</p>
                  <div className="flex items-center gap-2">
                    <DollarSign className="size-6 text-green-600" />
                    <span className="text-4xl text-green-600">
                      R$ {estimatedFare.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {distance} km • Bandeira {tariff}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-xs text-gray-600">
                  * Valor estimado. O valor final pode variar de acordo com o percurso real, 
                  pedágios e condições de trânsito.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div className="flex items-start gap-3">
            <Info className="size-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                <strong>Importante:</strong> Esta calculadora fornece valores estimados baseados nas tarifas oficiais de táxi de Cabo Frio.
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• O valor final pode incluir pedágios e taxas adicionais</li>
                <li>• Bagagens extras podem ter custo adicional</li>
                <li>• Para corridas longas ou turísticas, solicite orçamento personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}