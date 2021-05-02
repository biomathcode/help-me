
import * as S from "./styles";

const Block = ({ title, content}) => {
  return (
    <S.Container>
        <h6>{title}</h6>
        <S.TextWrapper>
          <S.Content>{content}</S.Content>
        </S.TextWrapper>
    </S.Container>
  );
};

export default Block;
