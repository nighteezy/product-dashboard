import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowUp, FiFilter } from "react-icons/fi";

import type { IFilterDropdown } from "./types";
import * as S from "./units";
import type { SortKey } from "../ProductsTable/types";
import { SORT_OPTIONS } from "../../const";

export const FilterDropdown = ({
  sortKey,
  sortOrder,
  onSortChange,
}: IFilterDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSortFieldSelect = (key: SortKey) => {
    const newOrder =
      sortKey === key ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    onSortChange(key, newOrder);
  };

  const handleSortOrderSelect = (order: "asc" | "desc") => {
    const key = sortKey ?? "title";
    onSortChange(key, order);
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.TriggerButton
        type="button"
        title="Фильтр"
        $active={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiFilter size={22} />
      </S.TriggerButton>
      {isOpen && (
        <S.Dropdown>
          <S.Title>Сортировка</S.Title>
          <S.Section>
            <S.Label>Поле</S.Label>
            {SORT_OPTIONS.map(({ key, label }) => (
              <S.Option
                key={key}
                type="button"
                $active={sortKey === key}
                onClick={() => handleSortFieldSelect(key)}
              >
                {label}
                {sortKey === key &&
                  (sortOrder === "asc" ? (
                    <FiArrowUp size={16} />
                  ) : (
                    <FiArrowDown size={16} />
                  ))}
              </S.Option>
            ))}
          </S.Section>
          <S.Section>
            <S.Label>Порядок</S.Label>
            <S.Option
              type="button"
              $active={sortOrder === "asc"}
              onClick={() => handleSortOrderSelect("asc")}
            >
              По возрастанию
            </S.Option>
            <S.Option
              type="button"
              $active={sortOrder === "desc"}
              onClick={() => handleSortOrderSelect("desc")}
            >
              По убыванию
            </S.Option>
          </S.Section>
        </S.Dropdown>
      )}
    </S.Wrapper>
  );
};
