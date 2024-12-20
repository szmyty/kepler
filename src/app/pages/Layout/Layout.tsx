import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        {children} {/* Renders children passed to Layout */}
      </main>
      <footer>© 2023 My App</footer>
    </div>
  );
};

export default Layout;
