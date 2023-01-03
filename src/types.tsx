import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDis } from "./redux/store";

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDis>()