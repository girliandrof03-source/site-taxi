import { Car, Wifi, Plane, Phone, MessageCircle, MapPin, Star, Shield, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';

export function MarketingLandingPage() {
  // URL do site completo no Figma Make
  const SITE_COMPLETO_URL = "https://taxicabofrio.figma.site";
  
  // Rotas do site completo
  const ROUTE_TAXI = "/#/taxi";
  const ROUTE_FEDERAL = "/#/federal";
  const ROUTE_TRASLADOS = "/#/traslados";

  const handleWhatsApp = () => {
    const message = '🚕 Olá! Vim através do site e gostaria de agendar um horário.';
    const phoneNumber = '5522997118730'; // WhatsApp: (22) 99711-8730
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+552299214-7508'; // Ligar: (22) 99214-7508
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-2.5 rounded-xl shadow-lg">
                <Car className="size-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Táxi Cabo Frio</h1>
                <p className="text-xs text-gray-500">Serviços Profissionais</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <Phone className="size-4" />
                <span className="hidden sm:inline">Ligar</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="size-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="size-4" />
            <span className="text-sm font-medium">Cadastrado no CADASTUR</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Seu Transporte de Confiança<br />em Cabo Frio
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto">
            Táxi 24h • Internet 4G Barata • Traslados Turísticos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SITE_COMPLETO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-2xl"
            >
              Ver Todos os Serviços
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle className="size-5" />
              Falar no WhatsApp
            </button>
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-blue-100">Disponível</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-blue-100">Clientes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">5★</div>
              <div className="text-sm text-blue-100">Avaliação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">R$49,90</div>
              <div className="text-sm text-blue-100">Internet 4G</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços - 3 Cards Principais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Táxi */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=600')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                    <Car className="size-16 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  🚕 Táxi Cabo Frio
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transporte 24 horas com corridas calculadas por endereço, parcelamento no cartão, 
                  compartilhamento de corridas e muito mais.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="size-4 text-blue-600" />
                    Disponível 24 horas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="size-4 text-blue-600" />
                    Corridas por endereço
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="size-4 text-blue-600" />
                    Compartilhamento disponível
                  </li>
                </ul>

                <a
                  href={SITE_COMPLETO_URL + ROUTE_TAXI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition-all group-hover:scale-105"
                >
                  Solicitar Táxi Agora
                </a>
              </div>
            </div>

            {/* Card 2: Federal Associados */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ring-4 ring-amber-400">
              <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 py-2 text-center">
                <span className="text-white font-bold text-sm">⭐ MAIS POPULAR ⭐</span>
              </div>
              
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                    <Wifi className="size-16 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  📱 Federal Associados
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Internet 4G com planos a partir de R$49,90 + Clube de Descontos + 
                  Sistema PBI de comissionamento.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Plano Popular</span>
                    <span className="text-2xl font-bold text-green-600">R$69,90</span>
                  </div>
                  <div className="text-sm text-gray-600">100GB de Internet 4G</div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Star className="size-4 text-purple-600" />
                    A partir de R$49,90/mês
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <TrendingUp className="size-4 text-purple-600" />
                    Sistema PBI de ganhos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield className="size-4 text-purple-600" />
                    Clube Certo incluso
                  </li>
                </ul>

                <a
                  href={SITE_COMPLETO_URL + ROUTE_FEDERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-center py-3 rounded-xl font-semibold transition-all group-hover:scale-105"
                >
                  Ver Planos e Ganhar Comissão
                </a>
              </div>
            </div>

            {/* Card 3: Traslados Turísticos */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600')] bg-cover bg-center opacity-30"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                    <Plane className="size-16 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  🌴 Traslados Turísticos
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Conheça Búzios, Arraial do Cabo e toda a Região dos Lagos com conforto, 
                  segurança e motorista experiente.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield className="size-4 text-teal-600" />
                    Totalmente segurado
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="size-4 text-teal-600" />
                    Até 6 passageiros
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="size-4 text-teal-600" />
                    Roteiros personalizados
                  </li>
                </ul>

                <a
                  href={SITE_COMPLETO_URL + ROUTE_TRASLADOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-xl font-semibold transition-all group-hover:scale-105"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato Rápido */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Entre em contato agora mesmo pelo WhatsApp ou telefone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="size-6" />
              WhatsApp: (22) 99711-8730
            </button>
            
            <button
              onClick={handleCall}
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl"
            >
              <Phone className="size-6" />
              Ligar Agora
            </button>
          </div>

          <div className="mt-8">
            <a
              href={SITE_COMPLETO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
            >
              Ou acesse nosso site completo
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="size-4 text-blue-400" />
              <span className="text-gray-400 text-sm">CADASTUR: 55.057.401/0001-70</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Táxi Cabo Frio. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Táxi 24h • Internet 4G • Traslados Turísticos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
