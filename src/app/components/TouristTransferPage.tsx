import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Shield, Users, Car, Plane, ArrowLeft, MessageCircle, CheckCircle, X, Save, Coffee, Waves, Settings } from 'lucide-react';
import { useState } from 'react';

// Imagens REAIS da Região dos Lagos
import caboFrioAtracoes from 'figma:asset/3aa5d4cb97ec4cc15642a8fc32b71f70794dd8c0.png';
import arraialBuziosAtracoes from 'figma:asset/34c3bcf77a11b7fa282330cc49d6837eea6ab531.png';
import buziosAtracoes from 'figma:asset/ec8cdf1e5470c20f0b3555bde376b9d96ec33fc1.png';
import praiasCaboFrioRegiao from 'figma:asset/e32b9d6dd23f0ac18af4aceb38f1fecd38eef714.png';

// Selo CADASTUR oficial
import cadasturSeal from 'figma:asset/d0a4b6d6a64142f2e7024c6ca572e7c258c0ae9e.png';

export function TouristTransferPage() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  // Carregar preços do localStorage ou usar valores padrão
  const [prices, setPrices] = useState(() => {
    const saved = localStorage.getItem('touristTransferPrices');
    return saved ? JSON.parse(saved) : {
      arraial: 'R$ 350',
      buzios: 'R$ 400',
      caboFrio: 'A combinar',
      regiaoLagos: 'A combinar'
    };
  });

  const handleAdminLogin = () => {
    if (adminPassword === '9394') {
      setIsAdminAuthenticated(true);
      setAdminPassword('');
    } else {
      alert('Senha incorreta!');
      setAdminPassword('');
    }
  };

  const handlePriceUpdate = (routeId: string, newPrice: string) => {
    const updatedPrices = { ...prices, [routeId]: newPrice };
    setPrices(updatedPrices);
    localStorage.setItem('touristTransferPrices', JSON.stringify(updatedPrices));
  };
  
  const routes = [
    {
      id: 'arraial',
      name: '🌊 Arraial do Cabo – Centro e Praias',
      description: 'Passeio com liberdade e praticidade',
      fullDescription: `Arraial do Cabo é um dos destinos mais procurados da Região dos Lagos, conhecido por suas águas cristalinas e praias de fácil acesso. O traslado leva os visitantes até a área central da cidade, onde estão localizadas algumas das praias mais famosas, como Prainha, Praia Grande, Prainhas do Pontal e Praia do Forno.\n\nPor se tratar de uma região compacta, os deslocamentos entre as praias podem ser feitos a pé, por trilhas leves ou por transporte local, permitindo que cada visitante explore no seu próprio ritmo. Após o período de passeio, o retorno é realizado no horário e ponto previamente combinados.\n\nIdeal para quem deseja conhecer Arraial do Cabo com liberdade, praticidade e sem preocupação com transporte.`,
      duration: '',
      price: '',
      showPriceAndDuration: false,
      highlights: [],
      image: praiasCaboFrioRegiao
    },
    {
      id: 'buzios',
      name: '🌴 Búzios – Praias e Centro Turístico',
      description: 'Praticidade, segurança e liberdade',
      fullDescription: `Búzios é um dos destinos mais charmosos da Região dos Lagos, com praias e pontos turísticos distribuídos ao longo da península. O traslado leva os visitantes até áreas estratégicas da cidade, como o centro e regiões próximas às principais praias, permitindo aproveitar o destino com liberdade.\n\nDevido à distância entre os pontos turísticos, é necessário respeitar o ponto de encontro e horário de retorno previamente combinados, garantindo a organização do passeio e o conforto de todos os passageiros. Durante o período em Búzios, os visitantes podem se deslocar por conta própria, utilizando transporte local ou caminhando nas áreas centrais.\n\nIdeal para quem deseja conhecer Búzios com praticidade, segurança e sem preocupações com o deslocamento de ida e volta.`,
      duration: '',
      price: '',
      showPriceAndDuration: false,
      highlights: [],
      image: buziosAtracoes
    },
    {
      id: 'cabo-frio',
      name: '🌊 Cabo Frio – Pontos Turísticos e Centro Histórico',
      description: 'Explore com conforto e praticidade',
      fullDescription: `Cabo Frio oferece uma combinação única de praias de areia branca, águas claras e pontos turísticos históricos. O serviço de transporte pode ser agendado para levar os visitantes aos principais atrativos da cidade, como Praia do Forte, Bairro da Passagem, Ilha do Japonês, Forte São Mateus e áreas centrais.\n\nO passeio permite conhecer os pontos turísticos de Cabo Frio com tranquilidade, respeitando o roteiro e o horário combinados previamente. Ideal para quem deseja explorar a cidade com conforto, praticidade e sem preocupação com deslocamento ou estacionamento.`,
      duration: '',
      price: '',
      showPriceAndDuration: false,
      highlights: [],
      image: caboFrioAtracoes
    },
    {
      id: 'regiao-lagos',
      name: '🌎 Passeio Completo pela Região dos Lagos',
      description: 'Flexibilidade, custo-benefício e comodidade',
      fullDescription: `O passeio pela Região dos Lagos é uma experiência completa, ideal para quem deseja conhecer os principais destinos turísticos da região com conforto e planejamento. O pacote pode incluir Cabo Frio, Arraial do Cabo, Búzios e arredores, com roteiros organizados de acordo com o perfil dos viajantes.\n\nOs passeios podem ser realizados em um ou mais dias, permitindo melhor aproveitamento de cada destino, com horários e pontos de encontro previamente definidos. O transporte é feito em veículo confortável, proporcionando praticidade e segurança durante todo o período do roteiro.\n\nEssa opção é ideal para quem busca um pacote turístico completo, com flexibilidade de datas, melhor custo-benefício e mais comodidade para explorar a Região dos Lagos sem preocupações.`,
      duration: '',
      price: '',
      showPriceAndDuration: false,
      highlights: [],
      image: arraialBuziosAtracoes
    }
  ];

  const handleWhatsApp = (routeName?: string) => {
    const message = routeName 
      ? `🚕 Olá! Gostaria de agendar um traslado turístico para ${routeName}.`
      : '🚕 Olá! Gostaria de saber mais sobre os traslados turísticos.';
    const phoneNumber = '5522997118730';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="size-5" />
              <span>Voltar</span>
            </Link>
            <h1 className="text-blue-600">Traslados Turísticos</h1>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={praiasCaboFrioRegiao}
            alt="Região dos Lagos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-sky-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
            <Shield className="size-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Cadastrado no CADASTUR</span>
          </div>
          
          <h2 className="mb-4 text-white">
            Descubra a Região dos Lagos com Conforto e Segurança
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Traslados turísticos profissionais com veículo de 6 lugares, Wi-Fi grátis, 
            ar-condicionado e seguro para passageiros. Conheça os melhores pontos turísticos 
            com motorista experiente e conhecedor da região.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="size-5 text-white" />
              <span>Até 6 passageiros</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="size-5 text-white" />
              <span>Totalmente segurado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas do Serviço */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center mb-8 text-gray-900">Etapas do Serviço de Transporte</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Reserva</h4>
                <p className="text-gray-700 leading-relaxed">
                  Contato prévio para definição de destino, data, horário, valor e forma de pagamento. 
                  O pagamento é realizado no momento da reserva para garantir a vaga e não comprometer 
                  o passeio dos demais passageiros.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Busca</h4>
                <p className="text-gray-700 leading-relaxed">
                  Passageiros são buscados no Centro de Cabo Frio e redondezas. Locais mais afastados 
                  podem ter ajuste de valor, sempre informado antecipadamente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Deslocamento</h4>
                <p className="text-gray-700 leading-relaxed">
                  Trajeto confortável, direto ou com belas paisagens da Região dos Lagos, conforme o destino.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Parada</h4>
                <p className="text-gray-700 leading-relaxed">
                  Descida no local combinado para passeio ou visita turística.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Retorno</h4>
                <p className="text-gray-700 leading-relaxed">
                  Horário e ponto de encontro são combinados previamente. Há tolerância de até 15 minutos. 
                  Após esse período, a viagem dos passageiros ausentes será encerrada sem reembolso, para não 
                  prejudicar os demais participantes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-blue-900">Importante:</span> O cumprimento dos horários é essencial 
              para garantir uma experiência positiva para todos os passageiros. Recomendamos pontualidade e 
              organização do tempo durante o passeio.
            </p>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="mb-3 text-gray-900">Nossos Destinos Mais Procurados</h3>
          <p className="text-gray-600">Escolha seu destino ou personalize sua viagem</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{route.name}</h4>
                    <p className="text-gray-600">{route.description}</p>
                  </div>
                  {route.showPriceAndDuration !== false && (
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
                      {route.price}
                    </div>
                  )}
                </div>

                {route.showPriceAndDuration !== false && route.duration && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Clock className="size-4" />
                    <span>{route.duration}</span>
                  </div>
                )}

                {(route as any).fullDescription && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {(route as any).fullDescription}
                    </p>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {route.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="size-4 text-green-600" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp(route.name);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="size-4" />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-3 text-gray-900">Por Que Escolher Nossos Traslados?</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="size-8 text-blue-600" />
              </div>
              <h4 className="mb-2 text-gray-900">Segurança Total</h4>
              <p className="text-gray-600 text-sm">
                Seguro completo para passageiros e motorista habilitado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="size-8 text-green-600" />
              </div>
              <h4 className="mb-2 text-gray-900">Veículo Confortável</h4>
              <p className="text-gray-600 text-sm">
                Viagens em veículo de 6 lugares com ar-condicionado e Wi-Fi grátis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="size-8 text-amber-600" />
              </div>
              <h4 className="mb-2 text-gray-900">Flexibilidade</h4>
              <p className="text-gray-600 text-sm">
                Roteiro adaptado às suas necessidades e preferências
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="size-8 text-sky-600" />
              </div>
              <h4 className="mb-2 text-gray-900">Conhecimento Local</h4>
              <p className="text-gray-600 text-sm">
                Dicas exclusivas sobre praias, restaurantes e pontos turísticos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="mb-4 text-white">Pronto para Sua Aventura?</h3>
          <p className="text-xl mb-8 text-blue-50">
            Entre em contato agora e planeje seu traslado personalizado pela Região dos Lagos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp()}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg font-medium"
            >
              <MessageCircle className="size-5" />
              WhatsApp: (22) 99711-8730
            </button>
            <a
              href="tel:+5522997118730"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg font-medium"
            >
              <Phone className="size-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Painel Administrativo</h3>
              <button
                onClick={() => setShowAdminPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="size-5" />
              </button>
            </div>
            
            {!isAdminAuthenticated ? (
              <div>
                <p className="text-gray-600 mb-4">Digite a senha para acessar:</p>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleAdminLogin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4"
                >
                  Entrar
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">Atualize os preços dos serviços:</p>
                {routes.map((route) => (
                  <div key={route.id} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      {route.name}
                    </label>
                    <input
                      type="text"
                      value={prices[route.id]}
                      onChange={(e) => handlePriceUpdate(route.id, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                ))}
                <button
                  onClick={() => setShowAdminPanel(false)}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg mt-4"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Admin Button */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-full shadow-lg z-50"
      >
        <Settings className="size-5" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            <span className="flex items-center justify-center gap-2 mb-2">
              <Shield className="size-4" />
              CADASTUR: 55.057.401/0001-70
            </span>
            Táxi Cabo Frio - Traslados Turísticos Profissionais
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; 2024 Táxi Cabo Frio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}