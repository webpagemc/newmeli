import bcrypt from "bcrypt";

export const bcryptHelper = {

    encrypt: (password) => {

        const hashPassword = bcrypt.hashSync(password, 10);
        return hashPassword;

    },

    compare: (password, hashPassword) => {

        const verification = bcrypt.compareSync(password, hashPassword);
        return verification;

    }

};
