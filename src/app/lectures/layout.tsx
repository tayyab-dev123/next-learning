const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h3>Lecture info</h3>
      {children}
    </div>
  );
};

export default layout;
