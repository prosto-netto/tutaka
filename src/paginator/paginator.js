const pageDigits = pagesCount => {
	let pages = []
	for (let i = 0; i < pagesCount; i++) pages.push(i + 1)
	return pages
}

export const paginator = pagesCount => [0, ...pageDigits(pagesCount), 0]