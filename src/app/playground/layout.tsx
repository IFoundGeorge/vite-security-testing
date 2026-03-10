import { redirect } from 'next/navigation';
import { ReactElement } from 'react';

export default function PlaygroundPage({ children }: { children: ReactElement }) {
  if (process.env.NODE_ENV === 'production') {
    redirect('/');
  }

  return (
    <div className="flex w-full">
      {children}
    </div>
  );
}