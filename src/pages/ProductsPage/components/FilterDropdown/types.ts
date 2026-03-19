import type {
  SortKey,
  SortOrder,
} from "../ProductsTable/types";

export interface FilterDropdownProps {
  sortKey: SortKey | null;
  sortOrder: SortOrder;
  onSortChange: (key: SortKey, order: SortOrder) => void;
}
