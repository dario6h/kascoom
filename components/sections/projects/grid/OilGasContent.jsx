'use client';

import ProjectCard from './ProjectCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function OilGasContent() {
  const { tObj } = useTranslation();
  const projects = tObj('projects.oilGas') || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
