const layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
};

export default layout;
