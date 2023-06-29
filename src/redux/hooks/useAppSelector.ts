import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

// Criando e exportando um hook personalizado para usar o RootState
// O RootState é o tipo de retorno da função configureStore
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
