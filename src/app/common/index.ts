

export function RandomNumber(min: number = 0, max: number = 1): number {
	const random = Math.random();
	const range = max-min;
	const notRound = random * range + min;
	console.log('random', {random, range, notRound});
	return notRound;
}

export function RandomInt(min: number = 0, max: number = 1): number {
	const notRound = RandomNumber(min, max);
	return Math.round(notRound);
}
