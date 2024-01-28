import Stories from "@/components/stories";
import { fetchData } from "@/server/actions";

export default async function Home() {
	const storyIds = await fetchData("topstories");
	console.log("-----------------storyIds: ", storyIds);

	return (
		<main className="flex min-h-screen flex-col justify-between px-2">
			<Stories page={1} storyIds={storyIds} />
		</main>
	);
}
