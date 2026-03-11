@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand: #f55d0e;
  --brand-dark: #d44206;
  --ink: #1a0f00;
  --paper: #fdf8f3;
}

* {
  -webkit-tap-highlight-color: transparent;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--paper);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

@layer utilities {
  .text-ink { color: var(--ink); }
  .bg-paper { background-color: var(--paper); }
}
