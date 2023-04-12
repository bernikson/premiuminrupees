import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  authState: {
    isOpen: boolean;
    render: string;
  };
}

interface Action {
  setAuthState: (isOpen: boolean, render?: string) => void;
}

export const useStore = create(
  immer<State & Action>((set) => ({
    authState: { isOpen: false, render: "login" },
    setAuthState: (isOpen, render) =>
      set((state) => ({
        authState: { isOpen, render: render || state.authState.render },
      })),
  }))
);
