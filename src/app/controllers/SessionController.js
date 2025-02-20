import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body

        //Verifing if email exists
        const user = await User.findOne({ where: { email } });
        if(!user){
            return res.status(401).json({ error: 'User not exists.' })
        }

        //verifing if password isnt the same of hash created on postgree
        if( !(await user.checkPassword(password)) ){
            return res.status(401).json({ error: 'Wrong password'});
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();