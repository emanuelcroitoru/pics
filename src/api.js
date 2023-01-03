import axios from "axios";
const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers:
			{
				Authorization: 'Client-ID ed981246de8b8565d9dd951d41642f4058e8eff0ac214999764af53d558e038b'
			},
		params: {
			query: term
		}
	})

	return response.data.results;
}

export default searchImages;