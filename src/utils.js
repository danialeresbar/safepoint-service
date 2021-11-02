const { error, log } = console;

const allowedPropType = ['residential', 'condominium'];
const allowedPropWhoLive = ['owner', 'tenant'];

const getBusinessType = (inPropertyType, inOccupiedBy) => {

	if (!allowedPropType.includes(inPropertyType)) {
		throw new Error(`Carrier Validation: Property type is not valid: ${inPropertyType}`);
	}

	const occupiedBy = inOccupiedBy == '' ? 'owner' : inOccupiedBy;

	if (!allowedPropWhoLive.includes(occupiedBy)) {
		throw new Error(`Carrier Validation: Occupied is not valid: ${occupiedBy}`);
	}

	if (inPropertyType == 'residential') {
		return occupiedBy == 'owner' ? 'HO3' : 'DP3';
	}

	return 'HO6';
};

const decodeBase64 = (value) => {
    const buff = Buffer.from(value, 'base64');
    return buff.toString('ascii');
}

const writeJsonFile = async (path, fileName, objectContent) => {
    try {
        const fs = require('fs').promises;
        const jsonString = JSON.stringify(objectContent)
        await fs.writeFile(`${path}/${fileName}`, jsonString);

    } catch (err) {
        throw new Error(`Error writting file `, err.message);
    }
}

module.exports = {
	decodeBase64,
	getBusinessType,
	writeJsonFile
};
