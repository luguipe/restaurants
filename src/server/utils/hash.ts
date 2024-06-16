import * as bcrypt from 'bcrypt';

export const createHash = (password: string, saltSize = 10) => {
    const salt = bcrypt.genSaltSync(saltSize);
    const hash =  bcrypt.hashSync(password, salt);

    return hash;
};

export const compareHash = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};  