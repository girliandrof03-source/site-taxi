import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Send, DollarSign, Phone, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import type { SharedRide } from './SharedRidesManager';

interface BookingFormProps {
  installmentData?: {
    totalAmount: string;
  };
  fareCalculatorData?: {
    origin: string;
    destination: string;
    estimatedFare: string;
  };
}

export function BookingForm({ installmentData, fareCalculatorData }: BookingFormProps) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [offerSharedRide, setOfferSharedRide] = useState(false);
  const [availableSeats, setAvailableSeats] = useState('3');

  useEffect(() => {
    if (installmentData?.totalAmount) {
      setPaymentInfo(installmentData.totalAmount);
    }
  }, [installmentData]);

  useEffect(() => {
    if (fareCalculatorData) {
      if (fareCalculatorData.origin) {
        setOrigin(fareCalculatorData.origin);
      }
      if (fareCalculatorData.destination) {
        setDestination(fareCalculatorData.destination);
      }
    }
  }, [fareCalculatorData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin || !destination || !date || !time || !phone) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (offerSharedRide && (!availableSeats)) {
      alert('Por favor, preencha o número de assentos');
      return;
    }

    // Se oferecer carona, criar anúncio
    if (offerSharedRide) {
      const sharedRide: SharedRide = {
        id: Date.now().toString(),
        origin,
        destination,
        date,
        time,
        phone: phone.replace(/\D/g, ''), // Remove formatação
        availableSeats: parseInt(availableSeats),
        createdAt: Date.now(),
      };

      // Salvar no localStorage
      const storedRides = localStorage.getItem('sharedRides');
      const rides = storedRides ? JSON.parse(storedRides) : [];
      rides.push(sharedRide);
      localStorage.setItem('sharedRides', JSON.stringify(rides));

      alert('✅ Anúncio de viagem compartilhada criado com sucesso!\n\nSua viagem agora está disponível para outros passageiros.');
    }

    // Formatar a data para exibição
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    // Criar mensagem para WhatsApp
    let message = `🚕 *Nova Solicitação de Corrida*\\n\\n📍 *Origem:* ${origin}\\n📍 *Destino:* ${destination}\\n📅 *Data:* ${formattedDate}\\n🕐 *Hora:* ${time}\\n📱 *Telefone:* ${phone}`;
    
    if (paymentInfo) {
      message += `\\n💳 *Valor a Cobrar:* ${paymentInfo}`;
    }
    
    if (offerSharedRide) {
      message += `\\n\\n👥 *Oferecer Carona:* Sim\\n*Assentos Disponíveis:* ${availableSeats}`;
    }
    
    message += `\\n\\n_Aguardo confirmação!_`;
    
    // Número do WhatsApp (22 99711-8730 -> 5522997118730)
    const phoneNumber = '5522997118730';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Limpar formulário após envio
    if (offerSharedRide) {
      setOrigin('');
      setDestination('');
      setDate('');
      setTime('');
      setPhone('');
      setPaymentInfo('');
      setOfferSharedRide(false);
      setAvailableSeats('3');
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-white shadow-lg">
      <h2 className="mb-6 text-blue-600">Agende sua Corrida</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="origin" className="flex items-center gap-2">
            <MapPin className="size-4 text-blue-600" />
            Origem
          </Label>
          <Input
            id="origin"
            type="text"
            placeholder="Digite o endereço de partida"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination" className="flex items-center gap-2">
            <MapPin className="size-4 text-blue-600" />
            Destino
          </Label>
          <Input
            id="destination"
            type="text"
            placeholder="Digite o endereço de destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="size-4 text-blue-600" />
              Data
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="size-4 text-blue-600" />
              Hora
            </Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="size-4 text-blue-600" />
            Telefone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Digite o número de telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <label htmlFor="offerSharedRide" className="flex items-center gap-3 cursor-pointer">
              <input
                id="offerSharedRide"
                type="checkbox"
                checked={offerSharedRide}
                onChange={(e) => setOfferSharedRide(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-2">
                <Users className="size-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Oferecer Vagas para Compartilhar Viagem</p>
                  <p className="text-sm text-gray-600">Divida os custos da corrida com outros passageiros</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {offerSharedRide && (
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200 space-y-4">
            <h4 className="font-medium text-purple-900 flex items-center gap-2">
              <Users className="size-5" />
              Detalhes da Viagem Compartilhada
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="availableSeats" className="flex items-center gap-2">
                  <Users className="size-4 text-blue-600" />
                  Assentos Disponíveis
                </Label>
                <Input
                  id="availableSeats"
                  type="number"
                  value={availableSeats}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {paymentInfo && (
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <Label className="flex items-center gap-2 mb-2">
              <DollarSign className="size-4 text-green-600" />
              Valor com Parcelamento
            </Label>
            <p className="text-green-700">{paymentInfo}</p>
            <p className="text-xs text-gray-600 mt-2">
              📱 Esta solicitação será enviada para: (22) 99711-8730
            </p>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <Send className="size-4 mr-2" />
          Enviar para WhatsApp
        </Button>
      </form>
    </Card>
  );
}