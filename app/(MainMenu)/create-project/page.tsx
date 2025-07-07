// app/(MainMenu)/create-project/page.tsx
import { Suspense } from "react";
import ClientOnlyCreateProject from "./ClientOnlyCreateProject";

export default function CreateProjectPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading Create Project...</div>}>
      <ClientOnlyCreateProject />
    </Suspense>
  );
}
