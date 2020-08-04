import Mark from '../models/Mark';

class MarkController {
  async index(req, res) {
    try {
      const marks = await Mark.findAll({
        attributes: ['uid', 'name'],
      });

      return res.json({ marks });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const marks = await Mark.findByPk(uid);

      return res.json({ marks });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const marks = await Mark.create(req.body);

      return res.json({ marks });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [updated] = await Mark.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('marca não encontrado');
      }

      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Mark.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('marca não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new MarkController();
