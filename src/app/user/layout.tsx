export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>User page</h1>
      {children}
    </>
  );
}
