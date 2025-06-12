import BackgroundImage from "./BackgroundImage";

interface LayoutProps {
  bg: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, bg }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden z-0">
      <BackgroundImage bg={bg} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
