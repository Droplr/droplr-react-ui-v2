import React from "react";
import styled, { css } from "styled-components";
import { darkTheme } from "../../themes/themes";

export interface LoaderProps { };
const Loader = ({}: LoaderProps) => {
    return (
        <StyledLoader>
            <div className="drui-loader" />
        </StyledLoader>
    )
};

const StyledLoader = styled.div(
    ({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .drui-loader {
      height: 16px;
      width: 16px;
      border: 3px solid ${theme.loader.backgroundColor};
      border-right-color: transparent !important;
      border-radius: 50%;
      animation: rotate 0.8s infinite linear;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .theme--dark {
      .drui-loader {
        border: 3px solid ${darkTheme.loader.backgroundColor};
      }
    }
  `);

export default Loader;