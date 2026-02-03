import { Link } from 'react-router-dom';
import { Car, Phone, MapPin, Clock, Shield, ArrowLeft, MessageCircle, Users, Wifi, CheckCircle, Home, CreditCard, Smartphone, Banknote, X, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';
import { InstallmentCalculator } from '@/app/components/InstallmentCalculator';
import { AddressBasedFareCalculator } from '@/app/components/AddressBasedFareCalculator';
import { SharedRidesManager } from '@/app/components/SharedRidesManager';
import { BookingForm } from '@/app/components/BookingForm';
import { PriceManagementPanel } from '@/app/components/PriceManagementPanel';

// Imagens do táxi
import caboFrioTaxiImage from 'figma:asset/3abad26582ad8f00e03ca4f214b8ec97fde581e6.png';
import taxiLogo from 'figma:asset/1d9e733e53d2e190788d6c9d958bc2fe627e6f3e.png';

// Selo CADASTUR oficial
import cadasturSeal from 'figma:asset/d0a4b6d6a64142f2e7024c6ca572e7c258c0ae9e.png';

export function TaxiPage() {
  const [installmentData, setInstallmentData] = useState<{ totalAmount: string } | undefined>(undefined);
  const [fareCalculatorData, setFareCalculatorData] = useState<{ origin: string; destination: string; estimatedFare: string } | undefined>(undefined);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactType, setContactType] = useState<'agora' | 'agendar'>('agora');
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [canAccessGroup, setCanAccessGroup] = useState(false);

  // Verificar se usuário já solicitou táxi e controlar tempo
  useEffect(() => {
    const taxiRequestTime = localStorage.getItem('taxiRequestTime');
    const groupAccessTime = localStorage.getItem('groupAccessTime');
    
    if (taxiRequestTime) {
      const requestTime = parseInt(taxiRequestTime);
      const currentTime = Date.now();
      const elapsedMinutes = (currentTime - requestTime) / (1000 * 60);
      
      // Se passou mais de 30 minutos, resetar
      if (elapsedMinutes > 30) {
        localStorage.removeItem('taxiRequestTime');
        localStorage.removeItem('groupAccessTime');
      } else if (elapsedMinutes >= 4) {
        // Se passou 4 minutos, pode acessar grupo
        setCanAccessGroup(true);
        
        // Calcular tempo restante até expirar (30 minutos total)
        const remaining = Math.floor(30 - elapsedMinutes);
        setTimeRemaining(remaining);
      } else {
        // Ainda não passou 4 minutos
        const remaining = Math.floor(4 - elapsedMinutes);
        setTimeRemaining(remaining);
        
        // Configurar timer para atualizar a cada minuto
        const timer = setInterval(() => {
          const now = Date.now();
          const elapsed = (now - requestTime) / (1000 * 60);
          
          if (elapsed >= 30) {
            // Expirou acesso
            localStorage.removeItem('taxiRequestTime');
            localStorage.removeItem('groupAccessTime');
            setCanAccessGroup(false);
            setTimeRemaining(null);
            clearInterval(timer);
          } else if (elapsed >= 4) {
            // Liberou acesso
            setCanAccessGroup(true);
            setTimeRemaining(Math.floor(30 - elapsed));
          } else {
            // Ainda contando
            setTimeRemaining(Math.floor(4 - elapsed));
          }
        }, 60000); // Atualizar a cada minuto
        
        return () => clearInterval(timer);
      }
    }
  }, []);

  const handleCallTaxi = (type: 'agora' | 'agendar') => {
    setContactType(type);
    setShowContactModal(true);
  };

  const handleWhatsApp = () => {
    const message = contactType === 'agora' 
      ? '🚕 Olá! Preciso de um táxi agora!' 
      : '📅 Olá! Gostaria de agendar uma corrida!';
    
    // Definir prioridade baseado no tipo
    let phone1, phone2;
    if (contactType === 'agora') {
      // Chamar agora: prioridade para 99214-7508
      phone1 = '5522992147508';
      phone2 = '5522997118730';
    } else {
      // Agendar: prioridade para 99711-8730
      phone1 = '5522997118730';
      phone2 = '5522992147508';
    }
    
    // Enviar para ambos os números
    const whatsappUrl1 = `https://wa.me/${phone1}?text=${encodeURIComponent(message)}`;
    const whatsappUrl2 = `https://wa.me/${phone2}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl1, '_blank');
    setTimeout(() => {
      window.open(whatsappUrl2, '_blank');
    }, 1000);
    
    // Registrar solicitação de táxi apenas para "corrida agora"
    if (contactType === 'agora') {
      localStorage.setItem('taxiRequestTime', Date.now().toString());
      setTimeRemaining(4); // 4 minutos para liberar
    }
    
    setShowContactModal(false);
  };

  const handlePhoneCall = () => {
    // Definir prioridade baseado no tipo
    const phone = contactType === 'agora' 
      ? '5522992147508'  // Chamar agora: prioridade para 99214-7508
      : '5522997118730'; // Agendar: prioridade para 99711-8730
    
    window.location.href = `tel:+${phone}`;
    
    // Registrar solicitação de táxi apenas para "corrida agora"
    if (contactType === 'agora') {
      localStorage.setItem('taxiRequestTime', Date.now().toString());
      setTimeRemaining(4); // 4 minutos para liberar
    }
    
    setShowContactModal(false);
  };

  const handleGroupAccess = () => {
    window.open('https://chat.whatsapp.com/EVcJGqCW4w22fi76L1tf6O?mode=gi_t', '_blank');
  };

  const handleInstallmentCopy = (data: { totalAmount: string }) => {
    setInstallmentData({ totalAmount: data.totalAmount });
  };

  const handleFareCalculatorCopy = (data: { origin: string; destination: string; estimatedFare: string }) => {
    setFareCalculatorData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Home className="size-5" />
              <span className="text-sm">Voltar</span>
            </Link>
            
            <img 
              src={taxiLogo} 
              alt="Táxi Cabo Frio Logo" 
              className="h-16 w-auto"
            />
            
            <a 
              href="tel:+5522997118730"
              className="hidden md:flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="size-4" />
              (22) 99711-8730
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={caboFrioTaxiImage}
            alt="Táxi Cabo Frio"
            className="size-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-white">
              Táxi de Confiança em Cabo Frio
            </h2>
            <p className="mb-4 text-lg text-blue-50">
              Transporte rápido e confortável, com seguro para passageiros, garantindo tranquilidade durante toda a viagem. Veículo com 6 lugares e Wi-Fi gratuito para maior comodidade. Agende sua corrida com antecedência ou solicite agora mesmo!
            </p>
            
            <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex">
              <Shield className="size-5 text-amber-300" />
              <span className="text-white">Empresa cadastrada no CADASTUR • Realizamos viagens turísticas</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleCallTaxi('agora')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="size-5" />
                Chamar Táxi Agora
              </button>
              <button
                onClick={() => handleCallTaxi('agendar')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Clock className="size-5" />
                Agendar Corrida
              </button>
              <Link
                to="/traslados"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Plane className="size-5" />
                Traslados Turísticos
              </Link>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* CADASTUR Seal, Payment Methods and Installment Calculator */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* CADASTUR Seal */}
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img
                  src={cadasturSeal}
                  alt="Selo CADASTUR - 55.057.401/0001-70"
                  className="h-64 w-auto mx-auto"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg w-full">
                <h3 className="text-center mb-6 text-gray-900">Formas de Pagamento</h3>
                
                <div className="space-y-4">
                  {/* Credit Cards */}
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CreditCard className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">Cartão de Crédito</p>
                      <p className="text-sm text-gray-600">À vista e parcelado</p>
                    </div>
                  </div>

                  {/* Debit Cards */}
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <CreditCard className="size-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">Cartão de Débito</p>
                      <p className="text-sm text-gray-600">Todas as bandeiras</p>
                    </div>
                  </div>

                  {/* PIX */}
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Smartphone className="size-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">PIX</p>
                      <p className="text-sm text-gray-600">Transferência instantânea</p>
                    </div>
                  </div>

                  {/* Cash */}
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Banknote className="size-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">Dinheiro</p>
                      <p className="text-sm text-gray-600">Aceitamos em espécie</p>
                    </div>
                  </div>
                </div>

                {/* Card Brands */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">Bandeiras aceitas:</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <div className="bg-gradient-to-r from-blue-600 to-yellow-400 text-white px-4 py-2 rounded font-bold text-sm">
                      VISA
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded font-bold text-sm">
                      Mastercard
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded font-bold text-sm">
                      Elo
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded font-bold text-sm">
                      American Express
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Installment Calculator */}
            <div className="flex items-center justify-center">
              <InstallmentCalculator onCopy={handleInstallmentCopy} />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="size-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-blue-600">Frota Moderna</h3>
              <p className="text-gray-600">
                Veículos confortáveis e bem conservados para sua segurança
              </p>
            </div>

            <Link to="/traslados" className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="size-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-green-600">Viagens Turísticas</h3>
              <p className="text-gray-600">
                Realizamos viagens para qualquer destino com total conforto
              </p>
              <p className="text-sm text-green-600 font-medium mt-2">Ver mais →</p>
            </Link>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="size-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-amber-600">Cadastro CADASTUR</h3>
              <p className="text-gray-600">
                Empresa cadastrada no CADASTUR para serviços turísticos
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="size-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-blue-600">Disponível 24h</h3>
              <p className="text-gray-600">
                Atendimento round-the-clock para sua comodidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address-Based Fare Calculator Section */}
      <AddressBasedFareCalculator onCopy={handleFareCalculatorCopy} />

      {/* Shared Rides Section */}
      <SharedRidesManager />

      {/* Booking Form Section */}
      <section id="agendar" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="mb-3 text-blue-600">Agende sua Corrida</h2>
            <p className="text-gray-600">
              Preencha os dados abaixo e enviaremos sua solicitação via WhatsApp
            </p>
          </div>
          <BookingForm installmentData={installmentData} fareCalculatorData={fareCalculatorData} />
        </div>
      </section>

      {/* Taxi Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={caboFrioTaxiImage}
              alt="Táxi Cabo Frio - Transporte Profissional"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src={taxiLogo} 
                alt="Táxi Cabo Frio Logo" 
                className="h-20 w-auto mb-4"
              />
              <p className="text-gray-400">
                Transporte seguro e confiável em Cabo Frio e região.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-white">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="size-4" />
                  (22) 99711-8730
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  Cabo Frio - RJ
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-white">Horário de Atendimento</h3>
              <p className="text-gray-400">
                24 horas por dia<br />
                7 dias por semana
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Shield className="size-4" />
                  CADASTUR: 55.057.401/0001-70
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Táxi Cabo Frio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Como deseja contatar?</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              {contactType === 'agora' 
                ? 'Chamar táxi agora - A mensagem será enviada para ambos os motoristas'
                : 'Agendar corrida - A mensagem será enviada para ambos os motoristas'
              }
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="size-5" />
                Enviar WhatsApp
              </button>
              <button
                onClick={handlePhoneCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="size-5" />
                Ligar Agora
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Group Button */}
      {timeRemaining !== null && (
        <div className="fixed bottom-8 right-8 z-50">
          {canAccessGroup ? (
            <button
              onClick={handleGroupAccess}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 transition-all hover:scale-105"
            >
              <Users className="size-6" />
              <div className="text-left">
                <p className="font-bold">Grupo de Taxistas</p>
                <p className="text-xs text-green-100">Expira em {timeRemaining} min</p>
              </div>
            </button>
          ) : (
            <div className="bg-yellow-600 text-white px-6 py-4 rounded-lg shadow-2xl max-w-xs">
              <div className="flex items-start gap-3">
                <Clock className="size-6 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-bold mb-1">Aguarde {timeRemaining} min</p>
                  <p className="text-xs text-yellow-100 leading-relaxed">
                    Caso o motorista não responda em 4 minutos, o serviço será passado para outros motoristas disponíveis
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Price Management Panel */}
      <PriceManagementPanel />
    </div>
  );
}