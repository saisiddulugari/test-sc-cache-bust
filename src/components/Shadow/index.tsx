import * as S from './styles'

const Main = ({
  title = 'This is a Shadow Page',
  description = 'To test',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
