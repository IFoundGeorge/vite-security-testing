import { createFileRoute, Outlet } from '@tanstack/react-router';


export const Route = createFileRoute('/playground')({
  component: AppLayoutComponent,
  loader: () => {
    if (!import.meta.env.DEV) {
      throw new Response("Not Found", { status: 404 });
    }
  },
});

function AppLayoutComponent() {
  return (
    <div className="flex w-full">
      <Outlet />
    </div>
  )
}