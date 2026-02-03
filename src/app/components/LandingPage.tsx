import { Link } from 'react-router-dom';
import {
  Car,
  Phone,
  MapPin,
  Clock,
  Shield,
  Users,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';

export function LandingPage() {
  const [showQuickCallModal, setShowQuickCallModal] = useState(false);

  const handleWhatsAppNow = () => {
    const message = '🚕 Olá! Preciso de um táxi agora!';
    const whatsappUrl = `https://wa.me/5522992147508?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
    setShowQuickCallModal(false);
  };

  const handlePhoneCallNow = () => {
    window.location.href = 'tel:+5522992147508';
    setShowQuickCallModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center">
            <img
              src="/img/logo-300.gif"
              alt="Táxi Cabo Frio Logo"
              className="h-24 w-auto"
            />
          </div>
          <p className="text-gray-600 text-center mt-4">
            Transporte • Associação • Turismo
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            Soluções Completas para sua Mobilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o serviço ideal para você: transporte seguro, internet móvel
            ou viagens turísticas
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {/* Táxi */}
          <Link to="/taxi" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/img/cabo-frio.avif"
                  alt="Táxi Cabo Frio"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <Car className="size-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-blue-600">Táxi Cabo Frio</h3>
                <p className="text-gray-600 mb-4">
                  Transporte rápido e seguro com motorista profissional e Wi-Fi.
                </p>

                <div className="space-y-2 mb-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-blue-600" />
                    24 horas
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-blue-600" />
                    Seguro
                  </div>
                </div>

                <div className="flex items-center justify-between text-blue-600 font-medium">
                  <span>Agendar corrida</span>
                  <ArrowRight className="size-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Federal */}
          <Link to="/federal" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/img/reputacao.avif"
                  alt="Federal Associados"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <Users className="size-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-purple-600">Federal Associados</h3>
                <p className="text-gray-600">
                  Planos de internet e benefícios exclusivos.
                </p>
              </div>
            </div>
          </Link>

          {/* Turismo */}
          <Link to="/traslados" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/img/arraial-do-cabo.avif"
                  alt="Traslados Turísticos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <MapPin className="size-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-amber-600">Traslados Turísticos</h3>
                <p className="text-gray-600">
                  Viagens com conforto e cadastro CADASTUR.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-600 text-white text-center">
        <h2 className="mb-4">Precisa de táxi agora?</h2>
        <button
          onClick={() => setShowQuickCallModal(true)}
          className="bg-white text-green-700 px-8 py-4 rounded-lg font-medium"
        >
          Chamar no WhatsApp
        </button>
      </section>

      {/* Modal */}
      {showQuickCallModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <button
              onClick={handleWhatsAppNow}
              className="block w-full bg-green-600 text-white py-3 rounded mb-2"
            >
              WhatsApp
            </button>
            <button
              onClick={handlePhoneCallNow}
              className="block w-full bg-blue-600 text-white py-3 rounded"
            >
              Ligar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}