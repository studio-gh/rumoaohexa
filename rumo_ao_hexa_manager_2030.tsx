import React, { useState, useMemo } from 'react';
import { Users, Clipboard, Target, ChevronRight } from 'lucide-react';

// Dados base de jogadores
const JOGADORES_BASE = [
  { id: 'j1', nome: 'Alisson', pos: 'GOL', ovr: 88 },
  { id: 'j4', nome: 'Marquinhos', pos: 'ZAG', ovr: 87 },
  { id: 'j5', nome: 'Militão', pos: 'ZAG', ovr: 86 },
  { id: 'j7', nome: 'Vini Jr', pos: 'ATA', ovr: 92 },
  { id: 'j8', nome: 'Endrick', pos: 'ATA', ovr: 85 },
];

export default function App() {
  const [view, setView] = useState('HUB'); // HUB, TATICAS, ELENCO
  const [esquema, setEsquema] = useState('4-3-3');
  const [mentalidade, setMentalidade] = useState('Ofensiva');
  const [instrucao, setInstrucao] = useState('Pressão Alta');

  return (
    <div className="min-h-screen bg-emerald-950 p-4 text-emerald-50 font-mono">
      {/* Header */}
      <div className="bg-emerald-800 border-b-4 border-yellow-500 p-3 mb-6 text-center">
        <h1 className="text-xl font-bold uppercase text-yellow-400">Hub do Técnico: {view}</h1>
      </div>

      {view === 'HUB' && (
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setView('ELENCO')} className="bg-emerald-900 p-6 border border-emerald-700 flex flex-col items-center">
            <Users size={32} className="mb-2 text-yellow-500"/> Plantel
          </button>
          <button onClick={() => setView('TATICAS')} className="bg-emerald-900 p-6 border border-emerald-700 flex flex-col items-center">
            <Clipboard size={32} className="mb-2 text-yellow-500"/> Táticas
          </button>
        </div>
      )}

      {view === 'TATICAS' && (
        <div className="space-y-4">
          <div className="bg-emerald-900 p-4 border border-emerald-700">
            <label className="block text-xs uppercase mb-2">Esquema Tático</label>
            <select value={esquema} onChange={(e) => setEsquema(e.target.value)} className="w-full bg-emerald-950 p-2 border border-emerald-600">
              <option>4-3-3</option>
              <option>4-4-2</option>
              <option>3-5-2</option>
            </select>
          </div>
          
          <div className="bg-emerald-900 p-4 border border-emerald-700">
            <label className="block text-xs uppercase mb-2">Mentalidade</label>
            <select value={mentalidade} onChange={(e) => setMentalidade(e.target.value)} className="w-full bg-emerald-950 p-2 border border-emerald-600">
              <option>Defensiva</option>
              <option>Equilibrada</option>
              <option>Ofensiva</option>
            </select>
          </div>

          <div className="bg-emerald-900 p-4 border border-emerald-700">
            <label className="block text-xs uppercase mb-2">Instrução Especial</label>
            <input 
              type="text" 
              value={instrucao} 
              onChange={(e) => setInstrucao(e.target.value)}
              className="w-full bg-emerald-950 p-2 border border-emerald-600"
            />
          </div>

          <button onClick={() => setView('HUB')} className="w-full bg-yellow-600 p-3 font-bold uppercase text-emerald-950">
            Salvar e Voltar
          </button>
        </div>
      )}

      {view === 'ELENCO' && (
        <div className="bg-emerald-900 p-4">
          <h2 className="mb-4 font-bold text-yellow-500 underline">ESCALAÇÃO ATUAL ({esquema})</h2>
          {JOGADORES_BASE.map(j => (
            <div key={j.id} className="flex justify-between p-2 border-b border-emerald-800 text-sm">
              <span>{j.nome} <span className="text-gray-400">({j.pos})</span></span>
              <span>OVR {j.ovr}</span>
            </div>
          ))}
          <button onClick={() => setView('HUB')} className="mt-6 w-full text-emerald-400 flex items-center justify-center">
             Voltar ao Hub <ChevronRight size={16}/>
          </button>
        </div>
      )}
    </div>
  );
}