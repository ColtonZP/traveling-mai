export type Video = {
	id: string
	snippet: Snippet
	resourceId: ResourceId
}

type Snippet ={
	title: string
	description: string
	thumbnails: Thumbnails
}

type Thumbnails = {
	maxres: MaxRes
}

type MaxRes = {
	url: string
}

type ResourceId = {
	videoId: string
}
