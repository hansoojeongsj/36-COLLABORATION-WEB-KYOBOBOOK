import { css, type Theme } from '@emotion/react';

const buttonStyle = (active: boolean, theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7.4rem;
  height: 6.4rem;
  gap: 0.333rem;
  border-radius: 8px;
  border: ${active ? `1px solid ${theme.colors.green1}` : `1px solid ${theme.colors.gray2}`};
  background-color: ${active ? theme.colors.green1 : theme.colors.white};
`;

const iconStyle = (active: boolean, theme: Theme) => css`
  display: flex;
  margin-top: 0.333rem;
  color: ${active ? theme.colors.white : theme.colors.gray4};
`;

const labelStyle = (active: boolean, theme: Theme) => css`
  color: ${active ? theme.colors.white : theme.colors.gray6};

  ${theme.fonts.caption3};
`;

export { buttonStyle, iconStyle, labelStyle };
