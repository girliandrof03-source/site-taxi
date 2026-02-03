import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export interface SharedRide {
  id: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  phone: string;
  availableSeats: number;
  createdAt: number;
}

export function SharedRidesManager() {
  const [sharedRides, setSharedRides] = useState<SharedRide[]>([]);

  useEffect(() => {
    // Carregar viagens do localStorage
    const storedRides = localStorage.getItem('sharedRides');
    if (storedRides) {
      const rides = JSON.parse(storedRides);
      
      // Limpar automaticamente viagens antigas (mais de 24 horas passadas)
      const now = new Date();
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      const validRides = rides.filter((ride: SharedRide) => {
        const rideDateTime = new Date(`${ride.date}T${ride.time}`);
        return rideDateTime > oneDayAgo;
      });
      
      // Se houve limpeza, atualizar localStorage
      if (validRides.length !== rides.length) {
        localStorage.setItem('sharedRides', JSON.stringify(validRides));
      }
      
      setSharedRides(validRides);
    }
  }, []);

  const handleContact = (ride: SharedRide) => {
    const [year, month, day] = ride.date.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    
    const message = encodeURIComponent(
      `🚖 *Interesse em Viagem Compartilhada*\n\n` +
      `📍 Rota: ${ride.origin} → ${ride.destination}\n` +
      `📅 Data: ${formattedDate}\n` +
      `🕐 Horário: ${ride.time}\n` +
      `👥 Vagas disponíveis: ${ride.availableSeats}\n\n` +
      `📞 Contato do anunciante: ${ride.phone}\n\n` +
      `Tenho interesse nesta viagem compartilhada!`
    );
    
    // Enviar para o número fixo do proprietário do táxi
    window.open(`https://wa.me/5522997118730?text=${message}`, '_blank');
  };

  const handleDelete = (id: string) => {
    const updatedRides = sharedRides.filter(ride => ride.id !== id);
    setSharedRides(updatedRides);
    localStorage.setItem('sharedRides', JSON.stringify(updatedRides));
  };

  // Filtrar viagens futuras e ordenar por data
  const futureRides = sharedRides
    .filter(ride => {
      const rideDateTime = new Date(`${ride.date}T${ride.time}`);
      return rideDateTime > new Date();
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });

  if (futureRides.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="mb-3 text-blue-600">Viagens Compartilhadas Disponíveis</h2>
          <p className="text-gray-600">
            Compartilhe sua viagem e divida os custos com outros passageiros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureRides.map((ride) => {
            const [year, month, day] = ride.date.split('-');
            const formattedDate = `${day}/${month}/${year}`;

            return (
              <Card key={ride.id} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Origem</p>
                      <p className="font-medium text-gray-900">{ride.origin}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Destino</p>
                      <p className="font-medium text-gray-900">{ride.destination}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Data</p>
                        <p className="text-sm font-medium">{formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Hora</p>
                        <p className="text-sm font-medium">{ride.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="size-4 text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-600">Vagas</p>
                        <p className="text-sm font-medium">{ride.availableSeats}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => handleContact(ride)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Phone className="size-4 mr-2" />
                      Tenho Interesse
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}