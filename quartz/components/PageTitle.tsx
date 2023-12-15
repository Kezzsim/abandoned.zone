import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 data-animated-heading={title} class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
h1::before, h1::after {
	content: attr(data-animated-heading);
	position: absolute;
	top: 0;
	left: 0;	
}
h1::before {
  filter: hue-rotate(25deg);
	clip-path: polygon(0% 100%, 100% 100%, 100% 60%, 0 68%)
}
@keyframes slide {
	0% {
		transform: translateX(0);
	}
	50% {
		transform: translate(-16px, 1%);
	}
}
h1::after {
	clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 66%);
	animation: slide 5s infinite;
}
.page-title {
  margin: 0;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.page-title a {
  color: transparent;
  display: flex;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
