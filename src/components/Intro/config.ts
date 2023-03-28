export const defaultStyles = {
  popover: (e: any) => ({
    ...e,
    padding: 0,
    margin: 0,
    background: 'transparent',
  }),
  badge: (e: any) => ({
    ...e,
    background: 'var(--semi-color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    fontSize: 12,
  }),
  close: (e: any) => ({
    ...e,
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'white',
    width: 30,
    heigh: 30,
    padding: 10,
    borderRadius: 100,
  }),
};
