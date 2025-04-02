const validate = (requiredFields, data) => {
    
    for (const field of requiredFields) {
        if (!data[field]) {
            return field;
        }
    }

    return null;
}

export default validate