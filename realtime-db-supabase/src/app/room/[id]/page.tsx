'use client';

import { client } from '@/lib/supabaseClient';

const page = ({ params }: { params: { id: string } }) => {
	const allchannels = client.getChannels();
	console.log(allchannels);

	return <div>Room {params.id}</div>;
};
export default page;
