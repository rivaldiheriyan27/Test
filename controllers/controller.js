const { List } = require("../models");

class listController {
  static async getList(req, res, next) {
    try {
      const listData = await List.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(listData);
    } catch (err) {
      next(err);
    }
  }

  static async getListId(req, res, next) {
    try {
      const { id } = req.params;

      const listDataId = await List.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json(listDataId);
    } catch (err) {
      next(err);
    }
  }

  static async postList(req, res, next) {
    try {
      const { nik, fullName, place, dateBirth } = req.body;
      let input = { nik, fullName, place, dateBirth };

      await List.create(input);

      res.status(201).json({
        message: "Data berhasil di input",
      });
    } catch (err) {
      next(err);
    }
  }

  static async putList(req, res, next) {
    try {
      const { id } = req.params;
      const { nik, fullName, place, dateBirth } = req.body;

      const dataList = await List.findByPk(id);

      if (!dataList) {
        throw { name: "NotFound" };
      }

      let input = {
        nik,
        fullName,
        place,
        dateBirth,
      };

      let update = await List.update(input, {
        where: {
          id,
        },
      });

      res.status(201).json({ message: "Data berhasil diubah" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteList(req, res, next) {
    try {
      const { id } = req.params;

      const destroyList = await List.findByPk(id);

      if (!destroyList) {
        throw { name: "NotFound" };
      }

      let dataDestroy = await List.destroy({
        where: { id },
      });

      res.status(200).json({ message: "Data berhasil di hapus" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = listController;
