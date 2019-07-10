import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      await User.create(req.body);

      res.json({ store: true });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  async update(req, res) {
    res.json({ update: true });
  }
}
export default new UserController();
