import type { ArtboardDocument } from "@dotforge/core";

export default function SampleArtboard(): ArtboardDocument {
	return {
		width: 50,
		height: 30,
		elements: [
			{
				type: "text",
				x: 5,
				y: 10,
				text: "Hello DotForge",
				fontSize: 3,
			},
		],
	};
}
