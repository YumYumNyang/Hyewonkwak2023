import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/notion/getAllPosts";
import { Post } from "@/types/notion";

export default function Home() {
	return (
		<main>
			<h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
				Taxing Laughter: The Joke Tax Chronicles
			</h1>
			<Button variant="outline">Button</Button>
		</main>
	);
}
