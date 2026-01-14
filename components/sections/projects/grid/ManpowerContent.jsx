'use client';

import ProjectCard from './ProjectCard';
import { useTranslation } from '@/hooks/useTranslation';

export default function ManpowerContent() {
  const { tObj } = useTranslation();
  const projects = tObj('projects.manpower') || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
