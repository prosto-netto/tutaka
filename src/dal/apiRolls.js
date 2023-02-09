import ROLLS from '../rolls/rolls.json';

export const apiCategory = category => new Promise(resolve => {
	let { rolls, count } = ROLLS.categories[category]

	return (
		resolve(
			{
				pagesCount: count,
				roll: rolls[1],
				titles: Object.keys(rolls).map(key => rolls[key].title)
			}
		)

	)
})

export const apiRoll = (category, rollNumber) => new Promise(resolve => (
	resolve(
		{ roll: ROLLS.categories[category].rolls[rollNumber] }
	)
))
export const apiLinks = () => new Promise(resolve => resolve(ROLLS.links))