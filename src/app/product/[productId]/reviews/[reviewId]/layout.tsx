const getRandomNumber = (num: number): number => {
  return Math.floor(Math.random() * num);
};
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  if (getRandomNumber(2) == 1) {
    throw new Error("Error in layout component");
  }
  return (
    <div>
      <h3>Review info</h3>
      {children}
    </div>
  );
};

export default layout;
