const removeDuplicates = arrayWithDuplicates => {
	return arrayWithDuplicates.reduce((accumulated, current) => {
		if (accumulated.includes(current)) return accumulated
		return [...accumulated, current]
	}, [])
}

module.exports = removeDuplicates