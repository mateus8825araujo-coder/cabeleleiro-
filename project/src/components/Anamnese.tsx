import React, { useState } from 'react';
import { FileText, User, Heart, Target, Eye, PenTool, Save, Printer as Print } from 'lucide-react';

interface AnamneseData {
  // Identificação
  nomeCompleto: string;
  idade: string;
  dataNascimento: string;
  telefone: string;
  dataAtendimento: string;
  
  // Histórico Capilar
  tipoCabelo: string;
  espessura: string;
  estadoAtual: string;
  corNatural: string;
  coloracaoAtual: string;
  quimicasRealizadas: string[];
  frequenciaCalor: string;
  
  // Saúde e Cuidados
  alergias: string;
  medicamentos: string;
  problemasCouroCabeludo: string;
  alimentacaoEquilibrada: string;
  ingestaoAgua: string;
  
  // Objetivo
  servicoDesejado: string;
  expectativaCliente: string;
  
  // Observações Profissional
  analiseVisual: string;
  diagnosticoCapilar: string;
  produtosRecomendados: string;
  planoTratamento: string;
}

export const Anamnese: React.FC = () => {
  const [formData, setFormData] = useState<AnamneseData>({
    nomeCompleto: '',
    idade: '',
    dataNascimento: '',
    telefone: '',
    dataAtendimento: new Date().toISOString().split('T')[0],
    tipoCabelo: '',
    espessura: '',
    estadoAtual: '',
    corNatural: '',
    coloracaoAtual: '',
    quimicasRealizadas: [],
    frequenciaCalor: '',
    alergias: '',
    medicamentos: '',
    problemasCouroCabeludo: '',
    alimentacaoEquilibrada: '',
    ingestaoAgua: '',
    servicoDesejado: '',
    expectativaCliente: '',
    analiseVisual: '',
    diagnosticoCapilar: '',
    produtosRecomendados: '',
    planoTratamento: ''
  });

  const handleInputChange = (field: keyof AnamneseData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: 'quimicasRealizadas', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSave = () => {
    console.log('Dados salvos:', formData);
    alert('Ficha de anamnese salva com sucesso!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="anamnese" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Ficha de <span className="text-rose-400 font-semibold">Anamnese Capilar</span>
          </h2>
          <p className="text-xl text-gray-600">
            Avaliação completa para o melhor atendimento personalizado
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-6 print:bg-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-white print:text-gray-800" />
                <h3 className="text-2xl font-semibold text-white print:text-gray-800">
                  Anamnese Capilar - E&C Studio
                </h3>
              </div>
              <div className="flex space-x-2 print:hidden">
                <button
                  onClick={handleSave}
                  className="bg-white text-rose-500 px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Salvar</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-white text-rose-500 px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors flex items-center space-x-2"
                >
                  <Print className="h-4 w-4" />
                  <span>Imprimir</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* 1. Identificação do Cliente */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">1. Identificação do Cliente</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    value={formData.nomeCompleto}
                    onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Nome completo do cliente"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  <input
                    type="number"
                    value={formData.idade}
                    onChange={(e) => handleInputChange('idade', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Idade"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                  <input
                    type="date"
                    value={formData.dataNascimento}
                    onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data do Atendimento</label>
                  <input
                    type="date"
                    value={formData.dataAtendimento}
                    onChange={(e) => handleInputChange('dataAtendimento', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* 2. Histórico Capilar */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">2. Histórico Capilar</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cabelo</label>
                  <select
                    value={formData.tipoCabelo}
                    onChange={(e) => handleInputChange('tipoCabelo', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="liso">Liso</option>
                    <option value="ondulado">Ondulado</option>
                    <option value="cacheado">Cacheado</option>
                    <option value="crespo">Crespo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Espessura</label>
                  <select
                    value={formData.espessura}
                    onChange={(e) => handleInputChange('espessura', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="fino">Fino</option>
                    <option value="medio">Médio</option>
                    <option value="grosso">Grosso</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado Atual</label>
                  <select
                    value={formData.estadoAtual}
                    onChange={(e) => handleInputChange('estadoAtual', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="ressecado">Ressecado</option>
                    <option value="oleoso">Oleoso</option>
                    <option value="misto">Misto</option>
                    <option value="saudavel">Saudável</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cor Natural</label>
                  <input
                    type="text"
                    value={formData.corNatural}
                    onChange={(e) => handleInputChange('corNatural', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Ex: Castanho escuro"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coloração/Tintura Atual</label>
                  <input
                    type="text"
                    value={formData.coloracaoAtual}
                    onChange={(e) => handleInputChange('coloracaoAtual', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Descreva a coloração atual (se houver)"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Químicas Realizadas (marque todas que se aplicam)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Progressiva', 'Descoloração', 'Alisamento', 'Relaxamento', 'Permanente', 'Botox Capilar'].map((quimica) => (
                    <label key={quimica} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.quimicasRealizadas.includes(quimica)}
                        onChange={() => handleCheckboxChange('quimicasRealizadas', quimica)}
                        className="rounded border-gray-300 text-rose-400 focus:ring-rose-400"
                      />
                      <span className="text-sm text-gray-700">{quimica}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequência de uso de chapinha/secador/babyliss</label>
                <select
                  value={formData.frequenciaCalor}
                  onChange={(e) => handleInputChange('frequenciaCalor', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="diariamente">Diariamente</option>
                  <option value="3-4x-semana">3-4x por semana</option>
                  <option value="1-2x-semana">1-2x por semana</option>
                  <option value="raramente">Raramente</option>
                  <option value="nunca">Nunca</option>
                </select>
              </div>
            </div>

            {/* 3. Saúde e Cuidados Gerais */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">3. Saúde e Cuidados Gerais</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Possui alergia a algum produto químico/cosmético?</label>
                  <textarea
                    value={formData.alergias}
                    onChange={(e) => handleInputChange('alergias', e.target.value)}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Descreva alergias conhecidas ou escreva 'Não possui'"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Faz uso de medicamentos que possam afetar cabelo/couro cabeludo?</label>
                  <textarea
                    value={formData.medicamentos}
                    onChange={(e) => handleInputChange('medicamentos', e.target.value)}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Liste medicamentos ou escreva 'Não faz uso'"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Histórico de queda de cabelo ou problemas no couro cabeludo?</label>
                  <textarea
                    value={formData.problemasCouroCabeludo}
                    onChange={(e) => handleInputChange('problemasCouroCabeludo', e.target.value)}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Descreva problemas como caspa, seborreia, dermatite, psoríase, etc."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alimentação equilibrada?</label>
                    <select
                      value={formData.alimentacaoEquilibrada}
                      onChange={(e) => handleInputChange('alimentacaoEquilibrada', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                      <option value="parcialmente">Parcialmente</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hábito de ingerir bastante água?</label>
                    <select
                      value={formData.ingestaoAgua}
                      onChange={(e) => handleInputChange('ingestaoAgua', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim (mais de 2L/dia)</option>
                      <option value="moderado">Moderado (1-2L/dia)</option>
                      <option value="pouco">Pouco (menos de 1L/dia)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Objetivo do Atendimento */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">4. Objetivo do Atendimento</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviço Desejado</label>
                  <input
                    type="text"
                    value={formData.servicoDesejado}
                    onChange={(e) => handleInputChange('servicoDesejado', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Ex: Corte, coloração, tratamento, escova, hidratação..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expectativa do Cliente com o Resultado</label>
                  <textarea
                    value={formData.expectativaCliente}
                    onChange={(e) => handleInputChange('expectativaCliente', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Descreva o que o cliente espera alcançar com o atendimento..."
                  />
                </div>
              </div>
            </div>

            {/* 5. Observações do Profissional */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">5. Observações do Profissional</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Análise Visual e ao Toque</label>
                  <textarea
                    value={formData.analiseVisual}
                    onChange={(e) => handleInputChange('analiseVisual', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Observações sobre textura, porosidade, elasticidade, brilho, etc..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diagnóstico Capilar</label>
                  <textarea
                    value={formData.diagnosticoCapilar}
                    onChange={(e) => handleInputChange('diagnosticoCapilar', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Diagnóstico profissional do estado capilar..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Produtos Recomendados</label>
                  <textarea
                    value={formData.produtosRecomendados}
                    onChange={(e) => handleInputChange('produtosRecomendados', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Shampoos, condicionadores, máscaras, leave-ins recomendados..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plano de Tratamento/Cronograma Capilar Sugerido</label>
                  <textarea
                    value={formData.planoTratamento}
                    onChange={(e) => handleInputChange('planoTratamento', e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent print:border-b print:border-gray-400 print:rounded-none print:bg-transparent"
                    placeholder="Cronograma de hidratação, nutrição, reconstrução e frequência recomendada..."
                  />
                </div>
              </div>
            </div>

            {/* 6. Assinaturas */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <PenTool className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-semibold text-gray-800">6. Assinaturas</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Assinatura do Cliente</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 min-h-[100px] flex items-center justify-center">
                    Assinatura do Cliente
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Data: ___/___/______
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Assinatura do Profissional</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 min-h-[100px] flex items-center justify-center">
                    Assinatura do Profissional
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Data: ___/___/______
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};