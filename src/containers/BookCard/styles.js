import styled from 'styled-components';
import { Row, Column } from '../../components';
import { fadeAnimations } from '../../styles';

export const Container = styled(Row)`
  background: #fff;
  height: 160px;
  width: 272px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.bookCardShadows};
  cursor: pointer;

  @media (max-width: 414px) {
    width: 100%;
  }

  ${fadeAnimations}
`;

export const BookCover = styled.img`
  height: 122px;
  width: 81px;
  margin: auto 16px;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadows.bookCoverShadows};
  align-self: center;
`;

export const BookInformations = styled(Column)`
  padding: 16px 16px 16px 0;
  display: flex;
  width: 140px;
  justify-content: space-between;

  @media (max-width: 280px) {
    width: 120px;
  }

  @media (min-width: 281px) and (max-width: 414px) {
    width: 200px;
  }
`;

export const BookTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;

  //prevents layout breakdown in some cases
  ${({ useOverflow }) =>
    useOverflow &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const BookAuthor = styled.span`
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0em;
  text-align: left;
`;

export const BookDetails = styled.span`
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colors.darkgray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
