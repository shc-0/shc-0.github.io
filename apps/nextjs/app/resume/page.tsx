import { Contact, Experience, Name, ProjectItem, Skills } from "./components"
import {
	BIRDVIEW_PROJECTS,
	HARD_SKILLS,
	MONO_PROJECTS,
	SOFT_SKILLS,
	WORK_EXPERIENCE,
} from "./components/data"

export default function ResumePage() {
	return (
		<div className="absolute grid place-items-center p-12 left-0 top-0 w-screen h-screen">
			<article
				style={{
					fontFamily: "Gothic A1, sans-serif",
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					gridAutoRows: "min-content",
				}}
				className="relative mx-auto w-[calc(100ch_+_110px)] max-h-[141ch] aspect-[1000/1414]"
			>
				<div className="col-start-1 col-end-13 row-start-1 row-end-2 flex justify-between items-center h-min">
					<Name />
					<Contact />
				</div>
				<div className="col-start-8 border col-end-13 row-start-2 place-self-stretch w-full h-min text-sm p-8 pt-12 pb-20 mt-20">
					<h3 className="mb-6">Hard Skills</h3>
					<Skills items={HARD_SKILLS} />
					<h3 className="mt-20 mb-6">Soft Skills</h3>
					<Skills items={SOFT_SKILLS} />
				</div>
				<div className="row-start-8 col-start-1 col-span-7 flex flex-col gap-8 h-min pr-6">
					<h2 className="m-0 my-8">Work Experiences</h2>
					<Experience {...WORK_EXPERIENCE[0]} />
					<Experience {...WORK_EXPERIENCE[1]} />
				</div>
				<hr className="col-span-full m-0 my-8" />
				<div className="col-span-full m-0 my-8">
					<h3 className="m-0 p-0 my-6">주요 프로젝트</h3>
					<div className="flex flex-col gap-10">
						{MONO_PROJECTS.map((project) => (
							<ProjectItem key={project.title} {...project} />
						))}
					</div>
					<div className="flex flex-col gap-10">
						{BIRDVIEW_PROJECTS.map((project) => (
							<ProjectItem key={project.title} {...project} />
						))}
					</div>
				</div>
				<hr className="col-span-full" />
			</article>
		</div>
	)
}
