export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return items.map(c => {
		if(c[objPropName] === itemId) {
			return {...c, followed: newObjProps};
		}
		return c;
	});
};
