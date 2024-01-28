import { type LucideProps } from "lucide-react";

export const Icons = {
	yc: (props: LucideProps) => {
		return (
			<svg viewBox="4 4 188 188" xmlns="http://www.w3.org/2000/svg" {...props}>
				<title>Y Combinator</title>
				<path d="m4 4h188v188h-188z" fill="#f60" />
				<path
					d="m73.2521756 45.01 22.7478244 47.39130083 22.7478244-47.39130083h19.56569631l-34.32352071 64.48661468v41.49338532h-15.98v-41.49338532l-34.32352071-64.48661468z"
					fill="#fff"
				/>
			</svg>
		);
	},
	triangle: (props: LucideProps) => {
		return (
			<svg
				height="32"
				viewBox="0 0 32 16"
				width="32"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<title>triangle</title>
				<path d="m2 27 14-29 14 29z" fill="#999" />
			</svg>
		);
	},
};
