import axios from "axios";

export default axios.create({
    headers:{
        Authorization: "Bearer ymfuM3qxeBYFstLFIMpdYRQJHlIkVAF34dNhFvc-jAwq9GO612qvqbtcTFN4aTk4Jr3MSZAiw8v_rUClbz6rS_7kWSk4DlB_nIzuaQ2ZWZxnV1qpfT2PJOpIxPRqZ3Yx",
    },
    baseURL: 'https://api.yelp.com/v3/businesses'
})