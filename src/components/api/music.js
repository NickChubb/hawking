/**
 * Class for any API functions which interact with server for music related commands.
 */

import { homepage } from '../../../package.json';

// Fetch list of events from server. 
export const fetchMusicInfo = async () => {
    let res = await fetch(`${homepage}/api/music/getMusicInfo`);
    let data = await res.json();
    // console.log(data);
    return data;
}