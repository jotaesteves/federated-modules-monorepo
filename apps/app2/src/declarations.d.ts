// to be able to import jpg/jpeg/png files
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

// to be able to import CSS files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// to be able to import CSS files as strings (for regular CSS imports)
declare module '*.css?raw' {
  const content: string;
  export default content;
}
