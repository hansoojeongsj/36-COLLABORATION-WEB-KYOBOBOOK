import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const Wrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  background-color: ${theme.colors.white};
  padding-bottom: 8.55rem;
`;

const Header = (theme: Theme) => css`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  background-color: ${theme.colors.white};
  padding: 0 2.4rem 0 1.4rem;
  z-index: ${theme.zIndex.two};
`;

const headerTop = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.8rem;
`;

const leftButtons = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const iconButton = css`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cartTitle = (theme: Theme) => css`
  font: ${theme.fonts.title3};
  color: ${theme.colors.black1};
`;

const switchButton = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border: none;
  background-color: ${theme.colors.white};
  font: ${theme.fonts.body2};
  color: ${theme.colors.purple6};
  cursor: pointer;
`;

const subHeader = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background-color: ${theme.colors.white};
`;

const checkArea = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font: ${theme.fonts.body2};
  color: ${theme.colors.black1};
`;

const iconGroup = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const iconOnly = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  padding: 0.4rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 0.3rem;
  cursor: pointer;
`;

const tabChipWrapper = (theme: Theme) => css`
  border-top: 1px solid ${theme.colors.gray2};
  padding: 1.75rem 1.5rem;
`;

const kyoboChip = (theme: Theme) => css`
  padding: 0.7rem 1.2rem;
  font: ${theme.fonts.caption3};
  color: ${theme.colors.gray5};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 3rem;
  cursor: pointer;
`;

const placeButton = (theme: Theme) => css`
  display: flex;
  align-items: center;
  font: ${theme.fonts.caption3};
  color: ${theme.colors.black1};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  cursor: pointer;
`;

const Body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 1.2rem 0rem;
  background-color: ${theme.colors.white};
`;

const emptpyContainer = css`
  height: 5.8rem;
`;

export const HomeBestDetailCartStyle = {
  Wrapper,
  Header,
  headerTop,
  leftButtons,
  iconButton,
  cartTitle,
  switchButton,
  subHeader,
  checkArea,
  iconGroup,
  iconOnly,
  tabChipWrapper,
  placeButton,
  kyoboChip,
  Body,
  emptpyContainer,
};
