import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { UserPlus, Send } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    cpf: '',
    dataNascimento: '',
    nomeCompleto: '',
    email: '',
    celular: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    enderecoCompleto: '',
    complemento: '',
    tipoChip: '',
    planoEscolhido: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `📋 *DADOS PARA FAZER O CADASTRO*

CPF: ${formData.cpf}

DATA DE NASCIMENTO: ${formData.dataNascimento}

NOME COMPLETO: ${formData.nomeCompleto}

E-MAIL: ${formData.email}

CELULAR: ${formData.celular}

CEP: ${formData.cep}

BAIRRO: ${formData.bairro}

CIDADE: ${formData.cidade}

ESTADO: ${formData.estado}

ENDEREÇO COMPLETO: ${formData.enderecoCompleto}

COMPLEMENTO: ${formData.complemento}

TIPO DE CHIP: ${formData.tipoChip}

QUAL PLANO ESCOLHIDO: ${formData.planoEscolhido}`;

    const phoneNumber = '5522997118730';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 border-2 border-blue-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
          <UserPlus className="size-5" />
          <span>Cadastro Simplificado</span>
        </div>
        <h3 className="mb-3 text-gray-900">Dificuldade em se Cadastrar?</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Sem problemas! Preencha o formulário abaixo e envie seus dados via WhatsApp. Nossa equipe irá finalizar seu cadastro e entrar em contato com você.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* CPF */}
          <div>
            <label htmlFor="cpf" className="block text-gray-700 mb-2">
              CPF <span className="text-red-500">*</span>
            </label>
            <Input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Data de Nascimento */}
          <div>
            <label htmlFor="dataNascimento" className="block text-gray-700 mb-2">
              Data de Nascimento <span className="text-red-500">*</span>
            </label>
            <Input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Nome Completo */}
          <div className="md:col-span-2">
            <label htmlFor="nomeCompleto" className="block text-gray-700 mb-2">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <Input
              id="nomeCompleto"
              name="nomeCompleto"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Celular */}
          <div>
            <label htmlFor="celular" className="block text-gray-700 mb-2">
              Celular <span className="text-red-500">*</span>
            </label>
            <Input
              id="celular"
              name="celular"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.celular}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* CEP */}
          <div>
            <label htmlFor="cep" className="block text-gray-700 mb-2">
              CEP <span className="text-red-500">*</span>
            </label>
            <Input
              id="cep"
              name="cep"
              type="text"
              placeholder="00000-000"
              value={formData.cep}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Bairro */}
          <div>
            <label htmlFor="bairro" className="block text-gray-700 mb-2">
              Bairro <span className="text-red-500">*</span>
            </label>
            <Input
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Seu bairro"
              value={formData.bairro}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Cidade */}
          <div>
            <label htmlFor="cidade" className="block text-gray-700 mb-2">
              Cidade <span className="text-red-500">*</span>
            </label>
            <Input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Estado */}
          <div>
            <label htmlFor="estado" className="block text-gray-700 mb-2">
              Estado <span className="text-red-500">*</span>
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o estado</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>

          {/* Endereço Completo */}
          <div className="md:col-span-2">
            <label htmlFor="enderecoCompleto" className="block text-gray-700 mb-2">
              Endereço Completo <span className="text-red-500">*</span>
            </label>
            <Input
              id="enderecoCompleto"
              name="enderecoCompleto"
              type="text"
              placeholder="Rua, número, etc."
              value={formData.enderecoCompleto}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Complemento */}
          <div className="md:col-span-2">
            <label htmlFor="complemento" className="block text-gray-700 mb-2">
              Complemento
            </label>
            <Input
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Apto, bloco, etc. (opcional)"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Tipo de Chip */}
          <div>
            <label htmlFor="tipoChip" className="block text-gray-700 mb-2">
              Tipo de Chip <span className="text-red-500">*</span>
            </label>
            <select
              id="tipoChip"
              name="tipoChip"
              value={formData.tipoChip}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o tipo</option>
              <option value="FÍSICO">Físico</option>
              <option value="E-SIM">E-SIM</option>
            </select>
          </div>

          {/* Plano Escolhido */}
          <div>
            <label htmlFor="planoEscolhido" className="block text-gray-700 mb-2">
              Qual Plano Escolhido <span className="text-red-500">*</span>
            </label>
            <select
              id="planoEscolhido"
              name="planoEscolhido"
              value={formData.planoEscolhido}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o plano</option>
              <option value="40 GIGAS - R$ 49,90">40 GIGAS - R$ 49,90</option>
              <option value="80 GIGAS - R$ 69,90">80 GIGAS - R$ 69,90</option>
              <option value="100 GIGAS - R$ 69,90">100 GIGAS - R$ 69,90</option>
              <option value="150 GIGAS - R$ 99,90">150 GIGAS - R$ 99,90</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-12 py-3 text-lg"
          >
            <Send className="size-5 mr-2" />
            Enviar Dados via WhatsApp
          </Button>
          <p className="text-sm text-gray-600 mt-3">
            Seus dados serão enviados diretamente para nossa equipe via WhatsApp
          </p>
        </div>
      </form>
    </Card>
  );
}
