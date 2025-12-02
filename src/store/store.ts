import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

import {
  GeneralSlice,
  initialGeneralSlice,
  createGeneralSlice,
} from "./slices/generalSlice";

export type Store = GeneralSlice;

export const initialState = {
  ...initialGeneralSlice,
};

const baseStore = create<Store>()(
  persist(
    (...a) => ({
      ...createGeneralSlice(...a),
    }),
    {
      name: "ase-customer-cards",
      version: 1,
      partialize: (state) => ({}),
    }
  )
);

export const useStore = createSelectorHooks(baseStore);
