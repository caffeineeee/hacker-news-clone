import Link from "next/link";
import Story from "./story";

import { fetchData } from "@/server/actions";
import { transform } from "@/utils/get-item";

async function StoryWithData({ id }) {
	const data = await fetchData(`item/${id}`);
	const story = transform(data);

	return <Story {...story} />;
}

export default async function Stories({ storyIds, page = 1 }) {
	const limit = 30;
	const offset = (page - 1) * limit;

	return (
		<div className="mb-auto mt-1">
			{storyIds.slice(offset, offset + limit).map((id, i) => (
				<div key={id} className="flex">
					{null != offset ? (
						<span className="text-[10pt] text-[#757575]">
							{i + offset + 1}.
						</span>
					) : null}
					<StoryWithData id={id} key={id} />
				</div>
			))}
			<Link href={`/news/${+page + 1}`} className="text-[10pt] ml-8">
				More
			</Link>
		</div>
	);
}
