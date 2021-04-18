import styled from 'styled-components';
import { Row } from '../../components/Common';
import { fadeAnimations } from '../../styles';

export const BooksContainer = styled.div`
  padding: 40px;

  @media (max-width: 414px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: 1200px) {
    padding-left: ${({ theme }) => theme.booksListPadding.grid(3)}px;
    padding-right: ${({ theme }) => theme.booksListPadding.grid(3)}px;
  }

  @media (min-width: 1201px) and (max-width: 1699px) {
    padding-left: ${({ theme }) => theme.booksListPadding.grid(4)}px;
    padding-right: ${({ theme }) => theme.booksListPadding.grid(4)}px;
  }

  @media (min-width: 1700px) {
    padding-left: ${({ theme }) => theme.booksListPadding.grid(5)}px;
    padding-right: ${({ theme }) => theme.booksListPadding.grid(5)}px;
  }

`;

export const BooksHeader = styled(Row)`
  height: 40px;
  justify-content: space-between;
`;

export const UserHeader = styled(Row)`
  height: 32px;
`;

export const WelcomeLabel = styled.label`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  margin-right: 16px;

  ${fadeAnimations}
`;

export const UserLabel = styled(WelcomeLabel)`
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-right: unset;
`