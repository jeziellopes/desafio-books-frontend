import styled, { css } from 'styled-components';
import { Row, Column } from '../../components';
import { fadeAnimations } from '../../styles/animations';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.modalOverlay};
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
  animation: fade 0.15s ease-in-out;
  transition: opacity 0.15s;
  display: flex;
  justify-content: center;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const ModalContainer = styled.div`
  max-height: 608px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.bookModalShadows};
  align-self: center;
  padding-right: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-self: flex-end;
    margin-bottom: 16px;
    width: ${({ theme }) => theme.screen.width - 32}px;
    height: ${({ theme }) => theme.screen.height - 80}px;
    max-height: unset;
    overflow-y: scroll;
  }
`;

export const BookCover = styled.img`
  height: 512px;
  width: 349px;
  margin: 48px;
  box-shadow: ${({ theme }) => theme.shadows.bookCoverModalShadows};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.screen.width - 80}px;
    height: auto;
    margin: 24px;
  }
`;

export const DetailsContainer = styled(Column)`
  width: 276px;
  padding-top: 48px;
  padding-right: 48px;
  padding-bottom: 48px;

  @media (min-width: 769px) {
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
      background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    width: unset;
    padding: 0px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const InformationsContainer = styled(Column)`
  padding-top: 32px;
`;

export const InformationRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

export const DescriptionContainer = styled(Column)`
  padding-top: 32px;

  @media (max-width: 768px) {
    padding-bottom: 32px;
  }
`;

export const BookTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  line-height: 40px;
  text-align: left;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BookAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookLabels = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  line-height: 20px;
  text-align: left;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.darkslategray};
`;

export const BookDetails = styled.span`
  color: ${({ theme }) => theme.colors.darkgray};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  line-height: 20px;
  text-align: justify;
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'unset')};
`;
