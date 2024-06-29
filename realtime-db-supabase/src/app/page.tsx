import JoinRoom from '@/components/JoinRoom';
import CreateRoom from '@/components/CreateRoom';

export default function Home() {
	return (
		<main className="h-screen w-full gap-5 flex flex-col justify-center items-center">
			<CreateRoom />
			<JoinRoom />
		</main>
	);
}
