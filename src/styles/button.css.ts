import {
  BIGBORDER,
  DANGER,
  PRIMARY_1,
  PRIMARY_2,
  SCALEIN,
  SCALEOUT,
  SMALLBLUR,
  WARNING,
} from "../constants";
import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  fontSize: "1.2rem",
  border: "none",
  background: "none",
  color: "white",
  fontWeight: "bold",
  padding: "0.6rem 1.4rem",
  userSelect: "none",
  cursor: "pointer",
  borderRadius: BIGBORDER,
  transition: "transform 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      transform: SCALEIN,
    },
    "&:active": {
      transform: SCALEOUT,
    },
  },
});

export const primaryButton = style([
  button,
  {
    background: `linear-gradient(156deg, ${PRIMARY_1} 0%, ${PRIMARY_2} 100%)!important`,
    padding: "0.7rem 1.4rem",
    boxShadow: `0px 5px 20px 0px ${PRIMARY_1}33`,
    selectors: {
      "&:hover": {
        boxShadow: `0px 5px 25px 0px ${PRIMARY_1}39`,
      },
      "&:active": {
        boxShadow: `0px 5px 25px 0px ${PRIMARY_1}29`,
      },
    },
  },
]);

export const dangerButton = style([
  button,
  {
    background: `linear-gradient(156deg, ${DANGER} 0%, ${DANGER} 100%)!important`,
    padding: "0.7rem 1.4rem",
    borderRadius: "10px",
    boxShadow: `0px 5px 20px 0px ${DANGER}33`,
    selectors: {
      "&:hover": {
        boxShadow: `0px 5px 25px 0px ${DANGER}39`,
      },
      "&:active": {
        boxShadow: `0px 5px 25px 0px ${DANGER}29`,
      },
    },
  },
]);

export const warningButton = style([
  button,
  {
    background: `linear-gradient(156deg, ${WARNING} 0%, ${WARNING} 100%)!important`,
    padding: "0.7rem 1.4rem",
    borderRadius: "10px",
    boxShadow: `0px 5px 20px 0px ${WARNING}33`,
    selectors: {
      "&:hover": {
        boxShadow: `0px 5px 25px 0px ${WARNING}39`,
      },
      "&:active": {
        boxShadow: `0px 5px 25px 0px ${WARNING}29`,
      },
    },
  },
]);

export const transparentButton = style([
  button,
  {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "0.7rem 1.4rem",
    borderRadius: "10px",
    border: "3px solid transparent",
    selectors: {
      "&:hover": {
        transform: SCALEIN,
      },
      "&:active": {
        transform: SCALEOUT,
      },
    },
  },
]);

export const backButton = style({
  background: "rgba(49, 50, 56, 0.9)",
  borderRadius: "100px",
  transition: "all 0.1s",
  cursor: "pointer",
  backdropFilter: SMALLBLUR,
  zIndex: "1",
  selectors: {
    "&:hover": {
      background: "rgba(49, 50, 56, 0.9)",
      transform: SCALEIN,
    },
    "&:active": {
      transform: SCALEOUT,
    },
  },
});
