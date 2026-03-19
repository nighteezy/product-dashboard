import { type FC } from "react";
import { FiSearch } from "react-icons/fi";

import type { ISearch } from "./types";
import * as S from "./units";

export const Search: FC<ISearch> = ({
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
