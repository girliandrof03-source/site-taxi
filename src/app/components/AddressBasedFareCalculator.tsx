import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Calculator, MapPin, DollarSign, Clock, Info, Navigation, ExternalLink, Route, Copy } from 'lucide-react';

interface AddressBasedFareCalculatorProps {
  onCopy?: (data: { origin: string; destination: string; estimatedFare: string }) => void;
}

export function AddressBasedFareCalculator({ onCopy }: AddressBasedFareCalculatorProps) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [tariff, setTariff] = useState<'1' | '2'>('1');
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

  // Tarifas de táxi de Cabo Frio
  const BANDEIRADA = 6.60;
  const TARIFA_KM_BANDEIRA_1 = 4.00;
  const TARIFA_KM_BANDEIRA_2 = 4.80;

  // Gerar link do Google Maps para traçar rota
  const generateMapsLink = () => {
    if (!origin || !destination) {
      return '#';
    }
    const originEncoded = encodeURIComponent(origin);
    const destinationEncoded = encodeURIComponent(destination);
    return `https://www.google.com/maps/dir/${originEncoded}/${destinationEncoded}`;
  };

  // Abrir Google Maps em nova aba
  const openGoogleMaps = () => {
    if (origin && destination) {
      window.open(generateMapsLink(), '_blank');
    }
  };

  // Calcular valor baseado na distância informada
  const calculateFare = () => {
    const distanceKm = parseFloat(distance);
    
    if (isNaN(distanceKm) || distanceKm <= 0) {
      setEstimatedFare(null);
      return;
    }

    const tarifaKm = tariff === '1' ? TARIFA_KM_BANDEIRA_1 : TARIFA_KM_BANDEIRA_2;
    const total = BANDEIRADA + (distanceKm * tarifaKm);
    setEstimatedFare(total);
  };

  // Copiar informações para o formulário de agendamento
  const handleCopyToBooking = () => {
    if (onCopy && origin && destination && estimatedFare !== null) {
      onCopy({
        origin,
        destination,
        estimatedFare: `R$ ${estimatedFare.toFixed(2)}`
      });
      alert('✅ Informações copiadas para o agendamento! Role a página para baixo.');
    }
  };

  // Rotas de exemplo para preencher rapidamente
  const quickRoutes = [
    { from: 'Centro de Cabo Frio, RJ', to: 'Praia do Forte, Cabo Frio, RJ' },
    { from: 'Rodoviária de Cabo Frio, RJ', to: 'Praia do Peró, Cabo Frio, RJ' },
    { from: 'Centro de Cabo Frio, RJ', to: 'Centro de Arraial do Cabo, RJ' },
    { from: 'Aeroporto de Cabo Frio, RJ', to: 'Centro de Cabo Frio, RJ' },
    { from: 'Centro de Cabo Frio, RJ', to: 'Centro de Búzios, RJ' },
    { from: 'Aeroporto de Cabo Frio, RJ', to: 'Rua das Pedras, Búzios, RJ' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-white p-8 border-2 border-blue-200 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-2 rounded-full mb-4">
              <Calculator className="size-5" />
              <span>Calculadora de Corrida</span>
            </div>
            <h3 className="mb-3 text-gray-900">Calcule o Valor da Sua Corrida</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Use o Google Maps para verificar a distância real entre origem e destino, depois informe a quilometragem para calcular o valor estimado.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tariff Information */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-lg shadow-sm mb-6 border border-blue-100">
              <div className="flex items-start gap-3">
                <Info className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-3">Tarifas Oficiais de Cabo Frio</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-600 text-xs mb-1">Bandeirada</p>
                      <p className="text-blue-600 text-xl">R$ {BANDEIRADA.toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-600 text-xs mb-1">Bandeira 1 (Dia - 6h às 22h)</p>
                      <p className="text-blue-600 text-xl">R$ {TARIFA_KM_BANDEIRA_1.toFixed(2)}/km</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-600 text-xs mb-1">Bandeira 2 (Noite/Feriado)</p>
                      <p className="text-blue-600 text-xl">R$ {TARIFA_KM_BANDEIRA_2.toFixed(2)}/km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Form */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <Route className="size-5 text-blue-600" />
                Passo 1: Informar Origem e Destino
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Origin Input */}
                <div>
                  <label htmlFor="origin" className="block text-gray-700 mb-2">
                    <MapPin className="size-4 inline mr-1 text-green-600" />
                    Origem
                  </label>
                  <input
                    id="origin"
                    type="text"
                    placeholder="Ex: Centro de Cabo Frio, RJ"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Destination Input */}
                <div>
                  <label htmlFor="destination" className="block text-gray-700 mb-2">
                    <Navigation className="size-4 inline mr-1 text-red-600" />
                    Destino
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="Ex: Praia do Forte, Cabo Frio, RJ"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Open Google Maps Button */}
              <div className="mb-6">
                <Button
                  onClick={openGoogleMaps}
                  disabled={!origin || !destination}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <ExternalLink className="size-5" />
                  Abrir no Google Maps para Ver Distância
                </Button>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  O Google Maps abrirá em uma nova aba mostrando a rota e a distância em km
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                  <Calculator className="size-5 text-blue-600" />
                  Passo 2: Informar Distância e Calcular Valor
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Distance Input */}
                  <div>
                    <label htmlFor="distance" className="block text-gray-700 mb-2">
                      <Route className="size-4 inline mr-1 text-blue-600" />
                      Distância (km)
                    </label>
                    <input
                      id="distance"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="Ex: 5.2"
                      value={distance}
                      onChange={(e) => {
                        setDistance(e.target.value);
                        setEstimatedFare(null);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Informe a distância que apareceu no Google Maps
                    </p>
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
                      onChange={(e) => {
                        setTariff(e.target.value as '1' | '2');
                        setEstimatedFare(null);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">Bandeira 1 - Dia (6h às 22h)</option>
                      <option value="2">Bandeira 2 - Noite/Feriado</option>
                    </select>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="mt-6">
                  <Button
                    onClick={calculateFare}
                    disabled={!distance || parseFloat(distance) <= 0}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Calculator className="size-5" />
                    Calcular Valor da Corrida
                  </Button>
                </div>
              </div>

              {/* Result */}
              {estimatedFare !== null && parseFloat(distance) > 0 && (
                <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-2 flex items-center gap-2">
                        <Route className="size-4 text-green-600" />
                        Informações da Corrida
                      </p>
                      <div className="bg-white p-4 rounded-lg space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Origem:</span>
                          <span className="text-gray-900 text-right max-w-[60%]">{origin || '-'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Destino:</span>
                          <span className="text-gray-900 text-right max-w-[60%]">{destination || '-'}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                          <span className="text-gray-600">Distância:</span>
                          <span className="text-blue-600">{parseFloat(distance).toFixed(1)} km</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Bandeira:</span>
                          <span className="text-blue-600">Bandeira {tariff}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-700 mb-2">Valor Estimado da Corrida:</p>
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="size-8 text-green-600" />
                        <span className="text-5xl text-green-600">
                          R$ {estimatedFare.toFixed(2)}
                        </span>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Bandeirada:</span>
                          <span>R$ {BANDEIRADA.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Percurso ({parseFloat(distance).toFixed(1)} km):</span>
                          <span>R$ {(estimatedFare - BANDEIRADA).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="text-green-700">Tarifa/km:</span>
                          <span className="text-green-700">R$ {tariff === '1' ? TARIFA_KM_BANDEIRA_1.toFixed(2) : TARIFA_KM_BANDEIRA_2.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-green-300">
                    <p className="text-xs text-gray-600 mb-3">
                      * Valor estimado baseado nas tarifas oficiais de Cabo Frio. O valor final pode variar de acordo 
                      com condições de trânsito e eventuais pedágios.
                    </p>
                    
                    {/* Botão Copiar para Agendamento */}
                    <Button
                      onClick={handleCopyToBooking}
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Copy className="size-4" />
                      Copiar para Agendamento
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions Card */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg shadow-sm mb-6 border border-amber-200">
              <div className="flex items-start gap-3">
                <Info className="size-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-2">Como usar a calculadora:</h4>
                  <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Digite o endereço de <strong>origem</strong> e <strong>destino</strong></li>
                    <li>Clique em <strong>"Abrir no Google Maps"</strong> - uma nova aba abrirá</li>
                    <li>No Google Maps, veja a <strong>distância em km</strong> da rota</li>
                    <li>Volte para esta página e digite a <strong>distância</strong> que apareceu</li>
                    <li>Escolha a <strong>bandeira</strong> (dia ou noite)</li>
                    <li>Clique em <strong>"Calcular Valor"</strong> para ver o valor estimado</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="mb-1">
                    <strong>Precisa de ajuda ou quer agendar uma corrida?</strong>
                  </p>
                  <p className="text-gray-600 text-xs">
                    Entre em contato pelo WhatsApp: <a href="https://wa.me/5522997118730" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">(22) 99711-8730</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}