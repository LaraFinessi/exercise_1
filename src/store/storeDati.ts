// in questa pagina si va a  creare lo store, la sezione verde

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import modificatoreContatore from './contatoreSlice';
// andiamo ad importare la nostra slice attraverso contatoreSlice -
// che nella funzione qui sotto andremo a chiamare archivioContatore
const funzioniSmistatrici = {
  archivioContatore: modificatoreContatore, 
};

//serve ad istruire lo store dell'elenco delle proprie slice
const oggettoConfigurazione = {
  reducer: funzioniSmistatrici,
};

export const storeDati = configureStore(oggettoConfigurazione);

/*
{
  archivioContatore: {
    valore: number;
  }
}
*/
// gli oggetti di tipo StatoGlobale, sono oggetti che hanno un membro intitolato
// archivioContatore e un valore che sia un oggetto con valore di tipo number
export type StatoGlobale = ReturnType<typeof storeDati.getState>;

// leggere
export const useSelettoreCentrale: TypedUseSelectorHook<StatoGlobale> = useSelector;
// useSelector è una funzione standar di react - ed è una funzione che posso utilizzare con ogni tipo di dato
// così facendo andiamo a crerae una fotocipia della funzione stessa ma con il limite che verifica, attraverso
// "TypedUseSelectorHook" che gli do solo elementi che operano sullo StatoGlobale - per una maggiore sicurezza di programmazione
// essendo UseSelector troppo permissivo 

// scrivere
export const generaFunzioneInvio = () => useDispatch<typeof storeDati.dispatch>();
// quando viene invocata mi restituisce un'altra funzione che io invocherò per scrivere nello stato globale
