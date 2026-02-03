import { useState, useEffect } from 'react';
import { Lock, Save, Plus, Trash2, Eye, EyeOff, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import type { SharedRide } from './SharedRidesManager';

interface RoutePrice {
  id: string;
  route: string;
  price: string;
}

export function PriceManagementPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [routePrices, setRoutePrices] = useState<RoutePrice[]>([]);
  const [newRoute, setNewRoute] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  const [sharedRides, setSharedRides] = useState<SharedRide[]>([]);
  const [activeTab, setActiveTab] = useState<'routes' | 'rides'>('routes');

  useEffect(() => {
    // Carregar preços do localStorage
    const storedPrices = localStorage.getItem('routePrices');
    if (storedPrices) {
      setRoutePrices(JSON.parse(storedPrices));
    }
    
    // Carregar viagens compartilhadas
    const storedRides = localStorage.getItem('sharedRides');
    if (storedRides) {
      setSharedRides(JSON.parse(storedRides));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '9394') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleAddRoute = () => {
    if (!newRoute || !newPrice) {
      alert('Por favor, preencha rota e valor');
      return;
    }

    const newRoutePrice: RoutePrice = {
      id: Date.now().toString(),
      route: newRoute,
      price: newPrice,
    };

    const updatedPrices = [...routePrices, newRoutePrice];
    setRoutePrices(updatedPrices);
    localStorage.setItem('routePrices', JSON.stringify(updatedPrices));
    setNewRoute('');
    setNewPrice('');
  };

  const handleDeleteRoute = (id: string) => {
    const updatedPrices = routePrices.filter(rp => rp.id !== id);
    setRoutePrices(updatedPrices);
    localStorage.setItem('routePrices', JSON.stringify(updatedPrices));
  };

  const handleDeleteRide = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este anúncio de viagem?')) {
      const updatedRides = sharedRides.filter(ride => ride.id !== id);
      setSharedRides(updatedRides);
      localStorage.setItem('sharedRides', JSON.stringify(updatedRides));
    }
  };

  const handleCleanOldRides = () => {
    const now = new Date();
    const futureRides = sharedRides.filter(ride => {
      const rideDateTime = new Date(`${ride.date}T${ride.time}`);
      return rideDateTime > now;
    });
    
    const removedCount = sharedRides.length - futureRides.length;
    
    if (removedCount === 0) {
      alert('Não há anúncios antigos para remover.');
      return;
    }
    
    if (confirm(`Deseja remover ${removedCount} anúncio(s) de viagem(ns) já realizada(s)?`)) {
      setSharedRides(futureRides);
      localStorage.setItem('sharedRides', JSON.stringify(futureRides));
      alert(`✅ ${removedCount} anúncio(s) removido(s) com sucesso!`);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowPanel(false);
  };

  if (!showPanel) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setShowPanel(true)}
          className="bg-gray-800 hover:bg-gray-900 text-white shadow-lg"
        >
          <Lock className="size-4 mr-2" />
          Admin
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="p-6 w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-blue-600">Painel Administrativo</h3>
              <Button
                type="button"
                onClick={() => setShowPanel(false)}
                variant="outline"
                size="sm"
              >
                Fechar
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha de Acesso</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Lock className="size-4 mr-2" />
              Entrar
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-blue-600">Painel Administrativo</h3>
              <div className="flex gap-2">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                >
                  Sair
                </Button>
                <Button
                  onClick={() => setShowPanel(false)}
                  variant="outline"
                  size="sm"
                >
                  Fechar
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('routes')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'routes'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Valores de Rotas
              </button>
              <button
                onClick={() => setActiveTab('rides')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'rides'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Viagens Compartilhadas ({sharedRides.length})
              </button>
            </div>

            {/* Conteúdo das Tabs */}
            {activeTab === 'routes' ? (
              <>
                {/* Adicionar Nova Rota */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                  <h4 className="font-semibold text-gray-900">Adicionar Nova Rota</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newRoute">Rota (ex: Cabo Frio → Rio)</Label>
                      <Input
                        id="newRoute"
                        type="text"
                        placeholder="Digite a rota"
                        value={newRoute}
                        onChange={(e) => setNewRoute(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPrice">Valor por Pessoa</Label>
                      <Input
                        id="newPrice"
                        type="text"
                        placeholder="R$ 50,00"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddRoute} className="w-full bg-green-600 hover:bg-green-700">
                    <Plus className="size-4 mr-2" />
                    Adicionar Rota
                  </Button>
                </div>

                {/* Lista de Rotas */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Rotas Cadastradas</h4>
                  {routePrices.length === 0 ? (
                    <p className="text-gray-600 text-center py-4">Nenhuma rota cadastrada ainda</p>
                  ) : (
                    <div className="space-y-2">
                      {routePrices.map((rp) => (
                        <div
                          key={rp.id}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{rp.route}</p>
                            <p className="text-sm text-green-600">{rp.price}</p>
                          </div>
                          <Button
                            onClick={() => handleDeleteRoute(rp.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Dica:</strong> Os valores cadastrados aqui podem ser utilizados como referência para viagens compartilhadas. Atualize conforme necessário.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Lista de Viagens Compartilhadas */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Anúncios de Viagens Compartilhadas</h4>
                    {sharedRides.length > 0 && (
                      <Button
                        onClick={handleCleanOldRides}
                        variant="outline"
                        size="sm"
                        className="text-orange-600 hover:bg-orange-50"
                      >
                        <Trash2 className="size-4 mr-2" />
                        Limpar Antigos
                      </Button>
                    )}
                  </div>
                  
                  {sharedRides.length === 0 ? (
                    <p className="text-gray-600 text-center py-4">Nenhum anúncio de viagem ainda</p>
                  ) : (
                    <div className="space-y-3">
                      {sharedRides.map((ride) => {
                        const [year, month, day] = ride.date.split('-');
                        const formattedDate = `${day}/${month}/${year}`;
                        const rideDateTime = new Date(`${ride.date}T${ride.time}`);
                        const isPast = rideDateTime < new Date();

                        return (
                          <div
                            key={ride.id}
                            className={`p-4 rounded-lg border-2 ${
                              isPast ? 'bg-gray-50 border-gray-300' : 'bg-white border-blue-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2">
                                  <MapPin className="size-4 text-blue-600" />
                                  <p className="font-medium text-gray-900">{ride.origin} → {ride.destination}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="size-4 text-gray-500" />
                                    <span className="text-gray-700">{formattedDate}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="size-4 text-gray-500" />
                                    <span className="text-gray-700">{ride.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Users className="size-4 text-gray-500" />
                                    <span className="text-gray-700">{ride.availableSeats} vagas</span>
                                  </div>
                                </div>
                                {isPast && (
                                  <p className="text-xs text-red-600 font-medium">⚠️ Viagem já passou</p>
                                )}
                              </div>
                              <Button
                                onClick={() => handleDeleteRide(ride.id)}
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Info:</strong> Aqui você pode gerenciar todos os anúncios de viagens compartilhadas. As viagens passadas são exibidas em cinza. Use o botão "Limpar Antigos" para remover automaticamente as viagens já realizadas.
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}