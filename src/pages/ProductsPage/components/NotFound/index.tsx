import { type FC } from "react";
import { FiSearch } from "react-icons/fi";

import * as S from "./units";

export const NotFound: FC = () => {
  return (
    <S.Wrapper>
      <S.Icon>
        <FiSearch size={48} />
      </S.Icon>
      <S.Text>По вашему запросу ничего не найдено, измените запрос</S.Text>
    </S.Wrapper>
  );
};
