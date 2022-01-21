import { API_KEY, BASE_URL } from "../../script";

const getData = async (url) => {
    let data = await fetch (url);

    if(!data.ok) {
        throw new Error(`Could nod fetch ${url}, status: ${data.status}`)
    }

    return await data.json();
}

const getInfo = async (id) => {
    let info = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}`)

    if(!info.ok) {
        throw new Error(`Could nod fetch ${id}, status: ${info.status}`)
    }

    return await info.json();
}

const getVideo = async (id) => {
    let videos = await fetch(`${BASE_URL}/movie/${id}/videos?${API_KEY}`)
    
    if(!videos.ok) {
        throw new Error(`Could nod fetch ${id}, status: ${videos.status}`)
    }

    return await videos.json();
}

export {getData, getInfo, getVideo};