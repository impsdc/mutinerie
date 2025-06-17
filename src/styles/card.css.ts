export const CARD_WIDTH = "400px";
export const CARD_HEIGHT = "450px";

export const ModalWrapper: React.CSSProperties = {
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  zIndex: 1000,
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  overflowY: "auto",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
};

export const ModalContent: React.CSSProperties = {
  maxWidth: CARD_WIDTH,
  margin: "0 auto",
  padding: "0 1rem",
};

export const ModalOverlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
  zIndex: 999,
  opacity: 0.5,
};
