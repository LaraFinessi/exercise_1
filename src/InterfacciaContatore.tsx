import React from 'react';
import { generaFunzioneInvio, useSelettoreCentrale } from './store/storeDati';
import { incrementa, decrementa, impostaValore } from './store/contatoreSlice';
import type { StatoGlobale } from './store/storeDati';

export const SchermoContatore: React.FC = () => {

  const operazione = (s: StatoGlobale) => s.archivioContatore.valore;
  const numeroVisualizzato = useSelettoreCentrale(operazione);
  const inviaComando = generaFunzioneInvio();

  return (
    <div>
      <h2>Valore: {numeroVisualizzato}</h2>
      <button onClick={() => inviaComando(incrementa())}>+</button>
      <button onClick={() => inviaComando(decrementa())}>-</button>
      <button onClick={() => inviaComando(impostaValore(42))}>Imposta a 42</button>
    </div>
  );
  
};
