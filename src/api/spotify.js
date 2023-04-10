    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQA7rTOJ5iKVebktDNMrB1YjFDxioxFFVEa02HiAShK9smv1LLXXkh2I8VCFAuFp9knhhwq1nGgtrN8AjgwkiVv0DFAFh7MwFmaC4oPQauR-RU7caRkslHEw55byscNrNybhJMRg9LqI4VhC_eFbdOQCdK-rRLD8q7x9GcJKG6Kslk-hbgaKJebuxxoCapaSsHFwVZL2QloOC0u3d35dQvrGhPSwjNynPVYQiM63NkOPRz6r7_PPnXNxcl1qJ8JBaBH9kbkRDeWcUk_8n6AIXmstD8i7BMYSk1EJ7NVlvJecB_b5anf-Wbre5dwI_wvZlH4LD0yB7FP003GwwBk5NWKFVC1B9qJ6_Ekrz8JL3V_rX4Q';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);