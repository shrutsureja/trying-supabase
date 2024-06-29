'use client';

import { Button } from '../ui/button';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const JoinRoom = () => {
	const [roomID, setRoomID] = useState<string | null>(null);
	const router = useRouter();
	return (
		<>
			<Dialog>
				<DialogTrigger>Join A Room</DialogTrigger>
				<DialogContent>
					<DialogTitle>Join A Room</DialogTitle>
					<DialogHeader>Enter the room-id to join the room</DialogHeader>
					<DialogDescription>
						<Input
							type="text"
							placeholder="Enter the Room ID"
							onChange={(e) => setRoomID(e.target.value)}
						/>
					</DialogDescription>
					<DialogFooter>
						<Button
							onClick={() => {
								//check if the roomid exists or not
								if (roomID) {
									router.push(`/${roomID}`);
								} else {
									toast.error('Please Enter the Room ID');
								}
							}}
						>
							Submit
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};
export default JoinRoom;
