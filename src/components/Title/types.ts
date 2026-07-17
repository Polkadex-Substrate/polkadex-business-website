type Props = {
  tag?: string;
  title: string;
  highlight: string;
  description?: string;
  position?: 'left' | 'center' | 'right';
  /** Heading level — use "h1" when this Title is the page's lead heading. */
  headingAs?: 'h1' | 'h2';
};

export default Props;
