import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Shield, Phone, Wifi, CheckCircle, Gift, TrendingUp, Heart } from 'lucide-react';

// Imagem da reputação Federal Associados
import federalReputacao from 'figma:asset/d63cae6c5a456919cfd146674dff4df1bdadb71e.png';

export function FederalPage() {
  const handleAppStore = () => {
    window.open('https://apps.apple.com/br/app/clube-certo/id1662239139', '_blank');
  };

  const handleGooglePlay = () => {
    window.open('https://play.google.com/store/apps/details?id=com.devusama.clubecerto&pcampaignid=web_share', '_blank');
  };

  const handleWhatsApp = (plano?: string) => {
    let message = '📶 Olá! Quero saber mais sobre os planos de internet da Federal Associados!';
    if (plano) {
      message = `📶 Olá! Quero contratar o plano ${plano} da Federal Associados!`;
    }
    const phoneNumber = '5522997118730';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClubeCerto = () => {
    // Link do Clube Certo
    window.open('https://www.clubecerto.com.br/', '_blank');
  };

  const handleFederalSite = () => {
    // Link do site da Federal Associados
    window.open('https://federalassociados.com.br/pbi/cadastro/16100909112025150513', '_blank');
  };

  const handleAssinarPlano = () => {
    // Link para assinar planos
    window.open('https://federalassociados.com.br/pbi/cadastro/16100909112025150513', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="size-5" />
              <span className="text-sm">Voltar</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Wifi className="size-8 text-purple-700" />
              </div>
              <div>
                <h1 className="text-white">Federal Associados</h1>
                <p className="text-purple-200 text-sm">Internet 4G e 5G com Clube de Vantagens</p>
              </div>
            </div>
            
            <a 
              href="tel:+5522997118730"
              className="hidden md:flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Phone className="size-4" />
              (22) 99711-8730
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              Você está cansado de planos de internet caros e LIMITADOS?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Venha conhecer a Federal Associados e descubra um mundo de vantagens com nossos planos de internet 4G e 5G das operadoras TIM, Vivo e Claro!
            </p>
            <p className="text-lg text-purple-100 mb-8">
              Torne-se um Associado da Federal hoje e construa um negócio próprio levando serviços de telefonia de qualidade para pessoas em todo o país enquanto constrói uma fonte de renda com o nosso programa PBI.
            </p>
            
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <Phone className="size-5" />
              Fale Conosco
            </button>
            
            <button
              onClick={handleFederalSite}
              className="bg-white hover:bg-purple-50 text-purple-700 px-8 py-4 rounded-lg font-bold transition-colors shadow-lg inline-flex items-center gap-2 border-2 border-white"
            >
              <Wifi className="size-5" />
              Venha Conhecer Mais a Federal
            </button>
          </div>
        </div>
      </section>

      {/* Planos de Internet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plano 40GB */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200 hover:border-purple-600 transition-all">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white text-center">
                <p className="text-4xl font-bold mb-2">40 GIGAS</p>
                <p className="text-3xl font-bold mb-1">R$ 49,90</p>
                <p className="text-purple-200">por mês</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Plano da Vivo com ligação ilimitada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Envio do chip grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Sem consulta ao SPC e SERASA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Cinema Grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Auxílio Funeral - R$ 3.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Clube de Benefícios</span>
                  </div>
                </div>
                <button
                  onClick={handleAssinarPlano}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* Plano 80GB */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-blue-600 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
                <p className="text-4xl font-bold mb-2">80 GIGAS</p>
                <p className="text-3xl font-bold mb-1">R$ 69,90</p>
                <p className="text-blue-200">por mês</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Plano com ligação ilimitada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Envio do chip grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Sem consulta ao SPC e SERASA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Cinema Grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Auxílio Funeral - R$ 3.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Clube de Benefícios</span>
                  </div>
                </div>
                <button
                  onClick={handleAssinarPlano}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* Plano 100GB - MAIS POPULAR */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-green-400 hover:border-green-600 transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Mais Popular
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white text-center">
                <p className="text-4xl font-bold mb-2">100 GIGAS</p>
                <p className="text-3xl font-bold mb-1">R$ 69,90</p>
                <p className="text-green-200">por mês</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Plano com ligação ilimitada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Envio do chip grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Sem consulta ao SPC e SERASA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Cinema Grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Auxílio Funeral - R$ 3.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Clube de Benefícios</span>
                  </div>
                </div>
                <button
                  onClick={handleAssinarPlano}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* Plano 150GB */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200 hover:border-orange-600 transition-all">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white text-center">
                <p className="text-4xl font-bold mb-2">150 GIGAS</p>
                <p className="text-3xl font-bold mb-1">R$ 99,90</p>
                <p className="text-orange-200">por mês</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Plano com ligação ilimitada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Envio do chip grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Sem consulta ao SPC e SERASA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Cinema Grátis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Auxílio Funeral - R$ 3.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Clube de Benefícios</span>
                  </div>
                </div>
                <button
                  onClick={handleAssinarPlano}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Assinar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-purple-900">Por Que Escolher a Federal Associados?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Gift className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Envio do chip grátis</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Shield className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Sem consulta ao SPC e SERASA</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Cinema Grátis - Rede Cinesystem</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Auxílio Funeral - R$ 3.000,00</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Clube de Benefícios (Clube Certo)</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Phone className="size-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-gray-900">Ligações ilimitadas para qualquer DDD</h3>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="mb-6 text-purple-900">Vantagens de ser um Associado</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
              <Heart className="size-10 mx-auto mb-3 text-purple-600" />
              <p className="font-bold text-gray-900">Ampla Cobertura Nacional</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
              <Heart className="size-10 mx-auto mb-3 text-purple-600" />
              <p className="font-bold text-gray-900">Ativação do chip em até 24 Horas</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
              <Wifi className="size-10 mx-auto mb-3 text-purple-600" />
              <p className="font-bold text-gray-900">Internet móvel 4G e 5G</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
              <Users className="size-10 mx-auto mb-3 text-purple-600" />
              <p className="font-bold text-gray-900">Mais de 10.000 empresas parceiras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clube Certo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-purple-900">Clube Certo</h2>
            <h3 className="mb-6 text-gray-700">Conheça o Clube Certo</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Acesse o site e descubra um mundo de descontos e ofertas! Mais de 10.000 empresas parceiras e 40.000 ofertas de descontos esperando por você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center border-2 border-green-200">
              <Users className="size-16 mx-auto mb-4 text-green-600" />
              <p className="text-3xl font-bold text-green-700 mb-2">10.000+</p>
              <h3 className="mb-2 text-green-900">Empresas</h3>
              <p className="text-green-800">Parceiros em todo Brasil</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center border-2 border-purple-200">
              <Gift className="size-16 mx-auto mb-4 text-purple-600" />
              <p className="text-3xl font-bold text-purple-700 mb-2">40.000+</p>
              <h3 className="mb-2 text-purple-900">Ofertas</h3>
              <p className="text-purple-800">Descontos exclusivos</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center border-2 border-blue-200">
              <Wifi className="size-16 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-2 text-blue-900">Fácil Acesso</h3>
              <p className="text-blue-800">Online e disponível 24h</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleClubeCerto}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <Heart className="size-5" />
              Acessar Clube Certo
            </button>
          </div>
        </div>
      </section>

      {/* PBI - Programa de Benefícios por Indicação */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Conheça Nosso PBI - Programa de Benefícios por Indicação</h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              A Federal Associados distribui parte do seu lucro por um sistema de comissionamento moderno e autossustentável. 
              Onde o consumidor, além de usufruir do serviço contratado, recebe comissão da adesão e recorrência da mensalidade até 10 (dez) níveis.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-center mb-8 text-white">10 Níveis de Comissionamento</h3>
            <p className="text-xl text-purple-100 text-center mb-8 max-w-4xl mx-auto">
              Ao se tornar um Associado você pode trabalhar para construir uma rede de associados e ganhar comissão por cada pessoa que assinar um Plano da Federal através da sua indicação.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 p-6 rounded-xl text-center">
                <Heart className="size-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-bold text-xl mb-2">87%</h4>
                <p className="text-purple-100">de comissão sobre adesões</p>
              </div>

              <div className="bg-white/20 p-6 rounded-xl text-center">
                <TrendingUp className="size-12 mx-auto mb-3 text-green-300" />
                <h4 className="font-bold text-xl mb-2">10% a 20%</h4>
                <p className="text-purple-100">sobre mensalidades dos associados diretos</p>
              </div>

              <div className="bg-white/20 p-6 rounded-xl text-center">
                <Users className="size-12 mx-auto mb-3 text-blue-300" />
                <h4 className="font-bold text-xl mb-2">Sem limite</h4>
                <p className="text-purple-100">de indicações</p>
              </div>

              <div className="bg-white/20 p-6 rounded-xl text-center">
                <Heart className="size-12 mx-auto mb-3 text-orange-300" />
                <h4 className="font-bold text-xl mb-2">Saque mínimo</h4>
                <p className="text-purple-100">de R$ 50,00</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h3 className="text-center mb-8 text-white">Como Funciona?</h3>
            <p className="text-xl text-purple-100 text-center mb-8 max-w-3xl mx-auto">
              O cliente da Federal é um associado que poderá obter excelentes ganhos mensais atuando no sistema de indicação.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="size-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Distribuição de lucros entre consultores</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="size-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Sistema moderno e autossustentável</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="size-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Saque toda quarta-feira</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="size-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Pagamento em até 05 dias úteis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Tornar-se Associado */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-white">Que tal Começar Agora?</h2>
          <p className="text-xl mb-8 text-green-100">
            Além de poder indicar outros associados e ganhar dinheiro, você também vai poder usufruir de todos os benefícios e soluções que a Federal Associados oferece!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp()}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold transition-colors shadow-lg"
            >
              Tornar-se Associado
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="size-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Reputação */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-purple-900">Nossa Reputação</h2>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <img
              src={federalReputacao}
              alt="Federal Associados - Reputação"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg text-center border-2 border-green-200">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="size-10 text-white fill-white" />
              </div>
              <h3 className="mb-2 text-green-900">Reclame Aqui</h3>
              <p className="text-4xl font-bold text-green-700 mb-2">7.7/10</p>
              <p className="text-green-800 font-medium">Reputação BOM</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg text-center border-2 border-blue-200">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="size-10 text-white" />
              </div>
              <h3 className="mb-2 text-blue-900">Experiência</h3>
              <p className="text-2xl font-bold text-blue-700 mb-2">+15 ANOS</p>
              <p className="text-blue-800 font-medium">Associação sem fins lucrativos</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg text-center border-2 border-purple-200">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="size-10 text-white" />
              </div>
              <h3 className="mb-2 text-purple-900">Parceria</h3>
              <p className="text-2xl font-bold text-purple-700 mb-2">+7 ANOS</p>
              <p className="text-purple-800 font-medium">Claro, Vivo e TIM</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Wifi className="size-20 mx-auto mb-6 opacity-90" />
          <h2 className="mb-4 text-white">
            Baixe o App Federal Associados
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Gerencie tudo pelo celular: planos, comissões e Clube Certo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGooglePlay}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <Heart className="size-6" />
              <div className="text-left">
                <p className="text-xs opacity-80">Disponível no</p>
                <p className="font-bold text-lg">Google Play</p>
              </div>
            </button>
            
            <button
              onClick={handleAppStore}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <Heart className="size-6" />
              <div className="text-left">
                <p className="text-xs opacity-80">Baixar na</p>
                <p className="font-bold text-lg">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Wifi className="size-6 text-white" />
                </div>
                <h3 className="text-white">Federal Associados</h3>
              </div>
              <p className="text-gray-400">
                Planos de internet 4G e 5G com clube de vantagens e programa de comissionamento
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-white">Baixe o App</h3>
              <div className="space-y-3">
                <button
                  onClick={handleGooglePlay}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-left"
                >
                  📱 Google Play
                </button>
                <button
                  onClick={handleAppStore}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors text-left"
                >
                  🍎 App Store
                </button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-white">Contato</h3>
              <p className="text-gray-400 mb-4">
                <Phone className="size-4 inline mr-2" />
                (22) 99711-8730
              </p>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  💜 +15 anos de experiência<br />
                  📱 Parceiro oficial Claro, Vivo e TIM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Táxi Cabo Frio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}