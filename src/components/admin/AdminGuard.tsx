// Auth restriction removed — AdminGuard is now a passthrough.
export const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
