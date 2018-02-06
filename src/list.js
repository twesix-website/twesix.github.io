const musicList=[];
export default musicList

const baseUrl = 'https://api.twesix.cn/music'
const playListId = 971042549

const getPlayList = async function(id)
{
    const result = await $.getJSON(`${baseUrl}/playlist/detail?id=${playListId}`)
    const list = []
    result.playlist.tracks.forEach(function(music)
    {
        list.push
        (
            {
                id: music.id,
                name: music.name,
            }
        )
    })
    return list
}
const getMusicUrl = async function(id)
{
    const result = await $.getJSON(`${baseUrl}/music/url?id=${id}`)
    return result.data[0].url
}

export { getMusicUrl }

async function init()
{
    const playlist = await getPlayList(playListId)
    playlist.forEach(function(music)
    {
        musicList.push(music)
    })
    console.log(musicList)
}

setTimeout(function()
{
    init()
}, 3000)