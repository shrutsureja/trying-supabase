'use client';
import { Button } from '../ui/button';
import { v4 as uuidv4 } from 'uuid';
import { client } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const CreateRoom = () => {
	const router = useRouter();
	const generateNewRoom = async () => {
		const roomid = uuidv4();
		const channelA = client.channel(roomid, {
			config: {
				broadcast: { ack: true },
			},
		});
		channelA.subscribe(async (status) => {
			if (status !== 'SUBSCRIBED') {
				return;
			}

			const serverResponse = await channelA.send({
				type: 'broadcast',
				event: 'acknowledge',
				payload: {},
			});

			console.log('serverResponse', serverResponse);
			toast.success('Room has been created');
			router.push(`/room/${roomid}`);
		});
	};
	return (
		<Button className="max-w-sm w-1/2" onClick={generateNewRoom}>
			Generate a New Room
		</Button>
	);
};

export default CreateRoom;
