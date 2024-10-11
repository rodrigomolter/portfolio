import { CardHover } from "@/app/components/ui/card-hover"
import { ProjectParams } from "@/data/info"

export function SimilarProjects({ projects }: { projects: ProjectParams[] }) {
  return (
    <div className="py-12 md:px-6">
      <p className="text-3xl pb-4">Veja outros projetos parecidos:</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {projects.map(({ name, url, xsimage, video }: ProjectParams) => (
          <CardHover
            key={name}
            title={name}
            src={url}
            image={xsimage}
            // video={video}
          />
        ))}
      </div>
    </div>
  )
}
