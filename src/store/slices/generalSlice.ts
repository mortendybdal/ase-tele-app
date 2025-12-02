import { AllObjects } from "@/generated-api/api";
import { StateCreator } from "zustand";
import mockAseCustomer from "@/__mock__/data";

export type GeneralSlice = {
  isTestMode: boolean;
  customerData: AllObjects;
  setIsTestMode: (isTestMode: boolean) => void;
  setCustomerData: (data: AllObjects) => void;
};

export const initialGeneralSlice = {
  isTestMode: false,
  customerData: mockAseCustomer,
};

export const createGeneralSlice: StateCreator<
  GeneralSlice,
  [],
  [],
  GeneralSlice
> = (set) =>
  ({
    ...initialGeneralSlice,
    setIsTestMode: (isTestMode: boolean) => set(() => ({ isTestMode })),
    setCustomerData: (data: AllObjects) => set(() => ({ customerData: data })),
  } as unknown as GeneralSlice);
