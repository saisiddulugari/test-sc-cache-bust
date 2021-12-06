import * as S from './styles'

const Main = ({ title = 'Main page is like this', description = 'hello' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
