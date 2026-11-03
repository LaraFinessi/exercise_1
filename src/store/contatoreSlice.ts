import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface StatoContatore {
  valore: number;
}

const statoIniziale: StatoContatore = { valore: 0 };
// il contatore viene inizializzato a 0

const contenitoreOperazioni = {
  incrementa: (s:StatoContatore) => { s.valore += 1; },
  decrementa: (s:StatoContatore) => { s.valore -= 1; },
  impostaValore: (s:StatoContatore, azione: PayloadAction<number>) => {
    s.valore = azione.payload;
  },   
};
// prende in ingresso lo stato corrente e un azione - che contiene un valore detto payload. 

const configurazione = {
  name: 'compartoContatore',
  initialState: statoIniziale,
  reducers: contenitoreOperazioni,
};

//creazione della slice
const contatoreSlice = createSlice(configurazione);
//membro actions contiene le tre arrows di contenitoreOperazioni destrutturate
export const { incrementa, decrementa, impostaValore } = contatoreSlice.actions;
export default contatoreSlice.reducer;

//con export, oltre a creare l'oggetto, lo rendi anche accessibile alle altre pagine