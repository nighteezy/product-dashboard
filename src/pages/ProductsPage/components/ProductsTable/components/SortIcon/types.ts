import type { SortKey, SortOrder } from "../../types";

export interface ISortIcon {
  columnKey: SortKey;
  sortKey: SortKey | null;
  sortOrder: SortOrder;
}
