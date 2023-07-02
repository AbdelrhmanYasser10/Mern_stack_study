const Ajv = require("ajv").default;

const schema = {
    "type": "object",
    "properties": {

        "fn": {
            "type": "string",
            "pattern": "^[A-Z][a-z]*$"
        },
        "ln": {
            "type": "string",
            "pattern": "^[A-Z][a-z]*$"
        },
        "dept": {
            "type": "string",
            "maxLength": 4,
            "minLength": 2,
        },

    },
    "required": ["fn", "ln", "dept"],
};

const ajv = new Ajv();

module.exports = ajv.compile(schema);