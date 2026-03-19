import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import type { ISortIcon } from "./types";

export const SortIcon = ({ columnKey, sortKey, sortOrder }: ISortIcon) => {
  if (sortKey !== columnKey) return null;
  return sortOrder === "asc" ? <FiArrowUp /> : <FiArrowDown />;
};
