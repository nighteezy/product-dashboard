import { type FC } from "react";
import * as S from "./units";
import { FiSearch } from "react-icons/fi";
import type { SearchProps } from "./types";

export const Search: FC<SearchProps> = ({
  value,
  onChange,
  onClear,
  placeholder = "Найти",
}) => {
  return (
    <S.SearchContainer>
      <S.SearchIcon>
        <FiSearch size={24} />
      </S.SearchIcon>
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <S.ClearButton onClick={onClear}>✕</S.ClearButton>}
    </S.SearchContainer>
  );
};
