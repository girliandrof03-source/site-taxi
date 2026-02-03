import { Wifi, Phone, Zap, Check, Smartphone, Gift, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RegistrationForm } from './RegistrationForm';

export function InternetPlanAd() {
  const handleContact = () => {
    const message = '📱 Olá! Gostaria de saber mais sobre os planos de internet da Federal Associados!';
    const phoneNumber = '5522997118730';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAssociate = () => {
    window.open('https://federalassociados.com.br/escolha-tipo-plano/161010', '_blank');
  };

  const handleClubeCerto = () => {
    window.open('https://www.hotsite.clubecerto.com.br/clubecerto', '_blank');
  };

  const plans = [
    { 
      data: '40 GIGAS', 
      price: 'R$ 49,90', 
      popular: false,
      operator: 'Vivo',
      details: 'Plano da Vivo com ligação ilimitada'
    },
    { 
      data: '80 GIGAS', 
      price: 'R$ 69,90', 
      popular: false,
      operator: 'TIM/Claro/Vivo',
      details: 'Plano com ligação ilimitada'
    },
    { 
      data: '100 GIGAS', 
      price: 'R$ 69,90', 
      popular: true,
      operator: 'TIM/Claro/Vivo',
      details: 'Plano com ligação ilimitada'
    },
    { 
      data: '150 GIGAS', 
      price: 'R$ 99,90', 
      popular: false,
      operator: 'TIM/Claro/Vivo',
      details: 'Plano com ligação ilimitada'
    },
  ];

  const benefits = [
    'Envio do chip grátis',
    'Sem consulta ao SPC e SERASA',
    'Cinema Grátis - Rede Cinesystem',
    'Auxílio Funeral - R$ 3.000,00',
    'Clube de Benefícios (Clube Certo)',
    'Ligações ilimitadas para qualquer DDD',
  ];

  const additionalBenefits = [
    'Ampla Cobertura Nacional',
    'Ativação do chip em até 24 Horas',
    'Internet móvel 4G e 5G',
    'Mais de 10.000 empresas parceiras',
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full mb-4">
          <Smartphone className="size-6" />
          <span className="text-xl font-bold">Federal Associados</span>
        </div>
        <h2 className="mb-3 text-gray-900">Você está cansado de planos de internet caros e LIMITADOS?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-4">
          Venha conhecer a Federal Associados e descubra um mundo de vantagens com nossos planos de internet 4G e 5G das operadoras TIM, Vivo e Claro!
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Torne-se um Associado da Federal hoje e construa um negócio próprio levando serviços de telefonia de qualidade para pessoas em todo o país enquanto constrói uma fonte de renda com o nosso programa PBI.
        </p>
        <Button 
          onClick={handleContact}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8"
        >
          <Phone className="size-4 mr-2" />
          Fale Conosco
        </Button>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative p-6 text-center transition-all hover:shadow-xl ${
              plan.popular 
                ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0 scale-105' 
                : 'bg-white'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
            )}
            
            <div className={`mb-4 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
              <Smartphone className="size-12 mx-auto mb-2" />
            </div>
            
            <h3 className={`mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
              {plan.data}
            </h3>
            
            <div className="mb-4">
              <div className={`text-4xl mb-1 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                {plan.price}
              </div>
              <div className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                por mês
              </div>
            </div>
            
            <div className={`text-sm mb-4 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
              {plan.details}
            </div>
            
            <ul className="space-y-2 mb-6 text-left">
              <li className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                <Check className="size-4 flex-shrink-0 mt-0.5" />
                <span>Envio do chip grátis</span>
              </li>
              <li className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                <Check className="size-4 flex-shrink-0 mt-0.5" />
                <span>Sem consulta ao SPC e SERASA</span>
              </li>
              <li className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                <Check className="size-4 flex-shrink-0 mt-0.5" />
                <span>Cinema Grátis</span>
              </li>
              <li className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                <Check className="size-4 flex-shrink-0 mt-0.5" />
                <span>Auxílio Funeral - R$ 3.000</span>
              </li>
              <li className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                <Check className="size-4 flex-shrink-0 mt-0.5" />
                <span>Clube de Benefícios</span>
              </li>
            </ul>
            
            <Button 
              onClick={handleAssociate}
              className={
                plan.popular 
                  ? 'w-full bg-white text-purple-600 hover:bg-gray-100' 
                  : 'w-full bg-purple-600 text-white hover:bg-purple-700'
              }
            >
              Assinar Agora
            </Button>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white p-8">
        <h3 className="text-center mb-8 text-gray-900">Por Que Escolher a Federal Associados?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="size-5 text-green-600" />
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Additional Benefits Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white p-8">
        <h3 className="text-center mb-8 text-gray-900">Vantagens de ser um Associado</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Check className="size-5 text-blue-600" />
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Clube Certo Section */}
      <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8 border-2 border-amber-200">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full mb-4">
            <Gift className="size-5" />
            <span>Clube Certo</span>
          </div>
          <h3 className="mb-3 text-gray-900">Conheça o Clube Certo</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Acesse o site e descubra um mundo de descontos e ofertas! Mais de 10.000 empresas parceiras e 40.000 ofertas de descontos esperando por você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="size-8 text-amber-600" />
            </div>
            <h4 className="mb-2 text-gray-900">10.000+ Empresas</h4>
            <p className="text-gray-600 text-sm">
              Parceiros em todo Brasil
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="size-8 text-orange-600" />
            </div>
            <h4 className="mb-2 text-gray-900">40.000+ Ofertas</h4>
            <p className="text-gray-600 text-sm">
              Descontos exclusivos
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="size-8 text-yellow-600" />
            </div>
            <h4 className="mb-2 text-gray-900">Fácil Acesso</h4>
            <p className="text-gray-600 text-sm">
              Online e disponível 24h
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleClubeCerto}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 px-8"
          >
            <ExternalLink className="size-4 mr-2" />
            Acessar Clube Certo
          </Button>
        </div>
      </Card>

      {/* PBI Program Section */}
      <Card className="bg-white p-8">
        <div className="text-center mb-6">
          <h3 className="mb-3 text-gray-900">Conheça Nosso PBI - Programa de Benefícios por Indicação</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A Federal Associados distribui parte do seu lucro por um sistema de comissionamento moderno e autossustentável. 
            Onde o consumidor, além de usufruir do serviço contratado, recebe comissão da adesão e recorrência da mensalidade até 10 (dez) níveis.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="mb-4 text-gray-900">10 Níveis de Comissionamento</h4>
            <p className="text-gray-600 mb-4">
              Ao se tornar um Associado você pode trabalhar para construir uma rede de associados e ganhar comissão por cada pessoa 
              que assinar um Plano da Federal através da sua indicação.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ganhe 87% de comissão sobre adesões</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">10% a 20% sobre mensalidades dos associados diretos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Sem limite de indicações</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Saque mínimo de R$ 50,00</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-lg">
            <h4 className="mb-3 text-gray-900">Como Funciona?</h4>
            <p className="text-gray-700 mb-4">
              O cliente da Federal é um associado que poderá obter excelentes ganhos mensais atuando no sistema de indicação.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Distribuição de lucros entre consultores</li>
              <li>✓ Sistema moderno e autossustentável</li>
              <li>✓ Saque toda quarta-feira</li>
              <li>✓ Pagamento em até 05 dias úteis</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 text-center">
        <Smartphone className="size-16 mx-auto mb-4 text-white/80" />
        <h3 className="mb-3 text-white">Que tal Começar Agora?</h3>
        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
          Além de poder indicar outros associados e ganhar dinheiro, você também vai poder usufruir de todos os benefícios 
          e soluções que a Federal Associados oferece!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleAssociate}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8"
          >
            Tornar-se Associado
          </Button>
          <Button 
            onClick={handleContact}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8"
          >
            <Phone className="size-4 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </Card>

      {/* Registration Form Section */}
      <RegistrationForm />
    </div>
  );
}