type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="bg-transparent inset-0">{children}</div>;
}

export default Layout;
