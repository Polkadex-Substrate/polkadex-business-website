export const defaultStyles = {
  popover: (e: any) => ({
    ...e,
    background: "var(--semi-color-bg-2)",
    borderRadius: 10
  }),
  badge: (e: any) => ({
    ...e,
    background: "var(--semi-color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    fontSize: 12
  }),
  close: (e: any) => ({
    ...e,
    position: "absolute",
    top: 0,
    right: 0,
    color: "white",
    width: 30,
    heigh: 30,
    padding: 10,
    borderRadius: 100
  })
}
