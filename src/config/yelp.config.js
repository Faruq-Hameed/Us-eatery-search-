import axios from "axios";

export default axios.create({
    headers:{
        Authorization: "Bearer qPfDJ6ud7FVwC49tVAiI83NvA-JJIwDhaLdorGwBi5p1MiPY7QpuvX6t7HUZb_ANwIV_kIb1OhYKMBUaoScojybFUe3Coc70OYQ3gVgm5GhpxxX4irdoUmOJ1iJxZ3Yx",
    },
    baseURL: 'https://api.yelp.com/v3/businesses'
})